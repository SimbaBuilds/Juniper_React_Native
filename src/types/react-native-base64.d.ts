declare module 'react-native-base64' {
  interface Base64 {
    encode(str: string): string;
    decode(str: string): string;
  }
  
  const base64: Base64;
  export default base64;
}
