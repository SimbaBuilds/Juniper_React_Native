# React Native API Setup

This directory contains the React Native-specific API implementation adapted from the web app version. The main differences and improvements for React Native are documented below.

## Key Differences from Web Implementation

### 1. Supabase Client Setup (`supabase.ts`)
- **Added AppState handling**: Automatically refreshes auth tokens when app becomes active
- **React Native storage**: Uses AsyncStorage instead of localStorage
- **Environment variables**: Supports both Expo Constants and process.env for flexibility

### 2. API Client (`api.ts`)
- **Navigation handling**: Removed `window.location.href` redirect (not available in React Native)
- **Auth error handling**: Relies on auth state changes for navigation instead of direct redirects
- **Proper authorization**: Automatically includes Supabase auth tokens in all requests

## Usage Examples

### Basic API Usage

```typescript
import { useServerApi } from './api/useServerApi';

const MyComponent = () => {
  const { sendMessage, isLoading, error } = useServerApi({
    onError: (error) => console.error('API Error:', error),
    onResponse: (response) => console.log('API Response:', response),
  });

  const handleSendMessage = async () => {
    try {
      const response = await sendMessage('Hello', [], featureSettings);
      // Handle response
    } catch (error) {
      // Handle error
    }
  };

  return (
    // Your component JSX
  );
};
```

### Direct API Usage

You can also use the axios instance directly for custom endpoints:

```typescript
import api from './api/api';

const MyComponent = () => {
  const makeCustomRequest = async () => {
    try {
      // This will automatically include auth headers
      const response = await api.get('/custom/endpoint');
      console.log(response.data);
    } catch (error) {
      console.error('Request failed:', error);
    }
  };

  const postData = async () => {
    try {
      const response = await api.post('/custom/endpoint', {
        data: 'your data here'
      });
      console.log(response.data);
    } catch (error) {
      console.error('Post failed:', error);
    }
  };

  return (
    // Your component JSX
  );
};
```

## Required Dependencies

Make sure you have these dependencies installed:

```bash
npm install @supabase/supabase-js @react-native-async-storage/async-storage
npm install axios
```

## Environment Variables

Set up your environment variables in `app.config.js`:

```javascript
export default {
  expo: {
    extra: {
      SUPABASE_URL: process.env.SUPABASE_URL,
      SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
    },
  },
};
```

Or use `.env` file with `EXPO_PUBLIC_` prefix:

```
EXPO_PUBLIC_SUPABASE_URL=your_supabase_url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
EXPO_PUBLIC_PYTHON_BACKEND_URL=your_backend_url
```

## Authentication Flow

The authentication flow automatically handles:
1. Token refresh when app becomes active
2. Automatic sign-out on 401 errors
3. Persistent sessions using AsyncStorage
4. Auth state changes for navigation
5. **Automatic authorization headers**: All API requests include the current user's auth token

## API Request Flow

1. **Request Interceptor**: Automatically adds `Authorization: Bearer <token>` header to all requests
2. **Response Interceptor**: Handles 401 errors by signing out the user
3. **Error Handling**: Comprehensive error handling for network, auth, and server errors

## Error Handling

All API calls include comprehensive error handling:
- Network errors
- Authentication errors (401 - automatically signs out user)
- Server errors
- Request timeout errors

Use the `onError` callback in `useServerApi` for global error handling.

## Best Practices

1. **Always handle loading states**: Use `isLoading` state from the hook
2. **Implement proper error handling**: Use try-catch blocks and error callbacks
3. **Use the provided hooks**: Prefer `useServerApi` over direct axios calls when possible
4. **Handle auth state changes**: Listen to Supabase auth state changes in your navigation logic

## Troubleshooting

### Common Issues

1. **Auth Token Issues**: Check that Supabase configuration is correct and tokens are being refreshed
2. **Network Errors**: Verify your backend URL is correct and accessible
3. **401 Errors**: User will be automatically signed out, ensure your auth flow handles this

### Debug Tips

- Enable network debugging in React Native debugger
- Check console logs for detailed error messages
- Verify environment variables are loaded correctly
- Test API endpoints with a tool like Postman first

## API Structure

The API client (`api.ts`) provides:
- Automatic Supabase authentication
- Request/response interceptors
- Proper error handling
- React Native compatibility

The `useServerApi` hook provides:
- Loading states
- Error handling
- Response caching
- Configuration management 