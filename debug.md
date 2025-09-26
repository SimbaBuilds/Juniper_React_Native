› Executing MobileJarvisNative » [Expo] Configure project
› Copying   ./PrivacyInfo.xcprivacy ➜ ios/MobileJarvisNative/PrivacyInfo.xcprivacy
› Compiling MobileJarvisNative » SplashScreen.storyboard

❌  (ios/MobileJarvisNative/AppDelegate.swift:55:15)

  53 | 
  54 |   // Background URL Session completion handler
> 55 |   public func application(
     |               ^ overriding declaration requires an 'override' keyword
  56 |     _ application: UIApplication,
  57 |     handleEventsForBackgroundURLSession identifier: String,
  58 |     completionHandler: @escaping () -> Void

    Run script build phase '[CP-User] [Hermes] Replace Hermes for the right configuration, if needed' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'hermes-engine' from project 'Pods')

› 1 error(s), and 17 warning(s)

CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.