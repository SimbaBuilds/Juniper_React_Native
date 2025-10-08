export default {
  expo: {
    name: "MobileJarvisNative",
    slug: "MobileJarvisNative",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    scheme: "mobilejarvisnative",
    updates: {
      url: "https://u.expo.dev/a1ca031e-4068-49f1-84f5-ab872bc450dc"
    },
    runtimeVersion: "1.0.0",
    plugins: [
      "expo-secure-store",
      "./expo-plugins/withVoiceModule.js",
      "expo-health-connect",
      [
        "expo-build-properties",
        {
          android: {
            compileSdkVersion: 34,
            targetSdkVersion: 34,
            minSdkVersion: 26
          }
        }
      ]
    ],
    platforms: ["ios", "android", "web"],
    extra: {
      eas: {
        projectId: "a1ca031e-4068-49f1-84f5-ab872bc450dc"
      },
      RELEASE_CHANNEL: process.env.EXPO_PUBLIC_RELEASE_CHANNEL,
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
      EXPIRING_RESOURCES_INTERVAL: process.env.EXPO_PUBLIC_EXPIRING_RESOURCES_INTERVAL,
      EXPO_PUBLIC_EPIC_MYCHART_CLIENT_SECRET: process.env.EXPO_PUBLIC_EPIC_MYCHART_CLIENT_SECRET,
      EXPO_PUBLIC_EPIC_MYCHART_CLIENT_ID: process.env.EXPO_PUBLIC_EPIC_MYCHART_CLIENT_ID
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.hightowerai.MobileJarvisNative",
      infoPlist: {
        NSHealthShareUsageDescription: "Allow Juniper to read your health data to provide personalized health insights and track your wellness goals.",
        NSHealthUpdateUsageDescription: "Allow Juniper to write health data to keep your health information synchronized across apps.",
        UIRequiredDeviceCapabilities: ["healthkit"]
      }
    },
    android: {
      adaptiveIcon: {
        backgroundColor: "#ffffff"
      },
      package: "com.hightowerai.MobileJarvisNative",
      permissions: [
        "android.permission.health.READ_STEPS",
        "android.permission.health.WRITE_STEPS",
        "android.permission.health.READ_HEART_RATE", 
        "android.permission.health.WRITE_HEART_RATE",
        "android.permission.health.READ_ACTIVE_CALORIES_BURNED",
        "android.permission.health.WRITE_ACTIVE_CALORIES_BURNED",
        "android.permission.health.READ_DISTANCE",
        "android.permission.health.WRITE_DISTANCE",
        "android.permission.health.READ_WEIGHT",
        "android.permission.health.WRITE_WEIGHT",
        "android.permission.health.READ_HEIGHT", 
        "android.permission.health.WRITE_HEIGHT",
        "android.permission.health.READ_SLEEP",
        "android.permission.health.WRITE_SLEEP",
        "android.permission.health.READ_BLOOD_PRESSURE",
        "android.permission.health.WRITE_BLOOD_PRESSURE",
        "android.permission.health.READ_EXERCISE",
        "android.permission.health.WRITE_EXERCISE",
        "android.permission.health.READ_NUTRITION",
        "android.permission.health.WRITE_NUTRITION",
        "android.permission.health.READ_BODY_TEMPERATURE",
        "android.permission.health.WRITE_BODY_TEMPERATURE",
        "android.permission.health.READ_BLOOD_GLUCOSE",
        "android.permission.health.WRITE_BLOOD_GLUCOSE",
        "android.permission.health.READ_OXYGEN_SATURATION",
        "android.permission.health.WRITE_OXYGEN_SATURATION",
        "android.permission.health.READ_HYDRATION",
        "android.permission.health.WRITE_HYDRATION",
        "android.permission.health.READ_BODY_FAT",
        "android.permission.health.WRITE_BODY_FAT",
        "android.permission.health.READ_BASAL_METABOLIC_RATE",
        "android.permission.health.WRITE_BASAL_METABOLIC_RATE",
        "android.permission.health.READ_RESTING_HEART_RATE",
        "android.permission.health.WRITE_RESTING_HEART_RATE",
        "android.permission.health.READ_RESPIRATORY_RATE",
        "android.permission.health.WRITE_RESPIRATORY_RATE",
        "android.permission.health.READ_MENSTRUATION",
        "android.permission.health.WRITE_MENSTRUATION"
      ]
    }
  }
}; 