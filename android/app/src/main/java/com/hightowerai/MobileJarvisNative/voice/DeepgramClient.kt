package com.hightowerai.MobileJarvisNative.voice

import android.content.Context
import android.media.AudioAttributes
import android.media.MediaPlayer
import android.net.ConnectivityManager
import android.net.NetworkCapabilities
import android.util.Log
import com.hightowerai.MobileJarvisNative.ConfigManager
import com.hightowerai.MobileJarvisNative.utils.AudioManager
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.GlobalScope
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.*
import okhttp3.MediaType.Companion.toMediaTypeOrNull
import okhttp3.RequestBody.Companion.toRequestBody
import okio.ByteString
import org.json.JSONObject
import java.io.File
import java.io.FileOutputStream
import java.io.IOException
import java.util.UUID
import java.util.concurrent.TimeUnit
import java.io.ByteArrayOutputStream
import java.util.concurrent.CountDownLatch
import java.util.concurrent.atomic.AtomicBoolean

/**
 * Client for Deepgram API for text-to-speech conversion
 * Now uses centralized AudioManager for audio focus management
 * Optimized with singleton pattern and caching for reduced latency
 */
class DeepgramClient private constructor(private val context: Context) {
    private val TAG = "DeepgramClient"
    private var isInitialized = false
    private lateinit var okHttpClient: OkHttpClient
    private lateinit var configManager: ConfigManager
    private var mediaPlayer: MediaPlayer? = null
    private var centralAudioManager: com.hightowerai.MobileJarvisNative.utils.AudioManager? = null
    private var currentRequestId: String? = null
    
    // WebSocket streaming support with real-time playback
    private var streamingWebSocket: WebSocket? = null
    private var streamingLatch: CountDownLatch? = null
    private var streamingAudioBuffer: ByteArrayOutputStream? = null
    private var isStreamingActive = AtomicBoolean(false)
    private var isPlaybackStarted = AtomicBoolean(false)
    private val audioChunks = mutableListOf<ByteArray>()
    private val minPlaybackThreshold = 8192 // 8KB minimum before starting playback
    
    // Validation caching for performance
    private var lastValidation: DeepgramValidationResult? = null
    private var lastValidationTime: Long = 0
    private val validationCacheTimeout = 5000L // 5 seconds
    
    // Enhanced logging data class
    data class TTSRequest(
        val requestId: String,
        val text: String,
        val voice: String,
        val startTime: Long,
        var apiCallTime: Long? = null,
        var audioReceivedTime: Long? = null,
        var playbackStartTime: Long? = null,
        var completionTime: Long? = null,
        var errorTime: Long? = null,
        var error: String? = null
    )
    
    private val activeRequests = mutableMapOf<String, TTSRequest>()
    
