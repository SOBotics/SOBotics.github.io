---
layout: post
title: "Why and how do we provide feedback to our bots?"
date: 2019-01-22 7:30:00 +0000
comments: false
---

In this blog post, we'll be going over the "how"s and "why"s of providing feedback to our various bots.

### Why do we need to give feedback to our bots? 

One of the reasons we send feedback to the bots is to help us keep track of which reports have already been handled. We also collect some statistics, and then we can improve the filters used in the bot based on this feedback. Some of the bots are also built using machine learning, and so they need this feedback to improve.

The continuous improvement of the bots is one way to see how your feedback has affected the bot. We are also planning to start using [SOPlotics](https://github.com/SOBotics/SOPlotics) to generate graphs and visualisations of the data.

The bots do log this data. Some bots, like Guttenberg, send the data to a dashboard like CopyPastor, which stores the data on its behalf. 


### Which bots accept feedback? 

 - Belisarius posts possible vandalized posts and takes `tp` or `fp` as feedback.
 - Guttenberg posts possible plagiarized answers and takes `k` or `f` (and `tp` or `fp`) as feedback. See [How to react to Guttenberg's reports?](https://github.com/SOBotics/Guttenberg/blob/master/feedback.md)
 - HeatDetector posts possible inflammatory comments and takes `tp`, `fp`, `fn`, `nc` and `sk` as feedback. See [What all types of feedback does Heat Detector take?](https://github.com/SOBotics/HeatDetector/wiki/Feedback)
 - Natty posts possible non-answers and takes `tp`, `fp` and `ne` as feedback. See [How do I interact with Natty?](https://natty.sobotics.org/interacting). 
 - SOCVFinder posts possible duplicate questions and takes `k` or `f` as feedback. 

Additionally, our guest, SmokeDetector, posts possible spam or rude/abusive posts, and it takes `tp` (`k`, `v`), `fp` (`f`) or `naa` (`n`), among others, as feedback via replying to its report messages. See [Feedback Guidance on the Charcoal website](https://charcoal-se.org/smokey/Feedback-Guidance).
                                                                                                                                                                                               


There are some bots which do not take feedback, but can be replied to. These include: 

 - GenericBot tracks the posts you have flagged and reports edits to them. It takes an `untrack` as a reply command to stop tracking that post. 
 - Notepad pings you back as a reminder, and takes a snooze value as a reply. 
 - OpenReports lists the reports of Natty and Guttenberg, and takes an `ignore` as a reply command to not show you the same reports again.  
 - TagWikiEditMonitor reports tag wiki edits and takes a `tp socvr` as a reply and then posts the same message in SOCVR.
