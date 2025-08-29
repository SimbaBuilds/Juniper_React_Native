package com.hightowerai.MobileJarvisNative.debug

import android.util.Log
import com.facebook.react.bridge.*
import com.hightowerai.MobileJarvisNative.api.*
import kotlinx.coroutines.*

/**
 * Debug bridge module for manual sync and troubleshooting
 * Provides fallback methods when automatic sync fails
 */
class DebugBridgeModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    private val TAG = "DebugBridgeModule"
    
    override fun getName(): String {
        return "DebugBridgeModule"
    }
    
    /**
     * Manually sync authentication token from React Native
     */
    @ReactMethod
    fun syncAuthToken(token: String, promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Manual auth token sync requested")
            
            val tokenManager = SupabaseTokenManager.getInstance(reactApplicationContext)
            tokenManager.cacheToken(token)
            
            // Verify the token is accessible
            val isAuthenticated = tokenManager.isAuthenticated()
            
            Log.i(TAG, "🔧 DEBUG: ✅ Auth token synced, authenticated: $isAuthenticated")
            promise.resolve(isAuthenticated)
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error syncing auth token: ${e.message}", e)
            promise.reject("SYNC_ERROR", "Failed to sync auth token: ${e.message}", e)
        }
    }
    
    /**
     * Manually sync voice settings from React Native
     */
    @ReactMethod
    fun syncVoiceSettings(settingsMap: ReadableMap, promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Manual voice settings sync requested")
            
            val voiceSettings = VoiceSettings(
                deepgramEnabled = settingsMap.getBoolean("deepgramEnabled"),
                selectedDeepgramVoice = settingsMap.getString("selectedDeepgramVoice") ?: "aura-2-pandora-en",
                baseLanguageModel = settingsMap.getString("baseLanguageModel") ?: "claude-sonnet-4-20250514",
                generalInstructions = settingsMap.getString("generalInstructions") ?: "",
                timezone = settingsMap.getString("timezone") ?: "UTC"
            )
            
            val settingsManager = VoiceSettingsManager.getInstance(reactApplicationContext)
            settingsManager.updateVoiceSettings(voiceSettings)
            
            Log.i(TAG, "🔧 DEBUG: ✅ Voice settings synced manually")
            promise.resolve(true)
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error syncing voice settings: ${e.message}", e)
            promise.reject("SYNC_ERROR", "Failed to sync voice settings: ${e.message}", e)
        }
    }
    
    /**
     * Get authentication debug info
     */
    @ReactMethod
    fun getAuthDebugInfo(promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Getting auth debug info")
            
            val tokenManager = SupabaseTokenManager.getInstance(reactApplicationContext)
            val result = Arguments.createMap()
            
            result.putBoolean("isAuthenticated", tokenManager.isAuthenticated())
            result.putString("userId", tokenManager.getUserId()?.take(8) + "..." ?: "null")
            result.putString("authHeader", if (tokenManager.getAuthorizationHeader() != null) "Bearer xxx..." else "null")
            
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error getting auth debug info: ${e.message}", e)
            promise.reject("DEBUG_ERROR", "Failed to get auth debug info: ${e.message}", e)
        }
    }
    
    /**
     * Get voice settings debug info
     */
    @ReactMethod
    fun getVoiceSettingsDebugInfo(promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Getting voice settings debug info")
            
            val settingsManager = VoiceSettingsManager.getInstance(reactApplicationContext)
            val settings = settingsManager.getVoiceSettings()
            
            val result = Arguments.createMap()
            result.putBoolean("deepgramEnabled", settings.deepgramEnabled)
            result.putString("selectedDeepgramVoice", settings.selectedDeepgramVoice)
            result.putString("baseLanguageModel", settings.baseLanguageModel)
            result.putString("timezone", settings.timezone)
            result.putString("generalInstructions", settings.generalInstructions.take(50) + if (settings.generalInstructions.length > 50) "..." else "")
            
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error getting voice settings debug info: ${e.message}", e)
            promise.reject("DEBUG_ERROR", "Failed to get voice settings debug info: ${e.message}", e)
        }
    }
    
    /**
     * Debug React Native AsyncStorage contents
     */
    @ReactMethod
    fun debugReactNativeStorage(promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Checking React Native AsyncStorage from native side")
            
            // Try to access AsyncStorage database directly
            val context = reactApplicationContext
            val dbPath = context.getDatabasePath("RKStorage")
            val catalystPath = context.getDatabasePath("catalystLocalStorage")
            
            val result = Arguments.createMap()
            result.putBoolean("rkStorageExists", dbPath.exists())
            result.putBoolean("catalystStorageExists", catalystPath.exists())
            result.putString("rkStoragePath", dbPath.absolutePath)
            result.putString("catalystStoragePath", catalystPath.absolutePath)
            
            Log.d(TAG, "🔧 DEBUG: RKStorage exists: ${dbPath.exists()}")
            Log.d(TAG, "🔧 DEBUG: CatalystStorage exists: ${catalystPath.exists()}")
            
            promise.resolve(result)
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error checking storage: ${e.message}", e)
            promise.reject("DEBUG_ERROR", "Failed to check storage: ${e.message}", e)
        }
    }
    
    /**
     * Test API connectivity
     */
    @ReactMethod
    fun testApiConnectivity(promise: Promise) {
        try {
            Log.i(TAG, "🔧 DEBUG: Testing API connectivity")
            
            val apiClient = NativeApiClient.getInstance(reactApplicationContext)
            
            // Use coroutines to test connectivity
            GlobalScope.launch(Dispatchers.IO) {
                try {
                    val isConnected = apiClient.testConnection()
                    val isAuthenticated = apiClient.isAuthenticated()
                    
                    val result = Arguments.createMap()
                    result.putBoolean("connected", isConnected)
                    result.putBoolean("authenticated", isAuthenticated)
                    
                    promise.resolve(result)
                    
                } catch (e: Exception) {
                    promise.reject("API_ERROR", "API test failed: ${e.message}", e)
                }
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "🔧 DEBUG: ❌ Error testing API connectivity: ${e.message}", e)
            promise.reject("DEBUG_ERROR", "Failed to test API: ${e.message}", e)
        }
    }
}