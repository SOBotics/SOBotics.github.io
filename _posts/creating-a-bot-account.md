---
layout: post
title: "Creating a bot account on Stack Exchange"
date: 
comments: false
---


On Stack Exchange most of the moderation bots, if not all, report to a chat room. One limitation of using chat is that 
we need a dedicated bot account with at least 20 reputation points, so that it can post its reports to chat. This is one place 
where we would be coming very close to performing illegal activities, as we are creating a separate account in addition to our main account. 

### Is creating multiple accounts legal? 

Fortunately, Stack Exchange has been kind enough to allow us create a different account legally, given that we follow certain rules. 
The official rules for creating a new account for a bot are [enumerated in this meta post.][1] From there:

> So long as there's no voting or other dubious-looking stuff (like one account asking a question and another immediately 
answering it) going on between the accounts, it's really not a big deal.

You are allowed to [create an additional account for a bot, as long as you adhere to the policy of having multiple accounts][2]:

> It is not a problem to have multiple accounts, as long as they aren't voting for each other and doing other sockpuppet-y things.

Activities which are [considered "sockpuppet-y" include][3]:

>  - Voting on your own posts or comments 
>  - Answering your own questions  with the other account(s) 
>  - Casting multiple votes on others' posts or    comments 
>  - Supporting your own arguments ("+1: shog is right, don't    know why the rest of you don't realize this") 
>  - Using bounties to    circumvent the rep cap 
>  - Circumventing suspensions, quality bans, or    the rate limits on posting questions / answers / comments / etc.

### How do I earn reputation for the bot to participate in chatrooms? 

For a user to be able to speak in chat, they need 20 reputation. The proper way [to earn this 20 reputation is listed here][4]. 

> If you want a sockpuppet to have reputation, then earn it. That's what I do with my sockpuppets, and I certainly have
 a lot more opportunities to abuse the system than y'all do. If you can't play it straight while creating your bot, 
 what confidence can we have in the bot being honorable once it's up and running?

Two options for getting the required reputation for your bot are:

1. Suggest 10 edits, and get all of them approved through the suggested edit queue. **Do not interact with any of these 
suggested edit reviews yourself**. Namely: 

   1. Suggesting an edit on your own post and immediately accepting it. 
   2. Clicking "improve edit" on a suggested edit by your bot to short circuit the review process.
   3. Reviewing "approve" on a edit suggested by your bot. 

2. Add an answer/question and wait until it gets sufficient votes. Here as well, **do not interact with the post in any way**, such as:

   1. Adding an answer on your own post and accepting it.
   2. Voting up the answer/question posted by your bot. 
   3. Adding an answer to the question asked by your bot. 
   4. Voting up any comments left by your bot. 
   5. Commenting on any posts created by your bot. 

The first option is recommended as there are not many conditions associated with it. Similarly, creating a bot account on Stack Overflow 
is preferred as it can speak on both chat.stackoverflow.com server and chat.stackexchange.com server. 

### What do I do after creating a bot account and gaining 20 reputation? 

After creating a usable bot account, remember to follow the directions presented in the above linked meta post:

> Add a note in the "About me" section describing the purpose of the account. 

Your bot is now ready to roll. Keep a few things in mind: 

1. Do not use the bot to star others messages. 
2. Do not use the bot to perform sockpuppet-y activity. 
3. Adhere to the Be Nice policy enforced in chat. 

The bot account is no different from a normal user account, except that there is no human behind the screens who's sending those messages. 
All the rules which apply to any normal user, also apply to the bot account. 

  [1]: https://meta.stackexchange.com/questions/148914/officially-sanctioned-second-account
  [2]: https://meta.stackexchange.com/questions/35593/whats-the-policy-about-having-multiple-user-accounts
  [3]: https://meta.stackexchange.com/questions/57682/how-should-sockpuppets-be-handled-on-stack-exchange
  [4]: https://meta.stackexchange.com/questions/288144/how-should-a-bot-earn-enough-reputation-to-perform-the-actions-necessary-for-tha
