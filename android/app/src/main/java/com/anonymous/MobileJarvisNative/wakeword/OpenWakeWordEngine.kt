package com.anonymous.MobileJarvisNative.wakeword

import android.content.Context
import android.content.res.AssetManager
import android.util.Log
import org.tensorflow.lite.Interpreter
import org.tensorflow.lite.InterpreterApi
import java.io.InputStream
import java.io.File
import java.io.FileOutputStream
import java.nio.ByteBuffer
import java.nio.ByteOrder
import java.nio.MappedByteBuffer
import java.nio.channels.FileChannel
import org.tensorflow.lite.support.common.FileUtil

class OpenWakeWordEngine(private val context: Context) {
    private val TAG = "OpenWakeWordEngine"
    
    private var wakeWordInterpreter: Interpreter? = null
    private var melInterpreter: Interpreter? = null
    private var embeddingInterpreter: Interpreter? = null
    
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
            Log.i(TAG, "🚀 ENGINE_INIT: Starting TensorFlow Lite initialization...")
            
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
            // Create interpreter options - aggressively disable all delegates
            val options = Interpreter.Options()
            options.setNumThreads(1) // Use single thread to avoid issues
            options.setUseNNAPI(false) // Explicitly disable NNAPI
            options.setAllowFp16PrecisionForFp32(false) // Disable FP16 to avoid precision issues
            options.setAllowBufferHandleOutput(false)
            options.setUseXNNPACK(false) // Disable XNNPACK delegate
            // Don't add any delegates - force CPU execution
            Log.d(TAG, "Interpreter options configured - threads: 1, NNAPI: false, FP16: false, XNNPACK: false")
            
            // Load mel spectrogram model
            Log.d(TAG, "🔧 STEP 1: Loading mel spectrogram model...")
            val melModelBuffer = try {
                val buffer = loadModelBufferFromAssets("models/melspectrogram.tflite")
                Log.d(TAG, "✅ Custom model loading succeeded")
                buffer
            } catch (e: Exception) {
                Log.w(TAG, "⚠️ Custom model loading failed, trying FileUtil: ${e.message}")
                val buffer = FileUtil.loadMappedFile(context, "models/melspectrogram.tflite")
                Log.d(TAG, "✅ FileUtil model loading succeeded")
                buffer
            }
            Log.d(TAG, "📊 Mel model buffer size: ${melModelBuffer.capacity()} bytes")
            Log.d(TAG, "📊 Buffer type: ${melModelBuffer.javaClass.simpleName}")
            Log.d(TAG, "📊 Buffer isDirect: ${melModelBuffer.isDirect}")
            Log.d(TAG, "📊 Buffer isReadOnly: ${melModelBuffer.isReadOnly}")
            
