› Reloading apps
Android Bundled 45ms (index.ts)
 LOG  🌐 API: Using backend URL: https://mobile-jarvis-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 LOG  ✅ Global error handlers initialized
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  Calling getStatus() on WakeWordModule
 LOG  🔐 App: Getting initial auth session...
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  getStatus result: {"enabled": false}
 LOG  Wake word detection available: false
 LOG  Found initial URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  === DEEP LINK RECEIVED ===
 LOG  Full URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  URL starts with https:// false
 LOG  URL includes /oauth/ false
 LOG  ❌ URL did not match any OAuth patterns
 LOG  Expected OAuth patterns:
 LOG    1. Contains "oauth2redirect" or "com.googleusercontent.apps"
 LOG    2. Starts with "mobilejarvisnative://oauth/callback"
 LOG    3. Contains "code=" or "error=" parameters
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
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
 WARN  `new NativeEventEmitter()` was called with a non-null argument without the required `addListener` method. 
    at VoiceProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149718:25)
    at VoiceErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:234049:36)
    at AuthProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:172148:24)
    at EnsureSingleNavigator (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138911:24)
    at BaseNavigationContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137406:28)
    at ThemeProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:143119:21)
    at NavigationContainerInner (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142994:26)
    at AppErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233146:36)
    at App (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135960:41)
    at withDevTools(App) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135722:27)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at AppContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69787:36)
    at main(RootComponent) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117291:28)
 WARN  `new NativeEventEmitter()` was called with a non-null argument without the required `removeListeners` method. 
    at VoiceProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:149718:25)
    at VoiceErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:234049:36)
    at AuthProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:172148:24)
    at EnsureSingleNavigator (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138911:24)
    at BaseNavigationContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137406:28)
    at ThemeProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:143119:21)
    at NavigationContainerInner (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142994:26)
    at AppErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233146:36)
    at App (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135960:41)
    at withDevTools(App) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135722:27)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at AppContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69787:36)
    at main(RootComponent) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117291:28)
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@74b92b2
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_CONTEXT: User logged in, refreshing settings...
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH STARTED ==========
 LOG  🔄 VOICE_CONTEXT: User ID: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔄 VOICE_CONTEXT: Refreshing settings from database...
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  🔄 CONVERSATION_SYNC: User loaded, checking for background conversations...
 LOG  🔄 CONVERSATION_SYNC: Checking for background conversations...
 LOG  [ConversationSyncService] Checking for background conversations...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1756502205686}
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 1 background conversations
 LOG  📱 CONVERSATION_SYNC: Found 1 background conversations, merging...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Merging 1 background conversations into current history
 LOG  ✅ [ConversationSyncService] Merged history: 0 existing + 2 background = 2 total
 LOG  [ConversationSyncService] Marking 1 conversations as synced
 LOG  [ConversationSyncService] Marking conversation 8f8ad252-5d34-4416-b57f-44157165cc1b as processed
 LOG  ✅ [ConversationSyncService] Conversations marked as synced
 LOG  ✅ CONVERSATION_SYNC: Background conversations merged successfully
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1756502205722}
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 ERROR  TypeError: Cannot read property 'trim' of undefined

