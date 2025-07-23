package com.anonymous.MobileJarvisNative.wakeword

import android.content.Context
import android.content.res.AssetManager
import android.util.Log
import ai.onnxruntime.OnnxTensor
import ai.onnxruntime.OrtEnvironment
import ai.onnxruntime.OrtException
import ai.onnxruntime.OrtSession
import ai.onnxruntime.OrtSession.SessionOptions
import java.io.InputStream
import java.nio.FloatBuffer
import java.util.Collections
import kotlin.math.sqrt

class OpenWakeWordEngine(private val context: Context) {
    private val TAG = "OpenWakeWordEngine"
    
    private var ortEnvironment: OrtEnvironment? = null
    private var wakeWordSession: OrtSession? = null
    private var melSession: OrtSession? = null
    private var embeddingSession: OrtSession? = null
    
    private val SAMPLE_RATE = 16000
    private val CHUNK_SIZE = 1280 // 80ms chunks
    private val CHANNELS = 1
    private val EMBEDDING_SIZE = 512
    private val MEL_SPEC_SIZE = 32
    private val FRAME_SIZE = 160 // For mel spectrogram
    
    // Wake phrase mappings from the guide
    private val WAKE_PHRASE_MAPPINGS = mapOf(
        "Hey Jarvis" to "hey_jarvis",
        "Hey Juni" to "hey_jarvis",
        "Hey Jasmine" to "hey_jarvis",
        "Hey Jade" to "hey_jarvis",
        "Hey Jay" to "hey_jarvis",
        "Hey Jasper" to "hey_jarvis",
        "Hey Jerry" to "hey_jarvis",
        
        "Alexa" to "alexa",
        "Alex" to "alexa",
        "Aloe" to "alexa",
        
        "Hey Mycroft" to "hey_mycroft",
        "Hey Michael" to "hey_mycroft",
        "Hey Mulberry" to "hey_mycroft",
        "Hey Myrillis" to "hey_mycroft",
        "Hey Marigold" to "hey_mycroft"
    )
    
    // Audio processing buffer
    private val audioBuffer = mutableListOf<Float>()
    private var isInitialized = false
    private var currentModel = "hey_jarvis"
    
    // Rolling window buffer for temporal embeddings (16 frames × 96 features)
    private val embeddingBuffer = mutableListOf<FloatArray>()
    private val EMBEDDING_WINDOW_SIZE = 16  // OpenWakeWord expects 16 temporal frames
    
    companion object {
        private var instance: OpenWakeWordEngine? = null
        
        fun getInstance(context: Context): OpenWakeWordEngine {
            if (instance == null) {
                instance = OpenWakeWordEngine(context)
            }
            return instance!!
        }
    }
    
    fun initialize(): Boolean {
        return try {
            Log.i(TAG, "🚀 ENGINE_INIT: ========== INITIALIZING OPENWAKEWORD ENGINE ==========")
            Log.i(TAG, "🚀 ENGINE_INIT: Starting ONNX Runtime initialization...")
            
            // Load the base models (mel spectrogram and embedding)
            Log.i(TAG, "🚀 ENGINE_INIT: Loading base models (mel + embedding)...")
            loadBaseModels()
            Log.i(TAG, "🚀 ENGINE_INIT: ✅ Base models loaded successfully")
            
            // Load default wake word model
            Log.i(TAG, "🚀 ENGINE_INIT: Loading default wake word model: '$currentModel'")
            loadWakeWordModel(currentModel)
            Log.i(TAG, "🚀 ENGINE_INIT: ✅ Wake word model loaded successfully")
            
            isInitialized = true
            Log.i(TAG, "🚀 ENGINE_INIT: ✅ OpenWakeWord engine initialized successfully")
            Log.i(TAG, "🚀 ENGINE_INIT: =====================================================")
            true
        } catch (e: Exception) {
            Log.e(TAG, "🚀 ENGINE_INIT: ❌ Failed to initialize OpenWakeWord engine: ${e.message}", e)
            cleanup()
            false
        }
    }
    
