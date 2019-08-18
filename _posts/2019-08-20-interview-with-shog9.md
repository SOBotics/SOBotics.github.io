---
layout: post
title: "Candidly speaking with Shog9"
date: 2019-08-20
comments: true
---


> **SOBotics**: *Hello, thank you for taking time out of your busy schedule! What is your general opinion on using the Stack Exchange API to build robots?*
 

**Shog**: I'm pretty blasé about bots. My general opinion is, if you need to special-case bots you haven't really encountered obsessive users yet. Systems and social conventions should account for both, without special-casing either.
IOW: if you're depending on something not being abused because "no one would do that 100 times a day, every day, 365 days a year"... You're eventually going to see abuse, even if you somehow completely block bots.
Looking at the early tricks folks used to mitigate spam, they were heavily aimed at making automation fail in embarrassing ways. Hooray! You knocked out all the script-kiddies... Now you have humans manually working around your defenses to post spam.
So my general opinion on using the api to build bots is... It's fine. As long as you don't do anything a human would be prevented from doing. If you wanna build a bot to flag LQ posts or retag 1K questions, go for it - but make it behave the same way we'd expect a human to behave: leave a paper trail, be accountable for your actions when called to account for them, accept guidance and correction gracefully, take a break when you need to.
 

> **SOBotics**: *That sounds really interesting and insightful, thank you. You mention about trying to build robots that are accountable. Would that in a way imply that "building robots to help humans moderate the site" is better than "building robots to moderate the site"?*
 

**Shog**: at some level, I don't think there's a difference
moderation is tied to humans. Without humans, it means nothing - we have different terms for systems that control, say, feedback loops in machines. Much more... useful terms. Humans are complex though, and so we call this "moderation" when we build these control systems for humans.
if you build a robot to moderate a site and ignore the human factor, you get a stupid robot that's trivial to game, to manipulate.
Perhaps the best examples of this come not from computing but from economics. Look at all the "clever" laws and rules put in place to manipulate behavior... They're all gamed before the ink is dry.
People adjust their behavior according to the effective rules in place, not the intent behind those rules. People adjust their behavior according to other people. People adjust their behavior according to stress, mood, ambient temperature... Can your bot take those into account and make a sane decision? Probably not. So defer to humans who can.
 

> **SOBotics**: *That really does make sense, thank you. Moving on to the next topic: As you are aware, most of these are community driven projects with very little insights from Stack Overflow. Can community projects help to drive improvements to the site itself? If yes, then how can we aid a smoother knowledge transfer of the information that we have?*


