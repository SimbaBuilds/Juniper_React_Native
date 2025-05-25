import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Linking } from 'react-native';
import { VoiceProvider } from './src/voice/VoiceContext';
import { WakeWordProvider } from './src/wakeword/WakeWordContext';
import WakeWordService from './src/wakeword/WakeWordService';
import { GoogleCalendarService } from './src/features/calendar/GoogleCalendarService';
import { HomeScreen } from './src/HomeScreen';
import { SettingsScreen } from './src/settings/SettingsScreen';
import { Ionicons } from '@expo/vector-icons';
import { Session } from '@supabase/supabase-js';
import { supabase } from './src/supabase/supabase';
import LoginPage from './src/auth/LoginPage';
import SignUpPage from './src/auth/SignUpPage';
import PhoneSignUpPage from './src/auth/PhoneSignUpPage';
import { AuthProvider } from './src/auth/AuthContext';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize any needed configurations here
  useEffect(() => {
    // Initialize app settings
    const initializeApp = async () => {
      try {
        // Check if wake word detection is available
        const isAvailable = await WakeWordService.getInstance().isWakeWordEnabled();
        console.log(`Wake word detection available: ${isAvailable}`);
        
        // Get the initial session
        const { data } = await supabase.auth.getSession();
        setSession(data.session);
        
        // Listen for auth changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange(
          (event, currentSession) => {
            setSession(currentSession);
          }
        );
        
        setLoading(false);

        // Cleanup subscription
        return () => subscription.unsubscribe();
      } catch (error) {
        console.error('Error initializing app:', error);
        setLoading(false);
      }
    };
    
    initializeApp();
  }, []);

  // Handle Google Calendar OAuth deep links
  useEffect(() => {
    console.log('Setting up deep link handlers...');
    
    const handleDeepLink = (event: { url: string }) => {
      const url = event.url;
      console.log('=== DEEP LINK RECEIVED ===');
      console.log('Full URL:', url);
      console.log('URL length:', url.length);
      console.log('URL type:', typeof url);
      
      // Log what we're checking for
      console.log('Checking for oauth2redirect pattern...');
      console.log('Contains oauth2redirect?', url.includes('oauth2redirect'));
      console.log('Checking for custom scheme pattern...');
      console.log('Starts with mobilejarvisnative://oauth/callback?', url.startsWith('mobilejarvisnative://oauth/callback'));
      
      // Handle the reverse client ID format (primary): com.googleusercontent.apps.{client-id}:/oauth2redirect
      // or com.googleusercontent.apps.{client-id}://oauth2redirect
      if (url.includes('oauth2redirect') || url.includes('com.googleusercontent.apps')) {
        console.log('✅ Matched Google OAuth redirect pattern');
        try {
          console.log('Parsing URL for parameters...');
          
          // Handle both :/ and :// formats
          let queryString = '';
          if (url.includes('?')) {
            queryString = url.split('?')[1];
          } else if (url.includes('#')) {
            // Some OAuth flows use hash fragments
            queryString = url.split('#')[1];
          }
          
          console.log('Query string:', queryString);
          
          if (queryString) {
            const urlParams = new URLSearchParams(queryString);
            console.log('URL parameters:', Object.fromEntries(urlParams.entries()));
            
            const code = urlParams.get('code');
            const error = urlParams.get('error');
            const state = urlParams.get('state');
            
            console.log('Extracted code:', code ? `${code.substring(0, 10)}...` : 'null');
            console.log('Extracted error:', error);
            console.log('Extracted state:', state);
            
            if (error) {
              console.error('❌ OAuth error:', error);
              const errorDescription = urlParams.get('error_description');
              console.error('❌ OAuth error description:', errorDescription);
              return;
            }
            
            if (code) {
              console.log('✅ Processing OAuth callback with code');
              GoogleCalendarService.getInstance().handleAuthCallback(code);
            } else {
              console.warn('⚠️ No code parameter found in OAuth redirect URL');
            }
          } else {
            console.warn('⚠️ No query parameters found in OAuth redirect URL');
          }
        } catch (error) {
          console.error('❌ Error processing OAuth callback:', error);
        }
      }
      
      // Keep custom scheme as fallback: mobilejarvisnative://oauth/callback
      else if (url.startsWith('mobilejarvisnative://oauth/callback')) {
        console.log('✅ Matched custom scheme pattern');
        try {
          const urlParts = url.split('?');
          if (urlParts.length > 1) {
            const urlParams = new URLSearchParams(urlParts[1]);
            const code = urlParams.get('code');
            const error = urlParams.get('error');
            
            if (error) {
              console.error('❌ OAuth error:', error);
              return;
            }
            
            if (code) {
              console.log('✅ Processing OAuth callback with code (custom scheme fallback)');
              GoogleCalendarService.getInstance().handleAuthCallback(code);
            }
          }
        } catch (error) {
          console.error('❌ Error processing OAuth callback:', error);
        }
      }
      
      // Log if no patterns matched
      else {
        console.log('❌ URL did not match any OAuth patterns');
        console.log('Expected patterns:');
        console.log('  1. Contains "oauth2redirect" or "com.googleusercontent.apps"');
        console.log('  2. Starts with "mobilejarvisnative://oauth/callback"');
      }
    };

    // Listen for deep links when app is running
    console.log('Adding deep link event listener...');
    const subscription = Linking.addEventListener('url', handleDeepLink);
    
    // Check if app was opened from a deep link (cold start)
    console.log('Checking for initial URL (cold start)...');
    Linking.getInitialURL().then((url) => {
      if (url) {
        console.log('Found initial URL:', url);
        handleDeepLink({ url });
      } else {
        console.log('No initial URL found');
      }
    });
    
    return () => {
      console.log('Removing deep link event listener...');
      subscription?.remove();
    };
  }, []);

  if (loading) {
    // You could return a loading component here
    return null;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <VoiceProvider>
          <WakeWordProvider>
            <Stack.Navigator
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#f5f5f5',
                },
                headerTintColor: '#333',
                headerTitleStyle: {
                  fontWeight: 'bold',
                },
              }}
              initialRouteName={session ? "Home" : "Login"}
            >
              {session ? (
                <>
                  <Stack.Screen 
                    name="Home" 
                    component={HomeScreen} 
                    options={({ navigation }) => ({
                      title: 'Jarvis',
                      headerRight: () => (
                        <Ionicons 
                          name="settings-outline" 
                          size={24} 
                          color="#333"
                          style={{ marginRight: 16 }}
                          onPress={() => navigation.navigate('Settings')}
                        />
                      ),
                    })}
                  />
                  <Stack.Screen 
                    name="Settings" 
                    component={SettingsScreen}
                    options={{
                      title: 'Settings',
                    }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen 
                    name="Login" 
                    component={LoginPage}
                    options={{
                      title: 'Sign In',
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen 
                    name="SignUp" 
                    component={SignUpPage}
                    options={{
                      title: 'Create Account',
                      headerShown: false,
                    }}
                  />
                  <Stack.Screen 
                    name="PhoneSignUp" 
                    component={PhoneSignUpPage}
                    options={{
                      title: 'Phone Sign Up',
                      headerShown: false,
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </WakeWordProvider>
        </VoiceProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
