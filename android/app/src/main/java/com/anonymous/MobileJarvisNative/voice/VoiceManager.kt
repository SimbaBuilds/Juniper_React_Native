package com.anonymous.MobileJarvisNative.voice

import android.content.Context
import android.os.Handler
import android.os.Looper
import android.speech.RecognitionListener
import android.speech.RecognizerIntent
import android.speech.SpeechRecognizer
import android.util.Log
import android.content.Intent
import android.os.Bundle
import com.anonymous.MobileJarvisNative.utils.TextToSpeechManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.delay
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import org.json.JSONObject
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.anonymous.MobileJarvisNative.utils.Constants
import com.anonymous.MobileJarvisNative.ConfigManager
import java.io.File
import java.io.FileOutputStream
import java.io.OutputStream
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.WritableMap

/**
 * VoiceManager - Unified manager for all voice-related functionality
 * 
 * This class serves as the central coordinator for:
 * - Wake word detection
 * - Speech recognition
 * - Voice processing (Modular Services)
 * - Text-to-speech output
 */
class VoiceManager private constructor() {
    private val TAG = "VoiceManager"
    
    // Voice state management
    private val _voiceState = MutableStateFlow<VoiceState>(VoiceState.IDLE)
    val voiceState: StateFlow<VoiceState> = _voiceState.asStateFlow()
    
    // Service status tracking
    private var isSpeechRecognitionInitialized = false
    
    // Voice processor strategy
    private lateinit var voiceProcessor: VoiceProcessor
    
    // State tracking
    private var lastWakeWordTimestamp = 0L
    private var lastProcessedText: String = ""
    private var noSpeechRetryCount = 0
    
    // Speech Recognition properties
    private var speechRecognizer: SpeechRecognizer? = null
    private var isListening = false
    private var lastRecognitionStartTime = 0L
    private var speechRecognitionRetryCount = 0
    
    // Config manager
    private lateinit var configManager: ConfigManager
    
    // Callback registry
    private val stateChangeCallbacks = mutableListOf<(VoiceState) -> Unit>()
    
    // Tool handlers
    private val toolHandlers = mutableMapOf<String, (JSONObject) -> String>()
    
    // Coroutine scope
    private val coroutineScope = CoroutineScope(Dispatchers.Main)

    // Context reference
    private lateinit var context: Context
    
    // Additional properties for Whisper client and Deepgram
    private lateinit var whisperClient: WhisperClient
    private lateinit var deepgramClient: DeepgramClient

    // New API callback
    private var reactNativeApiCallback: ((String, (String) -> Unit) -> Unit)? = null
    // Audio focus request ID for speech recognition
    private var speechRecognitionAudioFocusRequestId: String? = null

    companion object {
        @Volatile
        private var instance: VoiceManager? = null
        
        // Constants
        private const val RECOGNITION_DEBOUNCE_MS = 3000L
        private const val MAX_SPEECH_RECOGNITION_RETRY_COUNT = 1
        private var MAX_NO_SPEECH_RETRIES = 1 // Will be overridden from config
        
        fun getInstance(): VoiceManager {
            return instance ?: synchronized(this) {
                instance ?: VoiceManager().also { instance = it }
            }
        }
    }
    
    /**
     * Initialize with context
     */
    fun initialize(context: Context) {
        this.context = context
        
        // Initialize ConfigManager
        configManager = ConfigManager.getInstance()
        
        // Update constants from config
        MAX_NO_SPEECH_RETRIES = configManager.getMaxNoSpeechRetries()
        
        // Initialize centralized AudioManager
        Log.d(TAG, "Initializing centralized AudioManager")
        com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().initialize(context)
        
        // Initialize TextToSpeechManager early to ensure it's ready
        Log.d(TAG, "Initializing TextToSpeechManager")
        TextToSpeechManager.initialize(context) { isInitialized ->
            Log.d(TAG, "TextToSpeechManager initialization result: $isInitialized")
        }
        
        // Initialize speech recognition
        initializeSpeechRecognition()
        Log.d(TAG, "Speech recognition initialized: $isSpeechRecognitionInitialized")
        
        // Initialize voice processor
        initializeVoiceProcessor()
        
        // Initialize Whisper client
        whisperClient = WhisperClient(context)
        
        // Initialize Deepgram client for TTS
        deepgramClient = DeepgramClient.getInstance(context)
    }
    
    /**
     * Initialize required services (deprecated - kept for backward compatibility)
     */
    fun initialize() {
        Log.i(TAG, "Initializing VoiceManager services via deprecated method")
        // This method is kept for backward compatibility but should not be called directly
    }
    
    /**
     * Initialize speech recognition - MUST be called on main thread
     */
    private fun initializeSpeechRecognition() {
        try {
            // Ensure we're on the main thread for SpeechRecognizer operations
            if (Looper.myLooper() != Looper.getMainLooper()) {
                Log.w(TAG, "initializeSpeechRecognition called from background thread, switching to main thread")
                Handler(Looper.getMainLooper()).post {
                    initializeSpeechRecognition()
                }
                return
            }
            
            Log.d(TAG, "Initializing SpeechRecognizer on main thread")
            
            if (SpeechRecognizer.isRecognitionAvailable(context)) {
                speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context)
                // Set the recognition listener
                speechRecognizer?.setRecognitionListener(createRecognitionListener())
                isSpeechRecognitionInitialized = true
                Log.d(TAG, "Speech recognizer initialized successfully")
            } else {
                Log.e(TAG, "Speech recognition not available on this device")
                isSpeechRecognitionInitialized = false
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing speech recognizer", e)
            isSpeechRecognitionInitialized = false
        }
    }
    
