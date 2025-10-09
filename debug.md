default	21:28:46.944116-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.93768e+06 touches: {(
    <UITouch: 0x865e60380> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x86bc42800; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {158, 589}; previous location in window: {158, 589}; location in view: {38, 32}; previous location in view: {38, 32}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x869f62440; baseClass = UITapGestureRecognizer; state = Possible; view = <SBIconView: 0x86bc42800>; target= <(action=tapGestureDidChange:, target=<SBIconView 0x86bc42800>)>
default	21:28:47.028565-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	21:28:47.030769-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	21:28:47.037870-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:28:47.037936-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:28:47.038297-0500	SpringBoard	Created <FBWorkspace: 0x866d6bde0; <FBApplicationProcess: 0x869a2fc00; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	21:28:47.038326-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	21:28:47.039088-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	21:28:47.039347-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-2065846 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	21:28:47.039402-0500	runningboardd	Assertion 33-34-2065846 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	21:28:47.041563-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:28:47.041589-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	21:28:47.046890-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.006080 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	21:28:47.046925-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde912bc0>)
default	21:28:47.046957-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbdea94de0> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdec7fea0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdec7f5a0> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdec7d9b0> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdec7d5c0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbdea94fc0> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdec7c4b0> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbdea97660> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdec7c810> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/8F65B4BE-603A-48E7-8D90-750B3A03BA68/tmp" }
		"HOME" => <string: 0xbdec7f1b0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/8F65B4BE-603A-48E7-8D90-750B3A03BA68" }
		"CFFIXED_USER_HOME" => <string: 0xbdec7c150> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/8F65B4BE-603A-48E7-8D90-750B3A03BA68" }
	}
	"_AdditionalProperties" => <dictionary: 0xbdea97b40> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbdea94f00> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbdea96fa0> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdec7f9f0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdec7d110> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdec7d050> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[460b][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdec7d230> { count = 1, capacity = 8, contents =
		0: <string: 0xbdec7d290> { length = 113, contents = "/var/containers/Bundle/Application/629CA0D5-2AD7-4364-B00E-3070E6E91B12/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdec7c630> { length = 113, contents = "/var/containers/Bundle/Application/629CA0D5-2AD7-4364-B00E-3070E6E91B12/MobileJarvisNative.app/MobileJarvisNative" }
}
default	21:28:47.047108-0500	kernel	/private/var/containers/Bundle/Application/629CA0D5-2AD7-4364-B00E-3070E6E91B12/MobileJarvisNative.app/MobileJarvisNative[9964] ==> container
default	21:28:47.047323-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] Memory Limits: active 2098 inactive 2098
 <private>
default	21:28:47.047348-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] This process will be managed.
default	21:28:47.047372-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.047602-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:28:47.047980-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.048095-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-2065847 target:9964 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:28:47.048291-0500	SpringBoard	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.048320-0500	runningboardd	Assertion 33-33-2065847 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as active
error	21:28:47.048403-0500	kernel	Sandbox: MobileJarvisNative(9964) deny(1) sysctl-read kern.bootargs
default	21:28:47.049671-0500	SpringBoard	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.051594-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	21:28:47.052350-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] Set jetsam priority to 100 [0] flag[1]
default	21:28:47.052469-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] Resuming task.
default	21:28:47.052532-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] Set darwin role to: UserInteractiveFocal
default	21:28:47.052558-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Bootstrap success!
default	21:28:47.052680-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	21:28:47.058710-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Setting process task state to: Running
default	21:28:47.059691-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Setting process visibility to: Foreground
default	21:28:47.062896-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x865e60540; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	21:28:47.063499-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] set Memory Limits to Soft Active (2098)
default	21:28:47.064207-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] Set Carplay mode to: 0
default	21:28:47.064327-0500	CommCenter	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.064382-0500	CommCenter	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.064457-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] visiblity is yes
default	21:28:47.064681-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:28:47.064734-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] reported to RB as running
default	21:28:47.065116-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Registering event dispatcher after bootstrap
default	21:28:47.065391-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Initial launch assertion state: ForegroundFocal.
default	21:28:47.066476-0500	SpringBoard	Adding: <FBApplicationProcess: 0x869a2fc00; app<com.hightowerai.MobileJarvisNative>:9964(v89E01)>
default	21:28:47.067389-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2065846:FBApplicationProcess" age:00:00:00  id:51539641486 [System: PrevIdle SysAct]
default	21:28:47.067476-0500	healthd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.068001-0500	healthd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.068413-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.078259-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d5a340; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581dcd90; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 9:28:47 PM CDT;}
default	21:28:47.080996-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x868737a80; type: MainTransition; transitionID: 148FF3F2-DBCC-448E-A953-1E0664639F67; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:28:47.083228-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86cc261f0> {
    <SBSwitcherModifierEventResponse: 0x86cc262b0> {
	    <SBTimerEventSwitcherEventResponse: 0x86cc257d0; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86cc270f0>;
	};
    <SBSwitcherModifierEventResponse: 0x86cc26070> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86c424240; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86cc24f90; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86c425300; visible: YES; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x86b7cd770; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	21:28:47.083693-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d5ae80 10-08-2025 21:28:47, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:28:47.094633-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	21:28:47.100845-0500	backboardd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.101246-0500	backboardd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.112133-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d30a580; type: MainTransition; transitionID: 148FF3F2-DBCC-448E-A953-1E0664639F67; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:28:47.118221-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86bf68940; type: SceneReady; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x866255ea0; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x8648d8360; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:28:47.119704-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:28:47.120819-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86ec345d0.
default	21:28:47.120846-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Registered new scene: <FBUIApplicationWorkspaceScene: 0x864fdc600; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	21:28:47.120872-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	21:28:47.120898-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Workspace interruption policy did change: reconnect
default	21:28:47.121161-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x867e486e0 count:1
default	21:28:47.121213-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	21:28:47.121238-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	21:28:47.121540-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-2065848 target:9964 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	21:28:47.121572-0500	runningboardd	Assertion 33-34-2065848 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as inactive as originator process has not exited
default	21:28:47.122634-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:9964 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9964]; recentSceneIdentityTokensByPID: {9964: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:28:47.122668-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:9964 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9964]; recentSceneIdentityTokensByPID: {9964: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:28:47.125144-0500	SpringBoard	Now tracking: <FBScene: 0x866d05800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:28:47.125222-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	21:28:47.125459-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:28:47.125509-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	21:28:47.125534-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	21:28:47.125583-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	21:28:47.125658-0500	MobileJarvisNative	[0x107888000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	21:28:47.125785-0500	MobileJarvisNative	[0x107888100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	21:28:47.125808-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	21:28:47.125858-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	21:28:47.127557-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	21:28:47.127990-0500	MobileJarvisNative	Initializing connection
default	21:28:47.128103-0500	MobileJarvisNative	Removing all cached process handles
default	21:28:47.128206-0500	MobileJarvisNative	[0x1078b0140] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.128348-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	21:28:47.128573-0500	MobileJarvisNative	Creating new background assertion
default	21:28:47.128623-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x1069df7b0>
default	21:28:47.128756-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	21:28:47.128782-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:28:47.128806-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:28:47.128858-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:3C72F940-77DB-4D09-B6A4-D23746FFD7CC pid:9964 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9964;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:28:47.129142-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc9b8effc0; IOHIDEventSystemConnectionRef: 0xc9bcdec00; vpid: 9964(v89E01); taskPort: 0xD0B33; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:3C72F940-77DB-4D09-B6A4-D23746FFD7CC pid:9964 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9964;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:28:47.129364-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	21:28:47.129395-0500	MobileJarvisNative	[0x107888400] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:28:47.129436-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	21:28:47.129579-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	21:28:47.129606-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	21:28:47.130172-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] as ready
default	21:28:47.130394-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	21:28:47.130619-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	21:28:47.130793-0500	MobileJarvisNative	Handshake succeeded
default	21:28:47.130846-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:28:47.130878-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-9964-2065849 target:9964 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	21:28:47.131779-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	21:28:47.131814-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x107879a00 <private>> attempting immediate handshake from activate
default	21:28:47.131865-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x107879a00 <private>> sent handshake
default	21:28:47.131947-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1078d1e80>
default	21:28:47.132347-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:28:47.132493-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Connection established.
default	21:28:47.132522-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x86c1b0f50>
default	21:28:47.132571-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Connection to remote process established!
default	21:28:47.132937-0500	MobileJarvisNative	Created background task <private>.
default	21:28:47.132992-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	21:28:47.133019-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1078b0640> for initial
default	21:28:47.133044-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1078b0640> for CADisplay KVO
default	21:28:47.133675-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	21:28:47.133827-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x6dbb] to process 0x869a2fc00 (watchdog: 19.97s)
default	21:28:47.133929-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	21:28:47.133954-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	21:28:47.134026-0500	runningboardd	Assertion 33-9964-2065849 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as inactive as start-time-defining assertions exist
default	21:28:47.134452-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	21:28:47.134838-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	21:28:47.135004-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	21:28:47.135183-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	21:28:47.135297-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	21:28:47.135454-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	21:28:47.135780-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	21:28:47.136090-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	21:28:47.136236-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	21:28:47.136562-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	21:28:47.136641-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	21:28:47.136699-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	21:28:47.136790-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	21:28:47.136982-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	21:28:47.137877-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	21:28:47.138076-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:28:47.138206-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:28:47.138576-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:28:47.138606-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	21:28:47.138705-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	21:28:47.139302-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	21:28:47.139354-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	21:28:47.139712-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	21:28:47.142039-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x866e733c0; pid: 9964; taskState: Running; visibility: Foreground>
default	21:28:47.142281-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:28:47.142306-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x1069df7b0>
default	21:28:47.142329-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:28:47.142353-0500	MobileJarvisNative	Created background task <private>.
default	21:28:47.142379-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	21:28:47.142477-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:28:47.142605-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142632-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142658-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142683-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142709-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142733-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142757-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142785-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x866e73e20; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142811-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x8665e7b60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142882-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x8665e7b60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142909-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x8665e7b60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142934-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x868e579c0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.142957-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x868e579c0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] remnants=0>
default	21:28:47.143102-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.143199-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.143407-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.143564-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x868126860; pid: 9964; taskState: Running; visibility: Foreground>
default	21:28:47.144053-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1079b44d0>; with scene: <UIWindowScene: 0x1069e2a90>
default	21:28:47.144519-0500	MobileJarvisNative	0x1079f08a0 setDelegate:<0x1079f0900 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	21:28:47.144754-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.144865-0500	MobileJarvisNative	[0x1079b4460] Initialized with scene: <UIWindowScene: 0x1069e2a90>; behavior: <_UIEventDeferringBehavior_iOS: 0x1078d28c0>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	21:28:47.145329-0500	MobileJarvisNative	[0x1078b1040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.145380-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	21:28:47.145600-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.146563-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.146969-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
error	21:28:47.147742-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	21:28:47.147866-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.147983-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 890C6AAF-1F80-4123-8D66-F18D6B753E63
default	21:28:47.148072-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	21:28:47.148114-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	21:28:47.148180-0500	MobileJarvisNative	startConnection
default	21:28:47.148281-0500	MobileJarvisNative	[0x1078b1900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	21:28:47.148346-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	21:28:47.149463-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9964) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	21:28:47.149543-0500	SpringBoard	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.150921-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	21:28:47.151501-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.151555-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.151734-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:28:47.151762-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.151787-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.151949-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:28:47.152030-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.152264-0500	backboardd	new deferring rules for pid:34: [
    [34-643E]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-643F]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9964>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	21:28:47.153094-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	21:28:47.154527-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9964>
]
default	21:28:47.154565-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9964>
]
default	21:28:47.154654-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x1079848c0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	21:28:47.154705-0500	MobileJarvisNative	observerPolicyDidChange: 0x1079848c0 -> <_UIKeyWindowSceneObserver: 0x1079f0c60>
default	21:28:47.158051-0500	locationd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.158195-0500	locationd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.158288-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 9964;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	21:28:47.158514-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":9964, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:28:47.158633-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	21:28:47.159410-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":9964, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	21:28:47.159452-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":9964, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:28:47.159782-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:28:47.160125-0500	MobileJarvisNative	<UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63) Scene updated orientation preferences: none -> ( Pu )
default	21:28:47.160155-0500	MobileJarvisNative	Key window API is scene-level: YES
default	21:28:47.160182-0500	MobileJarvisNative	UIWindowScene: 0x1069e2a90: Window became key in scene: UIWindow: 0x1069d76b0; contextId: 0xB6A00933: reason: UIWindowScene: 0x1069e2a90: Window requested to become key in scene: 0x1069d76b0
default	21:28:47.160212-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x1069e2a90; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x1069d76b0; reason: UIWindowScene: 0x1069e2a90: Window requested to become key in scene: 0x1069d76b0
default	21:28:47.160243-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x1069d76b0; contextId: 0xB6A00933; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.160270-0500	MobileJarvisNative	[0x1079b4460] Begin local event deferring requested for token: 0x107860420; environments: 1; reason: UIWindowScene: 0x1069e2a90: Begin event deferring in keyboardFocus for window: 0x1069d76b0
default	21:28:47.161318-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9964) setClientFocusContext
    focusContext:<contextID:3063941427 sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:28:47.161856-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":9964, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:28:47.161885-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 9964 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.161910-0500	SpringBoard	arbiter: arbiter requested pid 9964 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.161983-0500	SpringBoard	[coordinator] using arbiter suggested pid 9964 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.162009-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.162115-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	21:28:47.162215-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	21:28:47.162276-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	21:28:47.162302-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.162545-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 9964; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9964>
