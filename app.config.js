export default {
  expo: {
    name: "MobileJarvisNative",
    slug: "MobileJarvisNative",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "mobilejarvisnative",
    plugins: [
      "./expo-plugins/withNativeModules",
      "expo-secure-store"
    ],
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.anonymous.MobileJarvisNative"
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff"
      },
      edgeToEdgeEnabled: true,
      package: "com.anonymous.MobileJarvisNative"
    },
    web: {
      favicon: "./assets/favicon.png"
    },
    extra: {
      eas: {
        projectId: "a1ca031e-4068-49f1-84f5-ab872bc450dc"
      },
      SUPABASE_URL: process.env.EXPO_PUBLIC_SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY,
      GOOGLE_CLIENT_ID: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_ID,
      GOOGLE_CLIENT_SECRET: process.env.EXPO_PUBLIC_GOOGLE_CLIENT_SECRET,
      GOOGLE_API_KEY: process.env.EXPO_PUBLIC_GOOGLE_API_KEY,
      MICROSOFT_CLIENT_ID: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID,
      MICROSOFT_CLIENT_SECRET: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_SECRET,
      SLACK_CLIENT_ID: process.env.EXPO_PUBLIC_SLACK_CLIENT_ID,
      SLACK_APP_ID: process.env.EXPO_PUBLIC_SLACK_APP_ID,
      SLACK_VERIFICATION_TOKEN: process.env.EXPO_PUBLIC_SLACK_VERIFICATION_TOKEN,
      SLACK_CLIENT_SECRET: process.env.EXPO_PUBLIC_SLACK_CLIENT_SECRET,
      ZOOM_CLIENT_ID: process.env.EXPO_PUBLIC_ZOOM_CLIENT_ID,
      ZOOM_CLIENT_SECRET: process.env.EXPO_PUBLIC_ZOOM_CLIENT_SECRET,
      TODOIST_CLIENT_ID: process.env.EXPO_PUBLIC_TODOIST_CLIENT_ID,
      TODOIST_CLIENT_SECRET: process.env.EXPO_PUBLIC_TODOIST_CLIENT_SECRET,
      NOTION_CLIENT_ID: process.env.EXPO_PUBLIC_NOTION_CLIENT_ID,

    }
  }
}; 