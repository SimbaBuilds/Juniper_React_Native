 LOG  🔗 Connecting to service: Google Health Connect
 LOG  🔗 Mapped service name: health-connect
 LOG  🔗 Checking App Links before OAuth for: Google Health Connect
 LOG  🔗 App Links enabled - proceeding with OAuth
 LOG  🚀 Starting integration for Google Health Connect...
 LOG  🔗 Mapped Google Health Connect to health-connect
 LOG  ✅ Integration record created/updated with ID: d1933d25-19a8-4cd5-903a-ed07f64451e8
 LOG  🔗 Starting Health Connect permission flow for Google Health Connect...
 LOG  🔗 Starting Health Connect permission flow...
 LOG  🤖 Starting Health Connect permission request...
 LOG  🤖 Integration ID: d1933d25-19a8-4cd5-903a-ed07f64451e8
 LOG  🤖 Health Connect SDK Status: 3
 LOG  🤖 Health Connect SDK is available and ready
 LOG  🤖 Health Connect initialized
 LOG  🤖 Requesting Health Connect permissions...
 LOG  🤖 Permission set: [{"accessType":"read","recordType":"Steps"},{"accessType":"read","recordType":"HeartRate"},{"accessType":"read","recordType":"ActiveCaloriesBurned"},{"accessType":"read","recordType":"Distance"},{"accessType":"read","recordType":"SleepSession"}]
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: background
 LOG  [AppStateService] Current app state: {"currentState": "active", "isInForeground": true}
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "background", "isActive": false}, "synchronized": false, "timestamp": 1757826850428}
 LOG  🤖 Permission result: []
 LOG  🤖 Health Connect permissions granted
 LOG  🔍 Storing health-connect tokens for integration: d1933d25-19a8-4cd5-903a-ed07f64451e8
 LOG  🔍 Token result keys: ["accessToken", "refreshToken", "expiresAt", "scope"]
 WARN  Invalid expires_in value, using default: undefined
 LOG  🔍 Storage key: health_connect_tokens_d1933d25-19a8-4cd5-903a-ed07f64451e8
 LOG  🔍 Token data to store: {
  "accessToken": "health-connect-permissions-granted",
  "refreshToken": "not-applicable",
  "expiresAt": "2025-09-14T06:14:10.586Z",
  "integrationId": "d1933d25-19a8-4cd5-903a-ed07f64451e8",
  "service": "health-connect",
  "scope": "read",
  "storedAt": "2025-09-14T05:14:10.586Z"
}
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: active
 LOG  🏥 VOICE_CONTEXT: App became active - syncing health data
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  [AppStateService] Current app state: {"currentState": "active", "isInForeground": true}
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1757826850614}
 LOG  🔐 health-connect tokens stored securely
 LOG  ✅ Health Connect integration saved to Supabase
 LOG  🔍 health-connect completing integration flow...
 LOG  🔗 Completing integration for health-connect
 LOG  📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========
 LOG  📝 TEXT_INPUT: Processing text message: Let's complete the integration for health-connect
 LOG  📝 TEXT_INPUT: Current voice settings: {
  "deepgramEnabled": true,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.2,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en",
  "timezone": "UTC",
  "wakeWord": "Juniper"
}
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ Integration completion flow triggered for health-connect
 LOG  ✅ health-connect integration completion flow triggered
 LOG  ✅ Health Connect permissions granted successfully
 LOG  📝 TEXT_INPUT: ========== SENDING TO API ==========
 LOG  📝 TEXT_INPUT: Sending message to API
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔴 SERVER_API: sendChatRequest called
 LOG  🔴 SERVER_API: Message: "Let's complete the integration for health-connect"
 LOG  🔴 SERVER_API: Generated request ID: 1757826851439-8aia6jb8p
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1757826851439-8aia6jb8p
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1757826851439-8aia6jb8p
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ Health Connect permission flow completed successfully
 LOG  🤖 HealthSync: Active integration found, fetching health data
 LOG  🤖 GoogleHealthConnectDataService: Fetching current realtime data
 LOG  🤖 Health Connect client initialized successfully
 LOG  🤖 Date range (local): {"end": "Sun Sep 14 2025 00:14:11 GMT-0500", "endISO": "2025-09-14T05:14:11.485Z", "start": "Sun Sep 14 2025 00:00:00 GMT-0500", "startISO": "2025-09-14T05:00:00.000Z"}
 LOG  🤖 GoogleHealthConnectDataService: Fetching vital signs...
 LOG  🤖 Fetching most recent heart rate sample...
 WARN  Failed to read HeartRate records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent resting heart rate sample...
 WARN  Failed to read RestingHeartRate records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent blood pressure sample...
 WARN  Failed to read BloodPressure records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent respiratory rate sample...
 WARN  Failed to read RespiratoryRate records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent oxygen saturation sample...
 WARN  Failed to read OxygenSaturation records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent body temperature sample...
 WARN  Failed to read BodyTemperature records: [Error: Time range filter should be provided]
 LOG  🤖 GoogleHealthConnectDataService: Vitals retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching activity data...
 LOG  🤖 Fetching steps for date range...
 WARN  Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🤖 Fetching distance for date range...
 WARN  Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🤖 Fetching active calories for date range...
 WARN  Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🤖 Fetching exercise sessions for date range...
 WARN  Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🤖 GoogleHealthConnectDataService: Activity retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching body measurements...
 LOG  🤖 Fetching most recent weight sample...
 WARN  Failed to read Weight records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent height sample...
 WARN  Failed to read Height records: [Error: Time range filter should be provided]
 LOG  🤖 Fetching most recent body fat sample...
 WARN  Failed to read BodyFat records: [Error: Time range filter should be provided]
 LOG  🤖 GoogleHealthConnectDataService: Body measurements retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching nutrition data...
 LOG  🤖 Fetching nutrition calories for date range...
 LOG  🤖 Fetching hydration for date range...
 LOG  🤖 GoogleHealthConnectDataService: Nutrition retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching sleep data...
 LOG  🤖 Fetching sleep hours for date range...
 LOG  🤖 GoogleHealthConnectDataService: Sleep retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching other metrics...
 LOG  🤖 Fetching most recent blood glucose sample...
 LOG  🤖 Fetching basal metabolic rate...
 LOG  🤖 GoogleHealthConnectDataService: Other metrics retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data keys: ["last_sync_at"]
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data values: {"last_sync_at": 2025-09-14T05:14:11.553Z}
 LOG  🤖 HealthSync: Health data retrieved, filtering valid values
 LOG  🤖 HealthSync: Valid data found, upserting to database
 LOG  📊 DB: Upserting Google Health realtime data for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 124fb027-1084-4822-97d2-2c4441c6733a with image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1757826851439-8aia6jb8p
