package com.anonymous.MobileJarvisNative.voice

import android.content.Context
import android.media.AudioAttributes
import android.media.MediaPlayer
import android.util.Log
import com.anonymous.MobileJarvisNative.ConfigManager
import com.anonymous.MobileJarvisNative.utils.AudioManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.withContext
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.util.UUID
import java.util.concurrent.TimeUnit

/**
 * Client for Deepgram API for text-to-speech conversion
 * Now uses centralized AudioManager for audio focus management
 */
class DeepgramClient(private val context: Context) {
    private val TAG = "DeepgramClient"
    private var isInitialized = false
    private lateinit var okHttpClient: OkHttpClient
    private lateinit var configManager: ConfigManager
    private var mediaPlayer: MediaPlayer? = null
    private var centralAudioManager: com.anonymous.MobileJarvisNative.utils.AudioManager? = null
    private var currentRequestId: String? = null
    
    companion object {
        // Available Deepgram Aura-2 models based on latest 2024 docs
        val AVAILABLE_VOICES = mapOf(
            // Aura-2 voices (current generation)
            "aura-2-arcas-en" to "aura-2-arcas-en",
            "aura-2-iris-en" to "aura-2-iris-en", 
            "aura-2-mars-en" to "aura-2-mars-en",
            "aura-2-orpheus-en" to "aura-2-orpheus-en",
            "aura-2-athena-en" to "aura-2-athena-en",
            "aura-2-cordelia-en" to "aura-2-cordelia-en",
            "aura-2-draco-en" to "aura-2-draco-en",
            "aura-2-hermes-en" to "aura-2-hermes-en",
            "aura-2-hyperion-en" to "aura-2-hyperion-en",
            "aura-2-theia-en" to "aura-2-theia-en",
            "aura-2-thalia-en" to "aura-2-thalia-en",
            "aura-2-andromeda-en" to "aura-2-andromeda-en",
            "aura-2-helena-en" to "aura-2-helena-en",
            "aura-2-apollo-en" to "aura-2-apollo-en",
            "aura-2-aries-en" to "aura-2-aries-en",
            "aura-2-asteria-en" to "aura-2-asteria-en",
            "aura-2-atlas-en" to "aura-2-atlas-en",
            "aura-2-aurora-en" to "aura-2-aurora-en",
            "aura-2-callista-en" to "aura-2-callista-en",
            "aura-2-cora-en" to "aura-2-cora-en",
            "aura-2-delia-en" to "aura-2-delia-en",
            "aura-2-electra-en" to "aura-2-electra-en",
            "aura-2-harmonia-en" to "aura-2-harmonia-en",
            "aura-2-hera-en" to "aura-2-hera-en",
            "aura-2-janus-en" to "aura-2-janus-en",
            "aura-2-juno-en" to "aura-2-juno-en",
            "aura-2-jupiter-en" to "aura-2-jupiter-en",
            "aura-2-luna-en" to "aura-2-luna-en",
            "aura-2-minerva-en" to "aura-2-minerva-en",
            "aura-2-neptune-en" to "aura-2-neptune-en",
            "aura-2-odysseus-en" to "aura-2-odysseus-en",
            "aura-2-ophelia-en" to "aura-2-ophelia-en",
            "aura-2-orion-en" to "aura-2-orion-en",
            "aura-2-pandora-en" to "aura-2-pandora-en",
            "aura-2-phoebe-en" to "aura-2-phoebe-en",
            "aura-2-pluto-en" to "aura-2-pluto-en",
            "aura-2-saturn-en" to "aura-2-saturn-en",
            "aura-2-selene-en" to "aura-2-selene-en",
            "aura-2-vesta-en" to "aura-2-vesta-en",
            "aura-2-zeus-en" to "aura-2-zeus-en",
            "aura-2-amalthea-en" to "aura-2-amalthea-en",
            // Legacy Aura-1 voices for compatibility
            "aura-athena-en" to "aura-athena-en",
            "aura-helios-en" to "aura-helios-en",
            "aura-arcas-en" to "aura-arcas-en",
            "aura-asteria-en" to "aura-asteria-en",
            "aura-luna-en" to "aura-luna-en",
            "aura-stella-en" to "aura-stella-en",
            "aura-hera-en" to "aura-hera-en",
            "aura-orion-en" to "aura-orion-en",
            "aura-perseus-en" to "aura-perseus-en",
            "aura-angus-en" to "aura-angus-en",
            "aura-orpheus-en" to "aura-orpheus-en",
            "aura-zeus-en" to "aura-zeus-en",
            // Short name mappings for backward compatibility
            "arcas" to "aura-2-arcas-en",
            "iris" to "aura-2-iris-en", 
            "mars" to "aura-2-mars-en",
            "orpheus" to "aura-2-orpheus-en",
            "athena" to "aura-2-athena-en",
            "cordelia" to "aura-2-cordelia-en",
            "draco" to "aura-2-draco-en",
            "hermes" to "aura-2-hermes-en",
            "hyperion" to "aura-2-hyperion-en",
            "theia" to "aura-2-theia-en",
            "athena-legacy" to "aura-athena-en",
            "helios" to "aura-helios-en"
        )
        
        const val DEFAULT_VOICE = "aura-2-thalia-en"
        const val DEFAULT_MODEL = "aura-2-thalia-en"
    }
    
