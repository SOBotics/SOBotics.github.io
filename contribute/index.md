# General

## API cache

We are planning to cache the results of `/posts` or `/answers`. This would save us tons of requests to the SE API and would make it possible to run multiple bots on the same IP.
The AU-version of Natty for example could run on the same server as Guttenberg although they both use the API a lot. (multiple request per minute and bot)

# Guttenberg

## More reasons for a post to be reported (LINQ?)

With SOBotics/Guttenberg#74, it will be easier to add reasons that trigger a report.
It would be helpful, ff someone comes up with new reasons that could improve our results. For this, implementing LINQ could be tested. ( SOBotics/Guttenberg#73 )

## More sources

At the moment, Guttenberg can only compare posts to linked or related questions with the target. Getting data from GitHub or a search engine could improve the results.
