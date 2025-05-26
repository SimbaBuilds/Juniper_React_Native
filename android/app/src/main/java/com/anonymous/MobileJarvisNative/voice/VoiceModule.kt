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
import com.anonymous.MobileJarvisNative.utils.Constants
import android.os.Handler
import android.os.Looper
import com.anonymous.MobileJarvisNative.utils.TextToSpeechManager

/**
 * Bridge module for exposing Voice functionality to React Native
 */
class VoiceModule(private val reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val TAG = "VoiceModule"
    private val voiceManager = VoiceManager.getInstance()
    private val coroutineScope = CoroutineScope(Dispatchers.Main)

    init {
        voiceManager.initialize(reactContext)
        
        // Set up API callback for processing text
        voiceManager.setReactNativeApiCallback { text, onResult ->
            processTextWithReactNative(text, onResult)
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
     * Speak a response using TTS (Deepgram first, then system TTS fallback)
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
                    
                    var speechSuccessful = false
                    
                    // Try Deepgram TTS first
                    try {
                        Log.i(TAG, "Attempting Deepgram TTS...")
                        val deepgramClient = DeepgramClient(reactContext)
                        deepgramClient.initialize()
                        deepgramClient.speak(text)
                        speechSuccessful = true
                        Log.i(TAG, "Deepgram TTS successful")
                    } catch (deepgramError: Exception) {
                        Log.w(TAG, "Deepgram TTS failed: ${deepgramError.message}, falling back to system TTS")
                        Log.w(TAG, "Deepgram error details: ${deepgramError.javaClass.simpleName}")
                        
                        // Fall back to system TTS - this is the critical section that wasn't being reached
                        Log.i(TAG, "Starting system TTS fallback...")
                        
                        try {
                            // Check if TextToSpeechManager is already initialized
                            if (TextToSpeechManager.isInitialized()) {
                                Log.i(TAG, "TextToSpeechManager already initialized, using directly")
                                
                                // Use a simple callback approach instead of suspendable coroutine
                                var ttsCompleted = false
                                TextToSpeechManager.speak(text) {
                                    Log.i(TAG, "System TTS completed successfully")
                                    ttsCompleted = true
                                    speechSuccessful = true
                                }
                                
                                // Wait a moment to see if TTS started successfully
                                kotlinx.coroutines.delay(100)
                                
                                if (TextToSpeechManager.isSpeaking()) {
                                    Log.i(TAG, "System TTS is now speaking")
                                    speechSuccessful = true
                                } else {
                                    Log.e(TAG, "System TTS failed to start speaking")
                                    speechSuccessful = false
                                }
                            } else {
                                Log.i(TAG, "TextToSpeechManager not initialized, initializing now...")
                                
                                // Initialize TextToSpeechManager with callback
                                var initCompleted = false
                                var initSuccess = false
                                
                                TextToSpeechManager.initialize(reactContext) { isInitialized ->
                                    Log.i(TAG, "TextToSpeechManager initialization completed: $isInitialized")
                                    initCompleted = true
                                    initSuccess = isInitialized
                                    
                                    if (isInitialized) {
                                        Log.i(TAG, "Starting TTS after successful initialization")
                                        TextToSpeechManager.speak(text) {
                                            Log.i(TAG, "System TTS completed after initialization")
                                            speechSuccessful = true
                                        }
                                    } else {
                                        Log.e(TAG, "TextToSpeechManager initialization failed")
                                        speechSuccessful = false
                                    }
                                }
                                
                                // Wait for initialization to complete (with timeout)
                                var waitTime = 0
                                while (!initCompleted && waitTime < 3000) {
                                    kotlinx.coroutines.delay(100)
                                    waitTime += 100
                                }
                                
                                if (!initCompleted) {
                                    Log.e(TAG, "TextToSpeechManager initialization timed out")
                                    speechSuccessful = false
                                } else if (initSuccess) {
                                    // Give TTS a moment to start
                                    kotlinx.coroutines.delay(200)
                                    if (TextToSpeechManager.isSpeaking()) {
                                        Log.i(TAG, "System TTS is speaking after initialization")
                                        speechSuccessful = true
                                    } else {
                                        Log.w(TAG, "System TTS not speaking after initialization, but considering successful")
                                        speechSuccessful = true // Consider it successful if init worked
                                    }
                                }
                            }
                        } catch (systemTtsError: Exception) {
                            Log.e(TAG, "System TTS also failed: ${systemTtsError.message}", systemTtsError)
                            speechSuccessful = false
                        }
                    }
                    
                    Log.i(TAG, "TTS process completed. Success: $speechSuccessful")
                    
                    if (speechSuccessful) {
                        Log.i(TAG, "Speech completed successfully, transitioning to LISTENING")
                        
                        // Wait for TTS to actually complete before transitioning
                        var waitTime = 0
                        while (TextToSpeechManager.isSpeaking() && waitTime < 10000) {
                            kotlinx.coroutines.delay(500)
                            waitTime += 500
                            Log.d(TAG, "Waiting for TTS to complete... ($waitTime ms)")
                        }
                        
                        Log.i(TAG, "TTS playback finished, transitioning to LISTENING state")
                        
                        // Transition to LISTENING state
                        voiceManager.updateState(VoiceManager.VoiceState.LISTENING)
                        
                        // Add delay before starting listening
                        kotlinx.coroutines.delay(500)
                        
                        Log.i(TAG, "AUTO-RESTART: Starting listening after speech")
                        try {
                            voiceManager.startListening()
                            Log.i(TAG, "AUTO-RESTART: Successfully started listening")
                        } catch (startError: Exception) {
                            Log.e(TAG, "AUTO-RESTART: Failed to start listening", startError)
                            // Try one more time
                            kotlinx.coroutines.delay(500)
                            try {
                                Log.i(TAG, "AUTO-RESTART: Retrying start listening")
                                voiceManager.startListening()
                                Log.i(TAG, "AUTO-RESTART: Successfully started listening on retry")
                            } catch (retryError: Exception) {
                                Log.e(TAG, "AUTO-RESTART: Failed to start listening on retry", retryError)
                                Log.i(TAG, "Setting voice state to IDLE after failed restarts")
                                voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                            }
                        }
                    } else {
                        Log.e(TAG, "All TTS methods failed")
                        voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                    }
                    
                    promise.resolve(speechSuccessful)
                } catch (e: Exception) {
                    Log.e(TAG, "Unexpected error in speakResponse coroutine", e)
                    try {
                        Log.i(TAG, "Setting voice state to IDLE after unexpected error")
                        voiceManager.updateState(VoiceManager.VoiceState.IDLE)
                    } catch (stateError: Exception) {
                        Log.e(TAG, "Failed to update state after error", stateError)
                    }
                    promise.reject("ERR_TTS", e.message, e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error in speakResponse outer try-catch", e)
            promise.reject("ERR_TTS", e.message, e)
        }
    }

    /**
     * Process text using React Native API with authentication (called from native code)
     */
    @ReactMethod
    fun processTextFromNative(text: String, promise: Promise) {
        Log.d(TAG, "processTextFromNative called with: $text")
        try {
            // Emit event to React Native to process the text
            val params = Arguments.createMap()
            params.putString("text", text)
            params.putString("requestId", System.currentTimeMillis().toString())
            params.putDouble("timestamp", System.currentTimeMillis().toDouble())
            
            reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("processTextFromNative", params)
                
            Log.d(TAG, "Sent processTextFromNative event to React Native")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "Error in processTextFromNative", e)
            promise.reject("PROCESS_TEXT_ERROR", e.message, e)
        }
    }
    
    /**
     * Process text using React Native API with authentication
     */
    private fun processTextWithReactNative(text: String, onResult: (String) -> Unit) {
        Log.d(TAG, "Processing text with React Native API: $text")
        
        try {
            // Store the callback for later use
            val requestId = System.currentTimeMillis().toString()
            pendingApiCallbacks[requestId] = onResult
            
            // Emit event to React Native
            val params = Arguments.createMap()
            params.putString("text", text)
            params.putString("requestId", requestId)
            params.putDouble("timestamp", System.currentTimeMillis().toDouble())
            
            reactContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("processTextFromNative", params)
                
            Log.d(TAG, "Sent processTextFromNative event to React Native with requestId: $requestId")
            
            // Set timeout
            Handler(Looper.getMainLooper()).postDelayed({
                pendingApiCallbacks.remove(requestId)?.let { callback ->
                    Log.w(TAG, "Timeout for request: $requestId")
                    callback("I'm sorry, there was a timeout processing your request. Please try again.")
                }
            }, 30000)
            
        } catch (e: Exception) {
            Log.e(TAG, "Error in processTextWithReactNative", e)
            onResult("Error processing request: ${e.message}")
        }
    }
    
    // Store pending callbacks
    private val pendingApiCallbacks = mutableMapOf<String, (String) -> Unit>()
    
    /**
     * Handle API response from React Native
     */
    @ReactMethod
    fun handleNativeApiResponse(requestId: String, response: String, promise: Promise) {
        Log.d(TAG, "handleNativeApiResponse called for request: $requestId")
        try {
            pendingApiCallbacks.remove(requestId)?.let { callback ->
                callback(response)
                promise.resolve(true)
            } ?: run {
                Log.w(TAG, "No pending callback found for request ID: $requestId")
                promise.resolve(false)
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error handling native API response", e)
            promise.reject("HANDLE_RESPONSE_ERROR", e.message, e)
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
} 