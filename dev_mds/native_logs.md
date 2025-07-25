--------- beginning of main
07-25 02:52:23.563 10137 10627 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 02:52:23.563 10137 10627 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 02:52:23.563 10137 10627 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 02:52:23.565 10137 10627 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 02:52:23.565 10137 10627 I VoiceManager: Initializing OpenAI Whisper client
07-25 02:52:23.566 10137 10627 D VoiceManager: Whisper client initialized successfully
07-25 02:52:23.589 10137 10137 D VoiceManager: Deepgram client initialized for future use
07-25 02:52:23.590 10137 10137 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 02:52:23.590 10137 10137 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 02:52:23.592 10137 10137 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 02:52:23.592 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 02:52:23.593 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753429943592) - Priority: 1
07-25 02:52:23.593 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:52:23.593 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:23.593 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:23.594 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while BACKGROUND_AUDIO (priority: 4) is active
07-25 02:52:23.595 10137 10137 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 02:52:23.596 10137 10137 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 02:52:23.596 10137 10137 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 02:52:23.596 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 02:52:23.597 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 02:52:23.597 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:52:23.603 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 02:52:23.607 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429943592) - Priority: 1
07-25 02:52:23.607 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:23.607 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:23.607 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 02:52:23.607 10137 10137 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 02:52:23.608 10137 10137 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 02:52:23.610 10137 10137 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 02:52:23.610 10137 10137 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 02:52:23.618 10137 10137 I VoiceManager: SpeechRecognizer started listening.
07-25 02:52:23.662 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@6439304
07-25 02:52:23.662 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:23.663 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:23.667 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:23.667 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:52:23.667 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:52:23.776 10137 10137 D VoiceManager: Ready for speech
07-25 02:52:23.976 10137 10137 V VoiceManager: Audio level: 10.0 dB
07-25 02:52:24.168 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:52:24.170 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429943592) - Priority: 1
07-25 02:52:24.171 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:24.171 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:27.244 10137 10137 D VoiceManager: End of speech
07-25 02:52:27.255 10137 10137 D VoiceManager: Speech recognition results received: 1 matches
07-25 02:52:27.255 10137 10137 D VoiceManager: Match 0: 'how are you'
07-25 02:52:27.255 10137 10137 I VoiceManager: Speech recognized: 'how are you'
07-25 02:52:27.255 10137 10137 I VoiceManager: Speech recognized: "how are you"
07-25 02:52:27.255 10137 10137 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 02:52:27.255 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753429943592
07-25 02:52:27.255 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 02:52:27.255 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:620
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:557
07-25 02:52:27.256 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:27.256 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:27.256 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:52:27.257 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:27.258 10137 10137 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 02:52:27.258 10137 10137 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 02:52:27.258 10137 10137 I VoiceManager: Speech recognition completed successfully, processing command
07-25 02:52:27.259 10137 10137 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 02:52:27.260 10137 10137 D VoiceManager: Starting API processing for recognized text
07-25 02:52:27.260 10137 10137 D VoiceManager: Sending text to voice processor for processing
07-25 02:52:27.261 10137 10137 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 02:52:27.263 10137 10137 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@6439304
07-25 02:52:27.263 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:27.264 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 02:52:27.264 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:27.264 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 02:52:27.267 10137 10137 E VoiceManager: Speech recognition error: Client side error
07-25 02:52:27.267 10137 10137 W VoiceManager: Speech recognition error, will retry (attempt 1)
07-25 02:52:28.268 10137 10137 D VoiceManager: Retrying speech recognition on main thread after error
07-25 02:52:28.268 10137 10137 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 02:52:28.268 10137 10137 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 02:52:28.268 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 02:52:28.268 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268) - Priority: 1
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError$lambda$1:535
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.$r8$lambda$Mpyfbt-8f2erChCE7pBu63CED2E:0
07-25 02:52:28.269 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1$$ExternalSyntheticLambda1.run:2
07-25 02:52:28.270 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268) - Priority: 1
07-25 02:52:28.270 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:28.270 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:28.270 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 02:52:28.270 10137 10137 D VoiceManager: Voice state transition: PROCESSING -> LISTENING
07-25 02:52:28.270 10137 10137 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 02:52:28.271 10137 10137 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 02:52:28.271 10137 10137 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 02:52:28.271 10137 10137 I VoiceManager: SpeechRecognizer started listening.
07-25 02:52:28.272 10137 10137 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@6439304
07-25 02:52:28.272 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:28.272 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:28.273 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:28.273 10137 10137 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 02:52:28.273 10137 10137 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 02:52:28.285 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@6439304
07-25 02:52:28.285 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753429943592)
07-25 02:52:28.285 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:28.285 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:28.285 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:28.285 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:28.285 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:28.286 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:28.287 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:28.287 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:52:28.287 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:52:28.287 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@8c1dfa8
07-25 02:52:28.287 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:28.287 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:28.288 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:28.291 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:28.291 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:52:28.291 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:52:28.346 10137 10137 D VoiceManager: Ready for speech
07-25 02:52:28.520 10137 10137 V VoiceManager: Audio level: 10.0 dB
07-25 02:52:28.743 10137 10137 V VoiceManager: Audio level: 8.200001 dB
07-25 02:52:28.758 10137 10137 V VoiceManager: Audio level: 4.96 dB
07-25 02:52:28.778 10137 10137 V VoiceManager: Audio level: 0.4000001 dB
07-25 02:52:28.791 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:52:28.793 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268) - Priority: 1
07-25 02:52:28.793 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:28.793 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition

