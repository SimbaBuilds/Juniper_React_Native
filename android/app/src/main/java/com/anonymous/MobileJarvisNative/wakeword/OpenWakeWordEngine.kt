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
            Log.i(TAG, "🚀 ENGINE_INIT: Starting ONNX Runtime environment...")
            
            // Initialize ONNX Runtime environment
            ortEnvironment = OrtEnvironment.getEnvironment()
            Log.i(TAG, "🚀 ENGINE_INIT: ✅ ONNX Runtime environment created")
            
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
            // Load mel spectrogram model
            val melModelBytes = loadModelFromAssets("models/melspectrogram.tflite")
            val melOptions = SessionOptions()
            melSession = ortEnvironment?.createSession(melModelBytes, melOptions)
            
            // Load embedding model
            val embeddingModelBytes = loadModelFromAssets("models/embedding_model.tflite")
            val embeddingOptions = SessionOptions()
            embeddingSession = ortEnvironment?.createSession(embeddingModelBytes, embeddingOptions)
            
            Log.d(TAG, "Base models loaded successfully")
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
            val modelFileName = "${modelName}_v0.1.tflite"
            val modelBytes = loadModelFromAssets("models/$modelFileName")
            val options = SessionOptions()
            wakeWordSession = ortEnvironment?.createSession(modelBytes, options)
            
            currentModel = modelName
            Log.d(TAG, "Wake word model '$modelName' loaded successfully")
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
            
            val result = output?.get(0)?.value as Array<*>
            val melSpec = (result[0] as FloatArray)
            
            inputTensor.close()
            output?.close()
            
            melSpec
        } catch (e: Exception) {
            Log.e(TAG, "Error extracting mel spectrogram: ${e.message}", e)
            FloatArray(MEL_SPEC_SIZE * 80) // Return empty array with expected size
        }
    }
    
    private fun generateEmbedding(melSpectrogram: FloatArray): FloatArray {
        return try {
            val inputName = embeddingSession?.inputNames?.iterator()?.next()
            val shape = longArrayOf(1, melSpectrogram.size.toLong())
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, FloatBuffer.wrap(melSpectrogram), shape)
            
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = embeddingSession?.run(inputs)
            
            val result = output?.get(0)?.value as Array<*>
            val embedding = (result[0] as FloatArray)
            
            inputTensor.close()
            output?.close()
            
            embedding
        } catch (e: Exception) {
            Log.e(TAG, "Error generating embedding: ${e.message}", e)
            FloatArray(EMBEDDING_SIZE) // Return empty array with expected size
        }
    }
    
    private fun classifyWakeWord(embedding: FloatArray): Float {
        return try {
            val inputName = wakeWordSession?.inputNames?.iterator()?.next()
            val shape = longArrayOf(1, embedding.size.toLong())
            val inputTensor = OnnxTensor.createTensor(ortEnvironment, FloatBuffer.wrap(embedding), shape)
            
            val inputs = Collections.singletonMap(inputName, inputTensor)
            val output = wakeWordSession?.run(inputs)
            
            val result = output?.get(0)?.value as Array<*>
            val scores = (result[0] as FloatArray)
            
            inputTensor.close()
            output?.close()
            
            // Apply sigmoid to get confidence score
            val confidence = sigmoid(scores[0])
            
            // Log detailed confidence info for significant scores
            if (confidence > 0.1f) {
                Log.d(TAG, "🎯 CLASSIFICATION: Raw score: ${String.format("%.4f", scores[0])}, Confidence: ${String.format("%.4f", confidence)}, Model: $currentModel")
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