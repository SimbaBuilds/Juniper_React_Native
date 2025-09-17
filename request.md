 When I add a metric value and test sync, I get the below.  How will the sync logic work ona new day when there is new data but there are still values from previous days?  We need new data to popualte.  What are some option for adding this functionality?
 
 
 ERROR  🤖 Error inserting batch 0-57: {"code": "23505", "details": null, "hint": null, "message": "duplicate key value violates unique constraint \"wearables_data_unique_record\""}
 ERROR  🤖 Error during batch insert: {"code": "23505", "details": null, "hint": null, "message": "duplicate key value violates unique constraint \"wearables_data_unique_record\""}
 ERROR  🤖 Error during wearables data sync: {"code": "23505", "details": null, "hint": null, "message": "duplicate key value violates unique constraint \"wearables_data_unique_record\""}
 ERROR  🤖 HealthSync: Error syncing Google Health: {"code": "23505", "details": null, "hint": null, "message": "duplicate key value violates unique constraint \"wearables_data_unique_record\""}
 LOG  🏥 HealthSync: Sync completed - success: false synced: false