 LOG  🏥 HealthSync: Platform detected: ios
 LOG  🍎 HealthSync: Starting Apple Health sync
 LOG  🍎 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🍎 HealthSync: Active integration found, fetching health data
 LOG  🍎 AppleHealthKitDataService: Fetching current realtime data
 WARN  Failed to fetch basal energy: [Error: HealthKit method getBasalEnergyBurned failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  Activity summary not directly available in @kingstinct/react-native-healthkit
 WARN  Failed to fetch lean body mass: [Error: HealthKit method getLatestLeanBodyMass failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 AppleHealthKitDataService: Retrieved realtime data: ["last_sync_at"]
 LOG  🍎 HealthSync: Health data retrieved, filtering valid values
 LOG  🍎 HealthSync: Valid data found, upserting to database
 LOG  📊 DB: Upserting Apple Health realtime data for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 DB: Successfully upserted Apple Health data
 LOG  🍎 HealthSync: Successfully synced Apple Health data
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true