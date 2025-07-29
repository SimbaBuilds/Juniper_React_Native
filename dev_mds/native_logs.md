default	03:54:40.463620-0500	MobileJarvisNative	🔐 VoiceModule: requestPermissions called from React Native
default	03:54:40.471177-0500	MobileJarvisNative	🔐 VoiceModule: Permissions result: GRANTED
default	03:54:40.471836-0500	MobileJarvisNative	🎙️ VoiceModule: startContinuousConversation called - iOS direct listening mode
default	03:54:40.471870-0500	MobileJarvisNative	🎙️ VoiceManager: Starting speech recognition
default	03:54:40.472265-0500	MobileJarvisNative	🔐 VoiceManager: Speech recognition auth status: 3
default	03:54:45.071033-0500	MobileJarvisNative	⏰ VoiceManager: Starting silence timer with timeout: 5.000000 seconds
default	03:54:45.071178-0500	MobileJarvisNative	🎙️ VoiceModule: Speech result received - text: How, isFinal: NO
default	03:54:45.258836-0500	MobileJarvisNative	⏰ VoiceManager: Starting silence timer with timeout: 5.000000 seconds
default	03:54:45.258898-0500	MobileJarvisNative	🎙️ VoiceModule: Speech result received - text: How are, isFinal: NO
default	03:54:45.334440-0500	MobileJarvisNative	⏰ VoiceManager: Starting silence timer with timeout: 5.000000 seconds
default	03:54:45.334496-0500	MobileJarvisNative	🎙️ VoiceModule: Speech result received - text: How are you, isFinal: NO
default	03:54:48.623815-0500	MobileJarvisNative	🔵 VoiceManager: About to call reactNativeApiCallback
default	03:54:48.623840-0500	MobileJarvisNative	🔵 VoiceManager: Callback is nil: NO
default	03:54:48.623887-0500	MobileJarvisNative	🔵 VoiceManager: Calling React Native API callback with text: How are you and requestId: 758389C2-D679-494D-892A-E0C8236613CD
default	03:54:48.623965-0500	MobileJarvisNative	🔵 VoiceModule: About to emit processTextFromNative event
default	03:54:48.624520-0500	MobileJarvisNative	🔵 VoiceModule: hasListeners: YES
default	03:54:48.624761-0500	MobileJarvisNative	🔵 VoiceModule: processTextFromNative event emitted successfully
default	03:54:48.624819-0500	MobileJarvisNative	🔵 VoiceManager: React Native API callback called successfully
default	03:54:48.625161-0500	MobileJarvisNative	⏰ VoiceManager: Starting silence timer with timeout: 5.000000 seconds
default	03:54:48.625474-0500	MobileJarvisNative	🎙️ VoiceModule: Speech result received - text: How are you, isFinal: NO
error	03:54:55.741816-0500	MobileJarvisNative	Exception 'handleApiResponse:response:resolve:rejecter: is not a recognized Objective-C method.' was thrown while invoking handleApiResponse on target VoiceModule with params (
    "758389C2-D679-494D-892A-E0C8236613CD",
    "I'm doing well, thank you for asking! I'm here and ready to help you with whatever you need. How are you doing today?",
    3102,
    3103
)
callstack: (
	0   CoreFoundation                      0x000000019412b228 7821F73C-378B-3A10-BE90-EF526B7DBA93 + 1155624
	1   libobjc.A.dylib                     0x00000001915c5abc objc_exception_throw + 88
	2   Foundation                          0x0000000193429810 34DE055D-8683-380A-9198-C3347211D13D + 7989264
	3   MobileJarvisNative.debug.dylib      0x0000000106ec0348 -[RCTModuleMethod processMethodSignature] + 840
	4   MobileJarvisNative.debug.dylib      0x0000000106ec75f0 -[RCTModuleMethod invokeWithBridge:module:arguments:] + 140
	5   MobileJarvisNative.debug.dylib      0x0000000106ecc05c _ZN8facebook5reactL11invokeInnerEP9RCTBridgeP13<…>
