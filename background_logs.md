08-29 11:56:15.094 12851 17410 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 304 chunks in 30s (isPaused: false)
08-29 11:56:18.697 12851 12997 D AppStateModule: 📱 APP_STATE_MODULE: getCurrentAppState called - returning: active
08-29 11:56:19.352 12851 12851 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 11:56:19.352 12851 12851 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 11:56:19.352 12851 12851 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 11:56:19.353 12851 12851 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 11:56:29.492 12851 17410 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.3035 (threshold: 0.05)
08-29 11:56:29.494 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 11:56:29.494 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 11:56:29.494 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: Time: 11:56:29.492
08-29 11:56:29.494 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.30352414
08-29 11:56:29.494 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 11:56:29.495 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756486589492
08-29 11:56:29.495 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 11:56:29.495 12851 17410 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 11:56:29.495 12851 17410 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: false
08-29 11:56:29.495 12851 17410 I WakeWordService: 📱 BACKGROUND_CHECK: App is backgrounded - storing event and bringing to foreground
08-29 11:56:29.705 12851 17410 W WakeWordService: 📱 BACKGROUND_CHECK: ⚠️ Failed to bring app to foreground - sending event anyway
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756486589705
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.30352414
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 11:56:29.705 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 11:56:29.705 12851 17410 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 11:56:29.705 12851 17410 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 11:56:29.705 12851 17410 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: false
08-29 11:56:29.705 12851 17410 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@19037f7
08-29 11:56:29.705 12851 17410 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756486589705
08-29 11:56:29.705 12851 17410 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 11:56:29.708 12851 17410 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 11:56:29.708 12851 17410 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 11:56:29.708 12851 17410 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 11:56:29.712 12851 17410 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 11:56:29.712 12851 17410 I VoiceManager: Initializing OpenAI Whisper client
08-29 11:56:29.713 12851 17410 D VoiceManager: Whisper client initialized successfully
08-29 11:56:29.713 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 11:56:29.713 12851 17410 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 11:56:29.713 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 11:56:29.713 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756486589713
08-29 11:56:29.713 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 11:56:29.713 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 11:56:29.713 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 11:56:29.716 12851 12851 D VoiceManager: Deepgram client initialized for future use
08-29 11:56:29.716 12851 12851 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 11:56:29.716 12851 12851 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 11:56:29.717 12851 12851 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 11:56:29.717 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 11:56:29.718 12851 12851 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756486589717)
08-29 11:56:29.718 12851 12851 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 11:56:29.718 12851 12851 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 11:56:29.718 12851 12851 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 11:56:29.718 12851 12851 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 11:56:29.721 12851 12851 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756486589717)
08-29 11:56:29.721 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 11:56:29.721 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 11:56:29.721 12851 12851 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 11:56:29.722 12851 12851 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 11:56:29.722 12851 12851 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 11:56:29.722 12851 12851 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 11:56:29.723 12851 12851 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 11:56:29.723 12851 12851 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 11:56:29.730 12851 12851 I VoiceManager: SpeechRecognizer started listening.
08-29 11:56:29.732 12851 12851 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 11:56:29.766 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 11:56:29.769 12851 17410 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 11:56:29.769 12851 17410 E WakeWordService: java.lang.InterruptedException
08-29 11:56:29.769 12851 17410 E WakeWordService:   at java.lang.Object.wait(Native Method)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at java.lang.Object.wait(Object.java:405)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at java.lang.Thread.join(Thread.java:1643)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:727)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda7.run(Unknown Source:2)
08-29 11:56:29.769 12851 17410 E WakeWordService:   at java.lang.Thread.run(Thread.java:1119)
08-29 11:56:29.769 12851 17410 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756486589717)
08-29 11:56:29.772 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 11:56:29.772 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 11:56:29.773 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@c64d92f
08-29 11:56:29.773 12851 17410 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 11:56:29.773 12851 12851 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 2-minute auto-resume timer (coroutine: StandaloneCoroutine{Active}@c64d92f)
08-29 11:56:29.774 12851 17410 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 11:56:29.774 12851 17410 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 11:56:29.784 12851 12851 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@64c6b75com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@2f8e2d3
08-29 11:56:29.784 12851 12851 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 11:56:29.784 12851 12851 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 11:56:29.784 12851 12851 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 11:56:29.824 12851 12851 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 11:56:29.824 12851 12851 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 11:56:29.826 12851 12851 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 11:56:29.826 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 11:56:29.826 12851 12851 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756486589826)
08-29 11:56:29.826 12851 12851 D AudioManager: Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
08-29 11:56:29.826 12851 12851 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756486589717)
08-29 11:56:29.931 10156 10156 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@1dacdb2epk@677cfc4
08-29 11:56:29.932 12851 12851 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756486589826)
08-29 11:56:29.932 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 11:56:29.932 12851 12851 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 11:56:29.933 12851 12851 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 11:56:29.933 12851 12851 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 11:56:29.933 12851 12851 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 11:56:29.933 12851 12851 I VoiceManager: SpeechRecognizer started listening.
08-29 11:56:29.933 12851 12851 D VoiceManager: Ready for speech
08-29 11:56:29.936 12851 12851 E VoiceManager: Speech recognition error: Client error
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756486590207
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 11:56:29.492
08-29 11:56:30.207 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 11:56:30.208 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.3035
08-29 11:56:30.208 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 11:56:30.208 12851 12851 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 11:56:30.212 12851 12851 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.3035241365432739,"timestamp":1756486589492}
08-29 11:56:30.215 12851 12851 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 11:56:30.215 12851 12851 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 11:56:30.215 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 11:56:30.216 12851 12851 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 11:56:31.464 12851 12851 D VoiceManager: Beginning of speech
08-29 11:56:31.610 12851 12851 D VoiceManager: Partial results: ''
08-29 11:56:31.718 12851 12851 D VoiceManager: Partial results: ''
08-29 11:56:31.833 12851 12851 D VoiceManager: Partial results: ''
08-29 11:56:32.229 12851 12851 D VoiceManager: Partial results: 'how'
08-29 11:56:32.326 12851 12851 D VoiceManager: Partial results: 'how are'
08-29 11:56:32.369 12851 12851 D VoiceManager: Partial results: 'how are you'
08-29 11:56:32.690 12851 12851 D VoiceManager: End of speech
08-29 11:56:32.706 12851 12851 D VoiceManager: Speech recognition results received: 1 matches
08-29 11:56:32.706 12851 12851 D VoiceManager: Match 0: 'how are you'
08-29 11:56:32.707 12851 12851 I VoiceManager: Speech recognized: 'how are you'
08-29 11:56:32.708 12851 12851 I VoiceManager: Speech recognized: "how are you"
08-29 11:56:32.709 12851 12851 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 11:56:32.709 12851 12851 D AudioManager: Releasing audio focus for ID: speech_recognition_1756486589826
08-29 11:56:32.709 12851 12851 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756486589826)
08-29 11:56:32.710 12851 12851 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756486589826)
08-29 11:56:32.714 12851 12851 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 11:56:32.714 12851 12851 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 11:56:32.715 12851 12851 I VoiceManager: Speech recognition completed successfully, processing command
08-29 11:56:32.715 12851 12851 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 11:56:32.715 12851 12851 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 11:56:32.717 12851 12851 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 11:56:32.717 12851 12851 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: false
08-29 11:56:32.717 12851 12851 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Process natively in background
08-29 11:56:32.717 12851 12851 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 11:56:32.718 12851 12851 I VoiceManager: 📱 NATIVE_FLOW: ========== PROCESSING TEXT IN BACKGROUND ==========
08-29 11:56:32.721 12851 12851 I VoiceManager: 📱 NATIVE_FLOW: Text: 'how are you'
08-29 11:56:32.722 12851 12851 I VoiceManager: 📱 NATIVE_FLOW: Using native API client for background processing
08-29 11:56:32.724 12851 12881 D VoiceManager: 📱 NATIVE_FLOW: Current history length: 0
08-29 11:56:32.724 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Attempting to retrieve Supabase access token
08-29 11:56:32.725 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total SharedPreferences keys: 0
08-29 11:56:32.725 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Checking AsyncStorage SQLite databases...
08-29 11:56:32.726 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: RKStorage exists: true
08-29 11:56:32.726 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: CatalystStorage exists: false
08-29 11:56:32.727 12851 12851 E VoiceManager: Speech recognition error: Client error
08-29 11:56:32.727 12851 12851 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 11:56:32.727 12851 12851 D AudioManager: Releasing audio focus for ID: speech_recognition_1756486589826
08-29 11:56:32.728 12851 12851 W AudioManager: No active request found with ID speech_recognition_1756486589826
08-29 11:56:32.728 12851 12851 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756486589826)
08-29 11:56:32.729 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total AsyncStorage database keys: 2
08-29 11:56:32.729 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Auth-related keys in database (1):
08-29 11:56:32.729 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Querying AsyncStorage database for key: sb-ydbabipbxxleeiiysojv-auth-token
08-29 11:56:32.730 12851 12881 D SupabaseTokenManager: 🔐 AUTH: ✅ Found value in AsyncStorage database
08-29 11:56:32.731 12851 12881 D SupabaseTokenManager: 🔐 AUTH_DEBUG:   sb-ydbabipbxxleeiiysojv-auth-token = {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6InFQa0xWaTNhZWM3M3dpNysiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJo...
08-29 11:56:32.731 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Searching for Supabase v2 session in AsyncStorage database...
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Checking key: sb-ydbabipbxxleeiiysojv-auth-token
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Found Supabase v2 session key in database: sb-ydbabipbxxleeiiysojv-auth-token
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Raw value: {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6InFQa0xWaTNhZWM3M3dpNysiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJo...
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Parsing session JSON...
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Access token found: true
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: ✅ Found access token in v2 session
08-29 11:56:32.732 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Token expiry check - expires_at: 1756488391, current: 1756486592
08-29 11:56:32.732 12851 12881 I SupabaseTokenManager: 🔐 AUTH: ✅ Successfully retrieved valid Supabase v2 access token
08-29 11:56:32.733 12851 12881 I SupabaseTokenManager: 🔐 AUTH: ✅ Found valid Supabase v2 session
08-29 11:56:32.733 12851 12881 D VoiceManager: 📱 NATIVE_FLOW: Making API call...
08-29 11:56:32.734 12851 12881 I NativeApiClient: 📡 NATIVE_API: ========== SENDING CHAT MESSAGE ==========
08-29 11:56:32.734 12851 12881 I NativeApiClient: 📡 NATIVE_API: Message: 'how are you'
08-29 11:56:32.734 12851 12881 I NativeApiClient: 📡 NATIVE_API: History length: 0
08-29 11:56:32.734 12851 12881 I NativeApiClient: 📡 NATIVE_API: Request ID: 1756486592733-f6c658d8-
08-29 11:56:32.734 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Attempting to retrieve user ID
08-29 11:56:32.734 12851 12881 D SupabaseTokenManager: 🔐 AUTH: Getting user ID from Supabase v2 session...
08-29 11:56:32.736 12851 12881 D SupabaseTokenManager: 🔐 AUTH: ✅ Found user ID from v2 session
08-29 11:56:32.736 12851 12881 I SupabaseTokenManager: 🔐 AUTH: ✅ Found user ID from v2 session: f8ac1669...
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: ========== API CALL CONTEXT ==========
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: User ID: f8ac1669-7e9...
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: Message: 'how are you'
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: History entries: 0
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: Voice Settings:
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Deepgram enabled: false
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Selected voice: aura-2-pandora-en
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Base model: claude-sonnet-4-20250514
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Timezone: UTC
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Instructions: ''
08-29 11:56:32.745 12851 12881 I NativeApiClient: 📡 CONTEXT_DEBUG: =======================================
08-29 11:56:32.750 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG: ========== COMPLETE API PAYLOAD ==========
08-29 11:56:32.750 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG: Request structure:
08-29 11:56:32.750 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - message: 'how are you'
08-29 11:56:32.750 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timestamp: 1756486592746
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - request_id: '1756486592733-f6c658d8-'
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - user_id: 'f8ac1669-7e9...'
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - history: 0 entries
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - deepgram_enabled: false
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - selected_deepgram_voice: 'aura-2-pandora-en'
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - base_language_model: 'claude-sonnet-4-20250514'
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timezone: 'UTC'
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - general_instructions: ''
08-29 11:56:32.751 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG: Raw JSON payload:
08-29 11:56:32.752 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG: {"base_language_model":"claude-sonnet-4-20250514","deepgram_enabled":false,"general_instructions":"","history":[],"message":"how are you","request_id":"1756486592733-f6c658d8-","selected_deepgram_voice":"aura-2-pandora-en","timestamp":1756486592746,"timezone":"UTC","user_id":"f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
08-29 11:56:32.752 12851 12881 I NativeApiClient: 📡 PAYLOAD_DEBUG: =======================================
08-29 11:56:32.756 12851 12881 D NativeApiClient: 📡 NATIVE_API: Making 