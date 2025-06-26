# Integration API Migration Guide

## Overview

I've successfully consolidated the API calls and standardized the integration completion process. Here's what was accomplished:

## 1. Created `src/api/integration_api.ts`
- Consolidated all integration completion logic
- Standardized payload format: `service_name`, `service_type`, `auth_params`
- Changed endpoint to `/api/integration`
- Added helper functions for OAuth, API key, and credentials auth types

## 2. Updated Key Services (Examples Completed)

### DropboxAuthService
```typescript
// Old approach:
await api.post('/api/oauth/complete_integration', {
  integration_id: integrationId,
  service: 'dropbox',
  access_token: result.accessToken,
  // ... other fields
});

// New standardized approach:
const authParams = createOAuthAuthParams(result, {
  account_id: result.tokenAdditionalParameters?.account_id
});

await completeIntegration({
  integration_id: integrationId,
  service_name: 'dropbox',
  service_type: 'oauth',
  auth_params: authParams
});
```

### PerplexityAuthService (API Key)
```typescript
// Old approach:
await api.post('/api/oauth/complete_integration', {
  integration_id: integrationId,
  service: 'perplexity',
  auth_type: 'api_key',
  api_key: authResult.apiKey,
  // ... other fields
});

// New standardized approach:
const authParams = createApiKeyAuthParams(authResult.apiKey);

await completeIntegration({
  integration_id: integrationId,
  service_name: 'perplexity',
  service_type: 'api_key',
  auth_params: authParams
});
```

### TwilioAuthService (Credentials)
```typescript
// New standardized approach:
const authParams = createCredentialsAuthParams({
  account_sid: credentials.accountSid,
  api_key: credentials.apiKey,
  api_secret: credentials.apiSecret,
  phone_number: credentials.phoneNumber
});

await completeIntegration({
  integration_id: integrationId,
  service_name: 'twilio',
  service_type: 'credentials',
  auth_params: authParams
});
```

## 3. Remaining Services to Update

Apply the same pattern to these services:

### OAuth Services (use `createOAuthAuthParams`)
- GoogleCalendarAuthService
- GoogleDocsAuthService
- GoogleMeetAuthService
- GoogleSheetsAuthService
- MicrosoftExcelAuthService
- MicrosoftOutlookCalendarAuthService
- MicrosoftOutlookMailAuthService
- MicrosoftTeamsAuthService
- MicrosoftWordAuthService
- NotionAuthService
- SlackAuthService
- TodoistAuthService
- ZoomAuthService

### Other Services
- TrelloAuthService (token-based, similar to API key)

## 4. Update Pattern for Each Service

1. **Update imports:**
```typescript
import { completeIntegration, createOAuthAuthParams, disconnectIntegration } from '../../api/integration_api';
```

2. **Update completeIntegration method:**
```typescript
private async completeIntegration(result: AuthorizeResult, integrationId: string): Promise<void> {
  try {
    const authParams = createOAuthAuthParams(result, {
      // Add any service-specific additional params here
    });

    await completeIntegration({
      integration_id: integrationId,
      service_name: 'service_name_here',
      service_type: 'oauth',
      auth_params: authParams
    });
  } catch (error) {
    console.error('🔴 Error completing integration:', error);
  }
}
```

3. **Update disconnect method:**
```typescript
async disconnect(integrationId: string): Promise<void> {
  try {
    // ... existing token revocation/cleanup logic ...
    
    // Add this before the final success log:
    await disconnectIntegration({
      integration_id: integrationId,
      service_name: 'service_name_here'
    });
    
    console.log('Service integration disconnected');
  } catch (error) {
    console.error('Error disconnecting:', error);
    throw error;
  }
}
```

## 5. Benefits Achieved

✅ **Consolidated API calls** into single integration_api file  
✅ **Standardized payload format** with service_name, service_type, auth_params  
✅ **Unified endpoint** `/api/integration` instead of various endpoints  
✅ **Type safety** with TypeScript interfaces  
✅ **Helper functions** for different auth types  
✅ **Consistent error handling** across all services  

## 6. Service Type Mapping

- **oauth**: All Google, Microsoft, Dropbox, Gmail, Notion, Slack, Todoist, Zoom services
- **api_key**: Perplexity
- **credentials**: Twilio
- **token**: Trello (can use api_key pattern)

The new pattern is much cleaner, more maintainable, and follows consistent standards across all integration services. 