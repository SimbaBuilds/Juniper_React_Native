package com.hightowerai.MobileJarvisNative.permissions

import android.content.Intent
import android.content.pm.PackageManager
import android.content.pm.verify.domain.DomainVerificationManager
import android.content.pm.verify.domain.DomainVerificationUserState
import android.net.Uri
import android.os.Build
import android.provider.Settings
import com.facebook.react.bridge.*
import com.facebook.react.module.annotations.ReactModule

@ReactModule(name = AppLinksModule.NAME)
class AppLinksModule(reactContext: ReactApplicationContext) :
    ReactContextBaseJavaModule(reactContext) {

    companion object {
        const val NAME = "AppLinksModule"
        const val TARGET_DOMAIN = "juniperassistant.com"
    }

    override fun getName(): String {
        return NAME
    }

    @ReactMethod
    fun isAppLinksEnabled(promise: Promise) {
        try {
            val isEnabled = checkAppLinksStatus()
            promise.resolve(isEnabled)
        } catch (e: Exception) {
            android.util.Log.e(NAME, "Error checking app links status", e)
            promise.reject("APP_LINKS_CHECK_ERROR", "Failed to check app links status: ${e.message}", e)
        }
    }

    @ReactMethod
    fun openAppLinksSettings(promise: Promise) {
        try {
            val currentActivity = currentActivity
            if (currentActivity == null) {
                promise.reject("NO_ACTIVITY", "No current activity available")
                return
            }

            val intent = Intent(
                Settings.ACTION_APP_OPEN_BY_DEFAULT_SETTINGS,
                Uri.parse("package:${reactApplicationContext.packageName}")
            )
            
            // Check if the intent can be resolved
            if (intent.resolveActivity(currentActivity.packageManager) != null) {
                currentActivity.startActivity(intent)
                promise.resolve(true)
            } else {
                // Fallback to general app settings if specific setting not available
                val fallbackIntent = Intent(Settings.ACTION_APPLICATION_DETAILS_SETTINGS)
                fallbackIntent.data = Uri.parse("package:${reactApplicationContext.packageName}")
                currentActivity.startActivity(fallbackIntent)
                promise.resolve(true)
            }
        } catch (e: Exception) {
            android.util.Log.e(NAME, "Error opening app links settings", e)
            promise.reject("OPEN_SETTINGS_ERROR", "Failed to open app links settings: ${e.message}", e)
        }
    }

    @ReactMethod
    fun getDomainVerificationStatus(promise: Promise) {
        try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                val domainVerificationManager = reactApplicationContext
                    .getSystemService(DomainVerificationManager::class.java)
                
                val userState = domainVerificationManager.getDomainVerificationUserState(
                    reactApplicationContext.packageName
                )
                
                if (userState != null) {
                    val domainMap = userState.hostToStateMap
                    val juniperassistantStatus = domainMap[TARGET_DOMAIN]
                    
                    val result = WritableNativeMap().apply {
                        putString("domain", TARGET_DOMAIN)
                        putString("status", when (juniperassistantStatus) {
                            DomainVerificationUserState.DOMAIN_STATE_VERIFIED -> "verified"
                            DomainVerificationUserState.DOMAIN_STATE_SELECTED -> "selected" 
                            DomainVerificationUserState.DOMAIN_STATE_NONE -> "none"
                            else -> "unknown"
                        })
                        putBoolean("isVerified", juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_VERIFIED)
                        putBoolean("isSelected", juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_SELECTED)
                        putBoolean("isEnabled", 
                            juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_VERIFIED || 
                            juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_SELECTED
                        )
                    }
                    
                    promise.resolve(result)
                    return
                }
            }
            
            // Fallback for older Android versions or if unable to get domain verification status
            val fallbackResult = WritableNativeMap().apply {
                putString("domain", TARGET_DOMAIN)
                putString("status", "unknown")
                putBoolean("isVerified", false)
                putBoolean("isSelected", false)
                putBoolean("isEnabled", checkAppLinksStatus())
            }
            promise.resolve(fallbackResult)
            
        } catch (e: Exception) {
            android.util.Log.e(NAME, "Error getting domain verification status", e)
            promise.reject("DOMAIN_STATUS_ERROR", "Failed to get domain verification status: ${e.message}", e)
        }
    }

    private fun checkAppLinksStatus(): Boolean {
        return try {
            if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.S) {
                // Use the new domain verification API for Android 12+
                val domainVerificationManager = reactApplicationContext
                    .getSystemService(DomainVerificationManager::class.java)
                
                val userState = domainVerificationManager?.getDomainVerificationUserState(
                    reactApplicationContext.packageName
                )
                
                if (userState != null) {
                    val domainMap = userState.hostToStateMap
                    val juniperassistantStatus = domainMap[TARGET_DOMAIN]
                    
                    // Consider it enabled if it's either verified or manually selected by user
                    return juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_VERIFIED ||
                           juniperassistantStatus == DomainVerificationUserState.DOMAIN_STATE_SELECTED
                }
            }
            
            // Fallback method for older versions or if the new API fails
            // Check if our app can handle https://juniperassistant.com URLs
            val intent = Intent(Intent.ACTION_VIEW, Uri.parse("https://$TARGET_DOMAIN/oauth/test"))
            val packageManager = reactApplicationContext.packageManager
            val resolveInfo = packageManager.resolveActivity(intent, PackageManager.MATCH_DEFAULT_ONLY)
            
            // Return true if our app is the default handler
            resolveInfo?.activityInfo?.packageName == reactApplicationContext.packageName
            
        } catch (e: Exception) {
            android.util.Log.w(NAME, "Unable to determine app links status, assuming false", e)
            false
        }
    }
}