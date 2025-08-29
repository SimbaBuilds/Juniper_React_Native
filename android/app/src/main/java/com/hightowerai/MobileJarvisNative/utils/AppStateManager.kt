package com.hightowerai.MobileJarvisNative.utils

import android.app.Activity
import android.app.ActivityManager
import android.app.Application
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.util.Log
import kotlinx.coroutines.flow.MutableStateFlow
import kotlinx.coroutines.flow.StateFlow
import kotlinx.coroutines.flow.asStateFlow

/**
 * AppStateManager - Centralized app lifecycle tracking
 * 
 * This class tracks the app's foreground/background state and provides utilities
 * to bring the app to the foreground when needed (e.g., for wake word handling)
 */
class AppStateManager private constructor() : Application.ActivityLifecycleCallbacks {
    
    private val TAG = "AppStateManager"
    
    // App state tracking
    private val _isAppInForeground = MutableStateFlow(false)
    val isAppInForeground: StateFlow<Boolean> = _isAppInForeground.asStateFlow()
    
    private var activeActivities = 0
    private var currentActivity: Activity? = null
    private lateinit var application: Application
    
    companion object {
        @Volatile
        private var instance: AppStateManager? = null
        
        fun getInstance(): AppStateManager {
            return instance ?: synchronized(this) {
                instance ?: AppStateManager().also { instance = it }
            }
        }
    }
    
    /**
     * Initialize the app state manager with the application instance
     */
    fun initialize(app: Application) {
        if (::application.isInitialized) {
            Log.d(TAG, "📱 APP_STATE: AppStateManager already initialized")
            return
        }
        
        application = app
        app.registerActivityLifecycleCallbacks(this)
        
        Log.i(TAG, "📱 APP_STATE: ========== APP STATE MANAGER INITIALIZED ==========")
        Log.i(TAG, "📱 APP_STATE: Starting activity lifecycle monitoring")
    }
    
    /**
     * Get current app state synchronously
     */
    fun isAppCurrentlyInForeground(): Boolean {
        return _isAppInForeground.value
    }
    
    /**
     * Bring the app to foreground if it's currently backgrounded
     * Returns true if app was brought to foreground or was already in foreground
     */
    fun bringAppToForeground(): Boolean {
        return try {
            if (_isAppInForeground.value) {
                Log.d(TAG, "📱 FOREGROUND: App already in foreground")
                return true
            }
            
            Log.i(TAG, "📱 FOREGROUND: ========== BRINGING APP TO FOREGROUND ==========")
            Log.i(TAG, "📱 FOREGROUND: Current app state: background")
            Log.i(TAG, "📱 FOREGROUND: Active activities count: $activeActivities")
            
            // Method 1: Use ActivityManager to move task to front (preferred for backgrounded apps)
            currentActivity?.let { activity ->
                Log.d(TAG, "📱 FOREGROUND: Attempting to move task to front using ActivityManager")
                
                try {
                    val activityManager = application.getSystemService(Context.ACTIVITY_SERVICE) as ActivityManager
                    val taskId = activity.taskId
                    
                    Log.d(TAG, "📱 FOREGROUND: Current activity: ${activity.localClassName}")
                    Log.d(TAG, "📱 FOREGROUND: Task ID: $taskId")
                    
                    // Move the task containing our activity to the front
                    activityManager.moveTaskToFront(taskId, ActivityManager.MOVE_TASK_WITH_HOME)
                    
                    Log.i(TAG, "📱 FOREGROUND: ✅ moveTaskToFront called successfully")
                    
                    // Verify it worked by checking again after a brief moment
                    return verifyForegroundState()
                    
                } catch (e: Exception) {
                    Log.e(TAG, "📱 FOREGROUND: ❌ Error with moveTaskToFront: ${e.message}", e)
                    Log.d(TAG, "📱 FOREGROUND: Falling back to Intent method")
                }
            }
            
            // Method 2: Intent-based fallback (for when no current activity or moveTaskToFront fails)
            Log.d(TAG, "📱 FOREGROUND: Using Intent method to bring app to foreground")
            
            currentActivity?.let { activity ->
                Log.d(TAG, "📱 FOREGROUND: Using current activity for Intent launch")
                val intent = Intent(activity, activity::class.java).apply {
                    flags = Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or 
                           Intent.FLAG_ACTIVITY_SINGLE_TOP
                }
                activity.startActivity(intent)
                
                Log.i(TAG, "📱 FOREGROUND: ✅ Intent launched with current activity")
                return verifyForegroundState()
            }
            
            // Method 3: Start MainActivity from scratch
            Log.d(TAG, "📱 FOREGROUND: No current activity, starting MainActivity")
            val packageName = application.packageName
            val launchIntent = application.packageManager.getLaunchIntentForPackage(packageName)
            
            if (launchIntent != null) {
                launchIntent.flags = Intent.FLAG_ACTIVITY_NEW_TASK or 
                                   Intent.FLAG_ACTIVITY_REORDER_TO_FRONT or
                                   Intent.FLAG_ACTIVITY_SINGLE_TOP
                application.startActivity(launchIntent)
                
                Log.i(TAG, "📱 FOREGROUND: ✅ MainActivity launch intent sent")
                return verifyForegroundState()
            } else {
                Log.e(TAG, "📱 FOREGROUND: ❌ Could not find launch intent for app")
                false
            }
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 FOREGROUND: ❌ Error bringing app to foreground: ${e.message}", e)
            false
        }
    }
    
