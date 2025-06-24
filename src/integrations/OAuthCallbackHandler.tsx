import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { useRoute, useNavigation } from '@react-navigation/native';
import { DatabaseService } from '../supabase/supabase';
import { useAuth } from '../auth/AuthContext';
import api from '../api/api';

interface CallbackProcessingResult {
  success: boolean;
  integration_id?: string;
  service_name?: string;
  error?: string;
  oauth_error?: boolean;
  error_message?: string;
  status?: string;
  mapping_confidence?: number;
}

interface RouteParams {
  url?: string;
  integration_id?: string;
}

export const OAuthCallbackHandler: React.FC = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const { user } = useAuth();
  const [processing, setProcessing] = useState(true);
  const [result, setResult] = useState<CallbackProcessingResult | null>(null);

  useEffect(() => {
    processOAuthCallback();
  }, []);

  const processOAuthCallback = async () => {
    try {
      if (!user?.id) {
        throw new Error('User not authenticated');
      }

      const params = route.params as RouteParams;
      const callbackUrl = params?.url;
      
      if (!callbackUrl) {
        throw new Error('No callback URL provided');
      }

      console.log('🔗 Processing OAuth callback URL:', callbackUrl);

      // Parse callback URL parameters
      const callbackParams = parseCallbackUrl(callbackUrl);
      console.log('🔗 Parsed callback parameters:', Object.keys(callbackParams));

      // Check for OAuth errors first
      if (callbackParams.error) {
        setResult({
          success: false,
          oauth_error: true,
          error: callbackParams.error,
          error_message: getOAuthErrorMessage(callbackParams.error, callbackParams.error_description)
        });
        setProcessing(false);
        return;
      }

      // Extract integration ID from state or route params
      const integrationId = extractIntegrationId(callbackParams.state, params?.integration_id);
      
      if (!integrationId) {
        throw new Error('No integration ID found in callback state or route params');
      }

      console.log('🔗 Found integration ID:', integrationId);

      // Send callback data to backend for hybrid mapping and processing
      const response = await api.post('/api/oauth/callback', {
        integration_id: integrationId,
        callback_params: callbackParams,
        callback_url: callbackUrl
      });

      const callbackResult = response.data;
      
      if (callbackResult.success) {
        setResult({
          success: true,
          integration_id: integrationId,
          service_name: callbackResult.service_name,
          status: callbackResult.status,
          mapping_confidence: callbackResult.mapping_confidence
        });
        
        // Show success message and redirect
        setTimeout(() => {
          Alert.alert(
            'Integration Complete!',
            `Your ${callbackResult.service_name} integration has been successfully configured.`,
            [
              {
                text: 'OK',
                onPress: () => navigation.navigate('Integrations' as never)
              }
            ]
          );
        }, 2000);
      } else {
        setResult({
          success: false,
          error: callbackResult.error || 'Unknown error occurred',
          oauth_error: callbackResult.oauth_error,
          error_message: callbackResult.error_message
        });
      }

    } catch (error) {
      console.error('🔗 OAuth callback processing error:', error);
      setResult({
        success: false,
        error: error instanceof Error ? error.message : 'Failed to process callback'
      });
    } finally {
      setProcessing(false);
    }
  };

  const parseCallbackUrl = (url: string): Record<string, string> => {
    const params: Record<string, string> = {};
    
    try {
      // Handle different URL formats
      let queryString = '';
      
      if (url.includes('?')) {
        queryString = url.split('?')[1];
      } else if (url.includes('#')) {
        // Some OAuth flows use hash fragments
        queryString = url.split('#')[1];
      }

      if (queryString) {
        const urlParams = new URLSearchParams(queryString);
        urlParams.forEach((value, key) => {
          params[key] = decodeURIComponent(value);
        });
      }

      return params;
    } catch (error) {
      console.error('🔗 Error parsing callback URL:', error);
      return {};
    }
  };

  const extractIntegrationId = (state?: string, routeIntegrationId?: string): string | null => {
    // First try route params
    if (routeIntegrationId) {
      return routeIntegrationId;
    }

    if (!state) return null;
    
    try {
      // Try decoding base64 JSON state (new format)
      try {
        // Add padding if needed for base64 decoding
        const paddedState = state + '==='.slice((state.length + 3) % 4);
        const decoded = atob(paddedState);
        const stateData = JSON.parse(decoded);
        if (stateData.integration_id) {
          return stateData.integration_id;
        }
      } catch {
        // Fall back to other formats
      }
      
      // Legacy formats
      // "integration_123456789" or "123456789" or plain JSON
      if (state.startsWith('integration_')) {
        return state.replace('integration_', '');
      }
      
      // Try parsing as plain JSON (some services allow custom state)
      try {
        const parsed = JSON.parse(state);
        return parsed.integration_id;
      } catch {
        // Assume the state IS the integration ID
        return state;
      }
    } catch {
      return null;
    }
  };

  const getOAuthErrorMessage = (error: string, description?: string): string => {
    const errorMessages: Record<string, string> = {
      'access_denied': 'You declined to authorize the integration. Please try again if you want to connect this service.',
      'invalid_request': 'There was an issue with the authorization request. Please try connecting again.',
      'invalid_client': 'The application credentials are invalid. Please check your configuration.',
      'server_error': 'The service encountered an error. Please try again later.',
      'temporarily_unavailable': 'The service is temporarily unavailable. Please try again later.'
    };
    
    return errorMessages[error] || description || 'Authorization failed';
  };

  if (processing) {
    return (
      <View style={styles.container}>
        <View style={styles.processingContainer}>
          <ActivityIndicator size="large" color="#4A90E2" />
          <Text style={styles.processingTitle}>Processing Authorization...</Text>
          <Text style={styles.processingText}>Please wait while we complete your integration setup.</Text>
        </View>
      </View>
    );
  }

  if (result?.success) {
    return (
      <View style={styles.container}>
        <View style={styles.successContainer}>
          <Text style={styles.successIcon}>✅</Text>
          <Text style={styles.successTitle}>Integration Complete!</Text>
          <Text style={styles.successText}>
            Your {result.service_name} integration has been successfully configured.
          </Text>
          {result.mapping_confidence && (
            <Text style={styles.confidenceText}>
              Mapping confidence: {Math.round(result.mapping_confidence * 100)}%
            </Text>
          )}
          <Text style={styles.redirectText}>Redirecting to your integrations...</Text>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.errorContainer}>
        <Text style={styles.errorIcon}>❌</Text>
        <Text style={styles.errorTitle}>Integration Failed</Text>
        <Text style={styles.errorText}>
          {result?.error_message || result?.error || 'An error occurred during authorization.'}
        </Text>
        <Text 
          style={styles.backButton}
          onPress={() => navigation.navigate('Integrations' as never)}
        >
          Back to Integrations
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  processingContainer: {
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 32,
    maxWidth: 320,
  },
  processingTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  processingText: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 22,
  },
  successContainer: {
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 32,
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#4CAF50',
  },
  successIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  successTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  successText: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 16,
  },
  confidenceText: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 16,
    fontStyle: 'italic',
  },
  redirectText: {
    fontSize: 14,
    color: '#888888',
    textAlign: 'center',
    fontStyle: 'italic',
  },
  errorContainer: {
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    padding: 32,
    maxWidth: 320,
    borderWidth: 1,
    borderColor: '#F44336',
  },
  errorIcon: {
    fontSize: 64,
    marginBottom: 16,
  },
  errorTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 12,
    textAlign: 'center',
  },
  errorText: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 24,
  },
  backButton: {
    backgroundColor: '#4A90E2',
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: 'center',
    overflow: 'hidden',
  },
});

export default OAuthCallbackHandler; 