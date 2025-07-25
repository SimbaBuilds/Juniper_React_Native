
--------- beginning of main
07-25 02:03:39.020  5490  5829 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 02:03:39.020  5490  5829 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 02:03:39.021  5490  5829 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 02:03:39.022  5490  5829 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 02:03:39.022  5490  5829 I VoiceManager: Initializing OpenAI Whisper client
07-25 02:03:39.023  5490  5829 D VoiceManager: Whisper client initialized successfully
07-25 02:03:39.042  5490  5490 D VoiceManager: Deepgram client initialized for future use
07-25 02:03:39.042  5490  5490 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 02:03:39.042  5490  5490 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 02:03:39.045  5490  5490 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 02:03:39.045  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 02:03:39.045  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753427019045) - Priority: 1
07-25 02:03:39.045  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 02:03:39.046  5490  5490 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while BACKGROUND_AUDIO (priority: 4) is active
07-25 02:03:39.047  5490  5490 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 02:03:39.047  5490  5490 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 02:03:39.047  5490  5490 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 02:03:39.047  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 02:03:39.047  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 02:03:39.047  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:03:39.052  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 02:03:39.055  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753427019045) - Priority: 1
07-25 02:03:39.055  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:03:39.055  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:03:39.055  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 02:03:39.056  5490  5490 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 02:03:39.057  5490  5490 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 02:03:39.059  5490  5490 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 02:03:39.059  5490  5490 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 02:03:39.066  5490  5490 I VoiceManager: SpeechRecognizer started listening.
07-25 02:03:39.188  5490  5490 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@421d4adcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43f776e
07-25 02:03:39.189  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:39.191  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:03:39.195  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:39.195  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:03:39.195  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:03:39.195  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:03:39.195  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:03:39.196  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:03:39.196  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:03:39.196  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:03:39.196  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:03:39.196  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:03:39.201  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:03:39.201  5490  5490 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:03:39.201  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:03:39.312  5490  5490 D VoiceManager: Ready for speech
07-25 02:03:39.673  5490  5490 V VoiceManager: Audio level: 10.0 dB
07-25 02:03:39.723  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:03:39.727  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753427019045) - Priority: 1
07-25 02:03:39.727  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:03:39.728  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:03:39.870  5490  5490 V VoiceManager: Audio level: 8.08 dB
07-25 02:03:39.891  5490  5490 V VoiceManager: Audio level: 4.6000004 dB
07-25 02:03:40.869  5490  5490 V VoiceManager: Audio level: 0.4000001 dB
07-25 02:03:40.909  5490  5490 V VoiceManager: Audio level: 0.4000001 dB
07-25 02:03:40.929  5490  5490 V VoiceManager: Audio level: 0.52 dB
07-25 02:03:40.949  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:40.989  5490  5490 V VoiceManager: Audio level: 0.63999987 dB
07-25 02:03:41.069  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:41.150  5490  5490 V VoiceManager: Audio level: 1.48 dB
07-25 02:03:41.211  5490  5490 V VoiceManager: Audio level: 0.8799999 dB
07-25 02:03:41.231  5490  5490 V VoiceManager: Audio level: 4.96 dB
07-25 02:03:41.251  5490  5490 V VoiceManager: Audio level: 10.0 dB
07-25 02:03:41.429  5490  5490 V VoiceManager: Audio level: 9.88 dB
07-25 02:03:41.454  5490  5490 V VoiceManager: Audio level: 9.4 dB
07-25 02:03:41.470  5490  5490 V VoiceManager: Audio level: 9.5199995 dB
07-25 02:03:41.490  5490  5490 V VoiceManager: Audio level: 9.76 dB
07-25 02:03:41.500  5490  5490 D VoiceManager: Beginning of speech
07-25 02:03:41.512  5490  5490 V VoiceManager: Audio level: 9.64 dB
07-25 02:03:41.529  5490  5490 V VoiceManager: Audio level: 10.0 dB
07-25 02:03:41.569  5490  5490 V VoiceManager: Audio level: 8.32 dB
07-25 02:03:41.589  5490  5490 V VoiceManager: Audio level: 6.6400003 dB
07-25 02:03:41.629  5490  5490 V VoiceManager: Audio level: 5.56 dB
07-25 02:03:41.650  5490  5490 V VoiceManager: Audio level: 4.7200003 dB
07-25 02:03:41.691  5490  5490 V VoiceManager: Audio level: 3.6399999 dB
07-25 02:03:41.713  5490  5490 V VoiceManager: Audio level: 1.1199999 dB
07-25 02:03:41.719  5490  5490 D VoiceManager: Partial results: ''
07-25 02:03:41.770  5490  5490 V VoiceManager: Audio level: 0.27999997 dB
07-25 02:03:41.792  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:41.830  5490  5490 V VoiceManager: Audio level: 0.8799999 dB
07-25 02:03:41.835  5490  5490 D VoiceManager: Partial results: ''
07-25 02:03:41.950  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:41.991  5490  5490 V VoiceManager: Audio level: 0.16000009 dB
07-25 02:03:42.030  5490  5490 V VoiceManager: Audio level: 0.27999997 dB
07-25 02:03:42.189  5490  5490 V VoiceManager: Audio level: 0.8799999 dB
07-25 02:03:42.232  5490  5490 V VoiceManager: Audio level: 1.2400002 dB
07-25 02:03:42.260  5490  5490 D VoiceManager: Partial results: 'how are'
07-25 02:03:42.350  5490  5490 V VoiceManager: Audio level: 1.48 dB
07-25 02:03:42.390  5490  5490 V VoiceManager: Audio level: 1.0 dB
07-25 02:03:42.407  5490  5490 D VoiceManager: Partial results: 'how are you'
07-25 02:03:42.409  5490  5490 V VoiceManager: Audio level: 0.16000009 dB
07-25 02:03:42.429  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:42.470  5490  5490 V VoiceManager: Audio level: 0.16000009 dB
07-25 02:03:42.489  5490  5490 V VoiceManager: Audio level: 0.76 dB
07-25 02:03:42.512  5490  5490 V VoiceManager: Audio level: 1.3600001 dB
07-25 02:03:42.549  5490  5490 V VoiceManager: Audio level: 0.27999997 dB
07-25 02:03:42.570  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:42.636  5490  5490 D VoiceManager: End of speech
07-25 02:03:42.650  5490  5490 D VoiceManager: Speech recognition results received: 1 matches
07-25 02:03:42.651  5490  5490 D VoiceManager: Match 0: 'how are you'
07-25 02:03:42.654  5490  5490 I VoiceManager: Speech recognized: 'how are you'
07-25 02:03:42.656  5490  5490 I VoiceManager: Speech recognized: "how are you"
07-25 02:03:42.656  5490  5490 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 02:03:42.657  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753427019045
07-25 02:03:42.657  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:620
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 02:03:42.658  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:557
07-25 02:03:42.659  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:42.659  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:42.659  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 02:03:42.661  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:42.665  5490  5490 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 02:03:42.666  5490  5490 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 02:03:42.667  5490  5490 I VoiceManager: Speech recognition completed successfully, processing command
07-25 02:03:42.668  5490  5490 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 02:03:42.669  5490  5490 D VoiceManager: Starting API processing for recognized text
07-25 02:03:42.669  5490  5490 D VoiceManager: Sending text to voice processor for processing
07-25 02:03:42.670  5490  5490 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 02:03:42.677  5490  5490 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@421d4adcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43f776e
07-25 02:03:42.678  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:42.678  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 02:03:42.678  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:03:42.678  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 02:03:42.679  5490  5490 E VoiceManager: Speech recognition error: Client side error
07-25 02:03:42.680  5490  5490 W VoiceManager: Speech recognition error, will retry (attempt 1)
07-25 02:03:43.680  5490  5490 D VoiceManager: Retrying speech recognition on main thread after error
07-25 02:03:43.680  5490  5490 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 02:03:43.681  5490  5490 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 02:03:43.681  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 02:03:43.681  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753427023681) - Priority: 1
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError$lambda$1:535
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.$r8$lambda$Mpyfbt-8f2erChCE7pBu63CED2E:0
07-25 02:03:43.681  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1$$ExternalSyntheticLambda1.run:2
07-25 02:03:43.683  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753427023681) - Priority: 1
07-25 02:03:43.683  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:03:43.683  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:03:43.683  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 02:03:43.683  5490  5490 D VoiceManager: Voice state transition: PROCESSING -> LISTENING
07-25 02:03:43.684  5490  5490 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 02:03:43.684  5490  5490 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 02:03:43.684  5490  5490 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 02:03:43.684  5490  5490 I VoiceManager: SpeechRecognizer started listening.
07-25 02:03:43.684  5490  5490 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@421d4adcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43f776e
07-25 02:03:43.684  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:03:43.685  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:03:43.686  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:03:43.686  5490  5490 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 02:03:43.686  5490  5490 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 02:03:43.700  5490  5490 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@421d4adcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43f776e
07-25 02:03:43.700  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753427019045)
07-25 02:03:43.700  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:03:43.700  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:03:43.701  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:03:43.702  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:03:43.702  5490  5490 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:03:43.703  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:03:43.703  5490  5490 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@421d4adcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@f220787
07-25 02:03:43.703  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753427023681)
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 02:03:43.703  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 02:03:43.704  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 02:03:43.704  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 02:03:43.704  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 02:03:43.704  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 02:03:43.705  5490  5490 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 02:03:43.705  5490  5490 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 02:03:43.706  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 02:03:43.762  5490  5490 D VoiceManager: Ready for speech
07-25 02:03:43.914  5490  5490 V VoiceManager: Audio level: 10.0 dB
07-25 02:03:44.133  5490  5490 V VoiceManager: Audio level: 7.84 dB
07-25 02:03:44.155  5490  5490 V VoiceManager: Audio level: 4.7200003 dB
07-25 02:03:44.205  5490  5490 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 02:03:44.207  5490  5490 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753427023681) - Priority: 1
07-25 02:03:44.208  5490  5490 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 02:03:44.208  5490  5490 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 02:03:45.134  5490  5490 V VoiceManager: Audio level: 0.27999997 dB
07-25 02:03:45.193  5490  5490 V VoiceManager: Audio level: 0.03999996 dB
07-25 02:03:45.353  5490  5490 V VoiceManager: Audio level: 0.52 dB