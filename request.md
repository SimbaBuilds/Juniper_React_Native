Adding four new tables:

1. **medical_records** - Metadata for uploaded medical record files
    - id: UUID (Primary Key)
    - user_id: UUID (Foreign Key)
    - title: str
    - original_file_type: str  # pdf, jpg, png, etc.
    - original_filename: Optional[str] = None
    - file_size_bytes: Optional[int] = None
    - num_pages: int
    - status: str = "processing"  # processing, completed, failed
    - upload_url: Optional[str] = None  # Storage location
    - summary: Optional[str] = None  # Overall file summary
    - metadata: Dict[str, Any] = {}  # Additional file metadata
    - created_at: datetime
    - updated_at: datetime

2. **record_pages** - Individual pages from processed medical records
    - id: UUID (Primary Key)
    - user_id: UUID (Foreign Key)
    - medical_record_id: UUID (Foreign Key to medical_records)
    - page_number: int
    - summary: Optional[str] = None
    - content: str
    - embedding: Optional[List[float]] = None 
    - processed_at: Optional[datetime] = None
    - created_at: datetime
    - updated_at: datetime

3. **apple_health_realtime** - Current Apple HealthKit values (one record per user, constantly upserted)
    - user_id: UUID (Primary Key)
    - integration_id: Optional[UUID] = None  # FK to integrations
    
    # Current metric values (all Optional[float])
    - steps: Optional[float] = None  
    - heartrate: Optional[float] = None
    - weight: Optional[float] = None
    - height: Optional[float] = None
    - bmi: Optional[float] = None  
    - activeenergy: Optional[float] = None 
    - distance: Optional[float] = None  
    - bloodglucose: Optional[float] = None  
    - oxygensaturation: Optional[float] = None  
    - restingheartrate: Optional[float] = None  
    - bloodpressure_systolic: Optional[float] = None  
    - bloodpressure_diastolic: Optional[float] = None  
    
    # Metadata and timestamps
    - last_sync_at: Optional[datetime] = None
    - created_at: datetime
    - updated_at: datetime

4. **google_health_realtime** - Current Google Health Connect values (one record per user, constantly upserted)
    - user_id: UUID (Primary Key)
    - integration_id: Optional[UUID] = None  # FK to integrations
    # Current metric values (all Optional[float])
    - active_calories_burned: Optional[float] = None
    - basal_metabolic_rate: Optional[float] = None
    - blood_glucose: Optional[float] = None
    - blood_pressure_systolic: Optional[float] = None
    - blood_pressure_diastolic: Optional[float] = None
    - body_fat: Optional[float] = None
    - body_temperature: Optional[float] = None
    - distance: Optional[float] = None
    - exercise_minutes: Optional[float] = None
    - heart_rate: Optional[float] = None
    - height: Optional[float] = None
    - hydration: Optional[float] = None
    - menstruation_flow: Optional[float] = None 
    - nutrition_calories: Optional[float] = None
    - oxygen_saturation: Optional[float] = None
    - respiratory_rate: Optional[float] = None
    - resting_heart_rate: Optional[float] = None
    - sleep_hours: Optional[float] = None
    - steps: Optional[float] = None
    - weight: Optional[float] = None
    
    # Metadata and timestamps
    - last_sync_at: Optional[datetime] = None
    - created_at: datetime
    - updated_at: datetime

