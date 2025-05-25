#!/bin/bash

# Test script for OAuth deep link functionality
# Based on workflow improvement suggestions

echo "Testing deep link intent filter..."
echo "Make sure your Android device/emulator is connected and the app is installed"
echo ""

# Test the new OAuth callback format
echo "Testing new OAuth callback format: mobilejarvisnative://oauth/callback"
adb shell am start -W -a android.intent.action.VIEW -d "mobilejarvisnative://oauth/callback?code=test1234" com.anonymous.MobileJarvisNative

echo ""
echo "Check your app logs to see if the deep link was received and processed correctly"
echo ""
echo "If the app didn't open, check:"
echo "1. App is installed: adb shell pm list packages | grep MobileJarvisNative"
echo "2. Intent filters are correct in AndroidManifest.xml"
echo "3. App.tsx deep link handler is properly set up"
echo ""
echo "To clear Chrome's app linking cache:"
echo "Go to Android Settings > Apps > Chrome > Open by default > Clear defaults" 