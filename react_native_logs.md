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
 WARN  [ConversationSyncService] Only available on Android
 WARN  [ConversationSyncService] Native ConversationSyncModule not available
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  🔐 App: Getting initial auth session...
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  Wake word detection available: false
 LOG  📁 StorageInitializer: Creating AsyncStorage directory...
 LOG  No initial URL found
 LOG  ✅ StorageInitializer: AsyncStorage directory created
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ App: Initialization sequence completed
 LOG  🔐 Auth state changed: INITIAL_SESSION false
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 WARN  VoiceModule not found, returning cached state
 ERROR  VoiceModule eventEmitter not available, voice state changes not supported
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  🎧 WAKE_WORD_CONTEXT: Setting up wake word event listener...
 LOG  🎧 WAKE_WORD_CONTEXT: Current voice state: IDLE
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🎧 WAKE_WORD_CONTEXT: ✅ Wake word listener registered successfully
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 WARN  VoiceModule not found, returning cached state
 ERROR  VoiceModule eventEmitter not available, voice state changes not supported
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
 LOG  [AppStateService] iOS platform - using React Native AppState only
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
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on ios - deepgramEnabled: false, voice: aura-2-thalia-en
 ERROR  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
 ERROR  🎵 VOICE_SETTINGS: ❌ Error updating voice settings: [TypeError: Cannot read property 'updateVoiceSettings' of null]
 ERROR  🎵 VOICE_SETTINGS: Error type: TypeError
 LOG  Auth state changed: INITIAL_SESSION
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  🎤 WAKE_WORD_SERVICE: Wake word detection not supported on iOS
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔄 WAKE_WORD_CONTEXT: Native wake word state: false
 ERROR  Warning: 🎵 VOICE_SETTINGS: Error stack: TypeError: Cannot read property 'updateVoiceSettings' of null

  553 |
  554 |             const nativeCallStartTime = Date.now();
> 555 |             const result = await VoiceModule.updateVoiceSettings(deepgramEnabled, selectedDeepgramVoice);
      |                                                                 ^
  556 |             const nativeCallEndTime = Date.now();
  557 |             
  558 |

Call Stack
  updateVoiceSettings (src/voice/VoiceService.ts:555:65)
  tryCallTwo (address at (InternalBytecode.js:1:1222)
  doResolve (address at (InternalBytecode.js:1:2541)
  Promise (address at (InternalBytecode.js:1:1318)
  updateVoiceSettings (src/voice/VoiceService.ts:548:37)
  loadSettings (src/voice/hooks/useVoiceSettings.ts:68:47)
  tryCallOne (address at (InternalBytecode.js:1:1180)
  anonymous (address at (InternalBytecode.js:1:1874)
