import React, { useState } from 'react';
import { View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, TouchableOpacity, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import PhoneAuthForm from './PhoneAuthForm';
import OtpVerificationForm from './OtpVerificationForm';
import { useAuth } from './useAuth';

type RootStackParamList = {
  Home: undefined;
  Settings: undefined;
  Login: undefined;
  SignUp: undefined;
  PhoneSignUp: undefined;
  PhoneLogin: undefined;
};

type PhoneSignUpPageNavigationProp = NativeStackNavigationProp<RootStackParamList, 'PhoneSignUp'>;

interface PhoneSignUpPageProps {
  navigation: PhoneSignUpPageNavigationProp;
}

type AuthStep = 'phone' | 'otp';

const PhoneSignUpPage: React.FC<PhoneSignUpPageProps> = ({ navigation }) => {
  const { signUpWithPhone, verifyOtp, isLoading } = useAuth();
  const [step, setStep] = useState<AuthStep>('phone');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handlePhoneSubmit = async (phone: string) => {
    try {
      setError(null);
      setPhoneNumber(phone);
      
      await signUpWithPhone(phone);
      setStep('otp');
    } catch (err) {
      console.error('Phone signup error:', err);
      let errorMessage = 'Failed to send verification code. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('Invalid phone number')) {
          errorMessage = 'Please enter a valid phone number with country code.';
        } else if (err.message.includes('SMS sending failed')) {
          errorMessage = 'Unable to send SMS. Please check your phone number and try again.';
        } else if (err.message.includes('Rate limit')) {
          errorMessage = 'Too many requests. Please wait a moment before trying again.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    }
  };

  const handleOtpVerify = async (otp: string) => {
    try {
      setError(null);
      
      await verifyOtp(phoneNumber, otp, 'sms');
      // User will be automatically signed up and navigated by the auth state change
    } catch (err) {
      console.error('OTP verification error:', err);
      let errorMessage = 'Invalid verification code. Please try again.';
      
      if (err instanceof Error) {
        if (err.message.includes('expired')) {
          errorMessage = 'Verification code has expired. Please request a new one.';
        } else if (err.message.includes('invalid')) {
          errorMessage = 'Invalid verification code. Please check and try again.';
        } else if (err.message.includes('too many')) {
          errorMessage = 'Too many failed attempts. Please request a new code.';
        } else {
          errorMessage = err.message;
        }
      }
      
      setError(errorMessage);
    }
  };

  const handleResendOtp = async () => {
    try {
      setError(null);
      await signUpWithPhone(phoneNumber);
    } catch (err) {
      console.error('Resend OTP error:', err);
      setError('Failed to resend verification code. Please try again.');
    }
  };

  const handleBackToPhone = () => {
    setStep('phone');
    setError(null);
  };

  const handleNavigateToLogin = () => {
    navigation.navigate('Login');
  };

  const handleNavigateToEmailSignup = () => {
    navigation.navigate('SignUp');
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
            <Text style={styles.title}>
              {step === 'phone' ? 'Sign Up with Phone' : 'Verify Phone Number'}
            </Text>
          </View>

          {step === 'phone' ? (
            <PhoneAuthForm
              onSubmit={handlePhoneSubmit}
              isLoading={isLoading}
              title="Create account with phone number"
              buttonText="Send Verification Code"
            />
          ) : (
            <View style={styles.otpContainer}>
              <TouchableOpacity onPress={handleBackToPhone} style={styles.backButton}>
                <Text style={styles.backButtonText}>← Change Phone Number</Text>
              </TouchableOpacity>
              
              <OtpVerificationForm
                phoneNumber={phoneNumber}
                onVerify={handleOtpVerify}
                onResend={handleResendOtp}
                isLoading={isLoading}
                error={error}
              />
            </View>
          )}

          {step === 'phone' && error && (
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{error}</Text>
            </View>
          )}

          <View style={styles.footer}>
            {step === 'phone' && (
              <>
                <View style={styles.dividerContainer}>
                  <View style={styles.divider} />
                  <Text style={styles.dividerText}>OR</Text>
                  <View style={styles.divider} />
                </View>

                <TouchableOpacity onPress={handleNavigateToEmailSignup} style={styles.alternativeButton}>
                  <Text style={styles.alternativeButtonText}>Sign up with Email</Text>
                </TouchableOpacity>
              </>
            )}

            <View style={styles.loginContainer}>
              <Text style={styles.footerText}>Already have an account? </Text>
              <TouchableOpacity onPress={handleNavigateToLogin}>
                <Text style={styles.footerLink}>Sign In</Text>
              </TouchableOpacity>
            </View>
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
    textAlign: 'center',
  },
  otpContainer: {
    width: '100%',
  },
  backButton: {
    marginBottom: 16,
    paddingVertical: 8,
  },
  backButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '500',
  },
  errorContainer: {
    backgroundColor: '#ffebee',
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    borderLeftWidth: 4,
    borderLeftColor: '#e74c3c',
  },
  errorText: {
    color: '#c62828',
    fontSize: 14,
    textAlign: 'center',
  },
  footer: {
    marginTop: 32,
    alignItems: 'center',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 24,
    width: '100%',
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
  alternativeButton: {
    borderWidth: 1,
    borderColor: '#3498db',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 16,
    width: '100%',
    alignItems: 'center',
  },
  alternativeButtonText: {
    color: '#3498db',
    fontSize: 16,
    fontWeight: '600',
  },
  loginContainer: {
    flexDirection: 'row',
    marginTop: 16,
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
});

export default PhoneSignUpPage; 