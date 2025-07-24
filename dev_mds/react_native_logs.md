--------- beginning of main
07-24 04:37:48.382 20945 21143 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 04:37:48.382 20945 21143 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 04:37:48.382 20945 21143 D VoiceManager: Wake word detected, immediately stopping wake word detection
07-24 04:37:48.384 20945 21143 D VoiceManager: Releasing wake word audio focus to make way for speech recognition
07-24 04:37:48.384 20945 21143 D AudioManager: 🎵 Audio focus release requested for ID: wake_word_detection
07-24 04:37:48.386 20945 21143 D AudioManager: 🎵 Audio focus released for BACKGROUND_AUDIO (ID: wake_word_detection)
07-24 04:37:48.388 20945 21143 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 04:37:48.388 20945 21143 I VoiceManager: Initializing OpenAI Whisper client
07-24 04:37:48.389 20945 21143 D VoiceManager: Whisper client initialized successfully
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: Thread-15
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: false
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@c8bcb22
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:37:48.389 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 04:37:48.390 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:37:48.390 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: startListening called from background thread, posting to main thread
07-24 04:37:48.392 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 04:37:48.393 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753349868393
07-24 04:37:48.393 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:37:48.393 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:37:48.393 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 04:37:48.369
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9768
07-24 04:37:48.395 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 04:37:48.395 20945 20945 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 04:37:48.395 20945 20945 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9767802357673645,"timestamp":1753349868369}
07-24 04:37:48.395 20945 20945 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 04:37:48.396 20945 20945 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 04:37:48.396 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 04:37:48.396 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 04:37:48.396 20945 20945 D AudioManager: 🎵 No more requests in queue
07-24 04:37:48.396 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:37:48.396 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 04:37:48.396 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 04:37:48.396 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:37:48.396 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@c8bcb22
07-24 04:37:48.397 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:37:48.397 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:37:48.397 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 04:37:48.398 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:37:48.398 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 04:37:48.398 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 04:37:48.398 20945 20945 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 04:37:48.398 20945 20945 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 04:37:48.399 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 04:37:48.399 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 04:37:48.401 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available speech recognition services: 1
07-24 04:37:48.401 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Service: com.google.android.tts:com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 04:37:48.406 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:48.427 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:48.427 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 04:37:48.428 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.MAX_RESULTS=1}]
07-24 04:37:48.428 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Checking current audio focus state...
07-24 04:37:48.428 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current audio focus holder: None
07-24 04:37:48.428 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current request ID: None
07-24 04:37:48.428 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition at 1753349868428...
07-24 04:37:48.429 20945 20945 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition)
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== REQUESTING AUDIO FOCUS ===========
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request timestamp: 1753349868429
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus gain type: 4
07-24 04:37:48.429 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Audio usage: 2
07-24 04:37:48.430 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Content type: 1
07-24 04:37:48.430 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: About to call requestAudioFocus() on Android AudioManager
07-24 04:37:48.432 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request completed in 3ms
07-24 04:37:48.432 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Result: 1 (granted=true)
07-24 04:37:48.432 20945 20945 I AudioManager: 🎵 Audio focus granted for SPEECH_RECOGNITION (ID: speech_recognition) at 1753349868432
07-24 04:37:48.433 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753349868433 (5ms after request)
07-24 04:37:48.434 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:37:48.434 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus request result: true
07-24 04:37:48.434 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Post-request audio focus verification: true
07-24 04:37:48.434 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is transient at verification: false
07-24 04:37:48.434 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Adding 50ms stabilization delay for audio focus
07-24 04:37:48.485 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final focus check after stabilization - focus: true, transient: false
07-24 04:37:48.485 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753349868485
07-24 04:37:48.488 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 04:37:48.489 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 04:37:48.616 20945 20945 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@9ecd701com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 187ms after request
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753349868617
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_LOSS_TRANSIENT (-2)
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: GAINED
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:48.617 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:37:48.618 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:37:48.619 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:37:48.619 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:37:48.619 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:37:48.619 20945 20945 W AudioManager: 🔥 Audio focus LOST_TRANSIENT at 1753349868617
07-24 04:37:48.619 20945 20945 I AudioManager: 🔄 TRANSIENT_RECOVERY: Starting grace period (1000ms) for focus recovery
07-24 04:37:48.627 20945 20945 I AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus still held after 100ms for SPEECH_RECOGNITION
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech at 1753349868747
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time since start: 262ms
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state when ready: true
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is in transient loss: true (130ms)
07-24 04:37:48.747 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is transient (130ms) - continuing with recognition
07-24 04:37:48.747 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Transient loss duration acceptable (130ms < 800ms), proceeding
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753349868747
07-24 04:37:48.747 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: 262ms
07-24 04:37:48.751 20945 20945 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 04:37:48.767 20945 20945 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 04:37:48.767 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 04:37:48.837 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 90ms after ready
07-24 04:37:48.933 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 186ms after ready
07-24 04:37:48.939 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 192ms after ready
07-24 04:37:48.947 20945 20945 D VoiceManager: 🔥 LISTENING_FOCUS_DEBUG: Still listening at 200ms mark
07-24 04:37:49.065 20945 20945 I VoiceManager: 🔥 READY_FOCUS_DEBUG: Completed 250ms ready monitoring - focus retained
07-24 04:37:49.621 20945 20945 W AudioManager: 🔄 TRANSIENT_RECOVERY: Grace period expired after 1004ms - treating as permanent loss
07-24 04:37:49.621 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: ========== AUDIO FOCUS STOLEN ===========
07-24 04:37:49.621 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Focus lost at 1753349869621
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Time since request: 1193ms
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Thread: main
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@3dd1585
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Speech recognizer listening: true
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Call stack when focus lost:
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [2] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:426
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [3] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:383
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager$handleAudioFocusChange$2.invokeSuspend:336
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [5] kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith:33
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [6] kotlinx.coroutines.DispatchedTaskKt.resume:235
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [7] kotlinx.coroutines.DispatchedTaskKt.dispatch:168
07-24 04:37:49.622 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: =============================================
07-24 04:37:49.622 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition
07-24 04:37:49.622 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is permanent - stopping immediately
07-24 04:37:49.623 20945 20945 D AudioManager: 🎵 No more requests in queue
07-24 04:37:49.628 20945 20945 W VoiceManager: 🔥 LISTENING_FOCUS_DEBUG: Focus lost 881ms into listening session
07-24 04:37:49.632 20945 20945 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@9ecd701com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 1203ms after request
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753349869632
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_GAIN (1)
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: LOST_TRANSIENT
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:37:49.632 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:37:49.633 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:37:49.633 20945 20945 I AudioManager: 🎵 Audio focus GAINED at 1753349869632
07-24 04:37:49.633 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753349869633 (1205ms after request)
07-24 04:37:49.710 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 04:37:49.710 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 04:37:49.710 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 04:37:49.710 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 963ms
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: ERROR
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: true
07-24 04:37:49.711 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 04:37:49.718 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:49.724 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:49.724 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current retry count: 0
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Max retries allowed: 1
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current voice state: ERROR
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio focus state: true
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: true
07-24 04:37:49.724 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Is listening flag: false
07-24 04:37:49.725 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:49.726 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:49.726 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Thread: main
07-24 04:37:49.726 20945 20945 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-24 04:37:49.726 20945 20945 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-24 04:37:49.733 20945 20945 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Passed 100ms mark - focus still held
07-24 04:37:49.741 20945 20945 D VoiceManager: Will reset to idle after 500 ms
07-24 04:37:49.923 20945 20945 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 04:37:50.251 20945 20945 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-24 04:37:50.252 20945 20945 D VoiceManager: Conversation completed, re-enabling wake word detection
07-24 04:37:50.455 20945 20945 D VoiceManager: Wake word detection re-enabled after cleanup delay
07-24 04:37:51.564 20945 21143 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 04:37:51.565 20945 21143 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 04:37:51.565 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 04:37:51.565 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753349871565
07-24 04:37:51.565 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:37:51.565 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:37:51.565 20945 20945 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 04:37:51.565 20945 21143 D VoiceManager: Wake word detected, immediately stopping wake word detection
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 04:37:51.563
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 04:37:51.567 20945 21143 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 04:37:51.567 20945 21143 I VoiceManager: Initializing OpenAI Whisper client
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9879
07-24 04:37:51.567 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 04:37:51.568 20945 20945 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 04:37:51.568 20945 20945 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9879136085510254,"timestamp":1753349871563}
07-24 04:37:51.568 20945 20945 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 04:37:51.568 20945 21143 D VoiceManager: Whisper client initialized successfully
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: Thread-15
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: false
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@c8bcb22
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:37:51.568 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 04:37:51.569 20945 20945 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 04:37:51.569 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 04:37:51.569 20945 20945 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 04:37:51.570 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:37:51.570 20945 21143 D VoiceManager: 🎤 SPEECH_RECOGNITION: startListening called from background thread, posting to main thread
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@c8bcb22
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:37:51.574 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 04:37:51.575 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:37:51.576 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 04:37:51.576 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 04:37:51.576 20945 20945 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 04:37:51.576 20945 20945 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 04:37:51.577 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 04:37:51.577 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 04:37:51.578 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available speech recognition services: 1
07-24 04:37:51.578 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Service: com.google.android.tts:com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.MAX_RESULTS=1}]
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Checking current audio focus state...
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current audio focus holder: SPEECH_RECOGNITION
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current request ID: speech_recognition
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition focus already active, no need to release
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition at 1753349871580...
07-24 04:37:51.580 20945 20945 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition)
07-24 04:37:51.580 20945 20945 D AudioManager: 🎵 Duplicate request ignored: SPEECH_RECOGNITION (ID: speech_recognition)
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus request result: true
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Post-request audio focus verification: true
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is transient at verification: false
07-24 04:37:51.580 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Adding 50ms stabilization delay for audio focus
07-24 04:37:51.631 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final focus check after stabilization - focus: true, transient: false
07-24 04:37:51.631 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753349871631
07-24 04:37:51.631 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 04:37:51.631 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 04:37:51.672 20945 20945 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@9ecd701com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-24 04:37:51.672 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 3243ms after request
07-24 04:37:51.672 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:37:51.672 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753349871672
07-24 04:37:51.672 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_LOSS_TRANSIENT (-2)
07-24 04:37:51.672 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: GAINED
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:37:51.673 20945 20945 W AudioManager: 🔥 Audio focus LOST_TRANSIENT at 1753349871672
07-24 04:37:51.673 20945 20945 I AudioManager: 🔄 TRANSIENT_RECOVERY: Starting grace period (1000ms) for focus recovery
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech at 1753349871770
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time since start: 139ms
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state when ready: true
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is in transient loss: true (98ms)
07-24 04:37:51.770 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is transient (98ms) - continuing with recognition
07-24 04:37:51.770 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: Transient loss duration acceptable (98ms < 800ms), proceeding
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753349871770
07-24 04:37:51.770 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: 139ms
07-24 04:37:51.785 20945 20945 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 04:37:51.785 20945 20945 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 04:37:51.856 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 86ms after ready
07-24 04:37:51.864 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 94ms after ready
07-24 04:37:51.960 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 190ms after ready
07-24 04:37:51.964 20945 20945 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Extended window - 194ms after ready
07-24 04:37:52.068 20945 20945 I VoiceManager: 🔥 READY_FOCUS_DEBUG: Completed 250ms ready monitoring - focus retained
07-24 04:37:52.680 20945 20945 W AudioManager: 🔄 TRANSIENT_RECOVERY: Grace period expired after 1008ms - treating as permanent loss
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: ========== AUDIO FOCUS STOLEN ===========
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Focus lost at 1753349872681
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Time since request: 4253ms
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Thread: main
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@3dd1585
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Speech recognizer listening: true
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Call stack when focus lost:
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [2] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:426
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [3] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:383
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager$handleAudioFocusChange$2.invokeSuspend:336
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [5] kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith:33
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [6] kotlinx.coroutines.DispatchedTaskKt.resume:235
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [7] kotlinx.coroutines.DispatchedTaskKt.dispatch:168
07-24 04:37:52.681 20945 20945 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: =============================================
07-24 04:37:52.681 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition
07-24 04:37:52.681 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is permanent - stopping immediately
07-24 04:37:52.682 20945 20945 D AudioManager: 🎵 No more requests in queue
07-24 04:37:52.687 20945 20945 W VoiceManager: 🔥 LISTENING_FOCUS_DEBUG: Focus lost 917ms into listening session
07-24 04:37:52.694 20945 20945 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@9ecd701com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 4265ms after request
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753349872695
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_GAIN (1)
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: LOST_TRANSIENT
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:37:52.695 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:37:52.696 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:37:52.696 20945 20945 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:37:52.696 20945 20945 I AudioManager: 🎵 Audio focus GAINED at 1753349872695
07-24 04:37:52.696 20945 20945 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753349872696 (4268ms after request)
07-24 04:37:52.786 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 04:37:52.786 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 04:37:52.786 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 04:37:52.786 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 1016ms
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: ERROR
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: true
07-24 04:37:52.787 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 04:37:52.795 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:52.796 20945 20945 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:52.796 20945 20945 W VoiceManager: 🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current retry count: 0
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Max retries allowed: 1
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current voice state: ERROR
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio focus state: true
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: true
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Is listening flag: false
07-24 04:37:52.796 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:37:52.798 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:37:52.798 20945 20945 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Thread: main
07-24 04:37:52.798 20945 20945 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-24 04:37:52.798 20945 20945 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-24 04:37:52.802 20945 20945 D VoiceManager: Will reset to idle after 500 ms
07-24 04:37:52.920 20945 20945 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 04:37:53.303 20945 20945 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-24 04:37:53.303 20945 20945 D VoiceManager: Conversation completed, re-enabling wake word detection
07-24 04:37:53.509 20945 20945 D VoiceManager: Wake word detection re-enabled after cleanup delay
