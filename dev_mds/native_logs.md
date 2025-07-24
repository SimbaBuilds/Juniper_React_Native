
07-23 20:02:44.691 14525 16094 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-23 20:02:44.691 14525 16094 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-23 20:02:44.691 14525 14525 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-23 20:02:44.691 14525 16094 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-23 20:02:44.691 14525 16094 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
07-23 20:02:44.692 14525 14525 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753318964691
07-23 20:02:44.692 14525 14525 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-23 20:02:44.692 14525 14525 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-23 20:02:44.692 14525 14525 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-23 20:02:44.693 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-23 20:02:44.693 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-23 20:02:44.693 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 20:02:44.689
07-23 20:02:44.693 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-23 20:02:44.694 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9059
07-23 20:02:44.694 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-23 20:02:44.694 14525 14525 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-23 20:02:44.694 14525 14525 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9058618545532227,"timestamp":1753318964689}
07-23 20:02:44.694 14525 14525 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-23 20:02:44.695 14525 14525 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-23 20:02:44.695 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-23 20:02:44.695 14525 14525 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-23 20:02:44.695 14525 16094 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-23 20:02:44.695 14525 16094 I VoiceManager: Initializing OpenAI Whisper client
07-23 20:02:44.696 14525 16094 D WhisperClient: Initializing Whisper client
07-23 20:02:44.697 14525 16094 I WhisperClient: Whisper client initialized successfully
07-23 20:02:44.697 14525 16094 D VoiceManager: Whisper client initialized successfully
07-23 20:02:44.697 14525 16094 D VoiceManager: Attempting to play wake word response...
07-23 20:02:44.697 14525 16094 D TextToSpeechManager: 🎵 TTS QUEUE: speak() called with text: 'Sir?', queueMode: 0
07-23 20:02:44.697 14525 16094 D TextToSpeechManager: 🎵 TTS QUEUE: QUEUE_FLUSH - clearing queue and stopping current speech
07-23 20:02:44.698 14525 16094 D TextToSpeechManager: 🎵 TTS QUEUE: Added request to queue. Queue size: 1
07-23 20:02:44.698 14525 16094 D TextToSpeechManager: 🎵 TTS QUEUE: Processing request: 'Sir?'
07-23 20:02:44.698 14525 16094 D TextToSpeechManager: 🎵 TTS TIMING: speakImmediately() called at 1753318964698 with text: 'Sir?'
07-23 20:02:44.699 14525 16094 D AudioManager: 🎵 Audio focus requested: TTS (ID: tts_242387a0-ceb1-4b0e-86de-70cfd5c1eedc)
07-23 20:02:44.702 14525 16094 D AudioManager: 🎵 Audio focus granted for TTS (ID: tts_242387a0-ceb1-4b0e-86de-70cfd5c1eedc)
07-23 20:02:44.702 14525 16094 D TextToSpeechManager: 🎵 TTS audio focus gained
07-23 20:02:44.703 14525 16094 D TextToSpeechManager: 🎵 TTS audio focus request result: true
07-23 20:02:44.703 14525 16094 D TextToSpeechManager: 🎵 TTS TIMING: Audio focus handling took 5ms - granted: true
07-23 20:02:44.703 14525 16094 D TextToSpeechManager: Generated utterance ID: fcbe5e56-894c-4c26-9d96-2f9d599d766b
07-23 20:02:44.703 14525 16094 D TextToSpeechManager: 🎵 TTS TIMING: Calling textToSpeech.speak() at 5ms
07-23 20:02:44.704 14525 16094 D TextToSpeechManager: 🎵 TTS TIMING: textToSpeech.speak() returned at 6ms: 0
07-23 20:02:44.704 14525 16094 I TextToSpeechManager: TTS speak() call successful
07-23 20:02:44.704 14525 16094 I VoiceManager: Played wake word response using local TTS
07-23 20:02:44.705 14525 16094 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-23 20:02:44.706 14525 16094 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-23 20:02:44.706 14525 16094 D VoiceManager: startListening called from background thread, posting to main thread
07-23 20:02:44.727 14525 14525 D VoiceManager: Deepgram client initialized for future use
07-23 20:02:44.727 14525 14525 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-23 20:02:44.729 14525 14525 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-23 20:02:44.730 14525 14525 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-23 20:02:44.731 14525 14525 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-23 20:02:44.731 14525 14525 D TextToSpeechManager: 🎵 TTS QUEUE: Stopping TTS and clearing queue
07-23 20:02:44.733 14525 14525 D AudioManager: 🎵 Audio focus release requested for ID: tts_242387a0-ceb1-4b0e-86de-70cfd5c1eedc
07-23 20:02:44.734 14525 14525 D AudioManager: 🎵 Audio focus released for TTS (ID: tts_242387a0-ceb1-4b0e-86de-70cfd5c1eedc)
07-23 20:02:44.735 14525 14525 D TextToSpeechManager: 🎵 TTS audio focus released
07-23 20:02:44.735 14525 14525 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=1500, possibleSilence=800
07-23 20:02:44.735 14525 14525 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-23 20:02:44.740 14525 14525 I VoiceManager: SpeechRecognizer started listening.
07-23 20:02:44.870 14525 14525 D VoiceManager: Ready for speech
07-23 20:02:49.983 14525 14525 E VoiceManager: Speech recognition error: No recognition match
07-23 20:02:49.983 14525 14525 D VoiceManager: No speech detected
07-23 20:02:49.983 14525 14525 D VoiceManager: Maximum retry attempts reached (1), resetting to idle
07-23 20:02:49.983 14525 14525 I VoiceManager: Message: I didn't hear anything. Please try saying 'Jarvis' again when you're ready.
07-23 20:02:50.013 14525 14525 D VoiceManager: Will reset to idle after 500 ms
07-23 20:02:50.516 14525 14525 D VoiceManager: Voice state transition: RESPONDING -> IDLE
07-23 20:02:50.519 14525 14525 D VoiceManager: Conversation completed, re-enabling wake word detection
^C
(base) cameronhightower@Camerons-Air MobileJarvisNative % 