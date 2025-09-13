 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: active
 WARN  [AppStateService] Native module not available or not on Android
 LOG  🏥 VOICE_CONTEXT: App became active - syncing health data
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: ios
 LOG  🍎 HealthSync: Starting Apple Health sync
 LOG  🍎 HealthSync: Checking for active integration
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1757777756820}
 LOG  🍎 HealthSync: Active integration found, fetching health data
 LOG  🍎 AppleHealthKitDataService: Fetching current realtime data
 WARN  Failed to fetch heart rate: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch resting heart rate: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch HRV: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch blood pressure: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch respiratory rate: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch body temperature: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch oxygen saturation: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch step count: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch distance: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch active energy: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch basal energy: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch flights climbed: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch activity summary: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch weight: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch height: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch BMI: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch body fat percentage: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch lean body mass: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 WARN  Failed to fetch blood glucose: [ReferenceError: Property 'AppleHealthKit' doesn't exist]
 LOG  🍎 AppleHealthKitDataService: Retrieved realtime data: ["last_sync_at"]
 LOG  🍎 HealthSync: Health data retrieved, filtering valid values
 LOG  🍎 HealthSync: Valid data found, upserting to database
 LOG  📊 DB: Upserting Apple Health realtime data for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📊 DB: Successfully upserted Apple Health data
 LOG  🍎 HealthSync: Successfully synced Apple Health data
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
 LOG  🏥 VOICE_CONTEXT: Health data successfully synced to database
