Finally, we need to debug and build out conversation history coordination between React Native and background chat.

- [ ]  resume chat in foreground
    - [ ]  is there current logic for persisting history from background to foreground chat?  If there it is not working.
- [ ]  resume chat in background
    - [ ]  sync current RN history state on app load?
    - [ ]  sync RN history to native state each api response - include in any background chats
- RN clears history clear after 10 minutes
    - [ ]  propagate to native when this happens to native


Please investigate all of the above and create an implementation/fix plan.