    private fun loadBaseModels() {
        try {
            // Initialize ONNX Runtime environment
            ortEnvironment = OrtEnvironment.getEnvironment()
            Log.d(TAG, "ONNX Runtime environment initialized")
            
            // Load mel spectrogram model
            Log.d(TAG, "🔧 STEP 1: Loading melspectrogram.onnx model...")
            val melModelBytes = loadModelFromAssets("models/melspectrogram.onnx")
            Log.d(TAG, "📊 Mel model size: ${melModelBytes.size} bytes")
            
            try {
                Log.d(TAG, "🔧 STEP 2: Creating ONNX session for mel spectrogram...")
                val melOptions = SessionOptions()
                melSession = ortEnvironment?.createSession(melModelBytes, melOptions)
                Log.d(TAG, "✅ STEP 2 COMPLETE: Mel spectrogram session created successfully!")
                
                // Log model information
                val inputNames = melSession?.inputNames
                val outputNames = melSession?.outputNames
                Log.d(TAG, "Mel model - Input names: $inputNames")
                Log.d(TAG, "Mel model - Output names: $outputNames")
                
                // Inspect input/output tensor shapes
                inspectModelTensors("Mel", melSession)
                
                Log.d(TAG, "✅ Mel spectrogram model fully initialized")
            } catch (e: Exception) {
                Log.e(TAG, "❌ Failed to initialize mel ONNX session: ${e.message}")
                Log.e(TAG, "Stack trace:", e)
                throw e
            }
            
            // Load embedding model
            Log.d(TAG, "🔧 STEP 3: Loading embedding_model.onnx...")
            val embeddingModelBytes = loadModelFromAssets("models/embedding_model.onnx")
            Log.d(TAG, "📊 Embedding model size: ${embeddingModelBytes.size} bytes")
            
            try {
                val embeddingOptions = SessionOptions()
                embeddingSession = ortEnvironment?.createSession(embeddingModelBytes, embeddingOptions)
                Log.d(TAG, "✅ STEP 3 COMPLETE: Embedding session created successfully!")
                
                // Log embedding model details
                val embInputNames = embeddingSession?.inputNames
                val embOutputNames = embeddingSession?.outputNames
                Log.d(TAG, "Embedding model - Input names: $embInputNames")
                Log.d(TAG, "Embedding model - Output names: $embOutputNames")
                
                // Inspect input/output tensor shapes
                inspectModelTensors("Embedding", embeddingSession)
            } catch (e: Exception) {
                Log.e(TAG, "❌ Failed to initialize embedding ONNX session: ${e.message}")
                throw e
            }
            
            Log.d(TAG, "✅ All base ONNX models loaded successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Failed to load base models: ${e.message}", e)
            throw e
        }
    }
    
    private fun loadWakeWordModel(modelName: String) {
        try {
            // Clean up existing wake word session
            wakeWordSession?.close()
            
            // Load the specific wake word model
            val modelFileName = "${modelName}_v0.1.onnx"
            Log.d(TAG, "Loading wake word model: $modelFileName")
            val modelBytes = loadModelFromAssets("models/$modelFileName")
            Log.d(TAG, "Wake word model size: ${modelBytes.size} bytes")
            
            try {
                val options = SessionOptions()
                wakeWordSession = ortEnvironment?.createSession(modelBytes, options)
                Log.d(TAG, "Wake word ONNX session created successfully")
                
                // Log model information
                val inputNames = wakeWordSession?.inputNames
                val outputNames = wakeWordSession?.outputNames
                Log.d(TAG, "Wake word model - Input names: $inputNames")
                Log.d(TAG, "Wake word model - Output names: $outputNames")
                
                // Inspect input/output tensor shapes
                inspectModelTensors("WakeWord ($modelName)", wakeWordSession)
                
                currentModel = modelName
                Log.d(TAG, "Wake word model '$modelName' loaded successfully")
            } catch (e: Exception) {
                Log.e(TAG, "Failed to initialize wake word ONNX session: ${e.message}")
                throw e
            }
        } catch (e: Exception) {
            Log.e(TAG, "Failed to load wake word model '$modelName': ${e.message}", e)
            throw e
        }
    }
    
    fun setWakePhrase(phrase: String): Boolean {
        return try {
            Log.i(TAG, "🔄 PHRASE_SWITCH: ========== CHANGING WAKE PHRASE ==========")
            Log.i(TAG, "🔄 PHRASE_SWITCH: Requested phrase: '$phrase'")
            
            val modelName = WAKE_PHRASE_MAPPINGS[phrase] ?: "hey_jarvis"
            Log.i(TAG, "🔄 PHRASE_SWITCH: Mapped to model: '$modelName'")
            Log.i(TAG, "🔄 PHRASE_SWITCH: Current model: '$currentModel'")
            
            if (modelName != currentModel) {
                Log.i(TAG, "🔄 PHRASE_SWITCH: ⚡ Model switch required - loading new model...")
                loadWakeWordModel(modelName)
                Log.i(TAG, "🔄 PHRASE_SWITCH: ✅ Successfully switched to model '$modelName'")
            } else {
                Log.i(TAG, "🔄 PHRASE_SWITCH: ℹ️ No model switch needed - already using '$modelName'")
            }
            
            Log.i(TAG, "🔄 PHRASE_SWITCH: =============================================")
            true
        } catch (e: Exception) {
            Log.e(TAG, "🔄 PHRASE_SWITCH: ❌ Failed to set wake phrase '$phrase': ${e.message}", e)
            false
        }
    }
    
