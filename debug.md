default	21:08:54.482829-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.85009e+06 touches: {(
    <UITouch: 0x865f45c00> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x867eff5a0>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x86b688500; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869883520; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {158.66665649414062, 584.66665649414062}; previous location in window: {158.66665649414062, 584.66665649414062}; location in view: {38.666656494140625, 27.666656494140625}; previous location in view: {38.666656494140625, 27.666656494140625}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x8654d3700; baseClass = UITapGestureRecognizer;
default	21:08:54.578448-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	21:08:54.580817-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	21:08:54.590429-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:08:54.590480-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:08:54.590718-0500	SpringBoard	Created <FBWorkspace: 0x8690e3ac0; <FBApplicationProcess: 0x86b797480; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	21:08:54.590768-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	21:08:54.591676-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	21:08:54.591824-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-1984637 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	21:08:54.592031-0500	runningboardd	Assertion 33-34-1984637 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	21:08:54.594122-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:08:54.594146-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	21:08:54.599749-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.005007 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	21:08:54.599783-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbdeacd040>)
default	21:08:54.599939-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbdeb19680> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbde3e39f0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbde3e0cf0> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbde3e2a00> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbde3e0fc0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbdeb19ec0> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbde3e2550> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbdeb1be40> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbde3e1e90> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/353484C8-1B92-4308-B843-AAC9FAB30553/tmp" }
		"HOME" => <string: 0xbde3e29a0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/353484C8-1B92-4308-B843-AAC9FAB30553" }
		"CFFIXED_USER_HOME" => <string: 0xbde3e1290> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/353484C8-1B92-4308-B843-AAC9FAB30553" }
	}
	"_AdditionalProperties" => <dictionary: 0xbdeb18420> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbdeb1abe0> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbdeb1aee0> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbde3e0210> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbde3e3a20> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbde3e2850> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[29f7][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbde3e2670> { count = 1, capacity = 8, contents =
		0: <string: 0xbde3e0180> { length = 113, contents = "/var/containers/Bundle/Application/43CE9799-FBD1-400E-8418-2D6D4278CE0C/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbde3e2580> { length = 113, contents = "/var/containers/Bundle/Application/43CE9799-FBD1-400E-8418-2D6D4278CE0C/MobileJarvisNative.app/MobileJarvisNative" }
}
default	21:08:54.600254-0500	kernel	/private/var/containers/Bundle/Application/43CE9799-FBD1-400E-8418-2D6D4278CE0C/MobileJarvisNative.app/MobileJarvisNative[99896] ==> container
default	21:08:54.600594-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] Memory Limits: active 2098 inactive 2098
 <private>
default	21:08:54.600647-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] This process will be managed.
default	21:08:54.600708-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.601252-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:08:54.601506-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.601571-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-1984638 target:99896 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:08:54.601737-0500	runningboardd	Assertion 33-33-1984638 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]) will be created as active
default	21:08:54.602457-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] Set jetsam priority to 100 [0] flag[1]
default	21:08:54.602482-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] Resuming task.
default	21:08:54.602632-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] Set darwin role to: UserInteractiveFocal
error	21:08:54.602736-0500	kernel	Sandbox: MobileJarvisNative(99896) deny(1) sysctl-read kern.bootargs
default	21:08:54.602881-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Bootstrap success!
default	21:08:54.602931-0500	SpringBoard	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.602986-0500	SpringBoard	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.603504-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Setting process task state to: Running
default	21:08:54.603532-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Setting process visibility to: Foreground
default	21:08:54.604032-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	21:08:54.604109-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Registering event dispatcher after bootstrap
default	21:08:54.604551-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] set Memory Limits to Soft Active (2098)
default	21:08:54.604624-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Initial launch assertion state: ForegroundFocal.
default	21:08:54.604700-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] Set Carplay mode to: 0
default	21:08:54.605334-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86b797480; app<com.hightowerai.MobileJarvisNative>:99896(v833FA)>
default	21:08:54.605369-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	21:08:54.605652-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:08:54.607861-0500	CommCenter	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.607920-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x8692bef40; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	21:08:54.609172-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] reported to RB as running
default	21:08:54.609817-0500	CommCenter	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.609899-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] visiblity is yes
default	21:08:54.611884-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1984637:FBApplicationProcess" age:00:00:00  id:51539640811 [System: PrevIdle SysAct]
default	21:08:54.616684-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.618089-0500	healthd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.618115-0500	healthd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.625698-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x869489200; type: MainTransition; transitionID: 270CF511-2894-4728-9097-9433F05CBF2B; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:08:54.626568-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86edceeb0> {
    <SBSwitcherModifierEventResponse: 0x86bd20b40> {
	    <SBTimerEventSwitcherEventResponse: 0x86b5948d0; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86cd7d470>;
	};
    <SBSwitcherModifierEventResponse: 0x86d2b3060> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x8699a1280; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86edcdd10; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x8699a1e80; visible: YES; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x869a4e940; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	21:08:54.627130-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d3d740; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581dfb10; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x8581df6b0; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{390, 161.33497774217392}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 9:08:54 PM CDT;}
