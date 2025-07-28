[libapp_launch_measurement.dylib] Failed to send CA Event for app launch measurements for ca_event_type: 0 event_name: com.apple.app_launch_measurement.FirstFramePresentationMetric
[libapp_launch_measurement.dylib] Failed to send CA Event for app launch measurements for ca_event_type: 1 event_name: com.apple.app_launch_measurement.ExtendedLaunchMetrics
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "http://192.168.1.145:8000"}
 ERROR  Error getting server API config: [TypeError: Cannot read property 'getServerApiConfig' of null]
 LOG  Available native modules: []
 LOG  WakeWordModule available: No
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "http://192.168.1.145:8000"}
 LOG  Loaded server config from native settings: {"apiEndpoint": "/api/chat", "baseUrl": "http://192.168.1.145:8000"}
 LOG  Calling getStatus() on WakeWordModule
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  getStatus result: {"enabled": false}
 LOG  Wake word detection available: false
 LOG  No initial URL found
 ERROR  Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.

This error is located at:
    in VoiceProvider (at App.tsx:455)
    in AuthProvider (at App.tsx:454)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:433)
    in BaseNavigationContainer (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in NavigationContainerInner (at App.tsx:453)
    in App (at withDevTools.ios.js:29)
    in withDevTools(App) (at renderApplication.js:57)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:127)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:155)
    in AppContainer (at renderApplication.js:50)
    in main(RootComponent) (at renderApplication.js:67), js engine: hermes
 ERROR  Error initializing app: [Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.]
 LOG  Removing deep link event listener...