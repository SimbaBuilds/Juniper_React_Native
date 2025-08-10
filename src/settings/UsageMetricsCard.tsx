import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { supabase } from '../supabase/supabase';
import { Service, UserProfile } from '../supabase/tables';
import { colors } from '../shared/theme/colors';

interface UsageMetric {
  label: string;
  value: number;
  icon: string;
  serviceName?: string;
}

interface UsageMetricsCardProps {
  userProfile: UserProfile | null;
}

export const UsageMetricsCard: React.FC<UsageMetricsCardProps> = ({ userProfile }) => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .in('service_name', ['Perplexity', 'Textbelt', 'XAI Live Search']);

      if (error) {
        console.error('Error fetching services:', error);
      } else {
        setServices(data || []);
      }
    } catch (error) {
      console.error('Error fetching services:', error);
    } finally {
      setLoading(false);
    }
  };

  const isServicePublic = (serviceName: string): boolean => {
    const service = services.find(s => s.service_name === serviceName);
    return service?.public || false;
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color={colors.text.primary} />
      </View>
    );
  }

  if (!userProfile) {
    return null;
  }

  const metrics: UsageMetric[] = [
    {
      label: 'Requests',
      value: userProfile.requests_month || 0,
      icon: 'calendar-outline',
    },
  ];

  // Add service-specific metrics for specific services we track monthly usage for
  const serviceMetrics = [
    {
      serviceName: 'Perplexity',
      field: 'perplexity_usage_month',
      icon: 'search-outline',
    },
    {
      serviceName: 'XAI Live Search',
      field: 'xai_live_search_month',
      icon: 'logo-twitter',
    },
    {
      serviceName: 'Textbelt',
      field: 'textbelt_usage_month',
      icon: 'mail-outline',
    },
  ];

  serviceMetrics.forEach(({ serviceName, field, icon }) => {
    if (isServicePublic(serviceName) && userProfile[field as keyof UserProfile] !== undefined) {
      metrics.push({
        label: serviceName,
        value: (userProfile[field as keyof UserProfile] as number) || 0,
        icon,
        serviceName,
      });
    }
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Monthly Usage</Text>
      <View style={styles.metricsContainer}>
        {metrics.map((metric, index) => (
          <View key={index} style={styles.metricRow}>
            <View style={styles.metricInfo}>
              <Ionicons name={metric.icon as any} size={20} color="#B0B0B0" />
              <Text style={styles.metricLabel}>{metric.label}</Text>
            </View>
            <Text style={styles.metricValue}>{metric.value.toLocaleString()}</Text>
          </View>
        ))}
      </View>
      <TouchableOpacity 
        style={styles.manageLink}
        onPress={() => Linking.openURL('https://hightower-ai.com')} 
      >
        <Text style={styles.manageLinkText}>
          You can manage your account in our web app in your account page.
        </Text>
        <Ionicons name="open-outline" size={16} color="#4A90E2" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: '600',
    color: colors.text.primary,
    marginBottom: 16,
  },
  metricsContainer: {
    gap: 12,
  },
  metricRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  metricInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  metricLabel: {
    fontSize: 14,
    color: '#B0B0B0',
  },
  metricValue: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.text.primary,
  },
  manageLink: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    marginTop: 16,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#2A2A2A',
    borderRadius: 8,
  },
  manageLinkText: {
    fontSize: 14,
    color: '#4A90E2',
    fontWeight: '500',
  },
});