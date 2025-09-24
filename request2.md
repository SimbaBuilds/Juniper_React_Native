Two issues:
- [ ]  foreground to background conversation persistence not happening
- [ ]  background to foreground loading each time the app is reopened with no deduplication (duplicated messages showing up in chat)

The logs show a foreground conversation moved to background with seemingly no conversation persistence and then background moved to foreground twice to show duplicated messages.

First, see if you have enough information from the logs to address the first error of foreground to background persistence.

Update: 

- [ ]  foreground to background conversation persistence not happening
    - either only loaded most recent message or the prior foreground conversation is not persisting to background (1 turn each in foreground and then 1 turn each in background — only persisting most recent one each turn when come back to foreground)
- [ ]  background to foreground loading each time the app is reopened with no deduplication -
    - seems to be fixed

See logs.