 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758952414990-kla7spiwr
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758952414990-kla7spiwr
 LOG  🔍 BackgroundApiService: Checked completed request 1758952414990-kla7spiwr not found
 LOG  ❌ BackgroundApiService: Request failed 1758952414990-kla7spiwr The network connection was lost.
 ERROR  ❌ SERVER_API: Background request failed: The network connection was lost.
 ERROR  ❌ SERVER_API: Background API failed, falling back to regular request: [Error: The network connection was lost.]
 LOG  🔴 SERVER_API: Adding delay for Android stability...
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758952414990-kla7spiwr
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔴 SERVER_API: History[0]: {"content": "Hi", "contentLength": 2, "role": "user", "timestamp": 1758952414851}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Hi",
  "timestamp": 1758952433858,
  "history": [
    {
      "role": "user",
      "content": "Hi",
      "timestamp": 1758952414851,
      "type": "text"
    }
  ],
  "request_id": "1758952414990-kla7spiwr"
}
 LOG  🔍 API Interceptor: Starting auth check for request to: /api/chat
 LOG  📱 Platform: ios
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: active
 WARN  [AppStateService] Native module not available or not on Android
 LOG  🏥 VOICE_CONTEXT: App became active - syncing health data
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: ios
 LOG  🍎 HealthSync: Starting Apple Health sync
 LOG  🍎 HealthSync: Checking for active integration
 LOG  📬 VOICE_ASSISTANT: App became active - checking unfetched requests
 LOG  🎯 SOURCE_3: checkUnfetchedRequests starting...
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1758952433919}
 LOG  📋 BackgroundApiService: Pending requests: []
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-27T05:53:35.292+00:00", "id": "a552cfea-67db-4ad0-a1be-3aa545b43576", "requestId": "1758952414990-kla7spiwr", "status": "completed", "total_turns": 0, "updated_at": "2025-09-27T00:53:42.187085+00:00", "user_message": "Hi"}
 LOG  🔍 DB_QUERY: Returning status: completed for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_RESULT: Received status: completed for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: completed
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: completed stopping polling
 LOG  📊 POLLING_HOOK_STOPPED: Polling interval cleared
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758952414990-kla7spiwr
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 ERROR  🔍 DB_QUERY: Database error for requestId:
1758952414990-kla7spiwr
error:
{"code": "", "details": "TypeError: Network request failed

Call Stack
  anonymous (http:/192.168.1.80:8081/index.bundle)
 ERROR  📊 POLLING_HOOK_ERROR: Error polling status for requestId:
1758952414990-kla7spiwr
error:
{"code": "", "details": "TypeError: Network request failed

Call Stack
  anonymous (http:/192.168.1.80:8081/index.bundle)
 LOG  🔍 API Interceptor: User check result: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-27T05:53:35.292+00:00", "id": "a552cfea-67db-4ad0-a1be-3aa545b43576", "requestId": "1758952414990-kla7spiwr", "status": "completed", "total_turns": 0, "updated_at": "2025-09-27T00:53:42.187085+00:00", "user_message": "Hi"}
 LOG  🔍 DB_QUERY: Returning status: completed for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_RESULT: Received status: completed for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: completed
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: completed stopping polling
 LOG  📊 POLLING_HOOK_STOPPED: Polling interval cleared
 LOG  🍎 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🍎 Starting wearables_data sync for 7 days
 LOG  🍎 Processing day 1/7: Sat Sep 20 2025
 to wearables_data
 LOG  🔄 Apple Health: Triggering health-data-sync edge function for daily metrics...
 LOG  🔍 DB_QUERY: Found 3 messages for conversation: 8869b499-9dec-41f6-8e3f-59db186b0126
 LOG  📬 UNFETCHED_CHECK: Added 3 messages from conversation: 8869b499-9dec-41f6-8e3f-59db186b0126
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Displaying 3 total messages from 1 conversations
 LOG  🎯 SOURCE_3: About to call continuePreviousChat with messages: [{"content": "Hi...", "role": "user", "timestamp": 1758934415918}, {"content": "Hi there! We're ready to help you with whatever yo...", "role": "assistant", "timestamp": 1758934421930}, {"content": "Hi...", "role": "user", "timestamp": 1758934434398}]
 LOG  🎯 CONTINUE_CHAT: continuePreviousChat called with 3 messages
 LOG  🎯 CONTINUE_CHAT: Input messages: [{"content": "Hi...", "role": "user", "timestamp": 1758934415918}, {"content": "Hi there! We're ready to help you with whatever yo...", "role": "assistant", "timestamp": 1758934421930}, {"content": "Hi...", "role": "user", "timestamp": 1758934434398}]
 LOG  🎯 CONTINUE_CHAT: Updating recentAssistantMessagesRef with 1 messages
 LOG  🎯 CONTINUE_CHAT: About to call setChatHistory with 3 messages
 LOG  🎯 CONTINUE_CHAT: setChatHistory call completed
 LOG  🎯 SOURCE_3: continuePreviousChat call completed
 LOG  🔍 DB_QUERY: Marking response as fetched for requestId: 1758952414990-kla7spiwr
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ DB_QUERY: Response marked as fetched for requestId: 1758952414990-kla7spiwr
 LOG  ✅ UNFETCHED_CHECK: Marked response as fetched for: 1758952414990-kla7spiwr
 LOG  ✅ Apple Health: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Apple Health (adb5b610-2141-4e43-a495-595ff8530959)", "Apple Health: 83 records created", "Starting aggregation for last 30 days", "Aggregation completed: 7 daily metrics created"], "errors": [], "records_created": 83, "service_name": "Apple Health", "user_id": "56a2c117-6486-4ca5-a57d-6c2e877e7083"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
 LOG  🏥 VOICE_CONTEXT: Health data successfully synced to database
 LOG  ✅ API Response Success: 200 /api/chat
 LOG  🔴 SERVER_API: ✅ Server response received
 LOG  API Response:
 {"integration_in_progress": false, "request_id": "1758952414990-kla7spiwr", "response": "Hi there! We're ready to help you with whatever you need - whether it's managing your productivity tools, researching topics, handling wellness data, or anything else. What can we do for you today?", "settings_updated": false, "timestamp": 1758952440}
 LOG  🔍 RN_BRIDGE_DEBUG: ========== API CALL COMPLETED ==========
 LOG  🔍 RN_BRIDGE_DEBUG: API call duration: 25509.76870894432 ms
 LOG  🔍 RN_BRIDGE_DEBUG: Response received at: 1758952440498
 LOG  🔍 RN_BRIDGE_DEBUG: Response data: {
  "response": "Hi there! We're ready to help you with whatever you need - whether it's managing your productivity tools, researching topics, handling wellness data, or anything else. What can we do for you today?",
  "timestamp": 1758952440,
  "settings_updated": false,
  "integration_in_progress": false,
  "request_id": "1758952414990-kla7spiwr"
}
 LOG  🟠 VOICE_CONTEXT: Received API response
 LOG  🔄 VOICE_CONTEXT: Response settings_updated flag: false
 LOG  ⚙️ VOICE_CONTEXT: No settings update flag - skipping settings refresh
 LOG  📱 Sending API response back to native: {"requestId": "1DF6A923-0250-4543-A66B-DA6FFE32AE57", "responseLength": 197}
 LOG  📱 Platform: ios
 LOG  📱 VoiceModule available: true
 LOG  📱 handleApiResponse method available: true
 LOG  🎯 SOURCE_1: VoiceResponseUpdate received - content: Hi there! We're ready to help you with whatever yo...
 LOG  🎯 SOURCE_1: Processing VoiceResponseUpdate for chat history addition
 LOG  🎯 SOURCE_1: Current chatHistory length before addition: 1
 LOG  🎯 SOURCE_1: Current requestId: null
 LOG  🔍 DUPLICATE_CHECK: Checking isDuplicateInRecentRef - content: "Hi there! We're ready to help you with whatever yo...", recentRef length: 1
 LOG  🔍 DUPLICATE_CHECK: Content matches but outside time window - timestamp diff: 18018630ms
 LOG  🔍 DUPLICATE_CHECK: isDuplicateInRecentRef result: false
 LOG  🔍 DUPLICATE_CHECK: Current recentRef contents: [{"age": 18018630, "content": "Hi there! We're ready to help ..."}]
 LOG  🔍 DUPLICATE_CHECK: Checking isDuplicateMessage - role: assistant, content: "Hi there! We're ready to help you with whatever yo...", chatHistory length: 1
 LOG  🔍 DUPLICATE_CHECK: isDuplicateMessage result: false
 LOG  🎯 SOURCE_1: No duplicates detected - proceeding to add message with timestamp: 1758952440561
 LOG  📝 UPDATE_RECENT_REF: Adding message to recentRef - content: "Hi there! We're ready to help you with whatever yo...", timestamp: 1758952440561
 LOG  📝 UPDATE_RECENT_REF: Previous recentRef length: 1
 LOG  📝 UPDATE_RECENT_REF: Updated recentRef length: 2
 LOG  📝 UPDATE_RECENT_REF: Updated recentRef contents: [{"content": "Hi there! We're ready to help ...", "timestamp": 1758952440561}, {"content": "Hi there! We're ready to help ...", "timestamp": 1758934421930}]
 LOG  🎯 SOURCE_1: About to call setChatHistory to add assistant message
 LOG  ✅ VOICE_RESPONSE: Clearing request ID after voice response
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: error
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: speaking
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  📱 Native handleApiResponse result: true
 LOG  [ConversationSyncService] Skipping native sync - not available
 LOG  ✅ VOICE_BRIDGE: History synced to native after API response
 LOG  ✅ VOICE_BRIDGE: Clearing request ID after successful API response
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: error
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: speaking
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🎯 SOURCE_1: setChatHistory callback - prev length: 3 adding message
 LOG  🎯 SOURCE_1: setChatHistory callback - new length: 4
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🔴 VoiceAssistant: isSpeaking changed: true
 LOG  🔴 VoiceAssistant: voiceState: speaking
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: speaking
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: true
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
