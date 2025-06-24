package com.anonymous.MobileJarvisNative.voice

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableMap
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach
import kotlinx.coroutines.launch
import kotlinx.coroutines.suspendCancellableCoroutine
import kotlin.coroutines.resume
import com.anonymous.MobileJarvisNative.utils.Constants
import android.os.Handler
import android.os.Looper
import com.anonymous.MobileJarvisNative.utils.TextToSpeechManager
import android.media.AudioManager
import com.anonymous.MobileJarvisNative.utils.PermissionUtils
import java.util.UUID
import android.content.Context
import java.io.File
import kotlinx.coroutines.withContext

/**
 * Bridge module for exposing Voice functionality to React Native
 */
class VoiceModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val TAG = "VoiceModule"
    private val voiceManager = VoiceManager.getInstance()
    private val coroutineScope = CoroutineScope(Dispatchers.Main)

    init {
        voiceManager.initialize(reactContext)
        
        // Set up API callback for processing text using the new direct method
        voiceManager.setReactNativeApiCallback { text, onResult ->
            Log.d(TAG, "🔵 VOICE_MODULE: API callback triggered, calling processTextFromNative")
            
            // Generate a requestId that will be used to match the response
            val requestId = UUID.randomUUID().toString()
            
            // Store the callback for when the response comes back via handleApiResponse
            pendingApiCallbacks[requestId] = onResult
            
            Log.d(TAG, "🔵 VOICE_MODULE: Stored callback for requestId: $requestId")
            
            // Emit the event directly (same as processTextFromNative method)
            try {
                val params = Arguments.createMap().apply {
                    putString("text", text)
                    putString("requestId", requestId)
                }
                
                Log.i(TAG, "🔵 VOICE_MODULE: About to emit processTextFromNative event")
                Log.i(TAG, "🔵 VOICE_MODULE: Event data - text: '$text', requestId: '$requestId'")
                
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit("processTextFromNative", params)
                
                Log.d(TAG, "🔵 VOICE_MODULE: ✅ Successfully sent processTextFromNative event")
                
                // Set timeout for the request and track the handler
                val timeoutHandler = Handler(Looper.getMainLooper())
                timeoutHandlers[requestId] = timeoutHandler
                timeoutHandler.postDelayed({
                    timeoutHandlers.remove(requestId)
                    pendingApiCallbacks.remove(requestId)?.let { callback ->
                        Log.w(TAG, "🔵 VOICE_MODULE: Timeout for request: $requestId")
                        callback("I'm sorry, there was a timeout processing your request. Please try again.")
                    }
                }, 30000)
                
            } catch (e: Exception) {
                Log.e(TAG, "🔵 VOICE_MODULE: ❌ Error emitting processTextFromNative event", e)
                pendingApiCallbacks.remove(requestId)
                onResult("Error: ${e.message}")
            }
        }
    }

    override fun getName(): String {
        return "VoiceModule"
    }

    /**
     * Start listening for voice input
     */
    @ReactMethod
    fun startListening(promise: Promise) {
        Log.d(TAG, "startListening called from JS")
        try {
            // Ensure speech recognition is initialized
            ensureSpeechRecognitionInitialized()
            
            voiceManager.startListening()
            promise.resolve(true)
        } catch (e: Exception) {
            Log.e(TAG, "Error starting listening", e)
            promise.reject("ERR_VOICE_START", e.message, e)
        }
    }

    /**
     * Ensure speech recognition is initialized
     */
    private fun ensureSpeechRecognitionInitialized() {
        Log.d(TAG, "Ensuring speech recognition is initialized")
        // Re-initialize voice manager
        voiceManager.initialize()
    }

    /**
     * Stop listening for voice input
     */
    @ReactMethod
    fun stopListening(promise: Promise) {
        Log.d(TAG, "stopListening called from JS")
        try {
            voiceManager.stopListening()
            promise.resolve(true)
        } catch (e: Exception) {
            Log.e(TAG, "Error stopping listening", e)
            promise.reject("ERR_VOICE_STOP", e.message, e)
        }
    }

    /**
     * Interrupt any ongoing speech
     */
    @ReactMethod
    fun interruptSpeech(promise: Promise) {
        Log.d(TAG, "interruptSpeech called from JS")
        try {
            voiceManager.interruptSpeech()
            promise.resolve(true)
        } catch (e: Exception) {
            Log.e(TAG, "Error interrupting speech", e)
            promise.reject("ERR_VOICE_INTERRUPT", e.message, e)
        }
    }

    /**
     * Get the current voice state
     */
    @ReactMethod
    fun getVoiceState(promise: Promise) {
        try {
            val state = voiceManager.voiceState.value
            promise.resolve(state.toString())
        } catch (e: Exception) {
            Log.e(TAG, "Error getting voice state", e)
            promise.reject("ERR_VOICE_STATE", e.message, e)
        }
    }

    /**
     * Add a listener for voice state changes
     */
    @ReactMethod
    fun addListener(eventName: String) {
        // Required for RN built in Event Emitter
        if (eventName == Constants.Actions.VOICE_STATE_CHANGE) {
            // Set up the state flow collector if not already set up
            setupStateFlowListener()
        }
    }

    /**
     * Remove listeners
     */
    @ReactMethod
    fun removeListeners(count: Int) {
        // Required for RN built in Event Emitter
        // Real removal happens in VoiceService class
    }

    /**
     * Initialize state flow listener
     */
    private fun setupStateFlowListener() {
        voiceManager.voiceState
            .onEach { state ->
                // Send the state update to JS
                sendEvent(Constants.Actions.VOICE_STATE_CHANGE, mapOf("state" to state.toString()))
            }
            .launchIn(coroutineScope)
    }

    /**
     * Send an event to JavaScript
     */
    private fun sendEvent(eventName: String, params: Map<String, Any>) {
        val writableMap = params.toWritableMap()
        reactContext
            .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
            .emit(eventName, writableMap)
    }

    // Helper extension function to convert Map<String, Any> to WritableMap
    private fun Map<String, Any>.toWritableMap(): WritableMap {
        val writableMap = Arguments.createMap()
        for ((key, value) in this) {
            when (value) {
                is String -> writableMap.putString(key, value)
                is Int -> writableMap.putInt(key, value)
                is Double -> writableMap.putDouble(key, value)
                is Boolean -> writableMap.putBoolean(key, value)
                is Float -> writableMap.putDouble(key, value.toDouble())
                is Long -> writableMap.putDouble(key, value.toDouble())
                is List<*> -> {
                    val array = Arguments.createArray()
                    value.forEach { item ->
                        when (item) {
                            is String -> array.pushString(item)
                            is Int -> array.pushInt(item)
                            is Double -> array.pushDouble(item)
                            is Boolean -> array.pushBoolean(item)
                            is Float -> array.pushDouble(item.toDouble())
                            is Long -> array.pushDouble(item.toDouble())
                            else -> array.pushString(item.toString())
                        }
                    }
                    writableMap.putArray(key, array)
                }
                else -> writableMap.putString(key, value.toString())
            }
        }
        return writableMap
    }

    /**
     * Speak a response using TTS - prioritize Deepgram if enabled, fallback to System TTS
     */
    @ReactMethod
    fun speakResponse(text: String, promise: Promise) {
        Log.d(TAG, "speakResponse called from JS with text: $text")
        try {
            coroutineScope.launch {
                try {
                    // Update voice state to speaking
                    Log.i(TAG, "Setting voice state to SPEAKING")
                    voiceManager.updateState(VoiceManager.VoiceState.SPEAKING)
                    
                    // Check user preferences for Deepgram TTS
                    val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
                    val deepgramEnabled = deepgramPrefs.getBoolean("deepgram_enabled", false)
                    val selectedVoice = deepgramPrefs.getString("selected_voice", "aura-2-mars-en")
                    
                    Log.i(TAG, "🎵 TTS_PRIORITY: ========== TTS Decision Logic ==========")
                    Log.i(TAG, "🎵 TTS_PRIORITY: Text to speak: '${text.take(100)}${if(text.length > 100) "..." else ""}'")
                    Log.i(TAG, "🎵 TTS_PRIORITY: Deepgram enabled setting: $deepgramEnabled")
                    Log.i(TAG, "🎵 TTS_PRIORITY: Selected Deepgram voice: $selectedVoice")
                    Log.i(TAG, "🎵 TTS_PRIORITY: Decision: ${if(deepgramEnabled) "Try Deepgram first, fallback to System" else "Use System TTS directly"}")
                    Log.i(TAG, "🎵 TTS_PRIORITY: ============================================")
                    
                    var speechSuccessful = false
                    
                    if (deepgramEnabled) {
                        Log.i(TAG, "🎵 TTS_PRIORITY: 🚀 Starting Deepgram TTS attempt...")
                        
                        // Send notification to React Native that Deepgram is being attempted
                        val deepgramAttemptParams = Arguments.createMap().apply {
                            putString("message", "Attempting Deepgram TTS...")
                            putString("voice", selectedVoice)
                        }
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSAttempt", deepgramAttemptParams)
                        
                        speechSuccessful = speakWithDeepgram(text)
                        
                        if (!speechSuccessful) {
                            Log.w(TAG, "🎵 TTS_PRIORITY: ⚠️ Deepgram TTS failed, falling back to System TTS")
                            
                            // Send fallback notification to React Native
                            val fallbackParams = Arguments.createMap().apply {
                                putString("message", "Deepgram TTS failed, using system voice as fallback")
                                putString("reason", "deepgram_failed")
                                putString("action", "fallback_to_system")
                            }
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("TTSFallback", fallbackParams)
                            
                            speechSuccessful = speakWithSystemTTS(text)
                            if (speechSuccessful) {
                                Log.i(TAG, "🎵 TTS_PRIORITY: ✅ System TTS fallback successful")
                                
                                // Send success notification for fallback
                                val fallbackSuccessParams = Arguments.createMap().apply {
                                    putString("message", "System TTS fallback completed successfully")
                                    putString("tts_method", "system")
                                }
                                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                    .emit("TTSSuccess", fallbackSuccessParams)
                            } else {
                                Log.e(TAG, "🎵 TTS_PRIORITY: ❌ Both Deepgram and System TTS failed")
                                
                                // Send total failure notification
                                val totalFailureParams = Arguments.createMap().apply {
                                    putString("error", "Both Deepgram and System TTS failed")
                                    putString("type", "total_failure")
                                    putBoolean("deepgram_failed", true)
                                    putBoolean("system_failed", true)
                                }
                                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                    .emit("TTSError", totalFailureParams)
                            }
                        } else {
                            Log.i(TAG, "🎵 TTS_PRIORITY: ✅ Deepgram TTS successful")
                            // Deepgram success notification is sent from speakWithDeepgram method
                        }
                    } else {
                        Log.i(TAG, "🎵 TTS_PRIORITY: 🔊 Using System TTS (Deepgram disabled)")
                        
                        // Send notification that System TTS is being used by choice
                        val systemTTSParams = Arguments.createMap().apply {
                            putString("message", "Using system TTS (Deepgram disabled)")
                            putString("tts_method", "system")
                            putString("reason", "deepgram_disabled")
                        }
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("TTSMethodSelected", systemTTSParams)
                        
                        speechSuccessful = speakWithSystemTTS(text)
                        if (speechSuccessful) {
                            Log.i(TAG, "🎵 TTS_PRIORITY: ✅ System TTS successful")
                            
                            // Send success notification for system TTS
                            val systemSuccessParams = Arguments.createMap().apply {
                                putString("message", "System TTS completed successfully")
                                putString("tts_method", "system")
                            }
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("TTSSuccess", systemSuccessParams)
                        } else {
                            Log.e(TAG, "🎵 TTS_PRIORITY: ❌ System TTS failed")
                            
                            // Send system TTS failure notification
                            val systemFailureParams = Arguments.createMap().apply {
                                putString("error", "System TTS failed")
                                putString("type", "system_failure")
                                putBoolean("system_failed", true)
                            }
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("TTSError", systemFailureParams)
                        }
                    }
                    
                    Log.i(TAG, "TTS process completed. Success: $speechSuccessful")
                    
                    if (speechSuccessful) {
                        Log.i(TAG, "TTS started successfully, waiting for completion")
                    } else {
                        Log.e(TAG, "All TTS methods failed")
                        voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                    }
                    
                    promise.resolve(speechSuccessful)
                } catch (e: Exception) {
                    Log.e(TAG, "Unexpected error in speakResponse", e)
                    voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                    promise.reject("ERR_TTS", e.message, e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error in speakResponse outer try-catch", e)
            promise.reject("ERR_TTS", e.message, e)
        }
    }
    
    // Reusable Deepgram client instance to avoid reinitialization
    private var deepgramClient: DeepgramClient? = null
    
    /**
     * Get or create a shared Deepgram client instance
     */
    private fun getDeepgramClient(): DeepgramClient {
        return deepgramClient ?: run {
            // Use singleton instance for better performance
            val client = DeepgramClient.getInstance(reactContext)
            client.initialize()
            deepgramClient = client
            client
        }
    }
    
    /**
     * Speak using Deepgram TTS with enhanced error handling and audio focus management
     */
    private suspend fun speakWithDeepgram(text: String): Boolean {
        return suspendCancellableCoroutine { continuation ->
            Log.i(TAG, "🎵 DEEPGRAM_TTS: ========== Starting Deepgram TTS ==========")
            Log.i(TAG, "🎵 DEEPGRAM_TTS: Text: '${text.take(100)}${if(text.length > 100) "..." else ""}'")
            
            try {
                coroutineScope.launch {
                    var success = false
                    var errorMessage = ""
                    
                    try {
                        // Get or create Deepgram client
                        val client = getDeepgramClient()
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: Using Deepgram client")
                        
                        // Pre-flight validation
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: Running pre-flight validation...")
                        val validation = client.validateConfiguration()
                        if (!validation.isValid) {
                            errorMessage = "Pre-flight validation failed: ${validation.issues.joinToString("; ")}"
                            Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ $errorMessage")
                            
                            // Send error notification to React Native
                            val errorParams = Arguments.createMap().apply {
                                putString("error", errorMessage)
                                putString("type", "validation")
                                putArray("issues", Arguments.createArray().apply {
                                    validation.issues.forEach { issue -> pushString(issue) }
                                })
                            }
                            
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("DeepgramTTSError", errorParams)
                            
                            if (continuation.isActive) {
                                continuation.resume(false)
                            }
                            return@launch
                        }
                        
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: ✅ Pre-flight validation passed")
                        
                        // Test connectivity
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: Testing connectivity...")
                        val connectivityOk = client.testDeepgramConnectivity()
                        if (!connectivityOk) {
                            errorMessage = "Deepgram API not accessible"
                            Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ $errorMessage")
                            
                            // Send connectivity error notification
                            val errorParams = Arguments.createMap().apply {
                                putString("error", errorMessage)
                                putString("type", "connectivity")
                            }
                            
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("DeepgramTTSError", errorParams)
                            
                            if (continuation.isActive) {
                                continuation.resume(false)
                            }
                            return@launch
                        }
                        
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: ✅ Connectivity test passed")
                        
                        // Test audio system
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: Testing audio system...")
                        val audioOk = client.testAudioPlayback()
                        if (!audioOk) {
                            errorMessage = "Audio system not ready"
                            Log.w(TAG, "🎵 DEEPGRAM_TTS: ⚠️ $errorMessage - attempting TTS anyway")
                            // Continue with TTS attempt even if audio test fails
                        } else {
                            Log.d(TAG, "🎵 DEEPGRAM_TTS: ✅ Audio system test passed")
                        }
                        
                        // Attempt the actual TTS conversion and playback
                        Log.i(TAG, "🎵 DEEPGRAM_TTS: 🚀 Starting TTS conversion and playback...")
                        client.convertTextToSpeech(text)
                        
                        // If we reach here, TTS started successfully
                        success = true
                        Log.i(TAG, "🎵 DEEPGRAM_TTS: ✅ Deepgram TTS completed successfully")
                        
                        // Send success notification to React Native
                        val successParams = Arguments.createMap().apply {
                            putString("message", "Deepgram TTS completed successfully")
                            putString("voice", reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
                                .getString("selected_voice", DeepgramClient.DEFAULT_VOICE))
                        }
                        
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSSuccess", successParams)
                        
                    } catch (e: IllegalStateException) {
                        errorMessage = "Configuration error: ${e.message}"
                        Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Configuration error", e)
                        
                        val errorParams = Arguments.createMap().apply {
                            putString("error", errorMessage)
                            putString("type", "configuration")
                            putString("details", e.message)
                        }
                        
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSError", errorParams)
                        
                    } catch (e: java.net.UnknownHostException) {
                        errorMessage = "Network error: Cannot reach Deepgram servers"
                        Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Network error", e)
                        
                        val errorParams = Arguments.createMap().apply {
                            putString("error", errorMessage)
                            putString("type", "network")
                            putString("details", "DNS resolution failed for api.deepgram.com")
                        }
                        
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSError", errorParams)
                        
                    } catch (e: java.net.ConnectException) {
                        errorMessage = "Network error: Cannot connect to Deepgram API"
                        Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Connection error", e)
                        
                        val errorParams = Arguments.createMap().apply {
                            putString("error", errorMessage)
                            putString("type", "network")
                            putString("details", "Connection refused or timeout")
                        }
                        
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSError", errorParams)
                        
                    } catch (e: java.io.IOException) {
                        if (e.message?.contains("401") == true) {
                            errorMessage = "Authentication error: Invalid API key"
                            Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Auth error", e)
                            
                            val errorParams = Arguments.createMap().apply {
                                putString("error", errorMessage)
                                putString("type", "authentication")
                                putString("details", "API key is invalid or expired")
                            }
                            
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("DeepgramTTSError", errorParams)
                        } else {
                            errorMessage = "API error: ${e.message}"
                            Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ API error", e)
                            
                            val errorParams = Arguments.createMap().apply {
                                putString("error", errorMessage)
                                putString("type", "api")
                                putString("details", e.message)
                            }
                            
                            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                                .emit("DeepgramTTSError", errorParams)
                        }
                    } catch (e: Exception) {
                        errorMessage = "Unexpected error: ${e.message}"
                        Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Unexpected error", e)
                        
                        val errorParams = Arguments.createMap().apply {
                            putString("error", errorMessage)
                            putString("type", "unexpected")
                            putString("details", e.message)
                            putString("stackTrace", e.stackTraceToString())
                        }
                        
                        reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            .emit("DeepgramTTSError", errorParams)
                    } finally {
                        // Always update voice state when done (success or failure)
                        voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                        
                        Log.i(TAG, "🎵 DEEPGRAM_TTS: ========== Deepgram TTS Complete ==========")
                        Log.i(TAG, "🎵 DEEPGRAM_TTS: Success: $success")
                        if (!success) {
                            Log.i(TAG, "🎵 DEEPGRAM_TTS: Error: $errorMessage")
                        }
                        Log.i(TAG, "🎵 DEEPGRAM_TTS: =======================================")
                        
                        if (continuation.isActive) {
                            continuation.resume(success)
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Error in speakWithDeepgram setup: ${e.message}", e)
                
                // Send setup error notification
                val errorParams = Arguments.createMap().apply {
                    putString("error", "Setup error: ${e.message}")
                    putString("type", "setup")
                    putString("details", e.message)
                }
                
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit("DeepgramTTSError", errorParams)
                
                voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                
                if (continuation.isActive) {
                    continuation.resume(false)
                }
            }
        }
    }

    /**
     * Speak using system TTS
     */
    private suspend fun speakWithSystemTTS(text: String): Boolean {
        return suspendCancellableCoroutine { continuation ->
            try {
                TextToSpeechManager.speak(text) {
                    // TTS completed, reset to idle state
                    voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                    if (continuation.isActive) {
                        continuation.resume(true)
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error with system TTS: ${e.message}", e)
                if (continuation.isActive) {
                    continuation.resume(false)
                }
            }
        }
    }

    /**
     * Handle API response from React Native
     */
    @ReactMethod
    fun handleApiResponse(requestId: String, response: String, promise: Promise) {
        Log.d(TAG, "🟢 NATIVE: handleApiResponse called")
        Log.i(TAG, "🟢 NATIVE: RequestId: $requestId")
        Log.i(TAG, "🟢 NATIVE: Response length: ${response.length}")
        Log.i(TAG, "🟢 NATIVE: Response preview: ${response.take(100)}...")
        
        try {
            // Emit the response back to React Native for UI display
            Log.d(TAG, "🟢 NATIVE: Emitting VoiceResponseUpdate event to React Native")
            val responseParams = Arguments.createMap().apply {
                putString("response", response)
                putDouble("timestamp", System.currentTimeMillis().toDouble())
            }
            
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("VoiceResponseUpdate", responseParams)
            
            Log.d(TAG, "🟢 NATIVE: ✅ VoiceResponseUpdate event emitted successfully")
            
            // First, handle the pending callback if it exists
            pendingApiCallbacks.remove(requestId)?.let { callback ->
                // Cancel the timeout handler since we got a response
                timeoutHandlers.remove(requestId)?.removeCallbacksAndMessages(null)
                Log.i(TAG, "🟢 NATIVE: Found pending callback for requestId: $requestId")
                
                // IMPORTANT: Ensure proper audio focus coordination before TTS
                Log.d(TAG, "🎵 AUDIO_FOCUS: Preparing audio focus for TTS response")
                
                // Stop any active speech recognition first
                voiceManager.stopListening()
                
                // Wait a moment for speech recognition to fully release audio focus
                Handler(Looper.getMainLooper()).postDelayed({
                    try {
                        Log.d(TAG, "🎵 AUDIO_FOCUS: Speech recognizer stopped, proceeding with TTS")
                        callback(response)
                        Log.i(TAG, "🟢 NATIVE: ✅ Callback executed successfully")
                        promise.resolve(true)
                    } catch (e: Exception) {
                        Log.e(TAG, "🟢 NATIVE: ❌ Error in delayed callback execution", e)
                        promise.reject("API_RESPONSE_ERROR", "Failed to execute callback: ${e.message}", e)
                    }
                }, 200) // 200ms delay to ensure audio focus handoff
                
            } ?: run {
                Log.w(TAG, "🟢 NATIVE: No pending callback found for requestId: $requestId")
                // Still speak the response even if no callback found
                coroutineScope.launch {
                    try {
                        Log.i(TAG, "🟢 NATIVE: Speaking response via TTS anyway")
                        
                        // Ensure speech recognition is stopped first
                        voiceManager.stopListening()
                        
                        // Wait for audio focus to be released
                        withContext(Dispatchers.Main) {
                            Handler(Looper.getMainLooper()).postDelayed({
                                coroutineScope.launch {
                                    try {
                                        val speechResult = speakWithSystemTTS(response)
                                        Log.i(TAG, "🟢 NATIVE: TTS completed with result: $speechResult")
                                        promise.resolve(speechResult)
                                    } catch (e: Exception) {
                                        Log.e(TAG, "🟢 NATIVE: ❌ Error in delayed TTS", e)
                                        promise.reject("API_RESPONSE_ERROR", "Failed to speak response: ${e.message}", e)
                                    }
                                }
                            }, 200)
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "🟢 NATIVE: ❌ Error in handleApiResponse TTS", e)
                        promise.reject("API_RESPONSE_ERROR", "Failed to speak response: ${e.message}", e)
                    }
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "🟢 NATIVE: ❌ Error in handleApiResponse", e)
            promise.reject("API_RESPONSE_ERROR", "Failed to handle API response: ${e.message}", e)
        }
    }

    /**
     * Test TTS directly (for debugging)
     */
    @ReactMethod
    fun testTTS(text: String, promise: Promise) {
        Log.d(TAG, "testTTS called with text: $text")
        try {
            // Check audio settings first
            Log.d(TAG, "Checking audio settings...")
            TextToSpeechManager.checkAudioSettings(reactContext)
            
            // Ensure TextToSpeechManager is initialized
            if (!TextToSpeechManager.isInitialized()) {
                Log.i(TAG, "Initializing TextToSpeechManager for test...")
                TextToSpeechManager.initialize(reactContext) { isInitialized ->
                    Log.i(TAG, "TextToSpeechManager test initialization result: $isInitialized")
                    if (isInitialized) {
                        // Check audio settings again after initialization
                        Log.d(TAG, "Checking audio settings after initialization...")
                        TextToSpeechManager.checkAudioSettings(reactContext)
                        
                        Log.d(TAG, "Starting test TTS speech...")
                        TextToSpeechManager.speak(text) {
                            Log.i(TAG, "Test TTS completed successfully")
                            promise.resolve(true)
                        }
                        
                        // Check if TTS started speaking
                        Handler(Looper.getMainLooper()).postDelayed({
                            val isSpeaking = TextToSpeechManager.isSpeaking()
                            Log.d(TAG, "TTS speaking state 100ms after speak() call: $isSpeaking")
                            if (!isSpeaking) {
                                Log.w(TAG, "TTS not speaking 100ms after speak() call - this might indicate an issue")
                            }
                        }, 100)
                        
                    } else {
                        Log.e(TAG, "Failed to initialize TTS for test")
                        promise.resolve(false)
                    }
                }
            } else {
                Log.i(TAG, "TextToSpeechManager already initialized, testing directly")
                Log.d(TAG, "Starting test TTS speech...")
                TextToSpeechManager.speak(text) {
                    Log.i(TAG, "Test TTS completed successfully")
                    promise.resolve(true)
                }
                
                // Check if TTS started speaking
                Handler(Looper.getMainLooper()).postDelayed({
                    val isSpeaking = TextToSpeechManager.isSpeaking()
                    Log.d(TAG, "TTS speaking state 100ms after speak() call: $isSpeaking")
                    if (!isSpeaking) {
                        Log.w(TAG, "TTS not speaking 100ms after speak() call - this might indicate an issue")
                    }
                }, 100)
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error in testTTS", e)
            promise.reject("ERR_TEST_TTS", e.message, e)
        }
    }

    /**
     * Check audio settings and permissions
     */
    private fun checkAudioSettings(): Boolean {
        val hasAudioPermission = PermissionUtils.hasAudioPermission(reactContext)
        if (!hasAudioPermission) {
            Log.w(TAG, "Audio permission not granted")
            return false
        }

        // Check if audio focus can be acquired
        val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
        if (!audioManager.hasAudioFocus()) {
            Log.w(TAG, "Cannot acquire audio focus")
            return false
        }

        return true
    }

    // Store pending callbacks
    private val pendingApiCallbacks = mutableMapOf<String, (String) -> Unit>()
    
    // Track timeout handlers to cancel them when needed
    private val timeoutHandlers = mutableMapOf<String, Handler>()

    /**
     * Clear all pending native state (for cleanup between chat sessions)
     */
    @ReactMethod
    fun clearNativeState(promise: Promise) {
        try {
            Log.i(TAG, "🧹 NATIVE_CLEANUP: Clearing all native state...")
            
            // Clear pending callbacks
            val pendingCount = pendingApiCallbacks.size
            pendingApiCallbacks.clear()
            Log.d(TAG, "🧹 NATIVE_CLEANUP: Cleared $pendingCount pending API callbacks")
            
            // Cancel and clear timeout handlers
            timeoutHandlers.values.forEach { handler ->
                handler.removeCallbacksAndMessages(null)
            }
            val timeoutCount = timeoutHandlers.size
            timeoutHandlers.clear()
            Log.d(TAG, "🧹 NATIVE_CLEANUP: Cancelled $timeoutCount timeout handlers")
            
            // Reset voice manager state
            voiceManager.updateState(VoiceManager.VoiceState.IDLE)
            Log.d(TAG, "🧹 NATIVE_CLEANUP: Reset voice state to IDLE")
            
            // Stop any ongoing speech or listening
            voiceManager.stopListening()
            voiceManager.interruptSpeech()
            Log.d(TAG, "🧹 NATIVE_CLEANUP: Stopped listening and interrupted speech")
            
            // Release audio focus through centralized manager
            try {
                val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                audioManager.clearAllRequests()
                Log.d(TAG, "🧹 NATIVE_CLEANUP: Cleared all audio focus requests")
            } catch (e: Exception) {
                Log.w(TAG, "🧹 NATIVE_CLEANUP: Error clearing audio focus: ${e.message}")
            }
            
            Log.i(TAG, "🧹 NATIVE_CLEANUP: ✅ Native state cleanup completed successfully")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "🧹 NATIVE_CLEANUP: ❌ Error clearing native state: ${e.message}", e)
            promise.reject("CLEAR_STATE_ERROR", "Failed to clear native state: ${e.message}", e)
        }
    }

    /**
     * Process text using React Native API with authentication (called from React Native)
     */
    @ReactMethod
    fun processTextFromNative(text: String, promise: Promise) {
        Log.d(TAG, "🔵 NATIVE: processTextFromNative called with: $text")
        try {
            val requestId = UUID.randomUUID().toString()
            Log.i(TAG, "🔵 NATIVE: Generated requestId: $requestId")
            
            val params = Arguments.createMap().apply {
                putString("text", text)
                putString("requestId", requestId)
            }
            
            Log.i(TAG, "🔵 NATIVE: About to emit processTextFromNative event to React Native")
            Log.i(TAG, "🔵 NATIVE: Event data - text: '$text', requestId: '$requestId'")
            
            reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("processTextFromNative", params)
            
            Log.d(TAG, "🔵 NATIVE: ✅ Successfully sent processTextFromNative event to React Native")
            promise.resolve(true)
        } catch (e: Exception) {
            Log.e(TAG, "🔵 NATIVE: ❌ Error in processTextFromNative", e)
            promise.reject("PROCESS_TEXT_ERROR", "Failed to process text: ${e.message}", e)
        }
    }

    /**
     * Get available Deepgram voices
     */
    @ReactMethod
    fun getAvailableDeepgramVoices(promise: Promise) {
        try {
            val voices = Arguments.createArray()
            DeepgramClient.AVAILABLE_VOICES.keys.forEach { voice ->
                voices.pushString(voice)
            }
            
            val result = Arguments.createMap()
            result.putArray("voices", voices)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting available Deepgram voices: ${e.message}", e)
            promise.reject("GET_VOICES_ERROR", "Failed to get available voices: ${e.message}", e)
        }
    }
    
    /**
     * Set selected Deepgram voice
     */
    @ReactMethod
    fun setSelectedDeepgramVoice(voice: String, promise: Promise) {
        try {
            if (!DeepgramClient.AVAILABLE_VOICES.containsKey(voice)) {
                promise.reject("INVALID_VOICE", "Voice '$voice' is not available")
                return
            }
            
            val prefs = reactApplicationContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            prefs.edit().putString("selected_voice", voice).apply()
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error setting Deepgram voice: ${e.message}", e)
            promise.reject("SET_VOICE_ERROR", "Failed to set voice: ${e.message}", e)
        }
    }
    
    /**
     * Get selected Deepgram voice
     */
    @ReactMethod
    fun getSelectedDeepgramVoice(promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val selectedVoice = prefs.getString("selected_voice", DeepgramClient.DEFAULT_VOICE) ?: DeepgramClient.DEFAULT_VOICE
            
            val result = Arguments.createMap()
            result.putString("voice", selectedVoice)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting selected Deepgram voice: ${e.message}", e)
            promise.reject("GET_VOICE_ERROR", "Failed to get selected voice: ${e.message}", e)
        }
    }
    
    /**
     * Preview a Deepgram voice by speaking a sample phrase
     */
    @ReactMethod
    fun previewDeepgramVoice(voice: String, text: String, promise: Promise) {
        try {
            if (!DeepgramClient.AVAILABLE_VOICES.containsKey(voice)) {
                promise.reject("INVALID_VOICE", "Voice '$voice' is not available")
                return
            }
            
            coroutineScope.launch {
                try {
                    val deepgramClient = DeepgramClient.getInstance(reactApplicationContext)
                    deepgramClient.initialize()
                    
                    // Get audio data for the voice preview
                    val audioData = deepgramClient.convertTextToSpeechData(text, voice)
                    
                    // Save to temporary file and play
                    val tempFile = File(reactApplicationContext.cacheDir, "voice_preview_${voice}.mp3")
                    tempFile.writeBytes(audioData)
                    
                    // Play the preview
                    withContext(Dispatchers.Main) {
                        val mediaPlayer = android.media.MediaPlayer()
                        mediaPlayer.setDataSource(tempFile.absolutePath)
                        mediaPlayer.setOnPreparedListener { it.start() }
                        mediaPlayer.setOnCompletionListener { 
                            tempFile.delete()
                            mediaPlayer.release()
                        }
                        mediaPlayer.setOnErrorListener { _, _, _ -> 
                            tempFile.delete()
                            mediaPlayer.release()
                            true
                        }
                        mediaPlayer.prepareAsync()
                    }
                    
                    promise.resolve(true)
                } catch (e: Exception) {
                    Log.e(TAG, "Error previewing voice: ${e.message}", e)
                    promise.reject("PREVIEW_ERROR", "Failed to preview voice: ${e.message}", e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error in preview voice: ${e.message}", e)
            promise.reject("PREVIEW_ERROR", "Failed to preview voice: ${e.message}", e)
        }
    }

    /**
     * Update voice settings from React Native with immediate validation
     */
    @ReactMethod
    fun updateVoiceSettings(
        deepgramEnabled: Boolean? = null,
        selectedDeepgramVoice: String? = null,
        promise: Promise
    ) {
        try {
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== NATIVE SETTINGS UPDATE RECEIVED ==========")
            Log.i(TAG, "🎵 VOICE_SETTINGS: updateVoiceSettings called from React Native")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Timestamp: ${System.currentTimeMillis()}")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Thread: ${Thread.currentThread().name}")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Parameters received:")
            Log.i(TAG, "🎵 VOICE_SETTINGS: - deepgramEnabled: $deepgramEnabled (type: ${deepgramEnabled?.javaClass?.simpleName ?: "null"})")
            Log.i(TAG, "🎵 VOICE_SETTINGS: - selectedDeepgramVoice: $selectedDeepgramVoice (type: ${selectedDeepgramVoice?.javaClass?.simpleName ?: "null"})")
            
            val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val editor = deepgramPrefs.edit()
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== PROCESSING DEEPGRAM ENABLED SETTING ==========")
            // Validate and update deepgram enabled setting
            deepgramEnabled?.let { enabled ->
                Log.i(TAG, "🎵 VOICE_SETTINGS: Processing deepgramEnabled value: $enabled")
                
                if (enabled) {
                    // Validate configuration before enabling
                    Log.i(TAG, "🎵 VOICE_SETTINGS: Deepgram is being enabled, validating configuration...")
                    
                    val deepgramValidationStartTime = System.currentTimeMillis()
                    val deepgramClient = DeepgramClient.getInstance(reactContext)
                    deepgramClient.initialize()
                    val validation = deepgramClient.validateConfiguration()
                    val deepgramValidationEndTime = System.currentTimeMillis()
                    
                    Log.i(TAG, "🎵 VOICE_SETTINGS: Deepgram validation took ${deepgramValidationEndTime - deepgramValidationStartTime}ms")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: Validation result: isValid=${validation.isValid}")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: Validation details:")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: - apiKeyPresent: ${validation.apiKeyPresent}")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: - apiKeyValid: ${validation.apiKeyValid}")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: - networkAvailable: ${validation.networkAvailable}")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: - audioSystemReady: ${validation.audioSystemReady}")
                    Log.i(TAG, "🎵 VOICE_SETTINGS: - voiceConfigValid: ${validation.voiceConfigValid}")
                    
                    if (!validation.isValid) {
                        val errorMessage = "Cannot enable Deepgram: ${validation.issues.joinToString("; ")}"
                        Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ Validation failed: $errorMessage")
                        Log.e(TAG, "🎵 VOICE_SETTINGS: Validation issues:")
                        validation.issues.forEachIndexed { index, issue ->
                            Log.e(TAG, "🎵 VOICE_SETTINGS:   ${index + 1}. $issue")
                        }
                        promise.reject("VALIDATION_ERROR", errorMessage)
                        return
                    }
                    Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Deepgram configuration validated successfully")
                }
                
                Log.i(TAG, "🎵 VOICE_SETTINGS: Saving deepgram_enabled = $enabled to SharedPreferences")
                editor.putBoolean("deepgram_enabled", enabled)
                Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ deepgram_enabled saved to editor")
            } ?: run {
                Log.i(TAG, "🎵 VOICE_SETTINGS: deepgramEnabled is null, skipping")
            }
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== PROCESSING SELECTED VOICE SETTING ==========")
            // Validate and update selected voice
            selectedDeepgramVoice?.let { voice ->
                Log.i(TAG, "🎵 VOICE_SETTINGS: Processing selectedDeepgramVoice value: $voice")
                Log.i(TAG, "🎵 VOICE_SETTINGS: Available voices: ${DeepgramClient.AVAILABLE_VOICES.keys.joinToString(", ")}")
                
                if (!DeepgramClient.AVAILABLE_VOICES.containsKey(voice)) {
                    val errorMessage = "Invalid voice '$voice'. Available voices: ${DeepgramClient.AVAILABLE_VOICES.keys.joinToString(", ")}"
                    Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ $errorMessage")
                    promise.reject("INVALID_VOICE", errorMessage)
                    return
                } else {
                    Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Voice '$voice' is valid")
                }
                
                Log.i(TAG, "🎵 VOICE_SETTINGS: Saving selected_voice = $voice to SharedPreferences")
                editor.putString("selected_voice", voice)
                Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ selected_voice saved to editor")
            } ?: run {
                Log.i(TAG, "🎵 VOICE_SETTINGS: selectedDeepgramVoice is null, skipping")
            }
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== COMMITTING CHANGES TO SHARED PREFERENCES ==========")
            // Apply changes atomically
            val commitStartTime = System.currentTimeMillis()
            val success = editor.commit() // Use commit() for immediate synchronous write
            val commitEndTime = System.currentTimeMillis()
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: SharedPreferences commit took ${commitEndTime - commitStartTime}ms")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Commit result: $success")
            
            if (!success) {
                val errorMessage = "Failed to save settings to SharedPreferences"
                Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ $errorMessage")
                promise.reject("SAVE_ERROR", errorMessage)
                return
            }
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Settings successfully committed to SharedPreferences")
            
            // Verify saved values
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== VERIFYING SAVED VALUES ==========")
            val savedDeepgramEnabled = deepgramPrefs.getBoolean("deepgram_enabled", false)
            val savedSelectedVoice = deepgramPrefs.getString("selected_voice", DeepgramClient.DEFAULT_VOICE)
            Log.i(TAG, "🎵 VOICE_SETTINGS: Verified saved values:")
            Log.i(TAG, "🎵 VOICE_SETTINGS: - deepgram_enabled: $savedDeepgramEnabled")
            Log.i(TAG, "🎵 VOICE_SETTINGS: - selected_voice: $savedSelectedVoice")
            
            // Force reload of Deepgram client to pick up new settings
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== RELOADING DEEPGRAM CLIENT ==========")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Forcing Deepgram client reload to pick up new settings...")
            try {
                val reloadStartTime = System.currentTimeMillis()
                deepgramClient?.release()
                deepgramClient = null
                val reloadEndTime = System.currentTimeMillis()
                
                Log.i(TAG, "🎵 VOICE_SETTINGS: Deepgram client reload took ${reloadEndTime - reloadStartTime}ms")
                Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Deepgram client reset for settings reload")
            } catch (e: Exception) {
                Log.w(TAG, "🎵 VOICE_SETTINGS: ⚠️ Error resetting Deepgram client: ${e.message}", e)
                // Continue anyway as this is not critical
            }
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== NOTIFYING REACT NATIVE ==========")
            // Notify React Native that settings were successfully updated and native config reloaded
            val eventStartTime = System.currentTimeMillis()
            val settingsUpdateParams = Arguments.createMap().apply {
                putString("message", "Native voice settings updated and configuration reloaded")
                putBoolean("deepgramEnabled", savedDeepgramEnabled)
                putString("selectedVoice", savedSelectedVoice ?: DeepgramClient.DEFAULT_VOICE)
                putDouble("timestamp", System.currentTimeMillis().toDouble())
            }
            
            try {
                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                    .emit("NativeVoiceSettingsUpdated", settingsUpdateParams)
                
                val eventEndTime = System.currentTimeMillis()
                Log.i(TAG, "🎵 VOICE_SETTINGS: React Native event emission took ${eventEndTime - eventStartTime}ms")
                Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ NativeVoiceSettingsUpdated event sent to React Native")
            } catch (e: Exception) {
                Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ Error sending event to React Native: ${e.message}", e)
            }
            
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== SETTINGS UPDATE COMPLETED SUCCESSFULLY ==========")
            Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Native voice settings updated and validated successfully")
            Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Native configuration reloaded")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Total update duration: ${System.currentTimeMillis() - commitStartTime}ms")
            Log.i(TAG, "🎵 VOICE_SETTINGS: ================================================================")
            
            // Return validation status
            val result = Arguments.createMap().apply {
                putBoolean("success", true)
                putString("message", "Settings updated, validated, and native config reloaded")
                putBoolean("configReloaded", true)
                putBoolean("deepgramEnabled", savedDeepgramEnabled)
                putString("selectedVoice", savedSelectedVoice ?: DeepgramClient.DEFAULT_VOICE)
            }
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 VOICE_SETTINGS: ========== SETTINGS UPDATE ERROR ==========")
            Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ Error updating voice settings: ${e.message}", e)
            Log.e(TAG, "🎵 VOICE_SETTINGS: Error type: ${e.javaClass.simpleName}")
            Log.e(TAG, "🎵 VOICE_SETTINGS: Error stack trace:", e)
            promise.reject("UPDATE_SETTINGS_ERROR", "Failed to update voice settings: ${e.message}", e)
        }
    }
    
    /**
     * Validate current Deepgram settings
     */
    @ReactMethod
    fun validateDeepgramSettings(promise: Promise) {
        try {
            Log.i(TAG, "🎵 VALIDATION: Validating current Deepgram settings...")
            
            val deepgramClient = DeepgramClient.getInstance(reactContext)
            deepgramClient.initialize()
            val validation = deepgramClient.validateConfiguration()
            
            val result = Arguments.createMap().apply {
                putBoolean("isValid", validation.isValid)
                putBoolean("apiKeyPresent", validation.apiKeyPresent)
                putBoolean("apiKeyValid", validation.apiKeyValid)
                putBoolean("networkAvailable", validation.networkAvailable)
                putBoolean("audioSystemReady", validation.audioSystemReady)
                putBoolean("voiceConfigValid", validation.voiceConfigValid)
                
                val issuesArray = Arguments.createArray()
                validation.issues.forEach { issue ->
                    issuesArray.pushString(issue)
                }
                putArray("issues", issuesArray)
            }
            
            Log.i(TAG, "🎵 VALIDATION: Validation complete - isValid: ${validation.isValid}")
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 VALIDATION: ❌ Error validating settings: ${e.message}", e)
            promise.reject("VALIDATION_ERROR", "Failed to validate settings: ${e.message}", e)
        }
    }
    
    /**
     * Test Deepgram TTS independently for debugging
     */
    @ReactMethod
    fun testDeepgramTTS(text: String, promise: Promise) {
        Log.i(TAG, "🎵 DEEPGRAM_TEST: Testing Deepgram TTS with text: '${text.take(50)}...'")
        
        try {
            coroutineScope.launch {
                try {
                    val deepgramClient = DeepgramClient.getInstance(reactContext)
                    deepgramClient.initialize()
                    
                    // First validate configuration
                    val validation = deepgramClient.validateConfiguration()
                    if (!validation.isValid) {
                        val errorMessage = "Deepgram configuration invalid: ${validation.issues.joinToString("; ")}"
                        Log.e(TAG, "🎵 DEEPGRAM_TEST: ❌ $errorMessage")
                        promise.reject("VALIDATION_ERROR", errorMessage)
                        return@launch
                    }
                    
                    Log.i(TAG, "🎵 DEEPGRAM_TEST: Configuration validated, attempting TTS...")
                    
                    // Test connectivity first
                    val connectivityOk = deepgramClient.testDeepgramConnectivity()
                    if (!connectivityOk) {
                        val errorMessage = "Deepgram API not accessible"
                        Log.e(TAG, "🎵 DEEPGRAM_TEST: ❌ $errorMessage")
                        promise.reject("CONNECTIVITY_ERROR", errorMessage)
                        return@launch
                    }
                    
                    Log.i(TAG, "🎵 DEEPGRAM_TEST: Connectivity confirmed, starting TTS...")
                    
                    // Attempt TTS
                    deepgramClient.convertTextToSpeech(text)
                    
                    Log.i(TAG, "🎵 DEEPGRAM_TEST: ✅ Deepgram TTS test completed successfully")
                    promise.resolve(true)
                    
                } catch (e: Exception) {
                    Log.e(TAG, "🎵 DEEPGRAM_TEST: ❌ Test failed: ${e.message}", e)
                    promise.reject("TEST_ERROR", "Deepgram TTS test failed: ${e.message}", e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_TEST: ❌ Error setting up test: ${e.message}", e)
            promise.reject("SETUP_ERROR", "Failed to setup Deepgram test: ${e.message}", e)
        }
    }
    
    /**
     * Run comprehensive diagnostics on Deepgram system
     */
    @ReactMethod
    fun runDeepgramDiagnostics(promise: Promise) {
        Log.i(TAG, "🎵 DIAGNOSTICS: Running comprehensive Deepgram diagnostics...")
        
        try {
            coroutineScope.launch {
                try {
                    val deepgramClient = DeepgramClient.getInstance(reactContext)
                    deepgramClient.initialize()
                    
                    // Run all diagnostic tests
                    val configValidation = deepgramClient.validateConfiguration()
                    val connectivityDiagnostics = deepgramClient.runConnectivityDiagnostics()
                    val audioDiagnostics = deepgramClient.runAudioDiagnostics()
                    
                    // Compile comprehensive results
                    val results = Arguments.createMap().apply {
                        // Configuration validation
                        putMap("configuration", Arguments.createMap().apply {
                            putBoolean("isValid", configValidation.isValid)
                            putBoolean("apiKeyPresent", configValidation.apiKeyPresent)
                            putBoolean("apiKeyValid", configValidation.apiKeyValid)
                            putBoolean("networkAvailable", configValidation.networkAvailable)
                            putBoolean("audioSystemReady", configValidation.audioSystemReady)
                            putBoolean("voiceConfigValid", configValidation.voiceConfigValid)
                            
                            val issuesArray = Arguments.createArray()
                            configValidation.issues.forEach { issue ->
                                issuesArray.pushString(issue)
                            }
                            putArray("issues", issuesArray)
                        })
                        
                        // Connectivity diagnostics
                        putMap("connectivity", connectivityDiagnostics.toWritableMap())
                        
                        // Audio diagnostics
                        putMap("audio", audioDiagnostics.toWritableMap())
                        
                        // Overall summary
                        putMap("summary", Arguments.createMap().apply {
                            putBoolean("deepgramReady", configValidation.isValid)
                            putBoolean("canMakeRequests", connectivityDiagnostics["deepgram_api_accessible"] as? Boolean ?: false)
                            putBoolean("canPlayAudio", audioDiagnostics["mediaplayer_available"] as? Boolean ?: false)
                            
                            val recommendations = Arguments.createArray()
                            
                            if (!configValidation.apiKeyPresent) {
                                recommendations.pushString("Configure Deepgram API key")
                            }
                            if (!(connectivityDiagnostics["basic_connectivity"] as? Boolean ?: false)) {
                                recommendations.pushString("Check internet connection")
                            }
                            if (!(audioDiagnostics["mediaplayer_available"] as? Boolean ?: false)) {
                                recommendations.pushString("Check audio system permissions")
                            }
                            if ((audioDiagnostics["music_volume_percentage"] as? Int ?: 100) == 0) {
                                recommendations.pushString("Increase media volume")
                            }
                            
                            putArray("recommendations", recommendations)
                        })
                        
                        putDouble("timestamp", System.currentTimeMillis().toDouble())
                    }
                    
                    Log.i(TAG, "🎵 DIAGNOSTICS: ✅ Comprehensive diagnostics completed successfully")
                    promise.resolve(results)
                    
                } catch (e: Exception) {
                    Log.e(TAG, "🎵 DIAGNOSTICS: ❌ Diagnostics failed: ${e.message}", e)
                    promise.reject("DIAGNOSTICS_ERROR", "Failed to run diagnostics: ${e.message}", e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DIAGNOSTICS: ❌ Error setting up diagnostics: ${e.message}", e)
            promise.reject("SETUP_ERROR", "Failed to setup diagnostics: ${e.message}", e)
        }
    }
    
    /**
     * Reset and reinitialize Deepgram client (for troubleshooting)
     */
    @ReactMethod
    fun resetDeepgramClient(promise: Promise) {
        try {
            Log.i(TAG, "🎵 RESET: Resetting Deepgram client...")
            
            // Release existing client
            deepgramClient?.release()
            deepgramClient = null
            
            // Create and initialize new client
            val newClient = DeepgramClient.getInstance(reactContext)
            newClient.initialize()
            deepgramClient = newClient
            
            // Validate the new client
            val validation = newClient.validateConfiguration()
            
            val result = Arguments.createMap().apply {
                putBoolean("success", true)
                putString("message", "Deepgram client reset successfully")
                putBoolean("isValid", validation.isValid)
                
                if (!validation.isValid) {
                    val issuesArray = Arguments.createArray()
                    validation.issues.forEach { issue ->
                        issuesArray.pushString(issue)
                    }
                    putArray("issues", issuesArray)
                }
            }
            
            Log.i(TAG, "🎵 RESET: ✅ Deepgram client reset completed (valid: ${validation.isValid})")
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎵 RESET: ❌ Error resetting Deepgram client: ${e.message}", e)
            promise.reject("RESET_ERROR", "Failed to reset Deepgram client: ${e.message}", e)
        }
    }
    
    /**
     * Set Deepgram enabled state (following WakeWordModule pattern)
     */
    @ReactMethod
    fun setDeepgramEnabled(enabled: Boolean, promise: Promise) {
        Log.i(TAG, "🎵 DEEPGRAM_ENABLED: setDeepgramEnabled called with: $enabled")
        try {
            val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            
            if (enabled) {
                // Validate configuration before enabling
                Log.i(TAG, "🎵 DEEPGRAM_ENABLED: Deepgram being enabled, validating configuration...")
                        val deepgramClient = DeepgramClient.getInstance(reactContext)
        deepgramClient.initialize()
        val validation = deepgramClient.validateConfiguration()
                
                if (!validation.isValid) {
                    val errorMessage = "Cannot enable Deepgram: ${validation.issues.joinToString("; ")}"
                    Log.e(TAG, "🎵 DEEPGRAM_ENABLED: ❌ Validation failed: $errorMessage")
                    promise.reject("VALIDATION_ERROR", errorMessage)
                    return
                }
                Log.i(TAG, "🎵 DEEPGRAM_ENABLED: ✅ Deepgram configuration validated successfully")
            }
            
            deepgramPrefs.edit().putBoolean("deepgram_enabled", enabled).apply()
            Log.i(TAG, "🎵 DEEPGRAM_ENABLED: ✅ Deepgram enabled state saved: $enabled")
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_ENABLED: ❌ Error setting Deepgram enabled state: ${e.message}", e)
            promise.reject("SET_DEEPGRAM_ENABLED_ERROR", "Failed to set Deepgram enabled state: ${e.message}", e)
        }
    }
    
    /**
     * Get Deepgram enabled state (following WakeWordModule pattern)
     */
    @ReactMethod
    fun getDeepgramEnabled(promise: Promise) {
        Log.d(TAG, "🎵 DEEPGRAM_ENABLED: getDeepgramEnabled called")
        try {
            val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val enabled = deepgramPrefs.getBoolean("deepgram_enabled", false)
            
            Log.i(TAG, "🎵 DEEPGRAM_ENABLED: Current Deepgram enabled state: $enabled")
            
            val result = Arguments.createMap()
            result.putBoolean("enabled", enabled)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "🎵 DEEPGRAM_ENABLED: ❌ Error getting Deepgram enabled state: ${e.message}", e)
            promise.reject("GET_DEEPGRAM_ENABLED_ERROR", "Failed to get Deepgram enabled state: ${e.message}", e)
        }
    }

    /**
     * Get current TTS status and configuration
     */
    @ReactMethod
    fun getTTSStatus(promise: Promise) {
        try {
            val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val deepgramEnabled = deepgramPrefs.getBoolean("deepgram_enabled", false)
            val selectedVoice = deepgramPrefs.getString("selected_voice", DeepgramClient.DEFAULT_VOICE)
            
            val result = Arguments.createMap().apply {
                putBoolean("deepgramEnabled", deepgramEnabled)
                putString("selectedVoice", selectedVoice)
                putBoolean("deepgramClientInitialized", deepgramClient != null)
                putString("currentVoiceState", voiceManager.voiceState.value.toString())
                
                // Available voices
                val voicesArray = Arguments.createArray()
                DeepgramClient.AVAILABLE_VOICES.keys.forEach { voice ->
                    voicesArray.pushString(voice)
                }
                putArray("availableVoices", voicesArray)
                
                putDouble("timestamp", System.currentTimeMillis().toDouble())
            }
            
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "Error getting TTS status: ${e.message}", e)
            promise.reject("STATUS_ERROR", "Failed to get TTS status: ${e.message}", e)
        }
    }
} 