    /**
     * Initialize the Deepgram client
     */
    fun initialize() {
        try {
            Log.d(TAG, "Initializing Deepgram client")
            
            // Initialize OkHttp client with longer timeouts for audio processing
            okHttpClient = OkHttpClient.Builder()
                .connectTimeout(15, TimeUnit.SECONDS)
                .writeTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                .build()
            
            // Get config manager for API keys
            configManager = ConfigManager.getInstance()
            
            // Initialize media player
            mediaPlayer = MediaPlayer()
            
            // Initialize centralized AudioManager
            centralAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            
            isInitialized = true
            Log.i(TAG, "Deepgram client initialized successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing Deepgram client: ${e.message}", e)
            throw e
        }
    }
    
    /**
     * Request audio focus through centralized manager
     */
    private fun requestAudioFocus(): Boolean {
        return try {
            val requestId = "deepgram_${UUID.randomUUID()}"
            currentRequestId = requestId
            
            val success = centralAudioManager?.requestAudioFocus(
                requestType = AudioManager.AudioRequestType.TTS,
                requestId = requestId,
                onFocusGained = {
                    Log.d(TAG, "🎵 Deepgram audio focus gained")
                },
                onFocusLost = {
                    Log.d(TAG, "🎵 Deepgram audio focus lost - stopping playback")
                    stopPlayback()
                },
                onFocusDucked = {
                    Log.d(TAG, "🎵 Deepgram audio focus ducked - continuing at lower volume")
                }
            ) ?: false
            
            Log.d(TAG, "🎵 Deepgram audio focus request result: $success")
            success
        } catch (e: Exception) {
            Log.e(TAG, "Error requesting audio focus", e)
            false
        }
    }
    
    /**
     * Release audio focus through centralized manager
     */
    private fun releaseAudioFocus() {
        try {
            currentRequestId?.let { requestId ->
                centralAudioManager?.releaseAudioFocus(requestId)
                Log.d(TAG, "🎵 Deepgram audio focus released")
            }
            currentRequestId = null
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing audio focus", e)
        }
    }
    
