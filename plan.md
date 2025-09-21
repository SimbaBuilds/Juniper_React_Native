I realized that only upserting one google and/or apple realtime record per user on app launch will result in very poor tracking for those services if the user does not open the app daily.  Instead of syncing to their own db tables, we have to integrate apple and google health with the existing wearables_data table that currently exists for Fitbit and Oura.  This will allow for up to a week backfill logic when the user opens the app and easier integration with the rest of the system.  



The below must be done separately for both Apple Health and Google Health Connect:

- [ ]  decide on reasonable number of samples per day to store for each metric based on available data and metric type, referencing service raw lake data
- [ ]  create sync function that populates wearables_data table with a 7 day backfill ensuring no duplicates - referencing wearables_data_rows_sample.csv
    - For Google, make sure current support for multiple data source types is maintained (Fit, Fitbit, Connect, etc..) but that backfill is also supported
- [ ]  replace post permissions sync to service realtime table with new sync function that syncs to wearables_data
- [ ]  replace app launch sync to service realtime table with with new sync function that syncs to wearables_data
- [ ]  Update service auth/permissions callback to call health-data-sync edge function like Oura and Fitbit do


Reference:
- Raw lake formatting data available in apple_raw_lake.md and google_raw_lake.md
- Wearables data current table value samples available at wearables_data_rows_sample.csv for reference

