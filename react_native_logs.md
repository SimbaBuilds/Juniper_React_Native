
Logs for your project will appear below. Press Ctrl+C to exit.
Android Bundled 520ms index.js (1150 modules)
 LOG  🌐 API: Using backend URL: https://mobile-jarvis-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 WARN  Require cycle: src/integrations/data/HealthSyncService.ts -> src/integrations/data/AppleHealthKitDataService.ts -> src/integrations/auth/services/AppleHealthKitAuthService.ts -> src/integrations/data/HealthSyncService.ts

Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
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
 LOG  No initial URL found
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🤖 HealthSync: Active integration found, fetching health data
 LOG  🤖 GoogleHealthConnectDataService: Fetching current realtime data
 LOG  🤖 Health Connect client initialized successfully
 LOG  🤖 Date range (local): {"end": "Sun Sep 14 2025 16:27:22 GMT-0500", "endISO": "2025-09-14T21:27:22.940Z", "start": "Sun Sep 14 2025 00:00:00 GMT-0500", "startISO": "2025-09-14T05:00:00.000Z"}
 LOG  🤖 GoogleHealthConnectDataService: Fetching vital signs...
 LOG  🤖 Fetching most recent heart rate sample...
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 1000 records
 LOG  🤖 Fetching most recent resting heart rate sample...
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🔍 getMostRecentValue: No records for field beatsPerMinute
 LOG  🤖 Fetching most recent blood pressure sample...
 LOG  🔍 Reading BloodPressure records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 BloodPressure result: object returned
 LOG  📊 BloodPressure records: 1 records
 LOG  ✅ Systolic BP: 120 mmHg
 LOG  ✅ Diastolic BP: 80 mmHg
 LOG  🤖 Fetching most recent respiratory rate sample...
 LOG  🔍 Reading RespiratoryRate records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 RespiratoryRate result: object returned
 LOG  📊 RespiratoryRate records: 1 records
 LOG  🤖 Fetching most recent oxygen saturation sample...
 LOG  🔍 Reading OxygenSaturation records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 OxygenSaturation result: object returned
 LOG  📊 OxygenSaturation records: 1 records
 LOG  🤖 Fetching most recent body temperature sample...
 LOG  🔍 Reading BodyTemperature records with filter: {"endTime": "2025-09-14T21:27:22.943Z", "operator": "between", "startTime": "2025-09-07T21:27:22.943Z"}
 LOG  📊 BodyTemperature result: object returned
 LOG  📊 BodyTemperature records: 1 records
 LOG  ✅ Body temperature: 36.66666793823242°C
 LOG  🤖 GoogleHealthConnectDataService: Vitals retrieved: {"blood_pressure_diastolic": 80, "blood_pressure_systolic": 120, "body_temperature": 36.66666793823242, "oxygen_saturation": 98, "respiratory_rate": 13}
 LOG  🤖 GoogleHealthConnectDataService: Fetching activity data...
 LOG  🤖 Fetching steps for date range...
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 102 records
 LOG  ✅ Total steps: 3769
 LOG  🤖 Fetching distance for date range...
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 102 records
 LOG  ✅ Total distance: 2891.099999094008 meters
 LOG  🤖 Fetching active calories for date range...
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖 Fetching exercise sessions for date range...
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 0 records
 LOG  🤖 GoogleHealthConnectDataService: Activity retrieved: {"distance": 2891.099999094008, "steps": 3769}
 LOG  🤖 GoogleHealthConnectDataService: Fetching body measurements...
 LOG  🤖 Fetching most recent weight sample...
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-14T21:27:23.737Z", "operator": "between", "startTime": "2025-08-15T21:27:23.737Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 1 records
 LOG  ✅ Weight: 80.69401550292969 kg
 LOG  🤖 Fetching most recent height sample...
 LOG  🔍 Reading Height records with filter: {"endTime": "2025-09-14T21:27:23.737Z", "operator": "between", "startTime": "2025-08-15T21:27:23.737Z"}
 LOG  📊 Height result: object returned
 LOG  📊 Height records: 1 records
 LOG  ✅ Height: 1.8796000480651855 m
 LOG  🤖 Fetching most recent body fat sample...
 LOG  🔍 Reading BodyFat records with filter: {"endTime": "2025-09-14T21:27:23.737Z", "operator": "between", "startTime": "2025-08-15T21:27:23.737Z"}
 LOG  📊 BodyFat result: object returned
 LOG  📊 BodyFat records: 0 records
 LOG  🤖 GoogleHealthConnectDataService: Body measurements retrieved: {"height": 1.8796000480651855, "weight": 80.69401550292969}
 LOG  🤖 GoogleHealthConnectDataService: Fetching nutrition data...
 LOG  🤖 Fetching nutrition calories for date range...
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 1 records
 LOG  ✅ Total nutrition calories: 555000
 LOG  🤖 Fetching hydration for date range...
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 1 records
 LOG  ✅ Total hydration: 23.000000044703484 ml
 LOG  🤖 GoogleHealthConnectDataService: Nutrition retrieved: {"hydration": 23.000000044703484, "nutrition_calories": 555000}
 LOG  🤖 GoogleHealthConnectDataService: Fetching sleep data...
 LOG  🤖 Fetching sleep hours for date range...
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-14T21:27:22.940Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖 GoogleHealthConnectDataService: Sleep retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching other metrics...
 LOG  🤖 Fetching most recent blood glucose sample...
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-14T21:27:23.834Z", "operator": "between", "startTime": "2025-09-07T21:27:23.834Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🔍 getMostRecentValue: No records for field level
 LOG  🤖 Fetching basal metabolic rate...
 LOG  🔍 Reading BasalMetabolicRate records with filter: {"endTime": "2025-09-14T21:27:23.834Z", "operator": "between", "startTime": "2025-09-07T21:27:23.834Z"}
 LOG  📊 BasalMetabolicRate result: object returned
 LOG  📊 BasalMetabolicRate records: 2 records
 LOG  ✅ BMR: 1753.690185546875 kcal/day
 LOG  🤖 Fetching menstruation flow data...
 LOG  🔍 Reading MenstruationFlow records with filter: {"endTime": "2025-09-14T21:27:23.834Z", "operator": "between", "startTime": "2025-09-07T21:27:23.834Z"}
 LOG  📊 MenstruationFlow result: object returned
 LOG  📊 MenstruationFlow records: 0 records
 LOG  🔍 getMostRecentValue: No records for field flow
 LOG  🤖 GoogleHealthConnectDataService: Other metrics retrieved: {"basal_metabolic_rate": 1753.690185546875}
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data keys: ["blood_pressure_systolic", "blood_pressure_diastolic", "oxygen_saturation", "respiratory_rate", "body_temperature", "steps", "distance", "weight", "height", "nutrition_calories", "hydration", "basal_metabolic_rate", "last_sync_at"]
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data values: {"basal_metabolic_rate": 1753.690185546875, "blood_pressure_diastolic": 80, "blood_pressure_systolic": 120, "body_temperature": 36.66666793823242, "distance": 2891.099999094008, "height": 1.8796000480651855, "hydration": 23.000000044703484, "last_sync_at": 2025-09-14T21:27:23.870Z, "nutrition_calories": 555000, "oxygen_saturation": 98, "respiratory_rate": 13, "steps": 3769, "weight": 80.69401550292969}
 LOG  🤖 HealthSync: Health data retrieved, filtering valid values
 LOG  🤖 HealthSync: Valid data found, upserting to database
 LOG  📊 DB: Upserting Google Health realtime data for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 DB: Successfully upserted Google Health data
 LOG  🤖 HealthSync: Successfully synced Google Health data
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
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: true, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
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
 LOG  🔄 VOICE_CONTEXT: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔄 VOICE_CONTEXT: Refreshing settings from database...
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  🔄 CONVERSATION_SYNC: User loaded, checking for background conversations...
 LOG  🔄 CONVERSATION_SYNC: Checking for background conversations...
 LOG  [ConversationSyncService] Checking for background conversations...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": true, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1757885244329}
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 0 background conversations
 LOG  📱 CONVERSATION_SYNC: No background conversations found
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: true, voice: aura-2-pandora-en
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
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": true, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1757885244359}
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@b57379c
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ✅ Integration completion handler registered
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========
 LOG  🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database: false
 LOG  🎤 VOICE_CONTEXT: Wake word sensitivity: 0.2
 LOG  🎤 VOICE_CONTEXT: Selected wake word: Juniper
 LOG  🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========
 LOG  🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...
 LOG  🔍 VOICE_SETTINGS: updateSettings called with: {
  "deepgramEnabled": true,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "wakeWord": "Juniper",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.2,
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
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: true, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": true, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1757885245572}
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 502 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