    /**
     * Stop media player playback
     */
    private fun stopPlayback() {
        try {
            mediaPlayer?.apply {
                if (isPlaying) {
                    stop()
                    Log.d(TAG, "Deepgram playback stopped")
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error stopping Deepgram playback", e)
        }
    }
    
    /**
     * Convert text to speech and play the audio
     */
    suspend fun convertTextToSpeech(text: String) = withContext(Dispatchers.IO) {
        if (!isInitialized) {
            Log.e(TAG, "Deepgram client not initialized")
            throw IllegalStateException("Deepgram client not initialized")
        }
        
        Log.d(TAG, "Converting text to speech: '$text'")
        
        try {
            // Request audio focus before starting
            val audioFocusGranted = requestAudioFocus()
            if (!audioFocusGranted) {
                Log.w(TAG, "🎵 Audio focus not granted - proceeding anyway")
            }
            
            // Get Deepgram API key from config
            val apiKey = configManager.getDeepgramApiKey()
            if (apiKey.isBlank()) {
                Log.e(TAG, "Deepgram API key not found in config")
                releaseAudioFocus()
                throw IllegalStateException("Deepgram API key not found")
            }
            
            // Get selected voice from preferences
            val prefs = context.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val selectedVoice = prefs.getString("selected_voice", DEFAULT_VOICE) ?: DEFAULT_VOICE
            val voiceModel = AVAILABLE_VOICES[selectedVoice] ?: DEFAULT_MODEL
            
            // Create request JSON using the latest API format
            val requestJson = JSONObject().apply {
                put("text", text)
            }
            
            // Create request with model as query parameter (latest API format)
            val url = "https://api.deepgram.com/v1/speak?model=$voiceModel"
            
            val request = Request.Builder()
                .url(url)
                .header("Authorization", "Token $apiKey")
                .header("Content-Type", "application/json")
                .post(requestJson.toString().toRequestBody("application/json".toMediaTypeOrNull()))
                .build()
            
            Log.d(TAG, "Sending TTS request to Deepgram with model: $voiceModel")
            
            // Execute request
            val response = okHttpClient.newCall(request).execute()
            if (!response.isSuccessful) {
                val errorBody = response.body?.string() ?: "Unknown error"
                val errorCode = response.code
                Log.e(TAG, "Error from Deepgram API: $errorCode, body: $errorBody")
                
                // Parse error details if available
                try {
                    val errorJson = JSONObject(errorBody)
                    val errorMessage = errorJson.optString("error", "Unknown error")
                    val errorDetails = errorJson.optString("message", "")
                    Log.e(TAG, "Deepgram error details: $errorMessage - $errorDetails")
                } catch (e: Exception) {
                    Log.e(TAG, "Could not parse error response: ${e.message}")
                }
                
                releaseAudioFocus()
                throw IOException("Deepgram API error: $errorCode")
            }
            
            // Save audio to temporary file
            val audioBytes = response.body?.bytes() ?: throw IOException("Empty response from Deepgram")
            val tempFile = File(context.cacheDir, "tts_${UUID.randomUUID()}.mp3")
            
            FileOutputStream(tempFile).use { fos ->
                fos.write(audioBytes)
                fos.flush()
            }
            
            Log.d(TAG, "TTS audio saved to: ${tempFile.absolutePath}")
            
            // Play the audio
            withContext(Dispatchers.Main) {
                try {
                    // Reset media player if it's already playing
                    mediaPlayer?.apply {
                        reset()
                        setAudioAttributes(
                            AudioAttributes.Builder()
                                .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                                .setUsage(AudioAttributes.USAGE_ASSISTANT)
                                .build()
                        )
                        setDataSource(tempFile.absolutePath)
                        setOnPreparedListener { it.start() }
                        setOnCompletionListener {
                            // Delete the temp file after playback and release audio focus
                            tempFile.delete()
                            releaseAudioFocus()
                            Log.d(TAG, "TTS audio playback completed and file deleted")
                        }
                        setOnErrorListener { _, what, extra ->
                            Log.e(TAG, "MediaPlayer error: what=$what, extra=$extra")
                            tempFile.delete()
                            releaseAudioFocus()
                            true
                        }
                        prepareAsync()
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error playing TTS audio: ${e.message}", e)
                    tempFile.delete()
                    releaseAudioFocus()
                    throw e
                }
            }
            
            Log.i(TAG, "TTS request successful and playback started")
        } catch (e: Exception) {
            Log.e(TAG, "Error in TTS process: ${e.message}", e)
            releaseAudioFocus()
            throw e
        }
    }
    
    /**
     * Convert text to speech and return audio data without playing
     */
    suspend fun convertTextToSpeechData(text: String, voice: String? = null): ByteArray = withContext(Dispatchers.IO) {
        if (!isInitialized) {
            Log.e(TAG, "Deepgram client not initialized")
            throw IllegalStateException("Deepgram client not initialized")
        }
        
        Log.d(TAG, "Converting text to speech data: '$text' with voice: $voice")
        
        try {
            // Get Deepgram API key from config
            val apiKey = configManager.getDeepgramApiKey()
            if (apiKey.isBlank()) {
                Log.e(TAG, "Deepgram API key not found in config")
                throw IllegalStateException("Deepgram API key not found")
            }
            
            // Use provided voice or get from preferences
            val selectedVoice = voice ?: run {
                val prefs = context.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
                prefs.getString("selected_voice", DEFAULT_VOICE) ?: DEFAULT_VOICE
            }
            val voiceModel = AVAILABLE_VOICES[selectedVoice] ?: DEFAULT_MODEL
            
            // Create request JSON
            val requestJson = JSONObject().apply {
                put("text", text)
            }
            
            // Create request with model as query parameter
            val url = "https://api.deepgram.com/v1/speak?model=$voiceModel"
            
            val request = Request.Builder()
                .url(url)
                .header("Authorization", "Token $apiKey")
                .header("Content-Type", "application/json")
                .post(requestJson.toString().toRequestBody("application/json".toMediaTypeOrNull()))
                .build()
            
            Log.d(TAG, "Sending TTS data request to Deepgram with model: $voiceModel")
            
            // Execute request
            val response = okHttpClient.newCall(request).execute()
            if (!response.isSuccessful) {
                val errorBody = response.body?.string() ?: "Unknown error"
                Log.e(TAG, "Error from Deepgram API: ${response.code}, body: $errorBody")
                throw IOException("Deepgram API error: ${response.code}")
            }
            
            // Return audio bytes
            return@withContext response.body?.bytes() ?: throw IOException("Empty response from Deepgram")
        } catch (e: Exception) {
            Log.e(TAG, "Error in TTS data process: ${e.message}", e)
            throw e
        }
    }
    
    /**
     * Release resources
     */
    fun release() {
        try {
            stopPlayback()
            mediaPlayer?.release()
            mediaPlayer = null
            releaseAudioFocus()
            isInitialized = false
            Log.d(TAG, "Deepgram client resources released")
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing Deepgram client resources", e)
        }
    }
} 