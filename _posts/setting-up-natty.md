This is based entirely off of @BhargavRao's [answer](https://stackoverflow.com/c/sobotics/a/152/23) on Channels/Teams, but meant to be a complete walk-through to those who want to set it up but are not techies.

This is going to explain how to run a Natty instance, starting completely from scratch on a Ubuntu live boot. It should work for an installed version as well.

You can **follow the instructions to [run a live boot](https://tutorials.ubuntu.com/tutorial/tutorial-create-a-usb-stick-on-windows#0)** from a USB stick/CD/what have you.

After you've got the live boot up and running (which is no small task. At all), and made sure to connect it to the Internet, press the <kbd>super</kbd> key (AKA the Windows key if you're on a Windows computer), and type `terminal`. Then press <kbd>enter</kbd> to open it.

You should see something like this:

    ubuntu@ubuntu:~$

Congrats! You've gotten past the first stage, and you can now start to set things up.

Since a live boot (running from the USB) has nothing on it yet, we're going to need to install pretty much everything.

#Installing Java

For non-live-boot-running people, you can check if Java is installed by running this command:

    java -version

That should look like this when you run it:

    ubuntu@ubuntu:~$ java -version

The first "ubuntu" is the name of your user account, and the second is the name of the computer. So that could also be `mithrandir@barad-dur:~$ java -version`. The `ubuntu@ubuntu:~$` is what shows on a live boot.

If it's installed, you'll should get something like this:

    openjdk version "1.8.0_151"
    OpenJDK Runtime Environment (build 1.8.0_151-8u151-b12-0ubuntu0.16.04.2-b12)
    OpenJDK 64-Bit Server VM (build 25.151-b12, mixed mode)

The specifics will change depending on what version of Ubuntu it has, and whether it's 32-bit or 64-bit. My non-live-boot is running 64-bit Ubuntu 16.04, as you can see above.

If it's not installed, you'll get something like this:

    The program 'java' can be found in the following packages:
    * default-jre
    * openjdk-8-jre-headless
    * gcj-4.8-jre-headless (You will have to enable component called 'universe')
    * gcj-4.9-jre-headless (You will have to enable component called 'universe')
    * gcj-5-jre-headless (You will have to enable component called 'universe')
    * gcj-6-jre-headless (You will have to enable component called 'universe')
    * openjdk-9-jre-headless (You will have to enable component called 'universe')
    Try: sudo apt install <selected package>

We'll want to install either `openjdk-9-jre-headless` or `openjdk-8-jre-headless`. I've installed 8 in the following instructions.

The terminal has just told us what to do to install it, so let's follow those instructions:

    sudo apt-get install openjdk-8-jre-headless

If you're running on a non-live-boot, you'll be prompted to put in the password, like this:

    [sudo] password for mithrandir:

You type in your password and hit <kbd>enter</kbd>.

If you're running it on the live boot, it should tell you packages will be installed. It will then ask you if you want to continue, with a message like this:

    After this operation, 99.9 MB of additional disk space will be used.
    Do you want to continue? [Y/n]

Since we do want to continue, we'll type `y` and hit <kbd>enter</kbd>. That line should look like `Do you want to continue? [Y/n] y` after this.

If all goes well, your screen will fill with status and scroll down a lot. (A lot of `adding debian` repo *so and so* lines should show up.)

