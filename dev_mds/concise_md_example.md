Note: redirect URLs in service dev consoles are configured as EXPO_PUBLIC_SITE_URL/oauth/service_name/callback e.g. https://hightower-ai.com/oauth/zoom/callback

**APPROACH: Use Universal Links/App Links to handle HTTPS redirects directly in mobile app. Keep all token handling in frontend. Backend fetches fresh tokens from DB when needed.**

**BACKUP: Comment out current Google auth setup in GoogleAuthService.ts and OAuthConfig.ts for easy reverting**

1. [ ] Configure iOS Universal Links in ios/MobileJarvisNative/MobileJarvisNative.entitlements
2. [ ] Configure Android App Links in AndroidManifest.xml  
3. [ ] Create .well-known/apple-app-site-association on domain
4. [ ] Create .well-known/assetlinks.json on domain
5. [ ] Update OAuthConfig.ts to use single HTTPS redirectUri: `${EXPO_PUBLIC_SITE_URL}/oauth/${serviceName}/callback`
6. [ ] Update App.tsx deep link handling to detect HTTPS callback URLs
7. [ ] Update all auth services to use new HTTPS redirect URLs
8. [ ] Remove token params from completeIntegration API calls (backend will fetch fresh tokens from DB)
9. [x] **DEV CONSOLES:** Update OAuth client redirect URIs in all external service consoles (Google, Microsoft, Slack, etc.)
10. [ ] Remove custom scheme handlers from AndroidManifest.xml and iOS config

