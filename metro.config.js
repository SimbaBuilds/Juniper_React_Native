const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

const config = getDefaultConfig(__dirname);

// Critical: Disable the experimental package exports causing issues
config.resolver.unstable_enablePackageExports = false;
config.resolver.unstable_conditionNames = [];

// Force explicit @babel/runtime resolution using direct path
config.resolver.extraNodeModules = {
  '@babel/runtime': path.join(__dirname, 'node_modules/@babel/runtime'),
};

// Enable babel runtime transformation
config.transformer.enableBabelRuntime = true;

module.exports = config;