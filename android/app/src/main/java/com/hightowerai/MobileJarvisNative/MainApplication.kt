package com.hightowerai.MobileJarvisNative

import android.app.Application
import android.content.res.Configuration
import androidx.annotation.NonNull

import com.facebook.react.PackageList
import com.facebook.react.ReactApplication
import com.facebook.react.ReactNativeHost
import com.facebook.react.ReactPackage
import com.facebook.react.ReactHost
import com.facebook.react.defaults.DefaultReactHost.getDefaultReactHost
import com.facebook.react.defaults.DefaultReactNativeHost
import com.facebook.soloader.SoLoader
import com.facebook.react.soloader.OpenSourceMergedSoMapping

import expo.modules.ApplicationLifecycleDispatcher
import expo.modules.ReactNativeHostWrapper

import com.hightowerai.MobileJarvisNative.wakeword.WakeWordPackage
import com.hightowerai.MobileJarvisNative.voice.VoicePackage
import com.hightowerai.MobileJarvisNative.permissions.PermissionsPackage
import com.hightowerai.MobileJarvisNative.permissions.AppLinksPackage
import com.hightowerai.MobileJarvisNative.app_config.AppConfigPackage
import com.hightowerai.MobileJarvisNative.appstate.AppStatePackage
import com.hightowerai.MobileJarvisNative.api.ConversationSyncPackage
import com.hightowerai.MobileJarvisNative.debug.DebugBridgePackage
import com.hightowerai.MobileJarvisNative.ConfigManager
import android.util.Log

class MainApplication : Application(), ReactApplication {
    companion object {
        private const val TAG = "MainApplication"
    }

  override val reactNativeHost: ReactNativeHost = ReactNativeHostWrapper(
        this,
        object : DefaultReactNativeHost(this) {
          override fun getPackages(): List<ReactPackage> {
            Log.i(TAG, "📱 MAIN_APP: ========== GET PACKAGES CALLED ==========")
            Log.i(TAG, "📱 MAIN_APP: Thread: ${Thread.currentThread().name}")
            
            val packages = PackageList(this).packages
            Log.i(TAG, "📱 MAIN_APP: Auto-linked packages count: ${packages.size}")
            
            // Packages that cannot be autolinked yet can be added manually here
            Log.i(TAG, "📱 MAIN_APP: Adding custom native modules...")
            packages.add(WakeWordPackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added WakeWordPackage")
            
            packages.add(VoicePackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added VoicePackage")
            
            packages.add(PermissionsPackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added PermissionsPackage")
            
            packages.add(AppLinksPackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added AppLinksPackage")
            
            packages.add(AppConfigPackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added AppConfigPackage")
            
            packages.add(AppStatePackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added AppStatePackage")
            
            packages.add(ConversationSyncPackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added ConversationSyncPackage")
            
            packages.add(DebugBridgePackage())
            Log.i(TAG, "📱 MAIN_APP: ✅ Added DebugBridgePackage")
            
            Log.i(TAG, "📱 MAIN_APP: Total packages: ${packages.size}")
            Log.i(TAG, "📱 MAIN_APP: ====================================================")
            return packages
          }

          override fun getJSMainModuleName(): String = ".expo/.virtual-metro-entry"

          override fun getUseDeveloperSupport(): Boolean = BuildConfig.DEBUG

          override val isNewArchEnabled: Boolean = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED
          override val isHermesEnabled: Boolean = BuildConfig.IS_HERMES_ENABLED
      }
  )

  override val reactHost: ReactHost
    get() = getDefaultReactHost(this.applicationContext, reactNativeHost)

  override fun onCreate() {
    super.onCreate()
    // Initialize ConfigManager before any other usage
    ConfigManager.init(this)
    
    try {
      SoLoader.init(this, OpenSourceMergedSoMapping)
    } catch (e: Exception) {
      Log.e(TAG, "📱 MAIN_APP: ❌ SoLoader failed to initialize: ${e.message}")
      // Continue without SoLoader for feature flags
    }
    // Flipper removed - deprecated in newer React Native versions
    ApplicationLifecycleDispatcher.onApplicationCreate(this)
  }

  override fun onConfigurationChanged(newConfig: Configuration) {
    super.onConfigurationChanged(newConfig)
    ApplicationLifecycleDispatcher.onConfigurationChanged(this, newConfig)
  }
}