07-25 02:52:33.438 10137 10137 E VoiceManager: Speech recognition error: No recognition match
07-25 02:52:33.438 10137 10137 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 02:52:33.438 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753429948268
07-25 02:52:33.438 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 02:52:33.439 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:33.439 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:33.440 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 02:52:33.440 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1185
07-25 02:52:33.440 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 02:52:33.440 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:520
07-25 02:52:33.440 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:33.440 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:33.440 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:52:33.441 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:33.442 10137 10137 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753429948268)
07-25 02:52:33.442 10137 10137 D VoiceManager: No speech detected
07-25 02:52:33.442 10137 10137 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 02:52:33.445 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 02:52:33.446 10137 10137 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 02:52:33.447 10137 10137 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 02:52:33.447 10137 10137 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@8c1dfa8
07-25 02:52:33.448 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:33.448 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 02:52:33.448 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:34.271 10137 10137 D VoiceManager: Received response from voice processor, length: 117 chars
07-25 02:52:34.271 10137 10137 I VoiceManager: Processing complete, responding to user
07-25 02:52:34.372 10137 10137 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 02:52:34.376 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820) - Priority: 2
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 02:52:34.377 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 02:52:34.378 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 02:52:34.378 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 02:52:34.378 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 02:52:34.380 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820) - Priority: 2
07-25 02:52:34.380 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 02:52:34.385 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@8c1dfa8
07-25 02:52:34.385 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:34.385 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:34.386 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:34.388 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:34.388 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:52:34.388 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:52:34.888 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:52:34.889 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268) - Priority: 1
07-25 02:52:34.889 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:34.889 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:34.890 10137 10137 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7aaed12
07-25 02:52:34.890 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820)
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:34.890 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:34.891 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:34.891 10137 10137 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 02:52:35.447 10137 10137 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 02:52:35.447 10137 10137 D VoiceManager: Starting speech recognition retry on main thread
07-25 02:52:35.447 10137 10137 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 02:52:35.448 10137 10137 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 02:52:35.448 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 02:52:35.448 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753429955448) - Priority: 1
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:947
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 02:52:35.448 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:35.448 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:52:35.449 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753429948268)
07-25 02:52:35.554 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429955448) - Priority: 1
07-25 02:52:35.554 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:35.554 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:35.554 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 02:52:35.554 10137 10137 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 02:52:35.555 10137 10137 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 02:52:35.558 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.stop:347
07-25 02:52:35.558 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.ModularVoiceProcessor.stop:338
07-25 02:52:35.558 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820
07-25 02:52:35.558 10137 10137 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 02:52:35.559 10137 10137 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 02:52:35.559 10137 10137 I VoiceManager: SpeechRecognizer started listening.
07-25 02:52:35.559 10137 10137 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7aaed12
07-25 02:52:35.559 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820)
07-25 02:52:35.559 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for TTS
07-25 02:52:35.560 10137 10137 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7aaed12
07-25 02:52:35.560 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820)
07-25 02:52:35.560 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 02:52:35.560 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:35.561 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:35.563 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:35.563 10137 10137 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 02:52:35.577 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7aaed12
07-25 02:52:35.577 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for TTS (ID: tts_1dd7ac4c-d7c9-41de-86f6-7902d26c6820)
07-25 02:52:35.577 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:35.578 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:35.580 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:35.580 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:35.580 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:35.582 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:35.582 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for TTS, waiting to regain focus
07-25 02:52:35.583 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 1000ms
07-25 02:52:35.584 10137 10137 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@14929dacom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@bf3cc58
07-25 02:52:35.585 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753429955448)
07-25 02:52:35.585 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:52:35.587 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:52:35.588 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:52:35.588 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:52:35.588 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:52:35.589 10137 10137 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:52:35.589 10137 10137 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:52:35.589 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:52:35.641 10137 10137 D VoiceManager: Ready for speech
07-25 02:52:35.804 10137 10137 V VoiceManager: Audio level: 10.0 dB
07-25 02:52:36.024 10137 10137 V VoiceManager: Audio level: 8.08 dB
07-25 02:52:36.043 10137 10137 V VoiceManager: Audio level: 4.96 dB
07-25 02:52:36.065 10137 10137 V VoiceManager: Audio level: 0.4000001 dB
07-25 02:52:36.089 10137 10137 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:52:36.091 10137 10137 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753429955448) - Priority: 1
07-25 02:52:36.091 10137 10137 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:52:36.091 10137 10137 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:52:37.023 10137 10137 V VoiceManager: Audio level: 1.72 dB
07-25 02:52:37.043 10137 10137 V VoiceManager: Audio level: 0.52 dB
