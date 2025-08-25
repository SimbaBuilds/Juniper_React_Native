import AsyncStorage from '@react-native-async-storage/async-storage';
import { StorageInitializer } from './storageInitializer';

/**
 * A utility wrapper for AsyncStorage with type safety and error handling.
 * Now includes initialization checks to prevent iOS crashes.
 */
export const Storage = {
  /**
   * Store a value with the given key
   */
  async set<T>(key: string, value: T): Promise<void> {
    return StorageInitializer.safeStorageOperation(async () => {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    });
  },

  /**
   * Get a value for the given key
   */
  async get<T>(key: string): Promise<T | null> {
    const result = await StorageInitializer.safeStorageOperation(async () => {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) as T : null;
    }, null);
    return result ?? null;
  },

  /**
   * Remove a value with the given key
   */
  async remove(key: string): Promise<void> {
    return StorageInitializer.safeStorageOperation(async () => {
      await AsyncStorage.removeItem(key);
    });
  },

  /**
   * Clear all stored values
   */
  async clear(): Promise<void> {
    return StorageInitializer.safeStorageOperation(async () => {
      await AsyncStorage.clear();
    });
  },

  /**
   * Get all keys stored
   */
  async getAllKeys(): Promise<string[]> {
    const result = await StorageInitializer.safeStorageOperation(async () => {
      return Array.from(await AsyncStorage.getAllKeys());
    }, []);
    return result ?? [];
  },

  /**
   * Initialize storage system - call this early in app lifecycle
   */
  async initialize(): Promise<boolean> {
    try {
      return await StorageInitializer.initialize();
    } catch (error) {
      console.error('Failed to initialize storage:', error);
      return false;
    }
  },

  /**
   * Check if storage is ready for use
   */
  isReady(): boolean {
    return StorageInitializer.isStorageReady();
  }
};

export default Storage; 