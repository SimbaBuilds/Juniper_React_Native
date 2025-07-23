07-23 04:14:59.318 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: LOW confidence: 0.0000
07-23 04:14:59.318 27877 28351 V OpenWakeWordEngine: 🎙️ PIPELINE: Confidence calculated: 4.7385693E-6
07-23 04:14:59.318 27877 28351 V WakeWordService: 🔍 THRESHOLD_CHECK: Confidence=0.000005, Threshold=0.100000, Pass=false
07-23 04:14:59.378 27877 28351 V OpenWakeWordEngine: 🎙️ PIPELINE: Processing audio buffer: 24000 samples
07-23 04:14:59.378 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Starting mel spectrogram extraction
07-23 04:14:59.378 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Input audio size: 24000 samples
07-23 04:14:59.378 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Creating input tensor: input, shape=[1, 24000]
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Raw output type: class [[[[F
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Processing Array output with 1 elements
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: 4D array structure - batch: 1, channel: 1, mel_bins: 147
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Mel bin 0 has 32 time frames
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Mel bin 1 has 32 time frames
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Mel bin 2 has 32 time frames
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Flattened mel spec size: 4704
07-23 04:14:59.383 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Applying OpenWakeWord transformation: (value / 10.0) + 2.0
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Transformation complete: 4704 elements
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Final transformed mel spec: 4704 elements, 4704 non-zero
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🎵 MEL_EXTRACT: Statistics: avg=-3.320033, std=1.449413
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🎙️ PIPELINE: Mel spectrogram generated: 4704 elements
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Starting embedding generation
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Input name: input_1
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Input mel spec: 4704 elements
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Mel structure: 32 mel bins × 147 time frames
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Expected by model: 32 mel bins × 76 time frames
07-23 04:14:59.384 27877 28351 I OpenWakeWordEngine: 🧠 EMBEDDING: ✂️ Truncating mel spec from 147 to 76 time frames
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Final tensor shape: [1, 76, 32, 1]
07-23 04:14:59.384 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Created tensor: [1, 76, 32, 1]
07-23 04:14:59.390 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Raw output type: class [[[[F
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Processing Array output with 1 elements
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Batch has 1 sequences
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Extracting all 1 sequence steps
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Sequence 0 has 1 time steps
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Seq 0, time 0: 96 features
07-23 04:14:59.391 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Extracted 3D embedding: 96 elements from all sequences
07-23 04:14:59.393 27877 28351 I OpenWakeWordEngine: 🧠 EMBEDDING: ✅ Got expected embedding size: 1×96=96
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Final embedding: 96 elements, 96 non-zero
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🧠 EMBEDDING: Statistics: avg=2.139543, std=15.689885
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎙️ PIPELINE: Embedding generated: 96 elements
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 📊 BUFFER: Adding embedding to temporal buffer: 96 elements
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 📊 BUFFER: Trimmed buffer to 16 embeddings
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 📊 BUFFER: Current buffer size: 16/16
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Starting wake word classification from buffer
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Input name: x.1
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Creating tensor shape: [1, 16, 96]
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Using 16 embeddings from buffer
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 0: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 1: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 2: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 3: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 4: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 5: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 6: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 7: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 8: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 9: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 10: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 11: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 12: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 13: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 14: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Time step 15: 96 features
07-23 04:14:59.393 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Created tensor shape: [1, 16, 96]
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Raw output type: class [[F
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Output is Array with 1 elements
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Batch has 1 features
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Raw score from Array: 0.000005
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Model output score: 0.000005, Final confidence: 0.000005
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Model: hey_jarvis
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: Very low confidence: 0.000005 - likely silence/background noise
07-23 04:14:59.394 27877 28351 V OpenWakeWordEngine: 🎯 CLASSIFY: LOW confidence: 0.0000
07-23 04:14:59.395 27877 28351 V OpenWakeWordEngine: 🎙️ PIPELINE: Confidence calculated: 4.708767E-6
07-23 04:14:59.395 27877 28351 V WakeWordService: 🔍 THRESHOLD_CHECK: Confidence=0.000005, Threshold=0.100000, Pass=false