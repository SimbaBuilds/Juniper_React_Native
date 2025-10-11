default	23:30:38.553942-0500	coreduetd	Deleting searchable items with bundleID: com.hightowerai.MobileJarvisNative
default	23:30:38.984905-0500	com.apple.MobileInstallationHelperService	0x16aee3000 -[MobileInstallationHelperService moveItemInStagingDirectory:atRelativePath:toDestinationURL:onBehalfOf:completion:]: 2081: Failed to move item from /private/var/mobile/Containers/Data/InternalDaemon/CF947902-F63D-460B-87D1-EF982AF95FD7/Library/Caches/com.apple.mobile.installd.staging/temp.r7aWh1/com.hightowerai.MobileJarvisNative.zip to /private/var/mobile/Containers/Data/InternalDaemon/5B88453F-CE27-4AFE-A42E-657597D7CF21/Library/Caches/generated_placeholders.noindex/com.hightowerai.MobileJarvisNative.zip because destination already exists
default	23:30:39.003602-0500	installd	0x16f5ef000 +[MIPlaceholderSerializer serializedPlaceholderForInstalledAppWithBundeID:personaUniqueString:atResultURL:onDevice:onBehalfOf:withError:]: 147: Failed to create a serialized placeholder for com.hightowerai.MobileJarvisNative/BED36376-5A4B-42A9-9620-6AE0BC5F0283 (MIInstallerErrorDomain:2 Failed to move item from /private/var/mobile/Containers/Data/InternalDaemon/CF947902-F63D-460B-87D1-EF982AF95FD7/Library/Caches/com.apple.mobile.installd.staging/temp.r7aWh1/com.hightowerai.MobileJarvisNative.zip to /private/var/mobile/Containers/Data/InternalDaemon/5B88453F-CE27-4AFE-A42E-657597D7CF21/Library/Caches/generated_placeholders.noindex/com.hightowerai.MobileJarvisNative.zip because destination already exists)
default	23:30:39.673139-0500	coreduetd	Deleting searchable items with bundleID: com.hightowerai.MobileJarvisNative
default	23:30:43.047266-0500	SpringBoard	SBIconView touches began with event: <UITouchesEvent: 0x865746a00> timestamp: 3.11779e+06 touches: {(
    <UITouch: 0x8692b3800> type: Direct; phase: Began; is pointer: NO; tap count: 1; force: 0.000; window: <SBHomeScreenWindow: 0x865c80000; HomeScreen-0x865c80000-5; baseClass = UIWindow; frame = (0 0; 390 844); clipsToBounds = YES; opaque = NO; autoresize = W+H; gestureRecognizers = <NSArray: 0x86d02bf40>; layer = <UIWindowLayer: 0x865c4d800>>; responder: <SBIconView: 0x8657fb200; frame: {{120, 557}, {60, 74}}; icon: <SBApplicationIcon: 0x86c3b8320; nodeID: com.hightowerai.MobileJarvisNative; bundleID: com.hightowerai.MobileJarvisNative>; location: SBIconLocationRoot; isTouchDownInIcon: YES>; location in window: {158, 596}; previous location in window: {158, 596}; location in view: {38, 39}; previous location in view: {38, 39}
)}, tap gesture: <SBIconTapGestureRecognizer: 0x86b432080; baseClass = UITapGestureRecognizer; state = Possible; view = <SBIconView: 0x8657fb200>; target= <(action=tapGestureDidChange:, target=<SBIconView 0x8657fb200>)>
default	23:30:43.100220-0500	SpringBoard	[SwitcherOrientation] outSwitcherOrientation: portrait (1), outElementsOrientations: {
    "sceneID:com.hightowerai.MobileJarvisNative-default" = 1;
}
default	23:30:43.106091-0500	SpringBoard	Generating initialization context on main thread for: com.hightowerai.MobileJarvisNative
default	23:30:43.111905-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:43.111958-0500	SpringBoard	Creating process (sync=true) with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:43.112109-0500	SpringBoard	Created <FBWorkspace: 0x86b6db840; <FBApplicationProcess: 0x86f0c4f00; app<com.hightowerai.MobileJarvisNative>:<invalid>>>
default	23:30:43.112133-0500	SpringBoard	Bootstrapping app<com.hightowerai.MobileJarvisNative> with intent foreground-interactive
default	23:30:43.112716-0500	SpringBoard	Prewarming for launch of com.hightowerai.MobileJarvisNative
default	23:30:43.112804-0500	runningboardd	Acquiring assertion targeting app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBApplicationProcess" ID:33-34-2190244 target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Bootstrap-Foreground" sourceEnvironment:"(null)">,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	23:30:43.112857-0500	runningboardd	Assertion 33-34-2190244 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) will be created as active
default	23:30:43.115413-0500	runningboardd	Creating and launching job for: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:43.115442-0500	runningboardd	_mutateContextIfNeeded called for com.hightowerai.MobileJarvisNative
default	23:30:43.120978-0500	runningboardd	app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: -[RBPersonaManager personaForIdentity:context:personaUID:personaUniqueString:] required 0.002027 ms (wallclock); resolved to {1000, BED36376-5A4B-42A9-9620-6AE0BC5F0283}
default	23:30:43.121011-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Skipping container path lookup because containerization was prevented (<RBSLaunchContext: 0xbde374280>)
default	23:30:43.121042-0500	runningboardd	'app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>' Constructed job description:
<dictionary: 0xbdeaa1f80> { count = 19, transaction: 0, voucher = 0x0, contents =
	"ProcessType" => <string: 0xbdec5fba0> { length = 3, contents = "App" }
	"EnableTransactions" => <bool: 0x26be26590>: false
	"_ManagedBy" => <string: 0xbdec5fa20> { length = 22, contents = "com.apple.runningboard" }
	"_ResourceCoalition" => <string: 0xbdec5d290> { length = 77, contents = "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>" }
	"CFBundleIdentifier" => <string: 0xbdec5e190> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
	"ThrottleInterval" => <int64: 0xb12671bb79099747>: 2147483647
	"PersonaEnterprise" => <int64: 0xb12671b886f677ff>: 1000
	"MachServices" => <dictionary: 0xbdeaa1200> { count = 0, transaction: 0, voucher = 0x0, contents =
	}
	"EnablePressuredExit" => <bool: 0x26be26590>: false
	"InitialTaskRole" => <int64: 0xb12671b886f668b7>: 1
	"UserName" => <string: 0xbdec5e820> { length = 6, contents = "mobile" }
	"EnvironmentVariables" => <dictionary: 0xbdeaa13e0> { count = 3, transaction: 0, voucher = 0x0, contents =
		"TMPDIR" => <string: 0xbdec5edc0> { length = 88, contents = "/private/var/mobile/Containers/Data/Application/C44A03BD-622C-4A99-AFB2-77F01D29C9A0/tmp" }
		"HOME" => <string: 0xbdec5f6f0> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/C44A03BD-622C-4A99-AFB2-77F01D29C9A0" }
		"CFFIXED_USER_HOME" => <string: 0xbdec5c930> { length = 84, contents = "/private/var/mobile/Containers/Data/Application/C44A03BD-622C-4A99-AFB2-77F01D29C9A0" }
	}
	"_AdditionalProperties" => <dictionary: 0xbdeaa2f40> { count = 1, transaction: 0, voucher = 0x0, contents =
		"RunningBoard" => <dictionary: 0xbdeaa22e0> { count = 3, transaction: 0, voucher = 0x0, contents =
			"Managed" => <bool: 0x26be26570>: true
			"RunningBoardLaunchedIdentity" => <dictionary: 0xbdeaa0f60> { count = 3, transaction: 0, voucher = 0x0, contents =
				"TYPE" => <int64: 0xb12671b886f668af>: 2
				"EAI" => <string: 0xbdec5ec70> { length = 34, contents = "com.hightowerai.MobileJarvisNative" }
				"PERS" => <string: 0xbdec5c300> { length = 36, contents = "BED36376-5A4B-42A9-9620-6AE0BC5F0283" }
			}
			"RunningBoardLaunched" => <bool: 0x26be26570>: true
		}
	}
	"ExitTimeOut" => <int64: 0xb12671b886f668b7>: 1
	"Label" => <string: 0xbdec5f1e0> { length = 68, contents = "UIKitApplication:com.hightowerai.MobileJarvisNative[008a][rb-legacy]" }
	"MaterializeDatalessFiles" => <bool: 0x26be26570>: true
	"_LaunchType" => <int64: 0xb12671b886f668a7>: 3
	"ProgramArguments" => <array: 0xbdec5f480> { count = 1, capacity = 8, contents =
		0: <string: 0xbdec5d5f0> { length = 113, contents = "/var/containers/Bundle/Application/D72EA035-3B45-4E80-98A9-D7CC3FB55228/MobileJarvisNative.app/MobileJarvisNative" }
	}
	"Program" => <string: 0xbdec5e430> { length = 113, contents = "/var/containers/Bundle/Application/D72EA035-3B45-4E80-98A9-D7CC3FB55228/MobileJarvisNative.app/MobileJarvisNative" }
}
default	23:30:43.131133-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Adding SwitcherScene overlay for: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	23:30:43.132714-0500	SpringBoard	_updatePreferences <Switcher>: {
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
default	23:30:43.137532-0500	SpringBoard	modifying scene setting userInterfaceStyle to Light displayIdentity: Main forSceneManagers: Main <SBDeviceApplicationSceneHandle: 0x8692b08c0; sceneID: sceneID:com.hightowerai.MobileJarvisNative-default; scenePointer: 0x0>
default	23:30:43.152182-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x8578660c0; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x85b5ee140; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 10, 2025 at 11:30:43 PM CDT;}
default	23:30:43.152302-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x857867580 10-10-2025 23:30:43, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	23:30:43.155324-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86955d680; type: MainTransition; transitionID: 2515174D-4439-418F-A77F-C3556BDDE1E4; phase: Prepare; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	23:30:43.155386-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86efdbea0> {
    <SBSwitcherModifierEventResponse: 0x86efd8a50> {
	    <SBTimerEventSwitcherEventResponse: 0x86efda040; delay: 0.300000; reason: kSBTransitionModifierInvalidateAsyncRenderingReason>;
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86efda430>;
	};
    <SBSwitcherModifierEventResponse: 0x86efd83c0> {
	    <SBUpdateLayoutSwitcherEventResponse: 0x86ce7f4c0; updateVisibleItems; layout; style; mode: None>;
	    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86efdb120; snapshotRequested: YES>;
	    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86ce7dc40; visible: YES; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBIconViewVisibilitySwitcherEventResponse: 0x86ce37610; visible: NO; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
	    <SBTimerEventSwitch
default	23:30:43.168515-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	23:30:43.187540-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x8664e9c80; type: MainTransition; transitionID: 2515174D-4439-418F-A77F-C3556BDDE1E4; phase: Animate; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	23:30:43.193984-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x8681835a0; type: SceneReady; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86bd4b020; contentOrientation: "portrait (1)"; lastInteractionTime: 201228; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86ce5ba80; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	23:30:43.194194-0500	kernel	/private/var/containers/Bundle/Application/D72EA035-3B45-4E80-98A9-D7CC3FB55228/MobileJarvisNative.app/MobileJarvisNative[26683] ==> container
default	23:30:43.194761-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] Memory Limits: active 2098 inactive 2098
 <private>
default	23:30:43.194962-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] This process will be managed.
default	23:30:43.195044-0500	runningboardd	Now tracking process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.195307-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	23:30:43.195569-0500	SpringBoard	Asked to bootstrap a new process with identity: app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:43.195945-0500	SpringBoard	Did not create a new process: A pending process for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> already exists.
default	23:30:43.195969-0500	runningboardd	Using default underlying assertion for app: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
error	23:30:43.195980-0500	kernel	Sandbox: MobileJarvisNative(26683) deny(1) sysctl-read kern.bootargs
default	23:30:43.196145-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] with description <RBSAssertionDescriptor| "RB Underlying Assertion" ID:33-33-2190245 target:26683 attributes:[
	<RBSDomainAttribute| domain:"com.apple.underlying" name:"defaultUnderlyingAppAssertion" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	23:30:43.196311-0500	runningboardd	Assertion 33-33-2190245 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) will be created as active
default	23:30:43.196912-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] Set jetsam priority to 100 [0] flag[1]
default	23:30:43.196959-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] Resuming task.
default	23:30:43.197091-0500	SpringBoard	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.197272-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] reported to RB as running
default	23:30:43.197297-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Bootstrap success!
default	23:30:43.197343-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.197372-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] Set darwin role to: UserInteractiveFocal
default	23:30:43.197453-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Setting process task state to: Running
default	23:30:43.197633-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Setting process visibility to: Foreground
default	23:30:43.198002-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Registering event dispatcher after bootstrap
default	23:30:43.198204-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Initial launch assertion state: ForegroundFocal.
default	23:30:43.198416-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] set Memory Limits to Soft Active (2098)
default	23:30:43.198638-0500	CommCenter	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.198663-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.198817-0500	SpringBoard	Adding: <FBApplicationProcess: 0x86f0c4f00; app<com.hightowerai.MobileJarvisNative>:26683(v94FF8)>
default	23:30:43.199162-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] Set Carplay mode to: 0
default	23:30:43.199192-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	23:30:43.201889-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] visiblity is yes
default	23:30:43.204147-0500	runningboardd	Successfully acquired underlying assertion for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.206906-0500	healthd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.206932-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.207442-0500	powerd	Process runningboardd.33 Created SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2190244:FBApplicationProcess" age:00:00:00  id:51539640395 [System: PrevIdle SysAct]
default	23:30:43.214725-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Foreground app will not request ephemeral notifications isAppClip: NO wantsEphemeral notifications: NO
default	23:30:43.215064-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:running-active debug:none endowmentNamespace:[
	com.apple.frontboard.visibility
	]>
default	23:30:43.215102-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming foreground for application without push registration
default	23:30:43.221328-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	23:30:43.223119-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Initialized with connection: 0x86eda6fd0.
default	23:30:43.223150-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Registered new scene: <FBUIApplicationWorkspaceScene: 0x867dccf00; (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default> (fromRemnant = 0)
default	23:30:43.223234-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Workspace interruption policy did change: reconnect
default	23:30:43.223284-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene activated.
default	23:30:43.223407-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "com.apple.frontboard.after-life.interrupted" ID:33-34-2190246 target:26683 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"AfterLife-Interrupted" sourceEnvironment:"(null)">
	]>
