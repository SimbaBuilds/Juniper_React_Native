
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  🔴 SERVER_API: History[0]: {"content": "Hello", "contentLength": 5, "role": "user", "timestamp": 1753790026708}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "Hello",
  "timestamp": 1753790027033,
  "history": [
    {
      "role": "user",
      "content": "Hello",
      "timestamp": 1753790026708,
      "type": "text"
    }
  ],
  "preferences": {
    "voice": "male",
    "response_type": "concise"
  },
  "request_id": "1753790026863-46aczl72b"
}
 LOG  🔍 API Interceptor: Starting auth check for request to: /api/chat
 LOG  📱 Platform: ios
 LOG  🔍 API Interceptor: User check result: User ID: 5feaa57b-85b1-4002-8950-dfd9cbd8c77f
 LOG  🔍 API Interceptor: Session check result: Token exists: true
 LOG  ✅ API Interceptor: Auth token added to request
 LOG  🔍 API Interceptor: Final headers: {"Accept": "application/json, text/plain, */*", "Authorization": "[REDACTED]", "Content-Type": "multipart/form-data"}
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  📊 REQUEST_STATUS: Status changed to: thinking
 LOG  ✅ API Response Success: 200 /api/chat
 LOG  🔴 SERVER_API: ✅ Server response received
 LOG  API Response:
 {"integration_in_progress": false, "request_id": "1753790026863-46aczl72b", "response": "Hello! I'm here to help you with various tasks like searching the web, managing your files and resources, sending emails, or configuring your settings. What can I assist you with today?", "settings_updated": false, "timestamp": 1753790033}
 LOG  🔍 RN_BRIDGE_DEBUG: ========== API CALL COMPLETED ==========
 LOG  🔍 RN_BRIDGE_DEBUG: API call duration: 6491.404166996479 ms
 LOG  🔍 RN_BRIDGE_DEBUG: Response received at: 1753790033322
 LOG  🔍 RN_BRIDGE_DEBUG: Response data: {
  "response": "Hello! I'm here to help you with various tasks like searching the web, managing your files and resources, sending emails, or configuring your settings. What can I assist you with today?",
  "timestamp": 1753790033,
  "settings_updated": false,
  "integration_in_progress": false,
  "request_id": "1753790026863-46aczl72b"
}
 LOG  🟠 VOICE_CONTEXT: Received API response
 LOG  🔄 VOICE_CONTEXT: Response settings_updated flag: false
 LOG  ⚙️ VOICE_CONTEXT: No settings update flag - skipping settings refresh
 LOG  📱 Sending API response back to native: {"requestId": "36229FD4-5C3A-47D6-A378-73B97AC6D2E4", "responseLength": 185}
 LOG  📱 Platform: ios
 LOG  📱 VoiceModule available: true
 LOG  📱 handleApiResponse method available: true
 LOG  💬 Response update: Hello! I'm here to help you with various tasks like searching the web, managing your files and resources, sending emails, or configuring your settings. What can I assist you with today?
 LOG  🕐 Setting auto-refresh timer for 10 minutes
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: error
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: idle
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: error
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: idle
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: idle
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: idle
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: speaking
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: idle
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: speaking
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  📱 Native handleApiResponse result: true
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: speaking
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 REQUEST_STATUS: Status changed to: completed
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
