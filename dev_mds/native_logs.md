07-24 06:47:06.039 28895 29263 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 06:47:06.040 28895 29263 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 06:47:06.040 28895 29263 D VoiceManager: Wake word detected, immediately stopping wake word detection
07-24 06:47:06.052 28895 28895 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 06:47:06.052 28895 28895 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753357626052
07-24 06:47:06.052 28895 28895 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 06:47:06.052 28895 28895 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 06:47:06.052 28895 28895 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 06:47:06.052 28895 29263 D VoiceManager: Releasing wake word audio focus to make way for speech recognition
07-24 06:47:06.052 28895 29263 D AudioManager: 🎵 Audio focus release requested for ID: wake_word_detection
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 06:47:06.029
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.8213
07-24 06:47:06.054 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 06:47:06.054 28895 29263 D AudioManager: 🎵 Audio focus released for BACKGROUND_AUDIO (ID: wake_word_detection)
07-24 06:47:06.054 28895 28895 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 06:47:06.055 28895 28895 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.8213198184967041,"timestamp":1753357626029}
07-24 06:47:06.055 28895 28895 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 06:47:06.056 28895 28895 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 06:47:06.056 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 06:47:06.056 28895 28895 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 06:47:06.056 28895 28895 D AudioManager: 🎵 No more requests in queue
07-24 06:47:06.060 28895 29263 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 06:47:06.060 28895 29263 I VoiceManager: Initializing OpenAI Whisper client
07-24 06:47:06.066 28895 29263 D VoiceManager: Whisper client initialized successfully
07-24 06:47:06.066 28895 29263 D VoiceManager: Adding 300ms delay before starting speech recognition to avoid conflicts
07-24 06:47:06.369 28895 28895 D VoiceManager: Delay completed, starting speech recognition
07-24 06:47:06.369 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 06:47:06.369 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 06:47:06.369 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 06:47:06.369 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 06:47:06.369 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@26c7d7e
07-24 06:47:06.370 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 06:47:06.370 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 06:47:06.370 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 06:47:06.371 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 06:47:06.371 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 06:47:06.371 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 06:47:06.371 28895 28895 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 06:47:06.371 28895 28895 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 06:47:06.372 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 06:47:06.373 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 06:47:06.373 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 06:47:06.375 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available speech recognition services: 1
07-24 06:47:06.375 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Service: com.google.android.tts:com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 06:47:06.377 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 06:47:06.397 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 06:47:06.398 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 06:47:06.398 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.MAX_RESULTS=1}]
07-24 06:47:06.398 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Checking current audio focus state...
07-24 06:47:06.398 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current audio focus holder: None
07-24 06:47:06.398 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current request ID: None
07-24 06:47:06.402 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition at 1753357626402...
07-24 06:47:06.403 28895 28895 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition)
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== REQUESTING AUDIO FOCUS ===========
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request timestamp: 1753357626403
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus gain type: 1
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Audio usage: 2
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Content type: 1
07-24 06:47:06.403 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: About to call requestAudioFocus() on Android AudioManager
07-24 06:47:06.405 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request completed in 2ms
07-24 06:47:06.405 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Result: 1 (granted=true)
07-24 06:47:06.405 28895 28895 I AudioManager: 🎵 Audio focus granted for SPEECH_RECOGNITION (ID: speech_recognition) at 1753357626405
07-24 06:47:06.406 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753357626405 (3ms after request)
07-24 06:47:06.406 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 06:47:06.406 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus request result: true
07-24 06:47:06.406 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Post-request audio focus verification: true
07-24 06:47:06.406 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is transient at verification: false
07-24 06:47:06.407 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Adding 50ms stabilization delay for audio focus
07-24 06:47:06.457 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final focus check after stabilization - focus: true, transient: false
07-24 06:47:06.457 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753357626457
07-24 06:47:06.465 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 06:47:06.465 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 06:47:06.491 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Critical 90ms window - focus still held at 86ms
07-24 06:47:06.538 28895 28895 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@cde8501com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43be266
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 136ms after request
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753357626539
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_LOSS_TRANSIENT (-2)
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 06:47:06.539 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 06:47:06.541 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: GAINED
07-24 06:47:06.541 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 06:47:06.541 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 06:47:06.542 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 06:47:06.542 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 06:47:06.542 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 06:47:06.542 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 06:47:06.543 28895 28895 W AudioManager: 🔥 Audio focus LOST_TRANSIENT at 1753357626539
07-24 06:47:06.543 28895 28895 I AudioManager: 🔄 TRANSIENT_RECOVERY: Starting grace period (1000ms) for focus recovery
07-24 06:47:06.581 28895 28895 I AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus still held after 100ms for SPEECH_RECOGNITION
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech at 1753357626627
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time since start: 170ms
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state when ready: true
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is in transient loss: true (88ms)
07-24 06:47:06.627 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is transient (88ms) - continuing with recognition
07-24 06:47:06.627 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: Transient loss duration acceptable (88ms < 800ms), proceeding
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753357626627
07-24 06:47:06.627 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: 170ms
07-24 06:47:06.629 28895 28895 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 06:47:06.629 28895 28895 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 06:47:06.715 28895 28895 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 06:47:06.715 28895 28895 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 88ms after ready
07-24 06:47:06.721 28895 28895 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 94ms after ready
07-24 06:47:06.814 28895 28895 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 187ms after ready
07-24 06:47:06.819 28895 28895 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 192ms after ready
07-24 06:47:06.916 28895 28895 I VoiceManager: 🔥 READY_FOCUS_DEBUG: Completed 250ms ready monitoring - focus retained
07-24 06:47:07.545 28895 28895 W AudioManager: 🔄 TRANSIENT_RECOVERY: Grace period expired after 1006ms - treating as permanent loss
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: ========== AUDIO FOCUS STOLEN ===========
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Focus lost at 1753357627545
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Time since request: 1143ms
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Thread: main
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@7294e54
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Speech recognizer listening: true
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Call stack when focus lost:
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [2] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:447
07-24 06:47:07.545 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [3] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:404
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager$handleAudioFocusChange$2.invokeSuspend:336
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [5] kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith:33
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [6] kotlinx.coroutines.DispatchedTaskKt.resume:235
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [7] kotlinx.coroutines.DispatchedTaskKt.dispatch:168
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: =============================================
07-24 06:47:07.546 28895 28895 W VoiceManager: 🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition
07-24 06:47:07.546 28895 28895 W VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is permanent - stopping immediately
07-24 06:47:07.546 28895 28895 W VoiceManager: 🔥 LISTENING_FOCUS_DEBUG: Focus lost 919ms into listening session
07-24 06:47:07.546 28895 28895 D AudioManager: 🎵 No more requests in queue
07-24 06:47:07.558 28895 28895 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@cde8501com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43be266
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 1155ms after request
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753357627558
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_GAIN (1)
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: LOST_TRANSIENT
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 06:47:07.558 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 06:47:07.559 28895 28895 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 06:47:07.559 28895 28895 I AudioManager: 🎵 Audio focus GAINED at 1753357627558
07-24 06:47:07.559 28895 28895 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753357627559 (1157ms after request)
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 1014ms
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: ERROR
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: true
07-24 06:47:07.641 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 06:47:07.648 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 06:47:07.652 28895 28895 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 06:47:07.652 28895 28895 W VoiceManager: 🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current retry count: 0
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Max retries allowed: 1
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current voice state: ERROR
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio focus state: true
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: true
07-24 06:47:07.652 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Is listening flag: false
07-24 06:47:07.653 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 06:47:07.655 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 06:47:07.655 28895 28895 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Thread: main
07-24 06:47:07.655 28895 28895 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-24 06:47:07.655 28895 28895 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-24 06:47:07.659 28895 28895 D VoiceManager: Will reset to idle after 500 ms
07-24 06:47:07.781 28895 28895 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 06:47:08.179 28895 28895 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-24 06:47:08.180 28895 28895 D VoiceManager: Conversation completed, re-enabling wake word detection
07-24 06:47:08.397 28895 28895 D VoiceManager: Wake word detection re-enabled after cleanup delay
^C
(base) cameronhightower@MacBookAir MobileJarvisNative % 