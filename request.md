Awesome!  Please build out the Android Google fit/health sync on launch implementation attempting to use the same query methods learned from the apple implementation.

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

