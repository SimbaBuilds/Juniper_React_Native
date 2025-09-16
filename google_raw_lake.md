 LOG  🌐 API: Using backend URL: https://mobile-jarvis-backend.onrender.com
 LOG  🔍 Environment variable present: true
 LOG  ServerApiService initialized with config: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ServerApiService config updated: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  ✅ Loaded server config from React Native environment: {"apiEndpoint": "/api/chat", "baseUrl": "https://mobile-jarvis-backend.onrender.com"}
 LOG  Available native modules: []
 LOG  WakeWordModule available: Yes
 WARN  Require cycle: src/integrations/data/HealthSyncService.ts -> src/integrations/data/AppleHealthKitDataService.ts -> src/integrations/auth/services/AppleHealthKitAuthService.ts -> src/integrations/data/HealthSyncService.ts

Require cycles are allowed, but can result in uninitialized values. Consider refactoring to remove the need for a cycle.
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
 LOG  ✅ StorageInitializer: Storage read/write test passed
 LOG  ✅ StorageInitializer: AsyncStorage initialized successfully
 LOG  🏥 HealthSync: Starting health data sync for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  🏥 HealthSync: Platform detected: android
 LOG  🤖 HealthSync: Starting Google Health sync
 LOG  🤖 HealthSync: Checking for active integration
 LOG  🤖 HealthSync: Active integration found, fetching health data
 LOG  🤖 GoogleHealthConnectDataService: Fetching current realtime data
 LOG  🤖 Health Connect client initialized successfully
 LOG  🤖 DETAILED LOGGING: Getting 7 days of data for wearables_data integration
 LOG  🤖 Date range for detailed analysis: {"daysDifference": 0.8609052430555556, "endDate": "2025-09-16T01:39:42.213Z", "startDate": "2025-09-15T05:00:00.000Z"}
 LOG  🤖 ===== DETAILED METRICS ANALYSIS =====
 LOG  🤖 Analyzing 7 days of data for wearables_data table integration
 LOG  🤖 Days to analyze: ["Mon Sep 08 2025", "Tue Sep 09 2025", "Wed Sep 10 2025", "Thu Sep 11 2025", "Fri Sep 12 2025", "Sat Sep 13 2025", "Sun Sep 14 2025"]
 LOG  
