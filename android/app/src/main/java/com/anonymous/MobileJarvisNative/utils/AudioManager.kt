package com.anonymous.MobileJarvisNative.utils

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager as AndroidAudioManager
import android.os.Build
import android.util.Log
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow
import kotlinx.coroutines.launch
import java.util.concurrent.ConcurrentLinkedQueue

/**
 * Centralized Audio Manager for handling all audio focus requests
 * Prevents multiple audio systems from competing for resources
 */
class AudioManager private constructor() {
    private val TAG = "AudioManager"
    
    // Context for system services
    private lateinit var context: Context
    
    // Android AudioManager
    private var androidAudioManager: AndroidAudioManager? = null
    private var currentAudioFocusRequest: AudioFocusRequest? = null
    
    // Audio focus state
    private val _audioFocusState = MutableStateFlow<AudioFocusState>(AudioFocusState.NONE)
    val audioFocusState: StateFlow<AudioFocusState> = _audioFocusState.asStateFlow()
    
    // Request queue for priority management
    private val requestQueue = ConcurrentLinkedQueue<AudioFocusRequestInfo>()
    private var currentRequestInfo: AudioFocusRequestInfo? = null
    
    // Transient focus loss handling
    private var isInTransientLoss = false
    private var transientLossStartTime = 0L
    private val TRANSIENT_LOSS_GRACE_PERIOD_MS = 1500L // Extended to 1500ms for better Google Assistant compatibility
    
    // Google Assistant conflict mitigation (Optimized based on successful beep fix)
    private var lastSpeechRecognitionAttempt = 0L
    private var consecutiveFailures = 0
    private val MAX_CONSECUTIVE_FAILURES = 3
    
    // Coroutine scope for async operations
    private val coroutineScope = CoroutineScope(Dispatchers.Main)
    
    companion object {
        @Volatile
        private var instance: AudioManager? = null
        
        fun getInstance(): AudioManager {
            return instance ?: synchronized(this) {
                instance ?: AudioManager().also { instance = it }
            }
        }
    }
    
    /**
     * Audio focus states
     */
    enum class AudioFocusState {
        NONE,           // No audio focus
        GAINED,         // Audio focus gained
        LOST,           // Audio focus lost
        LOST_TRANSIENT, // Audio focus lost temporarily
        DUCKED          // Audio focus ducked (lowered volume)
    }
    
    /**
     * Audio request types with priorities
     */
    enum class AudioRequestType(val priority: Int) {
        TTS(1),              // Highest priority - Text-to-speech
        WAKE_WORD_RESPONSE(2), // Wake word acknowledgment
        SPEECH_RECOGNITION(3), // Speech recognition
        BACKGROUND_AUDIO(4)    // Lowest priority - Background audio
    }
    
    /**
     * Audio focus request information
     */
    data class AudioFocusRequestInfo(
        val requestType: AudioRequestType,
        val requestId: String,
        val onFocusGained: (() -> Unit)? = null,
        val onFocusLost: (() -> Unit)? = null,
        val onFocusDucked: (() -> Unit)? = null
    )
    
    /**
     * Initialize the audio manager
     */
    fun initialize(context: Context) {
        this.context = context
        androidAudioManager = context.getSystemService(Context.AUDIO_SERVICE) as AndroidAudioManager
        Log.i(TAG, "AudioManager initialized")
    }
    
