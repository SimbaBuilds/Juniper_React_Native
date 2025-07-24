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

    companion object {
        @Volatile
        private var instance: VoiceManager? = null
        
        // Constants
        private const val RECOGNITION_DEBOUNCE_MS = 3000L
        private const val MAX_SPEECH_RECOGNITION_RETRY_COUNT = 3
        private var MAX_NO_SPEECH_RETRIES = 2 // Will be overridden from config
        
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
     * Initialize speech recognition
     */
    private fun initializeSpeechRecognition() {
        // Ensure we're on the main thread for SpeechRecognizer initialization
        if (Looper.myLooper() != Looper.getMainLooper()) {
            Log.d(TAG, "initializeSpeechRecognition called from background thread, posting to main thread")
            Handler(Looper.getMainLooper()).post {
                initializeSpeechRecognition()
            }
            return
        }
        
        try {
            if (SpeechRecognizer.isRecognitionAvailable(context)) {
                speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context)
                // Set the recognition listener
                speechRecognizer?.setRecognitionListener(createRecognitionListener())
                isSpeechRecognitionInitialized = true
                Log.d(TAG, "Speech recognizer initialized on main thread")
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
            
            // Add delay to allow any competing audio focus requests to settle
            Log.d(TAG, "Adding 300ms delay before starting speech recognition to avoid conflicts")
            coroutineScope.launch {
                delay(300)
                Log.d(TAG, "Delay completed, starting speech recognition")
                // Start listening for speech (system beep will provide audio feedback)
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
     * Start listening for speech input
     */
    fun startListening() {
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: ========== START LISTENING CALLED ==========")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Current thread: ${Thread.currentThread().name}")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Is main thread: ${Looper.myLooper() == Looper.getMainLooper()}")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Current listening state: $isListening")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Current voice state: ${_voiceState.value}")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech recognizer null: ${speechRecognizer == null}")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech recognition initialized: $isSpeechRecognitionInitialized")
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state: ${com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()}")
        
        // Always ensure wake word detection is paused when actively listening
        try {
            val intent = Intent("com.anonymous.MobileJarvisNative.PAUSE_WAKE_WORD_KEEP_LISTENING")
            context.sendBroadcast(intent)
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Sent broadcast to pause wake word detection during listening")
        } catch (e: Exception) {
            Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error sending pause wake word broadcast: ${e.message}", e)
        }
        
        // Check if we're already listening to avoid duplicate requests
        if (isListening) {
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Already listening, ignoring startListening() call")
            return
        }
        
        // Ensure we're on the main thread for speech recognizer operations
        if (Looper.myLooper() != Looper.getMainLooper()) {
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: startListening called from background thread, posting to main thread")
            Handler(Looper.getMainLooper()).post {
                startListening()
            }
            return
        }
        
        // Check if speechRecognizer is still valid and reinitialize if needed
        if (speechRecognizer == null || !isSpeechRecognitionInitialized) {
            Log.w(TAG, "🎤 SPEECH_RECOGNITION: Speech recognizer was null or not initialized, reinitializing...")
            initializeSpeechRecognition()
            
            // If initialization is async (posted to main thread), we need to wait
            // Schedule the actual listening to start after initialization
            if (!isSpeechRecognitionInitialized) {
                Log.w(TAG, "🎤 SPEECH_RECOGNITION: Initialization not complete, scheduling retry...")
                Handler(Looper.getMainLooper()).postDelayed({
                    if (isSpeechRecognitionInitialized) {
                        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Initialization completed, starting internal...")
                        startListeningInternal()
                    } else {
                        Log.e(TAG, "🎤 SPEECH_RECOGNITION: Speech recognition initialization failed, cannot start listening")
                        isListening = false
                        _voiceState.value = VoiceState.ERROR("Speech recognition not available")
                    }
                }, 100) // Small delay to allow initialization
                return
            }
        }
        
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Proceeding to internal start...")
        startListeningInternal()
    }
    
    /**
     * Internal method to start listening (must be called on main thread)
     */
    private fun startListeningInternal() {
        try {
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: ========== START LISTENING INTERNAL ==========")
            
            // Update state before starting recognition
            isListening = true
            updateState(VoiceState.LISTENING)
            
            // Create recognizer intent with enhanced logging
            val intent = createRecognizerIntent()
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognizer intent created")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Intent extras: ${intent.extras}")
            
            // Check current audio focus state and handle accordingly
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Checking current audio focus state...")
            val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val currentRequest = audioManager.getCurrentRequestInfo()
            
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Current audio focus holder: ${currentRequest?.requestType ?: "None"}")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Current request ID: ${currentRequest?.requestId ?: "None"}")
            
            // Only release focus if it's a different type or lower priority
            if (currentRequest != null) {
                val currentPriority = currentRequest.requestType.priority
                val speechRecognitionPriority = com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION.priority
                
                if (currentPriority > speechRecognitionPriority) {
                    Log.i(TAG, "🎤 SPEECH_RECOGNITION: 🔄 Releasing lower priority focus (${currentRequest.requestType}) for speech recognition")
                    audioManager.releaseAudioFocus(currentRequest.requestId)
                    
                    // Brief delay to allow the release to process
                    Thread.sleep(50)
                } else if (currentRequest.requestType == com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION) {
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech recognition focus already active, no need to release")
                } else {
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: Higher priority focus (${currentRequest.requestType}) active, will queue speech recognition")
                }
            }
            
            // Check if Google Assistant might be active
            try {
                val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as android.app.ActivityManager
                val runningTasks = activityManager.getRunningTasks(1)
                if (runningTasks.isNotEmpty()) {
                    val topActivity = runningTasks[0].topActivity
                    if (topActivity?.packageName?.contains("com.google.android.googlequicksearchbox") == true) {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Google Assistant appears to be active, adding extra delay")
                        Thread.sleep(500)
                    }
                }
            } catch (e: Exception) {
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Could not check for Google Assistant: ${e.message}")
            }
            
            // Now request audio focus for speech recognition
            val focusRequestTimestamp = System.currentTimeMillis()
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Requesting audio focus for speech recognition at $focusRequestTimestamp...")
            val focusResult = audioManager.requestAudioFocus(
                com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION, 
                "speech_recognition",
                onFocusGained = {
                    val gainTimestamp = System.currentTimeMillis()
                    val gainDelay = gainTimestamp - focusRequestTimestamp
                    Log.i(TAG, "🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED at $gainTimestamp (${gainDelay}ms after request)")
                    
                    // Start monitoring for unexpected focus loss
                    coroutineScope.launch {
                        var checkCount = 0
                        repeat(20) { // Check every 10ms for 200ms total
                            kotlinx.coroutines.delay(10)
                            checkCount++
                            val currentTime = System.currentTimeMillis()
                            val timeSinceGain = currentTime - gainTimestamp
                            val hasFocus = audioManager.hasAudioFocus()
                            
                            if (!hasFocus) {
                                Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Audio focus STOLEN at ${timeSinceGain}ms after gain (check #$checkCount)")
                                return@launch
                            }
                            
                            // Log specific timing checkpoints
                            when (timeSinceGain.toInt()) {
                                in 85..95 -> Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Critical 90ms window - focus still held at ${timeSinceGain}ms")
                                100 -> Log.i(TAG, "🔥 FOCUS_THEFT_DEBUG: Passed 100ms mark - focus still held")
                            }
                        }
                        Log.i(TAG, "🔥 FOCUS_THEFT_DEBUG: Completed 200ms monitoring - focus retained")
                    }
                },
                onFocusLost = {
                    val lossTimestamp = System.currentTimeMillis()
                    val timeSinceRequest = lossTimestamp - focusRequestTimestamp
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: ========== AUDIO FOCUS STOLEN ===========")
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Focus lost at $lossTimestamp")
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Time since request: ${timeSinceRequest}ms")
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Thread: ${Thread.currentThread().name}")
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Current voice state: ${_voiceState.value}")
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Speech recognizer listening: $isListening")
                    
                    // Log call stack to see what caused the loss
                    val stackTrace = Thread.currentThread().stackTrace
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: Call stack when focus lost:")
                    stackTrace.take(8).forEachIndexed { index, element ->
                        Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: [$index] ${element.className}.${element.methodName}:${element.lineNumber}")
                    }
                    Log.w(TAG, "🔥 FOCUS_THEFT_DEBUG: =============================================")
                    
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST during recognition")
                    
                    // Check if this is an early focus loss that suggests a conflict
                    if (timeSinceRequest < 500 && speechRecognitionRetryCount < 1) {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Early focus loss detected (${timeSinceRequest}ms) - likely conflict with another app")
                        Log.i(TAG, "🎤 SPEECH_RECOGNITION: Will retry once after delay")
                        
                        speechRecognitionRetryCount++
                        
                        // Stop current recognition and retry after delay
                        Handler(Looper.getMainLooper()).post {
                            if (isListening) {
                                speechRecognizer?.stopListening()
                                isListening = false
                                
                                // Retry after additional delay
                                coroutineScope.launch {
                                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Waiting 300ms before retry...")
                                    delay(300)
                                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Retrying speech recognition (attempt ${speechRecognitionRetryCount + 1})")
                                    startListening()
                                }
                            }
                        }
                    } else {
                        // Check if this is a transient loss that might recover
                        val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                        val isTransientLoss = audioManager.isInTransientFocusLoss()
                        
                        if (isTransientLoss) {
                            Log.i(TAG, "🎤 SPEECH_RECOGNITION: Focus loss is transient - waiting for recovery before stopping")
                            
                            // Give transient loss more time to recover during active recognition
                            coroutineScope.launch {
                                var recoveryCheckCount = 0
                                val maxRecoveryChecks = 150 // Check for 1.5 seconds (10ms intervals)
                                
                                while (recoveryCheckCount < maxRecoveryChecks && isListening) {
                                    kotlinx.coroutines.delay(10)
                                    recoveryCheckCount++
                                    
                                    val currentAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                                    val hasRecovered = currentAudioManager.hasAudioFocus()
                                    val stillTransient = currentAudioManager.isInTransientFocusLoss()
                                    
                                    if (hasRecovered && !stillTransient) {
                                        Log.i(TAG, "🎤 SPEECH_RECOGNITION: ✅ Audio focus RECOVERED after ${recoveryCheckCount * 10}ms - continuing recognition")
                                        return@launch // Successfully recovered
                                    }
                                    
                                    if (!stillTransient) {
                                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Transient loss became permanent after ${recoveryCheckCount * 10}ms")
                                        break
                                    }
                                }
                                
                                // If we get here, either recovery failed or timeout occurred
                                Log.w(TAG, "🎤 SPEECH_RECOGNITION: Recovery failed or timed out - stopping recognition")
                                Handler(Looper.getMainLooper()).post {
                                    if (isListening) {
                                        speechRecognizer?.stopListening()
                                        _voiceState.value = VoiceState.ERROR("Audio focus lost during speech recognition")
                                    }
                                }
                            }
                        } else {
                            Log.w(TAG, "🎤 SPEECH_RECOGNITION: Focus loss is permanent - stopping immediately")
                            Handler(Looper.getMainLooper()).post {
                                if (isListening) {
                                    speechRecognizer?.stopListening()
                                    _voiceState.value = VoiceState.ERROR("Audio focus lost during speech recognition")
                                }
                            }
                        }
                    }
                }
            )
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus request result: $focusResult")
            
            if (!focusResult) {
                Log.w(TAG, "🎤 SPEECH_RECOGNITION: Initial focus request failed, attempting retry...")
                
                // Wait briefly and retry once
                Thread.sleep(100)
                val retryFocusResult = audioManager.requestAudioFocus(
                    com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION, 
                    "speech_recognition_retry",
                    onFocusGained = {
                        Log.i(TAG, "🎤 SPEECH_RECOGNITION: 🎵 Audio focus GAINED on retry")
                    },
                    onFocusLost = {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: 🔇 Audio focus LOST after retry")
                        Handler(Looper.getMainLooper()).post {
                            if (isListening) {
                                speechRecognizer?.stopListening()
                                _voiceState.value = VoiceState.ERROR("Audio focus lost during speech recognition")
                            }
                        }
                    }
                )
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Focus retry result: $retryFocusResult")
                
                if (!retryFocusResult) {
                    Log.e(TAG, "🎤 SPEECH_RECOGNITION: Focus retry also failed, aborting recognition")
                    _voiceState.value = VoiceState.ERROR("Failed to acquire audio focus for speech recognition after retry")
                    
                    // Auto-recovery: reset to IDLE after a brief delay
                    coroutineScope.launch {
                        delay(2000) // Wait 2 seconds
                        Log.i(TAG, "🔄 AUTO_RECOVERY: Resetting to IDLE after audio focus failure")
                        resetToIdle()
                    }
                    return
                }
            }
            
            // Verify focus was actually granted
            val postReqAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val hasAudioFocus = postReqAudioManager.hasAudioFocus()
            val isTransientAtVerification = postReqAudioManager.isInTransientFocusLoss()
            
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Post-request audio focus verification: $hasAudioFocus")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Is transient at verification: $isTransientAtVerification")
            
            if (!hasAudioFocus && !isTransientAtVerification) {
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Audio focus verification failed and not transient, aborting recognition")
                _voiceState.value = VoiceState.ERROR("Audio focus verification failed")
                
                // Auto-recovery: reset to IDLE after a brief delay
                coroutineScope.launch {
                    delay(2000) // Wait 2 seconds
                    Log.i(TAG, "🔄 AUTO_RECOVERY: Resetting to IDLE after audio focus verification failure")
                    resetToIdle()
                }
                return
            } else if (isTransientAtVerification) {
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: Verification shows transient loss - proceeding with recognition")
            }
            
            // Add stabilization delay to ensure audio focus is stable before starting recognizer
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Adding 50ms stabilization delay for audio focus")
            Thread.sleep(50)
            
            // Final focus verification after stabilization delay
            val finalAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
            val finalFocus = finalAudioManager.hasAudioFocus()
            val finalTransient = finalAudioManager.isInTransientFocusLoss()
            
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Final focus check after stabilization - focus: $finalFocus, transient: $finalTransient")
            
            if (!finalFocus && !finalTransient) {
                Log.w(TAG, "🎤 SPEECH_RECOGNITION: Focus lost during stabilization delay - aborting")
                _voiceState.value = VoiceState.ERROR("Audio focus lost during stabilization")
                return
            }
            
            // Set timestamp to detect potential hangs
            lastRecognitionStartTime = System.currentTimeMillis()
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: $lastRecognitionStartTime")
            
            // Start the actual speech recognizer
            speechRecognizer?.startListening(intent)
            Log.i(TAG, "🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: ===================================")
            
        } catch (e: Exception) {
            Log.e(TAG, "🎤 SPEECH_RECOGNITION: ========== ERROR STARTING RECOGNITION ==========")
            Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error message: ${e.message}")
            Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error stack trace:", e)
            Log.e(TAG, "🎤 SPEECH_RECOGNITION: ===================================")
            isListening = false
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
            
            // Ensure we're on the main thread for speech recognizer operations
            if (Looper.myLooper() != Looper.getMainLooper()) {
                Log.d(TAG, "stopListening called from background thread, posting to main thread")
                Handler(Looper.getMainLooper()).post {
                    speechRecognizer?.stopListening()
                    Log.i(TAG, "SpeechRecognizer stopped listening.")
                }
            } else {
                speechRecognizer?.stopListening()
                Log.i(TAG, "SpeechRecognizer stopped listening.")
            }
        }
    }
    
    /**
     * Create speech recognizer intent
     */
    private fun createRecognizerIntent(): Intent {
        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Creating recognizer intent...")
        
        return Intent(RecognizerIntent.ACTION_RECOGNIZE_SPEECH).apply {
            // Basic parameters
            putExtra(RecognizerIntent.EXTRA_LANGUAGE_MODEL, RecognizerIntent.LANGUAGE_MODEL_FREE_FORM)
            putExtra(RecognizerIntent.EXTRA_PARTIAL_RESULTS, true)
            putExtra(RecognizerIntent.EXTRA_MAX_RESULTS, 1)
            
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Basic parameters set:")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Language model: ${RecognizerIntent.LANGUAGE_MODEL_FREE_FORM}")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Partial results: true")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Max results: 1")
            
            // Get timing parameters from ConfigManager
            val minLengthMs = configManager.getSpeechRecognitionMinimumLengthMs()
            val completeSilenceMs = configManager.getSpeechRecognitionCompleteSilenceMs()
            val possibleSilenceMs = configManager.getSpeechRecognitionPossibleSilenceMs()
            val useCustomParams = configManager.useCustomRecognizerParams()
            
            // Log the values regardless of whether they'll be used
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Timing parameters from config:")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Min length: ${minLengthMs}ms")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Complete silence: ${completeSilenceMs}ms") 
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Possible silence: ${possibleSilenceMs}ms")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Use custom params: $useCustomParams")
            
            // Only apply custom parameters if explicitly enabled in config
            if (useCustomParams) {
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: Applying custom timing parameters to SpeechRecognizer")
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, minLengthMs)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, completeSilenceMs)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, possibleSilenceMs)
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Custom timing parameters applied")
            } else {
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: Using Android default timing parameters for SpeechRecognizer")
                // Use Android defaults for RecognizerIntent parameters, but still use our
                // custom timing values for the rest of the voice processing pipeline
            }
            
            // Log all extras for debugging
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Final intent extras:")
            extras?.keySet()?.forEach { key ->
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: - $key: ${extras?.get(key)}")
            }
            
            // Log system speech recognition availability
            val packageManager = context.packageManager
            val activities = packageManager.queryIntentActivities(this, 0)
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Available speech recognition services: ${activities.size}")
            activities.forEach { activity ->
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: - Service: ${activity.activityInfo.packageName}:${activity.activityInfo.name}")
            }
            
            // Log additional system info
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: System audio info: ${checkAudioPermissions()}")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Available audio inputs: ${getAvailableAudioInputs()}")
        }
    }
    
    /**
     * Create a RecognitionListener instance
     */
    private fun createRecognitionListener(): RecognitionListener {
        return object : RecognitionListener {
            override fun onReadyForSpeech(params: Bundle?) {
                val readyTimestamp = System.currentTimeMillis()
                val timeSinceStart = readyTimestamp - lastRecognitionStartTime
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Ready for speech at $readyTimestamp")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Time since start: ${timeSinceStart}ms")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Parameters: $params")
                
                // Reset retry count on successful initialization
                speechRecognitionRetryCount = 0
                
                // Critical: Verify audio focus is still available when ready for speech
                val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                val hasAudioFocus = audioManager.hasAudioFocus()
                val isTransient = audioManager.isInTransientFocusLoss()
                val transientDuration = audioManager.getTransientLossDuration()
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state when ready: $hasAudioFocus")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Is in transient loss: $isTransient (${transientDuration}ms)")
                
                // Start intensive monitoring from this point
                coroutineScope.launch {
                    var monitorCount = 0
                    repeat(50) { // Monitor every 5ms for 250ms
                        kotlinx.coroutines.delay(5)
                        monitorCount++
                        val currentTime = System.currentTimeMillis()
                        val timeSinceReady = currentTime - readyTimestamp
                        val currentFocus = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()
                        
                        if (!currentFocus) {
                            Log.w(TAG, "🔥 READY_FOCUS_DEBUG: Focus lost ${timeSinceReady}ms after ready (monitor #$monitorCount)")
                            return@launch
                        }
                        
                        // Log critical timing windows
                        when (timeSinceReady.toInt()) {
                            in 85..95 -> Log.w(TAG, "🔥 READY_FOCUS_DEBUG: Critical window - ${timeSinceReady}ms after ready")
                            in 185..195 -> Log.w(TAG, "🔥 READY_FOCUS_DEBUG: Extended window - ${timeSinceReady}ms after ready")
                        }
                    }
                    Log.i(TAG, "🔥 READY_FOCUS_DEBUG: Completed 250ms ready monitoring - focus retained")
                }
                
                if (!hasAudioFocus && !isTransient) {
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: Audio focus permanently lost between start and ready, attempting recovery...")
                    
                    // Attempt to recover audio focus with callbacks
                    val focusRecoveryResult = audioManager.requestAudioFocus(
                        com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.SPEECH_RECOGNITION, 
                        "speech_recognition_recovery",
                        onFocusGained = {
                            Log.i(TAG, "🎤 SPEECH_RECOGNITION: 🎵 Audio focus RECOVERED during recognition")
                        },
                        onFocusLost = {
                            val recoveryAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                            val isTransientRecovery = recoveryAudioManager.isInTransientFocusLoss()
                            
                            if (!isTransientRecovery) {
                                Log.w(TAG, "🎤 SPEECH_RECOGNITION: 🔇 Audio focus PERMANENTLY LOST again during recovery")
                                Handler(Looper.getMainLooper()).post {
                                    if (isListening) {
                                        speechRecognizer?.stopListening()
                                        _voiceState.value = VoiceState.ERROR("Audio focus permanently lost during recovery")
                                    }
                                }
                            } else {
                                Log.i(TAG, "🎤 SPEECH_RECOGNITION: 🔄 Transient focus loss during recovery - continuing")
                            }
                        }
                    )
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Focus recovery attempt result: $focusRecoveryResult")
                    
                    if (!focusRecoveryResult) {
                        Log.e(TAG, "🎤 SPEECH_RECOGNITION: Focus recovery failed, stopping recognition")
                        speechRecognizer?.stopListening()
                        _voiceState.value = VoiceState.ERROR("Audio focus lost and recovery failed")
                        return
                    }
                    
                    // Verify recovery was successful
                    val recoveryVerification = audioManager.hasAudioFocus()
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Focus recovery verification: $recoveryVerification")
                    
                    if (!recoveryVerification && !audioManager.isInTransientFocusLoss()) {
                        Log.e(TAG, "🎤 SPEECH_RECOGNITION: Focus recovery verification failed and not transient, stopping recognition")
                        speechRecognizer?.stopListening()
                        _voiceState.value = VoiceState.ERROR("Audio focus recovery verification failed")
                        return
                    } else if (audioManager.isInTransientFocusLoss()) {
                        Log.i(TAG, "🎤 SPEECH_RECOGNITION: Recovery verification shows transient loss - continuing with recognition")
                    }
                    
                    Log.i(TAG, "🎤 SPEECH_RECOGNITION: ✅ Audio focus successfully recovered")
                } else if (isTransient) {
                    Log.i(TAG, "🎤 SPEECH_RECOGNITION: Focus loss is transient (${transientDuration}ms) - continuing with recognition")
                    
                    // If we're in transient loss but recognizer is ready, it's likely safe to continue
                    // The extended grace period (1000ms) should handle this case
                    if (transientDuration < 800) { // Allow more time for transient recovery
                        Log.i(TAG, "🎤 SPEECH_RECOGNITION: Transient loss duration acceptable (${transientDuration}ms < 800ms), proceeding")
                    } else {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Transient loss duration concerning (${transientDuration}ms >= 800ms), but recognizer ready - continuing cautiously")
                    }
                }
                
                val actualStartTime = System.currentTimeMillis() 
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition start time: $actualStartTime")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: ${actualStartTime - lastRecognitionStartTime}ms")
                isListening = true
                lastRecognitionStartTime = actualStartTime
                speechRecognitionRetryCount = 0 // Reset retry count on successful start
                
                // Begin continuous focus monitoring during speech recognition
                coroutineScope.launch {
                    var focusCheckCount = 0
                    while (isListening && focusCheckCount < 1000) { // Monitor for up to 10 seconds
                        kotlinx.coroutines.delay(10) // Check every 10ms
                        focusCheckCount++
                        val currentTime = System.currentTimeMillis()
                        val listeningDuration = currentTime - actualStartTime
                        val hasFocus = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()
                        
                        if (!hasFocus) {
                            Log.w(TAG, "🔥 LISTENING_FOCUS_DEBUG: Focus lost ${listeningDuration}ms into listening session")
                            return@launch
                        }
                        
                        // Log specific time markers
                        if (listeningDuration.toInt() in listOf(50, 100, 200, 500, 1000, 2000, 5000)) {
                            Log.d(TAG, "🔥 LISTENING_FOCUS_DEBUG: Still listening at ${listeningDuration}ms mark")
                        }
                    }
                    if (isListening) {
                        Log.i(TAG, "🔥 LISTENING_FOCUS_DEBUG: Completed extended monitoring - session still active")
                    }
                }
            }
            
            override fun onBeginningOfSpeech() {
                val now = System.currentTimeMillis()
                val timeSinceStart = now - lastRecognitionStartTime
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Beginning of speech detected at $now")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech start timing: ${timeSinceStart}ms after ready")
                val currentFocus = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state: $currentFocus")
                
                if (!currentFocus) {
                    val speechAudioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                    val isTransient = speechAudioManager.isInTransientFocusLoss()
                    val transientDuration = speechAudioManager.getTransientLossDuration()
                    
                    Log.w(TAG, "🔥 SPEECH_START_DEBUG: WARNING - Speech detected but no audio focus!")
                    Log.w(TAG, "🔥 SPEECH_START_DEBUG: Is transient loss: $isTransient (${transientDuration}ms)")
                    
                    if (!isTransient) {
                        Log.e(TAG, "🔥 SPEECH_START_DEBUG: CRITICAL - Speech started without permanent audio focus!")
                    }
                }
            }
            
            override fun onRmsChanged(rmsdB: Float) {
                // Enhanced RMS logging to track audio input levels
                Log.v(TAG, "🎤 SPEECH_RECOGNITION: RMS changed: ${rmsdB}dB")
                
                // Log significant audio level changes
                if (rmsdB > -10) {
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: High audio level detected: ${rmsdB}dB")
                } else if (rmsdB < -40) {
                    Log.v(TAG, "🎤 SPEECH_RECOGNITION: Low audio level: ${rmsdB}dB")
                }
            }
            
            override fun onBufferReceived(buffer: ByteArray?) {
                Log.v(TAG, "🎤 SPEECH_RECOGNITION: Audio buffer received: ${buffer?.size} bytes")
            }
            
            override fun onEndOfSpeech() {
                val now = System.currentTimeMillis()
                val totalListeningTime = now - lastRecognitionStartTime
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: End of speech detected")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Total listening time: ${totalListeningTime}ms")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state: ${com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()}")
                isListening = false
            }
            
            override fun onError(error: Int) {
                val now = System.currentTimeMillis()
                val totalListeningTime = now - lastRecognitionStartTime
                val errorMessage = getSpeechRecognitionErrorMessage(error)
                
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error code: $error")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error message: $errorMessage")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Total listening time: ${totalListeningTime}ms")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state: ${com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()}")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Current retry count: $speechRecognitionRetryCount")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: No speech retry count: $noSpeechRetryCount")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Current voice state: ${_voiceState.value.javaClass.simpleName}")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Speech recognizer initialized: $isSpeechRecognitionInitialized")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Is listening flag: $isListening")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Thread: ${Thread.currentThread().name}")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Available audio inputs: ${getAvailableAudioInputs()}")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Audio permissions: ${checkAudioPermissions()}")
                
                // Reset state flags
                isListening = false
                
                // Handle permission error by retrying
                if (error == SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS && 
                   speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    speechRecognitionRetryCount++
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: Permission error, will retry speech recognition (attempt $speechRecognitionRetryCount)")
                    
                    Handler(Looper.getMainLooper()).postDelayed({
                        startListening()
                    }, 1000)
                    return
                }
                
                // Special handling for "No speech detected" errors
                if (error == SpeechRecognizer.ERROR_NO_MATCH || error == SpeechRecognizer.ERROR_SPEECH_TIMEOUT) {
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()")
                    handleNoSpeechDetected()
                    return
                }
                
                // Otherwise update state to error
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: ===========================")
                _voiceState.value = VoiceState.ERROR("Speech recognition error: $errorMessage")
            }
            
            override fun onResults(results: Bundle?) {
                val now = System.currentTimeMillis()
                val totalListeningTime = now - lastRecognitionStartTime
                isListening = false
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: ========== RESULTS RECEIVED ==========")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Total listening time: ${totalListeningTime}ms")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Results bundle: $results")
                
                val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                val confidences = results?.getFloatArray(SpeechRecognizer.CONFIDENCE_SCORES)
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition matches: $matches")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Confidence scores: ${confidences?.contentToString()}")
                
                val text = matches?.get(0) ?: ""
                val confidence = confidences?.get(0) ?: 0.0f
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Selected text: '$text'")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Confidence: $confidence")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Audio focus state: ${com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()}")
                
                if (text.isNotBlank()) {
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Text is valid, processing...")
                    onSpeechRecognized(text)
                } else {
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: Text is blank, handling as no speech")
                    handleNoSpeechDetected()
                }
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: ===========================")
            }
            
            override fun onPartialResults(partialResults: Bundle?) {
                // Not used in this implementation
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
            SpeechRecognizer.ERROR_CLIENT -> "Client side error"
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
     * Get available audio input information for debugging
     */
    private fun getAvailableAudioInputs(): String {
        return try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            val devices = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                audioManager.getDevices(android.media.AudioManager.GET_DEVICES_INPUTS)
            } else {
                emptyArray()
            }
            
            if (devices.isEmpty()) {
                "None detected (API < 23 or no devices)"
            } else {
                devices.joinToString(", ") { device ->
                    "${device.type}:${device.productName}"
                }
            }
        } catch (e: Exception) {
            "Error getting audio inputs: ${e.message}"
        }
    }
    
    /**
     * Check and log audio permissions and microphone access
     */
    private fun checkAudioPermissions(): String {
        return try {
            val hasRecordPermission = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                context.checkSelfPermission(android.Manifest.permission.RECORD_AUDIO) == 
                    android.content.pm.PackageManager.PERMISSION_GRANTED
            } else {
                true // Assume granted on older versions
            }
            
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            val isMicrophoneMuted = audioManager.isMicrophoneMute
            val mode = audioManager.mode
            val isBluetoothScoOn = audioManager.isBluetoothScoOn
            val isSpeakerphoneOn = audioManager.isSpeakerphoneOn
            
            "RecordPermission:$hasRecordPermission, MicMuted:$isMicrophoneMuted, Mode:$mode, BluetoothSco:$isBluetoothScoOn, Speakerphone:$isSpeakerphoneOn"
        } catch (e: Exception) {
            "Error checking permissions: ${e.message}"
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
            
            // Ensure we're on the main thread for speech recognizer operations
            if (Looper.myLooper() != Looper.getMainLooper()) {
                Log.d(TAG, "Stopping speech recognizer from background thread, posting to main thread")
                Handler(Looper.getMainLooper()).post {
                    speechRecognizer?.stopListening()
                    speechRecognizer?.cancel()
                }
            } else {
                speechRecognizer?.stopListening()
                speechRecognizer?.cancel()
            }
            
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
                
                // Start listening for speech input
                try {
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
                
                // Add delay to ensure speech recognition audio focus is fully released
                coroutineScope.launch {
                    delay(200) // Give time for audio focus cleanup
                    try {
                        voiceProcessor.start()
                        Log.d(TAG, "Wake word detection re-enabled after cleanup delay")
                    } catch (e: Exception) {
                        Log.e(TAG, "Error re-enabling wake word detection", e)
                    }
                }
            }
            is VoiceState.WAKE_WORD_DETECTED -> {
                // Immediately stop wake word detection when wake word is detected
                Log.d(TAG, "Wake word detected, immediately stopping wake word detection")
                try {
                    voiceProcessor.stop()
                    
                    // Also ensure any pending wake word audio focus requests are cancelled
                    val audioManager = com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance()
                    val currentRequest = audioManager.getCurrentRequestInfo()
                    if (currentRequest?.requestType == com.anonymous.MobileJarvisNative.utils.AudioManager.AudioRequestType.BACKGROUND_AUDIO) {
                        Log.d(TAG, "Releasing wake word audio focus to make way for speech recognition")
                        audioManager.releaseAudioFocus(currentRequest.requestId)
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error stopping wake word detection", e)
                }
            }
            is VoiceState.LISTENING,
            is VoiceState.PROCESSING,
            is VoiceState.RESPONDING,
            is VoiceState.SPEAKING,
            is VoiceState.ERROR -> {
                // Ensure wake word detection stays paused during active conversation
                Log.d(TAG, "Active conversation state (${newState.javaClass.simpleName}), ensuring wake word detection is paused")
                try {
                    voiceProcessor.stop()
                    
                    // For LISTENING state, make sure speech recognizer is active
                    if (newState is VoiceState.LISTENING && !isListening) {
                        Log.d(TAG, "LISTENING state detected but isListening=false, reactivating speech recognizer")
                        // Use startListening() which handles threading properly
                        startListening()
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "Error ensuring wake word detection is paused", e)
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
            // Ensure we're on the main thread for speech recognizer operations
            if (Looper.myLooper() != Looper.getMainLooper()) {
                Log.d(TAG, "Destroying speech recognizer from background thread, posting to main thread")
                Handler(Looper.getMainLooper()).post {
                    speechRecognizer?.destroy()
                    speechRecognizer = null
                }
            } else {
                speechRecognizer?.destroy()
                speechRecognizer = null
            }
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
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Current retry count: $noSpeechRetryCount")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Max retries allowed: $MAX_NO_SPEECH_RETRIES")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Current voice state: ${_voiceState.value.javaClass.simpleName}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Audio focus state: ${com.anonymous.MobileJarvisNative.utils.AudioManager.getInstance().hasAudioFocus()}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: $isSpeechRecognitionInitialized")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Is listening flag: $isListening")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Available audio inputs: ${getAvailableAudioInputs()}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Audio permissions: ${checkAudioPermissions()}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Thread: ${Thread.currentThread().name}")
        
        // Increment retry counter
        noSpeechRetryCount++
        
        if (noSpeechRetryCount < MAX_NO_SPEECH_RETRIES) {
            // Show message to the user
            showMessage("I didn't hear anything. Listening again...")
            
            // Try again after a customizable delay
            coroutineScope.launch {
                // Get configurable delay from ConfigManager
                val retryDelayMs = configManager.getSpeechRetryDelayMs().toLong()
                Log.d(TAG, "Will retry speech recognition after $retryDelayMs ms")
                delay(retryDelayMs)
                
                try {
                    Log.d(TAG, "Retrying speech recognition (attempt $noSpeechRetryCount)")
                    startListening()
                    
                    // Log listening state for debugging
                    Log.d(TAG, "Speech recognition restarted, listening state: $isListening, voice state: ${_voiceState.value.javaClass.simpleName}")
                } catch (e: Exception) {
                    Log.e(TAG, "Error retrying speech recognition: ${e.message}", e)
                    showError("Unable to restart voice recognition")
                    resetToIdle()
                }
            }
        } else {
            // Max retries reached, reset to idle
            Log.d(TAG, "Maximum retry attempts reached ($MAX_NO_SPEECH_RETRIES), resetting to idle")
            showMessage("I didn't hear anything. Please try saying 'Jarvis' again when you're ready.")
            
            // Reset counter
            noSpeechRetryCount = 0
            
            // Allow message to be spoken before resetting
            coroutineScope.launch {
                // Get configurable delay from ConfigManager
                val finalMessageDelayMs = configManager.getSpeechFinalMessageDelayMs().toLong()
                Log.d(TAG, "Will reset to idle after $finalMessageDelayMs ms")
                delay(finalMessageDelayMs)
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
} 