🤖 ===== Mon Sep 08 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-09T04:59:59.999Z", "start": "2025-09-08T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 300 records
 LOG  🤖   Raw records count: 300
 LOG  🤖   First record: {"data": {"count": 7}, "endTime": "2025-09-09T04:18:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-09T04:17:00Z"}
 LOG  🤖   Last record: {"data": {"count": 9}, "endTime": "2025-09-08T15:51:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-08T15:50:00Z"}
 LOG  🤖   Total for day: 11570 steps
 LOG  🤖   Active hours (14): 10h: 34.0, 11h: 54.0, 12h: 740.0, 13h: 654.0, 14h: 712.0, 15h: 1666.0, 16h: 674.0, 17h: 994.0, 18h: 510.0, 19h: 2892.0, 20h: 1836.0, 21h: 652.0, 22h: 138.0, 23h: 14.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 150, com.fitbit.FitbitMobile: 150
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 300 records
 LOG  🤖   Raw records count: 300
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 17.71653574595614, "inInches": 212.5984289514737, "inKilometers": 0.005400000095367431, "inMeters": 5.400000095367432, "inMiles": 0.003355412837167679}}, "endTime": "2025-09-09T04:18:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-09T04:17:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 22.96587926509186, "inInches": 275.5905511811024, "inKilometers": 0.007, "inMeters": 7, "inMiles": 0.004349609156548647}}, "endTime": "2025-09-08T15:51:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-08T15:50:00Z"}
 LOG  🤖   Total for day: 8656.799998128414 meters
 LOG  🤖   Active hours (14): 10h: 26.4, 11h: 41.8, 12h: 386.0, 13h: 509.0, 14h: 554.6, 15h: 1222.0, 16h: 525.4, 17h: 765.6, 18h: 396.8, 19h: 2252.8, 20h: 1420.0, 21h: 438.4, 22h: 107.2, 23h: 10.8
 LOG  🤖   Data sources: com.google.android.apps.fitness: 150, com.fitbit.FitbitMobile: 150
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 749 records
 LOG  🤖   Raw records count: 749
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 55, "time": "2025-09-09T04:18:00Z"}, "samplesCount": 1}, "endTime": "2025-09-09T04:18:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T04:18:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 94, "time": "2025-09-08T15:50:00Z"}, "samplesCount": 1}, "endTime": "2025-09-08T15:50:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-08T15:50:00Z"}
 LOG  🤖   Average: 59.88, Min: 43, Max: 99 bpm
 LOG  🤖   Active hours (14): 10h: 755.0, 11h: 3588.0, 12h: 3539.0, 13h: 3950.0, 14h: 3751.0, 15h: 3654.0, 16h: 3306.0, 17h: 3147.0, 18h: 3378.0, 19h: 3583.0, 20h: 3934.0, 21h: 3761.0, 22h: 3467.0, 23h: 1037.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 749
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-09T01:04:02Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T00:47:49Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-09T01:04:02Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T00:47:49Z"}
 LOG  🤖     Session: 16.2 minutes (2025-09-09T00:47:49Z to 2025-09-09T01:04:02Z)
 LOG  🤖   Total session time: 16.2 minutes (0.27 hours)
 LOG  🤖   Active hours (1): 19h: 1.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 1
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-09T04:59:59.999Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Tue Sep 09 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-10T04:59:59.999Z", "start": "2025-09-09T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 352 records
 LOG  🤖   Raw records count: 352
 LOG  🤖   First record: {"data": {"count": 15}, "endTime": "2025-09-10T01:39:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-10T01:38:00Z"}
 LOG  🤖   Last record: {"data": {"count": 30}, "endTime": "2025-09-09T19:13:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T19:12:00Z"}
 LOG  🤖   Total for day: 17766 steps
 LOG  🤖   Active hours (6): 14h: 1570.0, 15h: 3102.0, 16h: 1794.0, 18h: 404.0, 19h: 5206.0, 20h: 5690.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 176, com.fitbit.FitbitMobile: 176
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 352 records
 LOG  🤖   Raw records count: 352
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 38.385826145882994, "inInches": 460.62991375059596, "inKilometers": 0.011699999809265137, "inMeters": 11.699999809265137, "inMiles": 0.007270060900285295}}, "endTime": "2025-09-10T01:39:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-10T01:38:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 76.7716535433071, "inInches": 921.2598425196852, "inKilometers": 0.0234, "inMeters": 23.400000000000002, "inMiles": 0.01454012203760548}}, "endTime": "2025-09-09T19:13:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T19:12:00Z"}
 LOG  🤖   Total for day: 13824.20005164146 meters
 LOG  🤖   Active hours (6): 14h: 1159.4, 15h: 2415.8, 16h: 1364.6, 18h: 313.8, 19h: 4129.2, 20h: 4441.4
 LOG  🤖   Data sources: com.google.android.apps.fitness: 176, com.fitbit.FitbitMobile: 176
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 388 records
 LOG  🤖   Raw records count: 388
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 91, "time": "2025-09-10T01:38:00Z"}, "samplesCount": 1}, "endTime": "2025-09-10T01:38:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-10T01:38:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 60, "time": "2025-09-09T19:11:00Z"}, "samplesCount": 1}, "endTime": "2025-09-09T19:11:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T19:11:00Z"}
 LOG  🤖   Average: 81.70, Min: 52, Max: 145 bpm
 LOG  🤖   Active hours (7): 14h: 2985.0, 15h: 6528.0, 16h: 5665.0, 17h: 3806.0, 18h: 4208.0, 19h: 4820.0, 20h: 3688.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 388
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 2 records
 LOG  🤖   Raw records count: 2
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-10T01:28:22Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-10T00:35:27Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-09T20:13:29Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-09T20:06:39Z"}
 LOG  🤖     Session: 52.9 minutes (2025-09-10T00:35:27Z to 2025-09-10T01:28:22Z)
 LOG  🤖     Session: 6.8 minutes (2025-09-09T20:06:39Z to 2025-09-09T20:13:29Z)
 LOG  🤖   Total session time: 59.8 minutes (1.00 hours)
 LOG  🤖   Active hours (2): 15h: 1.0, 19h: 1.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 2
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-10T04:59:59.999Z", "operator": "between", "startTime": "2025-09-09T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Wed Sep 10 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-11T04:59:59.999Z", "start": "2025-09-10T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 130 records
 LOG  🤖   Raw records count: 130
 LOG  🤖   First record: {"data": {"count": 18}, "endTime": "2025-09-11T03:36:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-11T03:35:00Z"}
 LOG  🤖   Last record: {"data": {"count": 16}, "endTime": "2025-09-11T00:22:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T00:21:00Z"}
 LOG  🤖   Total for day: 10178 steps
 LOG  🤖   Active hours (4): 19h: 6600.0, 20h: 900.0, 21h: 2602.0, 22h: 76.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 65, com.fitbit.FitbitMobile: 65
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 130 records
 LOG  🤖   Raw records count: 130
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 45.93175853018372, "inInches": 551.1811023622048, "inKilometers": 0.014, "inMeters": 14, "inMiles": 0.008699218313097294}}, "endTime": "2025-09-11T03:36:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-11T03:35:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 40.68241469816273, "inInches": 488.18897637795277, "inKilometers": 0.0124, "inMeters": 12.4, "inMiles": 0.0077050219344576044}}, "endTime": "2025-09-11T00:22:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T00:21:00Z"}
 LOG  🤖   Total for day: 7997.000012636186 meters
 LOG  🤖   Active hours (4): 19h: 5214.4, 20h: 702.2, 21h: 2021.2, 22h: 59.2
 LOG  🤖   Data sources: com.google.android.apps.fitness: 65, com.fitbit.FitbitMobile: 65
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 198 records
 LOG  🤖   Raw records count: 198
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 59, "time": "2025-09-11T03:38:00Z"}, "samplesCount": 1}, "endTime": "2025-09-11T03:38:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T03:38:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 92, "time": "2025-09-11T00:21:00Z"}, "samplesCount": 1}, "endTime": "2025-09-11T00:21:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T00:21:00Z"}
 LOG  🤖   Average: 66.38, Min: 55, Max: 100 bpm
 LOG  🤖   Active hours (4): 19h: 2843.0, 20h: 3858.0, 21h: 3967.0, 22h: 2476.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 198
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-11T13:35:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-11T01:35:00Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-11T13:35:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-11T01:35:00Z"}
 LOG  🤖     Session: 720.0 minutes (2025-09-11T01:35:00Z to 2025-09-11T13:35:00Z)
 LOG  🤖   Total session time: 720.0 minutes (12.00 hours)
 LOG  🤖   Active hours (1): 20h: 1.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 1
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-11T01:05:53Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T00:28:20Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-11T01:05:53Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T00:28:20Z"}
 LOG  🤖     Session: 37.5 minutes (2025-09-11T00:28:20Z to 2025-09-11T01:05:53Z)
 LOG  🤖   Total session time: 37.5 minutes (0.63 hours)
 LOG  🤖   Active hours (1): 19h: 1.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 1
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-11T04:59:59.999Z", "operator": "between", "startTime": "2025-09-10T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Thu Sep 11 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-12T04:59:59.999Z", "start": "2025-09-11T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 328 records
 LOG  🤖   Raw records count: 328
 LOG  🤖   First record: {"data": {"count": 7}, "endTime": "2025-09-12T03:19:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-12T03:18:00Z"}
 LOG  🤖   Last record: {"data": {"count": 14}, "endTime": "2025-09-11T15:33:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T15:32:00Z"}
 LOG  🤖   Total for day: 13080 steps
 LOG  🤖   Active hours (12): 10h: 58.0, 12h: 14.0, 13h: 2176.0, 14h: 22.0, 15h: 2266.0, 16h: 108.0, 17h: 1616.0, 18h: 772.0, 19h: 4010.0, 20h: 1994.0, 21h: 8.0, 22h: 36.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 164, com.fitbit.FitbitMobile: 164
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 328 records
 LOG  🤖   Raw records count: 328
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 17.71653574595614, "inInches": 212.5984289514737, "inKilometers": 0.005400000095367431, "inMeters": 5.400000095367432, "inMiles": 0.003355412837167679}}, "endTime": "2025-09-12T03:19:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-12T03:18:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 35.76115485564304, "inInches": 429.13385826771656, "inKilometers": 0.0109, "inMeters": 10.9, "inMiles": 0.006772962829482894}}, "endTime": "2025-09-11T15:33:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T15:32:00Z"}
 LOG  🤖   Total for day: 9936.199994838244 meters
 LOG  🤖   Active hours (12): 10h: 45.0, 12h: 10.8, 13h: 1565.0, 14h: 17.0, 15h: 1712.6, 16h: 84.2, 17h: 1186.2, 18h: 601.0, 19h: 3126.0, 20h: 1554.4, 21h: 6.2, 22h: 27.8
 LOG  🤖   Data sources: com.google.android.apps.fitness: 164, com.fitbit.FitbitMobile: 164
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 713 records
 LOG  🤖   Raw records count: 713
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 71, "time": "2025-09-12T03:18:00Z"}, "samplesCount": 1}, "endTime": "2025-09-12T03:18:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T03:18:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 65, "time": "2025-09-11T15:26:00Z"}, "samplesCount": 1}, "endTime": "2025-09-11T15:26:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-11T15:26:00Z"}
 LOG  🤖   Average: 69.53, Min: 49, Max: 148 bpm
 LOG  🤖   Active hours (13): 10h: 2165.0, 11h: 3460.0, 12h: 3300.0, 13h: 3846.0, 14h: 3671.0, 15h: 4039.0, 16h: 3340.0, 17h: 3954.0, 18h: 3513.0, 19h: 6623.0, 20h: 6150.0, 21h: 4252.0, 22h: 1259.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 713
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-12T00:37:17Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T00:18:31Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-12T00:37:17Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T00:18:31Z"}
 LOG  🤖     Session: 18.8 minutes (2025-09-12T00:18:31Z to 2025-09-12T00:37:17Z)
 LOG  🤖   Total session time: 18.8 minutes (0.31 hours)
 LOG  🤖   Active hours (1): 19h: 1.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 1
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-12T04:59:59.999Z", "operator": "between", "startTime": "2025-09-11T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Fri Sep 12 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-13T04:59:59.999Z", "start": "2025-09-12T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 248 records
 LOG  🤖   Raw records count: 248
 LOG  🤖   First record: {"data": {"count": 25}, "endTime": "2025-09-12T13:28:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-12T13:27:00Z"}
 LOG  🤖   Last record: {"data": {"count": 27}, "endTime": "2025-09-12T09:10:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T09:09:00Z"}
 LOG  🤖   Total for day: 20806 steps
 LOG  🤖   Active hours (5): 4h: 364.0, 5h: 202.0, 6h: 6022.0, 7h: 11476.0, 8h: 2742.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 124, com.fitbit.FitbitMobile: 124
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 248 records
 LOG  🤖   Raw records count: 248
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 63.976377952755904, "inInches": 767.7165354330709, "inKilometers": 0.0195, "inMeters": 19.5, "inMiles": 0.012116768364671232}}, "endTime": "2025-09-12T13:28:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-12T13:27:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 68.89763779527559, "inInches": 826.7716535433071, "inKilometers": 0.021, "inMeters": 21, "inMiles": 0.013048827469645943}}, "endTime": "2025-09-12T09:10:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T09:09:00Z"}
 LOG  🤖   Total for day: 20918.600000905983 meters
 LOG  🤖   Active hours (5): 4h: 283.2, 5h: 157.2, 6h: 6617.4, 7h: 11717.8, 8h: 2143.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 124, com.fitbit.FitbitMobile: 124
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 261 records
 LOG  🤖   Raw records count: 261
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 81, "time": "2025-09-12T13:27:00Z"}, "samplesCount": 1}, "endTime": "2025-09-12T13:27:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T13:27:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 71, "time": "2025-09-12T09:07:00Z"}, "samplesCount": 1}, "endTime": "2025-09-12T09:07:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T09:07:00Z"}
 LOG  🤖   Average: 82.84, Min: 53, Max: 164 bpm
 LOG  🤖   Active hours (5): 4h: 3250.0, 5h: 3557.0, 6h: 5340.0, 7h: 7147.0, 8h: 2328.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 261
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 2 records
 LOG  🤖   Raw records count: 2
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-12T13:15:03Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T12:25:34Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-12T12:25:34Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-12T11:42:53Z"}
 LOG  🤖     Session: 49.5 minutes (2025-09-12T12:25:34Z to 2025-09-12T13:15:03Z)
 LOG  🤖     Session: 42.7 minutes (2025-09-12T11:42:53Z to 2025-09-12T12:25:34Z)
 LOG  🤖   Total session time: 92.2 minutes (1.54 hours)
 LOG  🤖   Active hours (2): 6h: 1.0, 7h: 1.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 2
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-13T04:59:59.999Z", "operator": "between", "startTime": "2025-09-12T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Sat Sep 13 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-14T04:59:59.999Z", "start": "2025-09-13T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 330 records
 LOG  🤖   Raw records count: 330
 LOG  🤖   First record: {"data": {"count": 6}, "endTime": "2025-09-14T03:24:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T03:23:00Z"}
 LOG  🤖   Last record: {"data": {"count": 51}, "endTime": "2025-09-13T14:04:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-13T14:03:00Z"}
 LOG  🤖   Total for day: 14340 steps
 LOG  🤖   Active hours (13): 9h: 2538.0, 10h: 68.0, 11h: 184.0, 12h: 1570.0, 13h: 100.0, 14h: 230.0, 15h: 2424.0, 16h: 632.0, 17h: 200.0, 18h: 1682.0, 19h: 4688.0, 20h: 12.0, 22h: 12.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 165, com.fitbit.FitbitMobile: 165
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 334 records
 LOG  🤖   Raw records count: 334
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 15.091863204175093, "inInches": 181.10235845010112, "inKilometers": 0.004599999904632568, "inMeters": 4.599999904632568, "inMiles": 0.0028583145293303892}}, "endTime": "2025-09-14T03:24:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T03:23:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 130.57742782152232, "inInches": 1566.929133858268, "inKilometers": 0.0398, "inMeters": 39.800000000000004, "inMiles": 0.024730634918662314}}, "endTime": "2025-09-13T14:04:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-13T14:03:00Z"}
 LOG  🤖   Total for day: 10935.399975848197 meters
 LOG  🤖   Active hours (13): 9h: 1889.4, 10h: 52.8, 11h: 143.0, 12h: 1236.4, 13h: 77.4, 14h: 178.4, 15h: 1778.6, 16h: 487.2, 17h: 149.0, 18h: 1291.0, 19h: 3633.8, 20h: 9.2, 22h: 9.2
 LOG  🤖   Data sources: com.google.android.apps.fitness: 167, com.fitbit.FitbitMobile: 167
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 741 records
 LOG  🤖   Raw records count: 741
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 63, "time": "2025-09-14T03:23:00Z"}, "samplesCount": 1}, "endTime": "2025-09-14T03:23:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-14T03:23:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 75, "time": "2025-09-13T13:57:00Z"}, "samplesCount": 1}, "endTime": "2025-09-13T13:57:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-13T13:57:00Z"}
 LOG  🤖   Average: 66.29, Min: 47, Max: 120 bpm
 LOG  🤖   Active hours (15): 8h: 206.0, 9h: 4073.0, 10h: 3913.0, 11h: 3772.0, 12h: 3697.0, 13h: 3483.0, 14h: 3476.0, 15h: 3024.0, 16h: 728.0, 17h: 4674.0, 18h: 4260.0, 19h: 5011.0, 20h: 4052.0, 21h: 3465.0, 22h: 1285.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 741
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {"weight": {"inGrams": 80694.01550292969, "inKilograms": 80.69401550292969, "inMicrograms": 80694015502.92969, "inMilligrams": 80694015.50292969, "inOunces": 2846.397946170859, "inPounds": 177.8998520255746}}, "endTime": undefined, "source": "com.google.android.apps.fitness", "startTime": "2025-09-13T19:17:08.990Z"}
 LOG  🤖   Last record: {"data": {"weight": {"inGrams": 80694.01550292969, "inKilograms": 80.69401550292969, "inMicrograms": 80694015502.92969, "inMilligrams": 80694015.50292969, "inOunces": 2846.397946170859, "inPounds": 177.8998520255746}}, "endTime": undefined, "source": "com.google.android.apps.fitness", "startTime": "2025-09-13T19:17:08.990Z"}
 LOG  🤖   Active hours (1): 14h: 80.7
 LOG  🤖   Data sources: com.google.android.apps.fitness: 1
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {}, "endTime": "2025-09-14T09:15:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T01:15:00Z"}
 LOG  🤖   Last record: {"data": {}, "endTime": "2025-09-14T09:15:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T01:15:00Z"}
 LOG  🤖     Session: 480.0 minutes (2025-09-14T01:15:00Z to 2025-09-14T09:15:00Z)
 LOG  🤖   Total session time: 480.0 minutes (8.00 hours)
 LOG  🤖   Active hours (1): 20h: 1.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 1
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-14T04:59:59.999Z", "operator": "between", "startTime": "2025-09-13T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== Sun Sep 14 2025 =====
 LOG  🤖 Day range: {"end": "2025-09-15T04:59:59.999Z", "start": "2025-09-14T05:00:00.000Z"}
 LOG  🤖 📊 Steps Analysis:
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 264 records
 LOG  🤖   Raw records count: 264
 LOG  🤖   First record: {"data": {"count": 14}, "endTime": "2025-09-15T05:00:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-15T04:59:00Z"}
 LOG  🤖   Last record: {"data": {"count": 22}, "endTime": "2025-09-14T17:10:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-14T17:09:00Z"}
 LOG  🤖   Total for day: 10762 steps
 LOG  🤖   Active hours (11): 12h: 2386.0, 13h: 52.0, 14h: 278.0, 15h: 984.0, 16h: 428.0, 17h: 2314.0, 18h: 168.0, 20h: 2502.0, 21h: 1442.0, 22h: 78.0, 23h: 130.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 132, com.fitbit.FitbitMobile: 132
 LOG  🤖 📊 Distance Analysis:
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 264 records
 LOG  🤖   Raw records count: 264
 LOG  🤖   First record: {"data": {"distance": {"inFeet": 35.76115360410194, "inInches": 429.1338432492234, "inKilometers": 0.010899999618530273, "inMeters": 10.899999618530273, "inMiles": 0.006772962592448006}}, "endTime": "2025-09-15T05:00:00Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-15T04:59:00Z"}
 LOG  🤖   Last record: {"data": {"distance": {"inFeet": 56.102362204724415, "inInches": 673.228346456693, "inKilometers": 0.0171, "inMeters": 17.1, "inMiles": 0.010625473796711696}}, "endTime": "2025-09-14T17:10:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-14T17:09:00Z"}
 LOG  🤖   Total for day: 8081.399999429282 meters
 LOG  🤖   Active hours (11): 12h: 1814.2, 13h: 40.4, 14h: 216.2, 15h: 766.6, 16h: 333.2, 17h: 1734.8, 18h: 130.4, 20h: 1888.4, 21h: 995.4, 22h: 60.6, 23h: 101.2
 LOG  🤖   Data sources: com.google.android.apps.fitness: 132, com.fitbit.FitbitMobile: 132
 LOG  🤖 📊 Active Calories Analysis:
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Heart Rate Analysis:
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 709 records
 LOG  🤖   Raw records count: 709
 LOG  🤖   First record: {"data": {"firstSample": {"beatsPerMinute": 59, "time": "2025-09-15T04:59:00Z"}, "samplesCount": 1}, "endTime": "2025-09-15T04:59:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-15T04:59:00Z"}
 LOG  🤖   Last record: {"data": {"firstSample": {"beatsPerMinute": 59, "time": "2025-09-14T17:09:00Z"}, "samplesCount": 1}, "endTime": "2025-09-14T17:09:00Z", "source": "com.fitbit.FitbitMobile", "startTime": "2025-09-14T17:09:00Z"}
 LOG  🤖   Average: 62.35, Min: 49, Max: 103 bpm
 LOG  🤖   Active hours (12): 12h: 3442.0, 13h: 3503.0, 14h: 3399.0, 15h: 3665.0, 16h: 3662.0, 17h: 4169.0, 18h: 3887.0, 19h: 3621.0, 20h: 3916.0, 21h: 3884.0, 22h: 3723.0, 23h: 3335.0
 LOG  🤖   Data sources: com.fitbit.FitbitMobile: 709
 LOG  🤖 📊 Resting Heart Rate Analysis:
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Weight Analysis:
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Sleep Sessions Analysis:
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Exercise Sessions Analysis:
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  🤖 📊 Nutrition Analysis:
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {"energy": {"inCalories": 555000, "inJoules": 2322120.000365966, "inKilocalories": 555, "inKilojoules": 2322.120000365966}}, "endTime": "2025-09-14T21:14:00.001Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T21:14:00Z"}
 LOG  🤖   Last record: {"data": {"energy": {"inCalories": 555000, "inJoules": 2322120.000365966, "inKilocalories": 555, "inKilojoules": 2322.120000365966}}, "endTime": "2025-09-14T21:14:00.001Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T21:14:00Z"}
 LOG  🤖   Total for day: 555 kcal
 LOG  🤖   Active hours (1): 16h: 555.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 1
 LOG  🤖 📊 Hydration Analysis:
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 1 records
 LOG  🤖   Raw records count: 1
 LOG  🤖   First record: {"data": {"volume": {"inFluidOuncesUs": 0.7777225121486506, "inLiters": 0.023000000044703484, "inMilliliters": 23.000000044703484}}, "endTime": "2025-09-14T21:15:00.001Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T21:15:00Z"}
 LOG  🤖   Last record: {"data": {"volume": {"inFluidOuncesUs": 0.7777225121486506, "inLiters": 0.023000000044703484, "inMilliliters": 23.000000044703484}}, "endTime": "2025-09-14T21:15:00.001Z", "source": "com.google.android.apps.fitness", "startTime": "2025-09-14T21:15:00Z"}
 LOG  🤖   Total for day: 23.000000044703484 ml
 LOG  🤖   Active hours (1): 16h: 23.0
 LOG  🤖   Data sources: com.google.android.apps.fitness: 1
 LOG  🤖 📊 Blood Glucose Analysis:
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-15T04:59:59.999Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🤖   Raw records count: 0
 LOG  🤖   No data available for this day
 LOG  