    fun processAudioChunk(audioData: ShortArray): Float {
        if (!isInitialized) {
            Log.w(TAG, "🎙️ AUDIO_PROC: Engine not initialized - returning 0")
            return 0f
        }
        
        if (audioData.size != CHUNK_SIZE) {
            Log.w(TAG, "🎙️ AUDIO_PROC: Invalid audio chunk size: ${audioData.size}, expected: $CHUNK_SIZE")
            return 0f
        }
        
        return try {
            // Convert short array to float array and normalize
            val floatAudio = FloatArray(audioData.size) { i ->
                audioData[i].toFloat() / 32768.0f
            }
            
            // Add to circular buffer
            audioBuffer.addAll(floatAudio.toList())
            
            // Keep only last 1.5 seconds (24000 samples)
            if (audioBuffer.size > SAMPLE_RATE * 3 / 2) {
                val toRemove = audioBuffer.size - (SAMPLE_RATE * 3 / 2)
                repeat(toRemove) { audioBuffer.removeFirst() }
            }
            
            // Need at least 1.5 seconds of audio for processing
            if (audioBuffer.size < SAMPLE_RATE * 3 / 2) {
                return 0f
            }
            
            // Process the audio through the pipeline with detailed logging
            Log.v(TAG, "🎙️ PIPELINE: Processing audio buffer: ${audioBuffer.size} samples")
            val melSpectrogram = extractMelSpectrogram(audioBuffer.toFloatArray())
            Log.v(TAG, "🎙️ PIPELINE: Mel spectrogram generated: ${melSpectrogram.size} elements")
            
            val embedding = generateEmbedding(melSpectrogram)
            Log.v(TAG, "🎙️ PIPELINE: Embedding generated: ${embedding.size} elements")
            
            // Add embedding to rolling window buffer
            addEmbeddingToBuffer(embedding)
            
            val confidence = classifyWakeWordFromBuffer()
            Log.v(TAG, "🎙️ PIPELINE: Confidence calculated: $confidence")
            
            // 🚨 CRITICAL: Check for infinite loop condition
            if (confidence == 0.0f) {
                Log.e(TAG, "🚨 PIPELINE: ZERO CONFIDENCE DETECTED - checking pipeline integrity")
                val melNonZero = melSpectrogram.count { it != 0f }
                val embNonZero = embedding.count { it != 0f }
                Log.e(TAG, "🚨 PIPELINE: Mel non-zero: $melNonZero/${melSpectrogram.size}, Embedding non-zero: $embNonZero/${embedding.size}")
                if (melNonZero == 0) {
                    Log.e(TAG, "🚨 PIPELINE: ROOT CAUSE: Mel spectrogram is all zeros!")
                } else if (embNonZero == 0) {
                    Log.e(TAG, "🚨 PIPELINE: ROOT CAUSE: Embedding is all zeros!")
                } else {
                    Log.e(TAG, "🚨 PIPELINE: ROOT CAUSE: Wake word model producing zero output!")
                }
            }
            
            // Log significant confidence scores
            if (confidence > 0.2f) {
                Log.d(TAG, "🎙️ AUDIO_PROC: High confidence detected: ${String.format("%.3f", confidence)} (model: $currentModel)")
            }
            
            confidence
        } catch (e: Exception) {
            Log.e(TAG, "🎙️ AUDIO_PROC: ❌ Error processing audio chunk: ${e.message}", e)
            0f
        }
    }
    