            try {
                Log.d(TAG, "🔧 STEP 2: Creating mel spectrogram interpreter with conservative options...")
                Log.d(TAG, "📋 Options summary: threads=1, NNAPI=false, FP16=false, XNNPACK=false")
                
                // Create interpreter - this is where the error typically occurs
                Log.d(TAG, "🏗️ Calling Interpreter constructor...")
                melInterpreter = Interpreter(melModelBuffer, options)
                Log.d(TAG, "✅ STEP 2 COMPLETE: Mel spectrogram interpreter created successfully!")
                
                // Try to get model info before allocation
                Log.d(TAG, "Getting model input/output information...")
                val inputCount = melInterpreter?.inputTensorCount ?: 0
                val outputCount = melInterpreter?.outputTensorCount ?: 0
                Log.d(TAG, "Mel model - Inputs: $inputCount, Outputs: $outputCount")
                
                if (inputCount > 0) {
                    val inputTensor = melInterpreter?.getInputTensor(0)
                    val inputShape = inputTensor?.shape()
                    Log.d(TAG, "Input tensor 0 - shape: ${inputShape?.contentToString()}, dtype: ${inputTensor?.dataType()}")
                }
                
                // Try manual tensor allocation without resize
                Log.d(TAG, "Attempting to allocate tensors without resize...")
                try {
                    melInterpreter?.allocateTensors()
                    Log.d(TAG, "✅ Mel model tensors allocated successfully")
                } catch (allocError: Exception) {
                    Log.e(TAG, "❌ Tensor allocation failed: ${allocError.message}")
                    Log.e(TAG, "Stack trace for allocation error:", allocError)
                    throw allocError
                }
                
                // Log detailed model information after successful allocation
                Log.d(TAG, "Logging detailed model information...")
                for (i in 0 until inputCount) {
                    val tensor = melInterpreter?.getInputTensor(i)
                    Log.d(TAG, "Mel input $i: shape=${tensor?.shape()?.contentToString()}, dtype=${tensor?.dataType()}")
                }
                
                for (i in 0 until outputCount) {
                    val tensor = melInterpreter?.getOutputTensor(i)
                    Log.d(TAG, "Mel output $i: shape=${tensor?.shape()?.contentToString()}, dtype=${tensor?.dataType()}")
                }
                
                Log.d(TAG, "✅ Mel spectrogram model fully initialized")
            } catch (e: Exception) {
                Log.e(TAG, "❌ Failed to initialize mel interpreter")
                Log.e(TAG, "Error type: ${e.javaClass.simpleName}")
                Log.e(TAG, "Error message: ${e.message}")
                Log.e(TAG, "Detailed stack trace:", e)
                
                // Try to provide more context about the failure
                if (e.message?.contains("delegate") == true) {
                    Log.e(TAG, "This appears to be a delegate-related error despite our configuration")
                }
                if (e.message?.contains("BytesRequired") == true) {
                    Log.e(TAG, "This is the BytesRequired overflow error - model may be incompatible")
                }
                
                // Try a fallback approach with even more conservative settings
                Log.w(TAG, "Attempting fallback initialization with minimal options...")
                try {
                    val fallbackOptions = Interpreter.Options()
                    // Absolutely minimal configuration
                    fallbackOptions.setNumThreads(1)
                    
                    melInterpreter = Interpreter(melModelBuffer, fallbackOptions)
                    Log.i(TAG, "✅ Fallback mel interpreter created successfully!")
                } catch (fallbackError: Exception) {
                    Log.e(TAG, "❌ Fallback approach also failed: ${fallbackError.message}")
                    throw e // Throw original error
                }
            }
            
            // Load embedding model
            val embeddingModelBuffer = try {
                loadModelBufferFromAssets("models/embedding_model.tflite")
            } catch (e: Exception) {
                Log.w(TAG, "Failed to load embedding model as MappedByteBuffer, trying FileUtil: ${e.message}")
                FileUtil.loadMappedFile(context, "models/embedding_model.tflite")
            }
            Log.d(TAG, "Embedding model buffer size: ${embeddingModelBuffer.capacity()} bytes")
            
            try {
                embeddingInterpreter = Interpreter(embeddingModelBuffer, options)
                Log.d(TAG, "Embedding model loaded")
                
                // Pre-allocate tensors
                try {
                    embeddingInterpreter?.allocateTensors()
                    Log.d(TAG, "Embedding model tensors allocated")
                } catch (allocError: Exception) {
                    Log.w(TAG, "Could not allocate embedding tensors: ${allocError.message}")
                }
                
                // Log embedding model details
                val embInputCount = embeddingInterpreter?.inputTensorCount ?: 0
                val embOutputCount = embeddingInterpreter?.outputTensorCount ?: 0
                Log.d(TAG, "Embedding model - Inputs: $embInputCount, Outputs: $embOutputCount")
            } catch (e: Exception) {
                Log.e(TAG, "Failed to initialize embedding interpreter: ${e.message}")
                throw e
            }
            
