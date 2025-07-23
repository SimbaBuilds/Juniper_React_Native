import { NativeModules, NativeEventEmitter, DeviceEventEmitter, EmitterSubscription, Platform } from 'react-native';

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
      getAvailableWakeWords: async () => ({ wakeWords: ['BUMBLEBEE', 'GRASSHOPPER', 'JARVIS', 'JUNIPER', 'PICOVOICE', 'PORCUPINE', 'TERMINATOR'], success: true }),
      setSelectedWakeWord: async () => ({ success: true }),
      getSelectedWakeWord: async () => ({ wakeWord: 'JARVIS', success: true }),
      setWakeWordSensitivity: async () => ({ success: true }),
      getWakeWordSensitivity: async () => ({ sensitivity: 0.3, success: true }),
    };

// Use DeviceEventEmitter to match native emission method
const eventEmitter = DeviceEventEmitter;

/**
 * Provides access to wake word detection functionality
 */
class WakeWordService {
  private static instance: WakeWordService | null = null;
  private static eventSubscription: EmitterSubscription | null = null;

  // Define the correct fully qualified service class name
  private static ANDROID_SERVICE_CLASS = 'com.anonymous.MobileJarvisNative.wakeword.WakeWordService';

  constructor() {
    // Event listeners are handled by individual consumers via addListener()
    // No global listener needed in constructor
  }

  // handleWakeWordDetected method removed - handled by individual listeners

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

    try {
      if (enabled) {
       
        // Try to ensure permissions are granted first
        if (Platform.OS === 'android') {
         
          try {
            const { PermissionsService } = require('../settings/PermissionsService');
            
            
            // Check wake word permissions directly using the PermissionsService
            const permissionCheckStartTime = Date.now();
            const hasPermissions = await PermissionsService.checkWakeWordPermissions();
            const permissionCheckEndTime = Date.now();
            
            
            
            if (!hasPermissions) {
             
              
              const permissionRequestStartTime = Date.now();
              const granted = await PermissionsService.requestWakeWordPermissions();
              const permissionRequestEndTime = Date.now();
              
              
              if (!granted) {
                console.error('🎤 WAKE_WORD_SERVICE: ❌ Permission request denied');
                throw new Error('Required permissions were denied');
              } else {
               
              }
            } else {
             
            }
          } catch (permError) {
            console.error('🎤 WAKE_WORD_SERVICE: ❌ Error checking/requesting permissions:', permError);
            console.error('🎤 WAKE_WORD_SERVICE: Permission error stack:', permError instanceof Error ? permError.stack : 'No stack available');
            // Continue anyway, the native side will handle permission errors
           
          }
        } else {
         
        }
        
        // Pass the correct service class name
       
        
        const nativeStartTime = Date.now();
        const result = await WakeWordModule.startDetection(WakeWordService.ANDROID_SERVICE_CLASS);
        const nativeEndTime = Date.now();
        
       
        if (result.error) {
          console.error('🎤 WAKE_WORD_SERVICE: Error:', result.error);
        }
        
        // Add a small delay to give the service time to start
        if (result.success && Platform.OS === 'android') {
         
          await new Promise(resolve => setTimeout(resolve, 1000));
         
        }
        
        if (result.success) {
         
        } else {
          console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to enable wake word detection');
        }
        
        return result.success;
      } else {
        
        
        const nativeStopTime = Date.now();
        const result = await WakeWordModule.stopDetection();
        const nativeStopEndTime = Date.now();
        
       
        if (result.error) {
          console.error('🎤 WAKE_WORD_SERVICE: Error:', result.error);
        }
        
        if (result.success) {
         
        } else {
          console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to disable wake word detection');
        }
        
        return result.success;
      }
    } catch (error) {
     
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
    console.log('🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event:', eventType);
    console.log('🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available:', !!eventEmitter);
    
    const subscription = eventEmitter.addListener(eventType, (event) => {
      console.log('🔊 WAKE_WORD_SERVICE: Event received from native via DeviceEventEmitter:', eventType, event);
      listener(event);
    });
    
    console.log('🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription:', !!subscription);
    return subscription;
  }

  /**
   * Get available wake words
   */
  async getAvailableWakeWords(): Promise<string[]> {
    try {
      if (Platform.OS !== 'android') {
        return ['Hey Jarvis', 'Hey Juni', 'Hey Jasmine', 'Hey Jade', 'Hey Jay', 'Hey Jasper', 'Hey Jerry', 'Alexa', 'Alex', 'Aloe', 'Hey Mycroft', 'Hey Michael', 'Hey Mulberry', 'Hey Myrillis', 'Hey Marigold']; // Default for non-Android platforms
      }
      
      const result = await WakeWordModule.getAvailableWakeWords();
      return result.wakeWords || ['Hey Jarvis', 'Hey Juni', 'Hey Jasmine', 'Hey Jade', 'Hey Jay', 'Hey Jasper', 'Hey Jerry', 'Alexa', 'Alex', 'Aloe', 'Hey Mycroft', 'Hey Michael', 'Hey Mulberry', 'Hey Myrillis', 'Hey Marigold'];
    } catch (error) {
      console.error('Error getting available wake words:', error);
      return ['Hey Jarvis', 'Hey Juni', 'Hey Jasmine', 'Hey Jade', 'Hey Jay', 'Hey Jasper', 'Hey Jerry', 'Alexa', 'Alex', 'Aloe', 'Hey Mycroft', 'Hey Michael', 'Hey Mulberry', 'Hey Myrillis', 'Hey Marigold'];
    }
  }

  /**
   * Set the selected wake word for detection
   */
  async setSelectedWakeWord(wakeWord: string): Promise<boolean> {
   
    
    try {
     
      
      const nativeCallStartTime = Date.now();
      const response = await WakeWordModule.setSelectedWakeWord(wakeWord);
      const nativeCallEndTime = Date.now();
      
     
      if (response.error) {
        console.error('🎤 WAKE_WORD_SERVICE: Error:', response.error);
      }
      
      if (response.success) {
        
      } else {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to set wake word to:', wakeWord);
      }
      
      return response.success;
    } catch (error) {
     
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
        return 'Hey Jarvis'; // Default for non-Android platforms
      }
      
     
      const result = await WakeWordModule.getSelectedWakeWord();
     
      
      const wakeWord = result.wakeWord || 'Hey Jarvis';
     
      
      return wakeWord;
    } catch (error) {
     
      return 'Hey Jarvis';
    }
  }

  /**
   * Set the sensitivity level for wake word detection (0.0 - 1.0)
   */
  async setWakeWordSensitivity(sensitivity: number): Promise<boolean> {
   
    
    try {
      // Validate sensitivity range
      if (sensitivity < 0.0 || sensitivity > 1.0) {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Invalid sensitivity value:', sensitivity, '(must be between 0.0 and 1.0)');
        return false;
      }
      
     
      
      const nativeCallStartTime = Date.now();
      const response = await WakeWordModule.setWakeWordSensitivity(sensitivity);
      const nativeCallEndTime = Date.now();
      
     
      if (response.error) {
        console.error('🎤 WAKE_WORD_SERVICE: Error:', response.error);
      }
      
      if (response.success) {
       
      } else {
        console.error('🎤 WAKE_WORD_SERVICE: ❌ Failed to set wake word sensitivity to:', sensitivity);
      }
      
      return response.success;
    } catch (error) {
     
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
      
     
      const result = await WakeWordModule.getWakeWordSensitivity();
     
      
      const sensitivity = result.sensitivity || 0.3;
     
      
      return sensitivity;
    } catch (error) {
     
      return 0.3;
    }
  }
}

export default WakeWordService;