This error is located at:
    in ChatMessageContent (at VoiceAssistant.tsx:459)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:455)
    in RCTView (at View.js:116)
    in View (at VirtualizedListCellRenderer.js:207)
    in VirtualizedListCellContextProvider (at VirtualizedListCellRenderer.js:228)
    in CellRenderer (at VirtualizedList.js:803)
    in RCTView (at View.js:116)
    in View (at ScrollView.js:1732)
    in RCTScrollView (at ScrollView.js:1855)
    in ScrollView (at ScrollView.js:1925)
    in ScrollView (at VirtualizedList.js:1277)
    in VirtualizedListContextProvider (at VirtualizedList.js:1103)
    in VirtualizedList (at FlatList.js:687)
    in FlatList (at VoiceAssistant.tsx:438)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:437)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:435)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:381)
    in RCTView (at View.js:116)
    in View (at KeyboardAvoidingView.js:240)
    in KeyboardAvoidingView (at VoiceAssistant.tsx:376)
    in VoiceAssistant (at HomeScreen.tsx:28)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:27)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:13)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:12)
    in HomeScreen (at SceneView.tsx:132)
    in StaticContainer
    in EnsureSingleNavigator (at SceneView.tsx:124)
    in SceneView (at useDescriptors.tsx:218)
    in RCTView (at View.js:116)
    in View (at Screen.tsx:63)
    in RCTView (at View.js:116)
    in View (at Background.tsx:13)
    in Background (at Screen.tsx:58)
    in Screen (at BottomTabView.tsx:135)
    in RNSScreen (at createAnimatedComponent.js:54)
    in Unknown (at src/index.native.tsx:314)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:313)
    in InnerScreen (at src/index.native.tsx:566)
    in Screen (at ScreenFallback.tsx:39)
    in MaybeScreen (at BottomTabView.tsx:127)
    in RNSScreenContainer (at src/index.native.tsx:398)
    in ScreenContainer (at ScreenFallback.tsx:30)
    in MaybeScreenContainer (at BottomTabView.tsx:93)
    in RCTView (at View.js:116)
    in View (at SafeAreaProviderCompat.tsx:43)
    in SafeAreaProviderCompat (at BottomTabView.tsx:92)
    in BottomTabView (at createBottomTabNavigator.tsx:118)
    in PreventRemoveProvider (at useNavigationBuilder.tsx:718)
    in NavigationContent (at useComponent.tsx:35)
    in Unknown (at createBottomTabNavigator.tsx:117)
    in BottomTabNavigator (at App.tsx:753)
    in MainTabNavigator (at SceneView.tsx:132)
    in StaticContainer
    in EnsureSingleNavigator (at SceneView.tsx:124)
    in SceneView (at useDescriptors.tsx:218)
    in RCTView (at View.js:116)
    in View (at DebugContainer.native.tsx:34)
    in DebugContainer (at NativeStackView.native.tsx:82)
    in MaybeNestedStack (at NativeStackView.native.tsx:364)
    in RCTView (at View.js:116)
    in View (at NativeStackView.native.tsx:357)
    in RNSScreen (at createAnimatedComponent.js:54)
    in Unknown (at src/index.native.tsx:314)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:313)
    in InnerScreen (at src/index.native.tsx:566)
    in Screen (at NativeStackView.native.tsx:280)
    in SceneView (at NativeStackView.native.tsx:452)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:220)
    in RNSScreenStack (at src/index.native.tsx:227)
    in ScreenStack (at NativeStackView.native.tsx:440)
    in NativeStackViewInner (at NativeStackView.native.tsx:526)
    in RNCSafeAreaProvider (at SafeAreaContext.tsx:92)
    in SafeAreaProvider (at SafeAreaProviderCompat.tsx:55)
    in SafeAreaProviderCompat (at NativeStackView.native.tsx:525)
    in NativeStackView (at createNativeStackNavigator.tsx:72)
    in PreventRemoveProvider (at useNavigationBuilder.tsx:718)
    in NavigationContent (at useComponent.tsx:35)
    in Unknown (at createNativeStackNavigator.tsx:71)
    in NativeStackNavigator (at App.tsx:591)
    in WakeWordProvider (at App.tsx:590)
    in VoiceProvider (at App.tsx:588)
    in VoiceErrorBoundary (at App.tsx:587)
    in AuthProvider (at App.tsx:586)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:433)
    in BaseNavigationContainer (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in NavigationContainerInner (at App.tsx:585)
    in AppErrorBoundary (at App.tsx:584)
    in App (at withDevTools.js:18)
    in withDevTools(App) (at renderApplication.js:57)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:127)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:155)
    in AppContainer (at renderApplication.js:50)
    in main(RootComponent) (at renderApplication.js:67), js engine: hermes
 ERROR  🎤 Voice Error Caught: {"componentStack": "
    in ChatMessageContent (at VoiceAssistant.tsx:459)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:455)
    in RCTView (at View.js:116)
    in View (at VirtualizedListCellRenderer.js:207)
    in VirtualizedListCellContextProvider (at VirtualizedListCellRenderer.js:228)
    in CellRenderer (at VirtualizedList.js:803)
    in RCTView (at View.js:116)
    in View (at ScrollView.js:1732)
    in RCTScrollView (at ScrollView.js:1855)
    in ScrollView (at ScrollView.js:1925)
    in ScrollView (at VirtualizedList.js:1277)
    in VirtualizedListContextProvider (at VirtualizedList.js:1103)
    in VirtualizedList (at FlatList.js:687)
    in FlatList (at VoiceAssistant.tsx:438)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:437)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:435)
    in RCTView (at View.js:116)
    in View (at VoiceAssistant.tsx:381)
    in RCTView (at View.js:116)
    in View (at KeyboardAvoidingView.js:240)
    in KeyboardAvoidingView (at VoiceAssistant.tsx:376)
    in VoiceAssistant (at HomeScreen.tsx:28)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:27)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:13)
    in RCTView (at View.js:116)
    in View (at HomeScreen.tsx:12)
    in HomeScreen (at SceneView.tsx:132)
    in StaticContainer
    in EnsureSingleNavigator (at SceneView.tsx:124)
    in SceneView (at useDescriptors.tsx:218)
    in RCTView (at View.js:116)
    in View (at Screen.tsx:63)
    in RCTView (at View.js:116)
    in View (at Background.tsx:13)
    in Background (at Screen.tsx:58)
    in Screen (at BottomTabView.tsx:135)
    in RNSScreen (at createAnimatedComponent.js:54)
    in Unknown (at src/index.native.tsx:314)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:313)
    in InnerScreen (at src/index.native.tsx:566)
    in Screen (at ScreenFallback.tsx:39)
    in MaybeScreen (at BottomTabView.tsx:127)
    in RNSScreenContainer (at src/index.native.tsx:398)
    in ScreenContainer (at ScreenFallback.tsx:30)
    in MaybeScreenContainer (at BottomTabView.tsx:93)
    in RCTView (at View.js:116)
    in View (at SafeAreaProviderCompat.tsx:43)
    in SafeAreaProviderCompat (at BottomTabView.tsx:92)
    in BottomTabView (at createBottomTabNavigator.tsx:118)
    in PreventRemoveProvider (at useNavigationBuilder.tsx:718)
    in NavigationContent (at useComponent.tsx:35)
    in Unknown (at createBottomTabNavigator.tsx:117)
    in BottomTabNavigator (at App.tsx:753)
    in MainTabNavigator (at SceneView.tsx:132)
    in StaticContainer
    in EnsureSingleNavigator (at SceneView.tsx:124)
    in SceneView (at useDescriptors.tsx:218)
    in RCTView (at View.js:116)
    in View (at DebugContainer.native.tsx:34)
    in DebugContainer (at NativeStackView.native.tsx:82)
    in MaybeNestedStack (at NativeStackView.native.tsx:364)
    in RCTView (at View.js:116)
    in View (at NativeStackView.native.tsx:357)
    in RNSScreen (at createAnimatedComponent.js:54)
    in Unknown (at src/index.native.tsx:314)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:313)
    in InnerScreen (at src/index.native.tsx:566)
    in Screen (at NativeStackView.native.tsx:280)
    in SceneView (at NativeStackView.native.tsx:452)
    in Suspender (at src/index.tsx:27)
    in Suspense (at src/index.tsx:26)
    in Freeze (at src/index.native.tsx:206)
    in DelayedFreeze (at src/index.native.tsx:220)
    in RNSScreenStack (at src/index.native.tsx:227)
    in ScreenStack (at NativeStackView.native.tsx:440)
    in NativeStackViewInner (at NativeStackView.native.tsx:526)
    in RNCSafeAreaProvider (at SafeAreaContext.tsx:92)
    in SafeAreaProvider (at SafeAreaProviderCompat.tsx:55)
    in SafeAreaProviderCompat (at NativeStackView.native.tsx:525)
    in NativeStackView (at createNativeStackNavigator.tsx:72)
    in PreventRemoveProvider (at useNavigationBuilder.tsx:718)
    in NavigationContent (at useComponent.tsx:35)
    in Unknown (at createNativeStackNavigator.tsx:71)
    in NativeStackNavigator (at App.tsx:591)
    in WakeWordProvider (at App.tsx:590)
    in VoiceProvider (at App.tsx:588)
    in VoiceErrorBoundary (at App.tsx:587)
    in AuthProvider (at App.tsx:586)
    in EnsureSingleNavigator (at BaseNavigationContainer.tsx:433)
    in BaseNavigationContainer (at NavigationContainer.tsx:132)
    in ThemeProvider (at NavigationContainer.tsx:131)
    in NavigationContainerInner (at App.tsx:585)
    in AppErrorBoundary (at App.tsx:584)
    in App (at withDevTools.js:18)
    in withDevTools(App) (at renderApplication.js:57)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:127)
    in RCTView (at View.js:116)
    in View (at AppContainer.js:155)
    in AppContainer (at renderApplication.js:50)
    in main(RootComponent) (at renderApplication.js:67)", "crashType": "unknown", "deviceInfo": {"platform": "android", "version": 34}, "error": "Cannot read property 'trim' of undefined", "errorCount": 1, "stack": "TypeError: Cannot read property 'trim' of undefined
    at ChatMessageContent (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:211456:41)
    at renderWithHooks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:97916:33)
    at mountIndeterminateComponent (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:100996:34)
    at beginWork (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:102242:49)
    at beginWork$1 (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106587:29)
    at performUnitOfWork (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105930:29)
    at workLoopSync (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105865:28)
    at renderRootSync (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105842:25)
    at performSyncWorkOnRoot (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105567:40)
    at flushSyncCallbacks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:94767:36)
    at flushSyncCallbacksOnlyInLegacyMode (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:94749:29)
    at scheduleUpdateOnFiber (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105129:47)
    at dispatchSetState (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:98893:34)
    at ?anon_0_ (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:174265:33)
    at next (native)
    at asyncGeneratorStep (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at tryCallOne (/root/react-native/packages/react-native/ReactAndroid/hermes-engine/.cxx/Release/465x5562/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:53:16)
    at anonymous (/root/react-native/packages/react-native/ReactAndroid/hermes-engine/.cxx/Release/465x5562/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:139:27)
    at apply (native)
    at anonymous (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46692:26)
    at _callTimer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46571:17)
    at _callReactNativeMicrotasksPass (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46616:17)
    at callReactNativeMicrotasks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46822:44)
    at __callReactNativeMicrotasks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9196:48)
    at anonymous (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8969:45)
    at __guard (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9168:15)
    at flushedQueue (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8968:21)
    at invokeCallbackAndReturnFlushedQueue (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8962:33)"} 
    at VoiceErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:234049:36)
    at AuthProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:172148:24)
    at EnsureSingleNavigator (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:138911:24)
    at BaseNavigationContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:137406:28)
    at ThemeProvider (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:143119:21)
    at NavigationContainerInner (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:142994:26)
    at AppErrorBoundary (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:233146:36)
    at App (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135960:41)
    at withDevTools(App) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:135722:27)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at RCTView
    at View (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69975:43)
    at AppContainer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:69787:36)
    at main(RootComponent) (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:117291:28)
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  🎧 WAKE_WORD_CONTEXT: Cleaning up wake word event listener
 ERROR  📊 Error Report: {"appState": {"accessibilityEnabled": false, "crashResilienceMode": "normal", "isBackground": false, "locale": "en-US"}, "context": "VoiceErrorBoundary:unknown", "crashContext": {"bridgeState": "normal", "crashType": "voice_processing", "isRecovering": false, "memoryTrend": "unknown", "recoveryAttempts": 0, "relatedCrashes": 0, "severity": "medium"}, "deviceInfo": {"isIPhone14Pro": false, "memoryCapacity": undefined, "model": "Android", "platform": "android", "screenDensity": 2.5, "version": "34"}, "localeContext": {"currentLocale": "en-US", "icuCompatible": true, "localeValidationWarnings": [], "safeLocale": "en-US"}, "message": "Cannot read property 'trim' of undefined", "sessionDuration": 58, "stack": "TypeError: Cannot read property 'trim' of undefined
    at ChatMessageContent (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:211456:41)
    at renderWithHooks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:97916:33)
    at mountIndeterminateComponent (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:100996:34)
    at beginWork (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:102242:49)
    at beginWork$1 (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:106587:29)
    at performUnitOfWork (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105930:29)
    at workLoopSync (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105865:28)
    at renderRootSync (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105842:25)
    at performSyncWorkOnRoot (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105567:40)
    at flushSyncCallbacks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:94767:36)
    at flushSyncCallbacksOnlyInLegacyMode (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:94749:29)
    at scheduleUpdateOnFiber (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:105129:47)
    at dispatchSetState (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:98893:34)
    at ?anon_0_ (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:174265:33)
    at next (native)
    at asyncGeneratorStep (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7151:19)
    at _next (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:7165:29)
    at tryCallOne (/root/react-native/packages/react-native/ReactAndroid/hermes-engine/.cxx/Release/465x5562/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:53:16)
    at anonymous (/root/react-native/packages/react-native/ReactAndroid/hermes-engine/.cxx/Release/465x5562/arm64-v8a/lib/InternalBytecode/InternalBytecode.js:139:27)
    at apply (native)
    at anonymous (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46692:26)
    at _callTimer (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46571:17)
    at _callReactNativeMicrotasksPass (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46616:17)
    at callReactNativeMicrotasks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:46822:44)
    at __callReactNativeMicrotasks (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9196:48)
    at anonymous (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8969:45)
    at __guard (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:9168:15)
    at flushedQueue (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8968:21)
    at invokeCallbackAndReturnFlushedQueue (http://localhost:8081/index.bundle//&platform=android&dev=true&lazy=true&minify=false&app=com.hightowerai.MobileJarvisNative&modulesOnly=false&runModule=true&transform.routerRoot=app&transform.engine=hermes&transform.bytecode=true:8962:33)", "timestamp": "2025-08-29T21:16:46.174Z"}
 LOG  🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========
 LOG  🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database: false
 LOG  🎤 VOICE_CONTEXT: Wake word sensitivity: 0.05
 LOG  🎤 VOICE_CONTEXT: Selected wake word: Juniper
 LOG  🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========
 LOG  🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...
 LOG  🔍 VOICE_SETTINGS: updateSettings called with: {
  "deepgramEnabled": false,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "wakeWord": "Juniper",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.05,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en"
}
 LOG  🔍 VOICE_SETTINGS: updates keys: ["deepgramEnabled", "baseLanguageModel", "generalInstructions", "wakeWord", "selectedWakeWord", "wakeWordSensitivity", "wakeWordDetectionEnabled", "selectedDeepgramVoice"]
 LOG  📱 VOICE_SETTINGS: Saving settings to storage...
 LOG  ✅ VOICE_SETTINGS: Settings saved successfully
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 447 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