default	21:08:54.627159-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d3fbc0 10-07-2025 21:08:54, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:08:54.627697-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	21:08:54.641730-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x8666f6b80; type: MainTransition; transitionID: 270CF511-2894-4728-9097-9433F05CBF2B; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:08:54.647383-0500	MobileJarvisNative	[0x104888000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	21:08:54.647628-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86d022700; type: SceneReady; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x864e2d420; contentOrientation: "portrait (1)"; lastInteractionTime: 200756; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86d328ea0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:08:54.647686-0500	MobileJarvisNative	[0x104888100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	21:08:54.649121-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	21:08:54.649450-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:08:54.649856-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	21:08:54.650366-0500	MobileJarvisNative	Creating new background assertion
default	21:08:54.650394-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x103b738e0>
default	21:08:54.650432-0500	MobileJarvisNative	Initializing connection
default	21:08:54.650685-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86cd68e40.
default	21:08:54.650711-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Registered new scene: <FBUIApplicationWorkspaceScene: 0x8681b9140; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	21:08:54.650736-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	21:08:54.650845-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Workspace interruption policy did change: reconnect
default	21:08:54.650872-0500	SpringBoard	<BSCompoundAssertion:0x86b66f500> (SBApplicationAppProtectionAssistant: 0x86b66c040 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x864d261a0 count:1
default	21:08:54.650947-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	21:08:54.650970-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	21:08:54.651046-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:99896 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [99896]; recentSceneIdentityTokensByPID: {99896: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:08:54.651077-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:99896 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [99896]; recentSceneIdentityTokensByPID: {99896: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	21:08:54.651106-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:68790E31-D0DF-495E-8FF4-EF6E9CC26674 pid:99896 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 99896;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:08:54.651221-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xca266fd00; IOHIDEventSystemConnectionRef: 0xc997fbc00; vpid: 99896(v833FA); taskPort: 0xE5223; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:68790E31-D0DF-495E-8FF4-EF6E9CC26674 pid:99896 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 99896;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:08:54.651348-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	21:08:54.651462-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:08:54.651485-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:08:54.651674-0500	MobileJarvisNative	Removing all cached process handles
default	21:08:54.651746-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-1984639 target:99896 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	21:08:54.651804-0500	runningboardd	Assertion 33-34-1984639 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]) will be created as inactive as originator process has not exited
default	21:08:54.651874-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	21:08:54.652126-0500	MobileJarvisNative	[0x104888200] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:08:54.652152-0500	MobileJarvisNative	[0x1048c0500] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:08:54.652175-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	21:08:54.652261-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	21:08:54.652287-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	21:08:54.652338-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] as ready
default	21:08:54.652601-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	21:08:54.652648-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	21:08:54.653474-0500	SpringBoard	Now tracking: <FBScene: 0x866532800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:08:54.653693-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	21:08:54.653808-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	21:08:54.653876-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10487d980 <private>> attempting immediate handshake from activate
default	21:08:54.653930-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10487d980 <private>> sent handshake
default	21:08:54.653976-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1048cdf60>
default	21:08:54.654007-0500	MobileJarvisNative	Handshake succeeded
default	21:08:54.654170-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Connection established.
default	21:08:54.654223-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x8697aae60>
default	21:08:54.654273-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	21:08:54.654378-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Connection to remote process established!
default	21:08:54.655050-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	21:08:54.655101-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	21:08:54.655213-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	21:08:54.655292-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	21:08:54.655373-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x4053] to process 0x86b797480 (watchdog: 19.96s)
default	21:08:54.655397-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	21:08:54.655911-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:08:54.655939-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1048c0780> for initial
default	21:08:54.655989-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1048c0780> for CADisplay KVO
default	21:08:54.657102-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-99896-1984640 target:99896 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	21:08:54.657130-0500	runningboardd	Assertion 33-99896-1984640 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]) will be created as inactive as start-time-defining assertions exist
default	21:08:54.657275-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:08:54.657299-0500	MobileJarvisNative	Created background task <private>.
default	21:08:54.657377-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	21:08:54.658111-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	21:08:54.658844-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	21:08:54.659190-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	21:08:54.659549-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	21:08:54.659935-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	21:08:54.660231-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	21:08:54.660715-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	21:08:54.660810-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	21:08:54.661313-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	21:08:54.661336-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	21:08:54.661410-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	21:08:54.661510-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	21:08:54.661600-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	21:08:54.661912-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	21:08:54.661983-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	21:08:54.662054-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	21:08:54.663465-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	21:08:54.663651-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:08:54.663744-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:08:54.663768-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	21:08:54.663789-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	21:08:54.663863-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	21:08:54.664282-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	21:08:54.664307-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	21:08:54.664330-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	21:08:54.666865-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:08:54.666889-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x103b738e0>
default	21:08:54.666929-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	21:08:54.666970-0500	MobileJarvisNative	Created background task <private>.
default	21:08:54.667061-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	21:08:54.667205-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.667537-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.667640-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.668102-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1049a1180>; with scene: <UIWindowScene: 0x103b76930>
default	21:08:54.668271-0500	MobileJarvisNative	0x1049d4c90 setDelegate:<0x1049d4bd0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	21:08:54.668487-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.668546-0500	MobileJarvisNative	[0x1049a1260] Initialized with scene: <UIWindowScene: 0x103b76930>; behavior: <_UIEventDeferringBehavior_iOS: 0x1048ced00>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	21:08:54.668700-0500	MobileJarvisNative	[0x1048c1040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	21:08:54.668896-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x867071920; pid: 99896; taskState: Running; visibility: Foreground>
default	21:08:54.668982-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	21:08:54.669555-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.669580-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	21:08:54.669778-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.669806-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.669883-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670032-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670087-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670172-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670248-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670274-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670350-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670521-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670598-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670648-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670697-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x867071200; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] remnants=0>
default	21:08:54.670773-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.670805-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x867071160; pid: 99896; taskState: Running; visibility: Foreground>
default	21:08:54.671299-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
error	21:08:54.672086-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	21:08:54.672137-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.672522-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: C26ACF17-E26D-4C0A-8909-BADF9F76208B
default	21:08:54.672915-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	21:08:54.672943-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	21:08:54.673018-0500	MobileJarvisNative	startConnection
default	21:08:54.673046-0500	MobileJarvisNative	[0x1048c17c0] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	21:08:54.673154-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	21:08:54.673315-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(99896) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	21:08:54.673475-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	21:08:54.674355-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.674417-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.674616-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:08:54.674643-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.674669-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.675067-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	21:08:54.675095-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.675626-0500	SpringBoard	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.676939-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	21:08:54.677828-0500	backboardd	new deferring rules for pid:34: [
    [34-608B]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-608C]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <t
default	21:08:54.680270-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>
]
default	21:08:54.680527-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x104970ff0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	21:08:54.680552-0500	MobileJarvisNative	observerPolicyDidChange: 0x104970ff0 -> <_UIKeyWindowSceneObserver: 0x1049d4de0>
default	21:08:54.680581-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>
]
default	21:08:54.682352-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	21:08:54.682465-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	21:08:54.682583-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	21:08:54.683823-0500	MobileJarvisNative	<UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B) Scene updated orientation preferences: none -> ( Pu )
error	21:08:54.683846-0500	MobileJarvisNative	<private>
default	21:08:54.684020-0500	MobileJarvisNative	Key window API is scene-level: YES
default	21:08:54.684047-0500	MobileJarvisNative	UIWindowScene: 0x103b76930: Window became key in scene: UIWindow: 0x103b71890; contextId: 0xDB7AC73F: reason: UIWindowScene: 0x103b76930: Window requested to become key in scene: 0x103b71890
default	21:08:54.684075-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x103b76930; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x103b71890; reason: UIWindowScene: 0x103b76930: Window requested to become key in scene: 0x103b71890
default	21:08:54.684104-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x103b71890; contextId: 0xDB7AC73F; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.684132-0500	MobileJarvisNative	[0x1049a1260] Begin local event deferring requested for token: 0x10486df20; environments: 1; reason: UIWindowScene: 0x103b76930: Begin event deferring in keyboardFocus for window: 0x103b71890
default	21:08:54.684184-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(99896) setClientFocusContext
    focusContext:<contextID:3682256703 sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:08:54.684463-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	21:08:54.684597-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	21:08:54.684623-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	21:08:54.684676-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.684962-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 99896 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.684988-0500	MobileJarvisNative	establishing connection to agent
