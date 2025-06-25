import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Linking, Platform } from 'react-native';
import { VoiceProvider, useVoice } from './src/voice/VoiceContext';
import { WakeWordProvider } from './src/wakeword/WakeWordContext';
import WakeWordService from './src/wakeword/WakeWordService';
import { GoogleAuthService } from './src/auth/GoogleAuthService';
import { HomeScreen } from './src/HomeScreen';
import { SettingsScreen } from './src/settings/SettingsScreen';
import { IntegrationsScreen } from './src/integrations/IntegrationsScreen';
import { AutomationsScreen } from './src/automations/AutomationsScreen';
import { MemoriesScreen } from './src/memories/MemoriesScreen';
import { Ionicons } from '@expo/vector-icons';
import { Session } from '@supabase/supabase-js';
import { supabase } from './src/supabase/supabase';
import LoginPage from './src/auth/LoginPage';
import SignUpPage from './src/auth/SignUpPage';
import PhoneSignUpPage from './src/auth/PhoneSignUpPage';
import { AuthProvider } from './src/auth/AuthContext';
import OAuthCallbackHandler from './src/integrations/OAuthCallbackHandler';

type RootStackParamList = {
  MainTabs: undefined;
  Home: undefined;
  Settings: undefined;
  Integrations: undefined;
  Automations: undefined;
  Memories: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
  OAuthCallback: { url: string; integration_id?: string };
};

type TabParamList = {
  Home: undefined;
  Integrations: undefined;
  Automations: undefined;
  Memories: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const navigationRef = useRef<any>(null);

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

  // Handle OAuth deep links with hybrid callback system
  useEffect(() => {
    console.log('Setting up deep link handlers...');
    
    const handleDeepLink = (event: { url: string }) => {
      const url = event.url;
      console.log('=== DEEP LINK RECEIVED ===');
      console.log('Full URL:', url);
      
      // Check if this is an OAuth callback URL
      const isOAuthCallback = url.includes('oauth2redirect') || 
                            url.includes('com.googleusercontent.apps') ||
                            url.startsWith('mobilejarvisnative://oauth/callback') ||
                            url.includes('/oauth/callback') ||
                            url.includes('code=') ||
                            url.includes('error=');
      
      if (isOAuthCallback) {
        console.log('✅ Detected OAuth callback - using hybrid processing system');
        
        // Navigate to OAuthCallback screen with URL for processing
        // This will use our hybrid mapping system in the backend
        if (navigationRef.current && session) {
          console.log('✅ Navigating to OAuthCallback screen for hybrid processing');
          navigationRef.current.navigate('OAuthCallback', { url });
        } else {
          // Fallback: If navigation not available or user not logged in, process here
          console.log('⚠️ Navigation not available or user not logged in, processing callback inline');
          
          // For legacy Google Calendar integration compatibility
          if (url.includes('oauth2redirect') || url.includes('com.googleusercontent.apps')) {
            try {
              let queryString = '';
              if (url.includes('?')) {
                queryString = url.split('?')[1];
              } else if (url.includes('#')) {
                queryString = url.split('#')[1];
              }
              
              if (queryString) {
                const urlParams = new URLSearchParams(queryString);
                const code = urlParams.get('code');
                const error = urlParams.get('error');
                
                if (error) {
                  console.error('❌ OAuth error:', error);
                  return;
                }
                
                if (code) {
                  console.log('✅ Processing Google OAuth callback with legacy handler');
                  GoogleAuthService.getInstance().handleAuthCallback(code);
                }
              }
            } catch (error) {
                             console.error('❌ Error processing legacy OAuth callback:', error);
            }
          }
        }
      } else {
        console.log('❌ URL did not match any OAuth patterns');
        console.log('Expected OAuth patterns:');
        console.log('  1. Contains "oauth2redirect" or "com.googleusercontent.apps"');
        console.log('  2. Starts with "mobilejarvisnative://oauth/callback"');
        console.log('  3. Contains "code=" or "error=" parameters');
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
    <NavigationContainer ref={navigationRef}>
      <AuthProvider>
        <VoiceProvider>
          {Platform.OS === 'android' ? (
            <WakeWordProvider>
              <Stack.Navigator
                screenOptions={{
                  headerShown: false,
                }}
                initialRouteName={session ? "MainTabs" : "Login"}
              >
                {session ? (
                  <>
                    <Stack.Screen 
                      name="MainTabs" 
                      component={MainTabNavigator}
                    />
                    <Stack.Screen 
                      name="OAuthCallback" 
                      component={OAuthCallbackHandler}
                      options={{
                        title: 'Completing Integration...',
                        headerShown: true,
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
                      }}
                    />
                    <Stack.Screen 
                      name="SignUp" 
                      component={SignUpPage}
                      options={{
                        title: 'Create Account',
                      }}
                    />
                    <Stack.Screen 
                      name="PhoneSignUp" 
                      component={PhoneSignUpPage}
                      options={{
                        title: 'Phone Sign Up',
                      }}
                    />
                  </>
                )}
              </Stack.Navigator>
            </WakeWordProvider>
          ) : (
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
              }}
              initialRouteName={session ? "MainTabs" : "Login"}
            >
              {session ? (
                <>
                  <Stack.Screen 
                    name="MainTabs" 
                    component={MainTabNavigator}
                  />
                  <Stack.Screen 
                    name="OAuthCallback" 
                    component={OAuthCallbackHandler}
                    options={{
                      title: 'Completing Integration...',
                      headerShown: true,
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
                    }}
                  />
                  <Stack.Screen 
                    name="SignUp" 
                    component={SignUpPage}
                    options={{
                      title: 'Create Account',
                    }}
                  />
                  <Stack.Screen 
                    name="PhoneSignUp" 
                    component={PhoneSignUpPage}
                    options={{
                      title: 'Phone Sign Up',
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          )}
        </VoiceProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}

function MainTabNavigator() {
  const { integrationInProgress } = useVoice();
  
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Integrations') {
            iconName = focused ? 'link' : 'link-outline';
          } else if (route.name === 'Automations') {
            iconName = focused ? 'cog' : 'cog-outline';
          } else if (route.name === 'Memories') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#4A90E2',
        tabBarInactiveTintColor: '#B0B0B0',
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#3A3A3A',
        },
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >
      {/* <Tab.Screen 
        name="Automations" 
        component={AutomationsScreen}
        options={{
          title: 'Automations',
        }}
      /> */}
      <Tab.Screen 
        name="Integrations" 
        component={IntegrationsScreen}
        options={{
          title: 'Integrations',
          tabBarBadge: integrationInProgress ? '●' : undefined,
        }}
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen}
        options={{
          title: 'Home',
        }}
      />
      <Tab.Screen 
        name="Memories" 
        component={MemoriesScreen}
        options={{
          title: 'Memories',
        }}
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen}
        options={{
          title: 'Settings',
        }}
      />
    </Tab.Navigator>
  );
}
