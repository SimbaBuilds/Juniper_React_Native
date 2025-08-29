08-29 16:55:24.607 19368 19566 D VoiceManager: Ignoring duplicate state change: IDLE
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504543704
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:55:43.704 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Creating service intent for class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Starting service...
08-29 16:55:43.704 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Using startForegroundService() for Android O+
08-29 16:55:43.709 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ Service start command sent successfully
08-29 16:55:43.710 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ Wake word detection started successfully
08-29 16:55:43.710 19368 19566 I WakeWordModule: 🚀 START_DETECTION: =====================================================
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504543713
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:55:43.713 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:55:43.713 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:55:43.715 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: ========== WAKE WORD SERVICE CREATED ==========
08-29 16:55:43.715 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Cleaning up any stale state from previous instance...
08-29 16:55:43.717 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: OpenWakeWordEngine singleton reset on service creation
08-29 16:55:43.717 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Fresh service scope initialized
08-29 16:55:43.717 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: AppStateManager initialized
08-29 16:55:43.719 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Starting foreground service...
08-29 16:55:43.720 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Registering broadcast receivers...
08-29 16:55:43.721 19368 19368 D WakeWordService: Registered pause/resume broadcast receiver
08-29 16:55:43.721 19368 19368 I WakeWordService: 🚀 SERVICE_LIFECYCLE: =====================================================
08-29 16:55:43.722 19368 19368 I WakeWordService: Service onStartCommand called (WakeWordService)
08-29 16:55:43.735 19368 19368 D WakeWordService: Foreground service started with notification
08-29 16:55:43.738 19368 19368 D WakeWordService: Foreground service started with notification
08-29 16:55:43.748 19368 19434 I WakeWordService: Entered initializeService()
08-29 16:55:43.748 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: ========== CHECKING OPENWAKEWORD ENGINE ==========
08-29 16:55:43.748 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: Getting OpenWakeWord engine instance...
08-29 16:55:43.748 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine instance obtained
08-29 16:55:43.748 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: Initializing engine...
08-29 16:55:43.972 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine initialization successful
08-29 16:55:43.972 19368 19434 I WakeWordService: 🤖 ENGINE_CHECK: ====================================================
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_INIT: ========== INITIALIZING WAKE WORD DETECTION ==========
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_INIT: Service running: true, isRunning: true
08-29 16:55:43.972 19368 19368 I WakeWordService: Initial voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@49546e0
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_SETUP: ======= Wake Word Configuration =======
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_SETUP: Selected wake word: 'Juniper'
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_SETUP: Threshold: 0.05
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_SETUP: Available wake words: [Hey Jarvis, Hey Juni, Hey Juniper, Juniper, Jarvis, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Jasmine, Hey, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
08-29 16:55:43.972 19368 19434 I WakeWordService: 🎯 WAKEWORD_SETUP: =======================================
08-29 16:55:43.985 19368 19434 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 16:55:43.985 19368 19434 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 16:55:43.985 19368 19434 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 16:55:43.985 19368 19434 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:55:43.992 19368 19434 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:55:43.992 19368 19434 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 16:55:43.992 19368 19434 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-29 16:55:44.032 19368 19434 D WakeWordService: Audio recording started successfully
08-29 16:55:44.032 19368 19434 I WakeWordService: 🎯 WAKEWORD_INIT: Wake word detection initial state: isPaused = false
08-29 16:55:44.032 19368 19434 I WakeWordService: 🎯 WAKEWORD_INIT: Service starting in resumed state
08-29 16:55:44.032 19368 19434 I WakeWordService: ✅ WAKEWORD_INIT: Wake word detection initialized and ready ✅
08-29 16:55:44.032 19368 19434 I WakeWordService: 🎯 WAKEWORD_INIT: ====================================================
08-29 16:55:44.032 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 16:55:44.032 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 16:55:44.033 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 16:55:44.033 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 16:55:44.033 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504544094
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:55:44.094 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:55:44.094 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:55:44.726 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:55:44.727 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504545107
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:55:45.107 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:55:45.108 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:55:45.108 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:55:45.108 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:55:47.696 19368 19566 D AppStateModule: 📱 APP_STATE_MODULE: getCurrentAppState called - returning: active
08-29 16:55:48.026 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 16:55:48.027 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:55:48.028 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:55:48.031 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:55:48.033 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 16:55:48.034 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:55:48.034 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:55:48.036 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:56:06.209 19368 19682 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.1613 (threshold: 0.05)
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: Time: 16:56:06.209
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.16133118
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756504566209
08-29 16:56:06.212 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 16:56:06.212 19368 19682 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 16:56:06.212 19368 19682 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: false
08-29 16:56:06.212 19368 19682 I WakeWordService: 📱 BACKGROUND_CHECK: App is backgrounded - storing event and bringing to foreground
08-29 16:56:06.435 19368 19682 W WakeWordService: 📱 BACKGROUND_CHECK: ⚠️ Failed to bring app to foreground - sending event anyway
08-29 16:56:06.435 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 16:56:06.435 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756504566435
08-29 16:56:06.435 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:56:06.435 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 16:56:06.435 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.16133118
08-29 16:56:06.436 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 16:56:06.436 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 16:56:06.436 19368 19682 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 16:56:06.437 19368 19682 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 16:56:06.437 19368 19682 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: false
08-29 16:56:06.437 19368 19682 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@49546e0
08-29 16:56:06.437 19368 19682 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756504566436
08-29 16:56:06.437 19368 19682 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 16:56:06.437 19368 19682 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 16:56:06.437 19368 19682 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 16:56:06.437 19368 19682 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:56:06.439 19368 19682 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 16:56:06.439 19368 19682 I VoiceManager: Initializing OpenAI Whisper client
08-29 16:56:06.440 19368 19682 D VoiceManager: Whisper client initialized successfully
08-29 16:56:06.440 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 16:56:06.440 19368 19682 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 16:56:06.440 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 16:56:06.440 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756504566440
08-29 16:56:06.440 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 16:56:06.440 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 16:56:06.440 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 16:56:06.445 19368 19368 D VoiceManager: Deepgram client initialized for future use
08-29 16:56:06.446 19368 19368 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 16:56:06.446 19368 19368 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 16:56:06.447 19368 19368 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 16:56:06.447 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 16:56:06.447 19368 19368 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504566447)
08-29 16:56:06.447 19368 19368 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 16:56:06.447 19368 19368 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 16:56:06.448 19368 19368 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 16:56:06.448 19368 19368 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:56:06.451 19368 19368 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756504566447)
08-29 16:56:06.451 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:56:06.452 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 16:56:06.452 19368 19368 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 16:56:06.452 19368 19368 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 16:56:06.452 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:56:06.453 19368 19368 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 16:56:06.454 19368 19368 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 16:56:06.454 19368 19368 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 16:56:06.459 19368 19368 I VoiceManager: SpeechRecognizer started listening.
08-29 16:56:06.461 19368 19368 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 16:56:06.480 19368 19368 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7de518c
08-29 16:56:06.480 19368 19368 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 16:56:06.480 19368 19368 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 16:56:06.480 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 16:56:06.513 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 16:56:06.516 19368 19682 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 16:56:06.516 19368 19682 E WakeWordService: java.lang.InterruptedException
08-29 16:56:06.516 19368 19682 E WakeWordService:       at java.lang.Object.wait(Native Method)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at java.lang.Object.wait(Object.java:405)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at java.lang.Thread.join(Thread.java:1643)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:727)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda0.run(Unknown Source:2)
08-29 16:56:06.516 19368 19682 E WakeWordService:       at java.lang.Thread.run(Thread.java:1119)
08-29 16:56:06.516 19368 19682 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756504566447)
08-29 16:56:06.521 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 16:56:06.521 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 16:56:06.522 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@7e4fa78
08-29 16:56:06.522 19368 19682 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 16:56:06.522 19368 19682 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 16:56:06.522 19368 19682 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 16:56:06.525 19368 19368 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 30 second auto-resume timer (coroutine: StandaloneCoroutine{Active}@7e4fa78)
08-29 16:56:06.543 19368 19368 D VoiceManager: Ready for speech
08-29 16:56:06.937 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 16:56:06.937 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756504566937
08-29 16:56:06.937 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:56:06.937 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:56:06.937 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 16:56:06.939 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 16:56:06.939 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 16:56:06.939 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 16:56:06.209
08-29 16:56:06.940 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 16:56:06.940 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.1613
08-29 16:56:06.940 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 16:56:06.940 19368 19368 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 16:56:06.941 19368 19368 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.1613311767578125,"timestamp":1756504566209}
08-29 16:56:06.941 19368 19368 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:56:06.942 19368 19368 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 16:56:06.942 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 16:56:06.942 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 16:56:09.064 19368 19368 D VoiceManager: Beginning of speech
08-29 16:56:09.452 19368 19368 D VoiceManager: Partial results: ''
08-29 16:56:09.881 19368 19368 D VoiceManager: Partial results: ''
08-29 16:56:09.928 19368 19368 D VoiceManager: Partial results: ''
08-29 16:56:10.053 19368 19368 D VoiceManager: Partial results: 'just'
08-29 16:56:10.667 19368 19368 D VoiceManager: End of speech
08-29 16:56:10.673 19368 19368 D VoiceManager: Speech recognition results received: 1 matches
08-29 16:56:10.673 19368 19368 D VoiceManager: Match 0: 'just testing'
08-29 16:56:10.674 19368 19368 I VoiceManager: Speech recognized: 'just testing'
08-29 16:56:10.674 19368 19368 I VoiceManager: Speech recognized: "just testing"
08-29 16:56:10.674 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 16:56:10.680 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504566447
08-29 16:56:10.680 19368 19368 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756504566447)
08-29 16:56:10.680 19368 19368 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504566447)
08-29 16:56:10.684 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 16:56:10.684 19368 19368 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 16:56:10.684 19368 19368 I VoiceManager: Speech recognition completed successfully, processing command
08-29 16:56:10.685 19368 19368 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 16:56:10.686 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:56:10.687 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 16:56:10.687 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: false
08-29 16:56:10.688 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Process natively in background
08-29 16:56:10.688 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 16:56:10.688 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: ========== PROCESSING TEXT IN BACKGROUND ==========
08-29 16:56:10.693 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Text: 'just testing'
08-29 16:56:10.693 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Using native API client for background processing
08-29 16:56:10.696 19368 19434 D VoiceManager: 📱 NATIVE_FLOW: Current history length: 0
08-29 16:56:10.703 19368 19368 E VoiceManager: Speech recognition error: Client error
08-29 16:56:10.703 19368 19368 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 16:56:10.703 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504566447
08-29 16:56:10.704 19368 19368 W AudioManager: No active request found with ID speech_recognition_1756504566447
08-29 16:56:10.704 19368 19368 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756504566447)
08-29 16:56:10.704 19368 19434 D VoiceManager: 📱 NATIVE_FLOW: Making API call...
08-29 16:56:10.706 19368 19434 I NativeApiClient: 📡 NATIVE_API: ========== SENDING CHAT MESSAGE ==========
08-29 16:56:10.706 19368 19434 I NativeApiClient: 📡 NATIVE_API: Message: 'just testing'
08-29 16:56:10.706 19368 19434 I NativeApiClient: 📡 NATIVE_API: History length: 0
08-29 16:56:10.706 19368 19434 I NativeApiClient: 📡 NATIVE_API: Request ID: 1756504570704-163ee434-
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: ========== API CALL CONTEXT ==========
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: User ID: f8ac1669-7e9...
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: Message: 'just testing'
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: Original history entries: 0
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: Voice Settings:
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Deepgram enabled: false
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Selected voice: aura-2-pandora-en
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Base model: claude-sonnet-4-20250514
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Timezone: UTC
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Instructions: ''
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: =======================================
08-29 16:56:10.710 19368 19434 I NativeApiClient: 📡 CONTEXT_DEBUG: Updated history entries (with current message): 1
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG: ========== COMPLETE API PAYLOAD ==========
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG: Request structure:
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - message: 'just testing'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timestamp: 1756504570710
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - request_id: '1756504570704-163ee434-'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - user_id: 'f8ac1669-7e9...'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - history: 1 entries
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - deepgram_enabled: false
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - selected_deepgram_voice: 'aura-2-pandora-en'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - base_language_model: 'claude-sonnet-4-20250514'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timezone: 'UTC'
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - general_instructions: ''
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG: Raw JSON payload:
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG: {"base_language_model":"claude-sonnet-4-20250514","deepgram_enabled":false,"general_instructions":"","history":[{"content":"just testing","role":"user","timestamp":1756504570710,"type":"text"}],"message":"just testing","request_id":"1756504570704-163ee434-","selected_deepgram_voice":"aura-2-pandora-en","timestamp":1756504570710,"timezone":"UTC","user_id":"f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
08-29 16:56:10.712 19368 19434 I NativeApiClient: 📡 PAYLOAD_DEBUG: =======================================
08-29 16:56:10.713 19368 19434 D NativeApiClient: 📡 NATIVE_API: Making HTTP request to https://mobile-jarvis-backend.onrender.com/api/chat
08-29 16:56:10.713 19368 19434 D NativeApiClient: 📡 HTTP: --> POST https://mobile-jarvis-backend.onrender.com/api/chat
08-29 16:56:10.717 19368 19434 D NativeApiClient: 📡 AUTH: Added authorization header
08-29 16:56:14.654 19368 19434 D NativeApiClient: 📡 HTTP: <-- 200 https://mobile-jarvis-backend.onrender.com/api/chat (3941ms)
08-29 16:56:14.655 19368 19434 D NativeApiClient: 📡 NATIVE_API: Response code: 200
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: ========== API RESPONSE ==========
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: Status: 200
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: Response body length: 161
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: Raw response body:
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: {"response":"Hello! The system is working perfectly. How can we help you today?","timestamp":1756504575,"settings_updated":false,"integration_in_progress":false}
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: Parsed response:
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG:   - response: 'Hello! The system is working perfectly. How can we help you today?'
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG:   - timestamp: 1756504575
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG:   - request_id: 'null'
08-29 16:56:14.668 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG:   - settings_updated: false
08-29 16:56:14.669 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG:   - error: 'none'
08-29 16:56:14.669 19368 19434 I NativeApiClient: 📡 RESPONSE_DEBUG: =======================================
08-29 16:56:14.669 19368 19434 I NativeApiClient: 📡 NATIVE_API: ✅ Chat API call successful
08-29 16:56:14.669 19368 19434 D NativeApiClient: 📡 NATIVE_API: Response length: 66
08-29 16:56:14.669 19368 19434 I VoiceManager: 📱 NATIVE_FLOW: ✅ API call successful
08-29 16:56:14.669 19368 19434 D VoiceManager: 📱 NATIVE_FLOW: Response length: 66
08-29 16:56:14.682 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Processing complete, responding to user
08-29 16:56:14.683 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Starting TTS with voice settings
08-29 16:56:14.683 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Deepgram enabled: false
08-29 16:56:14.683 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Selected voice: aura-2-pandora-en
08-29 16:56:14.687 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'Hello! The system is working perfectly. How can we help you today?', queueMode: 0
08-29 16:56:14.687 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
08-29 16:56:14.690 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
08-29 16:56:14.690 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'Hello! The system is working perfectly. How can we help you today?'
08-29 16:56:14.691 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1756504574691 with text: 'Hello! The system is working perfectly. How can we help you today?'
08-29 16:56:14.692 19368 19368 D TextToSpeechManager: 🎵 TTS: Requesting audio focus (ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5)
08-29 16:56:14.693 19368 19368 D AudioManager: Requesting audio focus: TTS (ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5)
08-29 16:56:14.699 19368 19368 I AudioManager: Audio focus granted: TTS (ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5)
08-29 16:56:14.699 19368 19368 D TextToSpeechManager: 🎵 TTS audio focus gained
08-29 16:56:14.700 19368 19368 D TextToSpeechManager: 🎵 TTS audio focus request result: true
08-29 16:56:14.700 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 9ms - granted: true
08-29 16:56:14.701 19368 19368 D TextToSpeechManager: Generated utterance ID: 808159c4-35a1-4eaf-8f25-c45db1d6a45a
08-29 16:56:14.701 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 10ms
08-29 16:56:14.705 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 14ms: 0
08-29 16:56:14.706 19368 19368 I TextToSpeechManager: TTS speak() call successful
08-29 16:56:14.928 19368 19378 D TextToSpeechManager: 🎵 TTS TIMING: Speech ACTUALLY started for utterance: 808159c4-35a1-4eaf-8f25-c45db1d6a45a at 237ms
08-29 16:56:19.461 19368 19378 D TextToSpeechManager: 🎵 TTS TIMING: Speech completed for utterance: 808159c4-35a1-4eaf-8f25-c45db1d6a45a at 4769ms
08-29 16:56:19.461 19368 19378 D AudioManager: Releasing audio focus for ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5
08-29 16:56:19.462 19368 19378 I AudioManager: Releasing current focus holder TTS (ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5)
08-29 16:56:19.462 19368 19378 I AudioManager: Abandoning audio focus: TTS (ID: tts_d353aa66-3e7f-4c18-aaea-a4e40ed680a5)
08-29 16:56:19.469 19368 19378 D TextToSpeechManager: 🎵 TTS audio focus released
08-29 16:56:19.469 19368 19378 D TextToSpeechManager: 🎵 TTS QUEUE: Request completed, processing next
08-29 16:56:19.470 19368 19378 I VoiceManager: 📱 NATIVE_FLOW: TTS complete, setting state to LISTENING for continued conversation
08-29 16:56:19.774 19368 19368 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
08-29 16:56:19.778 19368 19368 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 16:56:19.779 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:56:19.781 19368 19368 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 16:56:19.884 19368 19368 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 16:56:19.885 19368 19368 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 16:56:19.888 19368 19368 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 16:56:19.889 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 16:56:19.889 19368 19368 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504579889)
08-29 16:56:19.896 19368 19368 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756504579889)
08-29 16:56:19.896 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:56:19.896 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 16:56:19.897 19368 19368 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 16:56:19.898 19368 19368 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 16:56:19.898 19368 19368 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 16:56:19.899 19368 19368 I VoiceManager: SpeechRecognizer started listening.
08-29 16:56:19.927 19368 19368 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b0b75ab
08-29 16:56:19.927 19368 19368 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 16:56:19.927 19368 19368 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 16:56:19.927 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 16:56:19.998 19368 19368 D VoiceManager: Ready for speech
08-29 16:56:25.005 19368 19368 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b0b75ab
08-29 16:56:25.006 19368 19368 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 16:56:25.006 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:56:25.081 19368 19368 E VoiceManager: Speech recognition error: No recognition match
08-29 16:56:25.082 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
08-29 16:56:25.082 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504579889
08-29 16:56:25.082 19368 19368 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756504579889)
08-29 16:56:25.082 19368 19368 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504579889)
08-29 16:56:25.085 19368 19368 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756504579889)
08-29 16:56:25.085 19368 19368 D VoiceManager: No speech detected
08-29 16:56:25.085 19368 19368 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
08-29 16:56:25.086 19368 19368 I VoiceManager: Message: I didn't hear anything. Please try saying the wake word again when you're ready.
08-29 16:56:27.594 19368 19368 D VoiceManager: Voice state transition: RESPONDING -> IDLE
08-29 16:56:27.595 19368 19368 D VoiceManager: Conversation completed, re-enabling wake word detection
08-29 16:56:27.599 19368 19368 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
08-29 16:56:27.600 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 16:56:27.600 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.hightowerai.MobileJarvisNative
08-29 16:56:28.102 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
08-29 16:56:28.102 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
08-29 16:56:28.103 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 16:56:28.103 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.hightowerai.MobileJarvisNative
08-29 16:56:28.103 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
08-29 16:56:28.103 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 16:56:28.104 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756504588103
08-29 16:56:28.104 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 16:56:28.104 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 16:56:28.135 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 16:56:28.255 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 16:56:28.255 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 16:56:28.256 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 16:56:28.256 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 16:56:28.256 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection
08-29 16:56:28.256 19368 19368 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 16:56:28.256 19368 19368 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 16:56:28.256 19368 19368 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 16:56:28.256 19368 19368 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:56:28.257 19368 19368 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:56:28.257 19368 19368 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 16:56:28.257 19368 19368 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-29 16:56:28.325 19368 19368 D WakeWordService: Audio recording started successfully
08-29 16:56:28.325 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started
08-29 16:56:28.325 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 16:56:28.326 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 16:56:28.326 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 16:56:28.326 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 16:56:28.326 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 16:56:28.326 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 16:56:28.330 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 16:56:28.330 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 16:56:28.330 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
08-29 16:56:35.753 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: active
08-29 16:56:35.754 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:56:35.755 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:56:35.758 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:56:35.759 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: active
08-29 16:56:35.759 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:56:35.759 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:56:35.761 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:56:35.798 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504596113
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:56:36.113 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:56:36.114 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:56:36.114 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:56:36.114 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:56:36.118 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:56:36.118 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:56:36.118 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504596118
08-29 16:56:36.118 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:56:36.118 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:56:36.119 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:56:36.119 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:56:36.120 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:56:36.120 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:56:36.120 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:56:36.527 19368 19368 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer expired but service no longer paused
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504596662
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:56:36.662 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:56:36.663 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:56:36.663 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:56:36.663 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:56:37.128 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:56:37.138 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:56:37.739 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504597746
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:56:37.746 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:56:37.746 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:56:37.747 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:56:37.747 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SET SELECTED WAKE WORD ==========
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: setSelectedWakeWord called from React Native
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Timestamp: 1756504598789
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Thread: mqt_native_modules
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Parameter received: 'Juniper' (type: String)
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VALIDATING WAKE WORD ==========
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Available wake words: [Hey Jarvis, Hey Juni, Hey Juniper, Juniper, Jarvis, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Jasmine, Hey, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Checking if 'Juniper' is valid...
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word 'Juniper' is valid
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SAVING TO SHARED PREFERENCES ==========
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Previous wake word: 'Juniper'
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: New wake word: 'Juniper'
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ℹ️ Wake word unchanged, but saving anyway
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: SharedPreferences save took 0ms
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Save result: true
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VERIFICATION ==========
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Verified saved wake word: 'Juniper'
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SUCCESS ==========
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word changed from 'Juniper' to 'Juniper'
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word preference saved and verified successfully
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ⚠️ Note: Service restart required for change to take effect
08-29 16:56:38.789 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: =============================================
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SET WAKE WORD SENSITIVITY ==========
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: setWakeWordSensitivity called from React Native
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Timestamp: 1756504598792
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Thread: mqt_native_modules
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Parameter received: 0.05 (type: float)
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Sensitivity percentage: 5%
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VALIDATING SENSITIVITY ==========
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Valid range: 0.0 - 1.0
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Received value: 0.05
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity value 0.05 is valid
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SAVING TO SHARED PREFERENCES ==========
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity: 0.05 (5%)
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: New sensitivity: 0.05 (5%)
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ℹ️ Sensitivity unchanged, but saving anyway
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: SharedPreferences save took 0ms
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Save result: true
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VERIFICATION ==========
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Verified saved sensitivity: 0.05 (5%)
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SUCCESS ==========
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity changed from 0.05 (5%) to 0.05 (5%)
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity preference saved and verified successfully
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ⚠️ Note: Service restart required for change to take effect
08-29 16:56:38.792 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ================================================
08-29 16:56:57.806 19368 19566 D AppStateModule: 📱 APP_STATE_MODULE: getCurrentAppState called - returning: active
08-29 16:56:58.226 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 16:56:58.226 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:56:58.227 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:56:58.227 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:56:58.228 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: background
08-29 16:56:58.229 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:56:58.229 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:56:58.236 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:56:58.363 19368 19881 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 250 chunks in 30s (isPaused: false)
08-29 16:57:03.044 19368 19881 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.4351 (threshold: 0.05)
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Juniper' ACTIVATED ***
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: Time: 16:57:03.044
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.43511802
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.05
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1756504623044
08-29 16:57:03.046 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
08-29 16:57:03.046 19368 19881 I WakeWordService: 📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========
08-29 16:57:03.046 19368 19881 I WakeWordService: 📱 BACKGROUND_CHECK: App currently in foreground: false
08-29 16:57:03.046 19368 19881 I WakeWordService: 📱 BACKGROUND_CHECK: App is backgrounded - storing event and bringing to foreground
08-29 16:57:03.277 19368 19881 W WakeWordService: 📱 BACKGROUND_CHECK: ⚠️ Failed to bring app to foreground - sending event anyway
08-29 16:57:03.277 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
08-29 16:57:03.277 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1756504623277
08-29 16:57:03.277 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: Action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:57:03.277 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Juniper'
08-29 16:57:03.277 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.43511802
08-29 16:57:03.278 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
08-29 16:57:03.278 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
08-29 16:57:03.278 19368 19881 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
08-29 16:57:03.278 19368 19881 I VoiceManager: 📱 VOICE_MANAGER: ========== WAKE WORD PROCESSING ==========
08-29 16:57:03.278 19368 19881 I VoiceManager: 📱 VOICE_MANAGER: App in foreground: false
08-29 16:57:03.278 19368 19881 I VoiceManager: 📱 VOICE_MANAGER: Current voice state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@49546e0
08-29 16:57:03.278 19368 19881 I VoiceManager: 📱 VOICE_MANAGER: Timestamp: 1756504623278
08-29 16:57:03.278 19368 19881 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
08-29 16:57:03.278 19368 19881 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
08-29 16:57:03.278 19368 19881 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
08-29 16:57:03.278 19368 19881 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:57:03.282 19368 19881 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
08-29 16:57:03.282 19368 19881 I VoiceManager: Initializing OpenAI Whisper client
08-29 16:57:03.284 19368 19881 D VoiceManager: Whisper client initialized successfully
08-29 16:57:03.284 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
08-29 16:57:03.285 19368 19881 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
08-29 16:57:03.285 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
08-29 16:57:03.285 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1756504623285
08-29 16:57:03.285 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
08-29 16:57:03.285 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
08-29 16:57:03.285 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
08-29 16:57:03.289 19368 19368 D VoiceManager: Deepgram client initialized for future use
08-29 16:57:03.290 19368 19368 D VoiceManager: Starting speech recognition on main thread after wake word
08-29 16:57:03.290 19368 19368 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 16:57:03.291 19368 19368 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 16:57:03.291 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 16:57:03.291 19368 19368 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504623291)
08-29 16:57:03.291 19368 19368 I AudioManager: Higher priority request (SPEECH_RECOGNITION) interrupting current (BACKGROUND_AUDIO)
08-29 16:57:03.291 19368 19368 I AudioManager: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
08-29 16:57:03.292 19368 19368 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
08-29 16:57:03.292 19368 19368 I AudioManager: Abandoning audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:57:03.298 19368 19368 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756504623291)
08-29 16:57:03.298 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:57:03.298 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 16:57:03.298 19368 19368 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
08-29 16:57:03.299 19368 19368 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 16:57:03.299 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:57:03.300 19368 19368 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 16:57:03.300 19368 19368 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 16:57:03.301 19368 19368 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 16:57:03.301 19368 19368 I VoiceManager: SpeechRecognizer started listening.
08-29 16:57:03.305 19368 19368 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
08-29 16:57:03.330 19368 19368 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@37b8c59
08-29 16:57:03.330 19368 19368 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 16:57:03.330 19368 19368 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 16:57:03.330 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 16:57:03.350 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
08-29 16:57:03.354 19368 19881 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
08-29 16:57:03.354 19368 19881 E WakeWordService: java.lang.InterruptedException
08-29 16:57:03.354 19368 19881 E WakeWordService:       at java.lang.Object.wait(Native Method)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at java.lang.Object.wait(Object.java:405)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at java.lang.Thread.join(Thread.java:1643)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:885)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.sendWakeWordEvent(WakeWordService.kt:793)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:727)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:624)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:511)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$6ZHPvXDNU07w3NDWY4IQ-Q0EWEs(Unknown Source:0)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at com.hightowerai.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda0.run(Unknown Source:2)
08-29 16:57:03.354 19368 19881 E WakeWordService:       at java.lang.Thread.run(Thread.java:1119)
08-29 16:57:03.354 19368 19881 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1756504623291)
08-29 16:57:03.364 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
08-29 16:57:03.364 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
08-29 16:57:03.365 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@64830ff
08-29 16:57:03.365 19368 19881 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
08-29 16:57:03.365 19368 19881 I WakeWordService: 📱 BACKGROUND_CHECK: ================================================
08-29 16:57:03.365 19368 19881 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
08-29 16:57:03.368 19368 19368 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 30 second auto-resume timer (coroutine: StandaloneCoroutine{Active}@64830ff)
08-29 16:57:03.395 19368 19368 D VoiceManager: Ready for speech
08-29 16:57:03.779 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
08-29 16:57:03.779 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1756504623779
08-29 16:57:03.779 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:57:03.780 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.hightowerai.MobileJarvisNative.WAKE_WORD_DETECTED_RN
08-29 16:57:03.780 19368 19368 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
08-29 16:57:03.781 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
08-29 16:57:03.781 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
08-29 16:57:03.781 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 16:57:03.044
08-29 16:57:03.781 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Juniper'
08-29 16:57:03.782 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.4351
08-29 16:57:03.782 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
08-29 16:57:03.782 19368 19368 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
08-29 16:57:03.782 19368 19368 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Juniper","confidence":0.43511801958084106,"timestamp":1756504623044}
08-29 16:57:03.783 19368 19368 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:57:03.783 19368 19368 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
08-29 16:57:03.783 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
08-29 16:57:03.783 19368 19368 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
08-29 16:57:05.611 19368 19368 D VoiceManager: Beginning of speech
08-29 16:57:06.014 19368 19368 D VoiceManager: Partial results: ''
08-29 16:57:06.144 19368 19368 D VoiceManager: Partial results: ''
08-29 16:57:06.740 19368 19368 D VoiceManager: Partial results: 'what is'
08-29 16:57:07.321 19368 19368 D VoiceManager: Partial results: 'what is'
08-29 16:57:07.370 19368 19368 D VoiceManager: Partial results: 'what is your'
08-29 16:57:07.621 19368 19368 D VoiceManager: Partial results: 'what is your'
08-29 16:57:07.887 19368 19368 D VoiceManager: Partial results: 'what is your'
08-29 16:57:08.503 19368 19368 D VoiceManager: End of speech
08-29 16:57:08.505 19368 19368 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@37b8c59
08-29 16:57:08.506 19368 19368 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 16:57:08.506 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:57:08.506 19368 19368 D VoiceManager: Speech recognition results received: 1 matches
08-29 16:57:08.507 19368 19368 D VoiceManager: Match 0: 'what is your functionality'
08-29 16:57:08.507 19368 19368 I VoiceManager: Speech recognized: 'what is your functionality'
08-29 16:57:08.508 19368 19368 I VoiceManager: Speech recognized: "what is your functionality"
08-29 16:57:08.508 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
08-29 16:57:08.508 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504623291
08-29 16:57:08.508 19368 19368 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756504623291)
08-29 16:57:08.508 19368 19368 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504623291)
08-29 16:57:08.512 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
08-29 16:57:08.512 19368 19368 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
08-29 16:57:08.513 19368 19368 I VoiceManager: Speech recognition completed successfully, processing command
08-29 16:57:08.514 19368 19368 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
08-29 16:57:08.515 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:57:08.517 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: ========== PROCESSING DECISION ==========
08-29 16:57:08.517 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: App in foreground: false
08-29 16:57:08.517 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: Decision: Process natively in background
08-29 16:57:08.517 19368 19368 D VoiceManager: 📱 PROCESSING_DECISION: ================================================
08-29 16:57:08.517 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: ========== PROCESSING TEXT IN BACKGROUND ==========
08-29 16:57:08.517 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Text: 'what is your functionality'
08-29 16:57:08.517 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Using native API client for background processing
08-29 16:57:08.518 19368 19435 D VoiceManager: 📱 NATIVE_FLOW: Current history length: 4
08-29 16:57:08.521 19368 19368 E VoiceManager: Speech recognition error: Client error
08-29 16:57:08.521 19368 19368 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
08-29 16:57:08.521 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504623291
08-29 16:57:08.521 19368 19368 W AudioManager: No active request found with ID speech_recognition_1756504623291
08-29 16:57:08.521 19368 19368 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756504623291)
08-29 16:57:08.547 19368 19435 D VoiceManager: 📱 NATIVE_FLOW: Making API call...
08-29 16:57:08.548 19368 19435 I NativeApiClient: 📡 NATIVE_API: ========== SENDING CHAT MESSAGE ==========
08-29 16:57:08.548 19368 19435 I NativeApiClient: 📡 NATIVE_API: Message: 'what is your functionality'
08-29 16:57:08.548 19368 19435 I NativeApiClient: 📡 NATIVE_API: History length: 4
08-29 16:57:08.548 19368 19435 I NativeApiClient: 📡 NATIVE_API: Request ID: 1756504628547-40c195ec-
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: ========== API CALL CONTEXT ==========
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: User ID: f8ac1669-7e9...
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: Message: 'what is your functionality'
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: Original history entries: 4
08-29 16:57:08.552 19368 19435 D NativeApiClient: 📡 CONTEXT_DEBUG:   History[0]: user - 'just testing...'
08-29 16:57:08.552 19368 19435 D NativeApiClient: 📡 CONTEXT_DEBUG:   History[1]: assistant - 'Hello! The system is working perfectly. How can we help you ...'
08-29 16:57:08.552 19368 19435 D NativeApiClient: 📡 CONTEXT_DEBUG:   History[2]: user - 'just testing...'
08-29 16:57:08.552 19368 19435 D NativeApiClient: 📡 CONTEXT_DEBUG:   History[3]: assistant - '...'
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: Voice Settings:
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Deepgram enabled: false
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Selected voice: aura-2-pandora-en
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Base model: claude-sonnet-4-20250514
08-29 16:57:08.552 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Timezone: UTC
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG:   - Instructions: ''
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: =======================================
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 CONTEXT_DEBUG: Updated history entries (with current message): 5
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG: ========== COMPLETE API PAYLOAD ==========
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG: Request structure:
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - message: 'what is your functionality'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timestamp: 1756504628553
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - request_id: '1756504628547-40c195ec-'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - user_id: 'f8ac1669-7e9...'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - history: 5 entries
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - deepgram_enabled: false
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - selected_deepgram_voice: 'aura-2-pandora-en'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - base_language_model: 'claude-sonnet-4-20250514'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - timezone: 'UTC'
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG:   - general_instructions: ''
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG: Raw JSON payload:
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG: {"base_language_model":"claude-sonnet-4-20250514","deepgram_enabled":false,"general_instructions":"","history":[{"content":"just testing","role":"user","timestamp":1756504574689,"type":"text"},{"content":"Hello! The system is working perfectly. How can we help you today?","role":"assistant","timestamp":1756504574689,"type":"text"},{"content":"just testing","role":"user","timestamp":1756504618235,"type":"text"},{"content":"","role":"assistant","timestamp":1756504618235,"type":"text"},{"content":"what is your functionality","role":"user","timestamp":1756504628553,"type":"text"}],"message":"what is your functionality","request_id":"1756504628547-40c195ec-","selected_deepgram_voice":"aura-2-pandora-en","timestamp":1756504628553,"timezone":"UTC","user_id":"f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
08-29 16:57:08.553 19368 19435 I NativeApiClient: 📡 PAYLOAD_DEBUG: =======================================
08-29 16:57:08.554 19368 19435 D NativeApiClient: 📡 NATIVE_API: Making HTTP request to https://mobile-jarvis-backend.onrender.com/api/chat
08-29 16:57:08.554 19368 19435 D NativeApiClient: 📡 HTTP: --> POST https://mobile-jarvis-backend.onrender.com/api/chat
08-29 16:57:08.557 19368 19435 D NativeApiClient: 📡 AUTH: Added authorization header
08-29 16:57:16.777 19368 19435 D NativeApiClient: 📡 HTTP: <-- 200 https://mobile-jarvis-backend.onrender.com/api/chat (8223ms)
08-29 16:57:16.777 19368 19435 D NativeApiClient: 📡 NATIVE_API: Response code: 200
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: ========== API RESPONSE ==========
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: Status: 200
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: Response body length: 340
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: Raw response body:
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: {"response":"We can help you with a variety of tasks, such as searching the web for real-time information, connecting with your third-party apps, remembering and retrieving information for you, and updating your system preferences. What can we help you with?","timestamp":1756504637,"settings_updated":false,"integration_in_progress":false}
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: Parsed response:
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG:   - response: 'We can help you with a variety of tasks, such as searching the web for real-time information, connecting with your third-party apps, remembering and retrieving information for you, and updating your s...'
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG:   - timestamp: 1756504637
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG:   - request_id: 'null'
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG:   - settings_updated: false
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG:   - error: 'none'
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 RESPONSE_DEBUG: =======================================
08-29 16:57:16.783 19368 19435 I NativeApiClient: 📡 NATIVE_API: ✅ Chat API call successful
08-29 16:57:16.783 19368 19435 D NativeApiClient: 📡 NATIVE_API: Response length: 245
08-29 16:57:16.784 19368 19435 I VoiceManager: 📱 NATIVE_FLOW: ✅ API call successful
08-29 16:57:16.784 19368 19435 D VoiceManager: 📱 NATIVE_FLOW: Response length: 245
08-29 16:57:16.794 19368 19368 I VoiceManager: 📱 NATIVE_FLOW: Processing complete, responding to user
08-29 16:57:16.794 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Starting TTS with voice settings
08-29 16:57:16.795 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Deepgram enabled: false
08-29 16:57:16.795 19368 19368 D VoiceManager: 📱 NATIVE_FLOW: Selected voice: aura-2-pandora-en
08-29 16:57:16.797 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'We can help you with a variety of tasks, such as searching the web for real-time information, connecting with your third-party apps, remembering and retrieving information for you, and updating your system preferences. What can we help you with?', queueMode: 0
08-29 16:57:16.797 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
08-29 16:57:16.799 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
08-29 16:57:16.800 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'We can help you with a variety of tasks, such as searching the web for real-time information, connecting with your third-party apps, remembering and retrieving information for you, and updating your system preferences. What can we help you with?'
08-29 16:57:16.800 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1756504636800 with text: 'We can help you with a variety of tasks, such as searching the web for real-time information, connecting with your third-party apps, remembering and retrieving information for you, and updating your system preferences. What can we help you with?'
08-29 16:57:16.801 19368 19368 D TextToSpeechManager: 🎵 TTS: Requesting audio focus (ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b)
08-29 16:57:16.801 19368 19368 D AudioManager: Requesting audio focus: TTS (ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b)
08-29 16:57:16.810 19368 19368 I AudioManager: Audio focus granted: TTS (ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b)
08-29 16:57:16.810 19368 19368 D TextToSpeechManager: 🎵 TTS audio focus gained
08-29 16:57:16.811 19368 19368 D TextToSpeechManager: 🎵 TTS audio focus request result: true
08-29 16:57:16.811 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 10ms - granted: true
08-29 16:57:16.812 19368 19368 D TextToSpeechManager: Generated utterance ID: 2f45fac1-74fd-4b32-9bf4-8e46977542ed
08-29 16:57:16.812 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 12ms
08-29 16:57:16.815 19368 19368 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 15ms: 0
08-29 16:57:16.815 19368 19368 I TextToSpeechManager: TTS speak() call successful
08-29 16:57:17.217 19368 20561 D TextToSpeechManager: 🎵 TTS TIMING: Speech ACTUALLY started for utterance: 2f45fac1-74fd-4b32-9bf4-8e46977542ed at 416ms
08-29 16:57:30.099 19368 19379 D TextToSpeechManager: 🎵 TTS TIMING: Speech completed for utterance: 2f45fac1-74fd-4b32-9bf4-8e46977542ed at 13299ms
08-29 16:57:30.099 19368 19379 D AudioManager: Releasing audio focus for ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b
08-29 16:57:30.100 19368 19379 I AudioManager: Releasing current focus holder TTS (ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b)
08-29 16:57:30.100 19368 19379 I AudioManager: Abandoning audio focus: TTS (ID: tts_a2b9fa6e-4126-4653-a8d9-5813ecf1676b)
08-29 16:57:30.105 19368 19379 D TextToSpeechManager: 🎵 TTS audio focus released
08-29 16:57:30.106 19368 19379 D TextToSpeechManager: 🎵 TTS QUEUE: Request completed, processing next
08-29 16:57:30.106 19368 19379 I VoiceManager: 📱 NATIVE_FLOW: TTS complete, setting state to LISTENING for continued conversation
08-29 16:57:30.408 19368 19368 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
08-29 16:57:30.413 19368 19368 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
08-29 16:57:30.415 19368 19368 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
08-29 16:57:30.419 19368 19368 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
08-29 16:57:30.521 19368 19368 D VoiceManager: Restarting speech recognition for continuous conversation
08-29 16:57:30.521 19368 19368 D VoiceManager: startListening() called. Attempting to start speech recognition...
08-29 16:57:30.525 19368 19368 D VoiceManager: Sent broadcast to pause wake word detection during listening
08-29 16:57:30.526 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
08-29 16:57:30.526 19368 19368 D AudioManager: Requesting audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504650526)
08-29 16:57:30.533 19368 19368 I AudioManager: Audio focus granted: SPEECH_RECOGNITION (ID: speech_recognition_1756504650526)
08-29 16:57:30.534 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:57:30.534 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
08-29 16:57:30.534 19368 19368 D VoiceManager: Ignoring duplicate state change: LISTENING
08-29 16:57:30.535 19368 19368 D VoiceManager: Speech recognition parameters: minLength=4000, completeSilence=3500, possibleSilence=2500
08-29 16:57:30.535 19368 19368 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
08-29 16:57:30.536 19368 19368 I VoiceManager: SpeechRecognizer started listening.
08-29 16:57:30.566 19368 19368 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@fecbaad
08-29 16:57:30.566 19368 19368 I AudioManager: Transient focus loss for SPEECH_RECOGNITION
08-29 16:57:30.567 19368 19368 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
08-29 16:57:30.567 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
08-29 16:57:30.650 19368 19368 D VoiceManager: Ready for speech
08-29 16:57:33.369 19368 19368 W WakeWordService: ⏸️ PAUSE_RESUME: ⚠️ Auto-resume triggered after 30 seconds
08-29 16:57:33.370 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 16:57:33.371 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756504653370
08-29 16:57:33.371 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 16:57:33.372 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 16:57:33.401 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 16:57:33.542 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 16:57:33.542 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 16:57:33.542 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 16:57:33.543 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 16:57:33.543 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection
08-29 16:57:33.543 19368 19368 D AudioManager: Setting up Bluetooth audio route monitoring...
08-29 16:57:33.543 19368 19368 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-29 16:57:33.543 19368 19368 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-29 16:57:33.543 19368 19368 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:57:33.544 19368 19368 D AudioManager: Lower priority request (BACKGROUND_AUDIO) queued behind current (SPEECH_RECOGNITION)
08-29 16:57:33.544 19368 19368 W WakeWordService: 🎵 WAKE_WORD_SETUP: ⚠️ Failed to acquire audio focus for wake word detection, continuing anyway...
08-29 16:57:33.601 19368 19368 D WakeWordService: Audio recording started successfully
08-29 16:57:33.601 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started
08-29 16:57:33.601 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 16:57:33.601 19368 20751 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-29 16:57:33.601 19368 20751 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-29 16:57:33.601 19368 20751 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-29 16:57:33.601 19368 20751 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.05
08-29 16:57:33.601 19368 20751 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-29 16:57:33.603 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 16:57:33.603 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 16:57:33.604 19368 19368 I WakeWordService: Pausing wake word detection during conversation
08-29 16:57:35.655 19368 19368 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@e2f9564com.hightowerai.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@fecbaad
08-29 16:57:35.655 19368 19368 D AudioManager: Audio focus gained for SPEECH_RECOGNITION
08-29 16:57:35.655 19368 19368 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
08-29 16:57:35.726 19368 19368 E VoiceManager: Speech recognition error: No recognition match
08-29 16:57:35.726 19368 19368 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
08-29 16:57:35.727 19368 19368 D AudioManager: Releasing audio focus for ID: speech_recognition_1756504650526
08-29 16:57:35.727 19368 19368 I AudioManager: Releasing current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1756504650526)
08-29 16:57:35.727 19368 19368 I AudioManager: Abandoning audio focus: SPEECH_RECOGNITION (ID: speech_recognition_1756504650526)
08-29 16:57:35.731 19368 19368 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1756504650526)
08-29 16:57:35.732 19368 19368 D VoiceManager: No speech detected
08-29 16:57:35.733 19368 19368 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
08-29 16:57:35.733 19368 19368 I VoiceManager: Message: I didn't hear anything. Please try saying the wake word again when you're ready.
08-29 16:57:35.737 19368 19368 I AudioManager: Processing queued request BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:57:35.744 19368 19368 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-29 16:57:35.745 19368 19368 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-29 16:57:36.921 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: active
08-29 16:57:36.921 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:57:36.921 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:57:36.921 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:57:36.921 19368 19368 I AppStateModule: 📱 APP_STATE_MODULE: App state changed to: active
08-29 16:57:36.922 19368 19368 D AppStateModule: 📡 SEND_EVENT: Attempting to send event 'appStateChanged' to React Native
08-29 16:57:36.922 19368 19368 D AppStateModule: 📡 SEND_EVENT: ReactApplicationContext available: true
08-29 16:57:36.923 19368 19368 D AppStateModule: 📡 SEND_EVENT: ✅ Event 'appStateChanged' sent successfully
08-29 16:57:36.943 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504657170
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:57:37.170 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:57:37.170 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:57:37.173 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:57:37.173 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:57:37.173 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504657173
08-29 16:57:37.173 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:57:37.173 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:57:37.174 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:57:37.174 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:57:37.174 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:57:37.174 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:57:37.174 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504657653
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:57:37.653 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:57:37.653 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:57:38.181 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:57:38.182 19368 19566 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-29 16:57:38.262 19368 19368 D VoiceManager: Voice state transition: RESPONDING -> IDLE
08-29 16:57:38.262 19368 19368 D VoiceManager: Conversation completed, re-enabling wake word detection
08-29 16:57:38.263 19368 19368 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
08-29 16:57:38.263 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 16:57:38.263 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.hightowerai.MobileJarvisNative
08-29 16:57:38.266 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
08-29 16:57:38.266 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.hightowerai.MobileJarvisNative.RESUME_WAKE_WORD
08-29 16:57:38.266 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.hightowerai.MobileJarvisNative
08-29 16:57:38.266 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
08-29 16:57:38.266 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
08-29 16:57:38.266 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1756504658266
08-29 16:57:38.266 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
08-29 16:57:38.266 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...
08-29 16:57:38.270 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Juniper'
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Detection state variables reset
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Resume cooldown active for 2000ms to prevent false detections
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: AudioRecord and recording thread already active
08-29 16:57:38.394 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.05
08-29 16:57:38.396 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
08-29 16:57:38.396 19368 19368 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
08-29 16:57:38.396 19368 19368 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
08-29 16:57:38.663 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Service class: com.hightowerai.MobileJarvisNative.wakeword.WakeWordService
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1756504658664
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-29 16:57:38.664 19368 19566 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-29 16:57:38.665 19368 19566 D WakeWordModule: Set wake_word_enabled preference to true
08-29 16:57:38.665 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-29 16:57:38.665 19368 19566 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-29 16:57:38.763 19368 19368 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SET SELECTED WAKE WORD ==========
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: setSelectedWakeWord called from React Native
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Timestamp: 1756504659676
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Thread: mqt_native_modules
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Parameter received: 'Juniper' (type: String)
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VALIDATING WAKE WORD ==========
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Available wake words: [Hey Jarvis, Hey Juni, Hey Juniper, Juniper, Jarvis, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Jasmine, Hey, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Checking if 'Juniper' is valid...
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word 'Juniper' is valid
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SAVING TO SHARED PREFERENCES ==========
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Previous wake word: 'Juniper'
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: New wake word: 'Juniper'
08-29 16:57:39.676 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ℹ️ Wake word unchanged, but saving anyway
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: SharedPreferences save took 0ms
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Save result: true
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== VERIFICATION ==========
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: Verified saved wake word: 'Juniper'
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ========== SUCCESS ==========
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word changed from 'Juniper' to 'Juniper'
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ✅ Wake word preference saved and verified successfully
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: ⚠️ Note: Service restart required for change to take effect
08-29 16:57:39.677 19368 19566 I WakeWordModule: 🎯 WAKEWORD_SELECTION: =============================================
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SET WAKE WORD SENSITIVITY ==========
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: setWakeWordSensitivity called from React Native
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Timestamp: 1756504659678
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Thread: mqt_native_modules
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Parameter received: 0.05 (type: float)
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Sensitivity percentage: 5%
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VALIDATING SENSITIVITY ==========
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Valid range: 0.0 - 1.0
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Received value: 0.05
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity value 0.05 is valid
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SAVING TO SHARED PREFERENCES ==========
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity: 0.05 (5%)
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: New sensitivity: 0.05 (5%)
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ℹ️ Sensitivity unchanged, but saving anyway
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: SharedPreferences save took 0ms
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Save result: true
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== VERIFICATION ==========
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: Verified saved sensitivity: 0.05 (5%)
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ========== SUCCESS ==========
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity changed from 0.05 (5%) to 0.05 (5%)
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity preference saved and verified successfully
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ⚠️ Note: Service restart required for change to take effect
08-29 16:57:39.678 19368 19566 I WakeWordModule: 🎚️ WAKEWORD_SENSITIVITY: ================================================
08-29 16:58:03.651 19368 20751 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 307 chunks in 30s (isPaused: false)
08-29 16:58:33.675 19368 20751 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 290 chunks in 30s (isPaused: false)
