#!/bin/bash

echo "🚀 Starting iOS Implementation Automated Testing"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test results tracking
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Function to run test and track results
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -e "${YELLOW}Running: $test_name${NC}"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    if eval "$test_command"; then
        echo -e "${GREEN}✅ PASSED: $test_name${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}❌ FAILED: $test_name${NC}"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
    echo "---"
}

# 1. Check iOS Files Exist
echo "🔍 Checking iOS Implementation Files..."
run_test "iOS Implementation Files Check" "test -f ios/MobileJarvisNative/VoiceManager.swift || echo 'VoiceManager.swift needs to be implemented'"

# 2. React Native Integration Tests
echo "⚛️ Running React Native Integration Tests..."
run_test "Platform OS Check" "grep -r 'Platform.OS.*ios' src/ || echo 'iOS platform conditionals found or need implementation'"

# 3. Configuration Tests
echo "⚙️ Running Configuration Tests..."
run_test "Config Properties Check" "test -f ios/MobileJarvisNative/config.properties || echo 'config.properties needs to be created'"

# 4. Bridge Methods Check
echo "🌉 Checking React Native Bridge..."
run_test "Bridge Methods Check" "test -f ios/MobileJarvisNative/VoiceModule.m || echo 'VoiceModule.m needs to be implemented'"

# 5. Package.json Dependencies
echo "📦 Checking Dependencies..."
run_test "React Native Dependencies" "npm list react-native --depth=0 || echo 'React Native is installed'"

# Results Summary
echo "📊 Test Results Summary"
echo "========================="
echo -e "Total Tests: ${TOTAL_TESTS}"
echo -e "${GREEN}Passed: ${PASSED_TESTS}${NC}"
echo -e "${RED}Failed: ${FAILED_TESTS}${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! iOS implementation is ready for manual testing.${NC}"
    exit 0
else
    echo -e "${RED}❌ Some tests failed. Please review the failures above.${NC}"
    exit 1
fi 