default	23:30:43.223437-0500	runningboardd	Assertion 33-34-2190246 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) will be created as inactive as originator process has not exited
default	23:30:43.223579-0500	SpringBoard	<BSCompoundAssertion:0x86b6700c0> (SBApplicationAppProtectionAssistant: 0x86b672b40 - com.hightowerai.MobileJarvisNative) acquire for reason:NULL scene acq:0x866606000 count:1
default	23:30:43.223650-0500	SpringBoard	scene will become FG visible for <APApplication: com.hightowerai.MobileJarvisNative>
default	23:30:43.223675-0500	SpringBoard	auth result for <APApplication: com.hightowerai.MobileJarvisNative>: true (null)
default	23:30:43.223846-0500	SpringBoard	[com.apple.springboard] didAddExternalForegroundApplicationSceneHandle pid:26683 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [26683]; recentSceneIdentityTokensByPID: {26683: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	23:30:43.223928-0500	SpringBoard	[coordinator] didAddExternalForegroundApplicationSceneHandle pid:26683 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<recentPIDs: [26683]; recentSceneIdentityTokensByPID: {26683: [com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default]}>
default	23:30:43.224755-0500	SpringBoard	Now tracking: <FBScene: 0x86840b500; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	23:30:43.224829-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: 'systemAnimation' for reason: scene settings update - settings are eligible for deactivation reasons.
default	23:30:43.224879-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: preparing
default	23:30:43.224906-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene lifecycle state did change: Foreground
default	23:30:43.224932-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene assertion state did change: ForegroundFocal.
default	23:30:43.225107-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Launch assertion supersedes update of workspace assertion to ForegroundFocal.
default	23:30:43.225133-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Workspace assertion state did change: ForegroundFocal (acquireAssertion = NO).
default	23:30:43.226366-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86900c200; pid: 26683; taskState: Running; visibility: Foreground>
default	23:30:43.228410-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	23:30:43.229362-0500	SpringBoard	MRNowPlayingAudioFormatController foreground bundle id changed: com.hightowerai.MobileJarvisNative
default	23:30:43.229964-0500	backboardd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.229991-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.234122-0500	locationd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.234566-0500	symptomsd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.234597-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.234707-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.234901-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 1;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 8;\n    SBApplicationStateProcessIDKey = 26683;\n    SBMostElevatedStateForProcessID = 8;\n}"}
default	23:30:43.235022-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":26683, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"RunningScheduled"}
default	23:30:43.235353-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"ForegroundRunning", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	23:30:43.235435-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"ForegroundRunning", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	23:30:43.235927-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:43.236418-0500	audiomxd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.237592-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"ForegroundRunning", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:43.237641-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":1}
default	23:30:43.237679-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	23:30:43.237719-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	23:30:43.237751-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:43.237785-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:43.238066-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.239265-0500	wifid	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.239370-0500	UserEventAgent	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.239425-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.240812-0500	WirelessRadioManagerd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.242248-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.243613-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.245446-0500	PerfPowerServices	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.245543-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.245661-0500	dasd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.245840-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.258662-0500	gamepolicyd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.258750-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	23:30:43.259155-0500	useractivityd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.259238-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative entered foreground
default	23:30:43.259329-0500	wifid	WifiDeviceManagerCatsWhitelistedApp: CATS en0:  deviceManager:0x4cc24a000 FgApp:com.hightowerai.MobileJarvisNative stateChange:1 whitelisted=1
default	23:30:43.259479-0500	wifid	WiFiDeviceManagerCatsSetLowLatencyApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative b=0x0 rc=0
default	23:30:43.259527-0500	wifid	WiFiDeviceManagerCatsSetForegroundApp: CATSUpdate en0: fgApp:com.hightowerai.MobileJarvisNative hs=0 t=1 wl=1 rc=1
default	23:30:43.259593-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.262346-0500	watchdogd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.262372-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.270067-0500	gamepolicyd	Identified game com.hightowerai.MobileJarvisNative GM:false DPS:false SEM:false MMA:true
default	23:30:43.276571-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: true
default	23:30:43.291074-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.291274-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.291301-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.291699-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.291865-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.292078-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.292197-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.292603-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.292685-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.292810-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.293159-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.293231-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.293303-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.293551-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	23:30:43.293770-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.300462-0500	callservicesd	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.300517-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.300869-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.305500-0500	wifid	-[WiFiUsageApplicationSession applicationStateDidChange:withAttributes:]: application session started:com.hightowerai.MobileJarvisNative
default	23:30:43.455809-0500	SpringBoard	[sceneID:com.hightowerai.MobileJarvisNative-default] Setting deactivation reasons to: '(none)' for reason: updateAllScenesForBand - Assertion removed.
default	23:30:43.555988-0500	MobileJarvisNative	[0x1144a8000] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon.system
default	23:30:43.556489-0500	MobileJarvisNative	[0x1144a8100] activating connection: mach=true listener=false peer=false name=com.apple.cfprefsd.daemon
default	23:30:43.562848-0500	MobileJarvisNative	Cache loaded with 5922 pre-cached in CacheData and 64 items in CacheExtra.
default	23:30:43.562951-0500	MobileJarvisNative	Initializing connection
default	23:30:43.563263-0500	MobileJarvisNative	Removing all cached process handles
default	23:30:43.563338-0500	MobileJarvisNative	Sending handshake request attempt #1 to server
default	23:30:43.563407-0500	MobileJarvisNative	Creating connection to com.apple.runningboard
default	23:30:43.563441-0500	MobileJarvisNative	[0x1144a8300] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	23:30:43.563500-0500	MobileJarvisNative	[0x1144b4000] activating connection: mach=false listener=false peer=false name=(anonymous)
default	23:30:43.564193-0500	runningboardd	Setting client for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] as ready
default	23:30:43.564979-0500	MobileJarvisNative	Creating new assertion because there is no existing background assertion.
default	23:30:43.565028-0500	MobileJarvisNative	Creating new background assertion
default	23:30:43.565053-0500	SpringBoard	Fetching initialization context for: com.hightowerai.MobileJarvisNative
default	23:30:43.565083-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	23:30:43.565109-0500	SpringBoard	Returning cached initialization context for com.hightowerai.MobileJarvisNative
default	23:30:43.565251-0500	MobileJarvisNative	Created new background assertion <BKSProcessAssertion: 0x1145a8050>
default	23:30:43.565967-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] with description <RBSAssertionDescriptor| "Shared Background Assertion 0 for com.hightowerai.MobileJarvisNative" ID:33-26683-2190247 target:26683 attributes:[
	<RBSLegacyAttribute| requestedReason:FinishTask reason:FinishTask flags:( PreventTaskSuspend )>,
	<RBSAcquisitionCompletionAttribute| policy:AfterValidation>
	]>
