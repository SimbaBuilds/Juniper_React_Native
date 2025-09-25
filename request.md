 LOG  🔄 Keyboard shown, height: 277.20001220703125 (using adjustResize, not adding to bottomSection)
 LOG  🔄 Chat list padding changed: 16 keyboard height: 277.20001220703125
 LOG  🔄 TextChatInput: handleSend called {"hasImage": false, "hasMessage": true, "isSending": false, "platform": "android"}
 LOG  🔄 TextChatInput: Sending message {"hasImageUrl": false, "messageLength": 2}
 LOG  📷 Sending message: {"imageUrl": undefined, "text": "Hi"}
 LOG  📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========
 LOG  📝 TEXT_INPUT: Processing text message: Hi
 LOG  📝 TEXT_INPUT: Current voice settings: {
  "deepgramEnabled": false,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.05,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en",
  "timezone": "UTC",
  "wakeWord": "Juniper"
}
 LOG  ✅ TextChatInput: Message sent successfully
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📝 TEXT_INPUT: ========== SENDING TO API ==========
 LOG  📝 TEXT_INPUT: Sending message to API
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔴 SERVER_API: sendChatRequest called
 LOG  🔴 SERVER_API: Message: "Hi"
 LOG  🔴 SERVER_API: Generated request ID: 1758842394886-xcmlrotmo
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1758842394886-xcmlrotmo
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1758842394886-xcmlrotmo
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 Keyboard hidden
 LOG  🔄 Chat list padding changed: 80 keyboard height: 0
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: aade53a6-73ce-410e-baf5-768669dc2350 with image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1758842394886-xcmlrotmo
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1758842394886-xcmlrotmo
 LOG  🔴 SERVER_API: Adding delay for Android stability...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  🔴 SERVER_API: History[0]: {"content": "Hi", "contentLength": 2, "role": "user", "timestamp": 1758842394399}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Hi",
  "timestamp": 1758842395421,
  "history": [
    {
      "role": "user",
      "content": "Hi",
      "timestamp": 1758842394399,
      "type": "text"
    }
  ],
  "request_id": "1758842394886-xcmlrotmo"
}
 LOG  🔍 API Interceptor: Starting auth check for request to: /api/chat
 LOG  📱 Platform: android
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  🔍 API Interceptor: User check result: User ID: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  📱 Android: Token length: 735
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 ERROR  ❌ API Response Error: undefined /api/chat
 ERROR  Error details: {"code": "ERR_NETWORK", "isNetworkError": true, "message": "Network Error", "response": undefined}
 ERROR  📱 Android: API request failed with status: undefined
 ERROR  🔴 SERVER_API: ❌ API request error: [AxiosError: Network Error]
 ERROR  🔴 SERVER_API: API request failed in queue
 ERROR  🔴 SERVER_API: ❌ Error sending chat request: [AxiosError: Network Error]
 ERROR  🔴 SERVER_API: Queued request failed
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 ERROR  📝 TEXT_INPUT: ❌ Error processing text message: [AxiosError: Network Error]
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758842394886-xcmlrotmo
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-25T23:19:54.889+00:00", "id": "aade53a6-73ce-410e-baf5-768669dc2350", "requestId": "1758842394886-xcmlrotmo", "status": "pending", "total_turns": 0, "updated_at": "2025-09-25T23:19:54.889+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758842394886-xcmlrotmo
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling

Message: Sorry, I encountered an error" Network Error