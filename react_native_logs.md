 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760497108893-61ws5aeft
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-15T02:58:28.895+00:00", "id": "13d03fd8-9749-4deb-8194-7932df843d16", "requestId": "1760497108893-61ws5aeft", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-15T02:58:29.404557+00:00", "user_message": "Just testing"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  🖥️ SETTINGS_SCREEN: Received settings from VoiceContext: {"baseLanguageModel": "claude-sonnet-4-20250514", "deepgramEnabled": true, "generalInstructions": "", "selectedDeepgramVoice": "aura-2-pandora-en", "selectedWakeWord": "Juniper", "timezone": "UTC", "wakeWord": "Juniper", "wakeWordDetectionEnabled": false, "wakeWordSensitivity": 0.2}
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
 LOG  📊 POLLING_HOOK_POLL: Polling status for requestId: 1760497108893-61ws5aeft
 LOG  🔍 DB_QUERY: Querying request status for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_INTERVAL: Setting up polling interval: 5000 ms
 LOG  🔍 BackgroundApiService: Checked completed request 1760497108893-61ws5aeft not found
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-10-15T02:58:28.895+00:00", "id": "13d03fd8-9749-4deb-8194-7932df843d16", "requestId": "1760497108893-61ws5aeft", "status": "thinking", "total_turns": 0, "updated_at": "2025-10-15T02:58:29.404557+00:00", "user_message": "Just testing"}
 LOG  🔍 DB_QUERY: Returning status: thinking for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_RESULT: Received status: thinking for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  🔍 BackgroundApiService: Checked completed request 1760497108893-61ws5aeft not found
 LOG  🔍 BackgroundApiService: Checked completed request 1760497108893-61ws5aeft not found
 LOG  🔍 BackgroundApiService: Checked completed request 1760497108893-61ws5aeft not found
 LOG  📊 BackgroundApiService: Progress update for request 1760497108893-61ws5aeft
 LOG  ✅ BackgroundApiService: Request completed 1760497108893-61ws5aeft
 LOG  ✅ BackgroundApiService: Complete event data: {"data":"{\"response\":\"Got it! Everything's working well. Let me know if you'd like to try out any of my capabilities.\",\"timestamp\":1760497113,\"settings_updated\":false,\"integration_in_progress\":false}","requestId":"1760497108893-61ws5aeft","dataSize":190}
 LOG  🌐 SERVER_API: Received BackgroundApiComplete event {"data": "{\"response\":\"Got it! Everything's working well. Let me know if you'd like to try out any of my capabilities.\",\"timestamp\":1760497113,\"settings_updated\":false,\"integration_in_progress\":false}", "dataSize": 190, "requestId": "1760497108893-61ws5aeft"}
 LOG  API Response:
 {"additional_data": undefined, "integration_in_progress": false, "request_id": "1760497108893-61ws5aeft", "response": "Got it! Everything's working well. Let me know if you'd like to try out any of my capabilities.", "settings_updated": false, "timestamp": 1760497113245}
 LOG  🔍 RN_BRIDGE_DEBUG: ========== API CALL COMPLETED ==========
 LOG  🔍 RN_BRIDGE_DEBUG: API call duration: 4354.242291927338 ms
 LOG  🔍 RN_BRIDGE_DEBUG: Response received at: 1760497113248
 LOG  🔍 RN_BRIDGE_DEBUG: Response data: {
  "response": "Got it! Everything's working well. Let me know if you'd like to try out any of my capabilities.",
  "timestamp": 1760497113245,
  "request_id": "1760497108893-61ws5aeft",
  "settings_updated": false,
  "integration_in_progress": false
}
 LOG  🟠 VOICE_CONTEXT: Received API response
 LOG  🔄 VOICE_CONTEXT: Response settings_updated flag: false
 LOG  ⚙️ VOICE_CONTEXT: No settings update flag - skipping settings refresh
 LOG  📱 Sending API response back to native: {"requestId": "5E603CA3-44FD-480B-9BC9-480427A6E9F7", "responseLength": 95}
 LOG  📱 Platform: ios
 LOG  📱 VoiceModule available: true
 LOG  📱 handleApiResponse method available: true
 LOG  🖥️ SETTINGS_SCREEN: Received settings from VoiceContext: {"baseLanguageModel": "claude-sonnet-4-20250514", "deepgramEnabled": true, "generalInstructions": "", "selectedDeepgramVoice": "aura-2-pandora-en", "selectedWakeWord": "Juniper", "timezone": "UTC", "wakeWord": "Juniper", "wakeWordDetectionEnabled": false, "wakeWordSensitivity": 0.2}
 LOG  🎯 SOURCE_1: VoiceResponseUpdate received - content: Got it! Everything's working well. Let me know if ...
 LOG  🎯 SOURCE_1: Processing VoiceResponseUpdate for chat history addition
 LOG  🎯 SOURCE_1: Current chatHistory length before addition: 1
 LOG  🎯 SOURCE_1: Current requestId: null
 LOG  🔍 DUPLICATE_CHECK: Checking isDuplicateInRecentRef - content: "Got it! Everything's working well. Let me know if ...", recentRef length: 1
 LOG  🔍 DUPLICATE_CHECK: isDuplicateInRecentRef result: false
 LOG  🔍 DUPLICATE_CHECK: Current recentRef contents: [{"age": 34704, "content": "Hi there! I'm Juniper, your AI..."}]
 LOG  🔍 DUPLICATE_CHECK: Checking isDuplicateMessage - role: assistant, content: "Got it! Everything's working well. Let me know if ...", chatHistory length: 1
 LOG  🔍 DUPLICATE_CHECK: isDuplicateMessage result: false
 LOG  🎯 SOURCE_1: No duplicates detected - proceeding to add message with timestamp: 1760497113334
 LOG  📝 UPDATE_RECENT_REF: Adding message to recentRef - content: "Got it! Everything's working well. Let me know if ...", timestamp: 1760497113334
 LOG  📝 UPDATE_RECENT_REF: Previous recentRef length: 1
 LOG  📝 UPDATE_RECENT_REF: Updated recentRef length: 2
 LOG  📝 UPDATE_RECENT_REF: Updated recentRef contents: [{"content": "Got it! Everything's working w...", "timestamp": 1760497113334}, {"content": "Hi there! I'm Juniper, your AI...", "timestamp": 1760497078629}]
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
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Polling interval cleared in cleanup
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_START: Starting polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_INITIAL: Starting initial poll with 150ms delay
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
 LOG  🖥️ SETTINGS_SCREEN: Received settings from VoiceContext: {"baseLanguageModel": "claude-sonnet-4-20250514", "deepgramEnabled": true, "generalInstructions": "", "selectedDeepgramVoice": "aura-2-pandora-en", "selectedWakeWord": "Juniper", "timezone": "UTC", "wakeWord": "Juniper", "wakeWordDetectionEnabled": false, "wakeWordSensitivity": 0.2}
 LOG  📊 POLLING_HOOK_CLEANUP: Cleaning up polling for requestId: 1760497108893-61ws5aeft
 LOG  📊 POLLING_HOOK_CLEANUP_DONE: Initial delay timeout cleared
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
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🖥️ SETTINGS_SCREEN: Received settings from VoiceContext: {"baseLanguageModel": "claude-sonnet-4-20250514", "deepgramEnabled": true, "generalInstructions": "", "selectedDeepgramVoice": "aura-2-pandora-en", "selectedWakeWord": "Juniper", "timezone": "UTC", "wakeWord": "Juniper", "wakeWordDetectionEnabled": false, "wakeWordSensitivity": 0.2}
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔴 useVoiceState: SPEAKING state detected!
 LOG  🔴 useVoiceState: normalizedState: speaking
 LOG  🔴 useVoiceState: VoiceState.SPEAKING: SPEAKING
 LOG  🔴 useVoiceState: isSpeaking: true
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: speaking
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: listening
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: speaking
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: listening
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🖥️ SETTINGS_SCREEN: Received settings from VoiceContext: {"baseLanguageModel": "claude-sonnet-4-20250514", "deepgramEnabled": true, "generalInstructions": "", "selectedDeepgramVoice": "aura-2-pandora-en", "selectedWakeWord": "Juniper", "timezone": "UTC", "wakeWord": "Juniper", "wakeWordDetectionEnabled": false, "wakeWordSensitivity": 0.2}
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: listening
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: listening
 LOG  🔄 VOICE_CONTEXT: Context isListening: true
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
