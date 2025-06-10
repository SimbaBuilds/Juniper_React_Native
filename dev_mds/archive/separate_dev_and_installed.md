To separate your dev build from your production/release build on Android, so both can coexist on your phone without overwriting each other, you need to configure each build to have a different application ID (aka package name).

⸻

✅ TL;DR: Use different applicationIds per build type

🧱 Example:
	•	Dev app: com.yourcompany.mobilejarvis.dev
	•	Prod app: com.yourcompany.mobilejarvis

This way, they install as completely separate apps, with their own icons, data, and behavior.

⸻

🔧 Step-by-step: How to do it with EAS + Expo

1. Update your eas.json profiles

{
  "build": {
    "development": {
      "developmentClient": true,
      "distribution": "internal",
      "android": {
        "package": "com.yourcompany.mobilejarvis.dev"
      }
    },
    "production": {
      "android": {
        "package": "com.yourcompany.mobilejarvis"
      }
    }
  }
}

This tells EAS to use a separate package name for the dev build.

⸻

2. Update app.json or app.config.js

If using app.config.js, you can conditionally apply the right package:

export default ({ config }) => {
  const isDev = process.env.EAS_BUILD_PROFILE === 'development';

  return {
    ...config,
    android: {
      ...config.android,
      package: isDev
        ? 'com.yourcompany.mobilejarvis.dev'
        : 'com.yourcompany.mobilejarvis',
    },
    name: isDev ? 'MobileJarvis Dev' : 'MobileJarvis',
    slug: isDev ? 'mobilejarvis-dev' : 'mobilejarvis',
  };
};

You can also change icons, splash screens, or other branding here if desired.

⸻

3. Build separately

# Dev build (safe for dev testing)
eas build --profile development --platform android

# Prod build (for actual use or store upload)
eas build --profile production --platform android

Now you’ll end up with two apps that do not conflict on the same phone.

⸻

🧠 Bonus Tips
	•	You can even pin one to your home screen and use the other for testing.
	•	Keep the dev app signed with a debug or internal key, and the prod app with your Play Store key.
	•	Add a different icon or color for the dev build to prevent confusion.

⸻

Let me know if you want help generating a full app.config.js to do this dynamically.