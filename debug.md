default	22:25:58.961783-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.85471e+06 touches: {(
    <UITouch: 0x865e8f640> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x8657f8000; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; labelAccessoryType: recently updated; isTouchDownInIcon: YES>; location in window: {140.33332824707031, 577}; previous location in window: {140.33332824707031, 577}; location in view: {20.333328247070312, 20}; previous location in view: {20.333328247070312, 20}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x8654d0000; baseClass = UITapGestureRecognizer; state = Possible; view =
default	22:25:59.158438-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	22:25:59.161714-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	22:25:59.170329-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:25:59.170414-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:25:59.170496-0500	SpringBoard	Created <FBWorkspace: 0x86eff1220; <FBApplicationProcess: 0x86c1f5c80; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	22:25:59.170684-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	22:25:59.171242-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	22:25:59.171432-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-1991250 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:25:59.171521-0500	runningboardd	Assertion 33-34-1991250 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	22:25:59.174815-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:25:59.174865-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	22:25:59.186777-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.006080 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	22:25:59.186866-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbdeb383c0>)
default	22:25:59.187247-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbdec86220> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdebadbc0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdebaef10> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdebaca50> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdebad980> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbdec84240> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdebac660> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbdec86700> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdebafe10> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/CA89411D-84DE-41CB-94D2-CC4B01828B1E/tmp" }
		"HOME" => <string: 0xbdebaf060> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/CA89411D-84DE-41CB-94D2-CC4B01828B1E" }
		"CFFIXED_USER_HOME" => <string: 0xbdebac120> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/CA89411D-84DE-41CB-94D2-CC4B01828B1E" }
	}
	"_AdditionalProperties" => <dictionary: 0xbdec84ae0> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbdec85f80> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbdec855c0> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdebaef70> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdebae910> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdebaf8a0> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[33c7][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdebae670> { count = 1, capacity = 8, contents =
		0: <string: 0xbdebaca20> { length = 113, contents = "/var/containers/Bundle/Application/1BD9098A-3FD2-4525-B466-162D53AF5952/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdebad500> { length = 113, contents = "/var/containers/Bundle/Application/1BD9098A-3FD2-4525-B466-162D53AF5952/MobileJarvisNative.app/MobileJarvisNative" }
}
default	22:25:59.198187-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	22:25:59.199294-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	22:25:59.202105-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x865e8da40; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	22:25:59.214596-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857871b00; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581dd030; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x8581dc620; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{-368, 249.42933121443576}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 10:25:59 PM CDT;}
default	22:25:59.214627-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d38680 10-07-2025 22:25:59, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:25:59.215781-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86973ea00; type: MainTransition; transitionID: F904C164-EA8A-4BA3-9A1A-8CE2774E9646; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:25:59.215878-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x8669c7c30> {
    <SBSwitcherModifierEventResponse: 0x868387c90> {
	    <SBTimerEventSwitcherEventResponse: 0x8649278a0; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x865ced710>;
	};
    <SBSwitcherModifierEventResponse: 0x8679b5200> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86d115140; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x866140c00; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86b6b3cc0; visible: YES; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x869a4d220; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	22:25:59.243091-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x866504480; type: MainTransition; transitionID: F904C164-EA8A-4BA3-9A1A-8CE2774E9646; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:25:59.246963-0500	kernel	/private/var/containers/Bundle/Application/1BD9098A-3FD2-4525-B466-162D53AF5952/MobileJarvisNative.app/MobileJarvisNative[1259] ==> container
default	22:25:59.247428-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] Memory Limits: active 2098 inactive 2098
 <private>
default	22:25:59.247452-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] This process will be managed.
default	22:25:59.247477-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
error	22:25:59.247858-0500	kernel	Sandbox: MobileJarvisNative(1259) deny(1) sysctl-read kern.bootargs
default	22:25:59.247984-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.248013-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:25:59.248039-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-1991251 target:1259 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:25:59.248092-0500	runningboardd	Assertion 33-33-1991251 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) will be created as active
default	22:25:59.248871-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] Set jetsam priority to 100 [0] flag[1]
default	22:25:59.248897-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] Resuming task.
default	22:25:59.248920-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] Set darwin role to: UserInteractiveFocal
default	22:25:59.250169-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] set Memory Limits to Soft Active (2098)
default	22:25:59.250220-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] reported to RB as running
default	22:25:59.250443-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86be5b880; type: SceneReady; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865d52220; contentOrientation: "portrait (1)"; lastInteractionTime: 200777; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86ec37240; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:25:59.250585-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] Set Carplay mode to: 0
default	22:25:59.250715-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] visiblity is yes
default	22:25:59.251188-0500	SpringBoard	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.251318-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Bootstrap success!
default	22:25:59.251368-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:25:59.251527-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.252435-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:25:59.252646-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Setting process task state to: Running
default	22:25:59.252697-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Setting process visibility to: Foreground
default	22:25:59.252787-0500	SpringBoard	Did not create a new process: A pending process for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> already exists.
default	22:25:59.253096-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.253242-0500	CommCenter	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.253269-0500	CommCenter	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.254043-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Registering event dispatcher after bootstrap
default	22:25:59.254313-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Initial launch assertion state: ForegroundFocal.
default	22:25:59.254487-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86c1f5c80; app<com.hightowerai.MobileJarvisNative>:1259(v840F0)>
default	22:25:59.255486-0500	healthd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.255536-0500	healthd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.256017-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1991250:FBApplicationProcess" age:00:00:00  id:51539642334 [System: PrevIdle SysAct]
default	22:25:59.270664-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	22:25:59.273279-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:25:59.277458-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:25:59.279143-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86efc7510.
default	22:25:59.279169-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Registered new scene: <FBUIApplicationWorkspaceScene: 0x86ed5a7c0; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	22:25:59.279192-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	22:25:59.279217-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Workspace interruption policy did change: reconnect
default	22:25:59.279331-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x86be5b080 count:1
default	22:25:59.279386-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	22:25:59.279411-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	22:25:59.279791-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-1991252 target:1259 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	22:25:59.279819-0500	runningboardd	Assertion 33-34-1991252 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) will be created as inactive as originator process has not exited
default	22:25:59.279898-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:1259 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [1259]; recentSceneIdentityTokensByPID: {1259: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:25:59.279972-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:1259 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [1259]; recentSceneIdentityTokensByPID: {1259: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:25:59.280891-0500	SpringBoard	Now tracking: <FBScene: 0x869272c00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:25:59.281084-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	22:25:59.281196-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	22:25:59.281311-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	22:25:59.281604-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	22:25:59.281821-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	22:25:59.281923-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	22:25:59.282555-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x866e046a0; pid: 1259; taskState: Running; visibility: Foreground>
default	22:25:59.285147-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:25:59.299609-0500	dasd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.299700-0500	dasd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.299942-0500	WirelessRadioManagerd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.300555-0500	locationd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.300607-0500	WirelessRadioManagerd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.300668-0500	locationd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.300982-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 1259;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	22:25:59.301182-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":1259, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:25:59.303145-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":1259, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	22:25:59.304090-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":1259, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:25:59.305043-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:25:59.307012-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":1259, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:25:59.307120-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	22:25:59.307204-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	22:25:59.307270-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	22:25:59.307307-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:25:59.307415-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:25:59.310364-0500	symptomsd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.310427-0500	symptomsd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.312182-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	22:25:59.312256-0500	wifid	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.312396-0500	wifid	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.316179-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	22:25:59.316831-0500	backboardd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.316857-0500	backboardd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.317783-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:25:59.317807-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:25:59.319112-0500	gamepolicyd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.319188-0500	gamepolicyd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:25:59.319576-0500	watchdogd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.319658-0500	watchdogd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.321681-0500	audiomxd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.321795-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.322290-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	22:25:59.324522-0500	PerfPowerServices	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.324549-0500	PerfPowerServices	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.328799-0500	UserEventAgent	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.328927-0500	UserEventAgent	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.329860-0500	useractivityd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.329930-0500	useractivityd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.335727-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	22:25:59.335983-0500	callservicesd	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.336602-0500	callservicesd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.343877-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.344127-0500	CommCenter	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.344363-0500	healthd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.344554-0500	backboardd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.344932-0500	locationd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.345191-0500	symptomsd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.345380-0500	dasd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.345565-0500	callservicesd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.345825-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.345870-0500	WirelessRadioManagerd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.346123-0500	useractivityd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.346297-0500	UserEventAgent	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.346517-0500	wifid	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.346831-0500	watchdogd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.346858-0500	gamepolicyd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:25:59.347166-0500	PerfPowerServices	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.374022-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:0 whitelisted=1
default	22:25:59.398286-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	22:25:59.448832-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	22:25:59.513422-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	22:25:59.591394-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Stationary): InfraUptime:43169.6secs Channel: 157 Bandwidth: 80Mhz Rssi: -35 {-44 -40} Cca: 8 (S:2 O:2 I:3) Snr: 30 BcnPer: 28.6% (49, 51.2%) TxFrameCnt: 106 TxPer: 0.0% TxReTrans: 0 TxRetryRatio: 0.0% RxFrameCnt: 92 RxRetryFrames: 1 RxRetryRatio: 1.1% TxRate: 1200950 RxRate: 1200950 FBRate: 720580 TxFwFrms: 45 TxFwFail: 0 Noise: -86 {-86 -89 -3} time: 1.6secs fgApp: com.hightowerai.MobileJarvisNative V: T
default	22:25:59.600347-0500	MobileJarvisNative	[0x1058b0000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	22:25:59.600377-0500	MobileJarvisNative	[0x1058b0100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	22:25:59.605292-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	22:25:59.605319-0500	MobileJarvisNative	Creating new background assertion
default	22:25:59.605545-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x104a4d6e0>
default	22:25:59.605570-0500	MobileJarvisNative	Initializing connection
default	22:25:59.605616-0500	MobileJarvisNative	Removing all cached process handles
default	22:25:59.605638-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	22:25:59.605689-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	22:25:59.605739-0500	MobileJarvisNative	[0x1058b0200] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:25:59.605901-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] as ready
default	22:25:59.606506-0500	MobileJarvisNative	Handshake succeeded
default	22:25:59.606540-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:25:59.606687-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-1259-1991253 target:1259 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	22:25:59.606719-0500	runningboardd	Assertion 33-1259-1991253 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) will be created as inactive as start-time-defining assertions exist
default	22:25:59.606791-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:25:59.606815-0500	MobileJarvisNative	Created background task <private>.
default	22:25:59.607254-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	22:25:59.607281-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	22:25:59.607474-0500	MobileJarvisNative	[0x1058c0140] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:25:59.607669-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:35F79FD9-52A6-4016-9EEE-F3DF727471BA pid:1259 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 1259;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:25:59.608048-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	22:25:59.608082-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:25:59.608112-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc98206180; IOHIDEventSystemConnectionRef: 0xc9bcdf000; vpid: 1259(v840F0); taskPort: 0x119767; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:35F79FD9-52A6-4016-9EEE-F3DF727471BA pid:1259 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 1259;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:25:59.608150-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:25:59.608913-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	22:25:59.610016-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	22:25:59.610327-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	22:25:59.610471-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	22:25:59.610529-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	22:25:59.611047-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	22:25:59.612128-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	22:25:59.612509-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	22:25:59.612535-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	22:25:59.612792-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	22:25:59.613089-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	22:25:59.614089-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	22:25:59.614633-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	22:25:59.614722-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	22:25:59.614748-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10589df00 <private>> attempting immediate handshake from activate
default	22:25:59.614772-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10589df00 <private>> sent handshake
default	22:25:59.614797-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1058fdfe0>
default	22:25:59.614846-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Connection established.
default	22:25:59.614871-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x865eaea00>
default	22:25:59.614921-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Connection to remote process established!
default	22:25:59.615139-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615168-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	22:25:59.615318-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615377-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615405-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0xeda2] to process 0x86c1f5c80 (watchdog: 19.63s)
default	22:25:59.615430-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	22:25:59.615456-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615506-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615531-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615566-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73b80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615596-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615619-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615643-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615669-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615693-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615716-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x86be588a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] remnants=0>
default	22:25:59.615797-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	22:25:59.616170-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86be58520; pid: 1259; taskState: Running; visibility: Foreground>
default	22:25:59.616296-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	22:25:59.616556-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	22:25:59.616744-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	22:25:59.616771-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1058c0640> for initial
default	22:25:59.616854-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1058c0640> for CADisplay KVO
default	22:25:59.617588-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	22:25:59.617661-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	22:25:59.619172-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	22:25:59.619631-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	22:25:59.619849-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	22:25:59.619898-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	22:25:59.620115-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	22:25:59.620143-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:25:59.620170-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:25:59.620203-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:25:59.620490-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	22:25:59.625991-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:25:59.626046-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x104a4d6e0>
default	22:25:59.626071-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:25:59.626120-0500	MobileJarvisNative	Created background task <private>.
default	22:25:59.626581-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	22:25:59.626818-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.626892-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.628623-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.631450-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1059b9570>; with scene: <UIWindowScene: 0x104a5a2e0>
default	22:25:59.631731-0500	MobileJarvisNative	0x1059d4c00 setDelegate:<0x1059d4b40 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	22:25:59.631891-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.632219-0500	MobileJarvisNative	[0x1059b9500] Initialized with scene: <UIWindowScene: 0x104a5a2e0>; behavior: <_UIEventDeferringBehavior_iOS: 0x1058fee60>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	22:25:59.632497-0500	MobileJarvisNative	[0x1058c1040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:25:59.633260-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	22:25:59.634646-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.637907-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.638303-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
error	22:25:59.638997-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	22:25:59.639126-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.641129-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:25:59.641200-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	22:25:59.641230-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	22:25:59.641437-0500	MobileJarvisNative	startConnection
default	22:25:59.643032-0500	MobileJarvisNative	[0x1058c1900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	22:25:59.643451-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	22:25:59.646439-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(1259) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	22:25:59.646588-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	22:25:59.646790-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.646838-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.647011-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:25:59.647066-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.647114-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.647567-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:25:59.647592-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.647814-0500	backboardd	new deferring rules for pid:34: [
    [34-615E]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-615F]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1259>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	22:25:59.649089-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1259>
]
default	22:25:59.649380-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1259>
]
default	22:25:59.649485-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x105968e10; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	22:25:59.649512-0500	MobileJarvisNative	observerPolicyDidChange: 0x105968e10 -> <_UIKeyWindowSceneObserver: 0x1059d4d50>
default	22:25:59.650670-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	22:25:59.679250-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	22:25:59.683672-0500	MobileJarvisNative	<UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0) Scene updated orientation preferences: none -> ( Pu )
default	22:25:59.686064-0500	MobileJarvisNative	Key window API is scene-level: YES
default	22:25:59.686096-0500	MobileJarvisNative	UIWindowScene: 0x104a5a2e0: Window became key in scene: UIWindow: 0x104a51c00; contextId: 0x65920BDA: reason: UIWindowScene: 0x104a5a2e0: Window requested to become key in scene: 0x104a51c00
default	22:25:59.686145-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x104a5a2e0; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x104a51c00; reason: UIWindowScene: 0x104a5a2e0: Window requested to become key in scene: 0x104a51c00
default	22:25:59.686188-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x104a51c00; contextId: 0x65920BDA; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.686222-0500	MobileJarvisNative	[0x1059b9500] Begin local event deferring requested for token: 0x10588c480; environments: 1; reason: UIWindowScene: 0x104a5a2e0: Begin event deferring in keyboardFocus for window: 0x104a51c00
default	22:25:59.687587-0500	backboardd	new deferring rules for pid:1259: [[1259-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x65920BDA; pid: 1259>; reason: …gin event deferring in keyboardFocus for window: 0x104a51c00]
default	22:25:59.688208-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(1259) setClientFocusContext
    focusContext:<contextID:1704070106 sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:25:59.688853-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 1259 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.688884-0500	SpringBoard	arbiter: arbiter requested pid 1259 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.689016-0500	SpringBoard	[coordinator] using arbiter suggested pid 1259 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.689066-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.689347-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 1259; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1259>
default	22:25:59.689940-0500	SpringBoard	set currentFocus PID:1259 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	22:25:59.690290-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1259>,
    <token: 0x65920BDA; pid: 1259>
]
default	22:25:59.690320-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1259>,
    <token: 0x65920BDA; pid: 1259>
]
default	22:25:59.693952-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	22:25:59.695316-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x105968e10; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	22:25:59.695365-0500	MobileJarvisNative	observerPolicyDidChange: 0x105968e10 -> <_UIKeyWindowSceneObserver: 0x1059d4d50>
default	22:25:59.695395-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	22:25:59.695555-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	22:25:59.698287-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.698507-0500	MobileJarvisNative	establishing connection to agent
default	22:25:59.698832-0500	MobileJarvisNative	[0x1059687d0] Session created.
default	22:25:59.698857-0500	MobileJarvisNative	[0x1059687d0] Session created from connection [0x1058b0800]
default	22:25:59.698884-0500	MobileJarvisNative	[0x1058b0800] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	22:25:59.699615-0500	SpringBoard	Scene <FBScene: 0x869272c00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	22:25:59.699640-0500	backboardd	new scene host settings: contextID:65920BDA <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	22:25:59.699757-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	22:25:59.700236-0500	MobileJarvisNative	[0x1059687d0] Session activated
default	22:25:59.700900-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.717741-0500	SpringBoard	[0x86ed5a7c0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0xeda2] completed with success: 1
default	22:25:59.717880-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	22:25:59.717907-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [D91F8C36-35BB-4978-8530-28800622F76F] (reporting strategy default)>
default	22:25:59.717933-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [499F2C43-F936-4FCE-B728-A54E169482B9] (reporting strategy default)>
default	22:25:59.717957-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [D91F8C36-35BB-4978-8530-28800622F76F] (reporting strategy default)> as the global parent
default	22:25:59.718611-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	22:25:59.718660-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	22:25:59.718686-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	22:25:59.718709-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	22:25:59.718839-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x104a5a2e0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.718872-0500	MobileJarvisNative	[0x1059b9500] Scene target of event deferring environments did update: scene: 0x104a5a2e0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:25:59.718899-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x104a5a2e0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.718925-0500	MobileJarvisNative	Stack[KeyWindow] 0x10584c810: Migrate scenes from LastOneWins -> SystemShellManaged
default	22:25:59.718950-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	22:25:59.719126-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:25:59.719388-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:25:59.719577-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 1259<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1991254 target:1259<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	22:25:59.719765-0500	MobileJarvisNative	[0x1059b9500] Scene target of event deferring environments did update: scene: 0x104a5a2e0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:25:59.719820-0500	runningboardd	Assertion 33-34-1991254 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	22:25:59.719942-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x104a5a2e0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:25:59.719993-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	22:25:59.720017-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	22:25:59.720048-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104a5a2e0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:25:59.720273-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:25:59.720299-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	22:25:59.720324-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	22:25:59.720402-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	22:25:59.720446-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:25:59.723392-0500	MobileJarvisNative	Updating configuration of monitor M1259-1
default	22:25:59.723486-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1991254 payload 15918742631522514469>
)} lost:{(
)}>
default	22:25:59.724138-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	22:25:59.724247-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:25:59.724615-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:25:59.724865-0500	MobileJarvisNative	[0x1058b0500] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	22:25:59.724981-0500	runningboardd	Invalidating assertion 33-34-1991254 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) from originator [osservice<com.apple.SpringBoard>:34]
default	22:25:59.725079-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	22:25:59.725105-0500	MobileJarvisNative	[0x1058b0b00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:25:59.725131-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.725205-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	22:25:59.725255-0500	MobileJarvisNative	[0x1058b0900] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	22:25:59.725720-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 1259<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1991255 target:1259<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	22:25:59.725835-0500	runningboardd	Assertion 33-34-1991255 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	22:25:59.726000-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86bfc3b60; type: SceneReady; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865d52220; contentOrientation: "portrait (1)"; lastInteractionTime: 200777; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86ec37240; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:25:59.726888-0500	MobileJarvisNative	[0x1058b0500] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:25:59.727087-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	22:25:59.727116-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:25:59.727251-0500	MobileJarvisNative	startConnection
default	22:25:59.727282-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	22:25:59.727308-0500	MobileJarvisNative	forceReloadInputViews
default	22:25:59.727334-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	22:25:59.727550-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1991255 payload 15918742631522514469>
)} lost:{(
)}>
default	22:25:59.727926-0500	MobileJarvisNative	Hit the server for a process handle 1c5a358e000004eb that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:25:59.728003-0500	MobileJarvisNative	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:25:59.728553-0500	healthd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.728900-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	22:25:59.729231-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:25:59.729541-0500	MobileJarvisNative	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:25:59.730561-0500	CommCenter	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.730930-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:25:59.732239-0500	backboardd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.733639-0500	symptomsd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.733974-0500	locationd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734206-0500	dasd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734354-0500	callservicesd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734474-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734735-0500	WirelessRadioManagerd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734832-0500	useractivityd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.734855-0500	UserEventAgent	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.735142-0500	wifid	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.735193-0500	PerfPowerServices	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.735502-0500	watchdogd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.735528-0500	gamepolicyd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:25:59.761857-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:25:59.762049-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:25:59.767359-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	22:25:59.769145-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	22:25:59.770853-0500	MobileJarvisNative	[0x105af8000] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	22:25:59.770942-0500	MobileJarvisNative	<SOServiceConnection: 0x105ad4f40>: new XPC connection
default	22:25:59.781672-0500	MobileJarvisNative	<nw_activity 50:1 [D91F8C36-35BB-4978-8530-28800622F76F] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 633ms
default	22:25:59.781852-0500	MobileJarvisNative	<nw_activity 50:2 [499F2C43-F936-4FCE-B728-A54E169482B9] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 633ms
default	22:25:59.781934-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [D91F8C36-35BB-4978-8530-28800622F76F] (global parent) (reporting strategy default) complete (reason success)>
default	22:25:59.781958-0500	MobileJarvisNative	Unset the global parent activity
default	22:25:59.790950-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-1259-1991256 target:1259 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:25:59.791063-0500	runningboardd	Assertion 33-1259-1991256 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) will be created as inactive as start-time-defining assertions exist
default	22:25:59.803843-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	22:25:59.803975-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	22:25:59.804007-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	22:25:59.804687-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	22:25:59.806618-0500	MobileJarvisNative	container_query_get_single_result: success
default	22:25:59.806749-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	22:25:59.809988-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	22:25:59.810625-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:25:59.813453-0500	MobileJarvisNative	[0x105af8280] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	22:25:59.814193-0500	MobileJarvisNative	Garbage collection for alternative services
default	22:25:59.814419-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	22:25:59.815907-0500	MobileJarvisNative	Connection 1: enabling TLS
default	22:25:59.815937-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	22:25:59.815968-0500	MobileJarvisNative	[C1 5F021520-3972-451B-A4F6-4E1CA5F96F60 Hostname#6836be21:443 quic-connection, url hash: a9c48c41, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{C7A4A75E-6EA4-459D-8D4F-3F1C75A3398E}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	22:25:59.816370-0500	MobileJarvisNative	[C1 Hostname#6836be21:443 initial parent-flow ((null))] event: path:start @0.000s
default	22:25:59.817210-0500	MobileJarvisNative	[C1 Hostname#6836be21:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: F6117B91-F14B-439F-BDFE-38C42D0A31C3
default	22:25:59.817796-0500	MobileJarvisNative	[C1 Hostname#6836be21:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	22:25:59.817823-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	22:25:59.817904-0500	MobileJarvisNative	[C1 Hostname#6836be21:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	22:25:59.817991-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 initial path ((null))] event: path:start @0.001s
default	22:25:59.818209-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: F6117B91-F14B-439F-BDFE-38C42D0A31C3
default	22:25:59.818295-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.002s
default	22:25:59.818691-0500	MobileJarvisNative	[C1.1.1 Hostname#6836be21:443 initial path ((null))] event: path:start @0.002s
default	22:25:59.818957-0500	MobileJarvisNative	[C1.1.1 Hostname#6836be21:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 5BA2B5E0-E46C-4DD8-B4A2-548CA2E062D3
default	22:25:59.819063-0500	MobileJarvisNative	[C1.1.1 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.002s
default	22:25:59.819118-0500	MobileJarvisNative	[0x1058b1200] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	22:25:59.819178-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> setting up Connection 1
default	22:25:59.829710-0500	MobileJarvisNative	[C1.1.1 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.006s
default	22:25:59.829829-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:restart @0.006s
default	22:25:59.830148-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 initial path ((null))] event: path:start @0.007s
default	22:25:59.830522-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.007s, uuid: 4DCF13FD-D96F-4D20-A8DE-07DCFA5B2B3B
default	22:25:59.830631-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.007s
default	22:25:59.832496-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#e0286c9e.443
default	22:25:59.832530-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#6eaa5e95.443
default	22:25:59.832608-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#5558e1d9:443
default	22:25:59.832663-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#bc5f6b1a:443
default	22:25:59.833484-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.009s
default	22:25:59.833683-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 initial path ((null))] event: path:start @0.010s
default	22:25:59.833847-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.010s, uuid: 6680C180-ADBD-42A7-9F92-AE117624F911
default	22:25:59.833961-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.010s
default	22:25:59.834171-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.011s
default	22:25:59.836431-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
)} lost:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1991254 payload 15918742631522514469>
)}>
default	22:25:59.836678-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	22:25:59.836726-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	22:25:59.836750-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/1BD9098A-3FD2-4525-B466-162D53AF5952/MobileJarvisNative.app
default	22:25:59.836776-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	22:25:59.836801-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	22:25:59.860646-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.2.1:2] [-12f2b3fd0fc677b9] created QUIC connection (spin bit disabled)
default	22:25:59.861231-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.043s
default	22:25:59.861388-0500	MobileJarvisNative	nw_path_evaluator_start [FEFDA757-6CC2-4FFD-A8A2-4A6E6BF27A5E <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	22:25:59.861538-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	22:25:59.861619-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	22:25:59.861723-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	22:25:59.861798-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-asteria-en
default	22:25:59.862356-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.2.1:2] [-12f2b3fd0fc677b9] TLS stream is: [C2]
default	22:25:59.862385-0500	MobileJarvisNative	[C2 12252843-7698-47C9-8498-517E1897EDF7 IPv6#e0286c9e.443 quic-connection, url hash: a9c48c41, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{C7A4A75E-6EA4-459D-8D4F-3F1C75A3398E}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	22:25:59.862447-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:25:59.862500-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 6680C180-ADBD-42A7-9F92-AE117624F911
default	22:25:59.862612-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:25:59.862644-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	22:25:59.862696-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:25:59.862723-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:25:59.862904-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x105b76200] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:25:59.863015-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x105b76200] Client handshake started
default	22:25:59.863092-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS client enter_early_data
default	22:25:59.863301-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS client read_server_hello
default	22:25:59.865545-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#6eaa5e95.443
default	22:25:59.865571-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#5558e1d9:443
default	22:25:59.865597-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#bc5f6b1a:443
default	22:25:59.865715-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.047s
default	22:25:59.880800-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86cdc1200; type: MainTransition; transitionID: F904C164-EA8A-4BA3-9A1A-8CE2774E9646; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:25:59.881794-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86efeb1e0> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86efe9470>;
    <SBSwitcherModifierEventResponse: 0x86efebe40> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86efe8c30>;
	    <SBSwitcherModifierEventResponse: 0x86efea610> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86efeac70; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86a49aac0; visible: NO; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x86ec3ed00; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x8656a6dc0; active: NO; appLayout: <SBAppLayout: 0x869e33a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	22:25:59.885380-0500	MobileJarvisNative	[0x105afb0c0] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	22:25:59.894222-0500	SpringBoard	Front display did change: <SBApplication: 0x869273500; com.hightowerai.MobileJarvisNative>
