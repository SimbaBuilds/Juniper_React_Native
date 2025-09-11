1. migration already done, 
2. no sample data needed
3. no schema changes but we do need to bypass upsert logic that dedups user+service (just check if my chart, if "service_name" in service record is my chart, if yes then raw insert instead of upsert
4. searchable list please, it will be a lot so we will need loading state for fetching from db
5. You will probably need to create a new Auth service from scratch
6. Provider level error handling is fine as they wont all be done in the same flow anyway.