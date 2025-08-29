package com.hightowerai.MobileJarvisNative.wakeword

import android.Manifest
import android.app.Notification
import android.app.NotificationChannel
import android.app.NotificationManager
import android.app.Service
import android.content.Context
import android.content.Intent
import android.content.IntentFilter
import android.content.BroadcastReceiver
import android.content.SharedPreferences
import android.media.AudioFormat
import android.media.AudioRecord
import android.media.MediaRecorder
import android.os.Build
import android.os.IBinder
import android.util.Log
import android.widget.Toast
import androidx.core.app.NotificationCompat
import com.hightowerai.MobileJarvisNative.MainActivity
import com.hightowerai.MobileJarvisNative.utils.PermissionUtils
import com.hightowerai.MobileJarvisNative.voice.VoiceManager
import com.hightowerai.MobileJarvisNative.ConfigManager
import com.hightowerai.MobileJarvisNative.utils.Constants
import com.hightowerai.MobileJarvisNative.utils.AppStateManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.Job
import kotlinx.coroutines.delay
import kotlinx.coroutines.launch
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.cancel
import kotlinx.coroutines.isActive
import kotlinx.coroutines.withTimeout
import kotlin.coroutines.coroutineContext

class WakeWordService : Service(), SharedPreferences.OnSharedPreferenceChangeListener {
    
    private val TAG = "WakeWordService"
    private var openWakeWordEngine: OpenWakeWordEngine? = null
    private var audioRecord: AudioRecord? = null
    private var recordingThread: Thread? = null
    private var isRunning = false
    private var isPaused = false
    private var isServiceRunning = false
    private var serviceScope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
    private var stateMonitorJob: Job? = null
    private lateinit var voiceManager: VoiceManager
    private lateinit var prefs: SharedPreferences
    private lateinit var configManager: ConfigManager
    private lateinit var brWakeWordPause: BroadcastReceiver
    private var wakeWordThreshold = 0.3f  // Lowered from 0.5 to avoid false triggers from sigmoid noise
    private var lastWakeWordTime = 0L
    private val WAKE_WORD_COOLDOWN_MS = 3000L // 3 second cooldown
    private var lastResumeTime = 0L
    private val RESUME_COOLDOWN_MS = 2000L // 2 second cooldown after resume to prevent false detections
    private var lastLowConfidenceLogTime = 0L
    private val LOW_CONFIDENCE_LOG_INTERVAL_MS = 10000L // Log low confidence warnings every 10 seconds
    private var consecutiveLowConfidenceCount = 0
    private val MAX_CONSECUTIVE_LOW_CONFIDENCE = 100 // Skip processing after 100 consecutive low confidence results
    
    // Emergency circuit breaker for infinite loop detection
    private var lastProcessingTime = 0L
    private var processingCallCount = 0
    private val LOOP_DETECTION_WINDOW_MS = 10000L // 10 seconds
    private val MAX_PROCESSING_CALLS = 200 // Max calls per 10 seconds
    private var circuitBreakerTripped = false
    
    // Audio recording constants
    private val SAMPLE_RATE = 16000
    private val CHANNEL_CONFIG = AudioFormat.CHANNEL_IN_MONO
    private val AUDIO_FORMAT = AudioFormat.ENCODING_PCM_16BIT
    private val BUFFER_SIZE = 1280 // 80ms chunks
    
    // Notification constants
    private val NOTIFICATION_CHANNEL_ID = "wake_word_channel"
    private val NOTIFICATION_ID = 1001
    
    // Background state management
    private var pendingWakeWordEvent: PendingWakeWordEvent? = null
    private val FOREGROUND_WAIT_TIMEOUT_MS = 5000L // 5 seconds timeout
    
    data class PendingWakeWordEvent(
        val confidence: Float,
        val timestamp: Long,
        val selectedWakeWord: String
    )

    companion object {
        fun isRunning(): Boolean {
            return instance?.isServiceRunning ?: false
        }
        
        @Volatile
        private var instance: WakeWordService? = null
        
        // Available wake words from OpenWakeWord
        val AVAILABLE_WAKE_WORDS: Set<String>
            get() = setOf(
                "Hey Jarvis", "Hey Juni", "Hey Juniper", "Juniper", "Jarvis", "Hey Jasmine", "Hey Jade", "Hey Jay", "Hey Jasper", "Hey Jerry", "Jasmine", "Hey",
                "Alex", "Aloe",
                "Hey Mycroft", "Hey Michael", "Hey Mulberry", "Hey Myrillis", "Hey Marigold"
            )
    }
    
    override fun onCreate() {
        super.onCreate()
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: ========== WAKE WORD SERVICE CREATED ==========")
        
        // Clean up any stale state from previous instance
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: Cleaning up any stale state from previous instance...")
        instance?.let { oldInstance ->
            Log.w(TAG, "🚀 SERVICE_LIFECYCLE: ⚠️ Previous service instance found - cleaning up...")
            oldInstance.cleanup()
            instance = null
        }
        
        // Reset the OpenWakeWord singleton to ensure fresh state
        try {
            OpenWakeWordEngine.resetInstance()
            Log.i(TAG, "🚀 SERVICE_LIFECYCLE: OpenWakeWordEngine singleton reset on service creation")
        } catch (e: Exception) {
            Log.w(TAG, "🚀 SERVICE_LIFECYCLE: Error resetting OpenWakeWordEngine: ${e.message}")
        }
   
        // Initialize fresh service scope to prevent stale references from previous instances
        serviceScope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: Fresh service scope initialized")
        
        instance = this
        isServiceRunning = true
        prefs = getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
        prefs.registerOnSharedPreferenceChangeListener(this)
        
        // Initialize AppStateManager if not already initialized
        try {
            AppStateManager.getInstance().initialize(application)
            Log.i(TAG, "🚀 SERVICE_LIFECYCLE: AppStateManager initialized")
        } catch (e: Exception) {
            Log.e(TAG, "🚀 SERVICE_LIFECYCLE: Error initializing AppStateManager: ${e.message}", e)
        }
        
        createNotificationChannel()
        
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: Starting foreground service...")
        serviceScope.launch(Dispatchers.Main) {
            startForegroundWithNotification()
        }
        
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: Registering broadcast receivers...")
        registerPauseResumeReceiver()
        
        Log.i(TAG, "🚀 SERVICE_LIFECYCLE: =====================================================")
    }