default	22:25:59.900557-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session (null) [0x0] with pid '1259' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	22:25:59.900670-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '1259' moved to ForegroundRunning and is not allowed to play in the background
default	22:25:59.912297-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:25:59.913599-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:25:59.913630-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:25:59.914169-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f67a: {
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
default	22:25:59.916188-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1059cc9f0 with ID: 0x6f67a
default	22:25:59.918904-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	22:25:59.918952-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	22:25:59.919002-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	22:25:59.919051-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	22:25:59.919220-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	22:25:59.920243-0500	MobileJarvisNative	Requesting calls from host
default	22:25:59.923881-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857870200; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581df250; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x8581dc850; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{-368, 249.42933121443576}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 10:25:59 PM CDT;}
default	22:25:59.929200-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857871b00 10-07-2025 22:25:59, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:25:59.930289-0500	MobileJarvisNative	[0x105afb200] activating connection: mach=true listener=false peer=false name=com.apple.callkit.callcontrollerhost
default	22:25:59.930509-0500	MobileJarvisNative	Received requested calls from host: <private>
default	22:25:59.931629-0500	MobileJarvisNative	[0x1058b3800] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	22:25:59.934452-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:25:59.935512-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	22:25:59.943846-0500	MobileJarvisNative	[0x1058b3d00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	22:25:59.945353-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Available: true, Technology: vocalizer]'
default	22:25:59.945657-0500	MobileJarvisNative	[0x105afb340] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	22:25:59.950267-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:25:59.963386-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:25:59.963435-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_server_hello
default	22:25:59.963721-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:25:59.963951-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_certificate_request
default	22:25:59.964127-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_server_certificate
default	22:25:59.964152-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:25:59.964410-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: NO
default	22:25:59.964701-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x105b76200] Performing external trust evaluation
default	22:25:59.964879-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x105b76200] Asyncing for external verify block
default	22:25:59.965295-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	22:25:59.965482-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> auth completion disp=1 cred=0x0
default	22:25:59.965821-0500	MobileJarvisNative	(Trust 0x10ece0780) No pending evals, starting
default	22:25:59.965922-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	22:25:59.965948-0500	MobileJarvisNative	[0x1058b3900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:25:59.966317-0500	MobileJarvisNative	[0x1058b3b00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:25:59.966398-0500	MobileJarvisNative	(Trust 0x10ece0780) Completed async eval kickoff
default	22:25:59.972351-0500	MobileJarvisNative	(Trust 0x10ece0780) trustd returned 4
default	22:25:59.972548-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	22:25:59.972594-0500	MobileJarvisNative	(Trust 0x1058be040) No pending evals, starting
default	22:25:59.972728-0500	MobileJarvisNative	[0x1058b3a00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:25:59.972831-0500	MobileJarvisNative	(Trust 0x1058be040) Completed async eval kickoff
default	22:25:59.972913-0500	MobileJarvisNative	[0x1058b3b00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:25:59.978267-0500	MobileJarvisNative	(Trust 0x1058be040) trustd returned 4
default	22:25:59.978339-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	22:25:59.978365-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x105b76200] Returning from external verify block with result: true
default	22:25:59.978421-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x105b76200] Certificate verification result: OK
default	22:25:59.978815-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client read_server_finished
default	22:25:59.978874-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:25:59.978902-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:25:59.978928-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client send_client_certificate
default	22:25:59.978954-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client complete_second_flight
default	22:25:59.979167-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS 1.3 client done
default	22:25:59.979221-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS client finish_client_handshake
default	22:25:59.979401-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b76200] Client handshake state: TLS client done
default	22:25:59.979433-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x105b76200] Client handshake done
default	22:25:59.980091-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x105b76200] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(119ms) flight_time(100ms) rtt(100ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:25:59.980587-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:25:59.980683-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.119s
default	22:25:59.980808-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	22:25:59.980875-0500	MobileJarvisNative	[C2 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.120s
default	22:25:59.980926-0500	MobileJarvisNative	[0x1058b3a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:25:59.981770-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	22:25:59.981827-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] QUIC connection established in 121.693 ms, RTT 98.812 ms
default	22:25:59.981854-0500	MobileJarvisNative	nw_flow_connected [C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:25:59.981977-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.165s
default	22:25:59.982033-0500	MobileJarvisNative	nw_flow_connected [C1.1.2.1 IPv6#e0286c9e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-4002467147)
default	22:25:59.982441-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.165s
default	22:25:59.982635-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.165s
default	22:25:59.982693-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.165s
default	22:25:59.982939-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.166s
default	22:25:59.983019-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.166s
default	22:25:59.983076-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.166s
default	22:25:59.983103-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#e0286c9e.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	22:25:59.983326-0500	MobileJarvisNative	[C1 IPv6#e0286c9e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.166s
default	22:25:59.983560-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	22:25:59.983586-0500	MobileJarvisNative	[C1 IPv6#e0286c9e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.167s
default	22:25:59.983611-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	22:25:59.984198-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] path over en0 received event established
default	22:25:59.984396-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] promoted path 0x105a91a40 over en0 to primary
default	22:25:59.984477-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.2.1:2] Calling notify with interface <private>
default	22:25:59.984663-0500	MobileJarvisNative	[C1.1.2.1 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.168s, uuid: 6680C180-ADBD-42A7-9F92-AE117624F911
default	22:25:59.984865-0500	MobileJarvisNative	[C1.1.2 Hostname#6836be21:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.168s, uuid: 4DCF13FD-D96F-4D20-A8DE-07DCFA5B2B3B
default	22:25:59.984924-0500	MobileJarvisNative	[C1.1 Hostname#6836be21:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.168s, uuid: F6117B91-F14B-439F-BDFE-38C42D0A31C3
default	22:25:59.984985-0500	MobileJarvisNative	[C1 IPv6#e0286c9e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.168s, uuid: F6117B91-F14B-439F-BDFE-38C42D0A31C3
default	22:25:59.985063-0500	MobileJarvisNative	Connection 1: connected successfully
default	22:25:59.985086-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	22:25:59.985110-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	22:25:59.986747-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.170s
default	22:25:59.987911-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> now using Connection 1
default	22:25:59.989681-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	22:25:59.989707-0500	MobileJarvisNative	0x10ede2318 ID=0 Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> sent request, body N 0
default	22:26:00.009465-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	22:26:00.038084-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
error	22:26:00.044106-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	22:26:00.044723-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
default	22:26:00.049777-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	22:26:00.066359-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: gryphon]'
default	22:26:00.069118-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	22:26:00.069222-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	22:26:00.069248-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	22:26:00.069298-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Available: true, Technology: custom]'
default	22:26:00.070028-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	22:26:00.070077-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	22:26:00.072033-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	22:26:00.077776-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neural]'
default	22:26:00.093556-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	22:26:00.093602-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	22:26:00.093647-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	22:26:00.095273-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neuralAX, Available: true]'
default	22:26:00.102998-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	22:26:00.103105-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	22:26:00.103209-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	22:26:00.107582-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x109d12800>
default	22:26:00.155683-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	22:26:00.155710-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:26:00.155735-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	22:26:00.155760-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x104a4d6e0> for task identifier: 2
default	22:26:00.155921-0500	runningboardd	Invalidating assertion 33-1259-1991253 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
default	22:26:00.207900-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x105b76200] Asyncing for session update block
default	22:26:00.208223-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x105b76200] Asyncing for session update block
default	22:26:00.208441-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x105b76200] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(119ms) flight_time(100ms) rtt(100ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:26:00.208503-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#e0286c9e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:26:00.208637-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] creating inbound stream 3
default	22:26:00.208970-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] creating inbound stream 7
default	22:26:00.209222-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] creating inbound stream 11
default	22:26:00.209472-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.2.1:2] [-010fd820fac58f1c4f0df52031c5bf873994294f] creating inbound stream 15
default	22:26:00.210515-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x105b76200] Returning from session update block
default	22:26:00.210895-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x105b76200] Returning from session update block
default	22:26:00.211421-0500	MobileJarvisNative	0x10ede2318 ID=0 Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> received response, status 200 content U
default	22:26:00.211747-0500	MobileJarvisNative	[0x10edc8500] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:26:00.215881-0500	MobileJarvisNative	[0x10edc8500] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:26:00.217247-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> response ended
default	22:26:00.217689-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.401s
default	22:26:00.217818-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> done using Connection 1
default	22:26:00.217953-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> summary for task success {transaction_duration_ms=443, response_status=200, connection=1, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=123, secure_connection_duration_ms=121, private_relay=false, request_start_ms=212, request_duration_ms=2, response_start_ms=434, response_duration_ms=8, request_bytes=423, request_throughput_kbps=198, response_bytes=6775, response_throughput_kbps=780, cache_hit=false}
default	22:26:00.218437-0500	MobileJarvisNative	Task <82B81135-5B40-4A56-A846-0027F1413694>.<1> finished successfully
default	22:26:00.663878-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Now acquiring workspace assertion with state: ForegroundFocal.
default	22:26:00.664438-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-1991258 target:1259 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:26:00.664597-0500	runningboardd	Assertion 33-34-1991258 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) will be created as active
default	22:26:00.665590-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:26:00.667047-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1259] Dropping launch assertion.
default	22:26:00.667339-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.667470-0500	runningboardd	Invalidating assertion 33-34-1991250 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	22:26:00.667520-0500	healthd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.667777-0500	CommCenter	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.668267-0500	MobileJarvisNative	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:26:00.668343-0500	backboardd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.668521-0500	locationd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.668546-0500	symptomsd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.670537-0500	callservicesd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.670593-0500	dasd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.671056-0500	WirelessRadioManagerd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.671150-0500	useractivityd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.671401-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.671647-0500	UserEventAgent	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.671818-0500	wifid	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.672189-0500	PerfPowerServices	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.673185-0500	gamepolicyd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:26:00.673418-0500	watchdogd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.775610-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:26:00.775825-0500	SpringBoard	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.775897-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1991250:FBApplicationProcess" age:00:00:01  id:51539642334 [System: PrevIdle SysAct]
default	22:26:00.776038-0500	CommCenter	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.776468-0500	healthd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.776678-0500	backboardd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.776851-0500	MobileJarvisNative	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:26:00.777260-0500	locationd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.777729-0500	symptomsd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.777863-0500	dasd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.778111-0500	callservicesd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.778636-0500	WirelessRadioManagerd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.779191-0500	audiomxd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.780211-0500	useractivityd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.780466-0500	UserEventAgent	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.780489-0500	wifid	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.781339-0500	PerfPowerServices	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.781517-0500	gamepolicyd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:26:00.781546-0500	watchdogd	Received state update for 1259 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:26:00.824744-0500	runningboardd	Invalidating assertion 33-1259-1991256 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1259]
