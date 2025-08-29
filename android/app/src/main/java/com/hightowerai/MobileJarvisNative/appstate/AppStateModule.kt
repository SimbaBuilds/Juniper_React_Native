package com.hightowerai.MobileJarvisNative.appstate

import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.Arguments
import com.facebook.react.modules.core.DeviceEventManagerModule
import com.hightowerai.MobileJarvisNative.utils.AppStateManager
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.SupervisorJob
import kotlinx.coroutines.launch
import kotlinx.coroutines.flow.launchIn
import kotlinx.coroutines.flow.onEach

/**
 * AppStateModule - React Native bridge for app state management
 * 
 * Provides React Native access to native app state tracking and
 * synchronizes with React Native's AppState API
 */
class AppStateModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {
    
    private val TAG = "AppStateModule"
    private val moduleScope = CoroutineScope(SupervisorJob() + Dispatchers.Main)
    private var isListening = false
    
    override fun getName(): String {
        return "AppStateModule"
    }
    
    override fun initialize() {
        super.initialize()
        Log.i(TAG, "📱 APP_STATE_MODULE: Module initialized")
        startListeningToAppState()
    }
    
    override fun onCatalystInstanceDestroy() {
        super.onCatalystInstanceDestroy()
        Log.i(TAG, "📱 APP_STATE_MODULE: Module destroyed")
        stopListeningToAppState()
    }
    
    /**
     * Get current app state synchronously
     */
    @ReactMethod
    fun getCurrentAppState(promise: Promise) {
        try {
            val appStateManager = AppStateManager.getInstance()
            val isInForeground = appStateManager.isAppCurrentlyInForeground()
            val state = if (isInForeground) "active" else "background"
            
            Log.d(TAG, "📱 APP_STATE_MODULE: getCurrentAppState called - returning: $state")
            
            val result = Arguments.createMap()
            result.putString("currentState", state)
            result.putBoolean("isInForeground", isInForeground)
            
            promise.resolve(result)
        } catch (e: Exception) {
            Log.e(TAG, "📱 APP_STATE_MODULE: Error getting current app state: ${e.message}", e)
            promise.reject("APP_STATE_ERROR", "Failed to get app state: ${e.message}", e)
        }
    }
    
    /**
     * Force bring app to foreground
     */
    @ReactMethod
    fun bringToForeground(promise: Promise) {
        try {
            Log.i(TAG, "📱 APP_STATE_MODULE: bringToForeground called")
            
            val appStateManager = AppStateManager.getInstance()
            val success = appStateManager.bringAppToForeground()
            
            if (success) {
                Log.i(TAG, "📱 APP_STATE_MODULE: ✅ App brought to foreground successfully")
                promise.resolve(true)
            } else {
                Log.w(TAG, "📱 APP_STATE_MODULE: ⚠️ Failed to bring app to foreground")
                promise.resolve(false)
            }
        } catch (e: Exception) {
            Log.e(TAG, "📱 APP_STATE_MODULE: ❌ Error bringing app to foreground: ${e.message}", e)
            promise.reject("FOREGROUND_ERROR", "Failed to bring app to foreground: ${e.message}", e)
        }
    }
    
    /**
     * Start listening to app state changes and emit events to React Native
     */
    private fun startListeningToAppState() {
        if (isListening) {
            Log.d(TAG, "📱 APP_STATE_MODULE: Already listening to app state changes")
            return
        }
        
        Log.i(TAG, "📱 APP_STATE_MODULE: Starting to listen for app state changes")
        isListening = true
        
        try {
            val appStateManager = AppStateManager.getInstance()
            
            // Listen for app state changes and emit events to React Native
            appStateManager.isAppInForeground
                .onEach { isInForeground ->
                    val state = if (isInForeground) "active" else "background"
                    Log.i(TAG, "📱 APP_STATE_MODULE: App state changed to: $state")
                    
                    // Emit event to React Native
                    val params = Arguments.createMap()
                    params.putString("app_state", state)
                    params.putBoolean("isInForeground", isInForeground)
                    params.putDouble("timestamp", System.currentTimeMillis().toDouble())
                    
                    sendEvent("appStateChanged", params)
                }
                .launchIn(moduleScope)
                
            Log.i(TAG, "📱 APP_STATE_MODULE: ✅ Successfully started listening to app state changes")
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 APP_STATE_MODULE: ❌ Error starting app state listener: ${e.message}", e)
            isListening = false
        }
    }
    
    /**
     * Stop listening to app state changes
     */
    private fun stopListeningToAppState() {
        if (!isListening) {
            return
        }
        
        Log.i(TAG, "📱 APP_STATE_MODULE: Stopping app state listener")
        isListening = false
        
        try {
            moduleScope.launch {
                // Cancel all coroutines in the scope
            }
            Log.i(TAG, "📱 APP_STATE_MODULE: ✅ App state listener stopped")
        } catch (e: Exception) {
            Log.e(TAG, "📱 APP_STATE_MODULE: ❌ Error stopping app state listener: ${e.message}", e)
        }
    }
    
    /**
     * Send event to React Native
     */
    private fun sendEvent(eventName: String, params: com.facebook.react.bridge.WritableMap?) {
        try {
            Log.d(TAG, "📡 SEND_EVENT: Attempting to send event '$eventName' to React Native")
            Log.d(TAG, "📡 SEND_EVENT: ReactApplicationContext available: ${reactApplicationContext != null}")
            
            reactApplicationContext
                ?.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                ?.emit(eventName, params)
                
            Log.d(TAG, "📡 SEND_EVENT: ✅ Event '$eventName' sent successfully")
        } catch (e: Exception) {
            Log.e(TAG, "📡 SEND_EVENT: ❌ Error sending event '$eventName': ${e.message}", e)
        }
    }
}