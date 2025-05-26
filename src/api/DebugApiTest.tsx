import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { supabase } from '../supabase/supabase';
import { useServerApi } from './useServerApi';

const DebugApiTest: React.FC = () => {
  const [authStatus, setAuthStatus] = useState<any>(null);
  const [testResult, setTestResult] = useState<string>('');
  
  const { sendMessage, isLoading, error } = useServerApi({
    onError: (error) => {
      console.error('useServerApi error:', error);
    }
  });

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser();
      const { data: { session } } = await supabase.auth.getSession();
      
      setAuthStatus({
        user: user ? {
          id: user.id,
          email: user.email,
          created_at: user.created_at
        } : null,
        session: session ? {
          access_token_preview: session.access_token?.substring(0, 20) + '...',
          expires_at: session.expires_at,
          token_type: session.token_type
        } : null
      });
    } catch (error) {
      console.error('Error checking auth status:', error);
      setAuthStatus({ error: error.message });
    }
  };

  const testApiCall = async () => {
    setTestResult('Testing API call...');
    try {
      const response = await sendMessage('Hello, this is a test message', []);
      setTestResult(`✅ Success: ${JSON.stringify(response, null, 2)}`);
    } catch (error) {
      setTestResult(`❌ Error: ${error.message}\n\nFull error: ${JSON.stringify(error, null, 2)}`);
    }
  };

  const signOut = async () => {
    try {
      await supabase.auth.signOut();
      setAuthStatus(null);
      setTestResult('Signed out');
    } catch (error) {
      console.error('Sign out error:', error);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>API Debug Tool</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Authentication Status</Text>
        <TouchableOpacity style={styles.button} onPress={checkAuthStatus}>
          <Text style={styles.buttonText}>Refresh Auth Status</Text>
        </TouchableOpacity>
        
        <View style={styles.codeBlock}>
          <Text style={styles.code}>
            {authStatus ? JSON.stringify(authStatus, null, 2) : 'Loading...'}
          </Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>API Test</Text>
        <TouchableOpacity 
          style={[styles.button, isLoading && styles.disabledButton]} 
          onPress={testApiCall}
          disabled={isLoading}
        >
          <Text style={styles.buttonText}>
            {isLoading ? 'Testing...' : 'Test API Call'}
          </Text>
        </TouchableOpacity>
        
        {testResult ? (
          <View style={styles.codeBlock}>
            <Text style={styles.code}>{testResult}</Text>
          </View>
        ) : null}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Actions</Text>
        <TouchableOpacity style={[styles.button, styles.dangerButton]} onPress={signOut}>
          <Text style={styles.buttonText}>Sign Out</Text>
        </TouchableOpacity>
      </View>

      {error && (
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hook Error</Text>
          <View style={styles.errorBlock}>
            <Text style={styles.errorText}>{error.message}</Text>
          </View>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#333',
  },
  section: {
    marginBottom: 20,
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 10,
  },
  disabledButton: {
    backgroundColor: '#ccc',
  },
  dangerButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  codeBlock: {
    backgroundColor: '#f8f9fa',
    padding: 10,
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#007AFF',
  },
  code: {
    fontFamily: 'monospace',
    fontSize: 12,
    color: '#333',
  },
  errorBlock: {
    backgroundColor: '#ffebee',
    padding: 10,
    borderRadius: 5,
    borderLeftWidth: 3,
    borderLeftColor: '#f44336',
  },
  errorText: {
    color: '#d32f2f',
    fontSize: 14,
  },
});

export default DebugApiTest; 