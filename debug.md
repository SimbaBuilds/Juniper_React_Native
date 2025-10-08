default	22:50:45.590836-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.8562e+06 touches: {(
    <UITouch: 0x865e3e840> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x8657f8000; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {138.33332824707031, 587.66665649414062}; previous location in window: {138.33332824707031, 587.66665649414062}; location in view: {18.333328247070312, 30.666656494140625}; previous location in view: {18.333328247070312, 30.666656494140625}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x8654d0000; baseClass = UITapGestureRecognizer; s
default	22:50:45.700450-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	22:50:45.702450-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	22:50:45.709588-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:50:45.709645-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:50:45.709763-0500	SpringBoard	Created <FBWorkspace: 0x86ef8bde0; <FBApplicationProcess: 0x86a491980; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	22:50:45.709813-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	22:50:45.710882-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	22:50:45.711060-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-1992935 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:50:45.711158-0500	runningboardd	Assertion 33-34-1992935 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	22:50:45.713376-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:50:45.713399-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	22:50:45.718892-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.005007 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	22:50:45.718921-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde912d00>)
default	22:50:45.718951-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbde952220> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbde9ada40> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbde9ac360> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbde9ad2c0> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbde9adb00> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbde952400> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbde9aced0> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbde9500c0> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbde9af1e0> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/44CC09E1-AFEE-4E6F-A645-B8E846DDDBE5/tmp" }
		"HOME" => <string: 0xbde9acf60> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/44CC09E1-AFEE-4E6F-A645-B8E846DDDBE5" }
		"CFFIXED_USER_HOME" => <string: 0xbde9ae4c0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/44CC09E1-AFEE-4E6F-A645-B8E846DDDBE5" }
	}
	"_AdditionalProperties" => <dictionary: 0xbde9532a0> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbde953c60> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbde952520> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbde9adfe0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbde9ac060> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbde9aff60> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[9ed3][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbde9ace40> { count = 1, capacity = 8, contents =
		0: <string: 0xbde9ae3d0> { length = 113, contents = "/var/containers/Bundle/Application/1454FE45-C6AF-4F6B-B0B3-B262BF8A8C6E/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbde9afc90> { length = 113, contents = "/var/containers/Bundle/Application/1454FE45-C6AF-4F6B-B0B3-B262BF8A8C6E/MobileJarvisNative.app/MobileJarvisNative" }
}
default	22:50:45.719414-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] Memory Limits: active 2098 inactive 2098
 <private>
default	22:50:45.719440-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] This process will be managed.
default	22:50:45.719464-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.719892-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	22:50:45.720277-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:50:45.723757-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.723782-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-1992936 target:1766 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:50:45.723887-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	22:50:45.724188-0500	runningboardd	Assertion 33-33-1992936 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as active
default	22:50:45.724571-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] Set jetsam priority to 100 [0] flag[1]
default	22:50:45.724754-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] Resuming task.
default	22:50:45.724822-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] Set darwin role to: UserInteractiveFocal
default	22:50:45.725323-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Bootstrap success!
default	22:50:45.725469-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x865e3e4c0; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	22:50:45.725986-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] set Memory Limits to Soft Active (2098)
default	22:50:45.726089-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] Set Carplay mode to: 0
default	22:50:45.726291-0500	SpringBoard	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.726375-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Setting process task state to: Running
default	22:50:45.726424-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Setting process visibility to: Foreground
default	22:50:45.726712-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] visiblity is yes
default	22:50:45.726906-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:50:45.727035-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] reported to RB as running
default	22:50:45.727108-0500	healthd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.727164-0500	healthd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.727484-0500	SpringBoard	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.727590-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Registering event dispatcher after bootstrap
default	22:50:45.727760-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Initial launch assertion state: ForegroundFocal.
default	22:50:45.728334-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86a491980; app<com.hightowerai.MobileJarvisNative>:1766(v8464B)>
default	22:50:45.728430-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.728598-0500	kernel	/private/var/containers/Bundle/Application/1454FE45-C6AF-4F6B-B0B3-B262BF8A8C6E/MobileJarvisNative.app/MobileJarvisNative[1766] ==> container
error	22:50:45.728616-0500	kernel	Sandbox: MobileJarvisNative(1766) deny(1) sysctl-read kern.bootargs
default	22:50:45.728682-0500	SpringBoard	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.729049-0500	CommCenter	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.729078-0500	CommCenter	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.729974-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1992935:FBApplicationProcess" age:00:00:00  id:51539643078 [System: PrevIdle SysAct]
default	22:50:45.735419-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d55600; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x854ca8ee0; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x854cab6b0; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{390, -2.1192844369481065}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 10:50:45 PM CDT;}
default	22:50:45.735450-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857866dc0 10-07-2025 22:50:45, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:50:45.737521-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x869762d00; type: MainTransition; transitionID: 9196B4D5-A2B5-48AA-ACB2-1309C137449A; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:50:45.737890-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86efc6100> {
    <SBSwitcherModifierEventResponse: 0x86efc7360> {
	    <SBTimerEventSwitcherEventResponse: 0x86efc4360; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86efc4480>;
	};
    <SBSwitcherModifierEventResponse: 0x86efc4120> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86a4a2400; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86efc44b0; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86a4a1340; visible: YES; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x868475b30; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	22:50:45.748233-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x868ac5200; type: MainTransition; transitionID: 9196B4D5-A2B5-48AA-ACB2-1309C137449A; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:50:45.752964-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x864e977a0; type: SceneReady; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x866239dc0; contentOrientation: "portrait (1)"; lastInteractionTime: 200782; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86846b4b0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:50:45.754040-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:50:45.754698-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x867045f50.
default	22:50:45.754726-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Registered new scene: <FBUIApplicationWorkspaceScene: 0x86d0e3a80; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	22:50:45.754753-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	22:50:45.754803-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Workspace interruption policy did change: reconnect
default	22:50:45.755120-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-1992937 target:1766 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	22:50:45.755153-0500	runningboardd	Assertion 33-34-1992937 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as inactive as originator process has not exited
default	22:50:45.755269-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x86686d040 count:1
default	22:50:45.755335-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	22:50:45.755387-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	22:50:45.755729-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:1766 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [1766]; recentSceneIdentityTokensByPID: {1766: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:50:45.755763-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:1766 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [1766]; recentSceneIdentityTokensByPID: {1766: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:50:45.756486-0500	SpringBoard	Now tracking: <FBScene: 0x865f84500; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:50:45.756561-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	22:50:45.757296-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	22:50:45.757337-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	22:50:45.757428-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	22:50:45.757456-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	22:50:45.757673-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	22:50:45.758661-0500	MobileJarvisNative	[0x104c90000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	22:50:45.758790-0500	MobileJarvisNative	[0x104c90100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	22:50:45.761389-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	22:50:45.761662-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	22:50:45.761687-0500	MobileJarvisNative	Creating new background assertion
default	22:50:45.761712-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x103ccbec0>
default	22:50:45.761735-0500	MobileJarvisNative	Initializing connection
default	22:50:45.761759-0500	MobileJarvisNative	Removing all cached process handles
default	22:50:45.761806-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	22:50:45.761831-0500	MobileJarvisNative	[0x104c90200] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:50:45.761914-0500	MobileJarvisNative	[0x104cac000] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:45.762037-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:88E3CE5D-3957-4C06-995D-2BC0C82C8B7E pid:1766 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 1766;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:50:45.762161-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc9b8ec440; IOHIDEventSystemConnectionRef: 0xc9bcdcc00; vpid: 1766(v8464B); taskPort: 0x8ED93; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:88E3CE5D-3957-4C06-995D-2BC0C82C8B7E pid:1766 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 1766;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:50:45.763545-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] as ready
default	22:50:45.764045-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	22:50:45.764260-0500	MobileJarvisNative	Handshake succeeded
default	22:50:45.764282-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:50:45.764600-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:50:45.764648-0500	MobileJarvisNative	Created background task <private>.
default	22:50:45.764725-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	22:50:45.764838-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-1766-1992938 target:1766 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	22:50:45.765232-0500	runningboardd	Assertion 33-1766-1992938 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as inactive as start-time-defining assertions exist
default	22:50:45.765744-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	22:50:45.765841-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	22:50:45.765892-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	22:50:45.766115-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	22:50:45.766139-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	22:50:45.766302-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	22:50:45.766325-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	22:50:45.766447-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	22:50:45.766519-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	22:50:45.766567-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	22:50:45.766618-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	22:50:45.766643-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x104c81f00 <private>> attempting immediate handshake from activate
default	22:50:45.766666-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x104c81f00 <private>> sent handshake
default	22:50:45.766738-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x104cc99a0>
default	22:50:45.766762-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:50:45.766786-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:50:45.766882-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	22:50:45.767035-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Connection established.
default	22:50:45.767059-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x865eaf9c0>
default	22:50:45.767083-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Connection to remote process established!
default	22:50:45.767244-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x104cac640> for initial
default	22:50:45.767298-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	22:50:45.767391-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x104cac640> for CADisplay KVO
default	22:50:45.767515-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	22:50:45.767755-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	22:50:45.768208-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	22:50:45.768757-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	22:50:45.768829-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	22:50:45.768898-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	22:50:45.769038-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x5c2e] to process 0x86a491980 (watchdog: 19.96s)
default	22:50:45.769181-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	22:50:45.769229-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	22:50:45.769690-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	22:50:45.769715-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86d065a00; pid: 1766; taskState: Running; visibility: Foreground>
default	22:50:45.770090-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:50:45.770338-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	22:50:45.770700-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86d0643c0; pid: 1766; taskState: Running; visibility: Foreground>
default	22:50:45.771073-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771147-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771172-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771222-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771274-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771545-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771764-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771790-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771907-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	22:50:45.771930-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.771955-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.772169-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.772192-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:50:45.772217-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.772264-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x86d066c80; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] remnants=0>
default	22:50:45.772545-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	22:50:45.772603-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:50:45.773041-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:50:45.773166-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	22:50:45.773247-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	22:50:45.773272-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	22:50:45.773606-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	22:50:45.776426-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:50:45.776451-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x103ccbec0>
default	22:50:45.776474-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:50:45.776540-0500	MobileJarvisNative	Created background task <private>.
default	22:50:45.776592-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	22:50:45.776830-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.776881-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.777152-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.782638-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x104db4c40>; with scene: <UIWindowScene: 0x103cd3720>
default	22:50:45.782845-0500	MobileJarvisNative	0x104dd0db0 setDelegate:<0x104dd0cf0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	22:50:45.783046-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.783124-0500	MobileJarvisNative	[0x104db4bd0] Initialized with scene: <UIWindowScene: 0x103cd3720>; behavior: <_UIEventDeferringBehavior_iOS: 0x104ccac80>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	22:50:45.783416-0500	MobileJarvisNative	[0x104cad040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:45.784009-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	22:50:45.784255-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.784406-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:50:45.785218-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.785815-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
error	22:50:45.786360-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	22:50:45.786623-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.786735-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B7A474BF-8907-4FFE-84FF-5FB0D405D9B5
default	22:50:45.786802-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	22:50:45.786855-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	22:50:45.786935-0500	MobileJarvisNative	startConnection
default	22:50:45.787040-0500	MobileJarvisNative	[0x104cad900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	22:50:45.787291-0500	backboardd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.787383-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	22:50:45.787806-0500	symptomsd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.788674-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(1766) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	22:50:45.789227-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	22:50:45.789516-0500	backboardd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.790110-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.790160-0500	symptomsd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.790210-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.790699-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:50:45.790757-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.790807-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.791297-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:50:45.791412-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.793217-0500	backboardd	new deferring rules for pid:34: [
    [34-61A0]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-61A1]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1766>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	22:50:45.793471-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	22:50:45.793989-0500	SpringBoard	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.799582-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	22:50:45.800735-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1766>
]
default	22:50:45.800760-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1766>
]
default	22:50:45.801423-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x104d84fa0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	22:50:45.801743-0500	MobileJarvisNative	observerPolicyDidChange: 0x104d84fa0 -> <_UIKeyWindowSceneObserver: 0x104dd0f00>
default	22:50:45.802381-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	22:50:45.803587-0500	MobileJarvisNative	<UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5) Scene updated orientation preferences: none -> ( Pu )
default	22:50:45.803705-0500	MobileJarvisNative	Key window API is scene-level: YES
default	22:50:45.803839-0500	MobileJarvisNative	UIWindowScene: 0x103cd3720: Window became key in scene: UIWindow: 0x103cda1f0; contextId: 0x6783A7A2: reason: UIWindowScene: 0x103cd3720: Window requested to become key in scene: 0x103cda1f0
default	22:50:45.803985-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x103cd3720; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x103cda1f0; reason: UIWindowScene: 0x103cd3720: Window requested to become key in scene: 0x103cda1f0
default	22:50:45.804040-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(1766) setClientFocusContext
    focusContext:<contextID:1736681378 sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:50:45.804102-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x103cda1f0; contextId: 0x6783A7A2; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.804233-0500	MobileJarvisNative	[0x104db4bd0] Begin local event deferring requested for token: 0x104c65740; environments: 1; reason: UIWindowScene: 0x103cd3720: Begin event deferring in keyboardFocus for window: 0x103cda1f0
default	22:50:45.804410-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 1766 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.804438-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	22:50:45.804505-0500	SpringBoard	arbiter: arbiter requested pid 1766 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.804538-0500	SpringBoard	[coordinator] using arbiter suggested pid 1766 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.804563-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.804755-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 1766; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:1766>
default	22:50:45.804833-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	22:50:45.804884-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	22:50:45.804936-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:45.805114-0500	SpringBoard	set currentFocus PID:1766 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	22:50:45.805485-0500	backboardd	new deferring rules for pid:1766: [[1766-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x6783A7A2; pid: 1766>; reason: …gin event deferring in keyboardFocus for window: 0x103cda1f0]
default	22:50:45.805594-0500	SpringBoard	Scene <FBScene: 0x865f84500; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	22:50:45.805623-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	22:50:45.806988-0500	backboardd	new scene host settings: contextID:6783A7A2 <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	22:50:45.807609-0500	MobileJarvisNative	establishing connection to agent
default	22:50:45.807682-0500	MobileJarvisNative	[0x104d85ea0] Session created.
default	22:50:45.807710-0500	MobileJarvisNative	[0x104d85ea0] Session created from connection [0x104c90b00]
default	22:50:45.807753-0500	MobileJarvisNative	[0x104c90b00] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	22:50:45.807925-0500	locationd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.808011-0500	callservicesd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.808036-0500	callservicesd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.808183-0500	locationd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.808254-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 1766;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	22:50:45.808331-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":1766, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	22:50:45.808398-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":1766, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:50:45.808876-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":1766, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:50:45.809178-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:50:45.811712-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1766>,
    <token: 0x6783A7A2; pid: 1766>
]
default	22:50:45.811832-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 1766>,
    <token: 0x6783A7A2; pid: 1766>
]
default	22:50:45.812040-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":1766, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:50:45.812138-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	22:50:45.812181-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	22:50:45.812221-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	22:50:45.812254-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:50:45.812330-0500	MobileJarvisNative	[0x104d85ea0] Session activated
default	22:50:45.812387-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x104d84fa0; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	22:50:45.812417-0500	MobileJarvisNative	observerPolicyDidChange: 0x104d84fa0 -> <_UIKeyWindowSceneObserver: 0x104dd0f00>
default	22:50:45.813174-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:50:45.813654-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [1EA0372C-FF74-417F-B336-A5F23DBA28E6] (reporting strategy default)>
default	22:50:45.813683-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [0E71F7D7-3549-4E69-B9FC-BAC3F937DAF6] (reporting strategy default)>
default	22:50:45.813708-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [1EA0372C-FF74-417F-B336-A5F23DBA28E6] (reporting strategy default)> as the global parent
default	22:50:45.813750-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	22:50:45.813801-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	22:50:45.813827-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	22:50:45.813852-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	22:50:45.813883-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x103cd3720; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.813910-0500	SpringBoard	[0x86d0e3a80:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x5c2e] completed with success: 1
default	22:50:45.813936-0500	MobileJarvisNative	[0x104db4bd0] Scene target of event deferring environments did update: scene: 0x103cd3720; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:50:45.813962-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x103cd3720; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.814033-0500	MobileJarvisNative	Stack[KeyWindow] 0x104dd1620: Migrate scenes from LastOneWins -> SystemShellManaged
default	22:50:45.814063-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	22:50:45.814115-0500	MobileJarvisNative	[0x104db4bd0] Scene target of event deferring environments did update: scene: 0x103cd3720; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:50:45.814140-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x103cd3720; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:50:45.814191-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	22:50:45.814215-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	22:50:45.814377-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	22:50:45.814404-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	22:50:45.814517-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B7A474BF-8907-4FFE-84FF-5FB0D405D9B5
default	22:50:45.814666-0500	MobileJarvisNative	startConnection
default	22:50:45.814845-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	22:50:45.814872-0500	MobileJarvisNative	forceReloadInputViews
default	22:50:45.814898-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	22:50:45.814996-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	22:50:45.815079-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:50:45.815129-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:50:45.815625-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B7A474BF-8907-4FFE-84FF-5FB0D405D9B5
default	22:50:45.815810-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B7A474BF-8907-4FFE-84FF-5FB0D405D9B5
default	22:50:45.816055-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	22:50:45.816131-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:50:45.816193-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:50:45.816921-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	22:50:45.817425-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 1766<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1992939 target:1766<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	22:50:45.817456-0500	runningboardd	Assertion 33-34-1992939 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	22:50:45.818016-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x867071e60; type: SceneReady; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x866239dc0; contentOrientation: "portrait (1)"; lastInteractionTime: 200782; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86846b4b0; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:50:45.818444-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:50:45.819036-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1992939 payload 15918742631522514469>
)} lost:{(
)}>
default	22:50:45.821495-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:50:45.821686-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:50:45.822146-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	22:50:45.822267-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	22:50:45.822669-0500	WirelessRadioManagerd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.822722-0500	WirelessRadioManagerd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.822827-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	22:50:45.824908-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	22:50:45.824958-0500	MobileJarvisNative	[0x104ee0dc0] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	22:50:45.825335-0500	MobileJarvisNative	<SOServiceConnection: 0x104e923a0>: new XPC connection
default	22:50:45.828511-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.828567-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.829644-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-1766-1992940 target:1766 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:50:45.829701-0500	runningboardd	Assertion 33-1766-1992940 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as inactive as start-time-defining assertions exist
default	22:50:45.829770-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.829819-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.829927-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.830316-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:45.831196-0500	MobileJarvisNative	[0x104ee0a00] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	22:50:45.831316-0500	dasd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.831343-0500	dasd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.831368-0500	useractivityd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.831438-0500	useractivityd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.834230-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	22:50:45.834285-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	22:50:45.834500-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	22:50:45.835315-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	22:50:45.835979-0500	wifid	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.836030-0500	wifid	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.836110-0500	UserEventAgent	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.836136-0500	UserEventAgent	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.836321-0500	watchdogd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.836400-0500	watchdogd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.836493-0500	gamepolicyd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.836621-0500	gamepolicyd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:50:45.837367-0500	SpringBoard	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.837609-0500	MobileJarvisNative	container_query_get_single_result: success
default	22:50:45.838392-0500	healthd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.838746-0500	CommCenter	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.838871-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	22:50:45.839451-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	22:50:45.839474-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:50:45.839500-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	22:50:45.839550-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	22:50:45.839574-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/1454FE45-C6AF-4F6B-B0B3-B262BF8A8C6E/MobileJarvisNative.app
default	22:50:45.839598-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	22:50:45.839656-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	22:50:45.840492-0500	MobileJarvisNative	nw_path_evaluator_start [CACA3C2E-22C8-4A79-991A-9CA15ACE3CD9 <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	22:50:45.840565-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	22:50:45.840640-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	22:50:45.840735-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	22:50:45.840761-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	22:50:45.841512-0500	MobileJarvisNative	[0x104ee12c0] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	22:50:45.842015-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	22:50:45.843123-0500	MobileJarvisNative	Connection 1: enabling TLS
default	22:50:45.843148-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	22:50:45.843175-0500	MobileJarvisNative	[C1 3F8F07AA-5B60-4EB0-B7C0-C462D310C30E Hostname#652cc8c2:443 quic-connection, url hash: 2f70e971, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{843F71A4-6420-48F7-B194-5C72650AC3A3}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	22:50:45.843748-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:50:45.843775-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:50:45.843913-0500	MobileJarvisNative	[C1 Hostname#652cc8c2:443 initial parent-flow ((null))] event: path:start @0.000s
default	22:50:45.844235-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f6a3: {
	App bundle ID = com.hightowerai.MobileJarvisNative
	Route = built-in speakers
	contentType = 'soun'
	overrideSpatialMode = 0
	preferencesVersion = 1

	Spatial preferences: {
		prefersHeadTrackedSpatialization = 0
		prefersLossyAudioSources = 0
		maxSpatializableChannels = 16
		alwaysSpatialize = 0
		spatialAudioSourceCount = 1
		spatialAudioSources = [ 'mlti' ]
	}
}
default	22:50:45.845503-0500	MobileJarvisNative	[C1 Hostname#652cc8c2:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 1C929A10-B173-43BE-A262-AEA0371C6C67
default	22:50:45.845694-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x104dc8580 with ID: 0x6f6a3
default	22:50:45.846589-0500	MobileJarvisNative	[C1 Hostname#652cc8c2:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	22:50:45.846642-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	22:50:45.847224-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	22:50:45.847336-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	22:50:45.847364-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	22:50:45.847434-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	22:50:45.847461-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	22:50:45.848109-0500	MobileJarvisNative	Requesting calls from host
default	22:50:45.848241-0500	MobileJarvisNative	[0x104ee1b80] activating connection: mach=true listener=false peer=false name=com.apple.callkit.callcontrollerhost
default	22:50:45.849036-0500	MobileJarvisNative	[0x104c91300] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	22:50:45.852664-0500	MobileJarvisNative	Received requested calls from host: <private>
default	22:50:45.852725-0500	MobileJarvisNative	[C1 Hostname#652cc8c2:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.004s
default	22:50:45.853569-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	22:50:45.853652-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 initial path ((null))] event: path:start @0.009s
default	22:50:45.859260-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.013s, uuid: 1C929A10-B173-43BE-A262-AEA0371C6C67
default	22:50:45.862092-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.014s
default	22:50:45.862521-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 initial path ((null))] event: path:start @0.017s
default	22:50:45.862919-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.017s, uuid: BA837CF2-7FD5-4012-89B6-D85B70E49E21
default	22:50:45.863172-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.017s
default	22:50:45.863517-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> setting up Connection 1
default	22:50:45.863596-0500	MobileJarvisNative	[0x104c91900] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	22:50:45.866130-0500	PerfPowerServices	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.867186-0500	MobileJarvisNative	[0x104c91c00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	22:50:45.868699-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Available: true, Technology: vocalizer]'
default	22:50:45.868788-0500	MobileJarvisNative	[0x104ee2440] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	22:50:45.869376-0500	PerfPowerServices	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.869427-0500	audiomxd	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:45.869452-0500	audiomxd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.870085-0500	locationd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.870275-0500	watchdogd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.870867-0500	symptomsd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.871062-0500	backboardd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.871783-0500	callservicesd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.871893-0500	gamepolicyd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:50:45.871918-0500	WirelessRadioManagerd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.872153-0500	useractivityd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.872179-0500	wifid	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.873266-0500	MobileJarvisNative	Garbage collection for alternative services
default	22:50:45.873362-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:50:45.873613-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#7b044dc6.443
default	22:50:45.873641-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#1c299cf1.443
default	22:50:45.873693-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4cf46662:443
default	22:50:45.873802-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9499498f:443
default	22:50:45.874604-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.035s
default	22:50:45.875159-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 initial path ((null))] event: path:start @0.036s
default	22:50:45.875551-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	22:50:45.875870-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.037s, uuid: D358DD7A-AF6D-4723-B78E-0F3A5FC153F5
default	22:50:45.878160-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:45.878592-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.041s
default	22:50:45.880682-0500	UserEventAgent	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.880949-0500	dasd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.881237-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.044s
default	22:50:45.882373-0500	wifid	-[WiFiUsageApplicationSession applicationStateDidChange:withAttributes:]: application session resumed:{(
    "com.hightowerai.MobileJarvisNative",
    "com.google.ios.youtube"
)}
default	22:50:45.882503-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	22:50:45.882834-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:0 whitelisted=1
default	22:50:45.883215-0500	MobileJarvisNative	<nw_activity 50:1 [1EA0372C-FF74-417F-B336-A5F23DBA28E6] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 180ms
default	22:50:45.883415-0500	MobileJarvisNative	<nw_activity 50:2 [0E71F7D7-3549-4E69-B9FC-BAC3F937DAF6] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 180ms
default	22:50:45.883614-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [1EA0372C-FF74-417F-B336-A5F23DBA28E6] (global parent) (reporting strategy default) complete (reason success)>
default	22:50:45.883796-0500	MobileJarvisNative	Unset the global parent activity
default	22:50:45.886322-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-350f17ac0468eee7] created QUIC connection (spin bit enabled)
default	22:50:45.887630-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6f6a3, MobileJarvisNati(1766), 'prim' [0x5430e5880] with pid '1766' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	22:50:45.887658-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '1766' moved to ForegroundRunning and is not allowed to play in the background
default	22:50:45.887996-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.050s
default	22:50:45.889692-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-350f17ac0468eee7] TLS stream is: [C2]
default	22:50:45.889718-0500	MobileJarvisNative	[C2 EA7620AF-9ABB-4F57-A9B5-03C0AE89990D IPv6#7b044dc6.443 quic-connection, url hash: 2f70e971, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{843F71A4-6420-48F7-B194-5C72650AC3A3}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	22:50:45.889775-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:50:45.889858-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: D358DD7A-AF6D-4723-B78E-0F3A5FC153F5
default	22:50:45.889996-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:50:45.890022-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	22:50:45.890134-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:50:45.890161-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:50:45.890345-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x104f6a000] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:50:45.890739-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x104f6a000] Client handshake started
default	22:50:45.891109-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS client enter_early_data
default	22:50:45.891637-0500	PerfPowerServices	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.892803-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS client read_server_hello
default	22:50:45.893501-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	22:50:45.893709-0500	MobileJarvisNative	Connection 3: enabling TLS
default	22:50:45.893743-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	22:50:45.893773-0500	MobileJarvisNative	[C3 D0278CCC-0A0B-46FD-ADC1-888C91CEF011 Hostname#3b094067:443 quic-connection, url hash: 5d2d9fc3, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{28EADE85-9C43-4990-BACF-2419752A3744}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37] start
default	22:50:45.893871-0500	MobileJarvisNative	[C3 Hostname#3b094067:443 initial parent-flow ((null))] event: path:start @0.000s
default	22:50:45.894416-0500	MobileJarvisNative	[C3 Hostname#3b094067:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: CE2A9331-CE42-4332-882A-27EAFB80BE37
default	22:50:45.895884-0500	MobileJarvisNative	[C3 Hostname#3b094067:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:50:45.895967-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	22:50:45.896188-0500	MobileJarvisNative	[C3 Hostname#3b094067:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	22:50:45.896294-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 initial path ((null))] event: path:start @0.001s
default	22:50:45.897229-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: CE2A9331-CE42-4332-882A-27EAFB80BE37
default	22:50:45.897319-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.002s
default	22:50:45.898200-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 initial path ((null))] event: path:start @0.002s
default	22:50:45.898459-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.003s, uuid: 5AF29133-E21B-4A8D-B0C4-50AC677DB862
default	22:50:45.899163-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.003s
default	22:50:45.899359-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> setting up Connection 3
default	22:50:45.900794-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#11686a98:443
default	22:50:45.900823-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#c74f5ab3:443
default	22:50:45.901174-0500	audiomxd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:45.901340-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.005s
default	22:50:45.901783-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 initial path ((null))] event: path:start @0.005s
default	22:50:45.902163-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.006s, uuid: 535F24AB-DD94-44F0-849E-81BE96E09A79
default	22:50:45.902276-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.006s
default	22:50:45.902817-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.006s
default	22:50:45.903703-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-a3adbe2de9e67205] created QUIC connection (spin bit enabled)
default	22:50:45.904197-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.007s
default	22:50:45.905745-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-a3adbe2de9e67205] TLS stream is: [C4]
default	22:50:45.905770-0500	MobileJarvisNative	[C4 2ACE2489-1081-4AF8-AF15-E36F3273B21C IPv4#11686a98:443 quic-connection, url hash: 5d2d9fc3, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{28EADE85-9C43-4990-BACF-2419752A3744}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	22:50:45.906028-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:50:45.906080-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 535F24AB-DD94-44F0-849E-81BE96E09A79
default	22:50:45.906317-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:50:45.906343-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	22:50:45.906420-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:50:45.906449-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:50:45.906789-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x104f6b000] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:50:45.906867-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x104f6b000] Client handshake started
default	22:50:45.906945-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS client enter_early_data
default	22:50:45.907280-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS client read_server_hello
default	22:50:45.907665-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6f6a3, MobileJarvisNati(1766), 'prim' [0x5430e5880] with pid '1766' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	22:50:45.907694-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '1766' moved to ForegroundRunning and is not allowed to play in the background
default	22:50:45.909765-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	22:50:45.928725-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
error	22:50:45.929774-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	22:50:45.929847-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
default	22:50:45.931802-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	22:50:45.948250-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: gryphon, Available: true]'
default	22:50:45.952219-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	22:50:45.952265-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	22:50:45.952332-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	22:50:45.952415-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Technology: custom, Available: true]'
default	22:50:45.955619-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	22:50:45.955751-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	22:50:45.957386-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	22:50:45.967062-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neural, Available: true]'
default	22:50:45.973841-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 initial path ((null))] event: path:start @0.138s
default	22:50:45.974143-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.138s, uuid: 5EE7A197-B807-4EC8-8752-E2F51650A0DF
default	22:50:45.974267-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.138s
default	22:50:45.976123-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.140s
default	22:50:45.976246-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.140s
default	22:50:45.976324-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#7b044dc6.443
default	22:50:45.976352-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#1c299cf1.443
default	22:50:45.976378-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4cf46662:443
default	22:50:45.976406-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9499498f:443
default	22:50:45.976526-0500	MobileJarvisNative	[C1.1.2 Hostname#652cc8c2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.140s
default	22:50:45.976718-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 initial path ((null))] event: path:start @0.140s
default	22:50:45.976861-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.140s, uuid: CAE7B6EC-66A2-43C5-93AC-B9D6291FB89D
default	22:50:45.977061-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.140s
default	22:50:45.977112-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	22:50:45.977159-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	22:50:45.977189-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	22:50:45.977442-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.141s
default	22:50:45.977694-0500	MobileJarvisNative	user_tcp_init_all_block_invoke g_tcp_nw_assert_context is false value -1
default	22:50:45.978141-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.141s
default	22:50:45.978324-0500	MobileJarvisNative	tcp_output [C1.1.2.1:3] flags=[S] seq=2137192161, ack=0, win=65535 state=SYN_SENT rcv_nxt=0, snd_una=2137192161
default	22:50:45.978441-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: neuralAX]'
default	22:50:45.983428-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	22:50:45.983498-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: neuralAX]
default	22:50:45.983560-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	22:50:45.986742-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x1090e7c40>
default	22:50:46.012382-0500	MobileJarvisNative	[C3.1.1.2 IPv4#c74f5ab3:443 initial path ((null))] event: path:start @0.119s
default	22:50:46.012620-0500	MobileJarvisNative	[C3.1.1.2 IPv4#c74f5ab3:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.119s, uuid: DD524F46-F11D-440A-835E-600CF8C79F2F
default	22:50:46.012742-0500	MobileJarvisNative	[C3.1.1.2 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.119s
default	22:50:46.012969-0500	MobileJarvisNative	[C3.1.1.2 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.119s
default	22:50:46.013562-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.2:2] [-a805bd192eb6fe6c] created QUIC connection (spin bit enabled)
default	22:50:46.013923-0500	MobileJarvisNative	[C3.1.1.2 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.119s
default	22:50:46.014657-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.2:2] [-a805bd192eb6fe6c] TLS stream is: [C5]
default	22:50:46.014683-0500	MobileJarvisNative	[C5 811CE171-1BE7-4182-B984-51AF28D1444E IPv4#c74f5ab3:443 quic-connection, url hash: 5d2d9fc3, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{28EADE85-9C43-4990-BACF-2419752A3744}{(null)}{Y}{2}{0x0} (private), proc: 0B6ABBC6-4029-38D0-8DDF-55E86F2EDF37, no transport] start
default	22:50:46.014741-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:50:46.014799-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: DD524F46-F11D-440A-835E-600CF8C79F2F
default	22:50:46.014914-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:50:46.014941-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	22:50:46.015022-0500	MobileJarvisNative	nw_flow_connected [C5 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:50:46.015047-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:50:46.015247-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C5:1][0x10963c600] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:50:46.015326-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C5:1][0x10963c600] Client handshake started
default	22:50:46.015449-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS client enter_early_data
default	22:50:46.015531-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS client read_server_hello
default	22:50:46.016699-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 initial path ((null))] event: path:start @0.123s
default	22:50:46.016976-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.123s, uuid: 6EF3EED7-080A-4198-B720-5E9606DA9D57
default	22:50:46.017090-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.123s
default	22:50:46.018239-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.124s
default	22:50:46.018357-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.124s
default	22:50:46.018434-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#11686a98:443
default	22:50:46.018488-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#c74f5ab3:443
default	22:50:46.018599-0500	MobileJarvisNative	[C3.1.2 Hostname#3b094067:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.124s
default	22:50:46.018774-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 initial path ((null))] event: path:start @0.124s
default	22:50:46.018923-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.124s, uuid: 5670A5B8-5502-4C61-879E-9D1D5DF2803E
default	22:50:46.019030-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.124s
default	22:50:46.019251-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.125s
default	22:50:46.020206-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.125s
default	22:50:46.020613-0500	MobileJarvisNative	tcp_output [C3.1.2.1:3] flags=[S] seq=2923615668, ack=0, win=65535 state=SYN_SENT rcv_nxt=0, snd_una=2923615668
default	22:50:46.046175-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	22:50:46.047410-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x103cd3720> (B7A474BF-8907-4FFE-84FF-5FB0D405D9B5)
default	22:50:46.047720-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B7A474BF-8907-4FFE-84FF-5FB0D405D9B5
default	22:50:46.047804-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	22:50:46.047853-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	22:50:46.048101-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	22:50:46.048152-0500	MobileJarvisNative	Updating configuration of monitor M1766-1
default	22:50:46.049205-0500	MobileJarvisNative	[0x1094fcd00] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	22:50:46.049280-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	22:50:46.049309-0500	MobileJarvisNative	[0x1094fce00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:50:46.049443-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	22:50:46.049779-0500	MobileJarvisNative	[0x1094fcf00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	22:50:46.049870-0500	MobileJarvisNative	[0x1094fcd00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.050981-0500	MobileJarvisNative	Hit the server for a process handle f6e5230000006e6 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:46.051523-0500	MobileJarvisNative	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:50:46.095134-0500	MobileJarvisNative	tcp_input [C3.1.2.1:3] flags=[S.] seq=3225451890, ack=2923615669, win=65535 state=SYN_SENT rcv_nxt=0, snd_una=2923615668
default	22:50:46.095309-0500	MobileJarvisNative	nw_flow_connected [C3.1.2.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (tcp)
default	22:50:46.095448-0500	MobileJarvisNative	[C3.1.2.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.201s
default	22:50:46.095669-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C3.1.2.1:2][0x10963d400] TLS configured [min_version(0x0303) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:50:46.095838-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C3.1.2.1:2][0x10963d400] Client handshake started
default	22:50:46.095958-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C3.1.2.1:2][0x10963d400] Client handshake state: TLS client enter_early_data
default	22:50:46.096036-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C3.1.2.1:2][0x10963d400] Client handshake state: TLS client read_server_hello
default	22:50:46.096326-0500	MobileJarvisNative	tcp_input [C1.1.2.1:3] flags=[S.] seq=2142888176, ack=2137192162, win=65535 state=SYN_SENT rcv_nxt=0, snd_una=2137192161
default	22:50:46.096363-0500	MobileJarvisNative	nw_flow_connected [C1.1.2.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (tcp)
default	22:50:46.096487-0500	MobileJarvisNative	[C1.1.2.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.260s
default	22:50:46.096766-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C1.1.2.1:2][0x104f6bc00] TLS configured [min_version(0x0303) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:50:46.096849-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C1.1.2.1:2][0x104f6bc00] Client handshake started
default	22:50:46.096927-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C1.1.2.1:2][0x104f6bc00] Client handshake state: TLS client enter_early_data
default	22:50:46.097017-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C1.1.2.1:2][0x104f6bc00] Client handshake state: TLS client read_server_hello
default	22:50:46.100096-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:50:46.100147-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_server_hello
default	22:50:46.100320-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:50:46.100485-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_certificate_request
default	22:50:46.100646-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_server_certificate
default	22:50:46.100672-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:50:46.100933-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x104f6b000] Performing external trust evaluation
default	22:50:46.101022-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x104f6b000] Asyncing for external verify block
default	22:50:46.101224-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	22:50:46.101713-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:50:46.101761-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_server_hello
default	22:50:46.101926-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:50:46.102169-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_certificate_request
default	22:50:46.102226-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_server_certificate
default	22:50:46.102252-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:50:46.102539-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x104f6a000] Performing external trust evaluation
default	22:50:46.102628-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x104f6a000] Asyncing for external verify block
default	22:50:46.102868-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:50:46.102926-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_server_hello
default	22:50:46.103037-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:50:46.103235-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_certificate_request
default	22:50:46.103389-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_server_certificate
default	22:50:46.103415-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:50:46.103655-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C5:1][0x10963c600] Performing external trust evaluation
default	22:50:46.103739-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C5:1][0x10963c600] Asyncing for external verify block
default	22:50:46.103935-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	22:50:46.104017-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> auth completion disp=1 cred=0x0
default	22:50:46.104070-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> auth completion disp=1 cred=0x0
default	22:50:46.104094-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	22:50:46.104141-0500	MobileJarvisNative	(Trust 0x109604cc0) No pending evals, starting
default	22:50:46.104211-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	22:50:46.104238-0500	MobileJarvisNative	[0x1094fcc00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.104290-0500	MobileJarvisNative	[0x1094fd000] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.104316-0500	MobileJarvisNative	(Trust 0x109604cc0) Completed async eval kickoff
default	22:50:46.104393-0500	MobileJarvisNative	(Trust 0x109604c00) No pending evals, starting
default	22:50:46.104582-0500	MobileJarvisNative	[0x1094fd100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.104629-0500	MobileJarvisNative	(Trust 0x109604c00) Completed async eval kickoff
default	22:50:46.107398-0500	MobileJarvisNative	(Trust 0x109604cc0) trustd returned 4
default	22:50:46.107472-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	22:50:46.107520-0500	MobileJarvisNative	(Trust 0x1096046c0) No pending evals, starting
default	22:50:46.107712-0500	MobileJarvisNative	[0x1094fcd00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.107785-0500	MobileJarvisNative	(Trust 0x1096046c0) Completed async eval kickoff
default	22:50:46.107836-0500	MobileJarvisNative	[0x1094fd000] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.110486-0500	MobileJarvisNative	(Trust 0x109604c00) trustd returned 4
default	22:50:46.110585-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	22:50:46.110634-0500	MobileJarvisNative	(Trust 0x1096049c0) No pending evals, starting
default	22:50:46.110729-0500	MobileJarvisNative	[0x1094fd200] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.110810-0500	MobileJarvisNative	(Trust 0x1096049c0) Completed async eval kickoff
default	22:50:46.110865-0500	MobileJarvisNative	[0x1094fd100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.113837-0500	MobileJarvisNative	(Trust 0x1096046c0) trustd returned 4
default	22:50:46.113918-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	22:50:46.113944-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x104f6b000] Returning from external verify block with result: true
default	22:50:46.114029-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x104f6b000] Certificate verification result: OK
default	22:50:46.114114-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client read_server_finished
default	22:50:46.114176-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:50:46.114202-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:50:46.114228-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client send_client_certificate
default	22:50:46.114253-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client complete_second_flight
default	22:50:46.114499-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS 1.3 client done
default	22:50:46.114525-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS client finish_client_handshake
default	22:50:46.114551-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x104f6b000] Client handshake state: TLS client done
default	22:50:46.114577-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x104f6b000] Client handshake done
default	22:50:46.114936-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x104f6b000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(211ms) flight_time(196ms) rtt(196ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:50:46.115015-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:50:46.115108-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.212s
default	22:50:46.115277-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	22:50:46.115364-0500	MobileJarvisNative	[C4 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.212s
default	22:50:46.115394-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C5:1][0x10963c600] Returning from external verify block with result: true
default	22:50:46.115446-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C5:1][0x10963c600] Certificate verification result: OK
default	22:50:46.115470-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client read_server_finished
default	22:50:46.115521-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:50:46.115547-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:50:46.115572-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client send_client_certificate
default	22:50:46.115597-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client complete_second_flight
default	22:50:46.115758-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS 1.3 client done
default	22:50:46.115784-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS client finish_client_handshake
default	22:50:46.115811-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10963c600] Client handshake state: TLS client done
default	22:50:46.115839-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C5:1][0x10963c600] Client handshake done
default	22:50:46.116245-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C5:1][0x10963c600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(102ms) flight_time(89ms) rtt(89ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:50:46.116305-0500	MobileJarvisNative	nw_flow_connected [C5 IPv4#c74f5ab3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:50:46.116417-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.102s
default	22:50:46.116549-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state ready
default	22:50:46.116576-0500	MobileJarvisNative	[C5 IPv4#c74f5ab3:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.102s
default	22:50:46.116650-0500	MobileJarvisNative	[0x1094fcd00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.117413-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	22:50:46.117474-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] QUIC connection established in 215.31 ms, RTT 97.079 ms
default	22:50:46.117502-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:50:46.117661-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.223s
default	22:50:46.117721-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#11686a98:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2197361367)
default	22:50:46.117996-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.223s
default	22:50:46.118294-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.223s
default	22:50:46.118406-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.223s
default	22:50:46.118875-0500	MobileJarvisNative	nw_protocol_tcp_log_summary [C3.1.2.1:3] 
	[76CFDEF6-358B-4CFF-A7E7-60838ACDB9EB <private>:60679<-><private>:443]
	Init: 1, Conn_Time: 76.418ms, SYNs: 1, WR_T: 0/0, RD_T: 0/0, TFO: 0/0/0, ECN: 0/0/0, Accurate ECN (client/server): Disabled/Disabled, TS: 1, TSO: 0
	rtt_cache: kernel, rtt_upd: 1, rtt: 37.937ms, rtt_var: 23.062ms rtt_nc: 76.000ms, rtt_var_nc: 38.000ms base rtt: 76ms
	ACKs-compressed: 0, ACKs delayed: 0 delayed ACKs sent: 0
default	22:50:46.119419-0500	MobileJarvisNative	quic_frame_write_CONNECTION_CLOSE [C3.1.1.2:2] [-01ba71cd1be33c9b27b8f0cdfce33918e7868b5c] sending CONNECTION_CLOSE, code NO_ERROR, type UNKNOWN, reason <null>
default	22:50:46.119446-0500	MobileJarvisNative	[C5 811CE171-1BE7-4182-B984-51AF28D1444E IPv4#c74f5ab3:443 quic-connection, url hash: 5d2d9fc3, tls, definite, attribution: developer] cancel
default	22:50:46.119803-0500	MobileJarvisNative	[C5 811CE171-1BE7-4182-B984-51AF28D1444E IPv4#c74f5ab3:443 quic-connection, url hash: 5d2d9fc3, tls, definite, attribution: developer] cancelled
	[C5 DD524F46-F11D-440A-835E-600CF8C79F2F 192.168.1.178:54704<->IPv4#c74f5ab3:443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Duration: 0.105s, QUIC @0.000s took 0.000s, TLS 1.3 took 0.102s
	bytes in/out: 5298/2586, packets in/out: 5/5, rtt: 0.083s, retransmitted bytes: 0, out-of-order bytes: 1184
	ecn packets sent/acked/marked/lost: 0/1/0/0
default	22:50:46.120237-0500	MobileJarvisNative	nw_flow_disconnected [C5 IPv4#c74f5ab3:443 cancelled channel-flow ((null))] Output protocol disconnected
default	22:50:46.120315-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state cancelled
default	22:50:46.120708-0500	MobileJarvisNative	quic_conn_log_summary [C3.1.1.2:2] [-01ba71cd1be33c9b27b8f0cdfce33918e7868b5c] 
	Connection attempts: 1, RETRY received: no, PTOs: 0
	Early data: no, Keep-alives sent/acknowledged: 0/0, ECN state: unsupported, L4S: disabled
	RTT: base 83 ms, network 83 ms, latest 83 ms, minimum 83 ms, smoothed 83 ms (variance 41 ms)
	Path MTU: 1280, minimum MSS: 1200
	Migration events: 0, paths validated: 0
	Inbound unidirectional/bidirectional streams: 0/0
	Outbound unidirectional/bidirectional streams: 0/0
	DATA_BLOCKED frames sent/received: 0/0
	STREAM_DATA_BLOCKED frames sent/received: 0/0
default	22:50:46.120908-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.226s
default	22:50:46.121011-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.226s
default	22:50:46.121069-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.226s
default	22:50:46.121097-0500	MobileJarvisNative	nw_flow_connected [C3 IPv4#11686a98:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	22:50:46.121181-0500	MobileJarvisNative	[C3 IPv4#11686a98:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.226s
default	22:50:46.121376-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	22:50:46.121403-0500	MobileJarvisNative	[C3 IPv4#11686a98:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.226s
default	22:50:46.121431-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	22:50:46.122064-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] path over en0 received event established
default	22:50:46.122322-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] promoted path 0x104e7abc0 over en0 to primary
default	22:50:46.122442-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	22:50:46.122714-0500	MobileJarvisNative	[C3.1.1.1 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.227s, uuid: 535F24AB-DD94-44F0-849E-81BE96E09A79
default	22:50:46.122901-0500	MobileJarvisNative	[C3.1.1 Hostname#3b094067:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.227s, uuid: 5AF29133-E21B-4A8D-B0C4-50AC677DB862
default	22:50:46.123054-0500	MobileJarvisNative	[C3.1 Hostname#3b094067:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.227s, uuid: CE2A9331-CE42-4332-882A-27EAFB80BE37
default	22:50:46.123109-0500	MobileJarvisNative	[C3 IPv4#11686a98:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.227s, uuid: CE2A9331-CE42-4332-882A-27EAFB80BE37
default	22:50:46.123259-0500	MobileJarvisNative	Connection 3: connected successfully
default	22:50:46.123311-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	22:50:46.123337-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	22:50:46.123712-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.227s
default	22:50:46.123919-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> now using Connection 3
default	22:50:46.124294-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	22:50:46.124392-0500	MobileJarvisNative	0x104e72f58 ID=0 Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> sent request, body N 0
default	22:50:46.124464-0500	MobileJarvisNative	tcp_output [C3.1.2.1:3] flags=[F.] seq=2923616186, ack=3225451891, win=2061 state=FIN_WAIT_1 rcv_nxt=3225451891, snd_una=2923616186
default	22:50:46.125559-0500	MobileJarvisNative	(Trust 0x1096049c0) trustd returned 4
default	22:50:46.125634-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	22:50:46.125660-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x104f6a000] Returning from external verify block with result: true
default	22:50:46.125754-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x104f6a000] Certificate verification result: OK
default	22:50:46.125783-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client read_server_finished
default	22:50:46.125905-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:50:46.125931-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:50:46.125957-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client send_client_certificate
default	22:50:46.125982-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client complete_second_flight
default	22:50:46.126198-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS 1.3 client done
default	22:50:46.126224-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS client finish_client_handshake
default	22:50:46.126251-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x104f6a000] Client handshake state: TLS client done
default	22:50:46.126277-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x104f6a000] Client handshake done
default	22:50:46.126818-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x104f6a000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(233ms) flight_time(212ms) rtt(212ms) write_stalls(0) read_stalls(2) pake(0x0000)]
default	22:50:46.126904-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:50:46.127058-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.234s
default	22:50:46.127244-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	22:50:46.127271-0500	MobileJarvisNative	[C2 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.234s
default	22:50:46.127321-0500	MobileJarvisNative	[0x1094fd200] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.128343-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	22:50:46.128396-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] QUIC connection established in 236.346 ms, RTT 211.182 ms
default	22:50:46.128423-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:50:46.128638-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.287s
default	22:50:46.128696-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#7b044dc6.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2197361367)
default	22:50:46.128875-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.287s
default	22:50:46.129237-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.287s
default	22:50:46.129306-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.287s
default	22:50:46.129745-0500	MobileJarvisNative	nw_protocol_tcp_log_summary [C1.1.2.1:3] 
	[935B6438-9FAC-4C7D-B775-2B14CE58C2AA <private>:51976<-><private>:443]
	Init: 1, Conn_Time: 118.503ms, SYNs: 1, WR_T: 0/0, RD_T: 0/0, TFO: 0/0/0, ECN: 0/0/0, Accurate ECN (client/server): Disabled/Disabled, TS: 1, TSO: 0
	rtt_cache: none, rtt_upd: 2, rtt: 105.375ms, rtt_var: 67.125ms rtt_nc: 105.375ms, rtt_var_nc: 67.125ms base rtt: 24ms
	ACKs-compressed: 0, ACKs delayed: 0 delayed ACKs sent: 0
default	22:50:46.130172-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.288s
default	22:50:46.130260-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.288s
default	22:50:46.130314-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.288s
default	22:50:46.130341-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#7b044dc6.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	22:50:46.130441-0500	MobileJarvisNative	[C1 IPv6#7b044dc6.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.288s
default	22:50:46.130599-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	22:50:46.130628-0500	MobileJarvisNative	[C1 IPv6#7b044dc6.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.288s
default	22:50:46.130657-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	22:50:46.131017-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] path over en0 received event established
default	22:50:46.131221-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] promoted path 0x104e7a840 over en0 to primary
default	22:50:46.131274-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	22:50:46.131472-0500	MobileJarvisNative	[C1.1.1.1 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.288s, uuid: D358DD7A-AF6D-4723-B78E-0F3A5FC153F5
default	22:50:46.131560-0500	MobileJarvisNative	[C1.1.1 Hostname#652cc8c2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.288s, uuid: BA837CF2-7FD5-4012-89B6-D85B70E49E21
default	22:50:46.131618-0500	MobileJarvisNative	[C1.1 Hostname#652cc8c2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.288s, uuid: 1C929A10-B173-43BE-A262-AEA0371C6C67
default	22:50:46.131648-0500	MobileJarvisNative	[C1 IPv6#7b044dc6.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.288s, uuid: 1C929A10-B173-43BE-A262-AEA0371C6C67
default	22:50:46.131731-0500	MobileJarvisNative	Connection 1: connected successfully
default	22:50:46.131756-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	22:50:46.131779-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	22:50:46.132283-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.289s
default	22:50:46.132395-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> now using Connection 1
default	22:50:46.132824-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	22:50:46.132853-0500	MobileJarvisNative	0x104e73118 ID=0 Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> sent request, body N 0
default	22:50:46.132942-0500	MobileJarvisNative	tcp_output [C1.1.2.1:3] flags=[F.] seq=2137192679, ack=2142888177, win=2065 state=FIN_WAIT_1 rcv_nxt=2142888177, snd_una=2137192679
default	22:50:46.153696-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x104f6b000] Asyncing for session update block
default	22:50:46.154462-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x104f6b000] Asyncing for session update block
default	22:50:46.154546-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x104f6b000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(211ms) flight_time(196ms) rtt(196ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:50:46.154608-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#11686a98:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:50:46.154752-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] creating inbound stream 3
default	22:50:46.155613-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] creating inbound stream 7
default	22:50:46.156754-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] creating inbound stream 11
default	22:50:46.157016-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01e5602c92da19e07ee7e12c56da16080bfca4fe] creating inbound stream 15
default	22:50:46.157552-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x104f6b000] Returning from session update block
default	22:50:46.158189-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x104f6b000] Returning from session update block
default	22:50:46.181926-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x104f6a000] Asyncing for session update block
default	22:50:46.182131-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x104f6a000] Asyncing for session update block
default	22:50:46.182215-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x104f6a000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(233ms) flight_time(212ms) rtt(212ms) write_stalls(0) read_stalls(2) pake(0x0000)]
default	22:50:46.182346-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#7b044dc6.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:50:46.182532-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] creating inbound stream 3
default	22:50:46.182913-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] creating inbound stream 7
default	22:50:46.183192-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] creating inbound stream 11
default	22:50:46.183425-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-01ca81fde1d01412e2c800fd83d00be19bed0b21] creating inbound stream 15
default	22:50:46.184185-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x104f6a000] Returning from session update block
default	22:50:46.184581-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x104f6a000] Returning from session update block
default	22:50:46.225641-0500	MobileJarvisNative	0x104e73118 ID=0 Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> received response, status 304 content U
default	22:50:46.226191-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.390s
default	22:50:46.226257-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> summary for task success {transaction_duration_ms=411, response_status=304, connection=1, protocol="h3", domain_lookup_duration_ms=18, connect_duration_ms=238, secure_connection_duration_ms=236, private_relay=false, request_start_ms=310, request_duration_ms=0, response_start_ms=411, response_duration_ms=0, request_bytes=506, request_throughput_kbps=2297, response_bytes=371, response_throughput_kbps=0, cache_hit=true}
default	22:50:46.226366-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> done using Connection 1
default	22:50:46.226597-0500	MobileJarvisNative	Task <DBEE6C1A-38CC-4486-98A1-97A4D5E8C546>.<1> finished successfully
default	22:50:46.277843-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	22:50:46.278148-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:50:46.278238-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	22:50:46.278270-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x103ccbec0> for task identifier: 2
default	22:50:46.278472-0500	runningboardd	Invalidating assertion 33-1766-1992938 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:46.380115-0500	MobileJarvisNative	0x104e72f58 ID=0 Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> received response, status 200 content U
default	22:50:46.383285-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d284180; type: MainTransition; transitionID: 9196B4D5-A2B5-48AA-ACB2-1309C137449A; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:50:46.383481-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86efc4e70> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86efc76f0>;
    <SBSwitcherModifierEventResponse: 0x86efc7360> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86efc5aa0>;
	    <SBSwitcherModifierEventResponse: 0x86efc48d0> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86efc51d0; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86b66d040; visible: NO; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x866f24d20; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x867739320; active: NO; appLayout: <SBAppLayout: 0x865cff000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	22:50:46.383657-0500	MobileJarvisNative	[0x1094fd200] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:50:46.391016-0500	MobileJarvisNative	[0x1094fd200] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.410027-0500	SpringBoard	Front display did change: <SBApplication: 0x865f87200; com.hightowerai.MobileJarvisNative>
