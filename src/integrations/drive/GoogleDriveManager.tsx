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
import { GoogleDriveService } from './GoogleDriveService';

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

export const GoogleDriveManager: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [files, setFiles] = useState<DriveFile[]>([]);
  const [storageInfo, setStorageInfo] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const driveService = GoogleDriveService.getInstance();

  useEffect(() => {
    initializeService();
    
    const handleAuthChange = (isAuth: boolean) => {
      setIsAuthenticated(isAuth);
      if (isAuth) {
        loadFiles();
        loadStorageInfo();
      }
    };
    
    driveService.addAuthCallback(handleAuthChange);
    
    return () => {
      driveService.removeAuthCallback(handleAuthChange);
    };
  }, []);

  const initializeService = async () => {
    try {
      setIsLoading(true);
      
      await driveService.initialize();
      const authenticated = driveService.isAuthenticated();
      
      setIsAuthenticated(authenticated);
      
      if (authenticated) {
        await loadFiles();
        await loadStorageInfo();
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
      
      const success = await driveService.authenticate();
      
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

  const loadFiles = async () => {
    try {
      setIsLoading(true);
      
      const recentFiles = await driveService.getRecentFiles(10);
      setFiles(recentFiles);
      
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

  const loadStorageInfo = async () => {
    try {
      const storage = await driveService.getStorageInfo();
      setStorageInfo(storage);
    } catch (error) {
      console.error('Error loading storage info:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      setIsLoading(true);
      
      await driveService.signOut();
      setIsAuthenticated(false);
      setFiles([]);
      setStorageInfo(null);
      
      Alert.alert('Signed Out', 'You have been signed out of Google Drive.');
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';
      setError(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  const formatFileSize = (size?: string): string => {
    if (!size) return 'Unknown size';
    
    const bytes = parseInt(size);
    if (isNaN(bytes)) return 'Unknown size';
    
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let unitIndex = 0;
    let fileSize = bytes;
    
    while (fileSize >= 1024 && unitIndex < units.length - 1) {
      fileSize /= 1024;
      unitIndex++;
    }
    
    return `${fileSize.toFixed(1)} ${units[unitIndex]}`;
  };

  const formatDate = (dateString: string): string => {
    try {
      const date = new Date(dateString);
      return date.toLocaleDateString();
    } catch {
      return 'Unknown date';
    }
  };

  const getFileTypeIcon = (mimeType: string): string => {
    if (mimeType.includes('folder')) return '📁';
    if (mimeType.includes('document')) return '📄';
    if (mimeType.includes('spreadsheet')) return '📊';
    if (mimeType.includes('presentation')) return '📈';
    if (mimeType.includes('image')) return '🖼️';
    if (mimeType.includes('video')) return '🎥';
    if (mimeType.includes('audio')) return '🎵';
    if (mimeType.includes('pdf')) return '📕';
    return '📄';
  };

  const formatStorageUsage = (storage: any): string => {
    if (!storage) return 'Storage info unavailable';
    
    const usage = parseInt(storage.usage || '0');
    const limit = parseInt(storage.limit || '0');
    
    if (limit === 0) return 'Unlimited storage';
    
    const usageFormatted = formatFileSize(storage.usage);
    const limitFormatted = formatFileSize(storage.limit);
    const percentage = ((usage / limit) * 100).toFixed(1);
    
    return `${usageFormatted} / ${limitFormatted} (${percentage}% used)`;
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Google Drive Integration</Text>
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
              <Text style={styles.buttonText}>Connect to Google Drive</Text>
            )}
          </TouchableOpacity>
        ) : (
          <>
            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loadFiles}
              disabled={isLoading}
            >
              {isLoading ? (
                <ActivityIndicator color="#007AFF" />
              ) : (
                <Text style={[styles.buttonText, styles.secondaryButtonText]}>
                  Refresh Files
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

      {isAuthenticated && storageInfo && (
        <View style={styles.storageContainer}>
          <Text style={styles.storageTitle}>Storage Usage</Text>
          <Text style={styles.storageText}>{formatStorageUsage(storageInfo)}</Text>
        </View>
      )}

      {isAuthenticated && files.length > 0 && (
        <View style={styles.filesContainer}>
          <Text style={styles.sectionTitle}>Recent Files ({files.length})</Text>
          {files.map((file) => (
            <View key={file.id} style={styles.fileCard}>
              <View style={styles.fileHeader}>
                <Text style={styles.fileIcon}>{getFileTypeIcon(file.mimeType)}</Text>
                <View style={styles.fileInfo}>
                  <Text style={styles.fileName} numberOfLines={1}>{file.name}</Text>
                  <Text style={styles.fileDetails}>
                    {formatFileSize(file.size)} • {formatDate(file.modifiedTime)}
                  </Text>
                  <Text style={styles.fileOwner}>
                    Owner: {file.owners[0]?.displayName || 'Unknown'}
                  </Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      )}

      {isAuthenticated && files.length === 0 && !isLoading && (
        <View style={styles.noFilesContainer}>
          <Text style={styles.noFilesText}>No files found</Text>
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
  storageContainer: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 16,
  },
  storageTitle: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 4,
  },
  storageText: {
    color: '#B0B0B0',
    fontSize: 12,
  },
  filesContainer: {
    marginTop: 8,
  },
  sectionTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  fileCard: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  fileHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  fileIcon: {
    fontSize: 20,
    marginRight: 12,
    marginTop: 2,
  },
  fileInfo: {
    flex: 1,
  },
  fileName: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 2,
  },
  fileDetails: {
    color: '#B0B0B0',
    fontSize: 12,
    marginBottom: 2,
  },
  fileOwner: {
    color: '#B0B0B0',
    fontSize: 11,
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
  noFilesContainer: {
    backgroundColor: '#2A2A2A',
    padding: 12,
    borderRadius: 6,
    marginTop: 8,
    alignItems: 'center',
  },
  noFilesText: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
  },
}); 