default	21:08:54.685013-0500	SpringBoard	arbiter: arbiter requested pid 99896 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.685089-0500	SpringBoard	[coordinator] using arbiter suggested pid 99896 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.685113-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.685139-0500	MobileJarvisNative	[0x104971860] Session created.
default	21:08:54.685239-0500	backboardd	new deferring rules for pid:99896: [[99896-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0xDB7AC73F; pid: 99896>; reason: …gin event deferring in keyboardFocus for window: 0x103b71890]
default	21:08:54.685344-0500	MobileJarvisNative	[0x104971860] Session created from connection [0x104888600]
default	21:08:54.685528-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 99896; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:54.685556-0500	MobileJarvisNative	[0x104888600] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	21:08:54.686017-0500	SpringBoard	set currentFocus PID:99896 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	21:08:54.686490-0500	SpringBoard	Scene <FBScene: 0x866532800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	21:08:54.686516-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	21:08:54.687517-0500	backboardd	new scene host settings: contextID:DB7AC73F <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	21:08:54.688473-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>,
    <token: 0xDB7AC73F; pid: 99896>
]
default	21:08:54.688513-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>,
    <token: 0xDB7AC73F; pid: 99896>
]
default	21:08:54.689937-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:08:54.690347-0500	MobileJarvisNative	[0x104971860] Session activated
default	21:08:54.691193-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x104970ff0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	21:08:54.691395-0500	MobileJarvisNative	observerPolicyDidChange: 0x104970ff0 -> <_UIKeyWindowSceneObserver: 0x1049d4de0>
default	21:08:54.691418-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	21:08:54.692883-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:08:54.693398-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x4053] completed with success: 1
default	21:08:54.693447-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [B9E8E3EA-B1C8-411B-A610-BD0F24E06618] (reporting strategy default)>
default	21:08:54.693496-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [B8EE5E7F-51AE-4B80-9200-8A07DECF15F3] (reporting strategy default)>
default	21:08:54.693546-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [B9E8E3EA-B1C8-411B-A610-BD0F24E06618] (reporting strategy default)> as the global parent
default	21:08:54.693594-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	21:08:54.693686-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	21:08:54.693732-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	21:08:54.693788-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	21:08:54.693815-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	21:08:54.693916-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	21:08:54.693941-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	21:08:54.693991-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	21:08:54.694042-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:08:54.694087-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:08:54.694607-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: C26ACF17-E26D-4C0A-8909-BADF9F76208B
default	21:08:54.695039-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x103b76930; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.695275-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	21:08:54.695302-0500	MobileJarvisNative	[0x1049a1260] Scene target of event deferring environments did update: scene: 0x103b76930; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:08:54.695327-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x103b76930; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.695353-0500	MobileJarvisNative	Stack[KeyWindow] 0x1049d6490: Migrate scenes from LastOneWins -> SystemShellManaged
default	21:08:54.695378-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	21:08:54.695426-0500	MobileJarvisNative	[0x1049a1260] Scene target of event deferring environments did update: scene: 0x103b76930; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	21:08:54.695744-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	21:08:54.695818-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	21:08:54.695844-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x103b76930; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:54.695869-0500	MobileJarvisNative	startConnection
default	21:08:54.695894-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	21:08:54.695920-0500	MobileJarvisNative	[0x104b3c280] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	21:08:54.696007-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: C26ACF17-E26D-4C0A-8909-BADF9F76208B
default	21:08:54.696288-0500	MobileJarvisNative	<SOServiceConnection: 0x104a8dac0>: new XPC connection
default	21:08:54.696312-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: C26ACF17-E26D-4C0A-8909-BADF9F76208B
default	21:08:54.696520-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	21:08:54.696613-0500	MobileJarvisNative	forceReloadInputViews
default	21:08:54.696638-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	21:08:54.696788-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 99896<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1984641 target:99896<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	21:08:54.696819-0500	runningboardd	Assertion 33-34-1984641 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	21:08:54.697088-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x867071d60; type: SceneReady; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x864e2d420; contentOrientation: "portrait (1)"; lastInteractionTime: 200756; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86d328ea0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	21:08:54.697767-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	21:08:54.700468-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	21:08:54.700855-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1984641 payload 15918742631522514469>
)} lost:{(
)}>
default	21:08:54.701647-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-99896-1984642 target:99896 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	21:08:54.701729-0500	runningboardd	Assertion 33-99896-1984642 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]) will be created as inactive as start-time-defining assertions exist
default	21:08:54.706770-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	21:08:54.706895-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	21:08:54.707107-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	21:08:54.707314-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	21:08:54.709789-0500	MobileJarvisNative	container_query_get_single_result: success
default	21:08:54.710402-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	21:08:54.711687-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	21:08:54.711949-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:08:54.712574-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:08:54.713102-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:08:54.713370-0500	MobileJarvisNative	Connection 1: enabling TLS
default	21:08:54.713418-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	21:08:54.713449-0500	MobileJarvisNative	[C1 9FD0B087-4793-4C56-A812-F5F8BF069FE2 Hostname#adf47068:443 quic-connection, url hash: 00b3090c, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{1DB9F4D8-55E2-42C5-9915-D38208071387}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	21:08:54.713509-0500	MobileJarvisNative	[C1 Hostname#adf47068:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:08:54.714041-0500	MobileJarvisNative	[C1 Hostname#adf47068:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 960E3D7D-FABE-4A44-95A8-BB22592E0269
default	21:08:54.714349-0500	MobileJarvisNative	[C1 Hostname#adf47068:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:08:54.714402-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	21:08:54.714574-0500	MobileJarvisNative	[C1 Hostname#adf47068:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:08:54.714679-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 initial path ((null))] event: path:start @0.000s
default	21:08:54.714984-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 960E3D7D-FABE-4A44-95A8-BB22592E0269
default	21:08:54.715013-0500	backboardd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.715190-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	21:08:54.715410-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 initial path ((null))] event: path:start @0.001s
default	21:08:54.715476-0500	backboardd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.716120-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: CB9729A3-F02B-44F1-BB1A-FBAC1AB79B6F
default	21:08:54.716352-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	21:08:54.716430-0500	locationd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.716593-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> setting up Connection 1
default	21:08:54.716690-0500	MobileJarvisNative	[0x104889300] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	21:08:54.716741-0500	locationd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.717086-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 99896;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	21:08:54.717184-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:08:54.717257-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":99896, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	21:08:54.717389-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:08:54.717900-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:54.720247-0500	MobileJarvisNative	Garbage collection for alternative services
default	21:08:54.720360-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:54.720437-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	21:08:54.720556-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	21:08:54.720621-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	21:08:54.720707-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:54.720931-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:54.721941-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#5749d5ec.443
default	21:08:54.721967-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#c928ba28.443
default	21:08:54.721993-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#3384defb:443
default	21:08:54.722023-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4451d195:443
default	21:08:54.722186-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.004s
default	21:08:54.722398-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 initial path ((null))] event: path:start @0.004s
default	21:08:54.722580-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.004s, uuid: E1058AB9-72BF-40D6-9F50-C6692BCC2603
default	21:08:54.722697-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.004s
default	21:08:54.722747-0500	symptomsd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.722771-0500	symptomsd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.723058-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.004s
default	21:08:54.723772-0500	callservicesd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.724056-0500	callservicesd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.725042-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-aeaa353faf78e9ba] created QUIC connection (spin bit enabled)
default	21:08:54.725269-0500	dasd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.725312-0500	dasd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.725857-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.006s
default	21:08:54.727111-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-aeaa353faf78e9ba] TLS stream is: [C2]
default	21:08:54.727138-0500	MobileJarvisNative	[C2 7CA217A4-7A1B-4A06-866B-D1A45FEB4F28 IPv6#5749d5ec.443 quic-connection, url hash: 00b3090c, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{1DB9F4D8-55E2-42C5-9915-D38208071387}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	21:08:54.727201-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:08:54.727266-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: E1058AB9-72BF-40D6-9F50-C6692BCC2603
default	21:08:54.727416-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:08:54.727443-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	21:08:54.727503-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:08:54.727529-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:08:54.728019-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x104b75200] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:08:54.728141-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x104b75200] Client handshake started
default	21:08:54.728219-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS client enter_early_data
default	21:08:54.728369-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS client read_server_hello
default	21:08:54.730566-0500	SpringBoard	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.730755-0500	CommCenter	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.730901-0500	healthd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.738862-0500	backboardd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.739353-0500	WirelessRadioManagerd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.739545-0500	WirelessRadioManagerd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.739911-0500	audiomxd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.740021-0500	audiomxd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.742640-0500	useractivityd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.742762-0500	useractivityd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.743978-0500	MobileJarvisNative	<nw_activity 50:1 [B9E8E3EA-B1C8-411B-A610-BD0F24E06618] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 139ms
default	21:08:54.744168-0500	MobileJarvisNative	<nw_activity 50:2 [B8EE5E7F-51AE-4B80-9200-8A07DECF15F3] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 139ms
default	21:08:54.744349-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [B9E8E3EA-B1C8-411B-A610-BD0F24E06618] (global parent) (reporting strategy default) complete (reason success)>
default	21:08:54.744421-0500	MobileJarvisNative	Unset the global parent activity
default	21:08:54.746731-0500	symptomsd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.746896-0500	locationd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.747340-0500	dasd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.747539-0500	callservicesd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.747978-0500	audiomxd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.748050-0500	UserEventAgent	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.748193-0500	UserEventAgent	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.748389-0500	wifid	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.748429-0500	watchdogd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.748507-0500	wifid	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.748759-0500	watchdogd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.749234-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	21:08:54.749526-0500	gamepolicyd	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.749552-0500	PerfPowerServices	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.749577-0500	gamepolicyd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:08:54.749649-0500	PerfPowerServices	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.750232-0500	useractivityd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.750313-0500	WirelessRadioManagerd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.751156-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	21:08:54.753844-0500	UserEventAgent	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.754230-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:08:54.754326-0500	watchdogd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.754414-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_server_hello
default	21:08:54.754651-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:08:54.754946-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_certificate_request
default	21:08:54.755162-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_server_certificate
default	21:08:54.755189-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:08:54.755217-0500	wifid	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.755418-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x104b75200] Performing external trust evaluation
default	21:08:54.755494-0500	gamepolicyd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	21:08:54.755546-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x104b75200] Asyncing for external verify block
default	21:08:54.755908-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	21:08:54.756032-0500	PerfPowerServices	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:54.756362-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> auth completion disp=1 cred=0x0
default	21:08:54.756514-0500	MobileJarvisNative	(Trust 0x1048bea00) No pending evals, starting
default	21:08:54.756582-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	21:08:54.756633-0500	MobileJarvisNative	[0x10488b500] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.756752-0500	MobileJarvisNative	[0x10488b700] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.756800-0500	MobileJarvisNative	(Trust 0x1048bea00) Completed async eval kickoff
default	21:08:54.757419-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	21:08:54.757492-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:0 whitelisted=1
default	21:08:54.757771-0500	MobileJarvisNative	(Trust 0x1048bea00) trustd returned 4
default	21:08:54.757844-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:08:54.757891-0500	MobileJarvisNative	(Trust 0x1048be880) No pending evals, starting
default	21:08:54.758028-0500	MobileJarvisNative	[0x10488b600] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.758053-0500	MobileJarvisNative	(Trust 0x1048be880) Completed async eval kickoff
default	21:08:54.758100-0500	MobileJarvisNative	[0x10488b700] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.759803-0500	MobileJarvisNative	(Trust 0x1048be880) trustd returned 4
default	21:08:54.759887-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	21:08:54.759912-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x104b75200] Returning from external verify block with result: true
default	21:08:54.759963-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x104b75200] Certificate verification result: OK
default	21:08:54.760060-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client read_server_finished
default	21:08:54.760118-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:08:54.760143-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:08:54.760178-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client send_client_certificate
default	21:08:54.760204-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client complete_second_flight
default	21:08:54.760382-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS 1.3 client done
default	21:08:54.760437-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS client finish_client_handshake
default	21:08:54.760462-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104b75200] Client handshake state: TLS client done
default	21:08:54.760488-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x104b75200] Client handshake done
default	21:08:54.760874-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x104b75200] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(37ms) flight_time(30ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:08:54.760974-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:08:54.761112-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.037s
default	21:08:54.761266-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	21:08:54.761323-0500	MobileJarvisNative	[C2 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.037s
default	21:08:54.761408-0500	MobileJarvisNative	[0x10488b600] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.762667-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:08:54.762720-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] QUIC connection established in 38.684 ms, RTT 29.399 ms
default	21:08:54.762819-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:08:54.762979-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.045s
default	21:08:54.763060-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#5749d5ec.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-821275903)
default	21:08:54.763252-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.045s
default	21:08:54.763524-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.045s
default	21:08:54.763648-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.045s
default	21:08:54.764240-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.045s
default	21:08:54.764344-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.045s
default	21:08:54.764421-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.045s
default	21:08:54.764453-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#5749d5ec.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:08:54.764585-0500	MobileJarvisNative	[C1 IPv6#5749d5ec.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.045s
default	21:08:54.764828-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	21:08:54.764857-0500	MobileJarvisNative	[C1 IPv6#5749d5ec.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.045s
default	21:08:54.764882-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	21:08:54.765244-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] path over en0 received event established
default	21:08:54.765398-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] promoted path 0x104a5c000 over en0 to primary
default	21:08:54.765450-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	21:08:54.765650-0500	MobileJarvisNative	[C1.1.1.1 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: E1058AB9-72BF-40D6-9F50-C6692BCC2603
default	21:08:54.765836-0500	MobileJarvisNative	[C1.1.1 Hostname#adf47068:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: CB9729A3-F02B-44F1-BB1A-FBAC1AB79B6F
default	21:08:54.765952-0500	MobileJarvisNative	[C1.1 Hostname#adf47068:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: 960E3D7D-FABE-4A44-95A8-BB22592E0269
default	21:08:54.766021-0500	MobileJarvisNative	[C1 IPv6#5749d5ec.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: 960E3D7D-FABE-4A44-95A8-BB22592E0269
default	21:08:54.766099-0500	MobileJarvisNative	Connection 1: connected successfully
default	21:08:54.766127-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	21:08:54.766205-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	21:08:54.767187-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.046s
default	21:08:54.767760-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> now using Connection 1
default	21:08:54.768213-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	21:08:54.768238-0500	MobileJarvisNative	0x104a5ca98 ID=0 Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> sent request, body N 0
default	21:08:54.768733-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	21:08:54.776417-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x104b75200] Asyncing for session update block
default	21:08:54.776645-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x104b75200] Asyncing for session update block
default	21:08:54.776751-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x104b75200] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(37ms) flight_time(30ms) rtt(30ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:08:54.776808-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#5749d5ec.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:08:54.776949-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] creating inbound stream 3
default	21:08:54.777579-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] creating inbound stream 7
default	21:08:54.778057-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x104b75200] Returning from session update block
default	21:08:54.778383-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x104b75200] Returning from session update block
default	21:08:54.781100-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] creating inbound stream 11
default	21:08:54.781312-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01571be1f907ec1e3154d5e1c407ef4d9ea14284] creating inbound stream 15
default	21:08:54.820761-0500	MobileJarvisNative	0x104a5ca98 ID=0 Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> received response, status 304 content U
default	21:08:54.821211-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.128s
default	21:08:54.821331-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> summary for task success {transaction_duration_ms=139, response_status=304, connection=1, protocol="h3", domain_lookup_duration_ms=3, connect_duration_ms=39, secure_connection_duration_ms=38, private_relay=false, request_start_ms=57, request_duration_ms=0, response_start_ms=139, response_duration_ms=0, request_bytes=463, request_throughput_kbps=2123, response_bytes=372, response_throughput_kbps=0, cache_hit=true}
default	21:08:54.821388-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> done using Connection 1
default	21:08:54.821491-0500	MobileJarvisNative	[0x104888800] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	21:08:54.821670-0500	MobileJarvisNative	Task <3B37F5AA-962B-4E3D-918C-4408024F93BE>.<1> finished successfully
default	21:08:54.828717-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:08:54.830324-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	21:08:54.830513-0500	MobileJarvisNative	Connection 3: enabling TLS
default	21:08:54.830543-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	21:08:54.830574-0500	MobileJarvisNative	[C3 A4D6B659-50EB-4A50-80FE-D10985FA65C1 Hostname#704d5812:443 quic-connection, url hash: ce78456a, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{1DB9F4D8-55E2-42C5-9915-D38208071387}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	21:08:54.830657-0500	MobileJarvisNative	[C3 Hostname#704d5812:443 initial parent-flow ((null))] event: path:start @0.000s
default	21:08:54.831171-0500	MobileJarvisNative	[C3 Hostname#704d5812:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8DA76007-DCA9-4731-B96A-3F28FBDABE1A
default	21:08:54.831306-0500	MobileJarvisNative	[C3 Hostname#704d5812:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:08:54.831331-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	21:08:54.831408-0500	MobileJarvisNative	[C3 Hostname#704d5812:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	21:08:54.831489-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 initial path ((null))] event: path:start @0.000s
default	21:08:54.832000-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	21:08:54.832793-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 8DA76007-DCA9-4731-B96A-3F28FBDABE1A
default	21:08:54.832885-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	21:08:54.833019-0500	MobileJarvisNative	[C3.1.1 Hostname#704d5812:443 initial path ((null))] event: path:start @0.001s
default	21:08:54.833230-0500	MobileJarvisNative	[C3.1.1 Hostname#704d5812:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 90153097-1291-4446-A748-858F13A24971
default	21:08:54.833339-0500	MobileJarvisNative	[C3.1.1 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	21:08:54.833398-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> setting up Connection 3
default	21:08:54.833475-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> waiting for setup of Connection 3
default	21:08:54.837483-0500	MobileJarvisNative	[C3.1.1 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.004s
default	21:08:54.837698-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:restart @0.004s
default	21:08:54.838212-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 initial path ((null))] event: path:start @0.005s
default	21:08:54.838645-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.005s, uuid: CB8B3A3F-B5CB-4E38-B4E8-325CB8A8C9D2
default	21:08:54.838761-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.005s
default	21:08:54.840996-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#5f8556e3.443
default	21:08:54.841080-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#efe16943.443
default	21:08:54.841299-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#94e4aeb2:443
default	21:08:54.841480-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#57b892ac:443
default	21:08:54.841734-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.007s
default	21:08:54.841952-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 initial path ((null))] event: path:start @0.008s
default	21:08:54.842120-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.008s, uuid: 5AAC6276-68C5-4A14-ACC8-9C4CD3673A95
default	21:08:54.842233-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.008s
default	21:08:54.842487-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.008s
default	21:08:54.843019-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.2.1:2] [-811c1a04aa6c352b] created QUIC connection (spin bit enabled)
default	21:08:54.843508-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.009s
default	21:08:54.844441-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.2.1:2] [-811c1a04aa6c352b] TLS stream is: [C4]
default	21:08:54.844468-0500	MobileJarvisNative	[C4 C19D7E1C-AD5F-40C3-8988-E9804B9D0BF3 IPv6#5f8556e3.443 quic-connection, url hash: ce78456a, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{1DB9F4D8-55E2-42C5-9915-D38208071387}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	21:08:54.844522-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	21:08:54.844593-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 5AAC6276-68C5-4A14-ACC8-9C4CD3673A95
default	21:08:54.844708-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	21:08:54.844734-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	21:08:54.844790-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:08:54.844815-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	21:08:54.845036-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x104b76c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	21:08:54.845144-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x104b76c00] Client handshake started
default	21:08:54.845223-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS client enter_early_data
default	21:08:54.845303-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS client read_server_hello
default	21:08:54.859148-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#efe16943.443
default	21:08:54.859174-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#94e4aeb2:443
default	21:08:54.859287-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#57b892ac:443
default	21:08:54.859540-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.028s
default	21:08:54.860229-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#efe16943.443
default	21:08:54.860259-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#94e4aeb2:443
default	21:08:54.860285-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#57b892ac:443
default	21:08:54.860394-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.028s
default	21:08:54.865377-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#efe16943.443
default	21:08:54.865402-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#94e4aeb2:443
default	21:08:54.865427-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#57b892ac:443
default	21:08:54.865544-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.034s
default	21:08:54.870511-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	21:08:54.870536-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_server_hello
default	21:08:54.870646-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	21:08:54.870810-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_certificate_request
default	21:08:54.870976-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_server_certificate
default	21:08:54.871004-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	21:08:54.871275-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x104b76c00] Performing external trust evaluation
default	21:08:54.871386-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x104b76c00] Asyncing for external verify block
default	21:08:54.871737-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	21:08:54.871784-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> auth completion disp=1 cred=0x0
default	21:08:54.871953-0500	MobileJarvisNative	(Trust 0x10c830e40) No pending evals, starting
default	21:08:54.872138-0500	MobileJarvisNative	[0x10c8a4400] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.872189-0500	MobileJarvisNative	(Trust 0x10c830e40) Completed async eval kickoff
default	21:08:54.873553-0500	MobileJarvisNative	(Trust 0x10c830e40) trustd returned 4
default	21:08:54.873627-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	21:08:54.873682-0500	MobileJarvisNative	(Trust 0x10c831800) No pending evals, starting
default	21:08:54.873780-0500	MobileJarvisNative	[0x10c8a4800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.873831-0500	MobileJarvisNative	(Trust 0x10c831800) Completed async eval kickoff
default	21:08:54.873950-0500	MobileJarvisNative	[0x10c8a4400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.875649-0500	MobileJarvisNative	(Trust 0x10c831800) trustd returned 4
default	21:08:54.875725-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	21:08:54.875807-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x104b76c00] Returning from external verify block with result: true
default	21:08:54.875874-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x104b76c00] Certificate verification result: OK
default	21:08:54.875900-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client read_server_finished
default	21:08:54.875953-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	21:08:54.875979-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	21:08:54.876007-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client send_client_certificate
default	21:08:54.876033-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client complete_second_flight
default	21:08:54.876192-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS 1.3 client done
default	21:08:54.876216-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS client finish_client_handshake
default	21:08:54.876241-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104b76c00] Client handshake state: TLS client done
default	21:08:54.876266-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x104b76c00] Client handshake done
default	21:08:54.876569-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x104b76c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(35ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:08:54.876650-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:08:54.876744-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.035s
default	21:08:54.876955-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	21:08:54.876982-0500	MobileJarvisNative	[C4 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.035s
default	21:08:54.877047-0500	MobileJarvisNative	[0x10c8a4800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.877748-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	21:08:54.877835-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] QUIC connection established in 36.833 ms, RTT 27.355 ms
default	21:08:54.877866-0500	MobileJarvisNative	nw_flow_connected [C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	21:08:54.878148-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.046s
default	21:08:54.878300-0500	MobileJarvisNative	nw_flow_connected [C3.1.2.1 IPv6#5f8556e3.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-821275903)
default	21:08:54.878468-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	21:08:54.878662-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	21:08:54.878726-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	21:08:54.878937-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	21:08:54.879057-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	21:08:54.879152-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	21:08:54.879179-0500	MobileJarvisNative	nw_flow_connected [C3 IPv6#5f8556e3.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	21:08:54.879276-0500	MobileJarvisNative	[C3 IPv6#5f8556e3.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.046s
default	21:08:54.879451-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	21:08:54.879478-0500	MobileJarvisNative	[C3 IPv6#5f8556e3.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	21:08:54.879524-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	21:08:54.879863-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] path over en0 received event established
default	21:08:54.880026-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] promoted path 0x104a5d6c0 over en0 to primary
default	21:08:54.880076-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.2.1:2] Calling notify with interface <private>
default	21:08:54.880323-0500	MobileJarvisNative	[C3.1.2.1 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: 5AAC6276-68C5-4A14-ACC8-9C4CD3673A95
default	21:08:54.880422-0500	MobileJarvisNative	[C3.1.2 Hostname#704d5812:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: CB8B3A3F-B5CB-4E38-B4E8-325CB8A8C9D2
default	21:08:54.880485-0500	MobileJarvisNative	[C3.1 Hostname#704d5812:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: 8DA76007-DCA9-4731-B96A-3F28FBDABE1A
default	21:08:54.880515-0500	MobileJarvisNative	[C3 IPv6#5f8556e3.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.046s, uuid: 8DA76007-DCA9-4731-B96A-3F28FBDABE1A
default	21:08:54.880621-0500	MobileJarvisNative	Connection 3: connected successfully
default	21:08:54.880645-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	21:08:54.880671-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	21:08:54.881182-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.047s
default	21:08:54.881460-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> now using Connection 3
default	21:08:54.882630-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> now using Connection 3
default	21:08:54.882996-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	21:08:54.883023-0500	MobileJarvisNative	0x104a5e158 ID=0 Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> sent request, body N 0
default	21:08:54.883048-0500	MobileJarvisNative	0x104a5e318 ID=4 Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> sent request, body N 0
default	21:08:54.903935-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x104b76c00] Asyncing for session update block
default	21:08:54.904258-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x104b76c00] Asyncing for session update block
default	21:08:54.904350-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x104b76c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(35ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	21:08:54.904412-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#5f8556e3.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	21:08:54.904558-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] creating inbound stream 3
default	21:08:54.904896-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] creating inbound stream 7
default	21:08:54.905339-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] creating inbound stream 11
default	21:08:54.905535-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01226e7a57d7b1a79e226179dbd7b242c249b2f2] creating inbound stream 15
default	21:08:54.906052-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x104b76c00] Returning from session update block
default	21:08:54.906462-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x104b76c00] Returning from session update block
default	21:08:54.925273-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	21:08:54.926394-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103b76930> (C26ACF17-E26D-4C0A-8909-BADF9F76208B)
default	21:08:54.926513-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: C26ACF17-E26D-4C0A-8909-BADF9F76208B
default	21:08:54.926556-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	21:08:54.926619-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	21:08:54.926767-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	21:08:54.926858-0500	MobileJarvisNative	Updating configuration of monitor M99896-1
default	21:08:54.927387-0500	MobileJarvisNative	[0x10c8a4b00] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	21:08:54.927558-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	21:08:54.927612-0500	MobileJarvisNative	[0x10c8a4a00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	21:08:54.927676-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	21:08:54.927913-0500	MobileJarvisNative	[0x10c8a4b00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.928544-0500	MobileJarvisNative	Hit the server for a process handle 1dbc06c800018638 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:54.928641-0500	MobileJarvisNative	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	21:08:54.940875-0500	MobileJarvisNative	0x104a5e318 ID=4 Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> received response, status 200 content K
default	21:08:54.941070-0500	MobileJarvisNative	[0x10c8a4c00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	21:08:54.943857-0500	MobileJarvisNative	[0x10c8a4c00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	21:08:54.945183-0500	MobileJarvisNative	0x104a5e158 ID=0 Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> received response, status 200 content U
default	21:08:54.945238-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> response ended
default	21:08:54.945461-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> done using Connection 3
default	21:08:54.945574-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> summary for task success {transaction_duration_ms=113, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=46, request_duration_ms=0, response_start_ms=108, response_duration_ms=4, request_bytes=449, request_throughput_kbps=1353, response_bytes=1356, response_throughput_kbps=291, cache_hit=false}
default	21:08:54.945704-0500	MobileJarvisNative	Task <5E95F17B-90F7-4B12-992E-5BB72FA8226B>.<3> finished successfully
default	21:08:55.174185-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	21:08:55.174262-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	21:08:55.174292-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	21:08:55.174319-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x103b738e0> for task identifier: 2
default	21:08:55.174695-0500	runningboardd	Invalidating assertion 33-99896-1984640 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.186615-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> response ended
default	21:08:55.187407-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.355s
default	21:08:55.187545-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> done using Connection 3
default	21:08:55.187676-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> summary for task success {transaction_duration_ms=356, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=37, secure_connection_duration_ms=36, private_relay=false, request_start_ms=47, request_duration_ms=0, response_start_ms=115, response_duration_ms=241, request_bytes=449, request_throughput_kbps=630, response_bytes=1753877, response_throughput_kbps=7096, cache_hit=false}
default	21:08:55.187840-0500	MobileJarvisNative	Task <652A6D06-BA82-4821-81CE-829AEA213904>.<2> finished successfully
default	21:08:55.251708-0500	MobileJarvisNative	[0x1048c2580] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	21:08:55.258151-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d2bc780; type: MainTransition; transitionID: 270CF511-2894-4728-9097-9433F05CBF2B; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	21:08:55.258449-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86c361c80> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86c363390>;
    <SBSwitcherModifierEventResponse: 0x86c363db0> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86c361770>;
	    <SBSwitcherModifierEventResponse: 0x86c361a40> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86c360ed0; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86b669240; visible: NO; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x867337d90; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x8673536c0; active: NO; appLayout: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	21:08:55.264015-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	21:08:55.264180-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	21:08:55.264307-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/43CE9799-FBD1-400E-8418-2D6D4278CE0C/MobileJarvisNative.app
default	21:08:55.264405-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	21:08:55.264460-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	21:08:55.265106-0500	MobileJarvisNative	nw_path_evaluator_start [B353B8ED-D1FA-4E6D-B8D0-EC6EB0EA027D <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	21:08:55.265186-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	21:08:55.265309-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	21:08:55.265389-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	21:08:55.265414-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-asteria-en
default	21:08:55.266446-0500	MobileJarvisNative	[0x1048c2d00] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	21:08:55.274233-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:08:55.274260-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	21:08:55.274763-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f623: {
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
default	21:08:55.276920-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1049b5370 with ID: 0x6f623
default	21:08:55.280930-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	21:08:55.282011-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	21:08:55.282035-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	21:08:55.282243-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	21:08:55.282310-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	21:08:55.282540-0500	MobileJarvisNative	Call host has no calls
default	21:08:55.289643-0500	audiomxd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	21:08:55.291153-0500	MobileJarvisNative	[0x10cbf6400] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	21:08:55.294106-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	21:08:55.294707-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6f623, MobileJarvisNati(99896), 'prim' [0x5430eb480] with pid '99896' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	21:08:55.294842-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '99896' moved to ForegroundRunning and is not allowed to play in the background
default	21:08:55.304361-0500	SpringBoard	Front display did change: <SBApplication: 0x865f86800; com.hightowerai.MobileJarvisNative>
error	21:08:55.305536-0500	MobileJarvisNative	[runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
error	21:08:55.305906-0500	MobileJarvisNative	Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
error	21:08:55.307053-0500	MobileJarvisNative	[runtime not ready]: Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
default	21:08:55.308902-0500	MobileJarvisNative	<private>
default	21:08:55.309792-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	21:08:55.309875-0500	MobileJarvisNative	[0x10cbf6700] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
error	21:08:55.310380-0500	MobileJarvisNative	<private>
error	21:08:55.313112-0500	MobileJarvisNative	<private>
error	21:08:55.313704-0500	MobileJarvisNative	<private>
default	21:08:55.314120-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Technology: vocalizer, Available: true]'
default	21:08:55.314507-0500	MobileJarvisNative	[0x1048c3ac0] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	21:08:55.314742-0500	MobileJarvisNative	*** Terminating app due to uncaught exception 'RCTFatalException: Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes', reason: 'Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes, stack:
getGoogleClientId@1:1427159
anonymous@1:1425263
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:1416891
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:1410267
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:1367647
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:1364908
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:1077386
loadModuleImplementation@1:67524
guardedLoadModule@1:67054
metroRequire@1:66650
anonymous@1:848949
loadModuleImplementation@1:67524
guardedLoadMod<…>
default	21:08:55.314888-0500	kernel	MobileJarvisNative[99896] Corpse allowed 1 of 5
default	21:08:55.314994-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Workspace connection invalidated.
default	21:08:55.315017-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Now flagged as pending exit for reason: workspace client connection invalidated
default	21:08:55.315448-0500	SpringBoard	com.hightowerai.MobileJarvisNative(99896) lostConnection (invalidation)
default	21:08:55.316819-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(99896) setWindowContextID:0 windowState:Disabled level:0.0
    focusContext:(null)
default	21:08:55.318093-0500	backboardd	Connection removed: IOHIDEventSystemConnection uuid:68790E31-D0DF-495E-8FF4-EF6E9CC26674 pid:99896 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 99896;
} state:0x1 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	21:08:55.318202-0500	backboardd	Removing client connection <BKHIDClientConnection: 0xca266fd00; IOHIDEventSystemConnectionRef: 0xc997fbc00; vpid: 99896(v833FA); taskPort: 0xE5223; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:68790E31-D0DF-495E-8FF4-EF6E9CC26674 pid:99896 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 99896;
} state:0x1 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE source:HID
default	21:08:55.319360-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:55.319385-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:55.319509-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:99896>
default	21:08:55.319674-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>
]
default	21:08:55.319705-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 99896>
]
error	21:08:55.320069-0500	SpringBoard	Advisor: No handle found for currently focused PID: 99896; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	21:08:55.321943-0500	runningboardd	XPC connection invalidated: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.322798-0500	runningboardd	XPC connection invalidated: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.327192-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d3f500; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581dd960; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x8581dddc0; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{390, 161.33497774217392}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 9:08:55 PM CDT;}
default	21:08:55.327363-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d3fbc0 10-07-2025 21:08:55, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:08:55.329755-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896] termination reported by launchd (2, 6, 6)
default	21:08:55.329780-0500	runningboardd	Removing process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
error	21:08:55.330084-0500	runningboardd	RBSStateCapture remove item called for untracked item <RBConnectionClient| 99896 name:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> entitlements:<RBEntitlements| [
			
			]> inheritanceManager:<RBClientInheritanceManager|  inheritances:[
	<RBSInheritance| environment:(none) name:com.apple.frontboard.visibility origID:33-34-1984637 0>,
	<RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1984641 payload 15918742631522514469>
	]>>
default	21:08:55.330116-0500	runningboardd	Removing launch job for: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.330194-0500	runningboardd	Removed job for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.330271-0500	runningboardd	Removing assertions for terminated process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.330323-0500	runningboardd	Removed last relative-start-date-defining assertion for process app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	21:08:55.337734-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:08:55.337991-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1984637:FBApplicationProcess" age:00:00:00  id:51539640811 [System: PrevIdle SysAct]
default	21:08:55.338433-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: none (role: None) (endowments: (null))
default	21:08:55.338673-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Launch assertion invalidated: <NSError: 0x86c3631e0; domain: RBSAssertionErrorDomain; code: 1; "Assertions were invalidated">
default	21:08:55.338696-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Now acquiring workspace assertion with state: ForegroundFocal.
error	21:08:55.338996-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Workspace assertion failed: Error Domain=RBSAssertionErrorDomain Code=2 "Specified target process 99896 does not exist" UserInfo={NSLocalizedFailureReason=Specified target process 99896 does not exist}
default	21:08:55.339082-0500	CommCenter	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.339293-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Process exited: <RBSProcessExitContext| specific, status:<RBSProcessExitStatus| domain:signal(2) code:SIGABRT(6)>>.
default	21:08:55.339318-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: none (role: None) (endowments: (null))
default	21:08:55.339479-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Setting process task state to: Not Running
default	21:08:55.339555-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Setting process visibility to: Unknown
default	21:08:55.339579-0500	SpringBoard	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.339603-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:99896] Invalidating workspace.
default	21:08:55.339627-0500	SpringBoard	Removing source registration for processHandle: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:99896]
default	21:08:55.339652-0500	SpringBoard	[0x8681b9140:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Invalidated for connection: 0x86cd68e40.
default	21:08:55.339735-0500	SpringBoard	Removing: <FBApplicationProcess: 0x86b797480; app<com.hightowerai.MobileJarvisNative>:99896(v833FA)>
default	21:08:55.339993-0500	healthd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.340117-0500	healthd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.340306-0500	SpringBoard	Process exited: <FBApplicationProcess: 0x86b797480; app<com.hightowerai.MobileJarvisNative>:99896(v833FA)> -> <RBSProcessExitContext| specific, status:<RBSProcessExitStatus| domain:signal(2) code:SIGABRT(6)>>
default	21:08:55.340456-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: (null)
default	21:08:55.340714-0500	CommCenter	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.342816-0500	backboardd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.348340-0500	audiomxd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.348963-0500	symptomsd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.348988-0500	locationd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.349639-0500	SpringBoard	[com.apple.springboard] removing scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid: 99896 for reason: didRemoveExternalForegroundApplicationSceneHandle
default	21:08:55.349931-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 0;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 1;\n    SBApplicationStateProcessIDKey = 99896;\n    SBMostElevatedStateForProcessID = 1;\n}"}
default	21:08:55.350092-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":99896, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"None"}
default	21:08:55.350128-0500	locationd	{"msg":"#dic AppMonitor received Termination", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative", "isUserKill":0}
default	21:08:55.350198-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"Terminated", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:08:55.350399-0500	SpringBoard	[coordinator] _removeSceneFromRecents didRemoveExternalForegroundApplicationSceneHandle pid:99896 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<empty>
default	21:08:55.351624-0500	locationd	{"msg":"RBS #dic AppMonitor received Termination", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative", "isUserKill":0}
default	21:08:55.351726-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"Terminated", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	21:08:55.352396-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:55.356882-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"Terminated", "pid":99896, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:55.356976-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":0}
default	21:08:55.358113-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	21:08:55.358335-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	21:08:55.358714-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857865040; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581dfb10; com.apple.springboard.home-screen; frame: {{0, 0}, {390, 844}}; level: 0; role: primary>;        <SBSDisplayLayoutElement: 0x8581dccb0; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x8581dfc60; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{390, 161.33497774217392}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 9:08:55 PM CDT;}
default	21:08:55.358800-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d3fbc0 10-07-2025 21:08:55, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	21:08:55.358836-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:55.360080-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	21:08:55.362483-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	21:08:55.362946-0500	SpringBoard	No longer tracking: <FBScene: 0x866532800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:08:55.363337-0500	dasd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.363464-0500	SpringBoard	<SBSceneSnapshotRequestor: 0x8648f3f00; debugName: LCD> [sceneID:com.hightowerai.MobileJarvisNative-default] Requesting 1 snapshot(s) because the scene actually moved to the background
default	21:08:55.363523-0500	SpringBoard	Created: <FBSceneSnapshotAction: 0x869f9f100; sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:08:55.363712-0500	runningboardd	Acquiring assertion targeting 99896 from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBSceneSnapshotAction:sceneID:com.hightowerai.MobileJarvisNative-default" ID:33-34-1984644 target:99896 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"SceneSnapshotAction" sourceEnvironment:"(null)">,
	<RBSDurationAttribute| invalidationDuration:5.00 warningDuration:0.00 startPolicy:Fixed endPolicy:Invalidate>
	]>
