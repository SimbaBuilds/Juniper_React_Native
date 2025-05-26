package com.anonymous.MobileJarvisNative.voice

import android.content.Context
import android.util.Log
import com.anonymous.MobileJarvisNative.utils.TextToSpeechManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject
import java.io.File
import com.anonymous.MobileJarvisNative.voice.DeepgramClient
import android.speech.tts.TextToSpeech
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.anonymous.MobileJarvisNative.utils.Constants
import android.os.Handler
import android.os.Looper

/**
 * Interface for voice processing strategy
 * Used to create strategies for different voice processing backends
 */
interface VoiceProcessor {
    /**
     * Initialize the voice processor
     */
    fun initialize()
    
    /**
     * Start voice processing
     * 
     * @return True if successfully started, false otherwise
     */
    fun start(): Boolean
    
    /**
     * Process recognized speech
     * 
     * @param text Recognized text to process
     * @param onResult Callback for when result is ready
     */
    fun processText(text: String, onResult: (String) -> Unit)
    
    /**
     * Process audio data directly (for fallback STT)
     * 
     * @param audioData Raw audio data to process
     * @param onResult Callback for when result is ready
     */
    fun processAudio(audioData: ByteArray, onResult: (String) -> Unit)
    
    /**
     * Speak a response using text-to-speech
     * 
     * @param text Text to speak
     * @param onComplete Callback for when speech is complete
     */
    fun speak(text: String, onComplete: () -> Unit)
    
    /**
     * Stop any ongoing processing or speech
     */
    fun stop()
    
    /**
     * Interrupt any ongoing speech
     * 
     * @return True if speech was interrupted, false otherwise
     */
    fun interrupt(): Boolean
    
    /**
     * Check if currently speaking
     * 
     * @return True if currently speaking, false otherwise
     */
    fun isSpeaking(): Boolean
    
    /**
     * Shutdown and clean up resources
     */
    fun shutdown()

    /**
     * Called when no speech is detected after the wake word
     */
    fun onNoSpeechDetected()
    
    /**
     * Set API processing callback
     */
    fun setApiCallback(callback: (text: String, onResult: (String) -> Unit) -> Unit)
}

/**
 * Modular implementation of VoiceProcessor
 * Uses callback to VoiceModule for API calls with proper authentication
 */
class ModularVoiceProcessor(private val context: Context) : VoiceProcessor {
    private val TAG = "ModularVoiceProcessor"
    
    private var isActive = false
    private var isSpeaking = false
    private val cacheDir = File(context.cacheDir, "tts_cache")
    
    // Callback for API processing
    private var apiCallback: ((String, (String) -> Unit) -> Unit)? = null
    
    override fun setApiCallback(callback: (text: String, onResult: (String) -> Unit) -> Unit) {
        this.apiCallback = callback
        Log.d(TAG, "API callback set for React Native communication")
    }
    
    override fun initialize() {
        Log.i(TAG, "Initializing modular voice processor")
        try {
            // Initialize TextToSpeechManager with callback to ensure it's ready
            TextToSpeechManager.initialize(context) { isInitialized ->
                if (isInitialized) {
                    Log.i(TAG, "TextToSpeechManager initialized successfully")
                } else {
                    Log.e(TAG, "Failed to initialize TextToSpeechManager")
                }
            }
            cacheDir.mkdirs()
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing modular processor", e)
        }
    }
    
    override fun start(): Boolean {
        Log.i(TAG, "Starting modular voice processor")
        return try {
            isActive = true
            true
        } catch (e: Exception) {
            Log.e(TAG, "Error activating modular mode", e)
            false
        }
    }
    
    override fun processText(text: String, onResult: (String) -> Unit) {
        Log.i(TAG, "Processing text with React Native API: $text")
        try {
            // Call the API callback directly
            apiCallback?.invoke(text, onResult) ?: run {
                Log.e(TAG, "No API callback set")
                onResult("Error: API callback not configured")
            }
            
            Log.d(TAG, "Sent text processing request to React Native")
            
        } catch (e: Exception) {
            Log.e(TAG, "Error sending text to React Native", e)
            onResult("Error processing your request: ${e.message}")
        }
    }
    
    override fun processAudio(audioData: ByteArray, onResult: (String) -> Unit) {
        Log.i(TAG, "Processing audio with modular processor (${audioData.size} bytes)")
        try {
            // Use Whisper for speech recognition - launching in a coroutine
            CoroutineScope(Dispatchers.IO).launch {
                try {
                    // This would be replaced with actual Whisper API call
                    // Simplified example implementation
                    val recognizedText = "Example transcribed text from audio data"
                    
                    if (recognizedText.isNotEmpty()) {
                        Log.i(TAG, "Whisper STT result: \"$recognizedText\"")
                        
                        // Now process the recognized text with React Native
                        withContext(Dispatchers.Main) {
                            processText(recognizedText, onResult)
                        }
                    } else {
                        Log.w(TAG, "Empty result from Whisper STT")
                        withContext(Dispatchers.Main) {
                            onResult("I couldn't understand what you said. Please try again.")
                        }
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error in STT processing coroutine", e)
                    withContext(Dispatchers.Main) {
                        onResult("Error processing your speech: ${e.message}")
                    }
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error processing audio with modular processor", e)
            onResult("Error processing your speech: ${e.message}")
        }
    }
    
    override fun speak(text: String, onComplete: () -> Unit) {
        Log.i(TAG, "Speaking with System TTS: $text")
        try {
            // Use system TTS directly - simpler and more reliable
            isSpeaking = true
            TextToSpeechManager.speak(text) {
                isSpeaking = false
                onComplete()
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error speaking with System TTS", e)
            isSpeaking = false
            onComplete()
        }
    }
    
    override fun stop() {
        Log.i(TAG, "Stopping modular voice processor")
        try {
            // Stop TTS
            TextToSpeechManager.stop()
            isSpeaking = false
        } catch (e: Exception) {
            Log.e(TAG, "Error stopping modular processor", e)
        }
    }
    
    override fun interrupt(): Boolean {
        Log.i(TAG, "Interrupting modular voice processor")
        try {
            isActive = false
            isSpeaking = false
            TextToSpeechManager.interrupt()
            return true
        } catch (e: Exception) {
            Log.e(TAG, "Error interrupting modular processor", e)
            return false
        }
    }
    
    override fun isSpeaking(): Boolean {
        return isSpeaking || TextToSpeechManager.isSpeaking()
    }
    
    override fun shutdown() {
        Log.i(TAG, "Shutting down modular voice processor")
        try {
            isActive = false
            isSpeaking = false
            
            // Shutdown system TTS
            TextToSpeechManager.shutdown()
            
            // Clean up cache
            cleanupCache()
        } catch (e: Exception) {
            Log.e(TAG, "Error shutting down modular processor", e)
        }
    }
    
    /**
     * Cleans old cache files
     */
    private fun cleanupCache() {
        try {
            val files = cacheDir.listFiles() ?: return
            // Keep only the 20 most recent files
            if (files.size > 20) {
                files.sortBy { it.lastModified() }
                for (i in 0 until files.size - 20) {
                    files[i].delete()
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error cleaning cache", e)
        }
    }
    
    override fun onNoSpeechDetected() {
        Log.i(TAG, "No speech detected in Modular processor")
        // Get VoiceManager instance and delegate handling to it
        VoiceManager.getInstance().handleNoSpeechDetected()
    }
} 