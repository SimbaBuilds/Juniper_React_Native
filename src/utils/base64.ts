import base64 from 'react-native-base64';

/**
 * React Native compatible base64 utility functions
 * Provides a consistent API for base64 encoding/decoding across platforms
 */

/**
 * Encode a string to base64
 * @param input - The string to encode
 * @returns Base64 encoded string
 */
export function base64Encode(input: string): string {
  try {
    return base64.encode(input);
  } catch (error) {
    console.error('Base64 encoding failed:', error);
    throw new Error('Failed to encode string to base64');
  }
}

/**
 * Decode a base64 string
 * @param input - The base64 string to decode
 * @returns Decoded string
 */
export function base64Decode(input: string): string {
  try {
    return base64.decode(input);
  } catch (error) {
    console.error('Base64 decoding failed:', error);
    throw new Error('Failed to decode base64 string');
  }
}

/**
 * Create HTTP Basic Authentication header value
 * @param username - Username or client ID
 * @param password - Password or client secret
 * @returns Base64 encoded credentials for Authorization header
 */
export function createBasicAuthHeader(username: string, password: string): string {
  const credentials = `${username}:${password}`;
  return base64Encode(credentials);
}