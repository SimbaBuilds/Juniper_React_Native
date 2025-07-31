# Universal Links Setup for iOS OAuth

This document describes the steps to complete the Universal Links setup for iOS to support HTTPS OAuth redirects.

## What's Been Done

1. **iOS Entitlements Updated**: Added Associated Domains capability to `ios/MobileJarvisNative/MobileJarvisNative.entitlements`
   - Added `applinks:hightower-ai.com` to enable Universal Links

2. **Apple App Site Association (AASA) File Created**: Created `apple-app-site-association` file in the project root
   - This file needs to be hosted on your server

3. **AppDelegate**: Already has Universal Links handling implemented (no changes needed)

## What You Need to Do

### 1. Get Your Apple Team ID
- Log in to [Apple Developer Portal](https://developer.apple.com)
- Go to Membership section
- Find your Team ID (10-character alphanumeric string)

### 2. Update the AASA File
- Open `apple-app-site-association` 
- Replace `REPLACE_WITH_TEAM_ID` with your actual Team ID
- The format should be: `TEAMID.com.anonymous.MobileJarvisNative`

### 3. Host the AASA File on Your Server
The file must be hosted at:
```
https://hightower-ai.com/.well-known/apple-app-site-association
```

Requirements:
- Must be served over HTTPS
- Must have Content-Type: `application/json` (no charset parameter)
- Must be accessible without redirects
- File size must be less than 128 KB

### 4. Update Xcode Project Settings
1. Open the project in Xcode
2. Select your app target
3. Go to "Signing & Capabilities" tab
4. The Associated Domains capability should already be there (from the entitlements file)
5. Make sure it shows `applinks:hightower-ai.com`

### 5. Test the AASA File
You can verify your AASA file is correctly hosted using Apple's validator:
```
https://search.developer.apple.com/appsearch-validation-tool/
```

### 6. Update Google Console
Add these redirect URIs to your Google OAuth app:
- `https://hightower-ai.com/oauth/gmail/callback`
- `https://hightower-ai.com/oauth/google-calendar/callback`
- `https://hightower-ai.com/oauth/google-docs/callback`
- `https://hightower-ai.com/oauth/google-sheets/callback`
- `https://hightower-ai.com/oauth/google-meet/callback`

## How It Works

1. User initiates OAuth flow in your app
2. App opens Google's OAuth page in Safari
3. After authorization, Google redirects to `https://hightower-ai.com/oauth/gmail/callback?code=...`
4. iOS intercepts this URL (thanks to Universal Links) and opens your app
5. Your app's deep link handler in `App.tsx` processes the OAuth callback

## Troubleshooting

If Universal Links aren't working:

1. **Check AASA file**: Use the Apple validator tool
2. **Check entitlements**: Ensure the domain matches exactly
3. **Check Team ID**: Make sure it's correct in the AASA file
4. **Clear Safari cache**: Universal Links are cached
5. **Test on real device**: Universal Links don't work in simulator
6. **Check console logs**: Look for "swcd" process logs in Console.app

## Alternative: Custom URL Scheme (Fallback)

If you can't set up Universal Links immediately, you can temporarily use a custom URL scheme:

1. Change the redirect URI in `OAuthConfig.ts` for iOS:
   ```typescript
   redirectUri: Platform.OS === 'ios' 
     ? 'mobilejarvisnative://oauth/callback' 
     : generateRedirectUri('gmail')
   ```

2. Update Google Console with the custom scheme:
   - `mobilejarvisnative://oauth/callback`

However, Universal Links are recommended as they provide better security and user experience.