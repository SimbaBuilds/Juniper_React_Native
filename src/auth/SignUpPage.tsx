import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, Alert, Linking } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import SignUpForm from './SignUpForm';
import { useAuth } from './useAuth';
import GoogleLogo from '../shared/components/GoogleLogo';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  SignUp: undefined;
};

type SignUpPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

interface SignUpPageProps {
  navigation: SignUpPageNavigationProp;
}

const SignUpPage: React.FC<SignUpPageProps> = ({ navigation }) => {
  const { register, loginWithGoogle, isLoading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  const handleSignUp = async (email: string, password: string, name: string) => {
    try {
      setError(null);
      await register(email, password, name);
      
      // Show success message
      Alert.alert(
        'Success!',
        '',
        [
          {
            text: 'OK',
            onPress: () => navigation.navigate('Login')
          }
        ]
      );
    } catch (err) {
      console.error('Sign up error:', err);
      let errorMessage = 'Sign up failed. Please try again.';
      
      if (err instanceof Error) {
        // Handle specific Supabase auth errors
        if (err.message.includes('already registered')) {
          errorMessage = 'An account with this email already exists. Please sign in instead.';
        } else if (err.message.includes('password')) {
          errorMessage = 'Password is too weak. Please choose a stronger password.';
        } else if (err.message.includes('email')) {
          errorMessage = 'Please enter a valid email address.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    }
  };

  const handleGoogleSignUp = async () => {
    try {
      setError(null);
      await loginWithGoogle();
    } catch (err) {
      let errorMessage = 'Google sign-up failed. Please try again.';
      
      if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
    }
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const openTermsOfUse = () => {
    Linking.openURL('https://www.hightower-ai.com/terms-of-use');
  };

  const openPrivacyPolicy = () => {
    Linking.openURL('https://www.hightower-ai.com/privacy-policy');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView 
          contentContainerStyle={styles.scrollView}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.header}>
            <Text style={styles.title}>Create Account</Text>
            <Text style={styles.subtitle}>Join us to get started</Text>
          </View>

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          <SignUpForm onSignUp={handleSignUp} isLoading={isLoading} />

          {/* <View style={styles.dividerContainer}>
            <View style={styles.divider} />
            <Text style={styles.dividerText}>OR</Text>
            <View style={styles.divider} />
          </View>

          <TouchableOpacity 
            style={styles.googleButton} 
            onPress={handleGoogleSignUp}
            disabled={isLoading}
          >
            <GoogleLogo size={20} />
            <Text style={styles.googleButtonText}>Sign up with Google</Text>
          </TouchableOpacity> */}

          <View style={styles.footer}>
            <Text style={styles.footerText}>Already have an account? </Text>
            <TouchableOpacity onPress={handleNavigateToLogin}>
              <Text style={styles.footerLink}>Sign In</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.termsContainer}>
            <Text style={styles.termsText}>
              By creating an account, you agree to our{' '}
              <TouchableOpacity onPress={openTermsOfUse} style={styles.linkButton}>
                <Text style={styles.linkText}>Terms of Use</Text>
              </TouchableOpacity>
              {' '}and{' '}
              <TouchableOpacity onPress={openPrivacyPolicy} style={styles.linkButton}>
                <Text style={styles.linkText}>Privacy Policy</Text>
              </TouchableOpacity>
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 16,
  },
  header: {
    marginBottom: 32,
    alignItems: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 12,
    borderRadius: 8,
    marginBottom: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  errorText: {
    color: '#c62828',
    fontSize: 14,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#ddd',
  },
  dividerText: {
    marginHorizontal: 16,
    color: '#999',
    fontSize: 14,
  },
  phoneButton: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    alignItems: 'center',
  },
  phoneButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  googleButton: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  googleButtonText: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 12,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  footerText: {
    color: '#666',
    fontSize: 16,
  },
  footerLink: {
    color: '#3498db',
    fontWeight: '600',
    fontSize: 16,
  },
  termsContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  termsText: {
    fontSize: 12,
    color: '#999',
    textAlign: 'center',
    lineHeight: 16,
  },
  linkButton: {
    display: 'inline-flex',
  },
  linkText: {
    color: '#3498db',
    fontWeight: '600',
    fontSize: 12,
    textDecorationLine: 'underline',
  },
});

export default SignUpPage; 