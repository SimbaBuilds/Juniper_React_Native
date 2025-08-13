# workflow

Your Existing Commands (still work):

```bash
npx expo start                    # Development server
npx expo run:ios                  # Build iOS
(development)

npx expo run:android              # Build Android
(development)

New Apple Review Test Commands:

# Test Apple Review compliance

npm run test:apple-review

# Validate before building

npm run validate:apple-review

# Individual tests

node tests/apple-review/crash-simulation.test.js
node tests/apple-review/device-simulation.test.js
node
tests/apple-review/production-error-handling.test.js

Production Build Commands (with validation):

# iOS production build with automatic Apple Review

validation
npm run ios:release

# OR manually:

npx expo run:ios --configuration Release

# Android production build

npm run android:release

# OR manually:

npx expo run:android --variant release
```

Key Integration Points:

1. Automatic Validation: npm run ios:release will
automatically run the Apple Review tests before building
2. Manual Validation: npm run validate:apple-review runs
the tests without building
3. Your Workflow: You can still use npx expo run:ios and
npx expo run:android as normal for development

The Error Handling Works With Your Current Setup:

- ✅ All error handling is already integrated into your
app via index.ts
- ✅ Works with both development (npx expo start) and
production builds
- ✅ No changes needed to your existing Expo
configuration
- ✅ Tests run in Node.js environment (no need for
device/simulator)

Your existing workflow is preserved, with the addition
of optional Apple Review validation before production
builds!