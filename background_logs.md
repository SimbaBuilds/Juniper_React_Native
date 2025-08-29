08-29 09:42:45.967 18625 18734 D AppStateModule: 📱 APP_STATE_MODULE: getCurrentAppState called - returning: active
08-29 09:42:46.519 18625 18625 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 09:42:46.519 18625 18625 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 09:42:46.519 18625 18625 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 09:42:46.520 18625 18625 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 09:42:51.390 18625 18824 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.2297 (threshold: 0.05)
08-29 09:42:51.391 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 09:42:51.391 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 09:42:51.391 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: Time: 09:42:51.390
08-29 09:42:51.392 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.22974652
08-29 09:42:51.392 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 09:42:51.392 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756478571390
08-29 09:42:51.392 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 09:42:51.392 18625 18824 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 09:42:51.392 18625 18824 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: false
08-29 09:42:51.392 18625 18824 I WakeWordService: 📱 BACKGROUND_CHECK: App is backgrounded - storing event and bringing to foreground
08-29 09:42:51.617 18625 18824 W WakeWordService: 📱 BACKGROUND_CHECK: ⚠️ Failed to bring app to foreground - sending event anyway
08-29 09:42:51.617 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 09:42:51.617 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756478571617
08-29 09:42:51.617 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 09:42:51.617 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 09:42:51.617 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.22974652
08-29 09:42:51.618 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 09:42:51.618 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 09:42:51.618 18625 18824 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 09:42:51.618 18625 18824 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 09:42:51.618 18625 18824 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: false
08-29 09:42:51.618 18625 18824 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@fc293e0
08-29 09:42:51.618 18625 18824 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756478571618
08-29 09:42:51.618 18625 18824 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 09:42:51.618 18625 18824 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 09:42:51.618 18625 18824 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 09:42:51.618 18625 18824 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 09:42:51.622 18625 18824 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 09:42:51.622 18625 18824 I VoiceManager: Initializing OpenAI Whisper client
08-29 09:42:51.623 18625 18824 D VoiceManager: Whisper client initialized successfully
08-29 09:42:51.623 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 09:42:51.623 18625 18824 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 09:42:51.623 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 09:42:51.623 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756478571623
08-29 09:42:51.623 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 09:42:51.623 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 09:42:51.623 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 09:42:51.626 18625 18625 D VoiceManager: Deepgram client initialized for future use
08-29 09:42:51.626 18625 18625 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 09:42:51.627 18625 18625 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 09:42:51.628 18625 18625 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 09:42:51.628 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 09:42:51.628 18625 18625 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478571628)
08-29 09:42:51.628 18625 18625 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 09:42:51.628 18625 18625 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 09:42:51.629 18625 18625 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 09:42:51.629 18625 18625 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 09:42:51.632 18625 18625 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756478571628)
08-29 09:42:51.632 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 09:42:51.632 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 09:42:51.632 18625 18625 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 09:42:51.633 18625 18625 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 09:42:51.633 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 09:42:51.633 18625 18625 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 09:42:51.634 18625 18625 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 09:42:51.634 18625 18625 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 09:42:51.643 18625 18625 I VoiceManager: SpeechRecognizer started listening.
08-29 09:42:51.646 18625 18625 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 09:42:51.684 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 09:42:51.686 18625 18824 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 09:42:51.686 18625 18824 E WakeWordService: java.lang.InterruptedException
08-29 09:42:51.686 18625 18824 E WakeWordService:       at java.lang.Object.wait(Native Method)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at java.lang.Object.wait(Object.java:405)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at java.lang.Thread.join(Thread.java:1643)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:727)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda7.run(Unknown Source:2)
08-29 09:42:51.686 18625 18824 E WakeWordService:       at java.lang.Thread.run(Thread.java:1119)
08-29 09:42:51.686 18625 18824 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756478571628)
08-29 09:42:51.690 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 09:42:51.690 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 09:42:51.691 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@bab9161
08-29 09:42:51.691 18625 18625 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 2-minute auto-resume timer (coroutine: StandaloneCoroutine{Active}@bab9161)
08-29 09:42:51.691 18625 18824 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 09:42:51.691 18625 18824 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 09:42:51.691 18625 18824 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 09:42:51.698 18625 18625 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@9919338com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@9101be5
08-29 09:42:51.699 18625 18625 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 09:42:51.700 18625 18625 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 09:42:51.700 18625 18625 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 09:42:51.734 18625 18625 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 09:42:51.734 18625 18625 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 09:42:51.736 18625 18625 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 09:42:51.736 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 09:42:51.736 18625 18625 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478571736)
08-29 09:42:51.736 18625 18625 D AudioManager: Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
08-29 09:42:51.736 18625 18625 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478571628)
08-29 09:42:51.851 10156 10156 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@1dacdb2epk@f307277
08-29 09:42:51.852 18625 18625 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756478571736)
08-29 09:42:51.852 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 09:42:51.852 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 09:42:51.853 18625 18625 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 09:42:51.853 18625 18625 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 09:42:51.853 18625 18625 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 09:42:51.853 18625 18625 I VoiceManager: SpeechRecognizer started listening.
08-29 09:42:51.853 18625 18625 D VoiceManager: Ready for speech
08-29 09:42:51.859 18625 18625 E VoiceManager: Speech recognition error: Client error
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756478572119
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 09:42:52.119 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 09:42:52.120 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 09:42:51.390
08-29 09:42:52.120 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 09:42:52.120 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.2297
08-29 09:42:52.120 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 09:42:52.120 18625 18625 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 09:42:52.122 18625 18625 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.2297465205192566,"timestamp":1756478571390}
08-29 09:42:52.123 18625 18625 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 09:42:52.124 18625 18625 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 09:42:52.124 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 09:42:52.124 18625 18625 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 09:42:54.293 18625 18625 D VoiceManager: Beginning of speech
08-29 09:42:54.469 18625 18625 D VoiceManager: Partial results: ''
08-29 09:42:54.520 18625 18625 D VoiceManager: Partial results: ''
08-29 09:42:54.740 18625 18625 D VoiceManager: Partial results: ''
08-29 09:42:55.077 18625 18625 D VoiceManager: Partial results: 'how'
08-29 09:42:55.142 18625 18625 D VoiceManager: Partial results: 'how are'
08-29 09:42:55.216 18625 18625 D VoiceManager: Partial results: 'how are you'
08-29 09:42:55.527 18625 18625 D VoiceManager: End of speech
08-29 09:42:55.533 18625 18625 D VoiceManager: Speech recognition results received: 1 matches
08-29 09:42:55.533 18625 18625 D VoiceManager: Match 0: 'how are you'
08-29 09:42:55.533 18625 18625 I VoiceManager: Speech recognized: 'how are you'
08-29 09:42:55.533 18625 18625 I VoiceManager: Speech recognized: "how are you"
08-29 09:42:55.533 18625 18625 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 09:42:55.534 18625 18625 D AudioManager: Releasing audio focus for ID: speech_recognition_1756478571736
08-29 09:42:55.534 18625 18625 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756478571736)
08-29 09:42:55.534 18625 18625 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478571736)
08-29 09:42:55.536 18625 18625 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 09:42:55.536 18625 18625 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 09:42:55.537 18625 18625 I VoiceManager: Speech recognition completed successfully, processing command
08-29 09:42:55.537 18625 18625 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 09:42:55.537 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 09:42:55.538 18625 18625 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 09:42:55.538 18625 18625 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: false
08-29 09:42:55.541 18625 18625 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Process natively in background
08-29 09:42:55.541 18625 18625 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 09:42:55.541 18625 18625 I VoiceManager: 📱 NATIVE_FLOW: ========== PROCESSING TEXT IN BACKGROUND ==========
08-29 09:42:55.542 18625 18625 I VoiceManager: 📱 NATIVE_FLOW: Text: 'how are you'
08-29 09:42:55.542 18625 18625 I VoiceManager: 📱 NATIVE_FLOW: Using native API client for background processing
08-29 09:42:55.543 18625 18643 D VoiceManager: 📱 NATIVE_FLOW: Current history length: 0
08-29 09:42:55.543 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Attempting to retrieve Supabase access token
08-29 09:42:55.543 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total SharedPreferences keys: 0
08-29 09:42:55.543 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Checking AsyncStorage SQLite databases...
08-29 09:42:55.544 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: RKStorage exists: true
08-29 09:42:55.544 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: CatalystStorage exists: false
08-29 09:42:55.547 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total AsyncStorage database keys: 2
08-29 09:42:55.548 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Auth-related keys in database (1):
08-29 09:42:55.549 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Querying AsyncStorage database for key: sb-ydbabipbxxleeiiysojv-auth-token
08-29 09:42:55.549 18625 18625 E VoiceManager: Speech recognition error: Client error
08-29 09:42:55.549 18625 18625 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 09:42:55.550 18625 18625 D AudioManager: Releasing audio focus for ID: speech_recognition_1756478571736
08-29 09:42:55.550 18625 18625 W AudioManager: No active request found with ID speech_recognition_1756478571736
08-29 09:42:55.550 18625 18625 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756478571736)
08-29 09:42:55.551 18625 18643 D SupabaseTokenManager: 🔐 AUTH: ✅ Found value in AsyncStorage database
08-29 09:42:55.551 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG:   sb-ydbabipbxxleeiiysojv-auth-token = {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6InFQa0xWaTNhZWM3M3dpNysiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJo...
08-29 09:42:55.551 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Searching for Supabase v2 session in AsyncStorage database...
08-29 09:42:55.552 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Found Supabase v2 session key in database: sb-ydbabipbxxleeiiysojv-auth-token
08-29 09:42:55.552 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Parsing session JSON...
08-29 09:42:55.553 18625 18643 D SupabaseTokenManager: 🔐 AUTH: ✅ Found access token in v2 session
08-29 09:42:55.553 18625 18643 I SupabaseTokenManager: 🔐 AUTH: ✅ Successfully retrieved valid Supabase v2 access token
08-29 09:42:55.553 18625 18643 I SupabaseTokenManager: 🔐 AUTH: ✅ Found valid Supabase v2 session
08-29 09:42:55.553 18625 18643 D VoiceManager: 📱 NATIVE_FLOW: Making API call...
08-29 09:42:55.554 18625 18643 I NativeApiClient: 📡 NATIVE_API: ========== SENDING CHAT MESSAGE ==========
08-29 09:42:55.555 18625 18643 I NativeApiClient: 📡 NATIVE_API: Message: 'how are you'
08-29 09:42:55.555 18625 18643 I NativeApiClient: 📡 NATIVE_API: History length: 0
08-29 09:42:55.555 18625 18643 I NativeApiClient: 📡 NATIVE_API: Request ID: 1756478575553-bbdb18de-
08-29 09:42:55.555 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Attempting to retrieve user ID
08-29 09:42:55.555 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Getting user ID from Supabase v2 session...
08-29 09:42:55.557 18625 18643 D SupabaseTokenManager: 🔐 AUTH: ✅ Found user ID from v2 session
08-29 09:42:55.557 18625 18643 I SupabaseTokenManager: 🔐 AUTH: ✅ Found user ID from v2 session: f8ac1669...
08-29 09:42:55.562 18625 18643 D NativeApiClient: 📡 NATIVE_API: User ID: f8ac1669...
08-29 09:42:55.562 18625 18643 D NativeApiClient: 📡 NATIVE_API: Deepgram enabled: false
08-29 09:42:55.562 18625 18643 D NativeApiClient: 📡 NATIVE_API: Selected voice: aura-2-pandora-en
08-29 09:42:55.572 18625 18643 D NativeApiClient: 📡 NATIVE_API: Creating multipart request body
08-29 09:42:55.572 18625 18643 D NativeApiClient: 📡 NATIVE_API: JSON payload: {"base_language_model":"claude-sonnet-4-20250514","deepgram_enabled":false,"general_instructions":"","history":[],"message":"how are you","request_id":"1756478575553-bbdb18de-","selected_deepgram_voice":"aura-2-pandora-en","timestamp":1756478575564,"timezone":"UTC","user_id":"f8ac1669-7e9e-4d9e-bb9d...
08-29 09:42:55.573 18625 18643 D NativeApiClient: 📡 NATIVE_API: Making HTTP request to https://mobile-jarvis-backend.onrender.com/api/chat
08-29 09:42:55.573 18625 18643 D NativeApiClient: 📡 HTTP: --> POST https://mobile-jarvis-backend.onrender.com/api/chat
08-29 09:42:55.573 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Attempting to retrieve Supabase access token
08-29 09:42:55.573 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total SharedPreferences keys: 0
08-29 09:42:55.573 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Checking AsyncStorage SQLite databases...
08-29 09:42:55.573 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: RKStorage exists: true
08-29 09:42:55.573 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: CatalystStorage exists: false
08-29 09:42:55.574 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Total AsyncStorage database keys: 2
08-29 09:42:55.574 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG: Auth-related keys in database (1):
08-29 09:42:55.574 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Querying AsyncStorage database for key: sb-ydbabipbxxleeiiysojv-auth-token
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH: ✅ Found value in AsyncStorage database
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH_DEBUG:   sb-ydbabipbxxleeiiysojv-auth-token = {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6InFQa0xWaTNhZWM3M3dpNysiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJo...
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Searching for Supabase v2 session in AsyncStorage database...
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Found Supabase v2 session key in database: sb-ydbabipbxxleeiiysojv-auth-token
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH: Parsing session JSON...
08-29 09:42:55.575 18625 18643 D SupabaseTokenManager: 🔐 AUTH: ✅ Found access token in v2 session
08-29 09:42:55.575 18625 18643 I SupabaseTokenManager: 🔐 AUTH: ✅ Successfully retrieved valid Supabase v2 access token
08-29 09:42:55.575 18625 18643 I SupabaseTokenManager: 🔐 AUTH: ✅ Found valid Supabase v2 session
08-29 09:42:55.576 18625 18643 D NativeApiClient: 📡 AUTH: Added authorization header
08-29 09:43:42.010 18625 18643 D NativeApiClient: 📡 HTTP: <-- 200 https://mobile-jarvis-backend.onrender.com/api/chat (46437ms)
08-29 09:43:42.010 18625 18643 D NativeApiClient: 📡 NATIVE_API: Response code: 200
08-29 09:43:42.016 18625 18643 I NativeApiClient: 📡 NATIVE_API: ✅ Chat API call successful
08-29 09:43:42.016 18625 18643 D NativeApiClient: 📡 NATIVE_API: Response length: 403
08-29 09:43:42.017 18625 18643 I VoiceManager: 📱 NATIVE_FLOW: ✅ API call successful
08-29 09:43:42.017 18625 18643 D VoiceManager: 📱 NATIVE_FLOW: Response length: 403
08-29 09:43:42.026 18625 18625 I VoiceManager: 📱 NATIVE_FLOW: Processing complete, responding to user
08-29 09:43:42.026 18625 18625 D VoiceManager: 📱 NATIVE_FLOW: Starting TTS with voice settings
08-29 09:43:42.026 18625 18625 D VoiceManager: 📱 NATIVE_FLOW: Deepgram enabled: false
08-29 09:43:42.026 18625 18625 D VoiceManager: 📱 NATIVE_FLOW: Selected voice: aura-2-pandora-en
08-29 09:43:42.031 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'We found detailed instructions for tying a tie! The search results cover two popular methods: the **Four-in-Hand Knot** (simple and versatile for everyday wear) and the **Windsor Knot** (formal and symmetrical for special occasions). Both methods include step-by-step instructions, and there are also links to visual guides on sites like wikiHow and YouTube videos if you prefer watching demonstrations.', queueMode: 0
08-29 09:43:42.031 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
08-29 09:43:42.034 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
08-29 09:43:42.035 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'We found detailed instructions for tying a tie! The search results cover two popular methods: the **Four-in-Hand Knot** (simple and versatile for everyday wear) and the **Windsor Knot** (formal and symmetrical for special occasions). Both methods include step-by-step instructions, and there are also links to visual guides on sites like wikiHow and YouTube videos if you prefer watching demonstrations.'
08-29 09:43:42.038 18625 18625 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1756478622037 with text: 'We found detailed instructions for tying a tie! The search results cover two popular methods: the **Four-in-Hand Knot** (simple and versatile for everyday wear) and the **Windsor Knot** (formal and symmetrical for special occasions). Both methods include step-by-step instructions, and there are also links to visual guides on sites like wikiHow and YouTube videos if you prefer watching demonstrations.'
08-29 09:43:42.039 18625 18625 D TextToSpeechManager: 🎵 TTS: Requesting audio focus (ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d)
08-29 09:43:42.041 18625 18625 D AudioManager: Requesting audio focus: TTS (ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d)
08-29 09:43:42.049 18625 18625 I AudioManager: Audio focus granted: TTS (ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d)
08-29 09:43:42.049 18625 18625 D TextToSpeechManager: 🎵 TTS audio focus gained
08-29 09:43:42.050 18625 18625 D TextToSpeechManager: 🎵 TTS audio focus request result: true
08-29 09:43:42.050 18625 18625 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 11ms - granted: true
08-29 09:43:42.051 18625 18625 D TextToSpeechManager: Generated utterance ID: 7ccf0594-daa4-4570-a86b-0a7ee58c24af
08-29 09:43:42.052 18625 18625 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 15ms
08-29 09:43:42.057 18625 18625 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 20ms: 0
08-29 09:43:42.057 18625 18625 I TextToSpeechManager: TTS speak() call successful
08-29 09:43:42.400 18625 19142 D TextToSpeechManager: 🎵 TTS TIMING: Speech ACTUALLY started for utterance: 7ccf0594-daa4-4570-a86b-0a7ee58c24af at 363ms
08-29 09:44:03.759 18625 19142 D TextToSpeechManager: 🎵 TTS TIMING: Speech completed for utterance: 7ccf0594-daa4-4570-a86b-0a7ee58c24af at 21721ms
08-29 09:44:03.759 18625 19142 D AudioManager: Releasing audio focus for ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d
08-29 09:44:03.760 18625 19142 I AudioManager: Releasing current focus holder TTS (ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d)
08-29 09:44:03.760 18625 19142 I AudioManager: Abandoning audio focus: TTS (ID: tts_52139416-4923-49d1-b94d-d263b10a6f8d)
08-29 09:44:03.764 18625 19142 D TextToSpeechManager: 🎵 TTS audio focus released
08-29 09:44:03.764 18625 19142 D TextToSpeechManager: 🎵 TTS QUEUE: Request completed, processing next
08-29 09:44:03.764 18625 19142 I VoiceManager: 📱 NATIVE_FLOW: TTS complete, setting state to LISTENING for continued conversation
08-29 09:44:04.067 18625 18625 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
08-29 09:44:04.068 18625 18625 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 09:44:04.069 18625 18625 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 09:44:04.072 18625 18625 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 09:44:04.173 18625 18625 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 09:44:04.173 18625 18625 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 09:44:04.178 18625 18625 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 09:44:04.179 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 09:44:04.179 18625 18625 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478644179)
08-29 09:44:04.186 18625 18625 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756478644179)
08-29 09:44:04.186 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 09:44:04.186 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 09:44:04.187 18625 18625 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 09:44:04.187 18625 18625 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 09:44:04.188 18625 18625 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 09:44:04.188 18625 18625 I VoiceManager: SpeechRecognizer started listening.
08-29 09:44:04.220 18625 18625 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@9919338com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@2e1c017
08-29 09:44:04.220 18625 18625 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 09:44:04.220 18625 18625 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 09:44:04.221 18625 18625 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 09:44:04.283 18625 18625 D VoiceManager: Ready for speech
08-29 09:44:09.288 18625 18625 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@9919338com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@2e1c017
08-29 09:44:09.288 18625 18625 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 09:44:09.288 18625 18625 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 09:44:09.358 18625 18625 E VoiceManager: Speech recognition error: No recognition match
08-29 09:44:09.360 18625 18625 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
08-29 09:44:09.360 18625 18625 D AudioManager: Releasing audio focus for ID: speech_recognition_1756478644179
08-29 09:44:09.361 18625 18625 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756478644179)
08-29 09:44:09.364 18625 18625 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756478644179)
08-29 09:44:09.366 18625 18625 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756478644179)
08-29 09:44:09.367 18625 18625 D VoiceManager: No speech detected
08-29 09:44:09.367 18625 18625 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
08-29 09:44:09.367 18625 18625 I VoiceManager: Message: I didn't hear anything. Please try saying the wake word again when you're ready.
08-29 09:44:11.871 18625 18625 D VoiceManager: Voice state transition: RESPONDING -> IDLE
08-29 09:44:11.872 18625 18625 D VoiceManager: Conversation completed, re-enabling wake word detection
08-29 09:44:11.876 18625 18625 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
08-29 09:44:11.877 18625 18625 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 09:44:11.877 18625 18625 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.hightowerai.MobileJarvisNative
08-29 09:44:12.378 18625 18625 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
08-29 09:44:12.379 18625 18625 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 09:44:12.379 18625 18625 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.hightowerai.MobileJarvisNative
08-29 09:44:12.380 18625 18625 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
08-29 09:44:12.381 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 09:44:12.381 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756478652381
08-29 09:44:12.382 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 09:44:12.382 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 09:44:12.412 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 09:44:12.513 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 09:44:12.513 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 09:44:12.513 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 09:44:12.513 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 09:44:12.513 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection
08-29 09:44:12.513 18625 18625 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 09:44:12.513 18625 18625 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 09:44:12.513 18625 18625 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 09:44:12.513 18625 18625 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 09:44:12.514 18625 18625 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 09:44:12.514 18625 18625 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 09:44:12.514 18625 18625 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-29 09:44:12.571 18625 18625 D WakeWordService: Audio recording started successfully
08-29 09:44:12.571 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started
08-29 09:44:12.571 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 09:44:12.572 18625 19293 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 09:44:12.572 18625 19293 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 09:44:12.572 18625 19293 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 09:44:12.572 18625 19293 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 09:44:12.572 18625 19293 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 09:44:12.576 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 09:44:12.576 18625 18625 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 09:44:12.576 18625 18625 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
08-29 09:44:12.576 18625 18625 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
