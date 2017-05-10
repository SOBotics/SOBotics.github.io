# General

SOBotics try to leverage the programing skills of community members to improve the overall user experience for visitors of Stack Overflow. 
The main tool we are using is chat and bot's (programs) that scans SO in real time to find issues that we can handle.

The quantity of posts (answers, questions), comments, reviews and other actions of SO users is hughe, we are at the beginning of our implementation and need support from other community members to both refine current programms and to address issues that have not been implemented yet.

These are some examples, but your are stepping in to an area where not only your program skill are needed but also your ideas and passion is required.

## API cache

We are planning to cache the results of `/posts` or `/answers`. This would save us tons of requests to the SE API and would make it possible to run multiple bots on the same IP.
The AU-version of Natty for example could run on the same server as Guttenberg although they both use the API a lot. (multiple request per minute and bot)

# [Guttenberg](https://github.com/SOBotics/Guttenberg) - JAVA

## More reasons for a post to be reported (LINQ?)

With SOBotics/Guttenberg#74, it will be easier to add reasons that trigger a report.
It would be helpful, ff someone comes up with new reasons that could improve our results. For this, implementing LINQ could be tested. ( SOBotics/Guttenberg#73 )

## Web dashboard for reported posts

We can have a dashboard like http://diffchecker.com/ where we display the differences between posts. This would help in the plagiarism flags. 

## More sources

At the moment, Guttenberg can only compare posts to linked or related questions with the target. Getting data from GitHub or a search engine could improve the results.

----------------------------

# [Natty](https://github.com/SOBotics/Natty) - JAVA

## Addition of Machine Learning techniques to detect questions posted as answers. 

Over a period of 1 week, we have collected a [dataset](http://51.254.218.90:8000/vowpalData.txt) of all the new answers to old questions. Coupled with SEDE, we can learn the 

## Implementation of intelligent blacklist

The blacklisted words all have the same value at the moment. Getting data from Sentinel, we can find out as to how many false positives are there and find a way to autoscale the blacklist filter value. 

----------------------------

# [Heat Detector](https://github.com/SOBotics/SOCVFinder) - JAVA

## Improvising the NLP System

We can improve the NLP system, feed and or settings of NLP. At the moment, we are using a dataset of rude flagged comments provided by Stack Exchange. We can extend this by using the data that has been collected till now. 

## Improving perspective reports by providing feedback

Reports by Heat Detector because of Perspective do not take a feedback as of now. We need to develop the bot to take feedback for that as well. 

------------------------

# LQP Queue Monitor

Under development phase, jump in and help to give it a good direction.
