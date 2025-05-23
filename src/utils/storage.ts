import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * A utility wrapper for AsyncStorage with type safety and error handling.
 */
export const Storage = {
  /**
   * Store a value with the given key
   */
  async set<T>(key: string, value: T): Promise<void> {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error('Error storing data:', error);
      throw error;
    }
  },

  /**
   * Get a value for the given key
   */
  async get<T>(key: string): Promise<T | null> {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      return jsonValue ? JSON.parse(jsonValue) as T : null;
    } catch (error) {
      console.error('Error retrieving data:', error);
      throw error;
    }
  },

  /**
   * Remove a value with the given key
   */
  async remove(key: string): Promise<void> {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error('Error removing data:', error);
      throw error;
    }
  },

  /**
   * Clear all stored values
   */
  async clear(): Promise<void> {
    try {
      await AsyncStorage.clear();
    } catch (error) {
      console.error('Error clearing data:', error);
      throw error;
    }
  },

  /**
   * Get all keys stored
   */
  async getAllKeys(): Promise<string[]> {
    try {
      return Array.from(await AsyncStorage.getAllKeys());
    } catch (error) {
      console.error('Error getting all keys:', error);
      throw error;
    }
  }
};

export default Storage; 