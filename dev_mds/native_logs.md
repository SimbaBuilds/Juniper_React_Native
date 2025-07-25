
07-25 07:25:01.072  2173  3166 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Hey Juni' ACTIVATED ***
================================================
07-25 07:25:01.072  2173  3166 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST 
07-25 07:25:01.074  2173  3166 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
07-25 07:25:01.074  2173  3166 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
07-25 07:25:01.074  2173  3166 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
07-25 07:25:01.074  2173  3166 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 07:25:01.074  2173  3166 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 07:25:01.074  2173  3166 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 07:25:01.077  2173  3166 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 07:25:01.077  2173  3166 I VoiceManager: Initializing OpenAI Whisper client
07-25 07:25:01.078  2173  3166 D VoiceManager: Whisper client initialized successfully
07-25 07:25:01.078  2173  3166 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
07-25 07:25:01.078  2173  3166 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session

07-25 07:25:01.093  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 07:25:01.063
07-25 07:25:01.093  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-25 07:25:01.093  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.7937
07-25 07:25:01.093  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-25 07:25:01.094  2173  2173 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-25 07:25:01.095  2173  2173 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.7936722040176392,"timestamp":1753446301063}
07-25 07:25:01.095  2173  2173 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-25 07:25:01.096  2173  2173 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-25 07:25:01.097  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-25 07:25:01.097  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-25 07:25:01.105  2173  2173 D VoiceManager: Deepgram client initialized for future use
07-25 07:25:01.106  2173  2173 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 07:25:01.106  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:01.108  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:01.108  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:01.108  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446301108) - Priority: 1

07-25 07:25:01.113  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 07:25:01.113  2173  2173 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 07:25:01.113  2173  2173 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 07:25:01.113  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 07:25:01.114  2173  2173 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
07-25 07:25:01.114  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 07:25:01.114  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:01.116  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 07:25:01.119  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446301108) - Priority: 1
07-25 07:25:01.119  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:01.119  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:01.119  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:01.120  2173  2173 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 07:25:01.121  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:01.122  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:01.123  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:01.123  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:01.129  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:01.139  2173  2173 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
07-25 07:25:01.142  2173  3166 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
07-25 07:25:01.142  2173  3166 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1753446301108)
07-25 07:25:01.145  2173  3166 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
07-25 07:25:01.145  2173  3166 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
07-25 07:25:01.146  2173  3166 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
07-25 07:25:01.208  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@260c57d
07-25 07:25:01.208  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446301108)
07-25 07:25:01.208  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:262
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:199
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 07:25:01.214  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 07:25:01.215  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 07:25:01.215  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 07:25:01.215  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 07:25:01.217  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 07:25:01.217  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:01.217  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:01.217  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:01.234  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:01.239  2173  2173 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 07:25:01.239  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:01.243  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:01.243  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:01.243  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446301243) - Priority: 1
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$7:873
07-25 07:25:01.243  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$OlA7PseR6dLrmOIHn9eB2N7ujss:0
07-25 07:25:01.244  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda5.run:2
07-25 07:25:01.244  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 07:25:01.244  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 07:25:01.244  2173  2173 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 07:25:01.244  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446301108)
07-25 07:25:01.244  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:01.250  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446301108)
07-25 07:25:01.354  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446301243) - Priority: 1
07-25 07:25:01.354  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:01.354  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:01.354  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:01.354  2173  2173 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 07:25:01.354  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:01.355  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:01.355  2173  2173 I VoiceManager: SpeechRecognizer started listening.

