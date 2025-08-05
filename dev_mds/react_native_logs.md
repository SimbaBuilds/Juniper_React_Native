 LOG  📷 Sending message: {"imageUrl": undefined, "text": "Hi"}
 LOG  📝 TEXT_INPUT: ========== TEXT MESSAGE PROCESSING ==========
 LOG  📝 TEXT_INPUT: Processing text message: Hi
 LOG  📝 TEXT_INPUT: Current voice settings: {
  "deepgramEnabled": false,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "selectedWakeWord": "Jarvis",
  "wakeWordSensitivity": 0.4,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-mars-en",
  "xaiLiveSearchEnabled": true,
  "xaiLiveSearchSafeSearch": true,
  "timezone": "America/Chicago",
  "xaiLiveSearchSources": [],
  "xaiLiveSearchCountry": "US",
  "xaiLiveSearchXHandles": [],
  "assistantName": "Assistant",
  "wakeWord": "Jarvis"
}
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
 LOG  🔴 SERVER_API: Generated request ID: 1754361476558-29043t9n5
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1754361476558-29043t9n5
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1754361476558-29043t9n5
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 84f1c248-1173-42b1-b668-db4d9caf0784 with image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1754361476558-29043t9n5
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1754361476558-29043t9n5
 LOG  🔴 SERVER_API: Adding delay for Android stability...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔴 SERVER_API: History[0]: {"content": "Hi", "contentLength": 2, "role": "user", "timestamp": 1754361476106}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Hi",
  "timestamp": 1754361477000,
  "history": [
    {
      "role": "user",
      "content": "Hi",
      "timestamp": 1754361476106,
      "type": "text"
    }
  ],
  "preferences": {
    "voice": "male",
    "response_type": "concise"
  },
  "request_id": "1754361476558-29043t9n5"
}
 LOG  🔍 API Interceptor: Starting auth check for request to: /api/chat
 LOG  📱 Platform: android
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  🔍 API Interceptor: User check result: User ID: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  📱 Android: Token length: 970
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  ✅ API Response Success: 200 /api/chat
 LOG  📱 Android: API request completed successfully
 LOG  🔴 SERVER_API: ✅ Server response received
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  API Response:
 {"integration_in_progress": false, "request_id": "1754361476558-29043t9n5", "response": "Hi there! I'm Juniper, your AI assistant. How can I help you today?", "settings_updated": false, "timestamp": 1754361485}
 LOG  📝 TEXT_INPUT: ========== API RESPONSE RECEIVED ==========
 LOG  📝 TEXT_INPUT: API call duration: 7683 ms
 LOG  📝 TEXT_INPUT: Received API response
 LOG  📝 TEXT_INPUT: Response settings_updated flag: false
 LOG  📝 TEXT_INPUT: Response integration_in_progress flag: false
 LOG  ⚙️ TEXT_INPUT: No settings update flag - skipping settings refresh
 LOG  🔗 TEXT_INPUT: No integration build in progress flag - skipping polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📝 TEXT_INPUT: Response added to chat (no TTS in text mode)
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
 LOG  📊 POLLING_HOOK_RESULT: Received status: null for requestId: 1754361476558-29043t9n5
