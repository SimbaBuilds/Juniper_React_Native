import { NativeModules, Platform } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface AppLinksModule {
  isAppLinksEnabled(): Promise<boolean>;
  openAppLinksSettings(): Promise<boolean>;
  getDomainVerificationStatus(): Promise<{
    domain: string;
    status: string;
    isVerified: boolean;
    isSelected: boolean;
    isEnabled: boolean;
  }>;
}

interface AppLinksService {
  isAppLinksEnabled(): Promise<boolean>;
  openAppLinksSettings(): Promise<boolean>;
  getDomainVerificationStatus(): Promise<{
    domain: string;
    status: string;
    isVerified: boolean;
    isSelected: boolean;
    isEnabled: boolean;
  }>;
  checkAppLinksBeforeOAuth(): Promise<boolean>;
  hasShownFirstLaunchPrompt(): Promise<boolean>;
  setFirstLaunchPromptShown(): Promise<void>;
}

const { AppLinksModule: NativeAppLinksModule } = NativeModules as {
  AppLinksModule: AppLinksModule;
};

const STORAGE_KEYS = {
  FIRST_LAUNCH_PROMPT_SHOWN: 'app_links_first_launch_prompt_shown',
  LAST_CHECK_TIMESTAMP: 'app_links_last_check_timestamp',
} as const;

class AppLinksServiceImpl implements AppLinksService {
  private static instance: AppLinksServiceImpl;

  static getInstance(): AppLinksServiceImpl {
    if (!AppLinksServiceImpl.instance) {
      AppLinksServiceImpl.instance = new AppLinksServiceImpl();
    }
    return AppLinksServiceImpl.instance;
  }

  /**
   * Check if App Links are enabled for juniperassistant.com
   * Returns true on iOS (not applicable), false on Android if not enabled
   */
  async isAppLinksEnabled(): Promise<boolean> {
    try {
      if (Platform.OS === 'ios') {
        // App Links are not applicable on iOS
        return true;
      }

      if (!NativeAppLinksModule) {
        console.warn('⚠️ AppLinksModule not available');
        return false;
      }

      return await NativeAppLinksModule.isAppLinksEnabled();
    } catch (error) {
      console.error('❌ Error checking app links status:', error);
      return false;
    }
  }

  /**
   * Open the Android settings page for App Links
   * No-op on iOS
   */
  async openAppLinksSettings(): Promise<boolean> {
    try {
      if (Platform.OS === 'ios') {
        // No-op on iOS
        return true;
      }

      if (!NativeAppLinksModule) {
        console.warn('⚠️ AppLinksModule not available');
        return false;
      }

      return await NativeAppLinksModule.openAppLinksSettings();
    } catch (error) {
      console.error('❌ Error opening app links settings:', error);
      return false;
    }
  }

  /**
   * Get detailed domain verification status (Android 12+ only)
   */
  async getDomainVerificationStatus(): Promise<{
    domain: string;
    status: string;
    isVerified: boolean;
    isSelected: boolean;
    isEnabled: boolean;
  }> {
    try {
      if (Platform.OS === 'ios') {
        // Return default success state for iOS
        return {
          domain: 'juniperassistant.com',
          status: 'not_applicable',
          isVerified: true,
          isSelected: true,
          isEnabled: true,
        };
      }

      if (!NativeAppLinksModule) {
        console.warn('⚠️ AppLinksModule not available');
        return {
          domain: 'juniperassistant.com',
          status: 'unknown',
          isVerified: false,
          isSelected: false,
          isEnabled: false,
        };
      }

      return await NativeAppLinksModule.getDomainVerificationStatus();
    } catch (error) {
      console.error('❌ Error getting domain verification status:', error);
      return {
        domain: 'juniperassistant.com',
        status: 'error',
        isVerified: false,
        isSelected: false,
        isEnabled: false,
      };
    }
  }

  /**
   * Check if App Links are enabled before starting OAuth
   * Returns true if enabled, false if user needs to enable them
   */
  async checkAppLinksBeforeOAuth(): Promise<boolean> {
    try {
      const isEnabled = await this.isAppLinksEnabled();
      
      if (!isEnabled) {
        console.log('🔗 App Links not enabled - OAuth will fail');
        
        // Update last check timestamp for analytics
        await AsyncStorage.setItem(
          STORAGE_KEYS.LAST_CHECK_TIMESTAMP,
          Date.now().toString()
        );
      }

      return isEnabled;
    } catch (error) {
      console.error('❌ Error in pre-OAuth app links check:', error);
      return false;
    }
  }

  /**
   * Check if we've already shown the first launch prompt
   */
  async hasShownFirstLaunchPrompt(): Promise<boolean> {
    try {
      const hasShown = await AsyncStorage.getItem(STORAGE_KEYS.FIRST_LAUNCH_PROMPT_SHOWN);
      return hasShown === 'true';
    } catch (error) {
      console.error('❌ Error checking first launch prompt status:', error);
      return false;
    }
  }

  /**
   * Mark that we've shown the first launch prompt
   */
  async setFirstLaunchPromptShown(): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.FIRST_LAUNCH_PROMPT_SHOWN, 'true');
    } catch (error) {
      console.error('❌ Error setting first launch prompt flag:', error);
    }
  }

  /**
   * Reset the first launch prompt flag (for testing)
   */
  async resetFirstLaunchPrompt(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.FIRST_LAUNCH_PROMPT_SHOWN);
      await AsyncStorage.removeItem(STORAGE_KEYS.LAST_CHECK_TIMESTAMP);
      console.log('🔄 Reset first launch prompt flag');
    } catch (error) {
      console.error('❌ Error resetting first launch prompt flag:', error);
    }
  }

  /**
   * Get analytics about app links usage
   */
  async getAppLinksAnalytics(): Promise<{
    hasShownFirstLaunchPrompt: boolean;
    lastCheckTimestamp: number | null;
    currentStatus: boolean;
  }> {
    try {
      const [hasShown, lastCheckStr, currentStatus] = await Promise.all([
        this.hasShownFirstLaunchPrompt(),
        AsyncStorage.getItem(STORAGE_KEYS.LAST_CHECK_TIMESTAMP),
        this.isAppLinksEnabled(),
      ]);

      return {
        hasShownFirstLaunchPrompt: hasShown,
        lastCheckTimestamp: lastCheckStr ? parseInt(lastCheckStr, 10) : null,
        currentStatus,
      };
    } catch (error) {
      console.error('❌ Error getting app links analytics:', error);
      return {
        hasShownFirstLaunchPrompt: false,
        lastCheckTimestamp: null,
        currentStatus: false,
      };
    }
  }
}

// Export singleton instance
export const AppLinksService = AppLinksServiceImpl.getInstance();

// Export types for consumers
export type { AppLinksService as AppLinksServiceType };

// Export convenience functions
export const checkAppLinksBeforeOAuth = () => AppLinksService.checkAppLinksBeforeOAuth();
export const openAppLinksSettings = () => AppLinksService.openAppLinksSettings();
export const isAppLinksEnabled = () => AppLinksService.isAppLinksEnabled();
export const getDomainVerificationStatus = () => AppLinksService.getDomainVerificationStatus();
export const hasShownFirstLaunchPrompt = () => AppLinksService.hasShownFirstLaunchPrompt();
export const setFirstLaunchPromptShown = () => AppLinksService.setFirstLaunchPromptShown();

// Development helper
export const resetFirstLaunchPrompt = () => AppLinksService.resetFirstLaunchPrompt();