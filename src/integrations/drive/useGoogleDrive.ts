import { useState, useEffect, useCallback } from 'react';
import { GoogleDriveService } from './GoogleDriveService';
import { Alert } from 'react-native';

interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  size?: string;
  modifiedTime: string;
  createdTime: string;
  webViewLink: string;
  iconLink?: string;
  thumbnailLink?: string;
  owners: Array<{
    displayName: string;
    emailAddress: string;
  }>;
  lastModifyingUser: {
    displayName: string;
    emailAddress: string;
  };
}

interface UseGoogleDriveReturn {
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
  files: DriveFile[];
  storageInfo: any;
  authenticate: () => Promise<void>;
  signOut: () => Promise<void>;
  refreshFiles: () => Promise<void>;
  initialize: () => Promise<void>;
}

export const useGoogleDrive = (): UseGoogleDriveReturn => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [storageInfo, setStorageInfo] = useState<any>(null);

  const driveService = GoogleDriveService.getInstance();

  useEffect(() => {
    const initializeService = async () => {
      try {
        await driveService.initialize();
        setIsAuthenticated(driveService.isAuthenticated());
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Google Drive';
        setError(errorMessage);
        console.error('Error initializing Google Drive service:', err);
      }
    };

    initializeService();
  }, []);

  const initialize = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      await driveService.initialize();
      setIsAuthenticated(driveService.isAuthenticated());
      
      console.log('Google Drive service initialized');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to initialize Google Drive';
      setError(errorMessage);
      console.error('Error initializing Google Drive:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const authenticate = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      
      const success = await driveService.authenticate();
      
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
      
      await driveService.signOut();
      setIsAuthenticated(false);
      setFiles([]);
      setStorageInfo(null);
      
      Alert.alert('Success', 'Signed out of Google Drive');
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Sign out failed';
      setError(errorMessage);
      console.error('Error during sign out:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const refreshFiles = useCallback(async () => {
    if (!isAuthenticated) {
      setError('Not authenticated with Google Drive');
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      
      const recentFiles = await driveService.getRecentFiles(10);
      setFiles(recentFiles);
      
      const storage = await driveService.getStorageInfo();
      setStorageInfo(storage);
      
      console.log('Files refreshed:', recentFiles.length);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Failed to fetch files';
      setError(errorMessage);
      console.error('Error fetching files:', err);
    } finally {
      setIsLoading(false);
    }
  }, [isAuthenticated]);

  // Auto-refresh files when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      refreshFiles();
    }
  }, [isAuthenticated, refreshFiles]);

  return {
    isAuthenticated,
    isLoading,
    error,
    files,
    storageInfo,
    authenticate,
    signOut,
    refreshFiles,
    initialize,
  };
}; 