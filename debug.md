default	22:05:52.428198-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 2.8535e+06 touches: {(
    <UITouch: 0x865eb9340> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x866921d20>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x8657f8000; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x869215cc0; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {143.66665649414062, 606.66665649414062}; previous location in window: {143.66665649414062, 606.66665649414062}; location in view: {23.666656494140625, 49.666656494140625}; previous location in view: {23.666656494140625, 49.666656494140625}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x8654d0000; baseClass = UITapGestureRecognizer; s
default	22:05:52.592473-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	22:05:52.595081-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	22:05:52.602077-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:05:52.602118-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:05:52.602444-0500	SpringBoard	Created <FBWorkspace: 0x86c4959a0; <FBApplicationProcess: 0x86cdc2e80; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	22:05:52.602642-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	22:05:52.604543-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	22:05:52.604624-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-1988158 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:05:52.604757-0500	runningboardd	Assertion 33-34-1988158 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	22:05:52.607583-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:05:52.607609-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	22:05:52.612940-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	22:05:52.613367-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.031948 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	22:05:52.613456-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde96c000>)
default	22:05:52.613486-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	22:05:52.613755-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbde9881e0> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdeb44f60> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdeb450e0> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdec7d770> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdeb44840> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbde98abe0> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdeb45b30> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbde988840> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdeb440c0> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/6465D47F-91BA-4977-A382-2933F671910C/tmp" }
		"HOME" => <string: 0xbdeb44c90> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/6465D47F-91BA-4977-A382-2933F671910C" }
		"CFFIXED_USER_HOME" => <string: 0xbdeb44210> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/6465D47F-91BA-4977-A382-2933F671910C" }
	}
	"_AdditionalProperties" => <dictionary: 0xbde98b120> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbde98bba0> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbde988660> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdec7c4e0> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdec7e850> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdeb45680> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[3303][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdeb447b0> { count = 1, capacity = 8, contents =
		0: <string: 0xbdeb478a0> { length = 113, contents = "/var/containers/Bundle/Application/FF8E42D0-C2BB-479A-AEE0-B9EB6F96D4D7/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdeb464c0> { length = 113, contents = "/var/containers/Bundle/Application/FF8E42D0-C2BB-479A-AEE0-B9EB6F96D4D7/MobileJarvisNative.app/MobileJarvisNative" }
}
default	22:05:52.614712-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x8667aef40; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	22:05:52.616250-0500	kernel	/private/var/containers/Bundle/Application/FF8E42D0-C2BB-479A-AEE0-B9EB6F96D4D7/MobileJarvisNative.app/MobileJarvisNative[859] ==> container
default	22:05:52.619405-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] Memory Limits: active 2098 inactive 2098
 <private>
default	22:05:52.619502-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] This process will be managed.
default	22:05:52.619528-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
error	22:05:52.619748-0500	kernel	Sandbox: MobileJarvisNative(859) deny(1) sysctl-read kern.bootargs
default	22:05:52.620204-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.620578-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-1988159 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:05:52.620606-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:05:52.620656-0500	runningboardd	Assertion 33-33-1988159 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as active
default	22:05:52.621428-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d4ec40; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581c7090; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 7, 2025 at 10:05:52 PM CDT;}
default	22:05:52.621460-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d4e5c0 10-07-2025 22:05:52, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:05:52.622179-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] Set jetsam priority to 100 [0] flag[1]
default	22:05:52.622205-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] Resuming task.
default	22:05:52.622230-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] Set darwin role to: UserInteractiveFocal
default	22:05:52.623369-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Bootstrap success!
default	22:05:52.623718-0500	SpringBoard	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.623744-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Setting process task state to: Running
default	22:05:52.623770-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Setting process visibility to: Foreground
default	22:05:52.623925-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Registering event dispatcher after bootstrap
default	22:05:52.624147-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Initial launch assertion state: ForegroundFocal.
default	22:05:52.624197-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] set Memory Limits to Soft Active (2098)
default	22:05:52.624604-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] Set Carplay mode to: 0
default	22:05:52.624633-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86cdc2e80; app<com.hightowerai.MobileJarvisNative>:859(v83CB9)>
default	22:05:52.624706-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86cdc0300; type: MainTransition; transitionID: 06EDC290-FDD5-4677-9C35-17D991C18DE9; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:05:52.624737-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] visiblity is yes
default	22:05:52.624761-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] reported to RB as running
default	22:05:52.625072-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86ed98720> {
    <SBSwitcherModifierEventResponse: 0x86ce2db90> {
	    <SBTimerEventSwitcherEventResponse: 0x86ce2f360; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86ce2cb70>;
	};
    <SBSwitcherModifierEventResponse: 0x86b59aaf0> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86c426f40; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86500e310; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86c426840; visible: YES; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x86ce35950; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	22:05:52.625159-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:05:52.625282-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.625560-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.626621-0500	CommCenter	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.626650-0500	CommCenter	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.627165-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1988158:FBApplicationProcess" age:00:00:00  id:51539641834 [System: PrevIdle SysAct]
default	22:05:52.629425-0500	healthd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.630476-0500	healthd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.638555-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86c3e9980; type: MainTransition; transitionID: 06EDC290-FDD5-4677-9C35-17D991C18DE9; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:05:52.643930-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x867ce6f00; type: SceneReady; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865f56220; contentOrientation: "portrait (1)"; lastInteractionTime: 200767; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868c9b840; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:05:52.645267-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:05:52.647804-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86b59bc60.
default	22:05:52.647830-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Registered new scene: <FBUIApplicationWorkspaceScene: 0x865c5ea00; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	22:05:52.647855-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	22:05:52.647888-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Workspace interruption policy did change: reconnect
default	22:05:52.648049-0500	SpringBoard	<BSCompoundAssertion:0x8656a2b00> (SBApplicationAppProtectionAssistant: 0x8656a0780 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x86bfc38a0 count:1
default	22:05:52.648164-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	22:05:52.648200-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	22:05:52.648296-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-1988160 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	22:05:52.648399-0500	runningboardd	Assertion 33-34-1988160 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as inactive as originator process has not exited
default	22:05:52.648751-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:859 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [859]; recentSceneIdentityTokensByPID: {859: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:05:52.648791-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:859 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [859]; recentSceneIdentityTokensByPID: {859: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	22:05:52.649916-0500	SpringBoard	Now tracking: <FBScene: 0x869270b00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:05:52.650052-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	22:05:52.650372-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	22:05:52.650396-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	22:05:52.650443-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	22:05:52.650540-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	22:05:52.650587-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	22:05:52.652184-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:05:52.653673-0500	backboardd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.653732-0500	backboardd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.657571-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x868e880c0; pid: 859; taskState: Running; visibility: Foreground>
default	22:05:52.658041-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:05:52.661206-0500	symptomsd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.661392-0500	symptomsd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.664361-0500	locationd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.664554-0500	locationd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.664731-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 859;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	22:05:52.664884-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":859, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:05:52.664947-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":859, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	22:05:52.665023-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":859, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	22:05:52.665437-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:05:52.666984-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":859, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:05:52.667031-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	22:05:52.667088-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	22:05:52.667165-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	22:05:52.667201-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	22:05:52.667327-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	22:05:52.667896-0500	dasd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.667943-0500	dasd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.668241-0500	WirelessRadioManagerd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.668441-0500	WirelessRadioManagerd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.672498-0500	useractivityd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.672580-0500	useractivityd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.675100-0500	UsageTrackingAgent	Received end event for com.hightowerai.MobileJarvisNative without a corresponding start event. This may be because the event was manually ended due to a backlight end event.
default	22:05:52.675245-0500	PerfPowerServices	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.675359-0500	PerfPowerServices	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.675384-0500	audiomxd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.675513-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.676024-0500	UserEventAgent	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.676165-0500	UserEventAgent	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.676379-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	22:05:52.676567-0500	wifid	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.676677-0500	wifid	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.678410-0500	callservicesd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.678605-0500	callservicesd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.678834-0500	watchdogd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.678937-0500	watchdogd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.680646-0500	MobileJarvisNative	[0x102583c60] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	22:05:52.680743-0500	MobileJarvisNative	[0x103488000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	22:05:52.685422-0500	MobileJarvisNative	Initializing connection
default	22:05:52.685447-0500	MobileJarvisNative	Removing all cached process handles
default	22:05:52.685591-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	22:05:52.685621-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	22:05:52.685650-0500	MobileJarvisNative	[0x103488200] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:05:52.685677-0500	MobileJarvisNative	[0x1034b4140] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:52.685954-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	22:05:52.685978-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:05:52.686008-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	22:05:52.686338-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] as ready
default	22:05:52.686588-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	22:05:52.686610-0500	MobileJarvisNative	Handshake succeeded
default	22:05:52.686639-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	22:05:52.688703-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:84235FA0-AF4A-49AD-A5FA-E5BEDEE75AC4 pid:859 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 859;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:05:52.688930-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xc9bfa7680; IOHIDEventSystemConnectionRef: 0xc997f9a00; vpid: 859(v83CB9); taskPort: 0x117BE7; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:84235FA0-AF4A-49AD-A5FA-E5BEDEE75AC4 pid:859 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 859;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	22:05:52.689141-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	22:05:52.689197-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	22:05:52.690531-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	22:05:52.690577-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	22:05:52.692981-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	22:05:52.693032-0500	MobileJarvisNative	Creating new background assertion
default	22:05:52.693062-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x103550230>
default	22:05:52.693289-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-859-1988161 target:859 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	22:05:52.693377-0500	runningboardd	Assertion 33-859-1988161 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as inactive as start-time-defining assertions exist
default	22:05:52.693731-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:05:52.694125-0500	MobileJarvisNative	Created background task <private>.
default	22:05:52.694525-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	22:05:52.695511-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	22:05:52.695535-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Connection established.
default	22:05:52.695560-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10347da00 <private>> attempting immediate handshake from activate
default	22:05:52.695585-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x86c1b2450>
default	22:05:52.695609-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Connection to remote process established!
default	22:05:52.695847-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x584b] to process 0x86cdc2e80 (watchdog: 19.93s)
default	22:05:52.696166-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	22:05:52.697223-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x10347da00 <private>> sent handshake
default	22:05:52.697591-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1034e1c60>
default	22:05:52.697653-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x866229aa0; pid: 859; taskState: Running; visibility: Foreground>
default	22:05:52.697875-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.697906-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.697957-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698016-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698043-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698069-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698095-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698118-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698144-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698168-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698268-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698326-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.698376-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x866229c00; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] remnants=0>
default	22:05:52.699449-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1034b4640> for initial
default	22:05:52.699785-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1034b4640> for CADisplay KVO
default	22:05:52.701942-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	22:05:52.702017-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	22:05:52.702126-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	22:05:52.703056-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	22:05:52.704471-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	22:05:52.704545-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	22:05:52.704605-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:05:52.704720-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:05:52.704806-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	22:05:52.704828-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	22:05:52.704945-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	22:05:52.705003-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	22:05:52.705779-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	22:05:52.705979-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	22:05:52.707132-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	22:05:52.708400-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	22:05:52.708633-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	22:05:52.708658-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	22:05:52.708913-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	22:05:52.708977-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	22:05:52.709031-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	22:05:52.709427-0500	gamepolicyd	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.709584-0500	gamepolicyd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:05:52.709624-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	22:05:52.709939-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	22:05:52.710170-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	22:05:52.712728-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	22:05:52.712750-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	22:05:52.712821-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	22:05:52.712996-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	22:05:52.713025-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	22:05:52.714798-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	22:05:52.714917-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	22:05:52.715063-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	22:05:52.716275-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	22:05:52.718786-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:05:52.718811-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x103550230>
default	22:05:52.718836-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	22:05:52.718859-0500	MobileJarvisNative	Created background task <private>.
default	22:05:52.718919-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	22:05:52.719053-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.719099-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.719289-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.720936-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1035dd5e0>; with scene: <UIWindowScene: 0x10258ccc0>
default	22:05:52.721280-0500	MobileJarvisNative	0x103614960 setDelegate:<0x1036148a0 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	22:05:52.721456-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.721551-0500	MobileJarvisNative	[0x1035dd3b0] Initialized with scene: <UIWindowScene: 0x10258ccc0>; behavior: <_UIEventDeferringBehavior_iOS: 0x1034e2980>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	22:05:52.721826-0500	MobileJarvisNative	[0x1034b5040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:52.722655-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	22:05:52.723130-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.725373-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.726080-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
error	22:05:52.726913-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	22:05:52.727298-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.727544-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.727745-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:05:52.727768-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	22:05:52.727794-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	22:05:52.727819-0500	MobileJarvisNative	startConnection
default	22:05:52.727893-0500	CommCenter	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.727941-0500	healthd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.728158-0500	backboardd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.728245-0500	locationd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.728405-0500	symptomsd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.728553-0500	dasd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.728914-0500	MobileJarvisNative	[0x1034b5900] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	22:05:52.728964-0500	callservicesd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.729120-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	22:05:52.729151-0500	WirelessRadioManagerd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.729634-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.729861-0500	useractivityd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.729888-0500	UserEventAgent	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.730237-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(859) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	22:05:52.730503-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	22:05:52.730859-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.730917-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.731072-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.731281-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:05:52.731312-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.731374-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.731688-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	22:05:52.731787-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.733828-0500	backboardd	new deferring rules for pid:34: [
    [34-6119]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-611A]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 859>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <tok
default	22:05:52.733952-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	22:05:52.734261-0500	wifid	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.735212-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 859>
]
default	22:05:52.735354-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x103550c30; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	22:05:52.735384-0500	MobileJarvisNative	observerPolicyDidChange: 0x103550c30 -> <_UIKeyWindowSceneObserver: 0x103614ab0>
default	22:05:52.735451-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 859>
]
default	22:05:52.736212-0500	PerfPowerServices	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.736390-0500	watchdogd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.736546-0500	gamepolicyd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:05:52.759754-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	22:05:52.762855-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:05:52.762983-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	22:05:52.765944-0500	MobileJarvisNative	<UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0) Scene updated orientation preferences: none -> ( Pu )
default	22:05:52.767368-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	22:05:52.767582-0500	MobileJarvisNative	Key window API is scene-level: YES
default	22:05:52.767654-0500	MobileJarvisNative	UIWindowScene: 0x10258ccc0: Window became key in scene: UIWindow: 0x1035f0000; contextId: 0x25CB05DB: reason: UIWindowScene: 0x10258ccc0: Window requested to become key in scene: 0x1035f0000
default	22:05:52.767689-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x10258ccc0; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x1035f0000; reason: UIWindowScene: 0x10258ccc0: Window requested to become key in scene: 0x1035f0000
default	22:05:52.767720-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x1035f0000; contextId: 0x25CB05DB; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.767749-0500	MobileJarvisNative	[0x1035dd3b0] Begin local event deferring requested for token: 0x103465860; environments: 1; reason: UIWindowScene: 0x10258ccc0: Begin event deferring in keyboardFocus for window: 0x1035f0000
default	22:05:52.768938-0500	backboardd	new deferring rules for pid:859: [[859-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x25CB05DB; pid: 859>; reason: …gin event deferring in keyboardFocus for window: 0x1035f0000]
default	22:05:52.769200-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	22:05:52.769267-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(859) setClientFocusContext
    focusContext:<contextID:634062299 sceneID:com.hightowerai.MobileJarvisNative-default>
default	22:05:52.770159-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 859 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.770335-0500	SpringBoard	arbiter: arbiter requested pid 859 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.770361-0500	SpringBoard	[coordinator] using arbiter suggested pid 859 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.770411-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.770714-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 859; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:859>
default	22:05:52.770920-0500	MobileJarvisNative	[0x103780640] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	22:05:52.770977-0500	MobileJarvisNative	<SOServiceConnection: 0x103731420>: new XPC connection
default	22:05:52.771219-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	22:05:52.771753-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	22:05:52.771855-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	22:05:52.772063-0500	SpringBoard	set currentFocus PID:859 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	22:05:52.772696-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.772865-0500	MobileJarvisNative	establishing connection to agent
default	22:05:52.772952-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 859>,
    <token: 0x25CB05DB; pid: 859>
]
default	22:05:52.773044-0500	MobileJarvisNative	[0x103550870] Session created.
default	22:05:52.773072-0500	MobileJarvisNative	[0x103550870] Session created from connection [0x103488e00]
default	22:05:52.773789-0500	SpringBoard	Scene <FBScene: 0x869270b00; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	22:05:52.773838-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	22:05:52.773864-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 859>,
    <token: 0x25CB05DB; pid: 859>
]
default	22:05:52.773895-0500	backboardd	new scene host settings: contextID:25CB05DB <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	22:05:52.773946-0500	MobileJarvisNative	[0x103488e00] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	22:05:52.773971-0500	MobileJarvisNative	[0x103550870] Session activated
default	22:05:52.774076-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x103550c30; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	22:05:52.774101-0500	MobileJarvisNative	observerPolicyDidChange: 0x103550c30 -> <_UIKeyWindowSceneObserver: 0x103614ab0>
default	22:05:52.777868-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-859-1988162 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:05:52.777899-0500	runningboardd	Assertion 33-859-1988162 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as inactive as start-time-defining assertions exist
default	22:05:52.785526-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	22:05:52.785556-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	22:05:52.785587-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	22:05:52.786890-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	22:05:52.787563-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [65EBFF51-DD7E-4DC3-B6D4-D263692366A7] (reporting strategy default)>
default	22:05:52.787586-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [76136752-6C63-475F-865E-CF7A833231EF] (reporting strategy default)>
default	22:05:52.787611-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [65EBFF51-DD7E-4DC3-B6D4-D263692366A7] (reporting strategy default)> as the global parent
default	22:05:52.787764-0500	SpringBoard	[0x865c5ea00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x584b] completed with success: 1
default	22:05:52.787909-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	22:05:52.788070-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	22:05:52.788398-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	22:05:52.788471-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	22:05:52.788618-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	22:05:52.788649-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x10258ccc0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.788681-0500	MobileJarvisNative	[0x1035dd3b0] Scene target of event deferring environments did update: scene: 0x10258ccc0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:05:52.788817-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x10258ccc0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.789026-0500	MobileJarvisNative	Stack[KeyWindow] 0x103616eb0: Migrate scenes from LastOneWins -> SystemShellManaged
default	22:05:52.789061-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	22:05:52.790412-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:05:52.790774-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:05:52.790923-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 859<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1988163 target:859<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	22:05:52.791002-0500	runningboardd	Assertion 33-34-1988163 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	22:05:52.791846-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:05:52.792243-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1988163 payload 15918742631522514469>
)} lost:{(
)}>
default	22:05:52.792681-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	22:05:52.792757-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	22:05:52.792782-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	22:05:52.792917-0500	runningboardd	Invalidating assertion 33-34-1988163 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) from originator [osservice<com.apple.SpringBoard>:34]
default	22:05:52.793313-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.793553-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 859<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-1988164 target:859<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	22:05:52.793648-0500	runningboardd	Assertion 33-34-1988164 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	22:05:52.793776-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x8655cc900; type: SceneReady; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x865f56220; contentOrientation: "portrait (1)"; lastInteractionTime: 200767; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x868c9b840; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	22:05:52.794178-0500	healthd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.794509-0500	CommCenter	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.794953-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1988164 payload 15918742631522514469>
)} lost:{(
)}>
default	22:05:52.795481-0500	backboardd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.795680-0500	MobileJarvisNative	container_query_get_single_result: success
default	22:05:52.795774-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	22:05:52.795978-0500	locationd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.796194-0500	symptomsd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.796318-0500	dasd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.796508-0500	callservicesd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.796614-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	22:05:52.796776-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:05:52.796803-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.796997-0500	useractivityd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.797153-0500	WirelessRadioManagerd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.797718-0500	UserEventAgent	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.797810-0500	wifid	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.798305-0500	PerfPowerServices	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.798471-0500	watchdogd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.798620-0500	gamepolicyd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:05:52.798933-0500	MobileJarvisNative	[0x1035dd3b0] Scene target of event deferring environments did update: scene: 0x10258ccc0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	22:05:52.798965-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x10258ccc0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	22:05:52.799021-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	22:05:52.799045-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	22:05:52.799072-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	22:05:52.799475-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:05:52.800513-0500	MobileJarvisNative	startConnection
default	22:05:52.800544-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	22:05:52.800570-0500	MobileJarvisNative	forceReloadInputViews
default	22:05:52.800626-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	22:05:52.800698-0500	MobileJarvisNative	Garbage collection for alternative services
default	22:05:52.800724-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	22:05:52.800827-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	22:05:52.800858-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:05:52.803406-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:05:52.804235-0500	MobileJarvisNative	Unbalanced calls to begin/end appearance transitions for <UIViewController: 0x1035c0400>.
default	22:05:52.804922-0500	MobileJarvisNative	Connection 1: enabling TLS
default	22:05:52.804948-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	22:05:52.804975-0500	MobileJarvisNative	[C1 BC1BF3BB-0DC0-42E7-81F8-133AA4840254 Hostname#2a073398:443 quic-connection, url hash: 5d749d3e, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{ADC848A9-8C0F-4EED-974A-80744847C7BD}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	22:05:52.805035-0500	MobileJarvisNative	[C1 Hostname#2a073398:443 initial parent-flow ((null))] event: path:start @0.000s
default	22:05:52.805598-0500	MobileJarvisNative	[C1 Hostname#2a073398:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: D072BCF6-5FD8-4612-87DE-FE09C686D48D
default	22:05:52.805735-0500	MobileJarvisNative	[C1 Hostname#2a073398:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.001s
default	22:05:52.805763-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	22:05:52.805845-0500	MobileJarvisNative	[C1 Hostname#2a073398:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	22:05:52.805931-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 initial path ((null))] event: path:start @0.001s
default	22:05:52.806158-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: D072BCF6-5FD8-4612-87DE-FE09C686D48D
default	22:05:52.806243-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	22:05:52.806418-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 initial path ((null))] event: path:start @0.001s
default	22:05:52.806685-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: B0276F12-2CF7-4B2A-9E3A-55FE7842DC2F
default	22:05:52.806794-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	22:05:52.807032-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> setting up Connection 1
default	22:05:52.807086-0500	MobileJarvisNative	[0x103489200] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	22:05:52.807111-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	22:05:52.810838-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#fe065e8e.443
default	22:05:52.810872-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#fdc0ed0e.443
default	22:05:52.810899-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#ab65f917:443
default	22:05:52.810925-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#45c42b27:443
default	22:05:52.811070-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.005s
default	22:05:52.811259-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 initial path ((null))] event: path:start @0.005s
default	22:05:52.811398-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.005s, uuid: B10B677D-D978-4801-926C-7E8A8E8214B7
default	22:05:52.811507-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.005s
default	22:05:52.811732-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.006s
default	22:05:52.813231-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.1.1:2] [-6a2fb05954ac5b14] created QUIC connection (spin bit enabled)
default	22:05:52.813643-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.008s
default	22:05:52.814512-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.1.1:2] [-6a2fb05954ac5b14] TLS stream is: [C2]
default	22:05:52.814543-0500	MobileJarvisNative	[C2 69417F0E-02F0-4522-8D8A-9BD6F76D4F28 IPv6#fe065e8e.443 quic-connection, url hash: 5d749d3e, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{ADC848A9-8C0F-4EED-974A-80744847C7BD}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	22:05:52.814603-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:05:52.814668-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: B10B677D-D978-4801-926C-7E8A8E8214B7
default	22:05:52.814851-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:05:52.814876-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	22:05:52.814928-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:05:52.814954-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:05:52.815138-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x1037a1c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:05:52.815221-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x1037a1c00] Client handshake started
default	22:05:52.815299-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS client enter_early_data
default	22:05:52.815484-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS client read_server_hello
default	22:05:52.825078-0500	MobileJarvisNative	[0x103782440] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	22:05:52.839221-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:05:52.839273-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_server_hello
default	22:05:52.839349-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:05:52.839560-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_certificate_request
default	22:05:52.839716-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_server_certificate
default	22:05:52.839746-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:05:52.840368-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x1037a1c00] Performing external trust evaluation
default	22:05:52.840485-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x1037a1c00] Asyncing for external verify block
default	22:05:52.840747-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	22:05:52.841869-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> auth completion disp=1 cred=0x0
default	22:05:52.842010-0500	MobileJarvisNative	(Trust 0x107988600) No pending evals, starting
default	22:05:52.842087-0500	MobileJarvisNative	System Keychain Always Supported set via feature flag to disabled
default	22:05:52.842184-0500	MobileJarvisNative	[0x10348b400] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:52.842242-0500	MobileJarvisNative	[0x10348b700] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:52.842267-0500	MobileJarvisNative	(Trust 0x107988600) Completed async eval kickoff
default	22:05:52.844233-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	22:05:52.844290-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	22:05:52.844317-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/FF8E42D0-C2BB-479A-AEE0-B9EB6F96D4D7/MobileJarvisNative.app
default	22:05:52.844429-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	22:05:52.844455-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	22:05:52.844481-0500	MobileJarvisNative	(Trust 0x107988600) trustd returned 4
default	22:05:52.844558-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	22:05:52.844607-0500	MobileJarvisNative	(Trust 0x1079880c0) No pending evals, starting
default	22:05:52.844707-0500	MobileJarvisNative	[0x10348b500] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:52.844732-0500	MobileJarvisNative	(Trust 0x1079880c0) Completed async eval kickoff
default	22:05:52.844780-0500	MobileJarvisNative	[0x10348b700] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:52.847341-0500	MobileJarvisNative	(Trust 0x1079880c0) trustd returned 4
default	22:05:52.847430-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	22:05:52.847456-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x1037a1c00] Returning from external verify block with result: true
default	22:05:52.847534-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x1037a1c00] Certificate verification result: OK
default	22:05:52.847568-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client read_server_finished
default	22:05:52.847623-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:05:52.847649-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:05:52.847675-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client send_client_certificate
default	22:05:52.847700-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client complete_second_flight
default	22:05:52.847913-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS 1.3 client done
default	22:05:52.848016-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS client finish_client_handshake
default	22:05:52.848046-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x1037a1c00] Client handshake state: TLS client done
default	22:05:52.848073-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x1037a1c00] Client handshake done
default	22:05:52.848098-0500	MobileJarvisNative	nw_path_evaluator_start [982DCE7F-44AD-41CE-A46A-D015EED18F1D <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	22:05:52.848208-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	22:05:52.848310-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	22:05:52.848452-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	22:05:52.848494-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-2-pandora-en
default	22:05:52.848645-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x1037a1c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(35ms) flight_time(27ms) rtt(27ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:05:52.848766-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:05:52.848860-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.036s
default	22:05:52.849023-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	22:05:52.849050-0500	MobileJarvisNative	[C2 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.036s
default	22:05:52.849134-0500	MobileJarvisNative	[0x10348b500] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:52.849987-0500	MobileJarvisNative	quic_pmtud_restart [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	22:05:52.850039-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] QUIC connection established in 37.776 ms, RTT 26.714 ms
default	22:05:52.850069-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:05:52.850336-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.046s
default	22:05:52.850472-0500	MobileJarvisNative	nw_flow_connected [C1.1.1.1 IPv6#fe065e8e.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-1840326744)
default	22:05:52.850639-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	22:05:52.850914-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	22:05:52.851075-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	22:05:52.851293-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	22:05:52.851459-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.047s
default	22:05:52.851553-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.047s
default	22:05:52.851583-0500	MobileJarvisNative	nw_flow_connected [C1 IPv6#fe065e8e.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	22:05:52.851680-0500	MobileJarvisNative	[C1 IPv6#fe065e8e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.047s
default	22:05:52.852715-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state ready
default	22:05:52.853172-0500	MobileJarvisNative	[C1 IPv6#fe065e8e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.049s
default	22:05:52.853205-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C1] viability_changed_handler(true)
default	22:05:52.853626-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] path over en0 received event established
default	22:05:52.853795-0500	MobileJarvisNative	quic_migration_evaluate_primary [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] promoted path 0x1036a01c0 over en0 to primary
default	22:05:52.853847-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C1.1.1.1:2] Calling notify with interface <private>
default	22:05:52.854140-0500	MobileJarvisNative	[C1.1.1.1 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.050s, uuid: B10B677D-D978-4801-926C-7E8A8E8214B7
default	22:05:52.854245-0500	MobileJarvisNative	[C1.1.1 Hostname#2a073398:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.050s, uuid: B0276F12-2CF7-4B2A-9E3A-55FE7842DC2F
default	22:05:52.854302-0500	MobileJarvisNative	[C1.1 Hostname#2a073398:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.050s, uuid: D072BCF6-5FD8-4612-87DE-FE09C686D48D
default	22:05:52.854331-0500	MobileJarvisNative	[C1 IPv6#fe065e8e.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.050s, uuid: D072BCF6-5FD8-4612-87DE-FE09C686D48D
default	22:05:52.854404-0500	MobileJarvisNative	Connection 1: connected successfully
default	22:05:52.854429-0500	MobileJarvisNative	Connection 1: TLS handshake complete
default	22:05:52.854451-0500	MobileJarvisNative	Connection 1: ready C(N) E(N)
default	22:05:52.854834-0500	MobileJarvisNative	[C1] event: client:connection_reused @0.051s
default	22:05:52.855128-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> now using Connection 1
default	22:05:52.855606-0500	MobileJarvisNative	Connection 1: received viability advisory(Y)
default	22:05:52.855631-0500	MobileJarvisNative	0x1036a1a58 ID=0 Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> sent request, body N 0
default	22:05:52.880909-0500	MobileJarvisNative	[0x103782d00] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	22:05:52.880944-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x1037a1c00] Asyncing for session update block
default	22:05:52.881113-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C2:1][0x1037a1c00] Asyncing for session update block
default	22:05:52.881194-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x1037a1c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(1) sct_received(0) connect_time(35ms) flight_time(27ms) rtt(27ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:05:52.881254-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#fe065e8e.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:05:52.881376-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] creating inbound stream 3
default	22:05:52.881773-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] creating inbound stream 7
default	22:05:52.881958-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] creating inbound stream 11
default	22:05:52.882158-0500	MobileJarvisNative	quic_stream_create_inbound [C1.1.1.1:2] [-015c0bf5c4806e53385fc6f58f806ae3d0317b8f] creating inbound stream 15
default	22:05:52.883002-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x1037a1c00] Returning from session update block
default	22:05:52.883306-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C2:1][0x1037a1c00] Returning from session update block
default	22:05:52.887700-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session (null) [0x0] with pid '859' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	22:05:52.887774-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '859' moved to ForegroundRunning and is not allowed to play in the background
default	22:05:52.888510-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:05:52.888541-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	22:05:52.890289-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6f659: {
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
default	22:05:52.892965-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:52.894784-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1035f4c30 with ID: 0x6f659
default	22:05:52.895725-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	22:05:52.895775-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	22:05:52.895798-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	22:05:52.895968-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	22:05:52.898283-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	22:05:52.898391-0500	MobileJarvisNative	Call host has no calls
default	22:05:52.901998-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
)} lost:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-1988163 payload 15918742631522514469>
)}>
default	22:05:52.907794-0500	MobileJarvisNative	[0x10348b800] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	22:05:52.909900-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	22:05:52.912245-0500	MobileJarvisNative	[0x10348bd00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	22:05:52.924007-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Available: true, Technology: vocalizer]'
default	22:05:52.925111-0500	MobileJarvisNative	[0x1037835c0] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	22:05:52.932305-0500	MobileJarvisNative	0x1036a1a58 ID=0 Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> received response, status 304 content U
default	22:05:52.934875-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	22:05:52.935137-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	22:05:52.935409-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x10258ccc0> (3BF06317-7AED-4319-B8C6-ACBB61D4A9C0)
default	22:05:52.935436-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 3BF06317-7AED-4319-B8C6-ACBB61D4A9C0
default	22:05:52.935463-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	22:05:52.935488-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	22:05:52.935648-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	22:05:52.936247-0500	MobileJarvisNative	Updating configuration of monitor M859-1
default	22:05:52.936557-0500	MobileJarvisNative	[0x10348b900] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	22:05:52.936749-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	22:05:52.936778-0500	MobileJarvisNative	[0x10348bb00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	22:05:52.937123-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	22:05:52.937151-0500	MobileJarvisNative	[0x10348be00] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	22:05:52.937796-0500	MobileJarvisNative	[0x10348b900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:52.939677-0500	MobileJarvisNative	Hit the server for a process handle 1fd4ac840000035b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:52.939987-0500	MobileJarvisNative	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:05:52.940241-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> summary for task success {transaction_duration_ms=164, response_status=304, connection=1, protocol="h3", domain_lookup_duration_ms=4, connect_duration_ms=39, secure_connection_duration_ms=37, private_relay=false, request_start_ms=79, request_duration_ms=0, response_start_ms=157, response_duration_ms=0, request_bytes=505, request_throughput_kbps=2125, response_bytes=371, response_throughput_kbps=0, cache_hit=true}
default	22:05:52.940615-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.137s
default	22:05:52.940866-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> finished successfully
default	22:05:52.941348-0500	MobileJarvisNative	Task <82F644D4-CEAF-4405-9553-D6EFFEF2568F>.<1> done using Connection 1
default	22:05:52.942739-0500	MobileJarvisNative	<nw_activity 50:1 [65EBFF51-DD7E-4DC3-B6D4-D263692366A7] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 348ms
default	22:05:52.942852-0500	MobileJarvisNative	<nw_activity 50:2 [76136752-6C63-475F-865E-CF7A833231EF] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 348ms
default	22:05:52.942923-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [65EBFF51-DD7E-4DC3-B6D4-D263692366A7] (global parent) (reporting strategy default) complete (reason success)>
default	22:05:52.942946-0500	MobileJarvisNative	Unset the global parent activity
default	22:05:52.942979-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:52.944453-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	22:05:52.944731-0500	MobileJarvisNative	Connection 3: enabling TLS
default	22:05:52.944760-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	22:05:52.944823-0500	MobileJarvisNative	[C3 CBBBACD1-4410-46B9-847A-39EAB775E383 Hostname#d45a92d2:443 quic-connection, url hash: 777e1cb5, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{91182A70-3354-461D-95E4-F83EBEA988CA}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A] start
default	22:05:52.945013-0500	MobileJarvisNative	[C3 Hostname#d45a92d2:443 initial parent-flow ((null))] event: path:start @0.000s
default	22:05:52.945555-0500	MobileJarvisNative	[C3 Hostname#d45a92d2:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 71A16F43-656F-4315-A0A0-218057FEB633
default	22:05:52.945702-0500	MobileJarvisNative	[C3 Hostname#d45a92d2:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:05:52.945728-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	22:05:52.946054-0500	MobileJarvisNative	[C3 Hostname#d45a92d2:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.001s
default	22:05:52.946193-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 initial path ((null))] event: path:start @0.001s
default	22:05:52.946540-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 71A16F43-656F-4315-A0A0-218057FEB633
default	22:05:52.946862-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	22:05:52.947097-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 initial path ((null))] event: path:start @0.001s
default	22:05:52.947482-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 6BF1621A-6C4F-4E1C-BDCA-095047211441
default	22:05:52.947808-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.002s
default	22:05:52.947917-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> setting up Connection 3
default	22:05:52.951535-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#d45a92d2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#a4922a3a:443
default	22:05:52.951566-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.1 Hostname#d45a92d2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#5cd68980:443
default	22:05:52.951878-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.006s
default	22:05:52.952050-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 initial path ((null))] event: path:start @0.007s
default	22:05:52.952198-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.007s, uuid: 618C2E1A-749B-41D5-8E20-A5B98FF0DDB6
default	22:05:52.952363-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.007s
default	22:05:52.952742-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.007s
default	22:05:52.954545-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.1.1:2] [-39aa3e9af2accc1a] created QUIC connection (spin bit enabled)
default	22:05:52.955003-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.007s
default	22:05:52.956159-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.1.1:2] [-39aa3e9af2accc1a] TLS stream is: [C4]
default	22:05:52.956187-0500	MobileJarvisNative	[C4 906AF8F7-7F18-4608-AF5A-632A27A76BA7 IPv4#a4922a3a:443 quic-connection, url hash: 777e1cb5, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{91182A70-3354-461D-95E4-F83EBEA988CA}{(null)}{Y}{2}{0x0} (private), proc: 3E0067AE-FD23-30E8-B971-E93B00D4483A, no transport] start
default	22:05:52.956245-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	22:05:52.956330-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 618C2E1A-749B-41D5-8E20-A5B98FF0DDB6
default	22:05:52.956677-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	22:05:52.956813-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	22:05:52.956896-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:05:52.956923-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	22:05:52.957138-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x1037a3600] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	22:05:52.957355-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x1037a3600] Client handshake started
default	22:05:52.957506-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS client enter_early_data
default	22:05:52.957704-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS client read_server_hello
default	22:05:52.983006-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_hello_retry_request
default	22:05:52.983059-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_server_hello
default	22:05:52.983135-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	22:05:52.983917-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_certificate_request
default	22:05:52.984069-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_server_certificate
default	22:05:52.984093-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	22:05:52.984296-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x1037a3600] Performing external trust evaluation
default	22:05:52.984389-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x1037a3600] Asyncing for external verify block
default	22:05:52.984739-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	22:05:52.984791-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> auth completion disp=1 cred=0x0
default	22:05:52.984843-0500	MobileJarvisNative	(Trust 0x10c9d06c0) No pending evals, starting
default	22:05:52.984935-0500	MobileJarvisNative	[0x10c95c900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:52.984960-0500	MobileJarvisNative	(Trust 0x10c9d06c0) Completed async eval kickoff
default	22:05:52.986417-0500	MobileJarvisNative	(Trust 0x10c9d06c0) trustd returned 4
default	22:05:52.986504-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	22:05:52.986560-0500	MobileJarvisNative	(Trust 0x10c9d0780) No pending evals, starting
default	22:05:52.986802-0500	MobileJarvisNative	[0x10c95ca00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:52.986850-0500	MobileJarvisNative	(Trust 0x10c9d0780) Completed async eval kickoff
default	22:05:52.986927-0500	MobileJarvisNative	[0x10c95c900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:52.988467-0500	MobileJarvisNative	(Trust 0x10c9d0780) trustd returned 4
default	22:05:52.988545-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	22:05:52.988571-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x1037a3600] Returning from external verify block with result: true
default	22:05:52.988624-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x1037a3600] Certificate verification result: OK
default	22:05:52.988652-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client read_server_finished
default	22:05:52.988746-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client send_end_of_early_data
default	22:05:52.988774-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	22:05:52.988812-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client send_client_certificate
default	22:05:52.988847-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client complete_second_flight
default	22:05:52.989002-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS 1.3 client done
default	22:05:52.989029-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS client finish_client_handshake
default	22:05:52.989054-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x1037a3600] Client handshake state: TLS client done
default	22:05:52.989082-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x1037a3600] Client handshake done
default	22:05:52.989386-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x1037a3600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(33ms) flight_time(28ms) rtt(27ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:05:52.989447-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:05:52.989553-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.034s
default	22:05:52.989675-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	22:05:52.989778-0500	MobileJarvisNative	[C4 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.034s
default	22:05:52.989892-0500	MobileJarvisNative	[0x10c95ca00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:52.990616-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] PMTUD enabled, max PMTU: 1500, header size: 28, current PMTU 1228
default	22:05:52.990689-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] QUIC connection established in 36.49 ms, RTT 26.824 ms
default	22:05:52.990720-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	22:05:52.990844-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.044s
default	22:05:52.990900-0500	MobileJarvisNative	nw_flow_connected [C3.1.1.1 IPv4#a4922a3a:443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-1840326744)
default	22:05:52.991101-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.044s
default	22:05:52.991305-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.044s
default	22:05:52.991368-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.044s
default	22:05:52.991503-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.044s
default	22:05:52.991584-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.044s
default	22:05:52.991637-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.044s
default	22:05:52.991663-0500	MobileJarvisNative	nw_flow_connected [C3 IPv4#a4922a3a:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	22:05:52.991745-0500	MobileJarvisNative	[C3 IPv4#a4922a3a:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.045s
default	22:05:52.991921-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	22:05:52.991947-0500	MobileJarvisNative	[C3 IPv4#a4922a3a:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.045s
default	22:05:52.991972-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	22:05:52.992274-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] path over en0 received event established
default	22:05:52.992429-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] promoted path 0x1036a1f80 over en0 to primary
default	22:05:52.992476-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.1.1:2] Calling notify with interface <private>
default	22:05:52.992644-0500	MobileJarvisNative	[C3.1.1.1 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.045s, uuid: 618C2E1A-749B-41D5-8E20-A5B98FF0DDB6
default	22:05:52.992811-0500	MobileJarvisNative	[C3.1.1 Hostname#d45a92d2:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.045s, uuid: 6BF1621A-6C4F-4E1C-BDCA-095047211441
default	22:05:52.992868-0500	MobileJarvisNative	[C3.1 Hostname#d45a92d2:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.045s, uuid: 71A16F43-656F-4315-A0A0-218057FEB633
default	22:05:52.992897-0500	MobileJarvisNative	[C3 IPv4#a4922a3a:443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.045s, uuid: 71A16F43-656F-4315-A0A0-218057FEB633
default	22:05:52.992970-0500	MobileJarvisNative	Connection 3: connected successfully
default	22:05:52.992994-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	22:05:52.993037-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	22:05:52.993391-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.045s
default	22:05:52.993520-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> now using Connection 3
default	22:05:52.993952-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	22:05:52.993978-0500	MobileJarvisNative	0x1036a2858 ID=0 Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> sent request, body N 0
default	22:05:53.008109-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
error	22:05:53.008774-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	22:05:53.008816-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
default	22:05:53.011451-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	22:05:53.029465-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Available: true, Technology: gryphon]'
default	22:05:53.036144-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	22:05:53.036250-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Available: true, Technology: gryphon]
default	22:05:53.036277-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	22:05:53.036328-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Technology: custom, Available: true]'
default	22:05:53.041608-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x1037a3600] Asyncing for session update block
default	22:05:53.041768-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x1037a3600] Asyncing for session update block
default	22:05:53.041884-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x1037a3600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(33ms) flight_time(28ms) rtt(27ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	22:05:53.041955-0500	MobileJarvisNative	nw_flow_connected [C4 IPv4#a4922a3a:443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	22:05:53.042073-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] creating inbound stream 3
default	22:05:53.042284-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] creating inbound stream 7
default	22:05:53.042498-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] creating inbound stream 11
default	22:05:53.042927-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x1037a3600] Returning from session update block
default	22:05:53.043200-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x1037a3600] Returning from session update block
default	22:05:53.043368-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	22:05:53.043421-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	22:05:53.043478-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.1.1:2] [-016bfe4176a1c920e468304116a1ca7bd220bf01] creating inbound stream 15
default	22:05:53.047756-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	22:05:53.058284-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neural, Available: true]'
default	22:05:53.070631-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	22:05:53.070688-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neural, Available: true]
default	22:05:53.070717-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [quinn:en-US:neural:premium:turiTrial:CV 1219]
default	22:05:53.072247-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neuralAX, Available: true]'
default	22:05:53.077801-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	22:05:53.077860-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	22:05:53.077912-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	22:05:53.084144-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x107969ea0>
default	22:05:53.218807-0500	MobileJarvisNative	0x1036a2858 ID=0 Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> received response, status 200 content U
default	22:05:53.221265-0500	MobileJarvisNative	[0x10c95c900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	22:05:53.226039-0500	MobileJarvisNative	[0x10c95c900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.228338-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 2
default	22:05:53.228477-0500	MobileJarvisNative	Ending task with identifier 2 and description: <private>, _expireHandler: <__NSGlobalBlock__: 0x1f1102278>
default	22:05:53.228522-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 2: <private>)
default	22:05:53.228562-0500	MobileJarvisNative	Will invalidate assertion: <BKSProcessAssertion: 0x103550230> for task identifier: 2
default	22:05:53.228734-0500	runningboardd	Invalidating assertion 33-859-1988161 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:53.246623-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> response ended
default	22:05:53.246885-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.302s
default	22:05:53.247028-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> done using Connection 3
default	22:05:53.247245-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> summary for task success {transaction_duration_ms=303, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=4, connect_duration_ms=38, secure_connection_duration_ms=36, private_relay=false, request_start_ms=47, request_duration_ms=0, response_start_ms=274, response_duration_ms=28, request_bytes=1271, request_throughput_kbps=6364, response_bytes=16377, response_throughput_kbps=562, cache_hit=true}
default	22:05:53.247287-0500	MobileJarvisNative	Task <A59F9444-D3FE-444F-BA10-AF566991B3BA>.<1> finished successfully
default	22:05:53.253339-0500	MobileJarvisNative	[0x103783700] activating connection: mach=true listener=false peer=false name=com.apple.lsd.mapdb
default	22:05:53.267570-0500	MobileJarvisNative	Not internal release, disabling SIRL
default	22:05:53.267613-0500	MobileJarvisNative	SecSecurityClientGet new thread!
default	22:05:53.267774-0500	MobileJarvisNative	[0x10c95c900] activating connection: mach=true listener=false peer=false name=com.apple.securityd
default	22:05:53.275062-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86d30a580; type: MainTransition; transitionID: 06EDC290-FDD5-4677-9C35-17D991C18DE9; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	22:05:53.275379-0500	MobileJarvisNative	elided platform fast path for key: VasUgeSzVyHdB27g2XpN0g
default	22:05:53.277599-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86b594ff0> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86b596130>;
    <SBSwitcherModifierEventResponse: 0x86b5964c0> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86b596b50>;
	    <SBSwitcherModifierEventResponse: 0x86b596340> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86b597210; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86c099ec0; visible: NO; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x86ce36a80; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x86656d740; active: NO; appLayout: <SBAppLayout: 0x86b5e7d80; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	22:05:53.278129-0500	MobileJarvisNative	[0x103783980] activating connection: mach=true listener=false peer=false name=com.apple.mobilegestalt.xpc
default	22:05:53.281311-0500	MobileJarvisNative	[0x103783980] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.281339-0500	MobileJarvisNative	<private>
default	22:05:53.281500-0500	MobileJarvisNative	no access to SerialNumber (see <rdar://problem/11744455>)
default	22:05:53.284652-0500	MobileJarvisNative	[0x103783980] activating connection: mach=true listener=false peer=false name=com.apple.healthd.server
default	22:05:53.289910-0500	MobileJarvisNative	Executing query <HKSampleQuery 19B982 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.290970-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.291493-0500	MobileJarvisNative	Stopping query <HKSampleQuery 19B982 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.291524-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.295010-0500	MobileJarvisNative	Executing query <HKSampleQuery 005246 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.295372-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.295867-0500	MobileJarvisNative	Stopping query <HKSampleQuery 005246 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.296021-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.296705-0500	MobileJarvisNative	Executing query <HKSampleQuery 25A0F6 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.297024-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.297497-0500	MobileJarvisNative	Stopping query <HKSampleQuery 25A0F6 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.297583-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.300581-0500	MobileJarvisNative	Executing query <HKSampleQuery 4335B7 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.300810-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.301409-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4335B7 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.301440-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.302217-0500	MobileJarvisNative	Executing query <HKSampleQuery 0F0449 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.302473-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.302822-0500	MobileJarvisNative	Stopping query <HKSampleQuery 0F0449 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.302968-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.305579-0500	MobileJarvisNative	Executing query <HKSampleQuery 4CFA52 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.305778-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.306217-0500	MobileJarvisNative	Stopping query <HKSampleQuery 4CFA52 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.306273-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.307012-0500	MobileJarvisNative	Executing query <HKSampleQuery D8C53E QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.307321-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.307459-0500	SpringBoard	Front display did change: <SBApplication: 0x869273300; com.hightowerai.MobileJarvisNative>
default	22:05:53.308779-0500	MobileJarvisNative	Stopping query <HKSampleQuery D8C53E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.308836-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.313469-0500	MobileJarvisNative	Executing query <HKSampleQuery 246B97 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.313611-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.314006-0500	MobileJarvisNative	Stopping query <HKSampleQuery 246B97 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.314076-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.314498-0500	MobileJarvisNative	Executing query <HKSampleQuery 89C404 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.314888-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.315236-0500	MobileJarvisNative	Stopping query <HKSampleQuery 89C404 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.315285-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.320991-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x854d4c080; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x8581c5570; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 7, 2025 at 10:05:53 PM CDT;}
default	22:05:53.321027-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x854d4e5c0 10-07-2025 22:05:53, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	22:05:53.322359-0500	MobileJarvisNative	Executing query <HKSampleQuery B56EE3 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.322669-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.322828-0500	MobileJarvisNative	Stopping query <HKSampleQuery B56EE3 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.322856-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.323265-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	22:05:53.323319-0500	MobileJarvisNative	Executing query <HKSampleQuery 14ED8E QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.323477-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.323822-0500	MobileJarvisNative	Stopping query <HKSampleQuery 14ED8E QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.323848-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.324815-0500	MobileJarvisNative	Executing query <HKSampleQuery 07F060 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.325009-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.325367-0500	MobileJarvisNative	Stopping query <HKSampleQuery 07F060 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.325434-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.325906-0500	MobileJarvisNative	Executing query <HKSampleQuery 055777 QoS=Default> for type HKCategoryTypeIdentifierSleepAnalysis with predicate <private>
default	22:05:53.326005-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.326390-0500	MobileJarvisNative	Stopping query <HKSampleQuery 055777 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.326417-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.327788-0500	MobileJarvisNative	Executing query <HKSampleQuery 20C515 QoS=Default> for type HKCategoryTypeIdentifierMenstrualFlow with predicate <private>
default	22:05:53.328068-0500	MobileJarvisNative	[0x103783840] activating connection: mach=false listener=false peer=false name=(anonymous)
default	22:05:53.328373-0500	MobileJarvisNative	Stopping query <HKSampleQuery 20C515 QoS=Default state=deactivated> with error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}
default	22:05:53.328401-0500	MobileJarvisNative	[0x103783840] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	22:05:53.328785-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:53.329422-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.384s
default	22:05:53.329535-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> now using Connection 3
default	22:05:53.330096-0500	MobileJarvisNative	0x1036a2a18 ID=4 Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> sent request, body S 109
default	22:05:53.741457-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Now acquiring workspace assertion with state: ForegroundFocal.
default	22:05:53.742708-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-1988166 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	22:05:53.743406-0500	runningboardd	Assertion 33-34-1988166 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as active
default	22:05:53.745965-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:05:53.748698-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:859] Dropping launch assertion.
default	22:05:53.749530-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.749991-0500	runningboardd	Invalidating assertion 33-34-1988158 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	22:05:53.750739-0500	healthd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.751244-0500	CommCenter	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.751696-0500	backboardd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.752192-0500	locationd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.752527-0500	symptomsd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.752909-0500	dasd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.753762-0500	WirelessRadioManagerd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.753876-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.754148-0500	useractivityd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.754599-0500	MobileJarvisNative	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:05:53.755290-0500	UserEventAgent	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.755336-0500	wifid	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.755403-0500	callservicesd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.756324-0500	PerfPowerServices	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.756480-0500	watchdogd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.757024-0500	gamepolicyd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:05:53.794760-0500	runningboardd	Invalidating assertion 33-859-1988162 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:53.797257-0500	MobileJarvisNative	0x1036a2a18 ID=4 Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> received response, status 200 content K
default	22:05:53.799666-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> response ended
default	22:05:53.800935-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.854s
default	22:05:53.801723-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> done using Connection 3
default	22:05:53.802695-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> summary for task success {transaction_duration_ms=471, response_status=200, connection=3, reused=1, reused_after_ms=82, request_start_ms=0, request_duration_ms=0, response_start_ms=467, response_duration_ms=3, request_bytes=923, request_throughput_kbps=1323, response_bytes=888, response_throughput_kbps=247, cache_hit=true}
default	22:05:53.802845-0500	MobileJarvisNative	Task <CE087737-F216-41F9-8C48-D1A482BDCD6E>.<2> finished successfully
default	22:05:53.807696-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-859-1988167 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:05:53.808979-0500	runningboardd	Assertion 33-859-1988167 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as inactive as start-time-defining assertions exist
default	22:05:53.825000-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:05:53.826024-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:05:53.826391-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:05:53.826452-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:05:53.826524-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:05:53.826703-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:05:53.826867-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:05:53.827001-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:05:53.827102-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:05:53.827166-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:05:53.827228-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:05:53.827296-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	22:05:53.830461-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:05:53.832458-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000100effc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x0000000100fe455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000100b97700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000100b9a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:05:53.832815-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:05:53.833410-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:05:53.834559-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:05:53.834712-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:05:53.835099-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:05:53.835150-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:05:53.835206-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:05:53.835290-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:05:53.835366-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:05:53.835438-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:05:53.835465-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:05:53.835489-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:05:53.835515-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:05:53.835542-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
default	22:05:53.860833-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	22:05:53.861095-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-1988158:FBApplicationProcess" age:00:00:01  id:51539641834 [System: PrevIdle SysAct]
default	22:05:53.861917-0500	SpringBoard	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.862190-0500	healthd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.862318-0500	CommCenter	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.862910-0500	backboardd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.863296-0500	symptomsd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.863419-0500	locationd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.863888-0500	dasd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.864558-0500	callservicesd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.864839-0500	audiomxd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.865401-0500	WirelessRadioManagerd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.865761-0500	MobileJarvisNative	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	22:05:53.865976-0500	useractivityd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.866056-0500	UserEventAgent	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.866308-0500	wifid	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.867249-0500	watchdogd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	22:05:53.867458-0500	gamepolicyd	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	22:05:53.867887-0500	PerfPowerServices	Received state update for 859 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
error	22:05:53.880266-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:05:53.880882-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000100effc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x0000000100fe455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000100b97700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000100b9a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:05:53.881201-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:05:53.881340-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:05:53.882648-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	22:05:53.889349-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:53.890506-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.945s
default	22:05:53.890608-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> now using Connection 3
default	22:05:53.891010-0500	MobileJarvisNative	0x10cbda318 ID=8 Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> sent request, body N 0
default	22:05:53.893062-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:53.893364-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:53.894769-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> now using Connection 3
default	22:05:53.895142-0500	MobileJarvisNative	0x10d8a5198 ID=12 Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> sent request, body N 0
default	22:05:53.895318-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> now using Connection 3
default	22:05:53.895760-0500	MobileJarvisNative	0x10d8a5358 ID=16 Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> sent request, body N 0
default	22:05:54.008002-0500	MobileJarvisNative	0x10cbda318 ID=8 Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> received response, status 200 content U
default	22:05:54.008430-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> response ended
default	22:05:54.008697-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> done using Connection 3
default	22:05:54.008814-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> summary for task success {transaction_duration_ms=119, response_status=200, connection=3, reused=1, reused_after_ms=90, request_start_ms=1, request_duration_ms=0, response_start_ms=119, response_duration_ms=0, request_bytes=1239, request_throughput_kbps=2936, response_bytes=4414, response_throughput_kbps=7575, cache_hit=true}
default	22:05:54.008842-0500	MobileJarvisNative	Task <0710D8A9-53A6-4601-8600-B31D85EA29C0>.<3> finished successfully
default	22:05:54.106517-0500	MobileJarvisNative	0x10d8a5358 ID=16 Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> received response, status 200 content U
default	22:05:54.107506-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> response ended
default	22:05:54.107844-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> done using Connection 3
default	22:05:54.108148-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> summary for task success {transaction_duration_ms=213, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=211, response_duration_ms=1, request_bytes=1203, request_throughput_kbps=5539, response_bytes=1239, response_throughput_kbps=769, cache_hit=true}
default	22:05:54.108200-0500	MobileJarvisNative	Task <72A1E235-5694-4D20-A1D7-54A6DBEC2EF4>.<5> finished successfully
default	22:05:54.128498-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:54.129784-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> now using Connection 3
default	22:05:54.130414-0500	MobileJarvisNative	0x10d98ddd8 ID=20 Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> sent request, body N 0
default	22:05:54.157928-0500	MobileJarvisNative	0x10d8a5198 ID=12 Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> received response, status 200 content U
default	22:05:54.182722-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> response ended
default	22:05:54.183136-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> done using Connection 3
default	22:05:54.183233-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> summary for task success {transaction_duration_ms=289, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=1, request_duration_ms=0, response_start_ms=264, response_duration_ms=24, request_bytes=1366, request_throughput_kbps=5927, response_bytes=61994, response_throughput_kbps=2423, cache_hit=true}
default	22:05:54.183293-0500	MobileJarvisNative	Task <1D3B769B-E577-4603-A424-8C6176CA9803>.<4> finished successfully
default	22:05:54.253858-0500	MobileJarvisNative	0x10d98ddd8 ID=20 Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> received response, status 200 content U
default	22:05:54.255033-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> response ended
default	22:05:54.255332-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.310s
default	22:05:54.255501-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> done using Connection 3
default	22:05:54.255621-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> summary for task success {transaction_duration_ms=126, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=0, request_duration_ms=0, response_start_ms=124, response_duration_ms=1, request_bytes=1203, request_throughput_kbps=1785, response_bytes=1238, response_throughput_kbps=728, cache_hit=true}
default	22:05:54.255652-0500	MobileJarvisNative	Task <7F5382AB-1B17-4124-8F6E-7B1616E41868>.<6> finished successfully
default	22:05:54.270304-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:54.271629-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.326s
default	22:05:54.271832-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> now using Connection 3
default	22:05:54.272631-0500	MobileJarvisNative	0x10d98ddd8 ID=24 Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> sent request, body S 272
default	22:05:54.388102-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:54.391774-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> now using Connection 3
default	22:05:54.392879-0500	MobileJarvisNative	0x10d98ea18 ID=28 Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> sent request, body N 0
default	22:05:54.397042-0500	MobileJarvisNative	0x10d98ddd8 ID=24 Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> received response, status 200 content U
default	22:05:54.398164-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> response ended
default	22:05:54.398834-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> done using Connection 3
default	22:05:54.399663-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> summary for task success {transaction_duration_ms=128, response_status=200, connection=3, reused=1, reused_after_ms=16, request_start_ms=1, request_duration_ms=0, response_start_ms=125, response_duration_ms=1, request_bytes=1238, request_throughput_kbps=1576, response_bytes=1208, response_throughput_kbps=610, cache_hit=true}
default	22:05:54.399734-0500	MobileJarvisNative	Task <0E1CF811-C1D5-458F-9A64-A64E88835E78>.<7> finished successfully
default	22:05:54.421271-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: YES
default	22:05:54.421422-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram voice set to: aura-2-pandora-en
default	22:05:54.421992-0500	MobileJarvisNative	🎵 VoiceModule: ========== DEEPGRAM API KEY VALIDATION ==========
default	22:05:54.422038-0500	MobileJarvisNative	🎵 VoiceModule: About to call configManager.getDeepgramApiKey()
default	22:05:54.422080-0500	MobileJarvisNative	📋 ConfigManager: All configuration values:
default	22:05:54.422260-0500	MobileJarvisNative	  deepgram_tts_enabled = true
default	22:05:54.422302-0500	MobileJarvisNative	  selected_deepgram_voice = aura-2-pandora-en
default	22:05:54.422391-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 2)
default	22:05:54.422545-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key from ConfigManager: 'nil'
default	22:05:54.422633-0500	MobileJarvisNative	🎵 VoiceModule: Debug - API key isEmpty: YES
default	22:05:54.422674-0500	MobileJarvisNative	🎵 VoiceModule: ❌ Deepgram API key validation failed
default	22:05:54.422719-0500	MobileJarvisNative	🎵 VoiceModule: ❌ This means ConfigManager.getDeepgramApiKey() returned nil or empty
error	22:05:54.422763-0500	MobileJarvisNative	🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========
error	22:05:54.424781-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', { [Error: Deepgram API key not configured]
  code: 'DEEPGRAM_CONFIG_ERROR',
  nativeStackIOS: 
   [ '0   MobileJarvisNative                  0x0000000100effc38 _ZN8facebook5react11JSIExecutor21defaultTimeoutInvokerERKNSt3__18functionIFvvEEENS3_IFNS2_12basic_stringIcNS2_11char_traitsIcEENS2_9allocatorIcEEEEvEEE + 248476',
     '1   MobileJarvisNative                  0x0000000100fe455c _ZNSt3__116__variant_detail12__visitation6__base12__dispatcherIJLm1ELm1EEE10__dispatchB8ne190102IOZNS0_12__assignmentINS0_8__traitsIJdN8facebook5react16DropShadowParamsEEEEE16__generic_assignB8ne190102IRKNS0_17__copy_assignmentISB_LNS0_6_TraitE1EEEEEvOT_EUlRSJ_OT0_E_JRNS0_6__baseILSF_1EJdSA_EEERKSR_EEEDcSJ_DpT0_ + 653700',
     '2   MobileJarvisNative                  0x0000000100b97700 MobileJarvisNative + 30464',
     '3   MobileJarvisNative                  0x0000000100b9a194 MobileJarvisNative + 41364',
     '4   MobileJarvisNative                  0x0000000<…>
error	22:05:54.425425-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error type:', 'Error'
error	22:05:54.425987-0500	MobileJarvisNative	'🎵 VOICE_SETTINGS: Error stack:', 'Error: Deepgram API key not configured'
default	22:05:54.642294-0500	MobileJarvisNative	0x10d98ea18 ID=28 Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> received response, status 200 content U
default	22:05:54.644104-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> response ended
default	22:05:54.644942-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.699s
default	22:05:54.645580-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> done using Connection 3
default	22:05:54.646270-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> summary for task success {transaction_duration_ms=255, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=2, request_duration_ms=1, response_start_ms=252, response_duration_ms=2, request_bytes=1142, request_throughput_kbps=949, response_bytes=958, response_throughput_kbps=334, cache_hit=true}
default	22:05:54.646378-0500	MobileJarvisNative	Task <1174ED89-1F1B-41CD-A1F2-603A5C794238>.<8> finished successfully
default	22:05:54.671961-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:54.673840-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.728s
default	22:05:54.674364-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> now using Connection 3
default	22:05:54.675071-0500	MobileJarvisNative	0x10d98ea18 ID=32 Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> sent request, body N 0
default	22:05:54.768475-0500	MobileJarvisNative	0x10d98ea18 ID=32 Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> received response, status 200 content U
default	22:05:54.769309-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> response ended
default	22:05:54.769526-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.818s
default	22:05:54.769654-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> done using Connection 3
default	22:05:54.769763-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> summary for task success {transaction_duration_ms=91, response_status=200, connection=3, reused=1, reused_after_ms=29, request_start_ms=1, request_duration_ms=0, response_start_ms=90, response_duration_ms=1, request_bytes=1187, request_throughput_kbps=1447, response_bytes=736, response_throughput_kbps=629, cache_hit=true}
default	22:05:54.769792-0500	MobileJarvisNative	Task <E336E586-6419-456E-9BD5-910BAD0A1B15>.<9> finished successfully
default	22:05:54.791874-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> resuming, timeouts(0.0, 604800.0) qos(0x19) voucher((null)) activity(00000000-0000-0000-0000-000000000000)
default	22:05:54.793327-0500	MobileJarvisNative	[C3] event: client:connection_reused @1.848s
default	22:05:54.793486-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> now using Connection 3
default	22:05:54.793992-0500	MobileJarvisNative	0x10d98ea18 ID=36 Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> sent request, body N 0
default	22:05:54.872235-0500	runningboardd	Invalidating assertion 33-859-1988167 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]
default	22:05:54.892890-0500	MobileJarvisNative	0x10d98ea18 ID=36 Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> received response, status 200 content U
default	22:05:54.893563-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> response ended
default	22:05:54.894032-0500	MobileJarvisNative	[C3] event: client:connection_idle @1.948s
default	22:05:54.894654-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> done using Connection 3
default	22:05:54.894800-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> summary for task success {transaction_duration_ms=101, response_status=200, connection=3, reused=1, reused_after_ms=29, request_start_ms=1, request_duration_ms=0, response_start_ms=100, response_duration_ms=1, request_bytes=1246, request_throughput_kbps=2086, response_bytes=750, response_throughput_kbps=488, cache_hit=true}
default	22:05:54.894898-0500	MobileJarvisNative	Task <38EF2DD8-C366-44A4-B219-2AF870DFA86A>.<10> finished successfully
default	22:05:54.896130-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-859-1988168 target:859 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	22:05:54.896382-0500	runningboardd	Assertion 33-859-1988168 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:859]) will be created as inactive as start-time-defining assertions exist
