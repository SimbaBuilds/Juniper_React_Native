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
 LOG  🔴 SERVER_API: Generated request ID: 1758957094006-wsrxpndzp
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1758957094006-wsrxpndzp
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1758957094006-wsrxpndzp
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  💬 FIRST_MESSAGE: Creating new conversation for first message
 LOG  💬 Creating new conversation for first message: Hi...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ Conversation created successfully: 51fefa1e-ac2f-4709-b981-676f6203d980
 LOG  💬 FIRST_MESSAGE: ✅ New conversation created and set: 51fefa1e-ac2f-4709-b981-676f6203d980
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 3f2295cc-9612-49ed-95ad-d25389f515c7 with conversation_id: 51fefa1e-ac2f-4709-b981-676f6203d980 and image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1758957094006-wsrxpndzp
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1758957094006-wsrxpndzp
 LOG  🌐 SERVER_API: useBackgroundApi = true
 LOG  🌐 SERVER_API: Platform.OS = ios
 LOG  🌐 SERVER_API: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🌐 SERVER_API: ✅ Routing request through background API (simplified)
 LOG  🌐 SERVER_API: Using background API for iOS request 1758957094006-wsrxpndzp
 LOG  🌐 BackgroundApiService: Sending background request 1758957094006-wsrxpndzp
 LOG  🌐 BackgroundApiService: URL: http://192.168.1.80:8000/api/chat
 LOG  🌐 BackgroundApiService: Method: POST
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758957094006-wsrxpndzp
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🌐 BackgroundApiService: Background request started successfully {"requestId": "1758957094006-wsrxpndzp", "success": true}
 LOG  🌐 SERVER_API: Background request started, waiting for completion...
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-27T07:11:34.127+00:00", "id": "3f2295cc-9612-49ed-95ad-d25389f515c7", "requestId": "1758957094006-wsrxpndzp", "status": "pending", "total_turns": 0, "updated_at": "2025-09-27T07:11:34.127+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758957094006-wsrxpndzp
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-27T07:11:34.127+00:00", "id": "3f2295cc-9612-49ed-95ad-d25389f515c7", "requestId": "1758957094006-wsrxpndzp", "status": "pending", "total_turns": 0, "updated_at": "2025-09-27T07:11:34.127+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758957094006-wsrxpndzp
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  🔍 BackgroundApiService: Checked completed request 1758957094006-wsrxpndzp not found
 LOG  🔍 BackgroundApiService: Checked completed request 1758957094006-wsrxpndzp not found
