# Contribute to SOBotics



SOBotics is a group of people who develop bots (programs) that help to improve the experience visitors to SO get, by improving our own and other people's ability to moderate effectively.

The quantity of posts (answers, questions), comments, reviews and other actions of SO users is huge. We are right at the beginning of our implementation and need support from other community members to both refine current programms and to address issues that have not been implemented yet.

These are some examples, but you're stepping in to an area where not only your programming skills are needed but also your ideas and passion are welcomed.

What follows is a list of our projects, and some particular areas they need help with. If you need additional information don't hesitate to join us in [SOBotics chat room](https://chat.stackoverflow.com/rooms/111347/sobotics), members from all over the world are active almost 24/7.

----------

## [Guttenberg](https://github.com/SOBotics/Guttenberg) - Java

### More reasons for a post to be reported (LINQ?)

With SOBotics/Guttenberg#74, it will be easier to add reasons that trigger a report.
It would be helpful, ff someone comes up with new reasons that could improve our results. For this, implementing LINQ could be tested. ( SOBotics/Guttenberg#73 )

### Web dashboard for reported posts

We can have a dashboard like http://diffchecker.com/ where we display the differences between posts. This would help in the plagiarism flags. 

### More sources

At the moment, Guttenberg can only compare posts to linked or related questions with the target. Getting data from GitHub or a search engine could improve the results.

----------------------------

## [Natty](https://github.com/SOBotics/Natty) - Java

### Addition of Machine Learning techniques to detect questions posted as answers. 

Over a period of 1 week, we have collected a [dataset](http://51.254.218.90:8000/vowpalData.txt) of all the new answers to old questions. Coupled with SEDE, we can discover a machine learning approach to detect questions posted as answers instead of the present heuristics based approach. 

### Implementation of intelligent blacklist

The blacklisted words all have the same value at the moment. Getting data from Sentinel, we can find out as to how many false positives are there and find a way to autoscale the blacklist filter value. 

----------------------------

## [Heat Detector](https://github.com/SOBotics/SOCVFinder) - Java

### Improving the NLP System

Are you good at machine learning?, do you have ideas on how to improve our algorithms and or feed?. 

The NLP system needs improvement both with integrating new data and improving parameters on the machine learning algorithm.


### Improving perspective reports by providing feedback

[Perspective](https://www.perspectiveapi.com/)  has given us an api key to test, we are currently reporting hits that are above 0.5. However we have a fairly high amount of "false positive", mostly due to sentences as "I'm an idiot". To solve this problem there is the need to implement the feed-back system and probably come up with some ideas on how to consider also our feed.

------------------------

## [FireAlarm](https://github.com/SOBotics/FireAlarm)/[SwiftChatSE](https://github.com/SOBotics/SwiftChatSE) - Swift

### SQLite database

We're currently migrating away from JSON to SQLite for data storage.  Here's what needs to be updated to use a database, roughly ordered by when I plan to do them:

- [ ] `ChatRoom` and `ChatUser`.  The `userNamed` and `userWithID` functions should query the database, and `lookupUserInformation` should save the information to the database.  Remember that users are not synchronized across rooms, so the table will also `host` and `roomID` columns.

- [ ] The privilege system.  This will involve creating a [join table](https://en.wikipedia.org/wiki/Associative_entity) containing `userID` and `privilegeID`.  `privilegeID` should *probably* be a raw enum value and not a key in another table.

- [ ] The report storage.  This will need a `reports` table containing `postID`, `date`, `score`, and `details`.  Storage of messages will need another table containing `reportID`, `host`, `roomID`, and `messageID`.

- [ ] The naive Bayes filter.  This should probably use seperate database, since it is static and pulled from GitHub instead of being synchronized with Redunda.

- [ ] The other filters.  These filters are not static, so they'll be in the same database as everything else.

### Better machine learning

As far as I know, none of us in SOBotics are machine learning experts.  If you're good with machine learning and you want to improve FireAlarm's filter, we'd be grateful!  Right now we're just using Naive Bayes; nothing too fancy or particularly precise.

------------------------

## [Badger](https://github.com/SOBotics/Badger) - Java

### Ability to detect the posts that have received the tumbleweed badges

Tumbleweed badge API returns only the user details. Using the data present on the user, we can find out as to which of their questions received the tumbleweed badge and then show those instead. Adding batches of Tumbleweed posts is the next thought.  

------------------------

## [apicache](https://github.com/SOBotics/apicache) - Python/Flask/Redis

APICache is a project that aims to provide a centralised server for getting cached responses from the Stack Exchange API. This saves on bots' quotas, as responses are cached and made available to everyone, no matter who requested them originally.

### General development effort
APICache is right at the start of development, and needs developers to help get it to a workable stage.

------------------------

## New projects that are yet to be started

### LQP Queue Monitor

Low Quality Posts queue is infested with robo-reviewers who have deleted many posts which turn up as bad audits. We have start to develop a bot in java, but time is running short are you ready to continue this development.
