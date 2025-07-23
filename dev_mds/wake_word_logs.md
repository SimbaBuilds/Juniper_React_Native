07-22 19:49:29.107 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231769108
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:29.108 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Creating service intent for class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Starting service...
07-22 19:49:29.108 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Using startForegroundService() for Android O+
07-22 19:49:29.109 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ Service start command sent successfully
07-22 19:49:29.110 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ Wake word detection started successfully
07-22 19:49:29.110 13246 13427 I WakeWordModule: 🚀 START_DETECTION: =====================================================
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231769111
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:29.111 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:29.111 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-22 19:49:29.118 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: ========== WAKE WORD SERVICE CREATED ==========
07-22 19:49:29.118 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Timestamp: 1753231769118
07-22 19:49:29.118 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Process ID: 13246
07-22 19:49:29.118 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Thread: main
07-22 19:49:29.119 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Creating notification channel...
07-22 19:49:29.120 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Starting foreground service...
07-22 19:49:29.120 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: Registering broadcast receivers...
07-22 19:49:29.121 13246 13246 D WakeWordService: Registered pause/resume broadcast receiver
07-22 19:49:29.122 13246 13246 I WakeWordService: 🚀 SERVICE_LIFECYCLE: =====================================================
07-22 19:49:29.122 13246 13246 I WakeWordService: Service onStartCommand called (WakeWordService)
07-22 19:49:29.126 13246 13246 D WakeWordService: Foreground service started with notification
07-22 19:49:29.127 13246 13246 D WakeWordService: Foreground service started with notification
07-22 19:49:29.132 13246 13396 I WakeWordService: Entered initializeService()
07-22 19:49:29.132 13246 13396 I WakeWordService: 🤖 ENGINE_CHECK: ========== CHECKING OPENWAKEWORD ENGINE ==========
07-22 19:49:29.132 13246 13396 I WakeWordService: 🤖 ENGINE_CHECK: Getting OpenWakeWord engine instance...
07-22 19:49:29.132 13246 13396 I WakeWordService: 🤖 ENGINE_CHECK: ✅ Engine instance obtained
07-22 19:49:29.132 13246 13396 I WakeWordService: 🤖 ENGINE_CHECK: Initializing engine...
07-22 19:49:29.132 13246 13396 I OpenWakeWordEngine: 🚀 ENGINE_INIT: ========== INITIALIZING OPENWAKEWORD ENGINE ==========
07-22 19:49:29.132 13246 13396 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Starting TensorFlow Lite initialization...
07-22 19:49:29.132 13246 13396 I OpenWakeWordEngine: 🚀 ENGINE_INIT: Loading base models (mel + embedding)...
07-22 19:49:29.132 13246 13396 D OpenWakeWordEngine: Loading mel spectrogram model...
07-22 19:49:29.133 13246 13396 D OpenWakeWordEngine: Using cached model: models/melspectrogram.tflite (1092516 bytes)
07-22 19:49:29.133 13246 13396 D OpenWakeWordEngine: Model mapped successfully: models/melspectrogram.tflite
07-22 19:49:29.133 13246 13396 D OpenWakeWordEngine: Mel model buffer size: 1092516 bytes
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to initialize mel interpreter: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Stack trace:
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: java.lang.IllegalStateException: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.allocateTensors(Native Method)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.init(NativeInterpreterWrapper.java:134)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.<init>(NativeInterpreterWrapper.java:73)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapperExperimental.<init>(NativeInterpreterWrapperExperimental.java:36)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.Interpreter.<init>(Interpreter.java:232)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.loadBaseModels(OpenWakeWordEngine.kt:115)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.initialize(OpenWakeWordEngine.kt:75)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.checkOpenWakeWordEngine(WakeWordService.kt:268)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeComponents(WakeWordService.kt:175)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeService(WakeWordService.kt:162)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.access$initializeService(WakeWordService.kt:33)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$onStartCommand$1$1.invokeSuspend(WakeWordService.kt:130)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:108)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.internal.LimitedDispatcher$Worker.run(LimitedDispatcher.kt:115)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:103)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:584)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:793)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:697)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:684)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to load base models: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: java.lang.IllegalStateException: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.allocateTensors(Native Method)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.init(NativeInterpreterWrapper.java:134)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.<init>(NativeInterpreterWrapper.java:73)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapperExperimental.<init>(NativeInterpreterWrapperExperimental.java:36)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.Interpreter.<init>(Interpreter.java:232)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.loadBaseModels(OpenWakeWordEngine.kt:115)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.initialize(OpenWakeWordEngine.kt:75)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.checkOpenWakeWordEngine(WakeWordService.kt:268)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeComponents(WakeWordService.kt:175)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeService(WakeWordService.kt:162)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.access$initializeService(WakeWordService.kt:33)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$onStartCommand$1$1.invokeSuspend(WakeWordService.kt:130)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:108)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.internal.LimitedDispatcher$Worker.run(LimitedDispatcher.kt:115)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:103)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:584)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:793)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:697)
07-22 19:49:29.134 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:684)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: 🚀 ENGINE_INIT: ❌ Failed to initialize OpenWakeWord engine: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: java.lang.IllegalStateException: Internal error: Unexpected failure when preparing tensor allocations: tensorflow/lite/util.cc BytesRequired number of elements overflowed.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: 
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: Node number 3 (CONV_2D) failed to prepare.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine: Failed to apply the default TensorFlow Lite delegate indexed at 0.
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.allocateTensors(Native Method)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.init(NativeInterpreterWrapper.java:134)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapper.<init>(NativeInterpreterWrapper.java:73)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.NativeInterpreterWrapperExperimental.<init>(NativeInterpreterWrapperExperimental.java:36)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at org.tensorflow.lite.Interpreter.<init>(Interpreter.java:232)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.loadBaseModels(OpenWakeWordEngine.kt:115)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.initialize(OpenWakeWordEngine.kt:75)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.checkOpenWakeWordEngine(WakeWordService.kt:268)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeComponents(WakeWordService.kt:175)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.initializeService(WakeWordService.kt:162)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.access$initializeService(WakeWordService.kt:33)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$onStartCommand$1$1.invokeSuspend(WakeWordService.kt:130)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlin.coroutines.jvm.internal.BaseContinuationImpl.resumeWith(ContinuationImpl.kt:33)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.DispatchedTask.run(DispatchedTask.kt:108)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.internal.LimitedDispatcher$Worker.run(LimitedDispatcher.kt:115)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.TaskImpl.run(Tasks.kt:103)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler.runSafely(CoroutineScheduler.kt:584)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.executeTask(CoroutineScheduler.kt:793)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.runWorker(CoroutineScheduler.kt:697)
07-22 19:49:29.135 13246 13396 E OpenWakeWordEngine:    at kotlinx.coroutines.scheduling.CoroutineScheduler$Worker.run(CoroutineScheduler.kt:684)
07-22 19:49:29.135 13246 13396 D OpenWakeWordEngine: Cleaning up OpenWakeWord engine...
07-22 19:49:29.135 13246 13396 D OpenWakeWordEngine: OpenWakeWord engine cleaned up
07-22 19:49:29.135 13246 13396 E WakeWordService: 🤖 ENGINE_CHECK: ❌ Engine initialization failed
07-22 19:49:29.135 13246 13396 I WakeWordService: 🤖 ENGINE_CHECK: ====================================================
07-22 19:49:29.135 13246 13396 E WakeWordService: Cannot initialize OpenWakeWord engine
07-22 19:49:29.135 13246 13396 D OpenWakeWordEngine: Cleaning up OpenWakeWord engine...
07-22 19:49:29.135 13246 13396 D OpenWakeWordEngine: OpenWakeWord engine cleaned up
07-22 19:49:29.141 13246 13246 D WakeWordService: Unregistered pause/resume broadcast receiver
07-22 19:49:29.141 13246 13246 I WakeWordService: Service destroyed
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== NATIVE SETTINGS UPDATE RECEIVED ==========
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: updateVoiceSettings called from React Native
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Timestamp: 1753231769379
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Thread: mqt_native_modules
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Parameters received:
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: - deepgramEnabled: false (type: Boolean)
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: - selectedDeepgramVoice: aura-2-mars-en (type: String)
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== PROCESSING DEEPGRAM ENABLED SETTING ==========
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Processing deepgramEnabled value: false
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Saving deepgram_enabled = false to SharedPreferences
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ deepgram_enabled saved to editor
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== PROCESSING SELECTED VOICE SETTING ==========
07-22 19:49:29.379 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Processing selectedDeepgramVoice value: aura-2-mars-en
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Available voices: aura-2-arcas-en, aura-2-iris-en, aura-2-mars-en, aura-2-orpheus-en, aura-2-athena-en, aura-2-cordelia-en, aura-2-draco-en, aura-2-hermes-en, aura-2-hyperion-en, aura-2-theia-en, aura-2-thalia-en, aura-2-andromeda-en, aura-2-helena-en, aura-2-apollo-en, aura-2-aries-en, aura-2-asteria-en, aura-2-atlas-en, aura-2-aurora-en, aura-2-callista-en, aura-2-cora-en, aura-2-delia-en, aura-2-electra-en, aura-2-harmonia-en, aura-2-hera-en, aura-2-janus-en, aura-2-juno-en, aura-2-jupiter-en, aura-2-luna-en, aura-2-minerva-en, aura-2-neptune-en, aura-2-odysseus-en, aura-2-ophelia-en, aura-2-orion-en, aura-2-pandora-en, aura-2-phoebe-en, aura-2-pluto-en, aura-2-saturn-en, aura-2-selene-en, aura-2-vesta-en, aura-2-zeus-en, aura-2-amalthea-en, aura-athena-en, aura-helios-en, aura-arcas-en, aura-asteria-en, aura-luna-en, aura-stella-en, aura-hera-en, aura-orion-en, aura-perseus-en, aura-angus-en, aura-orpheus-en, aura-zeus-en, arcas, iris, mars, orpheus, athena, cordelia, draco, hermes, hyperion, theia, athena-legacy, helios
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Voice 'aura-2-mars-en' is valid
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Saving selected_voice = aura-2-mars-en to SharedPreferences
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ selected_voice saved to editor
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== COMMITTING CHANGES TO SHARED PREFERENCES ==========
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: SharedPreferences commit took 0ms
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Commit result: true
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Settings successfully committed to SharedPreferences
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== VERIFYING SAVED VALUES ==========
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Verified saved values:
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: - deepgram_enabled: false
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: - selected_voice: aura-2-mars-en
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== RELOADING DEEPGRAM CLIENT ==========
07-22 19:49:29.380 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Forcing Deepgram client reload to pick up new settings...
07-22 19:49:29.381 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Deepgram client reload took 1ms
07-22 19:49:29.381 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Deepgram client reset for settings reload
07-22 19:49:29.381 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== NOTIFYING REACT NATIVE ==========
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: React Native event emission took 1ms
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ NativeVoiceSettingsUpdated event sent to React Native
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ========== SETTINGS UPDATE COMPLETED SUCCESSFULLY ==========
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Native voice settings updated and validated successfully
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ✅ Native configuration reloaded
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: Total update duration: 2ms
07-22 19:49:29.382 13246 13427 I VoiceModule: 🎵 VOICE_SETTINGS: ================================================================
07-22 19:49:29.395 13246 13427 I VoiceModule: 🎵 RESET: Resetting Deepgram client...
07-22 19:49:29.400 13246 13427 I VoiceModule: 🎵 RESET: ✅ Deepgram client reset completed (valid: true)
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231769406
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:29.406 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:29.406 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-22 19:49:30.124 13246 13427 D WakeWordModule: Current wake word state: enabled=true, serviceRunning=false
07-22 19:49:30.124 13246 13427 W WakeWordModule: Detected state inconsistency, fixing...
07-22 19:49:30.125 13246 13427 D WakeWordModule: Current wake word state: enabled=false, serviceRunning=false
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231770129
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:30.129 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:30.129 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231770131
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:30.131 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:30.131 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Service class: com.anonymous.MobileJarvisNative.wakeword.WakeWordService
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Timestamp: 1753231770418
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Android version: 34
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: Checking permissions...
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: RECORD_AUDIO permission: true
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: true
07-22 19:49:30.418 13246 13427 D WakeWordModule: Set wake_word_enabled preference to true
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ✅ All permissions granted
07-22 19:49:30.418 13246 13427 I WakeWordModule: 🚀 START_DETECTION: ℹ️ Service already running, updating state only