    private fun startForegroundWithNotification() {
        try {
            val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
            
            val builder = NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
                .setContentTitle("Wake Word Detection Active")
                .setContentText("Listening for '$selectedWakeWord'")
                .setSmallIcon(android.R.drawable.ic_media_play)
                .setPriority(NotificationCompat.PRIORITY_LOW)
                .setOngoing(true)

            val notification = builder.build()
            startForeground(Constants.NOTIFICATION_ID, notification)
            
            Log.d(TAG, "Foreground service started with notification")
        } catch (e: Exception) {
            Log.e(TAG, "Error starting foreground service: ${e.message}", e)
        }
    }
    
    override fun onStartCommand(intent: Intent?, flags: Int, startId: Int): Int {
        Log.i(TAG, "Service onStartCommand called (WakeWordService)")
        serviceScope.launch(Dispatchers.Main) {
            try {
                startForegroundWithNotification()
                Toast.makeText(this@WakeWordService, "Wake word detection service starting...", Toast.LENGTH_SHORT).show()
                serviceScope.launch(Dispatchers.IO) {
                    try {
                        initializeService()
                    } catch (e: Exception) {
                        Log.e(TAG, "Error in service initialization: ${e.message}", e)
                        serviceScope.launch(Dispatchers.Main) {
                            Toast.makeText(this@WakeWordService, "Service startup failed: ${e.message}", Toast.LENGTH_LONG).show()
                        }
                        stopSelf()
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error in onStartCommand: ${e.message}", e)
                stopSelf()
            }
        }
        return START_STICKY
    }

    private fun initializeService() {
        Log.i(TAG, "Entered initializeService()")
        try {
            ConfigManager.init(this)
            configManager = ConfigManager.getInstance()
            
            if (!isWakeWordEnabled()) {
                Log.i(TAG, "Wake word detection is disabled")
                stopSelf()
                return
            }
            
            isServiceRunning = true
            isRunning = true
            
            initializeComponents()
        } catch (e: Exception) {
            Log.e(TAG, "Fatal error in service initialization: ${e.message}", e)
            serviceScope.launch(Dispatchers.Main) {
                Toast.makeText(this@WakeWordService, "Service startup failed: ${e.message}", Toast.LENGTH_LONG).show()
            }
            cleanup()
            stopSelf()
        }
    }

    private fun initializeComponents() {
        try {
            if (!checkOpenWakeWordEngine()) {
                Log.e(TAG, "Cannot initialize OpenWakeWord engine")
                serviceScope.launch(Dispatchers.Main) {
                    Toast.makeText(this@WakeWordService, "OpenWakeWord engine not properly initialized", Toast.LENGTH_LONG).show()
                }
                cleanup()
                stopSelf()
                return
            }
            
            voiceManager = VoiceManager.getInstance()
            setupVoiceStateMonitoring()
            initWakeWordDetection()
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing components: ${e.message}", e)
            cleanup()
            stopSelf()
        }
    }

    private fun cleanup() {
        try {
            // Cancel all coroutines first to prevent any lingering operations
            Log.i(TAG, "🧹 CLEANUP: Cancelling service scope and all running coroutines...")
            stateMonitorJob?.cancel()
            serviceScope.cancel()
            Log.i(TAG, "🧹 CLEANUP: ✅ All coroutines cancelled successfully")
            
            recordingThread?.interrupt()
            audioRecord?.stop()
            audioRecord?.release()
            
            // Use resetInstance to properly cleanup the singleton
            try {
                OpenWakeWordEngine.resetInstance()
                Log.i(TAG, "🧹 CLEANUP: OpenWakeWordEngine singleton reset during cleanup")
            } catch (e: Exception) {
                Log.w(TAG, "Error resetting OpenWakeWordEngine singleton during cleanup: ${e.message}", e)
            }
            
            // Release audio focus
            try {
                val audioManager = com.hightowerai.MobileJarvisNative.utils.AudioManager.getInstance()
                val currentRequest = audioManager.getCurrentRequestInfo()
                if (currentRequest?.requestId == "wake_word_detection") {
                    Log.i(TAG, "🎵 CLEANUP: Releasing wake word audio focus")
                    audioManager.releaseAudioFocus(currentRequest.requestId)
                }
            } catch (e: Exception) {
                Log.w(TAG, "Error releasing audio focus during cleanup: ${e.message}", e)
            }
            
            recordingThread = null
            audioRecord = null
            openWakeWordEngine = null
            isRunning = false
            isServiceRunning = false
        } catch (e: Exception) {
            Log.e(TAG, "Error during cleanup: ${e.message}", e)
        }
    }

    private fun isWakeWordEnabled(): Boolean {
        return prefs.getBoolean("wake_word_enabled", false)
    }
    
    private fun setupVoiceStateMonitoring() {
        stateMonitorJob?.cancel()
        
        stateMonitorJob = serviceScope.launch {
            try {
                // Log initial voice state
                val initialState = voiceManager.voiceState.value
                Log.i(TAG, "Initial voice state: $initialState")
                
                // Give the system a moment to settle before monitoring
                delay(2000)
                
                var stuckInListeningCounter = 0
                val STUCK_THRESHOLD = 10 // 10 seconds for faster recovery
                
                while (true) {
                    delay(1000)
                    val currentState = voiceManager.voiceState.value
                    
                    if (currentState !is VoiceManager.VoiceState.IDLE) {
                        pauseWakeWordDetection()
                        
                        // Check if stuck in LISTENING state
                        if (currentState is VoiceManager.VoiceState.LISTENING) {
                            stuckInListeningCounter++
                            if (stuckInListeningCounter >= STUCK_THRESHOLD) {
                                Log.w(TAG, "⚠️ Voice state stuck in LISTENING for ${stuckInListeningCounter}s - forcing stop")
                                voiceManager.stopListening()
                                stuckInListeningCounter = 0
                            }
                        } else {
                            stuckInListeningCounter = 0
                        }
                    } else {
                        resumeWakeWordDetection()
                        stuckInListeningCounter = 0
                    }
                }
            } catch (e: Exception) {
                Log.e(TAG, "Error in voice state monitoring", e)
            }
        }
    }
    
    private fun pauseWakeWordDetection() {
        if (isRunning && !isPaused) {
            try {
                Log.i(TAG, "Pausing wake word detection during conversation")
                isPaused = true
                // Audio recording continues, but we just ignore the results
            } catch (e: Exception) {
                Log.e(TAG, "Error pausing wake word detection", e)
            }
        }
    }
    
    private fun resumeWakeWordDetection() {
        if (isRunning && isPaused) {
            try {
                Log.i(TAG, "Resuming wake word detection after conversation")
                isPaused = false
            } catch (e: Exception) {
                Log.e(TAG, "Error resuming wake word detection", e)
            }
        }
    }
    
    private fun checkOpenWakeWordEngine(): Boolean {
        return try {
            Log.i(TAG, "🤖 ENGINE_CHECK: ========== CHECKING OPENWAKEWORD ENGINE ==========")
            Log.i(TAG, "🤖 ENGINE_CHECK: Getting OpenWakeWord engine instance...")
            
            openWakeWordEngine = OpenWakeWordEngine.getInstance(this)
            Log.i(TAG, "🤖 ENGINE_CHECK: ✅ Engine instance obtained")
            
            Log.i(TAG, "🤖 ENGINE_CHECK: Initializing engine...")
            val initialized = openWakeWordEngine?.initialize() ?: false
            
            if (initialized) {
                Log.i(TAG, "🤖 ENGINE_CHECK: ✅ Engine initialization successful")
            } else {
                Log.e(TAG, "🤖 ENGINE_CHECK: ❌ Engine initialization failed")
            }
            
            Log.i(TAG, "🤖 ENGINE_CHECK: ====================================================")
            initialized
        } catch (e: Exception) {
            Log.e(TAG, "🤖 ENGINE_CHECK: ❌ Failed to initialize OpenWakeWord engine: ${e.message}", e)
            false
        }
    }
    
    private fun getWakeWordThreshold(): Float {
        // Read the wake word sensitivity from SharedPreferences (set by React Native)
        // The sensitivity is stored as "wake_word_sensitivity" and should be used as the threshold
        return prefs.getFloat("wake_word_sensitivity", 0.3f)
    }
    
    private fun initWakeWordDetection() {
        try {
            Log.i(TAG, "🎯 WAKEWORD_INIT: ========== INITIALIZING WAKE WORD DETECTION ==========")
            Log.i(TAG, "🎯 WAKEWORD_INIT: Service running: $isServiceRunning, isRunning: $isRunning")
            
            if (!PermissionUtils.hasPermission(this, Manifest.permission.RECORD_AUDIO)) {
                Log.e(TAG, "Missing RECORD_AUDIO permission")
                Toast.makeText(
                    this, 
                    "Microphone permission required for wake word detection", 
                    Toast.LENGTH_LONG
                ).show()
                
                val intent = Intent(this, MainActivity::class.java).apply {
                    flags = Intent.FLAG_ACTIVITY_NEW_TASK
                    putExtra("REQUEST_AUDIO_PERMISSION", true)
                }
                startActivity(intent)
                
                stopSelf()
                return
            }
            
            val threshold = getWakeWordThreshold()
            val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
            
            Log.i(TAG, "🎯 WAKEWORD_SETUP: ======= Wake Word Configuration =======")
            Log.i(TAG, "🎯 WAKEWORD_SETUP: Selected wake word: '$selectedWakeWord'")
            Log.i(TAG, "🎯 WAKEWORD_SETUP: Threshold: $threshold")
            Log.i(TAG, "🎯 WAKEWORD_SETUP: Available wake words: ${AVAILABLE_WAKE_WORDS}")
            
            // Set threshold
            wakeWordThreshold = threshold
            
            Log.i(TAG, "🎯 WAKEWORD_SETUP: =======================================")
            
            // Set the wake phrase in the engine
            openWakeWordEngine?.setWakePhrase(selectedWakeWord)
            
            // Set up audio recording
            setupAudioRecording()
            
            // Ensure we start in resumed state
            isPaused = false
            Log.i(TAG, "🎯 WAKEWORD_INIT: Wake word detection initial state: isPaused = $isPaused")
            Log.i(TAG, "🎯 WAKEWORD_INIT: Service starting in resumed state")
            
            Log.i(TAG, "✅ WAKEWORD_INIT: Wake word detection initialized and ready ✅")
            Log.i(TAG, "🎯 WAKEWORD_INIT: ====================================================")
            
            serviceScope.launch(Dispatchers.Main) {
                Toast.makeText(
                    applicationContext,
                    "Wake word detection started - listening for '$selectedWakeWord'",
                    Toast.LENGTH_SHORT
                ).show()
            }
        } catch (e: Exception) {
            Log.e(TAG, "Error initializing wake word detection: ${e.message}", e)
            Toast.makeText(
                this, 
                "Error setting up wake word detection: ${e.message}", 
                Toast.LENGTH_LONG
            ).show()
            stopSelf()
        }
    }
    
    private fun setupAudioRecording() {
        try {
            // Request audio focus for wake word detection
            try {
                val audioManager = com.hightowerai.MobileJarvisNative.utils.AudioManager.getInstance()
                audioManager.initialize(this)
                
                Log.i(TAG, "🎵 WAKE_WORD_SETUP: Requesting audio focus for wake word detection...")
                val focusResult = audioManager.requestAudioFocus(
                    com.hightowerai.MobileJarvisNative.utils.AudioManager.AudioRequestType.BACKGROUND_AUDIO,
                    "wake_word_detection",
                    onFocusGained = {
                        Log.i(TAG, "🎵 WAKE_WORD_SETUP: Audio focus GAINED for wake word detection")
                    },
                    onFocusLost = {
                        Log.w(TAG, "🎵 WAKE_WORD_SETUP: Audio focus LOST for wake word detection")
                    }
                )
                
                if (focusResult) {
                    Log.i(TAG, "🎵 WAKE_WORD_SETUP: ✅ Audio focus acquired for wake word detection")
                } else {
                    Log.w(TAG, "🎵 WAKE_WORD_SETUP: ⚠️ Failed to acquire audio focus for wake word detection, continuing anyway...")
                }
            } catch (e: Exception) {
                Log.w(TAG, "Error requesting audio focus for wake word detection: ${e.message}", e)
            }
            
            val minBufferSize = AudioRecord.getMinBufferSize(SAMPLE_RATE, CHANNEL_CONFIG, AUDIO_FORMAT)
            val bufferSize = maxOf(minBufferSize, BUFFER_SIZE * 2)
            
            audioRecord = AudioRecord(
                MediaRecorder.AudioSource.MIC,
                SAMPLE_RATE,
                CHANNEL_CONFIG,
                AUDIO_FORMAT,
                bufferSize
            )
            
            if (audioRecord?.state != AudioRecord.STATE_INITIALIZED) {
                Log.e(TAG, "Failed to initialize AudioRecord")
                return
            }
            
            audioRecord?.startRecording()
            isRunning = true
            
            // Start recording thread
            recordingThread = Thread {
                processAudioLoop()
            }
            recordingThread?.start()
            
            Log.d(TAG, "Audio recording started successfully")
        } catch (e: Exception) {
            Log.e(TAG, "Error setting up audio recording: ${e.message}", e)
            throw e
        }
    }
    
    private fun processAudioLoop() {
        val buffer = ShortArray(BUFFER_SIZE)
        var chunkCount = 0
        var lastLogTime = System.currentTimeMillis()
        
        Log.i(TAG, "🎙️ AUDIO_LOOP: ========== STARTING AUDIO PROCESSING LOOP ==========")
        Log.i(TAG, "🎙️ AUDIO_LOOP: Buffer size: $BUFFER_SIZE samples (${BUFFER_SIZE * 1000 / SAMPLE_RATE}ms)")
        Log.i(TAG, "🎙️ AUDIO_LOOP: Sample rate: ${SAMPLE_RATE}Hz")
        Log.i(TAG, "🎙️ AUDIO_LOOP: Wake word threshold: $wakeWordThreshold")
        Log.i(TAG, "🎙️ AUDIO_LOOP: =====================================================")
        
        while (isRunning && !Thread.currentThread().isInterrupted) {
            try {
                val readCount = audioRecord?.read(buffer, 0, buffer.size) ?: 0
                chunkCount++
                
                // Log audio processing stats every 30 seconds (reduced frequency)
                val currentTime = System.currentTimeMillis()
                if (currentTime - lastLogTime > 30000) {
                    Log.d(TAG, "🎙️ AUDIO_LOOP: Processed $chunkCount chunks in 30s (isPaused: $isPaused)")
                    lastLogTime = currentTime
                    chunkCount = 0
                }
                
                if (readCount > 0 && !isPaused) {
                    val currentTime = System.currentTimeMillis()
                    
                    // Circuit breaker logic (silent operation)
                    if (currentTime - lastProcessingTime > LOOP_DETECTION_WINDOW_MS) {
                        processingCallCount = 0
                        lastProcessingTime = currentTime
                        if (circuitBreakerTripped) {
                            circuitBreakerTripped = false
                        }
                    }
                    
                    processingCallCount++
                    if (processingCallCount > MAX_PROCESSING_CALLS && !circuitBreakerTripped) {
                        circuitBreakerTripped = true
                        Log.e(TAG, "🚨 CIRCUIT_BREAKER: TRIPPED! ${processingCallCount} calls in ${LOOP_DETECTION_WINDOW_MS}ms - INFINITE LOOP DETECTED")
                        continue
                    }
                    
                    if (circuitBreakerTripped) {
                        continue
                    }
                    
                    // Skip processing if we've had too many consecutive low confidence results
                    if (consecutiveLowConfidenceCount >= MAX_CONSECUTIVE_LOW_CONFIDENCE) {
                        // Reset counter every 30 seconds to retry
                        if ((currentTime - lastLowConfidenceLogTime) > 30000L) {
                            consecutiveLowConfidenceCount = 0
                        } else {
                            continue // Skip this audio chunk
                        }
                    }
                    
                    val confidence = openWakeWordEngine?.processAudioChunk(buffer) ?: 0f
                    
                    // 🚨 EMERGENCY ZERO CONFIDENCE DETECTION 🚨
                    // if (confidence == 0.0f) {
                     //    consecutiveLowConfidenceCount++
                     //    if (consecutiveLowConfidenceCount > 50) { // Stop after 50 consecutive zeros
                     //        Log.e(TAG, "🚨 EMERGENCY: Detected ${consecutiveLowConfidenceCount} consecutive zero confidence values - MODEL FAILURE")
                     //        Log.e(TAG, "🚨 EMERGENCY: Stopping wake word processing to prevent infinite loop")
                     //        isRunning = false
                     //        break
                     //    }
                     //    continue
                    // } else {
                    //     consecutiveLowConfidenceCount = 0
                    // }
                    
                    // 🚨 EMERGENCY MULTI-LAYER FILTERING 🚨
                    // Layer 1: Hard threshold check (should catch ~0.5001 values)
                    
                    if (confidence <= wakeWordThreshold) {
                        // This is normal - below threshold, no action needed
                        if (consecutiveLowConfidenceCount > 0) {
                            consecutiveLowConfidenceCount = 0 // Reset counter
                        }
                        continue
                    }
                    
                    // Layer 2: Remove sigmoid filter - OpenWakeWord outputs probability values directly
                    // Low confidence values (< 0.01) are normal for silence/background noise
                    
                    // Layer 3: High confidence requirement (using user-configured sensitivity)
                    val isHighConfidence = confidence > wakeWordThreshold
                    val isCooldownExpired = (currentTime - lastWakeWordTime) > WAKE_WORD_COOLDOWN_MS
                    val isResumeCooldownExpired = (currentTime - lastResumeTime) > RESUME_COOLDOWN_MS
                    
                    // Layer 4: Emergency sanity check
                    //if (confidence > 0.99f) {
                    //    Log.w(TAG, "🚨 EMERGENCY: Suspiciously high confidence ${confidence} - possible model error")
                    //    continue
                    //}
                    
                    if (isHighConfidence && isCooldownExpired && isResumeCooldownExpired) {
                        Log.i(TAG, "🎯 WAKEWORD_TRIGGER: ⚡ WAKE WORD DETECTED! Confidence: ${String.format("%.4f", confidence)} (threshold: $wakeWordThreshold)")
                        lastWakeWordTime = currentTime
                        consecutiveLowConfidenceCount = 0 // Reset counter on successful detection
                        onWakeWordDetected(confidence)
                    } else if (!isHighConfidence) {
                        consecutiveLowConfidenceCount++
                        
                        // Throttle low-confidence warnings to prevent log spam
                        if ((currentTime - lastLowConfidenceLogTime) > LOW_CONFIDENCE_LOG_INTERVAL_MS) {
                            Log.w(TAG, "🎯 WAKEWORD_TRIGGER: ⚠️ Medium confidence trigger ignored: ${String.format("%.4f", confidence)} (count: $consecutiveLowConfidenceCount, need >$wakeWordThreshold)")
                            lastLowConfidenceLogTime = currentTime
                            
                                                    if (consecutiveLowConfidenceCount >= MAX_CONSECUTIVE_LOW_CONFIDENCE) {
                            // Processing disabled due to poor results - will retry in 30s
                        }
                        }
                    } else if (!isCooldownExpired) {
                        // Cooldown active - no logging needed
                    } else if (!isResumeCooldownExpired) {
                        // Resume cooldown active - log once per occurrence
                        if ((currentTime - lastLowConfidenceLogTime) > LOW_CONFIDENCE_LOG_INTERVAL_MS) {
                            val timeRemaining = RESUME_COOLDOWN_MS - (currentTime - lastResumeTime)
                            Log.d(TAG, "🎯 WAKEWORD_TRIGGER: ⏳ High confidence detection blocked by resume cooldown (${timeRemaining}ms remaining)")
                            lastLowConfidenceLogTime = currentTime
                        }
                    }
                } else if (readCount <= 0) {
                    // No audio data read - normal during pauses
                }
            } catch (e: Exception) {
                Log.e(TAG, "🎙️ AUDIO_LOOP: ❌ Error in audio processing loop: ${e.message}", e)
                break
            }
        }
        
        Log.i(TAG, "🎙️ AUDIO_LOOP: Audio processing loop ended (isRunning: $isRunning, interrupted: ${Thread.currentThread().isInterrupted})")
    }
    
    private fun onWakeWordDetected(confidence: Float) {
        val timestamp = System.currentTimeMillis()
        val timeString = java.text.SimpleDateFormat("HH:mm:ss.SSS", java.util.Locale.US).format(java.util.Date(timestamp))
        
        val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
        
        Log.i(TAG, "🔥 WAKEWORD_USE: ================================================")
        Log.i(TAG, "🔥 WAKEWORD_USE: *** WAKE WORD '$selectedWakeWord' ACTIVATED ***")
        Log.i(TAG, "🔥 WAKEWORD_USE: Time: $timeString")
        Log.i(TAG, "🔥 WAKEWORD_USE: Confidence: $confidence")
        Log.i(TAG, "🔥 WAKEWORD_USE: Threshold: $wakeWordThreshold")
        Log.i(TAG, "🔥 WAKEWORD_USE: Timestamp: $timestamp")
        Log.i(TAG, "🔥 WAKEWORD_USE: ================================================")
        
        // Check app state before proceeding
        val appStateManager = AppStateManager.getInstance()
        val isAppInForeground = appStateManager.isAppCurrentlyInForeground()
        
        Log.i(TAG, "📱 BACKGROUND_CHECK: ========== CHECKING APP STATE ==========")
        Log.i(TAG, "📱 BACKGROUND_CHECK: App currently in foreground: $isAppInForeground")
        
        if (!isAppInForeground) {
            // App is in background - store event and bring to foreground
            Log.i(TAG, "📱 BACKGROUND_CHECK: App is backgrounded - storing event and bringing to foreground")
            
            pendingWakeWordEvent = PendingWakeWordEvent(confidence, timestamp, selectedWakeWord)
            
            // Bring app to foreground
            val foregroundSuccess = appStateManager.bringAppToForeground()
            
            if (foregroundSuccess) {
                Log.i(TAG, "📱 BACKGROUND_CHECK: ✅ App brought to foreground, waiting for activation...")
                
                // Wait for app to become active, then send the event
                serviceScope.launch {
                    try {
                        withTimeout(FOREGROUND_WAIT_TIMEOUT_MS) {
                            // Poll for foreground state
                            var attempts = 0
                            while (!appStateManager.isAppCurrentlyInForeground() && attempts < 50) {
                                delay(100) // Check every 100ms
                                attempts++
                            }
                            
                            if (appStateManager.isAppCurrentlyInForeground()) {
                                Log.i(TAG, "📱 BACKGROUND_CHECK: ✅ App is now in foreground - sending pending event")
                                pendingWakeWordEvent?.let { pendingEvent ->
                                    sendWakeWordEvent(pendingEvent.confidence, pendingEvent.timestamp, pendingEvent.selectedWakeWord)
                                    pendingWakeWordEvent = null
                                }
                            } else {
                                Log.w(TAG, "📱 BACKGROUND_CHECK: ⚠️ App did not reach foreground in time - sending event anyway")
                                pendingWakeWordEvent?.let { pendingEvent ->
                                    sendWakeWordEvent(pendingEvent.confidence, pendingEvent.timestamp, pendingEvent.selectedWakeWord)
                                    pendingWakeWordEvent = null
                                }
                            }
                        }
                    } catch (e: Exception) {
                        Log.e(TAG, "📱 BACKGROUND_CHECK: ❌ Timeout waiting for foreground - sending event anyway: ${e.message}")
                        pendingWakeWordEvent?.let { pendingEvent ->
                            sendWakeWordEvent(pendingEvent.confidence, pendingEvent.timestamp, pendingEvent.selectedWakeWord)
                            pendingWakeWordEvent = null
                        }
                    }
                }
            } else {
                Log.w(TAG, "📱 BACKGROUND_CHECK: ⚠️ Failed to bring app to foreground - sending event anyway")
                sendWakeWordEvent(confidence, timestamp, selectedWakeWord)
            }
        } else {
            // App is already in foreground - proceed normally
            Log.i(TAG, "📱 BACKGROUND_CHECK: App already in foreground - proceeding normally")
            sendWakeWordEvent(confidence, timestamp, selectedWakeWord)
        }
        
        Log.i(TAG, "📱 BACKGROUND_CHECK: ================================================")
    }
    
    /**
     * Send wake word event to React Native and voice manager
     */
    private fun sendWakeWordEvent(confidence: Float, timestamp: Long, selectedWakeWord: String) {
        val timeString = java.text.SimpleDateFormat("HH:mm:ss.SSS", java.util.Locale.US).format(java.util.Date(timestamp))
        
        // Send broadcast to React Native
        try {
            Log.i(TAG, "📡 BROADCAST_SEND: ========== SENDING WAKE WORD BROADCAST ==========")
            Log.i(TAG, "📡 BROADCAST_SEND: Send timestamp: ${System.currentTimeMillis()}")
            Log.i(TAG, "📡 BROADCAST_SEND: Action: ${Constants.Actions.WAKE_WORD_DETECTED_RN}")
            Log.i(TAG, "📡 BROADCAST_SEND: Wake word: '$selectedWakeWord'")
            Log.i(TAG, "📡 BROADCAST_SEND: Confidence: $confidence")
            
            val intent = Intent(Constants.Actions.WAKE_WORD_DETECTED_RN)
            intent.putExtra("timestamp", timestamp)
            intent.putExtra("confidence", confidence)
            intent.putExtra("wakeWord", selectedWakeWord)
            
            // Add package name to ensure the broadcast reaches our app
            intent.setPackage(packageName)
            
            sendBroadcast(intent)
            Log.i(TAG, "📡 BROADCAST_SEND: ✅ Broadcast sent successfully")
            Log.i(TAG, "🔥 WAKEWORD_USE: ✅ Sent wake word detected broadcast to React Native")
            Log.i(TAG, "📡 BROADCAST_SEND: ====================================================")
        } catch (e: Exception) {
            Log.e(TAG, "🔥 WAKEWORD_USE: ❌ Error sending wake word broadcast: ${e.message}", e)
        }
        
        // Start voice processing
        try {
            val voiceManager = VoiceManager.getInstance()
            voiceManager.onWakeWordDetected()
            Log.i(TAG, "🔥 WAKEWORD_USE: ✅ Notified VoiceManager of wake word detection")
        } catch (e: Exception) {
            Log.e(TAG, "🔥 WAKEWORD_USE: ❌ Error notifying VoiceManager: ${e.message}", e)
        }
        
        // Show notification
        serviceScope.launch(Dispatchers.Main) {
            try {
                Toast.makeText(
                    applicationContext,
                    "Wake word '$selectedWakeWord' detected at $timeString",
                    Toast.LENGTH_SHORT
                ).show()
                Log.i(TAG, "🔥 WAKEWORD_USE: ✅ Displayed detection toast to user")
            } catch (e: Exception) {
                Log.e(TAG, "🔥 WAKEWORD_USE: ❌ Error showing detection toast: ${e.message}", e)
            }
        }
        
        // Pause wake word detection to prevent continuous triggers
        Log.i(TAG, "🔥 WAKEWORD_USE: Pausing wake word detection to prevent interruption during voice session")
        pauseWakeWordButKeepMicActive()
    }
    
    private fun createNotificationChannel() {
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
            val channel = NotificationChannel(
                NOTIFICATION_CHANNEL_ID,
                "Wake Word Detection",
                NotificationManager.IMPORTANCE_LOW
            ).apply {
                description = "Used for wake word detection service"
                enableLights(false)
                enableVibration(false)
            }
            
            val notificationManager = getSystemService(NotificationManager::class.java)
            notificationManager.createNotificationChannel(channel)
        }
    }
    
    private fun createNotification(): Notification {
        val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
        
        val builder = NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
            .setContentTitle("Wake Word Detection Active")
            .setContentText("Listening for '$selectedWakeWord'")
            .setSmallIcon(android.R.drawable.ic_media_play)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setOngoing(true)
        
        return builder.build()
    }
    
    private fun registerPauseResumeReceiver() {
        brWakeWordPause = object : BroadcastReceiver() {
            override fun onReceive(context: Context, intent: Intent) {
                if (intent.action == Constants.Actions.PAUSE_WAKE_WORD_KEEP_LISTENING) {
                    Log.i(TAG, "Received broadcast to pause wake word detection but keep mic active")
                    pauseWakeWordButKeepMicActive()
                } else if (intent.action == Constants.Actions.RESUME_WAKE_WORD) {
                    Log.i(TAG, "🔄 WAKE_WORD_RESUME: ========== RESUME BROADCAST RECEIVED ==========")
                    Log.i(TAG, "🔄 WAKE_WORD_RESUME: Action: ${intent.action}")
                    Log.i(TAG, "🔄 WAKE_WORD_RESUME: Package: ${intent.getPackage()}")
                    Log.i(TAG, "🔄 WAKE_WORD_RESUME: Calling resumeWakeWordDetectionFromPaused()")
                    resumeWakeWordDetectionFromPaused()
                    Log.i(TAG, "🔄 WAKE_WORD_RESUME: ======================================")
                }
            }
        }
        
        val filter = IntentFilter().apply {
            addAction(Constants.Actions.PAUSE_WAKE_WORD_KEEP_LISTENING)
            addAction(Constants.Actions.RESUME_WAKE_WORD)
        }
        
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
            registerReceiver(brWakeWordPause, filter, Context.RECEIVER_NOT_EXPORTED)
        } else {
            registerReceiver(brWakeWordPause, filter)
        }
        
        Log.d(TAG, "Registered pause/resume broadcast receiver")
    }
    
