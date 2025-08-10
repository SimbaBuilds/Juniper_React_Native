# Enhanced Plan: Convert Bundle Identifier from com.anonymous.MobileJarvisNative to com.hightowerai.MobileJarvisNative

## Step-by-Step Implementation Guide

### 1. Update Core Configuration Files

#### app.config.js
**How:** Use the Edit tool to replace:
- Line 22: `bundleIdentifier: "com.anonymous.MobileJarvisNative"` → `bundleIdentifier: "com.hightowerai.MobileJarvisNative"`
- Line 34: `package: "com.anonymous.MobileJarvisNative"` → `package: "com.hightowerai.MobileJarvisNative"`

#### android/app/build.gradle
**How:** Use the Edit tool to replace:
- Line 86: `namespace 'com.anonymous.MobileJarvisNative'` → `namespace 'com.hightowerai.MobileJarvisNative'`
- Line 88: `applicationId 'com.anonymous.MobileJarvisNative'` → `applicationId 'com.hightowerai.MobileJarvisNative'`

#### ios/MobileJarvisNative.xcodeproj/project.pbxproj
**How:** Use the Edit tool with `replace_all: true` to replace all occurrences:
- `PRODUCT_BUNDLE_IDENTIFIER = com.anonymous.MobileJarvisNative;` → `PRODUCT_BUNDLE_IDENTIFIER = com.hightowerai.MobileJarvisNative;`

### 2. Update Manifest and Info Files

#### android/app/src/main/AndroidManifest.xml
**How:** Use the Edit tool to update line 36:
- `<data android:scheme="com.anonymous.MobileJarvisNative"/>` → `<data android:scheme="com.hightowerai.MobileJarvisNative"/>`

#### ios/MobileJarvisNative/Info.plist
**How:** Use the Edit tool to update line 31:
- `<string>com.anonymous.MobileJarvisNative</string>` → `<string>com.hightowerai.MobileJarvisNative</string>`

### 3. Android Package Migration

#### Step 3.1: Create New Directory Structure
**How:** Use Bash commands:
```bash
mkdir -p android/app/src/main/java/com/hightowerai/MobileJarvisNative/{voice,wakeword,utils,permissions,app_config}
```

#### Step 3.2: Move Files and Update Packages
**How:** For each subdirectory, use a combination of:
1. Bash mv commands to move files
2. Edit tool to update package declarations

**Example for voice modules:**
```bash
# Move all voice module files
mv android/app/src/main/java/com/anonymous/MobileJarvisNative/voice/*.kt \
   android/app/src/main/java/com/hightowerai/MobileJarvisNative/voice/
```

Then use Edit tool on each moved file to replace:
- `package com.anonymous.MobileJarvisNative.voice` → `package com.hightowerai.MobileJarvisNative.voice`

Repeat for: wakeword, utils, permissions, app_config directories

#### Step 3.3: Move Root Level Files
**How:** Move and update MainActivity.kt, MainApplication.kt, ConfigManager.kt:
```bash
mv android/app/src/main/java/com/anonymous/MobileJarvisNative/*.kt \
   android/app/src/main/java/com/hightowerai/MobileJarvisNative/
```

Then update package declarations in each file.

#### Step 3.4: Update Import Statements
**How:** Use Grep to find all imports, then Edit tool with `replace_all: true`:
- Search pattern: `import com\.anonymous\.MobileJarvisNative`
- Replace with: `import com.hightowerai.MobileJarvisNative`

### 4. Update JavaScript/TypeScript References
**How:** Use Grep to find JS/TS files containing the old identifier:
```bash
grep -r "com\.anonymous\.MobileJarvisNative" src/ --include="*.ts" --include="*.tsx"
```

Then use Edit tool to update each reference found.

### 5. Clean and Verify

#### Clean Build Directories
**How:** Use Bash commands:
```bash
# iOS
cd ios && rm -rf build/ && pod deintegrate && pod install

# Android
cd android && ./gradlew clean

# React Native
npx react-native clean
```

#### Remove Old Package Directory
**How:** After verifying all files are moved:
```bash
rm -rf android/app/src/main/java/com/anonymous
```

### 6. Update Documentation and Other References
**How:** Use Grep to find and update references in:
- README files
- Documentation
- Comments in code
- apple-app-site-association file

## Verification Steps

1. Run `npx react-native info` to verify configuration
2. Build for both platforms to ensure no compilation errors
3. Test deep linking functionality with new bundle ID
4. Verify OAuth redirects still work with the new identifier

## Important Notes

- This change will affect app store listings if the app is already published
- Users with existing installations may need to reinstall the app
- Any backend services referencing the bundle ID need updating
- Push notification certificates may need regeneration