#!/bin/sh

# Xcode Cloud CI Post-Clone Script
# This script runs after the repository is cloned in Xcode Cloud
# and before the build process starts

set -e

echo "🔧 Starting CI post-clone setup..."
echo "📍 Current directory: $(pwd)"
echo "📂 Repository root: ${CI_PRIMARY_REPOSITORY_PATH:-/Volumes/workspace/repository}"

# Set repository path (use CI_PRIMARY_REPOSITORY_PATH if available, fallback to default)
REPO_ROOT="${CI_PRIMARY_REPOSITORY_PATH:-/Volumes/workspace/repository}"

# Install Node.js (required for React Native)
echo "📦 Installing Node.js..."
export HOMEBREW_NO_INSTALL_CLEANUP=TRUE
brew install node@20

# Add Node.js to PATH (node@20 is keg-only, not symlinked by default)
echo "🔧 Configuring Node.js PATH..."
export PATH="/usr/local/opt/node@20/bin:$PATH"

# Verify Node.js installation
echo "✅ Verifying Node.js installation..."
which node
node --version
which npm
npm --version

# Install yarn (package manager)
echo "📦 Installing yarn..."
brew install yarn

# Install CocoaPods
echo "📦 Installing CocoaPods..."
brew install cocoapods

# Navigate to repository root and install JavaScript dependencies
echo "📦 Installing JavaScript dependencies..."
cd "$REPO_ROOT"
yarn install

# Navigate to iOS directory
echo "📱 Navigating to iOS directory..."
cd "$REPO_ROOT/ios"

# Clean any existing Pods installation
echo "🧹 Cleaning existing Pods installation..."
rm -rf Pods
rm -rf build
rm -f Podfile.lock

# Install CocoaPods dependencies
echo "📦 Installing CocoaPods dependencies..."
pod install --repo-update

echo "✅ CI post-clone setup completed successfully!"