07-25 07:25:04.709  2173  2173 I VoiceManager: Speech recognized: "how are you"
07-25 07:25:04.709  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS
07-25 07:25:04.709  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446301243
07-25 07:25:04.709  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:04.710  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:04.710  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:04.710  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:04.711  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onSpeechRecognized:627
07-25 07:25:04.711  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$onSpeechRecognized:40
07-25 07:25:04.711  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onResults:564
07-25 07:25:04.711  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446301243)
07-25 07:25:04.711  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446301243)
07-25 07:25:04.711  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:04.713  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446301243)
07-25 07:25:04.713  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition
07-25 07:25:04.713  2173  2173 D VoiceManager: Voice state transition: LISTENING -> PROCESSING
07-25 07:25:04.714  2173  2173 I VoiceManager: Speech recognition completed successfully, processing command
07-25 07:25:04.714  2173  2173 D VoiceManager: Active conversation state (PROCESSING), pausing wake word detection
07-25 07:25:04.717  2173  2173 D VoiceManager: Starting API processing for recognized text
07-25 07:25:04.717  2173  2173 D VoiceManager: Sending text to voice processor for processing
07-25 07:25:04.717  2173  2173 D VoiceManager: 🔵 VOICE_MANAGER: Processing text via new API flow: how are you
07-25 07:25:04.724  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:04.731  2173  2173 E VoiceManager: Speech recognition error: Client error
07-25 07:25:04.731  2173  2173 D VoiceManager: Ignoring speech recognition error during PROCESSING/RESPONDING state
07-25 07:25:04.731  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446301243
07-25 07:25:04.731  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:04.731  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:04.731  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:04.732  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:04.732  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:04.732  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:04.732  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:506
07-25 07:25:04.732  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_RELEASE_WARNING: No active request found with ID speech_recognition_1753446301243
07-25 07:25:04.733  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446301243)
07-25 07:25:11.184  2173  2173 D VoiceManager: Received response from voice processor, length: 117 chars
07-25 07:25:11.185  2173  2173 I VoiceManager: Processing complete, responding to user
07-25 07:25:11.298  2173  2173 D VoiceManager: 🎵 TTS_START: Starting TTS after audio focus release delay
07-25 07:25:11.303  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: TTS (ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd) - Priority: 2
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.requestAudioFocus:126
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speakImmediately:256
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.processNextInQueue:230
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak:207
07-25 07:25:11.303  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.speak$default:179
07-25 07:25:11.306  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: TTS (ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd) - Priority: 2
07-25 07:25:11.306  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: TTS, Queue size: 0
07-25 07:25:18.072  2173  2919 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd
07-25 07:25:18.072  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:18.074  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:18.074  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:18.074  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:18.075  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.releaseAudioFocus:155
07-25 07:25:18.075  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager.access$releaseAudioFocus:17
07-25 07:25:18.075  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.TextToSpeechManager$speakImmediately$1.onDone:280
07-25 07:25:18.075  2173  2919 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder TTS (ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd)
07-25 07:25:18.076  2173  2919 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: TTS (ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd)
07-25 07:25:18.076  2173  2919 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:18.080  2173  2919 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: TTS (ID: tts_144c8a9d-ab18-43d6-b088-774652ede9dd)
07-25 07:25:18.082  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:18.082  2173  2919 I VoiceManager: TTS complete, setting state to LISTENING to continue conversation
07-25 07:25:18.384  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 07:25:18.386  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:18.388  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:18.488  2173  2173 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 07:25:18.488  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:18.490  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:18.491  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:18.491  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446318491) - Priority: 1
07-25 07:25:18.491  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:18.491  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:18.491  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:18.491  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:18.491  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:18.492  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:18.492  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$7:873
07-25 07:25:18.492  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$OlA7PseR6dLrmOIHn9eB2N7ujss:0
07-25 07:25:18.492  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda5.run:2
07-25 07:25:18.494  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446318491) - Priority: 1
07-25 07:25:18.494  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:18.495  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:18.495  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:18.495  2173  2173 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 07:25:18.495  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:18.496  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:18.496  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:18.514  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7ec335e
07-25 07:25:18.514  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446318491)
07-25 07:25:18.514  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:262
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:199
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 07:25:18.515  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 07:25:18.516  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 07:25:18.517  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:18.517  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:18.517  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:18.517  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:18.565  2173  2173 D VoiceManager: Ready for speech
07-25 07:25:22.224  2173  3166 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 48715023 chunks in 30s (isPaused: true)
07-25 07:25:23.569  2173  2173 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@7ec335e
07-25 07:25:23.569  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753446318491)
07-25 07:25:23.570  2173  2173 D AudioManager: 🎵 FOCUS_GAINED: Audio focus gained for SPEECH_RECOGNITION
07-25 07:25:23.570  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:23.656  2173  2173 E VoiceManager: Speech recognition error: No recognition match
07-25 07:25:23.659  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:23.659  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446318491
07-25 07:25:23.659  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:528
07-25 07:25:23.660  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446318491)
07-25 07:25:23.660  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446318491)
07-25 07:25:23.660  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:23.664  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446318491)
07-25 07:25:23.664  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446318491)
07-25 07:25:23.664  2173  2173 D VoiceManager: No speech detected
07-25 07:25:23.665  2173  2173 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 07:25:23.667  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:23.675  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:23.675  2173  2173 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 07:25:25.676  2173  2173 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 07:25:25.677  2173  2173 D VoiceManager: Starting speech recognition retry on main thread
07-25 07:25:25.678  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:25.682  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:25.682  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:25.683  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446325682) - Priority: 1
07-25 07:25:25.683  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:25.684  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:25.685  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:25.685  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:25.686  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:25.686  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:25.686  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:974
07-25 07:25:25.686  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 07:25:25.686  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 07:25:25.691  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446325682) - Priority: 1
07-25 07:25:25.691  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:25.691  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:25.691  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:25.692  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 07:25:25.693  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:25.696  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:25.697  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:25.697  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:25.698  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:25.728  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b1c9772
07-25 07:25:25.728  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446325682)
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:262
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:199
07-25 07:25:25.728  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 07:25:25.729  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 07:25:25.729  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 07:25:25.729  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 07:25:25.729  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 07:25:25.729  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 07:25:25.731  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 07:25:25.731  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:25.731  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:25.731  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:25.732  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:25.770  2173  2173 D VoiceManager: Ready for speech
07-25 07:25:30.777  2173  2173 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b1c9772
07-25 07:25:30.777  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753446325682)
07-25 07:25:30.777  2173  2173 D AudioManager: 🎵 FOCUS_GAINED: Audio focus gained for SPEECH_RECOGNITION
07-25 07:25:30.777  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:30.859  2173  2173 E VoiceManager: Speech recognition error: No recognition match
07-25 07:25:30.859  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:30.859  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446325682
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:528
07-25 07:25:30.859  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446325682)
07-25 07:25:30.859  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446325682)
07-25 07:25:30.859  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:30.866  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446325682)
07-25 07:25:30.868  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446325682)
07-25 07:25:30.870  2173  2173 D VoiceManager: No speech detected
07-25 07:25:30.870  2173  2173 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 07:25:30.872  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:30.880  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:30.880  2173  2173 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 07:25:32.881  2173  2173 D VoiceManager: Retrying speech recognition (attempt 2)
07-25 07:25:32.890  2173  2173 D VoiceManager: Starting speech recognition retry on main thread
07-25 07:25:32.891  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:32.895  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:32.895  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:32.895  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446332895) - Priority: 1
07-25 07:25:32.896  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:32.897  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:32.897  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:32.898  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:32.898  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:32.898  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:32.899  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:974
07-25 07:25:32.899  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 07:25:32.899  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 07:25:32.905  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446332895) - Priority: 1
07-25 07:25:32.905  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:32.905  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:32.905  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:32.906  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 07:25:32.907  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:32.909  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:32.911  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:32.911  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:32.911  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:32.945  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@ca31c46
07-25 07:25:32.945  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446332895)
07-25 07:25:32.945  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:262
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:199
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 07:25:32.946  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 07:25:32.947  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 07:25:32.947  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:32.947  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:32.947  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:32.947  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:33.007  2173  2173 D VoiceManager: Ready for speech
07-25 07:25:38.010  2173  2173 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@ca31c46
07-25 07:25:38.010  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753446332895)
07-25 07:25:38.010  2173  2173 D AudioManager: 🎵 FOCUS_GAINED: Audio focus gained for SPEECH_RECOGNITION
07-25 07:25:38.010  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:38.090  2173  2173 E VoiceManager: Speech recognition error: No recognition match
07-25 07:25:38.091  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:38.091  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446332895
07-25 07:25:38.091  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:528
07-25 07:25:38.092  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446332895)
07-25 07:25:38.092  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446332895)
07-25 07:25:38.092  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:38.093  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446332895)
07-25 07:25:38.094  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446332895)
07-25 07:25:38.094  2173  2173 D VoiceManager: No speech detected
07-25 07:25:38.094  2173  2173 D VoiceManager: Maximum retry attempts reached (3), resetting to idle
07-25 07:25:38.094  2173  2173 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-25 07:25:38.094  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:38.598  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-25 07:25:38.599  2173  2173 D VoiceManager: Conversation completed, re-enabling wake word detection
07-25 07:25:38.602  2173  2173 I VoiceManager: 🔄 WAKE_WORD_RESUME: Sent broadcast to resume wake word detection
07-25 07:25:38.602  2173  2173 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast action: com.anonymous.MobileJarvisNative.RESUME_WAKE_WORD
07-25 07:25:38.602  2173  2173 D VoiceManager: 🔄 WAKE_WORD_RESUME: Package name: com.anonymous.MobileJarvisNative
07-25 07:25:38.606  2173  2173 I WakeWordService: 🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========
07-25 07:25:38.606  2173  2173 I WakeWordService: 🔄 WAKE_WORD_RESUME: Action: com.anonymous.MobileJarvisNative.RESUME_WAKE_WORD
07-25 07:25:38.606  2173  2173 I WakeWordService: 🔄 WAKE_WORD_RESUME: Package: com.anonymous.MobileJarvisNative
07-25 07:25:38.606  2173  2173 I WakeWordService: 🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()
07-25 07:25:38.606  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========
07-25 07:25:38.606  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: Timestamp: 1753446338606
07-25 07:25:38.606  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: Previous state: Paused
07-25 07:25:38.606  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: Reinitializing AudioRecord for wake word detection
07-25 07:25:38.606  2173  2173 I AudioManager: 🎵 GLOBAL_FOCUS: Setting up global audio focus monitoring
07-25 07:25:38.606  2173  2173 D AudioManager: 🎵 GLOBAL_FOCUS: AudioManager initialized with enhanced focus monitoring
07-25 07:25:38.606  2173  2173 I AudioManager: AudioManager initialized
07-25 07:25:38.606  2173  2173 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
07-25 07:25:38.606  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: BACKGROUND_AUDIO (ID: wake_word_detection) - Priority: 4
07-25 07:25:38.606  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:38.606  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:38.606  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:38.606  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
wakeword.WakeWordService$registerPauseResumeReceiver$1.onReceive:698
07-25 07:25:38.608  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: BACKGROUND_AUDIO (ID: wake_word_detection) - Priority: 4
07-25 07:25:38.608  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: BACKGROUND_AUDIO, Queue size: 0
07-25 07:25:38.609  2173  2173 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
07-25 07:25:38.609  2173  2173 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
07-25 07:25:38.645  2173  2173 D WakeWordService: Audio recording started successfully
07-25 07:25:38.645  2173  3505 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
07-25 07:25:38.645  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: ✅ AudioRecord reinitialized and recording started
07-25 07:25:38.645  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: Active wake phrase: 'Hey Juni'
07-25 07:25:38.645  2173  3505 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
07-25 07:25:38.645  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: Wake word threshold: 0.1
07-25 07:25:38.645  2173  3505 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
07-25 07:25:38.645  2173  3506 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
07-25 07:25:38.645  2173  3506 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
07-25 07:25:38.645  2173  3505 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.1
07-25 07:25:38.645  2173  3505 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
07-25 07:25:38.646  2173  3506 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
07-25 07:25:38.646  2173  3506 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.1
07-25 07:25:38.646  2173  3506 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
07-25 07:25:38.648  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully
07-25 07:25:38.648  2173  2173 I WakeWordService: ▶️ PAUSE_RESUME: ====================================================
07-25 07:25:38.648  2173  2173 I WakeWordService: 🔄 WAKE_WORD_RESUME: ======================================
07-25 07:25:38.904  2173  3506 I WakeWordService: 🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: 0.9617 (threshold: 0.1)
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: *** WAKE WORD 'Hey Juni' ACTIVATED ***
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: Time: 07:25:38.904
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: Confidence: 0.9617077
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: Threshold: 0.1
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: Timestamp: 1753446338904
07-25 07:25:38.906  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: ================================================
07-25 07:25:38.906  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========
07-25 07:25:38.906  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: Send timestamp: 1753446338906
07-25 07:25:38.906  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: Action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 07:25:38.906  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: Wake word: 'Hey Juni'
07-25 07:25:38.906  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: Confidence: 0.9617077
07-25 07:25:38.907  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: ✅ Broadcast sent successfully
07-25 07:25:38.907  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native
07-25 07:25:38.907  2173  3506 I WakeWordService: 📡 BROADCAST_SEND: ====================================================
07-25 07:25:38.907  2173  3506 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-25 07:25:38.907  2173  3506 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-25 07:25:38.909  2173  2173 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-25 07:25:38.910  2173  2173 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753446338909
07-25 07:25:38.910  2173  2173 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 07:25:38.910  2173  2173 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-25 07:25:38.910  2173  2173 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-25 07:25:38.910  2173  3506 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-25 07:25:38.912  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-25 07:25:38.912  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-25 07:25:38.913  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 07:25:38.904
07-25 07:25:38.913  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-25 07:25:38.913  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9617
07-25 07:25:38.913  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-25 07:25:38.913  2173  2173 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-25 07:25:38.914  2173  2173 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9617077112197876,"timestamp":1753446338904}
07-25 07:25:38.914  2173  2173 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-25 07:25:38.914  2173  2173 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-25 07:25:38.914  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-25 07:25:38.914  2173  2173 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-25 07:25:38.916  2173  3506 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-25 07:25:38.916  2173  3506 I VoiceManager: Initializing OpenAI Whisper client
07-25 07:25:38.916  2173  3506 D VoiceManager: Whisper client initialized successfully
07-25 07:25:38.917  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection
07-25 07:25:38.918  2173  3506 I WakeWordService: 🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session
07-25 07:25:38.918  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========
07-25 07:25:38.918  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: Timestamp: 1753446338918
07-25 07:25:38.918  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition
07-25 07:25:38.918  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff
07-25 07:25:38.929  2173  2173 D VoiceManager: Deepgram client initialized for future use
07-25 07:25:38.929  2173  2173 D VoiceManager: Starting speech recognition on main thread after wake word
07-25 07:25:38.929  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:38.931  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:38.931  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:38.931  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446338931) - Priority: 1
07-25 07:25:38.931  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:38.931  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.onWakeWordDetected$lambda$1:249
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$4mGkjVYmNwZ2V53t6Tmw1BVI1Nc:0
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda6.run:2
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while BACKGROUND_AUDIO (priority: 4) is active
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 07:25:38.932  2173  2173 I AudioManager: 🎵 PRIORITY_INTERRUPT: Higher priority request (SPEECH_RECOGNITION, priority: 1) interrupting current (BACKGROUND_AUDIO, priority: 4)
07-25 07:25:38.932  2173  2173 I AudioManager: 🎵 SPEECH_RECOGNITION_PRIORITY: Speech recognition taking priority over BACKGROUND_AUDIO
07-25 07:25:38.932  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_INTERRUPT: Interrupting current request BACKGROUND_AUDIO (ID: wake_word_detection) for higher priority
07-25 07:25:38.932  2173  2173 W WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection
07-25 07:25:38.932  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 07:25:38.932  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:38.934  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: BACKGROUND_AUDIO (ID: wake_word_detection)
07-25 07:25:38.937  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446338931) - Priority: 1
07-25 07:25:38.937  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:38.937  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:38.937  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:38.937  2173  2173 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-25 07:25:38.937  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:38.939  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:38.939  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:38.940  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:38.940  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:38.946  2173  2173 I WakeWordService: 🔥 WAKEWORD_USE: ✅ Displayed detection toast to user
07-25 07:25:38.967  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@dd9f394
07-25 07:25:38.967  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446338931)
07-25 07:25:38.967  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:38.967  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:38.967  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: java.lang.Thread.getStackTrace:1841
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.handleAudioFocusChange:262
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.processAudioFocusRequest$lambda$2:199
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager.$r8$lambda$zxZlL5UkyRtmKE26zWpX-wdqEKo:0
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0.onAudioFocusChange:4
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Handler.dispatchMessage:111
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loopOnce:242
07-25 07:25:38.968  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.os.Looper.loop:362
07-25 07:25:38.976  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STATE: Current volume: 10/15
07-25 07:25:38.976  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:38.976  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:38.976  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:38.984  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:38.989  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition
07-25 07:25:38.989  2173  3506 D WakeWordService: ⏸️ PAUSE_RESUME: No wake word audio focus to release (current: speech_recognition_1753446338931)
07-25 07:25:38.996  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)
07-25 07:25:38.996  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...
07-25 07:25:38.997  2173  3506 I WakeWordService: ⏸️ PAUSE_RESUME: ====================================================
07-25 07:25:39.040  2173  2173 D VoiceManager: Restarting speech recognition for continuous conversation
07-25 07:25:39.040  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:39.044  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:39.044  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:39.044  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446339044) - Priority: 1
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.updateState$lambda$7:873
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.$r8$lambda$OlA7PseR6dLrmOIHn9eB2N7ujss:0
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$$ExternalSyntheticLambda5.run:2
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION (priority: 1) while SPEECH_RECOGNITION (priority: 1) is active
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: No specific conflict detected
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 Same type request detected (SPEECH_RECOGNITION), ensuring proper cleanup before new request
07-25 07:25:39.044  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446338931)
07-25 07:25:39.044  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:39.045  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446338931)
07-25 07:25:39.151  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446339044) - Priority: 1
07-25 07:25:39.151  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:39.151  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:39.151  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:39.151  2173  2173 D VoiceManager: Ignoring duplicate state change: LISTENING
07-25 07:25:39.152  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:39.152  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:39.152  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:39.176  2173  2173 D VoiceManager: Ready for speech
07-25 07:25:39.176  2173  2173 D VoiceManager: 🔄 WAKE_WORD_RESUME: Broadcast sent, WakeWordService should have resumed by now
07-25 07:25:39.185  2173  2173 E VoiceManager: Speech recognition error: Client error
07-25 07:25:44.176  2173  2173 E VoiceManager: Speech recognition error: No recognition match
07-25 07:25:44.176  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:44.176  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446339044
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:44.176  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:528
07-25 07:25:44.176  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446339044)
07-25 07:25:44.176  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446339044)
07-25 07:25:44.177  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:44.178  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446339044)
07-25 07:25:44.179  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446339044)
07-25 07:25:44.179  2173  2173 D VoiceManager: No speech detected
07-25 07:25:44.179  2173  2173 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 07:25:44.180  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:44.186  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:44.187  2173  2173 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 07:25:46.188  2173  2173 D VoiceManager: Retrying speech recognition (attempt 1)
07-25 07:25:46.188  2173  2173 D VoiceManager: Starting speech recognition retry on main thread
07-25 07:25:46.188  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:46.190  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:46.190  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:46.190  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446346190) - Priority: 1
07-25 07:25:46.190  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:46.191  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:46.191  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:46.191  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.requestAudioFocus:118
07-25 07:25:46.192  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startActualListening:361
07-25 07:25:46.192  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.startListening:349
07-25 07:25:46.192  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.invokeSuspend$lambda$0:974
07-25 07:25:46.192  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1.$r8$lambda$Mg1Xtyz4ShYIh_yNiXe6F8BBG2g:0
07-25 07:25:46.192  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$handleNoSpeechDetected$1$$ExternalSyntheticLambda0.run:2
07-25 07:25:46.194  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446346190) - Priority: 1
07-25 07:25:46.194  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:46.195  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:46.195  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:46.195  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 07:25:46.196  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:46.197  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:46.197  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:46.198  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:46.198  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:46.218  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b51d019
07-25 07:25:46.219  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446346190)
07-25 07:25:46.219  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:46.219  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.getThreadStackTrace:-2

