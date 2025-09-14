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

import { RepoScreen } from './src/repo/RepoScreen';
import { Ionicons } from '@expo/vector-icons';
import { Session } from '@supabase/supabase-js';
import { supabase } from './src/supabase/supabase';
import LoginPage from './src/auth/LoginPage';
import SignUpPage from './src/auth/SignUpPage';
import PhoneSignUpPage from './src/auth/PhoneSignUpPage';
import ForgotPasswordScreen from './src/auth/ForgotPasswordScreen';
import ResetPasswordScreen from './src/auth/ResetPasswordScreen';
import { AuthProvider, useAuth } from './src/auth/AuthContext';
import IntegrationCompletionService from './src/integrations/IntegrationCompletionService';
import { DatabaseService } from './src/supabase/supabase';
import { colors } from './src/shared/theme/colors';
// Error boundaries removed - let React Native handle errors naturally
import { Storage } from './src/utils/storage';
import AppLinksPrompt from './src/components/AppLinksPrompt';
import { AppLinksService, shouldShowFirstLaunchPrompt, incrementLaunchCount } from './src/utils/appLinks';
import HealthSyncService from './src/integrations/data/HealthSyncService';

type RootStackParamList = {
  MainTabs: undefined;
  Home: undefined;
  Settings: undefined;
  Integrations: undefined;
  Memories: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
  ForgotPassword: undefined;
  ResetPassword: undefined;
  OAuthCallback: { url: string; integration_id?: string };
};