            Log.d(TAG, "Base models loaded successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Failed to load base models: ${e.message}", e)
            throw e
        }
    }
    
    private fun loadWakeWordModel(modelName: String) {
        try {
            // Clean up existing wake word interpreter
            wakeWordInterpreter?.close()
            
            // Create interpreter options - same conservative settings as base models
            val options = Interpreter.Options()
            options.setNumThreads(1) // Use single thread for stability
            options.setUseNNAPI(false)
            options.setAllowFp16PrecisionForFp32(false)
            options.setAllowBufferHandleOutput(false)
            options.setUseXNNPACK(false) // Disable XNNPACK delegate
            Log.d(TAG, "Wake word interpreter options configured conservatively")
            
            // Load the specific wake word model
            val modelFileName = "${modelName}_v0.1.tflite"
            val modelBuffer = try {
                loadModelBufferFromAssets("models/$modelFileName")
            } catch (e: Exception) {
                Log.w(TAG, "Failed to load wake word model as MappedByteBuffer, trying FileUtil: ${e.message}")
                FileUtil.loadMappedFile(context, "models/$modelFileName")
            }
            Log.d(TAG, "Wake word model buffer size: ${modelBuffer.capacity()} bytes")
            
            try {
                wakeWordInterpreter = Interpreter(modelBuffer, options)
                Log.d(TAG, "Wake word interpreter created")
                
                // Pre-allocate tensors
                try {
                    wakeWordInterpreter?.allocateTensors()
                    Log.d(TAG, "Wake word model tensors allocated")
                } catch (allocError: Exception) {
                    Log.w(TAG, "Could not allocate wake word tensors: ${allocError.message}")
                }
                
                currentModel = modelName
                Log.d(TAG, "Wake word model '$modelName' loaded successfully")
            } catch (e: Exception) {
                Log.e(TAG, "Failed to initialize wake word interpreter: ${e.message}")
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
            // Prepare input and output buffers
            val inputBuffer = Array(1) { audioData }
            val outputShape = melInterpreter?.getOutputTensor(0)?.shape() ?: intArrayOf(1, MEL_SPEC_SIZE, 80)
            val outputBuffer = Array(1) { Array(outputShape[1]) { FloatArray(outputShape[2]) } }
            
            // Run inference
            melInterpreter?.run(inputBuffer, outputBuffer)
            
            // Flatten the output
            val melSpec = FloatArray(outputShape[1] * outputShape[2])
            var idx = 0
            for (i in 0 until outputShape[1]) {
                for (j in 0 until outputShape[2]) {
                    melSpec[idx++] = outputBuffer[0][i][j]
                }
            }
            
            melSpec
        } catch (e: Exception) {
            Log.e(TAG, "Error extracting mel spectrogram: ${e.message}", e)
            FloatArray(MEL_SPEC_SIZE * 80) // Return empty array with expected size
        }
    }
    
    private fun generateEmbedding(melSpectrogram: FloatArray): FloatArray {
        return try {
            // Prepare input and output buffers
            val inputBuffer = Array(1) { melSpectrogram }
            val outputBuffer = Array(1) { FloatArray(EMBEDDING_SIZE) }
            
            // Run inference
            embeddingInterpreter?.run(inputBuffer, outputBuffer)
            
            outputBuffer[0]
        } catch (e: Exception) {
            Log.e(TAG, "Error generating embedding: ${e.message}", e)
            FloatArray(EMBEDDING_SIZE) // Return empty array with expected size
        }
    }
    
    private fun classifyWakeWord(embedding: FloatArray): Float {
        return try {
            // Prepare input and output buffers
            val inputBuffer = Array(1) { embedding }
            val outputBuffer = Array(1) { FloatArray(1) }
            
            // Run inference
            wakeWordInterpreter?.run(inputBuffer, outputBuffer)
            
            val rawScore = outputBuffer[0][0]
            
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
    
    private fun loadModelBufferFromAssets(fileName: String): MappedByteBuffer {
        return try {
            // Copy asset to internal storage first
            val modelFile = File(context.filesDir, fileName.replace("/", "_"))
            
            if (!modelFile.exists() || modelFile.length() == 0L) {
                Log.d(TAG, "Copying model from assets to internal storage: $fileName")
                val assetManager: AssetManager = context.assets
                val inputStream: InputStream = assetManager.open(fileName)
                val outputStream = FileOutputStream(modelFile)
                
                inputStream.use { input ->
                    outputStream.use { output ->
                        input.copyTo(output)
                    }
                }
                Log.d(TAG, "Model copied successfully: ${modelFile.length()} bytes")
            } else {
                Log.d(TAG, "Using cached model: $fileName (${modelFile.length()} bytes)")
            }
            
            // Memory-map the file
            val fileInputStream = java.io.FileInputStream(modelFile)
            val fileChannel = fileInputStream.channel
            val mappedBuffer = fileChannel.map(
                FileChannel.MapMode.READ_ONLY,
                0,
                fileChannel.size()
            )
            
            fileChannel.close()
            fileInputStream.close()
            
            Log.d(TAG, "Model mapped successfully: $fileName")
            mappedBuffer
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
            
            wakeWordInterpreter?.close()
            melInterpreter?.close()
            embeddingInterpreter?.close()
            
            wakeWordInterpreter = null
            melInterpreter = null
            embeddingInterpreter = null
            
            audioBuffer.clear()
            isInitialized = false
            
            Log.d(TAG, "OpenWakeWord engine cleaned up")
        } catch (e: Exception) {
            Log.e(TAG, "Error during cleanup: ${e.message}", e)
        }
    }
    
    fun isReady(): Boolean {
        return isInitialized && wakeWordInterpreter != null && melInterpreter != null && embeddingInterpreter != null
    }
}