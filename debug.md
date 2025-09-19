 LOG  🤖 Created 9 vital signs records
 LOG  🤖 Total records to sync: 53
 LOG  🤖 Batch inserting 53 wearables data records...
 LOG  🤖 Upserted batch 0-53 (53 records)
 LOG  ✅ Successfully upserted 53 wearables data records (new + updated)
 LOG  📊 Metrics populated: heart_rate(20), steps(8), distance(8), exercise(3), sleep(1), weight(1), height(1), nutrition(1), hydration(1), blood_pressure(3), oxygen_saturation(1), respiratory_rate(4), body_temperature(1)
 LOG  ✅ Wearables data sync completed successfully
 LOG  🤖 HealthSync: Successfully synced Google Health data to wearables_data
 LOG  🔄 Health Connect: Triggering health-data-sync edge function for daily metrics...
 LOG  ✅ Health Connect: Edge function sync triggered successfully: {"days": 7, "debug": ["Found 1 integrations", "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)", "Google Health Connect: 0 records created", "Skipping aggregation: no records were backfilled"], "errors": [], "records_created": 0, "service_name": "Google Health Connect", "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e"}
 LOG  🏥 HealthSync: Sync completed - success: true synced: true
 LOG  🏥 App: Health sync result: success
 LOG  ✅ Component storage initialized: success=true
 LOG  ✅ Component wakeword initialized: success=true