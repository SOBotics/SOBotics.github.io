---
layout: post
title: "Connecting my bot to Higgs"
date: 2018-07-01
comments: false
---

# Higgs

Higgs is a generic dashboard for viewing and providing feedback to bots found in SOBotics. It originated along side [Boson](https://github.com/SOBotics/Boson) - a framework for creating SOBotics bots. This blog post will run you through how to setup your own bot, and integrate it with Higgs.

## Setting up a dashboard

Bot setup is now entirely self-service! If you're not already a bot owner, you'll need to ask a Higgs admin to grant your account bot privileges. Once that's done, you'll be able to create a new bot yourself.

1. You should now see an 'Admin' dropdown in the top left of Higgs:

   [![enter image description here][1]][1]

2. Clicking 'Bots' will bring you to the bot management page. Here, you'll see all bots owned by yourself. Admins are able to see and edit every bot. From here, you're also able to create a new bot:

    [![enter image description here][2]][2]

3. When creating a new bot, you'll be presented with the following page:

    [![enter image description here][3]][3]

    The following fields are required: 

    1. The name of the bot
    2. The dashboard name
    3. The description of the bot
    4. The secret   
    5. Optionally, you may also enter:

    - A link to the homepage of the bot.
    - A link to the bot's logo.
    - A favicon. This will change the page's favicon when viewing one of your bots reports. Must point to a URL.
    - Tab Title. This will change the page's title when viewing one of your bots

2. Once you've submitted your bot, you'll need to setup the feedback types. You can manage this from the `/admin/bots` page as shown above.

3. You'll be presented with the following page:

    [![enter image description here][4]][4]

    - Name: The name of the feedback. This is what will be rendered on buttons for reviewers.
    - Colour: A browser-supported colour string. Hex or named colours are supported. Styles the colour of the feedback button, as well as the icon
    - Icon: An icon to represent already cast feedback. It's simply a string, and can technically be anything, but we recommend using a unicode character.
    - Actionable: Whether or not this type of feedback is counted when putting reports into the review queue
    - Enabled: Whether or not this type of feedback is allowed to be cast by a review.

## Getting started in code

Higgs uses [swagger](https://swagger.io/) to document its API. A benefit of this is that boilerplate API code can be [automatically generated](https://github.com/swagger-api/swagger-codegen).  Here's an example [script](https://github.com/SOBotics/Higgs/blob/master/GenerateUIAPI.bat) being used to generate the API structure for Higg's frontend.

Note that the above is entirely optional. Generating the boilerplate is a nice-to-have, and not required. If you'd like to implement the API calls yourself, you can see the available endpoints [here](http://45.77.238.226/swagger/), as well as what security is required for each call.

Here's an example of a bot authenticating itself, and then sending feedback for a user:

    // Point the API to Higgs
    const string basePath = "http://45.77.238.226";
    
    var botApi = new BotApi(basePath);
    
    // Here, 1 is the ID of your bot. This makes a POST request to /bot/AquireToken
    var tokenResponse = botApi.BotAquireTokenPost(1, "THIS IS MY SECRET KEY");
    
    // Now we've got the bot's access token, we need to configure our API to add it to future requests
    // If you're not using swagger gen, you need to ensure future api requests add the following header:
    // Authorization: Bearer [token]
    botApi = new BotApi(new Configuration
    {
        BasePath = basePath,
        AccessToken = tokenResponse.Token
    });
    
    // Example request after the bot has been authenticated
    botApi.BotRegisterUserFeedbackPost(new RegisterUserFeedbackRequest(5, 1, "False Positive"));

The access token is a [JWT token](https://jwt.io/), and is currently valid for 7 days. Bots will be able to decode the token to inspect what scopes (permissions) it has been granted, and when the token expires.


  [1]: {{ site.baseurl }}/images/2018-07-01-connecting-to-higgs/1.png
  [2]: {{ site.baseurl }}/images/2018-07-01-connecting-to-higgs/2.png
  [3]: {{ site.baseurl }}/images/2018-07-01-connecting-to-higgs/3.png
  [4]: {{ site.baseurl }}/images/2018-07-01-connecting-to-higgs/4.png
