import { NativeModules, NativeEventEmitter, EmitterSubscription, Platform } from 'react-native';

// Define the interface for responses from the native module
interface WakeWordAvailabilityResponse {
  available: boolean;
  reason?: string;
}

interface WakeWordActionResponse {
  success: boolean;
  error?: string;
}

interface WakeWordStatusResponse {
  enabled: boolean;
}

interface WakeWordListResponse {
  wakeWords: string[];
  success: boolean;
}

interface WakeWordSelectionResponse {
  wakeWord: string;
  success: boolean;
}

interface WakeWordSensitivityResponse {
  sensitivity: number;
  success: boolean;
}

// Define the interface for the native module
interface WakeWordModuleInterface {
  isAvailable(): Promise<WakeWordAvailabilityResponse>;
  startDetection(serviceClass?: string): Promise<WakeWordActionResponse>;
  stopDetection(): Promise<WakeWordActionResponse>;
  getStatus(): Promise<WakeWordStatusResponse>;
  setAccessKey(accessKey: string): Promise<WakeWordActionResponse>;
  getAvailableWakeWords(): Promise<WakeWordListResponse>;
  setSelectedWakeWord(wakeWord: string): Promise<WakeWordActionResponse>;
  getSelectedWakeWord(): Promise<WakeWordSelectionResponse>;
  setWakeWordSensitivity(sensitivity: number): Promise<WakeWordActionResponse>;
  getWakeWordSensitivity(): Promise<WakeWordSensitivityResponse>;
}

// Define event names
export const WakeWordEvents = {
  SERVICE_RESTORED: 'wakeWordServiceRestored'
};

// Debug logs to help identify issues
console.log('Available native modules:', Object.keys(NativeModules));

// Extract the WakeWordModule from NativeModules
const nativeWakeWordModule = Platform.OS === 'android' ? NativeModules.WakeWordModule : null;

console.log('WakeWordModule available:', nativeWakeWordModule ? 'Yes' : 'No');
if (!nativeWakeWordModule && Platform.OS === 'android') {
  console.error('WARNING: WakeWordModule not found on Android platform!');
  console.error('Available modules:', Object.keys(NativeModules));
}

// Get the native module or create a mock for platforms that don't support it
const WakeWordModule: WakeWordModuleInterface = nativeWakeWordModule
  ? nativeWakeWordModule
  : {
      // Mock implementation for iOS or other platforms where module is not available
      isAvailable: async () => ({ available: false, reason: 'Platform not supported or module not found' }),
      startDetection: async () => ({ success: false, error: 'Platform not supported or module not found' }),
      stopDetection: async () => ({ success: false, error: 'Platform not supported or module not found' }),
      getStatus: async () => ({ enabled: false }),
      setAccessKey: async () => ({ success: false, error: 'Platform not supported or module not found' }),
      getAvailableWakeWords: async () => ({ wakeWords: ['JARVIS'], success: true }),
      setSelectedWakeWord: async () => ({ success: true }),
      getSelectedWakeWord: async () => ({ wakeWord: 'JARVIS', success: true }),
      setWakeWordSensitivity: async () => ({ success: true }),
      getWakeWordSensitivity: async () => ({ sensitivity: 0.3, success: true }),
    };

// Create an event emitter for the module
const eventEmitter = nativeWakeWordModule 
  ? new NativeEventEmitter(nativeWakeWordModule)
  : null;

/**
 * Provides access to wake word detection functionality
 */
class WakeWordService {
  private static instance: WakeWordService | null = null;
  private static eventSubscription: EmitterSubscription | null = null;

  // Define the correct fully qualified service class name
  private static ANDROID_SERVICE_CLASS = 'com.anonymous.MobileJarvisNative.wakeword.WakeWordService';

  constructor() {
    // Initialize event listener if emitter is available
    if (eventEmitter && !WakeWordService.eventSubscription) {
      WakeWordService.eventSubscription = eventEmitter.addListener(
        'wakeWordDetected',
        (event) => {
          console.log('Wake word detected:', event);
          // Handle wake word detection event
          this.handleWakeWordDetected(event);
        }
      );
    }
  }

