07-25 11:05:08.281 10880 11256 W WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚠️ Medium confidence trigger ignored: 0.1481 (count: 1, need >0.7)
07-25 11:05:08.387 10880 11256 D OpenWakeWordEngine: 🎙️ AUDIO_PROC: High confidence detected: 0.993 (model: hey_jarvis)
07-25 11:05:08.387 10880 11256 W WakeWordService: 🚨 EMERGENCY: Suspiciously high confidence 0.99325824 - possible model error
07-25 11:05:08.495 10880 11256 D OpenWakeWordEngine: 🎙️ AUDIO_PROC: High confidence detected: 0.978 (model: hey_jarvis)
07-25 11:05:08.495 10880 11256 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.9783 (threshold: 0.1)
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Hey Juni' ACTIVATED ***
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: Time: 11:05:08.495
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.97832704
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.1
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1753459508495
07-25 11:05:08.505 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
07-25 11:05:08.505 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
07-25 11:05:08.505 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1753459508505
07-25 11:05:08.505 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: Action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 11:05:08.506 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Hey Juni'
07-25 11:05:08.506 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.97832704
07-25 11:05:08.508 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
07-25 11:05:08.508 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
07-25 11:05:08.508 10880 11256 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
07-25 11:05:08.508 10880 11256 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 11:05:08.508 10880 11256 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 11:05:08.508 10880 11256 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 11:05:08.514 10880 11256 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 11:05:08.514 10880 11256 I VoiceManager: Initializing OpenAI Whisper client
07-25 11:05:08.515 10880 11256 D VoiceManager: Whisper client initialized successfully
07-25 11:05:08.515 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
07-25 11:05:08.516 10880 10880 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-25 11:05:08.516 10880 11256 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
07-25 11:05:08.516 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
07-25 11:05:08.516 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1753459508516
07-25 11:05:08.516 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
07-25 11:05:08.516 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping recording thread...
07-25 11:05:08.516 10880 10880 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753459508516
07-25 11:05:08.516 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
07-25 11:05:08.516 10880 10880 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 11:05:08.516 10880 10880 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 11:05:08.517 10880 10880 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-25 11:05:08.523 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-25 11:05:08.524 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-25 11:05:08.524 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 11:05:08.495
07-25 11:05:08.524 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-25 11:05:08.524 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9783
07-25 11:05:08.524 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-25 11:05:08.525 10880 10880 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-25 11:05:08.529 10880 10880 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9783270359039307,"timestamp":1753459508495}
07-25 11:05:08.529 10880 10880 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-25 11:05:08.530 10880 10880 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-25 11:05:08.530 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-25 11:05:08.530 10880 10880 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-25 11:05:08.539 10880 10880 D VoiceManager: Deepgram client initialized for future use
07-25 11:05:08.539 10880 10880 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 11:05:08.539 10880 10880 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 11:05:08.541 10880 10880 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 11:05:08.541 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 11:05:08.543 10880 10880 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
07-25 11:05:08.550 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 11:05:08.550 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 11:05:08.550 10880 10880 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 11:05:08.550 10880 10880 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 11:05:08.551 10880 10880 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 11:05:08.552 10880 10880 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 11:05:08.552 10880 10880 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 11:05:08.563 10880 10880 I VoiceManager: SpeechRecognizer started listening.
07-25 11:05:08.578 10880 10880 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
07-25 11:05:08.595 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
07-25 11:05:08.596 10880 11256 E WakeWordService: ⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: null
07-25 11:05:08.596 10880 11256 E WakeWordService: java.lang.InterruptedException
07-25 11:05:08.596 10880 11256 E WakeWordService:       at java.lang.Object.wait(Native Method)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at java.lang.Object.wait(Object.java:405)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at java.lang.Thread.join(Thread.java:1531)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive(WakeWordService.kt:797)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected(WakeWordService.kt:705)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:607)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$2(WakeWordService.kt:494)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$m5tBsGI28oZjEBQcgc5hFS8MF8I(Unknown Source:0)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda0.run(Unknown Source:2)
07-25 11:05:08.596 10880 11256 E WakeWordService:       at java.lang.Thread.run(Thread.java:1012)
07-25 11:05:08.596 10880 11256 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1753459508541)
07-25 11:05:08.598 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
07-25 11:05:08.598 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
07-25 11:05:08.599 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: Auto-resume timer job created: StandaloneCoroutine{Active}@e8db70
07-25 11:05:08.599 10880 11256 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
07-25 11:05:08.599 10880 11256 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
07-25 11:05:08.601 10880 10880 I WakeWordService: ⏸️ PAUSE_RESUME: 🕐 Starting 2-minute auto-resume timer (coroutine: StandaloneCoroutine{Active}@e8db70)
07-25 11:05:08.661 10880 10880 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 11:05:08.661 10880 10880 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 11:05:08.662 10880 10880 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 11:05:08.662 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 11:05:08.772 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 11:05:08.772 10880 10880 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 11:05:08.772 10880 10880 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 11:05:08.773 10880 10880 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 11:05:08.773 10880 10880 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 11:05:08.773 10880 10880 I VoiceManager: SpeechRecognizer started listening.
07-25 11:05:08.805 10880 10880 E VoiceManager: Speech recognition error: Client error
07-25 11:05:08.809 10880 10880 D VoiceManager: Ready for speech
07-25 11:05:11.400 10880 10880 D VoiceManager: Beginning of speech
07-25 11:05:11.579 10880 10880 D VoiceManager: Partial results: ''
07-25 11:05:11.760 10880 10880 D VoiceManager: Partial results: ''
07-25 11:05:12.121 10880 10880 D VoiceManager: Partial results: 'how are'
07-25 11:05:12.253 10880 10880 D VoiceManager: Partial results: 'how are you'
07-25 11:05:12.484 10880 10880 D VoiceManager: End of speech
07-25 11:05:12.497 10880 10880 D VoiceManager: Speech recognition results received: 1 matches
07-25 11:05:12.497 10880 10880 D VoiceManager: Match 0: 'how are you'
07-25 11:05:12.498 10880 10880 I VoiceManager: Speech recognized: 'how are you'
07-25 11:05:12.498 10880 10880 I VoiceManager: Speech recognized: "how are you"
07-25 11:05:12.498 10880 10880 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 11:05:12.505 10880 10880 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 11:05:12.505 10880 10880 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 11:05:12.506 10880 10880 I VoiceManager: Speech recognition completed successfully, processing command
07-25 11:05:12.506 10880 10880 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 11:05:12.508 10880 10880 D VoiceManager: Starting API processing for recognized text
07-25 11:05:12.508 10880 10880 D VoiceManager: Sending text to voice processor for processing
07-25 11:05:12.509 10880 10880 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 11:05:12.516 10880 10880 E VoiceManager: Speech recognition error: Client error
07-25 11:05:12.516 10880 10880 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 11:05:12.516 10880 10880 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753459508662)
07-25 11:06:58.090 10880 10880 I WakeWordService: 🧹 CLEANUP: Cancelling service scope and all running coroutines...
07-25 11:06:58.092 10880 10880 I WakeWordService: 🧹 CLEANUP: ✅ All coroutines cancelled successfully
07-25 11:06:58.092 10880 10880 D OpenWakeWordEngine: Cleaning up OpenWakeWord engine...
07-25 11:06:58.100 10880 10880 D OpenWakeWordEngine: OpenWakeWord engine cleaned up and singleton instance reset
07-25 11:06:58.100 10880 10880 I WakeWordService: 🧹 CLEANUP: OpenWakeWordEngine singleton reset during cleanup
07-25 11:06:58.100 10880 10880 D WakeWordService: Unregistered pause/resume broadcast receiver
07-25 11:06:58.100 10880 10880 I WakeWordService: Service destroyed
07-25 11:06:58.104 10880 10880 E WakeWordService: Error in voice state monitoring
07-25 11:06:58.104 10880 10880 E WakeWordService: kotlinx.coroutines.JobCancellationException: StandaloneCoroutine was cancelled; job=StandaloneCoroutine{Cancelling}@683ce70
07-25 11:06:58.105 10880 10880 E WakeWordService: ⏸️ PAUSE_RESUME: ❌ Error in auto-resume timer: Job was cancelled
07-25 11:06:58.105 10880 10880 E WakeWordService: kotlinx.coroutines.JobCancellationException: Job was cancelled; job=SupervisorJobImpl{Cancelling}@cfb226e
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753459622691
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 11:07:02.691 10880 11093 D WakeWordModule: Set wake_word_enabled preference to true
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Creating service intent for class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Starting service...
07-25 11:07:02.691 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Using startForegroundService() for Android O+
07-25 11:07:02.693 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ Service start command sent successfully
07-25 11:07:02.693 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ Wake word detection started successfully
07-25 11:07:02.693 10880 11093 I WakeWordModule: 🚀 START_DETECTION: =====================================================
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753459622694
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 11:07:02.694 10880 11093 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 11:07:02.694 10880 11093 D WakeWordModule: Set wake_word_enabled preference to true
07-25 11:07:02.695 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 11:07:02.695 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 11:07:02.701 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: ========== WAKE WORD SERVICE CREATED ==========
07-25 11:07:02.702 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Cleaning up any stale state from previous instance...
07-25 11:07:02.702 10880 10880 W WakeWordService: 🚀 SERVICE_LIFECYCLE: ⚠️ Previous service instance found - cleaning up...
07-25 11:07:02.702 10880 10880 I WakeWordService: 🧹 CLEANUP: Cancelling service scope and all running coroutines...
07-25 11:07:02.702 10880 10880 I WakeWordService: 🧹 CLEANUP: ✅ All coroutines cancelled successfully
07-25 11:07:02.702 10880 10880 I WakeWordService: 🧹 CLEANUP: OpenWakeWordEngine singleton reset during cleanup
07-25 11:07:02.702 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: OpenWakeWordEngine singleton reset on service creation
07-25 11:07:02.702 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Fresh service scope initialized
07-25 11:07:02.703 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Starting foreground service...
07-25 11:07:02.704 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Registering broadcast receivers...
07-25 11:07:02.705 10880 10880 D WakeWordService: Registered pause/resume broadcast receiver
07-25 11:07:02.705 10880 10880 I WakeWordService: 🚀 SERVICE_LIFECYCLE: =====================================================
07-25 11:07:02.706 10880 10880 I WakeWordService: Service onStartCommand called (WakeWordService)
07-25 11:07:02.713 10880 10880 D WakeWordService: Foreground service started with notification
07-25 11:07:02.715 10880 10880 D WakeWordService: Foreground service started with notification
07-25 11:07:02.721 10880 11049 I WakeWordService: Entered initializeService()
07-25 11:07:02.722 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: ========== CHECKING OPENWAKEWORD ENGINE ==========
07-25 11:07:02.722 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: Getting OpenWakeWord engine instance...
07-25 11:07:02.722 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine instance obtained
07-25 11:07:02.722 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: Initializing engine...
07-25 11:07:02.722 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ========== INITIALIZING OPENWAKEWORD ENGINE ==========
07-25 11:07:02.722 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Starting ONNX Runtime initialization...
07-25 11:07:02.722 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Loading base models (mel + embedding)...
07-25 11:07:02.722 10880 11049 D OpenWakeWordEngine: ONNX Runtime environment initialized
07-25 11:07:02.722 10880 11049 D OpenWakeWordEngine: 🔧 STEP 1: Loading melspectrogram.onnx model...
07-25 11:07:02.731 10880 11049 D OpenWakeWordEngine: Loaded model models/melspectrogram.onnx (1087958 bytes)
07-25 11:07:02.731 10880 11049 D OpenWakeWordEngine: 📊 Mel model size: 1087958 bytes
07-25 11:07:02.731 10880 11049 D OpenWakeWordEngine: 🔧 STEP 2: Creating ONNX session for mel spectrogram...
07-25 11:07:02.743 10880 11049 D OpenWakeWordEngine: ✅ STEP 2 COMPLETE: Mel spectrogram session created successfully!
07-25 11:07:02.743 10880 11049 D OpenWakeWordEngine: Mel model - Input names: [input]
07-25 11:07:02.743 10880 11049 D OpenWakeWordEngine: Mel model - Output names: [output]
07-25 11:07:02.743 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== Mel MODEL TENSOR SHAPES ==========
07-25 11:07:02.743 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
07-25 11:07:02.743 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'input': info available=true
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output 'output': info available=true
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating Mel tensor shapes...
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Mel model expects:
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, audio_samples] - variable audio length
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 1, mel_bins, time_frames] - produces mel spectrogram
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for Mel
07-25 11:07:02.744 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
07-25 11:07:02.744 10880 11049 D OpenWakeWordEngine: ✅ Mel spectrogram model fully initialized
07-25 11:07:02.744 10880 11049 D OpenWakeWordEngine: 🔧 STEP 3: Loading embedding_model.onnx...
07-25 11:07:02.756 10880 11049 D OpenWakeWordEngine: Loaded model models/embedding_model.onnx (1326578 bytes)
07-25 11:07:02.756 10880 11049 D OpenWakeWordEngine: 📊 Embedding model size: 1326578 bytes
07-25 11:07:02.779 10880 11049 D OpenWakeWordEngine: ✅ STEP 3 COMPLETE: Embedding session created successfully!
07-25 11:07:02.779 10880 11049 D OpenWakeWordEngine: Embedding model - Input names: [input_1]
07-25 11:07:02.779 10880 11049 D OpenWakeWordEngine: Embedding model - Output names: [conv2d_19]
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== Embedding MODEL TENSOR SHAPES ==========
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'input_1': info available=true
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output 'conv2d_19': info available=true
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating Embedding tensor shapes...
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Embedding model expects:
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, 76, 32, 1] - fixed size mel spectrogram
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 16, 96] - 16 sequences × 96 features = 1536 total
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for Embedding
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
07-25 11:07:02.779 10880 11049 D OpenWakeWordEngine: ✅ All base ONNX models loaded successfully
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ Base models loaded successfully
07-25 11:07:02.779 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Loading default wake word model: 'hey_jarvis'
07-25 11:07:02.779 10880 11049 D OpenWakeWordEngine: Loading wake word model: hey_jarvis_v0.1.onnx
07-25 11:07:02.791 10880 11049 D OpenWakeWordEngine: Loaded model models/hey_jarvis_v0.1.onnx (1271370 bytes)
07-25 11:07:02.792 10880 11049 D OpenWakeWordEngine: Wake word model size: 1271370 bytes
07-25 11:07:02.815 10880 11049 D OpenWakeWordEngine: Wake word ONNX session created successfully
07-25 11:07:02.815 10880 11049 D OpenWakeWordEngine: Wake word model - Input names: [x.1]
07-25 11:07:02.815 10880 11049 D OpenWakeWordEngine: Wake word model - Output names: [53]
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== WakeWord (hey_jarvis) MODEL TENSOR SHAPES ==========
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'x.1': info available=true
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output '53': info available=true
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating WakeWord (hey_jarvis) tensor shapes...
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Wake word model expects:
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, 16, 96] - embeddings from embedding model
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 1] or [1] - confidence score
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for WakeWord (hey_jarvis)
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
07-25 11:07:02.815 10880 11049 D OpenWakeWordEngine: Wake word model 'hey_jarvis' loaded successfully
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ Wake word model loaded successfully
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ OpenWakeWord engine initialized successfully
07-25 11:07:02.815 10880 11049 I OpenWakeWordEngine: 🚀 ENGINE_INIT: =====================================================
07-25 11:07:02.815 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine initialization successful
07-25 11:07:02.815 10880 11049 I WakeWordService: 🤖 ENGINE_CHECK: ====================================================
07-25 11:07:02.815 10880 11049 I WakeWordService: 🎯 WAKEWORD_INIT: ========== INITIALIZING WAKE WORD DETECTION ==========
07-25 11:07:02.815 10880 11049 I WakeWordService: 🎯 WAKEWORD_INIT: Service running: true, isRunning: true
07-25 11:07:02.815 10880 11049 I WakeWordService: 🎯 WAKEWORD_SETUP: ======= Wake Word Configuration =======
07-25 11:07:02.815 10880 11049 I WakeWordService: 🎯 WAKEWORD_SETUP: Selected wake word: 'Hey Juni'
07-25 11:07:02.816 10880 11049 I WakeWordService: 🎯 WAKEWORD_SETUP: Threshold: 0.1
07-25 11:07:02.816 10880 10880 I WakeWordService: Initial voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$PROCESSING@630be56
07-25 11:07:02.816 10880 11049 I WakeWordService: 🎯 WAKEWORD_SETUP: Available wake words: [Hey Jarvis, Hey Juni, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Alexa, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
07-25 11:07:02.816 10880 11049 I WakeWordService: 🎯 WAKEWORD_SETUP: =======================================
07-25 11:07:02.816 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: ========== CHANGING WAKE PHRASE ==========
07-25 11:07:02.816 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Requested phrase: 'Hey Juni'
07-25 11:07:02.816 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Mapped to model: 'hey_jarvis'
07-25 11:07:02.816 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Current model: 'hey_jarvis'
07-25 11:07:02.816 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: ℹ️ No model switch needed - already using 'hey_jarvis'
07-25 11:07:02.817 10880 11049 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: =============================================
07-25 11:07:02.817 10880 11049 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
07-25 11:07:02.822 10880 11049 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
07-25 11:07:02.822 10880 11049 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
07-25 11:07:02.861 10880 11049 D WakeWordService: Audio recording started successfully
07-25 11:07:02.861 10880 11049 I WakeWordService: 🎯 WAKEWORD_INIT: Wake word detection initial state: isPaused = false
07-25 11:07:02.861 10880 11049 I WakeWordService: 🎯 WAKEWORD_INIT: Service starting in resumed state
07-25 11:07:02.861 10880 11049 I WakeWordService: ✅ WAKEWORD_INIT: Wake word detection initialized and ready ✅
07-25 11:07:02.861 10880 11049 I WakeWordService: 🎯 WAKEWORD_INIT: ====================================================
07-25 11:07:02.862 10880 12230 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
07-25 11:07:02.862 10880 12230 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
07-25 11:07:02.862 10880 12230 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
07-25 11:07:02.862 10880 12230 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.1
07-25 11:07:02.862 10880 12230 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753459622983
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 11:07:02.983 10880 11093 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 11:07:02.984 10880 11093 D WakeWordModule: Set wake_word_enabled preference to true
07-25 11:07:02.984 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 11:07:02.984 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 11:07:03.709 10880 11093 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
07-25 11:07:03.711 10880 11093 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
07-25 11:07:03.997 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 11:07:03.997 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 11:07:03.997 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753459623997
07-25 11:07:03.997 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 11:07:03.998 10880 11093 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 11:07:03.998 10880 11093 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 11:07:03.998 10880 11093 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 11:07:03.998 10880 11093 D WakeWordModule: Set wake_word_enabled preference to true
07-25 11:07:03.998 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 11:07:03.998 10880 11093 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 11:07:05.827 10880 10880 I WakeWordService: Pausing wake word detection during conversation
07-25 11:07:32.915 10880 12230 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 374 chunks in 30s (isPaused: true)
