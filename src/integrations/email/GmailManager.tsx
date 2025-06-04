import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { GmailService } from './GmailService';

interface GmailMessage {
  id: string;
  threadId: string;
  labelIds: string[];
  snippet: string;
  payload: {
    headers: Array<{
      name: string;
      value: string;
    }>;
    parts?: Array<{
      mimeType: string;
      body: {
        data?: string;
      };
    }>;
    body?: {
      data?: string;
    };
  };
  internalDate: string;
}

export const GmailManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [emails, setEmails] = useState<GmailMessage[]>([]);
  const [error, setError] = useState<string | null>(null);

  const gmailService = GmailService.getInstance();

  useEffect(() => {
    initializeService();
    
    const handleAuthChange = (isAuth: boolean) => {
      setIsAuthenticated(isAuth);
      if (isAuth) {
        loadEmails();
      }
    };
    
    gmailService.addAuthCallback(handleAuthChange);
    
    return () => {
      gmailService.removeAuthCallback(handleAuthChange);
    };
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      
      await gmailService.initialize();
      const authenticated = gmailService.isAuthenticated();
      
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        await loadEmails();
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAuthenticate = async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await gmailService.authenticate();
      
      if (success) {
        Alert.alert(
          'Authentication Started',
          'Please complete the authentication in your browser. The app will automatically continue when you return.',
          [{ text: 'OK' }]
        );
      } else {
        throw new Error('Failed to start authentication flow');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      Alert.alert('Authentication Error', errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const loadEmails = async () => {
    try {
      setIsLoading(true);
      
      const unreadEmails = await gmailService.getRecentUnreadEmails(5);
      setEmails(unreadEmails);
      
      setIsAuthenticated(true);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
      
      if (errorMessage.includes('Not authenticated') || errorMessage.includes('401')) {
        setIsAuthenticated(false);
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      
      await gmailService.signOut();
      setIsAuthenticated(false);
      setEmails([]);
      
      Alert.alert('Signed Out', 'You have been signed out of Gmail.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const getEmailSender = (message: GmailMessage): string => {
    const fromHeader = message.payload.headers.find(header => header.name.toLowerCase() === 'from');
    if (!fromHeader) return 'Unknown Sender';
    
    // Extract just the email or name part
    const from = fromHeader.value;
    const match = from.match(/^(.+?)\s*<(.+?)>$/) || from.match(/^(.+)$/);
    return match ? (match[1] || match[0]).trim() : from;
  };

  const getEmailSubject = (message: GmailMessage): string => {
    const subjectHeader = message.payload.headers.find(header => header.name.toLowerCase() === 'subject');
    return subjectHeader?.value || 'No Subject';
  };

  const formatEmailDate = (message: GmailMessage): string => {
    try {
      const date = new Date(parseInt(message.internalDate));
      return date.toLocaleString();
    } catch {
      return 'Unknown Date';
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Gmail Integration</Text>
        <Text style={styles.subtitle}>
          Status: {isAuthenticated ? '✅ Connected' : '❌ Not Connected'}
        </Text>
      </View>

      {error && (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Error: {error}</Text>
        </View>
      )}

      <View style={styles.buttonContainer}>
        {!isAuthenticated ? (
          <TouchableOpacity
            style={[styles.button, styles.primaryButton]}
            onPress={handleAuthenticate}
            disabled={isLoading}
          >
            {isLoading ? (
              <ActivityIndicator color="white" />
            ) : (
              <Text style={styles.buttonText}>Connect to Gmail</Text>
            )}
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loadEmails}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Refresh Emails
                </Text>
              )}
            </TouchableOpacity>
            
            <TouchableOpacity
              style={[styles.button, styles.dangerButton]}
              onPress={handleSignOut}
              disabled={isLoading}
            >
              <Text style={styles.buttonText}>Sign Out</Text>
            </TouchableOpacity>
          </>
        )}
      </View>

      {isAuthenticated && emails.length > 0 && (
        <View style={styles.emailsContainer}>
          <Text style={styles.sectionTitle}>Recent Unread Emails ({emails.length})</Text>
          {emails.map((email) => (
            <View key={email.id} style={styles.emailCard}>
              <Text style={styles.emailSubject}>{getEmailSubject(email)}</Text>
              <Text style={styles.emailSender}>From: {getEmailSender(email)}</Text>
              <Text style={styles.emailDate}>{formatEmailDate(email)}</Text>
              <Text style={styles.emailSnippet} numberOfLines={2}>
                {email.snippet}
              </Text>
            </View>
          ))}
        </View>
      )}

      {isAuthenticated && emails.length === 0 && !isLoading && (
        <View style={styles.noEmailsContainer}>
          <Text style={styles.noEmailsText}>No unread emails found</Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
  },
  subtitle: {
    color: '#B0B0B0',
    fontSize: 14,
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  button: {
    backgroundColor: '#2A2A2A',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#4A90E2',
    borderStyle: 'dashed',
    width: '40%',
  },
  primaryButton: {
    borderColor: '#4CAF50',
  },
  secondaryButton: {
    borderColor: '#007AFF',
  },
  dangerButton: {
    borderColor: '#E74C3C',
  },
  buttonText: {
    color: '#4A90E2',
    fontSize: 16,
    fontWeight: '500',
    marginLeft: 8,
  },
  secondaryButtonText: {
    color: '#007AFF',
  },
  emailsContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  emailCard: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  emailSubject: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  emailSender: {
    color: '#B0B0B0',
    fontSize: 12,
    marginBottom: 2,
  },
  emailDate: {
    color: '#B0B0B0',
    fontSize: 12,
    marginBottom: 4,
  },
  emailSnippet: {
    color: '#B0B0B0',
    fontSize: 12,
    fontStyle: 'italic',
  },
  errorContainer: {
    backgroundColor: '#4D2020',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  errorText: {
    color: '#E74C3C',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 8,
  },
  noEmailsContainer: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  noEmailsText: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
  },
}); 