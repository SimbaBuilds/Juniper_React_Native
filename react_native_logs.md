› Building app...
Configuration on demand is an incubating feature.

FAILURE: Build failed with an exception.

* Where:
Settings file '/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/android/settings.gradle' line: 21

* What went wrong:
Error resolving plugin [id: 'com.facebook.react.settings']
> Could not read workspace metadata from /Users/cameronhightower/.gradle/caches/8.13/kotlin-dsl/accessors/cbd2677dac5813b0a8ba9dfa391abe66/metadata.bin

* Try:
> Run with --stacktrace option to get the stack trace.
> Run with --info or --debug option to get more log output.
> Run with --scan to get full insights.
> Get more help at https://help.gradle.org.

BUILD FAILED in 5s
Error: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/android/gradlew app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=arm64-v8a,armeabi-v7a exited with non-zero code: 1
Error: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/android/gradlew app:assembleDebug -x lint -x test --configure-on-demand --build-cache -PreactNativeDevServerPort=8081 -PreactNativeArchitectures=arm64-v8a,armeabi-v7a exited with non-zero code: 1
    at ChildProcess.completionListener (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/spawn-async/src/spawnAsync.ts:67:13)
    at Object.onceWrapper (node:events:634:26)
    at ChildProcess.emit (node:events:519:28)
    at maybeClose (node:internal/child_process:1105:16)
    at Process.ChildProcess._handle.onexit (node:internal/child_process:305:5)
    ...
    at spawnAsync (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/spawn-async/src/spawnAsync.ts:28:21)
    at spawnGradleAsync (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/cli/src/start/platforms/android/gradle.ts:134:28)
    at assembleAsync (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/cli/src/start/platforms/android/gradle.ts:83:16)
    at runAndroidAsync (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@expo/cli/src/run/android/runAndroidAsync.ts:62:24)
cameronhightower@Mac Mobile_Jarvis_React_Native % 