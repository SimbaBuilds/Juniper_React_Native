07-24 03:14:52.349 15965 16340 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 03:14:52.349 15965 16340 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 03:14:52.349 15965 16340 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-24 03:14:52.349 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.350 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@85a4f00
07-24 03:14:52.350 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892349
07-24 03:14:52.350 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994545321507
07-24 03:14:52.350 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.350 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.601538ms
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@85a4f00
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892351
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994546772507
07-24 03:14:52.351 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.352 15965 16340 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 03:14:52.352 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.352 15965 16340 I VoiceManager: Initializing OpenAI Whisper client
07-24 03:14:52.352 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.687923ms
07-24 03:14:52.352 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.352 15965 16340 D VoiceManager: Whisper client initialized successfully
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: Thread-16
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: false
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 03:14:52.353 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.353 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@85a4f00
07-24 03:14:52.353 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892353
07-24 03:14:52.353 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994548633507
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@85a4f00
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 03:14:52.353 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.353 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 03:14:52.355 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 03:14:52.355 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.355 15965 16340 D VoiceManager: 🎤 SPEECH_RECOGNITION: startListening called from background thread, posting to main thread
07-24 03:14:52.355 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 1.658154ms
07-24 03:14:52.355 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.356 15965 15965 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 03:14:52.356 15965 15965 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753344892356
07-24 03:14:52.356 15965 15965 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 03:14:52.356 15965 15965 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 03:14:52.356 15965 15965 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 03:14:52.359 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 03:14:52.359 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 03:14:52.359 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 03:14:52.331
07-24 03:14:52.359 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 03:14:52.360 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9320
07-24 03:14:52.360 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 03:14:52.360 15965 15965 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 03:14:52.361 15965 15965 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9320477247238159,"timestamp":1753344892331}
07-24 03:14:52.361 15965 15965 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 03:14:52.361 15965 15965 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 03:14:52.362 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 03:14:52.362 15965 15965 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 03:14:52.363 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 03:14:52.363 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 03:14:52.364 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 03:14:52.366 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 03:14:52.366 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@85a4f00
07-24 03:14:52.366 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 03:14:52.366 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 03:14:52.366 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: false
07-24 03:14:52.368 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 03:14:52.368 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 03:14:52.368 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 03:14:52.368 15965 15965 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 03:14:52.368 15965 15965 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-24 03:14:52.369 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 03:14:52.370 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 03:14:52.371 15965 15965 I VoiceManager: 🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 03:14:52.371 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 03:14:52.375 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available speech recognition services: 1
07-24 03:14:52.375 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Service: com.google.android.tts:com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 03:14:52.378 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 03:14:52.407 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 03:14:52.407 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 03:14:52.407 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.MAX_RESULTS=1}]
07-24 03:14:52.408 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Checking current audio focus state...
07-24 03:14:52.408 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current audio focus holder: None
07-24 03:14:52.408 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current request ID: None
07-24 03:14:52.408 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition...
07-24 03:14:52.411 15965 15965 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED during recognition
07-24 03:14:52.411 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus request result: true
07-24 03:14:52.411 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Post-request audio focus verification: true
07-24 03:14:52.411 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753344892411
07-24 03:14:52.419 15965 15965 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 03:14:52.420 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 03:14:52.430 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.430 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@3e202df
07-24 03:14:52.430 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892430
07-24 03:14:52.430 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994625832814
07-24 03:14:52.430 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.431 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.431 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.437538ms
07-24 03:14:52.431 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.431 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@3e202df
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892431
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994626933814
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.456385ms
07-24 03:14:52.432 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$LISTENING@3e202df
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892433
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994628531660
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.396ms
07-24 03:14:52.433 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.505 15965 15965 W VoiceManager: 🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition - stopping speech recognizer
07-24 03:14:52.508 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.508 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: ERROR(message=Audio focus lost during speech recognition)
07-24 03:14:52.512 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892508
07-24 03:14:52.512 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994703795276
07-24 03:14:52.512 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.515 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.516 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 2.800923ms
07-24 03:14:52.516 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.521 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.521 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: ERROR(message=Audio focus lost during speech recognition)
07-24 03:14:52.522 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892521
07-24 03:14:52.522 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994717181430
07-24 03:14:52.522 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.523 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.523 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 1.085154ms
07-24 03:14:52.523 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.524 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.524 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: ERROR(message=Audio focus lost during speech recognition)
07-24 03:14:52.524 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892524
07-24 03:14:52.524 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240994719581430
07-24 03:14:52.524 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.526 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.527 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 2.336307ms
07-24 03:14:52.527 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.534 15965 15965 I VoiceManager: 🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED during recognition
07-24 03:14:52.612 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech
07-24 03:14:52.612 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 03:14:52.612 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state when ready: true
07-24 03:14:52.612 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753344892612
07-24 03:14:52.612 15965 15965 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 03:14:52.612 15965 15965 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 319ms
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio focus state: true
07-24 03:14:52.931 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 03:14:52.932 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 03:14:52.932 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: ERROR
07-24 03:14:52.933 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 03:14:52.933 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: true
07-24 03:14:52.933 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 03:14:52.937 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 03:14:52.941 15965 15965 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 03:14:52.941 15965 15965 W VoiceManager: 🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()
07-24 03:14:52.941 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========
07-24 03:14:52.941 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current retry count: 0
07-24 03:14:52.942 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Max retries allowed: 1
07-24 03:14:52.942 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Current voice state: ERROR
07-24 03:14:52.942 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio focus state: true
07-24 03:14:52.942 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: true
07-24 03:14:52.942 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Is listening flag: false
07-24 03:14:52.943 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 03:14:52.946 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 03:14:52.946 15965 15965 D VoiceManager: 🔍 NO_SPEECH_DEBUG: Thread: main
07-24 03:14:52.946 15965 15965 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-24 03:14:52.946 15965 15965 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: RESPONDING(message=I didn't hear anything. Please try saying 'Jarvis' again when you're ready.)
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892955
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995150384507
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.591693ms
07-24 03:14:52.955 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.956 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.957 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: RESPONDING(message=I didn't hear anything. Please try saying 'Jarvis' again when you're ready.)
07-24 03:14:52.958 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892956
07-24 03:14:52.958 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995151595661
07-24 03:14:52.958 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.960 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.960 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 2.382539ms
07-24 03:14:52.960 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: RESPONDING(message=I didn't hear anything. Please try saying 'Jarvis' again when you're ready.)
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344892961
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995156406737
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.465539ms
07-24 03:14:52.961 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:52.962 15965 15965 D VoiceManager: Will reset to idle after 500 ms
07-24 03:14:53.527 15965 15965 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-24 03:14:53.527 15965 15965 D VoiceManager: Conversation completed, re-enabling wake word detection
07-24 03:14:53.543 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:53.543 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@72f3786
07-24 03:14:53.543 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344893542
07-24 03:14:53.543 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995737808507
07-24 03:14:53.543 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.543769ms
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@72f3786
07-24 03:14:53.544 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344893544
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995740278737
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.627154ms
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ========== NATIVE STATE CHANGE ==========
07-24 03:14:53.545 15965 15965 D VoiceModule: 🔄 STATE_FLOW: New state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@72f3786
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Timestamp: 1753344893545
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Performance time: 1240995741297122
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Thread: main
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: ✅ State change event sent to RN
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: Event emission latency: 0.449923ms
07-24 03:14:53.546 15965 15965 D VoiceModule: 🔄 STATE_FLOW: =============================================
^C
(base) cameronhightower@Camerons-Air MobileJarvisNative % 