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
 LOG  🔴 SERVER_API: Generated request ID: 1758910005069-e5zsnzrzf
 LOG  🔴 SERVER_API_CALLBACK: Calling onRequestStart callback with requestId: 1758910005069-e5zsnzrzf
 LOG  🔄 CALLBACK_START: onRequestStart callback called with requestId: 1758910005069-e5zsnzrzf
 LOG  🔄 DB_CREATE_START: Starting database record creation for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 DB_CREATE_SUCCESS: Database request record created: 92645b01-347f-40e2-a595-cd7d4b994e34 with image URL: false
 LOG  🔄 SET_REQUEST_ID: Setting currentRequestId to trigger polling: 1758910005069-e5zsnzrzf
 LOG  🔄 SET_REQUEST_ID_COMPLETE: currentRequestId set, polling should start now
 LOG  🔄 CALLBACK_END: onRequestStart callback completed
 LOG  🔴 SERVER_API_CALLBACK_DONE: onRequestStart callback completed for requestId: 1758910005069-e5zsnzrzf
 LOG  🌐 SERVER_API: useBackgroundApi = true
 LOG  🌐 SERVER_API: Platform.OS = ios
 LOG  🌐 SERVER_API: backgroundApiService.isBackgroundApiAvailable() = true
 LOG  🌐 SERVER_API: ✅ Routing request through background API (simplified)
 LOG  🌐 SERVER_API: Using background API for iOS request 1758910005069-e5zsnzrzf
 LOG  🌐 BackgroundApiService: Sending background request 1758910005069-e5zsnzrzf
 LOG  🌐 BackgroundApiService: URL: https://juniper-python-backend.onrender.com/api/chat
 LOG  🌐 BackgroundApiService: Method: POST
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1758910005069-e5zsnzrzf
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🌐 BackgroundApiService: Background request started successfully {"requestId": "1758910005069-e5zsnzrzf", "success": true}
 LOG  🌐 SERVER_API: Background request started, request will continue in background
 LOG  API Response:
 {"integration_in_progress": false, "request_id": "1758910005069-e5zsnzrzf", "response": "Request started in background. Processing will continue even if app is backgrounded.", "timestamp": 1758910005230}
 LOG  📝 TEXT_INPUT: ========== API RESPONSE RECEIVED ==========
 LOG  📝 TEXT_INPUT: API call duration: 162 ms
 LOG  📝 TEXT_INPUT: Received API response
 LOG  📝 TEXT_INPUT: Response settings_updated flag: undefined
 LOG  📝 TEXT_INPUT: Response integration_in_progress flag: false
 LOG  ⚙️ TEXT_INPUT: No settings update flag - skipping settings refresh
 LOG  🔗 TEXT_INPUT: No integration build in progress flag - skipping polling
 LOG  📝 TEXT_INPUT: Response added to chat (no TTS in text mode)
 LOG  🔄 COMPLETION: Clearing request ID to stop polling
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Skipping native sync - not available
 LOG  ✅ TEXT_INPUT: History synced to native after API response
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-26T18:06:45.07+00:00", "id": "92645b01-347f-40e2-a595-cd7d4b994e34", "requestId": "1758910005069-e5zsnzrzf", "status": "pending", "total_turns": 0, "updated_at": "2025-09-26T18:06:45.07+00:00", "user_message": ""}
 LOG  🔍 DB_QUERY: Returning status: pending for requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_RESULT: Received status: pending for requestId: 1758910005069-e5zsnzrzf
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: pending
 LOG  📊 REQUEST_STATUS: Status changed to: pending
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 BackgroundApiService: Progress update for request 1758910005069-e5zsnzrzf
