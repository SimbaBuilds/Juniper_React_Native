07-25 06:20:13.912 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:13.912 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:13.913 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442413912) - Priority: 1
07-25 06:20:13.913 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:13.913 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda5.run:2
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while BACKGROUND_AUDIO (priority: 4) is active
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:20:13.914 26317 26317 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 06:20:13.914 26317 26317 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 06:20:13.914 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 06:20:13.914 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:20:13.914 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:13.918 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:20:13.920 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442413912) - Priority: 1
07-25 06:20:13.920 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:13.920 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:13.921 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:13.921 26317 26317 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 06:20:13.921 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:20:13.922 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:20:13.923 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:13.923 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:13.930 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:13.989 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@43f776e
07-25 06:20:13.989 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442413912)
07-25 06:20:13.990 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:13.996 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:13.997 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:13.997 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:14.003 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:14.003 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:14.003 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:14.036 26317 26317 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:20:14.036 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:14.038 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:14.038 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:14.038 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442414038) - Priority: 1
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$6:862
07-25 06:20:14.038 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$trpjsRM_UakXV0y3sPRitneC_Ws:0
07-25 06:20:14.039 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 06:20:14.039 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 06:20:14.039 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:20:14.039 26317 26317 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 06:20:14.039 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442413912)
07-25 06:20:14.039 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:14.049 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442413912)
07-25 06:20:14.160 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442414038) - Priority: 1
07-25 06:20:14.161 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:14.161 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:14.161 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:14.164 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:20:14.165 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:14.165 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:14.165 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:14.197 26317 26317 D VoiceManager: Ready for speech
07-25 06:20:14.199 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:20:14.200 26317 26317 W VoiceManager: Speech recognition error, will retry (attempt 1)
07-25 06:20:15.199 26317 26317 D VoiceManager: Retrying speech recognition on main thread after error
07-25 06:20:15.199 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:15.201 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:15.201 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:15.201 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442415201) - Priority: 1
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError$lambda$1:544
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.$r8$lambda$Mpyfbt-8f2erChCE7pBu63CED2E:0
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1$$ExternalSyntheticLambda1.run:2
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 06:20:15.201 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442414038)
07-25 06:20:15.201 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:15.202 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442414038)
07-25 06:20:15.305 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442415201) - Priority: 1
07-25 06:20:15.305 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:15.305 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:15.305 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:15.305 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:20:15.305 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:15.306 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:15.306 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:15.309 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:20:15.309 26317 26317 W VoiceManager: Speech recognition error, will retry (attempt 2)
07-25 06:20:16.309 26317 26317 D VoiceManager: Retrying speech recognition on main thread after error
07-25 06:20:16.309 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:16.310 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:16.310 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:16.310 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442416310) - Priority: 1
07-25 06:20:16.311 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:16.311 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:16.311 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:16.311 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:16.311 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:16.312 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:16.312 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError$lambda$1:544
07-25 06:20:16.312 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.$r8$lambda$Mpyfbt-8f2erChCE7pBu63CED2E:0
07-25 06:20:16.312 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1$$ExternalSyntheticLambda1.run:2
07-25 06:20:16.312 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 06:20:16.313 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:20:16.313 26317 26317 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 06:20:16.313 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442415201)
07-25 06:20:16.313 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:16.316 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442415201)
07-25 06:20:16.425 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442416310) - Priority: 1
07-25 06:20:16.425 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:16.425 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:16.425 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:16.425 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:20:16.426 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:16.426 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:16.426 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:16.431 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:20:16.538 26317 26317 D VoiceManager: Beginning of speech
07-25 06:20:16.836 26317 26317 D VoiceManager: Partial results: ''
07-25 06:20:16.909 26317 26317 D VoiceManager: Partial results: ''
07-25 06:20:17.374 26317 26317 D VoiceManager: Partial results: 'how'
07-25 06:20:17.428 26317 26317 D VoiceManager: Partial results: 'how are you'
07-25 06:20:17.618 26317 26317 D VoiceManager: End of speech
07-25 06:20:17.624 26317 26317 D VoiceManager: Speech recognition results received: 1 matches
07-25 06:20:17.624 26317 26317 D VoiceManager: Match 0: 'how are you'
07-25 06:20:17.624 26317 26317 I VoiceManager: Speech recognized: 'how are you'
07-25 06:20:17.624 26317 26317 I VoiceManager: Speech recognized: "how are you"
07-25 06:20:17.624 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 06:20:17.624 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442416310
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:629
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:566
07-25 06:20:17.624 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442416310)
07-25 06:20:17.624 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442416310)
07-25 06:20:17.624 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:17.626 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442416310)
07-25 06:20:17.626 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 06:20:17.626 26317 26317 D VoiceManager: Voice state transition: ERROR -> PROCESSING
07-25 06:20:17.626 26317 26317 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 06:20:17.627 26317 26317 D VoiceManager: Starting API processing for recognized text
07-25 06:20:17.627 26317 26317 D VoiceManager: Sending text to voice processor for processing
07-25 06:20:17.628 26317 26317 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 06:20:17.629 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:20:17.632 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:20:17.633 26317 26317 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 06:20:17.633 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442416310
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:20:17.633 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:20:17.634 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:507
07-25 06:20:17.634 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID speech_recognition_1753442416310
07-25 06:20:17.634 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442416310)
07-25 06:20:24.270 26317 26317 D VoiceManager: Received response from voice processor, length: 117 chars
07-25 06:20:24.275 26317 26317 I VoiceManager: Processing complete, responding to user
07-25 06:20:24.375 26317 26317 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 06:20:24.379 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d) - Priority: 2
07-25 06:20:24.379 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:24.379 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 06:20:24.381 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 06:20:24.385 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d) - Priority: 2
07-25 06:20:24.385 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 06:20:31.167 26317 26903 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d
07-25 06:20:31.167 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.access$releaseAudioFocus:17
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager$speakImmediately$1.onDone:280
07-25 06:20:31.168 26317 26903 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder TTS (ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d)
07-25 06:20:31.168 26317 26903 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: TTS (ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d)
07-25 06:20:31.168 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:31.170 26317 26903 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: TTS (ID: tts_16a21e0a-1077-46ab-a4bf-e06aa77b766d)
07-25 06:20:31.170 26317 26903 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
07-25 06:20:31.171 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:20:31.471 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:20:31.471 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:20:31.472 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:20:31.581 26317 26317 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:20:31.581 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:31.582 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:31.582 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:31.583 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582) - Priority: 1
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:31.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$6:862
07-25 06:20:31.584 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$trpjsRM_UakXV0y3sPRitneC_Ws:0
07-25 06:20:31.584 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 06:20:31.585 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582) - Priority: 1
07-25 06:20:31.585 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:31.585 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:31.585 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:31.585 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:20:31.585 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:31.585 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:31.585 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:31.597 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e590aeb
07-25 06:20:31.597 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:31.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:31.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:31.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:31.601 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:31.601 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:31.601 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:31.635 26317 26317 D VoiceManager: Ready for speech
07-25 06:20:32.101 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:20:32.103 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582) - Priority: 1
07-25 06:20:32.103 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:32.103 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:33.933 26317 26317 D VoiceManager: Beginning of speech
07-25 06:20:34.151 26317 26317 D VoiceManager: Partial results: ''
07-25 06:20:34.230 26317 26317 D VoiceManager: Partial results: ''
07-25 06:20:34.551 26317 26317 D VoiceManager: Partial results: ''
07-25 06:20:34.780 26317 26317 D VoiceManager: Partial results: 'I'm'
07-25 06:20:34.787 26317 26317 D VoiceManager: Partial results: 'I'm doing'
07-25 06:20:35.097 26317 26317 D VoiceManager: Partial results: 'I'm doing well'
07-25 06:20:35.443 26317 26317 D VoiceManager: End of speech
07-25 06:20:35.459 26317 26317 D VoiceManager: Speech recognition results received: 1 matches
07-25 06:20:35.460 26317 26317 D VoiceManager: Match 0: 'I'm doing well'
07-25 06:20:35.460 26317 26317 I VoiceManager: Speech recognized: 'I'm doing well'
07-25 06:20:35.460 26317 26317 I VoiceManager: Speech recognized: "I'm doing well"
07-25 06:20:35.460 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 06:20:35.461 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442431582
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:629
07-25 06:20:35.461 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 06:20:35.462 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:566
07-25 06:20:35.462 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:35.462 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:35.462 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:35.466 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:35.467 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 06:20:35.467 26317 26317 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 06:20:35.467 26317 26317 I VoiceManager: Speech recognition completed successfully, processing command
07-25 06:20:35.467 26317 26317 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 06:20:35.469 26317 26317 D VoiceManager: Starting API processing for recognized text
07-25 06:20:35.469 26317 26317 D VoiceManager: Sending text to voice processor for processing
07-25 06:20:35.469 26317 26317 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: I'm doing well
07-25 06:20:35.474 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e590aeb
07-25 06:20:35.475 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:35.475 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:20:35.475 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:35.476 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:20:35.479 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:20:35.479 26317 26317 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 06:20:35.479 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442431582
07-25 06:20:35.479 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:35.479 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:35.480 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:35.480 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:35.480 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:20:35.480 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:20:35.480 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:507
07-25 06:20:35.480 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID speech_recognition_1753442431582
07-25 06:20:35.480 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442431582)
07-25 06:20:43.132 26317 26317 D VoiceManager: Received response from voice processor, length: 94 chars
07-25 06:20:43.133 26317 26317 I VoiceManager: Processing complete, responding to user
07-25 06:20:43.233 26317 26317 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 06:20:43.235 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0) - Priority: 2
07-25 06:20:43.235 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 06:20:43.236 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 06:20:43.237 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 06:20:43.237 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 06:20:43.241 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0) - Priority: 2
07-25 06:20:43.241 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 06:20:43.255 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e590aeb
07-25 06:20:43.255 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:43.255 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:43.256 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:43.257 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:43.257 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:43.258 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:43.258 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:43.259 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:43.259 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:43.259 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:43.260 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:43.262 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:43.263 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:43.263 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:43.264 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:43.764 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:20:43.766 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582) - Priority: 1
07-25 06:20:43.766 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:43.766 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:43.766 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b5af026
07-25 06:20:43.766 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0)
07-25 06:20:43.766 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:43.767 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:43.768 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:43.768 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 06:20:48.538 26317 26885 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_84f1b84d-c311-455a-8369-79f597e358a0
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.access$releaseAudioFocus:17
07-25 06:20:48.538 26317 26885 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager$speakImmediately$1.onDone:280
07-25 06:20:48.539 26317 26885 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID tts_84f1b84d-c311-455a-8369-79f597e358a0
07-25 06:20:48.540 26317 26885 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
07-25 06:20:48.841 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:20:48.841 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:20:48.842 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:20:48.943 26317 26317 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:20:48.943 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:48.945 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:48.945 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:48.945 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442448945) - Priority: 1
07-25 06:20:48.945 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:48.945 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$6:862
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$trpjsRM_UakXV0y3sPRitneC_Ws:0
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:20:48.946 26317 26317 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 06:20:48.947 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:48.947 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:48.949 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:20:49.051 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442448945) - Priority: 1
07-25 06:20:49.051 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:49.051 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:49.051 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:49.051 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:20:49.051 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:49.052 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:49.052 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:49.066 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b5af026
07-25 06:20:49.066 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0)
07-25 06:20:49.066 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for TTS
07-25 06:20:49.067 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b5af026
07-25 06:20:49.067 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0)
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:49.067 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:49.067 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 06:20:49.080 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b5af026
07-25 06:20:49.080 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0)
07-25 06:20:49.080 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:49.080 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:49.080 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:49.081 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:49.082 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for TTS, waiting to regain focus
07-25 06:20:49.082 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 1000ms
07-25 06:20:49.082 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7fe383c
07-25 06:20:49.082 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:49.082 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:49.083 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:49.083 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:49.084 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:49.084 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:49.084 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:49.151 26317 26317 D VoiceManager: Ready for speech
07-25 06:20:49.585 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:20:49.588 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442448945) - Priority: 1
07-25 06:20:49.588 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:49.588 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:54.238 26317 26317 E VoiceManager: Speech recognition error: No recognition match
07-25 06:20:54.238 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:20:54.238 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442448945
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:20:54.238 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:54.238 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:54.238 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:20:54.240 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:54.240 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442448945)
07-25 06:20:54.240 26317 26317 D VoiceManager: No speech detected
07-25 06:20:54.240 26317 26317 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 06:20:54.241 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7fe383c
07-25 06:20:54.241 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:54.241 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:20:54.241 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:54.241 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:20:54.242 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:20:54.243 26317 26317 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 06:20:56.243 26317 26317 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 06:20:56.244 26317 26317 D VoiceManager: Starting speech recognition retry on main thread
07-25 06:20:56.244 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:20:56.245 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:20:56.245 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:20:56.245 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442456245) - Priority: 1
07-25 06:20:56.245 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:963
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 06:20:56.246 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 06:20:56.248 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442456245) - Priority: 1
07-25 06:20:56.248 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:56.248 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:20:56.248 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:20:56.248 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:20:56.248 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:20:56.249 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:20:56.249 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:20:56.250 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:20:56.250 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:20:56.250 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7fe383c
07-25 06:20:56.250 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:56.250 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:56.251 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:56.252 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:56.252 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 06:20:56.252 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 06:20:56.265 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7fe383c
07-25 06:20:56.265 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:56.265 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:56.266 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:56.266 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:56.266 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:56.267 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:56.267 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:56.267 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:56.267 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c42cd6e
07-25 06:20:56.267 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:20:56.267 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:20:56.267 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:20:56.267 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:20:56.267 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:20:56.268 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:20:56.269 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:20:56.269 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:20:56.270 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:20:56.320 26317 26317 D VoiceManager: Ready for speech
07-25 06:20:56.770 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:20:56.773 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442456245) - Priority: 1
07-25 06:20:56.773 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:20:56.773 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:21:01.407 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:21:01.407 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442456245
07-25 06:21:01.407 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:21:01.407 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:01.407 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:21:01.407 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:21:01.407 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:21:01.408 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:21:01.408 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:21:01.408 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:01.408 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:01.408 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:21:01.409 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:01.409 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442456245)
07-25 06:21:01.409 26317 26317 D VoiceManager: No speech detected
07-25 06:21:01.409 26317 26317 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 06:21:01.410 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c42cd6e
07-25 06:21:01.410 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:01.410 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:21:01.410 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:21:01.410 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:01.411 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:21:01.411 26317 26317 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 06:21:03.412 26317 26317 D VoiceManager: Retrying speech recognition (attempt 2)
07-25 06:21:03.412 26317 26317 D VoiceManager: Starting speech recognition retry on main thread
07-25 06:21:03.412 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:21:03.413 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:21:03.414 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:21:03.414 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442463414) - Priority: 1
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:963
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 06:21:03.414 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 06:21:03.416 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442463414) - Priority: 1
07-25 06:21:03.416 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:21:03.416 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:21:03.416 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:21:03.416 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:21:03.417 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:21:03.417 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:21:03.418 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:21:03.418 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:21:03.418 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:21:03.418 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c42cd6e
07-25 06:21:03.418 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:03.418 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:21:03.418 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:03.418 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:03.418 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:03.419 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:03.419 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:03.419 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:03.419 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:03.419 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:03.420 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:03.420 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:03.421 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:03.421 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 06:21:03.421 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 06:21:03.437 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c42cd6e
07-25 06:21:03.437 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:03.437 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:03.438 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:03.439 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:03.440 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:21:03.440 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:21:03.442 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@23bebfb
07-25 06:21:03.442 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:03.442 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:03.444 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:03.444 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:21:03.444 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:21:03.488 26317 26317 D VoiceManager: Ready for speech
07-25 06:21:03.943 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:21:03.948 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442463414) - Priority: 1
07-25 06:21:03.948 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:21:03.948 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:21:08.574 26317 26317 E VoiceManager: Speech recognition error: No recognition match
07-25 06:21:08.574 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:21:08.574 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442463414
07-25 06:21:08.574 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:21:08.575 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:21:08.576 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:08.576 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:08.576 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:21:08.580 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:08.581 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442463414)
07-25 06:21:08.581 26317 26317 D VoiceManager: No speech detected
07-25 06:21:08.581 26317 26317 D VoiceManager: Maximum retry attempts reached (3), resetting to idle
07-25 06:21:08.581 26317 26317 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-25 06:21:08.583 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@23bebfb
07-25 06:21:08.583 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:08.583 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:21:08.583 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:21:08.583 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:09.087 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-25 06:21:09.088 26317 26317 D VoiceManager: Conversation completed, re-enabling wake word detection
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753442499739
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 06:21:39.739 26317 26641 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 06:21:39.740 26317 26641 D WakeWordModule: Set wake_word_enabled preference to true
07-25 06:21:39.740 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 06:21:39.740 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Creating service intent for class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 06:21:39.740 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Starting service...
07-25 06:21:39.740 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Using startForegroundService() for Android O+
07-25 06:21:39.743 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ Service start command sent successfully
07-25 06:21:39.743 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ Wake word detection started successfully
07-25 06:21:39.743 26317 26641 I WakeWordModule: 🚀 START_DETECTION: =====================================================
07-25 06:21:39.745 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 06:21:39.745 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753442499746
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 06:21:39.746 26317 26641 D WakeWordModule: Set wake_word_enabled preference to true
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 06:21:39.746 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 06:21:39.853 26317 26573 I AudioManager: 🎵 GLOBAL_FOCUS: Setting up global audio focus monitoring
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 GLOBAL_FOCUS: AudioManager initialized with enhanced focus monitoring
07-25 06:21:39.853 26317 26573 I AudioManager: AudioManager initialized
07-25 06:21:39.853 26317 26573 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: BACKGROUND_AUDIO (ID: wake_word_detection) - Priority: 4
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus$default:110
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording:428
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initWakeWordDetection:395
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeComponents:200
07-25 06:21:39.853 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeService:175
07-25 06:21:39.858 26317 26573 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: BACKGROUND_AUDIO (ID: wake_word_detection) - Priority: 4
07-25 06:21:39.858 26317 26573 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: BACKGROUND_AUDIO, Queue size: 0
07-25 06:21:39.864 26317 26317 D AudioManager: dispatching onAudioFocusChange(-1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e590aeb
07-25 06:21:39.865 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS (-1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442431582)
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS (-1) - Stack trace:
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:39.865 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:39.866 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:39.866 26317 26317 D AudioManager: 🎵 PERMANENT_LOSS: Permanent audio focus loss for SPEECH_RECOGNITION
07-25 06:21:39.866 26317 26317 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 06:21:39.866 26317 26317 W VoiceManager: 🎵 SPEECH_RECOGNITION: Permanent audio focus loss - stopping speech recognition
07-25 06:21:39.867 26317 26317 D AudioManager: dispatching onAudioFocusChange(-1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b5af026
07-25 06:21:39.867 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS (-1) for TTS (ID: tts_84f1b84d-c311-455a-8369-79f597e358a0)
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS (-1) - Stack trace:
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:39.867 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:39.868 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:39.868 26317 26317 D AudioManager: 🎵 PERMANENT_LOSS: Permanent audio focus loss for TTS
07-25 06:21:39.869 26317 26317 D AudioManager: dispatching onAudioFocusChange(-1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7fe383c
07-25 06:21:39.869 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS (-1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442448945)
07-25 06:21:39.869 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS (-1) - Stack trace:
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:39.870 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:39.871 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:39.871 26317 26317 D AudioManager: 🎵 PERMANENT_LOSS: Permanent audio focus loss for SPEECH_RECOGNITION
07-25 06:21:39.871 26317 26317 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 06:21:39.871 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 06:21:39.871 26317 26317 D AudioManager: dispatching onAudioFocusChange(-1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c42cd6e
07-25 06:21:39.871 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS (-1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442456245)
07-25 06:21:39.871 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS (-1) - Stack trace:
07-25 06:21:39.871 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.871 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.871 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:39.872 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:39.873 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:39.873 26317 26317 D AudioManager: 🎵 PERMANENT_LOSS: Permanent audio focus loss for SPEECH_RECOGNITION
07-25 06:21:39.873 26317 26317 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 06:21:39.873 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 06:21:39.873 26317 26317 D AudioManager: dispatching onAudioFocusChange(-1) to android.media.AudioManager@f836e0bcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@23bebfb
07-25 06:21:39.873 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS (-1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442463414)
07-25 06:21:39.873 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS (-1) - Stack trace:
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:21:39.874 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:21:39.875 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:21:39.875 26317 26317 D AudioManager: 🎵 PERMANENT_LOSS: Permanent audio focus loss for SPEECH_RECOGNITION
07-25 06:21:39.875 26317 26317 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 06:21:39.875 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 06:21:39.876 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:39.876 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:39.876 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:39.878 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:39.878 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753442500066
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 06:21:40.066 26317 26641 D WakeWordModule: Set wake_word_enabled preference to true
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 06:21:40.066 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 06:21:40.750 26317 26641 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
07-25 06:21:40.763 26317 26641 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753442501076
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-25 06:21:41.076 26317 26641 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-25 06:21:41.077 26317 26641 D WakeWordModule: Set wake_word_enabled preference to true
07-25 06:21:41.077 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-25 06:21:41.077 26317 26641 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-25 06:24:11.931 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: wake_word_detection
07-25 06:24:11.931 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.cleanup:222
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.onDestroy:855
07-25 06:24:11.933 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: android.app.ActivityThread.handleStopService:4995
07-25 06:24:11.934 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:24:11.934 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:24:11.934 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:24:11.937 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 06:24:11.945 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:24:15.564 26317 26641 I VoiceManager: Initializing VoiceManager services via deprecated method
07-25 06:24:15.564 26317 26641 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:24:15.564 26317 26641 W VoiceManager: startListening called from background thread, switching to main thread
07-25 06:24:15.565 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:24:15.567 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:24:15.568 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:24:15.568 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442655568) - Priority: 1
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening$lambda$2:311
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$I6JNycEZq4Edm2An6ww_5oJrysA:0
07-25 06:24:15.568 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda0.run:2
07-25 06:24:15.574 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442655568) - Priority: 1
07-25 06:24:15.574 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:24:15.574 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:15.574 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:24:15.574 26317 26317 D VoiceManager: Voice state transition: ERROR -> LISTENING
07-25 06:24:15.574 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:24:15.577 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:24:15.577 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:24:15.577 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:24:15.577 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:24:15.596 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@d4fb40
07-25 06:24:15.596 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:15.597 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:15.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:15.598 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:15.599 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:15.599 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:24:15.599 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:24:15.634 26317 26317 D VoiceManager: Ready for speech
07-25 06:24:16.100 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:24:16.105 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442655568) - Priority: 1
07-25 06:24:16.105 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:24:16.105 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:20.715 26317 26317 E VoiceManager: Speech recognition error: No recognition match
07-25 06:24:20.715 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:24:20.715 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442655568
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:24:20.715 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:20.715 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:20.715 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:24:20.717 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:20.718 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442655568)
07-25 06:24:20.718 26317 26317 D VoiceManager: No speech detected
07-25 06:24:20.718 26317 26317 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 06:24:20.718 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@d4fb40
07-25 06:24:20.718 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:20.718 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:24:20.718 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:20.718 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:24:20.719 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:24:20.719 26317 26317 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 06:24:22.720 26317 26317 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 06:24:22.722 26317 26317 D VoiceManager: Starting speech recognition retry on main thread
07-25 06:24:22.722 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:24:22.726 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:24:22.726 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:24:22.727 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726) - Priority: 1
07-25 06:24:22.727 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:24:22.729 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:22.729 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:22.730 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:24:22.730 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:24:22.731 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:24:22.731 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:963
07-25 06:24:22.731 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 06:24:22.732 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 06:24:22.739 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726) - Priority: 1
07-25 06:24:22.739 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:24:22.739 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:22.740 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:24:22.740 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:24:22.742 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:24:22.745 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:24:22.747 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:24:22.747 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:24:22.747 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:24:22.751 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@d4fb40
07-25 06:24:22.751 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:22.751 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:24:22.752 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:22.752 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:22.752 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:22.753 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:22.754 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:22.754 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:22.755 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:22.755 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:22.756 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:22.756 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:22.759 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:22.759 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 06:24:22.759 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 06:24:22.784 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@d4fb40
07-25 06:24:22.784 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442655568)
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:22.785 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:22.786 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:22.786 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:22.786 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:22.786 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:22.787 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:22.787 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:24:22.787 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:24:22.787 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e0d7253
07-25 06:24:22.787 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:22.787 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:22.788 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:22.789 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:22.789 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:24:22.789 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:24:22.845 26317 26317 D VoiceManager: Ready for speech
07-25 06:24:23.290 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:24:23.294 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726) - Priority: 1
07-25 06:24:23.295 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:24:23.295 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:24.938 26317 26317 D VoiceManager: Beginning of speech
07-25 06:24:25.176 26317 26317 D VoiceManager: Partial results: ''
07-25 06:24:25.740 26317 26317 D VoiceManager: Partial results: 'hello'
07-25 06:24:25.988 26317 26317 D VoiceManager: End of speech
07-25 06:24:26.022 26317 26317 D VoiceManager: Speech recognition results received: 1 matches
07-25 06:24:26.022 26317 26317 D VoiceManager: Match 0: 'hello'
07-25 06:24:26.023 26317 26317 I VoiceManager: Speech recognized: 'hello'
07-25 06:24:26.023 26317 26317 I VoiceManager: Speech recognized: "hello"
07-25 06:24:26.023 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 06:24:26.023 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442662726
07-25 06:24:26.024 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:24:26.024 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:26.025 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:26.025 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:24:26.025 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:629
07-25 06:24:26.025 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 06:24:26.026 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:566
07-25 06:24:26.026 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:26.026 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:26.026 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:24:26.030 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:26.031 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 06:24:26.033 26317 26317 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 06:24:26.033 26317 26317 I VoiceManager: Speech recognition completed successfully, processing command
07-25 06:24:26.033 26317 26317 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 06:24:26.035 26317 26317 D VoiceManager: Starting API processing for recognized text
07-25 06:24:26.035 26317 26317 D VoiceManager: Sending text to voice processor for processing
07-25 06:24:26.035 26317 26317 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: hello
07-25 06:24:26.039 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e0d7253
07-25 06:24:26.039 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:26.039 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:24:26.039 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:26.039 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:24:26.042 26317 26317 E VoiceManager: Speech recognition error: Client side error
07-25 06:24:26.042 26317 26317 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 06:24:26.042 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442662726
07-25 06:24:26.042 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:24:26.043 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:507
07-25 06:24:26.043 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID speech_recognition_1753442662726
07-25 06:24:26.044 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442662726)
07-25 06:24:56.038 26317 26317 D VoiceManager: Received response from voice processor, length: 73 chars
07-25 06:24:56.039 26317 26317 I VoiceManager: Processing complete, responding to user
07-25 06:24:56.149 26317 26317 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 06:24:56.154 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0) - Priority: 2
07-25 06:24:56.154 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:24:56.154 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:56.155 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:24:56.155 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:24:56.155 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 06:24:56.155 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 06:24:56.156 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 06:24:56.156 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 06:24:56.156 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 06:24:56.160 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0) - Priority: 2
07-25 06:24:56.161 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 06:24:56.186 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@e0d7253
07-25 06:24:56.186 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:24:56.186 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:24:56.186 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:56.187 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:56.188 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:56.188 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:24:56.188 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:24:56.689 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:24:56.697 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726) - Priority: 1
07-25 06:24:56.697 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:24:56.697 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:24:56.700 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c16ed1d
07-25 06:24:56.701 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0)
07-25 06:24:56.701 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:24:56.702 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:24:56.702 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:24:56.703 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:24:56.703 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:24:56.703 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:24:56.704 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:24:56.704 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:24:56.705 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:24:56.705 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:24:56.705 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:24:56.708 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:24:56.708 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 06:25:01.043 26317 26903 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0
07-25 06:25:01.044 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:25:01.044 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:01.045 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:25:01.045 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:25:01.045 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 06:25:01.045 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.access$releaseAudioFocus:17
07-25 06:25:01.046 26317 26903 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager$speakImmediately$1.onDone:280
07-25 06:25:01.046 26317 26903 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID tts_4bd3bd0b-0557-45db-8442-773249cff2e0
07-25 06:25:01.046 26317 26903 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
07-25 06:25:01.346 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:25:01.347 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:25:01.349 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:25:01.450 26317 26317 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 06:25:01.451 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:25:01.452 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:25:01.452 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:25:01.453 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442701453) - Priority: 1
07-25 06:25:01.453 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:25:01.453 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:01.453 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:25:01.454 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:25:01.454 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:25:01.454 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:25:01.454 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$6:862
07-25 06:25:01.454 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$trpjsRM_UakXV0y3sPRitneC_Ws:0
07-25 06:25:01.455 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 06:25:01.455 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 06:25:01.455 26317 26317 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 06:25:01.455 26317 26317 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 06:25:01.455 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:25:01.455 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:25:01.458 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442662726)
07-25 06:25:01.564 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442701453) - Priority: 1
07-25 06:25:01.564 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:25:01.565 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:01.565 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:25:01.565 26317 26317 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 06:25:01.566 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:25:01.567 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:25:01.567 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:25:01.587 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c16ed1d
07-25 06:25:01.588 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0)
07-25 06:25:01.588 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for TTS
07-25 06:25:01.588 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c16ed1d
07-25 06:25:01.588 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0)
07-25 06:25:01.588 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:01.589 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:01.590 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:01.591 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for TTS
07-25 06:25:01.617 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@c16ed1d
07-25 06:25:01.617 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for TTS (ID: tts_4bd3bd0b-0557-45db-8442-773249cff2e0)
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:01.618 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:01.622 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:01.622 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for TTS, waiting to regain focus
07-25 06:25:01.623 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 1000ms
07-25 06:25:01.623 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@810f6c1
07-25 06:25:01.623 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:01.623 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:01.626 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:01.626 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:25:01.626 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:25:01.677 26317 26317 D VoiceManager: Ready for speech
07-25 06:25:02.127 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:25:02.131 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442701453) - Priority: 1
07-25 06:25:02.131 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:25:02.131 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:06.777 26317 26317 E VoiceManager: Speech recognition error: No recognition match
07-25 06:25:06.777 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:25:06.777 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442701453
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:25:06.777 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:06.777 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:06.777 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:25:06.780 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:06.780 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442701453)
07-25 06:25:06.780 26317 26317 D VoiceManager: No speech detected
07-25 06:25:06.780 26317 26317 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 06:25:06.780 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@810f6c1
07-25 06:25:06.780 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:06.780 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:25:06.780 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:06.780 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:25:06.782 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:25:06.782 26317 26317 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 06:25:08.783 26317 26317 D VoiceManager: Retrying speech recognition (attempt 2)
07-25 06:25:08.784 26317 26317 D VoiceManager: Starting speech recognition retry on main thread
07-25 06:25:08.784 26317 26317 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 06:25:08.787 26317 26317 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 06:25:08.787 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 06:25:08.787 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753442708787) - Priority: 1
07-25 06:25:08.788 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 06:25:08.789 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:08.789 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:25:08.790 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 06:25:08.791 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 06:25:08.791 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 06:25:08.791 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:963
07-25 06:25:08.792 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 06:25:08.792 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 06:25:08.798 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442708787) - Priority: 1
07-25 06:25:08.799 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:25:08.799 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:08.799 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 06:25:08.800 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 06:25:08.801 26317 26317 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 06:25:08.804 26317 26317 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 06:25:08.805 26317 26317 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 06:25:08.805 26317 26317 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 06:25:08.805 26317 26317 I VoiceManager: SpeechRecognizer started listening.
07-25 06:25:08.806 26317 26317 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@810f6c1
07-25 06:25:08.806 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:08.806 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 06:25:08.806 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:08.806 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:08.806 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:08.807 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:08.809 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:08.809 26317 26317 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 06:25:08.809 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 06:25:08.837 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@810f6c1
07-25 06:25:08.837 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442701453)
07-25 06:25:08.837 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:25:08.838 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:08.838 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:08.839 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:08.842 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:08.843 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:25:08.843 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:25:08.843 26317 26317 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db935fa
07-25 06:25:08.844 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753442708787)
07-25 06:25:08.844 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 06:25:08.844 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 06:25:08.845 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 06:25:08.846 26317 26317 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 06:25:08.847 26317 26317 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 06:25:08.847 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 06:25:08.883 26317 26317 D VoiceManager: Ready for speech
07-25 06:25:09.347 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 06:25:09.354 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753442708787) - Priority: 1
07-25 06:25:09.354 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 06:25:09.354 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:13.991 26317 26317 E VoiceManager: Speech recognition error: No recognition match
07-25 06:25:13.991 26317 26317 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 06:25:13.991 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753442708787
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1201
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 06:25:13.991 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:529
07-25 06:25:13.992 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753442708787)
07-25 06:25:13.992 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753442708787)
07-25 06:25:13.992 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 06:25:13.994 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753442708787)
07-25 06:25:13.995 26317 26317 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753442708787)
07-25 06:25:13.996 26317 26317 D VoiceManager: No speech detected
07-25 06:25:13.996 26317 26317 D VoiceManager: Maximum retry attempts reached (3), resetting to idle
07-25 06:25:13.996 26317 26317 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-25 06:25:13.998 26317 26317 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@f747b26com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@db935fa
07-25 06:25:13.998 26317 26317 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753442708787)
07-25 06:25:13.998 26317 26317 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 06:25:13.998 26317 26317 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 06:25:13.998 26317 26317 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 06:25:14.502 26317 26317 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-25 06:25:14.503 26317 26317 D VoiceManager: Conversation completed, re-enabling wake word detection