    private fun pauseWakeWordButKeepMicActive() {
        if (isPaused) {
            Log.d(TAG, "⏸️ PAUSE_RESUME: Wake word detection already paused")
            return
        }
        
        try {
            Log.i(TAG, "⏸️ PAUSE_RESUME: ========== PAUSING WAKE WORD DETECTION ==========")
            Log.i(TAG, "⏸️ PAUSE_RESUME: Timestamp: ${System.currentTimeMillis()}")
            Log.i(TAG, "⏸️ PAUSE_RESUME: Reason: Voice session active - releasing mic for speech recognition")
            
            // Stop recording thread and release AudioRecord to allow SpeechRecognizer to use the microphone
            try {
                // First stop the recording loop
                Log.i(TAG, "⏸️ PAUSE_RESUME: Stopping recording thread...")
                isRunning = false
                recordingThread?.interrupt()
                
                // Then stop and release AudioRecord
                if (audioRecord?.state == AudioRecord.STATE_INITIALIZED) {
                    Log.i(TAG, "⏸️ PAUSE_RESUME: Stopping and releasing AudioRecord for mic handoff")
                    audioRecord?.stop()
                    audioRecord?.release()
                    audioRecord = null
                    Log.i(TAG, "⏸️ PAUSE_RESUME: ✅ AudioRecord released - mic available for speech recognition")
                }
                
                // Wait for thread to finish and clean up
                recordingThread?.join(1000) // Wait up to 1 second for thread to finish
                recordingThread = null
                Log.i(TAG, "⏸️ PAUSE_RESUME: ✅ Recording thread stopped and cleaned up")
            } catch (e: Exception) {
                Log.e(TAG, "⏸️ PAUSE_RESUME: Error stopping recording thread/AudioRecord: ${e.message}", e)
            }
            
            // Release any audio focus held by wake word service to allow speech recognition
            try {
                val audioManager = com.hightowerai.MobileJarvisNative.utils.AudioManager.getInstance()
                val currentRequest = audioManager.getCurrentRequestInfo()
                if (currentRequest?.requestId == "wake_word_detection") {
                    Log.i(TAG, "⏸️ PAUSE_RESUME: 🎵 Releasing wake word audio focus for speech recognition handoff")
                    audioManager.releaseAudioFocus(currentRequest.requestId)
                } else {
                    Log.d(TAG, "⏸️ PAUSE_RESUME: No wake word audio focus to release (current: ${currentRequest?.requestId})")
                }
            } catch (e: Exception) {
                Log.w(TAG, "⏸️ PAUSE_RESUME: Error releasing audio focus: ${e.message}", e)
            }
            
            isPaused = true
            updateNotification("Voice active", "Listening for your command...")
            
            Log.i(TAG, "⏸️ PAUSE_RESUME: ✅ Wake word detection paused (mic released for speech recognition)")
            Log.i(TAG, "⏸️ PAUSE_RESUME: Setting 2-minute auto-resume timer...")
            
            // Set a timer to automatically resume
            val autoResumeJob = serviceScope.launch {
                try {
                    Log.i(TAG, "⏸️ PAUSE_RESUME: 🕐 Starting 30 second auto-resume timer (coroutine: ${coroutineContext[Job]})")
                    delay((0.5 * 60 * 1000).toLong()) // 30 seconds
                    if (isPaused) {
                        Log.w(TAG, "⏸️ PAUSE_RESUME: ⚠️ Auto-resume triggered after 30 seconds")
                        resumeWakeWordDetectionFromPaused()
                    } else {
                        Log.i(TAG, "⏸️ PAUSE_RESUME: Auto-resume timer expired but service no longer paused")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "⏸️ PAUSE_RESUME: ❌ Error in auto-resume timer: ${e.message}", e)
                }
            }
            Log.i(TAG, "⏸️ PAUSE_RESUME: Auto-resume timer job created: $autoResumeJob")
            
            Log.i(TAG, "⏸️ PAUSE_RESUME: ====================================================")
        } catch (e: Exception) {
            Log.e(TAG, "⏸️ PAUSE_RESUME: ❌ Error pausing wake word detection: ${e.message}", e)
        }
    }
    