🤖 ===== END DETAILED ANALYSIS =====
 LOG  🤖 GoogleHealthConnectDataService: Fetching vital signs...
 LOG  🤖 Fetching most recent heart rate sample...
 LOG  🔍 Reading HeartRate records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 HeartRate result: object returned
 LOG  📊 HeartRate records: 1000 records
 LOG  🔍 Heart rate records sample: [{"endTime": "2025-09-11T19:40:00Z", "metadata": {"clientRecordId": null, "clientRecordVersion": 0, "dataOrigin": "com.fitbit.FitbitMobile", "device": [Object], "id": "12a255ec-028a-428a-9ddf-7d93b222a5c7", "lastModifiedTime": "2025-09-14T20:30:03.768Z", "recordingMethod": 2}, "samples": [[Object]], "startTime": "2025-09-11T19:40:00Z"}, {"endTime": "2025-09-11T19:39:00Z", "metadata": {"clientRecordId": null, "clientRecordVersion": 0, "dataOrigin": "com.fitbit.FitbitMobile", "device": [Object], "id": "fd286988-6891-41e0-bd58-6727870f28f8", "lastModifiedTime": "2025-09-14T20:30:03.768Z", "recordingMethod": 2}, "samples": [[Object]], "startTime": "2025-09-11T19:39:00Z"}]
 LOG  🔍 Heart rate from samples (com.fitbit.FitbitMobile): 60
 LOG  ✅ Extracted beatsPerMinute: 60 from source: com.fitbit.FitbitMobile
 LOG  ✅ Heart rate: 60 bpm
 LOG  🤖 Fetching most recent resting heart rate sample...
 LOG  🔍 Reading RestingHeartRate records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 RestingHeartRate result: object returned
 LOG  📊 RestingHeartRate records: 0 records
 LOG  🔍 getMostRecentValue: No records for field beatsPerMinute
 LOG  🤖 No direct resting HR data, calculating from daily minimum...
 LOG  🔍 getMinimumValue: Found minimum beatsPerMinute: 50 from 1000 values
 LOG  ✅ Resting heart rate (calculated min): 50 bpm
 LOG  🤖 Fetching most recent blood pressure sample...
 LOG  🔍 Reading BloodPressure records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 BloodPressure result: object returned
 LOG  📊 BloodPressure records: 3 records
 LOG  ✅ Systolic BP: 120 mmHg
 LOG  ✅ Diastolic BP: 80 mmHg
 LOG  🤖 Fetching most recent respiratory rate sample...
 LOG  🔍 Reading RespiratoryRate records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 RespiratoryRate result: object returned
 LOG  📊 RespiratoryRate records: 2 records
 LOG  ✅ Extracted rate: 15 from source: com.google.android.apps.fitness
 LOG  🤖 Fetching most recent oxygen saturation sample...
 LOG  🔍 Reading OxygenSaturation records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 OxygenSaturation result: object returned
 LOG  📊 OxygenSaturation records: 1 records
 LOG  ✅ Extracted percentage: 98 from source: com.google.android.apps.fitness
 LOG  🤖 Fetching most recent body temperature sample...
 LOG  🔍 Reading BodyTemperature records with filter: {"endTime": "2025-09-16T01:39:47.827Z", "operator": "between", "startTime": "2025-09-09T01:39:47.827Z"}
 LOG  📊 BodyTemperature result: object returned
 LOG  📊 BodyTemperature records: 1 records
 LOG  ✅ Extracted temperature: [object Object] from source: com.google.android.apps.fitness
 LOG  ✅ Body temperature: 36.66666793823242°C
 LOG  🤖 GoogleHealthConnectDataService: Vitals retrieved: {"blood_pressure_diastolic": 80, "blood_pressure_systolic": 120, "body_temperature": 36.66666793823242, "heart_rate": 60, "oxygen_saturation": 98, "respiratory_rate": 15, "resting_heart_rate": 50}
 LOG  🤖 GoogleHealthConnectDataService: Fetching activity data...
 LOG  🤖 Fetching steps for date range...
 LOG  🔍 Reading Steps records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 Steps result: object returned
 LOG  📊 Steps records: 293 records
 LOG  ✅ Total steps: 13072
 LOG  🤖 Fetching distance for date range...
 LOG  🔍 Reading Distance records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 Distance result: object returned
 LOG  📊 Distance records: 295 records
 LOG  ✅ Total distance: 9959.002751117174 meters
 LOG  🤖 Fetching active calories for date range...
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🔍 Active calories records found: 0
 LOG  ⚠️ No active calories data found for current day, trying extended range...
 LOG  🔍 Reading ActiveCaloriesBurned records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-08T05:00:00.000Z"}
 LOG  📊 ActiveCaloriesBurned result: object returned
 LOG  📊 ActiveCaloriesBurned records: 0 records
 LOG  🔍 Extended active calories records (7 days): 0
 LOG  🤖 Fetching exercise sessions for date range...
 LOG  🔍 Reading ExerciseSession records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 ExerciseSession result: object returned
 LOG  📊 ExerciseSession records: 1 records
 LOG  🔍 Exercise records found: 1
 LOG  🔍 Exercise sample record: {"endTime": "2025-09-15T19:36:54Z", "endZoneOffset": {"id": "-05:00", "totalSeconds": -18000}, "exerciseRoute": {"route": [], "type": "NO_DATA"}, "exerciseType": 79, "laps": [], "metadata": {"clientRecordId": "481961507444475656", "clientRecordVersion": 1757965838651, "dataOrigin": "com.fitbit.FitbitMobile", "device": {"manufacturer": null, "model": null, "type": 6}, "id": "f53c0c13-e9d2-363a-b6ce-adaabd2660da", "lastModifiedTime": "2025-09-15T20:01:48.968Z", "recordingMethod": 2}, "notes": null, "segments": [], "startTime": "2025-09-15T19:04:29Z", "startZoneOffset": {"id": "-05:00", "totalSeconds": -18000}, "title": null}
 LOG  🔍 Exercise session: 32.416666666666664 minutes (2025-09-15T19:04:29Z to 2025-09-15T19:36:54Z)
 LOG  ✅ Total exercise minutes: 32.416666666666664
 LOG  🤖 GoogleHealthConnectDataService: Activity retrieved: {"distance": 9959.002751117174, "exercise_minutes": 32.416666666666664, "steps": 13072}
 LOG  🤖 GoogleHealthConnectDataService: Fetching body measurements...
 LOG  🤖 Fetching most recent weight sample...
 LOG  🔍 Reading Weight records with filter: {"endTime": "2025-09-16T01:39:48.866Z", "operator": "between", "startTime": "2025-08-17T01:39:48.866Z"}
 LOG  📊 Weight result: object returned
 LOG  📊 Weight records: 1 records
 LOG  ✅ Weight: 80.69401550292969 kg
 LOG  🤖 Fetching most recent height sample...
 LOG  🔍 Reading Height records with filter: {"endTime": "2025-09-16T01:39:48.866Z", "operator": "between", "startTime": "2025-08-17T01:39:48.866Z"}
 LOG  📊 Height result: object returned
 LOG  📊 Height records: 1 records
 LOG  ✅ Height: 1.8796000480651855 m
 LOG  🤖 Fetching most recent body fat sample...
 LOG  🔍 Reading BodyFat records with filter: {"endTime": "2025-09-16T01:39:48.866Z", "operator": "between", "startTime": "2025-08-17T01:39:48.866Z"}
 LOG  📊 BodyFat result: object returned
 LOG  📊 BodyFat records: 1 records
 LOG  🤖 GoogleHealthConnectDataService: Body measurements retrieved: {"body_fat": 13, "height": 1.8796000480651855, "weight": 80.69401550292969}
 LOG  🤖 GoogleHealthConnectDataService: Fetching nutrition data...
 LOG  🤖 Fetching nutrition calories for date range...
 LOG  🔍 Reading Nutrition records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 Nutrition result: object returned
 LOG  📊 Nutrition records: 0 records
 LOG  🤖 Fetching hydration for date range...
 LOG  🔍 Reading Hydration records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 Hydration result: object returned
 LOG  📊 Hydration records: 0 records
 LOG  🤖 GoogleHealthConnectDataService: Nutrition retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching sleep data...
 LOG  🤖 Fetching sleep hours for date range...
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-15T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🔍 Sleep records found: 0
 LOG  ⚠️ No sleep data found for current day, trying extended range...
 LOG  🔍 Reading SleepSession records with filter: {"endTime": "2025-09-16T01:39:42.213Z", "operator": "between", "startTime": "2025-09-14T05:00:00.000Z"}
 LOG  📊 SleepSession result: object returned
 LOG  📊 SleepSession records: 0 records
 LOG  🔍 Extended sleep records (1 days): 0
 LOG  🤖 GoogleHealthConnectDataService: Sleep retrieved: {}
 LOG  🤖 GoogleHealthConnectDataService: Fetching other metrics...
 LOG  🤖 Fetching most recent blood glucose sample...
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-16T01:39:49.048Z", "operator": "between", "startTime": "2025-09-09T01:39:49.048Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🔍 Blood glucose records found: 0
 LOG  🔍 getMostRecentValue: No records for field level
 LOG  ⚠️ No blood glucose data found, trying extended range...
 LOG  🔍 Reading BloodGlucose records with filter: {"endTime": "2025-09-16T01:39:49.048Z", "operator": "between", "startTime": "2025-08-17T01:39:49.075Z"}
 LOG  📊 BloodGlucose result: object returned
 LOG  📊 BloodGlucose records: 0 records
 LOG  🔍 Extended blood glucose records (30 days): 0
 LOG  🤖 Fetching basal metabolic rate...
 LOG  🔍 Reading BasalMetabolicRate records with filter: {"endTime": "2025-09-16T01:39:49.048Z", "operator": "between", "startTime": "2025-09-09T01:39:49.048Z"}
 LOG  📊 BasalMetabolicRate result: object returned
 LOG  📊 BasalMetabolicRate records: 2 records
 LOG  ✅ Extracted basalMetabolicRate: [object Object] from source: com.google.android.apps.fitness
 LOG  ✅ BMR: 1753.690185546875 kcal/day
 LOG  🤖 Fetching menstruation flow data...
 LOG  🔍 Reading MenstruationFlow records with filter: {"endTime": "2025-09-16T01:39:49.048Z", "operator": "between", "startTime": "2025-09-09T01:39:49.048Z"}
 LOG  📊 MenstruationFlow result: object returned
 LOG  📊 MenstruationFlow records: 0 records
 LOG  🔍 getMostRecentValue: No records for field flow
 LOG  🤖 GoogleHealthConnectDataService: Other metrics retrieved: {"basal_metabolic_rate": 1753.690185546875}
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data keys: ["heart_rate", "resting_heart_rate", "blood_pressure_systolic", "blood_pressure_diastolic", "oxygen_saturation", "respiratory_rate", "body_temperature", "steps", "distance", "exercise_minutes", "weight", "height", "body_fat", "basal_metabolic_rate", "last_sync_at"]
 LOG  🤖 GoogleHealthConnectDataService: Retrieved realtime data values: {"basal_metabolic_rate": 1753.690185546875, "blood_pressure_diastolic": 80, "blood_pressure_systolic": 120, "body_fat": 13, "body_temperature": 36.66666793823242, "distance": 9959.002751117174, "exercise_minutes": 32.416666666666664, "heart_rate": 60, "height": 1.8796000480651855, "last_sync_at": 2025-09-16T01:39:49.167Z, "oxygen_saturation": 98, "respiratory_rate": 15, "resting_heart_rate": 50, "steps": 13072, "weight": 80.69401550292969}
 LOG  🤖 HealthSync: Health data retrieved, filtering valid values
 LOG  🤖 HealthSync: Valid data found, upserting to database
 LOG  📊 DB: Upserting Google Health realtime data for user: f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e
 LOG  📊 DB: Successfully upserted Google Health data
 LOG  🤖 HealthSync: Successfully synced Google Health data
 