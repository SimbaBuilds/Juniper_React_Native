#!/bin/bash

echo "🔍 Pre-Manual Testing Validation"
echo "================================="

# Check if all required files exist
echo "Checking iOS implementation files..."

REQUIRED_FILES=(
    "ios/MobileJarvisNative/VoiceManager.swift"
    "ios/MobileJarvisNative/TTSManager.swift"
    "ios/MobileJarvisNative/AudioManager.swift"
    "ios/MobileJarvisNative/DeepgramAPI.swift"
    "ios/MobileJarvisNative/WhisperAPI.swift"
    "ios/MobileJarvisNative/VoiceModule.swift"
    "ios/MobileJarvisNative/VoiceModule.m"
    "ios/MobileJarvisNative/ConfigManager.swift"
    "ios/MobileJarvisNative/config.properties"
)

MISSING_FILES=()

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
        MISSING_FILES+=("$file")
    fi
done

if [ ${#MISSING_FILES[@]} -gt 0 ]; then
    echo -e "\n❌ Missing required files. Implementation incomplete."
    echo "Missing files:"
    printf '%s\n' "${MISSING_FILES[@]}"
    exit 1
fi

# Validate configuration
echo -e "\nValidating configuration..."
if [ -f "ios/MobileJarvisNative/config.properties" ]; then
    REQUIRED_CONFIGS=(
        "max.listening.duration"
        "silence.timeout"
        "deepgram.api.key"
        "openai.api.key"
        "default.stt.provider"
        "default.tts.provider"
    )
    
    for config in "${REQUIRED_CONFIGS[@]}"; do
        if grep -q "$config" ios/MobileJarvisNative/config.properties; then
            echo "✅ $config"
        else
            echo "❌ $config (MISSING FROM CONFIG)"
        fi
    done
fi

# Check React Native platform conditionals
echo -e "\nChecking Platform.OS conditionals..."
if grep -r "Platform.OS === 'ios'" src/ > /dev/null; then
    echo "✅ iOS platform conditionals found"
else
    echo "❌ No iOS platform conditionals found"
fi

# Validate bridge methods
echo -e "\nValidating React Native bridge methods..."
BRIDGE_METHODS=(
    "startListening"
    "stopListening"
    "handleApiResponse"
    "setSTTProvider"
    "setTTSProvider"
    "getVoiceSystemStatus"
)

if [ -f "ios/MobileJarvisNative/VoiceModule.m" ]; then
    for method in "${BRIDGE_METHODS[@]}"; do
        if grep -q "$method" ios/MobileJarvisNative/VoiceModule.m; then
            echo "✅ $method bridge method"
        else
            echo "❌ $method bridge method (MISSING)"
        fi
    done
else
    echo "❌ VoiceModule.m not found"
fi

echo -e "\n🎯 Implementation Status: READY FOR MANUAL TESTING"
echo "Next steps:"
echo "1. Run: npx react-native run-ios"
echo "2. Test voice functionality in simulator"
echo "3. Test provider switching in settings"
echo "4. Test error handling scenarios"
echo "5. Test audio session management" 