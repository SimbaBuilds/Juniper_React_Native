package com.anonymous.MobileJarvisNative.utils

import android.content.Context
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager as AndroidAudioManager
import android.os.Build
import android.os.Looper
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
        SPEECH_RECOGNITION(1), // Highest priority - Speech recognition (post wake word)
        TTS(2),              // High priority - Text-to-speech
        WAKE_WORD_RESPONSE(3), // Medium priority - Wake word acknowledgment
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
        Log.d(TAG, "Requesting audio focus: $requestType (ID: $requestId)")
        
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
            // Handle same type requests (like SPEECH_RECOGNITION retries)
            if (currentRequest.requestType == requestType) {
                Log.d(TAG, "Same type request detected ($requestType), ensuring proper cleanup before new request")
                releaseCurrentAudioFocus()
                // Add a small delay to ensure cleanup completes
                try {
                    Thread.sleep(100)
                } catch (e: InterruptedException) {
                    Log.w(TAG, "Interrupted during audio focus cleanup delay")
                }
            } else if (requestType.priority < currentRequest.requestType.priority) {
                // Higher priority request - interrupt current
                Log.i(TAG, "Higher priority request ($requestType) interrupting current (${currentRequest.requestType})")
                interruptCurrentRequest()
            } else if (requestType.priority > currentRequest.requestType.priority) {
                // Lower priority - queue it
                Log.d(TAG, "Lower priority request ($requestType) queued behind current (${currentRequest.requestType})")
                requestQueue.offer(requestInfo)
                return false
            } else {
                // Same priority but different type - queue it
                Log.d(TAG, "Same priority request ($requestType) queued")
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
        return try {
            val audioAttributes = AudioAttributes.Builder()
                .setUsage(getAudioUsage(requestInfo.requestType))
                .setContentType(getAudioContentType(requestInfo.requestType))
                .build()
            
            val focusGain = getAudioFocusGain(requestInfo.requestType)
            
            val result = if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                val audioFocusRequest = AudioFocusRequest.Builder(focusGain)
                    .setAudioAttributes(audioAttributes)
                    .setAcceptsDelayedFocusGain(false)
                    .setWillPauseWhenDucked(false)
                    .setOnAudioFocusChangeListener { focusChange ->
                        handleAudioFocusChange(focusChange, requestInfo)
                    }
                    .build()
                
                currentAudioFocusRequest = audioFocusRequest
                androidAudioManager?.requestAudioFocus(audioFocusRequest) ?: AndroidAudioManager.AUDIOFOCUS_REQUEST_FAILED
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.requestAudioFocus(
                    { focusChange -> handleAudioFocusChange(focusChange, requestInfo) },
                    AndroidAudioManager.STREAM_MUSIC,
                    focusGain
                ) ?: AndroidAudioManager.AUDIOFOCUS_REQUEST_FAILED
            }
            
            val success = result == AndroidAudioManager.AUDIOFOCUS_REQUEST_GRANTED
            if (success) {
                currentRequestInfo = requestInfo
                _audioFocusState.value = AudioFocusState.GAINED
                Log.i(TAG, "Audio focus granted: ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
                requestInfo.onFocusGained?.invoke()
            } else {
                Log.w(TAG, "Audio focus denied: ${requestInfo.requestType} (ID: ${requestInfo.requestId})")
            }
            
            success
        } catch (e: Exception) {
            Log.e(TAG, "Error requesting audio focus for ${requestInfo.requestType}", e)
            false
        }
    }
    
    /**
     * Handle audio focus changes
     */
    private fun handleAudioFocusChange(focusChange: Int, requestInfo: AudioFocusRequestInfo) {
        when (focusChange) {
            AndroidAudioManager.AUDIOFOCUS_GAIN -> {
                _audioFocusState.value = AudioFocusState.GAINED
                Log.d(TAG, "Audio focus gained for ${requestInfo.requestType}")
                requestInfo.onFocusGained?.invoke()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS -> {
                _audioFocusState.value = AudioFocusState.LOST
                Log.i(TAG, "Permanent audio focus loss for ${requestInfo.requestType}")
                requestInfo.onFocusLost?.invoke()
                processNextRequest()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT -> {
                _audioFocusState.value = AudioFocusState.LOST_TRANSIENT
                Log.i(TAG, "Transient focus loss for ${requestInfo.requestType}")
                requestInfo.onFocusLost?.invoke()
                processNextRequest()
            }
            AndroidAudioManager.AUDIOFOCUS_LOSS_TRANSIENT_CAN_DUCK -> {
                _audioFocusState.value = AudioFocusState.DUCKED
                Log.d(TAG, "Audio focus ducked for ${requestInfo.requestType}")
                requestInfo.onFocusDucked?.invoke()
            }
        }
    }
    
    /**
     * Release audio focus for a specific request
     */
    fun releaseAudioFocus(requestId: String) {
        Log.d(TAG, "Releasing audio focus for ID: $requestId")
        
        val currentRequest = currentRequestInfo
        if (currentRequest?.requestId == requestId) {
            Log.i(TAG, "Releasing current focus holder ${currentRequest.requestType} (ID: $requestId)")
            releaseCurrentAudioFocus()
            processNextRequest()
        } else {
            // Remove from queue if it's there
            val removedCount = requestQueue.count { it.requestId == requestId }
            requestQueue.removeAll { it.requestId == requestId }
            if (removedCount > 0) {
                Log.d(TAG, "Removed $removedCount request(s) with ID $requestId from queue")
            } else {
                Log.w(TAG, "No active request found with ID $requestId")
            }
        }
    }
    
    /**
     * Release current audio focus
     */
    private fun releaseCurrentAudioFocus() {
        try {
            currentRequestInfo?.let { request ->
                Log.i(TAG, "Abandoning audio focus: ${request.requestType} (ID: ${request.requestId})")
            }
            
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O && currentAudioFocusRequest != null) {
                androidAudioManager?.abandonAudioFocusRequest(currentAudioFocusRequest!!)
                currentAudioFocusRequest = null
            } else {
                @Suppress("DEPRECATION")
                androidAudioManager?.abandonAudioFocus(null)
            }
            
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
        currentRequestInfo?.let { current ->
            Log.i(TAG, "Interrupting current request ${current.requestType} (ID: ${current.requestId}) for higher priority")
        }
        currentRequestInfo?.onFocusLost?.invoke()
        releaseCurrentAudioFocus()
    }
    
    /**
     * Process next request in queue
     */
    private fun processNextRequest() {
        coroutineScope.launch {
            val nextRequest = requestQueue.poll()
            if (nextRequest != null) {
                Log.i(TAG, "Processing queued request ${nextRequest.requestType} (ID: ${nextRequest.requestId})")
                processAudioFocusRequest(nextRequest)
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
            AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT
            AudioRequestType.BACKGROUND_AUDIO -> AndroidAudioManager.AUDIOFOCUS_GAIN
        }
    }
    
    /**
     * Check if audio focus is currently held
     */
    fun hasAudioFocus(): Boolean {
        return _audioFocusState.value == AudioFocusState.GAINED
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
        Log.d(TAG, "Clearing all audio focus requests")
        requestQueue.clear()
        releaseCurrentAudioFocus()
    }
} 