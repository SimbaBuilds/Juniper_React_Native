We are replacing bmi with leanbodymass in a few places as well as changing "awakenings" to awake_in_bed.  The former requires some logic updates and database upsert updates, while the latter is just a name change.  The db migration is already done. Please plan first.

- [ ]  replace bmi with leanbodymass
    - [ ]  health_metrics_daily
        - [ ]  tables.ts
        - [ ]  data fetching logic
        - [ ]  auth service db upsert logic
    - [ ]  apple_health_realtime
        - [ ]  tables.ts
        - [ ]  data fetching logic
        - [ ]  auth service db upsert logic
- [ ]  change awakenings to awake_in_bed
    - [ ]  tables.ts
    - [ ]  auth service db upsert logic