default	21:08:55.363888-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending action(s) in update: <FBSceneSnapshotAction: 0x0022db82>
default	21:08:55.363914-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: notReady
default	21:08:55.364661-0500	SpringBoard	<BSCompoundAssertion:0x86b66f500> (SBApplicationAppProtectionAssistant: 0x86b66c040 - com.hightowerai.MobileJarvisNative) invalidate acq:0x864d261a0 count:1
default	21:08:55.365159-0500	SpringBoard	All scenes dismissed for <APApplication: com.hightowerai.MobileJarvisNative>
default	21:08:55.369533-0500	WirelessRadioManagerd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.371735-0500	gamepolicyd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.372004-0500	UserEventAgent	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.372028-0500	watchdogd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.372534-0500	backboardd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.373428-0500	audiomxd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.373667-0500	dasd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.373717-0500	useractivityd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.374293-0500	callservicesd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.374978-0500	backboardd	new scene host settings: contextID:DB7AC73F <sceneID:com.hightowerai.MobileJarvisNative-default> foreground -> inactive
default	21:08:55.379149-0500	wifid	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.379761-0500	PerfPowerServices	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.380608-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Removing SwitcherScene overlay for: <SBAppLayout: 0x869e38680; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	21:08:55.381558-0500	symptomsd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.384604-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] client invalidated
default	21:08:55.384665-0500	SpringBoard	Invalidating scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	21:08:55.384722-0500	watchdogd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.384747-0500	SpringBoard	Invalidating: <FBSceneSnapshotAction: 0x869f9f100; sceneID:com.hightowerai.MobileJarvisNative-default>
default	21:08:55.384798-0500	SpringBoard	Got response for <FBSceneSnapshotAction: 0x869f9f100; sceneID:com.hightowerai.MobileJarvisNative-default>: <NSError: 0x86d2b0e70; domain: BSActionErrorDomain; code: 6 ("anulled")>
default	21:08:55.384825-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene invalidated.
default	21:08:55.385211-0500	locationd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.385643-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:none debug:none>
default	21:08:55.385673-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming background for application without push registration
default	21:08:55.387104-0500	SpringBoard	rules: (scene setting) REMOVED keyboardFocus environment from scene: sceneID:com.hightowerai.MobileJarvisNative-default
error	21:08:55.387154-0500	SpringBoard	Ignoring update for invalidated scene: (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default
error	21:08:55.387545-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Update failed: <NSError: 0x86d2b1da0; domain: FBSceneErrorDomain; code: 1 ("operation-failed"); "Scene update failed."> {
    NSUnderlyingError = <NSError: 0x86ec218f0; domain: FBWorkspace; code: 1; "Scene client is invalid.">;
}
default	21:08:55.406733-0500	WirelessRadioManagerd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.407286-0500	UserEventAgent	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.410820-0500	gamepolicyd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.411206-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	21:08:55.412946-0500	useractivityd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.414024-0500	callservicesd	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.414681-0500	wifid	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.414949-0500	PerfPowerServices	Received state update for 99896 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	21:08:55.415395-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative exited
default	21:08:55.415606-0500	wifid	-[WiFiUsageApplicationSession applicationStateDidChange:withAttributes:]: application session resumed:{(
    "com.google.ios.youtube",
    "com.apple.WallpaperKit.CollectionsPoster",
    "com.hightowerai.MobileJarvisNative"
)}
default	21:08:55.420876-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: false
default	21:08:55.420998-0500	symptomsd	call _saveAndUnloadSelectState on com.hightowerai.MobileJarvisNative exiting foreground state
error	21:08:55.421242-0500	symptomsd	COSMCtrl _foregroundAppActivity incoming bundle com.hightowerai.MobileJarvisNative has nil supplied UUID, finds existing 3E0067AE-FD23-30E8-B971-E93B00D4483A
default	21:08:55.583058-0500	ReportCrash	Formulating fatal 309 report for corpse[99896] MobileJarvisNative
default	21:08:55.584206-0500	ReportCrash	loadStoreInfo [platform 2] com.hightowerai.MobileJarvisNative from file:///private/var/containers/Bundle/Application/43CE9799-FBD1-400E-8418-2D6D4278CE0C/MobileJarvisNative.app/
default	21:08:55.588458-0500	osanalyticshelper	creating type 309 as /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/.MobileJarvisNative-2025-10-07-210855.ips
default	21:08:55.598687-0500	osanalyticshelper	Saved type '309(<private>)' report (7 of max 25) at /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-07-210855.ips
default	21:08:55.603977-0500	osanalyticshelper	xpc log creation type 309 result success: /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-07-210855.ips
default	21:08:55.604350-0500	ReportCrash	client log create type 309 result success: /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-07-210855.ips
default	21:08:55.605273-0500	ReportCrash	com.hightowerai.MobileJarvisNative is not a MetricKit client
default	21:08:55.613317-0500	ReportCrash	recordCrashEvent; isBeta 0, log: '/private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-07-210855.ips'
