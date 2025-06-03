import { useState, useEffect, useCallback } from 'react';
import { OutlookEmailService } from './OutlookEmailService';
import { Alert } from 'react-native';

interface OutlookMessage {
  id: string;
  subject: string;
  body: {
    content: string;
    contentType: string;
  };
  from: {
    emailAddress: {
      name: string;
      address: string;
    };
  };
  receivedDateTime: string;
  isRead: boolean;
  importance: string;
  hasAttachments: boolean;
  bodyPreview: string;
}

interface UseOutlookEmailReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  emails: OutlookMessage[];
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshEmails: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useOutlookEmail = (): UseOutlookEmailReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [emails, setEmails] = useState<OutlookMessage[]>([]);

  const outlookEmailService = OutlookEmailService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await outlookEmailService.initialize();
        setIsAuthenticated(outlookEmailService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Outlook Email';
        setError(errorMessage);
        console.error('Error initializing Outlook Email service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await outlookEmailService.initialize();
      setIsAuthenticated(outlookEmailService.isAuthenticated());
      
      console.log('Outlook Email service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Outlook Email';
      setError(errorMessage);
      console.error('Error initializing Outlook Email:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await outlookEmailService.authenticate();
      
      if (success) {
        Alert.alert(
          'Authentication Started',
          'Please complete the authentication in your browser and return to the app.',
          [{ text: 'OK' }]
        );
      } else {
        throw new Error('Failed to start authentication');
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Authentication failed';
      setError(errorMessage);
      Alert.alert('Error', errorMessage);
      console.error('Error during authentication:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await outlookEmailService.signOut();
      setIsAuthenticated(false);
      setEmails([]);
      
      Alert.alert('Success', 'Signed out of Outlook Email');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshEmails = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with Outlook Email');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const unreadEmails = await outlookEmailService.getRecentUnreadEmails(5);
      setEmails(unreadEmails);
      
      console.log('Emails refreshed:', unreadEmails.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch emails';
      setError(errorMessage);
      console.error('Error fetching emails:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh emails when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshEmails();
    }
  }, [isAuthenticated, refreshEmails]);

  return {
    isAuthenticated,
    isLoading,
    error,
    emails,
    authenticate,
    signOut,
    refreshEmails,
    initialize,
  };
}; 