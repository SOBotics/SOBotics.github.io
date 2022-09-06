---
layout: post
title: "Notes from the SOBotics war room - Building Boson"
date: 2018-08-19 3:30:00 +0000
comments: false
---
  
[Boson](https://github.com/SOBotics/Boson), as described by the project, is both a framework to create any general purpose tracking bot for Stack Exchange, and a tracking bot built on top of the framework to report content that matches a given set of filters. It can be configured to report to various rooms in several formats. Though it sounds simple enough, the journey of designing an all purpose generic bot wasn't that easy. 
  
### Initial talks, where did we get the idea from?  
  
While discussing possible solutions for moderators to detect heated arguments in posts, the SOBotics team added an answer about how we can use the [Stack Exchange API](https://api.stackexchange.com) to create a very small bot to scan all comments, and the problem would be solved in a matter of seconds.  [Catija left a comment on our post](https://meta.stackexchange.com/questions/301846/what-solutions-do-moderators-have-to-prevent-argumentative-comments#comment981714_301873):  
  
> *take it in your own hands and develop some nice moderation bot.* - Alas... as my SO rep might indicate - I am not a developer. Something like Heat Detector would probably work... though I'm not sure what it's capable of. It'd be nice to have something that would alert me (daily? every six hours?) of new comments on posts that have been inactive for longer than a week, say? Or maybe something that I could configure to specifically add the posts I'm concerned about following  
  
This was the spark that ignited the flame in our bot designing back rooms. There is an entire world out there in the other Stack Exchange sites where there are users who are not programmers. We had been restricted very much to just Stack Overflow (even though we had a partial [side expansion called SEBotics](https://sobotics.org/sebotics)), and had not interacted much with the non-developers from other sites.  
  
While that immediate situation was solved by creating another bot (not by the SOBotics team), our plans extended beyond that single point and we wanted to explore the opportunities of having non-programmers who could spin up bots tailored to their needs, without requiring them to have any knowledge of what is running behind the scenes.  
  
The idea was simple: Create an interface where users could get to pick and choose what they wanted to track,  where they wanted to track it, and how they wanted to track it; and the bot would do all the work for them. The  programming challenges, however, were many.  
  
### Laying data out, what to do and what not to do?  
  
Tracking anything, anywhere is a fancy idea, but in order to quantify what anything and anywhere was, we had to put in some boundaries. There were Questions, Comments, Answers and Posts which were commonly queried by the users. They all had similar content, (a body, an owner, a creation date, etc). We decided to start working on those first and then expand. The design plan was then extended to cater to edit suggestions and revisions, as there were a lot of issues related to vandalism, and [Belisarius](https://sobotics.org/all-bots/belisarius/) was picking up a lot of that. Soon, thanks to a meta post, we were informed that users were interested in looking out for the creation of new tags. That had to be accommodated for too. The design plan soon grew larger, in order to satisfy the initial idea to track anything, and it excited us even more, as we realized that there was immense potential usage of the bot, if we managed to add in everything that users wanted to track. 
 
Filtering the content was the next aspect which needed to be looked at. Just dumping all the data on the user would be quite useless, as they could just use the RSS feeds provided by Stack Exchange directly - why use the bot, then? So we decided to create multiple filters that could be applied to the content, such user reputation, post length, ID of the post, creation date, etc. It was at this moment that it was suggested that we split the project into two parts: a framework and a bot. This would give programmers the freedom to spin off their own bots using the framework, if they didn't like the options provided by the bot. 
  
The API quota was another issue that we were quite stressed about. This ended up reminding us about [apicache](https://github.com/SOBotics/apicache), one of the (now abandoned) SOBotics projects to cache all the API requests in such a way that other bots could use data from that instead of calling the API directly. This resulted in Boson having a configurable option to collect data from any API which would return data in the same format as returned by the Stack Exchange API. 

Relaying the data to the rooms was also another contentious issue. Many questions were raised. Should we be one-boxing the posts?  Should we be displaying the name of the author? Should we list all of them in a single message?. This was solved in a similar way as filters. We created multiple printers to display the output. Two examples are the one-box printer and the multiple posts printer. 

Similar to these, there were many other issues. For example, talking to trackers, multiple trackers in the same room, multiple trackers consuming the same data, and so on. We decided to follow the same path for most of the other issues, which was to generalize the different options available and let the user decide what their tracker needs to use. 
  
### Viewing the reports, using the chat search?  
  
Having a dashboard for the bot was another suggestion raised, to which we all agreed was a good idea at the mere  mention of it. The search provided by Stack Exchange is not that great, and using that to track our reports would certainly be very hard. At the same time, while we were outlining these ideas for an  universal bot, there was also increased discussions towards creating dashboards for our other projects (such as Hydrant for HeatDetector and Hippo for Belisarius). Announcing this out in the public helped us draw the attention of more developers.  
  
Sensing the need for multiple dashboards (3 at that moment), we decided to create a generic dashboard -  a dashboard that could be utilized by any bot to display their reports. That was the birth of [Higgs](https://higgs.sobotics.org). 
  
The work on Higgs was started earlier, as we had to clear the backlog of getting the dashboards ready for the other bots. [Hydrant](https://higgs.sobotics.org/Hydrant), named after the multi-headed snake Hydra, was the first dashboard to be tested and it was well received by the regulars. Using this opportunity, we collected feedback about how Higgs could be made as user-friendly as possible.  
  
Back on the drawing board, there had been multiple discussions about what dashboards to be created for Boson, and when. Do we create a separate dashboard every time a new bot was spun up by a user? Or do we create a generic dashboard where we dump all the reports generated by the bot? Or do we set a parameter which was configurable to create a new dashboard?  
Lots of arguments and counter-arguments were thrown around. Finally it was decided to create a single dashboard and provide a unique identifier for each of the numerous trackers which could be created using the bot.   
  
Now, another challenge is, what exactly do we display on the dashboard? We have a shiny new dash, but what to put in there? This question pulled us back into the room. Boson can be used to track potentially *anything*, including tags, badges, etc, which would not be that useful, if we displayed that on the dash. Another issue is that the dashboard would have a large content area, and a title. A few of the types we track, might not have one of those fields, so what do we display in those cases? Numerous similar questions were raised, and we decided to use the least obtrusive option possible in each case.   
  

### User friendliness, can a non-programmer use it as they need? 

One concept which we always kept in mind was the non-programmer user friendliness. One way to help users to achieve what they need is by having a very intuitive user interface. Given that chat can only be used to relay messages, it was decided that we should be using a fully developed command line parser (complete with man pages) to receive commands from the users. The plan was to take the argument parser which is used generally for creating command line applications, cut it open, and replace the standard out (which is usually the terminal) with chat. In this way, most of the users who are familiar with any command line tool would find the bot relatively easy to use. 

Another concept which is familiar with users is that of Installation Wizards. Many of the users who do not use command line on a day to day basis, would likely have more knowledge about wizards and would certainly find them more user friendly than command line. Therefore, we decided that having a wizard setup for the trackers would be an option as well. However this would be more time consuming than the command line, as the user had to go through and reply to the list of all the features present in the bot. The usage of either the wizard or the command line would totally depend on the user who is operating the bot and what they feel comfortable with.

Finally, the idea of a web-based front end, which could be made to generate the command to run a tracker on Boson was also discussed. However that would require another complete standalone service which would not be connected with Boson. Therefore the idea was left out of the minimum viable product. 

Another aspect of user friendliness is that once the user has entered the required data, they need a visual confirmation that the system has registered the data accurately. This was achieved by making the bot add in a message with the list of parameters which it has parsed from the input data. Additionally, adding a name to the tracker would help the users to identify their trackers easily. Therefore an option to add a name to the tracker was also provided. 

### Present state of affairs, is it as nice as it sounds?  
  
Boson is still in a very conceptual state, and most of the work is still on the drawing table.  There are lot more challenges (including the API quota) which we would be facing once it's released for general use. We have listed some of these problems and are still looking out for other potential problems. 

As of now, Higgs is [ready to be used](https://blog.sobotics.org/2018/07/connecting-to-higgs) and  Boson is partially ready. The APIs are yet to be formulated, and will soon be ready.
  
All in all, work has begun on the entire project and is progressing at an active pace. We still need help and advice on it,  as well as ideas about any other data filters which would be useful to the project. Please [drop into chat and have a talk with us](https://chat.stackoverflow.com/rooms/111347/sobotics), and together, let's make Stack Exchange a nicer place for all!
