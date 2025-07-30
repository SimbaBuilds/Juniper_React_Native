import { Platform, NativeModules } from 'react-native';

const { VoiceModule } = NativeModules;

/**
 * Clear native state to prevent persistence across chat sessions
 * This is specifically important on Android where cancellation state can persist
 */
export const clearNativeState = async (requestId?: string): Promise<boolean> => {
  try {
    if (VoiceModule?.clearNativeState) {
      const platformName = Platform.OS === 'android' ? 'Android' : 'iOS';
      console.log(`🧹 NATIVE_CLEANUP: Clearing ${platformName} native state${requestId ? ` for request: ${requestId}` : ' (all requests)'}...`);
      await VoiceModule.clearNativeState(requestId || null);
      console.log(`🧹 NATIVE_CLEANUP: ✅ ${platformName} native state cleared successfully`);
      return true;
    } else {
      console.log('🧹 NATIVE_CLEANUP: Skipping native cleanup (VoiceModule.clearNativeState not available)');
      return true; // Return true as no cleanup method available
    }
  } catch (error) {
    console.warn('🧹 NATIVE_CLEANUP: ⚠️ Failed to clear native state:', error);
    return false;
  }
};

/**
 * Clear native state with error handling that doesn't throw
 */
export const safelyCleanNativeState = async (): Promise<void> => {
  try {
    await clearNativeState();
  } catch (error) {
    // Silently handle errors to prevent disrupting user flow
    console.warn('🧹 NATIVE_CLEANUP: Silent cleanup failed:', error);
  }
}; 