    /**
     * Request audio focus with priority queuing and Google Assistant conflict mitigation
     */
    fun requestAudioFocus(
        requestType: AudioRequestType,
        requestId: String,
        onFocusGained: (() -> Unit)? = null,
        onFocusLost: (() -> Unit)? = null,
        onFocusDucked: (() -> Unit)? = null
    ): Boolean {
        // Special protection: Never allow wake word detection to interrupt active speech recognition
        val currentRequest = currentRequestInfo
        if (currentRequest?.requestType == AudioRequestType.SPEECH_RECOGNITION && 
            requestType == AudioRequestType.BACKGROUND_AUDIO) {
            Log.w(TAG, "\ud83d\udeab SPEECH_PROTECTION: Blocking wake word detection during active speech recognition")
            Log.w(TAG, "\ud83d\udeab SPEECH_PROTECTION: Speech recognition in progress, wake word detection denied")
            return false // Don't even queue it - just deny
        }
        
        // Apply Google Assistant conflict mitigation for speech recognition
        if (requestType == AudioRequestType.SPEECH_RECOGNITION) {
            return requestSpeechRecognitionFocusWithMitigation(
                requestId, onFocusGained, onFocusLost, onFocusDucked
            )
        }
        Log.d(TAG, "🎵 Audio focus requested: $requestType (ID: $requestId)")
        
        val requestInfo = AudioFocusRequestInfo(
            requestType = requestType,
            requestId = requestId,
            onFocusGained = onFocusGained,
            onFocusLost = onFocusLost,
            onFocusDucked = onFocusDucked
        )
        
        // Check if we should interrupt current request based on priority
        if (currentRequest != null) {
            if (requestType.priority < currentRequest.requestType.priority) {
                // Higher priority request - interrupt current
                Log.d(TAG, "🎵 Higher priority request ($requestType) interrupting current (${currentRequest.requestType})")
                interruptCurrentRequest()
            } else if (requestType.priority > currentRequest.requestType.priority) {
                // Lower priority - queue it and do NOT interrupt
                Log.w(TAG, "📛 PRIORITY_ENFORCEMENT: Lower priority request ($requestType) BLOCKED by higher priority (${currentRequest.requestType})")
                Log.w(TAG, "📛 PRIORITY_ENFORCEMENT: Queuing $requestType until ${currentRequest.requestType} completes")
                requestQueue.offer(requestInfo)
                return false
            } else if (requestType == currentRequest.requestType && requestInfo.requestId == currentRequest.requestId) {
                // Same request - but for speech recognition, don't bypass mitigation
                if (requestType == AudioRequestType.SPEECH_RECOGNITION) {
                    Log.w(TAG, "🎤 DUPLICATE_FIX: Speech recognition duplicate detected - applying mitigation anyway")
                    // Force through Google Assistant mitigation for speech recognition
                    return requestSpeechRecognitionFocusWithMitigation(
                        requestId, onFocusGained, onFocusLost, onFocusDucked
                    )
                } else {
                    Log.d(TAG, "🎵 Duplicate request ignored: $requestType (ID: ${requestInfo.requestId})")
                    return true // Act as if granted since it's already active
                }
            } else {
                // Same priority different request - queue it
                Log.d(TAG, "🎵 Same priority request ($requestType) queued behind current (${currentRequest.requestType})")
                requestQueue.offer(requestInfo)
                return false
            }
        }
        
        // Process the request immediately
        return processAudioFocusRequest(requestInfo)
    }
    