  private handleWakeWordDetected(event: any) {
    const timestamp = event.timestamp || Date.now();
    const timeString = new Date(timestamp).toLocaleTimeString();
    
    // Log the detection with emoji for visibility
    // Additional debug information if available
    if (event.debug) {
      console.log('🔍 Debug info:', event.debug);
    }
  }

  /**
   * Clean up event subscription
   */
  static cleanup() {
    if (WakeWordService.eventSubscription) {
      WakeWordService.eventSubscription.remove();
      WakeWordService.eventSubscription = null;
    }
  }

  /**
   * Get singleton instance (for compatibility with old code)
   */
  static getInstance(): WakeWordService {
    if (!WakeWordService.instance) {
      WakeWordService.instance = new WakeWordService();
    }
    return WakeWordService.instance;
  }

  /**
   * For compatibility with older implementation
   */
  async isWakeWordEnabled(): Promise<boolean> {
    try {
      console.log('Calling getStatus() on WakeWordModule');
      const response = await WakeWordModule.getStatus();
      console.log('getStatus result:', response);
      return response.enabled;
    } catch (error) {
      console.error('Error getting wake word status:', error);
      return false;
    }
  }

  /**
   * For compatibility with older implementation
   */
  async setWakeWordEnabled(enabled: boolean): Promise<boolean> {
    console.log('🎤 WAKE_WORD_SERVICE: ========== SET WAKE WORD ENABLED ==========');
    console.log('🎤 WAKE_WORD_SERVICE: Setting wake word enabled to:', enabled);
    console.log('🎤 WAKE_WORD_SERVICE: Current platform:', Platform.OS);
    console.log('🎤 WAKE_WORD_SERVICE: Timestamp:', new Date().toISOString());
    
    try {
      if (enabled) {
        console.log('🎤 WAKE_WORD_SERVICE: ========== ENABLING WAKE WORD DETECTION ==========');
        
        // Try to ensure permissions are granted first
        if (Platform.OS === 'android') {
          console.log('🎤 WAKE_WORD_SERVICE: Checking permissions on Android platform...');
          try {
            const { PermissionsService } = require('../settings/PermissionsService');
            console.log('🎤 WAKE_WORD_SERVICE: PermissionsService loaded, checking wake word permissions...');
            
            // Check wake word permissions directly using the PermissionsService
            const permissionCheckStartTime = Date.now();
            const hasPermissions = await PermissionsService.checkWakeWordPermissions();
            const permissionCheckEndTime = Date.now();
            
            console.log('🎤 WAKE_WORD_SERVICE: Permission check result:', hasPermissions, 'in', (permissionCheckEndTime - permissionCheckStartTime), 'ms');
            
            if (!hasPermissions) {
              console.log('🎤 WAKE_WORD_SERVICE: Need to request wake word permissions before enabling');
              
              const permissionRequestStartTime = Date.now();
              const granted = await PermissionsService.requestWakeWordPermissions();
              const permissionRequestEndTime = Date.now();
              
              console.log('🎤 WAKE_WORD_SERVICE: Permission request result:', granted, 'in', (permissionRequestEndTime - permissionRequestStartTime), 'ms');
              
              if (!granted) {
                console.error('🎤 WAKE_WORD_SERVICE: ❌ Permission request denied');
                throw new Error('Required permissions were denied');
              } else {
                console.log('🎤 WAKE_WORD_SERVICE: ✅ Permissions granted');
              }
            } else {
              console.log('🎤 WAKE_WORD_SERVICE: ✅ Permissions already granted');
            }
          } catch (permError) {
            console.error('🎤 WAKE_WORD_SERVICE: ❌ Error checking/requesting permissions:', permError);
            console.error('🎤 WAKE_WORD_SERVICE: Permission error stack:', permError instanceof Error ? permError.stack : 'No stack available');
            // Continue anyway, the native side will handle permission errors
            console.log('🎤 WAKE_WORD_SERVICE: Continuing despite permission error - native side will handle');
          }
        } else {
          console.log('🎤 WAKE_WORD_SERVICE: Non-Android platform, skipping permission check');
        }
        
        // Pass the correct service class name
        console.log('🎤 WAKE_WORD_SERVICE: ========== CALLING NATIVE START DETECTION ==========');
        console.log('🎤 WAKE_WORD_SERVICE: Service class:', WakeWordService.ANDROID_SERVICE_CLASS);
        console.log('🎤 WAKE_WORD_SERVICE: About to call WakeWordModule.startDetection...');
        
        const nativeStartTime = Date.now();
        const result = await WakeWordModule.startDetection(WakeWordService.ANDROID_SERVICE_CLASS);
        const nativeEndTime = Date.now();
        
        console.log('🎤 WAKE_WORD_SERVICE: ========== NATIVE START DETECTION RESPONSE ==========');
        console.log('🎤 WAKE_WORD_SERVICE: Native call duration:', (nativeEndTime - nativeStartTime), 'ms');
        console.log('🎤 WAKE_WORD_SERVICE: Start detection result:', result, '(type:', typeof result, ')');
        console.log('🎤 WAKE_WORD_SERVICE: Success:', result.success);
        if (result.error) {
          console.error('🎤 WAKE_WORD_SERVICE: Error:', result.error);
        }
        
        // Add a small delay to give the service time to start
        if (result.success && Platform.OS === 'android') {
          console.log('🎤 WAKE_WORD_SERVICE: Adding startup delay for Android service...');
          await new Promise(resolve => setTimeout(resolve, 1000));
          console.log('🎤 WAKE_WORD_SERVICE: Startup delay completed');
        }
        
        if (result.success) {
          console.log('🎤 WAKE_WORD_SERVICE: ✅ Wake word detection enabled successfully');
        } else {
          console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to enable wake word detection');
        }
        
        return result.success;
      } else {
        console.log('🎤 WAKE_WORD_SERVICE: ========== DISABLING WAKE WORD DETECTION ==========');
        console.log('🎤 WAKE_WORD_SERVICE: About to call WakeWordModule.stopDetection...');
        
        const nativeStopTime = Date.now();
        const result = await WakeWordModule.stopDetection();
        const nativeStopEndTime = Date.now();
        
        console.log('🎤 WAKE_WORD_SERVICE: ========== NATIVE STOP DETECTION RESPONSE ==========');
        console.log('🎤 WAKE_WORD_SERVICE: Native call duration:', (nativeStopEndTime - nativeStopTime), 'ms');
        console.log('🎤 WAKE_WORD_SERVICE: Stop detection result:', result, '(type:', typeof result, ')');
        console.log('🎤 WAKE_WORD_SERVICE: Success:', result.success);
        if (result.error) {
          console.error('🎤 WAKE_WORD_SERVICE: Error:', result.error);
        }
        
        if (result.success) {
          console.log('🎤 WAKE_WORD_SERVICE: ✅ Wake word detection disabled successfully');
        } else {
          console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to disable wake word detection');
        }
        
        return result.success;
      }
    } catch (error) {
      console.error('🎤 WAKE_WORD_SERVICE: ========== SET WAKE WORD ENABLED ERROR ==========');
      console.error('🎤 WAKE_WORD_SERVICE: ❌ Error setting wake word enabled state:', error);
      console.error('🎤 WAKE_WORD_SERVICE: Error type:', error instanceof Error ? error.constructor.name : typeof error);
      console.error('🎤 WAKE_WORD_SERVICE: Error stack:', error instanceof Error ? error.stack : 'No stack available');
      return false;
    }
  }

