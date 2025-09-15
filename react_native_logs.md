 LOG  🔗 Connecting to service: Google Health Connect
 LOG  🔗 Mapped service name: health-connect
 LOG  🔗 Checking App Links before OAuth for: Google Health Connect
 LOG  🔗 App Links enabled - proceeding with OAuth
 LOG  🚀 Starting integration for Google Health Connect...
 LOG  🔗 Mapped Google Health Connect to health-connect
 LOG  ✅ Integration record created/updated with ID: 828161bf-8e9c-432f-a81e-6b2bb0a4da6b
 LOG  🔗 Starting Health Connect permission flow for Google Health Connect...
 LOG  🔗 Starting Health Connect permission flow...
 LOG  🔧 health-connect OAuth Service initialized
 LOG  🤖 Starting Health Connect permission request...
 LOG  🤖 Integration ID: 828161bf-8e9c-432f-a81e-6b2bb0a4da6b
 LOG  🤖 Health Connect SDK Status: 3
 LOG  🤖 Health Connect SDK is available and ready
 LOG  🤖 Health Connect initialized
 LOG  🤖 Requesting Health Connect permissions...
 LOG  🤖 Permission set: [{"accessType":"read","recordType":"Steps"},{"accessType":"read","recordType":"HeartRate"},{"accessType":"read","recordType":"RestingHeartRate"},{"accessType":"read","recordType":"ActiveCaloriesBurned"},{"accessType":"read","recordType":"BasalMetabolicRate"},{"accessType":"read","recordType":"BloodGlucose"},{"accessType":"read","recordType":"BloodPressure"},{"accessType":"read","recordType":"BodyFat"},{"accessType":"read","recordType":"BodyTemperature"},{"accessType":"read","recordType":"Distance"},{"accessType":"read","recordType":"ExerciseSession"},{"accessType":"read","recordType":"Height"},{"accessType":"read","recordType":"Hydration"},{"accessType":"read","recordType":"MenstruationFlow"},{"accessType":"read","recordType":"Nutrition"},{"accessType":"read","recordType":"OxygenSaturation"},{"accessType":"read","recordType":"RespiratoryRate"},{"accessType":"read","recordType":"SleepSession"},{"accessType":"read","recordType":"Weight"}]
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: background
 LOG  [AppStateService] Current app state: {"currentState": "active", "isInForeground": true}
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "background", "isActive": false}, "synchronized": false, "timestamp": 1757904364486}
 LOG  🤖 Permission result: [{"accessType": "read", "recordType": "ActiveCaloriesBurned"}, {"accessType": "read", "recordType": "BasalMetabolicRate"}, {"accessType": "read", "recordType": "BloodGlucose"}, {"accessType": "read", "recordType": "BloodPressure"}, {"accessType": "read", "recordType": "BodyFat"}, {"accessType": "read", "recordType": "BodyTemperature"}, {"accessType": "read", "recordType": "CyclingPedalingCadence"}, {"accessType": "read", "recordType": "Distance"}, {"accessType": "read", "recordType": "ExerciseSession"}, {"accessType": "read", "recordType": "HeartRate"}, {"accessType": "read", "recordType": "Height"}, {"accessType": "read", "recordType": "Hydration"}, {"accessType": "read", "recordType": "MenstruationFlow"}, {"accessType": "read", "recordType": "Nutrition"}, {"accessType": "read", "recordType": "OxygenSaturation"}, {"accessType": "read", "recordType": "RespiratoryRate"}, {"accessType": "read", "recordType": "RestingHeartRate"}, {"accessType": "read", "recordType": "SleepSession"}, {"accessType": "read", "recordType": "StepsCadence"}, {"accessType": "read", "recordType": "Steps"}, {"accessType": "read", "recordType": "Weight"}, {"accessType": "read", "recordType": "MenstruationPeriod"}]
 LOG  🤖 Health Connect permissions granted
 LOG  🤖 Result array length: 22
 LOG  🔍 Storing health-connect tokens for integration: 828161bf-8e9c-432f-a81e-6b2bb0a4da6b
 LOG  🔍 Token result keys: ["accessToken", "refreshToken", "expiresAt", "scope"]
 WARN  Invalid expires_in value, using default: undefined
 LOG  🔍 Storage key: health_connect_tokens_828161bf-8e9c-432f-a81e-6b2bb0a4da6b
 LOG  🔍 Token data to store: {
  "accessToken": "health-connect-permissions-granted",
  "refreshToken": "not-applicable",
  "expiresAt": "2025-09-15T03:46:04.655Z",
  "integrationId": "828161bf-8e9c-432f-a81e-6b2bb0a4da6b",
  "service": "health-connect",
  "scope": "read",
  "storedAt": "2025-09-15T02:46:04.655Z"
}
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: active
 LOG  🏥 VOICE_CONTEXT: App became active - syncing health data
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  [AppStateService] Current app state: {"currentState": "active", "isInForeground": true}
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1757904364670}
 LOG  🔐 health-connect tokens stored securely
 LOG  🤖 HealthSync: No active Google Health Connect integration found
 LOG  🏥 HealthSync: Sync completed - success: true synced: false
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
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
 LOG  🔴 SERVER_API: Generated request ID: 1757904365484-f8g0dofrt
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1757904365484-f8g0dofrt
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1757904365484-f8g0dofrt
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 Health Connect: Triggering immediate health sync after auth...
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Debounced - too soon since last sync
 LOG  🔄 Health Connect: Post-auth sync result: {"error": "Debounced - too soon since last sync", "platform": "android", "success": true, "synced": false}
 LOG  ✅ Health Connect permission flow completed successfully
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: e1203e29-63c5-4d14-b1d9-a66ff691ec9b with image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1757904365484-f8g0dofrt
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1757904365484-f8g0dofrt
 LOG  🔴 SERVER_API: Adding delay for Android stability...
 LOG  ✅ Integration 828161bf-8e9c-432f-a81e-6b2bb0a4da6b status updated to: active
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔴 SERVER_API: History[0]: {"content": "Let's complete the integration for health-connect", "contentLength": 49, "role": "user", "timestamp": 1757904364994}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Let's complete the integration for health-connect",
  "timestamp": 1757904365998,
  "history": [
    {
      "role": "user",
      "content": "Let's complete the integration for health-connect",
      "timestamp": 1757904364994,
      "type": "text"
    }
  ],
  "request_id": "1757904365484-f8g0dofrt",
  "integration_in_progress": true
}
 LOG  🔍 API Interceptor: Starting auth check for request to: /api/chat
 LOG  📱 Platform: android
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "pending", "total_turns": 0, "updated_at": "2025-09-15T02:46:05.492+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  🔍 API Interceptor: User check result: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  📱 Android: Token length: 970
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "pending", "total_turns": 0, "updated_at": "2025-09-15T02:46:05.492+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  Cancelling current request...
 LOG  🚫 CANCEL_WRAPPER: Cancelling request and updating UI status...
 LOG  🚫 CANCEL: Cancelling server request and clearing native state...
 LOG  🔴 SERVER_API: Cancelling current request... 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  ✅ SERVER_API: Cancellation request inserted into database
 LOG  ✅ SERVER_API: Request cancelled successfully
 ERROR  ❌ API Response Error: undefined /api/chat
 ERROR  Error details: {"code": "ERR_CANCELED", "isNetworkError": false, "message": "canceled", "response": undefined}
 ERROR  📱 Android: API request failed with status: undefined
 ERROR  🔴 SERVER_API: ❌ API request error: [CanceledError: canceled]
 ERROR  🔴 SERVER_API: API request failed in queue
 LOG  🔴 SERVER_API: Request was cancelled
