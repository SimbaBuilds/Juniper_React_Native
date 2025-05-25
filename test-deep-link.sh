#!/bin/bash

# Test script for OAuth deep link functionality
# Based on workflow improvement suggestions

echo "🧪 Testing deep link intent filter..."
echo "Make sure your Android device/emulator is connected and the app is installed"
echo ""

# Check if adb is available
if ! command -v adb &> /dev/null; then
    echo "❌ adb not found. Please install Android SDK and add adb to PATH"
    exit 1
fi

# Check if device is connected
if ! adb devices | grep -q "device$"; then
    echo "❌ No Android device/emulator found. Please connect a device or start an emulator"
    exit 1
fi

# Test app installation
echo "📱 Checking if app is installed..."
if adb shell pm list packages | grep -q "com.anonymous.MobileJarvisNative"; then
    echo "✅ App is installed"
else
    echo "❌ App not found. Please install the app first:"
    echo "   npx expo run:android --device"
    exit 1
fi

echo ""
echo "🔗 Testing reverse client ID format (primary):"
echo "URL: com.googleusercontent.apps.66333577628-jr6ag67m9spk0f96l61moim1jjaus4n7:/oauth2redirect?code=test1234"

# Start the app with the test URL
adb shell am start -W -a android.intent.action.VIEW \
  -d "com.googleusercontent.apps.66333577628-jr6ag67m9spk0f96l61moim1jjaus4n7:/oauth2redirect?code=test1234" \
  com.anonymous.MobileJarvisNative

echo ""
echo "✅ Test command sent!"
echo ""
echo "📋 What to check:"
echo "1. Did the app open? (If not, intent filter may be wrong)"
echo "2. Check console logs for '=== DEEP LINK RECEIVED ===' message"
echo "3. Look for URL processing logs in the app"
echo ""
echo "🔍 To view logs in real-time:"
echo "   adb logcat | grep -E '(ReactNativeJS|MobileJarvis)'"
echo ""
echo "🛠 If the app didn't open, check:"
echo "1. App is running: adb shell am force-stop com.anonymous.MobileJarvisNative && adb shell monkey -p com.anonymous.MobileJarvisNative 1"
echo "2. Intent filters in AndroidManifest.xml"
echo "3. Package name matches exactly"
echo ""

# Optional: Show current running apps
echo "📱 Current app processes:"
adb shell ps | grep "MobileJarvis" || echo "   No MobileJarvis processes found" 