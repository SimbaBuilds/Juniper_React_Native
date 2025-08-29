 LOG  ✅ StorageInitializer: AsyncStorage directory already exists
 LOG  No initial URL found
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 ERROR  [AuthApiError: Invalid Refresh Token: Refresh Token Not Found]
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ App: Initialization sequence completed
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  🎧 WAKE_WORD_CONTEXT: Setting up wake word event listener...
 LOG  🎧 WAKE_WORD_CONTEXT: Current voice state: IDLE
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🎧 WAKE_WORD_CONTEXT: ✅ Wake word listener registered successfully
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: IDLE
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 ERROR  Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.

This error is located at:
    in VoiceProvider (at App.tsx:588)
    in VoiceErrorBoundary (at App.tsx:587)
    in AuthProvider (at App.tsx:586)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:433)
    in BaseNavigationContainer (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in NavigationContainerInner (at App.tsx:585)
    in AppErrorBoundary (at App.tsx:584)
    in App (at withDevTools.ios.js:29)
    in withDevTools(App) (at renderApplication.js:57)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:127)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:155)
    in AppContainer (at renderApplication.js:50)
    in main(RootComponent) (at renderApplication.js:67), js engine: hermes
 ERROR  🎤 Voice Error Caught: {"componentStack": "
    in VoiceProvider (at App.tsx:588)
    in VoiceErrorBoundary (at App.tsx:587)
    in AuthProvider (at App.tsx:586)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:433)
    in BaseNavigationContainer (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in NavigationContainerInner (at App.tsx:585)
    in AppErrorBoundary (at App.tsx:584)
    in App (at withDevTools.ios.js:29)
    in withDevTools(App) (at renderApplication.js:57)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:127)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:155)
    in AppContainer (at renderApplication.js:50)
    in main(RootComponent) (at renderApplication.js:67)", "crashType": "unknown", "deviceInfo": {"platform": "ios", "version": "18.6.2"}, "error": "`new NativeEventEmitter()` requires a non-null argument.", "errorCount": 1, "stack": "Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.
    at invariant (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7896:26)
    at NativeEventEmitter (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:49909:32)
    at AppStateService (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173569:165)
    at getInstance (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173724:57)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:150083:65)
    at commitHookEffectListMount (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:103622:38)
    at commitPassiveMountOnFiber (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104823:44)
    at commitPassiveMountEffects_complete (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104795:40)
    at commitPassiveMountEffects_begin (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104785:47)
    at commitPassiveMountEffects (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104775:40)
    at flushPassiveEffectsImpl (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106449:34)
    at flushPassiveEffects (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106405:43)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106238:34)"} 
    at VoiceErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233870:36)
    at AuthProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:171946:24)
    at EnsureSingleNavigator (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138709:24)
    at BaseNavigationContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137204:28)
    at ThemeProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142917:21)
    at NavigationContainerInner (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142792:26)
    at AppErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:232967:36)
    at App (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135758:41)
    at withDevTools(App) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135305:27)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at AppContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69986:36)
    at main(RootComponent) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117426:28)
 LOG  🎧 WAKE_WORD_CONTEXT: Cleaning up wake word event listener
 ERROR  📊 Error Report: {"appState": {"accessibilityEnabled": false, "crashResilienceMode": "normal", "isBackground": false, "locale": "en-US"}, "context": "VoiceErrorBoundary:unknown", "crashContext": {"bridgeState": "normal", "crashType": "voice_processing", "isRecovering": false, "memoryTrend": "unknown", "recoveryAttempts": 0, "relatedCrashes": 0, "severity": "medium"}, "deviceInfo": {"isIPhone14Pro": false, "memoryCapacity": undefined, "model": "iPhone", "platform": "ios", "screenDensity": 3, "version": "18.6.2"}, "localeContext": {"currentLocale": "en-US", "icuCompatible": true, "localeValidationWarnings": [], "safeLocale": "en-US"}, "message": "`new NativeEventEmitter()` requires a non-null argument.", "sessionDuration": 21, "stack": "Invariant Violation: `new NativeEventEmitter()` requires a non-null argument.
    at invariant (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7896:26)
    at NativeEventEmitter (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:49909:32)
    at AppStateService (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173569:165)
    at getInstance (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173724:57)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:150083:65)
    at commitHookEffectListMount (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:103622:38)
    at commitPassiveMountOnFiber (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104823:44)
    at commitPassiveMountEffects_complete (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104795:40)
    at commitPassiveMountEffects_begin (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104785:47)
    at commitPassiveMountEffects (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:104775:40)
    at flushPassiveEffectsImpl (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106449:34)
    at flushPassiveEffects (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106405:43)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106238:34)", "timestamp": "2025-08-29T22:46:10.195Z"}
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: idle
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: idle
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: idle
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: idle
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: idle
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: idle
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on ios - deepgramEnabled: true, voice: aura-2-pandora-en
 LOG  🔐 Auth state changed: INITIAL_SESSION false
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  Auth state changed: INITIAL_SESSION
