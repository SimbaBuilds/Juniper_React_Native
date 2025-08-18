#!/bin/bash

# Mobile Jarvis React Native - TAC Security Submission Package Creator
# This script creates a clean, secure zip file of the project for security review

set -e

PROJECT_NAME="Mobile_Jarvis_React_Native"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)
PACKAGE_NAME="${PROJECT_NAME}_TAC_Submission_${TIMESTAMP}.zip"
TEMP_DIR="/tmp/${PROJECT_NAME}_clean_${TIMESTAMP}"

echo "🔒 Creating TAC Security submission package for ${PROJECT_NAME}"
echo "📦 Package name: ${PACKAGE_NAME}"
echo "🗂️  Temporary directory: ${TEMP_DIR}"

# Create temporary directory
mkdir -p "${TEMP_DIR}"

# Copy project files to temp directory, excluding sensitive and unnecessary files
echo "📂 Copying project files (excluding sensitive data)..."

rsync -av \
  --exclude='.env' \
  --exclude='.env.*' \
  --exclude='*.pem' \
  --exclude='*.key' \
  --exclude='*.keystore' \
  --exclude='*.p12' \
  --exclude='*.jks' \
  --exclude='*.secrets' \
  --exclude='config.properties' \
  --exclude='local.properties' \
  --exclude='node_modules/' \
  --exclude='build/' \
  --exclude='android/app/build/' \
  --exclude='android/build/' \
  --exclude='ios/build/' \
  --exclude='ios/DerivedData/' \
  --exclude='ios/Pods/' \
  --exclude='ios/*.xcworkspace/xcuserdata/' \
  --exclude='ios/*.xcodeproj/xcuserdata/' \
  --exclude='ios/*.xcodeproj/project.xcworkspace/xcuserdata/' \
  --exclude='.git/' \
  --exclude='.expo/' \
  --exclude='.vscode/' \
  --exclude='.idea/' \
  --exclude='*.log' \
  --exclude='logs/' \
  --exclude='npm-debug.log*' \
  --exclude='yarn-debug.log*' \
  --exclude='yarn-error.log*' \
  --exclude='.DS_Store' \
  --exclude='Thumbs.db' \
  --exclude='*.tmp' \
  --exclude='*.temp' \
  --exclude='coverage/' \
  --exclude='junit.xml' \
  --exclude='.nyc_output/' \
  --exclude='android/app/release/' \
  --exclude='*.aab' \
  --exclude='*.apk' \
  --exclude='*.ipa' \
  . "${TEMP_DIR}/"

# Create a sanitized .env.example file for reference
echo "🔧 Creating sanitized environment configuration example..."
cat > "${TEMP_DIR}/.env.example" << 'EOF'
# Environment Configuration Example
# All sensitive values have been removed for security

MODE=DEV
EXPO_PUBLIC_SITE_URL='https://your-site.com'
EXPO_PUBLIC_PYTHON_BACKEND_URL='https://your-backend.com'
PROD_API_URL='https://your-production-api.com'

# Supabase Configuration (use your own values)
EXPO_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-anon-key

# OAuth Client IDs (secrets removed for security)
EXPO_PUBLIC_GOOGLE_CLIENT_ID=your-google-client-id
EXPO_PUBLIC_NOTION_CLIENT_ID=your-notion-client-id
EXPO_PUBLIC_SLACK_CLIENT_ID=your-slack-client-id
EXPO_PUBLIC_ZOOM_CLIENT_ID=your-zoom-client-id
EXPO_PUBLIC_TODOIST_CLIENT_ID=your-todoist-client-id
EXPO_PUBLIC_MICROSOFT_CLIENT_ID=your-microsoft-client-id
EXPO_PUBLIC_FITBIT_CLIENT_ID=your-fitbit-client-id
EXPO_PUBLIC_OURA_CLIENT_ID=your-oura-client-id

# Note: All CLIENT_SECRET values have been intentionally removed for security
EOF

# Create a README for the security review
echo "📋 Creating security review documentation..."
cat > "${TEMP_DIR}/SECURITY_REVIEW_README.md" << 'EOF'
# Mobile Jarvis React Native - TAC Security Review Package

## Overview
This package contains the Mobile Jarvis React Native application source code prepared for TAC Security review.

## Security Sanitization Applied
The following sensitive files and data have been removed or sanitized for security:

### Removed Files
- `.env` - Environment variables containing API keys and secrets
- `*.pem` - Private key files
- `*.key` - Key files
- `*.keystore` - Android keystores
- `private_key.pem` - Application private key
- `config.properties` - Native configuration files
- `local.properties` - Local Android properties

### Removed Directories
- `node_modules/` - Dependencies (can be restored with npm install)
- `build/` - Build artifacts
- `ios/Pods/` - iOS dependencies (can be restored with pod install)
- `logs/` - Application logs
- `.git/` - Git history

### Sanitized Files
- `.env.example` - Example environment configuration with secrets removed

## Project Structure
- `src/` - Main application source code
- `android/` - Android-specific code and configuration
- `ios/` - iOS-specific code and configuration
- `tests/` - Test suites
- `supabase/` - Backend functions
- `scripts/` - Utility scripts

## Security Features Implemented
- OAuth2 integration for third-party services
- Secure token storage using encrypted storage
- Input validation and sanitization
- Error boundary implementations
- Secure API communication

## To Restore Development Environment
1. Install dependencies: `npm install`
2. Configure environment variables in `.env`
3. For iOS: `cd ios && pod install`
4. For Android: Restore keystore files

## Contact
For questions about this security review package, please contact the development team.
EOF

# Verify no sensitive files are included
echo "🔍 Verifying no sensitive files are included..."
SENSITIVE_FILES=$(find "${TEMP_DIR}" -type f \( -name "*.pem" -o -name "*.key" -o -name "*.keystore" -o -name ".env" \) 2>/dev/null || true)
if [ -n "$SENSITIVE_FILES" ]; then
    echo "❌ ERROR: Sensitive files found in package:"
    echo "$SENSITIVE_FILES"
    echo "Cleaning up and exiting..."
    rm -rf "${TEMP_DIR}"
    exit 1
fi

# Create the zip package
echo "📦 Creating zip package..."
ORIGINAL_DIR=$(pwd)
cd "$(dirname "${TEMP_DIR}")"
zip -r "${PACKAGE_NAME}" "$(basename "${TEMP_DIR}")" -q

# Move package to original project directory
mv "${PACKAGE_NAME}" "${ORIGINAL_DIR}/"

# Clean up temporary directory
rm -rf "${TEMP_DIR}"

# Get package info
PACKAGE_SIZE=$(du -h "${PACKAGE_NAME}" | cut -f1)
FILE_COUNT=$(unzip -l "${PACKAGE_NAME}" | tail -1 | awk '{print $2}')

echo ""
echo "✅ TAC Security submission package created successfully!"
echo "📁 Package: ${PACKAGE_NAME}"
echo "📏 Size: ${PACKAGE_SIZE}"
echo "📄 Files: ${FILE_COUNT}"
echo ""
echo "🔒 Security verification:"
echo "   ✓ Environment variables removed"
echo "   ✓ Private keys removed"
echo "   ✓ Keystores removed"
echo "   ✓ Build artifacts removed"
echo "   ✓ Dependencies removed"
echo "   ✓ Git history removed"
echo ""
echo "📋 Package contents documented in SECURITY_REVIEW_README.md"
echo "🚀 Ready for TAC Security review submission"