    private fun resumeWakeWordDetectionFromPaused() {
        if (!isPaused) {
            Log.d(TAG, "▶️ PAUSE_RESUME: Wake word detection not paused")
            return
        }
        
        // Defensive check: Ensure service is still running and not destroyed
        if (!isServiceRunning || serviceScope.isActive == false) {
            Log.w(TAG, "▶️ PAUSE_RESUME: ⚠️ Service is not running or scope is cancelled - skipping resume")
            Log.w(TAG, "▶️ PAUSE_RESUME: isServiceRunning: $isServiceRunning, scopeActive: ${serviceScope.isActive}")
            return
        }
        
        try {
            Log.i(TAG, "▶️ PAUSE_RESUME: ========== RESUMING WAKE WORD DETECTION ==========")
            Log.i(TAG, "▶️ PAUSE_RESUME: Timestamp: ${System.currentTimeMillis()}")
            Log.i(TAG, "▶️ PAUSE_RESUME: Previous state: Paused")
            
            // CRITICAL: Reset openWakeWordEngine singleton to prevent false detections
            Log.i(TAG, "▶️ PAUSE_RESUME: Resetting openWakeWordEngine singleton state...")
            try {
                // Use the new resetInstance method to properly reset the singleton
                OpenWakeWordEngine.resetInstance()
                Log.i(TAG, "▶️ PAUSE_RESUME: ✅ OpenWakeWordEngine singleton reset successfully")
                
                // Get fresh instance and initialize
                openWakeWordEngine = OpenWakeWordEngine.getInstance(this)
                val initialized = openWakeWordEngine?.initialize() ?: false
                
                if (initialized) {
                    val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
                    openWakeWordEngine?.setWakePhrase(selectedWakeWord)
                    
                    // Defensive check: Verify engine is ready before proceeding
                    val isReady = openWakeWordEngine?.isReady() ?: false
                    if (isReady) {
                        Log.i(TAG, "▶️ PAUSE_RESUME: ✅ Fresh OpenWakeWordEngine instance initialized and ready")
                        Log.i(TAG, "▶️ PAUSE_RESUME: Active wake phrase: '$selectedWakeWord'")
                    } else {
                        Log.e(TAG, "▶️ PAUSE_RESUME: ❌ OpenWakeWordEngine initialized but not ready - state may be corrupted")
                        // Attempt one more reset
                        try {
                            OpenWakeWordEngine.resetInstance()
                            openWakeWordEngine = OpenWakeWordEngine.getInstance(this)
                            val secondAttempt = openWakeWordEngine?.initialize() ?: false
                            if (secondAttempt) {
                                openWakeWordEngine?.setWakePhrase(selectedWakeWord) 
                                Log.i(TAG, "▶️ PAUSE_RESUME: ✅ Second initialization attempt successful")
                            } else {
                                Log.e(TAG, "▶️ PAUSE_RESUME: ❌ Second initialization attempt also failed")
                            }
                        } catch (e: Exception) {
                            Log.e(TAG, "▶️ PAUSE_RESUME: ❌ Error in second initialization attempt: ${e.message}", e)
                        }
                    }
                } else {
                    Log.e(TAG, "▶️ PAUSE_RESUME: ❌ Failed to initialize fresh openWakeWordEngine instance")
                }
            } catch (e: Exception) {
                Log.e(TAG, "▶️ PAUSE_RESUME: ❌ Error resetting openWakeWordEngine singleton: ${e.message}", e)
            }
            
            // Reset detection tracking variables to prevent stale state
            val currentTime = System.currentTimeMillis()
            lastWakeWordTime = 0L
            lastResumeTime = currentTime
            consecutiveLowConfidenceCount = 0
            processingCallCount = 0
            lastProcessingTime = currentTime
            circuitBreakerTripped = false
            Log.i(TAG, "▶️ PAUSE_RESUME: ✅ Detection state variables reset")
            Log.i(TAG, "▶️ PAUSE_RESUME: Resume cooldown active for ${RESUME_COOLDOWN_MS}ms to prevent false detections")
            
            // Reinitialize AudioRecord and recording thread if they were released
            if (audioRecord == null || recordingThread == null || !isRunning) {
                Log.i(TAG, "▶️ PAUSE_RESUME: Reinitializing AudioRecord and recording thread for wake word detection")
                
                // Ensure any old thread is completely stopped
                if (recordingThread != null) {
                    isRunning = false
                    recordingThread?.interrupt()
                    recordingThread?.join(1000)
                    recordingThread = null
                }
                
                // Setup new AudioRecord and start recording
                setupAudioRecording()
                Log.i(TAG, "▶️ PAUSE_RESUME: ✅ AudioRecord and recording thread reinitialized and started")
            } else {
                Log.i(TAG, "▶️ PAUSE_RESUME: AudioRecord and recording thread already active")
            }
            
            isPaused = false
            
            val selectedWakeWord = prefs.getString("selected_wake_word", "Juniper") ?: "Juniper"
            Log.i(TAG, "▶️ PAUSE_RESUME: Wake word threshold: $wakeWordThreshold")
            
            updateNotification("Listening for wake word", "Say '$selectedWakeWord' to activate")
            
            Log.i(TAG, "▶️ PAUSE_RESUME: ✅ Wake word detection resumed successfully")
            Log.i(TAG, "▶️ PAUSE_RESUME: ====================================================")
        } catch (e: Exception) {
            Log.e(TAG, "▶️ PAUSE_RESUME: ❌ Error resuming wake word detection: ${e.message}", e)
        }
    }
    
