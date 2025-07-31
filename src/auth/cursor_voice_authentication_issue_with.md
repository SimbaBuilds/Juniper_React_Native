# Voice Authentication Issue with Supabase
_Exported on 5/25/2025 at 22:58:40 CDT from Cursor (0.50.4)_

---

**User**

@api @auth @voice The debug test endpoint call is successful, but the actual endpoint call using voice is unsuccessful with a 403 response from the backend meaning somehow using voice is messing with the app's ability to send supabase authentication tokens and creds.  Please search the @Web regarding this issue and give me a few possibel solutions.

---

**Cursor**

I'll search for information about this 403 authentication issue when using voice functionality with Supabase, and then examine your code to understand the problem better.

Now let me search for more specific information about voice recording and authentication issues.

Now let me examine your code to understand the specific issue better.

Based on my analysis of your code and the web search results, I can identify several potential causes for the 403 authentication error when using voice functionality. Here are the most likely solutions:

## Potential Solutions for 403 Authentication Error with Voice

### 1. **Session State Corruption During Voice Operations**

The most likely issue is that voice operations are interfering with the Supabase session state. This can happen when:

- Native voice modules create new JavaScript contexts
- Voice processing causes memory pressure that affects session storage
- Concurrent operations between voice and API calls cause race conditions

**Solution**: Add session validation before API calls in voice context:

```typescript:src/voice/VoiceContext.tsx
// In processSpeechWithServer function, add session validation
const processSpeechWithServer = useCallback(async (speechText: string, currentHistory: ChatMessage[]) => {
  try {
    console.log('🌐 Processing speech with server API:', speechText);
    
    // Add session validation before API call
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      console.error('No valid session found during voice processing');
      setError('Authentication session expired. Please sign in again.');
      return null;
    }
    
    console.log('✅ Valid session found for voice API call');
    
    const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
    return response;
  } catch (err) {
    console.error('Error in processSpeechWithServer:', err);
    return null;
  }
}, [serverApi, featureSettings]);
```

### 2. **AsyncStorage Corruption from Voice Module**

Voice recording libraries can sometimes interfere with AsyncStorage where Supabase stores session data.

**Solution**: Implement session refresh mechanism:

```typescript:src/api/api.ts
// Modify the request interceptor to handle session refresh
api.interceptors.request.use(async (config) => {
  try {
    console.log('🔍 API Interceptor: Starting auth check for request to:', config.url);
    
    // First try to get current session
    let { data: { session } } = await supabase.auth.getSession();
    
    // If no session, try to refresh
    if (!session) {
      console.log('🔄 No session found, attempting refresh...');
      const { data: refreshData, error } = await supabase.auth.refreshSession();
      if (!error && refreshData.session) {
        session = refreshData.session;
        console.log('✅ Session refreshed successfully');
      }
    }
    
    if (session?.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
      console.log('✅ API Interceptor: Auth token added to request');
    } else {
      console.warn('⚠️ API Interceptor: No access token available after refresh attempt');
    }
    
    return config;
  } catch (error) {
    console.error('❌ API Interceptor Error:', error);
    return Promise.reject(error);
  }
});
```

### 3. **Voice Module Memory/Context Issues**

Some React Native voice libraries can cause JavaScript context issues that affect global state.

**Solution**: Isolate voice operations and add error boundaries:

```typescript:src/voice/VoiceContext.tsx
// Add error boundary and isolation
const processSpeechWithServer = useCallback(async (speechText: string, currentHistory: ChatMessage[]) => {
  try {
    // Add a small delay to ensure voice operations are complete
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Validate authentication state before proceeding
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    console.log('🌐 Processing speech with server API:', speechText);
    const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
    return response;
  } catch (err) {
    console.error('Error in processSpeechWithServer:', err);
    
    // If it's an auth error, try to refresh the session
    if (err.message?.includes('403') || err.message?.includes('auth')) {
      console.log('🔄 Auth error detected, attempting session refresh...');
      try {
        await supabase.auth.refreshSession();
        // Retry the API call once
        const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
        return response;
      } catch (retryErr) {
        console.error('Retry after session refresh failed:', retryErr);
      }
    }
    
    return null;
  }
}, [serverApi, featureSettings]);
```

### 4. **Native Module Permission Conflicts**

Voice recording permissions can sometimes interfere with network requests on Android.

**Solution**: Ensure proper permission handling:

