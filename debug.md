 LOG  ⌨️ KEYBOARD_DID_SHOW: {"duration": 0, "height": 276.79998779296875, "screenY": 635.2000122070312, "width": 432}
› Reloading apps
Android Bundled 50ms index.js (1 module)
Android Bundled 48ms index.js (1 module)
 LOG  🌐 API: Using backend URL: https://juniper-python-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  🌐 BackgroundApiService: Platform.OS = android
 LOG  🌐 BackgroundApiService: BackgroundApiModule = false
 LOG  🌐 BackgroundApiService: BackgroundApiModule type = object
 LOG  🌐 BackgroundApiService: Not iOS platform
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  Calling getStatus() on WakeWordModule
 LOG  🔐 App: Getting initial auth session...
 LOG  🏥 App: Starting health data sync...
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  getStatus result: {"enabled": false}
 LOG  Wake word detection available: false
 LOG  Found initial URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  === DEEP LINK RECEIVED ===
 LOG  Full URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  URL starts with https:// false
 LOG  URL includes /oauth/ false
 LOG  ❌ URL did not match any OAuth patterns
 LOG  Expected OAuth patterns:
 LOG    1. Contains "oauth2redirect" or "com.googleusercontent.apps"
 LOG    2. Starts with "mobilejarvisnative://oauth/callback"
 LOG    3. Contains "code=" or "error=" parameters
 LOG  🏥 HealthSync: Starting health data sync for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🤖 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🤖 GoogleHealthConnectDataService: Starting wearables_data sync
 LOG  🤖 Syncing 7 days of data for user f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e, integration 8e017599-b702-4450-9479-bee1828c30f8
 LOG  🤖 Health Connect client initialized successfully for wearables sync
 LOG  🤖 Syncing data from 2025-09-22T05:00:00.000Z to 2025-09-29T22:59:32.198Z
 LOG  🤖 Syncing heart rate data...
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read HeartRate records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HEART_RATE to read to record typeclass android.health.connect.datatypes.HeartRateRecord]
 LOG  🤖 Created 0 heart rate records
 LOG  🤖 Syncing activity data...
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🤖 Created 0 activity records
 LOG  🤖 Syncing sleep data...
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-21T05:00:00.000Z"}
 WARN  ❌ Failed to read SleepSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_SLEEP to read to record typeclass android.health.connect.datatypes.SleepSessionRecord]
 LOG  🤖 Created 0 sleep records
 LOG  🤖 Syncing body measurements...
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Weight records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_WEIGHT to read to record typeclass android.health.connect.datatypes.WeightRecord]
 LOG  🔍 Reading Height records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Height records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HEIGHT to read to record typeclass android.health.connect.datatypes.HeightRecord]
 LOG  🤖 Created 0 body measurement records
 LOG  🤖 Syncing nutrition data...
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🤖 Created 0 nutrition records
 LOG  🤖 Syncing vital signs data...
 LOG  🔍 Reading BloodPressure records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BloodPressure records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BLOOD_PRESSURE to read to record typeclass android.health.connect.datatypes.BloodPressureRecord]
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BloodGlucose records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BLOOD_GLUCOSE to read to record typeclass android.health.connect.datatypes.BloodGlucoseRecord]
 LOG  🔍 Reading OxygenSaturation records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read OxygenSaturation records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_OXYGEN_SATURATION to read to record typeclass android.health.connect.datatypes.OxygenSaturationRecord]
 LOG  🔍 Reading RespiratoryRate records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read RespiratoryRate records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_RESPIRATORY_RATE to read to record typeclass android.health.connect.datatypes.RespiratoryRateRecord]
 LOG  🔍 Reading BodyTemperature records with filter: {"endTime": "2025-09-29T22:59:32.198Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BodyTemperature records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BODY_TEMPERATURE to read to record typeclass android.health.connect.datatypes.BodyTemperatureRecord]
 LOG  🤖 Created 0 vital signs records
 LOG  🤖 Total records to sync: 0
 LOG  ✅ Wearables data sync completed successfully
 LOG  🤖 HealthSync: Successfully synced Google Health data to wearables_data
 LOG  🔄 Health Connect: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Health Connect: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)", "Google Health Connect: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Google Health Connect", "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ Component health initialized: success=true
 LOG  ✅ App: Initialization sequence completed
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  🎧 WAKE_WORD_CONTEXT: Setting up wake word event listener...
 LOG  🎧 WAKE_WORD_CONTEXT: Current voice state: IDLE
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🎧 WAKE_WORD_CONTEXT: ✅ Wake word listener registered successfully
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: IDLE
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_CONTEXT: User logged in, refreshing settings...
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH STARTED ==========
 LOG  🔄 VOICE_CONTEXT: User ID: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔄 VOICE_CONTEXT: Refreshing settings from database...
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  🔄 CONVERSATION_SYNC: User loaded, checking for background conversations...
 LOG  🔄 CONVERSATION_SYNC: Checking for background conversations...
 LOG  [ConversationSyncService] Checking for background conversations...
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186772888}
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 0 background conversations
 LOG  📱 CONVERSATION_SYNC: No background conversations found
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186772906}
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  ⌨️ KEYBOARD_STATE: {"height": undefined, "progress": undefined}
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔍 REQUEST_CHECK: Checking for uncompleted requests...
 LOG  🔍 DB_QUERY: Getting uncompleted requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@dbebe56
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: Component mounted {"behavior": "padding", "keyboardVerticalOffset": 0, "platform": "android"}
 LOG  ✅ Integration completion handler registered
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: onLayout {"height": 506.6666564941406, "width": 379.4285583496094, "y": 0}
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: onLayout {"height": 554.6666870117188, "width": 379.4285583496094, "y": 0}
 LOG  🔍 DB_QUERY: Found 31 uncompleted requests
 LOG  📊 REQUEST_CHECK: Found 31 uncompleted requests
 LOG  📊 REQUEST_CHECK: Most recent uncompleted request: 1758842394886-xcmlrotmo status: pending
 LOG  📊 REQUEST_CHECK: Most recent request is too old ( 96 hours), ignoring
 LOG  🌐 API: Using backend URL: https://juniper-python-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  🌐 BackgroundApiService: Platform.OS = android
 LOG  🌐 BackgroundApiService: BackgroundApiModule = false
 LOG  🌐 BackgroundApiService: BackgroundApiModule type = object
 LOG  🌐 BackgroundApiService: Not iOS platform
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://juniper-python-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 LOG  🚀 App: Starting initialization...
 LOG  📁 App: Initializing storage...
 LOG  📁 StorageInitializer: Starting AsyncStorage initialization...
 LOG  🔊 App: Checking wake word detection...
 LOG  Calling getStatus() on WakeWordModule
 LOG  🔐 App: Getting initial auth session...
 LOG  🏥 App: Starting health data sync...
 LOG  Setting up deep link handlers...
 LOG  Adding deep link event listener...
 LOG  Checking for initial URL (cold start)...
 LOG  getStatus result: {"enabled": false}
 LOG  Wake word detection available: false
 LOG  Found initial URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  === DEEP LINK RECEIVED ===
 LOG  Full URL: exp+mobilejarvisnative://expo-development-client/?url=http%3A%2F%2F192.168.1.80%3A8081
 LOG  URL starts with https:// false
 LOG  URL includes /oauth/ false
 LOG  ❌ URL did not match any OAuth patterns
 LOG  Expected OAuth patterns:
 LOG    1. Contains "oauth2redirect" or "com.googleusercontent.apps"
 LOG    2. Starts with "mobilejarvisnative://oauth/callback"
 LOG    3. Contains "code=" or "error=" parameters
 LOG  🏥 HealthSync: Starting health data sync for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========
 LOG  🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database: false
 LOG  🎤 VOICE_CONTEXT: Wake word sensitivity: 0.05
 LOG  🎤 VOICE_CONTEXT: Selected wake word: Juniper
 LOG  🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========
 LOG  🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...
 LOG  🔍 VOICE_SETTINGS: updateSettings called with: {
  "deepgramEnabled": false,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "wakeWord": "Juniper",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.05,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en"
}
 LOG  🔍 VOICE_SETTINGS: updates keys: ["deepgramEnabled", "baseLanguageModel", "generalInstructions", "wakeWord", "selectedWakeWord", "wakeWordSensitivity", "wakeWordDetectionEnabled", "selectedDeepgramVoice"]
 LOG  📱 VOICE_SETTINGS: Saving settings to storage...
 LOG  ✅ VOICE_SETTINGS: Settings saved successfully
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
 LOG  🎯 SOURCE_3: checkUnfetchedRequests starting...
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186773850}
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🤖 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🤖 GoogleHealthConnectDataService: Starting wearables_data sync
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 426 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  🤖 Syncing 7 days of data for user f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e, integration 8e017599-b702-4450-9479-bee1828c30f8
 LOG  🤖 Health Connect client initialized successfully for wearables sync
 LOG  🤖 Syncing data from 2025-09-22T05:00:00.000Z to 2025-09-29T22:59:33.061Z
 LOG  🤖 Syncing heart rate data...
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read HeartRate records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HEART_RATE to read to record typeclass android.health.connect.datatypes.HeartRateRecord]
 LOG  🤖 Created 0 heart rate records
 LOG  🤖 Syncing activity data...
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Steps records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_STEPS to read to record typeclass android.health.connect.datatypes.StepsRecord]
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Distance records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_DISTANCE to read to record typeclass android.health.connect.datatypes.DistanceRecord]
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read ActiveCaloriesBurned records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_ACTIVE_CALORIES_BURNED to read to record typeclass android.health.connect.datatypes.ActiveCaloriesBurnedRecord]
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read ExerciseSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_EXERCISE to read to record typeclass android.health.connect.datatypes.ExerciseSessionRecord]
 LOG  🤖 Created 0 activity records
 LOG  🤖 Syncing sleep data...
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-21T05:00:00.000Z"}
 WARN  ❌ Failed to read SleepSession records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_SLEEP to read to record typeclass android.health.connect.datatypes.SleepSessionRecord]
 LOG  🤖 Created 0 sleep records
 LOG  🤖 Syncing body measurements...
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Weight records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_WEIGHT to read to record typeclass android.health.connect.datatypes.WeightRecord]
 LOG  🔍 Reading Height records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Height records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HEIGHT to read to record typeclass android.health.connect.datatypes.HeightRecord]
 LOG  🤖 Created 0 body measurement records
 LOG  🤖 Syncing nutrition data...
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-23T04:59:59.999Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-24T04:59:59.999Z", "operator": "between", "startTime": "2025-09-23T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-25T04:59:59.999Z", "operator": "between", "startTime": "2025-09-24T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-26T04:59:59.999Z", "operator": "between", "startTime": "2025-09-25T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-27T04:59:59.999Z", "operator": "between", "startTime": "2025-09-26T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-28T04:59:59.999Z", "operator": "between", "startTime": "2025-09-27T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-29T04:59:59.999Z", "operator": "between", "startTime": "2025-09-28T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Nutrition records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_NUTRITION to read to record typeclass android.health.connect.datatypes.NutritionRecord]
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-30T04:59:59.999Z", "operator": "between", "startTime": "2025-09-29T05:00:00.000Z"}
 WARN  ❌ Failed to read Hydration records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_HYDRATION to read to record typeclass android.health.connect.datatypes.HydrationRecord]
 LOG  🤖 Created 0 nutrition records
 LOG  🤖 Syncing vital signs data...
 LOG  🔍 Reading BloodPressure records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BloodPressure records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BLOOD_PRESSURE to read to record typeclass android.health.connect.datatypes.BloodPressureRecord]
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BloodGlucose records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BLOOD_GLUCOSE to read to record typeclass android.health.connect.datatypes.BloodGlucoseRecord]
 LOG  🔍 Reading OxygenSaturation records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read OxygenSaturation records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_OXYGEN_SATURATION to read to record typeclass android.health.connect.datatypes.OxygenSaturationRecord]
 LOG  🔍 Reading RespiratoryRate records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read RespiratoryRate records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_RESPIRATORY_RATE to read to record typeclass android.health.connect.datatypes.RespiratoryRateRecord]
 LOG  🔍 Reading BodyTemperature records with filter: {"endTime": "2025-09-29T22:59:33.061Z", "operator": "between", "startTime": "2025-09-22T05:00:00.000Z"}
 WARN  ❌ Failed to read BodyTemperature records: [Error: android.health.connect.HealthConnectException: java.lang.SecurityException: Caller doesn't have android.permission.health.READ_BODY_TEMPERATURE to read to record typeclass android.health.connect.datatypes.BodyTemperatureRecord]
 LOG  🤖 Created 0 vital signs records
 LOG  🤖 Total records to sync: 0
 LOG  ✅ Wearables data sync completed successfully
 LOG  🤖 HealthSync: Successfully synced Google Health data to wearables_data
 LOG  🔄 Health Connect: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Health Connect: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)", "Google Health Connect: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Google Health Connect", "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true
 LOG  ✅ Component auth initialized: success=true
 LOG  ✅ Component health initialized: success=true
 LOG  ✅ App: Initialization sequence completed
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Waiting for voice settings to load...
 LOG  🎧 WAKE_WORD_CONTEXT: Setting up wake word event listener...
 LOG  🎧 WAKE_WORD_CONTEXT: Current voice state: IDLE
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  🎧 WAKE_WORD_CONTEXT: ✅ Wake word listener registered successfully
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: IDLE
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔐 Auth state changed: INITIAL_SESSION true
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: IDLE
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: ========== INITIAL STATE SETUP ==========
 LOG  🔄 VOICE_STATE_HOOK: Initial state from native: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Current hook state from ref: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: ========== HOOK STATE CHANGE DETECTED ==========
 LOG  🔄 VOICE_CONTEXT: ========== CONTEXT STATE CHANGE ==========
 LOG  🔄 VOICE_CONTEXT: Context voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_CONTEXT: Context isListening: false
 LOG  🔄 VOICE_CONTEXT: Context isSpeaking: false
 LOG  🔄 VOICE_CONTEXT: Context isError: false
 LOG  🔄 VOICE_CONTEXT: ====================================================
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Initial setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Initial setVoiceState called with: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - Previous state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: Functional setState - New state: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔄 VOICE_STATE_HOOK: setVoiceState called - React should update now
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🔄 VOICE_CONTEXT: User logged in, refreshing settings...
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH STARTED ==========
 LOG  🔄 VOICE_CONTEXT: User ID: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔄 VOICE_CONTEXT: Refreshing settings from database...
 LOG  📱 VOICE_SETTINGS: Loading settings from storage...
 LOG  🔄 CONVERSATION_SYNC: User loaded, checking for background conversations...
 LOG  🔄 CONVERSATION_SYNC: Checking for background conversations...
 LOG  [ConversationSyncService] Checking for background conversations...
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186774461}
 LOG  Auth state changed: INITIAL_SESSION
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  [ConversationSyncService] Found 0 background conversations
 LOG  📱 CONVERSATION_SYNC: No background conversations found
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186774502}
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing with database-backed voice settings
 LOG  🔄 WAKE_WORD_CONTEXT: Database wake word enabled: false
 LOG  🔄 WAKE_WORD_CONTEXT: Current local enabled: false
 LOG  🚀 WAKE_WORD_CONTEXT: Initializing wake word context...
 LOG  🚀 WAKE_WORD_CONTEXT: Using database state as initial state: false
 LOG  🔄 WAKE_WORD_CONTEXT: Syncing to database state: false
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Local settings loaded
 LOG  ✅ WAKE_WORD_CONTEXT: Native layer synced with database state
 LOG  🔊 WAKE_WORD_SERVICE: Adding DeviceEventEmitter listener for event: wakeWordDetected
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter available: true
 LOG  🔊 WAKE_WORD_SERVICE: DeviceEventEmitter listener added successfully, subscription: true
 LOG  ⌨️ KEYBOARD_STATE: {"height": undefined, "progress": undefined}
 LOG  🔍 ONBOARDING: Checking if user needs onboarding message
 LOG  🔍 REQUEST_CHECK: Checking for uncompleted requests...
 LOG  🔍 DB_QUERY: Getting uncompleted requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🔴 VoiceAssistant: isSpeaking changed: false
 LOG  🔴 VoiceAssistant: voiceState: com.hightowerai.MobileJarvisNative.voice.VoiceManager$VoiceState$IDLE@da8cb0f
 LOG  🔴 VoiceAssistant: typeof voiceState: string
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: Component mounted {"behavior": "padding", "keyboardVerticalOffset": 0, "platform": "android"}
 LOG  ✅ Integration completion handler registered
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: onLayout {"height": 459.6000061035156, "width": 400, "y": 0}
 LOG  ⌨️ KEYBOARD_AVOIDING_VIEW: onLayout {"height": 554.4000244140625, "width": 400, "y": 0}
 LOG  🎤 VOICE_CONTEXT: ========== WAKE WORD DETECTION REFRESH ==========
 LOG  🎤 VOICE_CONTEXT: Refreshing wake word detection enabled state from database: false
 LOG  🎤 VOICE_CONTEXT: Wake word sensitivity: 0.05
 LOG  🎤 VOICE_CONTEXT: Selected wake word: Juniper
 LOG  🔄 VOICE_CONTEXT: ========== SYNCING TO NATIVE LAYER ==========
 LOG  🔄 VOICE_CONTEXT: About to call updateSettingsRef.current with updates...
 LOG  🔍 VOICE_SETTINGS: updateSettings called with: {
  "deepgramEnabled": false,
  "baseLanguageModel": "claude-sonnet-4-20250514",
  "generalInstructions": "",
  "wakeWord": "Juniper",
  "selectedWakeWord": "Juniper",
  "wakeWordSensitivity": 0.05,
  "wakeWordDetectionEnabled": false,
  "selectedDeepgramVoice": "aura-2-pandora-en"
}
 LOG  🔍 VOICE_SETTINGS: updates keys: ["deepgramEnabled", "baseLanguageModel", "generalInstructions", "wakeWord", "selectedWakeWord", "wakeWordSensitivity", "wakeWordDetectionEnabled", "selectedDeepgramVoice"]
 LOG  📱 VOICE_SETTINGS: Saving settings to storage...
 LOG  ✅ VOICE_SETTINGS: Settings saved successfully
 LOG  🧹 Cleaning up voice event listeners
 LOG  🧹 Cleaning up AppState listeners
 LOG  ✅ Integration completion handler registered
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  🎤 Setting up voice event listeners
 LOG  📱 Setting up AppState monitoring for background wake word handling
 LOG  🔍 DB_QUERY: Found 31 uncompleted requests
 LOG  📊 REQUEST_CHECK: Found 31 uncompleted requests
 LOG  📊 REQUEST_CHECK: Most recent uncompleted request: 1758842394886-xcmlrotmo status: pending
 LOG  📊 REQUEST_CHECK: Most recent request is too old ( 96 hours), ignoring
 LOG  📝 ONBOARDING: User has conversations in database, skipping onboarding
 LOG  🎯 SOURCE_3: checkUnfetchedRequests starting...
 LOG  🎯 SOURCE_3: UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🎵 VOICE_SETTINGS: Updating voice settings on android - deepgramEnabled: false, voice: aura-2-pandora-en
 LOG  🎵 VOICE_SETTINGS: VoiceModule ready after 1 attempts
 LOG  ✅ VOICE_CONTEXT: Native voice settings update confirmed: {"deepgramEnabled": false, "message": "Native voice settings updated and configuration reloaded", "selectedVoice": "aura-2-pandora-en", "timestamp": 1759186775899}
 LOG  🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully
 LOG  🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: ========== NATIVE SYNC COMPLETED ==========
 LOG  🔄 VOICE_CONTEXT: Sync duration: 574 ms
 LOG  ✅ VOICE_CONTEXT: Settings updated and synced to native successfully
 LOG  🔄 VOICE_CONTEXT: ========== SETTINGS REFRESH COMPLETED ==========
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
