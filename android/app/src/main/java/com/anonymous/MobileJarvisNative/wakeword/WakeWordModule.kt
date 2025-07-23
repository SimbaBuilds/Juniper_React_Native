package com.anonymous.MobileJarvisNative.wakeword

import android.content.Intent
import android.util.Log
import com.facebook.react.bridge.*
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.anonymous.MobileJarvisNative.MainActivity
import android.content.BroadcastReceiver
import android.content.Context
import android.content.IntentFilter
import android.os.Build
import android.Manifest
import android.content.pm.PackageManager
import androidx.core.app.ActivityCompat
import androidx.core.content.ContextCompat
import com.anonymous.MobileJarvisNative.utils.Constants

class WakeWordModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    private val TAG = "WakeWordModule"
    private var isServiceRunning = false
    private var wakeWordReceiver: BroadcastReceiver? = null
    
    init {
        Log.i(TAG, "🔧 WAKEWORD_MODULE: ========== INITIALIZING WAKE WORD MODULE ==========")
        Log.i(TAG, "🔧 WAKEWORD_MODULE: Module creation timestamp: ${System.currentTimeMillis()}")
        Log.i(TAG, "🔧 WAKEWORD_MODULE: ReactApplicationContext available: ${reactApplicationContext != null}")
        Log.i(TAG, "🔧 WAKEWORD_MODULE: Thread: ${Thread.currentThread().name}")
        
        // Register broadcast receiver for wake word detection
        registerWakeWordReceiver()
        
        // Log initial state
        val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
        val initialState = prefs.getBoolean("wake_word_enabled", false)
        Log.i(TAG, "🔧 WAKEWORD_MODULE: Initial wake word state: enabled=$initialState")
        Log.i(TAG, "🔧 WAKEWORD_MODULE: ====================================================")
    }
    
    private fun registerWakeWordReceiver() {
        Log.i(TAG, "📻 RECEIVER_REG: ========== REGISTERING BROADCAST RECEIVER ==========")
        Log.i(TAG, "📻 RECEIVER_REG: Registration timestamp: ${System.currentTimeMillis()}")
        Log.i(TAG, "📻 RECEIVER_REG: Thread: ${Thread.currentThread().name}")
        Log.i(TAG, "📻 RECEIVER_REG: Expected action: ${Constants.Actions.WAKE_WORD_DETECTED_RN}")
        
        if (wakeWordReceiver == null) {
            Log.i(TAG, "📻 RECEIVER_REG: Creating new BroadcastReceiver instance...")
            wakeWordReceiver = object : BroadcastReceiver() {
                override fun onReceive(context: Context, intent: Intent) {
                    Log.i(TAG, "📻 RECEIVER_TRIGGER: ========== BROADCAST RECEIVED ==========")
                    Log.i(TAG, "📻 RECEIVER_TRIGGER: Receive timestamp: ${System.currentTimeMillis()}")
                    Log.i(TAG, "📻 RECEIVER_TRIGGER: Intent action: ${intent.action}")
                    Log.i(TAG, "📻 RECEIVER_TRIGGER: Expected action: ${Constants.Actions.WAKE_WORD_DETECTED_RN}")
                    Log.i(TAG, "📻 RECEIVER_TRIGGER: Action matches: ${intent.action == Constants.Actions.WAKE_WORD_DETECTED_RN}")
                    
                    if (intent.action == Constants.Actions.WAKE_WORD_DETECTED_RN) {
                        val timestamp = intent.getLongExtra("timestamp", System.currentTimeMillis())
                        val confidence = intent.getFloatExtra("confidence", 0f)
                        val wakeWord = intent.getStringExtra("wakeWord") ?: "Unknown"
                        val timeString = java.text.SimpleDateFormat("HH:mm:ss.SSS", java.util.Locale.US).format(java.util.Date(timestamp))
                        
                        Log.i(TAG, "📡 RN_BRIDGE: ========== WAKE WORD BROADCAST RECEIVED ==========")
                        Log.i(TAG, "📡 RN_BRIDGE: 👂 WAKE WORD DETECTED EVENT FROM NATIVE SERVICE")
                        Log.i(TAG, "📡 RN_BRIDGE: 🕒 Time: $timeString")
                        Log.i(TAG, "📡 RN_BRIDGE: 🎯 Wake word: '$wakeWord'")
                        Log.i(TAG, "📡 RN_BRIDGE: 📊 Confidence: ${String.format("%.4f", confidence)}")
                        Log.i(TAG, "📡 RN_BRIDGE: 🚀 Forwarding to JavaScript...")
                        
                        // Send event to JavaScript
                        val params = Arguments.createMap()
                        params.putDouble("timestamp", timestamp.toDouble())
                        params.putDouble("confidence", confidence.toDouble())
                        params.putString("wakeWord", wakeWord)
                        sendEvent("wakeWordDetected", params)
                        
                        Log.i(TAG, "📡 RN_BRIDGE: ✅ Wake word event sent to React Native successfully")
                        Log.i(TAG, "📡 RN_BRIDGE: =======================================================")
                    } else {
                        Log.w(TAG, "📻 RECEIVER_TRIGGER: ❌ Received broadcast with unexpected action: ${intent.action}")
                    }
                }
            }
            
            val intentFilter = IntentFilter(Constants.Actions.WAKE_WORD_DETECTED_RN)
            Log.i(TAG, "📻 RECEIVER_REG: Created IntentFilter for action: ${Constants.Actions.WAKE_WORD_DETECTED_RN}")
            
            try {
                // Use the appropriate registration method based on Android version
                // For Android 13+ (API 33+), specify RECEIVER_NOT_EXPORTED to follow best practices
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                    Log.i(TAG, "📻 RECEIVER_REG: Using RECEIVER_NOT_EXPORTED for Android 13+")
                    reactApplicationContext.registerReceiver(wakeWordReceiver, intentFilter, Context.RECEIVER_NOT_EXPORTED)
                } else {
                    Log.i(TAG, "📻 RECEIVER_REG: Using standard registration for Android < 13")
                    reactApplicationContext.registerReceiver(wakeWordReceiver, intentFilter)
                }
                
                Log.i(TAG, "📻 RECEIVER_REG: ✅ Broadcast receiver registered successfully")
                Log.i(TAG, "📻 RECEIVER_REG: Registration complete at: ${System.currentTimeMillis()}")
                Log.i(TAG, "📻 RECEIVER_REG: ====================================================")
            } catch (e: Exception) {
                Log.e(TAG, "📻 RECEIVER_REG: ❌ Error registering broadcast receiver: ${e.message}", e)
            }
        } else {
            Log.w(TAG, "📻 RECEIVER_REG: ⚠️ Broadcast receiver already exists, skipping registration")
        }
    }
    
    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        
        // Unregister broadcast receiver
        if (wakeWordReceiver != null) {
            try {
                reactApplicationContext.unregisterReceiver(wakeWordReceiver)
                wakeWordReceiver = null
                Log.d(TAG, "Unregistered wake word broadcast receiver")
            } catch (e: Exception) {
                Log.e(TAG, "Error unregistering wake word receiver: ${e.message}", e)
            }
        }
    }
    
    override fun getName(): String {
        return "WakeWordModule"
    }
    
    override fun getConstants(): Map<String, Any> {
        val constants = HashMap<String, Any>()
        constants["WAKE_WORD_DETECTED"] = "wakeWordDetected"
        return constants
    }
    
    @ReactMethod
    fun addListener(eventName: String) {
        // Required for RN event emitter
        Log.d(TAG, "Added listener for $eventName")
    }

    @ReactMethod
    fun removeListeners(count: Int) {
        // Required for RN event emitter
        Log.d(TAG, "Removed $count listener(s)")
    }
    
    /**
     * Check if wake word detection is available on this device
     */
    @ReactMethod
    fun isAvailable(promise: Promise) {
        val result = Arguments.createMap()
        
        // For now, simply check if we're on Android since that's the only platform we support
        result.putBoolean("available", true)
        promise.resolve(result)
    }
    
    /**
     * Start wake word detection service
     */
    @ReactMethod
    fun startDetection(serviceClass: String, promise: Promise) {
        try {
            Log.i(TAG, "🚀 START_DETECTION: ========== STARTING WAKE WORD DETECTION ==========")
            Log.i(TAG, "🚀 START_DETECTION: Service class: $serviceClass")
            Log.i(TAG, "🚀 START_DETECTION: Timestamp: ${System.currentTimeMillis()}")
            Log.i(TAG, "🚀 START_DETECTION: Android version: ${Build.VERSION.SDK_INT}")
            
            // First, check if we have required permissions
            Log.i(TAG, "🚀 START_DETECTION: Checking permissions...")
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.TIRAMISU) {
                val hasRecordAudioPermission = ContextCompat.checkSelfPermission(
                    reactApplicationContext, 
                    Manifest.permission.RECORD_AUDIO
                ) == PackageManager.PERMISSION_GRANTED
                
                val hasForegroundServicePermission = ContextCompat.checkSelfPermission(
                    reactApplicationContext, 
                    Manifest.permission.FOREGROUND_SERVICE_MICROPHONE
                ) == PackageManager.PERMISSION_GRANTED
                
                Log.i(TAG, "🚀 START_DETECTION: RECORD_AUDIO permission: $hasRecordAudioPermission")
                Log.i(TAG, "🚀 START_DETECTION: FOREGROUND_SERVICE_MICROPHONE permission: $hasForegroundServicePermission")
                
                if (!hasRecordAudioPermission || !hasForegroundServicePermission) {
                    Log.e(TAG, "🚀 START_DETECTION: ❌ Missing required permissions for wake word detection")
                    val errorMessage = "Missing permissions: " + 
                        (!hasRecordAudioPermission).let { if (it) "RECORD_AUDIO " else "" } +
                        (!hasForegroundServicePermission).let { if (it) "FOREGROUND_SERVICE_MICROPHONE" else "" }
                    promise.reject("PERMISSION_DENIED", errorMessage.trim())
                    return
                }
            } else {
                // For older Android versions, just check RECORD_AUDIO permission
                val hasRecordAudioPermission = ContextCompat.checkSelfPermission(
                    reactApplicationContext, 
                    Manifest.permission.RECORD_AUDIO
                ) == PackageManager.PERMISSION_GRANTED
                
                Log.i(TAG, "🚀 START_DETECTION: RECORD_AUDIO permission: $hasRecordAudioPermission")
                
                if (!hasRecordAudioPermission) {
                    Log.e(TAG, "🚀 START_DETECTION: ❌ Missing RECORD_AUDIO permission for wake word detection")
                    promise.reject("PERMISSION_DENIED", "Missing RECORD_AUDIO permission")
                    return
                }
            }

            // Only set wake word enabled state if we have all required permissions
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            prefs.edit().putBoolean("wake_word_enabled", true).apply()
            Log.d(TAG, "Set wake_word_enabled preference to true")
            
            Log.i(TAG, "🚀 START_DETECTION: ✅ All permissions granted")
            
            if (isServiceRunning) {
                Log.i(TAG, "🚀 START_DETECTION: ℹ️ Service already running, updating state only")
                val result = Arguments.createMap()
                result.putBoolean("success", true)
                result.putString("message", "Service already running")
                promise.resolve(result)
                return
            }

            Log.i(TAG, "🚀 START_DETECTION: Creating service intent for class: $serviceClass")
            val context = reactApplicationContext
            
            // Create intent with the provided service class
            val intent = try {
                val serviceClazz = Class.forName(serviceClass)
                Intent(context, serviceClazz)
            } catch (e: ClassNotFoundException) {
                Log.e(TAG, "🚀 START_DETECTION: ❌ Service class not found: $serviceClass", e)
                throw Exception("Service class not found: $serviceClass")
            }
            
            Log.i(TAG, "🚀 START_DETECTION: Starting service...")
            try {
                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.O) {
                    Log.i(TAG, "🚀 START_DETECTION: Using startForegroundService() for Android O+")
                    context.startForegroundService(intent)
                } else {
                    Log.i(TAG, "🚀 START_DETECTION: Using startService() for pre-Android O")
                    context.startService(intent)
                }
                
                isServiceRunning = true
                Log.i(TAG, "🚀 START_DETECTION: ✅ Service start command sent successfully")
                
            } catch (e: Exception) {
                Log.e(TAG, "🚀 START_DETECTION: ❌ Error starting service: ${e.message}", e)
                throw e
            }
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            Log.i(TAG, "🚀 START_DETECTION: ✅ Wake word detection started successfully")
            Log.i(TAG, "🚀 START_DETECTION: =====================================================")
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🚀 START_DETECTION: ❌ Error starting wake word detection: ${e.message}", e)
            promise.reject("START_DETECTION_ERROR", "Failed to start wake word detection: ${e.message}", e)
        }
    }
    
    /**
     * Start wake word detection service (backward compatibility method without service class parameter)
     */
    @ReactMethod
    fun startDetection(promise: Promise) {
        try {
            // Use the default service class path
            val defaultServiceClass = "com.anonymous.MobileJarvisNative.wakeword.WakeWordService"
            startDetection(defaultServiceClass, promise)
        } catch (e: Exception) {
            Log.e(TAG, "Error in backward compatibility startDetection: ${e.message}", e)
            promise.reject("START_DETECTION_ERROR", "Failed to start wake word detection: ${e.message}", e)
        }
    }
    
    /**
     * Stop wake word detection service
     */
    @ReactMethod
    fun stopDetection(promise: Promise) {
        try {
            if (!isServiceRunning) {
                val result = Arguments.createMap()
                result.putBoolean("success", true)
                result.putString("message", "Service not running")
                promise.resolve(result)
                return
            }

            val context = reactApplicationContext
            val intent = Intent(context, WakeWordService::class.java)
            
            // Set wake word disabled state
            val prefs = context.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            prefs.edit().putBoolean("wake_word_enabled", false).apply()
            
            context.stopService(intent)
            isServiceRunning = false
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error stopping wake word detection: ${e.message}", e)
            promise.reject("STOP_DETECTION_ERROR", "Failed to stop wake word detection: ${e.message}", e)
        }
    }
    
    /**
     * Get the current status of wake word detection
     */
    @ReactMethod
    fun getStatus(promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val enabled = prefs.getBoolean("wake_word_enabled", false)
            val serviceRunning = WakeWordService.isRunning()
            
            Log.d(TAG, "Current wake word state: enabled=$enabled, serviceRunning=$serviceRunning")
            
            // If the service is running but enabled is false, or vice versa, fix the inconsistency
            if (enabled != serviceRunning) {
                Log.w(TAG, "Detected state inconsistency, fixing...")
                prefs.edit().putBoolean("wake_word_enabled", serviceRunning).apply()
                val result = Arguments.createMap()
                result.putBoolean("enabled", serviceRunning)
                promise.resolve(result)
                return
            }
            
            val result = Arguments.createMap()
            result.putBoolean("enabled", enabled)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting wake word status: ${e.message}", e)
            promise.reject("GET_STATUS_ERROR", "Failed to get wake word status: ${e.message}", e)
        }
    }
    
    /**
     * Set the wake word detection threshold
     */
    @ReactMethod
    fun setWakeWordThreshold(threshold: Float, promise: Promise) {
        try {
            if (threshold < 0.0f || threshold > 1.0f) {
                promise.reject("INVALID_THRESHOLD", "Threshold must be between 0.0 and 1.0")
                return
            }

            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            prefs.edit().putFloat("wake_word_threshold", threshold).apply()
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error setting wake word threshold: ${e.message}", e)
            promise.reject("SET_THRESHOLD_ERROR", "Failed to set wake word threshold: ${e.message}", e)
        }
    }
    
    /**
     * Get available wake words
     */
    @ReactMethod
    fun getAvailableWakeWords(promise: Promise) {
        try {
            val wakeWords = Arguments.createArray()
            WakeWordService.AVAILABLE_WAKE_WORDS.forEach { wakeWord ->
                wakeWords.pushString(wakeWord)
            }
            
            val result = Arguments.createMap()
            result.putArray("wakeWords", wakeWords)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting available wake words: ${e.message}", e)
            promise.reject("GET_WAKE_WORDS_ERROR", "Failed to get available wake words: ${e.message}", e)
        }
    }
    
    /**
     * Set the selected wake word
     */
    @ReactMethod
    fun setSelectedWakeWord(wakeWord: String, promise: Promise) {
        Log.i(TAG, "🎯 WAKEWORD_SELECTION: ========== SET SELECTED WAKE WORD ==========")
        Log.i(TAG, "🎯 WAKEWORD_SELECTION: setSelectedWakeWord called from React Native")
        Log.i(TAG, "🎯 WAKEWORD_SELECTION: Timestamp: ${System.currentTimeMillis()}")
        Log.i(TAG, "🎯 WAKEWORD_SELECTION: Thread: ${Thread.currentThread().name}")
        Log.i(TAG, "🎯 WAKEWORD_SELECTION: Parameter received: '$wakeWord' (type: ${wakeWord.javaClass.simpleName})")
        
        try {
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ========== VALIDATING WAKE WORD ==========")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Available wake words: ${WakeWordService.AVAILABLE_WAKE_WORDS.toList()}")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Checking if '$wakeWord' is valid...")
            
            if (!WakeWordService.AVAILABLE_WAKE_WORDS.contains(wakeWord)) {
                Log.e(TAG, "🎯 WAKEWORD_SELECTION: ❌ Invalid wake word '$wakeWord'")
                Log.e(TAG, "🎯 WAKEWORD_SELECTION: Available wake words: ${WakeWordService.AVAILABLE_WAKE_WORDS}")
                promise.reject("INVALID_WAKE_WORD", "Wake word '$wakeWord' is not available")
                return
            }
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ✅ Wake word '$wakeWord' is valid")
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ========== SAVING TO SHARED PREFERENCES ==========")
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val previousWakeWord = prefs.getString("selected_wake_word", "JARVIS") ?: "JARVIS"
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Previous wake word: '$previousWakeWord'")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: New wake word: '$wakeWord'")
            
            if (previousWakeWord == wakeWord) {
                Log.i(TAG, "🎯 WAKEWORD_SELECTION: ℹ️ Wake word unchanged, but saving anyway")
            }
            
            val saveStartTime = System.currentTimeMillis()
            val saveSuccess = prefs.edit().putString("selected_wake_word", wakeWord).commit()
            val saveEndTime = System.currentTimeMillis()
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: SharedPreferences save took ${saveEndTime - saveStartTime}ms")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Save result: $saveSuccess")
            
            if (!saveSuccess) {
                Log.e(TAG, "🎯 WAKEWORD_SELECTION: ❌ Failed to save wake word to SharedPreferences")
                promise.reject("SAVE_ERROR", "Failed to save wake word to preferences")
                return
            }
            
            // Verify saved value
            val savedWakeWord = prefs.getString("selected_wake_word", "JARVIS") ?: "JARVIS"
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ========== VERIFICATION ==========")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Verified saved wake word: '$savedWakeWord'")
            
            if (savedWakeWord != wakeWord) {
                Log.e(TAG, "🎯 WAKEWORD_SELECTION: ❌ Verification failed! Expected '$wakeWord', got '$savedWakeWord'")
                promise.reject("VERIFICATION_ERROR", "Wake word verification failed")
                return
            }
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ========== SUCCESS ==========")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ✅ Wake word changed from '$previousWakeWord' to '$wakeWord'")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ✅ Wake word preference saved and verified successfully")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: ⚠️ Note: Service restart required for change to take effect")
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: =============================================")
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            result.putString("previousWakeWord", previousWakeWord)
            result.putString("newWakeWord", savedWakeWord)
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎯 WAKEWORD_SELECTION: ========== ERROR ==========")
            Log.e(TAG, "🎯 WAKEWORD_SELECTION: ❌ Error setting wake word: ${e.message}", e)
            Log.e(TAG, "🎯 WAKEWORD_SELECTION: Error type: ${e.javaClass.simpleName}")
            Log.e(TAG, "🎯 WAKEWORD_SELECTION: Error stack trace:", e)
            promise.reject("SET_WAKE_WORD_ERROR", "Failed to set wake word: ${e.message}", e)
        }
    }
    
    /**
     * Get the selected wake word
     */
    @ReactMethod
    fun getSelectedWakeWord(promise: Promise) {
        Log.d(TAG, "🎯 WAKEWORD_SELECTION: ========== GET SELECTED WAKE WORD ==========")
        Log.d(TAG, "🎯 WAKEWORD_SELECTION: getSelectedWakeWord called from React Native")
        
        try {
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val selectedWakeWord = prefs.getString("selected_wake_word", "JARVIS") ?: "JARVIS"
            
            Log.i(TAG, "🎯 WAKEWORD_SELECTION: Current selected wake word: '$selectedWakeWord'")
            Log.d(TAG, "🎯 WAKEWORD_SELECTION: Default fallback: 'JARVIS'")
            
            val result = Arguments.createMap()
            result.putString("wakeWord", selectedWakeWord)
            result.putBoolean("success", true)
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎯 WAKEWORD_SELECTION: ❌ Error getting selected wake word: ${e.message}", e)
            promise.reject("GET_WAKE_WORD_ERROR", "Failed to get selected wake word: ${e.message}", e)
        }
    }
    
    /**
     * Set wake word sensitivity
     */
    @ReactMethod
    fun setWakeWordSensitivity(sensitivity: Float, promise: Promise) {
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== SET WAKE WORD SENSITIVITY ==========")
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: setWakeWordSensitivity called from React Native")
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Timestamp: ${System.currentTimeMillis()}")
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Thread: ${Thread.currentThread().name}")
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Parameter received: $sensitivity (type: ${sensitivity.javaClass.simpleName})")
        Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Sensitivity percentage: ${(sensitivity * 100).toInt()}%")
        
        try {
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== VALIDATING SENSITIVITY ==========")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Valid range: 0.0 - 1.0")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Received value: $sensitivity")
            
            if (sensitivity < 0.0f || sensitivity > 1.0f) {
                Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ❌ Invalid sensitivity value: $sensitivity (must be 0.0-1.0)")
                promise.reject("INVALID_SENSITIVITY", "Sensitivity must be between 0.0 and 1.0")
                return
            }
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity value $sensitivity is valid")
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== SAVING TO SHARED PREFERENCES ==========")
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val previousSensitivity = prefs.getFloat("wake_word_sensitivity", 0.3f)
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Previous sensitivity: $previousSensitivity (${(previousSensitivity * 100).toInt()}%)")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: New sensitivity: $sensitivity (${(sensitivity * 100).toInt()}%)")
            
            if (previousSensitivity == sensitivity) {
                Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ℹ️ Sensitivity unchanged, but saving anyway")
            }
            
            val saveStartTime = System.currentTimeMillis()
            val saveSuccess = prefs.edit().putFloat("wake_word_sensitivity", sensitivity).commit()
            val saveEndTime = System.currentTimeMillis()
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: SharedPreferences save took ${saveEndTime - saveStartTime}ms")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Save result: $saveSuccess")
            
            if (!saveSuccess) {
                Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ❌ Failed to save sensitivity to SharedPreferences")
                promise.reject("SAVE_ERROR", "Failed to save sensitivity to preferences")
                return
            }
            
            // Verify saved value
            val savedSensitivity = prefs.getFloat("wake_word_sensitivity", 0.3f)
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== VERIFICATION ==========")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Verified saved sensitivity: $savedSensitivity (${(savedSensitivity * 100).toInt()}%)")
            
            if (savedSensitivity != sensitivity) {
                Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ❌ Verification failed! Expected $sensitivity, got $savedSensitivity")
                promise.reject("VERIFICATION_ERROR", "Sensitivity verification failed")
                return
            }
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== SUCCESS ==========")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity changed from $previousSensitivity (${(previousSensitivity * 100).toInt()}%) to $sensitivity (${(sensitivity * 100).toInt()}%)")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ✅ Sensitivity preference saved and verified successfully")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ⚠️ Note: Service restart required for change to take effect")
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: ================================================")
            
            val result = Arguments.createMap()
            result.putBoolean("success", true)
            result.putDouble("previousSensitivity", previousSensitivity.toDouble())
            result.putDouble("newSensitivity", savedSensitivity.toDouble())
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== ERROR ==========")
            Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ❌ Error setting wake word sensitivity: ${e.message}", e)
            Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: Error type: ${e.javaClass.simpleName}")
            Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: Error stack trace:", e)
            promise.reject("SET_SENSITIVITY_ERROR", "Failed to set wake word sensitivity: ${e.message}", e)
        }
    }
    
    /**
     * Get wake word sensitivity
     */
    @ReactMethod
    fun getWakeWordSensitivity(promise: Promise) {
        Log.d(TAG, "🎚️ WAKEWORD_SENSITIVITY: ========== GET WAKE WORD SENSITIVITY ==========")
        Log.d(TAG, "🎚️ WAKEWORD_SENSITIVITY: getWakeWordSensitivity called from React Native")
        
        try {
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val sensitivity = prefs.getFloat("wake_word_sensitivity", 0.3f)
            
            Log.i(TAG, "🎚️ WAKEWORD_SENSITIVITY: Current sensitivity: $sensitivity (${(sensitivity * 100).toInt()}%)")
            Log.d(TAG, "🎚️ WAKEWORD_SENSITIVITY: Default fallback: 0.3 (30%)")
            
            val result = Arguments.createMap()
            result.putDouble("sensitivity", sensitivity.toDouble())
            result.putBoolean("success", true)
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🎚️ WAKEWORD_SENSITIVITY: ❌ Error getting wake word sensitivity: ${e.message}", e)
            promise.reject("GET_SENSITIVITY_ERROR", "Failed to get wake word sensitivity: ${e.message}", e)
        }
    }
    
    /**
     * Get the wake word detection threshold
     */
    @ReactMethod
    fun getWakeWordThreshold(promise: Promise) {
        try {
            val prefs = reactApplicationContext.getSharedPreferences("wakeword_prefs", Context.MODE_PRIVATE)
            val threshold = prefs.getFloat("wake_word_threshold", 0.3f)  // Match WakeWordService default
            
            val result = Arguments.createMap()
            result.putDouble("threshold", threshold.toDouble())
            result.putBoolean("success", true)
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "Error getting wake word threshold: ${e.message}", e)
            promise.reject("GET_THRESHOLD_ERROR", "Failed to get wake word threshold: ${e.message}", e)
        }
    }
    
    /**
     * Helper method to send events to JavaScript
     */
    private fun sendEvent(eventName: String, params: WritableMap?) {
        Log.d(TAG, "📡 SEND_EVENT: About to emit event '$eventName' to React Native")
        Log.d(TAG, "📡 SEND_EVENT: Params: $params")
        Log.d(TAG, "📡 SEND_EVENT: ReactApplicationContext available: ${reactApplicationContext != null}")
        
        try {
            reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                ?.emit(eventName, params)
            
            Log.d(TAG, "📡 SEND_EVENT: ✅ Event '$eventName' emitted successfully to React Native")
        } catch (e: Exception) {
            Log.e(TAG, "📡 SEND_EVENT: ❌ Error emitting event '$eventName': ${e.message}", e)
        }
    }
} 