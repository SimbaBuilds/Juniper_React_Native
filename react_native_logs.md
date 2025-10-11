 LOG  ⌨️ KEYBOARD_DID_SHOW: {"duration": 250, "height": 336, "screenY": 508, "width": 390}
 LOG  🔄 TextChatInput: handleSend called {"hasImage": false, "hasMessage": true, "isSending": false, "platform": "ios"}
 LOG  🔄 TextChatInput: Sending message {"hasImageUrl": false, "messageLength": 2}
 LOG  📷 Sending message: {"imageUrl": undefined, "text": "Hi"}
 LOG  📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========
 LOG  📝 TEXT_INPUT: Processing text message: Hi
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
 ERROR  VirtualizedLists should never be nested inside plain ScrollViews with the same orientation because it can break windowing and other functionality - use another VirtualizedList-backed container instead.
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  ✅ TextChatInput: Message sent successfully
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📝 TEXT_INPUT: ========== SENDING TO API ==========
 LOG  📝 TEXT_INPUT: Sending message to API
 LOG  🌐 useServerApi: useBackgroundApi = true
 LOG  🌐 useServerApi: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🔴 SERVER_API: sendChatRequest called
 LOG  🔴 SERVER_API: Message: "Hi"
 LOG  🔴 SERVER_API: Generated request ID: 1760162042268-6lzulcxj7
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1760162042268-6lzulcxj7
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1760162042268-6lzulcxj7
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  💬 FIRST_MESSAGE: Creating new conversation for first message
 LOG  💬 Creating new conversation for first message: Hi...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ Conversation created successfully: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  💬 FIRST_MESSAGE: ✅ New conversation created and set: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 46aa0060-af5b-4f92-b241-1a3d42801e3c with conversation_id: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c and image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1760162042268-6lzulcxj7
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1760162042268-6lzulcxj7
 LOG  🌐 SERVER_API: useBackgroundApi = true
 LOG  🌐 SERVER_API: Platform.OS = ios
 LOG  🌐 SERVER_API: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🌐 SERVER_API: ✅ Routing request through background API (simplified)
 LOG  🌐 SERVER_API: Using background API for iOS request 1760162042268-6lzulcxj7
 LOG  🌐 BackgroundApiService: Sending background request 1760162042268-6lzulcxj7
 LOG  🌐 BackgroundApiService: URL: https://juniper-python-backend.onrender.com/api/chat
 LOG  🌐 BackgroundApiService: Method: POST
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🌐 BackgroundApiService: Background request started successfully {"requestId": "1760162042268-6lzulcxj7", "success": true}
 LOG  🌐 SERVER_API: Background request started, waiting for completion...
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162042268-6lzulcxj7
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  ⌨️ KEYBOARD_DID_HIDE
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:02.402+00:00", "id": "46aa0060-af5b-4f92-b241-1a3d42801e3c", "requestId": "1760162042268-6lzulcxj7", "status": "pending", "total_turns": 0, "updated_at": "2025-10-11T05:54:02.402+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162042268-6lzulcxj7
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:02.402+00:00", "id": "46aa0060-af5b-4f92-b241-1a3d42801e3c", "requestId": "1760162042268-6lzulcxj7", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-11T05:54:02.913716+00:00", "user_message": "Hi"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162042268-6lzulcxj7
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:02.402+00:00", "id": "46aa0060-af5b-4f92-b241-1a3d42801e3c", "requestId": "1760162042268-6lzulcxj7", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-11T05:54:02.913716+00:00", "user_message": "Hi"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  🔍 BackgroundApiService: Checked completed request 1760162042268-6lzulcxj7 not found
 LOG  🔍 BackgroundApiService: Checked completed request 1760162042268-6lzulcxj7 not found
 LOG  🔍 BackgroundApiService: Checked completed request 1760162042268-6lzulcxj7 not found
 LOG  🔍 BackgroundApiService: Checked completed request 1760162042268-6lzulcxj7 not found
 LOG  📊 BackgroundApiService: Progress update for request 1760162042268-6lzulcxj7
 LOG  ✅ BackgroundApiService: Request completed 1760162042268-6lzulcxj7
 LOG  ✅ BackgroundApiService: Complete event data: {"dataSize":162,"requestId":"1760162042268-6lzulcxj7","data":"{\"response\":\"Hi there! I'm Juniper, your AI assistant. How can I help you today?\",\"timestamp\":1760162047,\"settings_updated\":false,\"integration_in_progress\":false}"}
 LOG  🌐 SERVER_API: Received BackgroundApiComplete event {"data": "{\"response\":\"Hi there! I'm Juniper, your AI assistant. How can I help you today?\",\"timestamp\":1760162047,\"settings_updated\":false,\"integration_in_progress\":false}", "dataSize": 162, "requestId": "1760162042268-6lzulcxj7"}
 LOG  API Response:
 {"additional_data": undefined, "integration_in_progress": false, "request_id": "1760162042268-6lzulcxj7", "response": "Hi there! I'm Juniper, your AI assistant. How can I help you today?", "settings_updated": false, "timestamp": 1760162047379}
 LOG  📝 TEXT_INPUT: ========== API RESPONSE RECEIVED ==========
 LOG  📝 TEXT_INPUT: API call duration: 5113 ms
 LOG  📝 TEXT_INPUT: Received API response
 LOG  📝 TEXT_INPUT: Response settings_updated flag: false
 LOG  📝 TEXT_INPUT: Response integration_in_progress flag: false
 LOG  ⚙️ TEXT_INPUT: No settings update flag - skipping settings refresh
 LOG  🔗 TEXT_INPUT: No integration build in progress flag - skipping polling
 LOG  🔍 DB_QUERY: Checking if response already fetched for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🔍 DB_QUERY: Response fetched status for requestId: 1760162042268-6lzulcxj7 = false
 LOG  🔍 DUPLICATE_CHECK: Checking isDuplicateMessage - role: assistant, content: "Hi there! I'm Juniper, your AI assistant. How can ...", chatHistory length: 0
 LOG  🔍 DUPLICATE_CHECK: isDuplicateMessage result: false
 LOG  🔍 DB_QUERY: Marking response as fetched for requestId: 1760162042268-6lzulcxj7
 LOG  📝 TEXT_INPUT: Response added to chat (no TTS in text mode)
 LOG  🔄 COMPLETION: Clearing request ID to stop polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162042268-6lzulcxj7
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Skipping native sync - not available
 LOG  ✅ TEXT_INPUT: History synced to native after API response
 LOG  ✅ DB_QUERY: Response marked as fetched for requestId: 1760162042268-6lzulcxj7
 LOG  ✅ TEXT_INPUT: Response marked as fetched for requestId: 1760162042268-6lzulcxj7
 LOG  ⌨️ KEYBOARD_DID_SHOW: {"duration": 250, "height": 336, "screenY": 508, "width": 390}
 LOG  🔄 TextChatInput: handleSend called {"hasImage": false, "hasMessage": true, "isSending": false, "platform": "ios"}
 LOG  🔄 TextChatInput: Sending message {"hasImageUrl": false, "messageLength": 16}
 LOG  📷 Sending message: {"imageUrl": undefined, "text": "Just a test 1254"}
 LOG  📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========
 LOG  📝 TEXT_INPUT: Processing text message: Just a test 1254
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
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ TextChatInput: Message sent successfully
 LOG  📝 TEXT_INPUT: ========== SENDING TO API ==========
 LOG  📝 TEXT_INPUT: Sending message to API
 LOG  🌐 useServerApi: useBackgroundApi = true
 LOG  🌐 useServerApi: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🔴 SERVER_API: sendChatRequest called
 LOG  🔴 SERVER_API: Message: "Just a test 1254"
 LOG  🔴 SERVER_API: Generated request ID: 1760162053316-8udp0n59a
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1760162053316-8udp0n59a
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1760162053316-8udp0n59a
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  💬 CONTINUING: Using existing conversation: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 2c43c0c4-9a7d-45e0-b7e6-8b70dfe2ea46 with conversation_id: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c and image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1760162053316-8udp0n59a
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1760162053316-8udp0n59a
 LOG  🌐 SERVER_API: useBackgroundApi = true
 LOG  🌐 SERVER_API: Platform.OS = ios
 LOG  🌐 SERVER_API: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🌐 SERVER_API: ✅ Routing request through background API (simplified)
 LOG  🌐 SERVER_API: Using background API for iOS request 1760162053316-8udp0n59a
 LOG  🌐 BackgroundApiService: Sending background request 1760162053316-8udp0n59a
 LOG  🌐 BackgroundApiService: URL: https://juniper-python-backend.onrender.com/api/chat
 LOG  🌐 BackgroundApiService: Method: POST
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🌐 BackgroundApiService: Background request started successfully {"requestId": "1760162053316-8udp0n59a", "success": true}
 LOG  🌐 SERVER_API: Background request started, waiting for completion...
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162053316-8udp0n59a
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:13.316+00:00", "id": "2c43c0c4-9a7d-45e0-b7e6-8b70dfe2ea46", "requestId": "1760162053316-8udp0n59a", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-11T05:54:13.668829+00:00", "user_message": "Just a test 1254"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  ⌨️ KEYBOARD_DID_HIDE
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162053316-8udp0n59a
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:13.316+00:00", "id": "2c43c0c4-9a7d-45e0-b7e6-8b70dfe2ea46", "requestId": "1760162053316-8udp0n59a", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-11T05:54:13.668829+00:00", "user_message": "Just a test 1254"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  🔍 BackgroundApiService: Checked completed request 1760162053316-8udp0n59a not found
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: inactive
 WARN  [AppStateService] Native module not available or not on Android
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "inactive", "isInForeground": false}, "reactNative": {"currentState": "inactive", "isActive": false}, "synchronized": true, "timestamp": 1760162054940}
 LOG  🔍 BackgroundApiService: Checked completed request 1760162053316-8udp0n59a not found
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: background
 WARN  [AppStateService] Native module not available or not on Android
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "background", "isInForeground": false}, "reactNative": {"currentState": "background", "isActive": false}, "synchronized": true, "timestamp": 1760162055828}
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162053316-8udp0n59a
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162053316-8udp0n59a
 LOG  🕐 Auto-refresh timer triggered - clearing chat history
 LOG  🔄 Auto-refresh: Saving and clearing conversation after 10 minutes of inactivity
 LOG  💬 AUTO_REFRESH: Marking conversation as completed: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  🔍 BackgroundApiService: Checked completed request 1760162053316-8udp0n59a not found
 LOG  ❌ BackgroundApiService: Request failed 1760162053316-8udp0n59a The network connection was lost.
 ERROR  ❌ SERVER_API: Background request failed: The network connection was lost.
 ERROR  ❌ SERVER_API: Background API failed, falling back to regular request: [Error: The network connection was lost.]
 LOG  🔴 SERVER_API: Adding delay for Android stability...
 LOG  🔴 SERVER_API: History[0]: {"content": "Hi", "contentLength": 2, "role": "user", "timestamp": 1760162042128}
 LOG  🔴 SERVER_API: History[1]: {"content": "Hi there! I'm Juniper, your AI assistant. How can ...", "contentLength": 67, "role": "assistant", "timestamp": 1760162047505}
 LOG  🔴 SERVER_API: History[2]: {"content": "Just a test 1254", "contentLength": 16, "role": "user", "timestamp": 1760162053188}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Just a test 1254",
  "timestamp": 1760162115803,
  "history": [
    {
      "role": "user",
      "content": "Hi",
      "timestamp": 1760162042128,
      "type": "text"
    },
    {
      "role": "assistant",
      "content": "Hi there! I'm Juniper, your AI assistant. How can I help you today?",
      "timestamp": 1760162047505,
      "type": "text"
    },
    {
      "role": "user",
      "content": "Just a test 1254",
      "timestamp": 1760162053188,
      "type": "text"
    }
  ],
  "request_id": "1760162053316-8udp0n59a"
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
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1760162115930}
 LOG  📋 BackgroundApiService: Pending requests: []
 LOG  🔍 API Interceptor: User check result: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 LOG  🍎 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🍎 Starting wearables_data sync for 7 days
 LOG  🍎 Processing day 1/7: Sat Oct 04 2025
 LOG  🍎 Step query params: {"from": "2025-10-04T05:00:00.000Z", "to": "2025-10-05T04:59:59.999Z"}
 LOG  🔍 DB_QUERY: Found 1 unfetched completed requests
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Found 1 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: Fetching conversation for ID: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  🔍 DB_QUERY: Getting conversation messages for conversationId: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-03T23:00:00.000Z", "to": "2025-10-04T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-05T04:59:59.999Z", "dayStart": "2025-10-04T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 2/7: Sun Oct 05 2025
 LOG  🍎 Step query params: {"from": "2025-10-05T05:00:00.000Z", "to": "2025-10-06T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-04T23:00:00.000Z", "to": "2025-10-05T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-06T04:59:59.999Z", "dayStart": "2025-10-05T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 3/7: Mon Oct 06 2025
 LOG  🍎 Step query params: {"from": "2025-10-06T05:00:00.000Z", "to": "2025-10-07T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-05T23:00:00.000Z", "to": "2025-10-06T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-07T04:59:59.999Z", "dayStart": "2025-10-06T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 4/7: Tue Oct 07 2025
 LOG  🍎 Step query params: {"from": "2025-10-07T05:00:00.000Z", "to": "2025-10-08T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-06T23:00:00.000Z", "to": "2025-10-07T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-08T04:59:59.999Z", "dayStart": "2025-10-07T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 5/7: Wed Oct 08 2025
 LOG  🍎 Step query params: {"from": "2025-10-08T05:00:00.000Z", "to": "2025-10-09T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-07T23:00:00.000Z", "to": "2025-10-08T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-09T04:59:59.999Z", "dayStart": "2025-10-08T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 6/7: Thu Oct 09 2025
 LOG  🍎 Step query params: {"from": "2025-10-09T05:00:00.000Z", "to": "2025-10-10T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-08T23:00:00.000Z", "to": "2025-10-09T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-10T04:59:59.999Z", "dayStart": "2025-10-09T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Processing day 7/7: Fri Oct 10 2025
 LOG  🍎 Step query params: {"from": "2025-10-10T05:00:00.000Z", "to": "2025-10-11T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating heart rate records: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Sleep analysis query params: {"from": "2025-10-09T23:00:00.000Z", "to": "2025-10-10T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error creating body measurement records: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching resting heart rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching HRV: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood pressure: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching respiratory rate: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching oxygen saturation: [Error: Unknown std::runtime_error error.]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-10-11T04:59:59.999Z", "dayStart": "2025-10-10T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching blood glucose: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching time in daylight: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching VO2 Max: [Error: Unknown std::runtime_error error.]
 WARN  🍎 Error fetching menstruation data: [Error: Unknown std::runtime_error error.]
 LOG  🍎 Created 0 records for wearables_data sync
 LOG  🍎 After deduplication: 0 records (removed 0 duplicates)
 LOG  🍎 HealthSync: Successfully synced Apple Health data to wearables_data
 LOG  🔄 Apple Health: Triggering health-data-sync edge function for daily metrics...
 LOG  🔍 DB_QUERY: Found 4 messages for conversation: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  📬 UNFETCHED_CHECK: Added 4 messages from conversation: 7e58f8d6-fc6f-44a5-b30b-decbbfbab93c
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Displaying 4 total messages from 1 conversations
 LOG  🎯 SOURCE_3: About to call continuePreviousChat with messages: [{"content": "Hi...", "role": "user", "timestamp": 1760162042867}, {"content": "Hi there! I'm Juniper, your AI assistant. How can ...", "role": "assistant", "timestamp": 1760162047205}, {"content": "Just a test 1254...", "role": "user", "timestamp": 1760162053630}, {"content": "Got it! Test received loud and clear. I'm here and...", "role": "assistant", "timestamp": 1760162058243}]
 LOG  🎯 CONTINUE_CHAT: continuePreviousChat called with 4 messages
 LOG  🎯 CONTINUE_CHAT: Input messages: [{"content": "Hi...", "role": "user", "timestamp": 1760162042867}, {"content": "Hi there! I'm Juniper, your AI assistant. How can ...", "role": "assistant", "timestamp": 1760162047205}, {"content": "Just a test 1254...", "role": "user", "timestamp": 1760162053630}, {"content": "Got it! Test received loud and clear. I'm here and...", "role": "assistant", "timestamp": 1760162058243}]
 LOG  🎯 CONTINUE_CHAT: Updating recentAssistantMessagesRef with 2 messages
 LOG  🎯 CONTINUE_CHAT: About to call setChatHistory with 4 messages
 LOG  🎯 CONTINUE_CHAT: setChatHistory call completed
 LOG  🎯 SOURCE_3: continuePreviousChat call completed
 LOG  🔍 DB_QUERY: Marking response as fetched for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  ✅ DB_QUERY: Response marked as fetched for requestId: 1760162053316-8udp0n59a
 LOG  ✅ UNFETCHED_CHECK: Marked response as fetched for: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760162053316-8udp0n59a
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  ✅ Apple Health: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Apple Health (adb5b610-2141-4e43-a495-595ff8530959)", "Apple Health: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Apple Health", "user_id": "56a2c117-6486-4ca5-a57d-6c2e877e7083"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
 LOG  🏥 VOICE_CONTEXT: Health data successfully synced to database
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-11T05:54:13.316+00:00", "id": "2c43c0c4-9a7d-45e0-b7e6-8b70dfe2ea46", "requestId": "1760162053316-8udp0n59a", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-11T05:55:16.489+00:00", "user_message": "Just a test 1254"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  ✅ API Response Success: 200 /api/chat
 LOG  🔴 SERVER_API: ✅ Server response received
 LOG  API Response:
 {"integration_in_progress": false, "request_id": "1760162053316-8udp0n59a", "response": "Got it! Test received loud and clear. I'm here and ready to help whenever you need anything.", "settings_updated": false, "timestamp": 1760162121}
 LOG  📝 TEXT_INPUT: ========== API RESPONSE RECEIVED ==========
 LOG  📝 TEXT_INPUT: API call duration: 68068 ms
 LOG  📝 TEXT_INPUT: Received API response
 LOG  📝 TEXT_INPUT: Response settings_updated flag: false
 LOG  📝 TEXT_INPUT: Response integration_in_progress flag: false
 LOG  ⚙️ TEXT_INPUT: No settings update flag - skipping settings refresh
 LOG  🔗 TEXT_INPUT: No integration build in progress flag - skipping polling
 LOG  🔍 DB_QUERY: Checking if response already fetched for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  🔍 DB_QUERY: Response fetched status for requestId: 1760162053316-8udp0n59a = true
 LOG  📝 TEXT_INPUT: Response already fetched by unfetched check, skipping duplicate processing
 LOG  🔄 COMPLETION: Clearing request ID to stop polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760162053316-8udp0n59a
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
