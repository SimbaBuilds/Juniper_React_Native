 Ok, better.  Steps, active energy, and distance     │
│   are populating.  But the rest of the metrics are    │
│   not         
Have we requested all scopes?


export type AppleHealthRealtime = {
    user_id: string;
    integration_id?: string;
    steps?: number;
    heartrate?: number;
    weight?: number;
    height?: number;
    bmi?: number;
    activeenergy?: number;
    distance?: number;
    bloodglucose?: number;
    oxygensaturation?: number;
    restingheartrate?: number;
    bloodpressure_systolic?: number;
    bloodpressure_diastolic?: number;
    last_sync_at?: Date;
    created_at: Date;
    updated_at: Date;
  };