    companion object {
        @Volatile
        private var INSTANCE: DeepgramClient? = null
        
        /**
         * Get singleton instance of DeepgramClient
         * Prevents multiple initialization cycles and improves performance
         */
        fun getInstance(context: Context): DeepgramClient {
            return INSTANCE ?: synchronized(this) {
                INSTANCE ?: DeepgramClient(context).also { 
                    INSTANCE = it
                    Log.d("DeepgramClient", "🎵 SINGLETON: Created new Deepgram client instance")
                }
            }
        }
        
        /**
         * Release singleton instance (call only on app shutdown)
         */
        fun releaseSingleton() {
            synchronized(this) {
                INSTANCE?.release()
                INSTANCE = null
                Log.d("DeepgramClient", "🎵 SINGLETON: Released Deepgram client instance")
            }
        }
        
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
            Log.d(TAG, "🎵 DEEPGRAM_INIT: ========== Initializing Deepgram client ==========")
            val initStartTime = System.currentTimeMillis()
            
            // Initialize OkHttp client with longer timeouts for audio processing
            okHttpClient = OkHttpClient.Builder()
                .connectTimeout(15, TimeUnit.SECONDS)
                .writeTimeout(30, TimeUnit.SECONDS)
                .readTimeout(30, TimeUnit.SECONDS)
                .build()
            
            Log.d(TAG, "🎵 DEEPGRAM_INIT: OkHttp client configured")
            
            // Get config manager for API keys
            configManager = ConfigManager.getInstance()
            Log.d(TAG, "🎵 DEEPGRAM_INIT: ConfigManager obtained")
            
            // Initialize media player
            mediaPlayer = MediaPlayer()
            Log.d(TAG, "🎵 DEEPGRAM_INIT: MediaPlayer created")
            
            // Initialize centralized AudioManager
            centralAudioManager = com.hightowerai.MobileJarvisNative.utils.AudioManager.getInstance()
            Log.d(TAG, "🎵 DEEPGRAM_INIT: AudioManager obtained")
            
            val initEndTime = System.currentTimeMillis()
            isInitialized = true
            Log.i(TAG, "🎵 DEEPGRAM_INIT: ✅ Deepgram client initialized successfully in ${initEndTime - initStartTime}ms")
            Log.d(TAG, "🎵 DEEPGRAM_INIT: =============================================")
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_INIT: ❌ Error initializing Deepgram client: ${e.message}", e)
            throw e
        }
    }
    
    private fun logRequestStart(text: String, voice: String): String {
        val requestId = UUID.randomUUID().toString().take(8)
        val request = TTSRequest(
            requestId = requestId,
            text = text,
            voice = voice,
            startTime = System.currentTimeMillis()
        )
        activeRequests[requestId] = request
        
        Log.i(TAG, "🎵 DEEPGRAM_REQUEST: ========== NEW TTS REQUEST ==========")
        Log.i(TAG, "🎵 DEEPGRAM_REQUEST: Request ID: $requestId")
        Log.i(TAG, "🎵 DEEPGRAM_REQUEST: Text: '${text.take(50)}${if(text.length > 50) "..." else ""}'")
        Log.i(TAG, "🎵 DEEPGRAM_REQUEST: Voice: $voice")
        Log.i(TAG, "🎵 DEEPGRAM_REQUEST: Start time: ${request.startTime}")
        Log.d(TAG, "🎵 DEEPGRAM_REQUEST: ===============================")
        
        return requestId
    }
    
    private fun logRequestError(requestId: String, error: String, exception: Exception? = null) {
        val request = activeRequests[requestId]
        if (request != null) {
            request.errorTime = System.currentTimeMillis()
            request.error = error
            
            val totalTime = request.errorTime!! - request.startTime
            Log.e(TAG, "🎵 DEEPGRAM_ERROR: ========== REQUEST FAILED ==========")
            Log.e(TAG, "🎵 DEEPGRAM_ERROR: Request ID: $requestId")
            Log.e(TAG, "🎵 DEEPGRAM_ERROR: Error: $error")
            Log.e(TAG, "🎵 DEEPGRAM_ERROR: Total time: ${totalTime}ms")
            if (exception != null) {
                Log.e(TAG, "🎵 DEEPGRAM_ERROR: Exception: ${exception.message}", exception)
            }
            Log.e(TAG, "🎵 DEEPGRAM_ERROR: =============================")
            
            activeRequests.remove(requestId)
        }
    }
    
    private fun logRequestSuccess(requestId: String) {
        val request = activeRequests[requestId]
        if (request != null) {
            request.completionTime = System.currentTimeMillis()
            
            val totalTime = request.completionTime!! - request.startTime
            val apiTime = (request.apiCallTime ?: 0) - request.startTime
            val audioTime = (request.audioReceivedTime ?: 0) - request.startTime
            val playbackTime = (request.playbackStartTime ?: 0) - request.startTime
            
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: ========== REQUEST COMPLETED ==========")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: Request ID: $requestId")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: Total time: ${totalTime}ms")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: API call: ${apiTime}ms")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: Audio received: ${audioTime}ms")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: Playback started: ${playbackTime}ms")
            Log.i(TAG, "🎵 DEEPGRAM_SUCCESS: ==============================")
            
            activeRequests.remove(requestId)
        }
    }
    
    /**
     * Data class for Deepgram validation results
     */
    data class DeepgramValidationResult(
        val isValid: Boolean,
        val apiKeyPresent: Boolean,
        val apiKeyValid: Boolean,
        val networkAvailable: Boolean,
        val audioSystemReady: Boolean,
        val voiceConfigValid: Boolean,
        val issues: List<String>
    )
    
    /**
     * Validate Deepgram configuration and system readiness with caching
     */
    fun validateConfigurationCached(): DeepgramValidationResult {
        val now = System.currentTimeMillis()
        if (lastValidation != null && (now - lastValidationTime) < validationCacheTimeout) {
            Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: Using cached validation result (${now - lastValidationTime}ms old)")
            return lastValidation!!
        }
        
        val result = validateConfiguration()
        lastValidation = result
        lastValidationTime = now
        return result
    }

    /**
     * Validate Deepgram configuration and system readiness
     */
    fun validateConfiguration(): DeepgramValidationResult {
        Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ========== Starting Configuration Validation ==========")
        val validationStartTime = System.currentTimeMillis()
        
        val issues = mutableListOf<String>()
        var isValid = true
        
        // Check initialization
        if (!isInitialized) {
            val issue = "Deepgram client not initialized"
            issues.add(issue)
            isValid = false
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue")
        } else {
            Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ✅ Client initialized")
        }
        
        // Check API key
        val apiKeyPresent = try {
            val apiKey = configManager.getDeepgramApiKey()
            apiKey.isNotBlank()
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ Error accessing API key", e)
            issues.add("Error accessing API key: ${e.message}")
            isValid = false
            false
        }
        
        var apiKeyValid = false
        if (apiKeyPresent) {
            try {
                val apiKey = configManager.getDeepgramApiKey()
                apiKeyValid = apiKey.length >= 20 && apiKey.startsWith("Token ") == false // Basic validation
                Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ✅ API key present (length: ${apiKey.length})")
                
                if (!apiKeyValid) {
                    val issue = "API key format appears invalid"
                    issues.add(issue)
                    isValid = false
                    Log.w(TAG, "🎵 DEEPGRAM_VALIDATION: ⚠️ $issue")
                }
            } catch (e: Exception) {
                val issue = "Error validating API key format: ${e.message}"
                issues.add(issue)
                isValid = false
                Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue", e)
            }
        } else {
            val issue = "Deepgram API key not found or empty"
            issues.add(issue)
            isValid = false
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue")
        }
        
        // Check network availability (basic check)
        val networkAvailable = try {
            val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as android.net.ConnectivityManager
            val activeNetwork = connectivityManager.activeNetwork
            val networkInfo = connectivityManager.getNetworkCapabilities(activeNetwork)
            val hasInternet = networkInfo?.hasCapability(android.net.NetworkCapabilities.NET_CAPABILITY_INTERNET) == true
            
            if (hasInternet) {
                Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ✅ Network connectivity available")
            } else {
                val issue = "No internet connectivity"
                issues.add(issue)
                isValid = false
                Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue")
            }
            hasInternet
        } catch (e: Exception) {
            val issue = "Error checking network connectivity: ${e.message}"
            issues.add(issue)
            isValid = false
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue", e)
            false
        }
        
        // Check audio system readiness
        val audioSystemReady = try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            val hasAudioFocus = centralAudioManager != null
            
            if (hasAudioFocus) {
                Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ✅ Audio system ready")
            } else {
                val issue = "Audio manager not available"
                issues.add(issue)
                Log.w(TAG, "🎵 DEEPGRAM_VALIDATION: ⚠️ $issue")
            }
            hasAudioFocus
        } catch (e: Exception) {
            val issue = "Error checking audio system: ${e.message}"
            issues.add(issue)
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue", e)
            false
        }
        
        // Check voice configuration
        val voiceConfigValid = try {
            val prefs = context.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val selectedVoice = prefs.getString("selected_voice", DEFAULT_VOICE) ?: DEFAULT_VOICE
            val voiceModel = AVAILABLE_VOICES[selectedVoice]
            
            if (voiceModel != null) {
                Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ✅ Voice configuration valid ($selectedVoice -> $voiceModel)")
                true
            } else {
                val issue = "Selected voice '$selectedVoice' not found in available voices"
                issues.add(issue)
                Log.w(TAG, "🎵 DEEPGRAM_VALIDATION: ⚠️ $issue")
                false
            }
        } catch (e: Exception) {
            val issue = "Error checking voice configuration: ${e.message}"
            issues.add(issue)
            Log.e(TAG, "🎵 DEEPGRAM_VALIDATION: ❌ $issue", e)
            false
        }
        
        val validationEndTime = System.currentTimeMillis()
        val validationTime = validationEndTime - validationStartTime
        
        val result = DeepgramValidationResult(
            isValid = isValid,
            apiKeyPresent = apiKeyPresent,
            apiKeyValid = apiKeyValid,
            networkAvailable = networkAvailable,
            audioSystemReady = audioSystemReady,
            voiceConfigValid = voiceConfigValid,
            issues = issues
        )
        
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: ========== Validation Complete ==========")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Overall valid: $isValid")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: API key present: $apiKeyPresent")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: API key valid: $apiKeyValid")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Network available: $networkAvailable")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Audio system ready: $audioSystemReady")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Voice config valid: $voiceConfigValid")
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Issues: ${issues.size}")
        if (issues.isNotEmpty()) {
            issues.forEachIndexed { index, issue ->
                Log.i(TAG, "🎵 DEEPGRAM_VALIDATION:   ${index + 1}. $issue")
            }
        }
        Log.i(TAG, "🎵 DEEPGRAM_VALIDATION: Validation time: ${validationTime}ms")
        Log.d(TAG, "🎵 DEEPGRAM_VALIDATION: ================================")
        
        return result
    }
    
    /**
     * Test network connectivity specifically to Deepgram API
     */
    suspend fun testDeepgramConnectivity(): Boolean = withContext(Dispatchers.IO) {
        Log.d(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ========== Testing Deepgram API Connectivity ==========")
        val testStartTime = System.currentTimeMillis()
        
        try {
            // Check basic network connectivity first
            val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
            val activeNetwork = connectivityManager.activeNetwork
            val networkInfo = connectivityManager.getNetworkCapabilities(activeNetwork)
            val hasInternet = networkInfo?.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) == true
            
            if (!hasInternet) {
                Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ No internet connectivity")
                return@withContext false
            }
            
            Log.d(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ✅ Basic internet connectivity confirmed")
            
            // Test Deepgram API accessibility with a lightweight request
            val apiKey = configManager.getDeepgramApiKey()
            if (apiKey.isBlank()) {
                Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ No API key available for connectivity test")
                return@withContext false
            }
            
            // Create a minimal test request to check API accessibility
            val testUrl = "https://api.deepgram.com/v1/speak"
            val testRequest = Request.Builder()
                .url(testUrl)
                .header("Authorization", "Token $apiKey")
                .head() // Use HEAD request for lightweight test
                .build()
            
            Log.d(TAG, "🎵 DEEPGRAM_CONNECTIVITY: Testing API endpoint: $testUrl")
            
            val response = okHttpClient.newCall(testRequest).execute()
            val responseTime = System.currentTimeMillis() - testStartTime
            
            when {
                response.isSuccessful -> {
                    Log.i(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ✅ Deepgram API accessible (${response.code}) in ${responseTime}ms")
                    return@withContext true
                }
                response.code == 401 -> {
                    Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ API key authentication failed (401)")
                    return@withContext false
                }
                response.code in 400..499 -> {
                    Log.w(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ⚠️ API accessible but client error (${response.code}) - this is expected for HEAD request")
                    return@withContext true // API is accessible, client error is expected for HEAD request
                }
                response.code in 500..599 -> {
                    Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ Deepgram server error (${response.code})")
                    return@withContext false
                }
                else -> {
                    Log.w(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ⚠️ Unexpected response code: ${response.code}")
                    return@withContext false
                }
            }
        } catch (e: java.net.UnknownHostException) {
            Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ Cannot resolve Deepgram hostname", e)
            return@withContext false
        } catch (e: java.net.ConnectException) {
            Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ Cannot connect to Deepgram API", e)
            return@withContext false
        } catch (e: java.net.SocketTimeoutException) {
            Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ Connection timeout to Deepgram API", e)
            return@withContext false
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ❌ Unexpected error testing connectivity", e)
            return@withContext false
        } finally {
            val totalTime = System.currentTimeMillis() - testStartTime
            Log.d(TAG, "🎵 DEEPGRAM_CONNECTIVITY: Total connectivity test time: ${totalTime}ms")
            Log.d(TAG, "🎵 DEEPGRAM_CONNECTIVITY: ================================")
        }
    }
    
    /**
     * Enhanced connectivity test with detailed diagnostics
     */
    suspend fun runConnectivityDiagnostics(): Map<String, Any> = withContext(Dispatchers.IO) {
        Log.d(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: ========== Running Detailed Connectivity Diagnostics ==========")
        val diagnosticsStartTime = System.currentTimeMillis()
        
        val results = mutableMapOf<String, Any>()
        
        try {
            // Test 1: Basic network connectivity
            val connectivityManager = context.getSystemService(Context.CONNECTIVITY_SERVICE) as ConnectivityManager
            val activeNetwork = connectivityManager.activeNetwork
            val networkInfo = connectivityManager.getNetworkCapabilities(activeNetwork)
            val hasInternet = networkInfo?.hasCapability(NetworkCapabilities.NET_CAPABILITY_INTERNET) == true
            val hasWifi = networkInfo?.hasTransport(NetworkCapabilities.TRANSPORT_WIFI) == true
            val hasCellular = networkInfo?.hasTransport(NetworkCapabilities.TRANSPORT_CELLULAR) == true
            
            results["basic_connectivity"] = hasInternet
            results["wifi_available"] = hasWifi
            results["cellular_available"] = hasCellular
            
            Log.d(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: Basic connectivity: $hasInternet (WiFi: $hasWifi, Cellular: $hasCellular)")
            
            // Test 2: DNS resolution for Deepgram
            try {
                val deepgramHost = "api.deepgram.com"
                val addresses = java.net.InetAddress.getAllByName(deepgramHost)
                results["dns_resolution"] = true
                results["deepgram_ip_addresses"] = addresses.map { it.hostAddress }
                Log.d(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: DNS resolution successful: ${addresses.size} addresses")
            } catch (e: Exception) {
                results["dns_resolution"] = false
                results["dns_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: DNS resolution failed", e)
            }
            
            // Test 3: HTTPS connectivity to Deepgram
            val connectivityTestTime = System.currentTimeMillis()
            val isDeepgramAccessible = testDeepgramConnectivity()
            val connectivityTime = System.currentTimeMillis() - connectivityTestTime
            
            results["deepgram_api_accessible"] = isDeepgramAccessible
            results["connectivity_test_time_ms"] = connectivityTime
            
            // Test 4: API key validation
            try {
                val apiKey = configManager.getDeepgramApiKey()
                results["api_key_present"] = apiKey.isNotBlank()
                results["api_key_length"] = apiKey.length
                results["api_key_format_valid"] = apiKey.length >= 20
                Log.d(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: API key validation: present=${apiKey.isNotBlank()}, length=${apiKey.length}")
            } catch (e: Exception) {
                results["api_key_present"] = false
                results["api_key_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: API key validation failed", e)
            }
            
            val totalDiagnosticsTime = System.currentTimeMillis() - diagnosticsStartTime
            results["total_diagnostics_time_ms"] = totalDiagnosticsTime
            
            Log.i(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: ========== Diagnostics Complete ==========")
            Log.i(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: Results: $results")
            Log.i(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: Total time: ${totalDiagnosticsTime}ms")
            Log.d(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: ================================")
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_DIAGNOSTICS: ❌ Diagnostics failed", e)
            results["diagnostics_error"] = e.message ?: "Unknown error"
        }
        
        return@withContext results
    }
    
    /**
     * Test audio playback system functionality
     */
    suspend fun testAudioPlayback(): Boolean = withContext(Dispatchers.IO) {
        Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ========== Testing Audio Playback System ==========")
        val testStartTime = System.currentTimeMillis()
        
        try {
            // Test 1: Check if MediaPlayer can be created
            val testMediaPlayer = MediaPlayer()
            Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ MediaPlayer created successfully")
            
            // Test 2: Check audio attributes setting
            try {
                testMediaPlayer.setAudioAttributes(
                    AudioAttributes.Builder()
                        .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                        .setUsage(AudioAttributes.USAGE_MEDIA)
                        .build()
                )
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ Audio attributes set successfully")
            } catch (e: Exception) {
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ❌ Failed to set audio attributes", e)
                testMediaPlayer.release()
                return@withContext false
            }
            
            // Test 3: Check audio focus management
            val audioFocusGranted = requestAudioFocus()
            if (!audioFocusGranted) {
                Log.w(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ⚠️ Audio focus not granted")
                // Continue test anyway as this might be expected in some scenarios
            } else {
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ Audio focus granted")
                releaseAudioFocus()
            }
            
            // Test 4: Create a small test audio file to verify file handling
            try {
                val testAudioData = ByteArray(1024) { (it % 256).toByte() } // Simple test data
                val testFile = File(context.cacheDir, "audio_test_${System.currentTimeMillis()}.mp3")
                testFile.writeBytes(testAudioData)
                
                if (testFile.exists() && testFile.length() > 0) {
                    Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ Test audio file created (${testFile.length()} bytes)")
                    testFile.delete()
                } else {
                    Log.e(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ❌ Failed to create test audio file")
                    testMediaPlayer.release()
                    return@withContext false
                }
            } catch (e: Exception) {
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ❌ File handling test failed", e)
                testMediaPlayer.release()
                return@withContext false
            }
            
            // Test 5: Check audio system service
            try {
                val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
                val streamVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_MUSIC)
                val maxVolume = audioManager.getStreamMaxVolume(android.media.AudioManager.STREAM_MUSIC)
                
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ Audio system accessible (volume: $streamVolume/$maxVolume)")
                
                if (streamVolume == 0) {
                    Log.w(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ⚠️ Media volume is muted")
                }
            } catch (e: Exception) {
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ❌ Audio system check failed", e)
                testMediaPlayer.release()
                return@withContext false
            }
            
            // Clean up test MediaPlayer
            testMediaPlayer.release()
            
            val testEndTime = System.currentTimeMillis()
            val testDuration = testEndTime - testStartTime
            
            Log.i(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ✅ Audio playback system test passed in ${testDuration}ms")
            Log.d(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ================================")
            return@withContext true
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_AUDIO_TEST: ❌ Audio playback test failed", e)
            return@withContext false
        }
    }
    
    /**
     * Comprehensive audio system diagnostics
     */
    suspend fun runAudioDiagnostics(): Map<String, Any> = withContext(Dispatchers.IO) {
        Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ========== Running Audio System Diagnostics ==========")
        val diagStartTime = System.currentTimeMillis()
        
        val results = mutableMapOf<String, Any>()
        
        try {
            // Test 1: MediaPlayer availability
            try {
                val testPlayer = MediaPlayer()
                testPlayer.release()
                results["mediaplayer_available"] = true
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ✅ MediaPlayer available")
            } catch (e: Exception) {
                results["mediaplayer_available"] = false
                results["mediaplayer_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ MediaPlayer not available", e)
            }
            
            // Test 2: Audio system service
            try {
                val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
                val musicVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_MUSIC)
                val maxMusicVolume = audioManager.getStreamMaxVolume(android.media.AudioManager.STREAM_MUSIC)
                val voiceCallVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_VOICE_CALL)
                val maxVoiceCallVolume = audioManager.getStreamMaxVolume(android.media.AudioManager.STREAM_VOICE_CALL)
                
                results["audio_service_available"] = true
                results["music_volume"] = musicVolume
                results["max_music_volume"] = maxMusicVolume
                results["voice_call_volume"] = voiceCallVolume
                results["max_voice_call_volume"] = maxVoiceCallVolume
                results["music_volume_percentage"] = if (maxMusicVolume > 0) (musicVolume * 100) / maxMusicVolume else 0
                
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ✅ Audio system: Music vol ${musicVolume}/${maxMusicVolume}, Voice vol ${voiceCallVolume}/${maxVoiceCallVolume}")
            } catch (e: Exception) {
                results["audio_service_available"] = false
                results["audio_service_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ Audio service not available", e)
            }
            
            // Test 3: Audio focus management
            try {
                val focusGranted = requestAudioFocus()
                results["audio_focus_grantable"] = focusGranted
                if (focusGranted) {
                    releaseAudioFocus()
                    results["audio_focus_releasable"] = true
                    Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ✅ Audio focus management working")
                } else {
                    results["audio_focus_releasable"] = false
                    Log.w(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ⚠️ Audio focus not granted")
                }
            } catch (e: Exception) {
                results["audio_focus_grantable"] = false
                results["audio_focus_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ Audio focus management failed", e)
            }
            
            // Test 4: Audio attributes support
            try {
                val audioAttrs = AudioAttributes.Builder()
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .build()
                
                results["audio_attributes_supported"] = true
                results["content_type_speech_supported"] = true
                results["usage_assistant_supported"] = true
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ✅ Audio attributes supported")
            } catch (e: Exception) {
                results["audio_attributes_supported"] = false
                results["audio_attributes_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ Audio attributes not supported", e)
            }
            
            // Test 5: File system for temporary audio files
            try {
                val testFile = File(context.cacheDir, "audio_diag_test.tmp")
                val testData = "test audio data".toByteArray()
                testFile.writeBytes(testData)
                
                val readData = testFile.readBytes()
                val fileWorking = readData.contentEquals(testData)
                
                testFile.delete()
                
                results["temp_file_system_working"] = fileWorking
                results["cache_dir_writable"] = context.cacheDir.canWrite()
                results["cache_dir_path"] = context.cacheDir.absolutePath
                
                Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ✅ File system working (cache dir: ${context.cacheDir.absolutePath})")
            } catch (e: Exception) {
                results["temp_file_system_working"] = false
                results["file_system_error"] = e.message ?: "Unknown error"
                Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ File system test failed", e)
            }
            
            val diagEndTime = System.currentTimeMillis()
            val diagDuration = diagEndTime - diagStartTime
            results["total_diagnostics_time_ms"] = diagDuration
            
            Log.i(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ========== Audio Diagnostics Complete ==========")
            Log.i(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: Total time: ${diagDuration}ms")
            Log.i(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: Results: $results")
            Log.d(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ================================")
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_AUDIO_DIAG: ❌ Audio diagnostics failed", e)
            results["diagnostics_error"] = e.message ?: "Unknown error"
        }
        
        return@withContext results
    }
    
    /**
     * Request audio focus through centralized manager (simplified)
     */
    private fun requestAudioFocus(): Boolean {
        return try {
            // TROUBLESHOOTING STEP 2: Check for internal conflicts with speech recognition
            val currentRequest = centralAudioManager?.getCurrentRequestInfo()
            if (currentRequest?.requestType == com.hightowerai.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION) {
                Log.w(TAG, "🎵 INTERNAL_CONFLICT_CHECK: ⚠️ Deepgram TTS requesting audio focus while SPEECH_RECOGNITION is active!")
                Log.w(TAG, "🎵 INTERNAL_CONFLICT_CHECK: Current speech recognition request ID: ${currentRequest.requestId}")
                Log.w(TAG, "🎵 INTERNAL_CONFLICT_CHECK: Deepgram TTS will be queued behind higher priority SPEECH_RECOGNITION")
            }
            
            val requestId = "deepgram_${UUID.randomUUID()}"
            currentRequestId = requestId
            
            Log.d(TAG, "🎵 Deepgram: Requesting audio focus (ID: $requestId)")
            
            val success = centralAudioManager?.requestAudioFocus(
                requestType = AudioManager.AudioRequestType.TTS,
                requestId = requestId,
                onFocusGained = {
                    Log.d(TAG, "🎵 Deepgram audio focus gained")
                },
                onFocusLost = {
                    Log.w(TAG, "🎵 Deepgram audio focus lost - stopping playback")
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
     * Convert text to speech using WebSocket streaming and play the audio
     * This is the new preferred method for real-time TTS
     */
    suspend fun convertTextToSpeech(text: String, onComplete: (() -> Unit)? = null) = withContext(Dispatchers.IO) {
        // Use streaming WebSocket for better performance
        convertTextToSpeechStreaming(text, onComplete)
    }
    
    /**
     * Convert text to speech using Deepgram's WebSocket streaming API
     * This provides 3x faster speech generation compared to REST API
     */
    private suspend fun convertTextToSpeechStreaming(text: String, onComplete: (() -> Unit)? = null) = withContext(Dispatchers.IO) {
        // Use cached validation for better performance
        val validation = validateConfigurationCached()
        if (!validation.isValid) {
            val errorMessage = "Deepgram configuration invalid: ${validation.issues.joinToString("; ")}"
            Log.e(TAG, "🎵 DEEPGRAM_STREAMING: ❌ Pre-flight validation failed")
            throw IllegalStateException(errorMessage)
        }
        
        Log.d(TAG, "🎵 DEEPGRAM_STREAMING: ✅ Pre-flight validation passed")
        
        // Get selected voice from preferences for streaming
        val prefs = context.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
        val selectedVoice = prefs.getString("selected_voice", DEFAULT_VOICE) ?: DEFAULT_VOICE
        val voiceModel = AVAILABLE_VOICES[selectedVoice] ?: DEFAULT_MODEL
        
        // Start comprehensive logging for streaming
        val requestId = logRequestStart(text, voiceModel)
        
        try {
            // Optimized audio focus management with reduced delays
            var audioFocusGranted = false
            var retryCount = 0
            val maxRetries = 3
            
            while (!audioFocusGranted && retryCount < maxRetries) {
                retryCount++
                Log.d(TAG, "🎵 DEEPGRAM_STREAMING: Audio focus attempt $retryCount for request $requestId")
                
                if (retryCount > 1) {
                    // Reduced delays: 25ms, 50ms, 75ms instead of 100ms, 200ms, 300ms
                    delay((25 * retryCount).toLong())
                }
                
                audioFocusGranted = requestAudioFocus()
                
                if (audioFocusGranted) {
                    Log.d(TAG, "🎵 DEEPGRAM_STREAMING: ✅ Audio focus granted on attempt $retryCount for request $requestId")
                    break
                } else {
                    Log.w(TAG, "🎵 DEEPGRAM_STREAMING: ⚠️ Audio focus not granted on attempt $retryCount for request $requestId")
                }
            }
            
            if (!audioFocusGranted) {
                Log.w(TAG, "🎵 DEEPGRAM_STREAMING: ⚠️ Audio focus not granted after $maxRetries attempts for request $requestId - proceeding anyway")
            }
            
            // Get Deepgram API key
            val apiKey = configManager.getDeepgramApiKey()
            if (apiKey.isBlank()) {
                logRequestError(requestId, "Deepgram API key not found in config")
                releaseAudioFocus()
                throw IllegalStateException("Deepgram API key not found")
            }
            
            Log.d(TAG, "🎵 DEEPGRAM_STREAMING: API key found (length: ${apiKey.length}) for request $requestId")
            
            // Use WebSocket streaming for real-time TTS (3x faster than REST)
            val success = streamTextToSpeechWebSocket(text, voiceModel, apiKey, requestId, onComplete)
            
            if (success) {
                Log.i(TAG, "🎵 DEEPGRAM_STREAMING: ✅ WebSocket streaming TTS completed successfully")
                logRequestSuccess(requestId)
            } else {
                Log.e(TAG, "🎵 DEEPGRAM_STREAMING: ❌ WebSocket streaming TTS failed")
                logRequestError(requestId, "WebSocket streaming failed")
                releaseAudioFocus()
                throw IOException("WebSocket streaming TTS failed")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_STREAMING: ❌ Streaming TTS process failed for request $requestId", e)
            logRequestError(requestId, "Streaming TTS process error: ${e.message}", e)
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
            
            // Use simple text format for much faster processing (18x faster than JSON)
            val url = "https://api.deepgram.com/v1/speak?model=$voiceModel"
            
            val request = Request.Builder()
                .url(url)
                .header("Authorization", "Token $apiKey")
                .header("Content-Type", "text/plain")
                .post(text.toRequestBody("text/plain".toMediaTypeOrNull()))
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

    /**
     * WebSocket streaming TTS implementation using Deepgram 2025 API
     * Provides 3x faster speech generation and real-time audio streaming
     */
    private suspend fun streamTextToSpeechWebSocket(
        text: String,
        voiceModel: String,
        apiKey: String,
        requestId: String,
        onComplete: (() -> Unit)?
    ): Boolean = withContext(Dispatchers.IO) {
        Log.d(TAG, "🎵 WEBSOCKET_TTS: ========== Starting WebSocket TTS Stream ==========")
        Log.d(TAG, "🎵 WEBSOCKET_TTS: Request ID: $requestId")
        Log.d(TAG, "🎵 WEBSOCKET_TTS: Voice Model: $voiceModel")
        Log.d(TAG, "🎵 WEBSOCKET_TTS: Text length: ${text.length}")

        try {
            // Initialize streaming state for real-time playback
            isStreamingActive.set(true)
            isPlaybackStarted.set(false)
            streamingAudioBuffer = ByteArrayOutputStream()
            audioChunks.clear()
            streamingLatch = CountDownLatch(1)

            // Optimized WebSocket URL for faster processing
            val wsUrl = "wss://api.deepgram.com/v1/speak?" +
                    "model=$voiceModel&" +
                    "encoding=linear16&" +
                    "sample_rate=24000&" +  // Reduced from 48000 for faster processing
                    "channels=1&" +
                    "bit_depth=16&" +
                    "container=none"        // No container overhead

            Log.d(TAG, "🎵 WEBSOCKET_TTS: WebSocket URL: $wsUrl")

            // Create WebSocket request with authorization
            val wsRequest = Request.Builder()
                .url(wsUrl)
                .header("Authorization", "Token $apiKey")
                .build()

            // Create WebSocket listener with real-time playback
            val wsListener = object : WebSocketListener() {
                override fun onOpen(webSocket: WebSocket, response: Response) {
                    Log.d(TAG, "🎵 WEBSOCKET_TTS: ✅ WebSocket connection opened")
                    
                    try {
                        // Send the text for synthesis
                        val speakMessage = JSONObject().apply {
                            put("type", "Speak")
                            put("text", text)
                        }
                        
                        Log.d(TAG, "🎵 WEBSOCKET_TTS: Sending speak message: ${speakMessage.toString()}")
                        val success = webSocket.send(speakMessage.toString())
                        
                        if (success) {
                            Log.d(TAG, "🎵 WEBSOCKET_TTS: ✅ Speak message sent successfully")
                            
                            // Send flush message to indicate end of input
                            val flushMessage = JSONObject().apply {
                                put("type", "Flush")
                            }
                            
                            val flushSuccess = webSocket.send(flushMessage.toString())
                            Log.d(TAG, "🎵 WEBSOCKET_TTS: Flush message sent: $flushSuccess")
                        } else {
                            Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ Failed to send speak message")
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ Error sending messages", e)
                        webSocket.close(1000, "Error sending messages")
                    }
                }

                override fun onMessage(webSocket: WebSocket, bytes: ByteString) {
                    val chunk = bytes.toByteArray()
                    Log.d(TAG, "🎵 WEBSOCKET_TTS: 📦 Received audio chunk: ${chunk.size} bytes")
                    
                    try {
                        // Store chunk and accumulate for streaming playback
                        audioChunks.add(chunk)
                        streamingAudioBuffer?.write(chunk)
                        
                        val totalSize = streamingAudioBuffer?.toByteArray()?.size ?: 0
                        Log.d(TAG, "🎵 WEBSOCKET_TTS: Total audio data: $totalSize bytes")
                        
                        // Don't start playback until we have the complete stream
                        // This prevents audio cutoff issues and ensures full playback
                        Log.d(TAG, "🎵 WEBSOCKET_TTS: Buffering audio data: ${totalSize} bytes (waiting for complete stream)")
                        
                    } catch (e: Exception) {
                        Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ Error processing audio chunk", e)
                    }
                }

                override fun onMessage(webSocket: WebSocket, text: String) {
                    Log.d(TAG, "🎵 WEBSOCKET_TTS: 📄 Received text message: $text")
                    
                    try {
                        val message = JSONObject(text)
                        val type = message.optString("type")
                        
                        when (type) {
                            "Metadata" -> {
                                Log.d(TAG, "🎵 WEBSOCKET_TTS: Metadata received: $text")
                            }
                            "Flushed" -> {
                                Log.d(TAG, "🎵 WEBSOCKET_TTS: ✅ Stream flushed - all audio data received")
                                
                                val totalAudioSize = streamingAudioBuffer?.toByteArray()?.size ?: 0
                                Log.i(TAG, "🎵 WEBSOCKET_TTS: Complete audio data size: $totalAudioSize bytes")
                                
                                // Start playback now that we have all the data
                                if (!isPlaybackStarted.get() && totalAudioSize > 0) {
                                    Log.i(TAG, "🎵 WEBSOCKET_TTS: 🚀 COMPLETE PLAYBACK: Starting playback with full stream ($totalAudioSize bytes)")
                                    isPlaybackStarted.set(true)
                                    
                                    GlobalScope.launch(Dispatchers.Main) {
                                        startStreamingPlayback(requestId, onComplete)
                                    }
                                } else if (isPlaybackStarted.get()) {
                                    Log.d(TAG, "🎵 WEBSOCKET_TTS: Playback already started, stream complete")
                                } else {
                                    Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ No audio data to play (size: $totalAudioSize)")
                                }
                                
                                webSocket.close(1000, "Stream completed")
                            }
                            else -> {
                                Log.d(TAG, "🎵 WEBSOCKET_TTS: Unknown message type: $type")
                            }
                        }
                    } catch (e: Exception) {
                        Log.w(TAG, "🎵 WEBSOCKET_TTS: Could not parse text message as JSON: $text", e)
                    }
                }

                override fun onClosed(webSocket: WebSocket, code: Int, reason: String) {
                    Log.d(TAG, "🎵 WEBSOCKET_TTS: ✅ WebSocket closed: $code - $reason")
                    isStreamingActive.set(false)
                    streamingLatch?.countDown()
                }

                override fun onFailure(webSocket: WebSocket, t: Throwable, response: Response?) {
                    Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ WebSocket failure: ${t.message}", t)
                    if (response != null) {
                        Log.e(TAG, "🎵 WEBSOCKET_TTS: Response: ${response.code} - ${response.message}")
                    }
                    isStreamingActive.set(false)
                    streamingLatch?.countDown()
                }
            }

            // Start WebSocket connection
            streamingWebSocket = okHttpClient.newWebSocket(wsRequest, wsListener)
            Log.d(TAG, "🎵 WEBSOCKET_TTS: WebSocket connection initiated")

            // Update request timing
            activeRequests[requestId]?.apiCallTime = System.currentTimeMillis()

            // Wait for streaming to complete with timeout - but don't rush playback
            val streamCompleted = streamingLatch?.await(30, TimeUnit.SECONDS) ?: false
            
            Log.d(TAG, "🎵 WEBSOCKET_TTS: Stream completed: $streamCompleted, Playback started: ${isPlaybackStarted.get()}")
            
            if (!streamCompleted && !isPlaybackStarted.get()) {
                Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ Streaming timeout after 30 seconds and no playback started")
                streamingWebSocket?.close(1000, "Timeout")
                return@withContext false
            }

            // Always check if we have complete audio data and start playback if not started
            if (!isPlaybackStarted.get()) {
                val audioData = streamingAudioBuffer?.toByteArray()
                if (audioData != null && audioData.isNotEmpty()) {
                    Log.i(TAG, "🎵 WEBSOCKET_TTS: 🚀 FALLBACK PLAYBACK: Starting playback with complete ${audioData.size} bytes")
                    isPlaybackStarted.set(true)
                    activeRequests[requestId]?.audioReceivedTime = System.currentTimeMillis()
                    
                    withContext(Dispatchers.Main) {
                        startStreamingPlayback(requestId, onComplete)
                    }
                } else {
                    Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ No audio data received for fallback")
                    return@withContext false
                }
            }
            
            // Wait a bit longer to ensure playback started successfully
            delay(100)
            
            return@withContext true

        } catch (e: Exception) {
            Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ WebSocket streaming error", e)
            isStreamingActive.set(false)
            streamingLatch?.countDown()
            streamingWebSocket?.close(1000, "Error occurred")
            return@withContext false
        } finally {
            // Cleanup streaming resources - but keep audio buffer until playback completes
            streamingWebSocket = null
            streamingLatch = null
            isStreamingActive.set(false)
            
            // Only clear audio buffer if playback hasn't started or failed
            if (!isPlaybackStarted.get()) {
                streamingAudioBuffer = null
                Log.d(TAG, "🎵 WEBSOCKET_TTS: Cleared audio buffer - playback never started")
            } else {
                Log.d(TAG, "🎵 WEBSOCKET_TTS: Keeping audio buffer for ongoing playback")
            }
            
            Log.d(TAG, "🎵 WEBSOCKET_TTS: ========== WebSocket TTS Stream Complete ==========")
        }
    }

    /**
     * Start streaming playback with current buffered audio data
     * This enables real-time playback while continuing to receive data
     */
    private suspend fun startStreamingPlayback(requestId: String, onComplete: (() -> Unit)?) {
        try {
            val currentAudioData = streamingAudioBuffer?.toByteArray()
            if (currentAudioData == null || currentAudioData.isEmpty()) {
                Log.e(TAG, "🎵 STREAMING_PLAYBACK: No audio data available for playback")
                return
            }
            
            Log.i(TAG, "🎵 STREAMING_PLAYBACK: Creating initial WAV file with ${currentAudioData.size} bytes")
            
            // Create WAV file from current buffered data
            val wavFile = createWavFile(currentAudioData, requestId)
            if (wavFile == null) {
                Log.e(TAG, "🎵 STREAMING_PLAYBACK: Failed to create WAV file")
                return
            }
            
            Log.i(TAG, "🎵 STREAMING_PLAYBACK: ✅ Starting playback: ${wavFile.absolutePath} (${wavFile.length()} bytes)")
            activeRequests[requestId]?.audioReceivedTime = System.currentTimeMillis()
            
            // Start MediaPlayer with the initial audio
            setupMediaPlayer(wavFile, requestId, onComplete)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 STREAMING_PLAYBACK: Error starting streaming playback", e)
        }
    }

    /**
     * Create a WAV file from raw linear16 audio data
     */
    private fun createWavFile(audioData: ByteArray, requestId: String): File? {
        return try {
            Log.d(TAG, "🎵 WEBSOCKET_TTS: Creating WAV file for ${audioData.size} bytes of audio data")

            // WAV file parameters for optimized Deepgram linear16 format
            val sampleRate = 24000  // Reduced from 48000 for faster processing
            val channels = 1
            val bitsPerSample = 16
            val byteRate = sampleRate * channels * bitsPerSample / 8
            val blockAlign = channels * bitsPerSample / 8

            // Create temporary file
            val wavFile = File(context.cacheDir, "deepgram_audio_${requestId}_${System.currentTimeMillis()}.wav")
            val outputStream = FileOutputStream(wavFile)

            // Write WAV header
            outputStream.write("RIFF".toByteArray())
            outputStream.write(intToLittleEndian(36 + audioData.size))
            outputStream.write("WAVE".toByteArray())
            
            // fmt chunk
            outputStream.write("fmt ".toByteArray())
            outputStream.write(intToLittleEndian(16)) // fmt chunk size
            outputStream.write(shortToLittleEndian(1)) // PCM format
            outputStream.write(shortToLittleEndian(channels))
            outputStream.write(intToLittleEndian(sampleRate))
            outputStream.write(intToLittleEndian(byteRate))
            outputStream.write(shortToLittleEndian(blockAlign))
            outputStream.write(shortToLittleEndian(bitsPerSample))
            
            // data chunk
            outputStream.write("data".toByteArray())
            outputStream.write(intToLittleEndian(audioData.size))
            outputStream.write(audioData)
            
            outputStream.close()

            Log.d(TAG, "🎵 WEBSOCKET_TTS: ✅ WAV file created successfully: ${wavFile.absolutePath}")
            Log.d(TAG, "🎵 WEBSOCKET_TTS: WAV file details - Size: ${wavFile.length()} bytes, Sample rate: $sampleRate Hz, Channels: $channels")

            wavFile
        } catch (e: Exception) {
            Log.e(TAG, "🎵 WEBSOCKET_TTS: ❌ Error creating WAV file", e)
            null
        }
    }

    /**
     * Convert integer to little-endian byte array
     */
    private fun intToLittleEndian(value: Int): ByteArray {
        return byteArrayOf(
            (value and 0xff).toByte(),
            ((value shr 8) and 0xff).toByte(),
            ((value shr 16) and 0xff).toByte(),
            ((value shr 24) and 0xff).toByte()
        )
    }

    /**
     * Convert short to little-endian byte array
     */
    private fun shortToLittleEndian(value: Int): ByteArray {
        return byteArrayOf(
            (value and 0xff).toByte(),
            ((value shr 8) and 0xff).toByte()
        )
    }

    /**
     * Setup MediaPlayer for audio playback
     */
    private fun setupMediaPlayer(audioFile: File, requestId: String, onComplete: (() -> Unit)?) {
        try {
            mediaPlayer?.reset()
            
            // Enhanced audio attributes for better audio focus coordination
            mediaPlayer?.setAudioAttributes(
                AudioAttributes.Builder()
                    .setContentType(AudioAttributes.CONTENT_TYPE_SPEECH)
                    .setUsage(AudioAttributes.USAGE_MEDIA)
                    .setLegacyStreamType(android.media.AudioManager.STREAM_MUSIC)
                    .build()
            )
            
            mediaPlayer?.setDataSource(audioFile.absolutePath)
            
            // Set completion listener BEFORE preparing
            mediaPlayer?.setOnCompletionListener { mp ->
                Log.d(TAG, "🎵 DEEPGRAM_TTS: ✅ Playback completed for request $requestId")
                
                // Release audio focus when playback actually completes
                releaseAudioFocus()
                
                // Clean up streaming audio buffer now that playback is complete
                streamingAudioBuffer = null
                Log.d(TAG, "🎵 DEEPGRAM_TTS: Streaming audio buffer cleared after playback completion")
                
                // Notify completion callback
                onComplete?.invoke()
                
                // Clean up the temporary file
                try {
                    if (audioFile.exists()) {
                        audioFile.delete()
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: Temporary audio file deleted for request $requestId")
                    }
                } catch (e: Exception) {
                    Log.w(TAG, "Could not delete temporary audio file", e)
                }
            }
            
            // Set error listener
            mediaPlayer?.setOnErrorListener { mp, what, extra ->
                Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ MediaPlayer error for request $requestId: what=$what, extra=$extra")
                
                // Release audio focus on error
                releaseAudioFocus()
                
                // Clean up streaming audio buffer on error
                streamingAudioBuffer = null
                Log.d(TAG, "🎵 DEEPGRAM_TTS: Streaming audio buffer cleared after error")
                
                // Notify completion callback even on error to prevent hanging
                onComplete?.invoke()
                
                true // Indicate we handled the error
            }
            
            // Set prepared listener
            mediaPlayer?.setOnPreparedListener { mp ->
                activeRequests[requestId]?.playbackStartTime = System.currentTimeMillis()
                Log.d(TAG, "🎵 DEEPGRAM_TTS: ▶️ Starting playback for request $requestId")
                mp.start()
            }
            
            // Prepare the media player
            mediaPlayer?.prepareAsync()
            
        } catch (e: Exception) {
            Log.e(TAG, "Error setting up MediaPlayer for request $requestId", e)
            // Release audio focus on setup error
            releaseAudioFocus()
            // Notify completion callback to prevent hanging
            onComplete?.invoke()
        }
    }
} 