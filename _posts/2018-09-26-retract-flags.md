---
layout: post
title: "Retract flags raised by bots"
date: 2018-09-26
comments: false
---

Currently, the Stack Exchange APi allows us to raise flags on posts, but no way to to retract them.

However, you can still retract a flag by sending a HTTP Post request to `https://stackoverflow.com/flags/posts/{post id}/retract/{flag type}` and passing your cookies (namely `acct` and `prov`) plus your `fkey` along.

The flags types are:

 - Not an answer: `AnswerNotAnAnswer`
 - Very low quality: `PostLowQuality`
 - Spam: `PostSpam`
 - Rude or abusive: `PostOffensive`
 - Custom mod flag: `PostOther`

An example of such a request would look like this:

```
POST https://stackoverflow.com/flags/posts/1/retract/AnswerNotAnAnswer
Origin: https://stackoverflow.com
Cookie: prov=xxxxxxxx; acct=t=xxxxxxxx&s=xxxxxxxx;

fkey=xxxxxxxx
```

This request should be pretty easy to perform, as you already obtain the needed cookies and the `fkey` upon login. In Java, this seems to be possible through a jsoup request.

If you have further questions about implementing this, feel free to [join us in our chatroom](https://sobotics.org/chat).
