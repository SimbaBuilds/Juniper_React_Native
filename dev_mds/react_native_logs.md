07-24 23:39:16.881 21812 22078 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 23:39:16.881 21812 22078 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 23:39:16.881 21812 22078 D VoiceManager: Active conversation state (WAKE_WORD_DETECTED), pausing wake word detection
07-24 23:39:16.883 21812 22078 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 23:39:16.883 21812 22078 I VoiceManager: Initializing OpenAI Whisper client
07-24 23:39:16.884 21812 22078 D VoiceManager: Whisper client initialized successfully
07-24 23:39:16.885 21812 22078 D AudioManager: 🎵 Audio focus release requested for ID: wake_word_detection
07-24 23:39:16.888 21812 22078 D AudioManager: 🎵 Audio focus released for BACKGROUND_AUDIO (ID: wake_word_detection)
07-24 23:39:16.899 21812 21812 D VoiceManager: Deepgram client initialized for future use
07-24 23:39:16.900 21812 21812 D VoiceManager: Starting speech recognition on main thread after wake word
07-24 23:39:16.900 21812 21812 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-24 23:39:16.901 21812 21812 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-24 23:39:16.902 21812 21812 D VoiceManager: Requesting audio focus for SPEECH_RECOGNITION
07-24 23:39:16.902 21812 21812 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition_1753418356902)
07-24 23:39:16.905 21812 21812 D AudioManager: 🎵 Audio focus granted for SPEECH_RECOGNITION (ID: speech_recognition_1753418356902)
07-24 23:39:16.905 21812 21812 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus gained for speech recognition
07-24 23:39:16.905 21812 21812 I VoiceManager: Starting SpeechRecognizer on main thread
07-24 23:39:16.906 21812 21812 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 23:39:16.907 21812 21812 D VoiceManager: Active conversation state (LISTENING), pausing wake word detection
07-24 23:39:16.909 21812 21812 D VoiceManager: Speech recognition parameters: minLength=1000, completeSilence=3000, possibleSilence=1500
07-24 23:39:16.909 21812 21812 I VoiceManager: Using Android default timing parameters for SpeechRecognizer
07-24 23:39:16.917 21812 21812 I VoiceManager: SpeechRecognizer started listening.
07-24 23:39:16.956 21812 21812 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@5851bf5com.anonymous.MobileJarvisNative.utils.AudioManager$$ExternalSyntheticLambda0@2f95317
07-24 23:39:16.957 21812 21812 D AudioManager: 🎵 Audio focus change: -2 for SPEECH_RECOGNITION (ID: speech_recognition_1753418356902)
07-24 23:39:16.957 21812 21812 D AudioManager: 🎵 TRANSIENT_LOSS: Transient focus loss for SPEECH_RECOGNITION, waiting to regain focus
07-24 23:39:16.957 21812 21812 D AudioManager: 🎵 TRANSIENT_RECOVERY: Scheduled recovery attempt in 2000ms
07-24 23:39:17.055 21812 21812 D VoiceManager: Ready for speech
07-24 23:39:18.957 21812 21812 D AudioManager: 🎵 TRANSIENT_RECOVERY: Retrying audio focus after transient loss for SPEECH_RECOGNITION
07-24 23:39:18.961  6783  6783 D AudioManager: dispatching onAudioFocusChange(-2) to android.media.AudioManager@f92abb8eoj@f0bd8a3
07-24 23:39:18.961 21812 21812 D AudioManager: 🎵 Audio focus granted for SPEECH_RECOGNITION (ID: speech_recognition_1753418356902)
07-24 23:39:18.961 21812 21812 D VoiceManager: 🎵 SPEECH_RECOGNITION: Audio focus gained for speech recognition
07-24 23:39:22.173 21812 21812 E VoiceManager: Speech recognition error: No recognition match
07-24 23:39:22.173 21812 21812 D VoiceManager: No speech detected
07-24 23:39:22.173 21812 21812 I VoiceManager: Message: I didn't hear anything. Listening again...
07-24 23:39:22.180 21812 21812 D VoiceManager: Will retry speech recognition after 1000 ms
07-24 23:39:23.182 21812 21812 D VoiceManager: Retrying speech recognition (attempt 1)
07-24 23:39:23.182 21812 21812 D VoiceManager: Starting speech recognition retry on main thread
07-24 23:39:23.182 21812 21812 D VoiceManager: startListening() called. Attempting to start speech recognition...
07-24 23:39:23.184 21812 21812 D VoiceManager: Sent broadcast to pause wake word detection during listening
07-24 23:39:23.184 21812 21812 D VoiceManager: Requesting audio focus for SPEECH_RECOGNITION
07-24 23:39:23.184 21812 21812 D AudioManager: 🎵 Audio focus requested: SPEECH_RECOGNITION (ID: speech_recognition_1753418363184)
07-24 23:39:23.185 21812 21812 D AudioManager: 🎵 INTERNAL_CONFLICT_CHECK: New request SPEECH_RECOGNITION while SPEECH_RECOGNITION is active
07-24 23:39:23.185 21812 21812 D AudioManager: 🎵 Same priority request (SPEECH_RECOGNITION) queued
07-24 23:39:23.185 21812 21812 E VoiceManager: Failed to gain audio focus for speech recognition