```typescript:src/voice/VoiceService.ts
// Add permission validation before voice operations
public async startListening(): Promise<boolean> {
  try {
    // Validate that we still have network access after voice permissions
    console.log('🎤 Starting voice recognition with network validation...');
    
    // Test network connectivity before starting voice
    try {
      await fetch('https://www.google.com', { method: 'HEAD', timeout: 5000 });
      console.log('✅ Network connectivity confirmed');
    } catch (networkError) {
      console.warn('⚠️ Network connectivity issue detected:', networkError);
    }
    
    return await VoiceModule.startListening();
  } catch (error) {
    console.error('Error starting voice recognition:', error);
    throw error;
  }
}
```

### 5. **Concurrent Request Issues**

Multiple simultaneous requests during voice operations can cause authentication conflicts.

**Solution**: Add request queuing:

```typescript:src/api/ServerApiService.ts
class ServerApiService {
  private requestQueue: Promise<any> = Promise.resolve();

  public async sendChatRequest(
    message: string,
    history: ChatMessage[],
    preferences?: ChatRequest['preferences'], //preferences is deprecated TODO:remove 
    featureSettings?: FeatureSettings
  ): Promise<ChatResponse> {
    // Queue requests to prevent concurrent auth issues
    return this.requestQueue = this.requestQueue.then(async () => {
      console.log(`Sending chat request to ${this.config.apiEndpoint}`);
      
      try {
        // Add a small delay to ensure previous operations are complete
        await new Promise(resolve => setTimeout(resolve, 50));
        
        const jsonData: ChatRequest = {
          message,
          timestamp: Date.now(),
          history,
          preferences: preferences || {
            voice: 'male',
            response_type: 'concise'
          }, //preferences is deprecated TODO:remove 
          featureSettings
        };

        const formData = new FormData();
        formData.append('json_data', JSON.stringify(jsonData));

        const apiResponse = await api.post(this.config.apiEndpoint, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data'
          }
        });

        const data: ChatResponse = apiResponse.data;
        console.log('Server response:', data);
        return data;
      } catch (error) {
        console.error('Error sending chat request:', error);
        throw error;
      }
    });
  }
}
```

## Recommended Implementation Order

1. **Start with Solution #1** - Add session validation in voice context
2. **Implement Solution #2** - Add session refresh in API interceptor  
3. **Test thoroughly** - If issues persist, add Solutions #3-5

## Additional Debugging

Add this logging to help identify the exact cause:

```typescript:src/voice/VoiceContext.tsx
// Add before processSpeechWithServer call
useEffect(() => {
  const speechResultUnsubscribe = voiceService.onSpeechResult(async (event) => {
    console.log('🎤 Speech result received:', event.text);
    
    // Debug session state immediately after voice result
    try {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('🔍 Session state after voice result:', {
        hasSession: !!session,
        hasToken: !!session?.access_token,
        tokenLength: session?.access_token?.length,
        expiresAt: session?.expires_at
      });
    } catch (err) {
      console.error('❌ Error checking session after voice result:', err);
    }
    
    setTranscript(event.text);
    // ... rest of the code
  });
}, []);
```

The most likely cause is that voice operations are corrupting the session state or causing timing issues with authentication. Start with the session validation approach, as this addresses the most common cause of this issue.

```typescript
// In processSpeechWithServer function, add session validation
const processSpeechWithServer = useCallback(async (speechText: string, currentHistory: ChatMessage[]) => {
  try {
    console.log('🌐 Processing speech with server API:', speechText);
    
    // Add session validation before API call
    const { data: { session } } = await supabase.auth.getSession();
    if (!session) {
      console.error('No valid session found during voice processing');
      setError('Authentication session expired. Please sign in again.');
      return null;
    }
    
    console.log('✅ Valid session found for voice API call');
    
    const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
    return response;
  } catch (err) {
    console.error('Error in processSpeechWithServer:', err);
    return null;
  }
}, [serverApi, featureSettings]);
```

