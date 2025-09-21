# Health Data Sync API Examples

## Overview
The `health-data-sync` edge function provides various actions for syncing and aggregating health data from different services including Google Health Connect, Apple Health, Fitbit, and Oura.

## Base URL
```
https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync
```

## Authentication
All requests require authentication using either:
- `Authorization: Bearer <SUPABASE_ANON_KEY>` (for client applications)
- `Authorization: Bearer <SUPABASE_SERVICE_ROLE_KEY>` (for server-side operations)

## Available Actions

### 1. Backfill User Data (7-day Google Health Connect example)

**Request:**
```bash
curl -X POST 'https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync' \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "backfill",
    "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e",
    "service_name": "Google Health Connect",
    "days": 7
  }'
```

**Response:**
```json
{
  "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e",
  "service_name": "Google Health Connect",
  "days": 7,
  "records_created": 45,
  "errors": [],
  "debug": [
    "Found 1 integrations",
    "Processing Google Health Connect (8e017599-b702-4450-9479-bee1828c30f8)",
    "Google Health Connect: 45 records created",
    "Starting aggregation for last 7 days",
    "Aggregation completed: 7 daily metrics created"
  ]
}
```

### 2. Aggregate User Data Only

**Request:**
```bash
curl -X POST 'https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync' \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "aggregate",
    "user_id": "f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e",
    "days": 7
  }'
```

### 3. Aggregate All Users

**Request:**
```bash
curl -X POST 'https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync' \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "aggregate_all_users",
    "days": 7
  }'
```

### 4. Sync and Aggregate All Users

**Request:**
```bash
curl -X POST 'https://ydbabipbxxleeiiysojv.supabase.co/functions/v1/health-data-sync' \
  -H "Authorization: Bearer <SUPABASE_ANON_KEY>" \
  -H "Content-Type: application/json" \
  -d '{
    "action": "sync_and_aggregate_all_users",
    "services": ["Google Health Connect", "Apple Health", "Fitbit", "Oura"],
    "days": 7
  }'
```

## Request Parameters

### Required Parameters
- `action`: One of `"backfill"`, `"aggregate"`, `"aggregate_all_users"`, `"sync_and_aggregate_all_users"`

### Optional Parameters
- `user_id`: Target user ID (required for `backfill` and `aggregate` actions)
- `service_name`: Specific service to target (e.g., "Google Health Connect", "Apple Health", "Fitbit", "Oura")
- `days`: Number of days to process (default: 30 for backfill, 7 for aggregate)
- `date`: Specific date to process (format: "YYYY-MM-DD")
- `services`: Array of service names for multi-service operations

## Supported Services
- **Google Health Connect** - Android health data aggregation platform
- **Apple Health** - iOS health data from HealthKit
- **Fitbit** - Wearable device data via Fitbit API
- **Oura** - Ring-based health and sleep tracking

## Python Client Example

Using the provided manual sync script:

```bash
# Backfill 7 days of Google Health Connect data
python3 scripts/health_data/manual_health_sync.py backfill \
  --user-id f8ac1669-7e9e-4d9e-bb9d-bebd806ce58e \
  --service "Google Health Connect" \
  --days 7

# Aggregate existing data for all users
python3 scripts/health_data/manual_health_sync.py aggregate --days 7
```

## Response Structure

### Success Response
```json
{
  "user_id": "string",
  "service_name": "string",
  "days": number,
  "records_created": number,
  "errors": [],
  "debug": ["array of debug messages"]
}
```

### Error Response
```json
{
  "error": "Error message description",
  "code": 400
}
```

## Notes

1. **Authentication**: Use appropriate authentication tokens based on your client type
2. **Rate Limiting**: The function includes built-in rate limiting for external API calls
3. **Data Processing**: Backfill fetches fresh data from external APIs, while aggregate processes existing stored data
4. **Service Priority**: When multiple services have the same metric, priority is: Apple Health > Google Health Connect > Fitbit > Oura
5. **Error Handling**: The function continues processing even if individual services fail, reporting errors in the response