Android Bundled 68ms src/utils/requestMapping.ts (1 module)
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
Android Bundled 198ms src/utils/nativeCleanup.ts (387 modules)
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 ERROR  📝 TEXT_INPUT: ❌ Error processing text message: [Error: Request was cancelled]
 LOG  📝 TEXT_INPUT: Request was cancelled - not showing error to user
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1757904365484-f8g0dofrt
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔗 REQUEST_MAPPING: RN ID '1757904365484-f8g0dofrt' maps to native ID 'not found'
 LOG  🧹 CANCEL: No native request ID found, clearing all native state
 LOG  🧹 NATIVE_CLEANUP: Clearing Android native state (all requests)...
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  🧹 NATIVE_CLEANUP: ✅ Android native state cleared successfully
 LOG  🧹 CANCEL: ✅ Native state cleared after cancellation
 LOG  🚫 CANCEL: ✅ Request cancelled successfully
 LOG  🚫 CANCEL_WRAPPER: Request cancelled successfully, clearing status in 2 seconds
 LOG  Cancel result: true
 LOG  ✅ Request cancelled successfully
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-15T02:46:05.492+00:00", "id": "e1203e29-63c5-4d14-b1d9-a66ff691ec9b", "requestId": "1757904365484-f8g0dofrt", "status": "thinking", "total_turns": 0, "updated_at": "2025-09-15T02:46:07.518154+00:00", "user_message": "Let's complete the integration for health-connect"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1757904365484-f8g0dofrt
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
