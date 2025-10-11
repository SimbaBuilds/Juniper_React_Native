Scenarios:

  1. AppDelegate might be compiled 
  differently in the Release build
  2. NSLog filtering - Some build setting or
   entitlement might be suppressing
  AppDelegate logs specifically
  3. Timing issue - AppDelegate logs might
  be happening before the logging system is
  ready (though this is unlikely)
  4. The wrong AppDelegate - Expo might be
  using its own AppDelegate wrapper that
  bypasses your custom one


    Look at line 5 of AppDelegate.h:

  @interface AppDelegate : EXAppDelegateWrapper

  Your AppDelegate inherits from EXAppDelegateWrapper (Expo's wrapper), not
  RCTAppDelegate directly. This is Scenario 4: Expo is using its own 
  AppDelegate wrapper.

  Here's what's likely happening:

  1. EXAppDelegateWrapper might be overriding or intercepting
  didFinishLaunchingWithOptions
  2. Your NSLog statements run, but Expo's wrapper might be redirecting or 
  filtering logging output during its initialization phase
  3. The logs from ConfigManager/AudioManager/VoiceModule appear because
  they happen AFTER React Native and Expo are fully initialized