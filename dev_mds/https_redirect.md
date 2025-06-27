Note: redirect URLs in service dev consoles are configured as EXPO_PUBLIC_SITE_URL/oauth/service_name/callback e.g. https://hightower-ai.com/oauth/zoom/callback

**APPROACH: Use Universal Links/App Links to handle HTTPS redirects directly in mobile app. Keep all token handling in frontend. Backend fetches fresh tokens from DB when needed.**

**BACKUP: Comment out current Google auth setup in GoogleAuthService.ts and OAuthConfig.ts for easy reverting**

1. [x] Configure iOS Universal Links in ios/MobileJarvisNative/MobileJarvisNative.entitlements
2. [x] Configure Android App Links in AndroidManifest.xml  
3. [!] Create .well-known/apple-app-site-association on domain
4. [!] Create .well-known/assetlinks.json on domain
5. [x] Update OAuthConfig.ts to use single HTTPS redirectUri: `${EXPO_PUBLIC_SITE_URL}/oauth/${serviceName}/callback`
6. [x] Update App.tsx deep link handling to detect HTTPS callback URLs
7. [x] Update all auth services to use new HTTPS redirect URLs
8. [x] Remove token params from completeIntegration API calls (backend will fetch fresh tokens from DB)
9. [x] **DEV CONSOLES:** Update OAuth client redirect URIs in all external service consoles (Google, Microsoft, Slack, etc.)
10. [x] Remove custom scheme handlers from AndroidManifest.xml and iOS config

**NOTES:**
- [!] Items 3-4 require domain configuration - typically handled by hosting provider
- [x] All OAuth services now use HTTPS redirects via Universal/App Links
- [x] Backend will fetch fresh tokens from database instead of receiving them in API calls
- [x] Original Google Auth setup backed up and commented out in GoogleAuthService.ts

