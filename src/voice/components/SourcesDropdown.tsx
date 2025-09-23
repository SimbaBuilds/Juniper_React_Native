import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Animated, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface SourcesDropdownProps {
  sources: string[];
  role: 'user' | 'assistant';
}

export const SourcesDropdown: React.FC<SourcesDropdownProps> = ({ sources, role }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [rotateAnim] = useState(new Animated.Value(0));

  const toggleExpansion = () => {
    const toValue = isExpanded ? 0 : 1;

    Animated.timing(rotateAnim, {
      toValue,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setIsExpanded(!isExpanded);
  };

  const handleSourcePress = async (url: string) => {
    try {
      await Linking.openURL(url);
    } catch (error) {
      console.error('Failed to open URL:', error);
    }
  };

  const rotateInterpolate = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '90deg'],
  });

  if (sources.length === 0) {
    return null;
  }

  const textColor = role === 'assistant' ? '#333333' : '#F5F5DC';
  const borderColor = role === 'assistant' ? 'rgba(51, 51, 51, 0.2)' : 'rgba(245, 245, 220, 0.2)';
  const backgroundColor = role === 'assistant' ? 'rgba(51, 51, 51, 0.05)' : 'rgba(245, 245, 220, 0.05)';

  return (
    <View style={[styles.container, { borderColor, backgroundColor }]}>
      <TouchableOpacity
        style={styles.header}
        onPress={toggleExpansion}
        activeOpacity={0.7}
      >
        <Text style={[styles.sourcesTitle, { color: textColor }]}>
          Sources ({sources.length})
        </Text>
        <Animated.View style={{ transform: [{ rotate: rotateInterpolate }] }}>
          <Ionicons
            name="chevron-forward"
            size={16}
            color={textColor}
          />
        </Animated.View>
      </TouchableOpacity>

      {isExpanded && (
        <View style={styles.sourcesContainer}>
          {sources.map((source, index) => (
            <TouchableOpacity
              key={index}
              style={styles.sourceItem}
              onPress={() => handleSourcePress(source)}
              activeOpacity={0.7}
            >
              <Ionicons
                name="link-outline"
                size={14}
                color="#3B82F6"
                style={styles.linkIcon}
              />
              <Text
                style={[styles.sourceText, { color: '#3B82F6' }]}
                numberOfLines={1}
                ellipsizeMode="middle"
              >
                {source}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    borderRadius: 8,
    borderWidth: 1,
    overflow: 'hidden',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
  },
  sourcesTitle: {
    fontSize: 14,
    fontWeight: '500',
  },
  sourcesContainer: {
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  sourceItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 6,
    paddingHorizontal: 8,
    marginVertical: 2,
    borderRadius: 4,
    backgroundColor: 'rgba(59, 130, 246, 0.1)',
  },
  linkIcon: {
    marginRight: 8,
  },
  sourceText: {
    fontSize: 13,
    flex: 1,
    textDecorationLine: 'underline',
  },
});