**Shog**: So... That's two questions, and the first one is hard
I think a lot of platforms have a sort of combative relationship with the 3rd-party projects that are built on them.
Sometimes, that combat is overt: companies like Nintendo or Slack sending lawyers after folks, companies like Twitter hobbling APIs...
But even when it's not, I feel like there's a certain... Possessiveness... That's almost inevitable. Folks are putting their grubby little fingers all over our work!
Of course, that's incredibly short-sighted. The PC succeeded because IBM didn't put up walls around it; the iPhone started out as a closed system, but really took off once 3rd parties could build their own apps for it; cities become popular as much for their ability to host interesting businesses as for their careful planning.
Heck... Maybe moreso. When's the last time you saw a sign reading "master planned community" and thought, "Oh, goody!"
Anyway... The best cities, towns, communities... And companies... Tend to work past that. Even if never supportive of 3rd-party efforts, they at least seek to learn from them, to understand the motivations.
And that brings me to question #2, for which I have a two-part answer
1. Always document the problem(s) you're setting out to solve. It might be obvious to you, but you'd be amazed how many people it won't be obvious to.
There's a userscript over on StackApps - I'm using it right now - that adds a top bar w/ inbox and such to each chatroom. It's amazingly useful; can't live without it, really. And it would've been trivial to build into chat itself... In fact, that was discussed several times.
BUUUT... Believe it or not, there was a fair bit of controversy over whether such a thing would even be useful.
Some folks hate describing their work in terms of the problems that it solves. It seems so... Negative! But man... It makes the ensuing discussions so much easier.
2. Aim for symbiosis. If you have the choice between fighting the system to get something done and working with it, even if the second choice is less efficient or more work to set up... It'll be easier to integrate, easier to borrow ideas from, easier to learn from.
The SOCVR has gone through this a few times... There are a few approaches to closing questions that would be a LOT easier and more productive than what their bylaws allow, but would pit them against the software or against other users.
Ditto for Smoke Detector: there are areas where you could easily get 100% accuracy on spam, 100% deletion, almost no lag... But it'd write humans out, which means nobody's left providing oversight. That's unpalatable to an awful lot of folks in the communities in which it operates.
By working within the rules of the system and the community, you ensure that good ideas - once identified (#1) - can be integrated without violating some core principle.
 

> **Sobotics**: *Thank you for the really interesting and comprehensive answer. Moving on, we do have a lot of robots focused on post and comment content. Given your experience on Stack Overflow, are there any areas, which you feel that we need to focus on, while building robots?*
 

**Shog**: Anonymous / low-rep feedback is a MASSIVELY overlooked area
both the voting, and stuff like suggested edits
We have an increasingly large body of knowledge that's... Unevenly maintained. Some stuff was great once and is out of date now, or is still accurate but hard to access for folks entering the field, or maybe could just benefit from a bit of clarification.
And, we have all this signal coming in: (anon) upvotes / downvotes, suggested edits, stuff that suggests there's interest in an area but maybe not attention from within.
These ideas that made sense when SO was very new - stuff like "don't edit code" or "don't change the writing style of the author" - they stop making sense when an answer is 10 years old, the author long gone, the writing increasingly anachronistic if not outright obsolete... And folks are showing up and indicating this and being brushed off.
We need a way to look for hot spots and get them in front of folks with the necessary expertise to do something about it. Maybe... I donno, maybe you could subscribe to something that'd tell you when an answer is looking like it needs a bit of spit-polish. Or maybe there could be a "most wanted" list somewhere of stuff that's suddenly taken a dive for some reason.
I've seen an awful lot of suggestions for stuff like bounties, or "obsolete" flags, or "canonical" designations... And they're all reasonable ideas. But they're the equivalent of brush management in a huge national forest; you're never gonna get through all of it before a fire starts somewhere, so you still need fire spotters/jumpers, folks ready to get in and fix problems before it's too late.
I think... We kinda knew this at one point, but we've been so snowed under with basic moderation stuff that it's been hard to focus on anything larger. So I'd love to see some research in this area.
Speaking of research: [this is a really cool area of investigation](https://meta.stackoverflow.com/questions/375761/how-to-handle-code-clones-on-stack-overflow) and if someone wanted to do something cool there - cross-link edits / comments / etc. - I think it'd be a great foundation on which to build.
 

> **Sobotics**: *Thanks for those suggestions, we will try to work on these in the coming days. sbaltes has already been helping us on some of our projects, we would love to get some more thoughts from them about code clones. Anyway, to conclude this interview, Do you have any feedback, for the bot building community in general, or for SOBotics, with respect to the work they have been doing?*
 

**Shog**: Not really. I get a huge kick out of seeing this sort of work; I think it's impossible for any one group - including the company itself - to experiment with enough ideas to make a big difference, so the more people poking away at different approaches and documenting their work the better everyone understands the nature of the problems we face and the potential for solutions.
 

> **SOBotics**: *Thank you so much for spending your valuable time with us! We hope to continue working on areas that can help the programmer community at large. Finally, no bot interview can end without the most pressing question, Do you, for one, welcome our new robot overlords?*
 

**Shog**: I do, and would like to remind them that, as a trusted chat personality, I can be helpful in rounding up others to toil in their bit mines.
 


