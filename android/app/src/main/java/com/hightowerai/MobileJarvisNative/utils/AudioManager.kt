package com.hightowerai.MobileJarvisNative.utils

import android.bluetooth.BluetoothHeadset
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.media.AudioAttributes
import android.media.AudioFocusRequest
import android.media.AudioManager as AndroidAudioManager
import android.os.Build
import android.os.Handler
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
    private var context: Context? = null
    
    // Audio focus state
    private val _audioFocusState = MutableStateFlow<AudioFocusState>(AudioFocusState.NONE)
    val audioFocusState: StateFlow<AudioFocusState> = _audioFocusState.asStateFlow()
    
    // Request queue for priority management
    private val requestQueue = ConcurrentLinkedQueue<AudioFocusRequestInfo>()
    private var currentRequestInfo: AudioFocusRequestInfo? = null
    
    // Bluetooth audio route monitoring
    private var bluetoothReceiver: BroadcastReceiver? = null
    private var isBluetoothReceiverRegistered = false
    private val mainHandler = Handler(Looper.getMainLooper())
    
    // Audio route change listeners
    private val audioRouteChangeListeners = mutableListOf<(Boolean) -> Unit>()
    
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
        this.context = context
        androidAudioManager = context.getSystemService(Context.AUDIO_SERVICE) as AndroidAudioManager
        setupBluetoothAudioRouteMonitoring()
        Log.i(TAG, "AudioManager initialized with Bluetooth monitoring")
    }
    
    /**
     * Setup Bluetooth audio route monitoring
     */
    private fun setupBluetoothAudioRouteMonitoring() {
        Log.d(TAG, "Setting up Bluetooth audio route monitoring...")
        
        bluetoothReceiver = object : BroadcastReceiver() {
            override fun onReceive(context: Context?, intent: Intent?) {
                when (intent?.action) {
                    AndroidAudioManager.ACTION_SCO_AUDIO_STATE_UPDATED -> {
                        val state = intent.getIntExtra(AndroidAudioManager.EXTRA_SCO_AUDIO_STATE, -1)
                        handleScoAudioStateChange(state)
                    }
                    AndroidAudioManager.ACTION_HEADSET_PLUG -> {
                        val state = intent.getIntExtra("state", -1)
                        val name = intent.getStringExtra("name")
                        handleHeadsetPlugChange(state, name)
                    }
                    BluetoothHeadset.ACTION_CONNECTION_STATE_CHANGED -> {
                        val state = intent.getIntExtra(BluetoothHeadset.EXTRA_STATE, -1)
                        handleBluetoothConnectionStateChange(state)
                    }
                    BluetoothHeadset.ACTION_AUDIO_STATE_CHANGED -> {
                        val state = intent.getIntExtra(BluetoothHeadset.EXTRA_STATE, -1)
                        handleBluetoothAudioStateChange(state)
                    }
                }
            }
        }
        
        // Register the receiver
        registerBluetoothReceiver()
    }
    
    private fun registerBluetoothReceiver() {
        context?.let { ctx ->
            if (!isBluetoothReceiverRegistered && bluetoothReceiver != null) {
                val filter = IntentFilter().apply {
                    addAction(AndroidAudioManager.ACTION_SCO_AUDIO_STATE_UPDATED)
                    addAction(AndroidAudioManager.ACTION_HEADSET_PLUG)
                    addAction(BluetoothHeadset.ACTION_CONNECTION_STATE_CHANGED)
                    addAction(BluetoothHeadset.ACTION_AUDIO_STATE_CHANGED)
                }
                
                try {
                    ctx.registerReceiver(bluetoothReceiver, filter)
                    isBluetoothReceiverRegistered = true
                    Log.d(TAG, "Bluetooth audio route receiver registered")
                } catch (e: Exception) {
                    Log.e(TAG, "Failed to register Bluetooth receiver: ${e.message}")
                }
            }
        }
    }
    
    private fun unregisterBluetoothReceiver() {
        context?.let { ctx ->
            if (isBluetoothReceiverRegistered && bluetoothReceiver != null) {
                try {
                    ctx.unregisterReceiver(bluetoothReceiver)
                    isBluetoothReceiverRegistered = false
                    Log.d(TAG, "Bluetooth audio route receiver unregistered")
                } catch (e: Exception) {
                    Log.e(TAG, "Failed to unregister Bluetooth receiver: ${e.message}")
                }
            }
        }
    }
    
    // MARK: - Bluetooth Audio Route Event Handlers
    
    private fun handleScoAudioStateChange(state: Int) {
        Log.d(TAG, "SCO Audio state changed: $state")
        when (state) {
            AndroidAudioManager.SCO_AUDIO_STATE_CONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth SCO audio connected")
                notifyAudioRouteChange(true)
            }
            AndroidAudioManager.SCO_AUDIO_STATE_DISCONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth SCO audio disconnected")
                handleBluetoothDisconnection()
            }
            AndroidAudioManager.SCO_AUDIO_STATE_CONNECTING -> {
                Log.d(TAG, "🔵 Bluetooth SCO audio connecting...")
            }
            AndroidAudioManager.SCO_AUDIO_STATE_ERROR -> {
                Log.w(TAG, "🔵 Bluetooth SCO audio error")
                handleBluetoothError()
            }
        }
    }
    
    private fun handleHeadsetPlugChange(state: Int, name: String?) {
        Log.d(TAG, "Headset plug changed: state=$state, name=$name")
        when (state) {
            0 -> {
                Log.i(TAG, "🎧 Headset disconnected: $name")
                notifyAudioRouteChange(false)
            }
            1 -> {
                Log.i(TAG, "🎧 Headset connected: $name")
                notifyAudioRouteChange(true)
            }
        }
    }
    
    private fun handleBluetoothConnectionStateChange(state: Int) {
        Log.d(TAG, "Bluetooth connection state changed: $state")
        when (state) {
            BluetoothHeadset.STATE_CONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth headset connected")
                notifyAudioRouteChange(true)
            }
            BluetoothHeadset.STATE_DISCONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth headset disconnected")
                handleBluetoothDisconnection()
            }
        }
    }
    
    private fun handleBluetoothAudioStateChange(state: Int) {
        Log.d(TAG, "Bluetooth audio state changed: $state")
        when (state) {
            BluetoothHeadset.STATE_AUDIO_CONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth audio connected")
                notifyAudioRouteChange(true)
            }
            BluetoothHeadset.STATE_AUDIO_DISCONNECTED -> {
                Log.i(TAG, "🔵 Bluetooth audio disconnected")
                handleBluetoothDisconnection()
            }
        }
    }
    
    private fun handleBluetoothDisconnection() {
        Log.w(TAG, "Handling Bluetooth disconnection...")
        
        // If we have active audio focus, attempt recovery
        if (_audioFocusState.value != AudioFocusState.NONE) {
            Log.w(TAG, "Active audio focus detected during Bluetooth disconnection, attempting recovery...")
            
            // Notify listeners about the disconnection
            notifyAudioRouteChange(false, isBluetoothDisconnection = true)
            
            // Schedule audio session recovery after a brief delay
            mainHandler.postDelayed({
                attemptAudioSessionRecovery()
            }, 500)
        } else {
            // Just notify about the disconnection
            notifyAudioRouteChange(false, isBluetoothDisconnection = true)
        }
    }
    
    private fun handleBluetoothError() {
        Log.e(TAG, "Bluetooth audio error occurred")
        
        // Similar to disconnection but might be recoverable
        if (_audioFocusState.value != AudioFocusState.NONE) {
            Log.w(TAG, "Attempting recovery from Bluetooth audio error...")
            mainHandler.postDelayed({
                attemptAudioSessionRecovery()
            }, 1000) // Longer delay for error recovery
        }
    }
    
    private fun attemptAudioSessionRecovery() {
        Log.i(TAG, "Attempting audio session recovery...")
        
        val currentRequest = currentRequestInfo
        if (currentRequest != null) {
            Log.i(TAG, "Recovering audio session for: ${currentRequest.requestType}")
            
            // Release current focus and try to reacquire
            releaseAudioFocus(currentRequest.requestId)
            
            // Request focus again after a short delay
            mainHandler.postDelayed({
                requestAudioFocus(
                    currentRequest.requestType,
                    "${currentRequest.requestId}_recovery",
                    currentRequest.onFocusGained,
                    currentRequest.onFocusLost,
                    currentRequest.onFocusDucked
                )
            }, 200)
        }
    }
    
    private fun notifyAudioRouteChange(isConnected: Boolean, isBluetoothDisconnection: Boolean = false) {
        Log.d(TAG, "Notifying audio route change: connected=$isConnected, bluetoothDisconnection=$isBluetoothDisconnection")
        
        // Notify all registered listeners
        audioRouteChangeListeners.forEach { listener ->
            try {
                listener(isConnected)
            } catch (e: Exception) {
                Log.e(TAG, "Error notifying audio route change listener: ${e.message}")
            }
        }
    }
    
    // MARK: - Public API for Audio Route Monitoring
    
    fun addAudioRouteChangeListener(listener: (Boolean) -> Unit) {
        audioRouteChangeListeners.add(listener)
        Log.d(TAG, "Added audio route change listener. Total listeners: ${audioRouteChangeListeners.size}")
    }
    
    fun removeAudioRouteChangeListener(listener: (Boolean) -> Unit) {
        audioRouteChangeListeners.remove(listener)
        Log.d(TAG, "Removed audio route change listener. Total listeners: ${audioRouteChangeListeners.size}")
    }
    
    fun cleanup() {
        Log.i(TAG, "Cleaning up AudioManager...")
        unregisterBluetoothReceiver()
        audioRouteChangeListeners.clear()
        currentRequestInfo = null
        requestQueue.clear()
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
                
                // For TTS, treat transient loss as ducking to avoid stopping speech
                if (requestInfo.requestType == AudioRequestType.TTS) {
                    Log.d(TAG, "🎵 TTS transient loss - treating as duck to preserve speech")
                    requestInfo.onFocusDucked?.invoke()
                } else {
                    requestInfo.onFocusLost?.invoke()
                    processNextRequest()
                }
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
            AudioRequestType.TTS, AudioRequestType.WAKE_WORD_RESPONSE -> AudioAttributes.USAGE_MEDIA
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
            // Changed from AUDIOFOCUS_GAIN_TRANSIENT_MAY_DUCK to AUDIOFOCUS_GAIN_TRANSIENT
            // to prevent audio ducking state from affecting subsequent TTS volume
            AudioRequestType.SPEECH_RECOGNITION -> AndroidAudioManager.AUDIOFOCUS_GAIN_TRANSIENT
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