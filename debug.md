default	20:42:13.335918-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.93488e+06 touches: {(
    <UITouch: 0x865d8af40> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866bfbd20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x86bc42800; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869f0ab20; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; labelAccessoryType: recently updated; isTouchDownInIcon: YES>; location in window: {140, 583.33332824707031}; previous location in window: {140, 583.33332824707031}; location in view: {20, 26.333328247070312}; previous location in view: {20, 26.333328247070312}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x869f62440; baseClass = UITapGestureRecognizer; state = Possible; view =
default	20:42:13.483861-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	20:42:13.488555-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	20:42:13.496189-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	20:42:13.496239-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	20:42:13.496423-0500	SpringBoard	Created <FBWorkspace: 0x869f08dc0; <FBApplicationProcess: 0x868f40480; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	20:42:13.497006-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	20:42:13.498156-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-2064340 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	20:42:13.498244-0500	runningboardd	Assertion 33-34-2064340 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	20:42:13.499545-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	20:42:13.502743-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	20:42:13.502774-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	20:42:13.511876-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.005007 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	20:42:13.511996-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde96d540>)
default	20:42:13.512547-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbde2ff720> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbde3e18f0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbde3e0150> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbde3e0b70> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbde3e09f0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbde2fcfc0> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbde3e25e0> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbde2fdce0> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbde3e3f30> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/8B2F786A-1135-41C9-AFE6-448D3AA775D4/tmp" }
		"HOME" => <string: 0xbde3e1e90> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/8B2F786A-1135-41C9-AFE6-448D3AA775D4" }
		"CFFIXED_USER_HOME" => <string: 0xbde3e3990> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/8B2F786A-1135-41C9-AFE6-448D3AA775D4" }
	}
	"_AdditionalProperties" => <dictionary: 0xbde2ff660> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbde2ff0c0> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbde2fe700> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbde3e0cc0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbde3e0060> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbde3e0a50> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[775a][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbde3e0de0> { count = 1, capacity = 8, contents =
		0: <string: 0xbde3e31e0> { length = 113, contents = "/var/containers/Bundle/Application/6BC7CCF7-2CEA-4E11-A8B3-D0E927976090/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbde3e2880> { length = 113, contents = "/var/containers/Bundle/Application/6BC7CCF7-2CEA-4E11-A8B3-D0E927976090/MobileJarvisNative.app/MobileJarvisNative" }
}
default	20:42:13.515125-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	20:42:13.515259-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	20:42:13.517138-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x865d88700; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	20:42:13.524099-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86c1f7300; type: MainTransition; transitionID: 464398E9-143C-4A32-83FE-B3F0F7847D75; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	20:42:13.524435-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86ce2ebb0> {
    <SBSwitcherModifierEventResponse: 0x86ce2fe70> {
	    <SBTimerEventSwitcherEventResponse: 0x86ce2e490; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86ce2d710>;
	};
    <SBSwitcherModifierEventResponse: 0x86ce2d3b0> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86d3a4440; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86ce2c720; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86d3a6640; visible: YES; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x86c234c80; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	20:42:13.524673-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d4f200; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x854caa060; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 8:42:13 PM CDT;}
default	20:42:13.525979-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d4ed80 10-08-2025 20:42:13, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	20:42:13.526315-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	20:42:13.537477-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d30a880; type: MainTransition; transitionID: 464398E9-143C-4A32-83FE-B3F0F7847D75; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	20:42:13.545427-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x867e4a0c0; type: SceneReady; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86921db20; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868144b70; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	20:42:13.546546-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	20:42:13.546746-0500	SpringBoard	Did not create a new process: A pending process for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> already exists.
default	20:42:13.564498-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	20:42:13.578386-0500	kernel	/private/var/containers/Bundle/Application/6BC7CCF7-2CEA-4E11-A8B3-D0E927976090/MobileJarvisNative.app/MobileJarvisNative[9529] ==> container
default	20:42:13.579641-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] Memory Limits: active 2098 inactive 2098
 <private>
default	20:42:13.579685-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] This process will be managed.
default	20:42:13.579714-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
error	20:42:13.581347-0500	kernel	Sandbox: MobileJarvisNative(9529) deny(1) sysctl-read kern.bootargs
default	20:42:13.581839-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.581938-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-2064341 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	20:42:13.582289-0500	runningboardd	Assertion 33-33-2064341 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as active
default	20:42:13.583775-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	20:42:13.584458-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] reported to RB as running
default	20:42:13.584527-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] Set jetsam priority to 100 [0] flag[1]
default	20:42:13.584690-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] Resuming task.
default	20:42:13.584775-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] Set darwin role to: UserInteractiveFocal
default	20:42:13.586863-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	20:42:13.587064-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Bootstrap success!
default	20:42:13.587142-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] set Memory Limits to Soft Active (2098)
default	20:42:13.587194-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] Set Carplay mode to: 0
default	20:42:13.587549-0500	SpringBoard	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.587580-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Setting process task state to: Running
default	20:42:13.587605-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Setting process visibility to: Foreground
default	20:42:13.587630-0500	SpringBoard	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.587796-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] visiblity is yes
default	20:42:13.587893-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Registering event dispatcher after bootstrap
default	20:42:13.588010-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Initial launch assertion state: ForegroundFocal.
default	20:42:13.588104-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.588254-0500	SpringBoard	Adding: <FBApplicationProcess: 0x868f40480; app<com.hightowerai.MobileJarvisNative>:9529(v8997F)>
default	20:42:13.588511-0500	CommCenter	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.588537-0500	CommCenter	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.589637-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2064340:FBApplicationProcess" age:00:00:00  id:51539641016 [System: SysAct]
default	20:42:13.591598-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	20:42:13.593590-0500	healthd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.593640-0500	healthd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.595535-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86ed9c2d0.
default	20:42:13.595602-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Registered new scene: <FBUIApplicationWorkspaceScene: 0x86c20be40; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	20:42:13.595890-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	20:42:13.596144-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.596242-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Workspace interruption policy did change: reconnect
default	20:42:13.596344-0500	SpringBoard	<BSCompoundAssertion:0x86bc3e280> (SBApplicationAppProtectionAssistant: 0x86bc3d100 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x86900c4a0 count:1
default	20:42:13.596404-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	20:42:13.596431-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	20:42:13.596986-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-2064342 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	20:42:13.597218-0500	runningboardd	Assertion 33-34-2064342 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as originator process has not exited
default	20:42:13.597843-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:9529 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9529]; recentSceneIdentityTokensByPID: {9529: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	20:42:13.597960-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:9529 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [9529]; recentSceneIdentityTokensByPID: {9529: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	20:42:13.601392-0500	SpringBoard	Now tracking: <FBScene: 0x867b01800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	20:42:13.601470-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	20:42:13.601569-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	20:42:13.601596-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	20:42:13.601645-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	20:42:13.601773-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	20:42:13.601833-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	20:42:13.603836-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x8668d4620; pid: 9529; taskState: Running; visibility: Foreground>
default	20:42:13.605856-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	20:42:13.621936-0500	locationd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.622486-0500	locationd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.622761-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 9529;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	20:42:13.623130-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":9529, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	20:42:13.623229-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":9529, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	20:42:13.623298-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":9529, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	20:42:13.623789-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	20:42:13.624922-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":9529, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	20:42:13.625000-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	20:42:13.625045-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	20:42:13.625082-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	20:42:13.625113-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	20:42:13.625174-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	20:42:13.625530-0500	symptomsd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.625627-0500	symptomsd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.625664-0500	dasd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.625715-0500	dasd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.626183-0500	backboardd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.626209-0500	backboardd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.626233-0500	audiomxd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.626257-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.626342-0500	WirelessRadioManagerd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.626365-0500	useractivityd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.626395-0500	WirelessRadioManagerd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.626487-0500	useractivityd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.627300-0500	UserEventAgent	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.627363-0500	UserEventAgent	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.632365-0500	wifid	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.639240-0500	PerfPowerServices	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.639319-0500	PerfPowerServices	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.640053-0500	wifid	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.642790-0500	watchdogd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.642873-0500	watchdogd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.643342-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	20:42:13.643764-0500	gamepolicyd	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.643853-0500	gamepolicyd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	20:42:13.648186-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	20:42:13.648308-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	20:42:13.648363-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	20:42:13.648386-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	20:42:13.666407-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	20:42:13.666496-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	20:42:13.684530-0500	CommCenter	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.684556-0500	healthd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.684607-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.684878-0500	backboardd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.685282-0500	locationd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.685910-0500	symptomsd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.686187-0500	dasd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.686808-0500	WirelessRadioManagerd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.686950-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.687720-0500	UserEventAgent	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.687769-0500	useractivityd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.688268-0500	wifid	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.688426-0500	PerfPowerServices	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.688781-0500	watchdogd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.688827-0500	gamepolicyd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	20:42:13.708327-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	20:42:13.724451-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	20:42:13.837589-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	20:42:13.857631-0500	MobileJarvisNative	[0x104bbb020] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	20:42:13.857717-0500	MobileJarvisNative	[0x1058b0000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	20:42:13.860265-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	20:42:13.860296-0500	MobileJarvisNative	Creating new background assertion
default	20:42:13.860347-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x104bbd450>
default	20:42:13.860377-0500	MobileJarvisNative	Initializing connection
default	20:42:13.860402-0500	MobileJarvisNative	Removing all cached process handles
default	20:42:13.860426-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	20:42:13.860476-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	20:42:13.860502-0500	MobileJarvisNative	[0x1058b0100] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	20:42:13.860891-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] as ready
default	20:42:13.861397-0500	MobileJarvisNative	Handshake succeeded
default	20:42:13.861427-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	20:42:13.861555-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-9529-2064343 target:9529 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	20:42:13.861588-0500	runningboardd	Assertion 33-9529-2064343 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as start-time-defining assertions exist
default	20:42:13.861646-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	20:42:13.861881-0500	MobileJarvisNative	Created background task <private>.
default	20:42:13.862833-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	20:42:13.863179-0500	MobileJarvisNative	[0x1058c0000] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:13.863534-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	20:42:13.864101-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	20:42:13.864134-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	20:42:13.864197-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	20:42:13.864798-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:0B7A007A-40F8-4FB5-BA9D-E8E1C53C2BC2 pid:9529 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9529;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	20:42:13.864957-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc9b8ec1c0; IOHIDEventSystemConnectionRef: 0xc9bcdfe00; vpid: 9529(v8997F); taskPort: 0xEC9B3; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:0B7A007A-40F8-4FB5-BA9D-E8E1C53C2BC2 pid:9529 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 9529;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	20:42:13.865757-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	20:42:13.865969-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	20:42:13.866295-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	20:42:13.868917-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	20:42:13.869092-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	20:42:13.869786-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	20:42:13.870646-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	20:42:13.870784-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	20:42:13.870819-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	20:42:13.870845-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	20:42:13.870871-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	20:42:13.871157-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	20:42:13.871494-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	20:42:13.871973-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	20:42:13.872004-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x1058a5e80 <private>> attempting immediate handshake from activate
default	20:42:13.872030-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x1058a5e80 <private>> sent handshake
default	20:42:13.872082-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x105901ea0>
default	20:42:13.872133-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	20:42:13.872235-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Connection established.
default	20:42:13.872267-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x86b3f0070>
default	20:42:13.872292-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Connection to remote process established!
default	20:42:13.872520-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x4cd0] to process 0x868f40480 (watchdog: 19.71s)
default	20:42:13.872600-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	20:42:13.872853-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	20:42:13.873017-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x866a5aea0; pid: 9529; taskState: Running; visibility: Foreground>
default	20:42:13.873327-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	20:42:13.873553-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873586-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873620-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873646-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873672-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873697-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873722-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873747-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873770-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873799-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873831-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873856-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873879-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x86844f300; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] remnants=0>
default	20:42:13.873961-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	20:42:13.874042-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	20:42:13.874126-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1058c0640> for initial
default	20:42:13.874154-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1058c0640> for CADisplay KVO
default	20:42:13.876291-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	20:42:13.876581-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	20:42:13.876616-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	20:42:13.876641-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	20:42:13.893872-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	20:42:13.893951-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	20:42:13.895771-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	20:42:13.895879-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	20:42:13.895978-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	20:42:13.896003-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	20:42:13.896078-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	20:42:13.898581-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	20:42:13.898745-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.898799-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.899490-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.901499-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1059c55e0>; with scene: <UIWindowScene: 0x104bbdf20>
default	20:42:13.901628-0500	MobileJarvisNative	0x1059ecd80 setDelegate:<0x1059eccc0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	20:42:13.901864-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.902080-0500	MobileJarvisNative	[0x1059c5570] Initialized with scene: <UIWindowScene: 0x104bbdf20>; behavior: <_UIEventDeferringBehavior_iOS: 0x105900e60>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	20:42:13.902251-0500	MobileJarvisNative	[0x1058c1040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:13.902869-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	20:42:13.903518-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.905893-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.906320-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
error	20:42:13.906903-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	20:42:13.906929-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.909455-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	20:42:13.909528-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	20:42:13.910084-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	20:42:13.910113-0500	MobileJarvisNative	startConnection
default	20:42:13.912134-0500	MobileJarvisNative	[0x1058c1900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	20:42:13.912353-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	20:42:13.914067-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.914544-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9529) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	20:42:13.915189-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	20:42:13.915622-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.915657-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.915817-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	20:42:13.915847-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.915870-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.916323-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	20:42:13.916395-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.917011-0500	backboardd	new deferring rules for pid:34: [
    [34-6400]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-6401]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9529>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <to
default	20:42:13.918404-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	20:42:13.919967-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9529>
]
default	20:42:13.919996-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9529>
]
default	20:42:13.920022-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x105970b90; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	20:42:13.920047-0500	MobileJarvisNative	observerPolicyDidChange: 0x105970b90 -> <_UIKeyWindowSceneObserver: 0x1059eced0>
default	20:42:13.929893-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	20:42:13.932461-0500	MobileJarvisNative	<UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D) Scene updated orientation preferences: none -> ( Pu )
default	20:42:13.933979-0500	MobileJarvisNative	Key window API is scene-level: YES
default	20:42:13.934019-0500	MobileJarvisNative	UIWindowScene: 0x104bbdf20: Window became key in scene: UIWindow: 0x104bbc010; contextId: 0x1914434F: reason: UIWindowScene: 0x104bbdf20: Window requested to become key in scene: 0x104bbc010
default	20:42:13.934097-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x104bbdf20; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x104bbc010; reason: UIWindowScene: 0x104bbdf20: Window requested to become key in scene: 0x104bbc010
default	20:42:13.934257-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x104bbc010; contextId: 0x1914434F; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.934288-0500	MobileJarvisNative	[0x1059c5570] Begin local event deferring requested for token: 0x105891500; environments: 1; reason: UIWindowScene: 0x104bbdf20: Begin event deferring in keyboardFocus for window: 0x104bbc010
default	20:42:13.934840-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	20:42:13.934931-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	20:42:13.934957-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	20:42:13.934984-0500	backboardd	new deferring rules for pid:9529: [[9529-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x1914434F; pid: 9529>; reason: …gin event deferring in keyboardFocus for window: 0x104bbc010]
default	20:42:13.935372-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.936256-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(9529) setClientFocusContext
    focusContext:<contextID:420758351 sceneID:com.hightowerai.MobileJarvisNative-default>
default	20:42:13.938222-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 9529 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.938256-0500	SpringBoard	arbiter: arbiter requested pid 9529 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.938324-0500	SpringBoard	[coordinator] using arbiter suggested pid 9529 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.938390-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.938813-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 9529; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:9529>
default	20:42:13.939168-0500	SpringBoard	Scene <FBScene: 0x867b01800; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	20:42:13.939397-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	20:42:13.939452-0500	SpringBoard	set currentFocus PID:9529 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	20:42:13.939805-0500	MobileJarvisNative	establishing connection to agent
default	20:42:13.940432-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9529>,
    <token: 0x1914434F; pid: 9529>
]
default	20:42:13.940589-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 9529>,
    <token: 0x1914434F; pid: 9529>
]
default	20:42:13.940699-0500	backboardd	new scene host settings: contextID:1914434F <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	20:42:13.940897-0500	MobileJarvisNative	[0x105971a40] Session created.
default	20:42:13.941076-0500	MobileJarvisNative	[0x105971a40] Session created from connection [0x1058b0700]
default	20:42:13.941104-0500	MobileJarvisNative	[0x1058b0700] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	20:42:13.941155-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x105970b90; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	20:42:13.941180-0500	MobileJarvisNative	observerPolicyDidChange: 0x105970b90 -> <_UIKeyWindowSceneObserver: 0x1059eced0>
default	20:42:13.941308-0500	MobileJarvisNative	[0x105971a40] Session activated
default	20:42:13.949060-0500	SpringBoard	[0x86c20be40:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x4cd0] completed with success: 1
default	20:42:13.949196-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	20:42:13.949430-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [186DC29A-C7F3-4CB0-8172-55B559C60A12] (reporting strategy default)>
default	20:42:13.949448-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [72181295-C9C0-4331-8240-14240B8C7918] (reporting strategy default)>
default	20:42:13.949466-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [186DC29A-C7F3-4CB0-8172-55B559C60A12] (reporting strategy default)> as the global parent
default	20:42:13.950514-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 9529<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2064344 target:9529<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	20:42:13.950582-0500	runningboardd	Assertion 33-34-2064344 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	20:42:13.951186-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	20:42:13.951464-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	20:42:13.952184-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	20:42:13.955830-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	20:42:13.955930-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	20:42:13.956012-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	20:42:13.956151-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2064344 payload 15918742631522514469>
)} lost:{(
)}>
default	20:42:13.956187-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	20:42:13.956218-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x104bbd450> for task identifier: 1
default	20:42:13.956363-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	20:42:13.956389-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	20:42:13.956417-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	20:42:13.956675-0500	runningboardd	Invalidating assertion 33-9529-2064343 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.956763-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	20:42:13.957137-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	20:42:13.957164-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	20:42:13.957226-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x104bbdf20> (B4474C7C-5AC8-453B-89E6-0BA8EE12664D)
default	20:42:13.957254-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	20:42:13.957282-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	20:42:13.957309-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	20:42:13.957380-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	20:42:13.957448-0500	MobileJarvisNative	Updating configuration of monitor M9529-1
default	20:42:13.958031-0500	MobileJarvisNative	[0x1058b0900] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	20:42:13.958242-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x866d92f60; type: SceneReady; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86921db20; contentOrientation: "portrait (1)"; lastInteractionTime: 200882; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868144b70; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	20:42:13.958324-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.958585-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	20:42:13.958614-0500	MobileJarvisNative	[0x1058b0c00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	20:42:13.958662-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	20:42:13.958688-0500	MobileJarvisNative	[0x1058b0d00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	20:42:13.959043-0500	MobileJarvisNative	[0x1058b0900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:13.959350-0500	MobileJarvisNative	Hit the server for a process handle 71b09b600002539 that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:13.959399-0500	MobileJarvisNative	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	20:42:13.960025-0500	healthd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.960338-0500	CommCenter	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.960663-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x104bbdf20; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.960741-0500	MobileJarvisNative	[0x1059c5570] Scene target of event deferring environments did update: scene: 0x104bbdf20; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	20:42:13.960791-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x104bbdf20; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.960817-0500	MobileJarvisNative	Stack[KeyWindow] 0x1059ee550: Migrate scenes from LastOneWins -> SystemShellManaged
default	20:42:13.960865-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	20:42:13.960913-0500	MobileJarvisNative	[0x1059c5570] Scene target of event deferring environments did update: scene: 0x104bbdf20; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	20:42:13.960968-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x104bbdf20; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	20:42:13.961044-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	20:42:13.961344-0500	MobileJarvisNative	startConnection
default	20:42:13.961421-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	20:42:13.961723-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: B4474C7C-5AC8-453B-89E6-0BA8EE12664D
default	20:42:13.961978-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	20:42:13.962013-0500	MobileJarvisNative	forceReloadInputViews
default	20:42:13.962078-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	20:42:13.962192-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	20:42:13.962596-0500	backboardd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.962709-0500	locationd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.962873-0500	symptomsd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963042-0500	dasd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963341-0500	WirelessRadioManagerd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963391-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963530-0500	useractivityd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963644-0500	UserEventAgent	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.963979-0500	wifid	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.964003-0500	PerfPowerServices	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.964263-0500	watchdogd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:13.964288-0500	gamepolicyd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	20:42:13.996287-0500	MobileJarvisNative	<nw_activity 50:1 [186DC29A-C7F3-4CB0-8172-55B559C60A12] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 508ms
default	20:42:13.996442-0500	MobileJarvisNative	<nw_activity 50:2 [72181295-C9C0-4331-8240-14240B8C7918] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 508ms
default	20:42:13.996521-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [186DC29A-C7F3-4CB0-8172-55B559C60A12] (global parent) (reporting strategy default) complete (reason success)>
default	20:42:13.996548-0500	MobileJarvisNative	Unset the global parent activity
default	20:42:14.029459-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	20:42:14.029519-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	20:42:14.043123-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	20:42:14.050062-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	20:42:14.055502-0500	MobileJarvisNative	[0x105b24780] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	20:42:14.055917-0500	MobileJarvisNative	<SOServiceConnection: 0x105abdc80>: new XPC connection
default	20:42:14.073172-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9529-2064345 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	20:42:14.073214-0500	runningboardd	Assertion 33-9529-2064345 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as start-time-defining assertions exist
default	20:42:14.089801-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	20:42:14.089833-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	20:42:14.089859-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	20:42:14.090342-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	20:42:14.092998-0500	MobileJarvisNative	container_query_get_single_result: success
default	20:42:14.093095-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	20:42:14.094856-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	20:42:14.095118-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	20:42:14.099360-0500	MobileJarvisNative	Garbage collection for alternative services
default	20:42:14.099606-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	20:42:14.101339-0500	MobileJarvisNative	Connection 1: enabling TLS
default	20:42:14.101391-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	20:42:14.101419-0500	MobileJarvisNative	[C1 1C2621B5-DA33-473A-9FAC-1F6B1603CA87 Hostname#55d6789d:443 quic-connection, url hash: 7cb98f63, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{BEDEE2D9-E572-4310-9415-145D68B0A110}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	20:42:14.101568-0500	MobileJarvisNative	[C1 Hostname#55d6789d:443 initial parent-flow ((null))] event: path:start @0.000s
default	20:42:14.102214-0500	MobileJarvisNative	[C1 Hostname#55d6789d:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 0D5D7232-2DA9-48F2-A3B2-18E31D96FDE8
default	20:42:14.102431-0500	MobileJarvisNative	[C1 Hostname#55d6789d:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.102458-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	20:42:14.102602-0500	MobileJarvisNative	[C1 Hostname#55d6789d:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	20:42:14.102688-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 initial path ((null))] event: path:start @0.000s
default	20:42:14.102926-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 0D5D7232-2DA9-48F2-A3B2-18E31D96FDE8
default	20:42:14.103044-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	20:42:14.103180-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 initial path ((null))] event: path:start @0.001s
default	20:42:14.103501-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 71A47CBE-A62C-4A57-B8EC-DB897433D5B7
default	20:42:14.103660-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	20:42:14.103720-0500	MobileJarvisNative	[0x1058b1400] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	20:42:14.103804-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> setting up Connection 1
default	20:42:14.115149-0500	MobileJarvisNative	[0x105b25b80] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	20:42:14.133464-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	20:42:14.133675-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	20:42:14.133709-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/6BC7CCF7-2CEA-4E11-A8B3-D0E927976090/MobileJarvisNative.app
default	20:42:14.133776-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	20:42:14.133805-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	20:42:14.138048-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8bd569af.443
default	20:42:14.138076-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#0aa6d520.443
default	20:42:14.138102-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8b0391b2:443
default	20:42:14.138128-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#b86385bb:443
default	20:42:14.138257-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.036s
default	20:42:14.138421-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 initial path ((null))] event: path:start @0.036s
default	20:42:14.138617-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.036s, uuid: FF6DA3C4-C055-41C1-8AF2-874312F2C4E4
default	20:42:14.138842-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.036s
default	20:42:14.139130-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.036s
default	20:42:14.141470-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-4fb581a019bed146] created QUIC connection (spin bit enabled)
default	20:42:14.142294-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.039s
default	20:42:14.143075-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-4fb581a019bed146] TLS stream is: [C2]
default	20:42:14.143104-0500	MobileJarvisNative	[C2 709570B8-EDF8-401A-ADE1-2C68D8BEB6DB IPv6#8bd569af.443 quic-connection, url hash: 7cb98f63, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{BEDEE2D9-E572-4310-9415-145D68B0A110}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	20:42:14.143160-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	20:42:14.143224-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: FF6DA3C4-C055-41C1-8AF2-874312F2C4E4
default	20:42:14.143374-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.143402-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	20:42:14.143541-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.143585-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	20:42:14.143779-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x105b7dc00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	20:42:14.143861-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x105b7dc00] Client handshake started
default	20:42:14.143940-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS client enter_early_data
default	20:42:14.143966-0500	MobileJarvisNative	nw_path_evaluator_start [C7D661C2-37B0-41EF-8BD8-D4AA219EE3FE <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	20:42:14.144074-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	20:42:14.144125-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	20:42:14.144232-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	20:42:14.144258-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS client read_server_hello
default	20:42:14.144304-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	20:42:14.146302-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#0aa6d520.443
default	20:42:14.146330-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8b0391b2:443
default	20:42:14.146356-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#b86385bb:443
default	20:42:14.146478-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.044s
default	20:42:14.163178-0500	MobileJarvisNative	[0x105b270c0] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	20:42:14.174861-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	20:42:14.174915-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_server_hello
default	20:42:14.175143-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	20:42:14.175556-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_certificate_request
default	20:42:14.177043-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_server_certificate
default	20:42:14.177251-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	20:42:14.183549-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session (null) [0x0] with pid '9529' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	20:42:14.188092-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '9529' moved to ForegroundRunning and is not allowed to play in the background
default	20:42:14.191600-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d285e00; type: MainTransition; transitionID: 464398E9-143C-4A32-83FE-B3F0F7847D75; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	20:42:14.192694-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x105b7dc00] Performing external trust evaluation
default	20:42:14.193037-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86c4de3d0> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86c4dfc60>;
    <SBSwitcherModifierEventResponse: 0x86c4dfba0> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86c4df8d0>;
	    <SBSwitcherModifierEventResponse: 0x86c4dc9f0> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86c4dcdb0; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86bc30d00; visible: NO; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x869cb16d0; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x866f63240; active: NO; appLayout: <SBAppLayout: 0x86b60a000; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	20:42:14.193509-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x105b7dc00] Asyncing for external verify block
default	20:42:14.193912-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	20:42:14.194746-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> auth completion disp=1 cred=0x0
default	20:42:14.194973-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.198545-0500	MobileJarvisNative	(Trust 0x109c3a100) No pending evals, starting
default	20:42:14.203265-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	20:42:14.203318-0500	MobileJarvisNative	[0x1058b3700] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.203419-0500	MobileJarvisNative	[0x1058b3900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.203759-0500	MobileJarvisNative	(Trust 0x109c3a100) Completed async eval kickoff
default	20:42:14.206554-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	20:42:14.206582-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	20:42:14.208617-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f85e: {
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
default	20:42:14.209527-0500	MobileJarvisNative	(Trust 0x109c3a100) trustd returned 4
default	20:42:14.209625-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	20:42:14.210449-0500	MobileJarvisNative	(Trust 0x109c3a040) No pending evals, starting
default	20:42:14.212441-0500	MobileJarvisNative	[0x1058b3800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.215486-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1059d0c30 with ID: 0x6f85e
default	20:42:14.215646-0500	MobileJarvisNative	(Trust 0x109c3a040) Completed async eval kickoff
default	20:42:14.215890-0500	MobileJarvisNative	[0x1058b3900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.216165-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	20:42:14.216555-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	20:42:14.216753-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	20:42:14.216892-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	20:42:14.218203-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	20:42:14.218316-0500	MobileJarvisNative	(Trust 0x109c3a040) trustd returned 4
default	20:42:14.218456-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	20:42:14.218492-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x105b7dc00] Returning from external verify block with result: true
default	20:42:14.218550-0500	MobileJarvisNative	Call host has no calls
default	20:42:14.218635-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x105b7dc00] Certificate verification result: OK
default	20:42:14.218719-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client read_server_finished
default	20:42:14.218794-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	20:42:14.218820-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	20:42:14.218847-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client send_client_certificate
default	20:42:14.218873-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client complete_second_flight
default	20:42:14.219068-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS 1.3 client done
default	20:42:14.219093-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS client finish_client_handshake
default	20:42:14.219118-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x105b7dc00] Client handshake state: TLS client done
default	20:42:14.219144-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x105b7dc00] Client handshake done
default	20:42:14.219561-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x105b7dc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(52ms) flight_time(32ms) rtt(32ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.219619-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.219845-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.052s
default	20:42:14.219973-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	20:42:14.220000-0500	MobileJarvisNative	[C2 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.052s
default	20:42:14.220155-0500	MobileJarvisNative	[0x1058b3800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.221477-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	20:42:14.221649-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] QUIC connection established in 54.576 ms, RTT 29.941 ms
default	20:42:14.221677-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.221791-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.094s
default	20:42:14.221898-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-3424620745)
default	20:42:14.222520-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.095s
default	20:42:14.222708-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.095s
default	20:42:14.222764-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.095s
default	20:42:14.223288-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.095s
default	20:42:14.223675-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.095s
default	20:42:14.223793-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.095s
default	20:42:14.224000-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#8bd569af.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	20:42:14.224169-0500	MobileJarvisNative	[C1 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.095s
default	20:42:14.224354-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	20:42:14.224380-0500	MobileJarvisNative	[C1 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.095s
default	20:42:14.224406-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	20:42:14.224930-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] path over en0 received event established
default	20:42:14.225387-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] promoted path 0x105a81880 over en0 to primary
default	20:42:14.225584-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	20:42:14.226275-0500	MobileJarvisNative	[C1.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.096s, uuid: FF6DA3C4-C055-41C1-8AF2-874312F2C4E4
default	20:42:14.226387-0500	MobileJarvisNative	[C1.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.097s, uuid: 71A47CBE-A62C-4A57-B8EC-DB897433D5B7
default	20:42:14.226666-0500	MobileJarvisNative	[C1.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.097s, uuid: 0D5D7232-2DA9-48F2-A3B2-18E31D96FDE8
default	20:42:14.226695-0500	MobileJarvisNative	[C1 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.097s, uuid: 0D5D7232-2DA9-48F2-A3B2-18E31D96FDE8
default	20:42:14.226835-0500	MobileJarvisNative	Connection 1: connected successfully
default	20:42:14.226864-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	20:42:14.226917-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	20:42:14.227217-0500	SpringBoard	Front display did change: <SBApplication: 0x867b01300; com.hightowerai.MobileJarvisNative>
default	20:42:14.228569-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.098s
default	20:42:14.229310-0500	MobileJarvisNative	[0x1058b3800] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	20:42:14.230902-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> now using Connection 1
default	20:42:14.233777-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	20:42:14.233802-0500	MobileJarvisNative	0x105a85c18 ID=0 Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> sent request, body N 0
default	20:42:14.235532-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	20:42:14.236146-0500	MobileJarvisNative	[0x1058b3f00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	20:42:14.239831-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Technology: vocalizer, Available: true]'
default	20:42:14.241630-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x859b4df80; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x854caaa00; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 8, 2025 at 8:42:14 PM CDT;}
default	20:42:14.241662-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x859b4f740 10-08-2025 20:42:14, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	20:42:14.241771-0500	MobileJarvisNative	[0x105b27480] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	20:42:14.243561-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	20:42:14.246428-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	20:42:14.247674-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:14.249113-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x105b7dc00] Asyncing for session update block
default	20:42:14.249324-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x105b7dc00] Asyncing for session update block
default	20:42:14.249443-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x105b7dc00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(52ms) flight_time(32ms) rtt(32ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.249501-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.249612-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] creating inbound stream 3
default	20:42:14.249814-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] creating inbound stream 7
default	20:42:14.250010-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] creating inbound stream 11
default	20:42:14.250787-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x105b7dc00] Returning from session update block
default	20:42:14.251323-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x105b7dc00] Returning from session update block
default	20:42:14.252370-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	20:42:14.252443-0500	MobileJarvisNative	Connection 3: enabling TLS
default	20:42:14.252470-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	20:42:14.252532-0500	MobileJarvisNative	[C3 C90C8B78-840C-43AF-9924-B9F18D185A87 Hostname#fcab7943:443 quic-connection, url hash: ffd5ba32, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8E482F68-0CE5-4FA7-9529-D22658CD41DE}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	20:42:14.252931-0500	MobileJarvisNative	[C3 Hostname#fcab7943:443 initial parent-flow ((null))] event: path:start @0.000s
default	20:42:14.253297-0500	MobileJarvisNative	[C3 Hostname#fcab7943:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: BDC75275-74DA-4C74-9926-40D6439CDDD8
default	20:42:14.254041-0500	MobileJarvisNative	[C3 Hostname#fcab7943:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	20:42:14.254066-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	20:42:14.254144-0500	MobileJarvisNative	[C3 Hostname#fcab7943:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.002s
default	20:42:14.254446-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 initial path ((null))] event: path:start @0.003s
default	20:42:14.254779-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.003s, uuid: BDC75275-74DA-4C74-9926-40D6439CDDD8
default	20:42:14.255022-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.003s
default	20:42:14.255163-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 initial path ((null))] event: path:start @0.003s
default	20:42:14.255412-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.004s, uuid: 66FB1CB2-89A4-4FA2-A100-299846EAB108
default	20:42:14.255523-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.004s
default	20:42:14.255630-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> setting up Connection 3
default	20:42:14.255855-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-016e302dafb8e3f5e56cb12da2b8ff0d35bf3d29] creating inbound stream 15
default	20:42:14.283679-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
error	20:42:14.285037-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	20:42:14.285252-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Technology: vocalizer, Available: true]
default	20:42:14.286726-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	20:42:14.301315-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: gryphon, Available: true]'
default	20:42:14.302099-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8894dda6:443
default	20:42:14.302128-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#69db1ca3:443
default	20:42:14.302364-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.051s
default	20:42:14.302609-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 initial path ((null))] event: path:start @0.051s
default	20:42:14.302994-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.051s, uuid: 8C89CF5D-DB91-4536-8168-0B3215762108
default	20:42:14.303122-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.052s
default	20:42:14.303488-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.052s
default	20:42:14.304011-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-c1bbe5f0c23ff256] created QUIC connection (spin bit enabled)
default	20:42:14.304354-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.052s
default	20:42:14.305063-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-c1bbe5f0c23ff256] TLS stream is: [C4]
default	20:42:14.305093-0500	MobileJarvisNative	[C4 BF009F86-3BEB-4F3D-9271-090F28E26924 IPv4#8894dda6:443 quic-connection, url hash: ffd5ba32, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8E482F68-0CE5-4FA7-9529-D22658CD41DE}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	20:42:14.305150-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	20:42:14.305202-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8C89CF5D-DB91-4536-8168-0B3215762108
default	20:42:14.305306-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.305334-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	20:42:14.305385-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.305409-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	20:42:14.305594-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x105b7f600] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	20:42:14.305671-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x105b7f600] Client handshake started
default	20:42:14.305747-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS client enter_early_data
default	20:42:14.305845-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS client read_server_hello
default	20:42:14.306276-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#69db1ca3:443
default	20:42:14.306420-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.053s
default	20:42:14.307539-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	20:42:14.307591-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	20:42:14.307617-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	20:42:14.307668-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Technology: custom, Available: true]'
default	20:42:14.311831-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	20:42:14.311889-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	20:42:14.314994-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	20:42:14.322813-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neural, Available: true]'
default	20:42:14.333229-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	20:42:14.333359-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	20:42:14.333394-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	20:42:14.334649-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neuralAX, Available: true]'
default	20:42:14.340349-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	20:42:14.340410-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	20:42:14.340492-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	20:42:14.343564-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x109d39e40>
default	20:42:14.416696-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 initial path ((null))] event: path:start @0.166s
default	20:42:14.417087-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.167s, uuid: C69ACCF5-1A5B-4D6A-9D5E-02F674A3A5E1
default	20:42:14.417207-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.167s
default	20:42:14.418328-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.167s
default	20:42:14.418450-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.168s
default	20:42:14.418531-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8894dda6:443
default	20:42:14.418557-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#69db1ca3:443
default	20:42:14.418672-0500	MobileJarvisNative	[C3.1.2 Hostname#fcab7943:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.168s
default	20:42:14.418927-0500	MobileJarvisNative	[C3.1.2.1 IPv4#8894dda6:443 initial path ((null))] event: path:start @0.168s
default	20:42:14.419188-0500	MobileJarvisNative	[C3.1.2.1 IPv4#8894dda6:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.168s, uuid: 2204009C-5C06-4566-95F4-51D88F4E3B01
default	20:42:14.419301-0500	MobileJarvisNative	[C3.1.2.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.168s
default	20:42:14.419574-0500	MobileJarvisNative	[C3.1.2.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.168s
default	20:42:14.419795-0500	MobileJarvisNative	user_tcp_init_all_block_invoke g_tcp_nw_assert_context is false value -1
default	20:42:14.420125-0500	MobileJarvisNative	[C3.1.2.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.169s
default	20:42:14.420290-0500	MobileJarvisNative	tcp_output [C3.1.2.1:3] flags=[S] seq=4015644399, ack=0, win=65535 state=SYN_SENT rcv_nxt=0, snd_una=4015644399
default	20:42:14.470618-0500	MobileJarvisNative	[C3.1.1.3 IPv4#69db1ca3:443 initial path ((null))] event: path:start @0.220s
default	20:42:14.470791-0500	MobileJarvisNative	[C3.1.1.3 IPv4#69db1ca3:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.220s, uuid: 0D9C9028-672D-48BE-90B0-F1874BB7B77B
default	20:42:14.470910-0500	MobileJarvisNative	[C3.1.1.3 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.220s
default	20:42:14.471143-0500	MobileJarvisNative	[C3.1.1.3 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.221s
default	20:42:14.471683-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.3:2] [-714492140575e4fb] created QUIC connection (spin bit disabled)
default	20:42:14.472043-0500	MobileJarvisNative	[C3.1.1.3 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.221s
default	20:42:14.472966-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.3:2] [-714492140575e4fb] TLS stream is: [C5]
default	20:42:14.472996-0500	MobileJarvisNative	[C5 C84DC320-D41B-45BB-8FFA-601304FB1335 IPv4#69db1ca3:443 quic-connection, url hash: ffd5ba32, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8E482F68-0CE5-4FA7-9529-D22658CD41DE}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	20:42:14.473052-0500	MobileJarvisNative	[C5 IPv4#69db1ca3:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	20:42:14.473107-0500	MobileJarvisNative	[C5 IPv4#69db1ca3:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 0D9C9028-672D-48BE-90B0-F1874BB7B77B
default	20:42:14.473222-0500	MobileJarvisNative	[C5 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.473249-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	20:42:14.473303-0500	MobileJarvisNative	nw_flow_connected [C5 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.473388-0500	MobileJarvisNative	[C5 IPv4#69db1ca3:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	20:42:14.473583-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C5:1][0x10ee80e00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	20:42:14.473670-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C5:1][0x10ee80e00] Client handshake started
default	20:42:14.473751-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10ee80e00] Client handshake state: TLS client enter_early_data
default	20:42:14.473825-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C5:1][0x10ee80e00] Client handshake state: TLS client read_server_hello
default	20:42:14.474066-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_hello_retry_request
default	20:42:14.474118-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_server_hello
default	20:42:14.474220-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	20:42:14.474400-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_certificate_request
default	20:42:14.474595-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_server_certificate
default	20:42:14.474621-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	20:42:14.474831-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x105b7f600] Performing external trust evaluation
default	20:42:14.474908-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x105b7f600] Asyncing for external verify block
default	20:42:14.475106-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	20:42:14.475197-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> auth completion disp=1 cred=0x0
default	20:42:14.475244-0500	MobileJarvisNative	(Trust 0x10eced080) No pending evals, starting
default	20:42:14.475338-0500	MobileJarvisNative	[0x109f41000] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.475363-0500	MobileJarvisNative	(Trust 0x10eced080) Completed async eval kickoff
default	20:42:14.478930-0500	MobileJarvisNative	(Trust 0x10eced080) trustd returned 4
default	20:42:14.479032-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	20:42:14.479094-0500	MobileJarvisNative	(Trust 0x10ecece40) No pending evals, starting
default	20:42:14.479197-0500	MobileJarvisNative	[0x109f41100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.479279-0500	MobileJarvisNative	(Trust 0x10ecece40) Completed async eval kickoff
default	20:42:14.479351-0500	MobileJarvisNative	[0x109f41000] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.482587-0500	MobileJarvisNative	(Trust 0x10ecece40) trustd returned 4
default	20:42:14.482697-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	20:42:14.482723-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x105b7f600] Returning from external verify block with result: true
default	20:42:14.482780-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x105b7f600] Certificate verification result: OK
default	20:42:14.482925-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client read_server_finished
default	20:42:14.483014-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client send_end_of_early_data
default	20:42:14.483041-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	20:42:14.483067-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client send_client_certificate
default	20:42:14.483160-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client complete_second_flight
default	20:42:14.483467-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS 1.3 client done
default	20:42:14.483491-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS client finish_client_handshake
default	20:42:14.483517-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x105b7f600] Client handshake state: TLS client done
default	20:42:14.483568-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x105b7f600] Client handshake done
default	20:42:14.484128-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x105b7f600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(180ms) flight_time(170ms) rtt(170ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.484215-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.484397-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.180s
default	20:42:14.484587-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	20:42:14.484615-0500	MobileJarvisNative	[C4 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.180s
default	20:42:14.484693-0500	MobileJarvisNative	[0x109f41100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.485470-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	20:42:14.485526-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] QUIC connection established in 181.738 ms, RTT 169.94 ms
default	20:42:14.485554-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.485765-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.234s
default	20:42:14.485829-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#8894dda6:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-3424620745)
default	20:42:14.486002-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.234s
default	20:42:14.486232-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.234s
default	20:42:14.486298-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.234s
default	20:42:14.486638-0500	MobileJarvisNative	nw_protocol_tcp_log_summary [C3.1.2.1:3] 
	[40F141CE-B2CF-4218-A6A3-34AB818D8CE6 <private>:50557<-><private>:443]
	Init: 1, Conn_Time: 0.000ms, SYNs: 1, WR_T: 0/0, RD_T: 0/0, TFO: 0/0/0, ECN: 0/0/0, Accurate ECN (client/server): Disabled/Disabled, TS: 0, TSO: 0
	rtt_cache: none, rtt_upd: 0, rtt: 0.000ms, rtt_var: 250.000ms rtt_nc: 0.000ms, rtt_var_nc: 250.000ms base rtt: 0ms
	ACKs-compressed: 0, ACKs delayed: 0 delayed ACKs sent: 0
default	20:42:14.487231-0500	MobileJarvisNative	[C5 C84DC320-D41B-45BB-8FFA-601304FB1335 IPv4#69db1ca3:443 quic-connection, url hash: ffd5ba32, tls, definite, attribution: developer] cancel
error	20:42:14.487261-0500	MobileJarvisNative	nw_connection_copy_connected_local_endpoint_block_invoke [C5] Client called nw_connection_copy_connected_local_endpoint on unconnected nw_connection
error	20:42:14.487287-0500	MobileJarvisNative	nw_connection_copy_connected_remote_endpoint_block_invoke [C5] Client called nw_connection_copy_connected_remote_endpoint on unconnected nw_connection
error	20:42:14.487313-0500	MobileJarvisNative	nw_connection_copy_protocol_metadata_internal_block_invoke [C5] Client called nw_connection_copy_protocol_metadata_internal on unconnected nw_connection
default	20:42:14.487346-0500	MobileJarvisNative	[C5 C84DC320-D41B-45BB-8FFA-601304FB1335 IPv4#69db1ca3:443 quic-connection, url hash: ffd5ba32, tls, definite, attribution: developer] cancelled
	[C5 0D9C9028-672D-48BE-90B0-F1874BB7B77B <NULL><-><NULL>]
	Connected Path: (null)
	Duration: 0.012s, QUIC @0.000s took 0.000s,  took 4294967.295s
default	20:42:14.487741-0500	MobileJarvisNative	nw_flow_disconnected [C5 IPv4#69db1ca3:443 cancelled channel-flow ((null))] Output protocol disconnected
default	20:42:14.487818-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state cancelled
default	20:42:14.488205-0500	MobileJarvisNative	quic_conn_log_summary [C3.1.1.3:2] [-714492140575e4fb] 
	Connection attempts: 1, RETRY received: no, PTOs: 0
default	20:42:14.488379-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.235s
default	20:42:14.488481-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.235s
default	20:42:14.488538-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.235s
default	20:42:14.488565-0500	MobileJarvisNative	nw_flow_connected [C3 IPv4#8894dda6:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	20:42:14.488651-0500	MobileJarvisNative	[C3 IPv4#8894dda6:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.235s
default	20:42:14.488831-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	20:42:14.488858-0500	MobileJarvisNative	[C3 IPv4#8894dda6:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.236s
default	20:42:14.488977-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	20:42:14.489293-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] path over en0 received event established
default	20:42:14.489455-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] promoted path 0x105a83800 over en0 to primary
default	20:42:14.489505-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	20:42:14.489681-0500	MobileJarvisNative	[C3.1.1.1 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.236s, uuid: 8C89CF5D-DB91-4536-8168-0B3215762108
default	20:42:14.489769-0500	MobileJarvisNative	[C3.1.1 Hostname#fcab7943:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.236s, uuid: 66FB1CB2-89A4-4FA2-A100-299846EAB108
default	20:42:14.489826-0500	MobileJarvisNative	[C3.1 Hostname#fcab7943:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.236s, uuid: BDC75275-74DA-4C74-9926-40D6439CDDD8
default	20:42:14.489859-0500	MobileJarvisNative	[C3 IPv4#8894dda6:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.236s, uuid: BDC75275-74DA-4C74-9926-40D6439CDDD8
default	20:42:14.489986-0500	MobileJarvisNative	Connection 3: connected successfully
default	20:42:14.490011-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	20:42:14.490036-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	20:42:14.490401-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.237s
default	20:42:14.490541-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> now using Connection 3
default	20:42:14.491015-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	20:42:14.491974-0500	MobileJarvisNative	0x105a86bd8 ID=0 Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> sent request, body S 32
default	20:42:14.503686-0500	MobileJarvisNative	tcp_input [C3.1.2.1:3] flags=[S.] seq=1521412469, ack=4015644400, win=65535 state=CLOSED rcv_nxt=0, snd_una=4015644399
default	20:42:14.538736-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x105b7f600] Asyncing for session update block
default	20:42:14.538983-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x105b7f600] Asyncing for session update block
default	20:42:14.539077-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x105b7f600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(180ms) flight_time(170ms) rtt(170ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.539149-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#8894dda6:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.539283-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] creating inbound stream 3
default	20:42:14.539506-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] creating inbound stream 7
default	20:42:14.539695-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] creating inbound stream 11
default	20:42:14.539881-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-01d0fa3f61d513fbc2d27b3f8ed51aeb9331af4e] creating inbound stream 15
default	20:42:14.540582-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x105b7f600] Returning from session update block
default	20:42:14.540863-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x105b7f600] Returning from session update block
default	20:42:14.628384-0500	MobileJarvisNative	0x105a85c18 ID=0 Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> received response, status 200 content U
default	20:42:14.629539-0500	MobileJarvisNative	[0x109f41100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.638324-0500	MobileJarvisNative	[0x109f41100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.642261-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> response ended
default	20:42:14.643484-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.541s
default	20:42:14.645124-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> done using Connection 1
default	20:42:14.645482-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> summary for task success {transaction_duration_ms=577, response_status=200, connection=1, protocol="h3", domain_lookup_duration_ms=35, connect_duration_ms=56, secure_connection_duration_ms=54, private_relay=false, request_start_ms=136, request_duration_ms=3, response_start_ms=561, response_duration_ms=15, request_bytes=538, request_throughput_kbps=159, response_bytes=6782, response_throughput_kbps=435, cache_hit=true}
default	20:42:14.646560-0500	MobileJarvisNative	Task <8576E79C-C682-47F3-A4A7-0919D1853950>.<1> finished successfully
default	20:42:14.669986-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	20:42:14.671485-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	20:42:14.671845-0500	MobileJarvisNative	Connection 6: enabling TLS
default	20:42:14.671879-0500	MobileJarvisNative	Connection 6: starting, TC(0x0)
default	20:42:14.671910-0500	MobileJarvisNative	[C6 A57B5E53-7FB2-424F-9BA0-7AB2C435087C Hostname#55d6789d:443 quic-connection, url hash: 7cb98f63, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{FCDA467F-E9DF-46F6-875E-FC8ABCB3FE48}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	20:42:14.671982-0500	MobileJarvisNative	[C6 Hostname#55d6789d:443 initial parent-flow ((null))] event: path:start @0.000s
default	20:42:14.672184-0500	MobileJarvisNative	[C6 Hostname#55d6789d:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 93909418-4DD7-4C1E-9CE8-41E19280B017
default	20:42:14.672374-0500	MobileJarvisNative	[C6 Hostname#55d6789d:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.672405-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state preparing
default	20:42:14.672492-0500	MobileJarvisNative	[C6 Hostname#55d6789d:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	20:42:14.672583-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 initial path ((null))] event: path:start @0.000s
default	20:42:14.673048-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 93909418-4DD7-4C1E-9CE8-41E19280B017
default	20:42:14.673161-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	20:42:14.673408-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 initial path ((null))] event: path:start @0.001s
default	20:42:14.673621-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 3AED4A32-95D1-44F2-8BAA-55E8293378E1
default	20:42:14.673732-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	20:42:14.673845-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> setting up Connection 6
default	20:42:14.676228-0500	MobileJarvisNative	nw_endpoint_resolver_update [C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#8bd569af.443
default	20:42:14.676259-0500	MobileJarvisNative	nw_endpoint_resolver_update [C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#0aa6d520.443
default	20:42:14.676286-0500	MobileJarvisNative	nw_endpoint_resolver_update [C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#8b0391b2:443
default	20:42:14.676318-0500	MobileJarvisNative	nw_endpoint_resolver_update [C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#b86385bb:443
default	20:42:14.676454-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.003s
default	20:42:14.676649-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 initial path ((null))] event: path:start @0.003s
default	20:42:14.676796-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.003s, uuid: 1173D2BB-6B81-4E95-BFEE-B6D0B07A75C4
default	20:42:14.676975-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.003s
default	20:42:14.677349-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.004s
default	20:42:14.678014-0500	MobileJarvisNative	quic_conn_initialize_inner [C6.1.1.1:2] [-9f4194b422071fc9] created QUIC connection (spin bit enabled)
default	20:42:14.678795-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.004s
default	20:42:14.679904-0500	MobileJarvisNative	quic_crypto_new_flow [C6.1.1.1:2] [-9f4194b422071fc9] TLS stream is: [C7]
default	20:42:14.679939-0500	MobileJarvisNative	[C7 84ACAD77-11FC-483D-BD18-BA30C79B8D4D IPv6#8bd569af.443 quic-connection, url hash: 7cb98f63, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{FCDA467F-E9DF-46F6-875E-FC8ABCB3FE48}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	20:42:14.680051-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	20:42:14.680154-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 1173D2BB-6B81-4E95-BFEE-B6D0B07A75C4
default	20:42:14.680259-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	20:42:14.680284-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C7] reporting state preparing
default	20:42:14.680377-0500	MobileJarvisNative	nw_flow_connected [C7 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.680469-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	20:42:14.680743-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C7:1][0x10ee82000] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	20:42:14.680913-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C7:1][0x10ee82000] Client handshake started
default	20:42:14.681046-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS client enter_early_data
default	20:42:14.681159-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS client read_server_hello
default	20:42:14.709148-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_hello_retry_request
default	20:42:14.709218-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_server_hello
default	20:42:14.709515-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	20:42:14.709673-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_certificate_request
default	20:42:14.710048-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_server_certificate
default	20:42:14.710074-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	20:42:14.710372-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C7:1][0x10ee82000] Performing external trust evaluation
default	20:42:14.710457-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C7:1][0x10ee82000] Asyncing for external verify block
default	20:42:14.710731-0500	MobileJarvisNative	Connection 6: asked to evaluate TLS Trust
default	20:42:14.710972-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> auth completion disp=1 cred=0x0
default	20:42:14.711230-0500	MobileJarvisNative	(Trust 0x10ecef3c0) No pending evals, starting
default	20:42:14.711441-0500	MobileJarvisNative	[0x109f41a00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.711652-0500	MobileJarvisNative	(Trust 0x10ecef3c0) Completed async eval kickoff
default	20:42:14.716847-0500	MobileJarvisNative	(Trust 0x10ecef3c0) trustd returned 4
default	20:42:14.717004-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	20:42:14.717114-0500	MobileJarvisNative	(Trust 0x10ecef240) No pending evals, starting
default	20:42:14.717256-0500	MobileJarvisNative	[0x109f41b00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:14.717385-0500	MobileJarvisNative	(Trust 0x10ecef240) Completed async eval kickoff
default	20:42:14.717473-0500	MobileJarvisNative	[0x109f41a00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.721992-0500	MobileJarvisNative	(Trust 0x10ecef240) trustd returned 4
default	20:42:14.722069-0500	MobileJarvisNative	Connection 6: TLS Trust result 0
default	20:42:14.722095-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C7:1][0x10ee82000] Returning from external verify block with result: true
default	20:42:14.722152-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C7:1][0x10ee82000] Certificate verification result: OK
default	20:42:14.722323-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client read_server_finished
default	20:42:14.722426-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client send_end_of_early_data
default	20:42:14.722456-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	20:42:14.722485-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client send_client_certificate
default	20:42:14.722512-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client complete_second_flight
default	20:42:14.722743-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS 1.3 client done
default	20:42:14.722769-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS client finish_client_handshake
default	20:42:14.722876-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C7:1][0x10ee82000] Client handshake state: TLS client done
default	20:42:14.722942-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C7:1][0x10ee82000] Client handshake done
default	20:42:14.723421-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C7:1][0x10ee82000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(45ms) flight_time(32ms) rtt(32ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.723511-0500	MobileJarvisNative	nw_flow_connected [C7 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.723601-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.045s
default	20:42:14.723731-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C7] reporting state ready
default	20:42:14.723778-0500	MobileJarvisNative	[C7 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	20:42:14.723892-0500	MobileJarvisNative	[0x109f41b00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:14.724809-0500	MobileJarvisNative	quic_pmtud_restart [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	20:42:14.724867-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] QUIC connection established in 47.257 ms, RTT 31.023 ms
default	20:42:14.724895-0500	MobileJarvisNative	nw_flow_connected [C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	20:42:14.725030-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.052s
default	20:42:14.725136-0500	MobileJarvisNative	nw_flow_connected [C6.1.1.1 IPv6#8bd569af.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-3424620745)
default	20:42:14.725363-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.052s
default	20:42:14.725617-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.052s
default	20:42:14.725682-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.052s
default	20:42:14.725879-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.052s
default	20:42:14.725965-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.052s
default	20:42:14.726023-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.052s
default	20:42:14.726052-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#8bd569af.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	20:42:14.726164-0500	MobileJarvisNative	[C6 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.052s
default	20:42:14.726448-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state ready
default	20:42:14.726505-0500	MobileJarvisNative	[C6 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.053s
default	20:42:14.726533-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C6] viability_changed_handler(true)
default	20:42:14.726900-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] path over en0 received event established
default	20:42:14.727060-0500	MobileJarvisNative	quic_migration_evaluate_primary [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] promoted path 0x10ee888c0 over en0 to primary
default	20:42:14.727108-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C6.1.1.1:2] Calling notify with interface <private>
default	20:42:14.727423-0500	MobileJarvisNative	[C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.053s, uuid: 1173D2BB-6B81-4E95-BFEE-B6D0B07A75C4
default	20:42:14.727600-0500	MobileJarvisNative	[C6.1.1 Hostname#55d6789d:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.053s, uuid: 3AED4A32-95D1-44F2-8BAA-55E8293378E1
default	20:42:14.727705-0500	MobileJarvisNative	[C6.1 Hostname#55d6789d:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.053s, uuid: 93909418-4DD7-4C1E-9CE8-41E19280B017
default	20:42:14.727735-0500	MobileJarvisNative	[C6 IPv6#8bd569af.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.053s, uuid: 93909418-4DD7-4C1E-9CE8-41E19280B017
default	20:42:14.727819-0500	MobileJarvisNative	Connection 6: connected successfully
default	20:42:14.727848-0500	MobileJarvisNative	Connection 6: TLS handshake complete
default	20:42:14.727895-0500	MobileJarvisNative	Connection 6: ready C(N) E(N)
default	20:42:14.728377-0500	MobileJarvisNative	[C6] event: client:connection_reused @0.054s
default	20:42:14.728513-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> now using Connection 6
default	20:42:14.728935-0500	MobileJarvisNative	Connection 6: received viability advisory(Y)
default	20:42:14.728960-0500	MobileJarvisNative	0x105a87118 ID=0 Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> sent request, body N 0
default	20:42:14.749340-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C7:1][0x10ee82000] Asyncing for session update block
default	20:42:14.749517-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C7:1][0x10ee82000] Asyncing for session update block
default	20:42:14.749728-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C7:1][0x10ee82000] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(45ms) flight_time(32ms) rtt(32ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	20:42:14.749794-0500	MobileJarvisNative	nw_flow_connected [C7 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	20:42:14.749927-0500	MobileJarvisNative	quic_stream_create_inbound [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] creating inbound stream 3
default	20:42:14.750158-0500	MobileJarvisNative	quic_stream_create_inbound [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] creating inbound stream 7
default	20:42:14.750349-0500	MobileJarvisNative	quic_stream_create_inbound [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] creating inbound stream 11
default	20:42:14.750571-0500	MobileJarvisNative	quic_stream_create_inbound [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] creating inbound stream 15
default	20:42:14.751214-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C7:1][0x10ee82000] Returning from session update block
default	20:42:14.751497-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C7:1][0x10ee82000] Returning from session update block
default	20:42:14.922549-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Now acquiring workspace assertion with state: ForegroundFocal.
default	20:42:14.922949-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-2064347 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	20:42:14.923155-0500	runningboardd	Assertion 33-34-2064347 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as active
default	20:42:14.924112-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	20:42:14.925486-0500	runningboardd	Invalidating assertion 33-34-2064340 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	20:42:14.925559-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:9529] Dropping launch assertion.
default	20:42:14.925753-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.925843-0500	healthd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.925940-0500	CommCenter	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.926237-0500	backboardd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.926260-0500	locationd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.926563-0500	symptomsd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.926706-0500	dasd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.926908-0500	MobileJarvisNative	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	20:42:14.926964-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.927253-0500	useractivityd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.927282-0500	WirelessRadioManagerd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.927623-0500	wifid	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.927694-0500	UserEventAgent	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.928255-0500	watchdogd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.928334-0500	PerfPowerServices	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:14.928627-0500	gamepolicyd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	20:42:15.040111-0500	MobileJarvisNative	0x105a87118 ID=0 Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> received response, status 304 content U
default	20:42:15.040640-0500	MobileJarvisNative	[C6] event: client:connection_idle @0.351s
default	20:42:15.040767-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> done using Connection 6
default	20:42:15.040899-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> summary for task success {transaction_duration_ms=352, response_status=304, connection=6, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=48, secure_connection_duration_ms=47, private_relay=false, request_start_ms=55, request_duration_ms=0, response_start_ms=351, response_duration_ms=0, request_bytes=509, request_throughput_kbps=1301, response_bytes=373, response_throughput_kbps=453, cache_hit=true}
default	20:42:15.041054-0500	MobileJarvisNative	Task <5B9F03B0-14B2-437D-A01E-9A0A9045AFF2>.<1> finished successfully
default	20:42:15.041734-0500	MobileJarvisNative	quic_frame_write_CONNECTION_CLOSE [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] sending APPLICATION_CLOSE, code 0x100, reason <null>
default	20:42:15.041762-0500	MobileJarvisNative	[C7 84ACAD77-11FC-483D-BD18-BA30C79B8D4D IPv6#8bd569af.443 quic-connection, url hash: 7cb98f63, tls, definite, attribution: developer] cancel
default	20:42:15.043451-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	20:42:15.043616-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2064340:FBApplicationProcess" age:00:00:01  id:51539641016 [System: SysAct]
default	20:42:15.043839-0500	SpringBoard	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.044049-0500	CommCenter	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.044152-0500	healthd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.044244-0500	MobileJarvisNative	[C7 84ACAD77-11FC-483D-BD18-BA30C79B8D4D IPv6#8bd569af.443 quic-connection, url hash: 7cb98f63, tls, definite, attribution: developer] cancelled
	[C7 1173D2BB-6B81-4E95-BFEE-B6D0B07A75C4 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.61741<->IPv6#8bd569af.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Duration: 0.352s, QUIC @0.000s took 0.000s, TLS 1.3 took 0.045s
	bytes in/out: 5919/5745, packets in/out: 12/11, rtt: 0.060s, retransmitted bytes: 0, out-of-order bytes: 512
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	20:42:15.044605-0500	backboardd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.044759-0500	MobileJarvisNative	nw_flow_disconnected [C7 IPv6#8bd569af.443 cancelled channel-flow ((null))] Output protocol disconnected
default	20:42:15.044841-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C7] reporting state cancelled
default	20:42:15.044918-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.044943-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.044966-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.044991-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045016-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045041-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045248-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045274-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045300-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045325-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045352-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045377-0500	MobileJarvisNative	nw_flow_disconnected [C6.1.1.1 IPv6#8bd569af.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	20:42:15.045413-0500	MobileJarvisNative	quic_conn_log_summary [C6.1.1.1:2] [-019a475523ee327c4d98c65578ee2a25cbe9b428] 
	Connection attempts: 1, RETRY received: no, PTOs: 1
	Early data: no, Keep-alives sent/acknowledged: 0/0, ECN state: unsupported, L4S: disabled
	RTT: base 25 ms, network 271 ms, latest 271 ms, minimum 25 ms, smoothed 60 ms (variance 70 ms)
	Path MTU: 1280, minimum MSS: 1232
	Migration events: 0, paths validated: 0
	Inbound unidirectional/bidirectional streams: 4/0
	Outbound unidirectional/bidirectional streams: 1/1
	DATA_BLOCKED frames sent/received: 0/0
	STREAM_DATA_BLOCKED frames sent/received: 0/0
default	20:42:15.045444-0500	MobileJarvisNative	Connection 6: cleaning up
default	20:42:15.045470-0500	MobileJarvisNative	[C6 A57B5E53-7FB2-424F-9BA0-7AB2C435087C Hostname#55d6789d:443 quic-connection, url hash: 7cb98f63, definite, attribution: developer] cancel
default	20:42:15.045507-0500	MobileJarvisNative	[C6 A57B5E53-7FB2-424F-9BA0-7AB2C435087C Hostname#55d6789d:443 quic-connection, url hash: 7cb98f63, definite, attribution: developer] cancelled
	[C6.1.1.1 1173D2BB-6B81-4E95-BFEE-B6D0B07A75C4 2603:8080:2300:1047:fdf2:88c7:705a:ccf4.61741<->IPv6#8bd569af.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Privacy Stance: Not Eligible
	Duration: 0.361s, DNS @0.001s took 0.002s, QUIC @0.004s took 0.048s
	bytes in/out: 5919/5745, packets in/out: 12/11, rtt: 0.060s, retransmitted bytes: 0, out-of-order bytes: 512
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	20:42:15.046526-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state cancelled
default	20:42:15.046853-0500	symptomsd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047070-0500	locationd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047405-0500	audiomxd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047455-0500	dasd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047724-0500	useractivityd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047748-0500	WirelessRadioManagerd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.047926-0500	wifid	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.048024-0500	UserEventAgent	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.048119-0500	PerfPowerServices	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.048428-0500	watchdogd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	20:42:15.048480-0500	gamepolicyd	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	20:42:15.048553-0500	MobileJarvisNative	Received state update for 9529 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	20:42:15.113061-0500	runningboardd	Invalidating assertion 33-9529-2064345 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:15.255810-0500	MobileJarvisNative	0x105a86bd8 ID=0 Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> received response, status 200 content U
default	20:42:15.257345-0500	MobileJarvisNative	[0x109f41800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	20:42:15.262307-0500	MobileJarvisNative	[0x109f41800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.262712-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> response ended
default	20:42:15.262932-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.012s
default	20:42:15.263057-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> done using Connection 3
default	20:42:15.263200-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> summary for task success {transaction_duration_ms=1017, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=47, connect_duration_ms=183, secure_connection_duration_ms=181, private_relay=false, request_start_ms=241, request_duration_ms=2, response_start_ms=1009, response_duration_ms=7, request_bytes=576, request_throughput_kbps=258, response_bytes=1663, response_throughput_kbps=218, cache_hit=true}
default	20:42:15.263274-0500	MobileJarvisNative	Task <567D16EA-EC27-40F5-8B0E-F6456BDF93AD>.<1> finished successfully
default	20:42:15.264031-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9529-2064348 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	20:42:15.264285-0500	runningboardd	Assertion 33-9529-2064348 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as start-time-defining assertions exist
default	20:42:15.266967-0500	MobileJarvisNative	[0x10ef1cb40] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	20:42:15.295667-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:15.298088-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.048s
default	20:42:15.298252-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> now using Connection 3
default	20:42:15.298854-0500	MobileJarvisNative	0x105a86bd8 ID=4 Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> sent request, body N 0
default	20:42:15.709779-0500	MobileJarvisNative	0x105a86bd8 ID=4 Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> received response, status 200 content U
default	20:42:15.751492-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> response ended
default	20:42:15.752185-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.501s
default	20:42:15.752327-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> done using Connection 3
default	20:42:15.752414-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> summary for task success {transaction_duration_ms=455, response_status=200, connection=3, reused=1, reused_after_ms=35, request_start_ms=2, request_duration_ms=0, response_start_ms=413, response_duration_ms=42, request_bytes=1270, request_throughput_kbps=2157, response_bytes=16372, response_throughput_kbps=378, cache_hit=true}
default	20:42:15.752504-0500	MobileJarvisNative	Task <092C4EAD-C5EA-4723-86F6-63F47F4688DC>.<2> finished successfully
default	20:42:15.772378-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	20:42:15.772448-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	20:42:15.772514-0500	MobileJarvisNative	[0x109f41e00] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	20:42:15.784737-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	20:42:15.786022-0500	MobileJarvisNative	[0x10ef1c640] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	20:42:15.788414-0500	MobileJarvisNative	[0x10ef1c640] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.788480-0500	MobileJarvisNative	<private>
default	20:42:15.788548-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	20:42:15.792248-0500	MobileJarvisNative	[0x10ef1c640] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	20:42:15.820257-0500	MobileJarvisNative	Executing query <HKSampleQuery 2803F4 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.823616-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.828607-0500	MobileJarvisNative	Stopping query <HKSampleQuery 2803F4 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.828638-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.833146-0500	MobileJarvisNative	Executing query <HKSampleQuery 23DE14 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.833527-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.834037-0500	MobileJarvisNative	Stopping query <HKSampleQuery 23DE14 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.834064-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.835165-0500	MobileJarvisNative	Executing query <HKSampleQuery ECA14E QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.835553-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.836107-0500	MobileJarvisNative	Stopping query <HKSampleQuery ECA14E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.836142-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.839698-0500	MobileJarvisNative	Executing query <HKSampleQuery 91BE78 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.840053-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.840482-0500	MobileJarvisNative	Stopping query <HKSampleQuery 91BE78 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.840513-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.841470-0500	MobileJarvisNative	Executing query <HKSampleQuery F8F2DD QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.841811-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.842422-0500	MobileJarvisNative	Stopping query <HKSampleQuery F8F2DD QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.842449-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.845319-0500	MobileJarvisNative	Executing query <HKSampleQuery 3834BD QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.845644-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.846247-0500	MobileJarvisNative	Stopping query <HKSampleQuery 3834BD QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.846298-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.846878-0500	MobileJarvisNative	Executing query <HKSampleQuery 568E4D QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.847191-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.847624-0500	MobileJarvisNative	Stopping query <HKSampleQuery 568E4D QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.847676-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.850691-0500	MobileJarvisNative	Executing query <HKSampleQuery 7FA78E QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.851048-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.851453-0500	MobileJarvisNative	Stopping query <HKSampleQuery 7FA78E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.851481-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.852176-0500	MobileJarvisNative	Executing query <HKSampleQuery 034FE4 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.852505-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.852900-0500	MobileJarvisNative	Stopping query <HKSampleQuery 034FE4 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.852926-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.855891-0500	MobileJarvisNative	Executing query <HKSampleQuery 857E12 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.856189-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.856846-0500	MobileJarvisNative	Stopping query <HKSampleQuery 857E12 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.856887-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.857605-0500	MobileJarvisNative	Executing query <HKSampleQuery 0CA0BA QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.857800-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.858217-0500	MobileJarvisNative	Stopping query <HKSampleQuery 0CA0BA QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.858244-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.860904-0500	MobileJarvisNative	Executing query <HKSampleQuery 9A336E QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.861155-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.861536-0500	MobileJarvisNative	Stopping query <HKSampleQuery 9A336E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.861592-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.862157-0500	MobileJarvisNative	Executing query <HKSampleQuery D4B704 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	20:42:15.862457-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.862754-0500	MobileJarvisNative	Stopping query <HKSampleQuery D4B704 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.862804-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.865164-0500	MobileJarvisNative	Executing query <HKSampleQuery 972CDA QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	20:42:15.865603-0500	MobileJarvisNative	[0x10ef1c280] activating connection: mach=false listener=false peer=false name=(anonymous)
default	20:42:15.865895-0500	MobileJarvisNative	Stopping query <HKSampleQuery 972CDA QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	20:42:15.865925-0500	MobileJarvisNative	[0x10ef1c280] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	20:42:15.866210-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:15.866730-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.616s
default	20:42:15.866842-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> now using Connection 3
default	20:42:15.867310-0500	MobileJarvisNative	0x105a87118 ID=8 Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> sent request, body S 109
default	20:42:16.292072-0500	runningboardd	Invalidating assertion 33-9529-2064348 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:16.602164-0500	MobileJarvisNative	0x105a87118 ID=8 Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> received response, status 200 content K
default	20:42:16.603069-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> response ended
default	20:42:16.603379-0500	MobileJarvisNative	[C3] event: client:connection_idle @2.353s
default	20:42:16.603507-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> done using Connection 3
default	20:42:16.603708-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> summary for task success {transaction_duration_ms=737, response_status=200, connection=3, reused=1, reused_after_ms=115, request_start_ms=0, request_duration_ms=0, response_start_ms=735, response_duration_ms=1, request_bytes=922, request_throughput_kbps=3204, response_bytes=886, response_throughput_kbps=461, cache_hit=true}
default	20:42:16.603791-0500	MobileJarvisNative	Task <9507EF60-29C8-4C99-B45B-651EB4FFB910>.<3> finished successfully
default	20:42:16.605799-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9529-2064353 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	20:42:16.605973-0500	runningboardd	Assertion 33-9529-2064353 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as start-time-defining assertions exist
default	20:42:16.629062-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	20:42:16.629189-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	20:42:16.629400-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	20:42:16.629425-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	20:42:16.629475-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	20:42:16.629576-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	20:42:16.629626-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	20:42:16.629849-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	20:42:16.629901-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	20:42:16.629950-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	20:42:16.629998-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	20:42:16.630072-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	20:42:16.633846-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	20:42:16.635654-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000102fcbc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001030b055c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102c63700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000102c66194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	20:42:16.636151-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	20:42:16.636465-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	20:42:16.637398-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	20:42:16.637451-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	20:42:16.637649-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	20:42:16.637727-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	20:42:16.637775-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	20:42:16.637825-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	20:42:16.637902-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	20:42:16.638000-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	20:42:16.638025-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	20:42:16.638108-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	20:42:16.638158-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	20:42:16.638295-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	20:42:16.638586-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	20:42:16.642282-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000102fcbc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001030b055c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102c63700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000102c66194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	20:42:16.642738-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	20:42:16.643107-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	20:42:16.645267-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:16.646625-0500	MobileJarvisNative	[C3] event: client:connection_reused @2.396s
default	20:42:16.646841-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> now using Connection 3
default	20:42:16.647463-0500	MobileJarvisNative	0x10efa8018 ID=12 Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> sent request, body N 0
default	20:42:16.693691-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	20:42:16.704628-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:16.704929-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:16.706574-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> now using Connection 3
default	20:42:16.707145-0500	MobileJarvisNative	0x105a87118 ID=16 Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> sent request, body N 0
default	20:42:16.707242-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> now using Connection 3
default	20:42:16.707705-0500	MobileJarvisNative	0x105a87658 ID=20 Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> sent request, body N 0
default	20:42:16.825023-0500	MobileJarvisNative	0x10efa8018 ID=12 Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> received response, status 200 content U
default	20:42:16.825328-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> response ended
default	20:42:16.825692-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> done using Connection 3
default	20:42:16.825861-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> summary for task success {transaction_duration_ms=179, response_status=200, connection=3, reused=1, reused_after_ms=43, request_start_ms=1, request_duration_ms=0, response_start_ms=179, response_duration_ms=0, request_bytes=1202, request_throughput_kbps=1969, response_bytes=1240, response_throughput_kbps=2402, cache_hit=true}
default	20:42:16.825894-0500	MobileJarvisNative	Task <FB5FDF7F-8A05-4788-8C7B-CD07D20C1F1F>.<4> finished successfully
default	20:42:16.841820-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:16.842394-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> now using Connection 3
default	20:42:16.842848-0500	MobileJarvisNative	0x10f5f4718 ID=24 Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> sent request, body N 0
default	20:42:17.094491-0500	MobileJarvisNative	0x105a87658 ID=20 Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> received response, status 200 content U
default	20:42:17.096443-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> response ended
default	20:42:17.097213-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> done using Connection 3
default	20:42:17.097739-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> summary for task success {transaction_duration_ms=390, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=387, response_duration_ms=3, request_bytes=1238, request_throughput_kbps=5351, response_bytes=4415, response_throughput_kbps=1410, cache_hit=true}
default	20:42:17.097860-0500	MobileJarvisNative	Task <2089E679-0DE3-4BF6-98C8-234E5FC7DE78>.<6> finished successfully
default	20:42:17.098292-0500	MobileJarvisNative	0x10f5f4718 ID=24 Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> received response, status 200 content U
default	20:42:17.099370-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> response ended
default	20:42:17.100368-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> done using Connection 3
default	20:42:17.101241-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> summary for task success {transaction_duration_ms=257, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=255, response_duration_ms=2, request_bytes=1202, request_throughput_kbps=3978, response_bytes=1239, response_throughput_kbps=594, cache_hit=true}
default	20:42:17.101316-0500	MobileJarvisNative	Task <381090BC-0EE3-407B-B6E7-181FEB992E40>.<7> finished successfully
default	20:42:17.128055-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:17.130742-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> now using Connection 3
default	20:42:17.131475-0500	MobileJarvisNative	0x10f5f4718 ID=28 Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> sent request, body S 272
default	20:42:17.175237-0500	MobileJarvisNative	0x105a87118 ID=16 Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> received response, status 200 content U
default	20:42:17.208692-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:17.217015-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> now using Connection 3
default	20:42:17.218789-0500	MobileJarvisNative	0x10f5f4fd8 ID=32 Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> sent request, body N 0
default	20:42:17.289938-0500	MobileJarvisNative	0x10f5f4718 ID=28 Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> received response, status 200 content U
default	20:42:17.291640-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> response ended
default	20:42:17.293065-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> done using Connection 3
default	20:42:17.293210-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> summary for task success {transaction_duration_ms=161, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=1, response_start_ms=158, response_duration_ms=3, request_bytes=1237, request_throughput_kbps=1125, response_bytes=1207, response_throughput_kbps=390, cache_hit=true}
default	20:42:17.293488-0500	MobileJarvisNative	Task <119CCB5B-B450-404D-82AD-63B70AC19AE1>.<8> finished successfully
default	20:42:17.307833-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	20:42:17.307971-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	20:42:17.308228-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	20:42:17.308322-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	20:42:17.308414-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	20:42:17.308526-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	20:42:17.308594-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	20:42:17.308713-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	20:42:17.308780-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	20:42:17.308837-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	20:42:17.308900-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	20:42:17.308945-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	20:42:17.309447-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	20:42:17.311371-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000102fcbc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x00000001030b055c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000102c63700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000102c66194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	20:42:17.312007-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	20:42:17.312618-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	20:42:17.348974-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> response ended
default	20:42:17.349766-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> done using Connection 3
default	20:42:17.350032-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> summary for task success {transaction_duration_ms=644, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=469, response_duration_ms=174, request_bytes=1365, request_throughput_kbps=3516, response_bytes=62011, response_throughput_kbps=346, cache_hit=true}
default	20:42:17.350500-0500	MobileJarvisNative	Task <42DE06E8-9ED3-4510-A567-CF3FBF088E98>.<5> finished successfully
default	20:42:17.351026-0500	MobileJarvisNative	0x10f5f4fd8 ID=32 Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> received response, status 200 content U
default	20:42:17.353579-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> response ended
default	20:42:17.354268-0500	MobileJarvisNative	[C3] event: client:connection_idle @3.102s
default	20:42:17.354782-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> done using Connection 3
default	20:42:17.355103-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> summary for task success {transaction_duration_ms=142, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=1, response_start_ms=139, response_duration_ms=2, request_bytes=1141, request_throughput_kbps=940, response_bytes=962, response_throughput_kbps=349, cache_hit=true}
default	20:42:17.355214-0500	MobileJarvisNative	Task <7E519011-50D4-4D1F-A278-F3C961DEAA13>.<9> finished successfully
default	20:42:17.384541-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:17.385840-0500	MobileJarvisNative	[C3] event: client:connection_reused @3.135s
default	20:42:17.386004-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> now using Connection 3
default	20:42:17.386507-0500	MobileJarvisNative	0x10f5f5198 ID=36 Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> sent request, body N 0
default	20:42:17.624701-0500	MobileJarvisNative	0x10f5f5198 ID=36 Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> received response, status 200 content U
default	20:42:17.625674-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> response ended
default	20:42:17.627151-0500	MobileJarvisNative	[C3] event: client:connection_idle @3.376s
default	20:42:17.628298-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> done using Connection 3
default	20:42:17.628575-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> summary for task success {transaction_duration_ms=242, response_status=200, connection=3, reused=1, reused_after_ms=33, request_start_ms=1, request_duration_ms=0, response_start_ms=238, response_duration_ms=3, request_bytes=1186, request_throughput_kbps=2373, response_bytes=736, response_throughput_kbps=202, cache_hit=true}
default	20:42:17.628669-0500	MobileJarvisNative	Task <48220076-AF4F-493A-9566-B436C2F09065>.<10> finished successfully
default	20:42:17.630446-0500	runningboardd	Invalidating assertion 33-9529-2064353 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]
default	20:42:17.645689-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	20:42:17.647349-0500	MobileJarvisNative	[C3] event: client:connection_reused @3.397s
default	20:42:17.647617-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> now using Connection 3
default	20:42:17.648298-0500	MobileJarvisNative	0x10f5f5198 ID=40 Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> sent request, body N 0
default	20:42:17.888063-0500	MobileJarvisNative	0x10f5f5198 ID=40 Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> received response, status 200 content U
default	20:42:17.889579-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> response ended
default	20:42:17.891302-0500	MobileJarvisNative	[C3] event: client:connection_idle @3.640s
default	20:42:17.892314-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> done using Connection 3
default	20:42:17.892719-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> summary for task success {transaction_duration_ms=245, response_status=200, connection=3, reused=1, reused_after_ms=20, request_start_ms=1, request_duration_ms=0, response_start_ms=241, response_duration_ms=3, request_bytes=1245, request_throughput_kbps=1649, response_bytes=748, response_throughput_kbps=213, cache_hit=true}
default	20:42:17.892976-0500	MobileJarvisNative	Task <D78F9546-01B4-4ED9-8385-611C9B313816>.<11> finished successfully
default	20:42:17.895104-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-9529-2064354 target:9529 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	20:42:17.895479-0500	runningboardd	Assertion 33-9529-2064354 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:9529]) will be created as inactive as start-time-defining assertions exist
