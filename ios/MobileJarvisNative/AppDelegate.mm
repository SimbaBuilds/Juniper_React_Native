#import "AppDelegate.h"

#import <React/RCTBundleURLProvider.h>
#import <React/RCTLinkingManager.h>

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
  self.moduleName = @"main";

  // You can add your custom initial props in the dictionary below.
  // They will be passed down to the ViewController used by React Native.
  self.initialProps = @{};

  // Log EAS Updates configuration
  NSString *expoPlistPath = [[NSBundle mainBundle] pathForResource:@"Expo" ofType:@"plist"];
  if (expoPlistPath) {
    NSDictionary *expoConfig = [NSDictionary dictionaryWithContentsOfFile:expoPlistPath];

    NSLog(@"========== EAS Updates Configuration ==========");
    NSLog(@"Updates Enabled: %@", expoConfig[@"EXUpdatesEnabled"] ? @"YES" : @"NO");
    NSLog(@"Updates URL: %@", expoConfig[@"EXUpdatesURL"] ?: @"NOT SET");
    NSLog(@"Runtime Version: %@", expoConfig[@"EXUpdatesRuntimeVersion"] ?: @"NOT SET");
    NSLog(@"Check On Launch: %@", expoConfig[@"EXUpdatesCheckOnLaunch"] ?: @"NOT SET");
    NSLog(@"Launch Wait MS: %@", expoConfig[@"EXUpdatesLaunchWaitMs"] ?: @"NOT SET");

    NSDictionary *requestHeaders = expoConfig[@"EXUpdatesRequestHeaders"];
    if (requestHeaders) {
      NSString *channelName = requestHeaders[@"expo-channel-name"];
      NSLog(@"Update Channel: %@", channelName ?: @"NOT SET");
    } else {
      NSLog(@"Update Channel: NOT CONFIGURED (no EXUpdatesRequestHeaders)");
    }
    NSLog(@"===============================================");
  } else {
    NSLog(@"⚠️ WARNING: Expo.plist not found!");
  }

  return [super application:application didFinishLaunchingWithOptions:launchOptions];
}

// Linking API
- (BOOL)application:(UIApplication *)application openURL:(NSURL *)url options:(NSDictionary<UIApplicationOpenURLOptionsKey,id> *)options {
  return [super application:application openURL:url options:options] || [RCTLinkingManager application:application openURL:url options:options];
}

// Universal Links
- (BOOL)application:(UIApplication *)application continueUserActivity:(nonnull NSUserActivity *)userActivity restorationHandler:(nonnull void (^)(NSArray<id<UIUserActivityRestoring>> * _Nullable))restorationHandler {
  BOOL result = [RCTLinkingManager application:application continueUserActivity:userActivity restorationHandler:restorationHandler];
  return [super application:application continueUserActivity:userActivity restorationHandler:restorationHandler] || result;
}

// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
- (void)application:(UIApplication *)application didRegisterForRemoteNotificationsWithDeviceToken:(NSData *)deviceToken
{
  return [super application:application didRegisterForRemoteNotificationsWithDeviceToken:deviceToken];
}

// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
- (void)application:(UIApplication *)application didFailToRegisterForRemoteNotificationsWithError:(NSError *)error
{
  return [super application:application didFailToRegisterForRemoteNotificationsWithError:error];
}

// Explicitly define remote notification delegates to ensure compatibility with some third-party libraries
- (void)application:(UIApplication *)application didReceiveRemoteNotification:(NSDictionary *)userInfo fetchCompletionHandler:(void (^)(UIBackgroundFetchResult))completionHandler
{
  return [super application:application didReceiveRemoteNotification:userInfo fetchCompletionHandler:completionHandler];
}

@end