```typescript
// Modify the request interceptor to handle session refresh
api.interceptors.request.use(async (config) => {
  try {
    console.log('🔍 API Interceptor: Starting auth check for request to:', config.url);
    
    // First try to get current session
    let { data: { session } } = await supabase.auth.getSession();
    
    // If no session, try to refresh
    if (!session) {
      console.log('🔄 No session found, attempting refresh...');
      const { data: refreshData, error } = await supabase.auth.refreshSession();
      if (!error && refreshData.session) {
        session = refreshData.session;
        console.log('✅ Session refreshed successfully');
      }
    }
    
    if (session?.access_token) {
      config.headers.Authorization = `Bearer ${session.access_token}`;
      console.log('✅ API Interceptor: Auth token added to request');
    } else {
      console.warn('⚠️ API Interceptor: No access token available after refresh attempt');
    }
    
    return config;
  } catch (error) {
    console.error('❌ API Interceptor Error:', error);
    return Promise.reject(error);
  }
});
```

```typescript
// Add error boundary and isolation
const processSpeechWithServer = useCallback(async (speechText: string, currentHistory: ChatMessage[]) => {
  try {
    // Add a small delay to ensure voice operations are complete
    await new Promise(resolve => setTimeout(resolve, 100));
    
    // Validate authentication state before proceeding
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      throw new Error('User not authenticated');
    }
    
    console.log('🌐 Processing speech with server API:', speechText);
    const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
    return response;
  } catch (err) {
    console.error('Error in processSpeechWithServer:', err);
    
    // If it's an auth error, try to refresh the session
    if (err.message?.includes('403') || err.message?.includes('auth')) {
      console.log('🔄 Auth error detected, attempting session refresh...');
      try {
        await supabase.auth.refreshSession();
        // Retry the API call once
        const response = await serverApi.sendMessage(speechText, currentHistory, featureSettings);
        return response;
      } catch (retryErr) {
        console.error('Retry after session refresh failed:', retryErr);
      }
    }
    
    return null;
  }
}, [serverApi, featureSettings]);
```

```typescript
// Add permission validation before voice operations
public async startListening(): Promise<boolean> {
  try {
    // Validate that we still have network access after voice permissions
    console.log('🎤 Starting voice recognition with network validation...');
    
    // Test network connectivity before starting voice
    try {
      await fetch('https://www.google.com', { method: 'HEAD', timeout: 5000 });
      console.log('✅ Network connectivity confirmed');
    } catch (networkError) {
      console.warn('⚠️ Network connectivity issue detected:', networkError);
    }
    
    return await VoiceModule.startListening();
  } catch (error) {
    console.error('Error starting voice recognition:', error);
    throw error;
  }
}
```

```typescript
class ServerApiService {
  private requestQueue: Promise<any> = Promise.resolve();

  public async sendChatRequest(
    message: string,
    history: ChatMessage[],
    preferences?: ChatRequest['preferences'], //preferences is deprecated TODO:remove 
    featureSettings?: FeatureSettings
  ): Promise<ChatResponse> {
    // Queue requests to prevent concurrent auth issues
    return this.requestQueue = this.requestQueue.then(async () => {
      console.log(`Sending chat request to ${this.config.apiEndpoint}`);
      
      try {
        // Add a small delay to ensure previous operations are complete
        await new Promise(resolve => setTimeout(resolve, 50));
        
        const jsonData: ChatRequest = {
          message,
          timestamp: Date.now(),
          history,
          preferences: preferences || {
            voice: 'male',
            response_type: 'concise'
          }, //preferences is deprecated TODO:remove 
          featureSettings
        };

        const formData = new FormData();
        formData.append('json_data', JSON.stringify(jsonData));

        const apiResponse = await api.post(this.config.apiEndpoint, formData, {
          headers: { 
            'Content-Type': 'multipart/form-data'
          }
        });

        const data: ChatResponse = apiResponse.data;
        console.log('Server response:', data);
        return data;
      } catch (error) {
        console.error('Error sending chat request:', error);
        throw error;
      }
    });
  }
}
```

```typescript
// Add before processSpeechWithServer call
useEffect(() => {
  const speechResultUnsubscribe = voiceService.onSpeechResult(async (event) => {
    console.log('🎤 Speech result received:', event.text);
    
    // Debug session state immediately after voice result
    try {
      const { data: { session } } = await supabase.auth.getSession();
      console.log('🔍 Session state after voice result:', {
        hasSession: !!session,
        hasToken: !!session?.access_token,
        tokenLength: session?.access_token?.length,
        expiresAt: session?.expires_at
      });
    } catch (err) {
      console.error('❌ Error checking session after voice result:', err);
    }
    
    setTranscript(event.text);
    // ... rest of the code
  });
}, []);
```