    private fun updateNotification(title: String, text: String) {
        val builder = NotificationCompat.Builder(this, NOTIFICATION_CHANNEL_ID)
            .setContentTitle(title)
            .setContentText(text)
            .setSmallIcon(android.R.drawable.ic_media_play)
            .setPriority(NotificationCompat.PRIORITY_LOW)
            .setOngoing(true)

        val notificationManager = getSystemService(Context.NOTIFICATION_SERVICE) as NotificationManager
        notificationManager.notify(Constants.NOTIFICATION_ID, builder.build())
    }
    
    override fun onDestroy() {
        super.onDestroy()
        cleanup()
        
        try {
            unregisterReceiver(brWakeWordPause)
            Log.d(TAG, "Unregistered pause/resume broadcast receiver")
        } catch (e: Exception) {
            Log.e(TAG, "Error unregistering pause/resume receiver: ${e.message}", e)
        }
        
        try {
            prefs.unregisterOnSharedPreferenceChangeListener(this)
            Log.d(TAG, "Unregistered preference change listener")
        } catch (e: Exception) {
            Log.e(TAG, "Error unregistering preference listener: ${e.message}", e)
        }
        
        Log.i(TAG, "Service destroyed")
    }
    
    override fun onBind(intent: Intent?): IBinder? {
        return null
    }
    
