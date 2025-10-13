OAuth is working in local environment but not in eas builds or prod builds.  It is likely from changes made to move to lazy loading so that eas build would work and the config could be loaded only after the app is initalized.  Please review changes in git commit "eas updates for ios fully functional" to see what changes were made that is causing this error of OAuth no longer working in prod, and create a debug and fix plan.

Timeline:
- Oauth working for production iOS app and npx expo run:ios builds
- Lazy loading change was made
- Oauth no longer working for eas builds or in the public Apple app, but still working for npx expo run:ios and npx expo run:ios --device --configuration Release