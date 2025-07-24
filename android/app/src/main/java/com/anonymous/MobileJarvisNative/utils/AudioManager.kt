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
    private val TRANSIENT_LOSS_GRACE_PERIOD_MS = 1000L // Wait 1000ms for focus to return - speech recognizer needs ~292ms to initialize
    
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
        androidAudioManager = context.getSystemService(Context.AUDIO_SERVICE) as AndroidAudioManager
        Log.i(TAG, "AudioManager initialized")
    }
    
    /**
     * Request audio focus with priority queuing
     */
    fun requestAudioFocus(
        requestType: AudioRequestType,
        requestId: String,
        onFocusGained: (() -> Unit)? = null,
        onFocusLost: (() -> Unit)? = null,
        onFocusDucked: (() -> Unit)? = null
    ): Boolean {
        Log.d(TAG, "🎵 Audio focus requested: $requestType (ID: $requestId)")
        
        val requestInfo = AudioFocusRequestInfo(
            requestType = requestType,
            requestId = requestId,
            onFocusGained = onFocusGained,
            onFocusLost = onFocusLost,
            onFocusDucked = onFocusDucked
        )
        
        // Check if we should interrupt current request based on priority
        val currentRequest = currentRequestInfo
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
                // Same request - ignore duplicate
                Log.d(TAG, "🎵 Duplicate request ignored: $requestType (ID: ${requestInfo.requestId})")
                return true // Act as if granted since it's already active
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
                    .setOnAudioFocusChangeListener { focusChange ->
                        val changeTimestamp = System.currentTimeMillis()
                        val timeSinceRequest = changeTimestamp - requestTimestamp
                        Log.w(TAG, "🔥 AUDIO_FOCUS_DEBUG: Focus change occurred ${timeSinceRequest}ms after request")
                        handleAudioFocusChange(focusChange, requestInfo)
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
                        handleAudioFocusChange(focusChange, requestInfo) 
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
    private fun handleAudioFocusChange(focusChange: Int, requestInfo: AudioFocusRequestInfo) {
        val timestamp = System.currentTimeMillis()
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
                
                requestInfo.onFocusLost?.invoke()
                processNextRequest()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                _audioFocusState.value = AudioFocusState.LOST_TRANSIENT
                Log.w(TAG, "🔥 Audio focus LOST_TRANSIENT at $timestamp")
                
                // Handle transient loss gracefully - don't immediately call onFocusLost
                isInTransientLoss = true
                transientLossStartTime = timestamp
                
                Log.i(TAG, "🔄 TRANSIENT_RECOVERY: Starting grace period (${TRANSIENT_LOSS_GRACE_PERIOD_MS}ms) for focus recovery")
                
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
     */
    private fun getAudioFocusGain(requestType: AudioRequestType): Int {
        return when (requestType) {
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT
            AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN
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
} 