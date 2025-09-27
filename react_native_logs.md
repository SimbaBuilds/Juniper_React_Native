56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Platform detected: ios
 LOG  🍎 HealthSync: Starting Apple Health sync
 LOG  🍎 HealthSync: Checking for active integration
 LOG  📬 VOICE_ASSISTANT: App became active - checking unfetched requests
 LOG  🔍 UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1758935432577}
 LOG  📋 BackgroundApiService: Pending requests: []
 LOG  🔍 DB_QUERY: Found request record: {"created_at": "2025-09-27T01:10:17.929+00:00", "id": "dab2a4ff-a957-41f9-9aeb-72a29843c210", "requestId": "1758935417928-0darpcvct", "status": "failed", "total_turns": 0, "updated_at": "2025-09-27T01:10:32.273+00:00", "user_message": "Hi"}
 LOG  🔍 DB_QUERY: Returning status: failed for requestId: 1758935417928-0darpcvct
 LOG  📊 POLLING_HOOK_RESULT: Received status: failed for requestId: 1758935417928-0darpcvct
 LOG  📊 POLLING_HOOK_CALLBACK: Calling onStatusChange with status: failed
 LOG  📊 REQUEST_STATUS: Status changed to: failed
 LOG  📊 REQUEST_STATUS: Setting failed/cancelled status to completed to hide indicator
 LOG  📊 REQUEST_STATUS: Request reached final state, clearing request ID
 LOG  📊 POLLING_HOOK_FINAL: Final status reached: failed stopping polling
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 LOG  📊 REQUEST_STATUS: Clearing status after request ID cleared
 LOG  📊 POLLING_HOOK_EFFECT: useEffect triggered with requestId: null
 LOG  📊 POLLING_HOOK_CLEAR: No requestId, clearing status and stopping polling
 ERROR  🔍 DB_QUERY: Database error for requestId:
1758935417928-0darpcvct
error:
{"code": "", "details": "TypeError: Network request failed

Call Stack
  anonymous (http:/192.168.1.80:8081/index.bundle)
 ERROR  📊 POLLING_HOOK_ERROR: Error polling status for requestId:
1758935417928-0darpcvct
error:
{"code": "", "details": "TypeError: Network request failed

Call Stack
  anonymous (http:/192.168.1.80:8081/index.bundle)
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
 LOG  🍎 HealthSync: Active integration found, syncing to wearables_data table
 LOG  🍎 Starting wearables_data sync for 7 days
 LOG  🍎 Processing day 1/7: Fri Sep 19 2025
 LOG  🍎 Step query params: {"from": "2025-09-19T05:00:00.000Z", "to": "2025-09-20T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-18T23:00:00.000Z", "to": "2025-09-19T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-20T04:59:59.999Z", "dayStart": "2025-09-19T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 2/7: Sat Sep 20 2025
 LOG  🍎 Step query params: {"from": "2025-09-20T05:00:00.000Z", "to": "2025-09-21T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-19T23:00:00.000Z", "to": "2025-09-20T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-21T04:59:59.999Z", "dayStart": "2025-09-20T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 3/7: Sun Sep 21 2025
 LOG  🍎 Step query params: {"from": "2025-09-21T05:00:00.000Z", "to": "2025-09-22T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-20T23:00:00.000Z", "to": "2025-09-21T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-22T04:59:59.999Z", "dayStart": "2025-09-21T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 4/7: Mon Sep 22 2025
 LOG  🍎 Step query params: {"from": "2025-09-22T05:00:00.000Z", "to": "2025-09-23T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-21T23:00:00.000Z", "to": "2025-09-22T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-23T04:59:59.999Z", "dayStart": "2025-09-22T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 5/7: Tue Sep 23 2025
 LOG  🍎 Step query params: {"from": "2025-09-23T05:00:00.000Z", "to": "2025-09-24T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-22T23:00:00.000Z", "to": "2025-09-23T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-24T04:59:59.999Z", "dayStart": "2025-09-23T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 6/7: Wed Sep 24 2025
 LOG  🍎 Step query params: {"from": "2025-09-24T05:00:00.000Z", "to": "2025-09-25T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-23T23:00:00.000Z", "to": "2025-09-24T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-25T04:59:59.999Z", "dayStart": "2025-09-24T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Processing day 7/7: Thu Sep 25 2025
 LOG  🍎 Step query params: {"from": "2025-09-25T05:00:00.000Z", "to": "2025-09-26T04:59:59.999Z"}
 WARN  🍎 Error creating activity records: [Error: HealthKit method getStepCount failed: Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error creating heart rate records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🍎 Sleep analysis query params: {"from": "2025-09-24T23:00:00.000Z", "to": "2025-09-25T19:00:00.000Z"}
 WARN  🍎 Error fetching sleep analysis: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 WARN  🍎 Error creating body measurement records: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching resting heart rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching HRV: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood pressure: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching respiratory rate: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching oxygen saturation: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 LOG  🌡️ Fetching body temperature samples for date range: {"dayEnd": "2025-09-26T04:59:59.999Z", "dayStart": "2025-09-25T05:00:00.000Z"}
 WARN  🍎 Error fetching body temperature: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching blood glucose: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching time in daylight: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching VO2 Max: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization status is not determined for all types provided." UserInfo={NSLocalizedDescription=Authorization status is not determined for all types provided.}]
 WARN  🍎 Error fetching menstruation data: [Error: Error Domain=com.apple.healthkit Code=5 "Authorization not determined" UserInfo={NSLocalizedDescription=Authorization not determined}]
 LOG  🍎 Created 0 records for wearables_data sync
 LOG  🍎 After deduplication: 0 records (removed 0 duplicates)
 LOG  🍎 HealthSync: Successfully synced Apple Health data to wearables_data
 LOG  🔄 Apple Health: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Apple Health: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Apple Health (adb5b610-2141-4e43-a495-595ff8530959)", "Apple Health: 83 records created", "Starting aggregation for last 30 days", "Aggregation completed: 6 daily metrics created"], "errors": [], "records_created": 83, "service_name": "Apple Health", "user_id": "56a2c117-6486-4ca5-a57d-6c2e877e7083"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
 LOG  🏥 VOICE_CONTEXT: Health data successfully synced to database
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: inactive
 WARN  [AppStateService] Native module not available or not on Android
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "inactive", "isInForeground": false}, "reactNative": {"currentState": "inactive", "isActive": false}, "synchronized": true, "timestamp": 1758935460254}
 LOG  📱 VOICE_CONTEXT: React Native AppState changed to: active
 WARN  [AppStateService] Native module not available or not on Android
 LOG  🏥 VOICE_CONTEXT: App became active - syncing health data
 LOG  🏥 HealthSync: Starting health data sync for user: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 HealthSync: Debounced - too soon since last sync
 LOG  📬 VOICE_ASSISTANT: App became active - checking unfetched requests
 LOG  🔍 UNFETCHED_CHECK: Checking for unfetched completed requests...
 LOG  🔍 DB_QUERY: Getting unfetched completed requests for userId: 56a2c117-6486-4ca5-a57d-6c2e877e7083
 LOG  🏥 VOICE_CONTEXT: Health sync result: success
 LOG  📱 VOICE_CONTEXT: AppState debug info: {"native": {"currentState": "active", "isInForeground": true}, "reactNative": {"currentState": "active", "isActive": true}, "synchronized": true, "timestamp": 1758935461920}
 LOG  📋 BackgroundApiService: Pending requests: []
 LOG  🔍 DB_QUERY: Found 0 unfetched completed requests
 LOG  📬 UNFETCHED_CHECK: No unfetched completed requests found
