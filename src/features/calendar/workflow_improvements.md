Thanks, this gives a clear picture — you're not using expo-auth-session, but are implementing manual OAuth + deep linking in an EAS dev build-like environment, with custom native code and a custom scheme for Android.

Here's a clean and stable setup I recommend, tailored to your current situation:

⸻

✅ 1. Use a Custom Dev Client (EAS dev build)

You're not using Expo Go, because:
	•	Expo Go doesn't support custom native modules
	•	You have a wake word service + voice interaction native code
	•	You have custom URI handling

🛠 So: Build your own dev client using EAS:

eas build --profile development --platform android

Make sure to install it on your Android device. This lets you develop and test like a production app, but with dev tools enabled.

⸻

🔗 2. Fix Deep Link Setup

Make sure your app.json (or app.config.js) contains:

{
  "expo": {
    "scheme": "mobilejarvisnative",
    "android": {
      "intentFilters": [
        {
          "action": "VIEW",
          "data": {
            "scheme": "mobilejarvisnative",
            "host": "oauth",
            "pathPrefix": "/callback"
          },
          "category": ["BROWSABLE", "DEFAULT"]
        }
      ]
    }
  }
}

This ensures that the Android OS knows how to route mobilejarvisnative://oauth/callback to your app.

✅ Ensure host and pathPrefix match exactly what your redirect URI is using.

⸻

🧠 3. Handle Deep Linking in JS

Set up a handler for incoming links:

import * as Linking from 'expo-linking';
import { useEffect } from 'react';

useEffect(() => {
  const handleDeepLink = (event) => {
    const url = event.url;
    console.log("Received deep link:", url);
    // parse the URL and extract tokens, etc.
  };

  const subscription = Linking.addEventListener("url", handleDeepLink);

  // Optional: handle app cold-started from link
  Linking.getInitialURL().then((url) => {
    if (url) handleDeepLink({ url });
  });

  return () => subscription.remove();
}, []);



⸻

🌐 4. Update OAuth Flow Redirect URI

Wherever you're initiating the OAuth with Google (in Supabase or a direct fetch to Google's OAuth URL), set your redirect_uri as:

mobilejarvisnative://oauth/callback

This must exactly match what Google has whitelisted in your API Console for the OAuth client.

⸻

🧼 5. Clear Stuck States When Testing

If you're having weird behavior switching between flows (e.g., stuck redirect loops or Chrome not handing back to app):
	•	Uninstall the app:

adb uninstall com.yourcompany.yourapp


	•	Clear Chrome's app linking cache:
Go to Android Settings > Apps > Chrome > Open by default > Clear defaults
	•	Or test on another device/emulator to verify.

⸻

🧪 6. Test the Intent Filter

You can manually test your intent filter by running:

adb shell am start -W -a android.intent.action.VIEW -d "mobilejarvisnative://oauth/callback?code=1234" com.yourcompany.yourapp

If this opens your app and logs the link correctly in the handler above, your setup is working.

⸻

📦 7. Don't Use Expo Go

Since you're not logged in to Expo and you're using native modules + custom auth — Expo Go will break your flow.

Stick with your custom EAS dev client for development.

⸻

TL;DR: Your Recommended Setup
	•	✅ Use a custom EAS dev build with expo run:android or eas build
	•	✅ app.json with scheme + intentFilter matching your deep link exactly
	•	✅ Linking listener in JS to capture OAuth redirects
	•	✅ OAuth redirect_uri = mobilejarvisnative://oauth/callback in Google Console and app code
	•	✅ Never test in Expo Go with this setup

⸻

Let me know if you want a full example of how to extract the token from the callback URL, or how to set up the Google API Console properly for this flow.

## ✅ IMPLEMENTATION STATUS (Updated)

The workflow improvements have been implemented with the following changes:

### ✅ 1. Deep Link Setup Fixed
- **app.config.js**: Added Android intent filters for `mobilejarvisnative://oauth/callback`
- **AndroidManifest.xml**: Added custom OAuth callback intent filter alongside existing Google OAuth filter
- Both old and new formats supported for backward compatibility

### ✅ 2. Updated OAuth Flow
- **GoogleCalendarService.ts**: 
  - Updated `REDIRECT_URI` to use `mobilejarvisnative://oauth/callback`
  - Added test utility method `testOAuthCallback()` for debugging
  - Enhanced logging for better debugging

### ✅ 3. Improved Deep Link Handling
- **App.tsx**: 
  - Updated deep link handler to support new URL format
  - Added proper error handling
  - Maintains backward compatibility with legacy format
  - Handles both cold start and warm app scenarios

### ✅ 4. Testing Tools Added
- **test-deep-link.sh**: Shell script to test intent filters via adb
- Can manually test deep link functionality without OAuth flow

### 🔧 Next Steps for Google API Console
Make sure your Google API Console OAuth client is configured with:
- **Redirect URI**: `mobilejarvisnative://oauth/callback`
- **Package name**: `com.anonymous.MobileJarvisNative`
- **SHA-1 fingerprint**: Your app's signing certificate fingerprint

### 🧪 Testing the Implementation
1. Run `./test-deep-link.sh` to test intent filters
2. Use `GoogleCalendarService.testOAuthCallback('1234')` for debugging
3. Check console logs for detailed OAuth flow information