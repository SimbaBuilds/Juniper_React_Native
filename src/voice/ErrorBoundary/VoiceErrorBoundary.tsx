import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
}

export class VoiceErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null,
    errorCount: 0,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error, errorCount: 0 };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Voice error:', error, errorInfo);
    
    // Increment error count
    this.setState(prevState => ({
      errorCount: prevState.errorCount + 1
    }));
    
    // Log error details for debugging
    console.error('Voice Error Details:', {
      message: error.message,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorCount: this.state.errorCount + 1
    });
  }

  private handleRetry = () => {
    console.log('🔄 Retrying voice assistant after error...');
    this.setState({ hasError: false, error: null });
  };

  private handleReset = () => {
    Alert.alert(
      'Reset Voice Assistant',
      'This will completely reset the voice assistant. Are you sure?',
      [
        { text: 'Cancel', style: 'cancel' },
        { 
          text: 'Reset', 
          style: 'destructive',
          onPress: () => {
            console.log('🔄 Resetting voice assistant...');
            this.setState({ 
              hasError: false, 
              error: null, 
              errorCount: 0 
            });
          }
        }
      ]
    );
  };

  private getErrorIcon = () => {
    const { error } = this.state;
    if (!error) return 'warning-outline';
    
    const message = error.message.toLowerCase();
    if (message.includes('audio') || message.includes('microphone')) {
      return 'mic-off-outline';
    } else if (message.includes('network') || message.includes('connection')) {
      return 'wifi-outline';
    } else if (message.includes('permission')) {
      return 'shield-checkmark-outline';
    }
    return 'warning-outline';
  };

  private getErrorTitle = () => {
    const { error } = this.state;
    if (!error) return 'Voice Assistant Error';
    
    const message = error.message.toLowerCase();
    if (message.includes('audio') || message.includes('microphone')) {
      return 'Audio Error';
    } else if (message.includes('network') || message.includes('connection')) {
      return 'Connection Error';
    } else if (message.includes('permission')) {
      return 'Permission Error';
    }
    return 'Voice Assistant Error';
  };

  private getErrorSuggestion = () => {
    const { error } = this.state;
    if (!error) return 'Please try again or contact support if the problem persists.';
    
    const message = error.message.toLowerCase();
    if (message.includes('audio') || message.includes('microphone')) {
      return 'Check your microphone permissions and try again.';
    } else if (message.includes('network') || message.includes('connection')) {
      return 'Check your internet connection and try again.';
    } else if (message.includes('permission')) {
      return 'Grant microphone permissions in your device settings.';
    }
    return 'Please try again or contact support if the problem persists.';
  };

  public render() {
    if (this.state.hasError) {
      return (
        <View style={styles.container}>
          <View style={styles.errorContent}>
            <Ionicons 
              name={this.getErrorIcon()} 
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
            
            {this.state.errorCount > 2 && (
              <Text style={styles.warning}>
                This error has occurred {this.state.errorCount} times. Consider resetting the voice assistant.
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
                  style={styles.resetButton} 
                  onPress={this.handleReset}
                  activeOpacity={0.7}
                >
                  <Text style={styles.resetButtonText}>Reset</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        </View>
      );
    }

    return this.props.children;
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    alignItems: 'center',
  },
  errorContent: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 8,
  },
  message: {
    color: '#B0B0B0',
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 16,
  },
  suggestion: {
    color: '#888888',
    fontSize: 13,
    textAlign: 'center',
    marginBottom: 20,
  },
  warning: {
    color: '#FF6B6B',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  retryButton: {
    backgroundColor: '#2196F3',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
  resetButton: {
    backgroundColor: '#FF9800',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 24,
  },
  resetButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '500',
  },
}); 