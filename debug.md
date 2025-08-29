s
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Parameter received: 0.05 (type: float)
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Sensitivity percentage: 5%
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VALIDATING SENSITIVITY ==========
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Valid range: 0.0 - 1.0
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Received value: 0.05
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity value 0.05 is valid
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SAVING TO SHARED PREFERENCES ==========
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity: 0.05 (5%)
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: New sensitivity: 0.05 (5%)
08-29 12:19:31.731 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ℹ️ Sensitivity unchanged, but saving anyway
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: SharedPreferences save took 1ms
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Save result: true
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VERIFICATION ==========
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Verified saved sensitivity: 0.05 (5%)
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SUCCESS ==========
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity changed from 0.05 (5%) to 0.05 (5%)
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity preference saved and verified successfully
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ⚠️ Note: Service restart required for change to take effect
08-29 12:19:31.732 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ================================================
08-29 12:19:42.720 20921 23161 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 240 chunks in 30s (isPaused: false)
08-29 12:19:53.800 20921 23161 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.5549 (threshold: 0.05)
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: Time: 12:19:53.800
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.5548779
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756487993800
08-29 12:19:53.801 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 12:19:53.801 20921 23161 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 12:19:53.801 20921 23161 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: true
08-29 12:19:53.801 20921 23161 I WakeWordService: 📱 BACKGROUND_CHECK: App already in foreground - proceeding normally
08-29 12:19:53.802 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 12:19:53.802 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756487993802
08-29 12:19:53.802 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:19:53.802 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 12:19:53.802 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.5548779
08-29 12:19:53.805 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 12:19:53.805 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756487993805
08-29 12:19:53.805 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:19:53.805 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:19:53.805 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 12:19:53.806 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 12:19:53.806 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 12:19:53.806 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 12:19:53.800
08-29 12:19:53.807 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 12:19:53.807 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.5549
08-29 12:19:53.807 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 12:19:53.807 20921 20921 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 12:19:53.807 20921 20921 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.5548778772354126,"timestamp":1756487993800}
08-29 12:19:53.807 20921 20921 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 12:19:53.808 20921 20921 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 12:19:53.808 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 12:19:53.808 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 12:19:53.808 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 12:19:53.808 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 12:19:53.808 20921 23161 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 12:19:53.808 20921 23161 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 12:19:53.808 20921 23161 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: true
08-29 12:19:53.808 20921 23161 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@eda9de3
08-29 12:19:53.808 20921 23161 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756487993808
08-29 12:19:53.808 20921 23161 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 12:19:53.811 20921 23161 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 12:19:53.811 20921 23161 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 12:19:53.811 20921 23161 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:19:53.813 20921 23161 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 12:19:53.813 20921 23161 I VoiceManager: Initializing OpenAI Whisper client
08-29 12:19:53.813 20921 23161 D VoiceManager: Whisper client initialized successfully
08-29 12:19:53.813 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 12:19:53.813 20921 23161 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 12:19:53.814 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 12:19:53.814 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756487993814
08-29 12:19:53.814 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 12:19:53.814 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 12:19:53.814 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 12:19:53.815 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:19:53.815 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:19:53.815 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:19:53.820 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:19:53.820 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:19:53.820 20921 20921 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 5ms
08-29 12:19:53.820 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:19:53.820 20921 20921 D VoiceManager: Deepgram client initialized for future use
08-29 12:19:53.821 20921 20921 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 12:19:53.821 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:19:53.823 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:19:53.823 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:19:53.824 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756487993824)
08-29 12:19:53.824 20921 20921 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 12:19:53.824 20921 20921 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 12:19:53.824 20921 20921 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 12:19:53.824 20921 20921 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:19:53.836 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756487993824)
08-29 12:19:53.837 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:19:53.837 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:19:53.837 20921 20921 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 12:19:53.838 20921 20921 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 12:19:53.838 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:19:53.840 20921 20921 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 12:19:53.841 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:19:53.841 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:19:53.842 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:19:53.864 20921 20921 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 12:19:53.889 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 12:19:53.890 20921 23161 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 12:19:53.890 20921 23161 E WakeWordService: java.lang.InterruptedException
08-29 12:19:53.890 20921 23161 E WakeWordService:        at java.lang.Object.wait(Native Method)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at java.lang.Object.wait(Object.java:405)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at java.lang.Thread.join(Thread.java:1643)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:732)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda7.run(Unknown Source:2)
08-29 12:19:53.890 20921 23161 E WakeWordService:        at java.lang.Thread.run(Thread.java:1119)
08-29 12:19:53.890 20921 23161 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756487993824)
08-29 12:19:53.894 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 12:19:53.894 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 12:19:53.895 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@b169854
08-29 12:19:53.895 20921 23161 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 12:19:53.895 20921 23161 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 12:19:53.895 20921 23161 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 12:19:53.899 20921 20921 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 2-minute auto-resume timer (coroutine: StandaloneCoroutine{Active}@b169854)
08-29 12:19:53.941 20921 20921 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 12:19:53.942 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:19:53.945 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:19:53.945 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:19:53.945 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756487993945)
08-29 12:19:53.945 20921 20921 D AudioManager: Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
08-29 12:19:53.945 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756487993824)
08-29 12:19:54.049 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756487993945)
08-29 12:19:54.049 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:19:54.049 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:19:54.049 20921 20921 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 12:19:54.049 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:19:54.049 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:19:54.049 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:19:54.050 10156 10156 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@1dacdb2epk@9b165cc
08-29 12:19:54.053 20921 20921 D VoiceManager: Ready for speech
08-29 12:19:54.055 20921 20921 E VoiceManager: Speech recognition error: Client error
08-29 12:19:55.989 20921 20921 D VoiceManager: Beginning of speech
08-29 12:19:56.327 20921 20921 D VoiceManager: Partial results: ''
08-29 12:19:56.601 20921 20921 D VoiceManager: Partial results: ''
08-29 12:19:56.660 20921 20921 D VoiceManager: Partial results: ''
08-29 12:19:56.756 20921 20921 D VoiceManager: Partial results: ''
08-29 12:19:56.822 20921 20921 D VoiceManager: Partial results: ''
08-29 12:19:56.900 20921 20921 D VoiceManager: Partial results: 'what'
08-29 12:19:57.204 20921 20921 D VoiceManager: Partial results: 'what have'
08-29 12:19:57.254 20921 20921 D VoiceManager: Partial results: 'what have we'
08-29 12:19:57.329 20921 20921 D VoiceManager: Partial results: 'what have we talked'
08-29 12:19:57.356 20921 20921 D VoiceManager: Partial results: 'what have we talked about'
08-29 12:19:57.863 20921 20921 D VoiceManager: Partial results: 'what have we talked about so'
08-29 12:19:57.920 20921 20921 D VoiceManager: Partial results: 'what have we talked about so far'
08-29 12:19:58.163 20921 20921 D VoiceManager: End of speech
08-29 12:19:58.182 20921 20921 D VoiceManager: Speech recognition results received: 1 matches
08-29 12:19:58.183 20921 20921 D VoiceManager: Match 0: 'what have we talked about so far'
08-29 12:19:58.183 20921 20921 I VoiceManager: Speech recognized: 'what have we talked about so far'
08-29 12:19:58.184 20921 20921 I VoiceManager: Speech recognized: "what have we talked about so far"
08-29 12:19:58.184 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 12:19:58.184 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756487993945
08-29 12:19:58.184 20921 20921 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756487993945)
08-29 12:19:58.184 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756487993945)
08-29 12:19:58.187 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 12:19:58.187 20921 20921 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 12:19:58.188 20921 20921 I VoiceManager: Speech recognition completed successfully, processing command
08-29 12:19:58.188 20921 20921 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 12:19:58.188 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:19:58.190 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 12:19:58.190 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: true
08-29 12:19:58.190 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Send to React Native
08-29 12:19:58.190 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 12:19:58.190 20921 20921 D VoiceManager: 📱 RN_FLOW: Processing text via React Native
08-29 12:19:58.190 20921 20921 D VoiceManager: Sending text to voice processor for processing
08-29 12:19:58.196 20921 20921 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: what have we talked about so far
08-29 12:19:58.202 20921 20921 E VoiceManager: Speech recognition error: Client error
08-29 12:19:58.202 20921 20921 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 12:19:58.202 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756487993945
08-29 12:19:58.202 20921 20921 W AudioManager: No active request found with ID speech_recognition_1756487993945
08-29 12:19:58.202 20921 20921 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756487993945)
08-29 12:20:24.812 20921 20921 D VoiceManager: Received response from voice processor, length: 233 chars
08-29 12:20:24.813 20921 20921 I VoiceManager: Processing complete, responding to user
08-29 12:20:24.813 20921 20921 D VoiceManager: 🎵 TTS_START: Starting TTS with fixed audio focus handling
08-29 12:20:24.815 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'This appears to be our first conversation! We haven't discussed anything yet, but I'm here and ready to help with whatever you need. If you'd like me to start keeping track of our conversations for future reference, just let me know.', queueMode: 0
08-29 12:20:24.815 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
08-29 12:20:24.816 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
08-29 12:20:24.816 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'This appears to be our first conversation! We haven't discussed anything yet, but I'm here and ready to help with whatever you need. If you'd like me to start keeping track of our conversations for future reference, just let me know.'
08-29 12:20:24.816 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1756488024816 with text: 'This appears to be our first conversation! We haven't discussed anything yet, but I'm here and ready to help with whatever you need. If you'd like me to start keeping track of our conversations for future reference, just let me know.'
08-29 12:20:24.817 20921 20921 D TextToSpeechManager: 🎵 TTS: Requesting audio focus (ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084)
08-29 12:20:24.817 20921 20921 D AudioManager: Requesting audio focus: TTS (ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084)
08-29 12:20:24.821 20921 20921 I AudioManager: Audio focus granted: TTS (ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084)
08-29 12:20:24.821 20921 20921 D TextToSpeechManager: 🎵 TTS audio focus gained
08-29 12:20:24.822 20921 20921 D TextToSpeechManager: 🎵 TTS audio focus request result: true
08-29 12:20:24.822 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 6ms - granted: true
08-29 12:20:24.823 20921 20921 D TextToSpeechManager: Generated utterance ID: 4bba3adc-e29d-4070-a29e-f3a90b7f8c2d
08-29 12:20:24.823 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 7ms
08-29 12:20:24.825 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 9ms: 0
08-29 12:20:24.825 20921 20921 I TextToSpeechManager: TTS speak() call successful
08-29 12:20:24.942 20921 21112 D TextToSpeechManager: 🎵 TTS TIMING: Speech ACTUALLY started for utterance: 4bba3adc-e29d-4070-a29e-f3a90b7f8c2d at 126ms
08-29 12:20:37.893 20921 21112 D TextToSpeechManager: 🎵 TTS TIMING: Speech completed for utterance: 4bba3adc-e29d-4070-a29e-f3a90b7f8c2d at 13077ms
08-29 12:20:37.893 20921 21112 D AudioManager: Releasing audio focus for ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084
08-29 12:20:37.893 20921 21112 I AudioManager: Releasing current focus holder TTS (ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084)
08-29 12:20:37.893 20921 21112 I AudioManager: Abandoning audio focus: TTS (ID: tts_ba2587dd-7f8c-46cf-8959-bce2bd680084)
08-29 12:20:37.900 20921 21112 D TextToSpeechManager: 🎵 TTS audio focus released
08-29 12:20:37.901 20921 21112 D TextToSpeechManager: 🎵 TTS QUEUE: Request completed, processing next
08-29 12:20:37.901 20921 21112 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
08-29 12:20:38.203 20921 20921 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
08-29 12:20:38.204 20921 20921 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 12:20:38.204 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:20:38.206 20921 20921 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 12:20:38.311 20921 20921 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 12:20:38.312 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:20:38.318 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:20:38.318 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:20:38.319 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488038318)
08-29 12:20:38.322 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756488038318)
08-29 12:20:38.322 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:20:38.322 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:20:38.322 20921 20921 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 12:20:38.322 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:20:38.322 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:20:38.322 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:20:38.344 20921 20921 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@a176834com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@ea713c2
08-29 12:20:38.344 20921 20921 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 12:20:38.345 20921 20921 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 12:20:38.345 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 12:20:38.405 20921 20921 D VoiceManager: Ready for speech
08-29 12:20:43.409 20921 20921 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@a176834com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@ea713c2
08-29 12:20:43.409 20921 20921 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 12:20:43.409 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:20:43.484 20921 20921 E VoiceManager: Speech recognition error: No recognition match
08-29 12:20:43.484 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
08-29 12:20:43.484 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756488038318
08-29 12:20:43.484 20921 20921 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756488038318)
08-29 12:20:43.484 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488038318)
08-29 12:20:43.486 20921 20921 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756488038318)
08-29 12:20:43.486 20921 20921 D VoiceManager: No speech detected
08-29 12:20:43.486 20921 20921 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
08-29 12:20:43.486 20921 20921 I VoiceManager: Message: I didn't hear anything. Please try saying the wake word again when you're ready.
08-29 12:20:45.991 20921 20921 D VoiceManager: Voice state transition: RESPONDING -> IDLE
08-29 12:20:45.992 20921 20921 D VoiceManager: Conversation completed, re-enabling wake word detection
08-29 12:20:45.996 20921 20921 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
08-29 12:20:45.996 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 12:20:45.996 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.hightowerai.MobileJarvisNative
08-29 12:20:46.005 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
08-29 12:20:46.006 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 12:20:46.006 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.hightowerai.MobileJarvisNative
08-29 12:20:46.006 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
08-29 12:20:46.007 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 12:20:46.007 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756488046007
08-29 12:20:46.008 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 12:20:46.008 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 12:20:46.025 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 12:20:46.117 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 12:20:46.117 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 12:20:46.117 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 12:20:46.117 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 12:20:46.117 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection
08-29 12:20:46.117 20921 20921 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 12:20:46.117 20921 20921 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 12:20:46.117 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 12:20:46.117 20921 20921 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:20:46.119 20921 20921 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:20:46.119 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 12:20:46.119 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-29 12:20:46.180 20921 20921 D WakeWordService: Audio recording started successfully
08-29 12:20:46.180 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started
08-29 12:20:46.180 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 12:20:46.180 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 12:20:46.180 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 12:20:46.180 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 12:20:46.180 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 12:20:46.180 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 12:20:46.190 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 12:20:46.190 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 12:20:46.190 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
08-29 12:20:46.497 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
08-29 12:21:05.055 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:21:05.056 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:21:05.056 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:21:05.059 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:21:05.059 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:21:05.059 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 4ms
08-29 12:21:05.059 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:21:05.059 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========
08-29 12:21:05.059 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Client initialized
08-29 12:21:05.060 20921 21077 E DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ❌ Deepgram API key not found or empty
08-29 12:21:05.062 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available
08-29 12:21:05.062 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready
08-29 12:21:05.062 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid (aura-2-pandora-en -> aura-2-pandora-en)
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Overall valid: false
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key present: false
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key valid: false
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Network available: true
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Audio system ready: true
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Voice config valid: true
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Issues: 1
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION:   1. Deepgram API key not found or empty
08-29 12:21:05.062 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Validation time: 3ms
08-29 12:21:05.062 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ================================
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756488065160
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 12:21:05.160 20921 21077 D WakeWordModule: Set wake_word_enabled preference to true
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 12:21:05.160 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 12:21:05.804 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:21:05.805 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:21:05.805 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:21:05.807 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:21:05.808 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:21:05.808 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 4ms
08-29 12:21:05.808 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:21:05.808 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========
08-29 12:21:05.808 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Client initialized
08-29 12:21:05.808 20921 21077 E DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ❌ Deepgram API key not found or empty
08-29 12:21:05.809 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available
08-29 12:21:05.809 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready
08-29 12:21:05.809 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid (aura-2-pandora-en -> aura-2-pandora-en)
08-29 12:21:05.809 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========
08-29 12:21:05.809 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Overall valid: false
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key present: false
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key valid: false
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Network available: true
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Audio system ready: true
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Voice config valid: true
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Issues: 1
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION:   1. Deepgram API key not found or empty
08-29 12:21:05.810 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Validation time: 1ms
08-29 12:21:05.810 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ================================
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756488065836
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 12:21:05.836 20921 21077 D WakeWordModule: Set wake_word_enabled preference to true
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 12:21:05.836 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 12:21:06.168 20921 21077 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756488066855
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 12:21:06.855 20921 21077 D WakeWordModule: Set wake_word_enabled preference to true
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 12:21:06.855 20921 21077 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SET SELECTED WAKE WORD ==========
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: setSelectedWakeWord called from React Native
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Timestamp: 1756488067866
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Thread: mqt_native_modules
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Parameter received: 'Juniper' (type: String)
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VALIDATING WAKE WORD ==========
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Available wake words: [Hey Jarvis, Hey Juni, Hey Juniper, Juniper, Jarvis, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Jasmine, Hey, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Checking if 'Juniper' is valid...
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word 'Juniper' is valid
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SAVING TO SHARED PREFERENCES ==========
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Previous wake word: 'Juniper'
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: New wake word: 'Juniper'
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ℹ️ Wake word unchanged, but saving anyway
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: SharedPreferences save took 0ms
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Save result: true
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VERIFICATION ==========
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Verified saved wake word: 'Juniper'
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SUCCESS ==========
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word changed from 'Juniper' to 'Juniper'
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word preference saved and verified successfully
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ⚠️ Note: Service restart required for change to take effect
08-29 12:21:07.866 20921 21077 I WakeWordModule: 🎯 WAKEWORD_SELECTION: =============================================
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SET WAKE WORD SENSITIVITY ==========
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: setWakeWordSensitivity called from React Native
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Timestamp: 1756488067868
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Thread: mqt_native_modules
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Parameter received: 0.05 (type: float)
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Sensitivity percentage: 5%
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VALIDATING SENSITIVITY ==========
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Valid range: 0.0 - 1.0
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Received value: 0.05
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity value 0.05 is valid
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SAVING TO SHARED PREFERENCES ==========
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity: 0.05 (5%)
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: New sensitivity: 0.05 (5%)
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ℹ️ Sensitivity unchanged, but saving anyway
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: SharedPreferences save took 0ms
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Save result: true
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VERIFICATION ==========
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Verified saved sensitivity: 0.05 (5%)
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SUCCESS ==========
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity changed from 0.05 (5%) to 0.05 (5%)
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity preference saved and verified successfully
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ⚠️ Note: Service restart required for change to take effect
08-29 12:21:07.868 20921 21077 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ================================================
08-29 12:21:16.235 20921 23956 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 298 chunks in 30s (isPaused: false)
08-29 12:21:36.913 20921 21077 D DeepgramClient: Deepgram client resources released
08-29 12:21:36.916 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:21:36.917 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:21:36.917 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:21:36.920 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:21:36.921 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:21:36.921 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 5ms
08-29 12:21:36.921 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:21:36.921 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========
08-29 12:21:36.921 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Client initialized
08-29 12:21:36.921 20921 21077 E DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ❌ Deepgram API key not found or empty
08-29 12:21:36.926 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available
08-29 12:21:36.927 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready
08-29 12:21:36.927 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid (aura-2-pandora-en -> aura-2-pandora-en)
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Overall valid: false
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key present: false
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key valid: false
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Network available: true
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Audio system ready: true
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Voice config valid: true
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Issues: 1
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION:   1. Deepgram API key not found or empty
08-29 12:21:36.927 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Validation time: 6ms
08-29 12:21:36.927 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ================================
08-29 12:21:40.179 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:21:40.180 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:21:40.180 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:21:40.184 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:21:40.184 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:21:40.184 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 5ms
08-29 12:21:40.184 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:21:40.184 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========
08-29 12:21:40.184 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Client initialized
08-29 12:21:40.184 20921 21077 E DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ❌ Deepgram API key not found or empty
08-29 12:21:40.187 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available
08-29 12:21:40.187 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready
08-29 12:21:40.187 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid (aura-2-pandora-en -> aura-2-pandora-en)
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Overall valid: false
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key present: false
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key valid: false
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Network available: true
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Audio system ready: true
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Voice config valid: true
08-29 12:21:40.187 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Issues: 1
08-29 12:21:40.188 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION:   1. Deepgram API key not found or empty
08-29 12:21:40.188 20921 21077 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Validation time: 3ms
08-29 12:21:40.188 20921 21077 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ================================
08-29 12:21:46.237 20921 23956 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 305 chunks in 30s (isPaused: false)
08-29 12:21:46.335 20921 23956 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.5260 (threshold: 0.05)
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: Time: 12:21:46.335
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.5259602
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756488106335
08-29 12:21:46.335 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 12:21:46.336 20921 23956 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 12:21:46.336 20921 23956 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: true
08-29 12:21:46.336 20921 23956 I WakeWordService: 📱 BACKGROUND_CHECK: App already in foreground - proceeding normally
08-29 12:21:46.336 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 12:21:46.337 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756488106336
08-29 12:21:46.337 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:21:46.337 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 12:21:46.337 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.5259602
08-29 12:21:46.338 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 12:21:46.338 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 12:21:46.339 20921 23956 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 12:21:46.339 20921 23956 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 12:21:46.339 20921 23956 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: true
08-29 12:21:46.339 20921 23956 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@eda9de3
08-29 12:21:46.339 20921 23956 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756488106339
08-29 12:21:46.339 20921 23956 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 12:21:46.339 20921 23956 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 12:21:46.339 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 12:21:46.339 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756488106339
08-29 12:21:46.339 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:21:46.339 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 12:21:46.339 20921 20921 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 12:21:46.340 20921 23956 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 12:21:46.342 20921 23956 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 12:21:46.335
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.5260
08-29 12:21:46.342 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 12:21:46.343 20921 20921 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 12:21:46.344 20921 20921 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.5259602069854736,"timestamp":1756488106335}
08-29 12:21:46.344 20921 20921 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 12:21:46.344 20921 20921 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 12:21:46.344 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 12:21:46.344 20921 20921 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 12:21:46.345 20921 23956 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 12:21:46.345 20921 23956 I VoiceManager: Initializing OpenAI Whisper client
08-29 12:21:46.346 20921 23956 D VoiceManager: Whisper client initialized successfully
08-29 12:21:46.347 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 12:21:46.347 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-29 12:21:46.347 20921 23956 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 12:21:46.347 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 12:21:46.347 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756488106347
08-29 12:21:46.347 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 12:21:46.347 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 12:21:46.347 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 12:21:46.348 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-29 12:21:46.349 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-29 12:21:46.356 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-29 12:21:46.356 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-29 12:21:46.357 20921 20921 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 10ms
08-29 12:21:46.357 20921 20921 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-29 12:21:46.358 20921 20921 D VoiceManager: Deepgram client initialized for future use
08-29 12:21:46.360 20921 20921 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 12:21:46.360 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:21:46.361 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:21:46.361 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:21:46.361 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488106361)
08-29 12:21:46.361 20921 20921 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 12:21:46.361 20921 20921 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 12:21:46.362 20921 20921 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 12:21:46.362 20921 20921 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:21:46.366 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756488106361)
08-29 12:21:46.366 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:21:46.366 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:21:46.366 20921 20921 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 12:21:46.368 20921 20921 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 12:21:46.368 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:21:46.369 20921 20921 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 12:21:46.370 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:21:46.370 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:21:46.371 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:21:46.378 20921 20921 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 12:21:46.401 20921 20921 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@a176834com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@183c866
08-29 12:21:46.402 20921 20921 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 12:21:46.402 20921 20921 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 12:21:46.402 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 12:21:46.411 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 12:21:46.411 20921 23956 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 12:21:46.411 20921 23956 E WakeWordService: java.lang.InterruptedException
08-29 12:21:46.411 20921 23956 E WakeWordService:        at java.lang.Object.wait(Native Method)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at java.lang.Object.wait(Object.java:405)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at java.lang.Thread.join(Thread.java:1643)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:732)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda7.run(Unknown Source:2)
08-29 12:21:46.411 20921 23956 E WakeWordService:        at java.lang.Thread.run(Thread.java:1119)
08-29 12:21:46.411 20921 23956 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756488106361)
08-29 12:21:46.415 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 12:21:46.415 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 12:21:46.415 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@bb9f8d8
08-29 12:21:46.415 20921 23956 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 12:21:46.415 20921 23956 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 12:21:46.415 20921 23956 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 12:21:46.415 20921 20921 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 2-minute auto-resume timer (coroutine: StandaloneCoroutine{Active}@bb9f8d8)
08-29 12:21:46.469 20921 20921 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 12:21:46.470 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:21:46.471 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:21:46.471 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:21:46.471 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488106471)
08-29 12:21:46.471 20921 20921 D AudioManager: Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
08-29 12:21:46.471 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488106361)
08-29 12:21:46.584 10156 10156 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@1dacdb2epk@1aea9a6
08-29 12:21:46.584 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756488106471)
08-29 12:21:46.584 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:21:46.584 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:21:46.584 20921 20921 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 12:21:46.584 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:21:46.584 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:21:46.584 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:21:46.593 20921 20921 D VoiceManager: Ready for speech
08-29 12:21:46.595 20921 20921 E VoiceManager: Speech recognition error: Client error
08-29 12:21:48.467 20921 20921 D VoiceManager: Beginning of speech
08-29 12:21:48.774 20921 20921 D VoiceManager: Partial results: ''
08-29 12:21:49.007 20921 20921 D VoiceManager: Partial results: ''
08-29 12:21:49.077 20921 20921 D VoiceManager: Partial results: ''
08-29 12:21:49.188 20921 20921 D VoiceManager: Partial results: ''
08-29 12:21:49.319 20921 20921 D VoiceManager: Partial results: 'what'
08-29 12:21:49.609 20921 20921 D VoiceManager: Partial results: 'what are'
08-29 12:21:49.666 20921 20921 D VoiceManager: Partial results: 'what are'
08-29 12:21:49.742 20921 20921 D VoiceManager: Partial results: 'what are your'
08-29 12:21:49.869 20921 20921 D VoiceManager: Partial results: 'what are your other'
08-29 12:21:49.938 20921 20921 D VoiceManager: Partial results: 'what are your other'
08-29 12:21:50.462 20921 20921 D VoiceManager: Partial results: 'what are your other capabilities'
08-29 12:21:50.652 20921 20921 D VoiceManager: End of speech
08-29 12:21:50.655 20921 20921 D VoiceManager: Speech recognition results received: 1 matches
08-29 12:21:50.655 20921 20921 D VoiceManager: Match 0: 'what are your other capabilities'
08-29 12:21:50.655 20921 20921 I VoiceManager: Speech recognized: 'what are your other capabilities'
08-29 12:21:50.655 20921 20921 I VoiceManager: Speech recognized: "what are your other capabilities"
08-29 12:21:50.655 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 12:21:50.655 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756488106471
08-29 12:21:50.655 20921 20921 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756488106471)
08-29 12:21:50.655 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488106471)
08-29 12:21:50.658 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 12:21:50.658 20921 20921 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 12:21:50.658 20921 20921 I VoiceManager: Speech recognition completed successfully, processing command
08-29 12:21:50.658 20921 20921 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 12:21:50.658 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:21:50.658 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 12:21:50.659 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: true
08-29 12:21:50.659 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Send to React Native
08-29 12:21:50.659 20921 20921 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 12:21:50.659 20921 20921 D VoiceManager: 📱 RN_FLOW: Processing text via React Native
08-29 12:21:50.659 20921 20921 D VoiceManager: Sending text to voice processor for processing
08-29 12:21:50.659 20921 20921 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: what are your other capabilities
08-29 12:21:50.660 20921 20921 E VoiceManager: Speech recognition error: Client error
08-29 12:21:50.660 20921 20921 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 12:21:50.661 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756488106471
08-29 12:21:50.661 20921 20921 W AudioManager: No active request found with ID speech_recognition_1756488106471
08-29 12:21:50.661 20921 20921 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756488106471)
08-29 12:21:53.901 20921 20921 W WakeWordService: ⏸️ PAUSE_RESUME: ⚠️ Auto-resume triggered after 2 minutes
08-29 12:21:53.901 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 12:21:53.901 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756488113901
08-29 12:21:53.901 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 12:21:53.901 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 12:21:53.928 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 12:21:54.040 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 12:21:54.040 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 12:21:54.040 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 12:21:54.040 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 12:21:54.040 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection
08-29 12:21:54.041 20921 20921 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 12:21:54.041 20921 20921 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 12:21:54.041 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 12:21:54.041 20921 20921 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:21:54.042 20921 20921 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:21:54.042 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 12:21:54.042 20921 20921 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-29 12:21:54.080 20921 20921 D WakeWordService: Audio recording started successfully
08-29 12:21:54.080 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started
08-29 12:21:54.080 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 12:21:54.080 20921 24039 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 12:21:54.081 20921 24039 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 12:21:54.081 20921 24039 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 12:21:54.081 20921 24039 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 12:21:54.081 20921 24039 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 12:21:54.084 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 12:21:54.084 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 12:21:54.092 20921 20921 I WakeWordService: Pausing wake word detection during conversation
08-29 12:21:58.985 20921 20921 D VoiceManager: Received response from voice processor, length: 649 chars
08-29 12:21:58.985 20921 20921 I VoiceManager: Processing complete, responding to user
08-29 12:21:58.985 20921 20921 D VoiceManager: 🎵 TTS_START: Starting TTS with fixed audio focus handling
08-29 12:21:58.985 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'I can help you with a wide range of tasks through my specialized agents: (1) **Integrations** - send emails, manage calendar events, fetch data from services like Fitbit, Notion, Gmail, and handle integration setups, (2) **Web Search** - find current information and news with real-time search capabilities, (3) **Knowledge Management** - store and retrieve information from your personal repository for later use, and (4) **System Configuration** - adjust settings like wake words, voice preferences, and chat models. I'm designed to actually perform tasks end-to-end rather than just provide guidance, so feel free to ask me to do things directly!', queueMode: 0
08-29 12:21:58.985 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
08-29 12:21:58.986 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
08-29 12:21:58.986 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'I can help you with a wide range of tasks through my specialized agents: (1) **Integrations** - send emails, manage calendar events, fetch data from services like Fitbit, Notion, Gmail, and handle integration setups, (2) **Web Search** - find current information and news with real-time search capabilities, (3) **Knowledge Management** - store and retrieve information from your personal repository for later use, and (4) **System Configuration** - adjust settings like wake words, voice preferences, and chat models. I'm designed to actually perform tasks end-to-end rather than just provide guidance, so feel free to ask me to do things directly!'
08-29 12:21:58.986 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1756488118986 with text: 'I can help you with a wide range of tasks through my specialized agents: (1) **Integrations** - send emails, manage calendar events, fetch data from services like Fitbit, Notion, Gmail, and handle integration setups, (2) **Web Search** - find current information and news with real-time search capabilities, (3) **Knowledge Management** - store and retrieve information from your personal repository for later use, and (4) **System Configuration** - adjust settings like wake words, voice preferences, and chat models. I'm designed to actually perform tasks end-to-end rather than just provide guidance, so feel free to ask me to do things directly!'
08-29 12:21:58.986 20921 20921 D TextToSpeechManager: 🎵 TTS: Requesting audio focus (ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b)
08-29 12:21:58.986 20921 20921 D AudioManager: Requesting audio focus: TTS (ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b)
08-29 12:21:58.986 20921 20921 I AudioManager: Higher priority request (TTS) interrupting current (BACKGROUND_AUDIO)
08-29 12:21:58.986 20921 20921 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 12:21:58.986 20921 20921 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 12:21:58.986 20921 20921 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 12:21:58.991 20921 20921 I AudioManager: Audio focus granted: TTS (ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b)
08-29 12:21:58.991 20921 20921 D TextToSpeechManager: 🎵 TTS audio focus gained
08-29 12:21:58.991 20921 20921 D TextToSpeechManager: 🎵 TTS audio focus request result: true
08-29 12:21:58.991 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 5ms - granted: true
08-29 12:21:58.991 20921 20921 D TextToSpeechManager: Generated utterance ID: b9e8fea0-6260-4282-898a-c4766fbe594d
08-29 12:21:58.991 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 5ms
08-29 12:21:59.000 20921 20921 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 14ms: 0
08-29 12:21:59.000 20921 20921 I TextToSpeechManager: TTS speak() call successful
08-29 12:21:59.808 20921 23892 D TextToSpeechManager: 🎵 TTS TIMING: Speech ACTUALLY started for utterance: b9e8fea0-6260-4282-898a-c4766fbe594d at 822ms
08-29 12:22:24.107 20921 24039 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 374 chunks in 30s (isPaused: true)
08-29 12:22:34.530 20921 24049 D TextToSpeechManager: 🎵 TTS TIMING: Speech completed for utterance: b9e8fea0-6260-4282-898a-c4766fbe594d at 35544ms
08-29 12:22:34.530 20921 24049 D AudioManager: Releasing audio focus for ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b
08-29 12:22:34.530 20921 24049 I AudioManager: Releasing current focus holder TTS (ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b)
08-29 12:22:34.530 20921 24049 I AudioManager: Abandoning audio focus: TTS (ID: tts_040c5b4b-68ee-4746-9aed-b71b485f033b)
08-29 12:22:34.534 20921 24049 D TextToSpeechManager: 🎵 TTS audio focus released
08-29 12:22:34.534 20921 24049 D TextToSpeechManager: 🎵 TTS QUEUE: Request completed, processing next
08-29 12:22:34.534 20921 24049 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
08-29 12:22:34.834 20921 20921 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
08-29 12:22:34.835 20921 20921 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 12:22:34.835 20921 20921 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 12:22:34.838 20921 20921 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 12:22:34.940 20921 20921 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 12:22:34.941 20921 20921 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 12:22:34.943 20921 20921 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 12:22:34.943 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 12:22:34.943 20921 20921 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488154943)
08-29 12:22:34.948 20921 20921 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756488154943)
08-29 12:22:34.948 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:22:34.948 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 12:22:34.948 20921 20921 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 12:22:34.948 20921 20921 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 12:22:34.949 20921 20921 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 12:22:34.949 20921 20921 I VoiceManager: SpeechRecognizer started listening.
08-29 12:22:34.973 20921 20921 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@a176834com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@2437497
08-29 12:22:34.974 20921 20921 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 12:22:34.974 20921 20921 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 12:22:34.974 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 12:22:35.054 20921 20921 D VoiceManager: Ready for speech
08-29 12:22:40.068 20921 20921 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@a176834com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda13@2437497
08-29 12:22:40.069 20921 20921 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 12:22:40.070 20921 20921 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 12:22:40.157 20921 20921 E VoiceManager: Speech recognition error: No recognition match
08-29 12:22:40.157 20921 20921 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
08-29 12:22:40.157 20921 20921 D AudioManager: Releasing audio focus for ID: speech_recognition_1756488154943
08-29 12:22:40.157 20921 20921 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756488154943)
08-29 12:22:40.157 20921 20921 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756488154943)
08-29 12:22:40.163 20921 20921 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756488154943)
08-29 12:22:40.163 20921 20921 D VoiceManager: No speech detected
08-29 12:22:40.163 20921 20921 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
08-29 12:22:40.164 20921 20921 I VoiceManager: Message: I didn't hear anything. Please try saying the wake word again when you're ready.
08-29 12:22:42.668 20921 20921 D VoiceManager: Voice state transition: RESPONDING -> IDLE
08-29 12:22:42.669 20921 20921 D VoiceManager: Conversation completed, re-enabling wake word detection
08-29 12:22:42.672 20921 20921 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
08-29 12:22:42.672 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 12:22:42.672 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.hightowerai.MobileJarvisNative
08-29 12:22:42.680 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
08-29 12:22:42.681 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 12:22:42.681 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.hightowerai.MobileJarvisNative
08-29 12:22:42.681 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
08-29 12:22:42.682 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 12:22:42.682 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756488162682
08-29 12:22:42.682 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 12:22:42.682 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 12:22:42.699 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: AudioRecord and recording thread already active
08-29 12:22:42.814 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 12:22:42.817 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 12:22:42.817 20921 20921 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 12:22:42.817 20921 20921 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
08-29 12:22:43.173 20921 20921 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
08-29 12:22:54.184 20921 24039 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 355 chunks in 30s (isPaused: false)
08-29 12:23:24.188 20921 24039 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 310 chunks in 30s (isPaused: false)
