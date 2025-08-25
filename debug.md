› Packaging expo-file-system Pods/ExpoFileSystem » libExpoFileSystem.a
› Executing expo-file-system Pods/ExpoFileSystem » Copy generated compatibility header

❌  (node_modules/expo-dev-menu/ios/DevMenuViewController.swift:64:23)

  62 | 
  63 |   private func initialProps() -> [String: Any] {
> 64 |     let isSimulator = TARGET_IPHONE_SIMULATOR > 0
     |                       ^ cannot find 'TARGET_IPHONE_SIMULATOR' in scope
  65 |     
  66 |     return [
  67 |       "showOnboardingView": manager.shouldShowOnboarding(),

› Compiling expo-crypto Pods/ExpoCrypto » ExpoCrypto-dummy.m