07-25 07:25:46.220  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: android.media.AudioManager$ServiceEventHandlerDelegate$1.handleMessage:4282

07-25 07:25:46.221  2173  2173 D AudioManager: 🎵 FOCUS_LOST_TRANSIENT: Transient focus loss for SPEECH_RECOGNITION
07-25 07:25:46.221  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:46.221  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:46.223  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:46.266  2173  2173 D VoiceManager: Ready for speech
07-25 07:25:51.270  2173  2173 D AudioManager: dispatching onAudioFocusChange(1) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@b51d019
07-25 07:25:51.270  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_GAIN (1) for SPEECH_RECOGNITION (ID: speech_recognition_1753446346190)
07-25 07:25:51.270  2173  2173 D AudioManager: 🎵 FOCUS_GAINED: Audio focus gained for SPEECH_RECOGNITION
07-25 07:25:51.270  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:51.365  2173  2173 E VoiceManager: Speech recognition error: No recognition match
07-25 07:25:51.365  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:51.365  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASE: Requested for ID: speech_recognition_1753446346190
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASER: Stack trace:
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: java.lang.Thread.getStackTrace:1841
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.utils.AudioManager.releaseAudioFocus:310
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.releaseSpeechRecognitionAudioFocus:1212
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager.access$releaseSpeechRecognitionAudioFocus:40
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_RELEASE_CALLER: com.anonymous.MobileJarvisNative.voice.VoiceManager$createRecognitionListener$1.onError:528
07-25 07:25:51.365  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_RELEASING: Current focus holder SPEECH_RECOGNITION (ID: speech_recognition_1753446346190)
07-25 07:25:51.365  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONING: SPEECH_RECOGNITION (ID: speech_recognition_1753446346190)
07-25 07:25:51.365  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_ABANDON: Using AudioFocusRequest.abandonAudioFocusRequest()
07-25 07:25:51.368  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_ABANDONED: SPEECH_RECOGNITION (ID: speech_recognition_1753446346190)
07-25 07:25:51.369  2173  2173 D VoiceManager: 🎵 Released audio focus for speech recognition (ID: speech_recognition_1753446346190)
07-25 07:25:51.369  2173  2173 D VoiceManager: No speech detected
07-25 07:25:51.369  2173  2173 I VoiceManager: Message: I didn't hear anything. Listening again...
07-25 07:25:51.371  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:51.377  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Releasing audio focus before retry
07-25 07:25:51.377  2173  2173 D VoiceManager: Will retry speech recognition after 2000 ms (increased for audio focus cleanup)
07-25 07:25:52.225  2173  3166 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 49933158 chunks in 30s (isPaused: true)
07-25 07:25:53.378  2173  2173 D VoiceManager: Retrying speech recognition (attempt 2)
07-25 07:25:53.379  2173  2173 D VoiceManager: Starting speech recognition retry on main thread
07-25 07:25:53.379  2173  2173 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-25 07:25:53.381  2173  2173 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-25 07:25:53.381  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition
07-25 07:25:53.381  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_REQUEST: SPEECH_RECOGNITION (ID: speech_recognition_1753446353381) - Priority: 1
07-25 07:25:53.381  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_REQUESTER: Stack trace:
07-25 07:25:53.382  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_CALLER: dalvik.system.VMStack.getThreadStackTrace:-2

