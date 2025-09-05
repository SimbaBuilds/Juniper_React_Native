export default {
  expo: {
    name: "MobileJarvisNative",
    slug: "MobileJarvisNative",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "mobilejarvisnative",
    plugins: ["expo-secure-store"],
    platforms: ["ios", "android", "web"],
    extra: {
      GOOGLE_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET,
      GOOGLE_API_KEY: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      PYTHON_BACKEND_URL: process.env.EXPO_PUBLIC_PYTHON_BACKEND_URL,
      SITE_URL: process.env.EXPO_PUBLIC_SITE_URL,
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.hightowerai.MobileJarvisNative"
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff"
      },
      package: "com.hightowerai.MobileJarvisNative"
    }
  }
}; 