    /**
     * Verify that the app actually reached foreground state
     * Returns true if verification succeeds, false otherwise
     */
    private fun verifyForegroundState(): Boolean {
        return try {
            // Give the system a moment to process the foreground request
            Thread.sleep(200)
            
            val isForeground = _isAppInForeground.value
            Log.d(TAG, "📱 FOREGROUND: Verification check - App in foreground: $isForeground")
            Log.d(TAG, "📱 FOREGROUND: Active activities count: $activeActivities")
            Log.d(TAG, "📱 FOREGROUND: Current activity: ${currentActivity?.localClassName ?: "null"}")
            
            if (isForeground) {
                Log.i(TAG, "📱 FOREGROUND: ✅ VERIFIED - App successfully brought to foreground")
            } else {
                Log.w(TAG, "📱 FOREGROUND: ⚠️ FAILED VERIFICATION - App still in background")
            }
            
            isForeground
            
        } catch (e: Exception) {
            Log.e(TAG, "📱 FOREGROUND: ❌ Error during verification: ${e.message}", e)
            false
        }
    }
    
    // Activity lifecycle callbacks
    override fun onActivityCreated(activity: Activity, savedInstanceState: Bundle?) {
        Log.d(TAG, "📱 LIFECYCLE: Activity created: ${activity.localClassName}")
    }
    
    override fun onActivityStarted(activity: Activity) {
        Log.d(TAG, "📱 LIFECYCLE: Activity started: ${activity.localClassName}")
        activeActivities++
        currentActivity = activity
        
        if (activeActivities == 1) {
            // App came to foreground
            _isAppInForeground.value = true
            Log.i(TAG, "📱 LIFECYCLE: ========== APP ENTERED FOREGROUND ==========")
            Log.i(TAG, "📱 LIFECYCLE: Active activities: $activeActivities")
            Log.i(TAG, "📱 LIFECYCLE: Current activity: ${activity.localClassName}")
        }
    }
    
    override fun onActivityResumed(activity: Activity) {
        Log.d(TAG, "📱 LIFECYCLE: Activity resumed: ${activity.localClassName}")
        currentActivity = activity
    }
    
    override fun onActivityPaused(activity: Activity) {
        Log.d(TAG, "📱 LIFECYCLE: Activity paused: ${activity.localClassName}")
    }
    
    override fun onActivityStopped(activity: Activity) {
        Log.d(TAG, "📱 LIFECYCLE: Activity stopped: ${activity.localClassName}")
        activeActivities--
        
        if (activeActivities == 0) {
            // App went to background
            _isAppInForeground.value = false
            currentActivity = null
            Log.i(TAG, "📱 LIFECYCLE: ========== APP ENTERED BACKGROUND ==========")
            Log.i(TAG, "📱 LIFECYCLE: Active activities: $activeActivities")
            Log.i(TAG, "📱 LIFECYCLE: All activities stopped")
        }
    }
    
    override fun onActivitySaveInstanceState(activity: Activity, outState: Bundle) {
        Log.d(TAG, "📱 LIFECYCLE: Activity save instance state: ${activity.localClassName}")
    }
    
    override fun onActivityDestroyed(activity: Activity) {
        Log.d(TAG, "📱 LIFECYCLE: Activity destroyed: ${activity.localClassName}")
        if (currentActivity == activity) {
            currentActivity = null
        }
    }
    
    /**
     * Clean up resources
     */
    fun cleanup() {
        if (::application.isInitialized) {
            application.unregisterActivityLifecycleCallbacks(this)
            Log.i(TAG, "📱 APP_STATE: AppStateManager cleaned up")
        }
    }
}