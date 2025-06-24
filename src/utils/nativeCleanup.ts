import { Platform, NativeModules } from 'react-native';

const { VoiceModule } = NativeModules;

/**
 * Clear native state to prevent persistence across chat sessions
 * This is specifically important on Android where cancellation state can persist
 */
export const clearNativeState = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'android' && VoiceModule?.clearNativeState) {
      console.log('🧹 NATIVE_CLEANUP: Clearing Android native state...');
      await VoiceModule.clearNativeState();
      console.log('🧹 NATIVE_CLEANUP: ✅ Android native state cleared successfully');
      return true;
    } else {
      console.log('🧹 NATIVE_CLEANUP: Skipping native cleanup (not Android or method unavailable)');
      return true; // Return true for non-Android platforms as no cleanup needed
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