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
    const handleDeepLink = (event: { url: string }) => {
      const url = event.url;
      console.log('Received deep link:', url);
      
      // Handle the new OAuth callback format: mobilejarvisnative://oauth/callback
      if (url.startsWith('mobilejarvisnative://oauth/callback')) {
        try {
          const urlParts = url.split('?');
          if (urlParts.length > 1) {
            const urlParams = new URLSearchParams(urlParts[1]);
            const code = urlParams.get('code');
            const error = urlParams.get('error');
            
            if (error) {
              console.error('OAuth error:', error);
              return;
            }
            
            if (code) {
              console.log('Processing OAuth callback with code');
              GoogleCalendarService.getInstance().handleAuthCallback(code);
            }
          }
        } catch (error) {
          console.error('Error processing OAuth callback:', error);
        }
      }
      
      // Keep backward compatibility with the old format for now
      if (url.includes('oauth2redirect')) {
        try {
          const urlParams = new URLSearchParams(url.split('?')[1]);
          const code = urlParams.get('code');
          const error = urlParams.get('error');
          
          if (error) {
            console.error('OAuth error:', error);
            return;
          }
          
          if (code) {
            console.log('Processing OAuth callback with code (legacy format)');
            GoogleCalendarService.getInstance().handleAuthCallback(code);
          }
        } catch (error) {
          console.error('Error processing OAuth callback:', error);
        }
      }
    };

    // Listen for deep links when app is running
    const subscription = Linking.addEventListener('url', handleDeepLink);
    
    // Check if app was opened from a deep link (cold start)
    Linking.getInitialURL().then((url) => {
      if (url) {
        handleDeepLink({ url });
      }
    });
    
    return () => subscription?.remove();
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
