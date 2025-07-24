--------- beginning of main
07-24 04:08:35.729 19005 19189 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 04:08:35.729 19005 19189 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 04:08:35.729 19005 19189 D VoiceManager: Wake word detected, immediately stopping wake word detection
07-24 04:08:35.730 19005 19189 D VoiceManager: Releasing wake word audio focus to make way for speech recognition
07-24 04:08:35.731 19005 19189 D AudioManager: 🎵 Audio focus release requested for ID: wake_word_detection
07-24 04:08:35.737 19005 19005 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 04:08:35.737 19005 19005 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753348115737
07-24 04:08:35.737 19005 19005 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:08:35.738 19005 19005 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 04:08:35.738 19005 19005 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 04:08:35.740 19005 19189 D AudioManager: 🎵 Audio focus released for BACKGROUND_AUDIO (ID: wake_word_detection)
07-24 04:08:35.742 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 04:08:35.742 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 04:08:35.742 19005 19189 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 04:08:35.742 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 04:08:35.719
07-24 04:08:35.743 19005 19189 I VoiceManager: Initializing OpenAI Whisper client
07-24 04:08:35.743 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 04:08:35.743 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9266
07-24 04:08:35.743 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 04:08:35.743 19005 19005 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 04:08:35.744 19005 19189 D VoiceManager: Whisper client initialized successfully
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: Thread-14
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: false
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@db609b3
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:08:35.744 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 04:08:35.746 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:08:35.746 19005 19189 D VoiceManager: 🎤 SPEECH_RECOGNITION: startListening called from background thread, posting to main thread
07-24 04:08:35.749 19005 19005 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9265767335891724,"timestamp":1753348115719}
07-24 04:08:35.749 19005 19005 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 04:08:35.750 19005 19005 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 04:08:35.750 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 04:08:35.750 19005 19005 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 04:08:35.752 19005 19005 D AudioManager: 🎵 No more requests in queue
07-24 04:08:35.752 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 04:08:35.752 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 04:08:35.752 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 04:08:35.752 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 04:08:35.753 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@db609b3
07-24 04:08:35.753 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 04:08:35.753 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 04:08:35.753 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 04:08:35.755 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 04:08:35.755 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 04:08:35.755 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 04:08:35.755 19005 19005 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 04:08:35.756 19005 19005 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 04:08:35.757 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 04:08:35.758 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 04:08:35.758 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 04:08:35.758 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 04:08:35.758 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 04:08:35.759 19005 19005 I VoiceManager: 🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 04:08:35.759 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 04:08:35.761 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available speech recognition services: 1
07-24 04:08:35.761 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Service: com.google.android.tts:com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 04:08:35.764 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:08:35.791 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:08:35.791 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 04:08:35.791 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.MAX_RESULTS=1}]
07-24 04:08:35.791 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Checking current audio focus state...
07-24 04:08:35.792 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current audio focus holder: None
07-24 04:08:35.792 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current request ID: None
07-24 04:08:35.792 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition at 1753348115792...
07-24 04:08:35.793 19005 19005 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition)
07-24 04:08:35.793 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== REQUESTING AUDIO FOCUS ===========
07-24 04:08:35.793 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request timestamp: 1753348115793
07-24 04:08:35.793 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:08:35.793 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:08:35.793 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus gain type: 4
07-24 04:08:35.794 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Audio usage: 2
07-24 04:08:35.794 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Content type: 1
07-24 04:08:35.794 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: About to call requestAudioFocus() on Android AudioManager
07-24 04:08:35.796 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request completed in 3ms
07-24 04:08:35.796 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Result: 1 (granted=true)
07-24 04:08:35.796 19005 19005 I AudioManager: 🎵 Audio focus granted for SPEECH_RECOGNITION (ID: speech_recognition) at 1753348115796
07-24 04:08:35.797 19005 19005 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753348115797 (5ms after request)
07-24 04:08:35.798 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:08:35.798 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus request result: true
07-24 04:08:35.798 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Post-request audio focus verification: true
07-24 04:08:35.798 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is transient at verification: false
07-24 04:08:35.798 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753348115798
07-24 04:08:35.806 19005 19005 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 04:08:35.806 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 04:08:35.885 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Critical 90ms window - focus still held at 87ms
07-24 04:08:35.942 19005 19005 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f2009a6com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e8db70
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 149ms after request
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753348115942
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_LOSS_TRANSIENT (-2)
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:08:35.942 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: GAINED
07-24 04:08:35.943 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:08:35.943 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:08:35.944 19005 19005 W AudioManager: 🔥 Audio focus LOST_TRANSIENT at 1753348115942
07-24 04:08:35.944 19005 19005 I AudioManager: 🔄 TRANSIENT_RECOVERY: Starting grace period (300ms) for focus recovery
07-24 04:08:35.950 19005 19005 I AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus still held after 100ms for SPEECH_RECOGNITION
07-24 04:08:36.090 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech at 1753348116090
07-24 04:08:36.090 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time since start: 292ms
07-24 04:08:36.090 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 04:08:36.091 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state when ready: true
07-24 04:08:36.091 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is in transient loss: true (148ms)
07-24 04:08:36.092 19005 19005 I VoiceManager: 🎤 SPEECH_RECOGNITION: Focus loss is transient (148ms) - continuing with recognition
07-24 04:08:36.093 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753348116092
07-24 04:08:36.093 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: 294ms
07-24 04:08:36.102 19005 19005 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 04:08:36.102 19005 19005 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 04:08:36.118 19005 19005 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 04:08:36.179 19005 19005 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Critical window - 89ms after ready
07-24 04:08:36.261 19005 19005 W AudioManager: 🔄 TRANSIENT_RECOVERY: Grace period expired after 319ms - treating as permanent loss
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: ========== AUDIO FOCUS STOLEN ===========
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Focus lost at 1753348116261
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Time since request: 469ms
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Thread: main
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@43f776e
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Speech recognizer listening: true
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Call stack when focus lost:
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:08:36.261 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [2] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:426
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [3] com.anonymous.MobileJarvisNative.voice.VoiceManager$startListeningInternal$focusResult$2.invoke:383
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager$handleAudioFocusChange$2.invokeSuspend:336
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [5] kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith:33
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [6] kotlinx.coroutines.DispatchedTaskKt.resume:235
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: [7] kotlinx.coroutines.DispatchedTaskKt.dispatch:168
07-24 04:08:36.262 19005 19005 W VoiceManager: 🔥 FOCUS_THEFT_DEBUG: =============================================
07-24 04:08:36.262 19005 19005 W VoiceManager: 🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition - stopping speech recognizer
07-24 04:08:36.277 19005 19005 W VoiceManager: 🔥 READY_FOCUS_DEBUG: Focus lost 186ms after ready (monitor #13)
07-24 04:08:36.278 19005 19005 D AudioManager: 🎵 No more requests in queue
07-24 04:08:36.279 19005 19005 W VoiceManager: 🔥 LISTENING_FOCUS_DEBUG: Focus lost 187ms into listening session
07-24 04:08:36.286 19005 19005 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f2009a6com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e8db70
07-24 04:08:36.286 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change occurred 493ms after request
07-24 04:08:36.287 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========
07-24 04:08:36.287 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Timestamp: 1753348116287
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Focus change: AUDIOFOCUS_GAIN (1)
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request type: SPEECH_RECOGNITION
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Request ID: speech_recognition
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Previous state: LOST_TRANSIENT
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Thread: main
07-24 04:08:36.288 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: Stack trace:
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [0] dalvik.system.VMStack.getThreadStackTrace:-2
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [1] java.lang.Thread.getStackTrace:1841
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [2] com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:253
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [3] com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$0:174
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [4] com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$JFHDaVYKEum6joeMZS66nLLsBsk:0
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [5] com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:6
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [6] android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [7] android.os.Handler.dispatchMessage:111
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [8] android.os.Looper.loopOnce:242
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: [9] android.os.Looper.loop:362
07-24 04:08:36.289 19005 19005 W AudioManager: 🔥 AUDIO_FOCUS_DEBUG: ======================================================
07-24 04:08:36.289 19005 19005 I AudioManager: 🎵 Audio focus GAINED at 1753348116287
07-24 04:08:36.289 19005 19005 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at 1753348116289 (497ms after request)
07-24 04:08:36.368 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 04:08:36.368 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 276ms
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: ERROR
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: true
07-24 04:08:36.369 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 04:08:36.382 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:08:36.385 19005 19005 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:08:36.385 19005 19005 W VoiceManager: 🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()
07-24 04:08:36.385 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========
07-24 04:08:36.385 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current retry count: 0
07-24 04:08:36.385 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Max retries allowed: 1
07-24 04:08:36.385 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current voice state: ERROR
07-24 04:08:36.386 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio focus state: true
07-24 04:08:36.386 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: true
07-24 04:08:36.386 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Is listening flag: false
07-24 04:08:36.386 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 04:08:36.389 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 04:08:36.390 19005 19005 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Thread: main
07-24 04:08:36.390 19005 19005 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-24 04:08:36.390 19005 19005 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-24 04:08:36.404 19005 19005 D VoiceManager: Will reset to idle after 500 ms
07-24 04:08:36.605 19005 19005 I VoiceManager: 🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained
07-24 04:08:36.911 19005 19005 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-24 04:08:36.911 19005 19005 D VoiceManager: Conversation completed, re-enabling wake word detection
07-24 04:08:37.264 19005 19005 D VoiceManager: Wake word detection re-enabled after cleanup delay
