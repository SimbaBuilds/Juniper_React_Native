# EAS Updates Testing & Deployment Plan

## Current Status

### ✅ Completed Configuration
- [x] Installed `expo-updates@29.0.12`
- [x] Added EAS project configuration to `app.config.js`
  - Project ID: `a1ca031e-4068-49f1-84f5-ab872bc450dc`
  - Updates URL: `https://u.expo.dev/a1ca031e-4068-49f1-84f5-ab872bc450dc`
  - Runtime version: `"1.0.0"` (static)
- [x] Configured native files (iOS Expo.plist & Android AndroidManifest.xml)
- [x] Added channels to `eas.json`:
  - `development` → channel: "development"
  - `preview` → channel: "preview"
  - `production` → channel: "production"
- [x] Installed iOS pods including EXUpdates

### ⚠️ Current Issue
- Local debug builds fail on "Generate updates resources for expo-updates" script
- **Root cause**: EAS Updates is enabled but no embedded bundle exists for debug builds
- **Solution**: Disable updates for local debug builds (updates only needed for production)

---

## Testing Strategy

### 1. Development (Local Debug Builds)
**Status**: In progress - fixing build error

**Configuration**:
- Updates: **DISABLED** (prevents build errors)
- Use for: Daily development, debugging

**Action Items**:
- [ ] Set `EXUpdatesEnabled` to `false` in iOS Expo.plist
- [ ] Set `expo.modules.updates.ENABLED` to `false` in Android AndroidManifest.xml
- [ ] Verify local builds work

---

### 2. Preview Builds (EAS Internal Testing)
**Recommended for**: Testing updates before production

**Workflow**:
```bash
# Build preview with updates enabled
eas build --platform ios --profile preview
eas build --platform android --profile preview

# Make code changes, then publish update
eas update --branch preview --message "Feature: Added new UI"

# App will download update on next launch
```

**Benefits**:
- ✅ Fast iteration (no store approval)
- ✅ Updates enabled by default
- ✅ Test update flow end-to-end
- ✅ Distribute via Expo or direct install

---

### 3. Production (App Store/Play Store)
**For**: Public releases

**First-Time Setup**:
```bash
# Build production with updates enabled
eas build --platform ios --profile production
eas build --platform android --profile production

# Submit to stores
eas submit --platform ios --profile production
eas submit --platform android --profile production
```

**Publishing Updates**:
```bash
# After app is live in stores
eas update --branch production --message "Bug fix: Fixed login issue"
```

**Update Delivery**:
- Users launch app → Check for updates
- If update available → Download in background
- Apply on next app restart
- Runtime version must match (`"1.0.0"`)

---

## Validation Steps (Do Now)

### Step 1: Verify EAS Configuration
```bash
# Check project info
eas project:info

# Validate app.config.js
npx expo config --type introspect
```

### Step 2: Test Update Publishing
```bash
# Publish test update (validates EAS setup)
eas update --branch preview --message "Initial test update"

# View on dashboard
eas update:list --branch preview
```

### Step 3: Create Preview Build
```bash
# When ready to test updates
eas build --platform ios --profile preview
```

---

## Runtime Version Strategy

**Current Setup**: Static `"1.0.0"`

### When to Update Runtime Version

**✅ Keep Same (`"1.0.0"`) For**:
- JS-only changes (UI, logic, bug fixes)
- Asset changes (images, fonts)
- Configuration changes

**🔄 Update Runtime Version For**:
- Adding/removing native modules
- Native code changes (iOS/Android)
- Breaking changes to JS-native interface
- New app version with incompatible changes

**Example**:
```javascript
// When releasing v1.1.0 with native changes
runtimeVersion: "1.1.0"  // Update this manually
version: "1.1.0"
```

---

## Important Concepts

### Embedded Bundle
- JavaScript code **baked into the app binary** at build time
- Downloaded once from App Store/Play Store
- Acts as fallback if updates fail or app is offline

### OTA Update
- JavaScript code **downloaded from EAS servers** at runtime
- Applied on app launch
- Replaces embedded bundle in memory
- Requires matching runtime version

### Update Flow
1. App launches → Runs embedded bundle
2. Checks EAS → "Any updates for runtime 1.0.0?"
3. If yes → Downloads update → Applies on next restart
4. If no/offline → Continues with embedded bundle

---

## Key Files

### Configuration
- `app.config.js` - EAS project ID, updates URL, runtime version
- `eas.json` - Build profiles and channels
- `ios/MobileJarvisNative/Supporting/Expo.plist` - iOS updates config
- `android/app/src/main/AndroidManifest.xml` - Android updates config

### Commands Reference
```bash
# Publishing updates
eas update --branch <channel> --message "<message>"

# Viewing updates
eas update:list --branch <channel>

# Building with updates
eas build --platform <ios|android> --profile <preview|production>

# Project info
eas project:info
```

---

## Next Steps

1. **Immediate** (Today):
   - [ ] Fix debug build error (disable updates for debug)
   - [ ] Verify EAS configuration
   - [ ] Publish test update to validate setup

2. **Testing Phase** (This Week):
   - [ ] Create EAS preview build
   - [ ] Test update flow: build → change → publish → verify
   - [ ] Validate both iOS and Android

3. **Production Release** (When Ready):
   - [ ] Build production binaries with updates enabled
   - [ ] Submit to App Store & Play Store
   - [ ] Document update publishing workflow for team
   - [ ] Test updates with production builds

---

## Notes

- **Version Types**:
  - App Version (1.0.0) = User-facing version in stores
  - Build Number = Internal identifier (auto-incremented)
  - Runtime Version (1.0.0) = EAS Updates compatibility key (separate system)

- **Updates are JS-only**: Native code changes require new app store builds
- **Updates are automatic by default**: App checks on launch, downloads in background
- **Custom update UI**: Can implement using `expo-updates` hooks if needed
