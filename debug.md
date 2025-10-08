Running "expo doctor"
Running 17 checks on your project...
15/17 checks passed. 2 checks failed. Possible issues detected:
Use the --verbose flag to see more details about passed checks.
✖ Check Expo config for common issues
You have an app.json file in your project, but your app.config.js is not using the values from it.
Advice:
Remove the static app.json, or use its values in your dynamic app.config.js. Learn more: https://docs.expo.dev/workflow/configuration
✖ Check for app config fields that may not be synced in a non-CNG project
This project contains native project folders but also has native configuration properties in app.config.js, indicating it is configured to use Prebuild. When the android/ios folders are present, EAS Build will not sync the following properties: orientation, userInterfaceStyle, scheme, plugins, ios, android.
Advice:
Add '/ios' to your .gitignore file if you intend to use CNG / Prebuild. Learn more: https://docs.expo.dev/workflow/prebuild/#usage-with-eas-build
2 checks failed, indicating possible issues with the project.
Command "expo doctor" failed.
npx -y expo-doctor exited with non-zero code: 1