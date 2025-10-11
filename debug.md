

❌  (ios/MobileJarvisNative/UpdatesLoggerModule.swift:101:48)

   99 |             "channel": constants.requestHeaders["expo-channel-name"] ?? "",
  100 |             "checkOnLaunch": constants.checkOnLaunch.asString,
> 101 |             "isUsingEmbeddedAssets": constants.isUsingEmbeddedAssets
      |                                                ^ 'isUsingEmbeddedAssets' is inaccessible due to 'internal' protection level
  102 |         ]
  103 | 
  104 |         if let launchedUpdate = constants.launchedUpdate {


❌  (ios/MobileJarvisNative/UpdatesLoggerModule.swift:104:43)

  102 |         ]
  103 | 
> 104 |         if let launchedUpdate = constants.launchedUpdate {
      |                                           ^ 'launchedUpdate' is inaccessible due to 'internal' protection level
  105 |             response["updateId"] = launchedUpdate.updateId.uuidString
  106 |             response["commitTime"] = launchedUpdate.commitTime.timeIntervalSince1970
  107 |         }

    Run script build phase '[CP-User] Generate updates resources for expo-updates' will be run during every build because it does not specify any outputs. To address this issue, either add output dependencies to the script phase, or configure it to run in every build by unchecking "Based on dependency analysis" in the script phase. (in target 'EXUpdates' from project 'Pods')

› 18 error(s), and 25 warning(s)

CommandError: Failed to build iOS project. "xcodebuild" exited with error code 65.
zsh: command not found: --configuration