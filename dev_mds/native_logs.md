07-25 00:44:27.445  9803 10034 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 00:44:27.445  9803 10034 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 00:44:27.445  9803 10034 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 00:44:27.448  9803 10034 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 00:44:27.448  9803 10034 I VoiceManager: Initializing OpenAI Whisper client
07-25 00:44:27.449  9803 10034 D VoiceManager: Whisper client initialized successfully
07-25 00:44:27.450  9803 10034 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: wake_word_detection
07-25 00:44:27.451  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 00:44:27.451  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:27.451  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 00:44:27.451  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 00:44:27.451  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.pauseWakeWordButKeepMicActive:756
07-25 00:44:27.452  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.onWakeWordDetected:679
07-25 00:44:27.452  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop:588
07-25 00:44:27.452  9803 10034 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 00:44:27.452  9803 10034 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 00:44:27.452  9803 10034 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 00:44:27.456  9803  9803 D VoiceManager: Deepgram client initialized for future use
07-25 00:44:27.456  9803  9803 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 00:44:27.457  9803  9803 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 00:44:27.458  9803  9803 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 00:44:27.458  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 00:44:27.458  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753422267458) - Priority: 1
07-25 00:44:27.458  9803 10034 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 00:44:27.459  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda4.run:2
07-25 00:44:27.461  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753422267458) - Priority: 1
07-25 00:44:27.462  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 00:44:27.462  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 00:44:27.462  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 00:44:27.462  9803  9803 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 00:44:27.462  9803  9803 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 00:44:27.463  9803  9803 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 00:44:27.463  9803  9803 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 00:44:27.470  9803  9803 I VoiceManager: SpeechRecognizer started listening.
07-25 00:44:27.477  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 00:44:27.516  9803  9803 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@fd79cdcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@3b3fef
07-25 00:44:27.516  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:27.516  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 00:44:27.517  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 00:44:27.519  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 00:44:27.519  9803  9803 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 00:44:27.520  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 00:44:27.625  9803  9803 D VoiceManager: Ready for speech
07-25 00:44:28.020  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 00:44:28.023  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753422267458) - Priority: 1
07-25 00:44:28.023  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 00:44:28.023  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 00:44:32.718  9803  9803 E VoiceManager: Speech recognition error: No recognition match
07-25 00:44:32.719  9803  9803 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 00:44:32.719  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753422267458
07-25 00:44:32.719  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:341
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1185
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:520
07-25 00:44:32.720  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:32.720  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:32.720  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 00:44:32.722  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:32.723  9803  9803 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753422267458)
07-25 00:44:32.723  9803  9803 D VoiceManager: No speech detected
07-25 00:44:32.724  9803  9803 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 00:44:32.725  9803  9803 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@fd79cdcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@3b3fef
07-25 00:44:32.726  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:32.726  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Audio focus regained for SPEECH_RECOGNITION
07-25 00:44:32.727  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 00:44:32.727  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 00:44:32.731  9803  9803 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 00:44:32.731  9803  9803 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 00:44:34.733  9803  9803 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 00:44:34.734  9803  9803 D VoiceManager: Starting speech recognition retry on main thread
07-25 00:44:34.734  9803  9803 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 00:44:34.737  9803  9803 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 00:44:34.738  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 00:44:34.738  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753422274738) - Priority: 1
07-25 00:44:34.738  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 00:44:34.739  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:34.740  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 00:44:34.740  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:122
07-25 00:44:34.741  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:360
07-25 00:44:34.741  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:348
07-25 00:44:34.742  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:947
07-25 00:44:34.742  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 00:44:34.743  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 00:44:34.750  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753422274738) - Priority: 1
07-25 00:44:34.750  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 00:44:34.750  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 00:44:34.750  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 00:44:34.751  9803  9803 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 00:44:34.751  9803  9803 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 00:44:34.754  9803  9803 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 00:44:34.755  9803  9803 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 00:44:34.755  9803  9803 I VoiceManager: SpeechRecognizer started listening.
07-25 00:44:34.757  9803  9803 D AudioManager: dispatching onAudioFocusChange(-3) to android.media.AudioManager@fd79cdcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@3b3fef
07-25 00:44:34.758  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) for SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:34.758  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK (-3) - Stack trace:
07-25 00:44:34.759  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:34.759  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 00:44:34.759  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 00:44:34.760  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 00:44:34.760  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 00:44:34.760  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 00:44:34.760  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 00:44:34.761  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 00:44:34.761  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 00:44:34.761  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 00:44:34.763  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 00:44:34.763  9803  9803 D AudioManager: 🎵 DUCKED: Audio focus ducked for SPEECH_RECOGNITION
07-25 00:44:34.764  9803  9803 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority
07-25 00:44:34.786  9803  9803 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@fd79cdcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@3b3fef
07-25 00:44:34.786  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753422267458)
07-25 00:44:34.786  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 00:44:34.787  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 00:44:34.789  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 00:44:34.789  9803  9803 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 00:44:34.790  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 00:44:34.790  9803  9803 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@fd79cdcom.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7294e54
07-25 00:44:34.790  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753422274738)
07-25 00:44:34.790  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:266
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:203
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 00:44:34.791  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 00:44:34.793  9803  9803 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 00:44:34.793  9803  9803 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-25 00:44:34.794  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 500ms
07-25 00:44:34.831  9803  9803 D VoiceManager: Ready for speech
07-25 00:44:35.295  9803  9803 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-25 00:44:35.300  9803  9803 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753422274738) - Priority: 1
07-25 00:44:35.300  9803  9803 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 00:44:35.300  9803  9803 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