If you get an error "could not resolve 'archive.ubuntu.com'", then make sure you have an Internet connection. Make sure you're connected to WiFi (or Ethernet). Once your Internet is set up, run `sudo apt-get install openjdk-8-jre-headless` again. If that still doesn't work, then check [this Ask Ubuntu post](https://askubuntu.com/q/29071/511730).

When the gibberish is done scrolling past, your terminal should show

    done.
    done.

at the end, and have `ubuntu@ubuntu:~$` waiting for a new command.

To make sure it's installed, run

    java -version

and it should show

    openjdk version "1.8.0_151"

and a couple other lines.

Good job, Java is installed!

#Installing Maven

If you're not running on a live boot, you can check if maven is installed by running this command:

    mvn -v

If it's installed, it'll show something like this:

    Apache Maven 3.3.9 (bb52d8502b132ec0a5a3f4c09453c07478323dc5; 2015-11-10T18:41:47+02:00)
    Maven home: /opt/maven
    Java version: 1.8.0_151, vendor: Oracle Corporation
    Java home: /usr/lib/jvm/java-8-openjdk-amd64/jre
    Default locale: en_US, platform encoding: UTF-8
    OS name: "linux", version: "4.4.0-109-generic", arch: "amd64", family: "unix"

If it's not installed, such on the live boot, you'll see something like this:

    The program 'mvn' is currently not installed. You can install it by typing:
    sudo apt install maven
    You will have to enable the component called 'universe'

So, let's install it.

To prevent errors, let's install those things that are needed so that we can install maven. Hat-tip to [this Ask Ubuntu answer](https://askubuntu.com/a/722994/511730).

All of these commands will make text appear after you press enter. Unless there are errors, you shouldn't be worried.

First, we run this command:

    sudo apt-get install software-properties-common

(for more info on that, see [What is software-properties-common](https://askubuntu.com/q/1000118/511730) on Ask Ubuntu)

Then we can install the universe:

    sudo add-apt-repository universe

Then update:

    sudo apt-get update

And then finally we can install maven:

    sudo apt-get install maven

To check if it installed properly, you can run `mvn --version`. That should show this:

Apache Maven 3.5.0
Maven home: /usr/share/maven
Java version: 1.8.0_151, vendor: Oracle Corporation
Java home: /usr/lib/jvm/java-8-openjdk-amd64/jre
Default locale: en_US, platform encoding: UTF-8
OS name: "linux", version: "4.13.0-16-generic", arch: "amd64", family: "unix"

Good! Maven is installed.

#Installing Tomcat

To install this simply, let's take the latest version of tomcat from [their page](http://tomcat.apache.org/download-80.cgi). This would be 8.5.29 at the moment.

`wget` will retrieve the content from the link. In this case, the link is the latest tomcat version. So that's this command:

    wget http://apache.mivzakim.net/tomcat/tomcat-8/v8.5.29/bin/apache-tomcat-8.5.29.tar.‌​‌​gz.

Then we can unzip the file and make it usable by Natty:

    tar -xzf apache-tomcat-8.5.29.tar.‌​gz

And now Tomcat is set up!

---

Now we can start setting up Natty itself.

First, since we're on a live boot, we need to install git.

    sudo apt-get install git

You'll be prompted to confirm.

After git is installed, we can clone into the Natty repo:

    git clone https://github.com/SOBotics/Natty

Now the repo is cloned, but we need to get into it now! How do we do that?

We need to change directories. That is, we need to be not in `ubuntu@ubuntu:~$`, but at `ubuntu@ubuntu:~/Natty$`.

We can change directories using the `cd` command. You can type `cd <path>` to go to that path - for instance, if you're on `ubuntu@ubuntu:~$`, and you want to you to `ubuntu@ubuntu:~/example/path/folder$`, you can use the command `cd example/path/folder` from `ubuntu@ubuntu:~$`. Just typing `cd` and executing that will take you back to the home directory (`ubuntu@ubuntu:~$`). `cd ..` will take you from `ubuntu@ubuntu:~/example/path/folder$` to `ubuntu@ubuntu:~/example/path$`. 

So we need to `cd` into `Natty`. That would be:

    cd Natty

Your terminal should now show `ubuntu@ubuntu:~/Natty$`.

So now we need to get it back to the old revision. This is possible using the `checkout` command in git. The revision we want is located at `https://github.com/SOBotics/Natty/tree/8bc0edf614d8fbe1a04a66ab835d87bb76ced847`. So we don't need to write out that whole thing, we just need the hash (that long bit starting with 8). We don't even need the whole thing - just the beginning of it.

The command looks like this:

    git checkout 8bc0ed

You should lose your HEAD about now. (AKA it should tell you that you are in a 'detatched HEAD' state.) Losing your head is good here.

Now you can open up the file system, since it's easier to work with than the terminal. You'll automatically be at "Home" when you open up the file system. Find the folder marked "Natty". Then you can find the things you want to change - if you want to change the rooms that Natty posts to on your version, you have to go Home > Natty > src > main > java > in > bhargavrao > stackoverflow > natty > roomdata. In that folder, you can adjust the different files as needed - open them with the text editor/Gedit, and the names and code should be *relatively* easy to figure out. If you need help with this part, ask in [SOBotics](https://chat.stackoverflow.com/rooms/111347/sobotics).

After making those changes, you'll need to run this command:

    mvn clean package

That should look like `ubuntu@ubuntu:~/Natty$ mvn clean package`.

Your terminal will tell you what it's doing again, which you probably won't be very interested in reading.

You might get an error at this point:

    COMPILATION ERROR : 
    [INFO] -------------------------------------------------------------
    [ERROR] No compiler is provided in this environment. Perhaps you are running on a JRE rather than a JDK?

To solve this, you have to run this command and install the JDK:

    sudo apt-get install openjdk-8-jdk

Now you have to set up the folders and files in the "target" folder. Go to the file system, and find Home > Natty > target. Right click, and create a new folder called "data". So you should have Home > Natty > target > data.  Now you can open up the text editor (press the <kbd>super</kbd> key, type `gedit`, and open it up), and create the following blank files and save them in "data": `BlackListedUsers.txt`, `BlackListedWords.txt`, `CheckUsers.txt`, `FeatureRequests.txt`, `OptedInUsersList.txt`, `Salutations.txt`, and `WhiteListedWords.txt`. 

Now, some of these we're going to fill, but most of these we're going to leave blank.

We're going to fill in `BlackListedWords.txt` first. What goes in here are the keywords that will make Natty detect the post, and there's a list of keywords maintained by SOBotics, that are available from the API at https://logs.sobotics.org/napi/api/list/blacklistedWords.

The file needs to be set up so that the list of keywords looks like this:

    could someone explain
    can anyone give me an answer
    Please help me in resolving
    Stackoverflow won't let me comment
    Has this been an unresolved issue
    etc...

If you don't care about having the most recent data, you can copy-paste [this pastebin](https://pastebin.com/raw/WDCJAUBu), from March 19, 2018.

Next we fill in 'WhiteListedWords.txt`. Like the blacklist, you can fetch it from the API: https://logs.sobotics.org/napi/api/list/whitelistedWords

This is arranged in the same way as the blacklist:

    Hope this helps
    May it help someone
    problem disappears
    etc...

For convenience, [here](https://pastebin.com/raw/5KfGZfYq) a pastebin of the whitelist as well, from March 19, 2018.

Next we do `Salutations.txt`. There is no API option for salutations, but @BhargavRao provided his list in [chat](https://chat.stackoverflow.com/transcript/message/41703588#41703588). This should be in the same format as the blacklist and whitelist.

Now we have to create the `login.properties` file, which will allow us to have the bot sign in.

We have to go to Home > Natty > target, and create a new folder named "properties".

Now we can fill in a blank file that will become `login.properties`. Create a new file with the text editor. It should be blank. Put this in it:

    apikey=
    autoflagkey=
    autoflagtoken=
    userid=
    username=
    location=
    email=
    password=
    sentinelKey=
    sentinelApiKey=

You fill in the fields with the appropriate things, such as `email=example@example.com` and `password=correct horse battery staple`.

There's no need to fill in the `autoflagkey`, `autoflagtoken`, `sentinelKey`, and `sentinelApiKey` fields - those are only needed for when your bot is accurate to flag automatically. You can use `HNA2dbrFtyTZxeHN6rThNg((` for the API key (stolen from [FireAlarm](https://github.com/SOBotics/FireAlarm/blob/09472e8624e899ef4693a014d87e61f0ac3462e8/Sources/FireAlarm/startup.swift)).

Then we save it as `login.properties`. It gets saved in Home > Natty > target > properties.

Now we can set up the FMS. Because of hardcoding reasons, you'll need to find the folder named `apache-tomcat-8.5.29` (or whatever the version is) in the file system, and rename it to `tomcat`. Once that's done, you can move on to the next step.

In `ubuntu@ubuntu:~/Natty$`, we need to create some directories. Run this command:

    mkdir ../tomcat/webapps/ROOT/Natty

If you get an error `mkdir: cannot create directory 'tomcat/webapps/ROOT/Natty': No such file or directory`, check that you've actually renamed the folder to `tomcat`.

After that, you can run

    sh tomcat/bin/startup.sh

This will allow you access the dashboard at http://localhost:8080.

Now, it's finally time to actually run the bot.

We need to be in `ubuntu@ubuntu:~/Natty/target$`, so we need to change directories.

We've been in `~/Natty$`, so we just need to go `cd target`.

Since this is running off of an old version of Natty, the name of the `.jar` file is named `natty-1.0-SNAPSHOT.jar` instead of just `natty.jar`. So to actually run it:

    java -jar natty-1.0-SNAPSHOT.jar

You should get a LOADED message with the time and date, sort of like this:

    ubuntu@ubuntu:~/Natty/target$ java -jar natty-1.0-SNAPSHOT.jar
    LOADED - 2018-03-19T21:23:04:0.33Z

Congrats! You've got it up and running. Ping it in the room you set as the HQ room with an "alive" message to test if it's responding. 