type TabParamList = {
  Juniper: undefined;
  Integrations: undefined;
  Repo: undefined;
  Settings: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator<TabParamList>();

export default function App() {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);
  const [storageReady, setStorageReady] = useState(false);
  const [showAppLinksPrompt, setShowAppLinksPrompt] = useState(false);
  const navigationRef = useRef<any>(null);

  // Initialize any needed configurations here
  useEffect(() => {
    // Enhanced initialization with better error handling
    const initializeApp = async () => {
      try {
        console.log('🚀 App: Starting initialization...');
        
        // Wrap each initialization step in try-catch using Promise.allSettled
        const results = await Promise.allSettled([
          // Storage initialization (critical)
          (async () => {
            try {
              console.log('📁 App: Initializing storage...');
              const storageResult = await Storage.initialize();
              setStorageReady(storageResult);
              return { component: 'storage', success: storageResult };
            } catch (error) {
              console.error('❌ Storage initialization failed:', error);
              setStorageReady(false);
              return { component: 'storage', success: false, error };
            }
          })(),
          
          // Wake word initialization (non-critical)
          (async () => {
            try {
              console.log('🔊 App: Checking wake word detection...');
              const isAvailable = await WakeWordService.getInstance().isWakeWordEnabled();
              console.log(`Wake word detection available: ${isAvailable}`);
              return { component: 'wakeword', success: true };
            } catch (error) {
              console.warn('⚠️ Wake word initialization failed:', error);
              return { component: 'wakeword', success: false, error };
            }
          })(),
          
          // Auth session initialization (critical)
          (async () => {
            try {
              console.log('🔐 App: Getting initial auth session...');
              const { data } = await supabase.auth.getSession();
              setSession(data.session);
              return { component: 'auth', success: true, session: data.session };
            } catch (error) {
              console.error('❌ Auth initialization failed:', error);
              setSession(null);
              return { component: 'auth', success: false, error };
            }
          })(),
          
          // App Links check for first launch (non-critical)
          (async () => {
          try {
            if (Platform.OS === 'android') {
              console.log('🔗 App: Incrementing launch count...');
              await incrementLaunchCount();
              
              console.log('🔗 App: Checking if should show first launch prompt...');
              const shouldShow = await shouldShowFirstLaunchPrompt();
              
              if (shouldShow) {
                console.log('🔗 App: Checking if App Links are enabled...');
                const isEnabled = await AppLinksService.isAppLinksEnabled();
                
                if (!isEnabled) {
                  console.log('🔗 App: App Links not enabled - will show first launch prompt');
                  // We'll show the prompt after initialization is complete
                  setTimeout(() => {
                    setShowAppLinksPrompt(true);
                  }, 1000); // Small delay to ensure UI is ready
                } else {
                  console.log('🔗 App: App Links already enabled');
                  await AppLinksService.setFirstLaunchPromptShown();
                }
              } else {
                console.log('🔗 App: First launch prompt not needed');
              }
            }
            return { component: 'applinks', success: true };
          } catch (error) {
            console.warn('⚠️ App Links check failed:', error);
            return { component: 'applinks', success: false, error };
          }
        })(),
        
          // Health data sync on app launch (non-critical)
          (async () => {
            try {
              console.log('🏥 App: Starting health data sync...');
              const { data } = await supabase.auth.getSession();
              if (data.session?.user?.id) {
                const healthSync = HealthSyncService.getInstance();
                const result = await healthSync.syncHealthData(data.session.user.id);
                console.log('🏥 App: Health sync result:', result.success ? 'success' : 'failed');
                return { component: 'health', success: result.success, synced: result.synced };
              } else {
                console.log('🏥 App: No user session - skipping health sync');
                return { component: 'health', success: true, synced: false };
              }
            } catch (error) {
              console.warn('⚠️ Health sync failed:', error);
              return { component: 'health', success: false, error };
            }
          })()
        ]);
        
        // Log results without crashing
        results.forEach((result, index) => {
          if (result.status === 'fulfilled') {
            console.log(`✅ Component ${result.value.component} initialized: success=${result.value.success}`);
          } else {
            console.error(`❌ Component initialization failed:`, result.reason);
          }
        });
        
        // Set up auth listener only if initial auth succeeded
        const authResult = results[2];
        if (authResult.status === 'fulfilled' && authResult.value.success) {
          try {
            const { data: { subscription } } = supabase.auth.onAuthStateChange(
              (event, currentSession) => {
                console.log('🔐 Auth state changed:', event, !!currentSession);
                setSession(currentSession);
              }
            );
            
            // Return cleanup function
            return () => {
              console.log('🧹 Cleaning up auth subscription');
              subscription.unsubscribe();
            };
          } catch (error) {
            console.error('❌ Auth listener setup failed:', error);
          }
        }
        
      } catch (error) {
        console.error('❌ App: Critical initialization error:', error);
        // Don't crash - just log the error
      } finally {
        // Always stop loading, even if initialization fails
        setLoading(false);
        console.log('✅ App: Initialization sequence completed');
      }
    };
    
    const cleanup = initializeApp();
    
    // Return cleanup function
    return () => {
      if (cleanup && typeof cleanup.then === 'function') {
        cleanup.then(cleanupFn => {
          if (typeof cleanupFn === 'function') {
            cleanupFn();
          }
        });
      }
    };
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
    console.log('📝 Query string:', queryString);
    if (!queryString) {
      console.error('❌ No query parameters in HTTPS callback URL');
      return;
    }
    
    const urlParams = new URLSearchParams(queryString);
    const code = urlParams.get('code');
    const state = urlParams.get('state');
    const error = urlParams.get('error');
    
    console.log('📝 Extracted parameters:');
    console.log('  - code:', code ? `${code.substring(0, 10)}...` : 'null');
    console.log('  - state:', state);
    console.log('  - error:', error);
    
    if (error) {
      console.error(`❌ ${serviceName} OAuth error:`, error);
      return;
    }
    
    // For Google OAuth, state parameter is optional since we don't send one
    if (serviceName === 'google') {
      if (!code) {
        console.error(`❌ Missing code in ${serviceName} callback`);
        console.error(`❌ Code present: ${!!code}`);
        return;
      }
    } else {
      // For other services, require both code and state
      if (!code || !state) {
        console.error(`❌ Missing code or state in ${serviceName} callback`);
        console.error(`❌ Code present: ${!!code}, State present: ${!!state}`);
        return;
      }
    }
    
    console.log(`✅ Processing ${serviceName} HTTPS callback with code and state`);
    
          // Route to appropriate service handler based on service name
      // Enhanced error handling for each service callback
      try {
        console.log(`📞 Routing ${serviceName} callback...`);
        
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
        case 'fitbit':
          require('./src/integrations/auth/services/FitbitAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'oura':
          require('./src/integrations/auth/services/OuraAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'epic-mychart':
          require('./src/integrations/auth/services/EpicMyChartAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'apple-health':
          require('./src/integrations/auth/services/AppleHealthKitAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        case 'health-connect':
        case 'google-fit':
          require('./src/integrations/auth/services/GoogleFitAuthService').default.getInstance().handleAuthCallback(code, state);
          break;
        default:
          console.warn(`❌ Unknown service in HTTPS callback: ${serviceName}`);
          // Fall back to legacy handler
          if (navigationRef.current && session) {
            navigationRef.current.navigate('OAuthCallback', { url });
          }
      }
            console.log(`✅ ${serviceName} callback processed successfully`);
      } catch (serviceError) {
        console.error(`❌ Error handling ${serviceName} service callback:`, serviceError);
        
        // Don't crash - just log the error
        console.error('OAuth callback error:', serviceError);
        
        // Fall back to legacy handler on service error
        try {
          if (navigationRef.current && session) {
            navigationRef.current.navigate('OAuthCallback', { url });
          }
        } catch (navigationError) {
          console.error('❌ Error in OAuth callback navigation fallback:', navigationError);
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
      
      // Check if this is a password reset callback URL
      const isPasswordResetCallback = url.startsWith('com.mobilejarvislanding://reset-password');
      
      // Check if this is an OAuth callback URL
      const isOAuthCallback = url.includes('oauth2redirect') || 
                            url.includes('com.googleusercontent.apps') ||
                            url.startsWith('mobilejarvisnative://oauth/callback') ||
                            url.includes('/oauth/callback') ||
                            url.includes('code=') ||
                            url.includes('error=') ||
                            url.startsWith('msauth.com.hightowerai.MobileJarvisNative') ||
                            url.startsWith('slack://oauth/callback') ||
                            url.startsWith('notion://oauth/callback') ||
                            url.startsWith('db-') ||
                            url.startsWith('todoist://oauth/callback') ||
                            url.startsWith('zoom://oauth/callback') ||
                            // HTTPS callback URLs
                            (url.startsWith('https://') && url.includes('/oauth/'));
      
      if (isPasswordResetCallback) {
        console.log('✅ Detected password reset callback');
        // Navigate to reset password screen
        if (navigationRef.current) {
          navigationRef.current.navigate('ResetPassword');
        }
      } else if (isOAuthCallback) {
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
          else if (url.includes('msauth.com.hightowerai.MobileJarvisNative')) {
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

  const handleAppLinksPromptDismiss = async () => {
    setShowAppLinksPrompt(false);
    await AppLinksService.setFirstLaunchPromptShown();
  };

  const handleAppLinksSettingsOpened = () => {
    // User opened settings - we can assume they'll enable it
    console.log('🔗 App: User opened App Links settings');
  };

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
                    <Stack.Screen 
                      name="ForgotPassword" 
                      component={ForgotPasswordScreen}
                      options={{
                        title: 'Reset Password',
                      }}
                    />
                    <Stack.Screen 
                      name="ResetPassword" 
                      component={ResetPasswordScreen}
                      options={{
                        title: 'Set New Password',
                      }}
                    />
                  </>
                )}
              </Stack.Navigator>
            </WakeWordProvider>
          ) : (
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
                  <Stack.Screen 
                    name="ForgotPassword" 
                    component={ForgotPasswordScreen}
                    options={{
                      title: 'Reset Password',
                    }}
                  />
                  <Stack.Screen 
                    name="ResetPassword" 
                    component={ResetPasswordScreen}
                    options={{
                      title: 'Set New Password',
                    }}
                  />
                </>
              )}
              </Stack.Navigator>
              </WakeWordProvider>
            )}
          </VoiceProvider>
        </AuthProvider>
        
        {/* App Links Prompt - First Launch */}
        <AppLinksPrompt
          visible={showAppLinksPrompt}
          onDismiss={handleAppLinksPromptDismiss}
          onSettingsOpened={handleAppLinksSettingsOpened}
          isFirstLaunch={true}
        />
      </NavigationContainer>
  );
}

function MainTabNavigator() {
  const { integrationInProgress, sendTextMessage } = useVoice();
  const { user } = useAuth();
  const navigation = useNavigation();
  const [expiringResourcesCount, setExpiringResourcesCount] = useState(0);
  
  // Set up integration completion handler
  useEffect(() => {
    IntegrationCompletionService.getInstance().setHandler({
      sendTextMessage: async (message: string, integrationInProgress?: boolean, imageUrl?: string) => {
        await sendTextMessage(message, integrationInProgress, imageUrl);
      },
      navigateToHome: () => {
        (navigation as any).navigate('MainTabs', { 
          screen: 'Juniper' 
        });
      }
    });
  }, [sendTextMessage, navigation]);

  // Check for expiring resources
  useEffect(() => {
    const checkExpiringResources = async () => {
      if (!user?.id) return;
      
      try {
        const resources = await DatabaseService.getResources(user.id);
        const expiringCount = resources.filter(resource => 
          resource.relevance_score < 10
        ).length;
        setExpiringResourcesCount(expiringCount);
      } catch (error) {
        console.error('Error checking expiring resources:', error);
      }
    };

    checkExpiringResources();
    
    // Check every 5 minutes
    const interval = setInterval(checkExpiringResources, parseInt(process.env.EXPIRING_RESOURCES_INTERVAL || '5') * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [user?.id]);
  
  return (
    <Tab.Navigator
      initialRouteName="Juniper"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Juniper') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Integrations') {
            iconName = focused ? 'link' : 'link-outline';
          } else if (route.name === 'Repo') {
            iconName = focused ? 'bookmark' : 'bookmark-outline';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings-outline';
          } else {
            iconName = 'help-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: colors.text.primary,
        tabBarInactiveTintColor: colors.text.secondary,
        tabBarStyle: {
          backgroundColor: '#1E1E1E',
          borderTopColor: '#3A3A3A',
        },
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: colors.text.primary,
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      })}
    >

      <Tab.Screen 
        name="Integrations" 
        component={IntegrationsScreen}
        options={{
          title: 'Integrations',
          tabBarBadge: integrationInProgress ? '●' : undefined,
        }}
      />
      <Tab.Screen 
        name="Juniper" 
        component={HomeScreen}
        options={{
          title: 'Juniper',
        }}
      />
      <Tab.Screen 
        name="Repo" 
        component={RepoScreen}
        options={{
          title: 'Repo',
          tabBarBadge: expiringResourcesCount > 0 ? expiringResourcesCount : undefined,
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
