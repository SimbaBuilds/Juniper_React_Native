import React, { useEffect, useState, useRef } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
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
import IntegrationCompletionService from './src/integrations/IntegrationCompletionService';

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

  // OAuth callback handlers for each service type
  const handleGoogleCallback = (url: string) => {
    // Extract service from redirect path
    const servicePath = url.match(/oauth2redirect\/(.+)/)?.[1];
    const queryString = url.split('?')[1] || url.split('#')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Google OAuth error:', error);
        return;
      }
      
      if (code && state) {
        switch (servicePath) {
          case 'calendar':
            const GoogleCalendarAuthService = require('./src/integrations/auth/services/GoogleCalendarAuthService').default;
            GoogleCalendarAuthService.getInstance().handleAuthCallback(code, state);
            break;
          case 'gmail':
            const GmailAuthService = require('./src/integrations/auth/services/GmailAuthService').default;
            GmailAuthService.getInstance().handleAuthCallback(code, state);
            break;
          case 'docs':
            const GoogleDocsAuthService = require('./src/integrations/auth/services/GoogleDocsAuthService').default;
            GoogleDocsAuthService.getInstance().handleAuthCallback(code, state);
            break;
          case 'sheets':
            const GoogleSheetsAuthService = require('./src/integrations/auth/services/GoogleSheetsAuthService').default;
            GoogleSheetsAuthService.getInstance().handleAuthCallback(code, state);
            break;
          case 'meet':
            const GoogleMeetAuthService = require('./src/integrations/auth/services/GoogleMeetAuthService').default;
            GoogleMeetAuthService.getInstance().handleAuthCallback(code, state);
            break;
          default:
            console.warn(`❌ Unknown Google service: ${servicePath}`);
            // Fall back to legacy Google auth for login
            GoogleAuthService.getInstance().handleAuthCallback(code);
        }
      }
    }
  };

  const handleMicrosoftCallback = (url: string) => {
    const queryString = url.split('?')[1] || url.split('#')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Microsoft OAuth error:', error);
        return;
      }
      
      if (code && state) {
        // Determine service from state parameter
        // For now, route to legacy handler or implement service-specific handlers
        if (navigationRef.current && session) {
          navigationRef.current.navigate('OAuthCallback', { url });
        }
      }
    }
  };

  const handleSlackCallback = (url: string) => {
    const queryString = url.split('?')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Slack OAuth error:', error);
        return;
      }
      
      if (code && state) {
        const SlackAuthService = require('./src/integrations/auth/services/SlackAuthService').default;
        SlackAuthService.getInstance().handleAuthCallback(code, state);
      }
    }
  };

  const handleNotionCallback = (url: string) => {
    const queryString = url.split('?')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Notion OAuth error:', error);
        return;
      }
      
      if (code && state) {
        const NotionAuthService = require('./src/integrations/auth/services/NotionAuthService').default;
        NotionAuthService.getInstance().handleAuthCallback(code, state);
      }
    }
  };

  const handleTodoistCallback = (url: string) => {
    const queryString = url.split('?')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Todoist OAuth error:', error);
        return;
      }
      
      if (code && state) {
        const TodoistAuthService = require('./src/integrations/auth/services/TodoistAuthService').default;
        TodoistAuthService.getInstance().handleAuthCallback(code, state);
      }
    }
  };

  const handleZoomCallback = (url: string) => {
    const queryString = url.split('?')[1];
    
    if (queryString) {
      const urlParams = new URLSearchParams(queryString);
      const code = urlParams.get('code');
      const state = urlParams.get('state');
      const error = urlParams.get('error');
      
      if (error) {
        console.error('❌ Zoom OAuth error:', error);
        return;
      }
      
      if (code && state) {
        const ZoomAuthService = require('./src/integrations/auth/services/ZoomAuthService').default;
        ZoomAuthService.getInstance().handleAuthCallback(code, state);
      }
    }
  };

  const handleHttpsOAuthCallback = (url: string) => {
    console.log('=== HANDLING HTTPS OAUTH CALLBACK ===');
    console.log('URL:', url);
    
    // Extract service name from URL path: /oauth/{serviceName}/callback
    const pathMatch = url.match(/\/oauth\/([^\/]+)\/callback/);
    if (!pathMatch) {
      console.error('❌ Could not extract service name from HTTPS callback URL');
      return;
    }
    
    const serviceName = pathMatch[1];
    console.log('📝 Detected service:', serviceName);
    
    const queryString = url.split('?')[1];
    if (!queryString) {
      console.error('❌ No query parameters in HTTPS callback URL');
      return;
    }
    
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    if (error) {
      console.error(`❌ ${serviceName} OAuth error:`, error);
      return;
    }
    
    if (!code || !state) {
      console.error(`❌ Missing code or state in ${serviceName} callback`);
      return;
    }
    
    console.log(`✅ Processing ${serviceName} HTTPS callback with code and state`);
    
    // Route to appropriate service handler based on service name
    // To add a new service, add a new case below with the correct import path
    try {
      switch (serviceName) {
        case 'google-calendar':
          require('./src/integrations/auth/services/GoogleCalendarAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'gmail':
          require('./src/integrations/auth/services/GmailAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'google-docs':
          require('./src/integrations/auth/services/GoogleDocsAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'google-sheets':
          require('./src/integrations/auth/services/GoogleSheetsAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'google-meet':
          require('./src/integrations/auth/services/GoogleMeetAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'google':
          const { GoogleAuthService } = require('./src/auth/GoogleAuthService');
          GoogleAuthService.getInstance().handleAuthCallback(code);
          break;
        case 'outlook-mail':
          require('./src/integrations/auth/services/MicrosoftOutlookMailAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'outlook-calendar':
          require('./src/integrations/auth/services/MicrosoftOutlookCalendarAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'microsoft-teams':
          require('./src/integrations/auth/services/MicrosoftTeamsAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'microsoft-excel':
          require('./src/integrations/auth/services/MicrosoftExcelAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'microsoft-word':
          require('./src/integrations/auth/services/MicrosoftWordAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'slack':
          require('./src/integrations/auth/services/SlackAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'notion':
          require('./src/integrations/auth/services/NotionAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'todoist':
          require('./src/integrations/auth/services/TodoistAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'zoom':
          require('./src/integrations/auth/services/ZoomAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        default:
          console.warn(`❌ Unknown service in HTTPS callback: ${serviceName}`);
          // Fall back to legacy handler
          if (navigationRef.current && session) {
            navigationRef.current.navigate('OAuthCallback', { url });
          }
      }
    } catch (serviceError) {
      console.error(`❌ Error handling ${serviceName} service callback:`, serviceError);
      // Fall back to legacy handler on service error
      if (navigationRef.current && session) {
        navigationRef.current.navigate('OAuthCallback', { url });
      }
    }
  };

  // Handle OAuth deep links with new callback routing system
  useEffect(() => {
    console.log('Setting up deep link handlers...');
    
    const handleDeepLink = (event: { url: string }) => {
      const url = event.url;
      console.log('=== DEEP LINK RECEIVED ===');
      console.log('Full URL:', url);
      console.log('URL starts with https://', url.startsWith('https://'));
      console.log('URL includes /oauth/', url.includes('/oauth/'));
      
      // Check if this is an OAuth callback URL
      const isOAuthCallback = url.includes('oauth2redirect') || 
                            url.includes('com.googleusercontent.apps') ||
                            url.startsWith('mobilejarvisnative://oauth/callback') ||
                            url.includes('/oauth/callback') ||
                            url.includes('code=') ||
                            url.includes('error=') ||
                            url.startsWith('msauth.com.anonymous.MobileJarvisNative') ||
                            url.startsWith('slack://oauth/callback') ||
                            url.startsWith('notion://oauth/callback') ||
                            url.startsWith('db-') ||
                            url.startsWith('todoist://oauth/callback') ||
                            url.startsWith('zoom://oauth/callback') ||
                            // HTTPS callback URLs
                            (url.startsWith('https://') && url.includes('/oauth/'));
      
      if (isOAuthCallback) {
        console.log('✅ Detected OAuth callback - using new OAuth routing system');
        
        try {
          // Handle HTTPS OAuth callbacks (NEW HTTPS REDIRECT SYSTEM)
          if (url.startsWith('https://') && url.includes('/oauth/')) {
            handleHttpsOAuthCallback(url);
          }
          // Handle Google services (existing working pattern)
          else if (url.includes('oauth2redirect') || url.includes('com.googleusercontent.apps')) {
            handleGoogleCallback(url);
          }
          // Handle Microsoft services
          else if (url.includes('msauth.com.anonymous.MobileJarvisNative')) {
            handleMicrosoftCallback(url);
          }
          // Handle Slack
          else if (url.startsWith('slack://oauth/callback')) {
            handleSlackCallback(url);
          }
          // Handle Notion
          else if (url.startsWith('notion://oauth/callback')) {
            handleNotionCallback(url);
          }
          // Handle Todoist
          else if (url.startsWith('todoist://oauth/callback')) {
            handleTodoistCallback(url);
          }
          // Handle Zoom
          else if (url.startsWith('zoom://oauth/callback')) {
            handleZoomCallback(url);
          }
          // Legacy callback handling
          else if (navigationRef.current && session) {
            console.log('✅ Navigating to OAuthCallback screen for backend processing');
            navigationRef.current.navigate('OAuthCallback', { url });
          }
        } catch (error) {
          console.error('❌ Error processing OAuth callback:', error);
          // Fall back to old system on error
          if (navigationRef.current && session) {
            navigationRef.current.navigate('OAuthCallback', { url });
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
  const { integrationInProgress, sendTextMessage } = useVoice();
  const navigation = useNavigation();
  
  // Set up integration completion handler
  useEffect(() => {
    IntegrationCompletionService.getInstance().setHandler({
      sendTextMessage: async (message: string) => {
        await sendTextMessage(message);
      },
      navigateToHome: () => {
        navigation.navigate('Home' as never);
      }
    });
  }, [sendTextMessage, navigation]);
  
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
