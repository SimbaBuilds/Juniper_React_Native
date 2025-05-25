#!/bin/bash

# Test script for OAuth deep link functionality
# Based on workflow improvement suggestions

echo "Testing deep link intent filter..."
echo "Make sure your Android device/emulator is connected and the app is installed"
echo ""

# Test the reverse client ID format (primary)
echo "Testing reverse client ID format: com.googleusercontent.apps.66333577628-jr6ag67m9spk0f96l61moim1jjaus4n7:/oauth2redirect"
adb shell am start -W -a android.intent.action.VIEW -d "com.googleusercontent.apps.66333577628-jr6ag67m9spk0f96l61moim1jjaus4n7:/oauth2redirect?code=test1234" com.anonymous.MobileJarvisNative

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