import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, AppState } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ErrorReportingService from './ErrorReportingService';

interface Props {
  children: ReactNode;
  fallbackComponent?: React.ComponentType<{ error: Error; retry: () => void }>;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
  lastErrorTime: number;
}

export class AppErrorBoundary extends Component<Props, State> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  public state: State = {
    hasError: false,
    error: null,
    errorCount: 0,
    lastErrorTime: 0,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    return { 
      hasError: true, 
      error,
      lastErrorTime: Date.now()
    };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('🚨 App Error Boundary Caught Error:', error, errorInfo);
    
    // Prevent cascade crashes with defensive setState
    try {
      this.setState(prevState => ({
        errorCount: prevState.errorCount + 1,
        lastErrorTime: Date.now()
      }));
    } catch (setStateError) {
      console.error('❌ Error in setState during error handling:', setStateError);
    }

    // Report error safely without throwing
    try {
      ErrorReportingService.getInstance().reportError(
        error,
        'AppErrorBoundary',
        {
          componentStack: errorInfo.componentStack,
          errorCount: this.state.errorCount + 1,
          appState: AppState.currentState,
          timeSinceLastError: Date.now() - this.state.lastErrorTime,
          errorMessage: error.message,
          errorStack: error.stack
        }
      ).catch(reportError => {
        console.error('❌ Error reporting failed in AppErrorBoundary:', reportError);
      });
    } catch (reportingError) {
      console.error('❌ Critical error in error reporting:', reportingError);
    }

    // Show user-friendly error with delay to prevent cascade
    const showErrorAlert = () => {
      try {
        if (this.state.errorCount >= 3) {
          Alert.alert(
            'Critical Error',
            'The app has encountered multiple errors. Please restart the app or contact support if the problem persists.',
            [
              {
                text: 'Restart App',
                onPress: () => {
                  try {
                    this.handleForceRestart();
                  } catch (restartError) {
                    console.error('❌ Error during force restart:', restartError);
                  }
                },
                style: 'destructive'
              },
              {
                text: 'Try Again',
                onPress: () => {
                  try {
                    this.handleRetry();
                  } catch (retryError) {
                    console.error('❌ Error during retry:', retryError);
                  }
                }
              }
            ],
            { cancelable: false }
          );
        }
      } catch (alertError) {
        console.error('❌ Error showing alert:', alertError);
      }
    };

    // Delay alert to prevent immediate cascade
    setTimeout(showErrorAlert, 100);
  }

  private handleRetry = () => {
    console.log('🔄 App Error Boundary: Retrying after error...');
    
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }

    this.retryTimeoutId = setTimeout(() => {
      this.setState({ 
        hasError: false, 
        error: null 
      });
    }, 1000);
  };

  private handleForceRestart = () => {
    console.log('🔄 App Error Boundary: Force restarting app...');
    
    this.setState({ 
      hasError: false, 
      error: null, 
      errorCount: 0,
      lastErrorTime: 0
    });

    ErrorReportingService.getInstance().clearErrorQueue();
  };

  private getErrorTitle = (): string => {
    const { error } = this.state;
    if (!error) return 'Application Error';
    
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('connection')) {
      return 'Connection Error';
    } else if (message.includes('permission')) {
      return 'Permission Error';
    } else if (message.includes('memory') || message.includes('allocation')) {
      return 'Memory Error';
    }
    return 'Application Error';
  };

  private getErrorSuggestion = (): string => {
    const { error, errorCount } = this.state;
    
    if (errorCount >= 3) {
      return 'Multiple errors detected. Consider restarting the app.';
    }
    
    if (!error) return 'Please try again or restart the app if the problem persists.';
    
    const message = error.message.toLowerCase();
    if (message.includes('network') || message.includes('connection')) {
      return 'Check your internet connection and try again.';
    } else if (message.includes('permission')) {
      return 'Grant necessary permissions in your device settings.';
    } else if (message.includes('memory')) {
      return 'Close other apps to free up memory and try again.';
    }
    return 'The app encountered an unexpected error. Please try again.';
  };

  public render() {
    if (this.state.hasError) {
      if (this.props.fallbackComponent) {
        const FallbackComponent = this.props.fallbackComponent;
        return <FallbackComponent error={this.state.error!} retry={this.handleRetry} />;
      }

      return (
        <View style={styles.container}>
          <View style={styles.errorContent}>
            <Ionicons 
              name="warning-outline" 
              size={64} 
              color="#FF6B6B" 
            />
            
            <Text style={styles.title}>{this.getErrorTitle()}</Text>
            
            <Text style={styles.message}>
              {this.state.error?.message || 'An unexpected error occurred'}
            </Text>
            
            <Text style={styles.suggestion}>
              {this.getErrorSuggestion()}
            </Text>
            
            {this.state.errorCount > 1 && (
              <Text style={styles.warning}>
                This error has occurred {this.state.errorCount} times.
              </Text>
            )}
            
            <View style={styles.buttonContainer}>
              <TouchableOpacity 
                style={styles.retryButton} 
                onPress={this.handleRetry}
                activeOpacity={0.7}
              >
                <Text style={styles.retryButtonText}>Try Again</Text>
              </TouchableOpacity>
              
              {this.state.errorCount > 1 && (
                <TouchableOpacity 
                  style={styles.restartButton} 
                  onPress={this.handleForceRestart}
                  activeOpacity={0.7}
                >
                  <Text style={styles.restartButtonText}>Restart App</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      );
    }

    return this.props.children;
  }

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  errorContent: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#1E1E1E',
    borderRadius: 12,
    maxWidth: 350,
    width: '100%',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  message: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 20,
  },
  suggestion: {
    color: '#888888',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 18,
  },
  warning: {
    color: '#FF6B6B',
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    flexWrap: 'wrap',
    gap: 12,
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    minWidth: 100,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  restartButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
    minWidth: 100,
  },
  restartButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
});