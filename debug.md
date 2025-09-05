⏺ We've exhaustively tried all standard debugging approaches. The issue persists despite:

  - Fixing version conflicts (@react-native/babel-preset 0.74.89 vs 0.73.21)
  - Complete environment resets (nuclear option)
  - Switching package managers (npm → yarn)
  - Multiple cache clears and dependency reinstalls
  - Metro resolver configuration attempts
  - Babel configuration modifications

  Next Steps (from debug.md):

  1. Fresh Project Migration - Create new Expo project and migrate code incrementally
  2. Expo SDK Upgrade - Consider upgrading to newer Expo SDK with Metro bundler fixes
  3. Alternative Bundler - Switch to Vite-based alternatives as last resort

  The @babel/runtime/helpers/interopRequireDefault file exists but Metro's module resolution system cannot locate it, indicating a deeper
  architectural incompatibility with the current dependency versions.