package com.anonymous.MobileJarvisNative.voice

import android.content.Context
import android.content.ComponentName
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
    private var noSpeechRetryCount = 0
    
    // Speech Recognition properties
    private var speechRecognizer: SpeechRecognizer? = null
    private var isListening = false
    private var lastRecognitionStartTime = 0L
    private var speechRecognitionRetryCount = 0
    private var preferOfflineMode = true // Track current recognition mode
    private var useMinimalParameters = false // Track if using minimal parameters for final fallback
    
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
    
    // Research-based fix: State change debouncing to prevent rapid transitions
    private var lastStateChangeTime = 0L
    private var lastState: VoiceState? = null
    private val STATE_CHANGE_DEBOUNCE_MS = 500L
    
    // Circuit breaker pattern to prevent infinite ERROR → LISTENING loops
    private var errorToListeningCount = 0
    private var lastErrorToListeningTime = 0L
    private val MAX_ERROR_LISTENING_TRANSITIONS = 3
    private val ERROR_LISTENING_RESET_TIME_MS = 10000L // Reset counter after 10 seconds
    
    // Research-based fix: Partial results handling for graceful degradation
    private var lastPartialResults: List<String>? = null
    private var partialResultsText = ""
    
    // Focus-free approach: Track which streams were originally muted
    private var wasSystemStreamMuted = false
    private var wasMusicStreamMuted = false
    private var wasNotificationStreamMuted = false
    private var wasRingStreamMuted = false
    private var wasAlarmStreamMuted = false
    // Focus-free approach: Comprehensive volume storage for all audio streams
    private var originalSystemVolume = 0
    private var originalMusicVolume = 0
    private var originalNotificationVolume = 0
    private var originalRingVolume = 0
    private var originalAlarmVolume = 0
    private var originalInterruptionFilter = 0
    private var dndModeEnabled = false
    
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
     * Log comprehensive service diagnostics
     */
    private fun logComprehensiveServiceDiagnostics() {
        val packageManager = context.packageManager
        
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: ========== COMPREHENSIVE SERVICE DIAGNOSTICS ==========")
        
        // 1. Check activities that handle speech recognition intents
        val speechRecognitionIntent = Intent(android.speech.RecognizerIntent.ACTION_RECOGNIZE_SPEECH)
        val activities = packageManager.queryIntentActivities(speechRecognitionIntent, 0)
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Found ${activities.size} activities handling ACTION_RECOGNIZE_SPEECH")
        
        activities.forEachIndexed { index, activity ->
            val info = activity.activityInfo
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Activity [$index]: ${info.packageName}/${info.name}")
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Enabled: ${info.enabled}")
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Exported: ${info.exported}")
        }
        
        // 2. Check services that implement RecognitionService interface
        val recognitionServices = packageManager.queryIntentServices(
            Intent(android.speech.RecognitionService.SERVICE_INTERFACE), 0
        )
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Found ${recognitionServices.size} services implementing RecognitionService")
        
        recognitionServices.forEachIndexed { index, service ->
            val info = service.serviceInfo
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Service [$index]: ${info.packageName}/${info.name}")
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Enabled: ${info.enabled}")
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Exported: ${info.exported}")
            
            // Check if this is a TTS service masquerading as recognition service
            val isTtsService = info.name.contains("tts", ignoreCase = true) || 
                              info.name.contains("TextToSpeech", ignoreCase = true)
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Is TTS Service: $isTtsService")
            
            // Check service permissions
            try {
                val packageInfo = packageManager.getPackageInfo(info.packageName, android.content.pm.PackageManager.GET_PERMISSIONS)
                val hasRecordPermission = packageInfo.requestedPermissions?.contains(android.Manifest.permission.RECORD_AUDIO) == true
                Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Has RECORD_AUDIO permission: $hasRecordPermission")
            } catch (e: Exception) {
                Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS:   - Permission check failed: ${e.message}")
            }
        }
        
        // 3. Check Google Services status
        val googleServices = recognitionServices.filter { it.serviceInfo.packageName.contains("google") }
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Google services found: ${googleServices.size}")
        
        googleServices.forEach { service ->
            val info = service.serviceInfo
            Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Google Service: ${info.packageName}/${info.name}")
        }
        
        // 4. Log system audio capabilities
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: System audio info: ${checkAudioPermissions()}")
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: Available audio inputs: ${getAvailableAudioInputs()}")
        
        // 5. Check what service would be selected
        val bestService = findBestSpeechRecognitionService()
        if (bestService != null) {
            Log.i(TAG, "🔍 SERVICE_DIAGNOSTICS: BEST SERVICE SELECTED: ${bestService.packageName}/${bestService.className}")
        } else {
            Log.w(TAG, "🔍 SERVICE_DIAGNOSTICS: NO SUITABLE SERVICE FOUND")
        }
        
        Log.d(TAG, "🔍 SERVICE_DIAGNOSTICS: =================================================================")
    }
    
    /**
     * Query Google app's internal components directly using alternative methods
     */
    private fun queryGoogleComponentsDirect(): ComponentName? {
        Log.d(TAG, "🕸️ DIRECT_QUERY: ========== DIRECT GOOGLE COMPONENT QUERY ===========")
        
        try {
            val packageManager = context.packageManager
            
            // Method 1: Use reflection to access Google app internals (if possible)
            Log.d(TAG, "🕸️ DIRECT_QUERY: Method 1 - Reflection-based component discovery")
            
            try {
                val googleAppPackage = "com.google.android.googlequicksearchbox"
                val applicationInfo = packageManager.getApplicationInfo(googleAppPackage, android.content.pm.PackageManager.GET_META_DATA)
                
                // Check if we can access Google app's context
                val googleContext = context.createPackageContext(googleAppPackage, android.content.Context.CONTEXT_INCLUDE_CODE)
                Log.d(TAG, "🕸️ DIRECT_QUERY: Successfully created Google app context")
                
                // Try to enumerate all components within Google app
                val googlePackageInfo = packageManager.getPackageInfo(googleAppPackage, 
                    android.content.pm.PackageManager.GET_SERVICES or 
                    android.content.pm.PackageManager.GET_ACTIVITIES or
                    android.content.pm.PackageManager.GET_RECEIVERS or
                    android.content.pm.PackageManager.GET_PROVIDERS)
                
                // Check all services for speech-related functionality
                googlePackageInfo.services?.forEach { service ->
                    val serviceName = service.name
                    Log.d(TAG, "🕸️ DIRECT_QUERY: Google service: $serviceName")
                    
                    // Look for services with speech-related names or metadata
                    if (serviceName.contains("speech", ignoreCase = true) || 
                        serviceName.contains("recogn", ignoreCase = true) ||
                        serviceName.contains("voice", ignoreCase = true) ||
                        serviceName.contains("audio", ignoreCase = true)) {
                        
                        Log.i(TAG, "🕸️ DIRECT_QUERY: Potential speech service: $serviceName")
                        Log.d(TAG, "🕸️ DIRECT_QUERY: - Enabled: ${service.enabled}")
                        Log.d(TAG, "🕸️ DIRECT_QUERY: - Exported: ${service.exported}")
                        
                        // Check service metadata
                        if (service.metaData != null) {
                            Log.d(TAG, "🕸️ DIRECT_QUERY: - Has metadata: ${service.metaData.size()} entries")
                            for (key in service.metaData.keySet()) {
                                Log.d(TAG, "🕸️ DIRECT_QUERY: - Metadata: $key = ${service.metaData.get(key)}")
                            }
                        }
                        
                        // Try to create component and test it
                        if (service.enabled && service.exported) {
                            val component = ComponentName(googleAppPackage, serviceName)
                            Log.i(TAG, "🕸️ DIRECT_QUERY: ✅ Found viable component: $component")
                            return component
                        }
                    }
                }
                
                // Check activities that might handle speech
                googlePackageInfo.activities?.forEach { activity ->
                    val activityName = activity.name
                    if (activityName.contains("speech", ignoreCase = true) || 
                        activityName.contains("recogn", ignoreCase = true) ||
                        activityName.contains("voice", ignoreCase = true)) {
                        
                        Log.i(TAG, "🕸️ DIRECT_QUERY: Speech-related activity: $activityName")
                        
                        // Check what intents this activity handles
                        try {
                            val component = ComponentName(googleAppPackage, activityName)
                            val activityInfo = packageManager.getActivityInfo(component, android.content.pm.PackageManager.GET_META_DATA)
                            Log.d(TAG, "🕸️ DIRECT_QUERY: Activity enabled: ${activityInfo.enabled}")
                        } catch (e: Exception) {
                            Log.d(TAG, "🕸️ DIRECT_QUERY: Could not get activity info: ${e.message}")
                        }
                    }
                }
                
            } catch (e: Exception) {
                Log.d(TAG, "🕸️ DIRECT_QUERY: Method 1 failed: ${e.message}")
            }
            
            // Method 2: Try to bind to Google services directly
            Log.d(TAG, "🕸️ DIRECT_QUERY: Method 2 - Direct service binding test")
            
            val potentialServices = listOf(
                "com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService",
                "com.google.android.voicesearch.serviceapi.GoogleRecognitionService",
                "com.google.android.apps.gsa.speech.SpeechRecognitionService",
                "com.google.android.apps.gsa.shared.speech.SpeechService"
            )
            
            for (serviceName in potentialServices) {
                try {
                    val component = ComponentName("com.google.android.googlequicksearchbox", serviceName)
                    
                    // Test if we can create a basic intent for this service
                    val testIntent = Intent()
                    testIntent.component = component
                    
                    // Check if any activities or services respond to this component
                    val resolveInfo = packageManager.resolveService(testIntent, 0)
                    if (resolveInfo != null) {
                        Log.i(TAG, "🕸️ DIRECT_QUERY: Method 2 - ✅ Service responds: $serviceName")
                        return component
                    }
                    
                } catch (e: Exception) {
                    Log.d(TAG, "🕸️ DIRECT_QUERY: Method 2 - Service $serviceName test failed: ${e.message}")
                }
            }
            
            // Method 3: Check Google Play Services components
            Log.d(TAG, "🕸️ DIRECT_QUERY: Method 3 - Google Play Services component check")
            
            try {
                val gmsPackage = "com.google.android.gms"
                val gmsPackageInfo = packageManager.getPackageInfo(gmsPackage, android.content.pm.PackageManager.GET_SERVICES)
                
                gmsPackageInfo.services?.forEach { service ->
                    val serviceName = service.name
                    if (serviceName.contains("speech", ignoreCase = true) ||
                        serviceName.contains("recogn", ignoreCase = true)) {
                        
                        Log.i(TAG, "🕸️ DIRECT_QUERY: GMS speech service: $serviceName")
                        
                        if (service.enabled) {
                            val component = ComponentName(gmsPackage, serviceName)
                            Log.i(TAG, "🕸️ DIRECT_QUERY: Method 3 - ✅ GMS service enabled: $component")
                            return component
                        }
                    }
                }
                
            } catch (e: Exception) {
                Log.d(TAG, "🕸️ DIRECT_QUERY: Method 3 failed: ${e.message}")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🕸️ DIRECT_QUERY: Direct query failed: ${e.message}", e)
        } finally {
            Log.d(TAG, "🕸️ DIRECT_QUERY: =================================================================")
        }
        
        return null
    }
    
    /**
     * Check and configure Google app's internal speech recognition settings
     */
    private fun configureGoogleSpeechSettings(): Boolean {
        Log.d(TAG, "⚙️ GOOGLE_CONFIG: ========== CONFIGURING GOOGLE SPEECH SETTINGS ===========")
        
        try {
            val packageManager = context.packageManager
            
            // Check Google app settings and preferences
            val googleAppPackage = "com.google.android.googlequicksearchbox"
            
            try {
                val googleAppInfo = packageManager.getApplicationInfo(googleAppPackage, android.content.pm.PackageManager.GET_META_DATA)
                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Google app found - checking capabilities")
                
                // Check if Google app has necessary permissions
                val packageInfo = packageManager.getPackageInfo(googleAppPackage, android.content.pm.PackageManager.GET_PERMISSIONS)
                val permissions = packageInfo.requestedPermissions
                
                val hasRecordAudio = permissions?.contains(android.Manifest.permission.RECORD_AUDIO) == true
                val hasInternet = permissions?.contains(android.Manifest.permission.INTERNET) == true
                val hasNetworkState = permissions?.contains(android.Manifest.permission.ACCESS_NETWORK_STATE) == true
                
                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Google app permissions - RECORD_AUDIO: $hasRecordAudio, INTERNET: $hasInternet, NETWORK_STATE: $hasNetworkState")
                
                if (!hasRecordAudio) {
                    Log.w(TAG, "⚙️ GOOGLE_CONFIG: ⚠️ Google app lacks RECORD_AUDIO permission")
                    return false
                }
                
                // Try to detect if Google app speech services are disabled
                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Checking Google app component states")
                
                val potentialComponents = listOf(
                    "com.google.android.apps.gsa.staticplugins.opa.hq.OpaHqActivity",
                    "com.google.android.apps.gsa.search.core.service.SearchService",
                    "com.google.android.voicesearch.serviceapi.GoogleRecognitionService",
                    "com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService"
                )
                
                for (componentName in potentialComponents) {
                    try {
                        val component = ComponentName(googleAppPackage, componentName)
                        val componentEnabledState = packageManager.getComponentEnabledSetting(component)
                        
                        Log.d(TAG, "⚙️ GOOGLE_CONFIG: Component $componentName state: $componentEnabledState")
                        
                        // Try to enable disabled components (if we have permission)
                        if (componentEnabledState == android.content.pm.PackageManager.COMPONENT_ENABLED_STATE_DISABLED) {
                            Log.i(TAG, "⚙️ GOOGLE_CONFIG: Found disabled component, attempting to enable: $componentName")
                            try {
                                // Note: This will likely fail due to security restrictions, but worth trying
                                packageManager.setComponentEnabledSetting(
                                    component,
                                    android.content.pm.PackageManager.COMPONENT_ENABLED_STATE_ENABLED,
                                    android.content.pm.PackageManager.DONT_KILL_APP
                                )
                                Log.i(TAG, "⚙️ GOOGLE_CONFIG: ✅ Successfully enabled component: $componentName")
                            } catch (securityException: SecurityException) {
                                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Cannot enable component (security): $componentName")
                            } catch (e: Exception) {
                                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Cannot enable component: $componentName - ${e.message}")
                            }
                        }
                        
                    } catch (e: Exception) {
                        Log.d(TAG, "⚙️ GOOGLE_CONFIG: Component $componentName not found: ${e.message}")
                    }
                }
                
                // Check Google Play Services speech capabilities
                Log.d(TAG, "⚙️ GOOGLE_CONFIG: Checking Google Play Services speech capabilities")
                
                try {
                    val gmsPackage = "com.google.android.gms"
                    val gmsInfo = packageManager.getPackageInfo(gmsPackage, android.content.pm.PackageManager.GET_SERVICES)
                    
                    gmsInfo.services?.forEach { service ->
                        if (service.name.contains("speech", ignoreCase = true) ||
                            service.name.contains("recogn", ignoreCase = true) ||
                            service.name.contains("voice", ignoreCase = true)) {
                            
                            Log.d(TAG, "⚙️ GOOGLE_CONFIG: GMS speech-related service: ${service.name}")
                            Log.d(TAG, "⚙️ GOOGLE_CONFIG: - Enabled: ${service.enabled}")
                            Log.d(TAG, "⚙️ GOOGLE_CONFIG: - Exported: ${service.exported}")
                            
                            if (!service.enabled) {
                                Log.w(TAG, "⚙️ GOOGLE_CONFIG: ⚠️ GMS speech service is disabled: ${service.name}")
                            }
                        }
                    }
                    
                } catch (e: Exception) {
                    Log.d(TAG, "⚙️ GOOGLE_CONFIG: Could not access GMS services: ${e.message}")
                }
                
                return true
                
            } catch (e: Exception) {
                Log.w(TAG, "⚙️ GOOGLE_CONFIG: Google app not accessible: ${e.message}")
                return false
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "⚙️ GOOGLE_CONFIG: Configuration check failed: ${e.message}", e)
            return false
        } finally {
            Log.d(TAG, "⚙️ GOOGLE_CONFIG: =================================================================")
        }
    }
    
    /**
     * Attempt to activate Google Speech Recognition services
     */
    private fun activateGoogleSpeechServices(): ComponentName? {
        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: ========== ACTIVATING GOOGLE SPEECH SERVICES ===========")
        
        // First, check and configure Google settings
        val configurationSuccess = configureGoogleSpeechSettings()
        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Configuration result: $configurationSuccess")
        
        try {
            val packageManager = context.packageManager
            
            // Method 1: Try to trigger Google app speech service initialization
            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Method 1 - Triggering Google app speech initialization")
            
            val googleAppPackage = "com.google.android.googlequicksearchbox"
            try {
                val googleAppInfo = packageManager.getPackageInfo(googleAppPackage, 0)
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Google app version: ${googleAppInfo.versionName}")
                
                // Try to send an intent to initialize speech services
                val activationIntent = Intent("android.speech.action.RECOGNIZE_SPEECH")
                activationIntent.setPackage(googleAppPackage)
                activationIntent.putExtra("android.speech.extra.LANGUAGE_MODEL", "free_form")
                activationIntent.putExtra("calling_package", context.packageName)
                
                val activities = packageManager.queryIntentActivities(activationIntent, 0)
                if (activities.isNotEmpty()) {
                    Log.i(TAG, "🌟 GOOGLE_ACTIVATION: Found ${activities.size} Google speech activities")
                    
                    // Try to start the activity to wake up speech services
                    try {
                        activationIntent.addFlags(Intent.FLAG_ACTIVITY_NEW_TASK)
                        activationIntent.putExtra("android.speech.extra.PROMPT", "")
                        // Use a very short timeout to just trigger initialization
                        activationIntent.putExtra("android.speech.extra.SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS", 100)
                        
                        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Attempting to trigger Google speech service initialization")
                        // Don't actually start the activity, just query if we can
                        
                    } catch (e: Exception) {
                        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Speech activity trigger failed: ${e.message}")
                    }
                }
                
            } catch (e: Exception) {
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Google app not found or inaccessible: ${e.message}")
            }
            
            // Method 2: Check for Google Assistant integration
            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Method 2 - Checking Google Assistant integration")
            
            try {
                val assistantIntent = Intent("android.intent.action.ASSIST")
                val assistantActivities = packageManager.queryIntentActivities(assistantIntent, 0)
                
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Found ${assistantActivities.size} assistant activities")
                assistantActivities.forEach { activity ->
                    if (activity.activityInfo.packageName.contains("google")) {
                        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Google Assistant found: ${activity.activityInfo.packageName}")
                    }
                }
                
            } catch (e: Exception) {
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Assistant check failed: ${e.message}")
            }
            
            // Method 3: Try alternative Google service packages
            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Method 3 - Checking alternative Google packages")
            
            val alternativePackages = listOf(
                "com.google.android.apps.speechservices",
                "com.google.android.tts",
                "com.google.android.gms"
            )
            
            for (packageName in alternativePackages) {
                try {
                    val packageInfo = packageManager.getPackageInfo(packageName, android.content.pm.PackageManager.GET_SERVICES)
                    Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Package $packageName found with ${packageInfo.services?.size ?: 0} services")
                    
                    packageInfo.services?.forEach { service ->
                        if (service.name.contains("speech", ignoreCase = true) || 
                            service.name.contains("recogn", ignoreCase = true)) {
                            val componentName = ComponentName(packageName, service.name)
                            Log.i(TAG, "🌟 GOOGLE_ACTIVATION: Potential speech service found: ${service.name}")
                            
                            // Try to validate this service
                            try {
                                val serviceInfo = packageManager.getServiceInfo(componentName, 0)
                                if (serviceInfo.enabled) {
                                    Log.i(TAG, "🌟 GOOGLE_ACTIVATION: ✅ Enabled speech service found: $componentName")
                                    return componentName
                                }
                            } catch (e: Exception) {
                                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Service validation failed: ${e.message}")
                            }
                        }
                    }
                    
                } catch (e: Exception) {
                    Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Package $packageName not available: ${e.message}")
                }
            }
            
            // Method 4: Try direct component querying
            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Method 4 - Direct component querying")
            
            val directComponent = queryGoogleComponentsDirect()
            if (directComponent != null) {
                Log.i(TAG, "🌟 GOOGLE_ACTIVATION: ✅ Direct query found component: $directComponent")
                return directComponent
            }
            
            // Method 5: Try to query for any RecognitionService implementations more broadly
            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Method 5 - Broad RecognitionService query")
            
            try {
                val broadQuery = Intent(android.speech.RecognitionService.SERVICE_INTERFACE)
                val services = packageManager.queryIntentServices(broadQuery, android.content.pm.PackageManager.GET_META_DATA or android.content.pm.PackageManager.GET_RESOLVED_FILTER)
                
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Broad query found ${services.size} services")
                
                for (service in services) {
                    val packageName = service.serviceInfo.packageName
                    val serviceName = service.serviceInfo.name
                    
                    Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Analyzing service: $packageName/$serviceName")
                    Log.d(TAG, "🌟 GOOGLE_ACTIVATION: - Enabled: ${service.serviceInfo.enabled}")
                    Log.d(TAG, "🌟 GOOGLE_ACTIVATION: - Exported: ${service.serviceInfo.exported}")
                    
                    // Even if it's a TTS service, log it for debugging
                    if (packageName.contains("google")) {
                        val componentName = ComponentName(packageName, serviceName)
                        Log.i(TAG, "🌟 GOOGLE_ACTIVATION: Google service details: $componentName")
                        
                        // Check if we can get more info about this service
                        try {
                            val detailedInfo = packageManager.getServiceInfo(componentName, android.content.pm.PackageManager.GET_META_DATA)
                            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Service metadata: ${detailedInfo.metaData}")
                        } catch (e: Exception) {
                            Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Could not get service metadata: ${e.message}")
                        }
                    }
                }
                
            } catch (e: Exception) {
                Log.d(TAG, "🌟 GOOGLE_ACTIVATION: Broad service query failed: ${e.message}")
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🌟 GOOGLE_ACTIVATION: Activation attempt failed: ${e.message}", e)
        }
        
        Log.d(TAG, "🌟 GOOGLE_ACTIVATION: =================================================================")
        return null
    }
    
    /**
     * Find the best available speech recognition service with multiple fallback strategies
     */
    private fun findBestSpeechRecognitionService(): ComponentName? {
        val packageManager = context.packageManager
        
        Log.d(TAG, "🔍 SERVICE_DETECTION: ========== FINDING BEST SPEECH RECOGNITION SERVICE ===========")
        
        // Pre-Strategy: Attempt to activate Google services first
        val activatedService = activateGoogleSpeechServices()
        if (activatedService != null) {
            Log.i(TAG, "🔍 SERVICE_DETECTION: ✅ Google service activated: $activatedService")
            return activatedService
        }
        
        // Strategy 1: Query for actual speech recognition services (after activation attempt)
        val recognitionServices = packageManager.queryIntentServices(
            Intent(android.speech.RecognitionService.SERVICE_INTERFACE), 0
        )
        
        Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 1 - Found ${recognitionServices.size} RecognitionService implementations")
        
        // Filter and prioritize services
        val validServices = mutableListOf<Pair<ComponentName, Int>>()
        
        for (service in recognitionServices) {
            val packageName = service.serviceInfo.packageName
            val serviceName = service.serviceInfo.name
            val componentName = ComponentName(packageName, serviceName)
            
            Log.d(TAG, "🔍 SERVICE_DETECTION: Evaluating service: $packageName/$serviceName")
            
            // Skip TTS services that incorrectly implement RecognitionService
            if (serviceName.contains("tts", ignoreCase = true) || 
                serviceName.contains("TextToSpeech", ignoreCase = true)) {
                Log.w(TAG, "🔍 SERVICE_DETECTION: Skipping TTS service: $serviceName")
                continue
            }
            
            // Validate service capabilities
            val isValidService = validateSpeechRecognitionService(componentName)
            if (!isValidService) {
                Log.w(TAG, "🔍 SERVICE_DETECTION: Service validation failed: $serviceName")
                continue
            }
            
            // Assign priority based on known good services
            val priority = when {
                // Google Speech Services (highest priority)
                packageName == "com.google.android.googlequicksearchbox" && serviceName.contains("speech", ignoreCase = true) -> 150
                packageName == "com.google.android.apps.gsa" && serviceName.contains("speech", ignoreCase = true) -> 140
                // Google Assistant
                packageName.contains("google") && serviceName.contains("assistant", ignoreCase = true) -> 120
                // Other Google services with speech capability
                packageName.contains("google") && serviceName.contains("speech", ignoreCase = true) -> 100
                packageName.contains("google") -> 80
                // Android system services
                packageName.contains("android") -> 60
                // Third-party services
                else -> 40
            }
            
            Log.d(TAG, "🔍 SERVICE_DETECTION: Valid service found with priority $priority: $serviceName")
            validServices.add(Pair(componentName, priority))
        }
        
        // Strategy 2: Enhanced Google service discovery with alternative approaches
        if (validServices.isEmpty()) {
            Log.w(TAG, "🔍 SERVICE_DETECTION: Strategy 1 failed, trying Strategy 2 - Enhanced Google discovery")
            
            // 2a. Known Google service components
            val knownGoogleServices = listOf(
                ComponentName("com.google.android.googlequicksearchbox", "com.google.android.voicesearch.serviceapi.GoogleRecognitionService"),
                ComponentName("com.google.android.apps.gsa", "com.google.android.apps.gsa.staticplugins.recognizer.RecognizerService"),
                ComponentName("com.google.android.gms", "com.google.android.gms.speech.service.SpeechRecognitionService"),
                // Additional known components
                ComponentName("com.google.android.apps.speechservices", "com.google.android.apps.speechservices.SpeechRecognitionService"),
                ComponentName("com.google.android.tts", "com.google.android.apps.speech.tts.service.SpeechRecognitionService")
            )
            
            for (component in knownGoogleServices) {
                try {
                    val serviceInfo = packageManager.getServiceInfo(component, 0)
                    if (serviceInfo.enabled) {
                        Log.i(TAG, "🔍 SERVICE_DETECTION: Strategy 2a - Found enabled Google service: ${component.className}")
                        validServices.add(Pair(component, 200)) // Higher priority for known working services
                    }
                } catch (e: Exception) {
                    Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 2a - Service not available: ${component.className}")
                }
            }
            
            // 2b. Search within Google packages for any speech-related services
            if (validServices.isEmpty()) {
                Log.w(TAG, "🔍 SERVICE_DETECTION: Strategy 2a failed, trying 2b - Package-wide service scan")
                
                val googlePackages = listOf(
                    "com.google.android.googlequicksearchbox",
                    "com.google.android.gms",
                    "com.google.android.apps.gsa",
                    "com.google.android.apps.speechservices"
                )
                
                for (packageName in googlePackages) {
                    try {
                        val packageInfo = packageManager.getPackageInfo(packageName, android.content.pm.PackageManager.GET_SERVICES)
                        
                        packageInfo.services?.forEach { service ->
                            val serviceName = service.name
                            if ((serviceName.contains("speech", ignoreCase = true) || 
                                 serviceName.contains("recogn", ignoreCase = true) ||
                                 serviceName.contains("voice", ignoreCase = true)) &&
                                !serviceName.contains("tts", ignoreCase = true)) {
                                
                                val component = ComponentName(packageName, serviceName)
                                Log.i(TAG, "🔍 SERVICE_DETECTION: Strategy 2b - Found potential service: $component")
                                
                                try {
                                    val serviceInfo = packageManager.getServiceInfo(component, 0)
                                    if (serviceInfo.enabled) {
                                        Log.i(TAG, "🔍 SERVICE_DETECTION: Strategy 2b - ✅ Valid service: $component")
                                        validServices.add(Pair(component, 180))
                                    }
                                } catch (e: Exception) {
                                    Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 2b - Service validation failed: ${e.message}")
                                }
                            }
                        }
                        
                    } catch (e: Exception) {
                        Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 2b - Package $packageName scan failed: ${e.message}")
                    }
                }
            }
            
            // 2c. Try alternative intent actions
            if (validServices.isEmpty()) {
                Log.w(TAG, "🔍 SERVICE_DETECTION: Strategy 2b failed, trying 2c - Alternative intent actions")
                
                val alternativeActions = listOf(
                    "android.speech.RecognitionService",
                    "com.google.android.voicesearch.RECOGNIZE_SPEECH",
                    "android.intent.action.VOICE_COMMAND"
                )
                
                for (action in alternativeActions) {
                    try {
                        val intent = Intent(action)
                        val services = packageManager.queryIntentServices(intent, 0)
                        
                        Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 2c - Action '$action' found ${services.size} services")
                        
                        services.forEach { service ->
                            if (service.serviceInfo.packageName.contains("google")) {
                                val component = ComponentName(service.serviceInfo.packageName, service.serviceInfo.name)
                                Log.i(TAG, "🔍 SERVICE_DETECTION: Strategy 2c - Found Google service: $component")
                                validServices.add(Pair(component, 160))
                            }
                        }
                        
                    } catch (e: Exception) {
                        Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 2c - Action '$action' failed: ${e.message}")
                    }
                }
            }
        }
        
        // Strategy 3: Check if Google app or Google Assistant is installed but not showing as service
        if (validServices.isEmpty()) {
            Log.w(TAG, "🔍 SERVICE_DETECTION: Strategy 2 failed, trying Strategy 3 - Google app detection")
            
            val googlePackages = listOf(
                "com.google.android.googlequicksearchbox",
                "com.google.android.apps.gsa",
                "com.google.android.gms"
            )
            
            for (packageName in googlePackages) {
                try {
                    packageManager.getPackageInfo(packageName, 0)
                    Log.i(TAG, "🔍 SERVICE_DETECTION: Strategy 3 - Google package detected: $packageName")
                    Log.w(TAG, "🔍 SERVICE_DETECTION: Strategy 3 - Package exists but no speech service found - possible configuration issue")
                } catch (e: Exception) {
                    Log.d(TAG, "🔍 SERVICE_DETECTION: Strategy 3 - Google package not installed: $packageName")
                }
            }
        }
        
        // Sort by priority (highest first) and return the best service
        val bestService = validServices.sortedByDescending { it.second }.firstOrNull()?.first
        
        if (bestService != null) {
            Log.i(TAG, "🔍 SERVICE_DETECTION: Best service selected: ${bestService.packageName}/${bestService.className}")
        } else {
            Log.w(TAG, "🔍 SERVICE_DETECTION: All strategies failed - no valid speech recognition services found")
            Log.w(TAG, "🔍 SERVICE_DETECTION: User may need to install Google app or enable speech services")
        }
        
        Log.d(TAG, "🔍 SERVICE_DETECTION: ================================================================")
        return bestService
    }
    
    /**
     * Validate that a service actually supports speech recognition
     */
    private fun validateSpeechRecognitionService(componentName: ComponentName): Boolean {
        return try {
            val packageManager = context.packageManager
            val serviceInfo = packageManager.getServiceInfo(componentName, 0)
            
            // Check if service is enabled
            if (!serviceInfo.enabled) {
                Log.d(TAG, "🔍 SERVICE_VALIDATION: Service is disabled: ${componentName.className}")
                return false
            }
            
            // Check if service has RECORD_AUDIO permission or doesn't need it
            val permissions = try {
                packageManager.getPackageInfo(componentName.packageName, android.content.pm.PackageManager.GET_PERMISSIONS)?.requestedPermissions
            } catch (e: Exception) {
                null
            }
            
            val hasRecordAudioPermission = permissions?.contains(android.Manifest.permission.RECORD_AUDIO) == true
            Log.d(TAG, "🔍 SERVICE_VALIDATION: Service has RECORD_AUDIO permission: $hasRecordAudioPermission")
            
            Log.d(TAG, "🔍 SERVICE_VALIDATION: Service validated successfully: ${componentName.className}")
            true
        } catch (e: Exception) {
            Log.w(TAG, "🔍 SERVICE_VALIDATION: Service validation error for ${componentName.className}: ${e.message}")
            false
        }
    }
    
    /**
     * Initialize speech recognition with proper service detection
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
                // Find the best available speech recognition service
                val bestService = findBestSpeechRecognitionService()
                
                if (bestService != null) {
                    try {
                        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context, bestService)
                        Log.i(TAG, "🔧 SERVICE_DETECTION: Speech recognizer initialized with service: ${bestService.packageName}/${bestService.className}")
                    } catch (e: Exception) {
                        Log.w(TAG, "🔧 SERVICE_DETECTION: Failed to use detected service, falling back to default: ${e.message}")
                        speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context)
                        Log.d(TAG, "Speech recognizer initialized with default service (fallback)")
                    }
                } else {
                    // Fallback to default if no suitable service found
                    speechRecognizer = SpeechRecognizer.createSpeechRecognizer(context)
                    Log.w(TAG, "🔧 SERVICE_DETECTION: No suitable speech recognition service found, using default")
                }
                
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
        Log.d(TAG, "🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking")
        
        // Reset recognition mode preference for new session (unless mid-retry)
        if (speechRecognitionRetryCount == 0) {
            preferOfflineMode = true
            useMinimalParameters = false
            Log.d(TAG, "🔧 RECOGNITION_MODE: Reset to OFFLINE mode for new session")
        }
        
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
            
            // Research-based fix: Always destroy old recognizer before creating new one
            try {
                speechRecognizer?.destroy()
                speechRecognizer = null
                Log.d(TAG, "🔧 RECREATE_PATTERN: Destroyed old speech recognizer before recreating")
            } catch (e: Exception) {
                Log.w(TAG, "🔧 RECREATE_PATTERN: Error destroying old recognizer: ${e.message}")
            }
            
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
            
            // Research-based fix: Perform preflight check before starting
            if (!performSpeechRecognitionPreflightCheck()) {
                Log.e(TAG, "🚨 PREFLIGHT_FAIL: Speech recognition preflight check failed")
                isListening = false
                _voiceState.value = VoiceState.ERROR("Speech recognition not available")
                return
            }
            
            // Update state before starting recognition
            isListening = true
            updateState(VoiceState.LISTENING)
            
            // Clear previous partial results for fresh start
            lastPartialResults = null
            partialResultsText = ""
            Log.d(TAG, "🔄 GRACEFUL_DEGRADATION: Cleared partial results for new recognition session")
            
            // Create recognizer intent with enhanced logging
            val intent = createRecognizerIntent()
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognizer intent created")
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Intent extras: ${intent.extras}")
            
            // Check current audio focus state and handle accordingly
            // Focus-free approach: Skip all audio focus management
            // Let SpeechRecognizer handle its own internal focus requirements  
            Log.d(TAG, "🔇 FOCUS_FREE: Skipping audio focus checks - using comprehensive stream muting instead")
            
            // 2025 Research fix: Enhanced Google Assistant conflict detection and mitigation
            try {
                val okGoogleStatus = checkOkGoogleConflicts()
                Log.d(TAG, "🏺 OK_GOOGLE_FIX: Pre-recognition status: $okGoogleStatus")
                
                val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as android.app.ActivityManager
                val runningTasks = activityManager.getRunningTasks(1)
                if (runningTasks.isNotEmpty()) {
                    val topActivity = runningTasks[0].topActivity
                    if (topActivity?.packageName?.contains("com.google.android.googlequicksearchbox") == true) {
                        Log.w(TAG, "🏺 OK_GOOGLE_FIX: Google Assistant appears to be active, applying enhanced mitigation")
                        
                        // Apply mitigation with reduced delay since beep fix is working
                        mitigateOkGoogleConflicts()
                        Thread.sleep(200) // Reduced from 1000ms since beep fix addresses root cause
                        
                        Log.w(TAG, "🏺 OK_GOOGLE_FIX: Enhanced Google Assistant mitigation completed (optimized)")
                    }
                }
            } catch (e: Exception) {
                Log.d(TAG, "🏺 OK_GOOGLE_FIX: Could not check for Google Assistant: ${e.message}")
            }
            
            // 2025 Focus-Free Approach: Skip audio focus completely
            // Research shows audio focus is NOT required for SpeechRecognizer functionality
            // The 334ms focus theft was causing ERROR_NO_MATCH - eliminate this completely
            Log.i(TAG, "🔇 FOCUS_FREE: Using focus-free speech recognition approach")
            Log.i(TAG, "🔇 FOCUS_FREE: No audio focus requests - SpeechRecognizer handles internal requirements")
            Log.i(TAG, "🔇 FOCUS_FREE: Comprehensive stream muting prevents beep interference")
            
            // 2025 Focus-Free Fix: Comprehensive stream muting with timing isolation
            Log.i(TAG, "🔇 FOCUS_FREE: Starting recognition session isolation")
            muteSystemBeep()
            
            // Critical isolation timing: Allow 100ms for streams to stabilize
            Thread.sleep(100) // Increased for focus-free approach - ensures all streams are muted
            Log.i(TAG, "🔇 FOCUS_FREE: Audio isolation established - all streams muted for 100ms")
            
            // Set timestamp to detect potential hangs
            lastRecognitionStartTime = System.currentTimeMillis()
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Starting recognition at timestamp: $lastRecognitionStartTime")
            
            // Start the actual speech recognizer with retry logic
            try {
                speechRecognizer?.startListening(intent)
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: SpeechRecognizer.startListening() called successfully")
                
                // Add immediate verification that recognition started properly
                Handler(Looper.getMainLooper()).postDelayed({
                    if (isListening && _voiceState.value is VoiceState.LISTENING) {
                        Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition confirmed active after 200ms")
                    } else {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Recognition may have failed to start properly")
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: isListening: $isListening, state: ${_voiceState.value}")
                    }
                }, 200)
                
            } catch (e: Exception) {
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Failed to start SpeechRecognizer", e)
                isListening = false
                
                // Restore audio streams if recognition fails to start
                restoreSystemBeep()
                
                _voiceState.value = VoiceState.ERROR("Speech recognizer start failed: ${e.message}")
                return
            }
            
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
            
            if (useMinimalParameters) {
                // Minimal parameters mode for final fallback - maximum compatibility
                Log.d(TAG, "🔧 MINIMAL_MODE: Using minimal parameters for maximum compatibility")
                // Only essential parameters
                putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, false) // Force online
                putExtra(RecognizerIntent.EXTRA_CALLING_PACKAGE, context.packageName) // Essential
                Log.d(TAG, "🔧 AUDIO_FORMAT: Using default audio format for minimal mode")
            } else {
                // Standard/enhanced parameters mode
                putExtra(RecognizerIntent.EXTRA_PREFER_OFFLINE, preferOfflineMode) // Dynamic processing mode
                putExtra(RecognizerIntent.EXTRA_CALLING_PACKAGE, context.packageName) // Prevent hijacking
                putExtra("android.speech.extra.DICTATION_MODE", true)
                if (preferOfflineMode) {
                    // Only add PCM format for offline mode to avoid compatibility issues
                    putExtra("android.speech.extra.GET_AUDIO_FORMAT", "audio/pcm")
                    Log.d(TAG, "🔧 AUDIO_FORMAT: Using PCM audio format for offline recognition")
                } else {
                    Log.d(TAG, "🔧 AUDIO_FORMAT: Using default audio format for online recognition")
                }
                
                // Additional research-based parameters to prevent Google Assistant conflicts
                putExtra("android.speech.extra.EXTRA_ADDITIONAL_LANGUAGES", arrayOf<String>()) // Limit language options
                putExtra("android.speech.extra.PROMPT", "") // No prompt to reduce Google Assistant triggers
            }
            
            Log.d(TAG, "🔧 RESEARCH_FIX: Enhanced Google Assistant mitigation parameters added")
            Log.d(TAG, "🔧 RESEARCH_FIX: EXTRA_PREFER_OFFLINE=$preferOfflineMode, EXTRA_CALLING_PACKAGE=${context.packageName}")
            Log.d(TAG, "🔧 RECOGNITION_MODE: Using ${if (preferOfflineMode) "OFFLINE" else "ONLINE"} recognition mode")
            
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
            
            if (useMinimalParameters) {
                // Minimal mode: Use very permissive timing parameters for maximum compatibility
                val minimalMinLength = 500L // Very short minimum
                val minimalCompleteSilence = 1000L // Short silence timeout
                val minimalPossibleSilence = 600L // Short possible silence
                
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, minimalMinLength)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, minimalCompleteSilence)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, minimalPossibleSilence)
                
                Log.i(TAG, "🔧 MINIMAL_MODE: Applied permissive timing parameters for maximum compatibility:")
                Log.i(TAG, "🔧 MINIMAL_MODE: - Min length: ${minimalMinLength}ms")
                Log.i(TAG, "🔧 MINIMAL_MODE: - Complete silence: ${minimalCompleteSilence}ms")
                Log.i(TAG, "🔧 MINIMAL_MODE: - Possible silence: ${minimalPossibleSilence}ms")
            } else {
                // Standard mode: Force aggressive timing parameters for Google Assistant mitigation
                val aggressiveMinLength = if (useCustomParams) minLengthMs else 2000L
                val aggressiveCompleteSilence = if (useCustomParams) completeSilenceMs else 3000L
                val aggressivePossibleSilence = if (useCustomParams) possibleSilenceMs else 1500L
                
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_MINIMUM_LENGTH_MILLIS, aggressiveMinLength)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_COMPLETE_SILENCE_LENGTH_MILLIS, aggressiveCompleteSilence)
                putExtra(RecognizerIntent.EXTRA_SPEECH_INPUT_POSSIBLY_COMPLETE_SILENCE_LENGTH_MILLIS, aggressivePossibleSilence)
                
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: Applied aggressive timing parameters for Google Assistant mitigation:")
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: - Min length: ${aggressiveMinLength}ms (was ${minLengthMs}ms)")
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: - Complete silence: ${aggressiveCompleteSilence}ms (was ${completeSilenceMs}ms)")
                Log.i(TAG, "🎤 SPEECH_RECOGNITION: - Possible silence: ${aggressivePossibleSilence}ms (was ${possibleSilenceMs}ms)")
            }
            
            // Log all extras for debugging
            Log.d(TAG, "🎤 SPEECH_RECOGNITION: Final intent extras:")
            extras?.keySet()?.forEach { key ->
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: - $key: ${extras?.get(key)}")
            }
            
            // Comprehensive service diagnostics
            logComprehensiveServiceDiagnostics()
            
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
                
                // Audio focus is managed centrally with Google Assistant mitigation
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech recognizer ready - audio focus managed centrally")
                
                val actualStartTime = System.currentTimeMillis() 
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition start time: $actualStartTime")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Time from lastRecognitionStartTime to actual start: ${actualStartTime - lastRecognitionStartTime}ms")
                isListening = true
                lastRecognitionStartTime = actualStartTime
                speechRecognitionRetryCount = 0 // Reset retry count on successful start
                
                // Speech recognition active - centralized audio focus management in effect
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Speech recognition active with centralized focus management")
            }
            
            override fun onBeginningOfSpeech() {
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Beginning of speech detected")
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
                Log.d(TAG, "🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking")
                isListening = false
                
                // 2025 Focus-Free Fix: End recognition session isolation
                Log.i(TAG, "🔇 FOCUS_FREE: Recognition complete - ending session isolation")
                restoreSystemBeep()
                
                // Brief stabilization period after stream restoration
                Thread.sleep(50)
                Log.i(TAG, "🔇 FOCUS_FREE: Audio streams restored with 50ms stabilization")
            }
            
            override fun onError(error: Int) {
                val now = System.currentTimeMillis()
                val totalListeningTime = now - lastRecognitionStartTime
                val errorMessage = getSpeechRecognitionErrorMessage(error)
                
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: ========== ERROR OCCURRED ==========")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error code: $error")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Error message: $errorMessage")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Total listening time: ${totalListeningTime}ms")
                Log.e(TAG, "🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking")
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
                
                // 2025 Focus-Free Fix: End recognition session isolation on error  
                Log.i(TAG, "🔇 FOCUS_FREE: Recognition error - ending session isolation")
                restoreSystemBeep()
                
                // Brief stabilization period after stream restoration
                Thread.sleep(50)
                Log.i(TAG, "🔇 FOCUS_FREE: Audio streams restored after error with 50ms stabilization")
                
                // 2025 Focus-Free Fix: Enhanced ERROR_NO_MATCH handling for beep interference
                if (error == SpeechRecognizer.ERROR_NO_MATCH && totalListeningTime < 600) {
                    Log.w(TAG, "🔇 FOCUS_FREE: ERROR_NO_MATCH within 600ms - likely beep interference despite stream muting ($totalListeningTime ms)")
                    Log.w(TAG, "🔇 FOCUS_FREE: This indicates system beep occurred before stream muting took effect")
                    Log.w(TAG, "🔇 FOCUS_FREE: Immediate retry with pre-established stream isolation")
                    
                    // Immediately restart recognition with enhanced isolation
                    Handler(Looper.getMainLooper()).postDelayed({
                        Log.d(TAG, "🔇 FOCUS_FREE: Restarting recognition with stronger pre-isolation")
                        startListening()
                    }, 150) // Shorter delay since streams are already isolated
                    return
                }
                
                // Research-based fix: Always recreate SpeechRecognizer after error
                Log.i(TAG, "🔧 RECREATE_PATTERN: Destroying and recreating SpeechRecognizer after error")
                try {
                    speechRecognizer?.destroy()
                    speechRecognizer = null
                    isSpeechRecognitionInitialized = false
                    Log.d(TAG, "🔧 RECREATE_PATTERN: SpeechRecognizer destroyed, will recreate on next use")
                } catch (e: Exception) {
                    Log.w(TAG, "🔧 RECREATE_PATTERN: Error destroying SpeechRecognizer: ${e.message}")
                }
                
                // Online/Offline fallback logic for recognition failures
                if ((error == SpeechRecognizer.ERROR_NO_MATCH || error == SpeechRecognizer.ERROR_SPEECH_TIMEOUT || 
                     error == SpeechRecognizer.ERROR_NETWORK || error == SpeechRecognizer.ERROR_SERVER) && 
                    speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    
                    if (preferOfflineMode && speechRecognitionRetryCount == 0) {
                        // First retry: Switch to online mode
                        Log.w(TAG, "🔧 FALLBACK_STRATEGY: Offline recognition failed, switching to ONLINE mode")
                        Log.w(TAG, "🔧 FALLBACK_STRATEGY: Error: $errorMessage (code: $error)")
                        Log.w(TAG, "🔧 FALLBACK_STRATEGY: Listening time: ${totalListeningTime}ms")
                        
                        preferOfflineMode = false
                        speechRecognitionRetryCount++
                        
                        Handler(Looper.getMainLooper()).postDelayed({
                            Log.d(TAG, "🔧 FALLBACK_STRATEGY: Retrying with ONLINE recognition mode")
                            startListening()
                        }, 1000)
                        return
                    } else if (!preferOfflineMode && speechRecognitionRetryCount == 1) {
                        // Second retry: Switch back to offline with different parameters
                        Log.w(TAG, "🔧 FALLBACK_STRATEGY: Online recognition also failed, trying offline with relaxed parameters")
                        
                        preferOfflineMode = true
                        speechRecognitionRetryCount++
                        
                        Handler(Looper.getMainLooper()).postDelayed({
                            Log.d(TAG, "🔧 FALLBACK_STRATEGY: Retrying with OFFLINE recognition and relaxed parameters")
                            startListening()
                        }, 1500)
                        return
                    } else if (speechRecognitionRetryCount == 2) {
                        // Third retry: Try with minimal parameters for maximum compatibility
                        Log.w(TAG, "🔧 FALLBACK_STRATEGY: Both modes failed, trying with minimal parameters for maximum compatibility")
                        
                        preferOfflineMode = false // Use online with minimal parameters
                        useMinimalParameters = true // Enable minimal parameter mode
                        speechRecognitionRetryCount++
                        
                        Handler(Looper.getMainLooper()).postDelayed({
                            Log.d(TAG, "🔧 FALLBACK_STRATEGY: Final retry with minimal recognition parameters")
                            startListening()
                        }, 2000)
                        return
                    }
                }
                
                // Handle permission error with recreation
                if (error == SpeechRecognizer.ERROR_INSUFFICIENT_PERMISSIONS && 
                   speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    speechRecognitionRetryCount++
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: Permission error, will retry speech recognition (attempt $speechRecognitionRetryCount)")
                    
                    // Use exponential backoff instead of fixed delay
                    val retryDelayMs = (1000L * (1 shl (speechRecognitionRetryCount - 1))).coerceAtMost(5000L)
                    Log.d(TAG, "🔧 EXPONENTIAL_BACKOFF: Using ${retryDelayMs}ms delay for retry $speechRecognitionRetryCount")
                    
                    Handler(Looper.getMainLooper()).postDelayed({
                        startListening()
                    }, retryDelayMs)
                    return
                }
                
                // Research-based fix: Handle ERROR_NO_MATCH and ERROR_SPEECH_TIMEOUT with automatic restart
                if (error == SpeechRecognizer.ERROR_NO_MATCH || error == SpeechRecognizer.ERROR_SPEECH_TIMEOUT) {
                    Log.w(TAG, "🔧 AUTO_RECOVERY: Handling ${errorMessage} with automatic restart")
                    
                    // Special handling for immediate failures that indicate Google Assistant conflicts
                    if (totalListeningTime < 500) {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: IMMEDIATE_FAILURE detected (${totalListeningTime}ms) - likely Google Assistant conflict")
                        
                        if (speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                            speechRecognitionRetryCount++
                            
                            // Use exponential backoff for Google Assistant conflicts
                            val conflictDelayMs = (2000L * (1 shl (speechRecognitionRetryCount - 1))).coerceAtMost(8000L)
                            Log.w(TAG, "🎤 SPEECH_RECOGNITION: Retrying speech recognition (attempt ${speechRecognitionRetryCount}/${MAX_SPEECH_RECOGNITION_RETRY_COUNT}) after ${conflictDelayMs}ms delay")
                            
                            Handler(Looper.getMainLooper()).postDelayed({
                                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Google Assistant conflict retry delay completed, attempting restart")
                                startListening()
                            }, conflictDelayMs)
                            return
                        } else {
                            Log.e(TAG, "🎤 SPEECH_RECOGNITION: Maximum immediate failure retries exceeded, treating as no speech")
                        }
                    }
                    
                    // Handle as no speech detected for longer listening times
                    Log.w(TAG, "🎤 SPEECH_RECOGNITION: No speech/match detected, delegating to handleNoSpeechDetected()")
                    handleNoSpeechDetected()
                    return
                }
                
                // For other errors, increment retry count and potentially retry
                if (speechRecognitionRetryCount < MAX_SPEECH_RECOGNITION_RETRY_COUNT) {
                    speechRecognitionRetryCount++
                    val retryDelayMs = (1000L * (1 shl (speechRecognitionRetryCount - 1))).coerceAtMost(4000L)
                    Log.w(TAG, "🔧 AUTO_RECOVERY: Retrying after error $error (attempt $speechRecognitionRetryCount) in ${retryDelayMs}ms")
                    
                    Handler(Looper.getMainLooper()).postDelayed({
                        startListening()
                    }, retryDelayMs)
                    return
                }
                
                // Research-based fix: More helpful error messages
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: Maximum retries exceeded, setting error state")
                Log.e(TAG, "🎤 SPEECH_RECOGNITION: ===========================")
                
                val googleAppStatus = checkGoogleAppStatus()
                val helpfulErrorMessage = when {
                    errorMessage.contains("Audio recording error") -> 
                        "Microphone access error. Please check permissions and try again."
                    errorMessage.contains("Network") -> 
                        "Network error. Speech recognition is working in offline mode."
                    googleAppStatus.contains("GoogleApp:false") -> 
                        "Google Speech Services unavailable. Please enable Google app and try again."
                    else -> "Speech recognition error. Please try again or restart the app."
                }
                
                _voiceState.value = VoiceState.ERROR(helpfulErrorMessage)
            }
            
            override fun onResults(results: Bundle?) {
                val now = System.currentTimeMillis()
                val totalListeningTime = now - lastRecognitionStartTime
                isListening = false
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: ========== RESULTS RECEIVED ==========")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Total listening time: ${totalListeningTime}ms")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition mode: ${if (preferOfflineMode) "OFFLINE" else "ONLINE"}")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Retry count: $speechRecognitionRetryCount")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Results bundle: $results")
                
                val matches = results?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                val confidences = results?.getFloatArray(SpeechRecognizer.CONFIDENCE_SCORES)
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Recognition matches: $matches")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Confidence scores: ${confidences?.contentToString()}")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Number of alternatives: ${matches?.size ?: 0}")
                
                // Log all alternatives with confidence scores
                matches?.forEachIndexed { index, match ->
                    val conf = confidences?.getOrNull(index) ?: 0.0f
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Alternative [$index]: '$match' (confidence: $conf)")
                }
                
                val text = matches?.get(0) ?: ""
                val confidence = confidences?.get(0) ?: 0.0f
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Selected text: '$text'")
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: Primary confidence: $confidence")
                Log.d(TAG, "🔧 RECOGNITION_ENGINE: Success with ${if (preferOfflineMode) "OFFLINE" else "ONLINE"} mode after $speechRecognitionRetryCount retries")
                Log.d(TAG, "🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking")
                
                if (text.isNotBlank()) {
                    Log.d(TAG, "🎤 SPEECH_RECOGNITION: Text is valid, processing...")
                    
                    // 2025 Research fix: Restore system beep before processing results
                    restoreSystemBeep()
                    
                    onSpeechRecognized(text)
                } else {
                    // Research-based fix: Use partial results as fallback
                    if (partialResultsText.isNotBlank()) {
                        Log.w(TAG, "🔄 GRACEFUL_DEGRADATION: Using partial results as fallback: '$partialResultsText'")
                        
                        // 2025 Research fix: Restore system beep before processing partial results
                        restoreSystemBeep()
                        
                        onSpeechRecognized(partialResultsText)
                    } else {
                        Log.w(TAG, "🎤 SPEECH_RECOGNITION: Text is blank and no partial results, handling as no speech")
                        
                        // 2025 Research fix: Restore system beep before handling no speech
                        restoreSystemBeep()
                        
                        handleNoSpeechDetected()
                    }
                }
                
                Log.d(TAG, "🎤 SPEECH_RECOGNITION: ===========================")
            }
            
            override fun onPartialResults(partialResults: Bundle?) {
                // 2025 Research fix: Enhanced partial results with UNSTABLE_TEXT workaround
                // Based on: "combine SpeechRecognizer.RESULTS_RECOGNITION with 'android.speech.extra.UNSTABLE_TEXT'"
                try {
                    val partialMatches = partialResults?.getStringArrayList(SpeechRecognizer.RESULTS_RECOGNITION)
                    val unstableText = partialResults?.getString("android.speech.extra.UNSTABLE_TEXT")
                    
                    Log.v(TAG, "🔄 PARTIAL_RESULTS: Raw partial matches: $partialMatches")
                    Log.v(TAG, "🔄 PARTIAL_RESULTS: Raw unstable text: '$unstableText'")
                    
                    if (!partialMatches.isNullOrEmpty()) {
                        val currentPartial = partialMatches[0]
                        lastPartialResults = partialMatches
                        
                        // 2025 Research fix: Enhanced combination of stable and unstable text
                        partialResultsText = when {
                            !unstableText.isNullOrEmpty() && !currentPartial.isNullOrEmpty() -> {
                                // Both have content, combine intelligently
                                if (currentPartial.endsWith(unstableText)) {
                                    currentPartial // Avoid duplication
                                } else {
                                    "$currentPartial $unstableText".trim()
                                }
                            }
                            !unstableText.isNullOrEmpty() -> unstableText.trim()
                            !currentPartial.isNullOrEmpty() -> currentPartial.trim()
                            else -> ""
                        }
                        
                        Log.d(TAG, "🔄 PARTIAL_RESULTS: Stable: '$currentPartial', Unstable: '$unstableText', Combined: '$partialResultsText'")
                        
                        // 2025 Research fix: Store all partial matches for better fallback
                        if (partialMatches.size > 1) {
                            val allPartials = partialMatches.joinToString(" | ")
                            Log.v(TAG, "🔄 PARTIAL_RESULTS: Multiple partials available: $allPartials")
                        }
                        
                        // Update UI with partial results if available
                        if (partialResultsText.isNotBlank()) {
                            Log.v(TAG, "🔄 PARTIAL_RESULTS: Available for fallback: '$partialResultsText'")
                            
                            // 2025 Research fix: Emit partial results to React Native for real-time feedback
                            try {
                                sendPartialResultsToReactNative(partialResultsText)
                            } catch (e: Exception) {
                                Log.e(TAG, "🔄 PARTIAL_RESULTS: Error sending partial results to RN: ${e.message}")
                            }
                        }
                    } else if (!unstableText.isNullOrEmpty()) {
                        // 2025 Research fix: Handle case where only unstable text is available
                        partialResultsText = unstableText.trim()
                        Log.d(TAG, "🔄 PARTIAL_RESULTS: Only unstable text available: '$partialResultsText'")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "🔄 PARTIAL_RESULTS: Error processing partial results: ${e.message}", e)
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
     * Research-based fix: Check Google app permissions and availability
     */
    private fun checkGoogleAppStatus(): String {
        return try {
            val packageManager = context.packageManager
            
            // Check if Google app (com.google.android.googlequicksearchbox) is available
            val googleAppAvailable = try {
                val packageInfo = packageManager.getPackageInfo("com.google.android.googlequicksearchbox", 0)
                packageInfo.applicationInfo.enabled
            } catch (e: android.content.pm.PackageManager.NameNotFoundException) {
                false
            }
            
            // Check if Google TTS app (com.google.android.tts) is available
            val googleTtsAvailable = try {
                val packageInfo = packageManager.getPackageInfo("com.google.android.tts", 0)
                packageInfo.applicationInfo.enabled
            } catch (e: android.content.pm.PackageManager.NameNotFoundException) {
                false
            }
            
            // Check Google app microphone permission (API 23+)
            val googleAppMicPermission = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
                try {
                    packageManager.checkPermission(
                        android.Manifest.permission.RECORD_AUDIO,
                        "com.google.android.googlequicksearchbox"
                    ) == android.content.pm.PackageManager.PERMISSION_GRANTED
                } catch (e: Exception) {
                    false
                }
            } else {
                true // Assume granted on older versions
            }
            
            "GoogleApp:$googleAppAvailable, GoogleTTS:$googleTtsAvailable, GoogleAppMicPerm:$googleAppMicPermission"
        } catch (e: Exception) {
            "Error checking Google app status: ${e.message}"
        }
    }
    
    /**
     * 2025 Research fix: Check for OK Google detection conflicts
     * Based on: "When the 'Okay Google' function is configured for every screen, the error appears"
     */
    private fun checkOkGoogleConflicts(): String {
        return try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            
            // Check if Google Assistant is actively listening
            val isGoogleAssistantActive = try {
                val activityManager = context.getSystemService(Context.ACTIVITY_SERVICE) as android.app.ActivityManager
                val runningTasks = activityManager.getRunningTasks(1)
                runningTasks.isNotEmpty() && 
                runningTasks[0].topActivity?.packageName?.contains("com.google.android.googlequicksearchbox") == true
            } catch (e: Exception) {
                false
            }
            
            // Check audio mode (Google Assistant may change this)
            val audioMode = audioManager.mode
            val isModeNormal = audioMode == android.media.AudioManager.MODE_NORMAL
            
            // Check for conflicting audio focus requests
            val isBluetoothScoOn = audioManager.isBluetoothScoOn
            val isSpeakerphoneOn = audioManager.isSpeakerphoneOn
            
            "GoogleAssistantActive:$isGoogleAssistantActive, AudioMode:$audioMode, ModeNormal:$isModeNormal, BluetoothSco:$isBluetoothScoOn, Speakerphone:$isSpeakerphoneOn"
        } catch (e: Exception) {
            "Error checking OK Google conflicts: ${e.message}"
        }
    }
    
    /**
     * 2025 Research fix: Attempt to disable OK Google detection temporarily
     */
    private fun mitigateOkGoogleConflicts(): Boolean {
        return try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            
            // Force audio mode to normal if it's been changed by Google Assistant
            if (audioManager.mode != android.media.AudioManager.MODE_NORMAL) {
                Log.w(TAG, "🎺 OK_GOOGLE_FIX: Audio mode is ${audioManager.mode}, forcing to NORMAL")
                audioManager.mode = android.media.AudioManager.MODE_NORMAL
            }
            
            // Turn off speakerphone if it's been activated by Google Assistant
            if (audioManager.isSpeakerphoneOn) {
                Log.w(TAG, "🎺 OK_GOOGLE_FIX: Speakerphone is on, turning off")
                audioManager.isSpeakerphoneOn = false
            }
            
            // Turn off Bluetooth SCO if it's interfering
            if (audioManager.isBluetoothScoOn) {
                Log.w(TAG, "🎺 OK_GOOGLE_FIX: Bluetooth SCO is on, turning off")
                audioManager.stopBluetoothSco()
                audioManager.isBluetoothScoOn = false
            }
            
            Log.d(TAG, "🎺 OK_GOOGLE_FIX: Applied OK Google conflict mitigation")
            true
        } catch (e: Exception) {
            Log.e(TAG, "🎺 OK_GOOGLE_FIX: Error mitigating OK Google conflicts: ${e.message}", e)
            false
        }
    }
    
    /**
     * Comprehensive pre-flight check for speech recognition
     */
    private fun performSpeechRecognitionPreflightCheck(): Boolean {
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: ========== SPEECH RECOGNITION PREFLIGHT ===========")
        
        // Check basic speech recognition availability
        val isRecognitionAvailable = SpeechRecognizer.isRecognitionAvailable(context)
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: Speech recognition available: $isRecognitionAvailable")
        
        // Check audio permissions
        val audioPermissions = checkAudioPermissions()
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: Audio permissions: $audioPermissions")
        
        // Check Google app status
        val googleAppStatus = checkGoogleAppStatus()
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: Google app status: $googleAppStatus")
        
        // 2025 Research fix: Check for OK Google conflicts
        val okGoogleStatus = checkOkGoogleConflicts()
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: OK Google conflicts: $okGoogleStatus")
        
        // Apply OK Google conflict mitigation
        val okGoogleMitigated = mitigateOkGoogleConflicts()
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: OK Google mitigation applied: $okGoogleMitigated")
        
        // Check if our app has record audio permission
        val hasRecordPermission = if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            context.checkSelfPermission(android.Manifest.permission.RECORD_AUDIO) == android.content.pm.PackageManager.PERMISSION_GRANTED
        } else {
            true
        }
        
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: Our app record permission: $hasRecordPermission")
        
        // Check if microphone is muted
        val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
        val isMicMuted = audioManager.isMicrophoneMute
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: Microphone muted: $isMicMuted")
        
        Log.d(TAG, "🔍 PREFLIGHT_CHECK: ====================================================")
        
        // Return true if basic requirements are met
        val preflightPassed = isRecognitionAvailable && hasRecordPermission && !isMicMuted
        
        if (!preflightPassed) {
            if (!isRecognitionAvailable) {
                Log.e(TAG, "🚨 PREFLIGHT_FAIL: Speech recognition not available on device")
            }
            if (!hasRecordPermission) {
                Log.e(TAG, "🚨 PREFLIGHT_FAIL: Record audio permission not granted")
            }
            if (isMicMuted) {
                Log.e(TAG, "🚨 PREFLIGHT_FAIL: Microphone is muted")
            }
        }
        
        return preflightPassed
    }
    
    /**
     * 2025 Research fix: Mute system beep to prevent ERROR_NO_MATCH
     * Based on: "Google hears own beep invitation signal and assumes it is the speech start"
     */
    /**
     * 2025 Focus-Free Fix: Comprehensive stream muting for silent recognition
     * Mutes all audio streams that could interfere with speech recognition
     */
    private fun muteSystemBeep() {
        try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            Log.i(TAG, "🔇 FOCUS_FREE: Starting comprehensive stream muting for silent recognition")
            
            // Store original volumes for ALL relevant streams
            originalSystemVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_SYSTEM)
            originalMusicVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_MUSIC)
            originalNotificationVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_NOTIFICATION)
            originalRingVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_RING)
            originalAlarmVolume = audioManager.getStreamVolume(android.media.AudioManager.STREAM_ALARM)
            
            // Check if streams are already muted
            wasSystemStreamMuted = originalSystemVolume == 0
            wasMusicStreamMuted = originalMusicVolume == 0
            wasNotificationStreamMuted = originalNotificationVolume == 0
            wasRingStreamMuted = originalRingVolume == 0
            wasAlarmStreamMuted = originalAlarmVolume == 0
            
            // OPTIMIZED STREAM MUTING for focus-free recognition
            // Only mute streams that can interfere with speech recognition, preserve voice processing streams
            
            // 1. Mute SYSTEM stream (beep sounds that interfere with recognition)
            if (!wasSystemStreamMuted) {
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_SYSTEM, 0, 0)
                Log.i(TAG, "🔇 FOCUS_FREE: Muted SYSTEM stream (was $originalSystemVolume)")
            }
            
            // 2. Mute MUSIC stream (beep sounds on newer Android)
            if (!wasMusicStreamMuted) {
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_MUSIC, 0, 0)
                Log.i(TAG, "🔇 FOCUS_FREE: Muted MUSIC stream (was $originalMusicVolume)")
            }
            
            // 3. Selectively mute NOTIFICATION stream (preserve emergency notifications)
            if (!wasNotificationStreamMuted && originalNotificationVolume > 2) {
                // Only mute if volume is high, keep low volume for emergency notifications
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_NOTIFICATION, 1, 0)
                Log.i(TAG, "🔇 FOCUS_FREE: Reduced NOTIFICATION stream to 1 (was $originalNotificationVolume)")
            }
            
            // 4. Preserve RING stream (important for calls during recognition)
            Log.i(TAG, "🔇 FOCUS_FREE: Preserving RING stream for call functionality ($originalRingVolume)")
            
            // 5. Preserve ALARM stream (important for scheduled alarms)
            Log.i(TAG, "🔇 FOCUS_FREE: Preserving ALARM stream for alarm functionality ($originalAlarmVolume)")
            
            // Note: VOICE_CALL and DTMF streams are automatically preserved
            
            Log.i(TAG, "🔇 FOCUS_FREE: All audio streams muted for silent speech recognition")
            Log.i(TAG, "🔇 FOCUS_FREE: Recognition will proceed without audio focus competition")
            
            // Enable Do Not Disturb mode for additional protection
            enableDoNotDisturbMode()
            
        } catch (e: Exception) {
            Log.e(TAG, "🔇 FOCUS_FREE: Error during comprehensive stream muting: ${e.message}", e)
        }
    }
    
    /**
     * 2025 Focus-Free Fix: Restore all muted audio streams
     */
    private fun restoreSystemBeep() {
        try {
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            Log.i(TAG, "🔊 FOCUS_FREE: Restoring all audio streams after silent recognition")
            
            // Restore SYSTEM stream if it wasn't originally muted
            if (!wasSystemStreamMuted && originalSystemVolume > 0) {
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_SYSTEM, originalSystemVolume, 0)
                Log.i(TAG, "🔊 FOCUS_FREE: Restored SYSTEM stream to $originalSystemVolume")
            }
            
            // Restore MUSIC stream if it wasn't originally muted
            if (!wasMusicStreamMuted && originalMusicVolume > 0) {
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_MUSIC, originalMusicVolume, 0)
                Log.i(TAG, "🔊 FOCUS_FREE: Restored MUSIC stream to $originalMusicVolume")
            }
            
            // Restore NOTIFICATION stream only if it was reduced
            if (!wasNotificationStreamMuted && originalNotificationVolume > 2) {
                audioManager.setStreamVolume(android.media.AudioManager.STREAM_NOTIFICATION, originalNotificationVolume, 0)
                Log.i(TAG, "🔊 FOCUS_FREE: Restored NOTIFICATION stream to $originalNotificationVolume")
            }
            
            // RING and ALARM streams were preserved, no restoration needed
            Log.i(TAG, "🔊 FOCUS_FREE: RING and ALARM streams were preserved during recognition")
            
            Log.i(TAG, "🔊 FOCUS_FREE: All audio streams restored to original levels")
            
            // Restore Do Not Disturb mode
            restoreDoNotDisturbMode()
            
        } catch (e: Exception) {
            Log.e(TAG, "🔊 FOCUS_FREE: Error restoring audio streams: ${e.message}", e)
        }
    }
    
    /**
     * Attempt speech recognition without audio focus (fallback strategy)
     */
    private fun attemptRecognitionWithoutFocus(): Boolean {
        return try {
            Log.w(TAG, "🎯 ALTERNATIVE_RECOGNITION: ========== ATTEMPTING RECOGNITION WITHOUT FOCUS ===========")
            
            // Check if device audio mode allows this
            val audioManager = context.getSystemService(Context.AUDIO_SERVICE) as android.media.AudioManager
            val audioMode = audioManager.mode
            
            if (audioMode != android.media.AudioManager.MODE_NORMAL) {
                Log.w(TAG, "🎯 ALTERNATIVE_RECOGNITION: Audio mode is not NORMAL ($audioMode), cannot proceed without focus")
                return false
            }
            
            // Check if there are critical competing services
            if (audioManager.isMusicActive) {
                Log.w(TAG, "🎯 ALTERNATIVE_RECOGNITION: Music is active, recognition without focus would interfere")
                return false
            }
            
            if (audioManager.mode == android.media.AudioManager.MODE_IN_CALL || 
                audioManager.mode == android.media.AudioManager.MODE_IN_COMMUNICATION) {
                Log.w(TAG, "🎯 ALTERNATIVE_RECOGNITION: Phone/VoIP call active, cannot proceed without focus")
                return false
            }
            
            // Still mute system beep even without focus
            muteSystemBeep()
            
            Log.i(TAG, "🎯 ALTERNATIVE_RECOGNITION: Conditions allow recognition without focus - proceeding")
            true
            
        } catch (e: Exception) {
            Log.e(TAG, "🎯 ALTERNATIVE_RECOGNITION: Error checking alternative recognition conditions", e)
            false
        }
    }
    
    /**
     * Enable Do Not Disturb mode during speech recognition
     */
    private fun enableDoNotDisturbMode() {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M) {
            try {
                val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as android.app.NotificationManager
                
                // Check if we have DND access permission
                if (!notificationManager.isNotificationPolicyAccessGranted) {
                    Log.w(TAG, "🚫 DND_MODE: App doesn't have Do Not Disturb access permission")
                    return
                }
                
                // Store original interruption filter
                originalInterruptionFilter = notificationManager.currentInterruptionFilter
                
                // Enable DND mode (priority only)
                notificationManager.setInterruptionFilter(android.app.NotificationManager.INTERRUPTION_FILTER_PRIORITY)
                dndModeEnabled = true
                
                Log.i(TAG, "🚫 DND_MODE: Enabled Do Not Disturb mode (original filter: $originalInterruptionFilter)")
                
            } catch (e: Exception) {
                Log.e(TAG, "🚫 DND_MODE: Error enabling Do Not Disturb mode", e)
            }
        }
    }
    
    /**
     * Restore original Do Not Disturb mode setting
     */
    private fun restoreDoNotDisturbMode() {
        if (android.os.Build.VERSION.SDK_INT >= android.os.Build.VERSION_CODES.M && dndModeEnabled) {
            try {
                val notificationManager = context.getSystemService(Context.NOTIFICATION_SERVICE) as android.app.NotificationManager
                
                // Check if we still have DND access permission
                if (!notificationManager.isNotificationPolicyAccessGranted) {
                    Log.w(TAG, "🚫 DND_MODE: App doesn't have Do Not Disturb access permission")
                    return
                }
                
                // Restore original interruption filter
                notificationManager.setInterruptionFilter(originalInterruptionFilter)
                dndModeEnabled = false
                
                Log.i(TAG, "🚫 DND_MODE: Restored original Do Not Disturb mode (filter: $originalInterruptionFilter)")
                
            } catch (e: Exception) {
                Log.e(TAG, "🚫 DND_MODE: Error restoring Do Not Disturb mode", e)
            }
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
            
            // Focus-free approach: No audio focus management needed
            Log.d(TAG, "🔇 FOCUS_FREE: No audio focus release needed - using focus-free recognition")
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
        val currentTime = System.currentTimeMillis()
        
        // Research-based fix: State change debouncing to prevent rapid transitions
        val previousState = lastState
        if (previousState != null && 
            previousState.javaClass == newState.javaClass &&
            (currentTime - lastStateChangeTime) < STATE_CHANGE_DEBOUNCE_MS) {
            
            // For states with data, also check content equality
            val isDuplicateContent = when {
                previousState is VoiceState.RESPONDING && newState is VoiceState.RESPONDING -> 
                    previousState.message == newState.message
                previousState is VoiceState.ERROR && newState is VoiceState.ERROR -> 
                    previousState.message == newState.message
                else -> true // For states without data, type match is enough
            }
            
            if (isDuplicateContent) {
                Log.d(TAG, "🚫 DEBOUNCE: Ignoring rapid state change ${newState.javaClass.simpleName} (${currentTime - lastStateChangeTime}ms since last)")
                return
            }
        }
        
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
        
        // Update debouncing tracking
        lastStateChangeTime = currentTime
        lastState = newState
        
        // Research-based fix: Circuit breaker for ERROR → LISTENING loops
        if (oldState is VoiceState.ERROR && newState is VoiceState.LISTENING) {
            val now = System.currentTimeMillis()
            
            // Reset counter if enough time has passed
            if (now - lastErrorToListeningTime > ERROR_LISTENING_RESET_TIME_MS) {
                errorToListeningCount = 0
                Log.d(TAG, "🔄 CIRCUIT_BREAKER: Reset ERROR→LISTENING counter after timeout")
            }
            
            errorToListeningCount++
            lastErrorToListeningTime = now
            
            if (errorToListeningCount > MAX_ERROR_LISTENING_TRANSITIONS) {
                Log.e(TAG, "🚫 CIRCUIT_BREAKER: Preventing infinite ERROR→LISTENING loop (attempt $errorToListeningCount)")
                Log.e(TAG, "🚫 CIRCUIT_BREAKER: Forcing reset to IDLE to break the loop")
                
                // Force reset to IDLE instead of allowing LISTENING
                coroutineScope.launch {
                    delay(2000) // Give some time for any ongoing operations to complete
                    Log.i(TAG, "🔄 CIRCUIT_BREAKER: Resetting to IDLE after circuit breaker activation")
                    resetToIdle()
                }
                return
            } else {
                Log.w(TAG, "🔄 CIRCUIT_BREAKER: ERROR→LISTENING transition $errorToListeningCount/$MAX_ERROR_LISTENING_TRANSITIONS")
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
                    
                    // Focus-free approach: No audio focus management needed for wake word coordination
                    Log.d(TAG, "🔇 FOCUS_FREE: No wake word audio focus release needed")
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
     * Reset to idle state with circuit breaker awareness
     */
    private fun resetToIdle() {
        // Reset circuit breaker counters when going to IDLE
        errorToListeningCount = 0
        lastErrorToListeningTime = 0L
        Log.d(TAG, "🔄 CIRCUIT_BREAKER: Reset counters on IDLE transition")
        
        updateState(VoiceState.IDLE)
    }
    
    /**
     * Clean up resources
     */
    fun shutdown() {
        Log.i(TAG, "Shutting down VoiceManager")
        
        // 2025 Research fix: Restore system beep on shutdown
        restoreSystemBeep()
        
        // Reset state
        updateState(VoiceState.IDLE)
        
        // Shutdown voice processor
        try {
            voiceProcessor.shutdown()
        } catch (e: Exception) {
            Log.e(TAG, "Error shutting down voice processor", e)
        }
        
        // Clean up speech recognition with proper recreation pattern
        try {
            // Ensure we're on the main thread for speech recognizer operations
            if (Looper.myLooper() != Looper.getMainLooper()) {
                Log.d(TAG, "🔧 RECREATE_PATTERN: Destroying speech recognizer from background thread, posting to main thread")
                Handler(Looper.getMainLooper()).post {
                    speechRecognizer?.destroy()
                    speechRecognizer = null
                    isSpeechRecognitionInitialized = false
                    Log.d(TAG, "🔧 RECREATE_PATTERN: Speech recognizer destroyed and reset in shutdown")
                }
            } else {
                speechRecognizer?.destroy()
                speechRecognizer = null
                isSpeechRecognitionInitialized = false
                Log.d(TAG, "🔧 RECREATE_PATTERN: Speech recognizer destroyed and reset in shutdown")
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
     * Handle the case when no speech was detected (with graceful degradation)
     */
    fun handleNoSpeechDetected() {
        // Research-based fix: Try partial results before giving up
        if (partialResultsText.isNotBlank()) {
            Log.i(TAG, "🔄 GRACEFUL_DEGRADATION: No final results but partial text available: '$partialResultsText'")
            Log.i(TAG, "🔄 GRACEFUL_DEGRADATION: Using partial results to avoid 'no speech' error")
            onSpeechRecognized(partialResultsText)
            return
        }
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: ========== NO SPEECH DETECTED ==========")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Current retry count: $noSpeechRetryCount")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Max retries allowed: $MAX_NO_SPEECH_RETRIES")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Current voice state: ${_voiceState.value.javaClass.simpleName}")
        Log.d(TAG, "🔇 FOCUS_FREE: Using focus-free recognition - no audio focus tracking")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Speech recognizer initialized: $isSpeechRecognitionInitialized")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Is listening flag: $isListening")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Available audio inputs: ${getAvailableAudioInputs()}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Audio permissions: ${checkAudioPermissions()}")
        Log.d(TAG, "🔍 NO_SPEECH_DEBUG: Thread: ${Thread.currentThread().name}")
        
        // Increment retry counter
        noSpeechRetryCount++
        
        if (noSpeechRetryCount < MAX_NO_SPEECH_RETRIES) {
            // Research-based fix: More informative user messages
            val userMessage = when {
                noSpeechRetryCount == 0 -> "I didn't hear anything. Please speak clearly. Listening again..."
                noSpeechRetryCount == 1 -> "Still didn't catch that. Please speak louder. Trying once more..."
                else -> "Having trouble hearing you. Please check your microphone and speak clearly."
            }
            showMessage(userMessage)
            
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
            // Max retries reached, reset to idle with helpful message
            Log.d(TAG, "Maximum retry attempts reached ($MAX_NO_SPEECH_RETRIES), resetting to idle")
            
            val googleAppStatus = checkGoogleAppStatus()
            val audioPermissions = checkAudioPermissions()
            
            val helpfulMessage = if (googleAppStatus.contains("GoogleApp:false") || 
                                     audioPermissions.contains("RecordPermission:false")) {
                "Speech recognition isn't working properly. Please check app permissions and try saying 'Jarvis' again."
            } else {
                "I didn't hear anything. Please try saying 'Jarvis' again when you're ready."
            }
            
            showMessage(helpfulMessage)
            
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
     * 2025 Research fix: Send partial results to React Native for real-time feedback
     */
    private fun sendPartialResultsToReactNative(text: String) {
        try {
            val params = JSONObject()
            params.put("text", text)
            params.put("isPartial", true)
            
            Handler(Looper.getMainLooper()).post {
                try {
                    val currentContext = context.applicationContext
                    if (currentContext is com.facebook.react.bridge.ReactContext) {
                        currentContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                            ?.emit("partialSpeechResult", params.toString())
                        Log.v(TAG, "🔄 PARTIAL_RESULTS: Sent to React Native: '$text'")
                    }
                } catch (e: Exception) {
                    Log.e(TAG, "🔄 PARTIAL_RESULTS: Error sending partial results to React Native: ${e.message}")
                }
            }
        } catch (e: Exception) {
            Log.e(TAG, "🔄 PARTIAL_RESULTS: Error preparing partial results for React Native: ${e.message}")
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