07-25 07:25:53.388  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_GRANTED: SPEECH_RECOGNITION (ID: speech_recognition_1753446353381) - Priority: 1
07-25 07:25:53.388  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_HOLDERS: Current focus: SPEECH_RECOGNITION, Queue size: 0
07-25 07:25:53.388  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition
07-25 07:25:53.388  2173  2173 I VoiceManager: 🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread
07-25 07:25:53.388  2173  2173 D VoiceManager: Voice state transition: RESPONDING -> LISTENING
07-25 07:25:53.389  2173  2173 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-25 07:25:53.390  2173  2173 D VoiceManager: LISTENING state detected but isListening=false, reactivating speech recognizer
07-25 07:25:53.391  2173  2173 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-25 07:25:53.391  2173  2173 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-25 07:25:53.391  2173  2173 I VoiceManager: SpeechRecognizer started listening.
07-25 07:25:53.409  2173  2173 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@2c802c5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@8f8affd
07-25 07:25:53.409  2173  2173 I AudioManager: 🎵 AUDIO_FOCUS_CHANGE: AUDIOFOCUS_LOSS_TRANSIENT (-2) for SPEECH_RECOGNITION (ID: speech_recognition_1753446353381)
07-25 07:25:53.409  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_LOSS_DETECTED: AUDIOFOCUS_LOSS_TRANSIENT (-2) - Stack trace:
07-25 07:25:53.410  2173  2173 W AudioManager: 🎵 AUDIO_FOCUS_STACK: dalvik.system.VMStack.
07-25 07:25:53.413  2173  2173 W VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition
07-25 07:25:53.413  2173  2173 D VoiceManager: 🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery
07-25 07:25:53.414  2173  2173 D AudioManager: 🎵 AUDIO_FOCUS_QUEUE_EMPTY: No more requests in queue
07-25 07:25:53.460  2173  2173 D VoiceManager: Ready for speech
^C
(base) cameronhightower@MacBookAir MobileJarvisNative % 