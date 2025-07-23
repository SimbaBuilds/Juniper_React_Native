 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 134 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 135 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 136 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 137 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 138 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 139 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 140 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 141 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 142 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 143 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 144 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 145 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel bin 146 has 32 time frames
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Flattened mel spec size: 4704
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Mel spectrogram extracted: 4704 elements
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Embedding input: total=4704, expected=[1, 76, 32, 1]
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Required tensor size: 2432, actual mel size: 4704
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Truncating mel spectrogram from 4704 to 2432
07-22 22:47:22.771 25641 25956 D OpenWakeWordEngine: Created embedding tensor: [1, 76, 32, 1]
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine: Error generating embedding: float[][][] cannot be cast to float[]
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine: java.lang.ClassCastException: float[][][] cannot be cast to float[]
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.generateEmbedding(OpenWakeWordEngine.kt:366)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.OpenWakeWordEngine.processAudioChunk(OpenWakeWordEngine.kt:243)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.processAudioLoop(WakeWordService.kt:402)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.setupAudioRecording$lambda$1(WakeWordService.kt:366)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService.$r8$lambda$jWe3qOMBRd4yK9zbL69B5d8BXw0(Unknown Source:0)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at com.anonymous.MobileJarvisNative.wakeword.WakeWordService$$ExternalSyntheticLambda0.run(Unknown Source:2)
07-22 22:47:22.776 25641 25956 E OpenWakeWordEngine:    at java.lang.Thread.run(Thread.java:1012)
07-22 22:47:22.776 25641 25956 D OpenWakeWordEngine: Wake word input: embedding_size=512, required_size=1536
07-22 22:47:22.776 25641 25956 D OpenWakeWordEngine: Padded embedding from 512 to 1536
07-22 22:47:22.776 25641 25956 D OpenWakeWordEngine: Created tensor shape: [1, 16, 96]
07-22 22:47:22.781 25641 25956 D OpenWakeWordEngine: Wake word output type: class [[F
07-22 22:47:22.781 25641 25956 D OpenWakeWordEngine: Wake word output is Array with 1 elements
07-22 22:47:22.781 25641 25956 W OpenWakeWordEngine: Error parsing Array output: float[] cannot be cast to java.lang.Object[]
07-22 22:47:22.781 25641 25956 D OpenWakeWordEngine: 🎯 CLASSIFICATION: Raw score: 0.0000, Confidence: 0.5000, Model: hey_jarvis
07-22 22:47:22.781 25641 25956 D OpenWakeWordEngine: 🎙️ AUDIO_PROC: High confidence detected: 0.500 (model: hey_jarvis)
^C