    /**
     * Initialize the voice processor
     * 
     * @return True if processor was initialized successfully
     */
    private fun initializeVoiceProcessor(): Boolean {
        Log.i(TAG, "Initializing voice processor")
        
        try {
            // Create ModularVoiceProcessor
            voiceProcessor = ModularVoiceProcessor(context)
            
            // Set API callback for React Native communication
            voiceProcessor.setApiCallback { text, onResult ->
                // Use the new direct method via the existing callback
                Log.d(TAG, "🔵 VOICE_MANAGER: Processing text via new API flow: $text")
                reactNativeApiCallback?.invoke(text, onResult) ?: run {
                    Log.e(TAG, "🔵 VOICE_MANAGER: No React Native API callback set")
                    onResult("Error: React Native API not available")
                }
            }
            
            // Initialize the processor
            voiceProcessor.initialize()
            
            // Start the processor if we're currently in a non-idle state
            if (_voiceState.value != VoiceState.IDLE) {
                voiceProcessor.start()
            }
            
            return true
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing voice processor", e)
            return false
        }
    }
    
    /**
     * Called when the wake word is detected.
     * Returns true if the wake word detection was processed.
     */
    fun onWakeWordDetected(timestamp: Long): Boolean {
        // Only process wake word if we're in IDLE state
        if (_voiceState.value !is VoiceState.IDLE) {
            Log.d(TAG, "Ignoring wake word detection - conversation already in progress")
            return false
        }
        
        lastWakeWordTimestamp = timestamp
        Log.i(TAG, "Wake word detected, stopping wake word detection but keeping listening on...")
        
        try {
            // Update state - this will automatically pause wake word detection
            updateState(VoiceState.WAKE_WORD_DETECTED)
            
            // Explicitly tell the WakeWordService to pause but keep mic active
            val intent = Intent("com.anonymous.MobileJarvisNative.PAUSE_WAKE_WORD_KEEP_LISTENING")
            context.sendBroadcast(intent)
            Log.d(TAG, "Sent broadcast to pause wake word detection but keep mic active")
            
            // Initialize Whisper client for speech recognition
            initializeWhisperClient()
            
            // Prepare Deepgram for future use without blocking current flow
            prepareDeepgramForFutureUse()
            
            // Start listening for speech - MUST be on main thread
            Handler(Looper.getMainLooper()).post {
                Log.d(TAG, "Starting speech recognition on main thread after wake word")
                startListening()
            }
            
            return true
        } catch (e: Exception) {
            Log.e(TAG, "Error starting voice processor after wake word: ${e.message}", e)
            showError("Unable to start voice recognition: ${e.message}")
            resetToIdle()
            return false
        }
    }
    
    /**
     * Called when the wake word is detected (simplified version).
     * Returns true if the wake word detection was processed.
     */
    fun onWakeWordDetected(): Boolean {
        return onWakeWordDetected(System.currentTimeMillis())
    }
    
    /**
     * Initialize Whisper client for speech recognition
     */
    private fun initializeWhisperClient() {
        Log.i(TAG, "Initializing OpenAI Whisper client")
        try {
            whisperClient.initialize()
            Log.d(TAG, "Whisper client initialized successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing Whisper client: ${e.message}", e)
            throw e
        }
    }
    
    /**
     * Prepare Deepgram for future use without blocking current flow
     */
    private fun prepareDeepgramForFutureUse() {
        coroutineScope.launch {
            try {
                // Initialize Deepgram client if needed
                if (!::deepgramClient.isInitialized) {
                    deepgramClient = DeepgramClient.getInstance(context)
                }
                deepgramClient.initialize()
                Log.d(TAG, "Deepgram client initialized for future use")
            } catch (e: Exception) {
                Log.e(TAG, "Error initializing Deepgram for future use: ${e.message}", e)
            }
        }
    }
    
    /**
     * Start listening for speech input - MUST be called on main thread
     */
    fun startListening() {
        Log.d(TAG, "startListening() called. Attempting to start speech recognition...")
        
        // Ensure we're on the main thread for SpeechRecognizer operations
        if (Looper.myLooper() != Looper.getMainLooper()) {
            Log.w(TAG, "startListening called from background thread, switching to main thread")
            Handler(Looper.getMainLooper()).post {
                startListening()
            }
            return
        }
        
        // Check if we're already actively listening to avoid conflicts
        // Only skip if the speech recognizer is actually listening (isListening=true)
        if (isListening) {
            Log.d(TAG, "Already actively listening (isListening=$isListening), skipping startListening")
            return
        }
        
        // Always ensure wake word detection is paused when actively listening
        try {
            val intent = Intent("com.anonymous.MobileJarvisNative.PAUSE_WAKE_WORD_KEEP_LISTENING")
            context.sendBroadcast(intent)
            Log.d(TAG, "Sent broadcast to pause wake word detection during listening")
        } catch (e: Exception) {
            Log.e(TAG, "Error sending pause wake word broadcast: ${e.message}", e)
        }
        
        // Check if speechRecognizer is still valid and reinitialize if needed
        if (speechRecognizer == null || !isSpeechRecognitionInitialized) {
            Log.w(TAG, "Speech recognizer was null or not initialized, reinitializing...")
            initializeSpeechRecognition()
            
            // After reinitializing, wait a moment and try again
            Handler(Looper.getMainLooper()).postDelayed({
                if (speechRecognizer != null && isSpeechRecognitionInitialized) {
                    startActualListening()
                } else {
                    Log.e(TAG, "Failed to reinitialize speech recognizer")
                    _voiceState.value = VoiceState.ERROR("Failed to initialize speech recognition")
                }
            }, 100)
            return
        }
        
        startActualListening()
    }
    