  /**
   * For compatibility with older implementation
   */
  async startWakeWordDetection(): Promise<boolean> {
    try {
      // Pass the service class explicitly
      const result = await WakeWordModule.startDetection(WakeWordService.ANDROID_SERVICE_CLASS);
      
      // Add a small delay to give the service time to start
      if (result.success && Platform.OS === 'android') {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      return result.success;
    } catch (error) {
      console.error('Error starting wake word detection:', error);
      return false;
    }
  }

  /**
   * For compatibility with older implementation
   */
  async stopWakeWordDetection(): Promise<boolean> {
    const result = await WakeWordModule.stopDetection();
    return result.success;
  }

  /**
   * For compatibility with older implementation
   */
  async isWakeWordDetectionRunning(): Promise<boolean> {
    return WakeWordService.getStatus();
  }

  /**
   * Check if wake word detection is available on this device
   */
  static async isAvailable(): Promise<boolean> {
    try {
      console.log('Calling isAvailable() on WakeWordModule');
      const result = await WakeWordModule.isAvailable();
      console.log('isAvailable result:', result);
      return result.available;
    } catch (error) {
      console.error('Error checking wake word availability:', error);
      return false;
    }
  }

  /**
   * Start wake word detection
   */
  static async startDetection(): Promise<WakeWordActionResponse> {
    try {
      if (!nativeWakeWordModule) {
        console.error('WakeWordModule is not available on this platform', 
          { modules: Object.keys(NativeModules) });
        return {
          success: false,
          error: 'WakeWordModule is not available on this platform',
        };
      }

      console.log('Calling startDetection() on WakeWordModule with service class:', WakeWordService.ANDROID_SERVICE_CLASS);
      // Explicitly pass the service class name to the native module
      const result = await WakeWordModule.startDetection(WakeWordService.ANDROID_SERVICE_CLASS);
      console.log('startDetection result:', result);
      
      // Add a small delay to give the service time to start
      if (result.success && Platform.OS === 'android') {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      return result;
    } catch (error) {
      console.error('Error starting wake word detection:', error);
      return {
        success: false,
        error: String(error),
      };
    }
  }

  /**
   * Stop wake word detection
   */
  static async stopDetection(): Promise<WakeWordActionResponse> {
    try {
      if (!nativeWakeWordModule) {
        console.error('WakeWordModule is not available on this platform',
          { modules: Object.keys(NativeModules) });
        return {
          success: false,
          error: 'WakeWordModule is not available on this platform',
        };
      }
      
      console.log('Calling stopDetection() on WakeWordModule');
      const result = await WakeWordModule.stopDetection();
      console.log('stopDetection result:', result);
      
      return result;
    } catch (error) {
      console.error('Error stopping wake word detection:', error);
      return {
        success: false,
        error: `Failed to stop wake word detection: ${error}`,
      };
    }
  }

  /**
   * Get the current wake word detection status
   */
  static async getStatus(): Promise<boolean> {
    try {
      if (!nativeWakeWordModule) {
        console.warn('WakeWordModule is not available, returning default status (false)', 
          { available_modules: Object.keys(NativeModules) });
        return false;
      }
      
      console.log('Calling getStatus() on WakeWordModule');
      const result = await WakeWordModule.getStatus();
      console.log('getStatus result:', result);
      
      return result.enabled;
    } catch (error) {
      console.error('Error getting wake word status:', error);
      return false;
    }
  }

  /**
   * Set the Picovoice access key
   */
  static async setAccessKey(accessKey: string): Promise<boolean> {
    try {
      if (!nativeWakeWordModule) {
        console.warn('WakeWordModule is not available, cannot set access key');
        return false;
      }
      
      console.log('Calling setAccessKey() on WakeWordModule');
      const result = await WakeWordModule.setAccessKey(accessKey);
      console.log('setAccessKey result:', result);
      
      return result.success;
    } catch (error) {
      console.error('Error setting access key:', error);
      return false;
    }
  }

  /**
   * Add a listener for wake word events
   */
  static addListener(
    eventType: string,
    listener: (event: any) => void
  ): EmitterSubscription | null {
    if (!eventEmitter) {
      console.warn('WakeWordEmitter is not available, cannot add listener');
      return null;
    }
    return eventEmitter.addListener(eventType, listener);
  }

  /**
   * Get available wake words
   */
  async getAvailableWakeWords(): Promise<string[]> {
    try {
      if (Platform.OS !== 'android') {
        return ['JARVIS']; // Default for non-Android platforms
      }
      
      const result = await WakeWordModule.getAvailableWakeWords();
      return result.wakeWords || ['JARVIS'];
    } catch (error) {
      console.error('Error getting available wake words:', error);
      return ['JARVIS'];
    }
  }

  /**
   * Set the selected wake word for detection
   */
  async setSelectedWakeWord(wakeWord: string): Promise<boolean> {
    console.log('🎤 WAKE_WORD_SERVICE: ========== SET SELECTED WAKE WORD ==========');
    console.log('🎤 WAKE_WORD_SERVICE: Setting selected wake word to:', wakeWord);
    console.log('🎤 WAKE_WORD_SERVICE: Current platform:', Platform.OS);
    console.log('🎤 WAKE_WORD_SERVICE: Timestamp:', new Date().toISOString());
    
    try {
      console.log('🎤 WAKE_WORD_SERVICE: ========== CALLING NATIVE SET WAKE WORD ==========');
      console.log('🎤 WAKE_WORD_SERVICE: About to call WakeWordModule.setSelectedWakeWord...');
      console.log('🎤 WAKE_WORD_SERVICE: Parameter:', wakeWord, '(type:', typeof wakeWord, ')');
      
      const nativeCallStartTime = Date.now();
      const response = await WakeWordModule.setSelectedWakeWord(wakeWord);
      const nativeCallEndTime = Date.now();
      
      console.log('🎤 WAKE_WORD_SERVICE: ========== NATIVE SET WAKE WORD RESPONSE ==========');
      console.log('🎤 WAKE_WORD_SERVICE: Native call duration:', (nativeCallEndTime - nativeCallStartTime), 'ms');
      console.log('🎤 WAKE_WORD_SERVICE: Set wake word response:', response, '(type:', typeof response, ')');
      console.log('🎤 WAKE_WORD_SERVICE: Success:', response.success);
      if (response.error) {
        console.error('🎤 WAKE_WORD_SERVICE: Error:', response.error);
      }
      
      if (response.success) {
        console.log('🎤 WAKE_WORD_SERVICE: ✅ Wake word set successfully to:', wakeWord);
      } else {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to set wake word to:', wakeWord);
      }
      
      return response.success;
    } catch (error) {
      console.error('🎤 WAKE_WORD_SERVICE: ========== SET WAKE WORD ERROR ==========');
      console.error('🎤 WAKE_WORD_SERVICE: ❌ Error setting selected wake word:', error);
      console.error('🎤 WAKE_WORD_SERVICE: Error type:', error instanceof Error ? error.constructor.name : typeof error);
      console.error('🎤 WAKE_WORD_SERVICE: Error stack:', error instanceof Error ? error.stack : 'No stack available');
      return false;
    }
  }

  /**
   * Get the selected wake word
   */
  async getSelectedWakeWord(): Promise<string> {
    console.log('🎯 WAKEWORD_SELECTION: getSelectedWakeWord called');
    try {
      if (Platform.OS !== 'android') {
        console.warn('🎯 WAKEWORD_SELECTION: Wake word selection only supported on Android, returning default');
        return 'JARVIS'; // Default for non-Android platforms
      }
      
      console.log('🎯 WAKEWORD_SELECTION: Calling native WakeWordModule.getSelectedWakeWord...');
      const result = await WakeWordModule.getSelectedWakeWord();
      console.log('🎯 WAKEWORD_SELECTION: Native call result:', result);
      
      const wakeWord = result.wakeWord || 'JARVIS';
      console.log('🎯 WAKEWORD_SELECTION: ✅ Current selected wake word:', wakeWord);
      
      return wakeWord;
    } catch (error) {
      console.error('🎯 WAKEWORD_SELECTION: ❌ Error getting selected wake word:', error);
      return 'JARVIS';
    }
  }

  /**
   * Set the sensitivity level for wake word detection (0.0 - 1.0)
   */
  async setWakeWordSensitivity(sensitivity: number): Promise<boolean> {
    console.log('🎤 WAKE_WORD_SERVICE: ========== SET WAKE WORD SENSITIVITY ==========');
    console.log('🎤 WAKE_WORD_SERVICE: Setting wake word sensitivity to:', sensitivity);
    console.log('🎤 WAKE_WORD_SERVICE: Current platform:', Platform.OS);
    console.log('🎤 WAKE_WORD_SERVICE: Timestamp:', new Date().toISOString());
    
    try {
      // Validate sensitivity range
      if (sensitivity < 0.0 || sensitivity > 1.0) {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Invalid sensitivity value:', sensitivity, '(must be between 0.0 and 1.0)');
        return false;
      }
      
      console.log('🎤 WAKE_WORD_SERVICE: ========== CALLING NATIVE SET SENSITIVITY ==========');
      console.log('🎤 WAKE_WORD_SERVICE: About to call WakeWordModule.setWakeWordSensitivity...');
      console.log('🎤 WAKE_WORD_SERVICE: Parameter:', sensitivity, '(type:', typeof sensitivity, ')');
      
      const nativeCallStartTime = Date.now();
      const response = await WakeWordModule.setWakeWordSensitivity(sensitivity);
      const nativeCallEndTime = Date.now();
      
      console.log('🎤 WAKE_WORD_SERVICE: ========== NATIVE SET SENSITIVITY RESPONSE ==========');
      console.log('🎤 WAKE_WORD_SERVICE: Native call duration:', (nativeCallEndTime - nativeCallStartTime), 'ms');
      console.log('🎤 WAKE_WORD_SERVICE: Set sensitivity response:', response, '(type:', typeof response, ')');
      console.log('🎤 WAKE_WORD_SERVICE: Success:', response.success);
      if (response.error) {
        console.error('🎤 WAKE_WORD_SERVICE: Error:', response.error);
      }
      
      if (response.success) {
        console.log('🎤 WAKE_WORD_SERVICE: ✅ Wake word sensitivity set successfully to:', sensitivity);
      } else {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to set wake word sensitivity to:', sensitivity);
      }
      
      return response.success;
    } catch (error) {
      console.error('🎤 WAKE_WORD_SERVICE: ========== SET SENSITIVITY ERROR ==========');
      console.error('🎤 WAKE_WORD_SERVICE: ❌ Error setting wake word sensitivity:', error);
      console.error('🎤 WAKE_WORD_SERVICE: Error type:', error instanceof Error ? error.constructor.name : typeof error);
      console.error('🎤 WAKE_WORD_SERVICE: Error stack:', error instanceof Error ? error.stack : 'No stack available');
      return false;
    }
  }

  /**
   * Get wake word sensitivity
   */
  async getWakeWordSensitivity(): Promise<number> {
    console.log('🎚️ WAKEWORD_SENSITIVITY: getWakeWordSensitivity called');
    try {
      if (Platform.OS !== 'android') {
        console.warn('🎚️ WAKEWORD_SENSITIVITY: Wake word sensitivity only supported on Android, returning default');
        return 0.3; // Default for non-Android platforms
      }
      
      console.log('🎚️ WAKEWORD_SENSITIVITY: Calling native WakeWordModule.getWakeWordSensitivity...');
      const result = await WakeWordModule.getWakeWordSensitivity();
      console.log('🎚️ WAKEWORD_SENSITIVITY: Native call result:', result);
      
      const sensitivity = result.sensitivity || 0.3;
      console.log('🎚️ WAKEWORD_SENSITIVITY: ✅ Current sensitivity:', sensitivity, `(${Math.round(sensitivity * 100)}%)`);
      
      return sensitivity;
    } catch (error) {
      console.error('🎚️ WAKEWORD_SENSITIVITY: ❌ Error getting wake word sensitivity:', error);
      return 0.3;
    }
  }
}

export default WakeWordService;
