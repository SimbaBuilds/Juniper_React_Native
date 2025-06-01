import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Memory {
  id: string;
  content: string;
  date: string;
  tags?: string[];
}

export const MemoriesScreen: React.FC = () => {
  const memories: Memory[] = [
    {
      id: '1',
      content: 'Favorite coffee shop is Blue Bottle Coffee on Market Street - they make excellent cortados',
      date: '2024-05-30',
      tags: ['coffee', 'location', 'preferences'],
    },
    {
      id: '2',
      content: 'Meeting with design team every Tuesday at 2 PM in conference room B',
      date: '2024-05-29',
      tags: ['meetings', 'schedule', 'work'],
    },
    {
      id: '3',
      content: 'Preferred news sources: TechCrunch, The Verge, Hacker News for tech updates',
      date: '2024-05-28',
      tags: ['news', 'tech', 'preferences'],
    },
    {
      id: '4',
      content: 'Tesla Model Y is in parking spot #15 at the office building',
      date: '2024-05-27',
      tags: ['car', 'location', 'parking'],
    },
    {
      id: '5',
      content: 'Sister\'s birthday is October 15th - always sends flowers from local florist',
      date: '2024-05-25',
      tags: ['family', 'birthday', 'personal'],
    },
    {
      id: '6',
      content: 'Workout schedule: Monday, Wednesday, Friday at 7 AM at the gym',
      date: '2024-05-20',
      tags: ['fitness', 'schedule', 'health'],
    },
  ];

  const formatDate = (dateStr: string): string => {
    const date = new Date(dateStr);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const groupMemoriesByDate = (memories: Memory[]) => {
    const grouped: { [key: string]: Memory[] } = {};
    
    memories.forEach(memory => {
      const date = formatDate(memory.date);
      if (!grouped[date]) {
        grouped[date] = [];
      }
      grouped[date].push(memory);
    });
    
    return grouped;
  };

  const groupedMemories = groupMemoriesByDate(memories);
  const sortedDates = Object.keys(groupedMemories).sort((a, b) => 
    new Date(groupedMemories[b][0].date).getTime() - new Date(groupedMemories[a][0].date).getTime()
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text style={styles.title}>Memories</Text>
        </View>

        <View style={styles.instructionsSection}>
          <Text style={styles.instructionsTitle}>How to Add Memories</Text>
          <Text style={styles.instructionsText}>
            Or add a memory by telling your assistant:{'\n'}
            "Remember my favorite news sources for future reference."
            {'\n\n'}
            Your assistant will automatically save important information for easy retrieval later.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Your Memories</Text>
          
          {memories.length === 0 ? (
            <View style={styles.emptyState}>
              <Ionicons name="bulb-outline" size={48} color="#666666" />
              <Text style={styles.emptyStateText}>No memories saved yet</Text>
              <Text style={styles.emptyStateSubtext}>
                Tell your assistant something to remember and it will appear here
              </Text>
            </View>
          ) : (
            sortedDates.map((date) => (
              <View key={date} style={styles.dateSection}>
                <Text style={styles.dateHeader}>{date}</Text>
                {groupedMemories[date].map((memory) => (
                  <View key={memory.id} style={styles.memoryCard}>
                    <View style={styles.memoryContent}>
                      <Text style={styles.memoryText}>{memory.content}</Text>
                    </View>
                    {memory.tags && memory.tags.length > 0 && (
                      <View style={styles.tagsContainer}>
                        {memory.tags.map((tag, index) => (
                          <View key={index} style={styles.tag}>
                            <Text style={styles.tagText}>{tag}</Text>
                          </View>
                        ))}
                      </View>
                    )}
                  </View>
                ))}
              </View>
            ))
          )}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Memory Categories</Text>
          
          <View style={styles.categoryCard}>
            <Ionicons name="person-outline" size={20} color="#4A90E2" />
            <Text style={styles.categoryText}>Personal Preferences</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="briefcase-outline" size={20} color="#4A90E2" />
            <Text style={styles.categoryText}>Work & Schedule</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="location-outline" size={20} color="#4A90E2" />
            <Text style={styles.categoryText}>Places & Locations</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="people-outline" size={20} color="#4A90E2" />
            <Text style={styles.categoryText}>Family & Friends</Text>
          </View>

          <View style={styles.categoryCard}>
            <Ionicons name="settings-outline" size={20} color="#4A90E2" />
            <Text style={styles.categoryText}>Habits & Routines</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  scrollContent: {
    padding: 16,
  },
  header: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  instructionsSection: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 8,
    marginBottom: 24,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 12,
  },
  instructionsText: {
    color: '#B0B0B0',
    fontSize: 14,
    lineHeight: 20,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#FFFFFF',
    marginBottom: 16,
  },
  dateSection: {
    marginBottom: 24,
  },
  dateHeader: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4A90E2',
    marginBottom: 12,
    paddingBottom: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#3A3A3A',
  },
  memoryCard: {
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
  },
  memoryContent: {
    marginBottom: 12,
  },
  memoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    lineHeight: 20,
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#2A2A2A',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#4A90E2',
  },
  tagText: {
    fontSize: 12,
    color: '#4A90E2',
  },
  emptyState: {
    alignItems: 'center',
    padding: 32,
  },
  emptyStateText: {
    fontSize: 16,
    color: '#FFFFFF',
    marginTop: 16,
    marginBottom: 8,
  },
  emptyStateSubtext: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'center',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  categoryText: {
    fontSize: 14,
    color: '#FFFFFF',
    marginLeft: 12,
  },
}); 