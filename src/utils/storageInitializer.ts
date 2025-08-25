import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';

/**
 * Storage initialization utility to ensure AsyncStorage works properly on iOS
 * Addresses the crash issue where AsyncStorage directory may not exist on first launch
 */
export class StorageInitializer {
  private static isInitialized = false;
  private static initializationPromise: Promise<boolean> | null = null;

  /**
   * Initialize AsyncStorage with proper error handling
   * This should be called before any AsyncStorage operations
   */
  public static async initialize(): Promise<boolean> {
    // Return cached promise if already initializing
    if (this.initializationPromise) {
      return this.initializationPromise;
    }

    // Return immediately if already initialized
    if (this.isInitialized) {
      return true;
    }

    // Create and cache the initialization promise
    this.initializationPromise = this.performInitialization();
    
    try {
      const result = await this.initializationPromise;
      this.isInitialized = result;
      return result;
    } catch (error) {
      // Reset promise on failure to allow retry
      this.initializationPromise = null;
      throw error;
    }
  }

  private static async performInitialization(): Promise<boolean> {
    try {
      console.log('📁 StorageInitializer: Starting AsyncStorage initialization...');

      // On iOS, ensure the AsyncStorage directory exists
      if (Platform.OS === 'ios') {
        await this.ensureStorageDirectoryExists();
      }

      // Test basic AsyncStorage functionality
      await this.testStorageOperations();

      console.log('✅ StorageInitializer: AsyncStorage initialized successfully');
      return true;
    } catch (error) {
      console.error('❌ StorageInitializer: Failed to initialize AsyncStorage:', error);
      return false;
    }
  }

  private static async ensureStorageDirectoryExists(): Promise<void> {
    try {
      // Get the app's documents directory
      const documentsDir = FileSystem.documentDirectory;
      if (!documentsDir) {
        throw new Error('Documents directory not available');
      }

      // Create AsyncStorage directory if it doesn't exist
      const asyncStorageDir = `${documentsDir}RCTAsyncLocalStorage_V1/`;
      
      const dirInfo = await FileSystem.getInfoAsync(asyncStorageDir);
      if (!dirInfo.exists) {
        console.log('📁 StorageInitializer: Creating AsyncStorage directory...');
        await FileSystem.makeDirectoryAsync(asyncStorageDir, { intermediates: true });
        console.log('✅ StorageInitializer: AsyncStorage directory created');
      } else {
        console.log('✅ StorageInitializer: AsyncStorage directory already exists');
      }
    } catch (error) {
      console.warn('⚠️ StorageInitializer: Could not ensure directory exists:', error);
      // Don't throw here - AsyncStorage might still work
    }
  }

  private static async testStorageOperations(): Promise<void> {
    const testKey = '__storage_test_key__';
    const testValue = 'test_value';

    try {
      // Test write operation
      await AsyncStorage.setItem(testKey, testValue);
      
      // Test read operation
      const retrievedValue = await AsyncStorage.getItem(testKey);
      if (retrievedValue !== testValue) {
        throw new Error('Storage read/write test failed');
      }

      // Clean up test key
      await AsyncStorage.removeItem(testKey);
      
      console.log('✅ StorageInitializer: Storage read/write test passed');
    } catch (error) {
      console.error('❌ StorageInitializer: Storage test failed:', error);
      throw new Error(`AsyncStorage test failed: ${error}`);
    }
  }

  /**
   * Check if storage is initialized
   */
  public static isStorageReady(): boolean {
    return this.isInitialized;
  }

  /**
   * Reset initialization state (for testing purposes)
   */
  public static reset(): void {
    this.isInitialized = false;
    this.initializationPromise = null;
  }

  /**
   * Safe wrapper for AsyncStorage operations that ensures initialization
   */
  public static async safeStorageOperation<T>(
    operation: () => Promise<T>,
    fallbackValue?: T
  ): Promise<T | undefined> {
    try {
      const isReady = await this.initialize();
      if (!isReady) {
        console.warn('⚠️ StorageInitializer: Storage not ready, returning fallback');
        return fallbackValue;
      }

      return await operation();
    } catch (error) {
      console.error('❌ StorageInitializer: Storage operation failed:', error);
      return fallbackValue;
    }
  }
}

export default StorageInitializer;