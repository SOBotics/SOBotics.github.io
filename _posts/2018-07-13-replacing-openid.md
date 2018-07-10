# Stack Exchange will remove OpenID - What can we do?

As you might have heard, [Stack Exchange will remove OpenID on July 25](https://meta.stackexchange.com/q/307647/347985). Since our bots depend on OpenID in order to login to chat, we had to reverse engineer the new login.

Let's have a look at our Java library chatexchange, to show you how the new login works:

## Step 0: Prepare to store cookies
We'll need to store some of the cookies we receive when logging in. In our case, we're using a `HashMap<String, String>`. We pass it to our own `HttpClient`. If you implement this on your own, make sure you store all the cookies and send them along with your requests!

## Step 1: Get the login form
Every site in the Stack Exchange network (except stackexchange.com itself. We'll discuss that later) should now have this new login form located at `/users/login`:

![login screen](https://camo.githubusercontent.com/ddfe5031e6b1ab0a95c2f98193cb1e215f5b09b7/68747470733a2f2f692e737461636b2e696d6775722e636f6d2f78707a6b4b2e706e67)

Along with the fields for email and password, it has a hidden field called `fkey`, which is filled with a server generated value.
We need to post this key along with the credentials. That's why we have to do a `GET` request to `/users/login` first and read the `fkey`:

```java
Response response = httpClient.get("https://"+host+"/users/login", cookies);
String fkey = response.parse().select("input[name='fkey']").val();
```

## Step 2: Submit the form

Now we just need to post the credentials and the `fkey` to `/users/login`:

```java
response = httpClient.post("https://"+host+"/users/login", cookies, "email", email, "password", password, "fkey", fkey);
```


## Step 3: Check, if you're now logged in

To check if the login worked, we're sending a `GET`-request to `/users/current`, which redirects to you own profile. If we can find a HTML-element with the class `js-inbox-button` in the response, we're logged in.
Make sure, you send the cookies you've previously saved.

```java
Response checkResponse = httpClient.get("https://"+host+"/users/current", cookies);
if (checkResponse.parse().getElementsByClass("js-inbox-button").first() == null) {
	throw new IllegalStateException("Unable to login to Stack Exchange.");
}
```


## And now the edge cases...

Until this point, the implementation was quite easy and worked well for the Stack Overflow chat. And then there was chat.stackexchange.com...

### Login to chat.stackexchange.com

As I mentioned earlier, stackexchange.com is a special case. It does not have the login form, we know from other sites. To solve this problem, [thesecretmaster ♦](https://stackexchange.com/users/6270022/thesecretmaster) had [an idea](https://chat.stackoverflow.com/transcript/message/43180487#43180487). (actually two, but I prefer explaining the easy way ;-) )

meta.stackexchange.com has the same login as stackoverflow.com and the other sites. [thesecretmaster ♦](https://stackexchange.com/users/6270022/thesecretmaster) found out that we can simply use the cookies from meta.stackexchange.com and send them to chat.stackexchange.com.
To implement this, we just needed to send steps 1 and 2 to meta.SE and step 3 to stackexchange.com.


### What happens if the user does not have an account on the site he tries to use

With some accounts, our code just didn't work on chat.stackexchange.com. The problem was that since we now take a little detour, the user has to have an account on meta.SE. My bot didn't have one.
Creating an account is quite easy. The `POST`-request in step 2 will return a message and a button, if the user does not have an account yet. If we don't click that button, the user won't be logged in.

Identifying that we received that message is quite easy, although the ID of the `<form>`-element is not intuitive: `logout-user`

The more complicated problem is sending that form. Since we can't just click the element in Java and didn't know, which of the hidden fields in that form is acutally being used, we had to read them all and post the contents to the `action`-attribute of the element:

```java
Element formElement = response.parse().getElementById("logout-user");
if (formElement != null) {
  Elements formInputs = formElement.getElementsByTag("input");
  List<String> formData = new ArrayList<>();

  for (Element input : formInputs) {
    String key = input.attr("name");
    String value = input.val();

    if (key == null || key.isEmpty())
      continue;

    formData.add(key);
    formData.add(value);
  } // for formInputs

  String[] formDataArray = formData.toArray(new String[formData.size()]);

  String formUrl = "https://" + host + formElement.attr("action");

  Response formResponse = httpClient.post(formUrl, cookies, formDataArray);
  
  if (formResponse.parse().getElementsByClass("js-inbox-button").first() == null) {
    throw new IllegalStateException("Unable to create account on " + host + "! Please create the account manually.");
  } // if
} // if
```

If you have further questions about implementing this, feel free to [join us in our chatroom](https://sobotics.org/chat).
