import { NativeModules, NativeEventEmitter, AppState as RNAppState, Platform } from 'react-native';

interface AppStateModule {
  getCurrentAppState(): Promise<{ currentState: string; isInForeground: boolean }>;
  bringToForeground(): Promise<boolean>;
}

interface AppStateEvent {
  app_state: string;
  isInForeground: boolean;
  timestamp: number;
}

/**
 * AppStateService - React Native service for enhanced app state management
 * 
 * This service bridges the native AppStateManager with React Native's AppState
 * and provides enhanced functionality for background wake word handling
 */
class AppStateService {
  private static instance: AppStateService;
  private appStateModule: AppStateModule;
  private eventEmitter: NativeEventEmitter;
  private listeners: Set<(state: string) => void> = new Set();

  private constructor() {
    if (Platform.OS === 'android') {
      this.appStateModule = NativeModules.AppStateModule;
      const module = NativeModules.AppStateModule;
      this.eventEmitter = (module && module.addListener && module.removeListeners) 
        ? new NativeEventEmitter(module) 
        : new NativeEventEmitter();
      
      if (!this.appStateModule) {
        console.warn('[AppStateService] Native AppStateModule not available');
      }
      
      this.setupEventListeners();
    } else {
      console.log('[AppStateService] iOS platform - using React Native AppState only');
    }
  }

  static getInstance(): AppStateService {
    if (!AppStateService.instance) {
      AppStateService.instance = new AppStateService();
    }
    return AppStateService.instance;
  }

  /**
   * Setup event listeners for native app state changes
   */
  private setupEventListeners(): void {
    if (Platform.OS !== 'android') {
      return;
    }

    if (!this.eventEmitter) {
      console.warn('[AppStateService] Event emitter not available');
      return;
    }

    // Listen for native app state changes
    this.eventEmitter.addListener('appStateChanged', (event: AppStateEvent) => {
      console.log('[AppStateService] Native app state changed:', event);
      
      // Synchronize with React Native AppState if needed
      const currentRNState = RNAppState.currentState;
      if (currentRNState !== event.app_state) {
        console.log(`[AppStateService] State mismatch - Native: ${event.app_state}, RN: ${currentRNState}`);
      }
      
      // Notify listeners
      this.listeners.forEach(listener => {
        try {
          listener(event.app_state);
        } catch (error) {
          console.error('[AppStateService] Error in app state listener:', error);
        }
      });
    });
  }

  /**
   * Get current app state from native layer
   */
  async getCurrentAppState(): Promise<{ currentState: string; isInForeground: boolean } | null> {
    if (Platform.OS !== 'android' || !this.appStateModule) {
      console.warn('[AppStateService] Native module not available or not on Android');
      return {
        currentState: RNAppState.currentState,
        isInForeground: RNAppState.currentState === 'active'
      };
    }

    try {
      const result = await this.appStateModule.getCurrentAppState();
      console.log('[AppStateService] Current app state:', result);
      return result;
    } catch (error) {
      console.error('[AppStateService] Error getting current app state:', error);
      return {
        currentState: RNAppState.currentState,
        isInForeground: RNAppState.currentState === 'active'
      };
    }
  }

  /**
   * Bring app to foreground using native functionality
   */
  async bringToForeground(): Promise<boolean> {
    if (Platform.OS !== 'android' || !this.appStateModule) {
      console.warn('[AppStateService] Native module not available or not on Android - bring to foreground not supported');
      return false;
    }

    try {
      console.log('[AppStateService] Attempting to bring app to foreground...');
      const success = await this.appStateModule.bringToForeground();
      console.log(`[AppStateService] Bring to foreground result: ${success}`);
      return success;
    } catch (error) {
      console.error('[AppStateService] Error bringing app to foreground:', error);
      return false;
    }
  }

  /**
   * Add listener for app state changes
   */
  addListener(listener: (state: string) => void): () => void {
    this.listeners.add(listener);
    
    // Return cleanup function
    return () => {
      this.listeners.delete(listener);
    };
  }

  /**
   * Check if app is currently in foreground (synchronous check using RN AppState)
   */
  isInForeground(): boolean {
    return RNAppState.currentState === 'active';
  }

  /**
   * Enhanced app state info for debugging
   */
  async getDebugInfo(): Promise<any> {
    const nativeState = await this.getCurrentAppState();
    const rnState = RNAppState.currentState;
    
    return {
      native: nativeState,
      reactNative: {
        currentState: rnState,
        isActive: rnState === 'active'
      },
      synchronized: nativeState?.currentState === rnState,
      timestamp: Date.now()
    };
  }

  /**
   * Cleanup resources
   */
  cleanup(): void {
    this.listeners.clear();
    // Note: We don't remove native event listeners as they're managed by the native module
  }
}

export default AppStateService;