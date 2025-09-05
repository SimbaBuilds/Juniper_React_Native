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
      NOTION_CLIENT_ID: process.env.EXPO_PUBLIC_NOTION_CLIENT_ID,
      NOTION_CLIENT_SECRET: process.env.EXPO_PUBLIC_NOTION_CLIENT_SECRET,
      SLACK_CLIENT_ID: process.env.EXPO_PUBLIC_SLACK_CLIENT_ID,
      SLACK_CLIENT_SECRET: process.env.EXPO_PUBLIC_SLACK_CLIENT_SECRET,
      SLACK_APP_ID: process.env.EXPO_PUBLIC_SLACK_APP_ID,
      SLACK_VERIFICATION_TOKEN: process.env.EXPO_PUBLIC_SLACK_VERIFICATION_TOKEN,
      ZOOM_CLIENT_ID: process.env.EXPO_PUBLIC_ZOOM_CLIENT_ID,
      ZOOM_CLIENT_SECRET: process.env.EXPO_PUBLIC_ZOOM_CLIENT_SECRET,
      ZOOM_SECRET_TOKEN: process.env.EXPO_PUBLIC_ZOOM_SECRET_TOKEN,
      TODOIST_CLIENT_ID: process.env.EXPO_PUBLIC_TODOIST_CLIENT_ID,
      TODOIST_CLIENT_SECRET: process.env.EXPO_PUBLIC_TODOIST_CLIENT_SECRET,
      MICROSOFT_CLIENT_ID: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_ID,
      MICROSOFT_CLIENT_SECRET: process.env.EXPO_PUBLIC_MICROSOFT_CLIENT_SECRET,
      FITBIT_CLIENT_ID: process.env.EXPO_PUBLIC_FITBIT_CLIENT_ID,
      FITBIT_CLIENT_SECRET: process.env.EXPO_PUBLIC_FITBIT_CLIENT_SECRET,
      OURA_CLIENT_ID: process.env.EXPO_PUBLIC_OURA_CLIENT_ID,
      OURA_CLIENT_SECRET: process.env.EXPO_PUBLIC_OURA_CLIENT_SECRET,
      EXPIRING_RESOURCES_INTERVAL: process.env.EXPO_PUBLIC_EXPIRING_RESOURCES_INTERVAL

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