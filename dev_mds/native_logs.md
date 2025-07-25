07-25 06:17:05.541 25412 25724 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 06:17:05.541 25412 25724 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 06:17:05.541 25412 25724 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 06:17:05.543 25412 25724 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 06:17:05.543 25412 25724 I VoiceManager: Initializing OpenAI Whisper client
07-25 06:17:05.544 25412 25724 D VoiceManager: Whisper client initialized successfully
07-25 06:17:05.548 25412 25412 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-25 06:17:05.548 25412 25412 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753442225548
07-25 06:17:05.548 25412 25412 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 06:17:05.549 25412 25412 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 06:17:05.549 25412 25412 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-25 06:17:05.554 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-25 06:17:05.555 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-25 06:17:05.555 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 06:17:05.529
07-25 06:17:05.555 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-25 06:17:05.556 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.8215
07-25 06:17:05.557 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-25 06:17:05.558 25412 25412 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-25 06:17:05.560 25412 25412 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.821473240852356,"timestamp":1753442225529}
07-25 06:17:05.561 25412 25412 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-25 06:17:05.562 25412 25412 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-25 06:17:05.563 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-25 06:17:05.563 25412 25412 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-25 06:17:05.574 25412 25412 D VoiceManager: Deepgram client initialized for future use
07-25 06:17:05.575 25412 25412 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 06:17:05.575 25412 25412 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:17:05.577 25412 25412 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:17:05.577 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:17:05.578 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578) - Priority: 1
07-25 06:17:05.579 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:17:05.579 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:05.580 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:17:05.580 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:17:05.580 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 06:17:05.580 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 06:17:05.581 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 06:17:05.581 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 06:17:05.581 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda5.run:2
07-25 06:17:05.581 25412 25412 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while BACKGROUND_AUDIO (priority: 4) is active
07-25 06:17:05.581 25412 25412 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:17:05.581 25412 25412 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 06:17:05.581 25412 25412 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 06:17:05.582 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 06:17:05.583 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:17:05.583 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:17:05.586 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:17:05.588 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578) - Priority: 1
07-25 06:17:05.588 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:17:05.588 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:17:05.588 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:17:05.589 25412 25412 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 06:17:05.589 25412 25412 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:17:05.590 25412 25412 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:17:05.592 25412 25412 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:17:05.592 25412 25412 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:17:05.605 25412 25412 I VoiceManager: SpeechRecognizer started listening.
07-25 06:17:05.700 25412 25412 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:17:05.700 25412 25412 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:17:05.700 25412 25412 D VoiceManager: Already in listening state (isListening=false, state=LISTENING), skipping startListening
07-25 06:17:05.757 25412 25412 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@24a4785com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-25 06:17:05.757 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:05.757 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:17:05.758 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:05.759 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:17:05.760 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:17:05.760 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:17:05.760 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:17:05.760 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:17:05.760 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:17:05.761 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:17:05.761 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:17:05.761 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:17:05.765 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:17:05.765 25412 25412 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:17:05.766 25412 25412 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:17:05.851 25412 25412 D VoiceManager: Ready for speech
07-25 06:17:06.266 25412 25412 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:17:06.278 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578) - Priority: 1
07-25 06:17:06.278 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:17:06.278 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:17:08.243 25412 25412 D VoiceManager: Beginning of speech
07-25 06:17:08.385 25412 25412 D VoiceManager: Partial results: ''
07-25 06:17:08.450 25412 25412 D VoiceManager: Partial results: ''
07-25 06:17:08.482 25412 25412 D VoiceManager: Partial results: ''
07-25 06:17:08.977 25412 25412 D VoiceManager: Partial results: 'how'
07-25 06:17:09.036 25412 25412 D VoiceManager: Partial results: 'how are'
07-25 06:17:09.091 25412 25412 D VoiceManager: Partial results: 'how are you'
07-25 06:17:09.405 25412 25412 D VoiceManager: End of speech
07-25 06:17:09.407 25412 25412 D VoiceManager: Speech recognition results received: 1 matches
07-25 06:17:09.407 25412 25412 D VoiceManager: Match 0: 'how are you'
07-25 06:17:09.407 25412 25412 I VoiceManager: Speech recognized: 'how are you'
07-25 06:17:09.407 25412 25412 I VoiceManager: Speech recognized: "how are you"
07-25 06:17:09.407 25412 25412 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 06:17:09.407 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442225578
07-25 06:17:09.407 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:628
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:565
07-25 06:17:09.408 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:09.408 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:09.408 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:17:09.412 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:09.414 25412 25412 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 06:17:09.416 25412 25412 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 06:17:09.417 25412 25412 I VoiceManager: Speech recognition completed successfully, processing command
07-25 06:17:09.418 25412 25412 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 06:17:09.419 25412 25412 D VoiceManager: Starting API processing for recognized text
07-25 06:17:09.419 25412 25412 D VoiceManager: Sending text to voice processor for processing
07-25 06:17:09.421 25412 25412 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 06:17:09.426 25412 25412 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@24a4785com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-25 06:17:09.428 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:09.428 25412 25412 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:17:09.429 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:17:09.430 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:17:09.436 25412 25412 E VoiceManager: Speech recognition error: Client side error
07-25 06:17:09.436 25412 25412 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 06:17:09.437 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442225578
07-25 06:17:09.437 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:17:09.438 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:09.438 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:17:09.439 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:17:09.439 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1200
07-25 06:17:09.439 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:17:09.439 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:506
07-25 06:17:09.439 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID speech_recognition_1753442225578
07-25 06:17:09.439 25412 25412 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442225578)
07-25 06:17:17.260 25412 25412 D VoiceManager: Received response from voice processor, length: 117 chars
07-25 06:17:17.264 25412 25412 I VoiceManager: Processing complete, responding to user
07-25 06:17:17.378 25412 25412 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 06:17:17.382 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_d4dd7e78-cdc0-41dc-ba40-fabb4ce85c16) - Priority: 2
07-25 06:17:17.382 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:17:17.382 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:17.382 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:17:17.382 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:17:17.382 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 06:17:17.383 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 06:17:17.383 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 06:17:17.383 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 06:17:17.383 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 06:17:17.388 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_d4dd7e78-cdc0-41dc-ba40-fabb4ce85c16) - Priority: 2
07-25 06:17:17.388 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 06:17:17.393 25412 25412 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@24a4785com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db609b3
07-25 06:17:17.393 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442225578)
07-25 06:17:17.393 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:17:17.395 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:17.396 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:17:17.396 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:17:17.396 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:17:17.396 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:17:17.396 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:17:17.397 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:17:17.397 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:17:17.398 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:17:17.398 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:17:17.399 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:17:17.399 25412 25412 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:17:17.399 25412 25412 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:17:17.900 25412 25412 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:17:17.902 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442225578) - Priority: 1
07-25 06:17:17.902 25412 25412 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:17:17.902 25412 25412 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:17:17.902 25412 25412 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@24a4785com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@a520a5f
07-25 06:17:17.902 25412 25412 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_d4dd7e78-cdc0-41dc-ba40-fabb4ce85c16)
07-25 06:17:17.902 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:17:17.902 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:17.902 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:17:17.902 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:17:17.902 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:17:17.903 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:17:17.904 25412 25412 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:17:17.904 25412 25412 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 06:17:24.113 25412 25428 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_d4dd7e78-cdc0-41dc-ba40-fabb4ce85c16
07-25 06:17:24.113 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:17:24.113 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:17:24.113 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:17:24.113 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:17:24.113 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 06:17:24.114 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.access$releaseAudioFocus:17
07-25 06:17:24.114 25412 25428 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager$speakImmediately$1.onDone:280
07-25 06:17:24.114 25412 25428 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID tts_d4dd7e78-cdc0-41dc-ba40-fabb4ce85c16
07-25 06:17:24.114 25412 25428 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
07-25 06:17:24.414 25412 25412 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:17:24.415 25412 25412 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:17:24.416 25412 25412 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:17:24.518 25412 25412 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:17:24.518 25412 25412 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:17:24.518 25412 25412 D VoiceManager: Already in listening state (isListening=false, state=LISTENING), skipping startListening
