08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1754345485986
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-04 17:11:25.986 30288 30676 D WakeWordModule: Set wake_word_enabled preference to true
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Creating service intent for class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Starting service...
08-04 17:11:25.986 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Using startForegroundService() for Android O+
08-04 17:11:25.988 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ Service start command sent successfully
08-04 17:11:25.988 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ Wake word detection started successfully
08-04 17:11:25.988 30288 30676 I WakeWordModule: 🚀 START_DETECTION: =====================================================
08-04 17:11:25.990 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: ========== WAKE WORD SERVICE CREATED ==========
08-04 17:11:25.990 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Cleaning up any stale state from previous instance...
08-04 17:11:25.990 30288 30288 W WakeWordService: 🚀 SERVICE_LIFECYCLE: ⚠️ Previous service instance found - cleaning up...
08-04 17:11:25.990 30288 30288 I WakeWordService: 🧹 CLEANUP: Cancelling service scope and all running coroutines...
08-04 17:11:25.990 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-04 17:11:25.990 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
08-04 17:11:25.990 30288 30288 I WakeWordService: 🧹 CLEANUP: ✅ All coroutines cancelled successfully
08-04 17:11:25.990 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1754345485990
08-04 17:11:25.991 30288 30288 I WakeWordService: 🧹 CLEANUP: OpenWakeWordEngine singleton reset during cleanup
08-04 17:11:25.991 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: OpenWakeWordEngine singleton reset on service creation
08-04 17:11:25.991 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Fresh service scope initialized
08-04 17:11:25.991 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-04 17:11:25.991 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-04 17:11:25.991 30288 30676 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-04 17:11:25.991 30288 30676 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-04 17:11:25.991 30288 30676 D WakeWordModule: Set wake_word_enabled preference to true
08-04 17:11:25.992 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-04 17:11:25.992 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-04 17:11:25.993 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Starting foreground service...
08-04 17:11:25.994 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Registering broadcast receivers...
08-04 17:11:25.995 30288 30288 D WakeWordService: Registered pause/resume broadcast receiver
08-04 17:11:25.995 30288 30288 I WakeWordService: 🚀 SERVICE_LIFECYCLE: =====================================================
08-04 17:11:25.995 30288 30288 I WakeWordService: Service onStartCommand called (WakeWordService)
08-04 17:11:26.005 30288 30288 D WakeWordService: Foreground service started with notification
08-04 17:11:26.006 30288 30288 D WakeWordService: Foreground service started with notification
08-04 17:11:26.010 30288 30651 I WakeWordService: Entered initializeService()
08-04 17:11:26.010 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: ========== CHECKING OPENWAKEWORD ENGINE ==========
08-04 17:11:26.010 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: Getting OpenWakeWord engine instance...
08-04 17:11:26.010 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine instance obtained
08-04 17:11:26.011 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: Initializing engine...
08-04 17:11:26.011 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ========== INITIALIZING OPENWAKEWORD ENGINE ==========
08-04 17:11:26.011 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Starting ONNX Runtime initialization...
08-04 17:11:26.011 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Loading base models (mel + embedding)...
08-04 17:11:26.011 30288 30651 D OpenWakeWordEngine: ONNX Runtime environment initialized
08-04 17:11:26.011 30288 30651 D OpenWakeWordEngine: 🔧 STEP 1: Loading melspectrogram.onnx model...
08-04 17:11:26.017 30288 30651 D OpenWakeWordEngine: Loaded model models/melspectrogram.onnx (1087958 bytes)
08-04 17:11:26.017 30288 30651 D OpenWakeWordEngine: 📊 Mel model size: 1087958 bytes
08-04 17:11:26.017 30288 30651 D OpenWakeWordEngine: 🔧 STEP 2: Creating ONNX session for mel spectrogram...
08-04 17:11:26.029 30288 30651 D OpenWakeWordEngine: ✅ STEP 2 COMPLETE: Mel spectrogram session created successfully!
08-04 17:11:26.029 30288 30651 D OpenWakeWordEngine: Mel model - Input names: [input]
08-04 17:11:26.029 30288 30651 D OpenWakeWordEngine: Mel model - Output names: [output]
08-04 17:11:26.029 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== Mel MODEL TENSOR SHAPES ==========
08-04 17:11:26.029 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'input': info available=true
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output 'output': info available=true
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating Mel tensor shapes...
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Mel model expects:
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, audio_samples] - variable audio length
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 1, mel_bins, time_frames] - produces mel spectrogram
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for Mel
08-04 17:11:26.030 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
08-04 17:11:26.030 30288 30651 D OpenWakeWordEngine: ✅ Mel spectrogram model fully initialized
08-04 17:11:26.030 30288 30651 D OpenWakeWordEngine: 🔧 STEP 3: Loading embedding_model.onnx...
08-04 17:11:26.039 30288 30651 D OpenWakeWordEngine: Loaded model models/embedding_model.onnx (1326578 bytes)
08-04 17:11:26.039 30288 30651 D OpenWakeWordEngine: 📊 Embedding model size: 1326578 bytes
08-04 17:11:26.066 30288 30651 D OpenWakeWordEngine: ✅ STEP 3 COMPLETE: Embedding session created successfully!
08-04 17:11:26.066 30288 30651 D OpenWakeWordEngine: Embedding model - Input names: [input_1]
08-04 17:11:26.066 30288 30651 D OpenWakeWordEngine: Embedding model - Output names: [conv2d_19]
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== Embedding MODEL TENSOR SHAPES ==========
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'input_1': info available=true
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output 'conv2d_19': info available=true
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating Embedding tensor shapes...
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Embedding model expects:
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, 76, 32, 1] - fixed size mel spectrogram
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 16, 96] - 16 sequences × 96 features = 1536 total
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for Embedding
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
08-04 17:11:26.066 30288 30651 D OpenWakeWordEngine: ✅ All base ONNX models loaded successfully
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ Base models loaded successfully
08-04 17:11:26.066 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Loading default wake word model: 'hey_jarvis'
08-04 17:11:26.066 30288 30651 D OpenWakeWordEngine: Loading wake word model: hey_jarvis_v0.1.onnx
08-04 17:11:26.075 30288 30651 D OpenWakeWordEngine: Loaded model models/hey_jarvis_v0.1.onnx (1271370 bytes)
08-04 17:11:26.075 30288 30651 D OpenWakeWordEngine: Wake word model size: 1271370 bytes
08-04 17:11:26.097 30288 30651 D OpenWakeWordEngine: Wake word ONNX session created successfully
08-04 17:11:26.097 30288 30651 D OpenWakeWordEngine: Wake word model - Input names: [x.1]
08-04 17:11:26.097 30288 30651 D OpenWakeWordEngine: Wake word model - Output names: [53]
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ========== WakeWord (hey_jarvis) MODEL TENSOR SHAPES ==========
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Input tensors:
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Input 'x.1': info available=true
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: Output tensors:
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION:   Output '53': info available=true
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Validating WakeWord (hey_jarvis) tensor shapes...
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: Wake word model expects:
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Input: [1, 16, 96] - embeddings from embedding model
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION:   Output: [1, 1] or [1] - confidence score
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for WakeWord (hey_jarvis)
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🔍 MODEL_INSPECTION: ===================================================
08-04 17:11:26.097 30288 30651 D OpenWakeWordEngine: Wake word model 'hey_jarvis' loaded successfully
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ Wake word model loaded successfully
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ✅ OpenWakeWord engine initialized successfully
08-04 17:11:26.097 30288 30651 I OpenWakeWordEngine: 🚀 ENGINE_INIT: =====================================================
08-04 17:11:26.097 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine initialization successful
08-04 17:11:26.097 30288 30651 I WakeWordService: 🤖 ENGINE_CHECK: ====================================================
08-04 17:11:26.097 30288 30651 I WakeWordService: 🎯 WAKEWORD_INIT: ========== INITIALIZING WAKE WORD DETECTION ==========
08-04 17:11:26.097 30288 30651 I WakeWordService: 🎯 WAKEWORD_INIT: Service running: true, isRunning: true
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎯 WAKEWORD_SETUP: ======= Wake Word Configuration =======
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎯 WAKEWORD_SETUP: Selected wake word: 'Hey Jasper'
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎯 WAKEWORD_SETUP: Threshold: 0.02
08-04 17:11:26.098 30288 30288 I WakeWordService: Initial voice state: com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@ec0735e
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎯 WAKEWORD_SETUP: Available wake words: [Hey Jarvis, Hey Juni, Hey Juniper, Jarvis, Hey Jasmine, Hey Jade, Hey Jay, Hey Jasper, Hey Jerry, Jasmine, Hey, Alex, Aloe, Hey Mycroft, Hey Michael, Hey Mulberry, Hey Myrillis, Hey Marigold]
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎯 WAKEWORD_SETUP: =======================================
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: ========== CHANGING WAKE PHRASE ==========
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Requested phrase: 'Hey Jasper'
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Mapped to model: 'hey_jarvis'
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: Current model: 'hey_jarvis'
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: ℹ️ No model switch needed - already using 'hey_jarvis'
08-04 17:11:26.098 30288 30651 I OpenWakeWordEngine: 🔄 PHRASE_SWITCH: =============================================
08-04 17:11:26.098 30288 30651 D AudioManager: Setting up Bluetooth audio route monitoring...
08-04 17:11:26.098 30288 30651 I AudioManager: AudioManager initialized with Bluetooth monitoring
08-04 17:11:26.098 30288 30651 I WakeWordService: 🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...
08-04 17:11:26.098 30288 30651 D AudioManager: Requesting audio focus: BACKGROUND_AUDIO (ID: wake_word_detection)
08-04 17:11:26.103 30288 30651 I AudioManager: Audio focus granted: BACKGROUND_AUDIO (ID: wake_word_detection)
08-04 17:11:26.103 30288 30651 I WakeWordService: 🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection
08-04 17:11:26.103 30288 30651 I WakeWordService: 🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection
08-04 17:11:26.139 30288 30651 D WakeWordService: Audio recording started successfully
08-04 17:11:26.139 30288 30651 I WakeWordService: 🎯 WAKEWORD_INIT: Wake word detection initial state: isPaused = false
08-04 17:11:26.139 30288 30651 I WakeWordService: 🎯 WAKEWORD_INIT: Service starting in resumed state
08-04 17:11:26.139 30288 30651 I WakeWordService: ✅ WAKEWORD_INIT: Wake word detection initialized and ready ✅
08-04 17:11:26.139 30288 30651 I WakeWordService: 🎯 WAKEWORD_INIT: ====================================================
08-04 17:11:26.139 30288 31129 I WakeWordService: 🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========
08-04 17:11:26.140 30288 31129 I WakeWordService: 🎙️ AUDIO_LOOP: Buffer size: 1280 samples (80ms)
08-04 17:11:26.140 30288 31129 I WakeWordService: 🎙️ AUDIO_LOOP: Sample rate: 16000Hz
08-04 17:11:26.140 30288 31129 I WakeWordService: 🎙️ AUDIO_LOOP: Wake word threshold: 0.02
08-04 17:11:26.140 30288 31129 I WakeWordService: 🎙️ AUDIO_LOOP: =====================================================
08-04 17:11:26.324 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== NATIVE SETTINGS UPDATE RECEIVED ==========
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: updateVoiceSettings called from React Native
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Timestamp: 1754345486325
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Thread: mqt_native_modules
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Parameters received:
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: - deepgramEnabled: false (type: Boolean)
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: - selectedDeepgramVoice: aura-2-mars-en (type: String)
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== PROCESSING DEEPGRAM ENABLED SETTING ==========
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Processing deepgramEnabled value: false
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Saving deepgram_enabled = false to SharedPreferences
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ deepgram_enabled saved to editor
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== PROCESSING SELECTED VOICE SETTING ==========
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Processing selectedDeepgramVoice value: aura-2-mars-en
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Available voices: aura-2-arcas-en, aura-2-iris-en, aura-2-mars-en, aura-2-orpheus-en, aura-2-athena-en, aura-2-cordelia-en, aura-2-draco-en, aura-2-hermes-en, aura-2-hyperion-en, aura-2-theia-en, aura-2-thalia-en, aura-2-andromeda-en, aura-2-helena-en, aura-2-apollo-en, aura-2-aries-en, aura-2-asteria-en, aura-2-atlas-en, aura-2-aurora-en, aura-2-callista-en, aura-2-cora-en, aura-2-delia-en, aura-2-electra-en, aura-2-harmonia-en, aura-2-hera-en, aura-2-janus-en, aura-2-juno-en, aura-2-jupiter-en, aura-2-luna-en, aura-2-minerva-en, aura-2-neptune-en, aura-2-odysseus-en, aura-2-ophelia-en, aura-2-orion-en, aura-2-pandora-en, aura-2-phoebe-en, aura-2-pluto-en, aura-2-saturn-en, aura-2-selene-en, aura-2-vesta-en, aura-2-zeus-en, aura-2-amalthea-en, aura-athena-en, aura-helios-en, aura-arcas-en, aura-asteria-en, aura-luna-en, aura-stella-en, aura-hera-en, aura-orion-en, aura-perseus-en, aura-angus-en, aura-orpheus-en, aura-zeus-en, arcas, iris, mars, orpheus, athena, cordelia, draco, hermes, hyperion, theia, athena-legacy, helios
08-04 17:11:26.325 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Voice 'aura-2-mars-en' is valid
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Saving selected_voice = aura-2-mars-en to SharedPreferences
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ selected_voice saved to editor
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== COMMITTING CHANGES TO SHARED PREFERENCES ==========
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: SharedPreferences commit took 0ms
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Commit result: true
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Settings successfully committed to SharedPreferences
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== VERIFYING SAVED VALUES ==========
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Verified saved values:
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: - deepgram_enabled: false
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: - selected_voice: aura-2-mars-en
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== RELOADING DEEPGRAM CLIENT ==========
08-04 17:11:26.326 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Forcing Deepgram client reload to pick up new settings...
08-04 17:11:26.328 30288 30676 D DeepgramClient: Deepgram client resources released
08-04 17:11:26.328 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Deepgram client reload took 2ms
08-04 17:11:26.328 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Deepgram client reset for settings reload
08-04 17:11:26.328 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== NOTIFYING REACT NATIVE ==========
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: React Native event emission took 0ms
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ NativeVoiceSettingsUpdated event sent to React Native
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ========== SETTINGS UPDATE COMPLETED SUCCESSFULLY ==========
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Native voice settings updated and validated successfully
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Native configuration reloaded
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: Total update duration: 3ms
08-04 17:11:26.329 30288 30676 I VoiceModule: 🎵 VOICE_SETTINGS: ================================================================
08-04 17:11:26.331 30288 30676 I VoiceModule: 🎵 RESET: Resetting Deepgram client...
08-04 17:11:26.331 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========
08-04 17:11:26.331 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: OkHttp client configured
08-04 17:11:26.331 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: ConfigManager obtained
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: MediaPlayer created
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: AudioManager obtained
08-04 17:11:26.333 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in 2ms
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_INIT: =============================================
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Client initialized
08-04 17:11:26.333 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ API key present (length: 40)
08-04 17:11:26.334 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available
08-04 17:11:26.334 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready
08-04 17:11:26.334 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid (aura-2-mars-en -> aura-2-mars-en)
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Overall valid: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key present: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: API key valid: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Network available: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Audio system ready: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Voice config valid: true
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Issues: 0
08-04 17:11:26.334 30288 30676 I DeepgramClient: 🎵 DEEPGRAM_VALIDATION: Validation time: 1ms
08-04 17:11:26.334 30288 30676 D DeepgramClient: 🎵 DEEPGRAM_VALIDATION: ================================
08-04 17:11:26.334 30288 30676 I VoiceModule: 🎵 RESET: ✅ Deepgram client reset completed (valid: true)
08-04 17:11:26.338 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1754345486339
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-04 17:11:26.339 30288 30676 D WakeWordModule: Set wake_word_enabled preference to true
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-04 17:11:26.339 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-04 17:11:27.001 30288 30676 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-04 17:11:27.002 30288 30676 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=true
08-04 17:11:27.348 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
08-04 17:11:27.348 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
08-04 17:11:27.348 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1754345487348
08-04 17:11:27.348 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
08-04 17:11:27.348 30288 30676 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
08-04 17:11:27.349 30288 30676 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
08-04 17:11:27.349 30288 30676 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
08-04 17:11:27.349 30288 30676 D WakeWordModule: Set wake_word_enabled preference to true
08-04 17:11:27.349 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
08-04 17:11:27.349 30288 30676 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
08-04 17:11:56.219 30288 31129 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 293 chunks in 30s (isPaused: false)
08-04 17:12:26.273 30288 31129 D WakeWordService: 🎙️ AUDIO_LOOP: Processed 289 chunks in 30s (isPaused: false)
