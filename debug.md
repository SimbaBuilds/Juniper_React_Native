› Reloading apps
iOS Bundled 44ms (index.ts)
 ERROR  SafeVoiceModule not found in NativeModules. Falling back to mock implementation.
 LOG  Available Voice-related modules: []
 LOG  All available NativeModules: []
 LOG  🌐 API: Using backend URL: https://mobile-jarvis-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: No
 LOG  ✅ Global error handlers initialized
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  🔐 App: Getting initial auth session...
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  Wake word detection available: false
 LOG  ✅ StorageInitializer: AsyncStorage directory already exists
 LOG  No initial URL found
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ App: Initialization sequence completed
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 WARN  SafeVoiceModule not found, returning cached state 
    at WakeWordProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173437:24)
    at VoiceProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149514:25)
    at VoiceErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233208:36)
    at AuthProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:171801:24)
    at EnsureSingleNavigator (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138709:24)
    at BaseNavigationContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137204:28)
    at ThemeProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142917:21)
    at NavigationContainerInner (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142792:26)
    at AppErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:232700:36)
    at App (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135758:41)
    at withDevTools(App) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135305:27)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at AppContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69986:36)
    at main(RootComponent) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117426:28)
 ERROR  SafeVoiceModule eventEmitter not available, voice state changes not supported 
    at WakeWordProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:173437:24)
    at VoiceProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149514:25)
    at VoiceErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233208:36)
    at AuthProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:171801:24)
    at EnsureSingleNavigator (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138709:24)
    at BaseNavigationContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137204:28)
    at ThemeProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142917:21)
    at NavigationContainerInner (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142792:26)
    at AppErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:232700:36)
    at App (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135758:41)
    at withDevTools(App) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135305:27)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at AppContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69986:36)
    at main(RootComponent) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117426:28)
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  🎧 WAKE_WORD_CONTEXT: Setting up wake word event listener...
 LOG  🎧 WAKE_WORD_CONTEXT: Current voice state: IDLE
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🎧 WAKE_WORD_CONTEXT: ✅ Wake word listener registered successfully
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 WARN  SafeVoiceModule not found, returning cached state 
    at VoiceProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149514:25)
    at VoiceErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233208:36)
    at AuthProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:171801:24)
    at EnsureSingleNavigator (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138709:24)
    at BaseNavigationContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137204:28)
    at ThemeProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142917:21)
    at NavigationContainerInner (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142792:26)
    at AppErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:232700:36)
    at App (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135758:41)
    at withDevTools(App) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135305:27)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at AppContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69986:36)
    at main(RootComponent) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117426:28)
 ERROR  SafeVoiceModule eventEmitter not available, voice state changes not supported 
    at VoiceProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149514:25)
    at VoiceErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233208:36)
    at AuthProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:171801:24)
    at EnsureSingleNavigator (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138709:24)
    at BaseNavigationContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137204:28)
    at ThemeProvider (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142917:21)
    at NavigationContainerInner (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142792:26)
    at AppErrorBoundary (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:232700:36)
    at App (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135758:41)
    at withDevTools(App) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135305:27)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at RCTView
    at View (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:70174:43)
    at AppContainer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69986:36)
    at main(RootComponent) (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117426:28)
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
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: IDLE
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: IDLE
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on ios - deepgramEnabled: true, voice: aura-2-pandora-en
 ERROR  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
 ERROR  🎵 VOICE_SETTINGS: ❌ Error updating voice settings: [TypeError: Cannot read property 'updateVoiceSettings' of null]
 ERROR  🎵 VOICE_SETTINGS: Error type: TypeError
 ERROR  🎵 VOICE_SETTINGS: Error stack: TypeError: Cannot read property 'updateVoiceSettings' of null
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151119:67)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7170:14)
    at tryCallTwo (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:61:9)
    at doResolve (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:216:25)
    at Promise (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:82:14)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7162:25)
    at apply (native)
    at updateVoiceSettings (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151140:44)
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:170390:49)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at tryCallOne (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:53:16)
    at anonymous (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:139:27)
    at apply (native)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46831:26)
    at _callTimer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46710:17)
    at _callReactNativeMicrotasksPass (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46755:17)
    at callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46961:44)
    at __callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9196:48)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8969:45)
    at __guard (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9168:15)
    at flushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8968:21)
    at invokeCallbackAndReturnFlushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8962:33)
 LOG  🧹 Cleaning up voice event listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  🎤 WAKE_WORD_SERVICE: Wake word detection not supported on iOS
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 WAKE_WORD_CONTEXT: Native wake word state: false
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: IDLE
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_CONTEXT: User logged in, refreshing settings...
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH STARTED ==========
 LOG  🔄 VOICE_CONTEXT: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔄 VOICE_CONTEXT: Refreshing settings from database...
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  🔍 ONBOARDING: Settings still loading, waiting...
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on ios - deepgramEnabled: true, voice: aura-2-pandora-en
 ERROR  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
 ERROR  🎵 VOICE_SETTINGS: ❌ Error updating voice settings: [TypeError: Cannot read property 'updateVoiceSettings' of null]
 ERROR  🎵 VOICE_SETTINGS: Error type: TypeError
 ERROR  🎵 VOICE_SETTINGS: Error stack: TypeError: Cannot read property 'updateVoiceSettings' of null
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151119:67)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7170:14)
    at tryCallTwo (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:61:9)
    at doResolve (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:216:25)
    at Promise (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:82:14)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7162:25)
    at apply (native)
    at updateVoiceSettings (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151140:44)
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:170390:49)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at tryCallOne (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:53:16)
    at anonymous (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:139:27)
    at apply (native)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46831:26)
    at _callTimer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46710:17)
    at _callReactNativeMicrotasksPass (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46755:17)
    at callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46961:44)
    at __callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9196:48)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8969:45)
    at __guard (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9168:15)
    at flushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8968:21)
    at invokeCallbackAndReturnFlushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8962:33)
 LOG  🧹 Cleaning up voice event listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  🎤 WAKE_WORD_SERVICE: Wake word detection not supported on iOS
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  🔄 WAKE_WORD_CONTEXT: Native wake word state: false
 LOG  🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========
 LOG  🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database: false
 LOG  🎤 VOICE_CONTEXT: Wake word sensitivity: 0.1
 LOG  🎤 VOICE_CONTEXT: Selected wake word: Jarvis
 LOG  🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========
 LOG  🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...
 LOG  🔍 VOICE_SETTINGS: updateSettings called with: {
  "deepgramEnabled": true,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "wakeWord": "Jarvis",
  "selectedWakeWord": "Jarvis",
  "wakeWordSensitivity": 0.1,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en"
}
 LOG  🔍 VOICE_SETTINGS: updates keys: ["deepgramEnabled", "baseLanguageModel", "generalInstructions", "wakeWord", "selectedWakeWord", "wakeWordSensitivity", "wakeWordDetectionEnabled", "selectedDeepgramVoice"]
 LOG  📱 VOICE_SETTINGS: Saving settings to storage...
 LOG  ✅ VOICE_SETTINGS: Settings saved successfully
 LOG  🧹 Cleaning up voice event listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on ios - deepgramEnabled: true, voice: aura-2-pandora-en
 ERROR  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
 ERROR  🎵 VOICE_SETTINGS: ❌ Error updating voice settings: [TypeError: Cannot read property 'updateVoiceSettings' of null]
 ERROR  🎵 VOICE_SETTINGS: Error type: TypeError
 ERROR  🎵 VOICE_SETTINGS: Error stack: TypeError: Cannot read property 'updateVoiceSettings' of null
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151119:67)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7170:14)
    at tryCallTwo (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:61:9)
    at doResolve (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:216:25)
    at Promise (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:82:14)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7162:25)
    at apply (native)
    at updateVoiceSettings (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:151140:44)
    at ?anon_0_ (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:170483:49)
    at next (native)
    at asyncGeneratorStep (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at tryCallOne (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:53:16)
    at anonymous (/Users/distiller/react-native/packages/react-native/sdks/hermes/build_iphoneos/lib/InternalBytecode/InternalBytecode.js:139:27)
    at apply (native)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46831:26)
    at _callTimer (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46710:17)
    at _callReactNativeMicrotasksPass (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46755:17)
    at callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46961:44)
    at __callReactNativeMicrotasks (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9196:48)
    at anonymous (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8969:45)
    at __guard (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9168:15)
    at flushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8968:21)
    at invokeCallbackAndReturnFlushedQueue (http://192.168.1.80:8081/index.bundle//&platform=ios&dev=true&lazy=true&minify=false&inlineSourceMap=false&modulesOnly=false&runModule=true&app=com.hightowerai.MobileJarvisNative&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8962:33)
 LOG  🎤 WAKE_WORD_SERVICE: Wake word detection not supported on iOS
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 566 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