    /**
     * Actually start the speech recognition (helper method)
     */
    private fun startActualListening() {
        try {
            Log.i(TAG, "🎵 SPEECH_RECOGNITION: Requesting HIGH PRIORITY audio focus for speech recognition")
            val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val requestId = "speech_recognition_${System.currentTimeMillis()}"
            
            val focusGranted = audioManager.requestAudioFocus(
                requestType = com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION,
                requestId = requestId,
                onFocusGained = { 
                    Log.i(TAG, "🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus gained for speech recognition") 
                },
                onFocusLost = {
                    Log.w(TAG, "🎵 SPEECH_RECOGNITION: Audio focus lost for speech recognition")
                    // TROUBLESHOOTING STEP 1: Only set error state for permanent loss
                    // Check if this is a permanent loss or if we're already in an error state
                    if (_voiceState.value !is VoiceState.ERROR && audioManager.audioFocusState.value == com.anonymous.MobileJarvisNative.utils.AudioManager.AudioFocusState.LOST) {
                        Log.w(TAG, "🎵 SPEECH_RECOGNITION: Permanent audio focus loss - stopping speech recognition")
                        stopListening()
                    } else {
                        Log.d(TAG, "🎵 SPEECH_RECOGNITION: Transient audio focus loss - will wait for recovery")
                    }
                },
                onFocusDucked = { 
                    Log.d(TAG, "🎵 SPEECH_RECOGNITION: Audio focus ducked for speech recognition - continuing with lower priority") 
                }
            )
            if (!focusGranted) {
                Log.e(TAG, "🎵 SPEECH_RECOGNITION: Failed to gain HIGH PRIORITY audio focus for speech recognition")
                _voiceState.value = VoiceState.ERROR("Failed to gain audio focus")
                return
            }

            // Store the request ID for proper cleanup
            speechRecognitionAudioFocusRequestId = requestId

            Log.i(TAG, "🎵 SPEECH_RECOGNITION: HIGH PRIORITY audio focus granted - starting SpeechRecognizer on main thread")
            updateState(VoiceState.LISTENING)
            speechRecognizer?.startListening(createRecognizerIntent())
            Log.i(TAG, "SpeechRecognizer started listening.")
            lastRecognitionStartTime = System.currentTimeMillis()
        } catch (e: Exception) {
            Log.e(TAG, "Error starting speech recognition: ${e.message}", e)
            isListening = false
            releaseSpeechRecognitionAudioFocus()
            _voiceState.value = VoiceState.ERROR("Failed to start speech recognition: ${e.message}")
        }
    }
    
    /**
     * Stop listening for speech input
     */
    fun stopListening() {
        if (isListening) {
            Log.d(TAG, "stopListening() called. Stopping speech recognition...")
            isListening = false
            _voiceState.value = VoiceState.IDLE
            speechRecognizer?.stopListening()
            Log.i(TAG, "SpeechRecognizer stopped listening.")
            releaseSpeechRecognitionAudioFocus()
        }
    }
    
    /**
     * Create speech recognizer intent
     */
    private fun createRecognizerIntent(): Intent {
        return Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            putExtra(RecognizerIntent.EXTRA_LANGUAGE, "en-US")
            putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
            putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1)
            
            // Explicitly set audio source to ensure microphone is used
            putExtra("android.speech.extra.AUDIO_SOURCE", android.media.MediaRecorder.AudioSource.MIC)
            
