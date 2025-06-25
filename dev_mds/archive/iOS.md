## iOS build out and React Native layer conditional functionality 


There will not be wake word fucntionality in the iOS version of this front end.

1. [x]  Use Platform.os to conditionally render all wake word related content only if platform is Android
        1.1 [x] Settings Screen
        1.2 [x] Voice Assistant Component and Home Screen

2. [x] Conditionally render a start chat button only for iOS that has the exact same functionality as wake word does for android.
        2.1 [x] You can press the button to begin a chat 
        2.2 [x] You can press the button to continue a chat 
        2.3 [x] Pressing the button to continue a chat toggles on voice mode if text mode was on
        2.4 [x] Any other functionality triggered by "wake word detected"


3. [x] Build out native iOS voice processing functionality equivalent to Android
        3.1 [x] Copy speech recognition timing parameters, retry logic, error handling
              
        3.2 [x] Do not copy wake word functionality as it will not be present in the iOS version, but copy and state management needed for conversation flow.
       

4. [ ] Open up an iOS simulator and test above