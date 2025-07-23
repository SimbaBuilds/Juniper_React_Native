07-23 03:46:43.750 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Created tensor: [1, 76, 32, 1]
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Raw output type: class [[[[F
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Processing Array output with 1 elements
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Batch has 1 sequences
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Extracting all 1 sequence steps
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Sequence 0 has 1 time steps
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Seq 0, time 0: 96 features
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Extracted 3D embedding: 96 elements from all sequences
07-23 03:46:43.756 24620 24872 I OpenWakeWordEngine: 🧠 EMBEDDING: ✅ Got expected embedding size: 1×96=96
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Final embedding: 96 elements, 96 non-zero
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🧠 EMBEDDING: Statistics: avg=0.717795, std=17.359911
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎙️ PIPELINE: Embedding generated: 96 elements
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Starting wake word classification
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Input name: x.1
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Embedding size: 96, expected: 96
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Input embedding: 96 elements
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Expected tensor shape: [1, 1, 96]
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: ✅ Embedding size matches wake word model expectation
07-23 03:46:43.756 24620 24872 V OpenWakeWordEngine: 🎯 CLASSIFY: Created tensor shape: [1, 1, 96]
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine: 🎯 CLASSIFICATION: ❌ Error classifying wake word: Error code - ORT_INVALID_ARGUMENT - message: Got invalid dimensions for input: x.1 for the following indices
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:  index: 1 Got: 1 Expected: 16
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:  Please fix either the inputs/outputs or the model.
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine: ai.onnxruntime.OrtException: Error code - ORT_INVALID_ARGUMENT - message: Got invalid dimensions for input: x.1 for the following indices
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:  index: 1 Got: 1 Expected: 16
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:  Please fix either the inputs/outputs or the model.
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at ai.onnxruntime.OrtSession.run(Native Method)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at ai.onnxruntime.OrtSession.run(OrtSession.java:395)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at ai.onnxruntime.OrtSession.run(OrtSession.java:242)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at ai.onnxruntime.OrtSession.run(OrtSession.java:210)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.classifyWakeWord(OpenWakeWordEngine.kt:582)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.processAudioChunk(OpenWakeWordEngine.kt:258)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:504)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$1(WakeWordService.kt:430)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$jWe3qOMBRd4yK9zbL69B5d8BXw0(Unknown Source:0)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda0.run(Unknown Source:2)
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine:    at java.lang.Thread.run(Thread.java:1012)
07-23 03:46:43.757 24620 24872 V OpenWakeWordEngine: 🎙️ PIPELINE: Confidence calculated: 0.0
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine: 🚨 PIPELINE: ZERO CONFIDENCE DETECTED - checking pipeline integrity
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine: 🚨 PIPELINE: Mel non-zero: 4704/4704, Embedding non-zero: 96/96
07-23 03:46:43.757 24620 24872 E OpenWakeWordEngine: 🚨 PIPELINE: ROOT CAUSE: Wake word model producing zero output!
07-23 03:46:43.757 24620 24872 E WakeWordService: 🚨 EMERGENCY: Detected 51 consecutive zero confidence values - MODEL FAILURE
07-23 03:46:43.757 24620 24872 E WakeWordService: 🚨 EMERGENCY: Stopping wake word processing to prevent infinite loop
07-23 03:46:43.757 24620 24872 I WakeWordService: 🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: false, interrupted: false)
07-23 03:46:44.488 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:44.488 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:45.489 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:45.489 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:46.490 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:46.490 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:47.491 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:47.491 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:48.493 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:48.493 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:49.493 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:49.493 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:50.495 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:50.495 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection
07-23 03:46:51.497 24620 24620 D WakeWordService: Voice state monitor: Current state = com.anonymous.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@79787a3
07-23 03:46:51.497 24620 24620 D WakeWordService: Voice state is IDLE - resuming wake word detection