default	23:30:43.566415-0500	MobileJarvisNative	Handshake succeeded
default	23:30:43.566450-0500	MobileJarvisNative	Identity resolved as app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:43.566884-0500	runningboardd	Assertion 33-26683-2190247 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) will be created as inactive as start-time-defining assertions exist
default	23:30:43.567104-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	23:30:43.567174-0500	backboardd	Connection added: IOHIDEventSystemConnection uuid:B6EB70D7-9A44-4DD9-8EBB-5DBE03992B8F pid:26683 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 26683;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	23:30:43.567307-0500	backboardd	Adding client connection: <BKHIDClientConnection: 0xca6fc8940; IOHIDEventSystemConnectionRef: 0xc997f9600; vpid: 26683(v94FF8); taskPort: 0x10246F; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:B6EB70D7-9A44-4DD9-8EBB-5DBE03992B8F pid:26683 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 26683;
} state:0x0 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	23:30:43.567555-0500	MobileJarvisNative	Created background task <private>.
default	23:30:43.568274-0500	MobileJarvisNative	Realizing settings extension _UIApplicationSceneKeyboardSettings on FBSSceneSettings
default	23:30:43.571572-0500	MobileJarvisNative	Deactivation reason added: 10; deactivation reasons: 0 -> 1024; animating application lifecycle event: 0
default	23:30:43.571645-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.open
default	23:30:43.572194-0500	MobileJarvisNative	activating monitor for service com.apple.frontboard.workspace-service
default	23:30:43.572221-0500	MobileJarvisNative	FBSWorkspace registering source: <private>
default	23:30:43.575525-0500	MobileJarvisNative	Realizing settings extension <_UISceneOcclusionSettings> on FBSSceneSettings
default	23:30:43.575787-0500	MobileJarvisNative	Realizing settings extension <_UISceneInterfaceProtectionSceneSettings> on FBSSceneSettings
default	23:30:43.575859-0500	MobileJarvisNative	Realizing settings extension <_UIHomeAffordanceHostSceneSettings> on FBSSceneSettings
default	23:30:43.576184-0500	MobileJarvisNative	Realizing settings extension _UISystemShellSceneHostingEnvironmentSettings on FBSSceneSettings
default	23:30:43.576316-0500	MobileJarvisNative	FBSWorkspace connected to endpoint : <private>
default	23:30:43.576349-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x114499e80 <private>> attempting immediate handshake from activate
default	23:30:43.576375-0500	MobileJarvisNative	Realizing settings extension _UISceneRenderingEnvironmentSettings on FBSSceneSettings
default	23:30:43.576400-0500	MobileJarvisNative	<FBSWorkspaceScenesClient:0x114499e80 <private>> sent handshake
default	23:30:43.576462-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Connection established.
default	23:30:43.576495-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] created proxy of <BSXPCServiceConnectionProxy<FBSWorkspaceServiceServerInterface>: 0x86c190850>
default	23:30:43.576522-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Connection to remote process established!
default	23:30:43.576669-0500	MobileJarvisNative	Added observer for process assertions expiration warning: <_RBSExpirationWarningClient: 0x1144fdc20>
default	23:30:43.576894-0500	MobileJarvisNative	Realizing settings extension <_UISceneTransitioningHostSettings> on FBSSceneSettings
default	23:30:43.577167-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingContentSizePreferenceClientSettings> on FBSSceneClientSettings
default	23:30:43.578036-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene action [Logical Activate][0x28ff] to process 0x86f0c4f00 (watchdog: 19.61s)
default	23:30:43.578090-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending scene create.
default	23:30:43.578150-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: <SBApplicationProcessState: 0x86be9c840; pid: 26683; taskState: Running; visibility: Foreground>
default	23:30:43.578299-0500	MobileJarvisNative	Realizing settings extension _UISceneHostingTraitCollectionPropagationSettings on FBSSceneSettings
default	23:30:43.579051-0500	SpringBoard	SceneWorkspaceDelegate[0x864b4c120-com.apple.SpringBoard.SceneWorkspace.PrototypeTools] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579088-0500	SpringBoard	SceneWorkspaceDelegate[0x8649392e0-com.apple.SpringBoard.SceneWorkspace.DruidUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579118-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a600-com.apple.SpringBoard.SceneWorkspace.FullKeyboardAccessUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579144-0500	SpringBoard	SceneWorkspaceDelegate[0x8648c9600-com.apple.SpringBoard.SceneWorkspace.PerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579174-0500	SpringBoard	SceneWorkspaceDelegate[0x864939140-com.apple.SpringBoard.SceneWorkspace.InputUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579233-0500	SpringBoard	SceneWorkspaceDelegate[0x86493adc0-com.apple.SpringBoard.SceneWorkspace.AssistiveTouchUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579258-0500	SpringBoard	SceneWorkspaceDelegate[0x8649397a0-com.apple.SpringBoard.SceneWorkspace.OverlayUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579284-0500	SpringBoard	SceneWorkspaceDelegate[0x864939920-com.apple.SpringBoard.SceneWorkspace.VoiceControlUI] client did connect with handshake: <FBSceneClientHandshake:0x86be9f760; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579308-0500	SpringBoard	SceneWorkspaceDelegate[0x86493ac60-com.apple.SpringBoard.SceneWorkspace.EyedropperUI] client did connect with handshake: <FBSceneClientHandshake:0x86900e9a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579334-0500	SpringBoard	SceneWorkspaceDelegate[0x8648cbac0-com.apple.SpringBoard.SceneWorkspace.InternalPerfPowerHUD] client did connect with handshake: <FBSceneClientHandshake:0x86900e9a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579358-0500	SpringBoard	SceneWorkspaceDelegate[0x86493b940-com.apple.SpringBoard.SceneWorkspace.Moments] client did connect with handshake: <FBSceneClientHandshake:0x86900e9a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579381-0500	SpringBoard	SceneWorkspaceDelegate[0x86493aaa0-com.apple.SpringBoard.SceneWorkspace.AccessibilityUIServerUI] client did connect with handshake: <FBSceneClientHandshake:0x86900e9a0; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.579596-0500	SpringBoard	SceneWorkspaceDelegate[0x86493a3c0-com.apple.SpringBoard.SceneWorkspace.LiveTranscriptionUI] client did connect with handshake: <FBSceneClientHandshake:0x868182740; [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] remnants=0>
default	23:30:43.581151-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationSettings> on FBSSceneSettings
default	23:30:43.581183-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1144b4640> for initial
default	23:30:43.581612-0500	MobileJarvisNative	Evaluated capturing state as 0 on <UIScreen: 0x1144b4640> for CADisplay KVO
default	23:30:43.582932-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingSheetPresentationClientSettings> on FBSSceneClientSettings
default	23:30:43.583065-0500	MobileJarvisNative	Realizing settings extension <_UISceneHostingEventDeferringSettings> on FBSSceneSettings
default	23:30:43.583419-0500	MobileJarvisNative	Read CategoryName: per-app = 1, category name = (null)
default	23:30:43.583507-0500	MobileJarvisNative	Read CategoryName: per-app = 0, category name = (null)
default	23:30:43.584736-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneSettings
default	23:30:43.585124-0500	MobileJarvisNative	Realizing settings extension <UIKit__UITypedKeyValueSceneSettings> on FBSSceneClientSettings
default	23:30:43.585374-0500	MobileJarvisNative	Realizing settings extension FBSSceneSettingsCore on FBSSceneSettings
default	23:30:43.586697-0500	MobileJarvisNative	Registering for test daemon availability notify post.
default	23:30:43.586831-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	23:30:43.586889-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	23:30:43.586914-0500	MobileJarvisNative	notify_get_state check indicated test daemon not ready.
default	23:30:43.587794-0500	MobileJarvisNative	Selected display: name=LCD (primary), id=1
default	23:30:43.589152-0500	MobileJarvisNative	Realizing settings extension FBSSceneClientSettingsCore on FBSSceneClientSettings
default	23:30:43.589797-0500	MobileJarvisNative	UIMutableApplicationSceneSettings setting counterpart class: UIApplicationSceneSettings
default	23:30:43.589998-0500	MobileJarvisNative	UIMutableApplicationSceneClientSettings setting counterpart class: UIApplicationSceneClientSettings
default	23:30:43.590049-0500	MobileJarvisNative	Realizing settings extension FBSSceneTransitionContextCore on FBSSceneTransitionContext
default	23:30:43.600104-0500	MobileJarvisNative	Will add backgroundTask with taskName: <private>, expirationHandler: <__NSGlobalBlock__: 0x1f1102278>
default	23:30:43.600193-0500	MobileJarvisNative	Reusing background assertion <BKSProcessAssertion: 0x1145a8050>
default	23:30:43.600229-0500	MobileJarvisNative	Incrementing reference count for background assertion <private>
default	23:30:43.600256-0500	MobileJarvisNative	Created background task <private>.
default	23:30:43.601089-0500	MobileJarvisNative	Deactivation reason added: 5; deactivation reasons: 1024 -> 1056; animating application lifecycle event: 1
default	23:30:43.601654-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.601701-0500	MobileJarvisNative	Should send trait collection or coordinate space update, interface style 1 -> 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.602983-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.608107-0500	MobileJarvisNative	Initializing: <_UIHomeAffordanceSceneNotifier: 0x1145e8850>; with scene: <UIWindowScene: 0x106f1b1a0>
default	23:30:43.608237-0500	MobileJarvisNative	0x114610a50 setDelegate:<0x114610990 _UIBacklightEnvironment> hasDelegate:YES for environment:sceneID:com.hightowerai.MobileJarvisNative-default
default	23:30:43.608403-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.608706-0500	MobileJarvisNative	[0x1145e87e0] Initialized with scene: <UIWindowScene: 0x106f1b1a0>; behavior: <_UIEventDeferringBehavior_iOS: 0x1144feea0>; availableForProcess: 1, systemShellManagesKeyboardFocus: 1
default	23:30:43.608967-0500	MobileJarvisNative	[0x1144b5040] activating connection: mach=false listener=false peer=false name=(anonymous)
default	23:30:43.609648-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to LastOneWins
default	23:30:43.611179-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.613401-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.613737-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
error	23:30:43.614069-0500	MobileJarvisNative	CLIENT OF UIKIT REQUIRES UPDATE: This process does not adopt UIScene lifecycle. This will become an assert in a future version.
default	23:30:43.614095-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.616507-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 839D1287-79EE-456F-A918-5839B55C08F5
default	23:30:43.616571-0500	MobileJarvisNative	Ignoring already applied deactivation reason: 5; deactivation reasons: 1056
default	23:30:43.616596-0500	MobileJarvisNative	Deactivation reason added: 11; deactivation reasons: 1056 -> 3104; animating application lifecycle event: 1
default	23:30:43.616882-0500	MobileJarvisNative	startConnection
default	23:30:43.618805-0500	MobileJarvisNative	[0x1144b57c0] activating connection: mach=true listener=false peer=false name=com.apple.UIKit.KeyboardManagement.hosted
default	23:30:43.619239-0500	MobileJarvisNative	You've implemented -[<UIApplicationDelegate> application:didReceiveRemoteNotification:fetchCompletionHandler:], but you still need to add "remote-notification" to the list of your supported UIBackgroundModes in your Info.plist.
default	23:30:43.621793-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.622028-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(26683) startArbitration
    expectedState:(null)
    focusContext:<private>
    hostingPIDs:<private> usingFence:Y withSuppression:0
default	23:30:43.623179-0500	SpringBoard	set focusRequestedHandle:<com.hightowerai.MobileJarvisNative focus:(null) run:Y hosting:() level:0 active:N wantedState:Disabled #suppr:0 iavHeight:0 onScreen:N>
default	23:30:43.623533-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.623558-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.623783-0500	SpringBoard	[com.apple.springboard] coalition says I have focus; enforcing policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	23:30:43.623861-0500	SpringBoard	rules: (keyboardFocus) outbound target changed from:(null) to <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.623887-0500	SpringBoard	rules: (keyboardFocus) defer (<com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard pid:34>) -> <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.624675-0500	SpringBoard	[coordinator] new enforced policy: {
    keyboardFocusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>;
    selectionPolicy: KeyboardArbiter;
    shouldSuppressRemoteDeferring: 0;
}
default	23:30:43.624762-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.625052-0500	backboardd	new deferring rules for pid:34: [
    [34-6B19]; <keyboardFocus; builtin; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: 0x8431F1C; pid: 34>; reason: …gin event deferring in keyboardFocus for window: 0x8673ef100,
    [34-2]; <system; builtin; SBMainSystemGestures> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestureSymbol-Main,
    [34-1]; <system; builtin> -> <token: 0x8C885EB2; pid: 34>; reason: systemGestures-Main,
    [34-6B1A]; <keyboardFocus; …board.systemappservices/FBSceneManager:com.apple.springboard> -> <token: …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>; reason: SpringBoard<com.apple.springboard>: enforcing outbound,
    [34-4]; <keyboardFocus; SBKeyboardFocus> -> <token: …board.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>; reason: SB incoming to root scene (symbol),
    [34-5]; <systemKeyCommandOverlay> -> <token: 0xF15DAC17; pid: 34>; reason: systemKeyCommandOverlayEnvironment to root scene,
    [34-3]; <keyboardFocus> -> <t
default	23:30:43.626249-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>
]
default	23:30:43.626281-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x1145a8690; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: target> was:none
default	23:30:43.626308-0500	MobileJarvisNative	observerPolicyDidChange: 0x1145a8690 -> <_UIKeyWindowSceneObserver: 0x114610ba0>
default	23:30:43.626408-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>
]
default	23:30:43.627628-0500	SpringBoard	rules: (scene setting) ADDED keyboardFocus environment to scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	23:30:43.641664-0500	wifid	__WiFiLQAMgrLogStats(TowerStation:Stationary): InfraUptime:96013.8secs Channel: 157 Bandwidth: 80Mhz Rssi: -38 {-43 -46} Cca: 9 (S:1 O:4 I:3) Snr: 17 BcnPer: 0.0% (49, 51.3%) TxFrameCnt: 92 TxPer: 0.0% TxReTrans: 0 TxRetryRatio: 0.0% RxFrameCnt: 85 RxRetryFrames: 0 RxRetryRatio: 0.0% TxRate: 286760 RxRate: 1200950 FBRate: 172050 TxFwFrms: 2 TxFwFail: 0 Noise: -89 {-89 -91 -2} time: 10.5secs fgApp: com.hightowerai.MobileJarvisNative V: T
default	23:30:43.658266-0500	MobileJarvisNative	Realizing settings extension <_UIApplicationSceneDisplaySettings> on FBSSceneSettings
default	23:30:43.662406-0500	MobileJarvisNative	<UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5) Scene updated orientation preferences: none -> ( Pu )
default	23:30:43.664675-0500	MobileJarvisNative	Key window API is scene-level: YES
default	23:30:43.664705-0500	MobileJarvisNative	UIWindowScene: 0x106f1b1a0: Window became key in scene: UIWindow: 0x11468c000; contextId: 0x6291CB98: reason: UIWindowScene: 0x106f1b1a0: Window requested to become key in scene: 0x11468c000
default	23:30:43.664793-0500	MobileJarvisNative	Key window needs update: 1; currentKeyWindowScene: 0x0; evaluatedKeyWindowScene: 0x106f1b1a0; currentApplicationKeyWindow: 0x0; evaluatedApplicationKeyWindow: 0x11468c000; reason: UIWindowScene: 0x106f1b1a0: Window requested to become key in scene: 0x11468c000
default	23:30:43.664823-0500	MobileJarvisNative	Window did become application key: UIWindow: 0x11468c000; contextId: 0x6291CB98; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.664920-0500	MobileJarvisNative	[0x1145e87e0] Begin local event deferring requested for token: 0x114484f60; environments: 1; reason: UIWindowScene: 0x106f1b1a0: Begin event deferring in keyboardFocus for window: 0x11468c000
default	23:30:43.665934-0500	backboardd	new deferring rules for pid:26683: [[26683-1]; <keyboardFocus; builtin; …Manager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> -> <token: 0x6291CB98; pid: 26683>; reason: …gin event deferring in keyboardFocus for window: 0x11468c000]
default	23:30:43.666769-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(26683) setClientFocusContext
    focusContext:<contextID:1653722008 sceneID:com.hightowerai.MobileJarvisNative-default>
default	23:30:43.667047-0500	SpringBoard	[coordinator] handling new keyboard arbiter request pid: 26683 sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.667071-0500	SpringBoard	arbiter: arbiter requested pid 26683 / com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.667167-0500	SpringBoard	[coordinator] using arbiter suggested pid 26683 + scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.667191-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.667396-0500	SpringBoard	[coordinator] keyboard arbiter suggested <pid: 26683; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:43.667834-0500	SpringBoard	set currentFocus PID:26683 sceneIdentity:com.hightowerai.MobileJarvisNative-default
default	23:30:43.668298-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null; compatibilityDisplay: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>,
    <token: 0x6291CB98; pid: 26683>
]
default	23:30:43.668323-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>,
    <token: 0x6291CB98; pid: 26683>
]
default	23:30:43.670638-0500	MobileJarvisNative	policyStatus:<BKSHIDEventDeliveryPolicyObserver: 0x1145a8690; token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; status: ancestor> was:target
default	23:30:43.670674-0500	MobileJarvisNative	observerPolicyDidChange: 0x1145a8690 -> <_UIKeyWindowSceneObserver: 0x114610ba0>
default	23:30:43.670883-0500	MobileJarvisNative	Deactivation reason removed: 10; deactivation reasons: 3104 -> 2080; animating application lifecycle event: 1
default	23:30:43.670972-0500	MobileJarvisNative	Deactivation reason added: 12; deactivation reasons: 2080 -> 6176; animating application lifecycle event: 1
default	23:30:43.671000-0500	MobileJarvisNative	Deactivation reason removed: 11; deactivation reasons: 6176 -> 4128; animating application lifecycle event: 1
default	23:30:43.671897-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.672306-0500	MobileJarvisNative	establishing connection to agent
default	23:30:43.673103-0500	SpringBoard	Scene <FBScene: 0x86840b500; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default> is setting idleTimerDisabled to: NO
default	23:30:43.673155-0500	SpringBoard	SBIdleTimerGlobalCoordinator - updateIdleTimerForReason:"IdleTimerDisableChangedForMainDisplaySceneManager - client:com.hightowerai.MobileJarvisNative"]
default	23:30:43.673286-0500	backboardd	new scene host settings: contextID:6291CB98 <sceneID:com.hightowerai.MobileJarvisNative-default> unspecified -> foreground
default	23:30:43.673461-0500	MobileJarvisNative	[0x1145a9f40] Session created.
default	23:30:43.673496-0500	MobileJarvisNative	[0x1145a9f40] Session created from connection [0x1144a8200]
default	23:30:43.673850-0500	MobileJarvisNative	[0x1144a8200] activating connection: mach=true listener=false peer=false name=com.apple.uiintelligencesupport.agent
default	23:30:43.673993-0500	MobileJarvisNative	[0x1145a9f40] Session activated
default	23:30:43.691802-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Scene action [Logical Activate][0x28ff] completed with success: 1
default	23:30:43.692085-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: ready
default	23:30:43.695067-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:1 [646C7335-0CC2-4BF5-BE4A-5A402FDC769A] (reporting strategy default)>
default	23:30:43.695096-0500	MobileJarvisNative	Create activity from XPC object <nw_activity 50:2 [10E6AE80-F778-47A9-86C0-55B2FD6ABEF9] (reporting strategy default)>
default	23:30:43.695121-0500	MobileJarvisNative	Set activity <nw_activity 50:1 [646C7335-0CC2-4BF5-BE4A-5A402FDC769A] (reporting strategy default)> as the global parent
default	23:30:43.697163-0500	MobileJarvisNative	AggregateDictionary is deprecated and has been removed. Please migrate to Core Analytics.
default	23:30:43.697243-0500	MobileJarvisNative	Ending background task with UIBackgroundTaskIdentifier: 1
default	23:30:43.697269-0500	MobileJarvisNative	Ending task with identifier 1 and description: <private>, _expireHandler: (null)
default	23:30:43.697294-0500	MobileJarvisNative	Decrementing reference count for assertion <private> (used by background task with identifier 1: <private>)
default	23:30:43.697365-0500	MobileJarvisNative	Scene target of keyboard event deferring environment did change: 1; scene: UIWindowScene: 0x106f1b1a0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.697422-0500	MobileJarvisNative	[0x1145e87e0] Scene target of event deferring environments did update: scene: 0x106f1b1a0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	23:30:43.697451-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x106f1b1a0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.697474-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	23:30:43.697500-0500	MobileJarvisNative	Stack[KeyWindow] 0x11444c690: Migrate scenes from LastOneWins -> SystemShellManaged
default	23:30:43.697525-0500	MobileJarvisNative	Setting default evaluation strategy for UIUserInterfaceIdiomPhone to SystemShellManaged
default	23:30:43.697576-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	23:30:43.697626-0500	MobileJarvisNative	[0x1145e87e0] Scene target of event deferring environments did update: scene: 0x106f1b1a0; current systemShellManagesKeyboardFocus: 1; systemShellManagesKeyboardFocusForScene: 1; eligibleForRecordRemoval: 1;
default	23:30:43.697652-0500	MobileJarvisNative	Scene became target of keyboard event deferring environment: UIWindowScene: 0x106f1b1a0; scene identity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:43.697962-0500	MobileJarvisNative	Event Timing Profile for Touch: ok, path="/System/Library/EventTimingProfiles/D17.Touch.plist"
default	23:30:43.698035-0500	MobileJarvisNative	Event Timing Profile for Pencil: not found, path="/System/Library/EventTimingProfiles/D17.Pencil.plist"
default	23:30:43.698110-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default) from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "injecting inherited from "UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard" to 26683<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default>" ID:33-34-2190248 target:26683<UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default> attributes:[
	<RBSHereditaryGrant| endowmentNamespace:com.apple.boardservices.endpoint-injection UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>,
	<RBSHereditaryGrant| endowmentNamespace:com.apple.frontboard.visibility UIScene:com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard>
	]>
default	23:30:43.698143-0500	runningboardd	Assertion 33-34-2190248 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683](UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default)) will be created as active
default	23:30:43.698173-0500	MobileJarvisNative	Not push traits update to screen for new style 1, <UIWindowScene: 0x106f1b1a0> (839D1287-79EE-456F-A918-5839B55C08F5)
default	23:30:43.698662-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 839D1287-79EE-456F-A918-5839B55C08F5
default	23:30:43.698766-0500	MobileJarvisNative	Deactivation reason removed: 12; deactivation reasons: 4128 -> 32; animating application lifecycle event: 1
default	23:30:43.698822-0500	MobileJarvisNative	Send setDeactivating: N (-DeactivationReason:SuspendedEventsOnly)
default	23:30:43.698851-0500	MobileJarvisNative	Deactivation reason removed: 5; deactivation reasons: 32 -> 0; animating application lifecycle event: 0
default	23:30:43.699083-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	23:30:43.699321-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	23:30:43.699395-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Setting parent scene: (FBSceneManager):com.apple.springboard
default	23:30:43.699419-0500	runningboardd	Inheritance changeset: <RBSInheritanceChangeSet| gained:{(
    <RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2190248 payload 15918742631522514469>
)} lost:{(
)}>
default	23:30:43.699516-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] propagating 4 settings from (FBSceneManager):com.apple.springboard
default	23:30:43.700391-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.700467-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBSceneReadySwitcherModifierEvent: 0x86bfabfc0; type: SceneReady; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main> {
    configuration = full;
    itemsToLayoutAttributes = {
        sceneID:com.hightowerai.MobileJarvisNative-default = <SBDisplayItemLayoutAttributes: 0x86bd4b020; contentOrientation: "portrait (1)"; lastInteractionTime: 201228; sizingPolicy: maximized; size: unspecified; center: unspecified; occlusionState: unknown; userConfiguredSizeBeforeOverlapping: unspecified; unoccludedPeekingCenter: unspecified>;
    }
    environment = main;
    centerConfiguration = undefined;
    preferredDisplayOrdinal = 0;
    continuousExposeIdentifier = com.hightowerai.MobileJarvisNative;
    layoutItems = {
        primary = <SBDisplayItem: 0x86ce5ba80; type: App; bundleIdentifier: com.hightowerai.MobileJarvisNative; uniqueIdentifier: sceneID:com.hightowerai.MobileJarvisNative-default>;
    }
}>
default	23:30:43.700886-0500	MobileJarvisNative	Updating configuration of monitor M26683-1
default	23:30:43.701822-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.701853-0500	MobileJarvisNative	[0x1144a8600] activating connection: mach=true listener=false peer=false name=com.apple.hangtracermonitor
default	23:30:43.702044-0500	MobileJarvisNative	Creating side-channel connection to com.apple.runningboard
default	23:30:43.702194-0500	MobileJarvisNative	[0x1144a8900] activating connection: mach=true listener=false peer=false name=com.apple.runningboard
default	23:30:43.703155-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.703397-0500	MobileJarvisNative	Skip setting user action callback for 3rd party apps
default	23:30:43.703690-0500	MobileJarvisNative	[0x1144a8b00] activating connection: mach=true listener=false peer=false name=com.apple.analyticsd
default	23:30:43.703720-0500	MobileJarvisNative	[0x1144a8600] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:43.704083-0500	MobileJarvisNative	Hit the server for a process handle 1d16c5ec0000683b that resolved to: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:43.704138-0500	MobileJarvisNative	Target list changed: <CADisplay:LCD primary>
default	23:30:43.704188-0500	MobileJarvisNative	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	23:30:43.705187-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 839D1287-79EE-456F-A918-5839B55C08F5
default	23:30:43.705518-0500	MobileJarvisNative	startConnection
default	23:30:43.705785-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 839D1287-79EE-456F-A918-5839B55C08F5
default	23:30:43.706278-0500	MobileJarvisNative	handleKeyboardChange: set currentKeyboard:N (wasKeyboard:N)
default	23:30:43.706302-0500	MobileJarvisNative	forceReloadInputViews
default	23:30:43.706355-0500	MobileJarvisNative	Reloading input views for: <(null): 0x0; > force: 1
default	23:30:43.707535-0500	MobileJarvisNative	isWritingToolsHandlingKeyboardTracking:Y (WT ready:Y, Arbiter ready:Y)
default	23:30:43.707632-0500	MobileJarvisNative	sceneOfRecord: sceneID: sceneID:com.hightowerai.MobileJarvisNative-default  persistentID: 839D1287-79EE-456F-A918-5839B55C08F5
default	23:30:43.710539-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.714215-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.715856-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.716800-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.718425-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.719062-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.720607-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.721008-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.722259-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.723285-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.724189-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.725142-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	23:30:43.726304-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.736819-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	23:30:43.737066-0500	MobileJarvisNative	networkd_settings_read_from_file initialized networkd settings by reading plist directly
default	23:30:43.756125-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	23:30:43.758797-0500	MobileJarvisNative	-[SOConfigurationClient init]  on <private>
default	23:30:43.760325-0500	MobileJarvisNative	[0x114714000] activating connection: mach=true listener=false peer=false name=com.apple.AppSSO.service-xpc
default	23:30:43.760461-0500	MobileJarvisNative	<SOServiceConnection: 0x1146f4820>: new XPC connection
default	23:30:43.765728-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] with description <RBSAssertionDescriptor| "com.apple.CFNetwork.StorageDB" ID:33-26683-2190249 target:26683 attributes:[
	<RBSDomainAttribute| domain:"com.apple.common" name:"FinishTaskUninterruptable" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>
	]>
