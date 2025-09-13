All of the metric values are wrong or not populating.  In my health app, I see steps 1544, current heart rate 56, active energy 76, tiem in daylight 56, glucose, 80, respiratory 13 /min

Please debug.  You can run npx expo start in the background to view logs.

Update: steps and active energy success

Please work through the rest of the metrics one by one and determine proper querying method for each, running npx expo start in the background and checking logs.



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
    respiratoryrate?: number;
    timeindaylight?: number;
    