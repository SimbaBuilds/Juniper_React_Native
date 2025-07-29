
 LOG  🔴 SERVER_API: History[0]: {"content": "How are you", "contentLength": 11, "role": "user", "timestamp": 1753787646978}
 LOG  🔴 SERVER_API: Full request payload: {
  "message": "How are you",
  "timestamp": 1753787647392,
  "history": [
    {
      "role": "user",
      "content": "How are you",
      "timestamp": 1753787646978,
      "type": "text"
    }
  ],
  "preferences": {
    "voice": "male",
    "response_type": "concise"
  },
  "request_id": "1753787647222-6y2t0xs22"
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
 {"integration_in_progress": false, "request_id": "1753787647222-6y2t0xs22", "response": "I'm doing well, thank you for asking! I'm here and ready to help you with whatever you need. How are you doing today?", "settings_updated": false, "timestamp": 1753787653}
 LOG  🔍 RN_BRIDGE_DEBUG: ========== API CALL COMPLETED ==========
 LOG  🔍 RN_BRIDGE_DEBUG: API call duration: 6355.986040994525 ms
 LOG  🔍 RN_BRIDGE_DEBUG: Response received at: 1753787653548
 LOG  🔍 RN_BRIDGE_DEBUG: Response data: {
  "response": "I'm doing well, thank you for asking! I'm here and ready to help you with whatever you need. How are you doing today?",
  "timestamp": 1753787653,
  "settings_updated": false,
  "integration_in_progress": false,
  "request_id": "1753787647222-6y2t0xs22"
}
 LOG  🟠 VOICE_CONTEXT: Received API response
 LOG  🔄 VOICE_CONTEXT: Response settings_updated flag: false
 LOG  ⚙️ VOICE_CONTEXT: No settings update flag - skipping settings refresh
 LOG  📱 Sending API response back to native: {"requestId": "55FCF113-5B45-454B-A0E7-73A9EBF52C00", "responseLength": 117}
 LOG  📱 Platform: ios
 LOG  📱 VoiceModule available: true
 LOG  📱 handleApiResponse method available: true
 LOG  💬 Response update: I'm doing well, thank you for asking! I'm here and ready to help you with whatever you need. How are you doing today?
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
 LOG  📱 Native handleApiResponse result: true