    override fun onSharedPreferenceChanged(sharedPreferences: SharedPreferences?, key: String?) {
        if (!isServiceRunning || !isRunning) {
            return
        }
        
        when (key) {
            "wake_word_sensitivity" -> {
                val oldThreshold = wakeWordThreshold
                val newThreshold = getWakeWordThreshold()
                
                if (oldThreshold != newThreshold) {
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: ========== WAKE WORD THRESHOLD CHANGED ==========")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: Service is running: $isServiceRunning")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: Detection is active: $isRunning")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: Previous threshold: $oldThreshold (${(oldThreshold * 100).toInt()}%)")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: New threshold: $newThreshold (${(newThreshold * 100).toInt()}%)")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: Change amount: ${newThreshold - oldThreshold}")
                    
                    wakeWordThreshold = newThreshold
                    
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: ✅ Threshold updated successfully")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: ⚠️ Note: Changes applied immediately without service restart")
                    Log.i(TAG, "🎚️ THRESHOLD_CHANGE: ================================================")
                }
            }
            "selected_wake_word" -> {
                if (isServiceRunning && isRunning) {
                    val newWakeWord = sharedPreferences?.getString("selected_wake_word", "Juniper") ?: "Juniper"
                    Log.i(TAG, "🎯 WAKE_WORD_CHANGE: Wake word changed to '$newWakeWord' while service is running")
                    Log.i(TAG, "🎯 WAKE_WORD_CHANGE: ⚠️ Service restart required for wake word change to take effect")
                }
            }
        }
    }
}