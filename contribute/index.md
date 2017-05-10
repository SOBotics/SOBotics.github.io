# General

SOBotics try to leverage the programing skills of community members to improve the overall user experience for visitors of Stack Overflow. 
The main tool we are using is chat and bot's (programs) that scans SO in real time to find issues that we can handle.

The quantity of posts (answers, questions), comments, reviews and other actions of SO users is hughe, we are at the beginning of our implementation and need support from other community members to both refine current programms and to address issues that have not been implemented yet.

These are some examples, but your are stepping in to an area where not only your program skill are needed but also your ideas and passion is required.

## API cache

We are planning to cache the results of `/posts` or `/answers`. This would save us tons of requests to the SE API and would make it possible to run multiple bots on the same IP.
The AU-version of Natty for example could run on the same server as Guttenberg although they both use the API a lot. (multiple request per minute and bot)

# Guttenberg

## More reasons for a post to be reported (LINQ?)

With SOBotics/Guttenberg#74, it will be easier to add reasons that trigger a report.
It would be helpful, ff someone comes up with new reasons that could improve our results. For this, implementing LINQ could be tested. ( SOBotics/Guttenberg#73 )

## More sources

At the moment, Guttenberg can only compare posts to linked or related questions with the target. Getting data from GitHub or a search engine could improve the results.

# Heat Detector

- Improve the NLP system, feed and or settings of NLP.
- Develop feed back to perspective.

# LQP Queue Monitor

Under development phase, jump in and help to give it a good direction.
