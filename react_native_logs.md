› Reloading apps
Android Bundled 49ms index.js (1 module)
Android Bundled 48ms index.js (1 module)
 LOG  🌐 API: Using backend URL: https://juniper-python-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  🌐 BackgroundApiService: Platform.OS = android
 LOG  🌐 BackgroundApiService: BackgroundApiModule = false
 LOG  🌐 BackgroundApiService: BackgroundApiModule type = object
 LOG  🌐 BackgroundApiService: Not iOS platform
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  Calling getStatus() on WakeWordModule
 LOG  🔐 App: Getting initial auth session...
 LOG  🏥 App: Starting health data sync...
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
 LOG  🏥 HealthSync: Starting health data sync for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🤖 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🤖 GoogleHealthConnectDataService: Starting wearables_data sync
 LOG  🤖 Syncing 7 days of data for user f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e, integration 8e017599-b702-4450-9479-bee1828c30f8
 LOG  🤖 Health Connect client initialized successfully for wearables sync
 LOG  🤖 Syncing data from 2025-09-22T05:00:00.000Z to 2025-09-30T00:26:01.385Z
 LOG  🤖 Syncing heart rate data...
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-30T00:26:01.385Z", 
 LOG  🤖 Created 0 vital signs records
 LOG  🤖 Total records to sync: 0
 LOG  ✅ Wearables data sync completed successfully
 LOG  🤖 HealthSync: Successfully synced Google Health data to wearables_data
 LOG  🔄 Health Connect: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Health Connect: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)", "Google Health Connect: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Google Health Connect", "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ Component health initialized: success=true
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
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
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
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191962090}
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 0 background conversations
 LOG  📱 CONVERSATION_SYNC: No background conversations found
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔍 REQUEST_CHECK: Checking for uncompleted requests...
 LOG  🔍 DB_QUERY: Getting uncompleted requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ✅ Integration completion handler registered
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🌐 API: Using backend URL: https://juniper-python-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  🌐 BackgroundApiService: Platform.OS = android
 LOG  🌐 BackgroundApiService: BackgroundApiModule = false
 LOG  🌐 BackgroundApiService: BackgroundApiModule type = object
 LOG  🌐 BackgroundApiService: Not iOS platform
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  Calling getStatus() on WakeWordModule
 LOG  🔐 App: Getting initial auth session...
 LOG  🏥 App: Starting health data sync...
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
 LOG  🏥 HealthSync: Starting health data sync for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191962284}
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
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
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔍 DB_QUERY: Found 32 uncompleted requests
 LOG  📊 REQUEST_CHECK: Found 32 uncompleted requests
 LOG  📊 REQUEST_CHECK: Most recent uncompleted request: 1759191203523-dtd8gadva status: cancelled
 LOG  📊 REQUEST_CHECK: Request is recent ( 13 minutes old), resuming
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1759191203523-dtd8gadva
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191962831}
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 323 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
 LOG  🎯 SOURCE_3: checkUnfetchedRequests starting...
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-30T00:13:23.886+00:00", "id": "7e0abd81-4aca-4ac2-914d-7f870adeab2b", "requestId": "1759191203523-dtd8gadva", "status": "cancelled", "total_turns": 0, "updated_at": "2025-09-30T00:13:27.328806+00:00", "user_message": "{\"error\": \"limit_exceeded\", \"error_type\": \"monthly_requests\", \"current_tier\": \"free\", \"current_usage\": 32, \"limit\": 20, \"requests_remaining_month\": 0, \"message\": \"The user has reached the limit for monthly requests. Please notify them and let them know that they can manage their account in the web app at https://juniperassistant.com.\"}"}
 LOG  🔍 DB_QUERY: Returning status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_RESULT: Received status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: cancelled
 LOG  📊 REQUEST_STATUS: Status changed to: cancelled
 LOG  📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: cancelled stopping polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1759191203523-dtd8gadva
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-30T00:13:23.886+00:00", "id": "7e0abd81-4aca-4ac2-914d-7f870adeab2b", "requestId": "1759191203523-dtd8gadva", "status": "cancelled", "total_turns": 0, "updated_at": "2025-09-30T00:13:27.328806+00:00", "user_message": "{\"error\": \"limit_exceeded\", \"error_type\": \"monthly_requests\", \"current_tier\": \"free\", \"current_usage\": 32, \"limit\": 20, \"requests_remaining_month\": 0, \"message\": \"The user has reached the limit for monthly requests. Please notify them and let them know that they can manage their account in the web app at https://juniperassistant.com.\"}"}
 LOG  🔍 DB_QUERY: Returning status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_RESULT: Received status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: cancelled
 LOG  📊 REQUEST_STATUS: Status changed to: cancelled
 LOG  📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: cancelled stopping polling
 LOG  📊 POLLING_HOOK_STOPPED: Polling interval cleared
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🤖 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🤖 GoogleHealthConnectDataService: Starting wearables_data sync
 LOG  🤖 Syncing 7 days of data for user f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e, integration 8e017599-b702-4450-9479-bee1828c30f8
 LOG  🤖 Health Connect client initialized successfully for wearables sync
 LOG  🤖 Syncing data from 2025-09-22T05:00:00.000Z to 2025-09-30T00:26:03.637Z
 LOG  🤖 Syncing heart rate data...

 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}

 LOG  🤖 Created 0 vital signs records
 LOG  🤖 Total records to sync: 0
 LOG  ✅ Wearables data sync completed successfully
 LOG  🤖 HealthSync: Successfully synced Google Health data to wearables_data
 LOG  🔄 Health Connect: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Health Connect: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)", "Google Health Connect: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Google Health Connect", "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ Component health initialized: success=true
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
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
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
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191965887}
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 0 background conversations
 LOG  📱 CONVERSATION_SYNC: No background conversations found
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191965927}
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔍 REQUEST_CHECK: Checking for uncompleted requests...
 LOG  🔍 DB_QUERY: Getting uncompleted requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@acdbd7a
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ✅ Integration completion handler registered
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  🔍 DB_QUERY: Found 32 uncompleted requests
 LOG  📊 REQUEST_CHECK: Found 32 uncompleted requests
 LOG  📊 REQUEST_CHECK: Most recent uncompleted request: 1759191203523-dtd8gadva status: cancelled
 LOG  📊 REQUEST_CHECK: Request is recent ( 13 minutes old), resuming
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
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
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1759191203523-dtd8gadva
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
 LOG  🎯 SOURCE_3: checkUnfetchedRequests starting...
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-30T00:13:23.886+00:00", "id": "7e0abd81-4aca-4ac2-914d-7f870adeab2b", "requestId": "1759191203523-dtd8gadva", "status": "cancelled", "total_turns": 0, "updated_at": "2025-09-30T00:13:27.328806+00:00", "user_message": "{\"error\": \"limit_exceeded\", \"error_type\": \"monthly_requests\", \"current_tier\": \"free\", \"current_usage\": 32, \"limit\": 20, \"requests_remaining_month\": 0, \"message\": \"The user has reached the limit for monthly requests. Please notify them and let them know that they can manage their account in the web app at https://juniperassistant.com.\"}"}
 LOG  🔍 DB_QUERY: Returning status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_RESULT: Received status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: cancelled
 LOG  📊 REQUEST_STATUS: Status changed to: cancelled
 LOG  📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: cancelled stopping polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759191967628}
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 695 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1759191203523-dtd8gadva
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-30T00:13:23.886+00:00", "id": "7e0abd81-4aca-4ac2-914d-7f870adeab2b", "requestId": "1759191203523-dtd8gadva", "status": "cancelled", "total_turns": 0, "updated_at": "2025-09-30T00:13:27.328806+00:00", "user_message": "{\"error\": \"limit_exceeded\", \"error_type\": \"monthly_requests\", \"current_tier\": \"free\", \"current_usage\": 32, \"limit\": 20, \"requests_remaining_month\": 0, \"message\": \"The user has reached the limit for monthly requests. Please notify them and let them know that they can manage their account in the web app at https://juniperassistant.com.\"}"}
 LOG  🔍 DB_QUERY: Returning status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_RESULT: Received status: cancelled for requestId: 1759191203523-dtd8gadva
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: cancelled
 LOG  📊 REQUEST_STATUS: Status changed to: cancelled
 LOG  📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: cancelled stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
