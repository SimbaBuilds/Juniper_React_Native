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
                
                // Set timeout for the request
                Handler(Looper.getMainLooper()).postDelayed({
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
                        speechSuccessful = speakWithDeepgram(text)
                        
                        if (!speechSuccessful) {
                            Log.w(TAG, "🎵 TTS_PRIORITY: ⚠️ Deepgram TTS failed, falling back to System TTS")
                            speechSuccessful = speakWithSystemTTS(text)
                            if (speechSuccessful) {
                                Log.i(TAG, "🎵 TTS_PRIORITY: ✅ System TTS fallback successful")
                            } else {
                                Log.e(TAG, "🎵 TTS_PRIORITY: ❌ Both Deepgram and System TTS failed")
                            }
                        } else {
                            Log.i(TAG, "🎵 TTS_PRIORITY: ✅ Deepgram TTS successful")
                        }
                    } else {
                        Log.i(TAG, "🎵 TTS_PRIORITY: 🔊 Using System TTS (Deepgram disabled)")
                        speechSuccessful = speakWithSystemTTS(text)
                        if (speechSuccessful) {
                            Log.i(TAG, "🎵 TTS_PRIORITY: ✅ System TTS successful")
                        } else {
                            Log.e(TAG, "🎵 TTS_PRIORITY: ❌ System TTS failed")
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
    
    /**
     * Speak using Deepgram TTS
     */
    private suspend fun speakWithDeepgram(text: String): Boolean {
        return suspendCancellableCoroutine { continuation ->
            try {
                Log.d(TAG, "🎵 DEEPGRAM_TTS: Attempting to speak with Deepgram: ${text.take(50)}...")
                val deepgramClient = DeepgramClient(reactContext)
                deepgramClient.initialize()
                
                coroutineScope.launch {
                    try {
                        // Convert text to speech using Deepgram (this includes playing the audio)
                        deepgramClient.convertTextToSpeech(text)
                        
                        // TTS completed, reset to idle state
                        voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                        Log.d(TAG, "🎵 DEEPGRAM_TTS: ✅ Deepgram TTS completed successfully")
                        
                        if (continuation.isActive) {
                            continuation.resume(true)
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Error with Deepgram TTS: ${e.message}", e)
                        if (continuation.isActive) {
                            continuation.resume(false)
                        }
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "🎵 DEEPGRAM_TTS: ❌ Error initializing Deepgram TTS: ${e.message}", e)
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
                Log.i(TAG, "🟢 NATIVE: Found pending callback for requestId: $requestId")
                callback(response)
                Log.i(TAG, "🟢 NATIVE: ✅ Callback executed successfully")
                promise.resolve(true)
            } ?: run {
                Log.w(TAG, "🟢 NATIVE: No pending callback found for requestId: $requestId")
                // Still speak the response even if no callback found
                coroutineScope.launch {
                    try {
                        Log.i(TAG, "🟢 NATIVE: Speaking response via TTS anyway")
                        val speechResult = speakWithSystemTTS(response)
                        Log.i(TAG, "🟢 NATIVE: TTS completed with result: $speechResult")
                        promise.resolve(speechResult)
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
                    val deepgramClient = DeepgramClient(reactApplicationContext)
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
     * Update voice settings from React Native
     */
    @ReactMethod
    fun updateVoiceSettings(
        deepgramEnabled: Boolean? = null,
        selectedDeepgramVoice: String? = null,
        promise: Promise
    ) {
        try {
            Log.i(TAG, "🎵 VOICE_SETTINGS: ========== Settings Update ==========")
            Log.i(TAG, "🎵 VOICE_SETTINGS: Updating native voice settings")
            Log.i(TAG, "🎵 VOICE_SETTINGS: deepgramEnabled: $deepgramEnabled")
            Log.i(TAG, "🎵 VOICE_SETTINGS: selectedDeepgramVoice: $selectedDeepgramVoice")
            
            val deepgramPrefs = reactContext.getSharedPreferences("deepgram_prefs", Context.MODE_PRIVATE)
            val editor = deepgramPrefs.edit()
            
            deepgramEnabled?.let { 
                editor.putBoolean("deepgram_enabled", it)
                Log.i(TAG, "🎵 VOICE_SETTINGS: Set deepgram_enabled to: $it")
            }
            
            selectedDeepgramVoice?.let { 
                editor.putString("selected_voice", it) 
                Log.i(TAG, "🎵 VOICE_SETTINGS: Set selected_voice to: $it")
            }
            
            editor.apply()
            Log.i(TAG, "🎵 VOICE_SETTINGS: ✅ Native voice settings updated successfully")
            Log.i(TAG, "🎵 VOICE_SETTINGS: ================================================")
            
            promise.resolve(true)
        } catch (e: Exception) {
            Log.e(TAG, "🎵 VOICE_SETTINGS: ❌ Error updating voice settings: ${e.message}", e)
            promise.reject("UPDATE_SETTINGS_ERROR", "Failed to update voice settings: ${e.message}", e)
        }
    }
} 