            // Force online recognition for better accuracy
            putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, false)
            putExtra(RecognizerIntent.EXTRA_ENABLE_BIASING_DEVICE_CONTEXT, true)
            putExtra(RecognizerIntent.EXTRA_ENABLE_LANGUAGE_DETECTION, true)
            
            // Additional parameters to improve recognition
            putExtra(RecognizerIntent.EXTRA_CONFIDENCE_SCORES, true)
            putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, 5000L)
            putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, 100L)
            
            // Get timing parameters from ConfigManager
            val minLengthMs = configManager.getSpeechRecognitionMinimumLengthMs()
            val completeSilenceMs = configManager.getSpeechRecognitionCompleteSilenceMs()
            val possibleSilenceMs = configManager.getSpeechRecognitionPossibleSilenceMs()
            
            // Log the values regardless of whether they'll be used
            Log.d(TAG, "Speech recognition parameters: minLength=$minLengthMs, " +
                      "completeSilence=$completeSilenceMs, possibleSilence=$possibleSilenceMs")
            
            // Only apply custom parameters if explicitly enabled in config
            if (configManager.useCustomRecognizerParams()) {
                Log.i(TAG, "Applying custom timing parameters to SpeechRecognizer")
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, minLengthMs)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, completeSilenceMs)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, possibleSilenceMs)
            } else {
                Log.i(TAG, "Using Android default timing parameters for SpeechRecognizer")
                // Use Android defaults for RecognizerIntent parameters, but still use our
                // custom timing values for the rest of the voice processing pipeline
            }
        }
    }
    
    /**
     * Create a RecognitionListener instance
     */
    private fun createRecognitionListener(): RecognitionListener {
        return object : RecognitionListener {
            override fun onReadyForSpeech(params: Bundle?) {
                Log.d(TAG, "Ready for speech")
                isListening = true
                speechRecognitionRetryCount = 0 // Reset retry count on successful start
            }
            
            override fun onBeginningOfSpeech() {
                Log.d(TAG, "Beginning of speech")
            }
            
            override fun onRmsChanged(rmsdB: Float) {
                // Log RMS changes to verify audio input
                if (rmsdB > 0) {
                }
            }
            
            override fun onBufferReceived(buffer: ByteArray?) {
                // Not used
            }
            
            override fun onEndOfSpeech() {
                Log.d(TAG, "End of speech")
                isListening = false
            }
            
            override fun onError(error: Int) {
                val errorMessage = getSpeechRecognitionErrorMessage(error)
                Log.e(TAG, "Speech recognition error: $errorMessage")
                
                // Reset state flags
                isListening = false
                
                // Critical: Don't retry if we're already processing or responding
                val currentState = _voiceState.value
                if (currentState == VoiceState.PROCESSING || 
                    currentState is VoiceState.RESPONDING) {
                    Log.d(TAG, "Ignoring speech recognition error during PROCESSING/RESPONDING state")
                    releaseSpeechRecognitionAudioFocus()
                    return
                }
                
                // Handle permission error by retrying
                if (error == SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS && 
                   speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    speechRecognitionRetryCount++
                    Log.w(TAG, "Permission error, will retry speech recognition (attempt $speechRecognitionRetryCount)")
                    
                    // Ensure retry happens on main thread
                    Handler(Looper.getMainLooper()).postDelayed({
                        Log.d(TAG, "Retrying speech recognition on main thread after permission error")
                        startListening()
                    }, 1000)
                    return
                }
                
                // Special handling for "No speech detected" errors
                if (error == SpeechRecognizer.ERROR_NO_MATCH || error == SpeechRecognizer.ERROR_SPEECH_TIMEOUT) {
                    // Release audio focus before retrying to prevent conflicts
                    Log.d(TAG, "🎵 SPEECH_RECOGNITION: Releasing audio focus before retry")
                    releaseSpeechRecognitionAudioFocus()
                    
                    // Reset speech recognition retry count for no-speech errors
                    speechRecognitionRetryCount = 0
                    
                    handleNoSpeechDetected()
                    return
                }
                
                // For other errors, increment retry count and retry if possible
                speechRecognitionRetryCount++
                if (speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    Log.w(TAG, "Speech recognition error, will retry (attempt $speechRecognitionRetryCount)")
                    Handler(Looper.getMainLooper()).postDelayed({
                        Log.d(TAG, "Retrying speech recognition on main thread after error")
                        startListening()
                    }, 1000)
                    return
                }
                
                // Otherwise update state to error
            }
            
            override fun onResults(results: Bundle?) {
                isListening = false
                
                val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                Log.d(TAG, "Speech recognition results received: ${matches?.size ?: 0} matches")
                matches?.forEachIndexed { index, match ->
                    Log.d(TAG, "Match $index: '$match'")
                }
                
                val text = matches?.firstOrNull() ?: ""
                
                if (text.isNotBlank()) {
                    Log.i(TAG, "Speech recognized: '$text'")
                    onSpeechRecognized(text)
                } else {
                    Log.w(TAG, "Empty or no speech recognition results")
                    handleNoSpeechDetected()
                }
            }
            
            override fun onPartialResults(partialResults: Bundle?) {
                val matches = partialResults?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                if (!matches.isNullOrEmpty()) {
                    Log.d(TAG, "Partial results: '${matches[0]}'")
                }
            }
            
            override fun onEvent(eventType: Int, params: Bundle?) {
                // Not used in this implementation
            }
        }
    }
    
    /**
     * Get a string description of speech recognition error code
     */
    private fun getSpeechRecognitionErrorMessage(errorCode: Int): String {
        return when (errorCode) {
            SpeechRecognizer.ERROR_AUDIO -> "Audio recording error"
            SpeechRecognizer.ERROR_CLIENT -> "Client error"
            SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS -> "Insufficient permissions"
            SpeechRecognizer.ERROR_NETWORK -> "Network error"
            SpeechRecognizer.ERROR_NETWORK_TIMEOUT -> "Network timeout"
            SpeechRecognizer.ERROR_NO_MATCH -> "No recognition match"
            SpeechRecognizer.ERROR_RECOGNIZER_BUSY -> "Recognition service busy"
            SpeechRecognizer.ERROR_SERVER -> "Server error"
            SpeechRecognizer.ERROR_SPEECH_TIMEOUT -> "No speech input"
            else -> "Unknown error $errorCode"
        }
    }
    
    /**
     * Handle recognized speech
     */
    private fun onSpeechRecognized(text: String) {
        if (text.isBlank()) {
            Log.w(TAG, "Received empty speech recognition result")
            updateState(VoiceState.IDLE)
            return
        }
        
        lastProcessedText = text
        Log.i(TAG, "Speech recognized: \"$text\"")
        
        // IMPORTANT: Stop speech recognition and release audio focus immediately
        Log.d(TAG, "🎵 SPEECH_RECOGNITION: Stopping speech recognition to release audio focus for TTS")
        try {
            // Stop listening and release speech recognition resources
            isListening = false
            speechRecognizer?.stopListening()
            speechRecognizer?.cancel()
            
            // Explicitly release audio focus from centralized manager
            val centralAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val currentRequest = centralAudioManager.getCurrentRequestInfo()
            if (currentRequest?.requestType == com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION) {
                centralAudioManager.releaseAudioFocus(currentRequest.requestId)
                Log.d(TAG, "🎵 SPEECH_RECOGNITION: Released audio focus for speech recognition")
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error stopping speech recognition", e)
        }
        
        // Update state to PROCESSING
        updateState(VoiceState.PROCESSING)
        
        // Log the start of API processing
        Log.d(TAG, "Starting API processing for recognized text")
        
        // Process with voice processor
        try {
            Log.d(TAG, "Sending text to voice processor for processing")
            voiceProcessor.processText(text) { response ->
                Log.d(TAG, "Received response from voice processor, length: ${response.length} chars")
                
                if (response.isNotEmpty()) {
                    // Update state to RESPONDING
                    _voiceState.value = VoiceState.RESPONDING(response)
                    Log.i(TAG, "Processing complete, responding to user")
                    
                    // Additional delay to ensure audio focus is fully released
                    Handler(Looper.getMainLooper()).postDelayed({
                        Log.d(TAG, "🎵 TTS_START: Starting TTS after audio focus release delay")
                        
                        // Speak the response
                        voiceProcessor.speak(response) {
                            // Don't return to idle when done speaking, set to LISTENING instead
                            Log.i(TAG, "TTS complete, setting state to LISTENING to continue conversation")
                            
                            // Add a short delay for better transition
                            Handler(Looper.getMainLooper()).postDelayed({
                                updateState(VoiceState.LISTENING)
                            }, 300)
                        }
                    }, 100) // Reduced from 500ms to 100ms for faster response (text format TTS is much faster)
                } else {
                    Log.w(TAG, "Received empty response from voice processor")
                    _voiceState.value = VoiceState.ERROR("No response received")
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error processing recognized text", e)
            _voiceState.value = VoiceState.ERROR("Processing error: ${e.message}")
            
            // Log the error and set error state
            Log.e(TAG, "Error processing text with voice processor", e)
            _voiceState.value = VoiceState.ERROR("Processing error: ${e.message}")
        }
    }
    
    /**
     * Interrupt the current speech playback
     * 
     * @return Boolean indicating if speech was successfully interrupted
     */
    fun interruptSpeech(): Boolean {
        Log.i(TAG, "Interrupting current speech")
        
        // First, check if we're in a responding state
        if (_voiceState.value !is VoiceState.RESPONDING) {
            Log.d(TAG, "No active speech to interrupt (current state: ${_voiceState.value.javaClass.simpleName})")
            return false
        }
        
        var interrupted = false
        
        // Try interrupting with voice processor first
        try {
            interrupted = voiceProcessor.interrupt()
            Log.d(TAG, "Voice processor interrupt result: $interrupted")
        } catch (e: Exception) {
            Log.e(TAG, "Error interrupting voice processor speech", e)
        }
        
        // Also use TextToSpeechManager as a fallback option
        if (!interrupted) {
            try {
                TextToSpeechManager.stop()
                Log.d(TAG, "Stopped TextToSpeechManager")
                interrupted = true
            } catch (e: Exception) {
                Log.e(TAG, "Error stopping TextToSpeechManager", e)
            }
        }
        
        // If we successfully interrupted, update the state to LISTENING
        if (interrupted) {
            Log.i(TAG, "Successfully interrupted speech, changing to LISTENING state")
            
            // Add a short delay before switching to listening state for better UX
            Handler(Looper.getMainLooper()).postDelayed({
                updateState(VoiceState.LISTENING)
                
                // Start listening for speech input - ensure it's on main thread
                try {
                    Log.d(TAG, "Starting speech recognition on main thread after interruption")
                    startListening()
                } catch (e: Exception) {
                    Log.e(TAG, "Error starting listening after interruption: ${e.message}", e)
                }
            }, 300)
        }
        
        return interrupted
    }
    
    /**
     * Register a callback for state changes
     */
    fun registerStateChangeCallback(callback: (VoiceState) -> Unit) {
        stateChangeCallbacks.add(callback)
        Log.d(TAG, "State change callback registered, total callbacks: ${stateChangeCallbacks.size}")
        
        // Immediately notify with current state
        callback(voiceState.value)
    }
    
    /**
     * Unregister a previously registered state change callback
     */
    fun unregisterStateChangeCallback(callback: (VoiceState) -> Unit) {
        stateChangeCallbacks.remove(callback)
        Log.d(TAG, "State change callback unregistered, remaining callbacks: ${stateChangeCallbacks.size}")
    }
    
    /**
     * Register a tool handler
     */
    fun registerToolHandler(toolName: String, handler: (JSONObject) -> String) {
        toolHandlers[toolName] = handler
        Log.d(TAG, "Registered tool handler for $toolName")
    }
    
    /**
     * Get a tool handler
     */
    fun getToolHandler(toolName: String): ((JSONObject) -> String)? {
        return toolHandlers[toolName]
    }
    
    /**
     * Update the voice state and notify registered callbacks
     */
    internal fun updateState(newState: VoiceState) {
        val oldState = _voiceState.value
        
        // Add deduplication: only update if state actually changed
        if (oldState.javaClass == newState.javaClass) {
            // For states with data (like RESPONDING), also check the content
            if (oldState is VoiceState.RESPONDING && newState is VoiceState.RESPONDING) {
                if (oldState.message == newState.message) {
                    Log.d(TAG, "Ignoring duplicate RESPONDING state with same message: ${newState.message}")
                    return
                }
            } else if (oldState is VoiceState.ERROR && newState is VoiceState.ERROR) {
                if (oldState.message == newState.message) {
                    Log.d(TAG, "Ignoring duplicate ERROR state with same message: ${newState.message}")
                    return
                }
            } else {
                // For states without data (IDLE, LISTENING, etc.), ignore if same type
                Log.d(TAG, "Ignoring duplicate state change: ${oldState.javaClass.simpleName}")
                return
            }
        }
        
        Log.d(TAG, "Voice state transition: ${oldState.javaClass.simpleName} -> ${newState.javaClass.simpleName}")
        
        // If transitioning to PROCESSING state, log details about speech recognition
        if (newState is VoiceState.PROCESSING && oldState is VoiceState.LISTENING) {
            Log.i(TAG, "Speech recognition completed successfully, processing command")
        }
        
        // If transitioning from PROCESSING to RESPONDING, log success
        if (oldState is VoiceState.PROCESSING && newState is VoiceState.RESPONDING) {
            Log.i(TAG, "Command processed successfully, generating response")
            
            // Pre-acquire audio focus for faster TTS startup
            try {
                Log.d(TAG, "🎵 Pre-acquiring audio focus for TTS to reduce stutter")
                TextToSpeechManager.preAcquireAudioFocus()
            } catch (e: Exception) {
                Log.e(TAG, "Error pre-acquiring audio focus", e)
            }
        }
        
        // If transitioning to ERROR state, log detailed error information
        if (newState is VoiceState.ERROR) {
            Log.e(TAG, "Error in voice processing: ${newState.message}")
            if (oldState is VoiceState.PROCESSING) {
                Log.e(TAG, "Error occurred during command processing")
            } else if (oldState is VoiceState.LISTENING) {
                Log.e(TAG, "Error occurred during speech recognition")
            }
        }
        
        _voiceState.value = newState
        
        // Manage wake word detection based on state
        when (newState) {
            is VoiceState.IDLE -> {
                // Only re-enable wake word detection when returning to IDLE
                Log.d(TAG, "Conversation completed, re-enabling wake word detection")
                try {
                    voiceProcessor.start()
                    
                    // Also send broadcast to WakeWordService to ensure it resumes
                    val intent = Intent(Constants.Actions.RESUME_WAKE_WORD)
                    context.sendBroadcast(intent)
                    Log.d(TAG, "Sent broadcast to resume wake word detection")
                } catch (e: Exception) {
                    Log.e(TAG, "Error re-enabling wake word detection", e)
                }
            }
            is VoiceState.WAKE_WORD_DETECTED,
            is VoiceState.LISTENING,
            is VoiceState.PROCESSING,
            is VoiceState.RESPONDING,
            is VoiceState.SPEAKING,
            is VoiceState.ERROR -> {
                // Ensure wake word detection is paused during active conversation
                Log.d(TAG, "Active conversation state (${newState.javaClass.simpleName}), pausing wake word detection")
                try {
                    voiceProcessor.stop()
                    
                    // Reactivate speech recognizer when transitioning to LISTENING state
                    // This is needed to resume listening after TTS completion
                    if (newState is VoiceState.LISTENING && !isListening) {
                        Log.d(TAG, "LISTENING state detected but isListening=false, reactivating speech recognizer")
                        // Add a small delay to ensure smooth audio focus transition
                        Handler(Looper.getMainLooper()).postDelayed({
                            // Only restart if we're still in LISTENING state and not already listening
                            if (_voiceState.value is VoiceState.LISTENING && !isListening) {
                                Log.d(TAG, "Restarting speech recognition for continuous conversation")
                                startListening()
                            }
                        }, 100)
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error pausing wake word detection", e)
                }
            }
        }
        
        // Notify all registered callbacks
        for (callback in stateChangeCallbacks) {
            try {
                callback(newState)
            } catch (e: Exception) {
                Log.e(TAG, "Error notifying state change callback", e)
            }
        }
    }
    
    /**
     * Display an error message
     */
    private fun showError(message: String) {
        Log.e(TAG, "Error: $message")
        _voiceState.value = VoiceState.ERROR(message)
    }
    
    /**
     * Display a message to the user
     */
    private fun showMessage(message: String) {
        Log.i(TAG, "Message: $message")
        _voiceState.value = VoiceState.RESPONDING(message)
    }
    
    /**
     * Reset to idle state
     */
    private fun resetToIdle() {
        updateState(VoiceState.IDLE)
        releaseSpeechRecognitionAudioFocus()
    }
    
    /**
     * Clean up resources
     */
    fun shutdown() {
        Log.i(TAG, "Shutting down VoiceManager")
        
        // Reset state
        updateState(VoiceState.IDLE)
        
        // Shutdown voice processor
        try {
            voiceProcessor.shutdown()
        } catch (e: Exception) {
            Log.e(TAG, "Error shutting down voice processor", e)
        }
        
        // Clean up speech recognition
        try {
            speechRecognizer?.destroy()
            speechRecognizer = null
        } catch (e: Exception) {
            Log.e(TAG, "Error destroying speech recognition", e)
        }
        
        // Clear callbacks
        stateChangeCallbacks.clear()
        
        // Clear tool handlers
        toolHandlers.clear()
    }
    
    /**
     * Handle the case when no speech was detected
     */
    fun handleNoSpeechDetected() {
        Log.d(TAG, "No speech detected")
        noSpeechRetryCount++
        
        if (noSpeechRetryCount < MAX_NO_SPEECH_RETRIES) {
            showMessage("I didn't hear anything. Listening again...")
            coroutineScope.launch {
                // Release audio focus and ensure proper cleanup before retry
                Log.d(TAG, "🎵 SPEECH_RECOGNITION: Releasing audio focus before retry")
                releaseSpeechRecognitionAudioFocus()
                
                // Reset listening state to prevent conflicts
                isListening = false
                
                // Use longer delay to ensure audio focus system fully resets
                val retryDelayMs = maxOf(configManager.getSpeechRetryDelayMs().toLong(), 2000L)
                Log.d(TAG, "Will retry speech recognition after $retryDelayMs ms (increased for audio focus cleanup)")
                delay(retryDelayMs)
                
                try {
                    Log.d(TAG, "Retrying speech recognition (attempt $noSpeechRetryCount)")
                    Handler(Looper.getMainLooper()).post {
                        Log.d(TAG, "Starting speech recognition retry on main thread")
                        startListening()
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error retrying speech recognition: ${e.message}", e)
                    showError("Unable to restart voice recognition")
                    resetToIdle()
                }
            }
        } else {
            Log.d(TAG, "Maximum retry attempts reached ($MAX_NO_SPEECH_RETRIES), resetting to idle")
            showMessage("I didn't hear anything. Please try saying 'Jarvis' again when you're ready.")
            noSpeechRetryCount = 0
            coroutineScope.launch {
                delay(configManager.getSpeechFinalMessageDelayMs().toLong())
                resetToIdle()
            }
        }
    }
    
    /**
     * Process speech recognition result
     */
    private fun processSpeechResult(text: String) {
        if (text.isEmpty()) {
            Log.d(TAG, "Empty speech result, ignoring")
            return
        }
        
        Log.i(TAG, "Processing speech result: $text")
        lastProcessedText = text
        
        try {
            // Update state to processing
            updateState(VoiceState.PROCESSING)
            
            // Send event to RN with the recognized text
            sendSpeechResultToReactNative(text)
            
            // Don't reset back to idle after sending to RN
            // Let React Native drive the state changes
            Log.d(TAG, "Speech result sent to RN, maintaining PROCESSING state")
            // Note: React Native will handle further processing and state management
        } catch (e: Exception) {
            Log.e(TAG, "Error processing speech: ${e.message}", e)
            showError("Error processing speech: ${e.message}")
        }
    }
    
    /**
     * Send speech result to React Native
     */
    private fun sendSpeechResultToReactNative(text: String) {
        try {
            val params = JSONObject()
            params.put("text", text)
            
            Handler(Looper.getMainLooper()).post {
                try {
                    // Use ApplicationContext instead of ReactApplicationContext directly
                    val currentContext = context.applicationContext
                    if (currentContext is com.facebook.react.bridge.ReactContext) {
                        currentContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            ?.emit(Constants.Actions.SPEECH_RESULT, params.toString())
                        Log.d(TAG, "Speech result sent to React Native")
                    } else {
                        Log.e(TAG, "Context is not a ReactContext, cannot send event to React Native")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error sending event to React Native: ${e.message}", e)
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error sending speech result to React Native: ${e.message}", e)
        }
    }
    
    /**
     * Process incoming audio data for speech recognition
     */
    fun processAudioData(audioData: ByteArray, size: Int) {
        if (_voiceState.value != VoiceState.LISTENING) {
            // Only process audio data when we're actively listening
            return
        }
        
        try {
            Log.d(TAG, "Processing audio data of size: $size bytes")
            
            // Save audio data to temporary file for Whisper processing
            val tempFile = File.createTempFile("whisper_audio_", ".wav", context.cacheDir)
            FileOutputStream(tempFile).use { fos ->
                // Write WAV header
                writeWavHeader(fos, size)
                
                // Write audio data
                fos.write(audioData, 0, size)
                fos.flush()
            }
            
            Log.d(TAG, "Audio saved to temporary file: ${tempFile.absolutePath}")
            
            // Process audio file with Whisper
            coroutineScope.launch {
                try {
                    // Update state to processing
                    updateState(VoiceState.PROCESSING)
                    
                    // Transcribe the audio using Whisper
                    val transcript = whisperClient.transcribeAudio(tempFile)
                    
                    if (transcript.isNotEmpty()) {
                        Log.i(TAG, "Whisper transcription successful: '$transcript'")
                        processSpeechResult(transcript)
                    } else {
                        Log.w(TAG, "Empty transcription result from Whisper")
                        // Reset to listening state to continue capturing audio
                        updateState(VoiceState.LISTENING)
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error transcribing audio with Whisper: ${e.message}", e)
                    showError("Error transcribing speech: ${e.message}")
                } finally {
                    // Delete the temporary file
                    tempFile.delete()
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error processing audio data: ${e.message}", e)
        }
    }
    
    /**
     * Write WAV header for the audio file
     */
    private fun writeWavHeader(outputStream: OutputStream, audioDataSize: Int) {
        // Standard WAV header for 16-bit PCM, 16kHz, mono
        val sampleRate = 16000
        val channels = 1
        val bitsPerSample = 16
        
        try {
            // RIFF header
            outputStream.write("RIFF".toByteArray()) // ChunkID
            writeInt(outputStream, 36 + audioDataSize) // ChunkSize
            outputStream.write("WAVE".toByteArray()) // Format
            
            // fmt subchunk
            outputStream.write("fmt ".toByteArray()) // Subchunk1ID
            writeInt(outputStream, 16) // Subchunk1Size (16 for PCM)
            writeShort(outputStream, 1) // AudioFormat (1 for PCM)
            writeShort(outputStream, channels) // NumChannels
            writeInt(outputStream, sampleRate) // SampleRate
            writeInt(outputStream, sampleRate * channels * bitsPerSample / 8) // ByteRate
            writeShort(outputStream, channels * bitsPerSample / 8) // BlockAlign
            writeShort(outputStream, bitsPerSample) // BitsPerSample
            
            // data subchunk
            outputStream.write("data".toByteArray()) // Subchunk2ID
            writeInt(outputStream, audioDataSize) // Subchunk2Size
        } catch (e: Exception) {
            Log.e(TAG, "Error writing WAV header: ${e.message}", e)
        }
    }
    
    /**
     * Helper method to write an integer to output stream in little-endian format
     */
    private fun writeInt(outputStream: OutputStream, value: Int) {
        outputStream.write(value and 0xFF)
        outputStream.write(value shr 8 and 0xFF)
        outputStream.write(value shr 16 and 0xFF)
        outputStream.write(value shr 24 and 0xFF)
    }
    
    /**
     * Helper method to write a short to output stream in little-endian format
     */
    private fun writeShort(outputStream: OutputStream, value: Int) {
        outputStream.write(value and 0xFF)
        outputStream.write(value shr 8 and 0xFF)
    }
    
    /**
     * Process a test phrase directly (for debugging)
     * This bypasses the speech recognition system and directly processes a text input
     * 
     * @param testPhrase The phrase to process
     * @return Boolean indicating success
     */
    fun processTestPhrase(testPhrase: String): Boolean {
        if (testPhrase.isBlank()) {
            Log.w(TAG, "Cannot process empty test phrase")
            return false
        }
        
        Log.i(TAG, "Processing test phrase: \"$testPhrase\"")
        
        try {
            // Update state to simulate wake word and listening
            updateState(VoiceState.WAKE_WORD_DETECTED)
            
            // Brief delay to simulate state transition
            Handler(Looper.getMainLooper()).postDelayed({
                // Call onSpeechRecognized directly with the test phrase
                onSpeechRecognized(testPhrase)
            }, 300)
            
            return true
        } catch (e: Exception) {
            Log.e(TAG, "Error processing test phrase: ${e.message}", e)
            return false
        }
    }
    
    /**
     * Set React Native API callback
     */
    fun setReactNativeApiCallback(callback: (String, (String) -> Unit) -> Unit) {
        this.reactNativeApiCallback = callback
        Log.d(TAG, "React Native API callback set")
    }
    
    /**
     * Voice states for the state machine
     */
    sealed class VoiceState {
        object IDLE : VoiceState()
        object WAKE_WORD_DETECTED : VoiceState()
        object LISTENING : VoiceState()
        object PROCESSING : VoiceState()
        data class RESPONDING(val message: String) : VoiceState()
        data class ERROR(val message: String) : VoiceState()
        object SPEAKING : VoiceState()
    }

    private fun releaseSpeechRecognitionAudioFocus() {
        speechRecognitionAudioFocusRequestId?.let { requestId ->
            try {
                com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().releaseAudioFocus(requestId)
                Log.d(TAG, "🎵 Released audio focus for speech recognition (ID: $requestId)")
            } catch (e: Exception) {
                Log.e(TAG, "Error releasing audio focus for speech recognition", e)
            }
            speechRecognitionAudioFocusRequestId = null
        }
        
        // Also check if there's any current speech recognition audio focus and release it
        try {
            val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val currentRequest = audioManager.getCurrentRequestInfo()
            if (currentRequest?.requestType == com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION) {
                Log.d(TAG, "🎵 Found active speech recognition audio focus, releasing it")
                audioManager.releaseAudioFocus(currentRequest.requestId)
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error checking/releasing current audio focus", e)
        }
    }
} 