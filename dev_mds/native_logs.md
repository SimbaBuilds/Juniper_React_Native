--------- beginning of main
07-24 21:18:28.768 21077 21804 I VoiceManager: Wake word detected, stopping wake word detection but keeping listening on...
07-24 21:18:28.768 21077 21804 D VoiceManager: Voice state transition: IDLE -> WAKE_WORD_DETECTED
07-24 21:18:28.768 21077 21804 D VoiceManager: Wake word detected, immediately stopping wake word detection
07-24 21:18:28.769 21077 21804 D VoiceManager: 🔇 FOCUS_FREE: No wake word audio focus release needed
07-24 21:18:28.770 21077 21804 D VoiceManager: Sent broadcast to pause wake word detection but keep mic active
07-24 21:18:28.770 21077 21804 I VoiceManager: Initializing OpenAI Whisper client
07-24 21:18:28.770 21077 21804 D VoiceManager: Whisper client initialized successfully
07-24 21:18:28.770 21077 21804 D VoiceManager: Adding 300ms delay before starting speech recognition to avoid conflicts
07-24 21:18:28.771 21077 21804 D AudioManager: 🎵 Audio focus release requested for ID: wake_word_detection
07-24 21:18:28.772 21077 21804 D AudioManager: 🎵 Audio focus released for BACKGROUND_AUDIO (ID: wake_word_detection)
07-24 21:18:28.779 21077 21077 I WakeWordModule: 📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========
07-24 21:18:28.779 21077 21077 I WakeWordModule: 📻 RECEIVER_TRIGGER: Receive timestamp: 1753409908779
07-24 21:18:28.779 21077 21077 I WakeWordModule: 📻 RECEIVER_TRIGGER: Intent action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 21:18:28.779 21077 21077 I WakeWordModule: 📻 RECEIVER_TRIGGER: Expected action: com.anonymous.MobileJarvisNative.WAKE_WORD_DETECTED_RN
07-24 21:18:28.780 21077 21077 I WakeWordModule: 📻 RECEIVER_TRIGGER: Action matches: true
07-24 21:18:28.784 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========
07-24 21:18:28.785 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE
07-24 21:18:28.785 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: 🕒 Time: 21:18:28.754
07-24 21:18:28.785 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: 🎯 Wake word: 'Hey Juni'
07-24 21:18:28.786 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: 📊 Confidence: 0.9122
07-24 21:18:28.786 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...
07-24 21:18:28.787 21077 21077 D WakeWordModule: 📡 SEND_EVENT: About to emit event 'wakeWordDetected' to React Native
07-24 21:18:28.787 21077 21077 D WakeWordModule: 📡 SEND_EVENT: Params: {"wakeWord":"Hey Juni","confidence":0.9122265577316284,"timestamp":1753409908754}
07-24 21:18:28.787 21077 21077 D WakeWordModule: 📡 SEND_EVENT: ReactApplicationContext available: true
07-24 21:18:28.789 21077 21077 D WakeWordModule: 📡 SEND_EVENT: ✅ Event 'wakeWordDetected' emitted successfully to React Native
07-24 21:18:28.789 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully
07-24 21:18:28.789 21077 21077 I WakeWordModule: 📡 RN_BRIDGE: =======================================================
07-24 21:18:28.798 21077 21077 D AudioManager: 🎵 No more requests in queue
07-24 21:18:29.078 21077 21077 D VoiceManager: Delay completed, starting speech recognition
07-24 21:18:29.078 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 21:18:29.078 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 21:18:29.078 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 21:18:29.078 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 21:18:29.079 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$WAKE_WORD_DETECTED@3b3fef
07-24 21:18:29.079 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: false
07-24 21:18:29.079 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: true
07-24 21:18:29.079 21077 21077 D VoiceManager: 🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking
07-24 21:18:29.079 21077 21077 D VoiceManager: 🔧 RECOGNITION_MODE: Reset to OFFLINE mode for new session
07-24 21:18:29.080 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 21:18:29.080 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 21:18:29.080 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 21:18:29.080 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: ========== SPEECH RECOGNITION PREFLIGHT ===========
07-24 21:18:29.082 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Speech recognition available: true
07-24 21:18:29.088 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:29.090 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Google app status: GoogleApp:true, GoogleTTS:true, GoogleAppMicPerm:true
07-24 21:18:29.100 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: OK Google conflicts: GoogleAssistantActive:false, AudioMode:0, ModeNormal:true, BluetoothSco:false, Speakerphone:false
07-24 21:18:29.102 21077 21077 D VoiceManager: 🎺 OK_GOOGLE_FIX: Applied OK Google conflict mitigation
07-24 21:18:29.102 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: OK Google mitigation applied: true
07-24 21:18:29.102 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Our app record permission: true
07-24 21:18:29.103 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Microphone muted: false
07-24 21:18:29.103 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: ====================================================
07-24 21:18:29.104 21077 21077 D VoiceManager: Voice state transition: WAKE_WORD_DETECTED -> LISTENING
07-24 21:18:29.104 21077 21077 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 21:18:29.105 21077 21077 D VoiceManager: 🔄 GRACEFUL_DEGRADATION: Cleared partial results for new recognition session
07-24 21:18:29.105 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 21:18:29.105 21077 21077 D VoiceManager: 🔧 AUDIO_FORMAT: Using PCM audio format for offline recognition
07-24 21:18:29.106 21077 21077 D VoiceManager: 🔧 RESEARCH_FIX: Enhanced Google Assistant mitigation parameters added
07-24 21:18:29.106 21077 21077 D VoiceManager: 🔧 RESEARCH_FIX: EXTRA_PREFER_OFFLINE=true, EXTRA_CALLING_PACKAGE=com.anonymous.MobileJarvisNative
07-24 21:18:29.106 21077 21077 D VoiceManager: 🔧 RECOGNITION_MODE: Using OFFLINE recognition mode
07-24 21:18:29.106 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 21:18:29.106 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 21:18:29.106 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 21:18:29.106 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 21:18:29.107 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: Applied aggressive timing parameters for Google Assistant mitigation:
07-24 21:18:29.107 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 2000ms (was 1000ms)
07-24 21:18:29.107 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 3000ms (was 1500ms)
07-24 21:18:29.107 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 1500ms (was 800ms)
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.EXTRA_ADDITIONAL_LANGUAGES: [Ljava.lang.String;@b7124b7
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PROMPT: 
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: 2000
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: 3000
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.DICTATION_MODE: true
07-24 21:18:29.107 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS: 1500
07-24 21:18:29.108 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 21:18:29.108 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.GET_AUDIO_FORMAT: audio/pcm
07-24 21:18:29.108 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - calling_package: com.anonymous.MobileJarvisNative
07-24 21:18:29.108 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PREFER_OFFLINE: true
07-24 21:18:29.108 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: ========== COMPREHENSIVE SERVICE DIAGNOSTICS ==========
07-24 21:18:29.110 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Found 1 activities handling ACTION_RECOGNIZE_SPEECH
07-24 21:18:29.110 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Activity [0]: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 21:18:29.111 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Enabled: true
07-24 21:18:29.111 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Exported: true
07-24 21:18:29.113 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Found 1 services implementing RecognitionService
07-24 21:18:29.114 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Service [0]: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:29.114 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Enabled: true
07-24 21:18:29.114 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Exported: true
07-24 21:18:29.114 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Is TTS Service: true
07-24 21:18:29.116 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Has RECORD_AUDIO permission: true
07-24 21:18:29.116 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Google services found: 1
07-24 21:18:29.117 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Google Service: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:29.119 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:29.147 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 21:18:29.147 21077 21077 D VoiceManager: 🔍 SERVICE_DETECTION: ========== FINDING BEST SPEECH RECOGNITION SERVICE ===========
07-24 21:18:29.147 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: ========== ACTIVATING GOOGLE SPEECH SERVICES ===========
07-24 21:18:29.147 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: ========== CONFIGURING GOOGLE SPEECH SETTINGS ===========
07-24 21:18:29.149 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app found - checking capabilities
07-24 21:18:29.153 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app permissions - RECORD_AUDIO: true, INTERNET: true, NETWORK_STATE: true
07-24 21:18:29.153 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google app component states
07-24 21:18:29.154 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.opa.hq.OpaHqActivity state: 1
07-24 21:18:29.155 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.search.core.service.SearchService state: 0
07-24 21:18:29.156 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.voicesearch.serviceapi.GoogleRecognitionService state: 0
07-24 21:18:29.157 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService state: 0
07-24 21:18:29.157 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google Play Services speech capabilities
07-24 21:18:29.171 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: =================================================================
07-24 21:18:29.171 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Configuration result: true
07-24 21:18:29.171 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 1 - Triggering Google app speech initialization
07-24 21:18:29.171 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google app version: 16.28.62.ve.arm64
07-24 21:18:29.172 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 2 - Checking Google Assistant integration
07-24 21:18:29.178 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Found 1 assistant activities
07-24 21:18:29.178 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google Assistant found: com.google.android.googlequicksearchbox
07-24 21:18:29.178 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 3 - Checking alternative Google packages
07-24 21:18:29.178 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.apps.speechservices not available: com.google.android.apps.speechservices
07-24 21:18:29.179 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.tts found with 13 services
07-24 21:18:29.179 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: Potential speech service found: com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:29.180 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: ✅ Enabled speech service found: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:29.180 21077 21077 I VoiceManager: 🔍 SERVICE_DETECTION: ✅ Google service activated: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:29.180 21077 21077 I VoiceManager: 🔍 SERVICE_DIAGNOSTICS: BEST SERVICE SELECTED: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:29.180 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: =================================================================
07-24 21:18:29.182 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:29.182 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 21:18:29.182 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 21:18:29.182 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.EXTRA_ADDITIONAL_LANGUAGES=[], android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.PROMPT=, android.speech.extras.SPEECH_INPUT_MINIMUM_LENGTH_MILLIS=2000, android.speech.extras.SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS=3000, android.speech.extra.DICTATION_MODE=true, android.speech.extras.SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS=1500, android.speech.extra.MAX_RESULTS=1, android.speech.extra.GET_AUDIO_FORMAT=audio/pcm, calling_package=com.anonymous.MobileJarvisNative, android.speech.extra.PREFER_OFFLINE=true}]
07-24 21:18:29.182 21077 21077 D VoiceManager: 🔇 FOCUS_FREE: Skipping audio focus checks - using comprehensive stream muting instead
07-24 21:18:29.190 21077 21077 D VoiceManager: 🏺 OK_GOOGLE_FIX: Pre-recognition status: GoogleAssistantActive:false, AudioMode:0, ModeNormal:true, BluetoothSco:false, Speakerphone:false
07-24 21:18:29.191 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Using focus-free speech recognition approach
07-24 21:18:29.191 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: No audio focus requests - SpeechRecognizer handles internal requirements
07-24 21:18:29.191 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Comprehensive stream muting prevents beep interference
07-24 21:18:29.191 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Starting recognition session isolation
07-24 21:18:29.192 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Starting comprehensive stream muting for silent recognition
07-24 21:18:29.284 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Muted SYSTEM stream (was 3)
07-24 21:18:29.323 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Muted MUSIC stream (was 10)
07-24 21:18:29.334 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Reduced NOTIFICATION stream to 1 (was 5)
07-24 21:18:29.334 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Preserving RING stream for call functionality (3)
07-24 21:18:29.334 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Preserving ALARM stream for alarm functionality (6)
07-24 21:18:29.334 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: All audio streams muted for silent speech recognition
07-24 21:18:29.334 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Recognition will proceed without audio focus competition
07-24 21:18:29.335 21077 21077 W VoiceManager: 🚫 DND_MODE: App doesn't have Do Not Disturb access permission
07-24 21:18:29.436 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Audio isolation established - all streams muted for 100ms
07-24 21:18:29.436 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: 1753409909436
07-24 21:18:29.444 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully
07-24 21:18:29.445 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: ===================================
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Ready for speech at 1753409909621
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time since start: 185ms
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Parameters: Bundle[EMPTY_PARCEL]
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer ready - audio focus managed centrally
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition start time: 1753409909621
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: 185ms
07-24 21:18:29.621 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition active with centralized focus management
07-24 21:18:29.645 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognition confirmed active after 200ms
07-24 21:18:29.653 21077 21077 V VoiceManager: 🎤 SPEECH_RECOGNITION: RMS changed: -2.0dB
07-24 21:18:29.653 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: High audio level detected: -2.0dB
07-24 21:18:31.513 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Beginning of speech detected
07-24 21:18:39.054 21077 21077 D VoiceManager: stopListening() called. Stopping speech recognition...
07-24 21:18:39.055 21077 21077 I VoiceManager: SpeechRecognizer stopped listening.
07-24 21:18:39.189 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========
07-24 21:18:39.189 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error code: 7
07-24 21:18:39.189 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Error message: No recognition match
07-24 21:18:39.189 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Total listening time: 9568ms
07-24 21:18:39.189 21077 21077 E VoiceManager: 🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current retry count: 0
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: No speech retry count: 0
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: IDLE
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer initialized: true
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Is listening flag: false
07-24 21:18:39.190 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Thread: main
07-24 21:18:39.196 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 21:18:39.198 21077 21077 E VoiceManager: 🎤 SPEECH_RECOGNITION: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:39.198 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Recognition error - ending session isolation
07-24 21:18:39.198 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: Restoring all audio streams after silent recognition
07-24 21:18:39.248 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: Restored SYSTEM stream to 3
07-24 21:18:39.266 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: Restored MUSIC stream to 10
07-24 21:18:39.291 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: Restored NOTIFICATION stream to 5
07-24 21:18:39.291 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: RING and ALARM streams were preserved during recognition
07-24 21:18:39.291 21077 21077 I VoiceManager: 🔊 FOCUS_FREE: All audio streams restored to original levels
07-24 21:18:39.342 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Audio streams restored after error with 50ms stabilization
07-24 21:18:39.342 21077 21077 I VoiceManager: 🔧 RECREATE_PATTERN: Destroying and recreating SpeechRecognizer after error
07-24 21:18:39.343 21077 21077 D VoiceManager: 🔧 RECREATE_PATTERN: SpeechRecognizer destroyed, will recreate on next use
07-24 21:18:39.343 21077 21077 W VoiceManager: 🔧 FALLBACK_STRATEGY: Offline recognition failed, switching to ONLINE mode
07-24 21:18:39.343 21077 21077 W VoiceManager: 🔧 FALLBACK_STRATEGY: Error: No recognition match (code: 7)
07-24 21:18:39.343 21077 21077 W VoiceManager: 🔧 FALLBACK_STRATEGY: Listening time: 9568ms
07-24 21:18:40.344 21077 21077 D VoiceManager: 🔧 FALLBACK_STRATEGY: Retrying with ONLINE recognition mode
07-24 21:18:40.344 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========
07-24 21:18:40.344 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current thread: main
07-24 21:18:40.344 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Is main thread: true
07-24 21:18:40.344 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current listening state: false
07-24 21:18:40.345 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Current voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@3dd593f
07-24 21:18:40.345 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer null: true
07-24 21:18:40.345 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognition initialized: false
07-24 21:18:40.348 21077 21077 D VoiceManager: 🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking
07-24 21:18:40.349 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening
07-24 21:18:40.350 21077 21077 W VoiceManager: 🎤 SPEECH_RECOGNITION: Speech recognizer was null or not initialized, reinitializing...
07-24 21:18:40.350 21077 21077 D VoiceManager: 🔧 RECREATE_PATTERN: Destroyed old speech recognizer before recreating
07-24 21:18:40.351 21077 21077 D VoiceManager: 🔍 SERVICE_DETECTION: ========== FINDING BEST SPEECH RECOGNITION SERVICE ===========
07-24 21:18:40.351 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: ========== ACTIVATING GOOGLE SPEECH SERVICES ===========
07-24 21:18:40.351 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: ========== CONFIGURING GOOGLE SPEECH SETTINGS ===========
07-24 21:18:40.351 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app found - checking capabilities
07-24 21:18:40.351 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app permissions - RECORD_AUDIO: true, INTERNET: true, NETWORK_STATE: true
07-24 21:18:40.351 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google app component states
07-24 21:18:40.352 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.opa.hq.OpaHqActivity state: 1
07-24 21:18:40.352 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.search.core.service.SearchService state: 0
07-24 21:18:40.353 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.voicesearch.serviceapi.GoogleRecognitionService state: 0
07-24 21:18:40.353 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService state: 0
07-24 21:18:40.353 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google Play Services speech capabilities
07-24 21:18:40.372 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: =================================================================
07-24 21:18:40.372 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Configuration result: true
07-24 21:18:40.372 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 1 - Triggering Google app speech initialization
07-24 21:18:40.372 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google app version: 16.28.62.ve.arm64
07-24 21:18:40.374 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 2 - Checking Google Assistant integration
07-24 21:18:40.377 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Found 1 assistant activities
07-24 21:18:40.377 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google Assistant found: com.google.android.googlequicksearchbox
07-24 21:18:40.377 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 3 - Checking alternative Google packages
07-24 21:18:40.378 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.apps.speechservices not available: com.google.android.apps.speechservices
07-24 21:18:40.378 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.tts found with 13 services
07-24 21:18:40.378 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: Potential speech service found: com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.380 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: ✅ Enabled speech service found: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:40.380 21077 21077 I VoiceManager: 🔍 SERVICE_DETECTION: ✅ Google service activated: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:40.380 21077 21077 I VoiceManager: 🔧 SERVICE_DETECTION: Speech recognizer initialized with service: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.380 21077 21077 D VoiceManager: Speech recognizer initialized on main thread
07-24 21:18:40.380 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Proceeding to internal start...
07-24 21:18:40.380 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========
07-24 21:18:40.380 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: ========== SPEECH RECOGNITION PREFLIGHT ===========
07-24 21:18:40.382 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Speech recognition available: true
07-24 21:18:40.386 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Audio permissions: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:40.386 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Google app status: GoogleApp:true, GoogleTTS:true, GoogleAppMicPerm:true
07-24 21:18:40.393 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: OK Google conflicts: GoogleAssistantActive:false, AudioMode:0, ModeNormal:true, BluetoothSco:false, Speakerphone:false
07-24 21:18:40.396 21077 21077 D VoiceManager: 🎺 OK_GOOGLE_FIX: Applied OK Google conflict mitigation
07-24 21:18:40.396 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: OK Google mitigation applied: true
07-24 21:18:40.396 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Our app record permission: true
07-24 21:18:40.398 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: Microphone muted: false
07-24 21:18:40.398 21077 21077 D VoiceManager: 🔍 PREFLIGHT_CHECK: ====================================================
07-24 21:18:40.398 21077 21077 D VoiceManager: Voice state transition: IDLE -> LISTENING
07-24 21:18:40.398 21077 21077 D VoiceManager: Active conversation state (LISTENING), ensuring wake word detection is paused
07-24 21:18:40.400 21077 21077 D VoiceManager: 🔄 GRACEFUL_DEGRADATION: Cleared partial results for new recognition session
07-24 21:18:40.400 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Creating recognizer intent...
07-24 21:18:40.400 21077 21077 D VoiceManager: 🔧 AUDIO_FORMAT: Using default audio format for online recognition
07-24 21:18:40.400 21077 21077 D VoiceManager: 🔧 RESEARCH_FIX: Enhanced Google Assistant mitigation parameters added
07-24 21:18:40.400 21077 21077 D VoiceManager: 🔧 RESEARCH_FIX: EXTRA_PREFER_OFFLINE=false, EXTRA_CALLING_PACKAGE=com.anonymous.MobileJarvisNative
07-24 21:18:40.400 21077 21077 D VoiceManager: 🔧 RECOGNITION_MODE: Using ONLINE recognition mode
07-24 21:18:40.400 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Basic parameters set:
07-24 21:18:40.400 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Language model: free_form
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Partial results: true
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Max results: 1
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Timing parameters from config:
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 1000ms
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 1500ms
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 800ms
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - Use custom params: false
07-24 21:18:40.401 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: Applied aggressive timing parameters for Google Assistant mitigation:
07-24 21:18:40.401 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Min length: 2000ms (was 1000ms)
07-24 21:18:40.401 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Complete silence: 3000ms (was 1500ms)
07-24 21:18:40.401 21077 21077 I VoiceManager: 🎤 SPEECH_RECOGNITION: - Possible silence: 1500ms (was 800ms)
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Final intent extras:
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PARTIAL_RESULTS: true
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.EXTRA_ADDITIONAL_LANGUAGES: [Ljava.lang.String;@8ea0389
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.LANGUAGE_MODEL: free_form
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PROMPT: 
07-24 21:18:40.401 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_MINIMUM_LENGTH_MILLIS: 2000
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS: 3000
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.DICTATION_MODE: true
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extras.SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS: 1500
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.MAX_RESULTS: 1
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - calling_package: com.anonymous.MobileJarvisNative
07-24 21:18:40.402 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: - android.speech.extra.PREFER_OFFLINE: false
07-24 21:18:40.402 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: ========== COMPREHENSIVE SERVICE DIAGNOSTICS ==========
07-24 21:18:40.403 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Found 1 activities handling ACTION_RECOGNIZE_SPEECH
07-24 21:18:40.403 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Activity [0]: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSActivity
07-24 21:18:40.403 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Enabled: true
07-24 21:18:40.403 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Exported: true
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Found 1 services implementing RecognitionService
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Service [0]: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Enabled: true
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Exported: true
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Is TTS Service: true
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS:   - Has RECORD_AUDIO permission: true
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Google services found: 1
07-24 21:18:40.406 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Google Service: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.411 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:40.411 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 21:18:40.411 21077 21077 D VoiceManager: 🔍 SERVICE_DETECTION: ========== FINDING BEST SPEECH RECOGNITION SERVICE ===========
07-24 21:18:40.411 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: ========== ACTIVATING GOOGLE SPEECH SERVICES ===========
07-24 21:18:40.411 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: ========== CONFIGURING GOOGLE SPEECH SETTINGS ===========
07-24 21:18:40.411 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app found - checking capabilities
07-24 21:18:40.411 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Google app permissions - RECORD_AUDIO: true, INTERNET: true, NETWORK_STATE: true
07-24 21:18:40.411 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google app component states
07-24 21:18:40.413 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.opa.hq.OpaHqActivity state: 1
07-24 21:18:40.414 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.search.core.service.SearchService state: 0
07-24 21:18:40.414 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.voicesearch.serviceapi.GoogleRecognitionService state: 0
07-24 21:18:40.415 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Component com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService state: 0
07-24 21:18:40.415 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: Checking Google Play Services speech capabilities
07-24 21:18:40.424 21077 21077 D VoiceManager: ⚙️ GOOGLE_CONFIG: =================================================================
07-24 21:18:40.425 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Configuration result: true
07-24 21:18:40.425 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 1 - Triggering Google app speech initialization
07-24 21:18:40.425 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google app version: 16.28.62.ve.arm64
07-24 21:18:40.426 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 2 - Checking Google Assistant integration
07-24 21:18:40.428 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Found 1 assistant activities
07-24 21:18:40.428 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Google Assistant found: com.google.android.googlequicksearchbox
07-24 21:18:40.428 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Method 3 - Checking alternative Google packages
07-24 21:18:40.432 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.apps.speechservices not available: com.google.android.apps.speechservices
07-24 21:18:40.432 21077 21077 D VoiceManager: 🌟 GOOGLE_ACTIVATION: Package com.google.android.tts found with 13 services
07-24 21:18:40.432 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: Potential speech service found: com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.435 21077 21077 I VoiceManager: 🌟 GOOGLE_ACTIVATION: ✅ Enabled speech service found: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:40.435 21077 21077 I VoiceManager: 🔍 SERVICE_DETECTION: ✅ Google service activated: ComponentInfo{com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService}
07-24 21:18:40.435 21077 21077 I VoiceManager: 🔍 SERVICE_DIAGNOSTICS: BEST SERVICE SELECTED: com.google.android.tts/com.google.android.apps.speech.tts.googletts.service.GoogleTTSRecognitionService
07-24 21:18:40.435 21077 21077 D VoiceManager: 🔍 SERVICE_DIAGNOSTICS: =================================================================
07-24 21:18:40.436 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: System audio info: RecordPermission:true, MicMuted:false, Mode:0, BluetoothSco:false, Speakerphone:false
07-24 21:18:40.437 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Available audio inputs: 15:moto g power 5G - 2023, 18:moto g power 5G - 2023, 15:moto g power 5G - 2023, 25:moto g power 5G - 2023, 16:moto g power 5G - 2023, 28:moto g power 5G - 2023
07-24 21:18:40.437 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Recognizer intent created
07-24 21:18:40.437 21077 21077 D VoiceManager: 🎤 SPEECH_RECOGNITION: Intent extras: Bundle[{android.speech.extra.PARTIAL_RESULTS=true, android.speech.extra.EXTRA_ADDITIONAL_LANGUAGES=[], android.speech.extra.LANGUAGE_MODEL=free_form, android.speech.extra.PROMPT=, android.speech.extras.SPEECH_INPUT_MINIMUM_LENGTH_MILLIS=2000, android.speech.extras.SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS=3000, android.speech.extra.DICTATION_MODE=true, android.speech.extras.SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS=1500, android.speech.extra.MAX_RESULTS=1, calling_package=com.anonymous.MobileJarvisNative, android.speech.extra.PREFER_OFFLINE=false}]
07-24 21:18:40.437 21077 21077 D VoiceManager: 🔇 FOCUS_FREE: Skipping audio focus checks - using comprehensive stream muting instead
07-24 21:18:40.442 21077 21077 D VoiceManager: 🏺 OK_GOOGLE_FIX: Pre-recognition status: GoogleAssistantActive:false, AudioMode:0, ModeNormal:true, BluetoothSco:false, Speakerphone:false
07-24 21:18:40.445 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Using focus-free speech recognition approach
07-24 21:18:40.445 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: No audio focus requests - SpeechRecognizer handles internal requirements
07-24 21:18:40.445 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Comprehensive stream muting prevents beep interference
07-24 21:18:40.445 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Starting recognition session isolation
07-24 21:18:40.445 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Starting comprehensive stream muting for silent recognition
07-24 21:18:40.512 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Muted SYSTEM stream (was 3)
07-24 21:18:40.521 21077 21804 D VoiceManager: Ignoring wake word detection - conversation already in progress
07-24 21:18:40.560 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Muted MUSIC stream (was 10)
07-24 21:18:40.572 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Reduced NOTIFICATION stream to 1 (was 5)
07-24 21:18:40.572 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Preserving RING stream for call functionality (3)
07-24 21:18:40.572 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Preserving ALARM stream for alarm functionality (6)
07-24 21:18:40.572 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: All audio streams muted for silent speech recognition
07-24 21:18:40.572 21077 21077 I VoiceManager: 🔇 FOCUS_FREE: Recognition will proceed without audio focus competition
07-24 21:18:40.573 21077 21077 W VoiceManager: 🚫 DND_MODE: App doesn't have Do Not Disturb access permission
^C
(base) cameronhightower@MacBookAir MobileJarvisNative % 