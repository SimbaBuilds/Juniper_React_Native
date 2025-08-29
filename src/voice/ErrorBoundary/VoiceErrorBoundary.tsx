import React, { Component, ErrorInfo, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import ErrorReportingService from '../../error/ErrorReportingService';

interface Props {
  children: ReactNode;
  onCrashRecovery?: (crashType: string) => void;
  enableAutoRecovery?: boolean;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorCount: number;
  crashType: 'voice' | 'audio' | 'permission' | 'network' | 'locale' | 'unknown';
  lastCrashTime: number;
  isRecovering: boolean;
}

export class VoiceErrorBoundary extends Component<Props, State> {
  private recoveryTimeout: NodeJS.Timeout | null = null;
  private static readonly AUTO_RECOVERY_DELAY = 2000;
  private static readonly MAX_AUTO_RECOVERIES = 2;

  public state: State = {
    hasError: false,
    error: null,
    errorCount: 0,
    crashType: 'unknown',
    lastCrashTime: 0,
    isRecovering: false,
  };

  public static getDerivedStateFromError(error: Error): Partial<State> {
    const crashType = VoiceErrorBoundary.detectCrashType(error);
    return { 
      hasError: true, 
      error, 
      crashType,
      lastCrashTime: Date.now(),
    };
  }

  private static detectCrashType(error: Error): State['crashType'] {
    const message = error.message.toLowerCase();
    const stack = error.stack?.toLowerCase() || '';

    if (message.includes('locale') || stack.includes('locale') || stack.includes('icucore')) {
      return 'locale';
    }
    
    if (message.includes('audio') || message.includes('microphone') || message.includes('recording')) {
      return 'audio';
    }
    
    if (message.includes('permission') || message.includes('authorization')) {
      return 'permission';
    }
    
    if (message.includes('network') || message.includes('connection') || message.includes('fetch')) {
      return 'network';
    }

    if (message.includes('voice') || message.includes('speech') || message.includes('recognition')) {
      return 'voice';
    }
    
    return 'unknown';
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const crashType = VoiceErrorBoundary.detectCrashType(error);
    
    console.error('🎤 Voice Error Caught:', {
      error: error.message,
      crashType,
      stack: error.stack,
      componentStack: errorInfo.componentStack,
      errorCount: this.state.errorCount + 1,
      deviceInfo: {
        platform: Platform.OS,
        version: Platform.Version,
      }
    });
    
    // Increment error count and update crash type
    this.setState(prevState => ({
      errorCount: prevState.errorCount + 1,
      crashType,
    }));

    // Report to error service
    ErrorReportingService.getInstance().reportError(
      error,
      `VoiceErrorBoundary:${crashType}`,
      {
        ...errorInfo,
        crashType,
        errorCount: this.state.errorCount + 1,
        isVoiceRelated: true,
      }
    );

    // Trigger recovery callback
    this.props.onCrashRecovery?.(crashType);

    // Auto-recovery for certain crash types
    if (this.shouldAutoRecover(crashType)) {
      this.scheduleAutoRecovery();
    }
  }

  private shouldAutoRecover(crashType: State['crashType']): boolean {
    return (
      this.props.enableAutoRecovery !== false &&
      this.state.errorCount < VoiceErrorBoundary.MAX_AUTO_RECOVERIES &&
      ['network', 'audio', 'voice'].includes(crashType)
    );
  }

  private scheduleAutoRecovery = () => {
    this.setState({ isRecovering: true });
    
    this.recoveryTimeout = setTimeout(() => {
      console.log('🔄 Auto-recovery triggered for voice error');
      this.setState({
        hasError: false,
        error: null,
        isRecovering: false,
      });
    }, VoiceErrorBoundary.AUTO_RECOVERY_DELAY);
  };

  private handleRetry = () => {
    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
      this.recoveryTimeout = null;
    }
    
    console.log('🔄 Manual retry triggered for voice assistant');
    this.setState({ 
      hasError: false, 
      error: null,
      isRecovering: false,
    });
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
            if (this.recoveryTimeout) {
              clearTimeout(this.recoveryTimeout);
              this.recoveryTimeout = null;
            }
            
            console.log('🔄 Resetting voice assistant...');
            this.setState({ 
              hasError: false, 
              error: null, 
              errorCount: 0,
              crashType: 'unknown',
              lastCrashTime: 0,
              isRecovering: false,
            });
          }
        }
      ]
    );
  };

  private getErrorIcon = () => {
    if (this.state.isRecovering) return 'refresh-outline';
    
    const iconMap = {
      audio: 'mic-off-outline',
      permission: 'shield-checkmark-outline',
      network: 'wifi-outline',
      voice: 'volume-mute-outline',
      locale: 'language-outline',
      unknown: 'warning-outline'
    };
    
    return iconMap[this.state.crashType] || 'warning-outline';
  };

  private getErrorTitle = () => {
    if (this.state.isRecovering) return 'Recovering...';
    
    const titleMap = {
      audio: 'Audio System Error',
      permission: 'Permission Required',
      network: 'Connection Error',
      voice: 'Voice Recognition Error',
      locale: 'Language Processing Error',
      unknown: 'Voice Assistant Error'
    };
    
    return titleMap[this.state.crashType] || 'Voice Assistant Error';
  };

  private getErrorSuggestion = () => {
    if (this.state.isRecovering) {
      return 'The voice assistant is attempting to recover automatically...';
    }
    
    const suggestionMap = {
      audio: 'Check your microphone permissions and device audio settings.',
      permission: 'Grant microphone and speech recognition permissions in device settings.',
      network: 'Check your internet connection and try again.',
      voice: 'Try speaking more clearly or check your microphone.',
      locale: 'This may be related to your device\'s language settings. Try restarting the app.',
      unknown: 'Please try again or contact support if the problem persists.'
    };
    
    return suggestionMap[this.state.crashType] || suggestionMap.unknown;
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
            
            {this.state.errorCount > 2 && !this.state.isRecovering && (
              <Text style={styles.warning}>
                This error has occurred {this.state.errorCount} times. Consider resetting the voice assistant.
              </Text>
            )}

            {this.state.crashType === 'locale' && (
              <Text style={styles.localeWarning}>
                Language processing error detected. This may be related to your device's region settings.
              </Text>
            )}
            
            {!this.state.isRecovering && (
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
            )}
          </View>
        </View>
      );
    }

    return this.props.children;
  }

  public componentWillUnmount() {
    if (this.recoveryTimeout) {
      clearTimeout(this.recoveryTimeout);
    }
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
  localeWarning: {
    color: '#FFA726',
    fontSize: 12,
    textAlign: 'center',
    marginTop: 10,
    fontStyle: 'italic',
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