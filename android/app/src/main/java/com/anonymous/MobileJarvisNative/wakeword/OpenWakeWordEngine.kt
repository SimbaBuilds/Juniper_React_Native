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
            
            // Process the audio through the pipeline
            val melSpectrogram = extractMelSpectrogram(audioBuffer.toFloatArray())
            val embedding = generateEmbedding(melSpectrogram)
            val confidence = classifyWakeWord(embedding)
            
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
            val inputName = melSession?.inputNames?.iterator()?.next()
            val shape = longArrayOf(1, audioData.size.toLong())
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, FloatBuffer.wrap(audioData), shape)
            
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = melSession?.run(inputs)
            
            // Handle 3D output: [batch, mel_bins, time_frames]
            val result = output?.get(0)?.value
            Log.d(TAG, "Mel spectrogram output type: ${result?.javaClass}")
            
            val melSpec = when (result) {
                is Array<*> -> {
                    Log.d(TAG, "Processing 4D mel output array")
                    try {
                        // Handle 4D array: float[batch][channels][mel_bins][time_frames]
                        val batch = result[0] as Array<*>  // Get first batch
                        val channel = batch[0] as Array<*>  // Get first channel
                        val flattened = mutableListOf<Float>()
                        
                        Log.d(TAG, "4D array structure - batch: ${result.size}, channel: ${batch.size}, mel_bins: ${channel.size}")
                        
                        // Flatten mel_bins x time_frames  
                        for (melBinIndex in channel.indices) {
                            val timeFramesArray = channel[melBinIndex] as FloatArray
                            Log.d(TAG, "Mel bin $melBinIndex has ${timeFramesArray.size} time frames")
                            for (timeFrame in timeFramesArray) {
                                flattened.add(timeFrame)
                            }
                        }
                        
                        Log.d(TAG, "Flattened mel spec size: ${flattened.size}")
                        flattened.toFloatArray()
                    } catch (e: Exception) {
                        Log.e(TAG, "Error processing 4D mel array: ${e.message}", e)
                        FloatArray(MEL_SPEC_SIZE * 80)
                    }
                }
                is FloatArray -> {
                    Log.d(TAG, "Mel output is already 1D: ${result.size}")
                    result
                }
                else -> {
                    Log.w(TAG, "Unexpected mel spectrogram output type: ${result?.javaClass}")
                    FloatArray(MEL_SPEC_SIZE * 80)
                }
            }
            
            inputTensor.close()
            output?.close()
            
            Log.d(TAG, "Mel spectrogram extracted: ${melSpec.size} elements")
            melSpec
        } catch (e: Exception) {
            Log.e(TAG, "Error extracting mel spectrogram: ${e.message}", e)
            FloatArray(MEL_SPEC_SIZE * 80) // Return empty array with expected size
        }
    }
    
    private fun generateEmbedding(melSpectrogram: FloatArray): FloatArray {
        return try {
            val inputName = embeddingSession?.inputNames?.iterator()?.next()
            
            // The embedding model expects [batch, 76, 32, 1] based on the error message
            val batchSize = 1
            val sequenceLength = 76  
            val melFeatures = 32  // Fixed to expected value
            val channelSize = 1
            val requiredSize = sequenceLength * melFeatures * channelSize  // 76 * 32 * 1 = 2432
            
            Log.d(TAG, "Embedding input: total=${melSpectrogram.size}, expected=[${batchSize}, ${sequenceLength}, ${melFeatures}, ${channelSize}]")
            Log.d(TAG, "Required tensor size: ${requiredSize}, actual mel size: ${melSpectrogram.size}")
            
            // Adjust mel spectrogram to fit expected dimensions
            val adjustedMel = if (melSpectrogram.size == requiredSize) {
                Log.d(TAG, "Perfect size match for embedding input")
                melSpectrogram
            } else if (melSpectrogram.size > requiredSize) {
                Log.d(TAG, "Truncating mel spectrogram from ${melSpectrogram.size} to ${requiredSize}")
                melSpectrogram.copyOf(requiredSize)
            } else {
                Log.d(TAG, "Padding mel spectrogram from ${melSpectrogram.size} to ${requiredSize}")
                FloatArray(requiredSize) { i ->
                    if (i < melSpectrogram.size) melSpectrogram[i] else 0f
                }
            }
            
            // Reshape to [1, 76, 32, 1]
            val reshapedData = Array(batchSize) { 
                Array(sequenceLength) { seq -> 
                    Array(melFeatures) { feat -> 
                        FloatArray(channelSize) { ch ->
                            val index = seq * melFeatures * channelSize + feat * channelSize + ch
                            adjustedMel[index]
                        }
                    }
                }
            }
            
            Log.d(TAG, "Created embedding tensor: [${reshapedData.size}, ${reshapedData[0].size}, ${reshapedData[0][0].size}, ${reshapedData[0][0][0].size}]")
            
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, reshapedData)
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = embeddingSession?.run(inputs)
            
            val result = output?.get(0)?.value
            Log.d(TAG, "Embedding output type: ${result?.javaClass}")
            
            val embedding = when (result) {
                is Array<*> -> {
                    Log.d(TAG, "Embedding output is Array with ${result.size} elements")
                    try {
                        // Try 3D array: float[batch][sequence][features]
                        if (result[0] is Array<*>) {
                            val batch = result[0] as Array<*>
                            if (batch[0] is Array<*>) {
                                // 3D array case: extract features from sequence
                                val sequence = batch[0] as Array<*>
                                val features = sequence[0] as FloatArray
                                Log.d(TAG, "Extracted 3D embedding: ${features.size} elements")
                                features
                            } else {
                                // 2D array case: flatten
                                val flattened = mutableListOf<Float>()
                                for (seq in batch) {
                                    val features = seq as FloatArray
                                    flattened.addAll(features.toList())
                                }
                                Log.d(TAG, "Flattened 2D embedding: ${flattened.size} elements")
                                flattened.toFloatArray()
                            }
                        } else {
                            // 1D array case
                            val features = result[0] as FloatArray
                            Log.d(TAG, "Direct 1D embedding: ${features.size} elements")
                            features
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "Error parsing embedding array: ${e.message}")
                        FloatArray(EMBEDDING_SIZE)
                    }
                }
                is FloatArray -> {
                    Log.d(TAG, "Embedding output is direct FloatArray: ${result.size} elements")
                    result
                }
                else -> {
                    Log.w(TAG, "Unexpected embedding output type: ${result?.javaClass}")
                    FloatArray(EMBEDDING_SIZE)
                }
            }
            
            inputTensor.close()
            output?.close()
            
            Log.d(TAG, "Embedding generated: ${embedding.size} elements")
            embedding
        } catch (e: Exception) {
            Log.e(TAG, "Error generating embedding: ${e.message}", e)
            FloatArray(EMBEDDING_SIZE) // Return empty array with expected size
        }
    }
    
    private fun classifyWakeWord(embedding: FloatArray): Float {
        return try {
            val inputName = wakeWordSession?.inputNames?.iterator()?.next()
            
            // The wake word model expects [batch, 16, 96] = [1, 16, 96]
            // Our embedding is [512] elements, need to reshape to 1536 elements
            val batchSize = 1
            val sequenceLength = 16
            val featureSize = 96
            val requiredSize = sequenceLength * featureSize  // 1536
            
            Log.d(TAG, "Wake word input: embedding_size=${embedding.size}, required_size=${requiredSize}")
            
            // Pad embedding to required size (repeat pattern if needed)
            val paddedEmbedding = FloatArray(requiredSize) { i ->
                if (i < embedding.size) {
                    embedding[i]
                } else {
                    // Repeat the embedding pattern to fill remaining space
                    embedding[i % embedding.size]
                }
            }
            
            Log.d(TAG, "Padded embedding from ${embedding.size} to ${paddedEmbedding.size}")
            
            // Create properly shaped 3D tensor: [1, 16, 96]
            val reshapedData = Array(batchSize) { 
                Array(sequenceLength) { seq -> 
                    FloatArray(featureSize) { feat -> 
                        val index = seq * featureSize + feat
                        paddedEmbedding[index]
                    }
                }
            }
            
            Log.d(TAG, "Created tensor shape: [${reshapedData.size}, ${reshapedData[0].size}, ${reshapedData[0][0].size}]")
            
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, reshapedData)
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = wakeWordSession?.run(inputs)
            
            val result = output?.get(0)?.value
            Log.d(TAG, "Wake word output type: ${result?.javaClass}")
            
            val rawScore = when (result) {
                is FloatArray -> {
                    Log.d(TAG, "Wake word output is FloatArray with ${result.size} elements")
                    if (result.isNotEmpty()) result[0] else 0f
                }
                is Array<*> -> {
                    Log.d(TAG, "Wake word output is Array with ${result.size} elements")
                    try {
                        // Handle 2D array: float[batch][features]
                        val batch = result[0] as FloatArray  // Get first batch directly as FloatArray
                        Log.d(TAG, "Wake word batch has ${batch.size} features")
                        if (batch.isNotEmpty()) batch[0] else 0f
                    } catch (e: Exception) {
                        Log.w(TAG, "Error parsing Array output: ${e.message}")
                        0f
                    }
                }
                else -> {
                    Log.w(TAG, "Unexpected wake word output type: ${result?.javaClass}")
                    0f
                }
            }
            
            inputTensor.close()
            output?.close()
            
            // Apply sigmoid to get confidence score
            val confidence = sigmoid(rawScore)
            
            // Log detailed confidence info for significant scores
            if (confidence > 0.1f) {
                Log.d(TAG, "🎯 CLASSIFICATION: Raw score: ${String.format("%.4f", rawScore)}, Confidence: ${String.format("%.4f", confidence)}, Model: $currentModel")
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