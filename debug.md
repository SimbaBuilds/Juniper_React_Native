default	21:02:21.797987-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.93609e+06 touches: {(
    <UITouch: 0x86c0d9880> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x86bc42800; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; labelAccessoryType: recently updated; isTouchDownInIcon: YES>; location in window: {137, 603.33332824707031}; previous location in window: {137, 603.33332824707031}; location in view: {17, 46.333328247070312}; previous location in view: {17, 46.333328247070312}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x869f62440; baseClass = UITapGestureRecognizer; state = Possible; view =
default	21:02:21.907712-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	21:02:21.910109-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	21:02:21.917217-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:02:21.917273-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:02:21.917404-0500	SpringBoard	Created <FBWorkspace: 0x86cca8aa0; <FBApplicationProcess: 0x868f40480; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	21:02:21.917490-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	21:02:21.918456-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	21:02:21.918656-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-2065085 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	21:02:21.918766-0500	runningboardd	Assertion 33-34-2065085 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	21:02:21.920957-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:02:21.920980-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	21:02:21.926173-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.005007 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	21:02:21.926229-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde96cf00>)
default	21:02:21.926285-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbdec869a0> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdeb46670> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdeb44ed0> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdeb47030> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdeb446f0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbdec873c0> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdeb46a30> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbdec85980> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdeb47fc0> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/6EFB477C-C073-4D46-BD13-2A18DFC8CE93/tmp" }
		"HOME" => <string: 0xbdeb461c0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/6EFB477C-C073-4D46-BD13-2A18DFC8CE93" }
		"CFFIXED_USER_HOME" => <string: 0xbdeb45380> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/6EFB477C-C073-4D46-BD13-2A18DFC8CE93" }
	}
	"_AdditionalProperties" => <dictionary: 0xbdec85b00> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbdec871e0> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbdec87a20> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdeb45350> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdeb450e0> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdeb45e90> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[04d1][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdeb45440> { count = 1, capacity = 8, contents =
		0: <string: 0xbdeb45d40> { length = 113, contents = "/var/containers/Bundle/Application/08FB358D-28C3-4CE6-B3EA-709697D9452F/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdeb445a0> { length = 113, contents = "/var/containers/Bundle/Application/08FB358D-28C3-4CE6-B3EA-709697D9452F/MobileJarvisNative.app/MobileJarvisNative" }
}
default	21:02:21.927359-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	21:02:21.928702-0500	SpringBoard	_updatePreferences <Switcher>: {
    activationPolicyForParticipantsBelow: AtMostBG;
    homeAffordanceDrawingSuppression: Default;
    associatedSceneIdentifiersToSuppressInSystemAperture: (
        sceneID:com.hightowerai.MobileJarvisNative-default
    );
    associatedBundleIdentifiersToSuppressInSystemAperture: (
        com.hightowerai.MobileJarvisNative
    );
    allowsDimmingWhenForegroundInactive: No;
}
default	21:02:21.931936-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x86c0db9c0; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	21:02:21.939394-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857866e00; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581d24c0; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 9:02:21 PM CDT;}
default	21:02:21.939502-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857866840 10-08-2025 21:02:21, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:02:21.942393-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x8695b1800; type: MainTransition; transitionID: DC27441C-13E9-44FC-B9E4-EF375F769277; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:02:21.942423-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x868407e70> {
    <SBSwitcherModifierEventResponse: 0x86eecaeb0> {
	    <SBTimerEventSwitcherEventResponse: 0x86eecadf0; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86eecb480>;
	};
    <SBSwitcherModifierEventResponse: 0x86cc41620> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86ae0a340; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86c7ad890; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86ae0a680; visible: YES; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x869ac00f0; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	21:02:21.945955-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:02:21.947761-0500	backboardd	new deferring rules for pid:34: [
    [34-641A]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-6418]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9578>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	21:02:21.953692-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86ad10780; type: MainTransition; transitionID: DC27441C-13E9-44FC-B9E4-EF375F769277; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:02:21.957824-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86658a6e0; type: SceneReady; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865496ae0; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x8676bb3f0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:02:21.959163-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:02:21.959247-0500	SpringBoard	Did not create a new process: A pending process for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> already exists.
default	21:02:21.974335-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	21:02:21.987850-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] Memory Limits: active 2098 inactive 2098
 <private>
default	21:02:21.987879-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] This process will be managed.
default	21:02:21.987915-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.988194-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.988229-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-2065086 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:02:21.988302-0500	runningboardd	Assertion 33-33-2065086 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as active
default	21:02:21.988399-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:02:21.989159-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Bootstrap success!
default	21:02:21.989234-0500	SpringBoard	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.989264-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Setting process task state to: Running
default	21:02:21.989289-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Setting process visibility to: Foreground
default	21:02:21.989552-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] reported to RB as running
default	21:02:21.989742-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:21.989947-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] Set jetsam priority to 100 [0] flag[1]
default	21:02:21.989973-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] Resuming task.
default	21:02:21.990070-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] Set darwin role to: UserInteractiveFocal
default	21:02:21.990540-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Registering event dispatcher after bootstrap
default	21:02:21.990797-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:02:21.991064-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Initial launch assertion state: ForegroundFocal.
default	21:02:21.991652-0500	SpringBoard	Adding: <FBApplicationProcess: 0x868f40480; app<com.hightowerai.MobileJarvisNative>:9740(v89BA9)>
default	21:02:21.992928-0500	CommCenter	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.992980-0500	CommCenter	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:21.993474-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] set Memory Limits to Soft Active (2098)
default	21:02:21.993554-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] Set Carplay mode to: 0
default	21:02:21.993715-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] visiblity is yes
default	21:02:21.994071-0500	healthd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.994102-0500	healthd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:21.994442-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:02:21.994812-0500	kernel	/private/var/containers/Bundle/Application/08FB358D-28C3-4CE6-B3EA-709697D9452F/MobileJarvisNative.app/MobileJarvisNative[9740] ==> container
error	21:02:21.997023-0500	kernel	Sandbox: MobileJarvisNative(9740) deny(1) sysctl-read kern.bootargs
default	21:02:21.998303-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:21.999106-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86ec95530.
default	21:02:21.999207-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Registered new scene: <FBUIApplicationWorkspaceScene: 0x867e16700; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	21:02:21.999433-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	21:02:21.999460-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Workspace interruption policy did change: reconnect
default	21:02:22.000319-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x868486060 count:1
default	21:02:22.000472-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	21:02:22.001358-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	21:02:22.001590-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-2065088 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	21:02:22.001734-0500	runningboardd	Assertion 33-34-2065088 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as inactive as originator process has not exited
default	21:02:22.002928-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:9740 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9740]; recentSceneIdentityTokensByPID: {9740: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:02:22.003093-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:9740 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9740]; recentSceneIdentityTokensByPID: {9740: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:02:22.003846-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2065085:FBApplicationProcess" age:00:00:00  id:51539641223 [System: SysAct]
default	21:02:22.005696-0500	SpringBoard	Now tracking: <FBScene: 0x867b03200; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:02:22.006100-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	21:02:22.006227-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	21:02:22.006319-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	21:02:22.006392-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	21:02:22.006464-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	21:02:22.006562-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	21:02:22.009397-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x867568c00; pid: 9740; taskState: Running; visibility: Foreground>
default	21:02:22.011043-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	21:02:22.014683-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:02:22.020658-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	21:02:22.020687-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	21:02:22.021466-0500	symptomsd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.021518-0500	symptomsd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.021543-0500	dasd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.021816-0500	dasd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.022089-0500	locationd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.022217-0500	locationd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.022304-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 9740;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	21:02:22.022588-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":9740, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	21:02:22.022660-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":9740, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:02:22.022697-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":9740, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:02:22.023065-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:02:22.024127-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":9740, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:02:22.024187-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	21:02:22.024255-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	21:02:22.024292-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	21:02:22.024324-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:02:22.024358-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:02:22.026525-0500	backboardd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.026576-0500	backboardd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.029267-0500	useractivityd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.029319-0500	useractivityd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.029500-0500	audiomxd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.029581-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.030153-0500	WirelessRadioManagerd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.030204-0500	WirelessRadioManagerd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.030354-0500	UserEventAgent	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.030428-0500	UserEventAgent	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.031271-0500	wifid	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.031567-0500	PerfPowerServices	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.031590-0500	wifid	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.031614-0500	PerfPowerServices	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.031806-0500	watchdogd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.032171-0500	watchdogd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.032471-0500	gamepolicyd	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.033019-0500	gamepolicyd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:02:22.036215-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	21:02:22.036273-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	21:02:22.036298-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	21:02:22.036387-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	21:02:22.036468-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	21:02:22.074872-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	21:02:22.085956-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.086272-0500	CommCenter	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.086298-0500	healthd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.086523-0500	backboardd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.086734-0500	locationd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.087074-0500	symptomsd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.087280-0500	dasd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.087613-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.087737-0500	WirelessRadioManagerd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088129-0500	UserEventAgent	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088157-0500	wifid	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088181-0500	useractivityd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088619-0500	watchdogd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088644-0500	PerfPowerServices	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.088901-0500	gamepolicyd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:02:22.249639-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	21:02:22.301558-0500	MobileJarvisNative	[0x1464ac000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	21:02:22.301840-0500	MobileJarvisNative	[0x1464ac100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	21:02:22.304752-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	21:02:22.304783-0500	MobileJarvisNative	Creating new background assertion
default	21:02:22.304872-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x1042b7c50>
default	21:02:22.304902-0500	MobileJarvisNative	Initializing connection
default	21:02:22.304927-0500	MobileJarvisNative	Removing all cached process handles
default	21:02:22.304953-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	21:02:22.305006-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	21:02:22.305035-0500	MobileJarvisNative	[0x1464ac200] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:02:22.305629-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] as ready
default	21:02:22.306668-0500	MobileJarvisNative	Handshake succeeded
default	21:02:22.306765-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:02:22.306817-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-9740-2065089 target:9740 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	21:02:22.306847-0500	runningboardd	Assertion 33-9740-2065089 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as inactive as start-time-defining assertions exist
default	21:02:22.307029-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:02:22.307061-0500	MobileJarvisNative	Created background task <private>.
default	21:02:22.307301-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	21:02:22.308794-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	21:02:22.309381-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:B74828B8-5B96-4412-AAD8-A0E3BF4AFEA9 pid:9740 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9740;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:02:22.309473-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc981f4600; IOHIDEventSystemConnectionRef: 0xc9bcdce00; vpid: 9740(v89BA9); taskPort: 0x120FCF; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:B74828B8-5B96-4412-AAD8-A0E3BF4AFEA9 pid:9740 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9740;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:02:22.309712-0500	MobileJarvisNative	[0x1464b8140] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:22.310725-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	21:02:22.310755-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:02:22.310811-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:02:22.312388-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	21:02:22.312416-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	21:02:22.312640-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	21:02:22.314361-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	21:02:22.314968-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	21:02:22.316929-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	21:02:22.317121-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	21:02:22.317193-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	21:02:22.317313-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	21:02:22.318121-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	21:02:22.318638-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	21:02:22.318881-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	21:02:22.319567-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	21:02:22.319808-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x146495f00 <private>> attempting immediate handshake from activate
default	21:02:22.319839-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x146495f00 <private>> sent handshake
default	21:02:22.319930-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Connection established.
default	21:02:22.319962-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x86421c310>
default	21:02:22.320274-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Connection to remote process established!
default	21:02:22.320420-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320698-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	21:02:22.320724-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320754-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1464f5c40>
default	21:02:22.320807-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320833-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320883-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320909-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.320975-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321001-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321054-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321084-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321109-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321137-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321187-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x86658a9e0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] remnants=0>
default	21:02:22.321492-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x1553] to process 0x868f40480 (watchdog: 19.67s)
default	21:02:22.321557-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	21:02:22.321831-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86658b080; pid: 9740; taskState: Running; visibility: Foreground>
default	21:02:22.321965-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	21:02:22.322093-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	21:02:22.322395-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	21:02:22.322623-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	21:02:22.322747-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	21:02:22.322984-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1464b8640> for initial
default	21:02:22.323009-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1464b8640> for CADisplay KVO
default	21:02:22.324290-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	21:02:22.324968-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	21:02:22.325077-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	21:02:22.325154-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	21:02:22.363153-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	21:02:22.363229-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	21:02:22.365348-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	21:02:22.365376-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:02:22.365425-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:02:22.365524-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:02:22.365684-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	21:02:22.367640-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:02:22.367666-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x1042b7c50>
default	21:02:22.367719-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:02:22.367758-0500	MobileJarvisNative	Created background task <private>.
default	21:02:22.368005-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	21:02:22.368166-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.368235-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.369153-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.371737-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1465ace00>; with scene: <UIWindowScene: 0x1042b8560>
default	21:02:22.371871-0500	MobileJarvisNative	0x1465dcdb0 setDelegate:<0x1465dccf0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	21:02:22.372033-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.372267-0500	MobileJarvisNative	[0x1465acd90] Initialized with scene: <UIWindowScene: 0x1042b8560>; behavior: <_UIEventDeferringBehavior_iOS: 0x1464f4c40>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	21:02:22.372529-0500	MobileJarvisNative	[0x1464b9040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:22.373249-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	21:02:22.374223-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.375984-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.376348-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
error	21:02:22.376666-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	21:02:22.376689-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.377855-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 8D7564D8-720B-4BE7-A8E0-08AEC5432C53
default	21:02:22.377916-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	21:02:22.377965-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	21:02:22.378236-0500	MobileJarvisNative	startConnection
default	21:02:22.380059-0500	MobileJarvisNative	[0x1464b9900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	21:02:22.380502-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	21:02:22.381587-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9740) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	21:02:22.381719-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.381825-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	21:02:22.382622-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.382648-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.382894-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:02:22.382996-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:<com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9578> to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.383023-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.383099-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:02:22.383122-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
error	21:02:22.383249-0500	SpringBoard	Advisor: No handle found for currently focused PID: 9578; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.384484-0500	backboardd	new deferring rules for pid:34: [
    [34-641A]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-641B]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9740>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	21:02:22.384563-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	21:02:22.385895-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9740>
]
default	21:02:22.386034-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x146558b90; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	21:02:22.386060-0500	MobileJarvisNative	observerPolicyDidChange: 0x146558b90 -> <_UIKeyWindowSceneObserver: 0x1465dcf00>
default	21:02:22.386091-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9740>
]
default	21:02:22.399013-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	21:02:22.401593-0500	MobileJarvisNative	<UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53) Scene updated orientation preferences: none -> ( Pu )
default	21:02:22.403817-0500	MobileJarvisNative	Key window API is scene-level: YES
default	21:02:22.403851-0500	MobileJarvisNative	UIWindowScene: 0x1042b8560: Window became key in scene: UIWindow: 0x1042bb0e0; contextId: 0x88184498: reason: UIWindowScene: 0x1042b8560: Window requested to become key in scene: 0x1042bb0e0
default	21:02:22.403996-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x1042b8560; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x1042bb0e0; reason: UIWindowScene: 0x1042b8560: Window requested to become key in scene: 0x1042bb0e0
default	21:02:22.404031-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x1042bb0e0; contextId: 0x88184498; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.404059-0500	MobileJarvisNative	[0x1465acd90] Begin local event deferring requested for token: 0x146488cc0; environments: 1; reason: UIWindowScene: 0x1042b8560: Begin event deferring in keyboardFocus for window: 0x1042bb0e0
default	21:02:22.404687-0500	backboardd	new deferring rules for pid:9740: [[9740-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x88184498; pid: 9740>; reason: …gin event deferring in keyboardFocus for window: 0x1042bb0e0]
default	21:02:22.406132-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9740>,
    <token: 0x88184498; pid: 9740>
]
default	21:02:22.406303-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9740>,
    <token: 0x88184498; pid: 9740>
]
default	21:02:22.406429-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x146558b90; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	21:02:22.406471-0500	MobileJarvisNative	observerPolicyDidChange: 0x146558b90 -> <_UIKeyWindowSceneObserver: 0x1465dcf00>
default	21:02:22.412781-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9740) setClientFocusContext
    focusContext:<contextID:2283291800 sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:02:22.414355-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 9740 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.414387-0500	SpringBoard	arbiter: arbiter requested pid 9740 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.414418-0500	SpringBoard	[coordinator] using arbiter suggested pid 9740 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.414478-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.415141-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 9740; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9740>