    /**
     * Request speech recognition focus with optimized Google Assistant conflict mitigation
     */
    private fun requestSpeechRecognitionFocusWithMitigation(
        requestId: String,
        onFocusGained: (() -> Unit)? = null,
        onFocusLost: (() -> Unit)? = null,
        onFocusDucked: (() -> Unit)? = null
    ): Boolean {
        val currentTime = System.currentTimeMillis()
        val timeSinceLastAttempt = currentTime - lastSpeechRecognitionAttempt
        
        Log.d(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Speech recognition focus requested")
        Log.d(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Time since last attempt: ${timeSinceLastAttempt}ms")
        Log.d(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Consecutive failures: $consecutiveFailures")
        
        // Optimized: Only apply delays after actual failures (not on first successful attempt)
        if (consecutiveFailures > 0) {
            // Research-based progressive delay with more aggressive backoff
            val additionalDelay = when {
                consecutiveFailures == 1 -> 1000L // Reduced from 3000ms
                consecutiveFailures == 2 -> 2000L // Reduced from 5000ms
                else -> 3000L // Reduced from 8000ms max
            }
            
            // Check if we need to wait before attempting speech recognition
            if (timeSinceLastAttempt < additionalDelay) {
                val remainingDelay = additionalDelay - timeSinceLastAttempt
                Log.i(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Applying ${remainingDelay}ms delay after ${consecutiveFailures} failures")
                
                // Use coroutine to delay the request
                coroutineScope.launch {
                    kotlinx.coroutines.delay(remainingDelay)
                    Log.d(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Delay completed, proceeding with focus request")
                    performSpeechRecognitionFocusRequest(requestId, onFocusGained, onFocusLost, onFocusDucked)
                }
                return true // Indicate that request will be processed
            }
        }
        
        // For first attempts or when enough time has passed, proceed immediately
        return performSpeechRecognitionFocusRequest(requestId, onFocusGained, onFocusLost, onFocusDucked)
    }
    
    /**
     * Actually perform the speech recognition focus request
     */
    private fun performSpeechRecognitionFocusRequest(
        requestId: String,
        onFocusGained: (() -> Unit)? = null,
        onFocusLost: (() -> Unit)? = null,
        onFocusDucked: (() -> Unit)? = null
    ): Boolean {
        lastSpeechRecognitionAttempt = System.currentTimeMillis()
        
        Log.d(TAG, "🎵 Audio focus requested: SPEECH_RECOGNITION (ID: $requestId)")
        
        val requestInfo = AudioFocusRequestInfo(
            requestType = AudioRequestType.SPEECH_RECOGNITION,
            requestId = requestId,
            onFocusGained = {
                Log.i(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Speech recognition focus gained successfully")
                consecutiveFailures = 0 // Reset failure count on success
                onFocusGained?.invoke()
            },
            onFocusLost = {
                Log.w(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Speech recognition focus lost")
                consecutiveFailures++
                if (consecutiveFailures > MAX_CONSECUTIVE_FAILURES) {
                    consecutiveFailures = MAX_CONSECUTIVE_FAILURES // Cap at max
                }
                onFocusLost?.invoke()
            },
            onFocusDucked = onFocusDucked
        )
        
        // Enhanced priority enforcement for speech recognition
        val currentRequest = currentRequestInfo
        if (currentRequest != null) {
            if (AudioRequestType.SPEECH_RECOGNITION.priority < currentRequest.requestType.priority) {
                // Higher priority request - interrupt current
                Log.d(TAG, "🎵 Higher priority request (SPEECH_RECOGNITION) interrupting current (${currentRequest.requestType})")
                interruptCurrentRequest()
            } else if (AudioRequestType.SPEECH_RECOGNITION.priority > currentRequest.requestType.priority) {
                // Lower priority - queue it and do NOT interrupt
                Log.w(TAG, "📛 PRIORITY_ENFORCEMENT: Lower priority request (SPEECH_RECOGNITION) BLOCKED by higher priority (${currentRequest.requestType})")
                Log.w(TAG, "📛 PRIORITY_ENFORCEMENT: Queuing SPEECH_RECOGNITION until ${currentRequest.requestType} completes")
                requestQueue.offer(requestInfo)
                return false
            } else if (currentRequest.requestType == AudioRequestType.BACKGROUND_AUDIO) {
                // Special case: Speech recognition should ALWAYS interrupt wake word detection
                Log.i(TAG, "🎤 PRIORITY_FIX: Speech recognition interrupting wake word detection")
                interruptCurrentRequest()
            } else if (requestInfo.requestId == currentRequest.requestId) {
                // Same request - but still apply mitigation timing
                Log.w(TAG, "🎤 DUPLICATE_FIX: Same speech recognition request - applying timing anyway")
                // Don't return early, continue with processing
            } else {
                // Same priority different request - queue it
                Log.d(TAG, "🎵 Same priority request (SPEECH_RECOGNITION) queued behind current (${currentRequest.requestType})")
                requestQueue.offer(requestInfo)
                return false
            }
        }
        
        // Process the request immediately
        return processAudioFocusRequest(requestInfo)
    }
    
    /**
     * Process an audio focus request
     */
    private fun processAudioFocusRequest(requestInfo: AudioFocusRequestInfo): Boolean {
        val requestTimestamp = System.currentTimeMillis()
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: ========== REQUESTING AUDIO FOCUS ===========")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request timestamp: $requestTimestamp")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request type: ${requestInfo.requestType}")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request ID: ${requestInfo.requestId}")
        
        return try {
            val audioAttributes = AudioAttributes.Builder()
                .setUsage(getAudioUsage(requestInfo.requestType))
                .setContentType(getAudioContentType(requestInfo.requestType))
                .build()
            
            val focusGain = getAudioFocusGain(requestInfo.requestType)
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus gain type: $focusGain")
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Audio usage: ${getAudioUsage(requestInfo.requestType)}")
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Content type: ${getAudioContentType(requestInfo.requestType)}")
            
            val result = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val audioFocusRequest = AudioFocusRequest.Builder(focusGain)
                    .setAudioAttributes(audioAttributes)
                    .setAcceptsDelayedFocusGain(requestInfo.requestType == AudioRequestType.SPEECH_RECOGNITION)
                    .setWillPauseWhenDucked(requestInfo.requestType != AudioRequestType.SPEECH_RECOGNITION)
                    // Enhanced Google Assistant conflict mitigation for speech recognition
                    .apply {
                        if (requestInfo.requestType == AudioRequestType.SPEECH_RECOGNITION) {
                            // Use aggressive settings for speech recognition
                            setAcceptsDelayedFocusGain(false) // Don't accept delays - we need focus NOW
                            setWillPauseWhenDucked(false) // Don't pause when ducked, continue listening
                            
                            // Force ducking on API 28+ for aggressive focus
                            if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.P) {
                                try {
                                    val method = this::class.java.getDeclaredMethod("setForceDucking", Boolean::class.java)
                                    method.isAccessible = true
                                    method.invoke(this, true)
                                    Log.d(TAG, "🛡️ AGGRESSIVE_FOCUS: Applied force ducking for speech recognition")
                                } catch (e: Exception) {
                                    Log.d(TAG, "🛡️ AGGRESSIVE_FOCUS: Force ducking not available: ${e.message}")
                                }
                            }
                            
                            Log.d(TAG, "🛡️ AGGRESSIVE_FOCUS: Applied aggressive audio focus settings for speech recognition")
                        }
                    }
                    .setOnAudioFocusChangeListener { focusChange ->
                        val changeTimestamp = System.currentTimeMillis()
                        val timeSinceRequest = changeTimestamp - requestTimestamp
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus change occurred ${timeSinceRequest}ms after request")
                        handleAudioFocusChange(focusChange, requestInfo, requestTimestamp)
                    }
                    .build()
                
                currentAudioFocusRequest = audioFocusRequest
                Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: About to call requestAudioFocus() on Android AudioManager")
                androidAudioManager?.requestAudioFocus(audioFocusRequest)
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.requestAudioFocus(
                    { focusChange -> 
                        val changeTimestamp = System.currentTimeMillis()
                        val timeSinceRequest = changeTimestamp - requestTimestamp
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus change occurred ${timeSinceRequest}ms after request (legacy API)")
                        handleAudioFocusChange(focusChange, requestInfo, requestTimestamp) 
                    },
                    AndroidAudioManager.STREAM_MUSIC,
                    focusGain
                )
            }
            
            val grantTimestamp = System.currentTimeMillis()
            val requestDuration = grantTimestamp - requestTimestamp
            val success = result == AndroidAudioManager.AUDIOFOCUS_REQUEST_GRANTED
            
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request completed in ${requestDuration}ms")
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Result: $result (granted=$success)")
            
            if (success) {
                currentRequestInfo = requestInfo
                _audioFocusState.value = AudioFocusState.GAINED
                Log.i(TAG, "🎵 Audio focus granted for ${requestInfo.requestType} (ID: ${requestInfo.requestId}) at $grantTimestamp")
                
                // Start timer to track when focus might be lost
                coroutineScope.launch {
                    kotlinx.coroutines.delay(100) // Check after 100ms
                    if (currentRequestInfo?.requestId == requestInfo.requestId && hasAudioFocus()) {
                        Log.i(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus still held after 100ms for ${requestInfo.requestType}")
                    } else {
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus lost within 100ms for ${requestInfo.requestType}!")
                    }
                }
                
                requestInfo.onFocusGained?.invoke()
            } else {
                Log.w(TAG, "🎵 Audio focus denied for ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
            }
            
            Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: ======================================================")
            success
        } catch (e: Exception) {
            Log.e(TAG, "🔥 AUDIO_FOCUS_DEBUG: Error requesting audio focus for ${requestInfo.requestType}", e)
            false
        }
    }
    
    /**
     * Handle audio focus changes
     */
    private fun handleAudioFocusChange(focusChange: Int, requestInfo: AudioFocusRequestInfo, originalRequestTimestamp: Long = 0L) {
        val timestamp = System.currentTimeMillis()
        val timeSinceOriginalRequest = if (originalRequestTimestamp > 0L) {
            timestamp - originalRequestTimestamp
        } else 0L
        val focusChangeDescription = when (focusChange) {
            AndroidAudioManager.AUDIOFOCUS_GAIN -> "AUDIOFOCUS_GAIN"
            AndroidAudioManager.AUDIOFOCUS_LOSS -> "AUDIOFOCUS_LOSS"
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> "AUDIOFOCUS_LOSS_TRANSIENT"
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> "AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK"
            else -> "UNKNOWN_FOCUS_CHANGE_$focusChange"
        }
        
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: ========== FOCUS CHANGE DETECTED ===========")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Timestamp: $timestamp")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus change: $focusChangeDescription ($focusChange)")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Time since original request: ${timeSinceOriginalRequest}ms")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request type: ${requestInfo.requestType}")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Request ID: ${requestInfo.requestId}")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Previous state: ${_audioFocusState.value}")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Thread: ${Thread.currentThread().name}")
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Stack trace:")
        
        // Log the call stack to see what's causing the focus change
        val stackTrace = Thread.currentThread().stackTrace
        stackTrace.forEachIndexed { index, element ->
            if (index < 10) { // Limit to first 10 stack frames
                Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: [$index] ${element.className}.${element.methodName}:${element.lineNumber}")
            }
        }
        
        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: ======================================================")
        
        // Detect who stole audio focus when we lose it
        if (focusChange == AndroidAudioManager.AUDIOFOCUS_LOSS || 
            focusChange == AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT) {
            detectAudioFocusThief()
        }
        
        when (focusChange) {
            AndroidAudioManager.AUDIOFOCUS_GAIN -> {
                _audioFocusState.value = AudioFocusState.GAINED
                
                // Check if this is recovery from transient loss
                if (isInTransientLoss) {
                    val recoveryTime = timestamp - transientLossStartTime
                    Log.i(TAG, "🔄 TRANSIENT_RECOVERY: Focus regained after ${recoveryTime}ms - canceling grace period")
                    
                    // Reset transient loss state
                    isInTransientLoss = false
                    transientLossStartTime = 0L
                    
                    // Don't call onFocusGained again if we're just recovering
                    Log.i(TAG, "🎵 Audio focus RECOVERED at $timestamp (transient loss resolved)")
                } else {
                    Log.i(TAG, "🎵 Audio focus GAINED at $timestamp")
                    requestInfo.onFocusGained?.invoke()
                }
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS -> {
                _audioFocusState.value = AudioFocusState.LOST
                Log.w(TAG, "🔥 Audio focus LOST at $timestamp - investigating cause")
                
                // Additional debugging for focus loss
                try {
                    val audioManager = androidAudioManager
                    if (audioManager != null) {
                        val mode = audioManager.mode
                        val isMusicActive = audioManager.isMusicActive
                        val isBluetoothScoOn = audioManager.isBluetoothScoOn
                        val isSpeakerphoneOn = audioManager.isSpeakerphoneOn
                        val isMicrophoneMute = audioManager.isMicrophoneMute
                        
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Audio system state when focus lost:")
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: - Mode: $mode")
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: - Music active: $isMusicActive")
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: - Bluetooth SCO: $isBluetoothScoOn")
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: - Speakerphone: $isSpeakerphoneOn")
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: - Microphone muted: $isMicrophoneMute")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "🔥 AUDIO_FOCUS_DEBUG: Error getting audio system state", e)
                }
                
                // Aggressive focus defense: Immediately try to reclaim focus for speech recognition
                if (requestInfo.requestType == AudioRequestType.SPEECH_RECOGNITION && currentRequestInfo?.requestId == requestInfo.requestId) {
                    Log.w(TAG, "🚫 AGGRESSIVE_FOCUS_DEFENSE: Speech recognition focus stolen! Attempting immediate reclaim...")
                    
                    // Attempt to reclaim focus after a very short delay
                    coroutineScope.launch {
                        kotlinx.coroutines.delay(50) // 50ms delay
                        
                        // Check if we still need to reclaim (not already cancelled)
                        if (currentRequestInfo?.requestId == requestInfo.requestId) {
                            Log.w(TAG, "🚫 AGGRESSIVE_FOCUS_DEFENSE: Reclaiming audio focus for speech recognition")
                            
                            // Re-request focus
                            val reclaimResult = processAudioFocusRequest(requestInfo)
                            
                            if (reclaimResult) {
                                Log.i(TAG, "✅ AGGRESSIVE_FOCUS_DEFENSE: Successfully reclaimed audio focus!")
                                // Don't call onFocusLost since we recovered
                                return@launch
                            } else {
                                Log.e(TAG, "❌ AGGRESSIVE_FOCUS_DEFENSE: Failed to reclaim audio focus")
                            }
                        }
                        
                        // If we couldn't reclaim, then notify loss
                        requestInfo.onFocusLost?.invoke()
                        processNextRequest()
                    }
                } else {
                    // For non-speech recognition, handle normally
                    requestInfo.onFocusLost?.invoke()
                    processNextRequest()
                }
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                _audioFocusState.value = AudioFocusState.LOST_TRANSIENT
                Log.w(TAG, "🔥 Audio focus LOST_TRANSIENT at $timestamp")
                
                // Enhanced Google Assistant conflict handling
                if (requestInfo.requestType == AudioRequestType.SPEECH_RECOGNITION) {
                    Log.i(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Speech recognition transient loss detected - likely Google Assistant conflict")
                    
                    // Handle transient loss gracefully - don't immediately call onFocusLost
                    isInTransientLoss = true
                    transientLossStartTime = timestamp
                    
                    // Use extended grace period for speech recognition to handle Google Assistant conflicts
                    val extendedGracePeriod = if (consecutiveFailures > 0) {
                        TRANSIENT_LOSS_GRACE_PERIOD_MS + (consecutiveFailures * 500L) // Progressive increase
                    } else {
                        TRANSIENT_LOSS_GRACE_PERIOD_MS
                    }
                    
                    Log.i(TAG, "🔄 TRANSIENT_RECOVERY: Starting extended grace period (${extendedGracePeriod}ms) for speech recognition recovery")
                    
                    // Start a timer to wait for focus recovery
                    coroutineScope.launch {
                        kotlinx.coroutines.delay(extendedGracePeriod)
                        
                        // Check if we're still in transient loss after grace period
                        if (isInTransientLoss && currentRequestInfo?.requestId == requestInfo.requestId) {
                            val currentTime = System.currentTimeMillis()
                            val lossduration = currentTime - transientLossStartTime
                            
                            Log.w(TAG, "🔄 TRANSIENT_RECOVERY: Extended grace period expired after ${lossduration}ms - treating as permanent loss")
                            Log.w(TAG, "🎤 GOOGLE_ASSISTANT_MITIGATION: Speech recognition focus permanently lost - incrementing failure count")
                            
                            // Reset transient state
                            isInTransientLoss = false
                            transientLossStartTime = 0L
                            
                            // Now call the focus lost callback
                            requestInfo.onFocusLost?.invoke()
                            
                            // Process next request if available
                            processNextRequest()
                        }
                    }
                } else {
                    // Standard transient loss handling for non-speech recognition requests
                    isInTransientLoss = true
                    transientLossStartTime = timestamp
                    
                    Log.i(TAG, "🔄 TRANSIENT_RECOVERY: Starting standard grace period (${TRANSIENT_LOSS_GRACE_PERIOD_MS}ms) for focus recovery")
                    
                    // Start a timer to wait for focus recovery
                    coroutineScope.launch {
                        kotlinx.coroutines.delay(TRANSIENT_LOSS_GRACE_PERIOD_MS)
                        
                        // Check if we're still in transient loss after grace period
                        if (isInTransientLoss && currentRequestInfo?.requestId == requestInfo.requestId) {
                            val currentTime = System.currentTimeMillis()
                            val lossduration = currentTime - transientLossStartTime
                            
                            Log.w(TAG, "🔄 TRANSIENT_RECOVERY: Grace period expired after ${lossduration}ms - treating as permanent loss")
                            
                            // Reset transient state
                            isInTransientLoss = false
                            transientLossStartTime = 0L
                            
                            // Now call the focus lost callback
                            requestInfo.onFocusLost?.invoke()
                            
                            // Process next request if available
                            processNextRequest()
                        }
                    }
                }
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> {
                _audioFocusState.value = AudioFocusState.DUCKED
                Log.w(TAG, "🔥 Audio focus DUCKED at $timestamp")
                requestInfo.onFocusDucked?.invoke()
            }
        }
    }
    
    /**
     * Release audio focus for a specific request
     */
    fun releaseAudioFocus(requestId: String) {
        Log.d(TAG, "🎵 Audio focus release requested for ID: $requestId")
        
        val currentRequest = currentRequestInfo
        if (currentRequest?.requestId == requestId) {
            releaseCurrentAudioFocus()
            processNextRequest()
        } else {
            // Remove from queue if it's there
            requestQueue.removeAll { it.requestId == requestId }
            Log.d(TAG, "🎵 Removed request $requestId from queue")
        }
    }
    
    /**
     * Release current audio focus
     */
    private fun releaseCurrentAudioFocus() {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && currentAudioFocusRequest != null) {
                androidAudioManager?.abandonAudioFocusRequest(currentAudioFocusRequest!!)
                currentAudioFocusRequest = null
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.abandonAudioFocus(null)
            }
            
            currentRequestInfo?.let { request ->
                Log.d(TAG, "🎵 Audio focus released for ${request.requestType} (ID: ${request.requestId})")
            }
            
            // Reset transient loss state when releasing focus
            isInTransientLoss = false
            transientLossStartTime = 0L
            
            currentRequestInfo = null
            _audioFocusState.value = AudioFocusState.NONE
        } catch (e: Exception) {
            Log.e(TAG, "Error releasing audio focus", e)
        }
    }
    
    /**
     * Interrupt current request (for higher priority requests)
     */
    private fun interruptCurrentRequest() {
        val interrupted = currentRequestInfo
        Log.w(TAG, "📛 PRIORITY_ENFORCEMENT: Interrupting ${interrupted?.requestType} (ID: ${interrupted?.requestId}) for higher priority request")
        interrupted?.onFocusLost?.invoke()
        releaseCurrentAudioFocus()
    }
    
    /**
     * Process next request in queue
     */
    private fun processNextRequest() {
        coroutineScope.launch {
            val nextRequest = requestQueue.poll()
            if (nextRequest != null) {
                Log.d(TAG, "🎵 Processing next queued request: ${nextRequest.requestType} (ID: ${nextRequest.requestId})")
                
                // Add delay to prevent rapid focus switching
                kotlinx.coroutines.delay(50)
                
                processAudioFocusRequest(nextRequest)
            } else {
                Log.d(TAG, "🎵 No more requests in queue")
            }
        }
    }
    
    /**
     * Get audio usage based on request type
     */
    private fun getAudioUsage(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AudioAttributes.USAGE_ASSISTANT
            AudioRequestType.SPEECH_RECOGNITION -> AudioAttributes.USAGE_VOICE_COMMUNICATION
            AudioRequestType.BACKGROUND_AUDIO -> AudioAttributes.USAGE_MEDIA
        }
    }
    
    /**
     * Get audio content type based on request type
     */
    private fun getAudioContentType(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AudioAttributes.CONTENT_TYPE_SPEECH
            AudioRequestType.SPEECH_RECOGNITION -> AudioAttributes.CONTENT_TYPE_SPEECH
            AudioRequestType.BACKGROUND_AUDIO -> AudioAttributes.CONTENT_TYPE_MUSIC
        }
    }
    
    /**
     * Get audio focus gain type based on request type
     * Using AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE for aggressive focus defense
     */
    private fun getAudioFocusGain(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT
            AudioRequestType.SPEECH_RECOGNITION -> {
                // Use exclusive focus for speech recognition to prevent interruptions
                if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.KITKAT) {
                    AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT_EXCLUSIVE
                } else {
                    AndroidAudioManager.AUDIOFOCUS_GAIN
                }
            }
            AudioRequestType.BACKGROUND_AUDIO -> AndroidAudioManager.AUDIOFOCUS_GAIN
        }
    }
    
    /**
     * Check if audio focus is currently held
     */
    fun hasAudioFocus(): Boolean {
        // Consider focus as held if we have it OR if we're just in transient loss
        return _audioFocusState.value == AudioFocusState.GAINED || 
               (_audioFocusState.value == AudioFocusState.LOST_TRANSIENT && isInTransientLoss)
    }
    
    /**
     * Get current audio focus holder info
     */
    fun getCurrentRequestInfo(): AudioFocusRequestInfo? {
        return currentRequestInfo
    }
    
    /**
     * Clear all pending requests (for cleanup)
     */
    fun clearAllRequests() {
        Log.d(TAG, "🎵 Clearing all audio focus requests")
        requestQueue.clear()
        
        // Reset transient loss state
        isInTransientLoss = false
        transientLossStartTime = 0L
        
        releaseCurrentAudioFocus()
    }
    
    /**
     * Check if currently in transient focus loss (for debugging)
     */
    fun isInTransientFocusLoss(): Boolean {
        return isInTransientLoss
    }
    
    /**
     * Get time since transient focus loss started (for debugging)
     */
    fun getTransientLossDuration(): Long {
        return if (isInTransientLoss) {
            System.currentTimeMillis() - transientLossStartTime
        } else {
            0L
        }
    }
    
    /**
     * Get Google Assistant mitigation status (for debugging)
     */
    fun getGoogleAssistantMitigationStatus(): String {
        val timeSinceLastAttempt = System.currentTimeMillis() - lastSpeechRecognitionAttempt
        return "Consecutive failures: $consecutiveFailures, Time since last attempt: ${timeSinceLastAttempt}ms"
    }
    
    /**
     * Detect which app or service stole audio focus
     */
    private fun detectAudioFocusThief() {
        try {
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: ========== DETECTING AUDIO FOCUS THIEF ===========")
            
            val audioManager = androidAudioManager ?: return
            
            // Check audio mode to detect phone calls or VoIP
            val mode = audioManager.mode
            val modeString = when (mode) {
                AndroidAudioManager.MODE_NORMAL -> "NORMAL"
                AndroidAudioManager.MODE_RINGTONE -> "RINGTONE (Incoming call)"
                AndroidAudioManager.MODE_IN_CALL -> "IN_CALL (Active phone call)"
                AndroidAudioManager.MODE_IN_COMMUNICATION -> "IN_COMMUNICATION (VoIP call)"
                else -> "UNKNOWN_MODE_$mode"
            }
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: Audio mode: $modeString")
            
            // Check if music is playing (likely media app)
            if (audioManager.isMusicActive) {
                Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: Music is active - likely a media player app")
            }
            
            // Check Bluetooth SCO (headset/car)
            if (audioManager.isBluetoothScoOn) {
                Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: Bluetooth SCO is on - likely Bluetooth device or car system")
            }
            
            // Try to detect active audio apps using reflection (Android internal API)
            try {
                val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as android.app.ActivityManager
                val runningApps = activityManager.runningAppProcesses
                
                // Common audio focus thieves
                val suspectPackages = listOf(
                    "com.google.android.googlequicksearchbox", // Google Assistant
                    "com.google.android.apps.googleassistant", // Google Assistant app
                    "com.android.systemui", // System UI (notifications)
                    "com.google.android.gm", // Gmail notifications
                    "com.google.android.apps.messaging", // Messages
                    "com.google.android.dialer", // Phone
                    "com.google.android.music", // Google Play Music
                    "com.google.android.youtube", // YouTube
                    "com.spotify.music", // Spotify
                    "com.amazon.mp3", // Amazon Music
                    "com.google.android.apps.maps", // Google Maps (navigation voice)
                    "com.waze" // Waze (navigation voice)
                )
                
                for (app in runningApps) {
                    if (app.importance == android.app.ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND ||
                        app.importance == android.app.ActivityManager.RunningAppProcessInfo.IMPORTANCE_FOREGROUND_SERVICE) {
                        
                        val packageName = app.processName
                        if (suspectPackages.any { packageName.contains(it) }) {
                            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: 🚨 SUSPECT FOUND: $packageName (foreground)")
                        }
                    }
                }
                
                // Check recent tasks for Google Assistant
                val recentTasks = activityManager.getRecentTasks(5, 0)
                for (task in recentTasks) {
                    val componentName = task.baseIntent?.component
                    if (componentName != null) {
                        val packageName = componentName.packageName
                        if (packageName.contains("googlequicksearchbox") || 
                            packageName.contains("googleassistant")) {
                            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: 🎯 Google Assistant in recent tasks: $packageName")
                        }
                    }
                }
            } catch (e: Exception) {
                Log.d(TAG, "🕵️ FOCUS_THIEF_DETECTION: Could not check running apps: ${e.message}")
            }
            
            // Check notification state
            try {
                val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as android.app.NotificationManager
                val currentInterruptionFilter = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                    when (notificationManager.currentInterruptionFilter) {
                        android.app.NotificationManager.INTERRUPTION_FILTER_ALL -> "ALL (Normal)"
                        android.app.NotificationManager.INTERRUPTION_FILTER_PRIORITY -> "PRIORITY (Do Not Disturb)"
                        android.app.NotificationManager.INTERRUPTION_FILTER_NONE -> "NONE (Total Silence)"
                        android.app.NotificationManager.INTERRUPTION_FILTER_ALARMS -> "ALARMS_ONLY"
                        else -> "UNKNOWN"
                    }
                } else {
                    "Not available (API < 23)"
                }
                Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: Notification interruption filter: $currentInterruptionFilter")
            } catch (e: Exception) {
                Log.d(TAG, "🕵️ FOCUS_THIEF_DETECTION: Could not check notification state: ${e.message}")
            }
            
            // Log audio streams volumes to detect notification sounds
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: Audio stream volumes:")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_VOICE_CALL: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_VOICE_CALL)}")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_SYSTEM: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_SYSTEM)}")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_RING: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_RING)}")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_MUSIC: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_MUSIC)}")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_ALARM: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_ALARM)}")
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: - STREAM_NOTIFICATION: ${audioManager.getStreamVolume(AndroidAudioManager.STREAM_NOTIFICATION)}")
            
            Log.w(TAG, "🕵️ FOCUS_THIEF_DETECTION: ====================================================")
        } catch (e: Exception) {
            Log.e(TAG, "🕵️ FOCUS_THIEF_DETECTION: Error detecting audio focus thief", e)
        }
    }
} 