default	23:30:43.765763-0500	runningboardd	Assertion 33-26683-2190249 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) will be created as inactive as start-time-defining assertions exist
default	23:30:43.777602-0500	MobileJarvisNative	Initializing NSHTTPCookieStorage singleton
default	23:30:43.777626-0500	MobileJarvisNative	Initializing CFHTTPCookieStorage singleton
default	23:30:43.777651-0500	MobileJarvisNative	Creating default cookie storage with default identifier
default	23:30:43.778175-0500	MobileJarvisNative	Requesting container lookup; class = 13, identifier = <private>, group_identifier = <private>, create = 1, temp = 0, euid = 501, uid = 501
default	23:30:43.779300-0500	MobileJarvisNative	container_query_get_single_result: success
default	23:30:43.779417-0500	MobileJarvisNative	container_system_group_path_for_identifier: success
default	23:30:43.781961-0500	MobileJarvisNative	Initializing AlternativeServices Storage singleton
default	23:30:43.782604-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	23:30:43.790926-0500	MobileJarvisNative	[0x114714780] activating connection: mach=true listener=false peer=false name=com.apple.fontservicesd
default	23:30:43.798790-0500	MobileJarvisNative	Garbage collection for alternative services
default	23:30:43.798846-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	23:30:43.802202-0500	MobileJarvisNative	Connection 1: enabling TLS
default	23:30:43.802229-0500	MobileJarvisNative	Connection 1: starting, TC(0x0)
default	23:30:43.802337-0500	MobileJarvisNative	[C1 5E4E3BE1-68F9-446F-AADC-842BB99DDDCB Hostname#7534a036:443 quic-connection, url hash: 51e81a9c, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8DAE2588-C4CE-42C1-B4EB-42DEE2B79EEB}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96] start
default	23:30:43.802469-0500	MobileJarvisNative	[C1 Hostname#7534a036:443 initial parent-flow ((null))] event: path:start @0.000s
default	23:30:43.804805-0500	MobileJarvisNative	[C1 Hostname#7534a036:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: E423766B-3FF5-455A-A10C-A007CB210988
default	23:30:43.805109-0500	MobileJarvisNative	[C1 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	23:30:43.805135-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C1] reporting state preparing
default	23:30:43.805212-0500	MobileJarvisNative	[C1 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.002s
default	23:30:43.805342-0500	MobileJarvisNative	[C1.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.002s
default	23:30:43.805955-0500	MobileJarvisNative	[C1.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: E423766B-3FF5-455A-A10C-A007CB210988
default	23:30:43.806286-0500	MobileJarvisNative	[C1.1 Hostname#7534a036:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.003s
default	23:30:43.806421-0500	MobileJarvisNative	[C1.1.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.003s
default	23:30:43.806896-0500	MobileJarvisNative	[C1.1.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.004s, uuid: 53D7C33F-AE35-4F8A-8E62-CD997D4D8503
default	23:30:43.807219-0500	MobileJarvisNative	[C1.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.004s
default	23:30:43.807564-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> setting up Connection 1
default	23:30:43.807698-0500	MobileJarvisNative	[0x1144a9300] activating connection: mach=true listener=false peer=false name=com.apple.dnssd.service
default	23:30:43.810287-0500	MobileJarvisNative	[C1.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.007s
default	23:30:43.810381-0500	MobileJarvisNative	[C1.1 Hostname#7534a036:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:restart @0.007s
default	23:30:43.810796-0500	MobileJarvisNative	[C1.1.2 Hostname#7534a036:443 initial path ((null))] event: path:start @0.007s
default	23:30:43.811219-0500	MobileJarvisNative	[C1.1.2 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.007s, uuid: FFFEFED8-8BB6-4930-BA6E-6E3E7C5C10E8
default	23:30:43.811378-0500	MobileJarvisNative	[C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.007s
default	23:30:43.812622-0500	MobileJarvisNative	🎵 ConfigManager: Starting loadConfig()...
default	23:30:43.812697-0500	MobileJarvisNative	🎵 ConfigManager: Bundle path lookup result: nil
default	23:30:43.812776-0500	MobileJarvisNative	🎵 ConfigManager: Bundle resource path: /private/var/containers/Bundle/Application/D72EA035-3B45-4E80-98A9-D7CC3FB55228/MobileJarvisNative.app
default	23:30:43.812827-0500	MobileJarvisNative	🎵 ConfigManager: Config-related files in bundle:
default	23:30:43.812900-0500	MobileJarvisNative	❌ ConfigManager: config.properties file not found in bundle
default	23:30:43.813875-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#a3fec298.443
default	23:30:43.813905-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#3343e696.443
default	23:30:43.813930-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#c169ef78:443
default	23:30:43.813956-0500	MobileJarvisNative	nw_endpoint_resolver_update [C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4199f981:443
default	23:30:43.814125-0500	MobileJarvisNative	[C1.1.2 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.010s
default	23:30:43.814306-0500	MobileJarvisNative	[C1.1.2.1 IPv6#a3fec298.443 initial path ((null))] event: path:start @0.010s
default	23:30:43.814762-0500	MobileJarvisNative	[C1.1.2.1 IPv6#a3fec298.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.011s, uuid: 1E3C7284-165F-4D3B-8736-C6A8F7885C5D
default	23:30:43.814892-0500	MobileJarvisNative	[C1.1.2.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.011s
default	23:30:43.815272-0500	MobileJarvisNative	[C1.1.2.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.011s
default	23:30:43.817859-0500	MobileJarvisNative	nw_path_evaluator_start [1056D471-E10B-4BE0-A5D4-56FC3E453924 <NULL> generic, multipath service: 1, attribution: developer]
	path: satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi
default	23:30:43.817910-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Loading configuration...
default	23:30:43.818002-0500	MobileJarvisNative	🎵 ConfigManager: getDeepgramApiKey() - Key from config file: 'nil...' (total config keys: 0)
default	23:30:43.818263-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Configuration loaded - API key present: NO, preview: 'nil...'
default	23:30:43.818286-0500	MobileJarvisNative	🎵 DEEPGRAM_API: Selected voice: aura-asteria-en
default	23:30:43.818901-0500	MobileJarvisNative	quic_conn_initialize_inner [C1.1.2.1:2] [-e8982113040f382c] created QUIC connection (spin bit enabled)
default	23:30:43.819895-0500	MobileJarvisNative	[C1.1.2.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.015s
default	23:30:43.823285-0500	MobileJarvisNative	quic_crypto_new_flow [C1.1.2.1:2] [-e8982113040f382c] TLS stream is: [C2]
default	23:30:43.823415-0500	MobileJarvisNative	[C2 4DCFBA6D-B2C6-4D7D-950A-4997FBB1B0F1 IPv6#a3fec298.443 quic-connection, url hash: 51e81a9c, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8DAE2588-C4CE-42C1-B4EB-42DEE2B79EEB}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96, no transport] start
default	23:30:43.823568-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	23:30:43.823625-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 1E3C7284-165F-4D3B-8736-C6A8F7885C5D
default	23:30:43.823806-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:43.823857-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state preparing
default	23:30:43.823934-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:43.823962-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	23:30:43.824232-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C2:1][0x114776200] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	23:30:43.824471-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C2:1][0x114776200] Client handshake started
default	23:30:43.824619-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS client enter_early_data
default	23:30:43.825150-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS client read_server_hello
default	23:30:43.863692-0500	SpringBoard	[Main (EmbeddedDisplay)] dispatch event:
<SBTransitionSwitcherModifierEvent: 0x86f344c00; type: MainTransition; transitionID: 2515174D-4439-418F-A77F-C3556BDDE1E4; phase: Complete; animated: YES; fromAppLayout: 0x0; toAppLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; fromEnvironmentMode: home-screen; toEnvironmentMode: application; fromSpaceConfiguration: undefined; toSpaceConfiguration: full; pendingTermination: {(
)}; activating: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>; morphingPIPLayoutRole: undefined>
default	23:30:43.865478-0500	SpringBoard	[Main (EmbeddedDisplay)] handle response:
<SBSwitcherModifierEventResponse: 0x86efdb060> {
    <SBPreemptAnimationSwitcherEventResponse: 0x86efd83c0>;
    <SBSwitcherModifierEventResponse: 0x86efd97a0> {
	    <SBInvalidateAdjustedAppLayoutsSwitcherEventResponse: 0x86efd9110>;
	    <SBSwitcherModifierEventResponse: 0x86efda460> {
		    <SBRequestFolderSnapshotsSwitcherEventResponse: 0x86efdad90; snapshotRequested: NO>;
		    <SBIconOverlayVisibilitySwitcherEventResponse: 0x86bc30600; visible: NO; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBIconViewVisibilitySwitcherEventResponse: 0x8678b5c70; visible: YES; animationSettings: 0x0; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		    <SBMatchMoveToIconViewSwitcherEventResponse: 0x867350f00; active: NO; appLayout: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>>;
		};
	};
}
default	23:30:43.869970-0500	MobileJarvisNative	[0x1147170c0] activating connection: mach=true listener=false peer=false name=com.apple.audio.AudioSession
default	23:30:43.879589-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[kUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	23:30:43.879621-0500	audiomxd	SpatializationManager.cpp:618   Returning cached value mEntitlementsCache[k3rdPartyUntrackedHeadphoneEntitlement][com.hightowerai.MobileJarvisNative] = 0
default	23:30:43.880358-0500	audiomxd	SpatializationManager.cpp:184   Spatial info for session ID = 0x6fd55: {
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
default	23:30:43.882970-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:43.883373-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange:17005 Client com.hightowerai.MobileJarvisNative with session sid:0x6fd55, MobileJarvisNati(26683), 'prim' [0x5430e4380] with pid '26683' is now ForegroundRunning. Background entitlement: NO ActiveLongFormVideoSession: NO IsLongFormVideoApp NO
default	23:30:43.883433-0500	audiomxd	-CMSessionMgr- CMSessionMgrHandleApplicationStateChange: Client com.hightowerai.MobileJarvisNative with pid '26683' moved to ForegroundRunning and is not allowed to play in the background
default	23:30:43.884845-0500	MobileJarvisNative	    AVAudioSession_iOS.mm:1141  Created session 0x1146009c0 with ID: 0x6fd55
default	23:30:43.888089-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZING ==========
default	23:30:43.888235-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: AudioManager singleton created
default	23:30:43.888312-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial isAudioInterrupted: NO
default	23:30:43.888464-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: Initial currentFocus: none
default	23:30:43.889703-0500	MobileJarvisNative	🔊 AUDIO_MANAGER: ========== INITIALIZATION COMPLETE ==========
default	23:30:43.890059-0500	MobileJarvisNative	Call host has no calls
default	23:30:43.893969-0500	SpringBoard	Front display did change: <SBApplication: 0x868409200; com.hightowerai.MobileJarvisNative>
default	23:30:43.908529-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_hello_retry_request
default	23:30:43.908880-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_server_hello
default	23:30:43.909477-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	23:30:43.910550-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_certificate_request
default	23:30:43.910625-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_server_certificate
default	23:30:43.910849-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	23:30:43.913358-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C2:1][0x114776200] Performing external trust evaluation
default	23:30:43.913532-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C2:1][0x114776200] Asyncing for external verify block
default	23:30:43.913732-0500	MobileJarvisNative	Connection 1: asked to evaluate TLS Trust
default	23:30:43.917653-0500	MobileJarvisNative	(Trust 0x1144e15c0) trustd returned 4
default	23:30:43.918545-0500	MobileJarvisNative	(Trust 0x1144e1380) trustd returned 4
default	23:30:43.918618-0500	MobileJarvisNative	Connection 1: TLS Trust result 0
default	23:30:43.918647-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C2:1][0x114776200] Returning from external verify block with result: true
default	23:30:43.918751-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C2:1][0x114776200] Certificate verification result: OK
default	23:30:43.919027-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client read_server_finished
default	23:30:43.919173-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client send_end_of_early_data
default	23:30:43.919224-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	23:30:43.919255-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client send_client_certificate
default	23:30:43.919310-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client complete_second_flight
default	23:30:43.919542-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS 1.3 client done
default	23:30:43.919616-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS client finish_client_handshake
default	23:30:43.919720-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C2:1][0x114776200] Client handshake state: TLS client done
default	23:30:43.919771-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C2:1][0x114776200] Client handshake done
default	23:30:43.920279-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C2:1][0x114776200] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(52ms) flight_time(39ms) rtt(38ms) write_stalls(0) read_stalls(2) pake(0x0000)]
default	23:30:43.920381-0500	MobileJarvisNative	nw_flow_connected [C2 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:43.920550-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.052s
default	23:30:43.920834-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C2] reporting state ready
default	23:30:43.920886-0500	MobileJarvisNative	[C2 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.052s
default	23:30:43.920958-0500	MobileJarvisNative	[0x1144ab600] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:43.936975-0500	MobileJarvisNative	[0x1144ab900] activating connection: mach=true listener=false peer=false name=com.apple.SystemConfiguration.NetworkInformation
default	23:30:43.943473-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
default	23:30:43.948704-0500	MobileJarvisNative	[0x1144abe00] activating connection: mach=true listener=false peer=false name=com.apple.mobileassetd.v2
default	23:30:43.950341-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]', filter: '[Available: true, Technology: vocalizer]'
default	23:30:43.951850-0500	MobileJarvisNative	[0x114717840] activating connection: mach=false listener=false peer=false name=com.apple.SiriTTSService.TrialProxy
default	23:30:43.969786-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
default	23:30:43.974431-0500	MobileJarvisNative	<nw_activity 50:1 [646C7335-0CC2-4BF5-BE4A-5A402FDC769A] (global parent) (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 823ms
default	23:30:43.974701-0500	MobileJarvisNative	<nw_activity 50:2 [10E6AE80-F778-47A9-86C0-55B2FD6ABEF9] (reporting strategy default) complete (reason success)> complete with reason 2 (success), duration 823ms
default	23:30:43.974775-0500	MobileJarvisNative	Unsetting the global parent activity <nw_activity 50:1 [646C7335-0CC2-4BF5-BE4A-5A402FDC769A] (global parent) (reporting strategy default) complete (reason success)>
default	23:30:43.974797-0500	MobileJarvisNative	Unset the global parent activity
default	23:30:43.978090-0500	MobileJarvisNative	🎵 ConfigManager: Deepgram TTS enabled set to: NO
default	23:30:43.989993-0500	MobileJarvisNative	0x1146aa318 ID=0 Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> received response, status 200 content U
default	23:30:43.991657-0500	MobileJarvisNative	[0x1144abb00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:43.995131-0500	MobileJarvisNative	[0x1144abb00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:43.997494-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> response ended
default	23:30:43.998290-0500	MobileJarvisNative	[C1] event: client:connection_idle @0.163s
default	23:30:43.998416-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> done using Connection 1
default	23:30:43.998759-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> summary for task success {transaction_duration_ms=203, response_status=200, connection=1, protocol="h3", domain_lookup_duration_ms=3, connect_duration_ms=55, secure_connection_duration_ms=54, private_relay=false, request_start_ms=112, request_duration_ms=0, response_start_ms=192, response_duration_ms=11, request_bytes=423, request_throughput_kbps=1758, response_bytes=6837, response_throughput_kbps=597, cache_hit=false}
default	23:30:43.998944-0500	MobileJarvisNative	Task <B518084F-7DB4-415A-A9A8-F1030E90054E>.<1> finished successfully
default	23:30:44.020364-0500	MobileJarvisNative	Not observing PTDefaults on customer install.
default	23:30:44.039180-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	23:30:44.040762-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	23:30:44.040812-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	23:30:44.041390-0500	MobileJarvisNative	Connection 3: enabling TLS
default	23:30:44.041414-0500	MobileJarvisNative	Connection 3: starting, TC(0x0)
default	23:30:44.041620-0500	MobileJarvisNative	[C3 8FEFFAA2-5364-400A-883E-29F98626B14C Hostname#e5e48ef1:443 quic-connection, url hash: 8cc7879a, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8DAE2588-C4CE-42C1-B4EB-42DEE2B79EEB}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96] start
default	23:30:44.041678-0500	MobileJarvisNative	[C3 Hostname#e5e48ef1:443 initial parent-flow ((null))] event: path:start @0.000s
default	23:30:44.042007-0500	MobileJarvisNative	[C3 Hostname#e5e48ef1:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 0CC16888-50DD-4A1A-AC2C-B8B52367183A
default	23:30:44.042188-0500	MobileJarvisNative	[C3 Hostname#e5e48ef1:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.042265-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state preparing
default	23:30:44.042423-0500	MobileJarvisNative	[C3 Hostname#e5e48ef1:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	23:30:44.042603-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 initial path ((null))] event: path:start @0.001s
default	23:30:44.042964-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 0CC16888-50DD-4A1A-AC2C-B8B52367183A
default	23:30:44.043100-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.001s
default	23:30:44.043260-0500	MobileJarvisNative	[C3.1.1 Hostname#e5e48ef1:443 initial path ((null))] event: path:start @0.001s
default	23:30:44.043802-0500	MobileJarvisNative	[C3.1.1 Hostname#e5e48ef1:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: 8E899922-280E-4F4C-A33E-A49B53FA09D4
default	23:30:44.043906-0500	MobileJarvisNative	[C3.1.1 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.002s
default	23:30:44.043957-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> setting up Connection 3
default	23:30:44.044313-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> waiting for setup of Connection 3
default	23:30:44.047342-0500	MobileJarvisNative	[C3.1.1 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_alternative @0.005s
default	23:30:44.047508-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:restart @0.006s
default	23:30:44.047823-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 initial path ((null))] event: path:start @0.007s
default	23:30:44.048404-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.007s, uuid: F4ED52B1-08F7-4EEF-A9F6-AC9435702548
default	23:30:44.048710-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.008s
default	23:30:44.053952-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#f88f9753.443
default	23:30:44.054027-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#5e8a2c74.443
default	23:30:44.054058-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#89888304:443
default	23:30:44.054085-0500	MobileJarvisNative	nw_endpoint_resolver_update [C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#45dd7b8b:443
default	23:30:44.054795-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.011s
default	23:30:44.055388-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 initial path ((null))] event: path:start @0.012s
default	23:30:44.055917-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.012s, uuid: 8D625659-D885-42EB-8B7A-0901C2A2D0F1
default	23:30:44.056029-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.012s
default	23:30:44.056809-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.015s
default	23:30:44.057898-0500	MobileJarvisNative	quic_conn_initialize_inner [C3.1.2.1:2] [-ae668e530a1c9497] created QUIC connection (spin bit enabled)
default	23:30:44.058701-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.015s
default	23:30:44.060235-0500	MobileJarvisNative	quic_crypto_new_flow [C3.1.2.1:2] [-ae668e530a1c9497] TLS stream is: [C4]
default	23:30:44.060264-0500	MobileJarvisNative	[C4 5525400F-5089-47A0-93A6-FDA6516DFC72 IPv6#f88f9753.443 quic-connection, url hash: 8cc7879a, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{8DAE2588-C4CE-42C1-B4EB-42DEE2B79EEB}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96, no transport] start
default	23:30:44.060393-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	23:30:44.060477-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8D625659-D885-42EB-8B7A-0901C2A2D0F1
default	23:30:44.060636-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.060661-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state preparing
default	23:30:44.060712-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.060738-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	23:30:44.061176-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C4:1][0x115353600] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	23:30:44.061351-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C4:1][0x115353600] Client handshake started
default	23:30:44.061456-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS client enter_early_data
default	23:30:44.061708-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS client read_server_hello
default	23:30:44.070401-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
error	23:30:44.071492-0500	MobileJarvisNative	#FactoryInstall Unable to query results, error: 5
default	23:30:44.071590-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServicesVocalizerVoice], filter: [Available: true, Technology: vocalizer]
default	23:30:44.074666-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServicesVocalizerVoice]' assets []
default	23:30:44.097309-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_hello_retry_request
default	23:30:44.097362-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_server_hello
default	23:30:44.097387-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: gryphon, Available: true]'
default	23:30:44.097928-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	23:30:44.098294-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_certificate_request
default	23:30:44.098517-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_server_certificate
default	23:30:44.098542-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	23:30:44.098926-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C4:1][0x115353600] Performing external trust evaluation
default	23:30:44.099292-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C4:1][0x115353600] Asyncing for external verify block
default	23:30:44.099968-0500	MobileJarvisNative	Connection 3: asked to evaluate TLS Trust
default	23:30:44.100295-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> auth completion disp=1 cred=0x0
default	23:30:44.100445-0500	MobileJarvisNative	(Trust 0x11522eb80) No pending evals, starting
default	23:30:44.100728-0500	MobileJarvisNative	[0x115381400] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.100827-0500	MobileJarvisNative	(Trust 0x11522eb80) Completed async eval kickoff
default	23:30:44.103605-0500	MobileJarvisNative	(Trust 0x11522eb80) trustd returned 4
default	23:30:44.103724-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	23:30:44.103796-0500	MobileJarvisNative	(Trust 0x11522e400) No pending evals, starting
default	23:30:44.103964-0500	MobileJarvisNative	[0x115381500] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.104063-0500	MobileJarvisNative	(Trust 0x11522e400) Completed async eval kickoff
default	23:30:44.104139-0500	MobileJarvisNative	[0x115381400] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.108364-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	23:30:44.108437-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: gryphon, Available: true]
default	23:30:44.108462-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets []
default	23:30:44.108485-0500	MobileJarvisNative	(Trust 0x11522e400) trustd returned 4
default	23:30:44.108633-0500	MobileJarvisNative	Connection 3: TLS Trust result 0
default	23:30:44.108664-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.CustomVoice]', filter: '[Technology: custom, Available: true]'
default	23:30:44.108711-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C4:1][0x115353600] Returning from external verify block with result: true
default	23:30:44.108803-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C4:1][0x115353600] Certificate verification result: OK
default	23:30:44.109213-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client read_server_finished
default	23:30:44.109265-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client send_end_of_early_data
default	23:30:44.109288-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	23:30:44.109314-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client send_client_certificate
default	23:30:44.109345-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client complete_second_flight
default	23:30:44.109550-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS 1.3 client done
default	23:30:44.109603-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS client finish_client_handshake
default	23:30:44.109628-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C4:1][0x115353600] Client handshake state: TLS client done
default	23:30:44.109699-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C4:1][0x115353600] Client handshake done
default	23:30:44.110743-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x115353600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(36ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.110817-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.111001-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.036s
default	23:30:44.111377-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C4] reporting state ready
default	23:30:44.111435-0500	MobileJarvisNative	[C4 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.037s
default	23:30:44.111511-0500	MobileJarvisNative	[0x115381500] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.112231-0500	MobileJarvisNative	quic_pmtud_restart [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	23:30:44.112375-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] QUIC connection established in 37.736 ms, RTT 29.155 ms
default	23:30:44.112551-0500	MobileJarvisNative	nw_flow_connected [C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.112756-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.053s
default	23:30:44.112812-0500	MobileJarvisNative	nw_flow_connected [C3.1.2.1 IPv6#f88f9753.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2965105600)
default	23:30:44.113003-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.053s
default	23:30:44.113272-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.053s
default	23:30:44.113378-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.053s
default	23:30:44.113735-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.053s
default	23:30:44.113847-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	23:30:44.113900-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	23:30:44.113953-0500	MobileJarvisNative	nw_flow_connected [C3 IPv6#f88f9753.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	23:30:44.114056-0500	MobileJarvisNative	[C3 IPv6#f88f9753.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.054s
default	23:30:44.114345-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C3] reporting state ready
default	23:30:44.114388-0500	MobileJarvisNative	[C3 IPv6#f88f9753.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.054s
default	23:30:44.114445-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C3] viability_changed_handler(true)
default	23:30:44.114950-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] path over en0 received event established
default	23:30:44.115099-0500	MobileJarvisNative	quic_migration_evaluate_primary [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] promoted path 0x115354c40 over en0 to primary
default	23:30:44.115173-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C3.1.2.1:2] Calling notify with interface <private>
default	23:30:44.115684-0500	MobileJarvisNative	[C3.1.2.1 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: 8D625659-D885-42EB-8B7A-0901C2A2D0F1
default	23:30:44.115871-0500	MobileJarvisNative	[C3.1.2 Hostname#e5e48ef1:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: F4ED52B1-08F7-4EEF-A9F6-AC9435702548
default	23:30:44.115957-0500	MobileJarvisNative	[C3.1 Hostname#e5e48ef1:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: 0CC16888-50DD-4A1A-AC2C-B8B52367183A
default	23:30:44.115987-0500	MobileJarvisNative	[C3 IPv6#f88f9753.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.054s, uuid: 0CC16888-50DD-4A1A-AC2C-B8B52367183A
default	23:30:44.116137-0500	MobileJarvisNative	Connection 3: connected successfully
default	23:30:44.116161-0500	MobileJarvisNative	Connection 3: TLS handshake complete
default	23:30:44.116235-0500	MobileJarvisNative	Connection 3: ready C(N) E(N)
default	23:30:44.117120-0500	MobileJarvisNative	[C3] event: client:connection_reused @0.055s
default	23:30:44.117326-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> now using Connection 3
default	23:30:44.118171-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> now using Connection 3
default	23:30:44.118710-0500	MobileJarvisNative	Connection 3: received viability advisory(Y)
default	23:30:44.118767-0500	MobileJarvisNative	0x115355198 ID=0 Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> sent request, body N 0
default	23:30:44.118828-0500	MobileJarvisNative	0x115355358 ID=4 Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> sent request, body N 0
default	23:30:44.120004-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	23:30:44.120091-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.CustomVoice], filter: [Technology: custom, Available: true]
default	23:30:44.123970-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.CustomVoice]' assets [Martha:en-GB:custom:compact:mobileAsset:CV 37 [5], Arthur:en-GB:custom:compact:mobileAsset:CV 37 [5], Daniel:fr-FR:custom:compact:mobileAsset:CV 37 [5], Hattori:ja-JP:custom:compact:mobileAsset:CV 23 [5], Helena:de-DE:custom:compact:mobileAsset:CV 35 [5], Martin:de-DE:custom:compact:mobileAsset:CV 34 [5], O-ren:ja-JP:custom:compact:mobileAsset:CV 24 [5], Catherine:en-AU:custom:compact:mobileAsset:CV 31 [5], Gordon:en-AU:custom:compact:mobileAsset:CV 31 [5], Aaron:en-US:custom:compact:mobileAsset:CV 44 [5], Li-mu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Nicky:en-US:custom:compact:mobileAsset:CV 45 [5], Yu-shu:zh-CN:custom:compact:mobileAsset:CV 19 [5], Marie:fr-FR:custom:compact:mobileAsset:CV 38 [5]]
default	23:30:44.134005-0500	MobileJarvisNative	Listing asset types: '[com.apple.MobileAsset.VoiceServices.GryphonVoice]', filter: '[Technology: neural, Available: true]'
default	23:30:44.145690-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x115353600] Asyncing for session update block
default	23:30:44.145911-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C4:1][0x115353600] Asyncing for session update block
default	23:30:44.145993-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C4:1][0x115353600] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(36ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.146083-0500	MobileJarvisNative	nw_flow_connected [C4 IPv6#f88f9753.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.146351-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] creating inbound stream 3
default	23:30:44.146752-0500	MobileJarvisNative	quic_stream_create_inbound [C3.1.2.1:2] [-01b9f22b387ea97871bbdf2a3d7eb5d3f66fa284] creating inbound stream 7
default	23:30:44.147519-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C4:1][0x115353600] Returning from session update block
default	23:30:44.156409-0500	MobileJarvisNative	#FactoryInstall listing assets for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	23:30:44.156483-0500	MobileJarvisNative	#Local listing voices for types: [com.apple.MobileAsset.VoiceServices.GryphonVoice], filter: [Technology: neuralAX, Available: true]
default	23:30:44.156608-0500	MobileJarvisNative	Found '[com.apple.MobileAsset.VoiceServices.GryphonVoice]' assets [ona:lt-LT:neuralAX:compact:preinstalled:CV 1064 [68], aru:kk-KZ:neuralAX:compact:preinstalled:CV 1061 [68]]
default	23:30:44.159193-0500	MobileJarvisNative	AXAssetsService being deallocated: <AXAssetsService: 0x114d12960>
default	23:30:44.159996-0500	MobileJarvisNative	0x115355358 ID=4 Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> received response, status 200 content K
default	23:30:44.160223-0500	MobileJarvisNative	[0x115381100] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.161511-0500	MobileJarvisNative	[0x115381100] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.161741-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> response ended
default	23:30:44.162101-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> done using Connection 3
default	23:30:44.162237-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> summary for task success {transaction_duration_ms=101, response_status=200, connection=3, reused=1, reused_after_ms=0, request_start_ms=55, request_duration_ms=0, response_start_ms=97, response_duration_ms=3, request_bytes=494, request_throughput_kbps=2079, response_bytes=1357, response_throughput_kbps=400, cache_hit=false}
default	23:30:44.162414-0500	MobileJarvisNative	Task <B0B0BE58-7175-4B30-B4B6-E1BDA7129BEB>.<3> finished successfully
default	23:30:44.163084-0500	MobileJarvisNative	0x115355198 ID=0 Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> received response, status 200 content U
default	23:30:44.409606-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> response ended
default	23:30:44.409888-0500	MobileJarvisNative	[C3] event: client:connection_idle @0.404s
default	23:30:44.410017-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> done using Connection 3
default	23:30:44.410305-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> summary for task success {transaction_duration_ms=405, response_status=200, connection=3, protocol="h3", domain_lookup_duration_ms=3, connect_duration_ms=39, secure_connection_duration_ms=37, private_relay=false, request_start_ms=56, request_duration_ms=0, response_start_ms=102, response_duration_ms=302, request_bytes=493, request_throughput_kbps=684, response_bytes=1757310, response_throughput_kbps=5666, cache_hit=false}
default	23:30:44.410609-0500	MobileJarvisNative	Task <EB7CAEBE-3BD0-4FFA-BEF5-7D6A7EFC8A53>.<2> finished successfully
default	23:30:44.477859-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	23:30:44.478655-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	23:30:44.478729-0500	MobileJarvisNative	Connection 5: enabling TLS
default	23:30:44.478759-0500	MobileJarvisNative	Connection 5: starting, TC(0x0)
default	23:30:44.478790-0500	MobileJarvisNative	[C5 0F82BEEC-FC63-4977-A305-D1A222C2CF18 Hostname#7534a036:443 quic-connection, url hash: 51e81a9c, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{C0BCA2D0-1693-4F83-9E81-448FACEEB0C4}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96] start
default	23:30:44.478851-0500	MobileJarvisNative	[C5 Hostname#7534a036:443 initial parent-flow ((null))] event: path:start @0.000s
default	23:30:44.479015-0500	MobileJarvisNative	[C5 Hostname#7534a036:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 47628B3E-8A14-434D-8FFC-AC8E29801EDB
default	23:30:44.479144-0500	MobileJarvisNative	[C5 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.479170-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state preparing
default	23:30:44.479245-0500	MobileJarvisNative	[C5 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	23:30:44.479324-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.000s
default	23:30:44.479581-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 47628B3E-8A14-434D-8FFC-AC8E29801EDB
default	23:30:44.479666-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	23:30:44.479818-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.000s
default	23:30:44.480089-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8E903C52-0970-4827-93F4-BF44EF8EFF1A
default	23:30:44.480200-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.000s
default	23:30:44.480382-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> setting up Connection 5
default	23:30:44.481888-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#a3fec298.443
default	23:30:44.481915-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#3343e696.443
default	23:30:44.481985-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#c169ef78:443
default	23:30:44.482012-0500	MobileJarvisNative	nw_endpoint_resolver_update [C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4199f981:443
default	23:30:44.482134-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.001s
default	23:30:44.482316-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 initial path ((null))] event: path:start @0.001s
default	23:30:44.482486-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.002s, uuid: DA599D3C-650F-42FD-BC06-41356594B000
default	23:30:44.482599-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.002s
default	23:30:44.482862-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.002s
default	23:30:44.483314-0500	MobileJarvisNative	quic_conn_initialize_inner [C5.1.1.1:2] [-763f018c8fff5f01] created QUIC connection (spin bit enabled)
default	23:30:44.483741-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.002s
default	23:30:44.484446-0500	MobileJarvisNative	quic_crypto_new_flow [C5.1.1.1:2] [-763f018c8fff5f01] TLS stream is: [C6]
default	23:30:44.484472-0500	MobileJarvisNative	[C6 7579D38C-B0D0-40BF-9758-3FCB46F19CA9 IPv6#a3fec298.443 quic-connection, url hash: 51e81a9c, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{C0BCA2D0-1693-4F83-9E81-448FACEEB0C4}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96, no transport] start
default	23:30:44.484529-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	23:30:44.484581-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: DA599D3C-650F-42FD-BC06-41356594B000
default	23:30:44.484683-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.484713-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state preparing
default	23:30:44.484791-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.484817-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	23:30:44.484997-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C6:1][0x115ce8c00] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	23:30:44.485075-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C6:1][0x115ce8c00] Client handshake started
default	23:30:44.485152-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS client enter_early_data
default	23:30:44.485235-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS client read_server_hello
default	23:30:44.510407-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_hello_retry_request
default	23:30:44.510462-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_server_hello
default	23:30:44.510545-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	23:30:44.510735-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_certificate_request
default	23:30:44.510891-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_server_certificate
default	23:30:44.510921-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	23:30:44.511125-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C6:1][0x115ce8c00] Performing external trust evaluation
default	23:30:44.511207-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C6:1][0x115ce8c00] Asyncing for external verify block
default	23:30:44.511411-0500	MobileJarvisNative	Connection 5: asked to evaluate TLS Trust
default	23:30:44.511461-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> auth completion disp=1 cred=0x0
default	23:30:44.511511-0500	MobileJarvisNative	(Trust 0x115488300) No pending evals, starting
default	23:30:44.511600-0500	MobileJarvisNative	[0x1157ffa00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.511626-0500	MobileJarvisNative	(Trust 0x115488300) Completed async eval kickoff
default	23:30:44.514930-0500	MobileJarvisNative	(Trust 0x115488300) trustd returned 4
default	23:30:44.515048-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	23:30:44.515103-0500	MobileJarvisNative	(Trust 0x115488840) No pending evals, starting
default	23:30:44.515202-0500	MobileJarvisNative	[0x1157ffb00] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.515312-0500	MobileJarvisNative	(Trust 0x115488840) Completed async eval kickoff
default	23:30:44.515362-0500	MobileJarvisNative	[0x1157ffa00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.517726-0500	MobileJarvisNative	(Trust 0x115488840) trustd returned 4
default	23:30:44.517807-0500	MobileJarvisNative	Connection 5: TLS Trust result 0
default	23:30:44.517863-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C6:1][0x115ce8c00] Returning from external verify block with result: true
default	23:30:44.517920-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C6:1][0x115ce8c00] Certificate verification result: OK
default	23:30:44.518008-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client read_server_finished
default	23:30:44.518071-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client send_end_of_early_data
default	23:30:44.518090-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	23:30:44.518107-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client send_client_certificate
default	23:30:44.518125-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client complete_second_flight
default	23:30:44.518317-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS 1.3 client done
default	23:30:44.518343-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS client finish_client_handshake
default	23:30:44.518371-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C6:1][0x115ce8c00] Client handshake state: TLS client done
default	23:30:44.518398-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C6:1][0x115ce8c00] Client handshake done
default	23:30:44.518780-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x115ce8c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(37ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.518865-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.518959-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.036s
default	23:30:44.519087-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state ready
default	23:30:44.519114-0500	MobileJarvisNative	[C6 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.036s
default	23:30:44.519162-0500	MobileJarvisNative	[0x1157ffb00] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.519876-0500	MobileJarvisNative	quic_pmtud_restart [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	23:30:44.519948-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] QUIC connection established in 37.802 ms, RTT 28.014 ms
default	23:30:44.519977-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.520144-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.040s
default	23:30:44.520201-0500	MobileJarvisNative	nw_flow_connected [C5.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2965105600)
default	23:30:44.520385-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	23:30:44.520577-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	23:30:44.520673-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.040s
default	23:30:44.520867-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	23:30:44.520947-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	23:30:44.521002-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.040s
default	23:30:44.521029-0500	MobileJarvisNative	nw_flow_connected [C5 IPv6#a3fec298.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	23:30:44.521110-0500	MobileJarvisNative	[C5 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.041s
default	23:30:44.521286-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state ready
default	23:30:44.521316-0500	MobileJarvisNative	[C5 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	23:30:44.521342-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C5] viability_changed_handler(true)
default	23:30:44.521708-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] path over en0 received event established
default	23:30:44.521867-0500	MobileJarvisNative	quic_migration_evaluate_primary [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] promoted path 0x115355180 over en0 to primary
default	23:30:44.521914-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C5.1.1.1:2] Calling notify with interface <private>
default	23:30:44.522102-0500	MobileJarvisNative	[C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: DA599D3C-650F-42FD-BC06-41356594B000
default	23:30:44.522192-0500	MobileJarvisNative	[C5.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 8E903C52-0970-4827-93F4-BF44EF8EFF1A
default	23:30:44.522249-0500	MobileJarvisNative	[C5.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 47628B3E-8A14-434D-8FFC-AC8E29801EDB
default	23:30:44.522278-0500	MobileJarvisNative	[C5 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.041s, uuid: 47628B3E-8A14-434D-8FFC-AC8E29801EDB
default	23:30:44.522356-0500	MobileJarvisNative	Connection 5: connected successfully
default	23:30:44.522378-0500	MobileJarvisNative	Connection 5: TLS handshake complete
default	23:30:44.522402-0500	MobileJarvisNative	Connection 5: ready C(N) E(N)
default	23:30:44.522815-0500	MobileJarvisNative	[C5] event: client:connection_reused @0.042s
default	23:30:44.522958-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> now using Connection 5
default	23:30:44.523303-0500	MobileJarvisNative	Connection 5: received viability advisory(Y)
default	23:30:44.523358-0500	MobileJarvisNative	0x115355c18 ID=0 Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> sent request, body N 0
default	23:30:44.542639-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x115ce8c00] Asyncing for session update block
default	23:30:44.542829-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C6:1][0x115ce8c00] Asyncing for session update block
default	23:30:44.542913-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C6:1][0x115ce8c00] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(37ms) flight_time(29ms) rtt(29ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.542973-0500	MobileJarvisNative	nw_flow_connected [C6 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.543117-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] creating inbound stream 3
default	23:30:44.543437-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] creating inbound stream 7
default	23:30:44.543647-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] creating inbound stream 11
default	23:30:44.543857-0500	MobileJarvisNative	quic_stream_create_inbound [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] creating inbound stream 15
default	23:30:44.544394-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x115ce8c00] Returning from session update block
default	23:30:44.544735-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C6:1][0x115ce8c00] Returning from session update block
default	23:30:44.579504-0500	MobileJarvisNative	0x115355c18 ID=0 Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> received response, status 304 content U
default	23:30:44.579916-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> summary for task success {transaction_duration_ms=101, response_status=304, connection=5, protocol="h3", domain_lookup_duration_ms=1, connect_duration_ms=39, secure_connection_duration_ms=37, private_relay=false, request_start_ms=42, request_duration_ms=0, response_start_ms=101, response_duration_ms=0, request_bytes=455, request_throughput_kbps=1652, response_bytes=372, response_throughput_kbps=0, cache_hit=true}
default	23:30:44.580009-0500	MobileJarvisNative	[C5] event: client:connection_idle @0.101s
default	23:30:44.580194-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> finished successfully
default	23:30:44.580276-0500	MobileJarvisNative	Task <0D9502D8-5E94-4522-B7FB-67340F821F93>.<1> done using Connection 5
default	23:30:44.589440-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> resuming, timeouts(60.0, 604800.0) qos(0x19) voucher(<private>) activity(00000000-0000-0000-0000-000000000000)
default	23:30:44.589498-0500	MobileJarvisNative	quic_frame_write_CONNECTION_CLOSE [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] sending APPLICATION_CLOSE, code 0x100, reason <null>
default	23:30:44.589606-0500	MobileJarvisNative	[C6 7579D38C-B0D0-40BF-9758-3FCB46F19CA9 IPv6#a3fec298.443 quic-connection, url hash: 51e81a9c, tls, definite, attribution: developer] cancel
default	23:30:44.591720-0500	MobileJarvisNative	[C6 7579D38C-B0D0-40BF-9758-3FCB46F19CA9 IPv6#a3fec298.443 quic-connection, url hash: 51e81a9c, tls, definite, attribution: developer] cancelled
	[C6 DA599D3C-650F-42FD-BC06-41356594B000 2603:8080:2300:1047:7559:9c83:2fa5:50bf.50910<->IPv6#a3fec298.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Duration: 0.108s, QUIC @0.000s took 0.000s, TLS 1.3 took 0.037s
	bytes in/out: 5194/4459, packets in/out: 11/10, rtt: 0.026s, retransmitted bytes: 0, out-of-order bytes: 517
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	23:30:44.592118-0500	MobileJarvisNative	nw_flow_disconnected [C6 IPv6#a3fec298.443 cancelled channel-flow ((null))] Output protocol disconnected
default	23:30:44.592195-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C6] reporting state cancelled
default	23:30:44.592436-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.592843-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.592875-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.592900-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.592926-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.592952-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593163-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593235-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593262-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593287-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593312-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593338-0500	MobileJarvisNative	nw_flow_disconnected [C5.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol disconnected
default	23:30:44.593374-0500	MobileJarvisNative	quic_conn_log_summary [C5.1.1.1:2] [-013a8ea1c08630ce8838a3a0c5862c655fb7b4e2] 
	Connection attempts: 1, RETRY received: no, PTOs: 0
	Early data: no, Keep-alives sent/acknowledged: 0/0, ECN state: unsupported, L4S: disabled
	RTT: base 21 ms, network 24 ms, latest 24 ms, minimum 21 ms, smoothed 26 ms (variance 7 ms)
	Path MTU: 1280, minimum MSS: 1232
	Migration events: 0, paths validated: 0
	Inbound unidirectional/bidirectional streams: 4/0
	Outbound unidirectional/bidirectional streams: 1/1
	DATA_BLOCKED frames sent/received: 0/0
	STREAM_DATA_BLOCKED frames sent/received: 0/0
default	23:30:44.593668-0500	MobileJarvisNative	Connection 5: cleaning up
default	23:30:44.593709-0500	MobileJarvisNative	[C5 0F82BEEC-FC63-4977-A305-D1A222C2CF18 Hostname#7534a036:443 quic-connection, url hash: 51e81a9c, definite, attribution: developer] cancel
default	23:30:44.593753-0500	MobileJarvisNative	[C5 0F82BEEC-FC63-4977-A305-D1A222C2CF18 Hostname#7534a036:443 quic-connection, url hash: 51e81a9c, definite, attribution: developer] cancelled
	[C5.1.1.1 DA599D3C-650F-42FD-BC06-41356594B000 2603:8080:2300:1047:7559:9c83:2fa5:50bf.50910<->IPv6#a3fec298.443]
	Connected Path: satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi
	Privacy Stance: Not Eligible
	Duration: 0.115s, DNS @0.000s took 0.001s, QUIC @0.002s took 0.038s
	bytes in/out: 5194/4459, packets in/out: 11/10, rtt: 0.026s, retransmitted bytes: 0, out-of-order bytes: 517
	ecn packets sent/acked/marked/lost: 0/0/0/0
default	23:30:44.595575-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C5] reporting state cancelled
default	23:30:44.597259-0500	MobileJarvisNative	Connection 0: creating secure tcp or quic connection
default	23:30:44.597474-0500	MobileJarvisNative	Connection 7: enabling TLS
default	23:30:44.597507-0500	MobileJarvisNative	Connection 7: starting, TC(0x0)
default	23:30:44.597546-0500	MobileJarvisNative	[C7 A0C44C1F-72F2-44D4-8D15-3F28D881A37A Hostname#7534a036:443 quic-connection, url hash: 51e81a9c, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{D6853D4B-D620-44DC-BA59-3048A2676F56}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96] start
default	23:30:44.597629-0500	MobileJarvisNative	[C7 Hostname#7534a036:443 initial parent-flow ((null))] event: path:start @0.000s
default	23:30:44.597908-0500	MobileJarvisNative	[C7 Hostname#7534a036:443 waiting parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8AAD8373-BD0C-41F1-99E2-F2FAA62023E3
default	23:30:44.598081-0500	MobileJarvisNative	[C7 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.598108-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C7] reporting state preparing
default	23:30:44.598222-0500	MobileJarvisNative	[C7 Hostname#7534a036:443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_child @0.000s
default	23:30:44.598305-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.000s
default	23:30:44.598625-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 8AAD8373-BD0C-41F1-99E2-F2FAA62023E3
default	23:30:44.598741-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 in_progress transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: transform:start @0.000s
default	23:30:44.598970-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 initial path ((null))] event: path:start @0.000s
default	23:30:44.599195-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.001s, uuid: 0EB8EB32-DA65-4670-AEA4-4FCE6678C972
default	23:30:44.599306-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:start_dns @0.001s
default	23:30:44.599497-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> setting up Connection 7
default	23:30:44.601263-0500	MobileJarvisNative	nw_endpoint_resolver_update [C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#a3fec298.443
default	23:30:44.601294-0500	MobileJarvisNative	nw_endpoint_resolver_update [C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv6#3343e696.443
default	23:30:44.601321-0500	MobileJarvisNative	nw_endpoint_resolver_update [C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#c169ef78:443
default	23:30:44.601349-0500	MobileJarvisNative	nw_endpoint_resolver_update [C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Adding endpoint handler for IPv4#4199f981:443
default	23:30:44.601540-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 in_progress resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: resolver:receive_dns @0.003s
default	23:30:44.601737-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 initial path ((null))] event: path:start @0.003s
default	23:30:44.601948-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 waiting path (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.003s, uuid: 135E38D8-6314-4CFD-B1FA-C66A160C77B2
default	23:30:44.602062-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_nexus @0.003s
default	23:30:44.602310-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:receive_nexus @0.003s
default	23:30:44.602747-0500	MobileJarvisNative	quic_conn_initialize_inner [C7.1.1.1:2] [-9badd316cd6c8c33] created QUIC connection (spin bit enabled)
default	23:30:44.603218-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.004s
default	23:30:44.604377-0500	MobileJarvisNative	quic_crypto_new_flow [C7.1.1.1:2] [-9badd316cd6c8c33] TLS stream is: [C8]
default	23:30:44.604489-0500	MobileJarvisNative	[C8 53E7408A-D834-450F-A694-45D3A1954CF3 IPv6#a3fec298.443 quic-connection, url hash: 51e81a9c, tls, definite, attribution: developer, context: com.apple.CFNetwork.NSURLSession.{D6853D4B-D620-44DC-BA59-3048A2676F56}{(null)}{Y}{2}{0x0} (private), proc: 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96, no transport] start
default	23:30:44.604612-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 initial socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:start @0.000s
default	23:30:44.604680-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 waiting socket-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:satisfied @0.000s, uuid: 135E38D8-6314-4CFD-B1FA-C66A160C77B2
default	23:30:44.604819-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:start_connect @0.000s
default	23:30:44.604851-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C8] reporting state preparing
default	23:30:44.605017-0500	MobileJarvisNative	nw_flow_connected [C8 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.605051-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.000s
default	23:30:44.605431-0500	MobileJarvisNative	boringssl_session_apply_protocol_options_for_transport_block_invoke(2182) [C8:1][0x115ce9800] TLS configured [min_version(0x0304) max_version(0x0304) name(redacted) tickets(false) false_start(false) enforce_ev(false) enforce_ats(false) ats_non_pfs_ciphersuite_allowed(false) ech(false) pqtls(false), pake(false)]
default	23:30:44.605947-0500	MobileJarvisNative	boringssl_context_info_handler(2374) [C8:1][0x115ce9800] Client handshake started
default	23:30:44.606143-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS client enter_early_data
default	23:30:44.606256-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS client read_server_hello
default	23:30:44.621198-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Now acquiring workspace assertion with state: ForegroundFocal.
default	23:30:44.622001-0500	runningboardd	Acquiring assertion targeting [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBWorkspace (ForegroundFocal)" ID:33-34-2190251 target:26683 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Workspace-ForegroundFocal" sourceEnvironment:"(null)">,
	<RBSAcquisitionCompletionAttribute| policy:AfterApplication>,
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"Visibility" sourceEnvironment:"(null)">
	]>
default	23:30:44.622148-0500	runningboardd	Assertion 33-34-2190251 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) will be created as active
default	23:30:44.623153-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	23:30:44.624491-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Dropping launch assertion.
default	23:30:44.624701-0500	runningboardd	Invalidating assertion 33-34-2190244 (target:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>) from originator [osservice<com.apple.SpringBoard>:34]
default	23:30:44.624984-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.625049-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.625083-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.625555-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.625972-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.626199-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.626504-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.627260-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.627329-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.627358-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.627701-0500	MobileJarvisNative	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	23:30:44.627854-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.628251-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.628310-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.628707-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	23:30:44.628804-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.629482-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.633203-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_hello_retry_request
default	23:30:44.633255-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_server_hello
default	23:30:44.633480-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_encrypted_extensions
default	23:30:44.633661-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_certificate_request
default	23:30:44.633835-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_server_certificate
default	23:30:44.633865-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_server_certificate_verify
default	23:30:44.634078-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async(1819) [C8:1][0x115ce9800] Performing external trust evaluation
default	23:30:44.634236-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external(1804) [C8:1][0x115ce9800] Asyncing for external verify block
default	23:30:44.634437-0500	MobileJarvisNative	Connection 7: asked to evaluate TLS Trust
default	23:30:44.634485-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> auth completion disp=1 cred=0x0
default	23:30:44.634713-0500	MobileJarvisNative	(Trust 0x1154889c0) No pending evals, starting
default	23:30:44.634850-0500	MobileJarvisNative	[0x115d10800] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.634964-0500	MobileJarvisNative	(Trust 0x1154889c0) Completed async eval kickoff
default	23:30:44.639636-0500	MobileJarvisNative	(Trust 0x1154889c0) trustd returned 4
default	23:30:44.639710-0500	MobileJarvisNative	System Trust Evaluation yielded status(0)
default	23:30:44.639760-0500	MobileJarvisNative	(Trust 0x115488d80) No pending evals, starting
default	23:30:44.639866-0500	MobileJarvisNative	[0x115d10900] activating connection: mach=true listener=false peer=false name=com.apple.trustd
default	23:30:44.639957-0500	MobileJarvisNative	(Trust 0x115488d80) Completed async eval kickoff
default	23:30:44.640008-0500	MobileJarvisNative	[0x115d10800] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.642350-0500	MobileJarvisNative	(Trust 0x115488d80) trustd returned 4
default	23:30:44.642436-0500	MobileJarvisNative	Connection 7: TLS Trust result 0
default	23:30:44.642466-0500	MobileJarvisNative	boringssl_context_evaluate_trust_async_external_block_invoke_3(1760) [C8:1][0x115ce9800] Returning from external verify block with result: true
default	23:30:44.642525-0500	MobileJarvisNative	boringssl_context_certificate_verify_callback(2000) [C8:1][0x115ce9800] Certificate verification result: OK
default	23:30:44.642774-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client read_server_finished
default	23:30:44.642834-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client send_end_of_early_data
default	23:30:44.642863-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client send_client_encrypted_extensions
default	23:30:44.642890-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client send_client_certificate
default	23:30:44.642918-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client complete_second_flight
default	23:30:44.643086-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS 1.3 client done
default	23:30:44.643114-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS client finish_client_handshake
default	23:30:44.643141-0500	MobileJarvisNative	boringssl_context_info_handler(2391) [C8:1][0x115ce9800] Client handshake state: TLS client done
default	23:30:44.643170-0500	MobileJarvisNative	boringssl_context_info_handler(2380) [C8:1][0x115ce9800] Client handshake done
default	23:30:44.643635-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C8:1][0x115ce9800] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(41ms) flight_time(31ms) rtt(31ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.643752-0500	MobileJarvisNative	nw_flow_connected [C8 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.643872-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.041s
default	23:30:44.643996-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C8] reporting state ready
default	23:30:44.644023-0500	MobileJarvisNative	[C8 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.041s
default	23:30:44.644072-0500	MobileJarvisNative	[0x115d10900] invalidated because the current process cancelled the connection by calling xpc_connection_cancel()
default	23:30:44.644798-0500	MobileJarvisNative	quic_pmtud_restart [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] PMTUD enabled, max PMTU: 1500, header size: 48, current PMTU 1248
default	23:30:44.644849-0500	MobileJarvisNative	quic_crypto_tls_ready_inner [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] QUIC connection established in 42.124 ms, RTT 28.533 ms
default	23:30:44.644875-0500	MobileJarvisNative	nw_flow_connected [C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Transport protocol connected (quic-connection)
default	23:30:44.644999-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_transport @0.046s
default	23:30:44.645054-0500	MobileJarvisNative	nw_flow_connected [C7.1.1.1 IPv6#a3fec298.443 in_progress channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (CFNetworkConnection-2965105600)
default	23:30:44.645216-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	23:30:44.645436-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	23:30:44.645495-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:child_finish_connect @0.046s
default	23:30:44.645678-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	23:30:44.645757-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	23:30:44.645811-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.046s
default	23:30:44.645837-0500	MobileJarvisNative	nw_flow_connected [C7 IPv6#a3fec298.443 in_progress parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (endpoint_flow)
default	23:30:44.645915-0500	MobileJarvisNative	[C7 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:finish_connect @0.046s
default	23:30:44.646059-0500	MobileJarvisNative	nw_connection_report_state_with_handler_on_nw_queue [C7] reporting state ready
default	23:30:44.646085-0500	MobileJarvisNative	[C7 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: flow:changed_viability @0.047s
default	23:30:44.646111-0500	MobileJarvisNative	nw_connection_send_viability_changed_on_nw_queue [C7] viability_changed_handler(true)
default	23:30:44.646428-0500	MobileJarvisNative	quic_migration_path_event_block_invoke [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] path over en0 received event established
default	23:30:44.646579-0500	MobileJarvisNative	quic_migration_evaluate_primary [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] promoted path 0x115355180 over en0 to primary
default	23:30:44.646631-0500	MobileJarvisNative	nw_protocol_instance_report_ready [C7.1.1.1:2] Calling notify with interface <private>
default	23:30:44.646794-0500	MobileJarvisNative	[C7.1.1.1 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.047s, uuid: 135E38D8-6314-4CFD-B1FA-C66A160C77B2
default	23:30:44.646873-0500	MobileJarvisNative	[C7.1.1 Hostname#7534a036:443 ready resolver (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.047s, uuid: 0EB8EB32-DA65-4670-AEA4-4FCE6678C972
default	23:30:44.646929-0500	MobileJarvisNative	[C7.1 Hostname#7534a036:443 ready transform (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.047s, uuid: 8AAD8373-BD0C-41F1-99E2-F2FAA62023E3
default	23:30:44.646956-0500	MobileJarvisNative	[C7 IPv6#a3fec298.443 ready parent-flow (satisfied (Path is satisfied), interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] event: path:migrated @0.047s, uuid: 8AAD8373-BD0C-41F1-99E2-F2FAA62023E3
default	23:30:44.647028-0500	MobileJarvisNative	Connection 7: connected successfully
default	23:30:44.647053-0500	MobileJarvisNative	Connection 7: TLS handshake complete
default	23:30:44.647099-0500	MobileJarvisNative	Connection 7: ready C(N) E(N)
default	23:30:44.647454-0500	MobileJarvisNative	[C7] event: client:connection_reused @0.047s
default	23:30:44.647553-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> now using Connection 7
default	23:30:44.647901-0500	MobileJarvisNative	Connection 7: received viability advisory(Y)
default	23:30:44.647926-0500	MobileJarvisNative	0x115356158 ID=0 Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> sent request, body N 0
default	23:30:44.669651-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C8:1][0x115ce9800] Asyncing for session update block
default	23:30:44.669827-0500	MobileJarvisNative	boringssl_context_new_session_handler(1520) [C8:1][0x115ce9800] Asyncing for session update block
default	23:30:44.669910-0500	MobileJarvisNative	nw_protocol_boringssl_signal_connected(755) [C8:1][0x115ce9800] TLS connected [version(0x0304) ciphersuite(TLS_AES_128_GCM_SHA256) group(0x001d) signature_alg(0x0403) alpn(h3) resumed(0) offered_ticket(0) false_started(0) ocsp_received(0) sct_received(0) connect_time(41ms) flight_time(31ms) rtt(31ms) write_stalls(0) read_stalls(4) pake(0x0000)]
default	23:30:44.669971-0500	MobileJarvisNative	nw_flow_connected [C8 IPv6#a3fec298.443 ready channel-flow (satisfied (Path is satisfied), viable, interface: en0[802.11], ipv4, ipv6, dns, uses wifi)] Output protocol connected (tls)
default	23:30:44.670137-0500	MobileJarvisNative	quic_stream_create_inbound [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] creating inbound stream 3
default	23:30:44.670403-0500	MobileJarvisNative	quic_stream_create_inbound [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] creating inbound stream 7
default	23:30:44.670593-0500	MobileJarvisNative	quic_stream_create_inbound [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] creating inbound stream 11
default	23:30:44.671032-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C8:1][0x115ce9800] Returning from session update block
default	23:30:44.671405-0500	MobileJarvisNative	boringssl_context_new_session_handler_block_invoke(1523) [C8:1][0x115ce9800] Returning from session update block
default	23:30:44.671539-0500	MobileJarvisNative	quic_stream_create_inbound [C7.1.1.1:2] [-013e2569155d2622cb3cf169f75d006285f65746] creating inbound stream 15
default	23:30:44.716137-0500	MobileJarvisNative	0x115356158 ID=0 Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> received response, status 304 content U
default	23:30:44.716690-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> summary for task success {transaction_duration_ms=126, response_status=304, connection=7, protocol="h3", domain_lookup_duration_ms=2, connect_duration_ms=42, secure_connection_duration_ms=42, private_relay=false, request_start_ms=55, request_duration_ms=0, response_start_ms=126, response_duration_ms=0, request_bytes=453, request_throughput_kbps=2339, response_bytes=371, response_throughput_kbps=0, cache_hit=true}
default	23:30:44.716778-0500	MobileJarvisNative	[C7] event: client:connection_idle @0.119s
default	23:30:44.716980-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> done using Connection 7
default	23:30:44.717051-0500	MobileJarvisNative	Task <2EDFC5D5-0CA5-4D2E-91C4-7CCFBEFC89E9>.<1> finished successfully
default	23:30:44.732121-0500	powerd	Process runningboardd.33 Released SystemIsActive "app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>33-34-2190244:FBApplicationProcess" age:00:00:01  id:51539640395 [System: PrevIdle SysAct]
default	23:30:44.732275-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: running-active (role: UserInteractiveFocal) (endowments: <private>)
default	23:30:44.732496-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.732868-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.732914-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.733371-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.733686-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.733738-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734014-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734359-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734534-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734560-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734713-0500	MobileJarvisNative	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, unknown-NotVisible
default	23:30:44.734862-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.734950-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.735162-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.735307-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.735335-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-Visible
default	23:30:44.735845-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, running-active-NotVisible
default	23:30:44.770446-0500	runningboardd	Invalidating assertion 33-26683-2190249 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]) from originator [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.782669-0500	MobileJarvisNative	🔧 BackgroundApiModule: ✅ Simplified URLSession configured with long timeout
error	23:30:44.784888-0500	MobileJarvisNative	[runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
error	23:30:44.785176-0500	MobileJarvisNative	Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes
default	23:30:44.785276-0500	MobileJarvisNative	<private>
default	23:30:44.786314-0500	MobileJarvisNative	kExcludedFromBackupXattrName set on path: <private>
error	23:30:44.788083-0500	MobileJarvisNative	<private>
error	23:30:44.788122-0500	MobileJarvisNative	<private>
error	23:30:44.788156-0500	MobileJarvisNative	[runtime not ready]: Invariant Violation: "main" has not been registered. This can happen if:
* Metro (the local dev server) is run from the wrong folder. Check if Metro is running, stop it and restart it in the current project.
* A module failed to load due to an error and `AppRegistry.registerComponent` wasn't called., js engine: hermes
error	23:30:44.788222-0500	MobileJarvisNative	<private>
default	23:30:44.789933-0500	MobileJarvisNative	*** Terminating app due to uncaught exception 'RCTFatalException: Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes', reason: 'Unhandled JS Exception: [runtime not ready]: Error: GOOGLE_CLIENT_ID not configured in environment, js engine: hermes, stack:
getGoogleClientId@1:1428266
anonymous@1:1426370
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:1417998
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:1411374
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:1368754
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:1366015
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:1078493
loadModuleImplementation@1:67800
guardedLoadModule@1:67330
metroRequire@1:66926
anonymous@1:849225
loadModuleImplementation@1:67800
guardedLoadMod<…>
default	23:30:44.793265-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Workspace connection invalidated.
default	23:30:44.793637-0500	SpringBoard	com.hightowerai.MobileJarvisNative(26683) lostConnection (invalidation)
default	23:30:44.794059-0500	kernel	MobileJarvisNative[26683] Corpse allowed 1 of 5
default	23:30:44.794131-0500	backboardd	Connection removed: IOHIDEventSystemConnection uuid:B6EB70D7-9A44-4DD9-8EBB-5DBE03992B8F pid:26683 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 26683;
} state:0x1 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE
default	23:30:44.794198-0500	backboardd	Removing client connection <BKHIDClientConnection: 0xca6fc8940; IOHIDEventSystemConnectionRef: 0xc997f9600; vpid: 26683(v94FF8); taskPort: 0x10246F; bundleID: com.hightowerai.MobileJarvisNative> for client: IOHIDEventSystemConnection uuid:B6EB70D7-9A44-4DD9-8EBB-5DBE03992B8F pid:26683 process:MobileJarvisNative type:Passive entitlements:0x0 caller:BackBoardServices: <redacted> + 280 attributes:{
    HighFrequency = 1;
    bundleID = "com.hightowerai.MobileJarvisNative";
    pid = 26683;
} state:0x1 events:0 mask:0x0 dropped:0 dropStatus:0 droppedMask:0x0 lastDroppedTime:NONE source:HID
default	23:30:44.794377-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Now flagged as pending exit for reason: workspace client connection invalidated
default	23:30:44.795214-0500	SpringBoard	[coordinator] using MRU target <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:44.795245-0500	SpringBoard	RX com.hightowerai.MobileJarvisNative(26683) setWindowContextID:0 windowState:Disabled level:0.0
    focusContext:(null)
default	23:30:44.795322-0500	SpringBoard	[coordinator] informing scene controller 'com.apple.springboard' of focusTarget: <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
default	23:30:44.795578-0500	SpringBoard	[coordinator] keyboard arbiter suggested <nothing> and we replied <com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid:26683>
error	23:30:44.795705-0500	SpringBoard	Advisor: No handle found for currently focused PID: 26683; sceneIdentity: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default
default	23:30:44.795902-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: null> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>
]
default	23:30:44.795936-0500	backboardd	chain did update (setDeferringRules) <keyboardFocus; display: builtin> [
    <token: com.apple.frontboard.systemappservices/FBSceneManager:com.apple.springboard; pid: 34>,
    <token: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default; pid: 26683>
]
default	23:30:44.798851-0500	runningboardd	XPC connection invalidated: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.802158-0500	runningboardd	[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683] termination reported by launchd (2, 6, 6)
default	23:30:44.802211-0500	runningboardd	Removing process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.803105-0500	runningboardd	Removing launch job for: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.803308-0500	runningboardd	Removed job for [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.803380-0500	runningboardd	Removing assertions for terminated process: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.803436-0500	runningboardd	Removed last relative-start-date-defining assertion for process app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>
default	23:30:44.812788-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: none (role: None) (endowments: (null))
default	23:30:44.812918-0500	runningboardd	Calculated state for app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>: none (role: None) (endowments: (null))
default	23:30:44.813111-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Workspace assertion invalidated: <NSError: 0x86f186d60; domain: RBSAssertionErrorDomain; code: 1; "Assertions were invalidated">
default	23:30:44.813159-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Process exited: <RBSProcessExitContext| specific, status:<RBSProcessExitStatus| domain:signal(2) code:SIGABRT(6)>>.
default	23:30:44.813183-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Setting process task state to: Not Running
default	23:30:44.813208-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Setting process visibility to: Unknown
default	23:30:44.813561-0500	SpringBoard	[app<com.hightowerai.MobileJarvisNative>:26683] Invalidating workspace.
default	23:30:44.813699-0500	SpringBoard	Removing source registration for processHandle: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.813785-0500	SpringBoard	[0x867dccf00:(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Invalidated for connection: 0x86eda6fd0.
default	23:30:44.813935-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.814449-0500	SpringBoard	Removing: <FBApplicationProcess: 0x86f0c4f00; app<com.hightowerai.MobileJarvisNative>:26683(v94FF8)>
default	23:30:44.814532-0500	SpringBoard	Process exited: <FBApplicationProcess: 0x86f0c4f00; app<com.hightowerai.MobileJarvisNative>:26683(v94FF8)> -> <RBSProcessExitContext| specific, status:<RBSProcessExitStatus| domain:signal(2) code:SIGABRT(6)>>
default	23:30:44.815361-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.815978-0500	healthd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.816133-0500	SpringBoard	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.816256-0500	runningboardd	XPC connection invalidated: [app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683]
default	23:30:44.816504-0500	CommCenter	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.817646-0500	SpringBoard	Application process state changed for com.hightowerai.MobileJarvisNative: (null)
default	23:30:44.821801-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.822568-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.822810-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.823807-0500	locationd	{"msg":"invoking applicationStateChange handler", "StateChangeData":"{\n    BKSApplicationStateAppIsFrontmost = 0;\n    BKSApplicationStateExtensionKey = 0;\n    SBApplicationStateDisplayIDKey = \"com.hightowerai.MobileJarvisNative\";\n    SBApplicationStateKey = 1;\n    SBApplicationStateProcessIDKey = 26683;\n    SBMostElevatedStateForProcessID = 1;\n}"}
default	23:30:44.823921-0500	locationd	{"msg":"RBS #AppMonitor process monitor update handler invoked", "pid":26683, "bundleID":"com.hightowerai.MobileJarvisNative", "state":"None"}
default	23:30:44.824424-0500	locationd	{"msg":"#dic AppMonitor received Termination", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative", "isUserKill":0}
default	23:30:44.824493-0500	locationd	{"msg":"Not Posting Application State Change Notification via legacy path", "notification":"Terminated", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	23:30:44.824680-0500	locationd	{"msg":"RBS #dic AppMonitor received Termination", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative", "isUserKill":0}
default	23:30:44.824731-0500	locationd	{"msg":"RBS #AppMonitor Post Application State Change Notification", "notification":"Terminated", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative"}
default	23:30:44.825124-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:44.826792-0500	locationd	{"msg":"#CLIUA AppMonitor notification", "notification":"Terminated", "pid":26683, "bundleId":"com.hightowerai.MobileJarvisNative", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:44.826860-0500	locationd	{"msg":"#CLIUA Marking change", "clientKey":"icom.hightowerai.MobileJarvisNative:", "reason":"Process state from RunningBoard", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement", "coming":0}
default	23:30:44.826910-0500	locationd	{"msg":"#CLIUA updating AssertionRecord", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelDirectUserEngagement"}
default	23:30:44.826951-0500	locationd	{"msg":"#CLIUA AssertionRecord updated", "ClientKey":"icom.hightowerai.MobileJarvisNative:", "AssertionLevel":"kCLClientInUseLevelNotInUse"}
default	23:30:44.826983-0500	locationd	{"msg":"#CLIUA in-use level changed for client", "ClientKey":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:44.827018-0500	locationd	{"msg":"#Warning #ClientResolution the passed keyPath is not registered. Resolving to #nullCKP", "InputCKP":"icom.hightowerai.MobileJarvisNative:"}
default	23:30:44.827301-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.828299-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.828964-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.830790-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.833673-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.833704-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.834439-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.835325-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.835484-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.835644-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.837136-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] com.hightowerai.MobileJarvisNative application state changed to <RBSProcessState| task:none debug:none>
default	23:30:44.837989-0500	dasd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.838785-0500	audiomxd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.839350-0500	symptomsd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.839657-0500	locationd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.839751-0500	watchdogd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.839912-0500	WirelessRadioManagerd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.840323-0500	callservicesd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.840428-0500	useractivityd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.840462-0500	PerfPowerServices	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.840662-0500	wifid	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.840890-0500	gamepolicyd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.841140-0500	backboardd	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
default	23:30:44.841368-0500	UserEventAgent	Received state update for 26683 (app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>, none-NotVisible
error	23:30:44.841497-0500	runningboardd	RBSStateCapture remove item called for untracked item <RBConnectionClient| 26683 name:app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)> entitlements:<RBEntitlements| [
			
			]> inheritanceManager:<RBClientInheritanceManager|  inheritances:[
	<RBSInheritance| environment:(none) name:com.apple.frontboard.visibility origID:33-34-2190251 0>,
	<RBSInheritance| environment:UIScene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default name:com.apple.frontboard.visibility origID:33-34-2190248 payload 15918742631522514469>
	]>>
default	23:30:44.843998-0500	SpringBoard	[com.apple.springboard] removing scene: com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default pid: 26683 for reason: didRemoveExternalForegroundApplicationSceneHandle
default	23:30:44.845679-0500	wifid	-[WiFiUserInteractionMonitor setApplicationRunningState:foregroundState:andNetworkingState:forBundleId:]: com.hightowerai.MobileJarvisNative exited
default	23:30:44.846777-0500	SpringBoard	[coordinator] _removeSceneFromRecents didRemoveExternalForegroundApplicationSceneHandle pid:26683 scene:com.apple.frontboard.systemappservices/FBSceneManager:sceneID%3Acom.hightowerai.MobileJarvisNative-default now:<empty>
default	23:30:44.851825-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _parseFBSDisplayLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FBSDisplayLayout: 0x859b51a40; displayIdentity: Main> {    bounds = {{0, 0}, {390, 844}};    interfaceOrientation = "portrait (1)";    backlightLevel = 100;    backlightState = 2;    elements = {        <SBSDisplayLayoutElement: 0x85b5ee760; com.apple.springboard.home-screen; frame: {{0, 0}, {390, 844}}; level: 0; role: primary>;        <SBSDisplayLayoutElement: 0x85b5ef410; sceneID:com.hightowerai.MobileJarvisNative-default; bundleID: com.hightowerai.MobileJarvisNative; frame: {{0, 0}, {390, 844}}; level: 1; role: primary>;    }    timestamp = October 10, 2025 at 11:30:44 PM CDT;}
default	23:30:44.851866-0500	cameracaptured	<<<< FigCaptureDisplayLayoutMonitor >>>> -[FigCaptureDisplayLayoutMonitor _updateObserversWithLayout:]: <FigCaptureDisplayLayoutMonitor: 0x85416d5c0 Main Display> <FigCaptureDisplayLayout: 0x859b50680 10-10-2025 23:30:44, Main Display, foreground:[com.hightowerai.MobileJarvisNative]>
default	23:30:44.854965-0500	SpringBoard	[com.hightowerai.MobileJarvisNative] Ignore becoming background for application without push registration
default	23:30:44.855528-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Removing parent scene.
default	23:30:44.856894-0500	SpringBoard	No longer tracking: <FBScene: 0x86840b500; FBSceneManager:sceneID:com.hightowerai.MobileJarvisNative-default>
default	23:30:44.861290-0500	SpringBoard	<SBSceneSnapshotRequestor: 0x8648f3f00; debugName: LCD> [sceneID:com.hightowerai.MobileJarvisNative-default] Requesting 1 snapshot(s) because the scene actually moved to the background
default	23:30:44.861344-0500	SpringBoard	Created: <FBSceneSnapshotAction: 0x86ad6be80; sceneID:com.hightowerai.MobileJarvisNative-default>
default	23:30:44.861632-0500	runningboardd	Acquiring assertion targeting 26683 from originator [osservice<com.apple.SpringBoard>:34] with description <RBSAssertionDescriptor| "FBSceneSnapshotAction:sceneID:com.hightowerai.MobileJarvisNative-default" ID:33-34-2190252 target:26683 attributes:[
	<RBSDomainAttribute| domain:"com.apple.frontboard" name:"SceneSnapshotAction" sourceEnvironment:"(null)">,
	<RBSDurationAttribute| invalidationDuration:5.00 warningDuration:0.00 startPolicy:Fixed endPolicy:Invalidate>
	]>
default	23:30:44.861820-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Sending action(s) in update: <FBSceneSnapshotAction: 0x0022f542>
default	23:30:44.861871-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] scene content state changed: notReady
default	23:30:44.862746-0500	SpringBoard	<BSCompoundAssertion:0x86b6700c0> (SBApplicationAppProtectionAssistant: 0x86b672b40 - com.hightowerai.MobileJarvisNative) invalidate acq:0x866606000 count:1
default	23:30:44.862996-0500	SpringBoard	All scenes dismissed for <APApplication: com.hightowerai.MobileJarvisNative>
default	23:30:44.863439-0500	bluetoothd	SystemUI unknown identifier: 'sceneID:com.hightowerai.MobileJarvisNative-default' / 'com.hightowerai.MobileJarvisNative'
default	23:30:44.869576-0500	symptomsd	com.hightowerai.MobileJarvisNative: Foreground: false
default	23:30:44.869648-0500	symptomsd	call _saveAndUnloadSelectState on com.hightowerai.MobileJarvisNative exiting foreground state
default	23:30:44.875083-0500	backboardd	new scene host settings: contextID:6291CB98 <sceneID:com.hightowerai.MobileJarvisNative-default> foreground -> inactive
error	23:30:44.877827-0500	runningboardd	RBSStateCapture remove item called for untracked item 33-26683-2190249 (target:[app<com.hightowerai.MobileJarvisNative(BED36376-5A4B-42A9-9620-6AE0BC5F0283)>:26683])
default	23:30:44.880920-0500	SpringBoard	<SBFullScreenSwitcherLiveContentOverlayCoordinator: 0x867814ee0> Removing SwitcherScene overlay for: <SBAppLayout: 0x86b20a700; primary: com.hightowerai.MobileJarvisNative:default; environment: main>, animated: NO
default	23:30:44.890755-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] client invalidated
default	23:30:44.890779-0500	SpringBoard	Invalidating scene: sceneID:com.hightowerai.MobileJarvisNative-default
default	23:30:44.890851-0500	SpringBoard	Invalidating: <FBSceneSnapshotAction: 0x86ad6be80; sceneID:com.hightowerai.MobileJarvisNative-default>
default	23:30:44.890911-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default][1] Scene invalidated.
default	23:30:44.890948-0500	SpringBoard	Got response for <FBSceneSnapshotAction: 0x86ad6be80; sceneID:com.hightowerai.MobileJarvisNative-default>: <NSError: 0x86eda5e90; domain: BSActionErrorDomain; code: 6 ("anulled")>
default	23:30:44.891689-0500	SpringBoard	rules: (scene setting) REMOVED keyboardFocus environment from scene: sceneID:com.hightowerai.MobileJarvisNative-default
error	23:30:44.891716-0500	SpringBoard	Ignoring update for invalidated scene: (FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default
error	23:30:44.892362-0500	SpringBoard	[(FBSceneManager):sceneID:com.hightowerai.MobileJarvisNative-default] Update failed: <NSError: 0x86eda7180; domain: FBSceneErrorDomain; code: 1 ("operation-failed"); "Scene update failed."> {
    NSUnderlyingError = <NSError: 0x86eda7900; domain: FBWorkspace; code: 1; "Scene client is invalid.">;
}
error	23:30:44.933171-0500	symptomsd	COSMCtrl _foregroundAppActivity incoming bundle com.hightowerai.MobileJarvisNative has nil supplied UUID, finds existing 3F1EEBDE-EEDE-3719-A97E-68EE3FF38A96
default	23:30:45.353678-0500	ReportCrash	Formulating fatal 309 report for corpse[26683] MobileJarvisNative
default	23:30:45.368206-0500	ReportCrash	loadStoreInfo [platform 2] com.hightowerai.MobileJarvisNative from file:///private/var/containers/Bundle/Application/D72EA035-3B45-4E80-98A9-D7CC3FB55228/MobileJarvisNative.app/
default	23:30:45.447355-0500	osanalyticshelper	creating type 309 as /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/.MobileJarvisNative-2025-10-10-233045.ips
default	23:30:45.466133-0500	osanalyticshelper	Saved type '309(<private>)' report (16 of max 25) at /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-10-233045.ips
default	23:30:45.471278-0500	osanalyticshelper	xpc log creation type 309 result success: /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-10-233045.ips
default	23:30:45.471637-0500	ReportCrash	client log create type 309 result success: /private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-10-233045.ips
default	23:30:45.485816-0500	ReportCrash	com.hightowerai.MobileJarvisNative is not a MetricKit client
default	23:30:45.499500-0500	ReportCrash	recordCrashEvent; isBeta 0, log: '/private/var/containers/Shared/SystemGroup/systemgroup.com.apple.osanalytics/DiagnosticReports/MobileJarvisNative-2025-10-10-233045.ips'
default	23:30:46.404608-0500	SpringBoard	Verify background audio activity for com.hightowerai.MobileJarvisNative, Recording: 0
