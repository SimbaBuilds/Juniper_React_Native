default	13:31:24.185786-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.90904e+06 touches: {(
    <UITouch: 0x865e8f9c0> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x8657f8000; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {155, 591.33332824707031}; previous location in window: {155, 591.33332824707031}; location in view: {35, 34.333328247070312}; previous location in view: {35, 34.333328247070312}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x8654d0000; baseClass = UITapGestureRecognizer; state = Possible; view = <SBIconView: 0x8657f8000>; target= <(
default	13:31:24.225512-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	13:31:24.227370-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	13:31:24.236192-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	13:31:24.236254-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	13:31:24.236417-0500	SpringBoard	Created <FBWorkspace: 0x86b464d20; <FBApplicationProcess: 0x86d2beb80; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	13:31:24.236469-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	13:31:24.238223-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-2043851 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	13:31:24.238274-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	13:31:24.238322-0500	runningboardd	Assertion 33-34-2043851 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	13:31:24.241760-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	13:31:24.241784-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	13:31:24.250500-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.003934 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	13:31:24.250544-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbdeaccf00>)
default	13:31:24.250583-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbde3338a0> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdf019ef0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdf01b0f0> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdf01bb70> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdf01bba0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbde330c00> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdf018810> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbde333840> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdf0198c0> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/171EA47C-2324-46E6-B6A0-33FB2A933E40/tmp" }
		"HOME" => <string: 0xbdf01b150> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/171EA47C-2324-46E6-B6A0-33FB2A933E40" }
		"CFFIXED_USER_HOME" => <string: 0xbdf01a6d0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/171EA47C-2324-46E6-B6A0-33FB2A933E40" }
	}
	"_AdditionalProperties" => <dictionary: 0xbde332ac0> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbde333e40> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbde333a20> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdf018c60> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdf01ad90> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdf01afa0> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[4263][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdf019230> { count = 1, capacity = 8, contents =
		0: <string: 0xbdf01a5e0> { length = 113, contents = "/var/containers/Bundle/Application/1ADFE6B0-3284-4F3E-9F28-B797B71332F9/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdf01a220> { length = 113, contents = "/var/containers/Bundle/Application/1ADFE6B0-3284-4F3E-9F28-B797B71332F9/MobileJarvisNative.app/MobileJarvisNative" }
}
default	13:31:24.250819-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	13:31:24.251135-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	13:31:24.251568-0500	kernel	/private/var/containers/Bundle/Application/1ADFE6B0-3284-4F3E-9F28-B797B71332F9/MobileJarvisNative.app/MobileJarvisNative[6613] ==> container
default	13:31:24.251729-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] Memory Limits: active 2098 inactive 2098
 <private>
default	13:31:24.251754-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] This process will be managed.
default	13:31:24.251931-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.252077-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x865e8ef40; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	13:31:24.253240-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	13:31:24.253328-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.253449-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-2043852 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:24.253810-0500	runningboardd	Assertion 33-33-2043852 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as active
error	13:31:24.254251-0500	kernel	Sandbox: MobileJarvisNative(6613) deny(1) sysctl-read kern.bootargs
default	13:31:24.255147-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] Set jetsam priority to 100 [0] flag[1]
default	13:31:24.255841-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] Resuming task.
default	13:31:24.256103-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] Set darwin role to: UserInteractiveFocal
default	13:31:24.256872-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] reported to RB as running
default	13:31:24.257380-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	13:31:24.258359-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Bootstrap success!
default	13:31:24.258517-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] set Memory Limits to Soft Active (2098)
default	13:31:24.258541-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] Set Carplay mode to: 0
default	13:31:24.258661-0500	SpringBoard	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.258794-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] visiblity is yes
default	13:31:24.259479-0500	CommCenter	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.259505-0500	CommCenter	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.260029-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Setting process task state to: Running
default	13:31:24.260066-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Setting process visibility to: Foreground
default	13:31:24.260194-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.260262-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Registering event dispatcher after bootstrap
default	13:31:24.260499-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Initial launch assertion state: ForegroundFocal.
default	13:31:24.260601-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86d2beb80; app<com.hightowerai.MobileJarvisNative>:6613(v87A4F)>
default	13:31:24.261054-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86973f300; type: MainTransition; transitionID: 6D703680-3664-40EE-B0D8-661DA09566A9; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	13:31:24.261559-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86ce43b10> {
    <SBSwitcherModifierEventResponse: 0x86cd6a9d0> {
	    <SBTimerEventSwitcherEventResponse: 0x866c27540; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x866c25380>;
	};
    <SBSwitcherModifierEventResponse: 0x8656746f0> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x866f74dc0; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x867137690; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x866f759c0; visible: YES; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x869cb3890; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	13:31:24.263344-0500	healthd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.263382-0500	healthd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.264003-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2043851:FBApplicationProcess" age:00:00:00  id:51539648272 [System: PrevIdle SysAct]
default	13:31:24.264153-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x857861a80; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581ddf10; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 1:31:24 PM CDT;}
default	13:31:24.264214-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857861880 10-08-2025 13:31:24, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	13:31:24.266246-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.274311-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	13:31:24.279495-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86c040d80; type: MainTransition; transitionID: 6D703680-3664-40EE-B0D8-661DA09566A9; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	13:31:24.281085-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	13:31:24.281111-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	13:31:24.284050-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x8672eaee0; type: SceneReady; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86923b2c0; contentOrientation: "portrait (1)"; lastInteractionTime: 200830; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868144b70; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	13:31:24.285533-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	13:31:24.286506-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	13:31:24.286642-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86ec36700.
default	13:31:24.286669-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Registered new scene: <FBUIApplicationWorkspaceScene: 0x86c208cc0; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	13:31:24.286695-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	13:31:24.286720-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Workspace interruption policy did change: reconnect
default	13:31:24.286794-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x866cc9ee0 count:1
default	13:31:24.286876-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	13:31:24.286948-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-2043853 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	13:31:24.286978-0500	runningboardd	Assertion 33-34-2043853 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as originator process has not exited
default	13:31:24.287100-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	13:31:24.287628-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:6613 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [6613]; recentSceneIdentityTokensByPID: {6613: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	13:31:24.287686-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:6613 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [6613]; recentSceneIdentityTokensByPID: {6613: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	13:31:24.288578-0500	SpringBoard	Now tracking: <FBScene: 0x865dcec00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	13:31:24.288790-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	13:31:24.288921-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	13:31:24.288980-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	13:31:24.289005-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	13:31:24.289055-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	13:31:24.289103-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	13:31:24.291960-0500	backboardd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.292059-0500	backboardd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.294390-0500	locationd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.294511-0500	locationd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.294534-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86c003fe0; pid: 6613; taskState: Running; visibility: Foreground>
default	13:31:24.294593-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 6613;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	13:31:24.294666-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":6613, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	13:31:24.294951-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":6613, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	13:31:24.295034-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":6613, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	13:31:24.295423-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	13:31:24.296354-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":6613, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	13:31:24.296401-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	13:31:24.296437-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	13:31:24.296474-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	13:31:24.296554-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	13:31:24.296586-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	13:31:24.297169-0500	PerfPowerServices	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.297221-0500	PerfPowerServices	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.297274-0500	dasd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.297447-0500	audiomxd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.297473-0500	dasd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.297533-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.297560-0500	WirelessRadioManagerd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.297674-0500	WirelessRadioManagerd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.298439-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	13:31:24.301038-0500	UserEventAgent	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.301328-0500	UserEventAgent	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.301640-0500	wifid	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.301690-0500	wifid	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.307436-0500	useractivityd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.307552-0500	useractivityd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.311292-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	13:31:24.311801-0500	gamepolicyd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.311959-0500	gamepolicyd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	13:31:24.316797-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	13:31:24.316862-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	13:31:24.316968-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	13:31:24.317017-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	13:31:24.322072-0500	MobileJarvisNative	[0x102c80000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	13:31:24.322102-0500	MobileJarvisNative	[0x102c80100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	13:31:24.326926-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	13:31:24.327043-0500	MobileJarvisNative	Creating new background assertion
default	13:31:24.327069-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x101e4d800>
default	13:31:24.327094-0500	MobileJarvisNative	Initializing connection
default	13:31:24.327121-0500	MobileJarvisNative	Removing all cached process handles
default	13:31:24.327233-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	13:31:24.327328-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	13:31:24.327356-0500	MobileJarvisNative	[0x102c80300] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	13:31:24.327744-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] as ready
default	13:31:24.327938-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-6613-2043854 target:6613 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	13:31:24.327970-0500	runningboardd	Assertion 33-6613-2043854 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:24.328119-0500	MobileJarvisNative	Handshake succeeded
default	13:31:24.328141-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	13:31:24.328387-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	13:31:24.328412-0500	MobileJarvisNative	Created background task <private>.
default	13:31:24.328452-0500	symptomsd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.328476-0500	symptomsd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.328501-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	13:31:24.328528-0500	MobileJarvisNative	[0x102ca0000] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:24.328675-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	13:31:24.329201-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	13:31:24.329238-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	13:31:24.329469-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	13:31:24.329653-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:B403FE19-54A6-4384-B0FC-46121CE8FA43 pid:6613 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 6613;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	13:31:24.329775-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xca266d740; IOHIDEventSystemConnectionRef: 0xc997f8000; vpid: 6613(v87A4F); taskPort: 0x10D3FB; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:B403FE19-54A6-4384-B0FC-46121CE8FA43 pid:6613 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 6613;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	13:31:24.330709-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	13:31:24.330842-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	13:31:24.330976-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	13:31:24.331003-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	13:31:24.331132-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	13:31:24.331182-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	13:31:24.331463-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	13:31:24.332253-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	13:31:24.332304-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	13:31:24.332328-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	13:31:24.332398-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	13:31:24.333002-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	13:31:24.334722-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	13:31:24.334841-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	13:31:24.334867-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	13:31:24.334892-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x102c72000 <private>> attempting immediate handshake from activate
default	13:31:24.334917-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x102c72000 <private>> sent handshake
default	13:31:24.334942-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x102ce1ea0>
default	13:31:24.335067-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Connection established.
default	13:31:24.335092-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	13:31:24.335117-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x865e2f950>
default	13:31:24.335165-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Connection to remote process established!
default	13:31:24.335529-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0xdcee] to process 0x86d2beb80 (watchdog: 19.92s)
default	13:31:24.335669-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	13:31:24.335930-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86c002f80; pid: 6613; taskState: Running; visibility: Foreground>
default	13:31:24.335988-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	13:31:24.336100-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336128-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336186-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336246-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336283-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336317-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336344-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336374-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336399-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336424-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336448-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336525-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336551-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x86c002e60; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] remnants=0>
default	13:31:24.336636-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	13:31:24.336756-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	13:31:24.336883-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x102ca0640> for initial
default	13:31:24.336909-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x102ca0640> for CADisplay KVO
default	13:31:24.337544-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	13:31:24.337622-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	13:31:24.338937-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	13:31:24.340353-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	13:31:24.340384-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	13:31:24.340415-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	13:31:24.340969-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	13:31:24.341046-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	13:31:24.341068-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	13:31:24.341095-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	13:31:24.341233-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	13:31:24.344120-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	13:31:24.344219-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x101e4d800>
default	13:31:24.344321-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	13:31:24.344346-0500	MobileJarvisNative	Created background task <private>.
default	13:31:24.344782-0500	watchdogd	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.344881-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	13:31:24.344908-0500	watchdogd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.345087-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.345253-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.345861-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.348658-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x102d955e0>; with scene: <UIWindowScene: 0x101e54d40>
default	13:31:24.349201-0500	MobileJarvisNative	0x102db0ba0 setDelegate:<0x102db0ae0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	13:31:24.349603-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.349925-0500	MobileJarvisNative	[0x102d95570] Initialized with scene: <UIWindowScene: 0x101e54d40>; behavior: <_UIEventDeferringBehavior_iOS: 0x102ce1000>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	13:31:24.350083-0500	MobileJarvisNative	[0x102ca1040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:24.350290-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.350517-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	13:31:24.350759-0500	healthd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.350861-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.351278-0500	CommCenter	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.352238-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.352822-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
error	13:31:24.353245-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	13:31:24.353307-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.353823-0500	backboardd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.354130-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	13:31:24.354209-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	13:31:24.354239-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	13:31:24.354310-0500	MobileJarvisNative	startConnection
default	13:31:24.354593-0500	locationd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.355412-0500	symptomsd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.355493-0500	dasd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.356118-0500	useractivityd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.356195-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.356229-0500	MobileJarvisNative	[0x102ca1900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	13:31:24.356395-0500	WirelessRadioManagerd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.356700-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	13:31:24.356734-0500	UserEventAgent	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.357563-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(6613) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	13:31:24.357891-0500	wifid	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.358007-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	13:31:24.359443-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.359498-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.359711-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.360424-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	13:31:24.360713-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.360749-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.361191-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	13:31:24.361260-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.362296-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	13:31:24.362400-0500	backboardd	new deferring rules for pid:34: [
    [34-62A0]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-62A1]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 6613>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	13:31:24.363806-0500	PerfPowerServices	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.364973-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 6613>
]
default	13:31:24.365111-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x102d3cf00; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	13:31:24.365159-0500	MobileJarvisNative	observerPolicyDidChange: 0x102d3cf00 -> <_UIKeyWindowSceneObserver: 0x102db0cf0>
default	13:31:24.365392-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 6613>
]
default	13:31:24.365658-0500	watchdogd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.367746-0500	gamepolicyd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	13:31:24.386164-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	13:31:24.387952-0500	MobileJarvisNative	<UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D) Scene updated orientation preferences: none -> ( Pu )
default	13:31:24.389271-0500	MobileJarvisNative	Key window API is scene-level: YES
default	13:31:24.389301-0500	MobileJarvisNative	UIWindowScene: 0x101e54d40: Window became key in scene: UIWindow: 0x101e551c0; contextId: 0xE3F2DCA0: reason: UIWindowScene: 0x101e54d40: Window requested to become key in scene: 0x101e551c0
default	13:31:24.389365-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x101e54d40; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x101e551c0; reason: UIWindowScene: 0x101e54d40: Window requested to become key in scene: 0x101e551c0
default	13:31:24.389414-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x101e551c0; contextId: 0xE3F2DCA0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.389468-0500	MobileJarvisNative	[0x102d95570] Begin local event deferring requested for token: 0x102c64420; environments: 1; reason: UIWindowScene: 0x101e54d40: Begin event deferring in keyboardFocus for window: 0x101e551c0
default	13:31:24.389862-0500	backboardd	new deferring rules for pid:6613: [[6613-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0xE3F2DCA0; pid: 6613>; reason: …gin event deferring in keyboardFocus for window: 0x101e551c0]
default	13:31:24.389915-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	13:31:24.389991-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	13:31:24.390017-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	13:31:24.390419-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(6613) setClientFocusContext
    focusContext:<contextID:3824344224 sceneID:com.hightowerai.MobileJarvisNative-default>
default	13:31:24.390923-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 6613 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.391016-0500	SpringBoard	arbiter: arbiter requested pid 6613 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.391047-0500	SpringBoard	[coordinator] using arbiter suggested pid 6613 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.391098-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.391442-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.391607-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 6613; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:6613>
default	13:31:24.391809-0500	SpringBoard	set currentFocus PID:6613 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	13:31:24.392222-0500	SpringBoard	Scene <FBScene: 0x865dcec00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	13:31:24.392250-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	13:31:24.392647-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 6613>,
    <token: 0xE3F2DCA0; pid: 6613>
]
default	13:31:24.392689-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 6613>,
    <token: 0xE3F2DCA0; pid: 6613>
]
default	13:31:24.392735-0500	backboardd	new scene host settings: contextID:E3F2DCA0 <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	13:31:24.397064-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x102d3cf00; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	13:31:24.397105-0500	MobileJarvisNative	observerPolicyDidChange: 0x102d3cf00 -> <_UIKeyWindowSceneObserver: 0x102db0cf0>
default	13:31:24.397169-0500	MobileJarvisNative	establishing connection to agent
default	13:31:24.397267-0500	MobileJarvisNative	[0x102d3def0] Session created.
default	13:31:24.397296-0500	MobileJarvisNative	[0x102d3def0] Session created from connection [0x102c80800]
default	13:31:24.398766-0500	MobileJarvisNative	[0x102c80800] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	13:31:24.398823-0500	MobileJarvisNative	[0x102d3def0] Session activated
default	13:31:24.400130-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	13:31:24.400243-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	13:31:24.401633-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	13:31:24.401761-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	13:31:24.402654-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	13:31:24.402910-0500	MobileJarvisNative	[0x102f48500] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	13:31:24.402961-0500	MobileJarvisNative	<SOServiceConnection: 0x102eed320>: new XPC connection
default	13:31:24.403455-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [B9BBE233-B19D-46A9-879C-495F1A68A0A1] (reporting strategy default)>
default	13:31:24.403481-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [8AF3A176-8419-4765-ACD2-BBA67DF3DF72] (reporting strategy default)>
default	13:31:24.403506-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [B9BBE233-B19D-46A9-879C-495F1A68A0A1] (reporting strategy default)> as the global parent
default	13:31:24.403613-0500	SpringBoard	[0x86c208cc0:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0xdcee] completed with success: 1
default	13:31:24.403743-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	13:31:24.404016-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	13:31:24.404059-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	13:31:24.404138-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	13:31:24.404206-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	13:31:24.404237-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	13:31:24.404287-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	13:31:24.404316-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x101e54d40; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.404473-0500	MobileJarvisNative	[0x102d95570] Scene target of event deferring environments did update: scene: 0x101e54d40; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	13:31:24.404501-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x101e54d40; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.404531-0500	MobileJarvisNative	Stack[KeyWindow] 0x102db3030: Migrate scenes from LastOneWins -> SystemShellManaged
default	13:31:24.404654-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 6613<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2043855 target:6613<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	13:31:24.404686-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	13:31:24.404870-0500	runningboardd	Assertion 33-34-2043855 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	13:31:24.404967-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	13:31:24.405153-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	13:31:24.405283-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	13:31:24.405492-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	13:31:24.406080-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2043855 payload 15918742631522514469>
)} lost:{(
)}>
default	13:31:24.406382-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x865ea61e0; type: SceneReady; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86923b2c0; contentOrientation: "portrait (1)"; lastInteractionTime: 200830; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868144b70; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	13:31:24.406718-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.406919-0500	CommCenter	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.407737-0500	MobileJarvisNative	[0x102d95570] Scene target of event deferring environments did update: scene: 0x101e54d40; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	13:31:24.407767-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x101e54d40; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	13:31:24.408019-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-6613-2043856 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:24.408047-0500	runningboardd	Assertion 33-6613-2043856 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:24.408890-0500	healthd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.410440-0500	locationd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.410722-0500	symptomsd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.410963-0500	dasd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.411330-0500	backboardd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.411648-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.411844-0500	WirelessRadioManagerd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.412194-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	13:31:24.412251-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	13:31:24.412288-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	13:31:24.412345-0500	useractivityd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.412560-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	13:31:24.412992-0500	MobileJarvisNative	startConnection
default	13:31:24.413085-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	13:31:24.413382-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	13:31:24.413464-0500	MobileJarvisNative	forceReloadInputViews
default	13:31:24.413645-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	13:31:24.414510-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	13:31:24.414567-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	13:31:24.415657-0500	wifid	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.416903-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	13:31:24.416949-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	13:31:24.417062-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	13:31:24.417226-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	13:31:24.417562-0500	UserEventAgent	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.418889-0500	MobileJarvisNative	container_query_get_single_result: success
default	13:31:24.419024-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	13:31:24.419729-0500	MobileJarvisNative	Unbalanced calls to begin/end appearance transitions for <UIViewController: 0x102d90400>.
default	13:31:24.420325-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	13:31:24.420412-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	13:31:24.421951-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	13:31:24.422749-0500	MobileJarvisNative	Connection 1: enabling TLS
default	13:31:24.422887-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	13:31:24.422918-0500	MobileJarvisNative	[C1 51387F65-F34E-4542-A211-2DF3FCCD85F2 Hostname#ead716af:443 quic-connection, url hash: 38440147, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{B1521D31-72E5-46DE-99DE-D67CCA531242}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	13:31:24.423027-0500	MobileJarvisNative	[C1 Hostname#ead716af:443 initial parent-flow ((null))] event: path:start @0.000s
default	13:31:24.426772-0500	MobileJarvisNative	[C1 Hostname#ead716af:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.005s, uuid: 6D50BF22-6EC8-40C1-ADD6-E113B219CACB
default	13:31:24.427304-0500	MobileJarvisNative	[C1 Hostname#ead716af:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.005s
default	13:31:24.427362-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	13:31:24.427505-0500	MobileJarvisNative	[C1 Hostname#ead716af:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.005s
default	13:31:24.427762-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 initial path ((null))] event: path:start @0.006s
default	13:31:24.428029-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.006s, uuid: 6D50BF22-6EC8-40C1-ADD6-E113B219CACB
default	13:31:24.428122-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.006s
default	13:31:24.428589-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 initial path ((null))] event: path:start @0.007s
default	13:31:24.428750-0500	watchdogd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.428988-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.007s, uuid: 3352A0ED-0D8C-43BE-87B6-175AF270288E
default	13:31:24.429156-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.007s
default	13:31:24.429212-0500	MobileJarvisNative	[0x102c81300] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	13:31:24.429351-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> setting up Connection 1
default	13:31:24.462152-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#bf5b1824.443
default	13:31:24.462178-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b2af4ae6.443
default	13:31:24.462207-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e0be8847:443
default	13:31:24.462233-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9a05e1d1:443
default	13:31:24.462388-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.013s
default	13:31:24.462558-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 initial path ((null))] event: path:start @0.013s
default	13:31:24.463499-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.013s, uuid: CB98AEF9-91B3-4F26-9FC2-8F94A45CB642
default	13:31:24.463609-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.014s
default	13:31:24.464952-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.015s
default	13:31:24.465445-0500	MobileJarvisNative	Garbage collection for alternative services
default	13:31:24.466583-0500	MobileJarvisNative	[0x102f4a300] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	13:31:24.467591-0500	PerfPowerServices	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.469927-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-04b45afbd7a1d796] created QUIC connection (spin bit enabled)
default	13:31:24.470855-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.021s
default	13:31:24.473584-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-04b45afbd7a1d796] TLS stream is: [C2]
default	13:31:24.473613-0500	MobileJarvisNative	[C2 F76EB0A7-C4CE-4BBE-805C-749EDC1353A4 IPv6#bf5b1824.443 quic-connection, url hash: 38440147, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{B1521D31-72E5-46DE-99DE-D67CCA531242}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	13:31:24.473699-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	13:31:24.473752-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: CB98AEF9-91B3-4F26-9FC2-8F94A45CB642
default	13:31:24.473855-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	13:31:24.473884-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	13:31:24.474081-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:24.474108-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.001s
default	13:31:24.474298-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x102fa9c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	13:31:24.474380-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x102fa9c00] Client handshake started
default	13:31:24.474503-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS client enter_early_data
default	13:31:24.476079-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS client read_server_hello
default	13:31:24.476552-0500	gamepolicyd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	13:31:24.479125-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b2af4ae6.443
default	13:31:24.479151-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e0be8847:443
default	13:31:24.479177-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9a05e1d1:443
default	13:31:24.479367-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.035s
default	13:31:24.480978-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	13:31:24.481273-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	13:31:24.481314-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/1ADFE6B0-3284-4F3E-9F28-B797B71332F9/MobileJarvisNative.app
default	13:31:24.481568-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	13:31:24.481597-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	13:31:24.482425-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b2af4ae6.443
default	13:31:24.482453-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e0be8847:443
default	13:31:24.482479-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9a05e1d1:443
default	13:31:24.482652-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.043s
default	13:31:24.484143-0500	MobileJarvisNative	nw_path_evaluator_start [5556BBA3-182E-4E02-A44A-E29FB14CCC70 <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	13:31:24.484198-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	13:31:24.484272-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	13:31:24.484327-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	13:31:24.484352-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	13:31:24.484821-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	13:31:24.484997-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_server_hello
default	13:31:24.485443-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	13:31:24.485662-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_certificate_request
default	13:31:24.485825-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_server_certificate
default	13:31:24.485852-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	13:31:24.486148-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x102fa9c00] Performing external trust evaluation
default	13:31:24.486227-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x102fa9c00] Asyncing for external verify block
default	13:31:24.486546-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	13:31:24.486624-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> auth completion disp=1 cred=0x0
default	13:31:24.486673-0500	MobileJarvisNative	(Trust 0x102c7f780) No pending evals, starting
default	13:31:24.486890-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	13:31:24.486916-0500	MobileJarvisNative	[0x102c83600] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:24.486978-0500	MobileJarvisNative	[0x102c83900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:24.487011-0500	MobileJarvisNative	(Trust 0x102c7f780) Completed async eval kickoff
default	13:31:24.488156-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#b2af4ae6.443
default	13:31:24.488184-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#e0be8847:443
default	13:31:24.488210-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9a05e1d1:443
default	13:31:24.488341-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.054s
default	13:31:24.495999-0500	MobileJarvisNative	(Trust 0x102c7f780) trustd returned 4
default	13:31:24.496073-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	13:31:24.496120-0500	MobileJarvisNative	(Trust 0x102c7f600) No pending evals, starting
default	13:31:24.496454-0500	MobileJarvisNative	[0x102c83800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:24.496576-0500	MobileJarvisNative	[0x102f4ad00] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	13:31:24.496599-0500	MobileJarvisNative	(Trust 0x102c7f600) Completed async eval kickoff
default	13:31:24.496754-0500	MobileJarvisNative	[0x102c83900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:24.499038-0500	MobileJarvisNative	(Trust 0x102c7f600) trustd returned 4
default	13:31:24.499110-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	13:31:24.499136-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x102fa9c00] Returning from external verify block with result: true
default	13:31:24.499192-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x102fa9c00] Certificate verification result: OK
default	13:31:24.499579-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client read_server_finished
default	13:31:24.499847-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	13:31:24.499906-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	13:31:24.499933-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client send_client_certificate
default	13:31:24.499958-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client complete_second_flight
default	13:31:24.500263-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS 1.3 client done
default	13:31:24.500403-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS client finish_client_handshake
default	13:31:24.500464-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x102fa9c00] Client handshake state: TLS client done
default	13:31:24.500497-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x102fa9c00] Client handshake done
default	13:31:24.501137-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x102fa9c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(46ms) flight_time(24ms) rtt(23ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:24.501223-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:24.501358-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.047s
default	13:31:24.502350-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	13:31:24.502383-0500	MobileJarvisNative	[C2 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.047s
default	13:31:24.502950-0500	MobileJarvisNative	[0x102c83800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:24.506418-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session (null) [0x0] with pid '6613' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	13:31:24.506505-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '6613' moved to ForegroundRunning and is not allowed to play in the background
default	13:31:24.507268-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	13:31:24.507915-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] QUIC connection established in 52.317 ms, RTT 21.445 ms
default	13:31:24.508011-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:24.508383-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	13:31:24.508424-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	13:31:24.509322-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f761: {
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
default	13:31:24.510955-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:24.514081-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.074s
default	13:31:24.514175-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x102da4be0 with ID: 0x6f761
default	13:31:24.514800-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#bf5b1824.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-389164758)
default	13:31:24.516330-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	13:31:24.516407-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	13:31:24.516505-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	13:31:24.516556-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	13:31:24.517458-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.078s
default	13:31:24.517560-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	13:31:24.517636-0500	MobileJarvisNative	Call host has no calls
default	13:31:24.518865-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.080s
default	13:31:24.518996-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.080s
default	13:31:24.520401-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.080s
default	13:31:24.523186-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.082s
default	13:31:24.523586-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.083s
default	13:31:24.523863-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#bf5b1824.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	13:31:24.524311-0500	MobileJarvisNative	[C1 IPv6#bf5b1824.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.084s
default	13:31:24.524499-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	13:31:24.524534-0500	MobileJarvisNative	[C1 IPv6#bf5b1824.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.086s
default	13:31:24.524564-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	13:31:24.525325-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] path over en0 received event established
default	13:31:24.526012-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] promoted path 0x102e78fc0 over en0 to primary
default	13:31:24.526073-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	13:31:24.526644-0500	MobileJarvisNative	[C1.1.1.1 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.087s, uuid: CB98AEF9-91B3-4F26-9FC2-8F94A45CB642
default	13:31:24.526731-0500	MobileJarvisNative	[C1.1.1 Hostname#ead716af:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.087s, uuid: 3352A0ED-0D8C-43BE-87B6-175AF270288E
default	13:31:24.526784-0500	MobileJarvisNative	[C1.1 Hostname#ead716af:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.087s, uuid: 6D50BF22-6EC8-40C1-ADD6-E113B219CACB
default	13:31:24.526813-0500	MobileJarvisNative	[C1 IPv6#bf5b1824.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.088s, uuid: 6D50BF22-6EC8-40C1-ADD6-E113B219CACB
default	13:31:24.526936-0500	MobileJarvisNative	[0x102c83800] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	13:31:24.527471-0500	MobileJarvisNative	Connection 1: connected successfully
default	13:31:24.527519-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	13:31:24.527594-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	13:31:24.530200-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.094s
default	13:31:24.530824-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> now using Connection 1
default	13:31:24.531964-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	13:31:24.533395-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x102fa9c00] Asyncing for session update block
default	13:31:24.534151-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x102fa9c00] Asyncing for session update block
default	13:31:24.534231-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x102fa9c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(46ms) flight_time(24ms) rtt(23ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:24.534342-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#bf5b1824.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:24.534507-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] creating inbound stream 3
default	13:31:24.534749-0500	MobileJarvisNative	[0x102c83f00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	13:31:24.534991-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] creating inbound stream 7
default	13:31:24.535274-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] creating inbound stream 11
default	13:31:24.535548-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-013cda3ba7bf6cf9843f173bf4bf6fd44c3d56bc] creating inbound stream 15
default	13:31:24.535900-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	13:31:24.535936-0500	MobileJarvisNative	0x102e70c58 ID=0 Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> sent request, body N 0
default	13:31:24.536597-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x102fa9c00] Returning from session update block
default	13:31:24.536969-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x102fa9c00] Returning from session update block
error	13:31:24.538299-0500	MobileJarvisNative	[runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
error	13:31:24.538399-0500	MobileJarvisNative	Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
default	13:31:24.538530-0500	MobileJarvisNative	<private>
default	13:31:24.538887-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Technology: vocalizer, Available: true]'
default	13:31:24.538949-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	13:31:24.539258-0500	MobileJarvisNative	[0x102f4a080] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
error	13:31:24.540033-0500	MobileJarvisNative	<private>
error	13:31:24.540102-0500	MobileJarvisNative	[runtime not ready]: Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
default	13:31:24.544689-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	13:31:24.554204-0500	MobileJarvisNative	<nw_activity 50:1 [B9BBE233-B19D-46A9-879C-495F1A68A0A1] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 324ms
default	13:31:24.554342-0500	MobileJarvisNative	<nw_activity 50:2 [8AF3A176-8419-4765-ACD2-BBA67DF3DF72] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 324ms
default	13:31:24.554420-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [B9BBE233-B19D-46A9-879C-495F1A68A0A1] (global parent) (reporting strategy default) complete (reason success)>
default	13:31:24.554452-0500	MobileJarvisNative	Unset the global parent activity
default	13:31:24.565968-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	13:31:24.566359-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x101e54d40> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	13:31:24.566559-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	13:31:24.566615-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	13:31:24.566699-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	13:31:24.567188-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	13:31:24.567241-0500	MobileJarvisNative	Updating configuration of monitor M6613-1
default	13:31:24.567534-0500	MobileJarvisNative	[0x102c83900] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	13:31:24.567698-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	13:31:24.567783-0500	MobileJarvisNative	[0x102c83b00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	13:31:24.568181-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	13:31:24.568245-0500	MobileJarvisNative	[0x106f38000] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	13:31:24.568465-0500	MobileJarvisNative	[0x102c83900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:24.569109-0500	MobileJarvisNative	Hit the server for a process handle 173f09f7000019d5 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.569273-0500	MobileJarvisNative	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	13:31:24.596692-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
error	13:31:24.598433-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	13:31:24.598570-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
default	13:31:24.600595-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	13:31:24.618977-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: gryphon, Available: true]'
default	13:31:24.794780-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	13:31:24.794847-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	13:31:24.794884-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	13:31:24.795049-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Technology: custom, Available: true]'
default	13:31:24.808192-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	13:31:24.808262-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	13:31:24.813065-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	13:31:24.829133-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neural, Available: true]'
default	13:31:24.843344-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	13:31:24.843429-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	13:31:24.843471-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	13:31:24.845524-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neuralAX, Available: true]'
default	13:31:24.851452-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	13:31:24.851476-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	13:31:24.851564-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	13:31:24.855511-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	13:31:24.855602-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	13:31:24.855632-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	13:31:24.855658-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x101e4d800> for task identifier: 2
default	13:31:24.855846-0500	runningboardd	Invalidating assertion 33-6613-2043854 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:24.858318-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x106dbc040>
default	13:31:24.906266-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x8699d6a00; type: MainTransition; transitionID: 6D703680-3664-40EE-B0D8-661DA09566A9; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	13:31:24.907012-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86ec34ba0> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86ec37c60>;
    <SBSwitcherModifierEventResponse: 0x86ec35f80> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86ec37510>;
	    <SBSwitcherModifierEventResponse: 0x86ec37a80> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86ec36b50; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x8699fe780; visible: NO; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x86b314730; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x8656a5260; active: NO; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	13:31:24.935770-0500	SpringBoard	Front display did change: <SBApplication: 0x866532200; com.hightowerai.MobileJarvisNative>