default	22:50:46.416491-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> response ended
default	22:50:46.419254-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.519s
default	22:50:46.419553-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> done using Connection 3
default	22:50:46.420032-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> summary for task success {transaction_duration_ms=536, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=219, secure_connection_duration_ms=215, private_relay=false, request_start_ms=244, request_duration_ms=0, response_start_ms=502, response_duration_ms=33, request_bytes=1271, request_throughput_kbps=4464, response_bytes=16373, response_throughput_kbps=481, cache_hit=true}
default	22:50:46.420775-0500	MobileJarvisNative	Task <30D37EBA-47D6-40E5-BEFB-027706AC9D38>.<1> finished successfully
default	22:50:46.421845-0500	MobileJarvisNative	[0x10965c140] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	22:50:46.438484-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	22:50:46.438663-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	22:50:46.438853-0500	MobileJarvisNative	[0x1094fd100] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	22:50:46.438883-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857866800; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x854ca9490; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;        <SBSDisplayLayoutElement: 0x854caa5a0; SBPIPContainerViewController; bundleID: com.google.ios.youtube; frame: {{390, -2.1192844369481065}, {368, 207}}; level: 30; role: PIP; stashedPIP: YES>;    }    timestamp = October 7, 2025 at 10:50:46 PM CDT;}
default	22:50:46.439060-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857866dc0 10-07-2025 22:50:46, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:50:46.442034-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:50:46.442444-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	22:50:46.442578-0500	MobileJarvisNative	[0x10965c280] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	22:50:46.443159-0500	MobileJarvisNative	[0x10965c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.443185-0500	MobileJarvisNative	<private>
default	22:50:46.443214-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	22:50:46.443274-0500	MobileJarvisNative	[0x10965c280] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	22:50:46.448035-0500	MobileJarvisNative	Executing query <HKSampleQuery 4CAABD QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.449661-0500	MobileJarvisNative	[0x10965c8c0] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.450576-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4CAABD QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.450686-0500	MobileJarvisNative	[0x10965c8c0] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.454107-0500	MobileJarvisNative	Executing query <HKSampleQuery 5D8B13 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.454571-0500	MobileJarvisNative	[0x10965c8c0] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.455454-0500	MobileJarvisNative	Stopping query <HKSampleQuery 5D8B13 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.455481-0500	MobileJarvisNative	[0x10965c8c0] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.456840-0500	MobileJarvisNative	Executing query <HKSampleQuery 4C448F QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.457324-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.458225-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4C448F QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.458254-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.462193-0500	MobileJarvisNative	Executing query <HKSampleQuery 3733C8 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.462532-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.463226-0500	MobileJarvisNative	Stopping query <HKSampleQuery 3733C8 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.463279-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.464090-0500	MobileJarvisNative	Executing query <HKSampleQuery D8F64A QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.464514-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.465218-0500	MobileJarvisNative	Stopping query <HKSampleQuery D8F64A QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.465243-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.468724-0500	MobileJarvisNative	Executing query <HKSampleQuery C30849 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.468986-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.469463-0500	MobileJarvisNative	Stopping query <HKSampleQuery C30849 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.469568-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.470329-0500	MobileJarvisNative	Executing query <HKSampleQuery A093B5 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.470638-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.471056-0500	MobileJarvisNative	Stopping query <HKSampleQuery A093B5 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.471081-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.474231-0500	MobileJarvisNative	Executing query <HKSampleQuery 7F91B8 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.474572-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.474936-0500	MobileJarvisNative	Stopping query <HKSampleQuery 7F91B8 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.474962-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.475895-0500	MobileJarvisNative	Executing query <HKSampleQuery DBBCE2 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.476233-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.476788-0500	MobileJarvisNative	Stopping query <HKSampleQuery DBBCE2 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.476840-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.479557-0500	MobileJarvisNative	Executing query <HKSampleQuery 8748FD QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.479871-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.480360-0500	MobileJarvisNative	Stopping query <HKSampleQuery 8748FD QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.480396-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.481184-0500	MobileJarvisNative	Executing query <HKSampleQuery 2C5CE8 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.481481-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.481930-0500	MobileJarvisNative	Stopping query <HKSampleQuery 2C5CE8 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.481956-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.484602-0500	MobileJarvisNative	Executing query <HKSampleQuery 99B5E6 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.484903-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.485280-0500	MobileJarvisNative	Stopping query <HKSampleQuery 99B5E6 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.485306-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.486038-0500	MobileJarvisNative	Executing query <HKSampleQuery F81C7B QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:50:46.486289-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.486653-0500	MobileJarvisNative	Stopping query <HKSampleQuery F81C7B QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.486677-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.489501-0500	MobileJarvisNative	Executing query <HKSampleQuery 5D27FB QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:50:46.489727-0500	MobileJarvisNative	[0x10965d400] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:50:46.490170-0500	MobileJarvisNative	Stopping query <HKSampleQuery 5D27FB QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:50:46.490199-0500	MobileJarvisNative	[0x10965d400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:50:46.490706-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:46.491497-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.598s
default	22:50:46.491660-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> now using Connection 3
default	22:50:46.492321-0500	MobileJarvisNative	0x109698718 ID=4 Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> sent request, body S 109
default	22:50:46.808444-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Now acquiring workspace assertion with state: ForegroundFocal.
default	22:50:46.808629-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-1992944 target:1766 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:50:46.808718-0500	runningboardd	Assertion 33-34-1992944 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as active
default	22:50:46.809218-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:50:46.810069-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:1766] Dropping launch assertion.
default	22:50:46.810498-0500	runningboardd	Invalidating assertion 33-34-1992935 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	22:50:46.810647-0500	healthd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.810782-0500	CommCenter	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.810811-0500	SpringBoard	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.811288-0500	backboardd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.811650-0500	locationd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.812207-0500	symptomsd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.812433-0500	dasd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.812757-0500	callservicesd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.813163-0500	MobileJarvisNative	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:50:46.813389-0500	audiomxd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.813759-0500	WirelessRadioManagerd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.813787-0500	useractivityd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.814120-0500	wifid	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.814152-0500	UserEventAgent	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.814335-0500	PerfPowerServices	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.814884-0500	watchdogd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.815185-0500	gamepolicyd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:50:46.820888-0500	runningboardd	Invalidating assertion 33-1766-1992940 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:46.913273-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:50:46.913350-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1992935:FBApplicationProcess" age:00:00:01  id:51539643078 [System: PrevIdle SysAct]
default	22:50:46.913604-0500	SpringBoard	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.913880-0500	healthd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.913904-0500	CommCenter	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914143-0500	backboardd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914258-0500	locationd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914463-0500	dasd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914812-0500	callservicesd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914894-0500	symptomsd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.914968-0500	MobileJarvisNative	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:50:46.915416-0500	WirelessRadioManagerd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.915549-0500	audiomxd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.915669-0500	useractivityd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.916156-0500	UserEventAgent	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.916234-0500	wifid	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.916275-0500	watchdogd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.916999-0500	gamepolicyd	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:50:46.917778-0500	PerfPowerServices	Received state update for 1766 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:50:46.950506-0500	MobileJarvisNative	0x109698718 ID=4 Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> received response, status 200 content K
default	22:50:46.952876-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> response ended
default	22:50:46.953861-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.059s
default	22:50:46.954682-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> done using Connection 3
default	22:50:46.955039-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> summary for task success {transaction_duration_ms=462, response_status=200, connection=3, reused=1, reused_after_ms=78, request_start_ms=0, request_duration_ms=0, response_start_ms=458, response_duration_ms=3, request_bytes=923, request_throughput_kbps=2198, response_bytes=887, response_throughput_kbps=246, cache_hit=true}
default	22:50:46.955142-0500	MobileJarvisNative	Task <1444AB2C-B97A-4923-8279-8E17CA78BA60>.<2> finished successfully
default	22:50:46.957931-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-1766-1992945 target:1766 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:50:46.958195-0500	runningboardd	Assertion 33-1766-1992945 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) will be created as inactive as start-time-defining assertions exist
default	22:50:46.984946-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:50:46.985219-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:50:46.985630-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:50:46.985661-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:50:46.985692-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:50:46.985723-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:50:46.985821-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:50:46.985914-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:50:46.986008-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:50:46.986071-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:50:46.986133-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:50:46.986162-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	22:50:46.987238-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:50:46.988734-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001023d3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001024b855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010206b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010206e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:50:46.989109-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:50:46.989547-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:50:46.990555-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:50:46.990813-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:50:46.991224-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:50:46.991287-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:50:46.991381-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:50:46.991446-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:50:46.991477-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:50:46.991611-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:50:46.991729-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:50:46.991765-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:50:46.991806-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:50:46.991837-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	22:50:47.019247-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:50:47.019906-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001023d3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001024b855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010206b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010206e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:50:47.020102-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:50:47.021133-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:50:47.021168-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	22:50:47.027781-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.028578-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.029175-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.029875-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.136s
default	22:50:47.030101-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> now using Connection 3
default	22:50:47.030796-0500	MobileJarvisNative	0x10e822bd8 ID=8 Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> sent request, body N 0
default	22:50:47.031732-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> now using Connection 3
default	22:50:47.032430-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> now using Connection 3
default	22:50:47.032973-0500	MobileJarvisNative	0x10e823818 ID=12 Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> sent request, body N 0
default	22:50:47.033003-0500	MobileJarvisNative	0x10e823658 ID=16 Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> sent request, body N 0
default	22:50:47.212920-0500	MobileJarvisNative	0x10e823658 ID=16 Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> received response, status 200 content U
default	22:50:47.213987-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> response ended
default	22:50:47.214545-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> done using Connection 3
default	22:50:47.215029-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> summary for task success {transaction_duration_ms=184, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=0, response_start_ms=182, response_duration_ms=2, request_bytes=1203, request_throughput_kbps=2368, response_bytes=1237, response_throughput_kbps=584, cache_hit=true}
default	22:50:47.215220-0500	MobileJarvisNative	Task <F38EA6E4-8BE4-42C8-A5E8-4021003A0890>.<5> finished successfully
default	22:50:47.257997-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.258929-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> now using Connection 3
default	22:50:47.259502-0500	MobileJarvisNative	0x10e821898 ID=20 Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> sent request, body N 0
default	22:50:47.315654-0500	MobileJarvisNative	0x10e822bd8 ID=8 Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> received response, status 200 content U
default	22:50:47.316389-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> response ended
default	22:50:47.316639-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> done using Connection 3
default	22:50:47.316943-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> summary for task success {transaction_duration_ms=288, response_status=200, connection=3, reused=1, reused_after_ms=77, request_start_ms=1, request_duration_ms=0, response_start_ms=287, response_duration_ms=1, request_bytes=1239, request_throughput_kbps=2036, response_bytes=4413, response_throughput_kbps=3558, cache_hit=true}
default	22:50:47.316984-0500	MobileJarvisNative	Task <FD57BCFA-8C51-4891-B62A-E91DD6B69388>.<3> finished successfully
default	22:50:47.376157-0500	MobileJarvisNative	0x10e823818 ID=12 Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> received response, status 200 content U
default	22:50:47.407917-0500	MobileJarvisNative	0x10e821898 ID=20 Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> received response, status 200 content U
default	22:50:47.408970-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> response ended
default	22:50:47.411034-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> done using Connection 3
default	22:50:47.411500-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> summary for task success {transaction_duration_ms=151, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=148, response_duration_ms=2, request_bytes=1203, request_throughput_kbps=3107, response_bytes=1239, response_throughput_kbps=524, cache_hit=true}
default	22:50:47.411586-0500	MobileJarvisNative	Task <B4DA0AF5-900C-4DED-8C0A-B5B1A738C065>.<6> finished successfully
default	22:50:47.430562-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.432813-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> now using Connection 3
default	22:50:47.434108-0500	MobileJarvisNative	0x10e822bd8 ID=24 Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> sent request, body S 272
default	22:50:47.436635-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> response ended
default	22:50:47.437113-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> done using Connection 3
default	22:50:47.437320-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> summary for task success {transaction_duration_ms=407, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=1, response_start_ms=346, response_duration_ms=61, request_bytes=1366, request_throughput_kbps=1181, response_bytes=62000, response_throughput_kbps=987, cache_hit=true}
default	22:50:47.437376-0500	MobileJarvisNative	Task <5B6A8B5A-991F-4A6D-A5CE-292BE1C1706E>.<4> finished successfully
default	22:50:47.527193-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.528610-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> now using Connection 3
default	22:50:47.529187-0500	MobileJarvisNative	0x10e821898 ID=28 Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> sent request, body N 0
default	22:50:47.531600-0500	MobileJarvisNative	0x10e822bd8 ID=24 Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> received response, status 200 content U
default	22:50:47.531969-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> response ended
default	22:50:47.532349-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> done using Connection 3
default	22:50:47.532473-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> summary for task success {transaction_duration_ms=101, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=1, response_start_ms=99, response_duration_ms=0, request_bytes=1238, request_throughput_kbps=959, response_bytes=1205, response_throughput_kbps=1204, cache_hit=true}
default	22:50:47.532505-0500	MobileJarvisNative	Task <5D497E89-6821-4467-9493-FA94FFD39C88>.<7> finished successfully
default	22:50:47.543194-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:50:47.543339-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:50:47.543555-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:50:47.543602-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:50:47.543651-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:50:47.543924-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:50:47.543965-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:50:47.544024-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:50:47.544112-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:50:47.544187-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:50:47.544236-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:50:47.544281-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	22:50:47.544511-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:50:47.545892-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001023d3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001024b855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010206b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010206e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:50:47.546216-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:50:47.546524-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:50:47.654624-0500	MobileJarvisNative	0x10e821898 ID=28 Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> received response, status 200 content U
default	22:50:47.655364-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> response ended
default	22:50:47.655752-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.756s
default	22:50:47.655994-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> done using Connection 3
default	22:50:47.656230-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> summary for task success {transaction_duration_ms=123, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=121, response_duration_ms=1, request_bytes=1142, request_throughput_kbps=1705, response_bytes=956, response_throughput_kbps=629, cache_hit=true}
default	22:50:47.656265-0500	MobileJarvisNative	Task <98ABCD76-3427-4E81-9699-A3735BFD12C9>.<8> finished successfully
default	22:50:47.665374-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.665863-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.770s
default	22:50:47.666055-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> now using Connection 3
default	22:50:47.666563-0500	MobileJarvisNative	0x10e821898 ID=32 Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> sent request, body N 0
default	22:50:47.804462-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.804502-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.805306-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.805349-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.805541-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.805706-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:50:47.838227-0500	MobileJarvisNative	0x10e821898 ID=32 Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> received response, status 200 content U
default	22:50:47.838551-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> response ended
default	22:50:47.839010-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.945s
default	22:50:47.839212-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> done using Connection 3
default	22:50:47.839339-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> summary for task success {transaction_duration_ms=176, response_status=200, connection=3, reused=1, reused_after_ms=13, request_start_ms=1, request_duration_ms=0, response_start_ms=175, response_duration_ms=0, request_bytes=1187, request_throughput_kbps=1910, response_bytes=735, response_throughput_kbps=727, cache_hit=true}
default	22:50:47.839401-0500	MobileJarvisNative	Task <58A113E6-3E10-47C1-BEA7-22B7D415937A>.<9> finished successfully
default	22:50:47.862528-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:50:47.863567-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.970s
default	22:50:47.863732-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> now using Connection 3
default	22:50:47.864228-0500	MobileJarvisNative	0x10e821dd8 ID=36 Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> sent request, body N 0
default	22:50:47.966600-0500	MobileJarvisNative	0x10e821dd8 ID=36 Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> received response, status 200 content U
default	22:50:47.966975-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> response ended
default	22:50:47.967243-0500	MobileJarvisNative	[C3] event: client:connection_idle @2.073s
default	22:50:47.967381-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> done using Connection 3
default	22:50:47.967489-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> summary for task success {transaction_duration_ms=104, response_status=200, connection=3, reused=1, reused_after_ms=24, request_start_ms=1, request_duration_ms=0, response_start_ms=101, response_duration_ms=2, request_bytes=1246, request_throughput_kbps=2376, response_bytes=751, response_throughput_kbps=275, cache_hit=true}
default	22:50:47.967521-0500	MobileJarvisNative	Task <3B6706C6-C7FE-45AE-96F7-DF5695839D15>.<10> finished successfully
default	22:50:47.969011-0500	runningboardd	Invalidating assertion 33-1766-1992945 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:1766]
default	22:50:49.683470-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Stationary): InfraUptime:44659.7secs Channel: 157 Bandwidth: 80Mhz Rssi: -41 {-47 -44} Cca: 6 (S:1 O:2 I:2) Snr: 30 BcnPer: 28.6% (49, 51.2%) TxFrameCnt: 167 TxPer: 0.0% TxReTrans: 0 TxRetryRatio: 0.0% RxFrameCnt: 143 RxRetryFrames: 2 RxRetryRatio: 1.4% TxRate: 1200950 RxRate: 1200950 FBRate: 720580 TxFwFrms: 52 TxFwFail: 1 Noise: -88 {-88 -89 -1} time: 42.5secs fgApp: com.hightowerai.MobileJarvisNative V: T
