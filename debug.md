› Installing /Users/cameronhightower/Library/Developer/Xcode/DerivedData/MobileJarvisNative-bevexqwvllxgjobwowrmbjzmsugf/Build/Products/Debug-iphoneos/MobileJarvisNative.app
metro-file-map: Watchman crawl failed. Retrying once with node crawler.
  Usually this happens when watchman isn't running. Create an empty `.watchmanconfig` file in your project's root folder or initialize a git or hg repository in your project.
  Error: Watchman error: A non-recoverable condition has triggered.  Watchman needs your help!
The triggering condition was at timestamp=1760496661: opendir(/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/android/.cxx/Debug/v304h1h3/x86/src/main/cpp/worklets/CMakeFiles/worklets.dir/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/Common/cpp/worklets) -> Too many open files
All requests will continue to fail with this message until you resolve
the underlying problem.  You will find more information on fixing this at
https://facebook.github.io/watchman/docs/troubleshooting.html#poison-opendir. Make sure watchman is running for this project. See https://facebook.github.io/watchman/docs/troubleshooting.
⠹ VerifyingApplication 40%/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/cli/build/src/utils/errors.js:130
    throw error;
    ^

Error: A non-recoverable condition has triggered.  Watchman needs your help!
The triggering condition was at timestamp=1760496661: opendir(/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/android/.cxx/Debug/v304h1h3/x86/src/main/cpp/worklets/CMakeFiles/worklets.dir/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/Common/cpp/worklets) -> Too many open files
All requests will continue to fail with this message until you resolve
the underlying problem.  You will find more information on fixing this at
https://facebook.github.io/watchman/docs/troubleshooting.html#poison-opendir

    at ChildProcess.<anonymous> (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/fb-watchman/index.js:212:21)
    at ChildProcess.emit (node:events:519:28)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5)
Emitted 'error' event at:
    at WatchmanWatcher.emitError (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/metro-file-map/src/watchers/AbstractWatcher.js:70:19)
    at Client.<anonymous> (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/metro-file-map/src/watchers/WatchmanWatcher.js:70:12)
    at Client.emit (node:events:519:28)
    at ChildProcess.<anonymous> (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/fb-watchman/index.js:219:12)
    at ChildProcess.emit (node:events:519:28)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5) {
  watchmanResponse: {
    version: '2025.08.18.00',
    error: 'A non-recoverable condition has triggered.  Watchman needs your help!\n' +
      'The triggering condition was at timestamp=1760496661: opendir(/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/android/.cxx/Debug/v304h1h3/x86/src/main/cpp/worklets/CMakeFiles/worklets.dir/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/react-native-reanimated/Common/cpp/worklets) -> Too many open files\n' +
      'All requests will continue to fail with this message until you resolve\n' +
      'the underlying problem.  You will find more information on fixing this at\n' +
      'https://facebook.github.io/watchman/docs/troubleshooting.html#poison-opendir\n'
  }
}

Node.js v20.13.0