default	21:28:47.162944-0500	SpringBoard	set currentFocus PID:9964 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	21:28:47.163335-0500	backboardd	new deferring rules for pid:9964: [[9964-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0xB6A00933; pid: 9964>; reason: …gin event deferring in keyboardFocus for window: 0x1069d76b0]
default	21:28:47.163510-0500	SpringBoard	Scene <FBScene: 0x866d05800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	21:28:47.163535-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	21:28:47.163861-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	21:28:47.164382-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	21:28:47.164428-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	21:28:47.164674-0500	backboardd	new scene host settings: contextID:B6A00933 <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	21:28:47.165055-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:28:47.165143-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:28:47.166064-0500	MobileJarvisNative	establishing connection to agent
default	21:28:47.166115-0500	MobileJarvisNative	[0x107985ea0] Session created.
default	21:28:47.166165-0500	MobileJarvisNative	[0x107985ea0] Session created from connection [0x107888200]
default	21:28:47.167202-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9964>,
    <token: 0xB6A00933; pid: 9964>
]
default	21:28:47.167231-0500	MobileJarvisNative	[0x107888200] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	21:28:47.167289-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9964>,
    <token: 0xB6A00933; pid: 9964>
]
default	21:28:47.168582-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x1079848c0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	21:28:47.168615-0500	MobileJarvisNative	observerPolicyDidChange: 0x1079848c0 -> <_UIKeyWindowSceneObserver: 0x1079f0c60>
default	21:28:47.169734-0500	MobileJarvisNative	[0x107985ea0] Session activated
default	21:28:47.169965-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	21:28:47.170085-0500	symptomsd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.170111-0500	symptomsd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.170382-0500	WirelessRadioManagerd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.170408-0500	WirelessRadioManagerd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.170974-0500	useractivityd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.171005-0500	useractivityd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.171200-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	21:28:47.171298-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	21:28:47.172178-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [F2946D96-3E38-4232-8BB6-9E245E18F358] (reporting strategy default)>
default	21:28:47.172228-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [3F6574B5-7A4A-46D2-A182-77DE2E2E2BAA] (reporting strategy default)>
default	21:28:47.172252-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [F2946D96-3E38-4232-8BB6-9E245E18F358] (reporting strategy default)> as the global parent
default	21:28:47.172323-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	21:28:47.172349-0500	SpringBoard	[0x864fdc600:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x6dbb] completed with success: 1
default	21:28:47.172418-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	21:28:47.172504-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	21:28:47.172529-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	21:28:47.172607-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x1069e2a90; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.172636-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	21:28:47.172662-0500	MobileJarvisNative	[0x1079b4460] Scene target of event deferring environments did update: scene: 0x1069e2a90; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:28:47.172691-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x1069e2a90; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.172715-0500	MobileJarvisNative	Stack[KeyWindow] 0x1079f1ce0: Migrate scenes from LastOneWins -> SystemShellManaged
default	21:28:47.172739-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	21:28:47.172789-0500	MobileJarvisNative	[0x1079b4460] Scene target of event deferring environments did update: scene: 0x1069e2a90; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:28:47.172813-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x1069e2a90; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:28:47.172863-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	21:28:47.172887-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	21:28:47.172911-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	21:28:47.173113-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:28:47.173348-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 890C6AAF-1F80-4123-8D66-F18D6B753E63
default	21:28:47.173460-0500	MobileJarvisNative	startConnection
default	21:28:47.173485-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	21:28:47.173510-0500	MobileJarvisNative	forceReloadInputViews
default	21:28:47.173536-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	21:28:47.173598-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	21:28:47.173623-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:28:47.173979-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 890C6AAF-1F80-4123-8D66-F18D6B753E63
default	21:28:47.174202-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 890C6AAF-1F80-4123-8D66-F18D6B753E63
default	21:28:47.174346-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	21:28:47.174443-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:28:47.174468-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:28:47.175002-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 9964<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2065850 target:9964<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	21:28:47.175034-0500	runningboardd	Assertion 33-34-2065850 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	21:28:47.175465-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x865c36620; type: SceneReady; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x866255ea0; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x8648d8360; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:28:47.175998-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:28:47.176165-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2065850 payload 15918742631522514469>
)} lost:{(
)}>
default	21:28:47.176985-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:28:47.177038-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:28:47.177664-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:28:47.178050-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	21:28:47.178075-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	21:28:47.178904-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	21:28:47.180994-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	21:28:47.181020-0500	MobileJarvisNative	[0x107b2d900] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	21:28:47.181318-0500	MobileJarvisNative	<SOServiceConnection: 0x107aea8c0>: new XPC connection
default	21:28:47.182166-0500	PerfPowerServices	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.182214-0500	PerfPowerServices	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.182766-0500	wifid	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.182885-0500	wifid	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.182981-0500	audiomxd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.183007-0500	audiomxd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.185448-0500	MobileJarvisNative	[0x107b2c000] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	21:28:47.186515-0500	watchdogd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.186568-0500	watchdogd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.186799-0500	dasd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.186836-0500	dasd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.187139-0500	UserEventAgent	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.187221-0500	UserEventAgent	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.187810-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9964-2065851 target:9964 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:28:47.187896-0500	runningboardd	Assertion 33-9964-2065851 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as inactive as start-time-defining assertions exist
default	21:28:47.189140-0500	gamepolicyd	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.189166-0500	gamepolicyd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:28:47.191570-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	21:28:47.191620-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	21:28:47.191644-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/629CA0D5-2AD7-4364-B00E-3070E6E91B12/MobileJarvisNative.app
default	21:28:47.191711-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	21:28:47.191742-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	21:28:47.192392-0500	CommCenter	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.192658-0500	healthd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.193262-0500	MobileJarvisNative	nw_path_evaluator_start [7DE4EB78-EF43-4B46-A004-82C6B60F88C6 <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	21:28:47.193336-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	21:28:47.193387-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	21:28:47.193444-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	21:28:47.193470-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	21:28:47.193939-0500	MobileJarvisNative	[0x107b2cf00] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	21:28:47.193964-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	21:28:47.193989-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	21:28:47.194295-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	21:28:47.195013-0500	SpringBoard	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.195421-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	21:28:47.196618-0500	MobileJarvisNative	container_query_get_single_result: success
default	21:28:47.197397-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	21:28:47.197968-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:28:47.197993-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:28:47.198335-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f879: {
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
default	21:28:47.199676-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	21:28:47.199702-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:28:47.200484-0500	audiomxd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.201103-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1079c8af0 with ID: 0x6f879
default	21:28:47.201651-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	21:28:47.201704-0500	audiomxd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.201729-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	21:28:47.201798-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	21:28:47.201881-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	21:28:47.201905-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	21:28:47.202172-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6f879, MobileJarvisNati(9964), 'prim' [0x5430ec380] with pid '9964' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	21:28:47.202209-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '9964' moved to ForegroundRunning and is not allowed to play in the background
default	21:28:47.203663-0500	MobileJarvisNative	Call host has no calls
default	21:28:47.203712-0500	MobileJarvisNative	[0x107889000] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	21:28:47.205394-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:28:47.207340-0500	MobileJarvisNative	Connection 1: enabling TLS
default	21:28:47.207775-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	21:28:47.207973-0500	MobileJarvisNative	[C1 EE575D2C-EA73-49A0-9EE9-BC9B4C1D0C06 Hostname#7f169154:443 quic-connection, url hash: e5b2a368, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{E8B8DD61-373F-4368-ABD6-B7AAAA6756EB}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:28:47.208172-0500	MobileJarvisNative	[C1 Hostname#7f169154:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:28:47.209079-0500	MobileJarvisNative	[C1 Hostname#7f169154:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 187EA812-3510-4FA8-B430-69CD3E19BB6F
default	21:28:47.209947-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	21:28:47.210796-0500	MobileJarvisNative	[C1 Hostname#7f169154:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	21:28:47.210820-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	21:28:47.212219-0500	MobileJarvisNative	[C1 Hostname#7f169154:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	21:28:47.212353-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 initial path ((null))] event: path:start @0.002s
default	21:28:47.213402-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 187EA812-3510-4FA8-B430-69CD3E19BB6F
default	21:28:47.213562-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.003s
default	21:28:47.215758-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	21:28:47.215810-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	21:28:47.216002-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	21:28:47.216084-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 initial path ((null))] event: path:start @0.004s
default	21:28:47.219305-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	21:28:47.220026-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.005s, uuid: 5A29ED00-D832-4D9E-859A-BB03EC275EE5
default	21:28:47.220808-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.006s
default	21:28:47.221066-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> setting up Connection 1
default	21:28:47.221417-0500	MobileJarvisNative	[0x107889900] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	21:28:47.225022-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#adf0128a.443
default	21:28:47.225052-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b3027f2f.443
default	21:28:47.225078-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8a640a95:443
default	21:28:47.225112-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#df6638ce:443
default	21:28:47.225615-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.010s
default	21:28:47.225871-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 initial path ((null))] event: path:start @0.010s
default	21:28:47.226052-0500	UserEventAgent	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.226546-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.010s, uuid: 356FA762-600B-448D-A2D4-99DB372EDA49
default	21:28:47.226663-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.010s
default	21:28:47.227320-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.011s
default	21:28:47.229371-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-5029c670ee473e71] created QUIC connection (spin bit enabled)
default	21:28:47.229821-0500	wifid	-[WiFiUsageApplicationSession applicationStateDidChange:withAttributes:]: application session started:com.hightowerai.MobileJarvisNative
default	21:28:47.229881-0500	MobileJarvisNative	Garbage collection for alternative services
default	21:28:47.230334-0500	wifid	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.230650-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.015s
default	21:28:47.232822-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:28:47.233031-0500	symptomsd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.234111-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-5029c670ee473e71] TLS stream is: [C2]
default	21:28:47.234390-0500	MobileJarvisNative	[C2 DC41BC94-1C98-4E93-A920-0790D3ACE8A1 IPv6#adf0128a.443 quic-connection, url hash: e5b2a368, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{E8B8DD61-373F-4368-ABD6-B7AAAA6756EB}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:28:47.234556-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:28:47.234632-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 356FA762-600B-448D-A2D4-99DB372EDA49
default	21:28:47.235394-0500	WirelessRadioManagerd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.235481-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	21:28:47.235533-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	21:28:47.236037-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.236063-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.001s
default	21:28:47.236253-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x107bbde00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:28:47.236361-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x107bbde00] Client handshake started
default	21:28:47.236416-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:47.236639-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS client enter_early_data
default	21:28:47.236768-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS client read_server_hello
default	21:28:47.237602-0500	PerfPowerServices	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.238042-0500	MobileJarvisNative	[0x10c4b0000] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	21:28:47.238445-0500	useractivityd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.239190-0500	gamepolicyd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:28:47.239314-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:28:47.239437-0500	MobileJarvisNative	Connection 3: enabling TLS
default	21:28:47.239460-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	21:28:47.239566-0500	MobileJarvisNative	[C3 4651967A-BEB0-4202-89D0-8CC56E33F5C8 Hostname#95d1b8ef:443 quic-connection, url hash: 8a6d82a6, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{3A7ECABB-4AC3-4BED-A12F-BA759180A2B0}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:28:47.239630-0500	MobileJarvisNative	[C3 Hostname#95d1b8ef:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:28:47.240178-0500	MobileJarvisNative	[C3 Hostname#95d1b8ef:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: DF174040-6DEE-4298-A76A-6D75FB0771ED
default	21:28:47.240314-0500	MobileJarvisNative	[C3 Hostname#95d1b8ef:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:28:47.240339-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	21:28:47.240453-0500	MobileJarvisNative	[C3 Hostname#95d1b8ef:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:28:47.240744-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 initial path ((null))] event: path:start @0.000s
default	21:28:47.241061-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: DF174040-6DEE-4298-A76A-6D75FB0771ED
default	21:28:47.241147-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	21:28:47.241338-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 initial path ((null))] event: path:start @0.000s
default	21:28:47.241738-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 21CAC847-0DB8-404E-8F2C-06B9FDF62D6F
default	21:28:47.241936-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	21:28:47.242006-0500	watchdogd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.242151-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Available: true, Technology: vocalizer]'
default	21:28:47.242244-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> setting up Connection 3
default	21:28:47.242475-0500	MobileJarvisNative	[0x107b2ee40] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	21:28:47.243644-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#95d1b8ef:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#360ba8f0:443
default	21:28:47.243694-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#95d1b8ef:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#dbc3bd6f:443
default	21:28:47.243881-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.002s
default	21:28:47.243958-0500	locationd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.244714-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 initial path ((null))] event: path:start @0.002s
default	21:28:47.245034-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 167DF09F-6B0C-42C6-8DA0-AB6A0D7CDB25
default	21:28:47.245147-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.002s
default	21:28:47.245810-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.003s
default	21:28:47.246057-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	21:28:47.246565-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-feec799d30050313] created QUIC connection (spin bit enabled)
default	21:28:47.247184-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.004s
default	21:28:47.248703-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-feec799d30050313] TLS stream is: [C4]
default	21:28:47.248730-0500	MobileJarvisNative	[C4 9C5DDD29-AF4B-42B7-AE9D-8588C59A84B7 IPv4#360ba8f0:443 quic-connection, url hash: 8a6d82a6, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{3A7ECABB-4AC3-4BED-A12F-BA759180A2B0}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:28:47.248790-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:28:47.248841-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 167DF09F-6B0C-42C6-8DA0-AB6A0D7CDB25
default	21:28:47.249049-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:28:47.249077-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	21:28:47.249231-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.249258-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:28:47.249521-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x107bbf000] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:28:47.249624-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x107bbf000] Client handshake started
default	21:28:47.249720-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS client enter_early_data
default	21:28:47.249798-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS client read_server_hello
default	21:28:47.250109-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6f879, MobileJarvisNati(9964), 'prim' [0x5430ec380] with pid '9964' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	21:28:47.250134-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '9964' moved to ForegroundRunning and is not allowed to play in the background
default	21:28:47.250735-0500	dasd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.251230-0500	backboardd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:47.252734-0500	MobileJarvisNative	<nw_activity 50:1 [F2946D96-3E38-4232-8BB6-9E245E18F358] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 174ms
default	21:28:47.252868-0500	MobileJarvisNative	<nw_activity 50:2 [3F6574B5-7A4A-46D2-A182-77DE2E2E2BAA] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 174ms
default	21:28:47.253137-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [F2946D96-3E38-4232-8BB6-9E245E18F358] (global parent) (reporting strategy default) complete (reason success)>
default	21:28:47.253196-0500	MobileJarvisNative	Unset the global parent activity
default	21:28:47.253434-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	21:28:47.259318-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:28:47.259370-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_server_hello
default	21:28:47.259490-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:28:47.259649-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_certificate_request
default	21:28:47.260027-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_server_certificate
default	21:28:47.260054-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:28:47.260294-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x107bbde00] Performing external trust evaluation
default	21:28:47.260370-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x107bbde00] Asyncing for external verify block
default	21:28:47.260443-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	21:28:47.260570-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> auth completion disp=1 cred=0x0
default	21:28:47.260669-0500	MobileJarvisNative	(Trust 0x10b639380) No pending evals, starting
default	21:28:47.260735-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	21:28:47.260761-0500	MobileJarvisNative	[0x10c4b0b00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.260891-0500	MobileJarvisNative	[0x10c4b0d00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.260977-0500	MobileJarvisNative	(Trust 0x10b639380) Completed async eval kickoff
default	21:28:47.262192-0500	MobileJarvisNative	(Trust 0x10b639380) trustd returned 4
default	21:28:47.262316-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:28:47.262425-0500	MobileJarvisNative	(Trust 0x10b639140) No pending evals, starting
default	21:28:47.263329-0500	MobileJarvisNative	[0x10c4b0c00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.263581-0500	MobileJarvisNative	(Trust 0x10b639140) Completed async eval kickoff
default	21:28:47.264456-0500	MobileJarvisNative	[0x10c4b0d00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.264677-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:28:47.264789-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_server_hello
default	21:28:47.264895-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:28:47.265204-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_certificate_request
default	21:28:47.265399-0500	MobileJarvisNative	(Trust 0x10b639140) trustd returned 4
default	21:28:47.265547-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	21:28:47.265573-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x107bbde00] Returning from external verify block with result: true
default	21:28:47.265652-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x107bbde00] Certificate verification result: OK
default	21:28:47.265757-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client read_server_finished
default	21:28:47.265811-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:28:47.265837-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:28:47.265894-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client send_client_certificate
default	21:28:47.265929-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client complete_second_flight
default	21:28:47.266119-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS 1.3 client done
default	21:28:47.266144-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS client finish_client_handshake
default	21:28:47.266168-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x107bbde00] Client handshake state: TLS client done
default	21:28:47.266196-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x107bbde00] Client handshake done
default	21:28:47.266539-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x107bbde00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(40ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(3) pake(0x0000)]
default	21:28:47.266614-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.266788-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.042s
default	21:28:47.266944-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	21:28:47.266973-0500	MobileJarvisNative	[C2 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.042s
default	21:28:47.267026-0500	MobileJarvisNative	[0x10c4b0c00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.267776-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:28:47.267847-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] QUIC connection established in 45.511 ms, RTT 30.351 ms
default	21:28:47.267874-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.268075-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.060s
default	21:28:47.268137-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-516317037)
default	21:28:47.268307-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.060s
default	21:28:47.268497-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.060s
default	21:28:47.268558-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.061s
default	21:28:47.268744-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.061s
default	21:28:47.268876-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.061s
default	21:28:47.268974-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.061s
default	21:28:47.269001-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#adf0128a.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:28:47.269107-0500	MobileJarvisNative	[C1 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.061s
default	21:28:47.269254-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	21:28:47.269282-0500	MobileJarvisNative	[C1 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.061s
default	21:28:47.269306-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	21:28:47.269649-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] path over en0 received event established
default	21:28:47.269798-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] promoted path 0x107a8cc40 over en0 to primary
default	21:28:47.269886-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	21:28:47.270059-0500	MobileJarvisNative	[C1.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.063s, uuid: 356FA762-600B-448D-A2D4-99DB372EDA49
default	21:28:47.270143-0500	MobileJarvisNative	[C1.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.063s, uuid: 5A29ED00-D832-4D9E-859A-BB03EC275EE5
default	21:28:47.270198-0500	MobileJarvisNative	[C1.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.063s, uuid: 187EA812-3510-4FA8-B430-69CD3E19BB6F
default	21:28:47.270226-0500	MobileJarvisNative	[C1 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.063s, uuid: 187EA812-3510-4FA8-B430-69CD3E19BB6F
default	21:28:47.270401-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_server_certificate
default	21:28:47.270425-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:28:47.270625-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x107bbf000] Performing external trust evaluation
default	21:28:47.270798-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x107bbf000] Asyncing for external verify block
default	21:28:47.270849-0500	MobileJarvisNative	Connection 1: connected successfully
default	21:28:47.270876-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	21:28:47.270901-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	21:28:47.271260-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.065s
default	21:28:47.271433-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> now using Connection 1
default	21:28:47.272062-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	21:28:47.272087-0500	MobileJarvisNative	0x107a8dc18 ID=0 Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> sent request, body N 0
default	21:28:47.272135-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	21:28:47.272213-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> auth completion disp=1 cred=0x0
default	21:28:47.272260-0500	MobileJarvisNative	(Trust 0x10b6395c0) No pending evals, starting
default	21:28:47.272376-0500	MobileJarvisNative	[0x10c4b0d00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.272399-0500	MobileJarvisNative	(Trust 0x10b6395c0) Completed async eval kickoff
default	21:28:47.273734-0500	MobileJarvisNative	(Trust 0x10b6395c0) trustd returned 4
default	21:28:47.273857-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:28:47.273926-0500	MobileJarvisNative	(Trust 0x10b639500) No pending evals, starting
default	21:28:47.274019-0500	MobileJarvisNative	[0x10c4b1000] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.274043-0500	MobileJarvisNative	(Trust 0x10b639500) Completed async eval kickoff
default	21:28:47.274116-0500	MobileJarvisNative	[0x10c4b0d00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.274660-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
error	21:28:47.274878-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	21:28:47.274925-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
default	21:28:47.275149-0500	MobileJarvisNative	(Trust 0x10b639500) trustd returned 4
default	21:28:47.275250-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	21:28:47.275275-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x107bbf000] Returning from external verify block with result: true
default	21:28:47.275325-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x107bbf000] Certificate verification result: OK
default	21:28:47.275373-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client read_server_finished
default	21:28:47.275450-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:28:47.275475-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:28:47.275501-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client send_client_certificate
default	21:28:47.275526-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client complete_second_flight
default	21:28:47.275676-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS 1.3 client done
default	21:28:47.275701-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS client finish_client_handshake
default	21:28:47.275724-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x107bbf000] Client handshake state: TLS client done
default	21:28:47.275753-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x107bbf000] Client handshake done
default	21:28:47.276240-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x107bbf000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(49ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:28:47.276293-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	21:28:47.276319-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.276431-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.048s
default	21:28:47.276753-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	21:28:47.276806-0500	MobileJarvisNative	[C4 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.048s
default	21:28:47.276880-0500	MobileJarvisNative	[0x10c4b1000] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.277487-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	21:28:47.277538-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] QUIC connection established in 49.505 ms, RTT 28.176 ms
default	21:28:47.277564-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.277703-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.053s
default	21:28:47.277755-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#360ba8f0:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-516317037)
default	21:28:47.277937-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.054s
default	21:28:47.278124-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.054s
default	21:28:47.278183-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.054s
default	21:28:47.278317-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	21:28:47.278398-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	21:28:47.278453-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	21:28:47.278480-0500	MobileJarvisNative	nw_flow_connected [C3 IPv4#360ba8f0:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:28:47.278557-0500	MobileJarvisNative	[C3 IPv4#360ba8f0:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.054s
default	21:28:47.278732-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	21:28:47.278758-0500	MobileJarvisNative	[C3 IPv4#360ba8f0:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	21:28:47.278784-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	21:28:47.279117-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] path over en0 received event established
default	21:28:47.279273-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] promoted path 0x107a8d500 over en0 to primary
default	21:28:47.279328-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	21:28:47.279525-0500	MobileJarvisNative	[C3.1.1.1 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: 167DF09F-6B0C-42C6-8DA0-AB6A0D7CDB25
default	21:28:47.279616-0500	MobileJarvisNative	[C3.1.1 Hostname#95d1b8ef:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: 21CAC847-0DB8-404E-8F2C-06B9FDF62D6F
default	21:28:47.279722-0500	MobileJarvisNative	[C3.1 Hostname#95d1b8ef:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: DF174040-6DEE-4298-A76A-6D75FB0771ED
default	21:28:47.279757-0500	MobileJarvisNative	[C3 IPv4#360ba8f0:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: DF174040-6DEE-4298-A76A-6D75FB0771ED
default	21:28:47.279927-0500	MobileJarvisNative	Connection 3: connected successfully
default	21:28:47.279954-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	21:28:47.279979-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	21:28:47.280401-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.054s
default	21:28:47.280503-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> now using Connection 3
default	21:28:47.280925-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	21:28:47.280950-0500	MobileJarvisNative	0x107a8ddd8 ID=0 Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> sent request, body N 0
default	21:28:47.282634-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x107bbde00] Asyncing for session update block
default	21:28:47.282783-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x107bbde00] Asyncing for session update block
default	21:28:47.282869-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x107bbde00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(40ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(3) pake(0x0000)]
default	21:28:47.282922-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.283077-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] creating inbound stream 3
default	21:28:47.283288-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] creating inbound stream 7
default	21:28:47.283512-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] creating inbound stream 11
default	21:28:47.283729-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-010c6c4cb85267ae510e434ce65260d7ac33e46f] creating inbound stream 15
default	21:28:47.284396-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x107bbde00] Returning from session update block
default	21:28:47.284668-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x107bbde00] Returning from session update block
default	21:28:47.285495-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: gryphon]'
default	21:28:47.286756-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x107bbf000] Asyncing for session update block
default	21:28:47.286906-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x107bbf000] Asyncing for session update block
default	21:28:47.286988-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x107bbf000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(49ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:28:47.287041-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#360ba8f0:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.287151-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] creating inbound stream 3
default	21:28:47.287420-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] creating inbound stream 7
default	21:28:47.287884-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x107bbf000] Returning from session update block
default	21:28:47.288197-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x107bbf000] Returning from session update block
default	21:28:47.288304-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] creating inbound stream 11
default	21:28:47.288578-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-0167b1ea0fa0cfe93d647fea32a0ccbae10ae2f2] creating inbound stream 15
default	21:28:47.289361-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	21:28:47.289408-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	21:28:47.289434-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	21:28:47.289506-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Available: true, Technology: custom]'
default	21:28:47.290318-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	21:28:47.290364-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Available: true, Technology: custom]
default	21:28:47.290716-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	21:28:47.291565-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neural]'
default	21:28:47.293912-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	21:28:47.293967-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neural]
default	21:28:47.293993-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	21:28:47.294738-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neuralAX]'
default	21:28:47.300261-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	21:28:47.300316-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	21:28:47.300369-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	21:28:47.303401-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x10b58fc40>
default	21:28:47.313607-0500	MobileJarvisNative	0x107a8dc18 ID=0 Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> received response, status 304 content U
default	21:28:47.313982-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> summary for task success {transaction_duration_ms=172, response_status=304, connection=1, protocol="h3", domain_lookup_duration_ms=4, connect_duration_ms=46, secure_connection_duration_ms=45, private_relay=false, request_start_ms=92, request_duration_ms=1, response_start_ms=172, response_duration_ms=0, request_bytes=454, request_throughput_kbps=419, response_bytes=372, response_throughput_kbps=0, cache_hit=true}
default	21:28:47.314040-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.145s
default	21:28:47.314126-0500	MobileJarvisNative	[0x10c4b0d00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	21:28:47.314202-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> done using Connection 1
default	21:28:47.314465-0500	MobileJarvisNative	Task <4C9977F8-DDD5-44C5-9421-29E7DD4C1B27>.<1> finished successfully
default	21:28:47.320568-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:28:47.321057-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:28:47.321140-0500	MobileJarvisNative	Connection 5: enabling TLS
default	21:28:47.321170-0500	MobileJarvisNative	Connection 5: starting, TC(0x0)
default	21:28:47.321216-0500	MobileJarvisNative	[C5 E0E56966-CC16-420B-B05D-22BBE56E8AE1 Hostname#7f169154:443 quic-connection, url hash: e5b2a368, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{F57B8E0C-AC2D-4986-AC16-CFC7B9D89128}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	21:28:47.321311-0500	MobileJarvisNative	[C5 Hostname#7f169154:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:28:47.321505-0500	MobileJarvisNative	[C5 Hostname#7f169154:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: D78A87DA-8CE9-445C-A8BA-F20BE21D39D2
default	21:28:47.321635-0500	MobileJarvisNative	[C5 Hostname#7f169154:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:28:47.321661-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	21:28:47.321743-0500	MobileJarvisNative	[C5 Hostname#7f169154:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:28:47.321835-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 initial path ((null))] event: path:start @0.000s
default	21:28:47.322084-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: D78A87DA-8CE9-445C-A8BA-F20BE21D39D2
default	21:28:47.322201-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	21:28:47.322429-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 initial path ((null))] event: path:start @0.000s
default	21:28:47.322649-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 925E3BD5-C79F-4766-88C6-184D23845B58
default	21:28:47.322766-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.000s
default	21:28:47.322874-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> setting up Connection 5
default	21:28:47.324615-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#adf0128a.443
default	21:28:47.324665-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b3027f2f.443
default	21:28:47.324698-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8a640a95:443
default	21:28:47.324723-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#df6638ce:443
default	21:28:47.324851-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.001s
default	21:28:47.325036-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 initial path ((null))] event: path:start @0.002s
default	21:28:47.325388-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 4EC96DD2-55D5-4148-862A-719AF8925864
default	21:28:47.325527-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.002s
default	21:28:47.325790-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.002s
default	21:28:47.326343-0500	MobileJarvisNative	quic_conn_initialize_inner [C5.1.1.1:2] [-c4bd6a6390aea44d] created QUIC connection (spin bit enabled)
default	21:28:47.326745-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	21:28:47.327491-0500	MobileJarvisNative	quic_crypto_new_flow [C5.1.1.1:2] [-c4bd6a6390aea44d] TLS stream is: [C6]
default	21:28:47.327518-0500	MobileJarvisNative	[C6 5CBAB9F0-C1AB-489F-9385-F2D8E35C15AF IPv6#adf0128a.443 quic-connection, url hash: e5b2a368, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{F57B8E0C-AC2D-4986-AC16-CFC7B9D89128}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	21:28:47.327573-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:28:47.327629-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 4EC96DD2-55D5-4148-862A-719AF8925864
default	21:28:47.327739-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:28:47.327768-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state preparing
default	21:28:47.327847-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.327877-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:28:47.328063-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C6:1][0x10c78cc00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:28:47.328152-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C6:1][0x10c78cc00] Client handshake started
default	21:28:47.328248-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS client enter_early_data
default	21:28:47.328327-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS client read_server_hello
default	21:28:47.353806-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:28:47.353857-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_server_hello
default	21:28:47.353935-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:28:47.354386-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_certificate_request
default	21:28:47.354553-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_server_certificate
default	21:28:47.354581-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:28:47.354832-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C6:1][0x10c78cc00] Performing external trust evaluation
default	21:28:47.354932-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C6:1][0x10c78cc00] Asyncing for external verify block
default	21:28:47.355135-0500	MobileJarvisNative	Connection 5: asked to evaluate TLS Trust
default	21:28:47.355184-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> auth completion disp=1 cred=0x0
default	21:28:47.355232-0500	MobileJarvisNative	(Trust 0x10c784780) No pending evals, starting
default	21:28:47.355331-0500	MobileJarvisNative	[0x10c4b1a00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.355355-0500	MobileJarvisNative	(Trust 0x10c784780) Completed async eval kickoff
default	21:28:47.357281-0500	MobileJarvisNative	(Trust 0x10c784780) trustd returned 4
default	21:28:47.357355-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:28:47.357403-0500	MobileJarvisNative	(Trust 0x10c784540) No pending evals, starting
default	21:28:47.357502-0500	MobileJarvisNative	[0x10c4b1b00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.357527-0500	MobileJarvisNative	(Trust 0x10c784540) Completed async eval kickoff
default	21:28:47.357577-0500	MobileJarvisNative	[0x10c4b1a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.359476-0500	MobileJarvisNative	(Trust 0x10c784540) trustd returned 4
default	21:28:47.359579-0500	MobileJarvisNative	Connection 5: TLS Trust result 0
default	21:28:47.359606-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C6:1][0x10c78cc00] Returning from external verify block with result: true
default	21:28:47.359664-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C6:1][0x10c78cc00] Certificate verification result: OK
default	21:28:47.359690-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client read_server_finished
default	21:28:47.359747-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:28:47.359774-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:28:47.359800-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client send_client_certificate
default	21:28:47.359826-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client complete_second_flight
default	21:28:47.359982-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS 1.3 client done
default	21:28:47.360008-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS client finish_client_handshake
default	21:28:47.360033-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10c78cc00] Client handshake state: TLS client done
default	21:28:47.360059-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C6:1][0x10c78cc00] Client handshake done
default	21:28:47.360374-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x10c78cc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(36ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:28:47.360475-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.360577-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.036s
default	21:28:47.360740-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state ready
default	21:28:47.360795-0500	MobileJarvisNative	[C6 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.036s
default	21:28:47.360843-0500	MobileJarvisNative	[0x10c4b1b00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.361458-0500	MobileJarvisNative	quic_pmtud_restart [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:28:47.361510-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] QUIC connection established in 37.06 ms, RTT 29.73 ms
default	21:28:47.361560-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:28:47.361686-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.039s
default	21:28:47.361741-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#adf0128a.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-516317037)
default	21:28:47.361901-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.039s
default	21:28:47.362087-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	21:28:47.362147-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	21:28:47.362348-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:28:47.362432-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:28:47.362484-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:28:47.362512-0500	MobileJarvisNative	nw_flow_connected [C5 IPv6#adf0128a.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:28:47.362596-0500	MobileJarvisNative	[C5 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.040s
default	21:28:47.362751-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state ready
default	21:28:47.362781-0500	MobileJarvisNative	[C5 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	21:28:47.362808-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C5] viability_changed_handler(true)
default	21:28:47.363109-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] path over en0 received event established
default	21:28:47.363313-0500	MobileJarvisNative	quic_migration_evaluate_primary [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] promoted path 0x107a8e680 over en0 to primary
default	21:28:47.363410-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C5.1.1.1:2] Calling notify with interface <private>
default	21:28:47.363651-0500	MobileJarvisNative	[C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.040s, uuid: 4EC96DD2-55D5-4148-862A-719AF8925864
default	21:28:47.363742-0500	MobileJarvisNative	[C5.1.1 Hostname#7f169154:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.040s, uuid: 925E3BD5-C79F-4766-88C6-184D23845B58
default	21:28:47.363801-0500	MobileJarvisNative	[C5.1 Hostname#7f169154:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.040s, uuid: D78A87DA-8CE9-445C-A8BA-F20BE21D39D2
default	21:28:47.363836-0500	MobileJarvisNative	[C5 IPv6#adf0128a.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.040s, uuid: D78A87DA-8CE9-445C-A8BA-F20BE21D39D2
default	21:28:47.363915-0500	MobileJarvisNative	Connection 5: connected successfully
default	21:28:47.363939-0500	MobileJarvisNative	Connection 5: TLS handshake complete
default	21:28:47.363964-0500	MobileJarvisNative	Connection 5: ready C(N) E(N)
default	21:28:47.364335-0500	MobileJarvisNative	[C5] event: client:connection_reused @0.040s
default	21:28:47.364483-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> now using Connection 5
default	21:28:47.364851-0500	MobileJarvisNative	Connection 5: received viability advisory(Y)
default	21:28:47.364881-0500	MobileJarvisNative	0x107a8e858 ID=0 Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> sent request, body N 0
default	21:28:47.372621-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	21:28:47.373733-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x1069e2a90> (890C6AAF-1F80-4123-8D66-F18D6B753E63)
default	21:28:47.373847-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 890C6AAF-1F80-4123-8D66-F18D6B753E63
default	21:28:47.373878-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	21:28:47.373918-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	21:28:47.374097-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	21:28:47.374167-0500	MobileJarvisNative	Updating configuration of monitor M9964-1
default	21:28:47.374634-0500	MobileJarvisNative	[0x10c4b1c00] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	21:28:47.374685-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	21:28:47.374712-0500	MobileJarvisNative	[0x10c4b1e00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:28:47.374784-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	21:28:47.374927-0500	MobileJarvisNative	[0x10c4b1c00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.375855-0500	MobileJarvisNative	Hit the server for a process handle 732046c000026ec that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.375881-0500	MobileJarvisNative	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:28:47.389709-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x10c78cc00] Asyncing for session update block
default	21:28:47.389866-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x10c78cc00] Asyncing for session update block
default	21:28:47.389949-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x10c78cc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(36ms) flight_time(31ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:28:47.390119-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:28:47.390297-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] creating inbound stream 3
default	21:28:47.390501-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] creating inbound stream 7
default	21:28:47.390734-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] creating inbound stream 11
default	21:28:47.390943-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] creating inbound stream 15
default	21:28:47.391980-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x10c78cc00] Returning from session update block
default	21:28:47.392035-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Moving): InfraUptime:15447.9secs Channel: 44 Bandwidth: 80Mhz Rssi: -44 {-53 -54} Cca: 10 (S:1 O:3 I:5) Snr: 28 BcnPer: 20.4% (49, 51.4%) TxFrameCnt: 2770 TxPer: 0.0% TxReTrans: 315 TxRetryRatio: 11.4% RxFrameCnt: 596 RxRetryFrames: 42 RxRetryRatio: 7.0% TxRate: 1080880 RxRate: 960730 FBRate: 648520 TxFwFrms: 20 TxFwFail: 0 Noise: -87 {-87 -89 -2} time: 59.0secs fgApp: com.hightowerai.MobileJarvisNative V: T
default	21:28:47.392585-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x10c78cc00] Returning from session update block
default	21:28:47.442786-0500	MobileJarvisNative	0x107a8e858 ID=0 Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> received response, status 304 content U
default	21:28:47.443152-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> summary for task success {transaction_duration_ms=122, response_status=304, connection=5, protocol="h3", domain_lookup_duration_ms=1, connect_duration_ms=38, secure_connection_duration_ms=37, private_relay=false, request_start_ms=41, request_duration_ms=0, response_start_ms=122, response_duration_ms=0, request_bytes=454, request_throughput_kbps=2358, response_bytes=372, response_throughput_kbps=0, cache_hit=true}
default	21:28:47.443242-0500	MobileJarvisNative	[C5] event: client:connection_idle @0.122s
default	21:28:47.443373-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> done using Connection 5
default	21:28:47.443591-0500	MobileJarvisNative	Task <F0323C19-AD73-4CE5-82B9-33720E5B6F1C>.<1> finished successfully
default	21:28:47.445122-0500	MobileJarvisNative	quic_frame_write_CONNECTION_CLOSE [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] sending APPLICATION_CLOSE, code 0x100, reason <null>
default	21:28:47.445148-0500	MobileJarvisNative	[C6 5CBAB9F0-C1AB-489F-9385-F2D8E35C15AF IPv6#adf0128a.443 quic-connection, url hash: e5b2a368, tls, definite, attribution: developer] cancel
default	21:28:47.446074-0500	MobileJarvisNative	[C6 5CBAB9F0-C1AB-489F-9385-F2D8E35C15AF IPv6#adf0128a.443 quic-connection, url hash: e5b2a368, tls, definite, attribution: developer] cancelled
	[C6 4EC96DD2-55D5-4148-862A-719AF8925864 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.52254<->IPv6#adf0128a.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Duration: 0.121s, QUIC @0.000s took 0.000s, TLS 1.3 took 0.036s
	bytes in/out: 5477/4458, packets in/out: 11/10, rtt: 0.031s, retransmitted bytes: 0, out-of-order bytes: 512
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	21:28:47.446358-0500	MobileJarvisNative	nw_flow_disconnected [C6 IPv6#adf0128a.443 cancelled channel-flow ((null))] Output protocol disconnected
default	21:28:47.446417-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state cancelled
default	21:28:47.446486-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.446518-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.446862-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447026-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447053-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447079-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447288-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447340-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447372-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447401-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447427-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447453-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#adf0128a.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	21:28:47.447494-0500	MobileJarvisNative	quic_conn_log_summary [C5.1.1.1:2] [-01358e1184ac327b64364011cbac3115044e131c] 
	Connection attempts: 1, RETRY received: no, PTOs: 0
	Early data: no, Keep-alives sent/acknowledged: 0/0, ECN state: unsupported, L4S: disabled
	RTT: base 29 ms, network 43 ms, latest 43 ms, minimum 29 ms, smoothed 31 ms (variance 11 ms)
	Path MTU: 1280, minimum MSS: 1232
	Migration events: 0, paths validated: 0
	Inbound unidirectional/bidirectional streams: 4/0
	Outbound unidirectional/bidirectional streams: 1/1
	DATA_BLOCKED frames sent/received: 0/0
	STREAM_DATA_BLOCKED frames sent/received: 0/0
default	21:28:47.447525-0500	MobileJarvisNative	Connection 5: cleaning up
default	21:28:47.447555-0500	MobileJarvisNative	[C5 E0E56966-CC16-420B-B05D-22BBE56E8AE1 Hostname#7f169154:443 quic-connection, url hash: e5b2a368, definite, attribution: developer] cancel
default	21:28:47.447594-0500	MobileJarvisNative	[C5 E0E56966-CC16-420B-B05D-22BBE56E8AE1 Hostname#7f169154:443 quic-connection, url hash: e5b2a368, definite, attribution: developer] cancelled
	[C5.1.1.1 4EC96DD2-55D5-4148-862A-719AF8925864 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.52254<->IPv6#adf0128a.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Privacy Stance: Not Eligible
	Duration: 0.126s, DNS @0.000s took 0.001s, QUIC @0.002s took 0.037s
	bytes in/out: 5477/4458, packets in/out: 11/10, rtt: 0.031s, retransmitted bytes: 0, out-of-order bytes: 512
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	21:28:47.448762-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state cancelled
default	21:28:47.502365-0500	MobileJarvisNative	0x107a8ddd8 ID=0 Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> received response, status 200 content U
default	21:28:47.504285-0500	MobileJarvisNative	[0x10c4b1800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:28:47.508819-0500	MobileJarvisNative	[0x10c4b1800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.523780-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> response ended
default	21:28:47.524079-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.333s
default	21:28:47.524214-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> done using Connection 3
default	21:28:47.524326-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> summary for task success {transaction_duration_ms=334, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=1, connect_duration_ms=50, secure_connection_duration_ms=49, private_relay=false, request_start_ms=56, request_duration_ms=0, response_start_ms=312, response_duration_ms=21, request_bytes=1270, request_throughput_kbps=6664, response_bytes=16374, response_throughput_kbps=728, cache_hit=true}
default	21:28:47.524357-0500	MobileJarvisNative	Task <F5097A8B-461E-4B74-AD33-AE44D4D917BE>.<1> finished successfully
default	21:28:47.525168-0500	MobileJarvisNative	[0x10c790780] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	21:28:47.548732-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	21:28:47.548789-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	21:28:47.548870-0500	MobileJarvisNative	[0x10c4b1800] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	21:28:47.553813-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	21:28:47.554270-0500	MobileJarvisNative	[0x10c790c80] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	21:28:47.555252-0500	MobileJarvisNative	[0x10c790c80] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.555279-0500	MobileJarvisNative	<private>
default	21:28:47.555345-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	21:28:47.555947-0500	MobileJarvisNative	[0x10c790c80] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	21:28:47.559737-0500	MobileJarvisNative	Executing query <HKSampleQuery 5E45F4 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.560650-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.561469-0500	MobileJarvisNative	Stopping query <HKSampleQuery 5E45F4 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.561526-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.566183-0500	MobileJarvisNative	Executing query <HKSampleQuery CAFC99 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.566695-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.567271-0500	MobileJarvisNative	Stopping query <HKSampleQuery CAFC99 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.567411-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.568483-0500	MobileJarvisNative	Executing query <HKSampleQuery 8F3E15 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.568897-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.569523-0500	MobileJarvisNative	Stopping query <HKSampleQuery 8F3E15 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.569551-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.573328-0500	MobileJarvisNative	Executing query <HKSampleQuery 4E52A6 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.573709-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.574392-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4E52A6 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.574423-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.575503-0500	MobileJarvisNative	Executing query <HKSampleQuery A25622 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.576050-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.577301-0500	MobileJarvisNative	Stopping query <HKSampleQuery A25622 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.577327-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.579976-0500	MobileJarvisNative	Executing query <HKSampleQuery FED2F8 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.580158-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.580529-0500	MobileJarvisNative	Stopping query <HKSampleQuery FED2F8 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.580559-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.581212-0500	MobileJarvisNative	Executing query <HKSampleQuery 6B0B8F QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.581511-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.582060-0500	MobileJarvisNative	Stopping query <HKSampleQuery 6B0B8F QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.582087-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.584795-0500	MobileJarvisNative	Executing query <HKSampleQuery BB90D7 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.585175-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.585783-0500	MobileJarvisNative	Stopping query <HKSampleQuery BB90D7 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.585848-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.586546-0500	MobileJarvisNative	Executing query <HKSampleQuery 26072F QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.586797-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.587229-0500	MobileJarvisNative	Stopping query <HKSampleQuery 26072F QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.587255-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.590466-0500	MobileJarvisNative	Executing query <HKSampleQuery 86BB7A QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.590809-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.591238-0500	MobileJarvisNative	Stopping query <HKSampleQuery 86BB7A QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.591270-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.592063-0500	MobileJarvisNative	Executing query <HKSampleQuery E663E7 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.592284-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.592695-0500	MobileJarvisNative	Stopping query <HKSampleQuery E663E7 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.592720-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.595434-0500	MobileJarvisNative	Executing query <HKSampleQuery 41FCF0 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.595707-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.596133-0500	MobileJarvisNative	Stopping query <HKSampleQuery 41FCF0 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.596163-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.596930-0500	MobileJarvisNative	Executing query <HKSampleQuery 51B60B QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	21:28:47.597191-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.597583-0500	MobileJarvisNative	Stopping query <HKSampleQuery 51B60B QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.597620-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.600251-0500	MobileJarvisNative	Executing query <HKSampleQuery 7F2662 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	21:28:47.600550-0500	MobileJarvisNative	[0x10c790280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:28:47.600871-0500	MobileJarvisNative	Stopping query <HKSampleQuery 7F2662 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	21:28:47.600929-0500	MobileJarvisNative	[0x10c790280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:28:47.601418-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:47.602252-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.411s
default	21:28:47.602361-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> now using Connection 3
default	21:28:47.602829-0500	MobileJarvisNative	0x107a8cfd8 ID=4 Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> sent request, body S 109
default	21:28:47.602857-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	21:28:47.602883-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:28:47.602906-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	21:28:47.602931-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x1069df7b0> for task identifier: 2
default	21:28:47.603096-0500	runningboardd	Invalidating assertion 33-9964-2065849 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:47.705672-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86cdc0c00; type: MainTransition; transitionID: 148FF3F2-DBCC-448E-A953-1E0664639F67; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:28:47.706291-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86ed98600> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86ed9b990>;
    <SBSwitcherModifierEventResponse: 0x86ed9a010> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86ed9a580>;
	    <SBSwitcherModifierEventResponse: 0x86ed9a5b0> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86ed9a430; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x8648e9480; visible: NO; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x86ec3e3a0; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x866b69260; active: NO; appLayout: <SBAppLayout: 0x86a680a00; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	21:28:47.738185-0500	SpringBoard	Front display did change: <SBApplication: 0x866d06200; com.hightowerai.MobileJarvisNative>
default	21:28:47.758665-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x859b454c0; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581ddce0; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 9:28:47 PM CDT;}
default	21:28:47.758704-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x859b46b40 10-08-2025 21:28:47, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:28:47.759876-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:28:47.960026-0500	MobileJarvisNative	0x107a8cfd8 ID=4 Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> received response, status 200 content K
default	21:28:47.961612-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> response ended
default	21:28:47.962343-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.771s
default	21:28:47.962816-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> done using Connection 3
default	21:28:47.963390-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> summary for task success {transaction_duration_ms=361, response_status=200, connection=3, reused=1, reused_after_ms=78, request_start_ms=0, request_duration_ms=0, response_start_ms=357, response_duration_ms=3, request_bytes=922, request_throughput_kbps=1800, response_bytes=887, response_throughput_kbps=267, cache_hit=true}
default	21:28:47.963622-0500	MobileJarvisNative	Task <13F7A9DD-2C13-4BEA-9B62-1B2CCAEFED6E>.<2> finished successfully
default	21:28:47.990377-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:28:47.990679-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:28:47.990911-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:28:47.990946-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:28:47.991014-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:28:47.991173-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:28:47.991298-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:28:47.991427-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:28:47.991514-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:28:47.991596-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:28:47.991657-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:28:47.991760-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:28:47.992538-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:28:47.994294-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000104fe3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001050c855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000104c7b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000104c7e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:28:47.994743-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:28:47.995170-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:28:47.996045-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:28:47.996258-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:28:47.996944-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:28:47.997036-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:28:47.997118-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:28:47.997169-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:28:47.997268-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:28:47.997370-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:28:47.997467-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:28:47.997658-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:28:47.997685-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:28:47.997714-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:28:48.028906-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:28:48.029663-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000104fe3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001050c855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000104c7b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000104c7e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:28:48.029942-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:28:48.030195-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:28:48.030255-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	21:28:48.037609-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.038158-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.039066-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.039792-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.848s
default	21:28:48.040131-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> now using Connection 3
default	21:28:48.040810-0500	MobileJarvisNative	0x11182da58 ID=8 Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> sent request, body N 0
default	21:28:48.041851-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> now using Connection 3
default	21:28:48.042714-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> now using Connection 3
default	21:28:48.043171-0500	MobileJarvisNative	0x1119641d8 ID=12 Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> sent request, body N 0
default	21:28:48.043198-0500	MobileJarvisNative	0x111964718 ID=16 Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> sent request, body N 0
default	21:28:48.133167-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Now acquiring workspace assertion with state: ForegroundFocal.
default	21:28:48.134285-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-2065853 target:9964 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	21:28:48.134685-0500	runningboardd	Assertion 33-34-2065853 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as active
default	21:28:48.136833-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:28:48.137834-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9964] Dropping launch assertion.
default	21:28:48.139288-0500	runningboardd	Invalidating assertion 33-34-2065846 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	21:28:48.139815-0500	SpringBoard	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.140280-0500	CommCenter	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.140638-0500	healthd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.141050-0500	backboardd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.141341-0500	locationd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.141741-0500	symptomsd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.142292-0500	dasd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.143260-0500	audiomxd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.143399-0500	WirelessRadioManagerd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.144201-0500	useractivityd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.144393-0500	wifid	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.144588-0500	UserEventAgent	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.145358-0500	watchdogd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.145647-0500	PerfPowerServices	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.145934-0500	MobileJarvisNative	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:28:48.145962-0500	gamepolicyd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:28:48.147313-0500	MobileJarvisNative	0x111964718 ID=16 Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> received response, status 200 content U
default	21:28:48.147773-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> response ended
default	21:28:48.148066-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> done using Connection 3
default	21:28:48.148148-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> summary for task success {transaction_duration_ms=106, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=105, response_duration_ms=0, request_bytes=1202, request_throughput_kbps=2190, response_bytes=1239, response_throughput_kbps=1596, cache_hit=true}
default	21:28:48.148205-0500	MobileJarvisNative	Task <69B3D74E-8A31-43AC-88D5-FF41DCF87FDE>.<5> finished successfully
default	21:28:48.153008-0500	runningboardd	Invalidating assertion 33-9964-2065851 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
default	21:28:48.172799-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.173434-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> now using Connection 3
default	21:28:48.173796-0500	MobileJarvisNative	0x111966a18 ID=20 Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> sent request, body N 0
default	21:28:48.231653-0500	MobileJarvisNative	0x11182da58 ID=8 Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> received response, status 200 content U
default	21:28:48.233042-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> response ended
default	21:28:48.233309-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> done using Connection 3
default	21:28:48.233477-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> summary for task success {transaction_duration_ms=195, response_status=200, connection=3, reused=1, reused_after_ms=77, request_start_ms=2, request_duration_ms=0, response_start_ms=193, response_duration_ms=1, request_bytes=1238, request_throughput_kbps=1788, response_bytes=4412, response_throughput_kbps=2449, cache_hit=true}
default	21:28:48.233560-0500	MobileJarvisNative	Task <86E817F2-CA0F-4134-A207-3446BE8AD932>.<3> finished successfully
default	21:28:48.234646-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9964-2065854 target:9964 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:28:48.234743-0500	runningboardd	Assertion 33-9964-2065854 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) will be created as inactive as start-time-defining assertions exist
default	21:28:48.251235-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:28:48.251967-0500	SpringBoard	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.252305-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2065846:FBApplicationProcess" age:00:00:01  id:51539641486 [System: SysAct]
default	21:28:48.252557-0500	CommCenter	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.252777-0500	healthd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.253573-0500	backboardd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.253952-0500	locationd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.254345-0500	symptomsd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.254558-0500	dasd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.255152-0500	WirelessRadioManagerd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.255194-0500	audiomxd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.255513-0500	useractivityd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.255821-0500	UserEventAgent	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.255861-0500	wifid	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.256411-0500	watchdogd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.256460-0500	PerfPowerServices	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:28:48.256680-0500	MobileJarvisNative	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:28:48.256714-0500	gamepolicyd	Received state update for 9964 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:28:48.301577-0500	MobileJarvisNative	0x1119641d8 ID=12 Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> received response, status 200 content U
default	21:28:48.332006-0500	MobileJarvisNative	0x111966a18 ID=20 Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> received response, status 200 content U
default	21:28:48.332773-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> response ended
default	21:28:48.333483-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> done using Connection 3
default	21:28:48.333822-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> summary for task success {transaction_duration_ms=160, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=158, response_duration_ms=2, request_bytes=1202, request_throughput_kbps=3097, response_bytes=1238, response_throughput_kbps=547, cache_hit=true}
default	21:28:48.333903-0500	MobileJarvisNative	Task <7F69FFD3-58ED-42E0-AB27-72F47895B244>.<6> finished successfully
default	21:28:48.352727-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.354944-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> now using Connection 3
default	21:28:48.356889-0500	MobileJarvisNative	0x111966d98 ID=24 Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> sent request, body S 272
default	21:28:48.360718-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> response ended
default	21:28:48.361093-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> done using Connection 3
default	21:28:48.361192-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> summary for task success {transaction_duration_ms=321, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=1, response_start_ms=261, response_duration_ms=59, request_bytes=1365, request_throughput_kbps=1016, response_bytes=61998, response_throughput_kbps=1012, cache_hit=true}
default	21:28:48.361330-0500	MobileJarvisNative	Task <CD178B5C-0CB4-4CB0-B846-B0123A27C6D8>.<4> finished successfully
default	21:28:48.466172-0500	MobileJarvisNative	0x111966d98 ID=24 Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> received response, status 200 content U
default	21:28:48.467088-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> response ended
default	21:28:48.467622-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.276s
default	21:28:48.467915-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> done using Connection 3
default	21:28:48.468132-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> summary for task success {transaction_duration_ms=114, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=1, response_start_ms=111, response_duration_ms=2, request_bytes=1237, request_throughput_kbps=611, response_bytes=1207, response_throughput_kbps=442, cache_hit=true}
default	21:28:48.468182-0500	MobileJarvisNative	Task <1235FC4A-9DB3-4D0D-8899-4AF3F6BC036E>.<7> finished successfully
default	21:28:48.483139-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	21:28:48.483321-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	21:28:48.483650-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	21:28:48.483738-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	21:28:48.483860-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	21:28:48.483951-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	21:28:48.483999-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	21:28:48.484096-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	21:28:48.484193-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	21:28:48.484241-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	21:28:48.484285-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	21:28:48.484392-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	21:28:48.484925-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	21:28:48.486840-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000104fe3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001050c855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000104c7b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000104c7e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	21:28:48.487430-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	21:28:48.487983-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	21:28:48.535464-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.539333-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.348s
default	21:28:48.539700-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> now using Connection 3
default	21:28:48.540791-0500	MobileJarvisNative	0x111966a18 ID=28 Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> sent request, body N 0
default	21:28:48.663119-0500	MobileJarvisNative	0x111966a18 ID=28 Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> received response, status 200 content U
default	21:28:48.664228-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> response ended
default	21:28:48.666562-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.473s
default	21:28:48.667217-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> done using Connection 3
default	21:28:48.667574-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> summary for task success {transaction_duration_ms=129, response_status=200, connection=3, reused=1, reused_after_ms=71, request_start_ms=3, request_duration_ms=1, response_start_ms=125, response_duration_ms=2, request_bytes=1141, request_throughput_kbps=987, response_bytes=962, response_throughput_kbps=325, cache_hit=true}
default	21:28:48.667721-0500	MobileJarvisNative	Task <F1C947EA-D5EF-406D-8AB4-6A7C5B510CB2>.<8> finished successfully
default	21:28:48.685516-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.687277-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.496s
default	21:28:48.687458-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> now using Connection 3
default	21:28:48.688087-0500	MobileJarvisNative	0x111966d98 ID=32 Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> sent request, body N 0
default	21:28:48.789644-0500	MobileJarvisNative	0x111966d98 ID=32 Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> received response, status 200 content U
default	21:28:48.790726-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> response ended
default	21:28:48.791600-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.600s
default	21:28:48.792217-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> done using Connection 3
default	21:28:48.792704-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> summary for task success {transaction_duration_ms=105, response_status=200, connection=3, reused=1, reused_after_ms=22, request_start_ms=1, request_duration_ms=0, response_start_ms=102, response_duration_ms=2, request_bytes=1186, request_throughput_kbps=1765, response_bytes=736, response_throughput_kbps=295, cache_hit=true}
default	21:28:48.792810-0500	MobileJarvisNative	Task <3123AE66-FDA5-4C32-ADC6-58ACD3B5E995>.<9> finished successfully
default	21:28:48.822010-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	21:28:48.823930-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.632s
default	21:28:48.824282-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> now using Connection 3
default	21:28:48.825187-0500	MobileJarvisNative	0x111966a18 ID=36 Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> sent request, body N 0
default	21:28:48.943756-0500	MobileJarvisNative	0x111966a18 ID=36 Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> received response, status 200 content U
default	21:28:48.944040-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> response ended
default	21:28:48.944422-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.751s
default	21:28:48.944695-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> done using Connection 3
default	21:28:48.944878-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> summary for task success {transaction_duration_ms=120, response_status=200, connection=3, reused=1, reused_after_ms=32, request_start_ms=1, request_duration_ms=0, response_start_ms=118, response_duration_ms=2, request_bytes=1245, request_throughput_kbps=1379, response_bytes=749, response_throughput_kbps=317, cache_hit=true}
default	21:28:48.944933-0500	MobileJarvisNative	Task <C5C0244E-95E7-43AA-A0D8-E50922904A02>.<10> finished successfully
default	21:28:49.286024-0500	runningboardd	Invalidating assertion 33-9964-2065854 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9964]
