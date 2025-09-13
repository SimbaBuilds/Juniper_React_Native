I want user's health data to sync to the database on each app launch/open.  Users will have a maximum of one record in each of the tables below that should be updated on each app launch.  Record fields should not be updated with zero, null, or empty values.

We could include a platform check and a permissions check then upsert or create an rpc funciton that is called.  Please examine current db infra, come up with a few possibel implementations and provide a recommendation.



Schemas:

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

  export const appleHealthRealtimeFields = [
    'user_id', 'integration_id', 'steps', 'heartrate', 'weight', 'height', 'bmi',
    'activeenergy', 'distance', 'bloodglucose', 'oxygensaturation', 'restingheartrate',
    'bloodpressure_systolic', 'bloodpressure_diastolic', 'last_sync_at', 'created_at', 'updated_at'
  ] as const;
  export type AppleHealthRealtimeField = (typeof appleHealthRealtimeFields)[number];

  export type GoogleHealthRealtime = {
    user_id: string;
    integration_id?: string;
    active_calories_burned?: number;
    basal_metabolic_rate?: number;
    blood_glucose?: number;
    blood_pressure_systolic?: number;
    blood_pressure_diastolic?: number;
    body_fat?: number;
    body_temperature?: number;
    distance?: number;
    exercise_minutes?: number;
    heart_rate?: number;
    height?: number;
    hydration?: number;
    menstruation_flow?: number;
    nutrition_calories?: number;
    oxygen_saturation?: number;
    respiratory_rate?: number;
    resting_heart_rate?: number;
    sleep_hours?: number;
    steps?: number;
    weight?: number;
    last_sync_at?: Date;
    created_at: Date;
    updated_at: Date;
  };

  export const googleHealthRealtimeFields = [
    'user_id', 'integration_id', 'active_calories_burned', 'basal_metabolic_rate', 'blood_glucose',
    'blood_pressure_systolic', 'blood_pressure_diastolic', 'body_fat', 'body_temperature',
    'distance', 'exercise_minutes', 'heart_rate', 'height', 'hydration', 'menstruation_flow',
    'nutrition_calories', 'oxygen_saturation', 'respiratory_rate', 'resting_heart_rate',
    'sleep_hours', 'steps', 'weight', 'last_sync_at', 'created_at', 'updated_at'
  ] as const;
  export type GoogleHealthRealtimeField = (typeof googleHealthRealtimeFields)[number];