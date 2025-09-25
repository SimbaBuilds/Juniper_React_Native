#!/bin/sh

# Xcode Cloud CI Post-Clone Script
# This script runs after the repository is cloned in Xcode Cloud
# and before the build process starts

set -e

echo "🔧 Starting CI post-clone setup..."

# Disable User Script Sandboxing for CI builds
# This fixes the "Internal inconsistency error" in Xcode Cloud
echo "📱 Disabling User Script Sandboxing for Xcode Cloud..."
defaults write com.apple.dt.Xcode IDESkipUserScriptSandboxing -bool YES

# Navigate to iOS directory
cd ios

# Clean any existing Pods installation
echo "🧹 Cleaning existing Pods installation..."
rm -rf Pods
rm -rf Podfile.lock

# Install CocoaPods dependencies with clean install
echo "📦 Installing CocoaPods dependencies..."
pod install --clean-install --verbose

echo "✅ CI post-clone setup completed successfully!"