import Foundation
import React
import EXUpdates

@objc(UpdatesLoggerModule)
class UpdatesLoggerModule: NSObject {

    @objc
    func logUpdatesStatus(_ resolve: @escaping RCTPromiseResolveBlock,
                         rejecter reject: @escaping RCTPromiseRejectBlock) {
        NSLog("========== EXPO UPDATES STATUS ==========")
        NSLog("📦 UpdatesLoggerModule: Starting expo-updates status check...")

        // Check if AppController is initialized
        let isInitialized = AppController.isInitialized()
        NSLog("📦 UpdatesLoggerModule: AppController initialized: %@", isInitialized ? "YES" : "NO")

        if !isInitialized {
            NSLog("📦 UpdatesLoggerModule: ⚠️ AppController not initialized - expo-updates may not be running")
            resolve([
                "initialized": false,
                "message": "AppController not initialized"
            ])
            return
        }

        let controller = AppController.sharedInstance

        // Get module constants as a dictionary (properties are internal, so we use the public map)
        let constantsMap = controller.getConstantsForModule().toModuleConstantsMap()

        NSLog("📦 UpdatesLoggerModule: ========== CONFIGURATION ==========")
        NSLog("📦 UpdatesLoggerModule: Enabled: %@", (constantsMap["isEnabled"] as? Bool ?? false) ? "YES" : "NO")
        NSLog("📦 UpdatesLoggerModule: Runtime Version: %@", (constantsMap["runtimeVersion"] as? String) ?? "NOT SET")
        NSLog("📦 UpdatesLoggerModule: Check On Launch: %@", (constantsMap["checkAutomatically"] as? String) ?? "NOT SET")
        NSLog("📦 UpdatesLoggerModule: Channel: %@", (constantsMap["channel"] as? String) ?? "NOT SET")
        NSLog("📦 UpdatesLoggerModule: Using Embedded Assets: %@", (constantsMap["isUsingEmbeddedAssets"] as? Bool ?? false) ? "YES" : "NO")

        NSLog("📦 UpdatesLoggerModule: ========== LAUNCHED UPDATE ==========")
        if let updateId = constantsMap["updateId"] as? String {
            NSLog("📦 UpdatesLoggerModule: Update ID: %@", updateId)
            if let commitTime = constantsMap["commitTime"] as? UInt64 {
                NSLog("📦 UpdatesLoggerModule: Commit Time: %llu ms since epoch", commitTime)
            }
        } else {
            NSLog("📦 UpdatesLoggerModule: No launched update")
        }

        NSLog("📦 UpdatesLoggerModule: ========== EMBEDDED UPDATE ==========")
        let isEmbeddedLaunch = constantsMap["isEmbeddedLaunch"] as? Bool ?? false
        NSLog("📦 UpdatesLoggerModule: Is Embedded Launch: %@", isEmbeddedLaunch ? "YES" : "NO")

        NSLog("📦 UpdatesLoggerModule: ========== LAUNCH INFO ==========")
        if let launchDuration = constantsMap["launchDuration"] as? Double {
            NSLog("📦 UpdatesLoggerModule: Launch Duration: %.2f ms", launchDuration)
        }

        let isEmergencyLaunch = constantsMap["isEmergencyLaunch"] as? Bool ?? false
        if isEmergencyLaunch {
            let reason = constantsMap["emergencyLaunchReason"] as? String ?? "Unknown reason"
            NSLog("📦 UpdatesLoggerModule: ⚠️ Emergency Launch: %@", reason)
        }

        NSLog("📦 UpdatesLoggerModule: ========== STATE MACHINE CONTEXT ==========")
        if let initialContext = constantsMap["initialContext"] as? [String: Any] {
            NSLog("📦 UpdatesLoggerModule: Initial Context: %@", initialContext)
        }

        // Also read Expo.plist directly for comparison
        NSLog("📦 UpdatesLoggerModule: ========== EXPO.PLIST COMPARISON ==========")
        if let expoPlistPath = Bundle.main.path(forResource: "Expo", ofType: "plist"),
           let expoConfig = NSDictionary(contentsOfFile: expoPlistPath) as? [String: Any] {
            NSLog("📦 UpdatesLoggerModule: Expo.plist Enabled: %@", expoConfig["EXUpdatesEnabled"] as? Bool ?? false ? "YES" : "NO")
            NSLog("📦 UpdatesLoggerModule: Expo.plist URL: %@", (expoConfig["EXUpdatesURL"] as? String) ?? "NOT SET")
            NSLog("📦 UpdatesLoggerModule: Expo.plist Runtime Version: %@", (expoConfig["EXUpdatesRuntimeVersion"] as? String) ?? "NOT SET")
            NSLog("📦 UpdatesLoggerModule: Expo.plist Check On Launch: %@", (expoConfig["EXUpdatesCheckOnLaunch"] as? String) ?? "NOT SET")

            if let requestHeaders = expoConfig["EXUpdatesRequestHeaders"] as? [String: String],
               let channelName = requestHeaders["expo-channel-name"] {
                NSLog("📦 UpdatesLoggerModule: Expo.plist Channel: %@", channelName)
            }
        } else {
            NSLog("📦 UpdatesLoggerModule: ⚠️ Could not read Expo.plist")
        }

        NSLog("📦 UpdatesLoggerModule: ========== CONTROLLER INFO ==========")
        NSLog("📦 UpdatesLoggerModule: Is Active Controller: %@", controller.isActiveController ? "YES" : "NO")
        if let launchAssetUrl = controller.launchAssetUrl() {
            NSLog("📦 UpdatesLoggerModule: Launch Asset URL: %@", launchAssetUrl.absoluteString)
        } else {
            NSLog("📦 UpdatesLoggerModule: Launch Asset URL: nil")
        }

        NSLog("========== END EXPO UPDATES STATUS ==========")

        // Build response dictionary
        var response: [String: Any] = [
            "initialized": true,
            "isEnabled": constantsMap["isEnabled"] as? Bool ?? false,
            "isActiveController": controller.isActiveController,
            "runtimeVersion": constantsMap["runtimeVersion"] as? String ?? "",
            "channel": constantsMap["channel"] as? String ?? "",
            "checkOnLaunch": constantsMap["checkAutomatically"] as? String ?? "",
            "isUsingEmbeddedAssets": constantsMap["isUsingEmbeddedAssets"] as? Bool ?? false,
            "isEmbeddedLaunch": constantsMap["isEmbeddedLaunch"] as? Bool ?? false,
            "isEmergencyLaunch": constantsMap["isEmergencyLaunch"] as? Bool ?? false
        ]

        if let updateId = constantsMap["updateId"] as? String {
            response["updateId"] = updateId
        }

        if let commitTime = constantsMap["commitTime"] as? UInt64 {
            response["commitTime"] = commitTime
        }

        if let launchAssetUrl = controller.launchAssetUrl() {
            response["launchAssetUrl"] = launchAssetUrl.absoluteString
        }

        if let initialContext = constantsMap["initialContext"] as? [String: Any] {
            response["initialContext"] = initialContext
        }

        resolve(response)
    }

    @objc static func requiresMainQueueSetup() -> Bool {
        return false
    }
}
