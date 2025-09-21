import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  ScrollView,
  StyleSheet,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { IntegrationService } from '../IntegrationService';
import AppleHealthKitAuthService from '../auth/services/AppleHealthKitAuthService';
import AppleHealthKitDataService from '../data/AppleHealthKitDataService';
import { useAuth } from '../../auth/AuthContext';

export const TestHealthKit: React.FC = () => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [healthData, setHealthData] = useState<any>(null);
  const [availableTypes, setAvailableTypes] = useState<string[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<any>(null);

  const integrationService = IntegrationService.getInstance();
  const authService = AppleHealthKitAuthService.getInstance();
  const dataService = AppleHealthKitDataService.getInstance();

  useEffect(() => {
    checkConnectionStatus();
  }, []);

  const checkConnectionStatus = async () => {
    if (Platform.OS !== 'ios' || !user?.id) return;

    try {
      setIsLoading(true);
      const status = await integrationService.checkHealthKitStatus(user.id);
      setConnectionStatus(status);
    } catch (error) {
      console.error('Error checking status:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const requestPermissions = async () => {
    if (Platform.OS !== 'ios') {
      Alert.alert('iOS Only', 'HealthKit is only available on iOS devices');
      return;
    }

    try {
      setIsLoading(true);
      
      // This would typically be called through the IntegrationService
      // when user connects Apple Health from the integrations screen
      const result = await authService.authenticate('test-integration-id');
      
      Alert.alert('Success', 'HealthKit permissions granted!');
      await checkConnectionStatus();
      await fetchAvailableTypes();
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchAvailableTypes = async () => {
    if (!user?.id) return;

    try {
      setIsLoading(true);
      const types = await integrationService.getAvailableHealthDataTypes(user.id);
      setAvailableTypes(types);
    } catch (error) {
      console.error('Error fetching available types:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchHealthSummary = async () => {
    if (!user?.id) return;

    try {
      setIsLoading(true);
      const summary = await integrationService.getHealthSummary(user.id, 7);
      setHealthData(summary);
      Alert.alert('Success', 'Health data fetched successfully!');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchSpecificData = async (dataType: string) => {
    if (!user?.id) return;

    try {
      setIsLoading(true);
      const data = await integrationService.getHealthKitData(user.id, dataType, {
        startDate: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
        endDate: new Date(),
      });
      
      Alert.alert(
        `${dataType} Data`,
        JSON.stringify(data, null, 2).substring(0, 500)
      );
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const exportData = async () => {
    if (!user?.id) return;

    try {
      setIsLoading(true);
      const exportedData = await integrationService.exportHealthData(user.id, {
        startDate: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
        endDate: new Date(),
      });
      
      console.log('Exported data:', exportedData);
      Alert.alert('Success', 'Health data exported successfully! Check console for details.');
    } catch (error: any) {
      Alert.alert('Error', error.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (Platform.OS !== 'ios') {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>HealthKit Test</Text>
        <Text style={styles.warning}>
          HealthKit is only available on iOS devices.
        </Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>HealthKit Integration Test</Text>

      {connectionStatus && (
        <View style={styles.statusContainer}>
          <Text style={styles.statusTitle}>Connection Status:</Text>
          <Text>Available: {connectionStatus.available ? '✅' : '❌'}</Text>
          <Text>Authorized: {connectionStatus.authorized ? '✅' : '❌'}</Text>
          <Text>Integration Active: {connectionStatus.integrationActive ? '✅' : '❌'}</Text>
        </View>
      )}

      {isLoading && <ActivityIndicator size="large" color="#0000ff" />}

      <View style={styles.buttonContainer}>
        <Button
          title="Request HealthKit Permissions"
          onPress={requestPermissions}
          disabled={isLoading}
        />

        <Button
          title="Check Connection Status"
          onPress={checkConnectionStatus}
          disabled={isLoading}
        />

        <Button
          title="Fetch Available Data Types"
          onPress={fetchAvailableTypes}
          disabled={isLoading || !connectionStatus?.authorized}
        />

        <Button
          title="Fetch Health Summary (7 days)"
          onPress={fetchHealthSummary}
          disabled={isLoading || !connectionStatus?.authorized}
        />

        <Button
          title="Fetch Steps Data"
          onPress={() => fetchSpecificData('steps')}
          disabled={isLoading || !connectionStatus?.authorized}
        />

        <Button
          title="Fetch Heart Rate Data"
          onPress={() => fetchSpecificData('heartrate')}
          disabled={isLoading || !connectionStatus?.authorized}
        />

        <Button
          title="Fetch Sleep Data"
          onPress={() => fetchSpecificData('sleep')}
          disabled={isLoading || !connectionStatus?.authorized}
        />

        <Button
          title="Export Health Data (30 days)"
          onPress={exportData}
          disabled={isLoading || !connectionStatus?.authorized}
        />
      </View>

      {availableTypes.length > 0 && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Available Data Types:</Text>
          {availableTypes.map((type, index) => (
            <Text key={index}>• {type}</Text>
          ))}
        </View>
      )}

      {healthData && (
        <View style={styles.dataContainer}>
          <Text style={styles.dataTitle}>Health Summary:</Text>
          <Text style={styles.dataText}>
            {JSON.stringify(healthData, null, 2)}
          </Text>
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  warning: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
  statusContainer: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  statusTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  buttonContainer: {
    gap: 10,
  },
  dataContainer: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  dataTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  dataText: {
    fontSize: 12,
    fontFamily: 'monospace',
  },
});

export default TestHealthKit;