default	13:31:24.955172-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x8578602c0; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581df640; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 1:31:24 PM CDT;}
default	13:31:24.955209-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d59fc0 10-08-2025 13:31:24, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	13:31:24.957813-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	13:31:25.019642-0500	MobileJarvisNative	0x102e70c58 ID=0 Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> received response, status 200 content U
default	13:31:25.020351-0500	MobileJarvisNative	[0x106f38100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:25.026962-0500	MobileJarvisNative	[0x106f38100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:25.029084-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> response ended
default	13:31:25.029640-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.608s
default	13:31:25.029803-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> done using Connection 1
default	13:31:25.029937-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> summary for task success {transaction_duration_ms=633, response_status=200, connection=1, protocol="h3", domain_lookup_duration_ms=6, connect_duration_ms=63, secure_connection_duration_ms=52, private_relay=false, request_start_ms=119, request_duration_ms=4, response_start_ms=620, response_duration_ms=12, request_bytes=456, request_throughput_kbps=98, response_bytes=6797, response_throughput_kbps=527, cache_hit=true}
default	13:31:25.030188-0500	MobileJarvisNative	Task <8F6B4A8B-EB9D-434D-89CB-E7415DE3479D>.<1> finished successfully
default	13:31:25.039727-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	13:31:25.042165-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	13:31:25.042402-0500	MobileJarvisNative	Connection 3: enabling TLS
default	13:31:25.042503-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	13:31:25.042542-0500	MobileJarvisNative	[C3 89F03695-934D-4E5C-9A25-E0A98949A6DE Hostname#c6b9af1a:443 quic-connection, url hash: ccea1f2a, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{B1521D31-72E5-46DE-99DE-D67CCA531242}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	13:31:25.042659-0500	MobileJarvisNative	[C3 Hostname#c6b9af1a:443 initial parent-flow ((null))] event: path:start @0.000s
default	13:31:25.043478-0500	MobileJarvisNative	[C3 Hostname#c6b9af1a:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: C62ED58A-6990-4D61-8452-72E6B9CA7376
default	13:31:25.043721-0500	MobileJarvisNative	[C3 Hostname#c6b9af1a:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	13:31:25.043747-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	13:31:25.044061-0500	MobileJarvisNative	[C3 Hostname#c6b9af1a:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	13:31:25.044151-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 initial path ((null))] event: path:start @0.001s
default	13:31:25.044519-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: C62ED58A-6990-4D61-8452-72E6B9CA7376
default	13:31:25.044639-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	13:31:25.044852-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 initial path ((null))] event: path:start @0.001s
default	13:31:25.045243-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 58579B3B-22D8-42EA-B61C-4A73C1347BAE
default	13:31:25.045418-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.002s
default	13:31:25.045862-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> setting up Connection 3
default	13:31:25.051945-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#78e0aa43.443
default	13:31:25.051990-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#e9fe98ce.443
default	13:31:25.052018-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9e8297f1:443
default	13:31:25.052046-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#2ae640b9:443
default	13:31:25.052171-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.007s
default	13:31:25.052333-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 initial path ((null))] event: path:start @0.007s
default	13:31:25.052479-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.008s, uuid: 091D4451-691D-460C-9C0E-0D826C00349B
default	13:31:25.052593-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.008s
default	13:31:25.052896-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.008s
default	13:31:25.053385-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-d76a8fb9ea3e56b5] created QUIC connection (spin bit enabled)
default	13:31:25.053811-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.009s
default	13:31:25.055713-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-d76a8fb9ea3e56b5] TLS stream is: [C4]
default	13:31:25.055778-0500	MobileJarvisNative	[C4 210721DC-D6C1-453D-B0E5-FAE62D6EAF6D IPv6#78e0aa43.443 quic-connection, url hash: ccea1f2a, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{B1521D31-72E5-46DE-99DE-D67CCA531242}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	13:31:25.055926-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	13:31:25.056118-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 091D4451-691D-460C-9C0E-0D826C00349B
default	13:31:25.056447-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	13:31:25.056552-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	13:31:25.056907-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:25.056992-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	13:31:25.057578-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x102fab400] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	13:31:25.057774-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x102fab400] Client handshake started
default	13:31:25.058021-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS client enter_early_data
default	13:31:25.058274-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS client read_server_hello
default	13:31:25.072932-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#e9fe98ce.443
default	13:31:25.072976-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9e8297f1:443
default	13:31:25.073019-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#2ae640b9:443
default	13:31:25.073250-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.029s
default	13:31:25.079257-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#e9fe98ce.443
default	13:31:25.079324-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#2ae640b9:443
default	13:31:25.079375-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#9e8297f1:443
default	13:31:25.079601-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.035s
default	13:31:25.090228-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_hello_retry_request
default	13:31:25.090373-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_server_hello
default	13:31:25.090456-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	13:31:25.092426-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_certificate_request
default	13:31:25.092803-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_server_certificate
default	13:31:25.092847-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	13:31:25.093167-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x102fab400] Performing external trust evaluation
default	13:31:25.093255-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x102fab400] Asyncing for external verify block
default	13:31:25.093483-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	13:31:25.093569-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> auth completion disp=1 cred=0x0
default	13:31:25.093621-0500	MobileJarvisNative	(Trust 0x106e55440) No pending evals, starting
default	13:31:25.093727-0500	MobileJarvisNative	[0x106f38700] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:25.093750-0500	MobileJarvisNative	(Trust 0x106e55440) Completed async eval kickoff
default	13:31:25.098097-0500	MobileJarvisNative	(Trust 0x106e55440) trustd returned 4
default	13:31:25.098223-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	13:31:25.098272-0500	MobileJarvisNative	(Trust 0x106e55140) No pending evals, starting
default	13:31:25.098784-0500	MobileJarvisNative	[0x106f38f00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:25.099392-0500	MobileJarvisNative	(Trust 0x106e55140) Completed async eval kickoff
default	13:31:25.099713-0500	MobileJarvisNative	[0x106f38700] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:25.101828-0500	MobileJarvisNative	(Trust 0x106e55140) trustd returned 4
default	13:31:25.101906-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	13:31:25.101932-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x102fab400] Returning from external verify block with result: true
default	13:31:25.101991-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x102fab400] Certificate verification result: OK
default	13:31:25.102051-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client read_server_finished
default	13:31:25.102103-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client send_end_of_early_data
default	13:31:25.102128-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	13:31:25.102159-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client send_client_certificate
default	13:31:25.102185-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client complete_second_flight
default	13:31:25.102385-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS 1.3 client done
default	13:31:25.102411-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS client finish_client_handshake
default	13:31:25.102437-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x102fab400] Client handshake state: TLS client done
default	13:31:25.102464-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x102fab400] Client handshake done
default	13:31:25.102803-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x102fab400] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(50ms) flight_time(40ms) rtt(38ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:25.102891-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:25.102994-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.049s
default	13:31:25.103127-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	13:31:25.103154-0500	MobileJarvisNative	[C4 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.050s
default	13:31:25.103215-0500	MobileJarvisNative	[0x106f38f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:25.104185-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	13:31:25.104240-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] QUIC connection established in 51.129 ms, RTT 29.326 ms
default	13:31:25.104269-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:25.104406-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.060s
default	13:31:25.104463-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv6#78e0aa43.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-389164758)
default	13:31:25.104695-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.060s
default	13:31:25.105156-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.060s
default	13:31:25.105262-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.060s
default	13:31:25.105612-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.060s
default	13:31:25.105834-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.060s
default	13:31:25.105943-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.060s
default	13:31:25.105973-0500	MobileJarvisNative	nw_flow_connected [C3 IPv6#78e0aa43.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	13:31:25.106066-0500	MobileJarvisNative	[C3 IPv6#78e0aa43.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.061s
default	13:31:25.106266-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	13:31:25.106293-0500	MobileJarvisNative	[C3 IPv6#78e0aa43.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.061s
default	13:31:25.106319-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	13:31:25.106754-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] path over en0 received event established
default	13:31:25.106973-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] promoted path 0x102e7b800 over en0 to primary
default	13:31:25.107038-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	13:31:25.107273-0500	MobileJarvisNative	[C3.1.1.1 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.061s, uuid: 091D4451-691D-460C-9C0E-0D826C00349B
default	13:31:25.107386-0500	MobileJarvisNative	[C3.1.1 Hostname#c6b9af1a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.061s, uuid: 58579B3B-22D8-42EA-B61C-4A73C1347BAE
default	13:31:25.107532-0500	MobileJarvisNative	[C3.1 Hostname#c6b9af1a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.061s, uuid: C62ED58A-6990-4D61-8452-72E6B9CA7376
default	13:31:25.107574-0500	MobileJarvisNative	[C3 IPv6#78e0aa43.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.061s, uuid: C62ED58A-6990-4D61-8452-72E6B9CA7376
default	13:31:25.107700-0500	MobileJarvisNative	Connection 3: connected successfully
default	13:31:25.107731-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	13:31:25.107767-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	13:31:25.108304-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.062s
default	13:31:25.108484-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> now using Connection 3
default	13:31:25.109124-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	13:31:25.109199-0500	MobileJarvisNative	0x102e71518 ID=0 Task <40438883-65C8-4412-A575-08F1013131B9>.<2> sent request, body N 0
default	13:31:25.125932-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x102fab400] Asyncing for session update block
default	13:31:25.126091-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x102fab400] Asyncing for session update block
default	13:31:25.126189-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x102fab400] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(50ms) flight_time(40ms) rtt(38ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:25.126250-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#78e0aa43.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:25.126470-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] creating inbound stream 3
default	13:31:25.126703-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] creating inbound stream 7
default	13:31:25.126903-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] creating inbound stream 11
default	13:31:25.127099-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01b58bf940a30d5d8ab645f916a30b7502be4f92] creating inbound stream 15
default	13:31:25.128267-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x102fab400] Returning from session update block
default	13:31:25.128787-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x102fab400] Returning from session update block
default	13:31:25.387259-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Now acquiring workspace assertion with state: ForegroundFocal.
default	13:31:25.387617-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-2043858 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	13:31:25.387826-0500	runningboardd	Assertion 33-34-2043858 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as active
default	13:31:25.391839-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	13:31:25.392766-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:6613] Dropping launch assertion.
default	13:31:25.393101-0500	runningboardd	Invalidating assertion 33-34-2043851 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	13:31:25.393594-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.393713-0500	healthd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.394120-0500	CommCenter	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.394617-0500	backboardd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.395085-0500	locationd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.395590-0500	symptomsd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.395629-0500	dasd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.396085-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.396383-0500	useractivityd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.396423-0500	WirelessRadioManagerd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.396894-0500	PerfPowerServices	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.396934-0500	wifid	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.397017-0500	UserEventAgent	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.397389-0500	watchdogd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.397583-0500	MobileJarvisNative	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	13:31:25.400624-0500	gamepolicyd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	13:31:25.453294-0500	runningboardd	Invalidating assertion 33-6613-2043856 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:25.509046-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	13:31:25.509267-0500	SpringBoard	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.509723-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2043851:FBApplicationProcess" age:00:00:01  id:51539648272 [System: PrevIdle SysAct]
default	13:31:25.510173-0500	healthd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.510215-0500	CommCenter	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.510598-0500	backboardd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.510745-0500	locationd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.511019-0500	symptomsd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.511327-0500	dasd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.511444-0500	audiomxd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.511710-0500	WirelessRadioManagerd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.512103-0500	UserEventAgent	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.512299-0500	PerfPowerServices	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.512732-0500	useractivityd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.513097-0500	watchdogd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.513396-0500	MobileJarvisNative	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	13:31:25.513744-0500	gamepolicyd	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	13:31:25.514096-0500	wifid	Received state update for 6613 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	13:31:25.635452-0500	MobileJarvisNative	0x102e71518 ID=0 Task <40438883-65C8-4412-A575-08F1013131B9>.<2> received response, status 200 content U
default	13:31:25.635744-0500	MobileJarvisNative	[0x106f38700] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:25.643706-0500	MobileJarvisNative	[0x106f38700] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:25.645121-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-6613-2043859 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:25.645531-0500	runningboardd	Assertion 33-6613-2043859 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:25.866336-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> response ended
default	13:31:25.866858-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.824s
default	13:31:25.867007-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> done using Connection 3
default	13:31:25.867086-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> summary for task success {transaction_duration_ms=825, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=5, connect_duration_ms=52, secure_connection_duration_ms=51, private_relay=false, request_start_ms=63, request_duration_ms=0, response_start_ms=591, response_duration_ms=233, request_bytes=494, request_throughput_kbps=561, response_bytes=1755437, response_throughput_kbps=7347, cache_hit=false}
default	13:31:25.867348-0500	MobileJarvisNative	Task <40438883-65C8-4412-A575-08F1013131B9>.<2> finished successfully
default	13:31:25.934056-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	13:31:25.934199-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
error	13:31:25.939227-0500	MobileJarvisNative	non-std C++ exception
default	13:31:25.939284-0500	MobileJarvisNative	<private>
error	13:31:25.939724-0500	MobileJarvisNative	<private>
default	13:31:25.942606-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	13:31:25.957515-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
error	13:31:25.959605-0500	MobileJarvisNative	[runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
error	13:31:25.960125-0500	MobileJarvisNative	Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
default	13:31:25.960520-0500	MobileJarvisNative	<private>
error	13:31:25.960680-0500	MobileJarvisNative	<private>
error	13:31:25.960736-0500	MobileJarvisNative	[runtime not ready]: Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
default	13:31:25.960901-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
error	13:31:25.965933-0500	MobileJarvisNative	non-std C++ exception
error	13:31:25.966304-0500	MobileJarvisNative	<private>
default	13:31:25.993859-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	13:31:26.012362-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	13:31:26.015642-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:26.016762-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	13:31:26.016953-0500	MobileJarvisNative	Connection 5: enabling TLS
default	13:31:26.016983-0500	MobileJarvisNative	Connection 5: starting, TC(0x0)
default	13:31:26.017038-0500	MobileJarvisNative	[C5 07D1DEA8-A162-43FD-A51B-BD3846C28C5C Hostname#671f949a:443 quic-connection, url hash: dd9a3794, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8F2F53B4-0B97-4B60-AC0D-9D9D73865712}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	13:31:26.017106-0500	MobileJarvisNative	[C5 Hostname#671f949a:443 initial parent-flow ((null))] event: path:start @0.000s
default	13:31:26.017267-0500	MobileJarvisNative	[C5 Hostname#671f949a:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 1A0E433F-4593-448B-8924-656FADD618C8
default	13:31:26.017400-0500	MobileJarvisNative	[C5 Hostname#671f949a:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	13:31:26.017426-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	13:31:26.017560-0500	MobileJarvisNative	[C5 Hostname#671f949a:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	13:31:26.017677-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 initial path ((null))] event: path:start @0.000s
default	13:31:26.018045-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 1A0E433F-4593-448B-8924-656FADD618C8
default	13:31:26.018136-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	13:31:26.018320-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 initial path ((null))] event: path:start @0.000s
default	13:31:26.018578-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: F6424E68-B421-4E80-8196-DADE4BA1F745
default	13:31:26.018686-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.000s
default	13:31:26.018794-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> setting up Connection 5
default	13:31:26.072393-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#3618ad02:443
default	13:31:26.072489-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#984720f0:443
default	13:31:26.072630-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.055s
default	13:31:26.072829-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 initial path ((null))] event: path:start @0.055s
default	13:31:26.073004-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.055s, uuid: 7D4852B6-96D5-4E07-B89C-2938CCA4BF95
default	13:31:26.073112-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.055s
default	13:31:26.073396-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.056s
default	13:31:26.073827-0500	MobileJarvisNative	quic_conn_initialize_inner [C5.1.1.1:2] [-f9b7a543f1795bdb] created QUIC connection (spin bit enabled)
default	13:31:26.074234-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.056s
default	13:31:26.075031-0500	MobileJarvisNative	quic_crypto_new_flow [C5.1.1.1:2] [-f9b7a543f1795bdb] TLS stream is: [C6]
default	13:31:26.075058-0500	MobileJarvisNative	[C6 6077B9CE-BD6F-4974-BFC3-8BB8A05E51ED IPv4#3618ad02:443 quic-connection, url hash: dd9a3794, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8F2F53B4-0B97-4B60-AC0D-9D9D73865712}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	13:31:26.075112-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	13:31:26.075165-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 7D4852B6-96D5-4E07-B89C-2938CCA4BF95
default	13:31:26.075270-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	13:31:26.075319-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state preparing
default	13:31:26.075452-0500	MobileJarvisNative	nw_flow_connected [C6 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:26.075541-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	13:31:26.076273-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C6:1][0x10d29cc00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	13:31:26.076482-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C6:1][0x10d29cc00] Client handshake started
default	13:31:26.076591-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS client enter_early_data
default	13:31:26.076668-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS client read_server_hello
default	13:31:26.092128-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#984720f0:443
default	13:31:26.092253-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.075s
default	13:31:26.104387-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	13:31:26.104604-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_server_hello
default	13:31:26.104803-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	13:31:26.104968-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_certificate_request
default	13:31:26.105448-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_server_certificate
default	13:31:26.105509-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	13:31:26.105747-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C6:1][0x10d29cc00] Performing external trust evaluation
default	13:31:26.105912-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C6:1][0x10d29cc00] Asyncing for external verify block
default	13:31:26.106039-0500	MobileJarvisNative	Connection 5: asked to evaluate TLS Trust
default	13:31:26.106182-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> auth completion disp=1 cred=0x0
default	13:31:26.106230-0500	MobileJarvisNative	(Trust 0x102c7e040) No pending evals, starting
default	13:31:26.106381-0500	MobileJarvisNative	[0x10bffd800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:26.106406-0500	MobileJarvisNative	(Trust 0x102c7e040) Completed async eval kickoff
default	13:31:26.108798-0500	MobileJarvisNative	(Trust 0x102c7e040) trustd returned 4
default	13:31:26.108903-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	13:31:26.108952-0500	MobileJarvisNative	(Trust 0x106e57480) No pending evals, starting
default	13:31:26.109049-0500	MobileJarvisNative	[0x10bffd900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:26.109097-0500	MobileJarvisNative	(Trust 0x106e57480) Completed async eval kickoff
default	13:31:26.109157-0500	MobileJarvisNative	[0x10bffd800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.111588-0500	MobileJarvisNative	(Trust 0x106e57480) trustd returned 4
default	13:31:26.111697-0500	MobileJarvisNative	Connection 5: TLS Trust result 0
default	13:31:26.111725-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C6:1][0x10d29cc00] Returning from external verify block with result: true
default	13:31:26.111907-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C6:1][0x10d29cc00] Certificate verification result: OK
default	13:31:26.112154-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client read_server_finished
default	13:31:26.112236-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	13:31:26.112291-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	13:31:26.112317-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client send_client_certificate
default	13:31:26.112343-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client complete_second_flight
default	13:31:26.112782-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS 1.3 client done
default	13:31:26.112838-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS client finish_client_handshake
default	13:31:26.112865-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x10d29cc00] Client handshake state: TLS client done
default	13:31:26.112956-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C6:1][0x10d29cc00] Client handshake done
default	13:31:26.113538-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x10d29cc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(38ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:26.113696-0500	MobileJarvisNative	nw_flow_connected [C6 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:26.113838-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.038s
default	13:31:26.114012-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state ready
default	13:31:26.114038-0500	MobileJarvisNative	[C6 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.038s
default	13:31:26.114088-0500	MobileJarvisNative	[0x10bffd900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.115140-0500	MobileJarvisNative	quic_pmtud_restart [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	13:31:26.115269-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] QUIC connection established in 39.427 ms, RTT 28.898 ms
default	13:31:26.115334-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	13:31:26.115555-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.096s
default	13:31:26.115828-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv4#3618ad02:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-389164758)
default	13:31:26.116285-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.096s
default	13:31:26.116689-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.096s
default	13:31:26.116862-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.096s
default	13:31:26.117094-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.096s
default	13:31:26.117199-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.096s
default	13:31:26.117269-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.096s
default	13:31:26.117302-0500	MobileJarvisNative	nw_flow_connected [C5 IPv4#3618ad02:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	13:31:26.117429-0500	MobileJarvisNative	[C5 IPv4#3618ad02:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.096s
default	13:31:26.117832-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state ready
default	13:31:26.117897-0500	MobileJarvisNative	[C5 IPv4#3618ad02:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.096s
default	13:31:26.117949-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C5] viability_changed_handler(true)
default	13:31:26.118557-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] path over en0 received event established
default	13:31:26.118820-0500	MobileJarvisNative	quic_migration_evaluate_primary [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] promoted path 0x102e78a80 over en0 to primary
default	13:31:26.118911-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C5.1.1.1:2] Calling notify with interface <private>
default	13:31:26.119167-0500	MobileJarvisNative	[C5.1.1.1 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.096s, uuid: 7D4852B6-96D5-4E07-B89C-2938CCA4BF95
default	13:31:26.119287-0500	MobileJarvisNative	[C5.1.1 Hostname#671f949a:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.096s, uuid: F6424E68-B421-4E80-8196-DADE4BA1F745
default	13:31:26.119359-0500	MobileJarvisNative	[C5.1 Hostname#671f949a:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.096s, uuid: 1A0E433F-4593-448B-8924-656FADD618C8
default	13:31:26.119395-0500	MobileJarvisNative	[C5 IPv4#3618ad02:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.096s, uuid: 1A0E433F-4593-448B-8924-656FADD618C8
default	13:31:26.119533-0500	MobileJarvisNative	Connection 5: connected successfully
default	13:31:26.119568-0500	MobileJarvisNative	Connection 5: TLS handshake complete
default	13:31:26.119740-0500	MobileJarvisNative	Connection 5: ready C(N) E(N)
default	13:31:26.120641-0500	MobileJarvisNative	[C5] event: client:connection_reused @0.097s
default	13:31:26.121051-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> now using Connection 5
default	13:31:26.122128-0500	MobileJarvisNative	Connection 5: received viability advisory(Y)
default	13:31:26.122165-0500	MobileJarvisNative	0x102e71518 ID=0 Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> sent request, body N 0
default	13:31:26.142471-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	13:31:26.142664-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	13:31:26.142734-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	13:31:26.149228-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x10d29cc00] Asyncing for session update block
default	13:31:26.149544-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x10d29cc00] Asyncing for session update block
default	13:31:26.149761-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x10d29cc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(38ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	13:31:26.149826-0500	MobileJarvisNative	nw_flow_connected [C6 IPv4#3618ad02:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	13:31:26.149964-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] creating inbound stream 3
default	13:31:26.150170-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] creating inbound stream 7
default	13:31:26.150928-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x10d29cc00] Returning from session update block
default	13:31:26.151320-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x10d29cc00] Returning from session update block
default	13:31:26.151482-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] creating inbound stream 11
default	13:31:26.151752-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-01646edc2dedbc517667a0dc1cedbf1105158f55] creating inbound stream 15
default	13:31:26.471981-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Stationary): InfraUptime:21955.8secs Channel: 44 Bandwidth: 80Mhz Rssi: -39 {-42 -45} Cca: 2 (S:0 O:0 I:2) Snr: 29 BcnPer: 0.0% (49, 51.6%) TxFrameCnt: 76 TxPer: 0.0% TxReTrans: 0 TxRetryRatio: 0.0% RxFrameCnt: 383 RxRetryFrames: 2 RxRetryRatio: 0.5% TxRate: 1200950 RxRate: 1200950 FBRate: 720580 TxFwFrms: 8 TxFwFail: 0 Noise: -88 {-88 -90 -2} time: 49.7secs fgApp: com.hightowerai.MobileJarvisNative V: T
default	13:31:26.555325-0500	MobileJarvisNative	0x102e71518 ID=0 Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> received response, status 200 content U
default	13:31:26.555922-0500	MobileJarvisNative	[0x10bffd800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	13:31:26.561367-0500	MobileJarvisNative	[0x10bffd800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.577131-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> response ended
default	13:31:26.577388-0500	MobileJarvisNative	[C5] event: client:connection_idle @0.560s
default	13:31:26.577722-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> done using Connection 5
default	13:31:26.578005-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> summary for task success {transaction_duration_ms=561, response_status=200, connection=5, protocol="h3", domain_lookup_duration_ms=55, connect_duration_ms=40, secure_connection_duration_ms=39, private_relay=false, request_start_ms=98, request_duration_ms=0, response_start_ms=539, response_duration_ms=22, request_bytes=1272, request_throughput_kbps=2076, response_bytes=16377, response_throughput_kbps=714, cache_hit=true}
default	13:31:26.578046-0500	MobileJarvisNative	Task <3D0C4A99-A351-4725-9FE5-4D570045DFD6>.<1> finished successfully
default	13:31:26.583034-0500	MobileJarvisNative	[0x10d298dc0] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	13:31:26.602943-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	13:31:26.602967-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	13:31:26.603049-0500	MobileJarvisNative	[0x10bffcc00] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	13:31:26.615763-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	13:31:26.616343-0500	MobileJarvisNative	[0x10d298500] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	13:31:26.617651-0500	MobileJarvisNative	[0x10d298500] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.617686-0500	MobileJarvisNative	<private>
default	13:31:26.617747-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	13:31:26.620810-0500	MobileJarvisNative	[0x10d298500] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	13:31:26.632414-0500	MobileJarvisNative	Executing query <HKSampleQuery ED959A QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.633460-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.634279-0500	MobileJarvisNative	Stopping query <HKSampleQuery ED959A QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.634313-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.639154-0500	MobileJarvisNative	Executing query <HKSampleQuery 4255A9 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.639580-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.640224-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4255A9 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.640258-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.641459-0500	MobileJarvisNative	Executing query <HKSampleQuery 2CDBDA QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.641897-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.642441-0500	MobileJarvisNative	Stopping query <HKSampleQuery 2CDBDA QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.642472-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.646349-0500	MobileJarvisNative	Executing query <HKSampleQuery 999AD7 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.647106-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.648334-0500	MobileJarvisNative	Stopping query <HKSampleQuery 999AD7 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.648382-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.649074-0500	MobileJarvisNative	Executing query <HKSampleQuery D8AB66 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.649276-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.649621-0500	MobileJarvisNative	Stopping query <HKSampleQuery D8AB66 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.649646-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.652996-0500	MobileJarvisNative	Executing query <HKSampleQuery 50DF3A QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.653322-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.653779-0500	MobileJarvisNative	Stopping query <HKSampleQuery 50DF3A QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.653811-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.654711-0500	MobileJarvisNative	Executing query <HKSampleQuery A0D7ED QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.655040-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.655623-0500	MobileJarvisNative	Stopping query <HKSampleQuery A0D7ED QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.655666-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.658968-0500	MobileJarvisNative	Executing query <HKSampleQuery 55F7CE QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.659321-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.659790-0500	MobileJarvisNative	Stopping query <HKSampleQuery 55F7CE QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.659826-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.660651-0500	MobileJarvisNative	Executing query <HKSampleQuery 98F1C9 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.660983-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.661417-0500	MobileJarvisNative	Stopping query <HKSampleQuery 98F1C9 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.661442-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.665230-0500	MobileJarvisNative	Executing query <HKSampleQuery 0219D4 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.665852-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.666285-0500	MobileJarvisNative	Stopping query <HKSampleQuery 0219D4 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.666313-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.666340-0500	MobileJarvisNative	<private>Connection to "<anonymous>" invalidated
default	13:31:26.666639-0500	MobileJarvisNative	Executing query <HKSampleQuery 7E72A2 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.666949-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.667376-0500	MobileJarvisNative	Stopping query <HKSampleQuery 7E72A2 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.667406-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.670059-0500	MobileJarvisNative	Executing query <HKSampleQuery 6AEE6E QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.670353-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.670805-0500	MobileJarvisNative	Stopping query <HKSampleQuery 6AEE6E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.670869-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.671488-0500	MobileJarvisNative	Executing query <HKSampleQuery E4E26A QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	13:31:26.671736-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.672243-0500	MobileJarvisNative	Stopping query <HKSampleQuery E4E26A QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.672269-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.674896-0500	MobileJarvisNative	Executing query <HKSampleQuery BB612B QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	13:31:26.675158-0500	MobileJarvisNative	[0x10d298f00] activating connection: mach=false listener=false peer=false name=(anonymous)
default	13:31:26.675540-0500	MobileJarvisNative	Stopping query <HKSampleQuery BB612B QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	13:31:26.675575-0500	MobileJarvisNative	[0x10d298f00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	13:31:26.676006-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:26.676539-0500	MobileJarvisNative	[C5] event: client:connection_reused @0.659s
default	13:31:26.676567-0500	runningboardd	Invalidating assertion 33-6613-2043859 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:26.676681-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> now using Connection 5
default	13:31:26.677514-0500	MobileJarvisNative	0x102e71898 ID=4 Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> sent request, body S 109
default	13:31:27.271224-0500	MobileJarvisNative	0x102e71898 ID=4 Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> received response, status 200 content K
default	13:31:27.272104-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> response ended
default	13:31:27.272684-0500	MobileJarvisNative	[C5] event: client:connection_idle @1.252s
default	13:31:27.273010-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> done using Connection 5
default	13:31:27.273334-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> summary for task success {transaction_duration_ms=594, response_status=200, connection=5, reused=1, reused_after_ms=99, request_start_ms=0, request_duration_ms=0, response_start_ms=590, response_duration_ms=3, request_bytes=924, request_throughput_kbps=993, response_bytes=889, response_throughput_kbps=234, cache_hit=true}
default	13:31:27.273475-0500	MobileJarvisNative	Task <AD850828-DF3B-452C-8A55-04257E2401B1>.<2> finished successfully
default	13:31:27.285958-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-6613-2043860 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:27.286228-0500	runningboardd	Assertion 33-6613-2043860 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:27.293685-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	13:31:27.293992-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	13:31:27.294461-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	13:31:27.294497-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	13:31:27.294637-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	13:31:27.294742-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	13:31:27.294792-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	13:31:27.294902-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	13:31:27.294975-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	13:31:27.295047-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	13:31:27.295099-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	13:31:27.295146-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	13:31:27.298661-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	13:31:27.300034-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001006b3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x000000010079855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010034b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010034e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	13:31:27.300554-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	13:31:27.300869-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	13:31:27.302011-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	13:31:27.302258-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	13:31:27.302521-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	13:31:27.302580-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	13:31:27.302630-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	13:31:27.302680-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	13:31:27.302705-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	13:31:27.302753-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	13:31:27.302779-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	13:31:27.302803-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	13:31:27.302828-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	13:31:27.302855-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	13:31:27.342968-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	13:31:27.343534-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001006b3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x000000010079855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010034b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010034e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	13:31:27.343826-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	13:31:27.343950-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	13:31:27.345935-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	13:31:27.350025-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.350392-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.350819-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.351969-0500	MobileJarvisNative	[C5] event: client:connection_reused @1.335s
default	13:31:27.352348-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> now using Connection 5
default	13:31:27.353127-0500	MobileJarvisNative	0x10d38f118 ID=8 Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> sent request, body N 0
default	13:31:27.356695-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> now using Connection 5
default	13:31:27.357168-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> now using Connection 5
default	13:31:27.357553-0500	MobileJarvisNative	0x10d38f2d8 ID=12 Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> sent request, body N 0
default	13:31:27.357578-0500	MobileJarvisNative	0x10d38f658 ID=16 Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> sent request, body N 0
default	13:31:27.511785-0500	MobileJarvisNative	0x10d38f118 ID=8 Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> received response, status 200 content U
default	13:31:27.512720-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> response ended
default	13:31:27.512963-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> done using Connection 5
default	13:31:27.513113-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> summary for task success {transaction_duration_ms=162, response_status=200, connection=5, reused=1, reused_after_ms=82, request_start_ms=1, request_duration_ms=0, response_start_ms=161, response_duration_ms=1, request_bytes=1240, request_throughput_kbps=1755, response_bytes=4414, response_throughput_kbps=3513, cache_hit=true}
default	13:31:27.513149-0500	MobileJarvisNative	Task <6747083E-A463-4216-89EC-7DF3400A2086>.<3> finished successfully
default	13:31:27.566781-0500	MobileJarvisNative	0x10d38f658 ID=16 Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> received response, status 200 content U
default	13:31:27.566945-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> response ended
default	13:31:27.567429-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> done using Connection 5
default	13:31:27.567637-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> summary for task success {transaction_duration_ms=213, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=4, request_duration_ms=0, response_start_ms=212, response_duration_ms=0, request_bytes=1204, request_throughput_kbps=3211, response_bytes=1239, response_throughput_kbps=1497, cache_hit=true}
default	13:31:27.567672-0500	MobileJarvisNative	Task <56213D63-C9A2-458A-84D2-65B574270E92>.<5> finished successfully
default	13:31:27.573616-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.575012-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> now using Connection 5
default	13:31:27.575498-0500	MobileJarvisNative	0x10f054a98 ID=20 Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> sent request, body N 0
default	13:31:27.674446-0500	MobileJarvisNative	0x10f054a98 ID=20 Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> received response, status 200 content U
default	13:31:27.675036-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> response ended
default	13:31:27.675635-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> done using Connection 5
default	13:31:27.675971-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> summary for task success {transaction_duration_ms=101, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=100, response_duration_ms=1, request_bytes=1204, request_throughput_kbps=2595, response_bytes=1238, response_throughput_kbps=838, cache_hit=true}
default	13:31:27.676029-0500	MobileJarvisNative	Task <EDB6CAB3-EF6A-4459-8325-24D43AD2409E>.<6> finished successfully
default	13:31:27.689318-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.691060-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> now using Connection 5
default	13:31:27.692228-0500	MobileJarvisNative	0x10f054e18 ID=24 Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> sent request, body S 272
default	13:31:27.719228-0500	MobileJarvisNative	0x10d38f2d8 ID=12 Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> received response, status 200 content U
default	13:31:27.756969-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> response ended
default	13:31:27.757698-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> done using Connection 5
default	13:31:27.758115-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> summary for task success {transaction_duration_ms=404, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=4, request_duration_ms=0, response_start_ms=365, response_duration_ms=39, request_bytes=1367, request_throughput_kbps=1724, response_bytes=61997, response_throughput_kbps=1534, cache_hit=true}
default	13:31:27.758229-0500	MobileJarvisNative	Task <ADEEBFC0-E19B-4C83-8922-DF06A04393CD>.<4> finished successfully
default	13:31:27.825347-0500	MobileJarvisNative	0x10f054e18 ID=24 Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> received response, status 200 content U
default	13:31:27.826069-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> response ended
default	13:31:27.826353-0500	MobileJarvisNative	[C5] event: client:connection_idle @1.809s
default	13:31:27.826524-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> done using Connection 5
default	13:31:27.826783-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> summary for task success {transaction_duration_ms=136, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=1, response_start_ms=135, response_duration_ms=1, request_bytes=1239, request_throughput_kbps=1050, response_bytes=1206, response_throughput_kbps=837, cache_hit=true}
default	13:31:27.826822-0500	MobileJarvisNative	Task <DF808164-333A-4476-A758-0BF14F9D9A46>.<7> finished successfully
default	13:31:27.837169-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	13:31:27.837454-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	13:31:27.837604-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	13:31:27.837685-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	13:31:27.837712-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	13:31:27.837749-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	13:31:27.837793-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	13:31:27.837877-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	13:31:27.837944-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	13:31:27.837975-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	13:31:27.838000-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	13:31:27.838046-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	13:31:27.838479-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	13:31:27.839725-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001006b3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x000000010079855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010034b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010034e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	13:31:27.840240-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	13:31:27.840476-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	13:31:27.853727-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:27.855756-0500	MobileJarvisNative	[C5] event: client:connection_reused @1.838s
default	13:31:27.855978-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> now using Connection 5
default	13:31:27.856616-0500	MobileJarvisNative	0x10f055198 ID=28 Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> sent request, body N 0
default	13:31:28.121362-0500	MobileJarvisNative	0x10f055198 ID=28 Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> received response, status 200 content U
default	13:31:28.122421-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> response ended
default	13:31:28.122975-0500	MobileJarvisNative	[C5] event: client:connection_idle @2.105s
default	13:31:28.123322-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> done using Connection 5
default	13:31:28.123503-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> summary for task success {transaction_duration_ms=268, response_status=200, connection=5, reused=1, reused_after_ms=29, request_start_ms=1, request_duration_ms=0, response_start_ms=266, response_duration_ms=1, request_bytes=1143, request_throughput_kbps=1624, response_bytes=958, response_throughput_kbps=471, cache_hit=true}
default	13:31:28.123558-0500	MobileJarvisNative	Task <D4D1CFAE-7ECF-4D7C-86D3-71BB2DAED389>.<8> finished successfully
default	13:31:28.146018-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:28.148183-0500	MobileJarvisNative	[C5] event: client:connection_reused @2.124s
default	13:31:28.148725-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> now using Connection 5
default	13:31:28.149403-0500	MobileJarvisNative	0x10f054a98 ID=32 Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> sent request, body N 0
default	13:31:28.261677-0500	MobileJarvisNative	0x10f054a98 ID=32 Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> received response, status 200 content U
default	13:31:28.262398-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> response ended
default	13:31:28.262958-0500	MobileJarvisNative	[C5] event: client:connection_idle @2.245s
default	13:31:28.263509-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> done using Connection 5
default	13:31:28.263606-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> summary for task success {transaction_duration_ms=123, response_status=200, connection=5, reused=1, reused_after_ms=18, request_start_ms=1, request_duration_ms=0, response_start_ms=121, response_duration_ms=1, request_bytes=1188, request_throughput_kbps=1713, response_bytes=737, response_throughput_kbps=456, cache_hit=true}
default	13:31:28.264957-0500	MobileJarvisNative	Task <820A99AF-5CD3-4C2B-9DEF-6E4B5F7C135C>.<9> finished successfully
default	13:31:28.290544-0500	runningboardd	Invalidating assertion 33-6613-2043860 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:28.291587-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:28.293277-0500	MobileJarvisNative	[C5] event: client:connection_reused @2.276s
default	13:31:28.293498-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> now using Connection 5
default	13:31:28.294323-0500	MobileJarvisNative	0x10f055198 ID=36 Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> sent request, body N 0
default	13:31:28.453058-0500	MobileJarvisNative	0x10f055198 ID=36 Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> received response, status 200 content U
default	13:31:28.453644-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> response ended
default	13:31:28.453872-0500	MobileJarvisNative	[C5] event: client:connection_idle @2.411s
default	13:31:28.454190-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> done using Connection 5
default	13:31:28.454303-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> summary for task success {transaction_duration_ms=136, response_status=200, connection=5, reused=1, reused_after_ms=30, request_start_ms=1, request_duration_ms=0, response_start_ms=135, response_duration_ms=1, request_bytes=1247, request_throughput_kbps=1665, response_bytes=750, response_throughput_kbps=565, cache_hit=true}
default	13:31:28.454336-0500	MobileJarvisNative	Task <7895A542-FE17-4645-9557-0C7733343CFF>.<10> finished successfully
default	13:31:28.468000-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-6613-2043861 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:28.473872-0500	runningboardd	Assertion 33-6613-2043861 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:28.874517-0500	MobileJarvisNative	TX focusApplication (peekAppEvent) stealKB:Y scene:com.hightowerai.MobileJarvisNative-default
default	13:31:28.877145-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 1; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:28.878365-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(6613) focusApplicationWithPID:6613 stealKeyboard:Y
    context:<contextID:3824344224 sceneID:com.hightowerai.MobileJarvisNative-default>
default	13:31:28.880189-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to windows: 1
default	13:31:28.880237-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to window: <UIWindow: 0x101e551c0>; contextId: 0xE3F2DCA0
default	13:31:28.887428-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 0; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:28.903903-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 1; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:28.903958-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to windows: 1
default	13:31:28.904000-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to window: <UIWindow: 0x101e551c0>; contextId: 0xE3F2DCA0
default	13:31:28.921777-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 0; ignoreInteractionEvents: 0, systemGestureStateChange: 1
default	13:31:28.956662-0500	MobileJarvisNative	Note: no default visual style class registered as fallback for stylable class UIActivityIndicatorView
default	13:31:28.956691-0500	MobileJarvisNative	Note: no default visual style class registered as fallback for stylable class UIActivityIndicatorView
default	13:31:28.960262-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	13:31:28.960309-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	13:31:28.960473-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	13:31:28.960499-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	13:31:28.960524-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	13:31:28.960550-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	13:31:28.960573-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	13:31:28.960627-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	13:31:28.960655-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	13:31:28.960680-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	13:31:28.960705-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	13:31:28.960735-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
default	13:31:28.960942-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:28.961817-0500	MobileJarvisNative	[C5] event: client:connection_reused @2.944s
default	13:31:28.961966-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> now using Connection 5
default	13:31:28.962619-0500	MobileJarvisNative	0x10f0548d8 ID=40 Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> sent request, body S 67
error	13:31:28.972292-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	13:31:28.972884-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001006b3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x000000010079855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010034b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010034e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	13:31:28.973191-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	13:31:28.973247-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	13:31:28.983269-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:28.983803-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> now using Connection 5
default	13:31:28.984165-0500	MobileJarvisNative	0x10f055518 ID=44 Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> sent request, body N 0
default	13:31:28.984782-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:28.985223-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> now using Connection 5
default	13:31:28.985759-0500	MobileJarvisNative	0x10f054e18 ID=48 Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> sent request, body N 0
default	13:31:29.083689-0500	MobileJarvisNative	0x10f055518 ID=44 Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> received response, status 200 content U
default	13:31:29.084006-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> response ended
default	13:31:29.084312-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> done using Connection 5
default	13:31:29.084536-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> summary for task success {transaction_duration_ms=100, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=100, response_duration_ms=0, request_bytes=1204, request_throughput_kbps=4739, response_bytes=1237, response_throughput_kbps=1602, cache_hit=true}
default	13:31:29.084573-0500	MobileJarvisNative	Task <00A4A46C-EFF8-4C80-9A0E-16ECE3AC6E4D>.<12> finished successfully
default	13:31:29.095885-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.096692-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> now using Connection 5
default	13:31:29.097150-0500	MobileJarvisNative	0x10f055198 ID=52 Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> sent request, body N 0
default	13:31:29.116744-0500	MobileJarvisNative	0x10f054e18 ID=48 Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> received response, status 200 content U
default	13:31:29.117082-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> response ended
default	13:31:29.117316-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> done using Connection 5
default	13:31:29.117398-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> summary for task success {transaction_duration_ms=132, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=131, response_duration_ms=0, request_bytes=1240, request_throughput_kbps=5429, response_bytes=4412, response_throughput_kbps=7920, cache_hit=true}
default	13:31:29.117460-0500	MobileJarvisNative	Task <E2EC6B76-26DC-4708-B99D-B54B60277C58>.<13> finished successfully
default	13:31:29.226998-0500	MobileJarvisNative	0x10f0548d8 ID=40 Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> received response, status 200 content U
default	13:31:29.227899-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> response ended
default	13:31:29.229202-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> done using Connection 5
default	13:31:29.229345-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> summary for task success {transaction_duration_ms=267, response_status=200, connection=5, reused=1, reused_after_ms=533, request_start_ms=0, request_duration_ms=0, response_start_ms=265, response_duration_ms=1, request_bytes=1203, request_throughput_kbps=1678, response_bytes=650, response_throughput_kbps=345, cache_hit=true}
default	13:31:29.229423-0500	MobileJarvisNative	Task <86AB96DF-9ABB-4399-814C-F0BD0F9065DA>.<11> finished successfully
default	13:31:29.257366-0500	MobileJarvisNative	0x10f055198 ID=52 Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> received response, status 200 content U
default	13:31:29.257925-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> response ended
default	13:31:29.258549-0500	MobileJarvisNative	[C5] event: client:connection_idle @3.241s
default	13:31:29.258950-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> done using Connection 5
default	13:31:29.259175-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> summary for task success {transaction_duration_ms=162, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=160, response_duration_ms=1, request_bytes=1204, request_throughput_kbps=3053, response_bytes=1239, response_throughput_kbps=791, cache_hit=true}
default	13:31:29.259233-0500	MobileJarvisNative	Task <6568DAEC-753A-4223-BBBB-A9F040D71B1D>.<14> finished successfully
default	13:31:29.274769-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.276228-0500	MobileJarvisNative	[C5] event: client:connection_reused @3.259s
default	13:31:29.276468-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> now using Connection 5
default	13:31:29.277472-0500	MobileJarvisNative	0x10f054e18 ID=56 Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> sent request, body S 272
default	13:31:29.384068-0500	MobileJarvisNative	0x10f054e18 ID=56 Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> received response, status 200 content U
default	13:31:29.386090-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> response ended
default	13:31:29.387037-0500	MobileJarvisNative	[C5] event: client:connection_idle @3.368s
default	13:31:29.388333-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> done using Connection 5
default	13:31:29.388783-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> summary for task success {transaction_duration_ms=111, response_status=200, connection=5, reused=1, reused_after_ms=17, request_start_ms=1, request_duration_ms=1, response_start_ms=108, response_duration_ms=3, request_bytes=1239, request_throughput_kbps=1173, response_bytes=1208, response_throughput_kbps=380, cache_hit=true}
default	13:31:29.388881-0500	MobileJarvisNative	Task <E0072A5D-254F-467D-BD89-CA9615A54812>.<15> finished successfully
default	13:31:29.407109-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	13:31:29.407480-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	13:31:29.407757-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	13:31:29.407819-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	13:31:29.407880-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	13:31:29.407938-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	13:31:29.408008-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	13:31:29.408138-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	13:31:29.408209-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	13:31:29.408302-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	13:31:29.408462-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	13:31:29.408545-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	13:31:29.408926-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	13:31:29.411581-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x00000001006b3c38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x000000010079855c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x000000010034b700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x000000010034e194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	13:31:29.412168-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	13:31:29.412779-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	13:31:29.416348-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.417915-0500	MobileJarvisNative	[C5] event: client:connection_reused @3.400s
default	13:31:29.418215-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> now using Connection 5
default	13:31:29.419006-0500	MobileJarvisNative	0x10f055198 ID=60 Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> sent request, body N 0
error	13:31:29.473371-0500	SpringBoard	[<_UIKeyboardArbiterClientHandle: 0x869260620; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] <<UIKBArbiterClientFocusContext: 0x86be5b800; contextID = e3f2dca0; sceneIdentity = com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default >>; hosting PIDs {(
)}; level 0.000000; active NO [wants NO]; suppression 0; iav 0.000000; on screen NO; isAcquiringFocus: YES>] Acquiring focus timer elapsed, clearing acquiring focus state
default	13:31:29.508517-0500	runningboardd	Invalidating assertion 33-6613-2043861 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:29.533397-0500	MobileJarvisNative	0x10f055198 ID=60 Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> received response, status 200 content U
default	13:31:29.535152-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> response ended
default	13:31:29.536597-0500	MobileJarvisNative	[C5] event: client:connection_idle @3.517s
default	13:31:29.537163-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> done using Connection 5
default	13:31:29.538008-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> summary for task success {transaction_duration_ms=118, response_status=200, connection=5, reused=1, reused_after_ms=31, request_start_ms=1, request_duration_ms=0, response_start_ms=115, response_duration_ms=2, request_bytes=1204, request_throughput_kbps=1499, response_bytes=1240, response_throughput_kbps=428, cache_hit=true}
default	13:31:29.538307-0500	MobileJarvisNative	Task <47E6544B-2A17-4E50-A47D-7DF221D4EECD>.<16> finished successfully
default	13:31:29.540803-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-6613-2043862 target:6613 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	13:31:29.541331-0500	runningboardd	Assertion 33-6613-2043862 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) will be created as inactive as start-time-defining assertions exist
default	13:31:29.583919-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.585258-0500	MobileJarvisNative	[C5] event: client:connection_reused @3.568s
default	13:31:29.585463-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> now using Connection 5
default	13:31:29.585974-0500	MobileJarvisNative	0x10f054e18 ID=64 Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> sent request, body N 0
default	13:31:29.638386-0500	MobileJarvisNative	TX focusApplication (peekAppEvent) stealKB:Y scene:com.hightowerai.MobileJarvisNative-default
default	13:31:29.638762-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 1; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:29.638847-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to windows: 1
default	13:31:29.638920-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to window: <UIWindow: 0x101e551c0>; contextId: 0xE3F2DCA0
default	13:31:29.639173-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 0; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:29.639333-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(6613) focusApplicationWithPID:6613 stealKeyboard:Y
    context:<contextID:3824344224 sceneID:com.hightowerai.MobileJarvisNative-default>
default	13:31:29.686203-0500	MobileJarvisNative	0x10f054e18 ID=64 Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> received response, status 200 content U
default	13:31:29.686773-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> response ended
default	13:31:29.687298-0500	MobileJarvisNative	[C5] event: client:connection_idle @3.670s
default	13:31:29.687761-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> done using Connection 5
default	13:31:29.687899-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> summary for task success {transaction_duration_ms=103, response_status=200, connection=5, reused=1, reused_after_ms=50, request_start_ms=1, request_duration_ms=0, response_start_ms=101, response_duration_ms=1, request_bytes=1191, request_throughput_kbps=2219, response_bytes=1463, response_throughput_kbps=1033, cache_hit=true}
default	13:31:29.687941-0500	MobileJarvisNative	Task <DDC5AFE6-54C9-4CD6-BA33-740A3F116060>.<17> finished successfully
default	13:31:29.707333-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 1; ignoreInteractionEvents: 0, systemGestureStateChange: 0
default	13:31:29.707365-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to windows: 1
default	13:31:29.707391-0500	MobileJarvisNative	Sending UIEvent type: 0; subtype: 0; to window: <UIWindow: 0x101e551c0>; contextId: 0xE3F2DCA0
default	13:31:29.721280-0500	MobileJarvisNative	Evaluating dispatch of UIEvent: 0x10f05d880; type: 0; subtype: 0; backing type: 11; shouldSend: 0; ignoreInteractionEvents: 0, systemGestureStateChange: 1
default	13:31:29.739618-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.740493-0500	MobileJarvisNative	[C5] event: client:connection_reused @3.723s
default	13:31:29.740607-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> now using Connection 5
default	13:31:29.740955-0500	MobileJarvisNative	0x10f3a81d8 ID=68 Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> sent request, body N 0
default	13:31:29.840559-0500	MobileJarvisNative	0x10f3a81d8 ID=68 Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> received response, status 200 content U
default	13:31:29.841530-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> response ended
default	13:31:29.841828-0500	MobileJarvisNative	[C5] event: client:connection_idle @3.824s
default	13:31:29.842037-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> done using Connection 5
default	13:31:29.842180-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> summary for task success {transaction_duration_ms=102, response_status=200, connection=5, reused=1, reused_after_ms=53, request_start_ms=0, request_duration_ms=0, response_start_ms=100, response_duration_ms=1, request_bytes=1143, request_throughput_kbps=2922, response_bytes=958, response_throughput_kbps=613, cache_hit=true}
default	13:31:29.842221-0500	MobileJarvisNative	Task <4A68DC00-F67B-4E59-BDF6-E2BBDEA2679A>.<18> finished successfully
default	13:31:29.888585-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.890542-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.891077-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.891659-0500	MobileJarvisNative	[C5] event: client:connection_reused @3.874s
default	13:31:29.891686-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	13:31:29.892043-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> now using Connection 5
default	13:31:29.892826-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> now using Connection 5
default	13:31:29.893311-0500	MobileJarvisNative	0x110c83658 ID=72 Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> sent request, body N 0
default	13:31:29.893364-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> now using Connection 5
default	13:31:29.893929-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> now using Connection 5
default	13:31:29.894280-0500	MobileJarvisNative	0x110c83b98 ID=76 Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> sent request, body N 0
default	13:31:29.894332-0500	MobileJarvisNative	0x110c83818 ID=80 Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> sent request, body N 0
default	13:31:29.894359-0500	MobileJarvisNative	0x110c839d8 ID=84 Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> sent request, body N 0
default	13:31:30.028301-0500	MobileJarvisNative	0x110c83818 ID=80 Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> received response, status 200 content U
default	13:31:30.029475-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> response ended
default	13:31:30.029973-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> done using Connection 5
default	13:31:30.030184-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> summary for task success {transaction_duration_ms=137, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=135, response_duration_ms=1, request_bytes=1225, request_throughput_kbps=1846, response_bytes=4836, response_throughput_kbps=2893, cache_hit=true}
default	13:31:30.030241-0500	MobileJarvisNative	Task <108644CF-67A5-4977-B058-62C81487FC9A>.<21> finished successfully
default	13:31:30.030848-0500	MobileJarvisNative	0x110c83658 ID=72 Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> received response, status 200 content U
default	13:31:30.032156-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> response ended
default	13:31:30.032800-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> done using Connection 5
default	13:31:30.033034-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> summary for task success {transaction_duration_ms=143, response_status=200, connection=5, reused=1, reused_after_ms=49, request_start_ms=2, request_duration_ms=1, response_start_ms=141, response_duration_ms=1, request_bytes=1225, request_throughput_kbps=806, response_bytes=4834, response_throughput_kbps=2728, cache_hit=true}
default	13:31:30.033087-0500	MobileJarvisNative	Task <90588784-4DA4-452D-8922-54E8D393D7FC>.<19> finished successfully
default	13:31:30.069452-0500	MobileJarvisNative	0x110c83b98 ID=76 Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> received response, status 200 content U
default	13:31:30.069950-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> response ended
default	13:31:30.070312-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> done using Connection 5
default	13:31:30.070425-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> summary for task success {transaction_duration_ms=179, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=1, response_start_ms=178, response_duration_ms=0, request_bytes=1225, request_throughput_kbps=894, response_bytes=4834, response_throughput_kbps=5572, cache_hit=true}
default	13:31:30.070461-0500	MobileJarvisNative	Task <3725984C-CD78-4570-9080-28C3A11C0B5C>.<20> finished successfully
default	13:31:30.142776-0500	MobileJarvisNative	0x110c839d8 ID=84 Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> received response, status 200 content U
default	13:31:30.143064-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> response ended
default	13:31:30.143408-0500	MobileJarvisNative	[C5] event: client:connection_idle @4.126s
default	13:31:30.143541-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> done using Connection 5
default	13:31:30.143651-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> summary for task success {transaction_duration_ms=250, response_status=200, connection=5, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=250, response_duration_ms=0, request_bytes=1225, request_throughput_kbps=4303, response_bytes=4835, response_throughput_kbps=12013, cache_hit=true}
default	13:31:30.143681-0500	MobileJarvisNative	Task <149B0F34-6103-4431-81FF-D2AC5174CB39>.<22> finished successfully
default	13:31:30.565460-0500	runningboardd	Invalidating assertion 33-6613-2043862 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:6613]
default	13:31:31.478907-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Stationary): InfraUptime:21960.8secs Channel: 44 Bandwidth: 80Mhz Rssi: -39 {-41 -45} Cca: 2 (S:0 O:0 I:2) Snr: 28 BcnPer: 4.2% (48, 51.6%) TxFrameCnt: 88 TxPer: 0.0% TxReTrans: 0 TxRetryRatio: 0.0% RxFrameCnt: 98 RxRetryFrames: 3 RxRetryRatio: 3.1% TxRate: 1200950 RxRate: 1200950 FBRate: 720580 TxFwFrms: 6 TxFwFail: 0 Noise: -88 {-88 -90 -2} time: 54.7secs fgApp: com.hightowerai.MobileJarvisNative V: T