default	21:02:22.415517-0500	SpringBoard	set currentFocus PID:9740 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	21:02:22.418332-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	21:02:22.419285-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	21:02:22.419341-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	21:02:22.419611-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.420912-0500	MobileJarvisNative	establishing connection to agent
default	21:02:22.420939-0500	MobileJarvisNative	[0x146559a90] Session created.
default	21:02:22.421051-0500	SpringBoard	Scene <FBScene: 0x867b03200; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	21:02:22.421143-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	21:02:22.421215-0500	backboardd	new scene host settings: contextID:88184498 <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	21:02:22.423412-0500	MobileJarvisNative	[0x146559a90] Session created from connection [0x1464ac700]
default	21:02:22.423445-0500	MobileJarvisNative	[0x1464ac700] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	21:02:22.423470-0500	MobileJarvisNative	[0x146559a90] Session activated
default	21:02:22.431345-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [A6ACF89C-2A55-4EF0-9CA8-A276CA83FDD9] (reporting strategy default)>
default	21:02:22.431374-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [90AEF4C2-8F7A-45A0-8A64-BED207702A29] (reporting strategy default)>
default	21:02:22.431401-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [A6ACF89C-2A55-4EF0-9CA8-A276CA83FDD9] (reporting strategy default)> as the global parent
default	21:02:22.431451-0500	SpringBoard	[0x867e16700:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x1553] completed with success: 1
default	21:02:22.431690-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	21:02:22.432054-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:02:22.432082-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	21:02:22.432260-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	21:02:22.432291-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	21:02:22.432317-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	21:02:22.432495-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	21:02:22.432609-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:02:22.432782-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	21:02:22.432910-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 9740<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2065090 target:9740<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	21:02:22.432981-0500	runningboardd	Assertion 33-34-2065090 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	21:02:22.433336-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	21:02:22.434338-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1042b8560> (8D7564D8-720B-4BE7-A8E0-08AEC5432C53)
default	21:02:22.434523-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 8D7564D8-720B-4BE7-A8E0-08AEC5432C53
default	21:02:22.434632-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	21:02:22.434664-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	21:02:22.435154-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:02:22.435693-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2065090 payload 15918742631522514469>
)} lost:{(
)}>
default	21:02:22.435723-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	21:02:22.436080-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	21:02:22.436764-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:02:22.436841-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:02:22.436872-0500	runningboardd	Invalidating assertion 33-34-2065090 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) from originator [osservice<com.apple.SpringBoard>:34]
default	21:02:22.437669-0500	CommCenter	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.437840-0500	healthd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.437967-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.438040-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x8671e9880; type: SceneReady; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865496ae0; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x8676bb3f0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:02:22.438076-0500	MobileJarvisNative	Updating configuration of monitor M9740-1
default	21:02:22.438214-0500	MobileJarvisNative	[0x1464ac800] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	21:02:22.438395-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 9740<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2065091 target:9740<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	21:02:22.438427-0500	runningboardd	Assertion 33-34-2065091 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	21:02:22.438771-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	21:02:22.438834-0500	MobileJarvisNative	[0x1464acc00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:02:22.438940-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	21:02:22.439153-0500	MobileJarvisNative	[0x1464acd00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	21:02:22.439521-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2065091 payload 15918742631522514469>
)} lost:{(
)}>
default	21:02:22.440109-0500	MobileJarvisNative	[0x1464ac800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.440157-0500	MobileJarvisNative	Hit the server for a process handle 38a64530000260c that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.440289-0500	MobileJarvisNative	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:02:22.441976-0500	backboardd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.442097-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x1042b8560; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.442122-0500	MobileJarvisNative	[0x1465acd90] Scene target of event deferring environments did update: scene: 0x1042b8560; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:02:22.442202-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x1042b8560; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.442226-0500	MobileJarvisNative	Stack[KeyWindow] 0x14644c8a0: Migrate scenes from LastOneWins -> SystemShellManaged
default	21:02:22.442250-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	21:02:22.442298-0500	MobileJarvisNative	[0x1465acd90] Scene target of event deferring environments did update: scene: 0x1042b8560; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:02:22.442351-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x1042b8560; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:02:22.442486-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 8D7564D8-720B-4BE7-A8E0-08AEC5432C53
default	21:02:22.442677-0500	MobileJarvisNative	startConnection
default	21:02:22.442701-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 8D7564D8-720B-4BE7-A8E0-08AEC5432C53
default	21:02:22.442806-0500	symptomsd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.442831-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 8D7564D8-720B-4BE7-A8E0-08AEC5432C53
default	21:02:22.442986-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	21:02:22.443016-0500	MobileJarvisNative	forceReloadInputViews
default	21:02:22.443042-0500	locationd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.443068-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	21:02:22.443320-0500	dasd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.443459-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.443591-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	21:02:22.443708-0500	WirelessRadioManagerd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.443902-0500	useractivityd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.444159-0500	UserEventAgent	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.444211-0500	PerfPowerServices	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.444679-0500	wifid	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.444710-0500	watchdogd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.444945-0500	gamepolicyd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:02:22.476733-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:02:22.476773-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:02:22.491067-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:02:22.498867-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	21:02:22.500549-0500	MobileJarvisNative	[0x146748640] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	21:02:22.500672-0500	MobileJarvisNative	<SOServiceConnection: 0x1466e60a0>: new XPC connection
default	21:02:22.506119-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9740-2065092 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:02:22.506185-0500	runningboardd	Assertion 33-9740-2065092 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as inactive as start-time-defining assertions exist
default	21:02:22.512061-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	21:02:22.512104-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	21:02:22.512151-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	21:02:22.512830-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	21:02:22.516295-0500	MobileJarvisNative	container_query_get_single_result: success
default	21:02:22.516587-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	21:02:22.518712-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	21:02:22.518975-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:02:22.522896-0500	MobileJarvisNative	Garbage collection for alternative services
default	21:02:22.522953-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:02:22.525141-0500	MobileJarvisNative	Connection 1: enabling TLS
default	21:02:22.525193-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	21:02:22.525233-0500	MobileJarvisNative	[C1 5716FB31-CFB1-40BF-B37D-71E7F972B9D1 Hostname#d518e96b:443 quic-connection, url hash: 96347431, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{438275DC-8DB6-4802-9AFA-55CF1E6D1A90}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:02:22.525481-0500	MobileJarvisNative	[C1 Hostname#d518e96b:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:02:22.526474-0500	MobileJarvisNative	[C1 Hostname#d518e96b:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 1940D98D-518B-4B76-B040-962442ADB39E
default	21:02:22.526779-0500	MobileJarvisNative	[C1 Hostname#d518e96b:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	21:02:22.526806-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	21:02:22.526890-0500	MobileJarvisNative	[C1 Hostname#d518e96b:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	21:02:22.526973-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 initial path ((null))] event: path:start @0.001s
default	21:02:22.527204-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 1940D98D-518B-4B76-B040-962442ADB39E
default	21:02:22.527297-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	21:02:22.527437-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 initial path ((null))] event: path:start @0.001s
default	21:02:22.527823-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 03CC6376-929A-45CC-A492-D6CCE0BB186F
default	21:02:22.527937-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	21:02:22.527966-0500	MobileJarvisNative	[0x1464ad500] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	21:02:22.528424-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> setting up Connection 1
default	21:02:22.530745-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#fdef88b7.443
default	21:02:22.530778-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8c8a306c.443
default	21:02:22.530806-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e49edad9:443
default	21:02:22.530832-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#656006e2:443
default	21:02:22.530985-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.003s
default	21:02:22.531152-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 initial path ((null))] event: path:start @0.003s
default	21:02:22.531292-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.003s, uuid: FB05690E-DBCD-44B5-BAE2-D797B536D563
default	21:02:22.531404-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.003s
default	21:02:22.531742-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.004s
default	21:02:22.533941-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-1644c99030516316] created QUIC connection (spin bit enabled)
default	21:02:22.534446-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.006s
default	21:02:22.535325-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-1644c99030516316] TLS stream is: [C2]
default	21:02:22.535356-0500	MobileJarvisNative	[C2 3AEF6C41-F60D-4655-A07E-64C083DF7FE2 IPv6#fdef88b7.443 quic-connection, url hash: 96347431, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{438275DC-8DB6-4802-9AFA-55CF1E6D1A90}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:02:22.535434-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:02:22.535499-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: FB05690E-DBCD-44B5-BAE2-D797B536D563
default	21:02:22.535639-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:02:22.535670-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	21:02:22.535765-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.535798-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:02:22.536065-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x1467a5c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:02:22.536205-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x1467a5c00] Client handshake started
default	21:02:22.536305-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS client enter_early_data
default	21:02:22.536384-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS client read_server_hello
default	21:02:22.538007-0500	MobileJarvisNative	[0x14674a6c0] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	21:02:22.539302-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
)} lost:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2065090 payload 15918742631522514469>
)}>
default	21:02:22.557323-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	21:02:22.557472-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	21:02:22.557517-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/08FB358D-28C3-4CE6-B3EA-709697D9452F/MobileJarvisNative.app
default	21:02:22.557559-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	21:02:22.557600-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	21:02:22.564204-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8c8a306c.443
default	21:02:22.564238-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e49edad9:443
default	21:02:22.564270-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#656006e2:443
default	21:02:22.564429-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.036s
default	21:02:22.564563-0500	MobileJarvisNative	nw_path_evaluator_start [F575DBA7-6849-4262-8CFE-27ECCB7B0A43 <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	21:02:22.564657-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	21:02:22.564851-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	21:02:22.564989-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	21:02:22.565076-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	21:02:22.569295-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8c8a306c.443
default	21:02:22.569329-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#656006e2:443
default	21:02:22.569410-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e49edad9:443
default	21:02:22.569564-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.041s
default	21:02:22.580017-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:02:22.580039-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_server_hello
default	21:02:22.580315-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:02:22.580485-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_certificate_request
default	21:02:22.580985-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_server_certificate
default	21:02:22.581043-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:02:22.584992-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x1467a5c00] Performing external trust evaluation
default	21:02:22.585323-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x1467a5c00] Asyncing for external verify block
default	21:02:22.585472-0500	MobileJarvisNative	[0x14674af80] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	21:02:22.585638-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	21:02:22.586441-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> auth completion disp=1 cred=0x0
default	21:02:22.586890-0500	MobileJarvisNative	(Trust 0x1467c9140) No pending evals, starting
default	21:02:22.586918-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86973f600; type: MainTransition; transitionID: DC27441C-13E9-44FC-B9E4-EF375F769277; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:02:22.587003-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	21:02:22.587116-0500	MobileJarvisNative	[0x1464af800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.587505-0500	MobileJarvisNative	[0x1464afa00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.587564-0500	MobileJarvisNative	(Trust 0x1467c9140) Completed async eval kickoff
default	21:02:22.587799-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86c35c2d0> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86c35f000>;
    <SBSwitcherModifierEventResponse: 0x86c35fe40> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86c35e1f0>;
	    <SBSwitcherModifierEventResponse: 0x86c35fba0> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86c35db90; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86a4f4c40; visible: NO; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x869a4edf0; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x866b69500; active: NO; appLayout: <SBAppLayout: 0x868743400; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	21:02:22.591686-0500	MobileJarvisNative	(Trust 0x1467c9140) trustd returned 4
default	21:02:22.591763-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:02:22.591839-0500	MobileJarvisNative	(Trust 0x1467c8fc0) No pending evals, starting
default	21:02:22.592164-0500	MobileJarvisNative	[0x1464afc00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.592190-0500	MobileJarvisNative	(Trust 0x1467c8fc0) Completed async eval kickoff
default	21:02:22.592240-0500	MobileJarvisNative	[0x1464afa00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.593574-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session (null) [0x0] with pid '9740' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	21:02:22.593606-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '9740' moved to ForegroundRunning and is not allowed to play in the background
default	21:02:22.596007-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:22.597503-0500	MobileJarvisNative	(Trust 0x1467c8fc0) trustd returned 4
default	21:02:22.599271-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	21:02:22.599301-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x1467a5c00] Returning from external verify block with result: true
default	21:02:22.599404-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x1467a5c00] Certificate verification result: OK
default	21:02:22.602319-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:02:22.602346-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:02:22.602580-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client read_server_finished
default	21:02:22.602910-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f86b: {
	App bundle ID = com.hightowerai.MobileJarvisNative
	Route = not capable of spatialization
	contentType = 'soun'
	overrideSpatialMode = 0
	preferencesVersion = 1

	Spatial preferences: {
		prefersHeadTrackedSpatialization = 0
		prefersLossyAudioSources = 0
		maxSpatializableChannels = 0
		alwaysSpatialize = 0
		spatialAudioSourceCount = 1
		spatialAudioSources = [ '?src' ]
	}
}
default	21:02:22.603270-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:02:22.603296-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:02:22.603321-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client send_client_certificate
default	21:02:22.603945-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client complete_second_flight
default	21:02:22.604996-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1465bcc50 with ID: 0x6f86b
default	21:02:22.605556-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS 1.3 client done
default	21:02:22.606188-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	21:02:22.606213-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	21:02:22.606262-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	21:02:22.606287-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	21:02:22.606312-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS client finish_client_handshake
default	21:02:22.606337-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	21:02:22.606992-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1467a5c00] Client handshake state: TLS client done
default	21:02:22.607043-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x1467a5c00] Client handshake done
default	21:02:22.607120-0500	MobileJarvisNative	Call host has no calls
default	21:02:22.609616-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x1467a5c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(69ms) flight_time(47ms) rtt(46ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.610200-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.610430-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.070s
default	21:02:22.611043-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	21:02:22.611116-0500	MobileJarvisNative	[C2 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.071s
default	21:02:22.611330-0500	MobileJarvisNative	[0x1464afc00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.613267-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:02:22.613841-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] QUIC connection established in 72.46 ms, RTT 43.39 ms
default	21:02:22.613871-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.614007-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.080s
default	21:02:22.614331-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2070102877)
default	21:02:22.614494-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.080s
default	21:02:22.614787-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.080s
default	21:02:22.614847-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.080s
default	21:02:22.615897-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.080s
default	21:02:22.616136-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.080s
default	21:02:22.616389-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.080s
default	21:02:22.616465-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#fdef88b7.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:02:22.616657-0500	MobileJarvisNative	[C1 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.080s
default	21:02:22.617348-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	21:02:22.617374-0500	MobileJarvisNative	[C1 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.081s
default	21:02:22.617400-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	21:02:22.618165-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] path over en0 received event established
default	21:02:22.618391-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] promoted path 0x146669180 over en0 to primary
default	21:02:22.618468-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	21:02:22.618767-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.082s, uuid: FB05690E-DBCD-44B5-BAE2-D797B536D563
default	21:02:22.618908-0500	MobileJarvisNative	[C1.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.082s, uuid: 03CC6376-929A-45CC-A492-D6CCE0BB186F
default	21:02:22.618964-0500	MobileJarvisNative	[C1.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.082s, uuid: 1940D98D-518B-4B76-B040-962442ADB39E
default	21:02:22.618999-0500	MobileJarvisNative	[C1 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.082s, uuid: 1940D98D-518B-4B76-B040-962442ADB39E
default	21:02:22.619116-0500	MobileJarvisNative	Connection 1: connected successfully
default	21:02:22.619139-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	21:02:22.619332-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	21:02:22.619890-0500	SpringBoard	Front display did change: <SBApplication: 0x867b00200; com.hightowerai.MobileJarvisNative>
default	21:02:22.621121-0500	MobileJarvisNative	[0x1464afa00] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	21:02:22.623334-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.084s
default	21:02:22.629466-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> now using Connection 1
default	21:02:22.632302-0500	MobileJarvisNative	[0x146f18100] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	21:02:22.633780-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	21:02:22.633814-0500	MobileJarvisNative	0x146730c58 ID=0 Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> sent request, body N 0
default	21:02:22.633899-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	21:02:22.634665-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Technology: vocalizer, Available: true]'
default	21:02:22.635065-0500	MobileJarvisNative	[0x14674b340] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	21:02:22.636367-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x1467a5c00] Asyncing for session update block
default	21:02:22.636564-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x1467a5c00] Asyncing for session update block
default	21:02:22.636665-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x1467a5c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(69ms) flight_time(47ms) rtt(46ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.636725-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.636842-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] creating inbound stream 3
default	21:02:22.637147-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] creating inbound stream 7
default	21:02:22.637370-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] creating inbound stream 11
default	21:02:22.638197-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x1467a5c00] Returning from session update block
default	21:02:22.638473-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x1467a5c00] Returning from session update block
default	21:02:22.638591-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-0149f138e48fd1dced49fe3bd18fda5b5b58fda7] creating inbound stream 15
default	21:02:22.647702-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:02:22.650230-0500	MobileJarvisNative	<nw_activity 50:1 [A6ACF89C-2A55-4EF0-9CA8-A276CA83FDD9] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 740ms
default	21:02:22.650352-0500	MobileJarvisNative	<nw_activity 50:2 [90AEF4C2-8F7A-45A0-8A64-BED207702A29] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 740ms
default	21:02:22.650423-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [A6ACF89C-2A55-4EF0-9CA8-A276CA83FDD9] (global parent) (reporting strategy default) complete (reason success)>
default	21:02:22.650445-0500	MobileJarvisNative	Unset the global parent activity
default	21:02:22.652483-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:22.655282-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:02:22.655394-0500	MobileJarvisNative	Connection 3: enabling TLS
default	21:02:22.655419-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	21:02:22.655446-0500	MobileJarvisNative	[C3 E5C125F6-A7D8-4F1A-B1A5-420537962B68 Hostname#94433baf:443 quic-connection, url hash: ad5b1c82, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{7CA87DE2-A946-4BFD-85CA-D28ED4BB0E47}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:02:22.655523-0500	MobileJarvisNative	[C3 Hostname#94433baf:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:02:22.655697-0500	MobileJarvisNative	[C3 Hostname#94433baf:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 41BF874F-932D-458E-899E-36E11DC24A46
default	21:02:22.655863-0500	MobileJarvisNative	[C3 Hostname#94433baf:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:02:22.655894-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	21:02:22.655976-0500	MobileJarvisNative	[C3 Hostname#94433baf:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:02:22.656054-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 initial path ((null))] event: path:start @0.000s
default	21:02:22.656286-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 41BF874F-932D-458E-899E-36E11DC24A46
default	21:02:22.656373-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	21:02:22.656527-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 initial path ((null))] event: path:start @0.000s
default	21:02:22.656749-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: FF7365A8-049C-4EE0-B8E0-F0E889608E04
default	21:02:22.656924-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.000s
default	21:02:22.657207-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> setting up Connection 3
default	21:02:22.658235-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#94433baf:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#10d697f4:443
default	21:02:22.658262-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#94433baf:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#3cdb5c02:443
default	21:02:22.658437-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.001s
default	21:02:22.658626-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 initial path ((null))] event: path:start @0.001s
default	21:02:22.658793-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: FA9C5278-0024-40A8-A3F4-25E7978DB3BF
default	21:02:22.658902-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.002s
default	21:02:22.659220-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.002s
default	21:02:22.659848-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-be2e80ecff803ecd] created QUIC connection (spin bit enabled)
default	21:02:22.660258-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.003s
default	21:02:22.661007-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-be2e80ecff803ecd] TLS stream is: [C4]
default	21:02:22.661035-0500	MobileJarvisNative	[C4 5F52D942-7669-4B88-B526-C9F8275EF2DD IPv4#10d697f4:443 quic-connection, url hash: ad5b1c82, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{7CA87DE2-A946-4BFD-85CA-D28ED4BB0E47}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:02:22.661092-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:02:22.661207-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: FA9C5278-0024-40A8-A3F4-25E7978DB3BF
default	21:02:22.661346-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:02:22.661375-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	21:02:22.661509-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.661535-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:02:22.661741-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x1467a7600] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:02:22.661822-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x1467a7600] Client handshake started
default	21:02:22.661897-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS client enter_early_data
default	21:02:22.661972-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS client read_server_hello
default	21:02:22.690089-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:02:22.690140-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_server_hello
default	21:02:22.690217-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:02:22.690366-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_certificate_request
default	21:02:22.690567-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_server_certificate
default	21:02:22.690601-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:02:22.690824-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x1467a7600] Performing external trust evaluation
default	21:02:22.690907-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x1467a7600] Asyncing for external verify block
default	21:02:22.691111-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	21:02:22.691163-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> auth completion disp=1 cred=0x0
default	21:02:22.691226-0500	MobileJarvisNative	(Trust 0x1467c9ec0) No pending evals, starting
default	21:02:22.691329-0500	MobileJarvisNative	[0x146f18000] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.691354-0500	MobileJarvisNative	(Trust 0x1467c9ec0) Completed async eval kickoff
default	21:02:22.692550-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
default	21:02:22.693296-0500	MobileJarvisNative	(Trust 0x1467c9ec0) trustd returned 4
default	21:02:22.693406-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:02:22.693454-0500	MobileJarvisNative	(Trust 0x1467ca1c0) No pending evals, starting
default	21:02:22.693677-0500	MobileJarvisNative	[0x146f18600] activating connection: mach=true listener=false peer=false name=com.apple.trustd
error	21:02:22.693725-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	21:02:22.693772-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
default	21:02:22.693831-0500	MobileJarvisNative	(Trust 0x1467ca1c0) Completed async eval kickoff
default	21:02:22.693945-0500	MobileJarvisNative	[0x146f18000] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.695216-0500	MobileJarvisNative	(Trust 0x1467ca1c0) trustd returned 4
default	21:02:22.695291-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	21:02:22.695317-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x1467a7600] Returning from external verify block with result: true
default	21:02:22.695348-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	21:02:22.695584-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x1467a7600] Certificate verification result: OK
default	21:02:22.695750-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client read_server_finished
default	21:02:22.695804-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:02:22.695830-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:02:22.695857-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client send_client_certificate
default	21:02:22.695883-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client complete_second_flight
default	21:02:22.696146-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS 1.3 client done
default	21:02:22.696171-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS client finish_client_handshake
default	21:02:22.696197-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1467a7600] Client handshake state: TLS client done
default	21:02:22.696223-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x1467a7600] Client handshake done
default	21:02:22.696595-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x1467a7600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(35ms) flight_time(30ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.696729-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.696821-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.035s
default	21:02:22.697048-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	21:02:22.697076-0500	MobileJarvisNative	[C4 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.036s
default	21:02:22.697124-0500	MobileJarvisNative	[0x146f18600] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.697882-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	21:02:22.697933-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] QUIC connection established in 37.15 ms, RTT 25.616 ms
default	21:02:22.698010-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.698198-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.040s
default	21:02:22.698266-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#10d697f4:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2070102877)
default	21:02:22.698436-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.041s
default	21:02:22.698622-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.041s
default	21:02:22.698684-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.041s
default	21:02:22.698821-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	21:02:22.698961-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	21:02:22.699033-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	21:02:22.699062-0500	MobileJarvisNative	nw_flow_connected [C3 IPv4#10d697f4:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:02:22.699147-0500	MobileJarvisNative	[C3 IPv4#10d697f4:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.041s
default	21:02:22.699316-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	21:02:22.699342-0500	MobileJarvisNative	[C3 IPv4#10d697f4:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	21:02:22.699368-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	21:02:22.699660-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] path over en0 received event established
default	21:02:22.699814-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] promoted path 0x146ffce00 over en0 to primary
default	21:02:22.699862-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	21:02:22.700062-0500	MobileJarvisNative	[C3.1.1.1 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: FA9C5278-0024-40A8-A3F4-25E7978DB3BF
default	21:02:22.700148-0500	MobileJarvisNative	[C3.1.1 Hostname#94433baf:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: FF7365A8-049C-4EE0-B8E0-F0E889608E04
default	21:02:22.700203-0500	MobileJarvisNative	[C3.1 Hostname#94433baf:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 41BF874F-932D-458E-899E-36E11DC24A46
default	21:02:22.700232-0500	MobileJarvisNative	[C3 IPv4#10d697f4:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 41BF874F-932D-458E-899E-36E11DC24A46
default	21:02:22.700304-0500	MobileJarvisNative	Connection 3: connected successfully
default	21:02:22.700330-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	21:02:22.700355-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	21:02:22.700742-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.042s
default	21:02:22.700866-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> now using Connection 3
default	21:02:22.701311-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	21:02:22.701335-0500	MobileJarvisNative	0x1467316d8 ID=0 Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> sent request, body N 0
default	21:02:22.705493-0500	MobileJarvisNative	0x146730c58 ID=0 Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> received response, status 304 content U
default	21:02:22.705996-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.180s
default	21:02:22.706126-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> done using Connection 1
default	21:02:22.706300-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> summary for task success {transaction_duration_ms=201, response_status=304, connection=1, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=74, secure_connection_duration_ms=72, private_relay=false, request_start_ms=114, request_duration_ms=3, response_start_ms=200, response_duration_ms=1, request_bytes=506, request_throughput_kbps=133, response_bytes=371, response_throughput_kbps=313, cache_hit=true}
default	21:02:22.706523-0500	MobileJarvisNative	Task <072FDCF3-5477-420C-81E6-889368CBDCE8>.<1> finished successfully
default	21:02:22.711179-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: gryphon, Available: true]'
default	21:02:22.714878-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:02:22.715501-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:02:22.715696-0500	MobileJarvisNative	Connection 5: enabling TLS
default	21:02:22.715727-0500	MobileJarvisNative	Connection 5: starting, TC(0x0)
default	21:02:22.715778-0500	MobileJarvisNative	[C5 988FBF8C-125D-4BED-8370-D6040CCB972F Hostname#d518e96b:443 quic-connection, url hash: 96347431, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8948353F-EEB8-4808-8DC2-48BD22ADE1E2}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:02:22.715872-0500	MobileJarvisNative	[C5 Hostname#d518e96b:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:02:22.716034-0500	MobileJarvisNative	[C5 Hostname#d518e96b:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 4B1BD2EC-DF48-481E-962E-ACCC6D7D983D
default	21:02:22.716170-0500	MobileJarvisNative	[C5 Hostname#d518e96b:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:02:22.716196-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	21:02:22.716317-0500	MobileJarvisNative	[C5 Hostname#d518e96b:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:02:22.716397-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 initial path ((null))] event: path:start @0.000s
default	21:02:22.716609-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 4B1BD2EC-DF48-481E-962E-ACCC6D7D983D
default	21:02:22.716734-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	21:02:22.716912-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 initial path ((null))] event: path:start @0.000s
default	21:02:22.717129-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 2AEE27AE-2716-4012-A218-3607734AA4F6
default	21:02:22.717236-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.000s
default	21:02:22.717348-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> setting up Connection 5
default	21:02:22.719273-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#fdef88b7.443
default	21:02:22.719301-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8c8a306c.443
default	21:02:22.719329-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e49edad9:443
default	21:02:22.719355-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#656006e2:443
default	21:02:22.719501-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.002s
default	21:02:22.719713-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 initial path ((null))] event: path:start @0.002s
default	21:02:22.719903-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 0A090021-A26F-4E0B-9198-53AD1BEFB86A
default	21:02:22.720041-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.002s
default	21:02:22.720259-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.002s
default	21:02:22.720709-0500	MobileJarvisNative	quic_conn_initialize_inner [C5.1.1.1:2] [-7af57b28f91210f6] created QUIC connection (spin bit disabled)
default	21:02:22.721098-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	21:02:22.721179-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	21:02:22.721236-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	21:02:22.721348-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	21:02:22.721400-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Available: true, Technology: custom]'
default	21:02:22.722333-0500	MobileJarvisNative	quic_crypto_new_flow [C5.1.1.1:2] [-7af57b28f91210f6] TLS stream is: [C6]
default	21:02:22.722361-0500	MobileJarvisNative	[C6 F0D1447D-799C-4827-939B-5B8BA80FCE46 IPv6#fdef88b7.443 quic-connection, url hash: 96347431, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8948353F-EEB8-4808-8DC2-48BD22ADE1E2}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:02:22.722415-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:02:22.722491-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 0A090021-A26F-4E0B-9198-53AD1BEFB86A
default	21:02:22.722634-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:02:22.722690-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state preparing
default	21:02:22.722780-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.722807-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:02:22.723054-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C6:1][0x147294c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:02:22.723133-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C6:1][0x147294c00] Client handshake started
default	21:02:22.723208-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS client enter_early_data
default	21:02:22.723308-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS client read_server_hello
default	21:02:22.723716-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	21:02:22.723797-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	21:02:22.724123-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x1467a7600] Asyncing for session update block
default	21:02:22.724304-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x1467a7600] Asyncing for session update block
default	21:02:22.724385-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x1467a7600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(35ms) flight_time(30ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.724468-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#10d697f4:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.724570-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] creating inbound stream 3
default	21:02:22.724783-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] creating inbound stream 7
default	21:02:22.725044-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] creating inbound stream 11
default	21:02:22.725322-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01390433a162c98ef93b2933d162c18f102f155c] creating inbound stream 15
default	21:02:22.725883-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x1467a7600] Returning from session update block
default	21:02:22.726226-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x1467a7600] Returning from session update block
default	21:02:22.726447-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	21:02:22.733977-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neural]'
default	21:02:22.747286-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	21:02:22.747361-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	21:02:22.747436-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	21:02:22.750545-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neuralAX]'
default	21:02:22.753499-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:02:22.753550-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_server_hello
default	21:02:22.753741-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:02:22.753950-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_certificate_request
default	21:02:22.754122-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_server_certificate
default	21:02:22.754148-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:02:22.754409-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C6:1][0x147294c00] Performing external trust evaluation
default	21:02:22.754488-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C6:1][0x147294c00] Asyncing for external verify block
default	21:02:22.754709-0500	MobileJarvisNative	Connection 5: asked to evaluate TLS Trust
default	21:02:22.754973-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> auth completion disp=1 cred=0x0
default	21:02:22.755043-0500	MobileJarvisNative	(Trust 0x147231380) No pending evals, starting
default	21:02:22.755206-0500	MobileJarvisNative	[0x146f19b00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.755377-0500	MobileJarvisNative	(Trust 0x147231380) Completed async eval kickoff
default	21:02:22.757927-0500	MobileJarvisNative	(Trust 0x147231380) trustd returned 4
default	21:02:22.757997-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:02:22.758043-0500	MobileJarvisNative	(Trust 0x1472315c0) No pending evals, starting
default	21:02:22.758260-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	21:02:22.758311-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	21:02:22.758337-0500	MobileJarvisNative	[0x146f19c00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.758435-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	21:02:22.758460-0500	MobileJarvisNative	(Trust 0x1472315c0) Completed async eval kickoff
default	21:02:22.758554-0500	MobileJarvisNative	[0x146f19b00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.759121-0500	MobileJarvisNative	(Trust 0x1472315c0) trustd returned 4
default	21:02:22.759192-0500	MobileJarvisNative	Connection 5: TLS Trust result 0
default	21:02:22.759217-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C6:1][0x147294c00] Returning from external verify block with result: true
default	21:02:22.759274-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C6:1][0x147294c00] Certificate verification result: OK
default	21:02:22.759299-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client read_server_finished
default	21:02:22.759350-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:02:22.759373-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:02:22.759398-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client send_client_certificate
default	21:02:22.759423-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client complete_second_flight
default	21:02:22.759574-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x146d4a120>
default	21:02:22.759624-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS 1.3 client done
default	21:02:22.759649-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS client finish_client_handshake
default	21:02:22.759677-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x147294c00] Client handshake state: TLS client done
default	21:02:22.759707-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C6:1][0x147294c00] Client handshake done
default	21:02:22.760077-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x147294c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(36ms) flight_time(30ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.760154-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.760246-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.036s
default	21:02:22.760421-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state ready
default	21:02:22.760447-0500	MobileJarvisNative	[C6 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.036s
default	21:02:22.760495-0500	MobileJarvisNative	[0x146f19c00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:22.761229-0500	MobileJarvisNative	quic_pmtud_restart [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:02:22.761281-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] QUIC connection established in 37.492 ms, RTT 29.661 ms
default	21:02:22.761307-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:02:22.761429-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.040s
default	21:02:22.761485-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#fdef88b7.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2070102877)
default	21:02:22.761650-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	21:02:22.761866-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	21:02:22.761924-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	21:02:22.762109-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:02:22.762190-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:02:22.762247-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:02:22.762273-0500	MobileJarvisNative	nw_flow_connected [C5 IPv6#fdef88b7.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:02:22.762384-0500	MobileJarvisNative	[C5 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.040s
default	21:02:22.762527-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state ready
default	21:02:22.762557-0500	MobileJarvisNative	[C5 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:02:22.762607-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C5] viability_changed_handler(true)
default	21:02:22.763022-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] path over en0 received event established
default	21:02:22.763175-0500	MobileJarvisNative	quic_migration_evaluate_primary [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] promoted path 0x146ffd500 over en0 to primary
default	21:02:22.763222-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C5.1.1.1:2] Calling notify with interface <private>
default	21:02:22.763395-0500	MobileJarvisNative	[C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 0A090021-A26F-4E0B-9198-53AD1BEFB86A
default	21:02:22.763485-0500	MobileJarvisNative	[C5.1.1 Hostname#d518e96b:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 2AEE27AE-2716-4012-A218-3607734AA4F6
default	21:02:22.763540-0500	MobileJarvisNative	[C5.1 Hostname#d518e96b:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 4B1BD2EC-DF48-481E-962E-ACCC6D7D983D
default	21:02:22.763567-0500	MobileJarvisNative	[C5 IPv6#fdef88b7.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 4B1BD2EC-DF48-481E-962E-ACCC6D7D983D
default	21:02:22.763678-0500	MobileJarvisNative	Connection 5: connected successfully
default	21:02:22.763704-0500	MobileJarvisNative	Connection 5: TLS handshake complete
default	21:02:22.763729-0500	MobileJarvisNative	Connection 5: ready C(N) E(N)
default	21:02:22.764115-0500	MobileJarvisNative	[C5] event: client:connection_reused @0.041s
default	21:02:22.764216-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> now using Connection 5
default	21:02:22.764575-0500	MobileJarvisNative	Connection 5: received viability advisory(Y)
default	21:02:22.764599-0500	MobileJarvisNative	0x146731dd8 ID=0 Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> sent request, body N 0
default	21:02:22.783834-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x147294c00] Asyncing for session update block
default	21:02:22.783989-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x147294c00] Asyncing for session update block
default	21:02:22.784071-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x147294c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(36ms) flight_time(30ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:02:22.784131-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:02:22.784241-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] creating inbound stream 3
default	21:02:22.784442-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] creating inbound stream 7
default	21:02:22.785186-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x147294c00] Returning from session update block
default	21:02:22.785629-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x147294c00] Returning from session update block
default	21:02:22.785769-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] creating inbound stream 11
default	21:02:22.786027-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] creating inbound stream 15
default	21:02:22.821444-0500	MobileJarvisNative	0x146731dd8 ID=0 Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> received response, status 304 content U
default	21:02:22.821775-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> summary for task success {transaction_duration_ms=106, response_status=304, connection=5, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=38, secure_connection_duration_ms=37, private_relay=false, request_start_ms=42, request_duration_ms=0, response_start_ms=106, response_duration_ms=0, request_bytes=453, request_throughput_kbps=2417, response_bytes=371, response_throughput_kbps=0, cache_hit=true}
default	21:02:22.821862-0500	MobileJarvisNative	[C5] event: client:connection_idle @0.106s
default	21:02:22.822083-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> done using Connection 5
default	21:02:22.822107-0500	MobileJarvisNative	Task <E76AE939-61CF-4B6E-BCA2-72C1AEE4FEDD>.<1> finished successfully
default	21:02:22.823399-0500	MobileJarvisNative	quic_frame_write_CONNECTION_CLOSE [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] sending APPLICATION_CLOSE, code 0x100, reason <null>
default	21:02:22.823425-0500	MobileJarvisNative	[C6 F0D1447D-799C-4827-939B-5B8BA80FCE46 IPv6#fdef88b7.443 quic-connection, url hash: 96347431, tls, definite, attribution: developer] cancel
default	21:02:22.825207-0500	MobileJarvisNative	[C6 F0D1447D-799C-4827-939B-5B8BA80FCE46 IPv6#fdef88b7.443 quic-connection, url hash: 96347431, tls, definite, attribution: developer] cancelled
	[C6 0A090021-A26F-4E0B-9198-53AD1BEFB86A 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.53359<->IPv6#fdef88b7.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Duration: 0.105s, QUIC @0.000s took 0.000s, TLS 1.3 took 0.036s
	bytes in/out: 5460/4500, packets in/out: 10/11, rtt: 0.029s, retransmitted bytes: 0, out-of-order bytes: 518
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	21:02:22.825615-0500	MobileJarvisNative	nw_flow_disconnected [C6 IPv6#fdef88b7.443 cancelled channel-flow ((null))] Output protocol disconnected
default	21:02:22.825694-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state cancelled
default	21:02:22.825753-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.825782-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.825807-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.825831-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.825856-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.825881-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826116-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826142-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826172-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826196-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826222-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826247-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#fdef88b7.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:02:22.826281-0500	MobileJarvisNative	quic_conn_log_summary [C5.1.1.1:2] [-018e7c87066b7291ed8ca8873c6b75e1c0ab9f4d] 
	Connection attempts: 1, RETRY received: no, PTOs: 0
	Early data: no, Keep-alives sent/acknowledged: 0/0, ECN state: unsupported, L4S: disabled
	RTT: base 26 ms, network 26 ms, latest 26 ms, minimum 26 ms, smoothed 29 ms (variance 11 ms)
	Path MTU: 1280, minimum MSS: 1232
	Migration events: 0, paths validated: 0
	Inbound unidirectional/bidirectional streams: 4/0
	Outbound unidirectional/bidirectional streams: 1/1
	DATA_BLOCKED frames sent/received: 0/0
	STREAM_DATA_BLOCKED frames sent/received: 0/0
default	21:02:22.826311-0500	MobileJarvisNative	Connection 5: cleaning up
default	21:02:22.826338-0500	MobileJarvisNative	[C5 988FBF8C-125D-4BED-8370-D6040CCB972F Hostname#d518e96b:443 quic-connection, url hash: 96347431, definite, attribution: developer] cancel
default	21:02:22.826373-0500	MobileJarvisNative	[C5 988FBF8C-125D-4BED-8370-D6040CCB972F Hostname#d518e96b:443 quic-connection, url hash: 96347431, definite, attribution: developer] cancelled
	[C5.1.1.1 0A090021-A26F-4E0B-9198-53AD1BEFB86A 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.53359<->IPv6#fdef88b7.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Privacy Stance: Not Eligible
	Duration: 0.110s, DNS @0.000s took 0.002s, QUIC @0.002s took 0.038s
	bytes in/out: 5460/4500, packets in/out: 10/11, rtt: 0.029s, retransmitted bytes: 0, out-of-order bytes: 518
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	21:02:22.827301-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state cancelled
default	21:02:22.881676-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	21:02:22.881768-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:02:22.881804-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	21:02:22.881834-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x1042b7c50> for task identifier: 2
default	21:02:22.882050-0500	runningboardd	Invalidating assertion 33-9740-2065089 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:22.978549-0500	MobileJarvisNative	0x1467316d8 ID=0 Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> received response, status 200 content U
default	21:02:22.980762-0500	MobileJarvisNative	[0x146f19100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:02:22.986761-0500	MobileJarvisNative	[0x146f19100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.014523-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> response ended
default	21:02:23.014868-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.359s
default	21:02:23.015203-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> done using Connection 3
default	21:02:23.015507-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> summary for task success {transaction_duration_ms=361, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=1, connect_duration_ms=38, secure_connection_duration_ms=37, private_relay=false, request_start_ms=43, request_duration_ms=0, response_start_ms=323, response_duration_ms=36, request_bytes=1270, request_throughput_kbps=1634, response_bytes=16377, response_throughput_kbps=433, cache_hit=true}
default	21:02:23.015549-0500	MobileJarvisNative	Task <3A86889E-7471-4551-8686-4898A949CBAF>.<1> finished successfully
default	21:02:23.023103-0500	MobileJarvisNative	[0x1472983c0] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	21:02:23.050036-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	21:02:23.050122-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	21:02:23.050210-0500	MobileJarvisNative	[0x146f18200] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	21:02:23.061255-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	21:02:23.062326-0500	MobileJarvisNative	[0x147299180] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	21:02:23.065613-0500	MobileJarvisNative	[0x147299180] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.065726-0500	MobileJarvisNative	<private>
default	21:02:23.065840-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	21:02:23.069765-0500	MobileJarvisNative	[0x147299180] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	21:02:23.081799-0500	MobileJarvisNative	Executing query <HKSampleQuery 75C135 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.083180-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.083803-0500	MobileJarvisNative	Stopping query <HKSampleQuery 75C135 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.083832-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.088726-0500	MobileJarvisNative	Executing query <HKSampleQuery 0E8764 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.089237-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.089795-0500	MobileJarvisNative	Stopping query <HKSampleQuery 0E8764 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.089840-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.091016-0500	MobileJarvisNative	Executing query <HKSampleQuery 6DB0F1 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.091852-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.092825-0500	MobileJarvisNative	Stopping query <HKSampleQuery 6DB0F1 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.092854-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.095540-0500	MobileJarvisNative	Executing query <HKSampleQuery 2D89BB QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.095942-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.096441-0500	MobileJarvisNative	Stopping query <HKSampleQuery 2D89BB QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.096473-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.097388-0500	MobileJarvisNative	Executing query <HKSampleQuery 0BE50F QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.097837-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.098397-0500	MobileJarvisNative	Stopping query <HKSampleQuery 0BE50F QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.098437-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.101881-0500	MobileJarvisNative	Executing query <HKSampleQuery 7BC552 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.102322-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.102782-0500	MobileJarvisNative	Stopping query <HKSampleQuery 7BC552 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.102814-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.103938-0500	MobileJarvisNative	Executing query <HKSampleQuery D96704 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.104367-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.104895-0500	MobileJarvisNative	Stopping query <HKSampleQuery D96704 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.104985-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.107791-0500	MobileJarvisNative	Executing query <HKSampleQuery 966BDB QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.108123-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.108546-0500	MobileJarvisNative	Stopping query <HKSampleQuery 966BDB QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.108649-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.109329-0500	MobileJarvisNative	Executing query <HKSampleQuery 6EF474 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.109666-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.110058-0500	MobileJarvisNative	Stopping query <HKSampleQuery 6EF474 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.110084-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.113015-0500	MobileJarvisNative	Executing query <HKSampleQuery CEA033 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.113300-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.113758-0500	MobileJarvisNative	Stopping query <HKSampleQuery CEA033 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.113806-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.114470-0500	MobileJarvisNative	Executing query <HKSampleQuery B58484 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.114804-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.115319-0500	MobileJarvisNative	Stopping query <HKSampleQuery B58484 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.115348-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.118194-0500	MobileJarvisNative	Executing query <HKSampleQuery 385AC2 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.118379-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.118853-0500	MobileJarvisNative	Stopping query <HKSampleQuery 385AC2 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.118884-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.119479-0500	MobileJarvisNative	Executing query <HKSampleQuery 04AFFE QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:02:23.119769-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.120193-0500	MobileJarvisNative	Stopping query <HKSampleQuery 04AFFE QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.120284-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.122817-0500	MobileJarvisNative	Executing query <HKSampleQuery C5D57B QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:02:23.123136-0500	MobileJarvisNative	[0x147298a00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:02:23.123585-0500	MobileJarvisNative	Stopping query <HKSampleQuery C5D57B QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:02:23.123613-0500	MobileJarvisNative	[0x147298a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:02:23.124017-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:23.124677-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.469s
default	21:02:23.124869-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> now using Connection 3
default	21:02:23.125670-0500	MobileJarvisNative	0x146731f98 ID=4 Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> sent request, body S 109
default	21:02:23.365845-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Now acquiring workspace assertion with state: ForegroundFocal.
default	21:02:23.367134-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-2065094 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	21:02:23.367599-0500	runningboardd	Assertion 33-34-2065094 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as active
default	21:02:23.369200-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:02:23.372029-0500	runningboardd	Invalidating assertion 33-34-2065085 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	21:02:23.372267-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9740] Dropping launch assertion.
default	21:02:23.372421-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.372570-0500	healthd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.372886-0500	CommCenter	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.373197-0500	backboardd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.373514-0500	locationd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.373907-0500	dasd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.373946-0500	symptomsd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.374439-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.374548-0500	useractivityd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.374841-0500	WirelessRadioManagerd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.375128-0500	MobileJarvisNative	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:02:23.375412-0500	UserEventAgent	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.375683-0500	wifid	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.376092-0500	PerfPowerServices	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.376251-0500	watchdogd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.376657-0500	gamepolicyd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:02:23.484874-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:02:23.485172-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2065085:FBApplicationProcess" age:00:00:01  id:51539641223 [System: SysAct]
default	21:02:23.485594-0500	SpringBoard	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.486391-0500	healthd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.486450-0500	CommCenter	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.486850-0500	backboardd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.487257-0500	locationd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.487597-0500	symptomsd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.487869-0500	dasd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.488614-0500	audiomxd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.488841-0500	useractivityd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.488975-0500	WirelessRadioManagerd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.489283-0500	MobileJarvisNative	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:02:23.489545-0500	UserEventAgent	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.489584-0500	wifid	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.490200-0500	PerfPowerServices	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.490473-0500	watchdogd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:02:23.490628-0500	gamepolicyd	Received state update for 9740 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:02:23.521965-0500	runningboardd	Invalidating assertion 33-9740-2065092 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:23.597856-0500	MobileJarvisNative	0x146731f98 ID=4 Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> received response, status 200 content K
default	21:02:23.598721-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> response ended
default	21:02:23.599364-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.943s
default	21:02:23.600081-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> done using Connection 3
default	21:02:23.600277-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> summary for task success {transaction_duration_ms=475, response_status=200, connection=3, reused=1, reused_after_ms=109, request_start_ms=0, request_duration_ms=0, response_start_ms=473, response_duration_ms=2, request_bytes=922, request_throughput_kbps=1288, response_bytes=887, response_throughput_kbps=428, cache_hit=true}
default	21:02:23.600333-0500	MobileJarvisNative	Task <D3212AA2-AD13-4229-B238-94A5188B24FB>.<2> finished successfully
default	21:02:23.601576-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9740-2065095 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:02:23.601794-0500	runningboardd	Assertion 33-9740-2065095 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as inactive as start-time-defining assertions exist
default	21:02:23.624916-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:02:23.625015-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:02:23.625422-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:02:23.625461-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:02:23.625494-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:02:23.625598-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:02:23.625659-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:02:23.625888-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:02:23.625962-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:02:23.626024-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:02:23.626085-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:02:23.626149-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:02:23.627552-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:02:23.629971-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001025efc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001026d455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102287700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010228a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:02:23.630459-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:02:23.630943-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:02:23.633013-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:02:23.633279-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:02:23.633681-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:02:23.633754-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:02:23.633779-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:02:23.633802-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:02:23.633826-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:02:23.633975-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:02:23.634011-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:02:23.634044-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:02:23.634072-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:02:23.634102-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:02:23.679049-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:02:23.679567-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001025efc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001026d455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102287700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010228a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:02:23.680006-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:02:23.680195-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:02:23.681526-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	21:02:23.686980-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:23.687339-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:23.687644-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:23.688788-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.033s
default	21:02:23.689043-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> now using Connection 3
default	21:02:23.689728-0500	MobileJarvisNative	0x1473da158 ID=8 Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> sent request, body N 0
default	21:02:23.691740-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> now using Connection 3
default	21:02:23.692250-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> now using Connection 3
default	21:02:23.692879-0500	MobileJarvisNative	0x1473db118 ID=12 Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> sent request, body N 0
default	21:02:23.692904-0500	MobileJarvisNative	0x1473db2d8 ID=16 Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> sent request, body N 0
default	21:02:23.804919-0500	MobileJarvisNative	0x1473da158 ID=8 Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> received response, status 200 content U
default	21:02:23.805198-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> response ended
default	21:02:23.805434-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> done using Connection 3
default	21:02:23.805541-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> summary for task success {transaction_duration_ms=118, response_status=200, connection=3, reused=1, reused_after_ms=89, request_start_ms=1, request_duration_ms=0, response_start_ms=117, response_duration_ms=0, request_bytes=1238, request_throughput_kbps=1815, response_bytes=4411, response_throughput_kbps=6805, cache_hit=true}
default	21:02:23.805577-0500	MobileJarvisNative	Task <CE6E7D87-98C3-4E26-A86A-132AEAE9905F>.<3> finished successfully
default	21:02:23.906354-0500	MobileJarvisNative	0x1473db2d8 ID=16 Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> received response, status 200 content U
default	21:02:23.906992-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> response ended
default	21:02:23.907298-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> done using Connection 3
default	21:02:23.907496-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> summary for task success {transaction_duration_ms=217, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=0, response_start_ms=216, response_duration_ms=1, request_bytes=1202, request_throughput_kbps=2055, response_bytes=1236, response_throughput_kbps=954, cache_hit=true}
default	21:02:23.907553-0500	MobileJarvisNative	Task <8436FACA-8E96-4F60-A50A-E7C8623B288A>.<5> finished successfully
default	21:02:23.926950-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:23.928061-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> now using Connection 3
default	21:02:23.928803-0500	MobileJarvisNative	0x1474fa4d8 ID=20 Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> sent request, body N 0
default	21:02:24.006155-0500	MobileJarvisNative	0x1473db118 ID=12 Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> received response, status 200 content U
default	21:02:24.036326-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> response ended
default	21:02:24.036896-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> done using Connection 3
default	21:02:24.037045-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> summary for task success {transaction_duration_ms=348, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=3, request_duration_ms=1, response_start_ms=317, response_duration_ms=31, request_bytes=1365, request_throughput_kbps=1208, response_bytes=61994, response_throughput_kbps=1943, cache_hit=true}
default	21:02:24.037507-0500	MobileJarvisNative	Task <4AE16514-6EC7-4275-8743-88D7DB2DA2D8>.<4> finished successfully
default	21:02:24.045562-0500	MobileJarvisNative	0x1474fa4d8 ID=20 Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> received response, status 200 content U
default	21:02:24.046803-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> response ended
default	21:02:24.047358-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.390s
default	21:02:24.047626-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> done using Connection 3
default	21:02:24.047859-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> summary for task success {transaction_duration_ms=119, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=117, response_duration_ms=1, request_bytes=1202, request_throughput_kbps=1686, response_bytes=1237, response_throughput_kbps=865, cache_hit=true}
default	21:02:24.048139-0500	MobileJarvisNative	Task <84A12EFD-74DB-4236-BC7B-31008AEED7FD>.<6> finished successfully
default	21:02:24.072087-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:24.073453-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.417s
default	21:02:24.073637-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> now using Connection 3
default	21:02:24.074541-0500	MobileJarvisNative	0x1474fa698 ID=24 Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> sent request, body S 272
default	21:02:24.184891-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:24.188453-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> now using Connection 3
default	21:02:24.189795-0500	MobileJarvisNative	0x1474f8398 ID=28 Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> sent request, body N 0
default	21:02:24.201962-0500	MobileJarvisNative	0x1474fa698 ID=24 Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> received response, status 200 content U
default	21:02:24.204128-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> response ended
default	21:02:24.205054-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> done using Connection 3
default	21:02:24.205329-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> summary for task success {transaction_duration_ms=131, response_status=200, connection=3, reused=1, reused_after_ms=26, request_start_ms=0, request_duration_ms=0, response_start_ms=128, response_duration_ms=2, request_bytes=1237, request_throughput_kbps=1728, response_bytes=1211, response_throughput_kbps=441, cache_hit=true}
default	21:02:24.205538-0500	MobileJarvisNative	Task <1389A601-BD96-497C-8ACE-E7833806AF4E>.<7> finished successfully
default	21:02:24.217497-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:02:24.217641-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:02:24.218226-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:02:24.218291-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:02:24.218430-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:02:24.218493-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:02:24.218622-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:02:24.218832-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:02:24.218961-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:02:24.219196-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:02:24.219274-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:02:24.219345-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:02:24.219822-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:02:24.221702-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001025efc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001026d455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102287700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010228a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:02:24.222336-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:02:24.222871-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:02:24.476847-0500	MobileJarvisNative	0x1474f8398 ID=28 Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> received response, status 200 content U
default	21:02:24.477431-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> response ended
default	21:02:24.477663-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.822s
default	21:02:24.477842-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> done using Connection 3
default	21:02:24.477999-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> summary for task success {transaction_duration_ms=292, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=1, response_start_ms=290, response_duration_ms=1, request_bytes=1141, request_throughput_kbps=761, response_bytes=966, response_throughput_kbps=807, cache_hit=true}
default	21:02:24.478045-0500	MobileJarvisNative	Task <E4F8AD46-6C73-4791-B124-5CC7BBE98400>.<8> finished successfully
default	21:02:24.503758-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:24.506139-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.849s
default	21:02:24.506742-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> now using Connection 3
default	21:02:24.507579-0500	MobileJarvisNative	0x1474fb2d8 ID=32 Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> sent request, body N 0
default	21:02:24.627968-0500	MobileJarvisNative	0x1474fb2d8 ID=32 Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> received response, status 200 content U
default	21:02:24.628443-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> response ended
default	21:02:24.628776-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.973s
default	21:02:24.629096-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> done using Connection 3
default	21:02:24.629220-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> summary for task success {transaction_duration_ms=125, response_status=200, connection=3, reused=1, reused_after_ms=27, request_start_ms=1, request_duration_ms=0, response_start_ms=124, response_duration_ms=1, request_bytes=1186, request_throughput_kbps=2102, response_bytes=737, response_throughput_kbps=626, cache_hit=true}
default	21:02:24.629280-0500	MobileJarvisNative	Task <8BD10295-1A55-4F58-B3D4-36A66DFBCB43>.<9> finished successfully
default	21:02:24.630908-0500	runningboardd	Invalidating assertion 33-9740-2065095 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
default	21:02:24.655174-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:02:24.656567-0500	MobileJarvisNative	[C3] event: client:connection_reused @2.001s
default	21:02:24.656858-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> now using Connection 3
default	21:02:24.657428-0500	MobileJarvisNative	0x1474f8398 ID=36 Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> sent request, body N 0
default	21:02:24.790543-0500	MobileJarvisNative	0x1474f8398 ID=36 Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> received response, status 200 content U
default	21:02:24.791464-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> response ended
default	21:02:24.791922-0500	MobileJarvisNative	[C3] event: client:connection_idle @2.136s
default	21:02:24.792140-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> done using Connection 3
default	21:02:24.792352-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> summary for task success {transaction_duration_ms=136, response_status=200, connection=3, reused=1, reused_after_ms=27, request_start_ms=1, request_duration_ms=0, response_start_ms=134, response_duration_ms=1, request_bytes=1245, request_throughput_kbps=2009, response_bytes=749, response_throughput_kbps=482, cache_hit=true}
default	21:02:24.792414-0500	MobileJarvisNative	Task <106E4D70-6509-4831-9695-8DE74E2A6449>.<10> finished successfully
default	21:02:24.793939-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9740-2065096 target:9740 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:02:24.794473-0500	runningboardd	Assertion 33-9740-2065096 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) will be created as inactive as start-time-defining assertions exist
default	21:02:25.804244-0500	runningboardd	Invalidating assertion 33-9740-2065096 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9740]