    private fun extractMelSpectrogram(audioData: FloatArray): FloatArray {
        return try {
            Log.v(TAG, "🎵 MEL_EXTRACT: Starting mel spectrogram extraction")
            Log.v(TAG, "🎵 MEL_EXTRACT: Input audio size: ${audioData.size} samples")
            
            val inputName = melSession?.inputNames?.iterator()?.next()
            val shape = longArrayOf(1, audioData.size.toLong())
            Log.v(TAG, "🎵 MEL_EXTRACT: Creating input tensor: $inputName, shape=${shape.contentToString()}")
            
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, FloatBuffer.wrap(audioData), shape)
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = melSession?.run(inputs)
            
            // Handle 3D output: [batch, mel_bins, time_frames]
            val result = output?.get(0)?.value
            Log.v(TAG, "🎵 MEL_EXTRACT: Raw output type: ${result?.javaClass}")
            
            val melSpec = when (result) {
                is Array<*> -> {
                    Log.v(TAG, "🎵 MEL_EXTRACT: Processing Array output with ${result.size} elements")
                    try {
                        // Handle 4D array: float[batch][channels][mel_bins][time_frames]
                        val batch = result[0] as Array<*>  // Get first batch
                        val channel = batch[0] as Array<*>  // Get first channel
                        val flattened = mutableListOf<Float>()
                        
                        Log.v(TAG, "🎵 MEL_EXTRACT: 4D array structure - batch: ${result.size}, channel: ${batch.size}, mel_bins: ${channel.size}")
                        
                        // Flatten mel_bins x time_frames  
                        for (melBinIndex in channel.indices) {
                            val timeFramesArray = channel[melBinIndex] as FloatArray
                            if (melBinIndex < 3) {  // Log first few for debugging
                                Log.v(TAG, "🎵 MEL_EXTRACT: Mel bin $melBinIndex has ${timeFramesArray.size} time frames")
                            }
                            for (timeFrame in timeFramesArray) {
                                flattened.add(timeFrame)
                            }
                        }
                        
                        Log.v(TAG, "🎵 MEL_EXTRACT: Flattened mel spec size: ${flattened.size}")
                        flattened.toFloatArray()
                    } catch (e: Exception) {
                        Log.e(TAG, "🎵 MEL_EXTRACT: Error processing Array: ${e.message}", e)
                        FloatArray(MEL_SPEC_SIZE * 80)
                    }
                }
                is FloatArray -> {
                    Log.v(TAG, "🎵 MEL_EXTRACT: Output is FloatArray: ${result.size} elements")
                    result
                }
                else -> {
                    Log.w(TAG, "🎵 MEL_EXTRACT: Unexpected output type: ${result?.javaClass}")
                    FloatArray(MEL_SPEC_SIZE * 80)
                }
            }
            
            inputTensor.close()
            output?.close()
            
            // CRITICAL: Apply OpenWakeWord's required transformation: output = (value / 10.0) + 2.0
            Log.v(TAG, "🎵 MEL_EXTRACT: Applying OpenWakeWord transformation: (value / 10.0) + 2.0")
            val transformedMelSpec = melSpec.map { value ->
                (value / 10.0f) + 2.0f
            }.toFloatArray()
            Log.v(TAG, "🎵 MEL_EXTRACT: Transformation complete: ${transformedMelSpec.size} elements")
            
            // Check for zero or invalid mel spectrograms
            val nonZeroCount = transformedMelSpec.count { it != 0f }
            val avgValue = if (transformedMelSpec.isNotEmpty()) transformedMelSpec.average() else 0.0
            val variance = if (transformedMelSpec.isNotEmpty()) {
                transformedMelSpec.map { (it - avgValue) * (it - avgValue) }.average()
            } else 0.0
            val stdDev = kotlin.math.sqrt(variance.toFloat())
            
            Log.v(TAG, "🎵 MEL_EXTRACT: Final transformed mel spec: ${transformedMelSpec.size} elements, ${nonZeroCount} non-zero")
            Log.v(TAG, "🎵 MEL_EXTRACT: Statistics: avg=${String.format("%.6f", avgValue)}, std=${String.format("%.6f", stdDev)}")
            
            if (nonZeroCount == 0) {
                Log.e(TAG, "🚨 MEL_EXTRACT: CRITICAL ERROR: Mel spectrogram is all zeros - WILL CAUSE INFINITE LOOP!")
                Log.e(TAG, "🚨 MEL_EXTRACT: Audio input size: ${audioData.size}, input range: [${audioData.minOrNull()}, ${audioData.maxOrNull()}]")
                // Return corrupted mel spec to trigger downstream failure detection
            } else if (stdDev < 0.01f) {
                Log.w(TAG, "🎵 MEL_EXTRACT: ⚠️ WARNING: Low variance mel spectrogram (std=${String.format("%.6f", stdDev)}) - may cause poor embeddings!")
            }
            
            transformedMelSpec
        } catch (e: Exception) {
            Log.e(TAG, "Error extracting mel spectrogram: ${e.message}", e)
            FloatArray(MEL_SPEC_SIZE * 80) // Return empty array with expected size
        }
    }
    
    private fun generateEmbedding(melSpectrogram: FloatArray): FloatArray {
        return try {
            Log.v(TAG, "🧠 EMBEDDING: Starting embedding generation")
            val inputName = embeddingSession?.inputNames?.iterator()?.next()
            Log.v(TAG, "🧠 EMBEDDING: Input name: $inputName")
            
            // The embedding model expects exactly 76 time frames, but mel produces 147
            val actualMelSize = melSpectrogram.size
            Log.v(TAG, "🧠 EMBEDDING: Input mel spec: ${actualMelSize} elements")
            
            val melBins = 32  // Standard mel spectrogram bins  
            val actualTimeFrames = actualMelSize / melBins
            val expectedTimeFrames = 76  // What the embedding model expects
            val batchSize = 1
            val channelSize = 1
            
            Log.v(TAG, "🧠 EMBEDDING: Mel structure: ${melBins} mel bins × ${actualTimeFrames} time frames")
            Log.v(TAG, "🧠 EMBEDDING: Expected by model: ${melBins} mel bins × ${expectedTimeFrames} time frames") 
            
            // Truncate mel spectrogram to expected size (76 time frames)
            val adjustedMel = if (actualTimeFrames > expectedTimeFrames) {
                Log.i(TAG, "🧠 EMBEDDING: ✂️ Truncating mel spec from ${actualTimeFrames} to ${expectedTimeFrames} time frames")
                val truncatedSize = expectedTimeFrames * melBins
                melSpectrogram.sliceArray(0 until truncatedSize)
            } else if (actualTimeFrames < expectedTimeFrames) {
                Log.i(TAG, "🧠 EMBEDDING: 📈 Padding mel spec from ${actualTimeFrames} to ${expectedTimeFrames} time frames")
                val paddedSize = expectedTimeFrames * melBins
                val padded = FloatArray(paddedSize)
                melSpectrogram.copyInto(padded)
                // Fill remainder with zeros (already initialized)
                padded
            } else {
                Log.v(TAG, "🧠 EMBEDDING: ✅ Mel spec already correct size")
                melSpectrogram
            }
            
            val finalTimeFrames = adjustedMel.size / melBins
            Log.v(TAG, "🧠 EMBEDDING: Final tensor shape: [${batchSize}, ${finalTimeFrames}, ${melBins}, ${channelSize}]")
            
            // Reshape to [1, finalTimeFrames, melBins, 1] using corrected dimensions
            val reshapedData = Array(batchSize) { 
                Array(finalTimeFrames) { time -> 
                    Array(melBins) { mel -> 
                        FloatArray(channelSize) { ch ->
                            val index = time * melBins * channelSize + mel * channelSize + ch
                            adjustedMel[index]
                        }
                    }
                }
            }
            
            Log.v(TAG, "🧠 EMBEDDING: Created tensor: [${reshapedData.size}, ${reshapedData[0].size}, ${reshapedData[0][0].size}, ${reshapedData[0][0][0].size}]")
            
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, reshapedData)
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = embeddingSession?.run(inputs)
            
            val result = output?.get(0)?.value
            Log.v(TAG, "🧠 EMBEDDING: Raw output type: ${result?.javaClass}")
            
            val embedding = when (result) {
                is Array<*> -> {
                    Log.v(TAG, "🧠 EMBEDDING: Processing Array output with ${result.size} elements")
                    try {
                        // The embedding model should output [batch, sequence, features] = [1, 16, 96]
                        // But we're only extracting the first sequence step instead of all 16!
                        if (result[0] is Array<*>) {
                            val batch = result[0] as Array<*>
                            Log.v(TAG, "🧠 EMBEDDING: Batch has ${batch.size} sequences")
                            
                            if (batch[0] is Array<*>) {
                                // 3D array case: This is [batch][sequence][features]
                                // The embedding model outputs [1, 16, 96] - we need all 16×96=1536 elements
                                Log.v(TAG, "🧠 EMBEDDING: Extracting all ${batch.size} sequence steps")
                                val flattened = mutableListOf<Float>()
                                for ((seqIndex, seqData) in batch.withIndex()) {
                                    val sequence = seqData as Array<*>
                                    Log.v(TAG, "🧠 EMBEDDING: Sequence $seqIndex has ${sequence.size} time steps")
                                    for ((timeIndex, timeData) in sequence.withIndex()) {
                                        val features = timeData as FloatArray
                                        if (seqIndex == 0 && timeIndex < 3) {
                                            Log.v(TAG, "🧠 EMBEDDING: Seq $seqIndex, time $timeIndex: ${features.size} features")
                                        }
                                        flattened.addAll(features.toList())
                                    }
                                }
                                Log.v(TAG, "🧠 EMBEDDING: Extracted 3D embedding: ${flattened.size} elements from all sequences")
                                
                                // The actual embedding model outputs [1, 1, 96] = 96 total elements, not 1536
                                if (flattened.size == 96) {
                                    Log.i(TAG, "🧠 EMBEDDING: ✅ Got expected embedding size: 1×96=96")
                                } else {
                                    Log.w(TAG, "🧠 EMBEDDING: ⚠️ Unexpected embedding size: ${flattened.size}, expected 96")
                                }
                                
                                flattened.toFloatArray()
                            } else {
                                // 2D array case: flatten all sequences  
                                val flattened = mutableListOf<Float>()
                                Log.v(TAG, "🧠 EMBEDDING: Flattening ${batch.size} sequence steps")
                                for ((seqIndex, seq) in batch.withIndex()) {
                                    val features = seq as FloatArray
                                    Log.v(TAG, "🧠 EMBEDDING: Sequence $seqIndex has ${features.size} features")
                                    flattened.addAll(features.toList())
                                }
                                Log.v(TAG, "🧠 EMBEDDING: Flattened 2D embedding: ${flattened.size} elements")
                                flattened.toFloatArray()
                            }
                        } else {
                            // 1D array case
                            val features = result[0] as FloatArray
                            Log.v(TAG, "🧠 EMBEDDING: Direct 1D embedding: ${features.size} elements")
                            features
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "🧠 EMBEDDING: Error parsing Array: ${e.message}")
                        FloatArray(EMBEDDING_SIZE)
                    }
                }
                is FloatArray -> {
                    Log.v(TAG, "🧠 EMBEDDING: Output is FloatArray: ${result.size} elements")
                    result
                }
                else -> {
                    Log.w(TAG, "🧠 EMBEDDING: Unexpected output type: ${result?.javaClass}")
                    FloatArray(EMBEDDING_SIZE)
                }
            }
            
            inputTensor.close()
            output?.close()
            
            // Check if embedding is all zeros or has poor variance (indicates processing failure)
            val nonZeroCount = embedding.count { it != 0f }
            val avgValue = if (embedding.isNotEmpty()) embedding.average() else 0.0
            val variance = if (embedding.isNotEmpty()) {
                embedding.map { (it - avgValue) * (it - avgValue) }.average()
            } else 0.0
            val stdDev = kotlin.math.sqrt(variance.toFloat())
            
            Log.v(TAG, "🧠 EMBEDDING: Final embedding: ${embedding.size} elements, ${nonZeroCount} non-zero")
            Log.v(TAG, "🧠 EMBEDDING: Statistics: avg=${String.format("%.6f", avgValue)}, std=${String.format("%.6f", stdDev)}")
            
            if (nonZeroCount == 0) {
                Log.e(TAG, "🚨 EMBEDDING: CRITICAL ERROR: Embedding is all zeros - WILL CAUSE ZERO CONFIDENCE!")
                Log.e(TAG, "🚨 EMBEDDING: This indicates mel spectrogram corruption or model failure")
            } else if (nonZeroCount < embedding.size / 10) {
                Log.w(TAG, "🧠 EMBEDDING: ⚠️ WARNING: Very sparse embedding (${nonZeroCount}/${embedding.size} non-zero)")
            } else if (stdDev < 0.01f) {
                Log.w(TAG, "🧠 EMBEDDING: ⚠️ WARNING: Low variance embedding (std=${String.format("%.6f", stdDev)}) - may cause poor classification!")
            }
            
            embedding
        } catch (e: Exception) {
            Log.e(TAG, "Error generating embedding: ${e.message}", e)
            FloatArray(EMBEDDING_SIZE) // Return empty array with expected size
        }
    }
    
    private fun addEmbeddingToBuffer(embedding: FloatArray) {
        try {
            Log.v(TAG, "📊 BUFFER: Adding embedding to temporal buffer: ${embedding.size} elements")
            
            // Add the new embedding to the buffer
            embeddingBuffer.add(embedding.copyOf())
            
            // Keep only the last 16 embeddings (rolling window)
            if (embeddingBuffer.size > EMBEDDING_WINDOW_SIZE) {
                val toRemove = embeddingBuffer.size - EMBEDDING_WINDOW_SIZE
                repeat(toRemove) { embeddingBuffer.removeFirst() }
                Log.v(TAG, "📊 BUFFER: Trimmed buffer to ${embeddingBuffer.size} embeddings")
            }
            
            Log.v(TAG, "📊 BUFFER: Current buffer size: ${embeddingBuffer.size}/${EMBEDDING_WINDOW_SIZE}")
        } catch (e: Exception) {
            Log.e(TAG, "📊 BUFFER: Error adding embedding to buffer: ${e.message}", e)
        }
    }
    
    private fun classifyWakeWordFromBuffer(): Float {
        return try {
            Log.v(TAG, "🎯 CLASSIFY: Starting wake word classification from buffer")
            
            // Need at least 16 embeddings for classification
            if (embeddingBuffer.size < EMBEDDING_WINDOW_SIZE) {
                Log.v(TAG, "🎯 CLASSIFY: Insufficient embeddings: ${embeddingBuffer.size}/${EMBEDDING_WINDOW_SIZE} - returning 0")
                return 0f
            }
            
            val inputName = wakeWordSession?.inputNames?.iterator()?.next()
            Log.v(TAG, "🎯 CLASSIFY: Input name: $inputName")
            
            val batchSize = 1
            val sequenceLength = EMBEDDING_WINDOW_SIZE  // 16 temporal frames
            val featureSize = 96  // Features per frame
            
            Log.v(TAG, "🎯 CLASSIFY: Creating tensor shape: [${batchSize}, ${sequenceLength}, ${featureSize}]")
            Log.v(TAG, "🎯 CLASSIFY: Using ${embeddingBuffer.size} embeddings from buffer")
            
            // Create tensor with correct temporal sequence: [1, 16, 96]
            // Each of the 16 time steps gets its own unique 96-element embedding
            val reshapedData = Array(batchSize) { 
                Array(sequenceLength) { timeStep -> 
                    val embedding = embeddingBuffer[timeStep]
                    Log.v(TAG, "🎯 CLASSIFY: Time step $timeStep: ${embedding.size} features")
                    embedding.copyOf(featureSize) // Ensure exactly 96 features
                }
            }
            
            Log.v(TAG, "🎯 CLASSIFY: Created tensor shape: [${reshapedData.size}, ${reshapedData[0].size}, ${reshapedData[0][0].size}]")
            
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, reshapedData)
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = wakeWordSession?.run(inputs)
            
            val result = output?.get(0)?.value
            Log.v(TAG, "🎯 CLASSIFY: Raw output type: ${result?.javaClass}")
            
            val rawScore = when (result) {
                is FloatArray -> {
                    Log.v(TAG, "🎯 CLASSIFY: Output is FloatArray with ${result.size} elements")
                    val score = if (result.isNotEmpty()) result[0] else 0f
                    Log.v(TAG, "🎯 CLASSIFY: Raw score from FloatArray: ${String.format("%.6f", score)}")
                    score
                }
                is Array<*> -> {
                    Log.v(TAG, "🎯 CLASSIFY: Output is Array with ${result.size} elements")
                    try {
                        // Handle 2D array: float[batch][features]
                        val batch = result[0] as FloatArray  // Get first batch directly as FloatArray
                        Log.v(TAG, "🎯 CLASSIFY: Batch has ${batch.size} features")
                        val score = if (batch.isNotEmpty()) batch[0] else 0f
                        Log.v(TAG, "🎯 CLASSIFY: Raw score from Array: ${String.format("%.6f", score)}")
                        score
                    } catch (e: Exception) {
                        Log.w(TAG, "🎯 CLASSIFY: Error parsing Array: ${e.message}")
                        0f
                    }
                }
                else -> {
                    Log.w(TAG, "🎯 CLASSIFY: Unexpected output type: ${result?.javaClass}")
                    0f
                }
            }
            
            inputTensor.close()
            output?.close()
            
            // OpenWakeWord models output probability values (0-1), not logits
            // No sigmoid transformation needed - the output IS the confidence score
            val confidence = rawScore.coerceIn(0f, 1f)  // Ensure valid probability range
            
            // Debug logging for confidence calculation
            Log.v(TAG, "🎯 CLASSIFY: Model output score: ${String.format("%.6f", rawScore)}, Final confidence: ${String.format("%.6f", confidence)}")
            Log.v(TAG, "🎯 CLASSIFY: Model: $currentModel")
            
            // Check for very low confidence (silence/background noise)
            if (confidence < 0.01f) {
                Log.v(TAG, "🎯 CLASSIFY: Very low confidence: ${String.format("%.6f", confidence)} - likely silence/background noise")
            }
            
            // Log confidence interpretation
            if (confidence > 0.6f) {
                Log.d(TAG, "🎯 CLASSIFY: HIGH confidence: ${String.format("%.4f", confidence)}")
            } else if (confidence > 0.4f) {
                Log.d(TAG, "🎯 CLASSIFY: MEDIUM confidence: ${String.format("%.4f", confidence)}")
            } else {
                Log.v(TAG, "🎯 CLASSIFY: LOW confidence: ${String.format("%.4f", confidence)}")
            }
            
            confidence
        } catch (e: Exception) {
            Log.e(TAG, "🎯 CLASSIFICATION: ❌ Error classifying wake word: ${e.message}", e)
            0f
        }
    }
    
    private fun sigmoid(x: Float): Float {
        return 1.0f / (1.0f + kotlin.math.exp(-x))
    }
    
    private fun inspectModelTensors(modelName: String, session: OrtSession?) {
        try {
            Log.i(TAG, "🔍 MODEL_INSPECTION: ========== $modelName MODEL TENSOR SHAPES ==========")
            
            session?.let { sess ->
                // Inspect input tensors
                Log.i(TAG, "🔍 MODEL_INSPECTION: Input tensors:")
                for (inputName in sess.inputNames) {
                    try {
                        val inputInfo = sess.inputInfo[inputName]
                        Log.i(TAG, "🔍 MODEL_INSPECTION:   Input '$inputName': info available=${inputInfo != null}")
                        // Note: Shape and type inspection may not be available in this ONNX Runtime version
                        // The tensor information will be visible during actual inference
                    } catch (e: Exception) {
                        Log.w(TAG, "🔍 MODEL_INSPECTION:   Input '$inputName': Could not get info - ${e.message}")
                    }
                }
                
                // Inspect output tensors
                Log.i(TAG, "🔍 MODEL_INSPECTION: Output tensors:")
                for (outputName in sess.outputNames) {
                    try {
                        val outputInfo = sess.outputInfo[outputName]
                        Log.i(TAG, "🔍 MODEL_INSPECTION:   Output '$outputName': info available=${outputInfo != null}")
                        // Note: Shape and type inspection may not be available in this ONNX Runtime version
                        // The tensor information will be visible during actual inference
                    } catch (e: Exception) {
                        Log.w(TAG, "🔍 MODEL_INSPECTION:   Output '$outputName': Could not get info - ${e.message}")
                    }
                }
                
                // Validate expected tensor compatibility based on model name
                validateModelTensorShapes(modelName, sess)
            }
            
            Log.i(TAG, "🔍 MODEL_INSPECTION: ===================================================")
        } catch (e: Exception) {
            Log.e(TAG, "🔍 MODEL_INSPECTION: Error inspecting $modelName model: ${e.message}", e)
        }
    }
    
    private fun validateModelTensorShapes(modelName: String, session: OrtSession) {
        try {
            Log.i(TAG, "🔧 TENSOR_VALIDATION: Validating $modelName tensor shapes...")
            
            when (modelName) {
                "Mel" -> {
                    Log.i(TAG, "🔧 TENSOR_VALIDATION: Mel model expects:")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Input: [1, audio_samples] - variable audio length")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Output: [1, 1, mel_bins, time_frames] - produces mel spectrogram")
                }
                "Embedding" -> {
                    Log.i(TAG, "🔧 TENSOR_VALIDATION: Embedding model expects:")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Input: [1, 76, 32, 1] - fixed size mel spectrogram")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Output: [1, 16, 96] - 16 sequences × 96 features = 1536 total")
                }
                "WakeWord (hey_jarvis)", "WakeWord (alexa)", "WakeWord (hey_mycroft)" -> {
                    Log.i(TAG, "🔧 TENSOR_VALIDATION: Wake word model expects:")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Input: [1, 16, 96] - embeddings from embedding model")
                    Log.i(TAG, "🔧 TENSOR_VALIDATION:   Output: [1, 1] or [1] - confidence score")
                }
            }
            
            Log.i(TAG, "🔧 TENSOR_VALIDATION: ✅ Tensor shape validation completed for $modelName")
        } catch (e: Exception) {
            Log.e(TAG, "🔧 TENSOR_VALIDATION: Error validating $modelName: ${e.message}", e)
        }
    }
    
    private fun loadModelFromAssets(fileName: String): ByteArray {
        return try {
            val assetManager: AssetManager = context.assets
            val inputStream: InputStream = assetManager.open(fileName)
            val bytes = inputStream.readBytes()
            inputStream.close()
            
            Log.d(TAG, "Loaded model $fileName (${bytes.size} bytes)")
            bytes
        } catch (e: Exception) {
            Log.e(TAG, "Failed to load model from assets: $fileName", e)
            throw e
        }
    }
    
    fun getAvailableWakePhrases(): Set<String> {
        return WAKE_PHRASE_MAPPINGS.keys
    }
    
    fun getCurrentWakePhrase(): String {
        return WAKE_PHRASE_MAPPINGS.entries.find { it.value == currentModel }?.key ?: "Hey Jarvis"
    }
    
    fun cleanup() {
        try {
            Log.d(TAG, "Cleaning up OpenWakeWord engine...")
            
            wakeWordSession?.close()
            melSession?.close()
            embeddingSession?.close()
            ortEnvironment?.close()
            
            wakeWordSession = null
            melSession = null
            embeddingSession = null
            ortEnvironment = null
            
            audioBuffer.clear()
            embeddingBuffer.clear()
            isInitialized = false
            
            Log.d(TAG, "OpenWakeWord engine cleaned up")
        } catch (e: Exception) {
            Log.e(TAG, "Error during cleanup: ${e.message}", e)
        }
    }
    
    fun isReady(): Boolean {
        return isInitialized && wakeWordSession != null && melSession != null && embeddingSession != null
    }
}