---
layout: post
title: "Malfunctioning bots and how we deal with them"
date: 2018-07-31 3:30:00 +0000
comments: false
---

Bots, no matter how robust they are, are sometimes prone to errors and malfunctions. There's a chance that any bot can go rogue by sending multiple chat messages at once, or adding multiple automatic flags on the same post. It doesn't matter if you're a room owner, bot developer, or a regular user of the room - we all need to be geared up and prepared for these emergency situations. 

### Does the situation warrant any action?

First, you must **decide whether action really needs to be taken**:

- Are the reports all (or nearly all) unhelpful or redundant, such as being false-positives or duplicates?  If the reports are useful, they're *probably* OK.
- Does the bot appear to have a developer working on it at the moment?  If someone's developing, the report spam is probably just a bug or a test, and the developer likely knows about it and is working to fix it.
- Is the bot posting a *truly* large volume of reports, such that chatting and interacting with other bots becomes difficult?
  - Posting the same message 3 times in a row (like [Smokey's "conflicting feedback" reports](https://chat.stackexchange.com/transcript/11540?m=43420837#43420837)) does not require drastic action; it's just a minor glitch that *maybe* is worth talking to the bot developer or filing a GH issue over.
  - Posting the same message 30 times in a row or reporting nearly every post on the site makes chatting and interacting with other bots difficult, and requires intervention.


### How do I act, if it warrants action?

If action is required, the first priority is to stop the reports in the short-term.  If the quickest way to do that is to disable the bot entirely, so be it — the end result is the bot being offline until a developer can fix the problem and re-enable it.

**Don't perform any of the below steps unless you're confident you know what you're doing and you're sure no one will get angry at you for doing it.**  If you're not 100% confident in what you're about to do, delegate the problem to someone else or try a different step.

**If you're not a RO, bot developer, or moderator, ping someone who is (if anyone's around)**.  If no one is available, proceed with caution.

**If a developer of the bot is around, ping them** as they likely have more knowledge of the bot's internal workings.

**If the bot stops malfunctioning, stop trying to fix it** (even if you don't think *you* did anything to fix it).  Sometimes the problem will eventually resolve itself, such as the time [someone posted 27 identical answers and Guttenberg reported every pair it found](https://chat.stackoverflow.com/transcript/111347?m=38907323#38907323).  If you know the problem will go away shortly, it's probably best to just wait it out.


With the above disclaimers in mind, proceed through the following checklist:

- First, **find the bot's documentation**.
  - Different bots function differently and accept different commands, so knowing your available options is critical.
- If there's an obvious reason for the malfunction and an easy way to fix it, do so immediately.
  - For example, if a recent blacklist change is over-zealous, try to revert that blacklist change.
- **Try a reboot**.  More often than not, rebooting fixes the problem entirely.
- If the bot is not responding to a reboot, it may be overloaded processing commands or sending chat messages.  Some bots [such as SwiftChatSE-based bots](https://github.com/SOBotics/SwiftChatSE/blob/master/Sources/SwiftChatSE/CommandKill.swift) have **a `kill` command** that will immediately crash the bot, bypassing any work that's queued up or cleanup tasks that are usually performed during a shutdown.
  - If the bot auto-restarts after crashes, it may come back up after a kill command.
- If you have access to the bot on Redunda, **try a failover** to another instance.
- If the bot responds to a reboot or kill, but comes back online and starts malfunctioning again, **use the shutdown command**.  
  - If the bot is behaving, a shutdown should cause that instance to cease operating.
  - If multiple instances are available, Redunda should launch another instance, which may or may not experience the same problem.  If the new instance works, problem solved; otherwise, shut down this instance too.
- If all else fails, **use Stack Exchanges moderation tools** to silence the bot.  The least drastic way to do this is to put the room in gallery mode and remove the bot's write access.  An alternative is to kick the bot,  which will temporarily ban the bot from the chat room, however if the bot is kicked enough times [automatic moderator flags will be raised and restrictions will be applied to the bot's account](https://meta.stackexchange.com/a/239226).  **If you're not a RO or mod, ping a RO immediately**. If there is no only available to ping **raise a moderator flag** by clicking the message dropdown and choosing "flag for moderator."

### What to do after the bot has been silenced?

At this point, either the bot has been fixed or disabled.  If you're a RO or mod, clean up the chat transcript by moving the erroneous reports to a trash room.  If you're not a RO, ping someone who is.

The developer of the bot needs to be informed of the malfunction, as well as what you did and why.  If you had to disable the bot, a developer is needed to fix and re-enable the bot.  If you were able to fix it yourself or the problem went away on its own, explaining what happened is courteous and helpful so that the developer is aware and can prevent it from happening again in the future.
