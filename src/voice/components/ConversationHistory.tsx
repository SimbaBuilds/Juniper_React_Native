import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  ActivityIndicator,
  Alert,
  Modal,
  ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { conversationService, ConversationSummary } from '../../services/conversationService';
import { ChatMessage } from '../VoiceContext';

interface ConversationHistoryProps {
  visible: boolean;
  onClose: () => void;
  onOpen?: () => void;
  onContinueChat?: (messages: ChatMessage[]) => void;
}

interface ExpandedConversation extends ConversationSummary {
  messages?: ChatMessage[];
  isLoading?: boolean;
  isExpanded?: boolean;
}

export const ConversationHistory: React.FC<ConversationHistoryProps> = ({
  visible,
  onClose,
  onOpen,
  onContinueChat,
}) => {
  const [conversations, setConversations] = useState<ExpandedConversation[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasLoaded, setHasLoaded] = useState(false);

  // Load conversation summaries when explicitly requested
  useEffect(() => {
    if (visible && !hasLoaded) {
      loadConversations();
      if (onOpen) {
        onOpen();
      }
    }
  }, [visible, hasLoaded, onOpen]);

  const loadConversations = async () => {
    setIsLoading(true);
    setError(null);
    
    try {
      const summaries = await conversationService.getRecentConversations();
      // Limit to most recent 20 conversations
      const recentSummaries = summaries.slice(0, 20);
      setConversations(recentSummaries.map(summary => ({
        ...summary,
        isExpanded: false,
        isLoading: false,
      })));
      setHasLoaded(true);
    } catch (err) {
      console.error('Error loading conversations:', err);
      setError('Failed to load conversation history');
    } finally {
      setIsLoading(false);
    }
  };

  // Rest of the component remains unchanged...
  const refreshConversations = async () => {
    console.log('🔄 Refreshing conversation history...');
    setHasLoaded(false); // Reset loaded state to force reload
    await loadConversations();
  };

  const toggleConversation = async (conversationId: string) => {
    setConversations(prev => prev.map(conv => {
      if (conv.id === conversationId) {
        if (conv.isExpanded) {
          // Collapse conversation
          return {
            ...conv,
            isExpanded: false,
            messages: undefined,
          };
        } else {
          // Expand conversation - start loading messages
          return {
            ...conv,
            isExpanded: true,
            isLoading: true,
          };
        }
      }
      return conv;
    }));

    // Load messages if expanding
    const conversation = conversations.find(conv => conv.id === conversationId);
    if (conversation && !conversation.isExpanded) {
      try {
        const messages = await conversationService.getConversationMessages(conversationId);
        setConversations(prev => prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, messages, isLoading: false }
            : conv
        ));
      } catch (err) {
        console.error('Error loading messages:', err);
        setConversations(prev => prev.map(conv => 
          conv.id === conversationId 
            ? { ...conv, isLoading: false, isExpanded: false }
            : conv
        ));
      }
    }
  };

  const deleteConversation = async (conversationId: string) => {
    Alert.alert(
      'Delete Conversation',
      'Are you sure you want to delete this conversation? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: async () => {
            try {
              await conversationService.deleteConversation(conversationId);
              setConversations(prev => prev.filter(conv => conv.id !== conversationId));
            } catch (err) {
              console.error('Error deleting conversation:', err);
              Alert.alert('Error', 'Failed to delete conversation');
            }
          },
        },
      ]
    );
  };

  const formatDate = (date: Date) => {
    const now = new Date();
    const diffInHours = (now.getTime() - date.getTime()) / (1000 * 60 * 60);
    
    if (diffInHours < 24) {
      return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    } else if (diffInHours < 168) { // 7 days
      return date.toLocaleDateString([], { weekday: 'short', hour: '2-digit', minute: '2-digit' });
    } else {
      return date.toLocaleDateString([], { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' });
    }
  };

  const formatMessageTime = (timestamp: number) => {
    return new Date(timestamp).toLocaleTimeString([], { 
      hour: '2-digit', 
      minute: '2-digit' 
    });
  };

  const renderConversation = ({ item }: { item: ExpandedConversation }) => (
    <View style={styles.conversationItem}>
      <TouchableOpacity
        style={styles.conversationHeader}
        onPress={() => toggleConversation(item.id)}
        activeOpacity={0.7}
      >
        <View style={styles.conversationInfo}>
          <Text style={styles.conversationTitle} numberOfLines={2}>
            {item.title || 'Untitled Conversation'}
          </Text>
          <View style={styles.conversationMeta}>
            <Text style={styles.conversationDate}>{formatDate(item.created_at)}</Text>
            <Text style={styles.messageCount}>
              {item.messageCount} message{item.messageCount !== 1 ? 's' : ''}
            </Text>
          </View>
        </View>
        
        <View style={styles.conversationActions}>
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteConversation(item.id)}
            activeOpacity={0.7}
          >
            <Ionicons name="trash-outline" size={18} color="#ff4444" />
          </TouchableOpacity>
          
          {onContinueChat && (
            <TouchableOpacity
              style={styles.continueButton}
              onPress={async () => {
                if (item.messages && item.messages.length > 0) {
                  // Messages already loaded, continue immediately
                  onContinueChat(item.messages);
                } else {
                  // Messages not loaded yet, load them first
                  try {
                    const messages = await conversationService.getConversationMessages(item.id);
                    if (messages && messages.length > 0) {
                      onContinueChat(messages);
                    }
                  } catch (err) {
                    console.error('Error loading messages for continue:', err);
                    Alert.alert('Error', 'Failed to load conversation messages');
                  }
                }
              }}
              activeOpacity={0.7}
            >
              <Ionicons name="play" size={18} color="#3B82F6" />
            </TouchableOpacity>
          )}
          
          <Ionicons
            name={item.isExpanded ? "chevron-up" : "chevron-down"}
            size={20}
            color="#888888"
          />
        </View>
      </TouchableOpacity>

      {item.isExpanded && (
        <View style={styles.messagesContainer}>
          {item.isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="small" color="#3B82F6" />
              <Text style={styles.loadingText}>Loading messages...</Text>
            </View>
          ) : item.messages ? (
            <ScrollView
              style={styles.messagesList}
              showsVerticalScrollIndicator={true}
              nestedScrollEnabled={true}
              contentContainerStyle={styles.messagesContent}
            >
              {item.messages.map((message, index) => (
                <View
                  key={`${item.id}-message-${index}`}
                  style={[
                    styles.messageBubble,
                    message.role === 'user' ? styles.userMessage : styles.assistantMessage
                  ]}
                >
                  <Text style={styles.messageText}>{message.content}</Text>
                  <Text style={styles.messageTime}>{formatMessageTime(message.timestamp)}</Text>
                </View>
              ))}
            </ScrollView>
          ) : (
            <Text style={styles.noMessagesText}>No messages found</Text>
          )}
        </View>
      )}
    </View>
  );

  return (
    <Modal
      visible={visible}
      animationType="slide"
      presentationStyle="pageSheet"
      onRequestClose={onClose}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Conversation History</Text>
          <View style={styles.headerActions}>
            {hasLoaded && (
              <TouchableOpacity
                style={styles.refreshButton}
                onPress={refreshConversations}
                activeOpacity={0.7}
                disabled={isLoading}
              >
                <Ionicons 
                  name="refresh" 
                  size={20} 
                  color={isLoading ? "#666666" : "#888888"} 
                />
              </TouchableOpacity>
            )}
            <TouchableOpacity
              style={styles.closeButton}
              onPress={onClose}
              activeOpacity={0.7}
            >
              <Ionicons name="close" size={24} color="#888888" />
            </TouchableOpacity>
          </View>
        </View>

        {isLoading ? (
          <View style={styles.centerContainer}>
            <ActivityIndicator size="large" color="#3B82F6" />
            <Text style={styles.loadingText}>Loading conversations...</Text>
          </View>
        ) : error ? (
          <View style={styles.centerContainer}>
            <Ionicons name="alert-circle-outline" size={48} color="#ff4444" />
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity
              style={styles.retryButton}
              onPress={loadConversations}
              activeOpacity={0.7}
            >
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : conversations.length === 0 ? (
          <View style={styles.centerContainer}>
            <Ionicons name="chatbubbles-outline" size={48} color="#888888" />
            <Text style={styles.emptyText}>No conversations found</Text>
            <Text style={styles.emptySubtext}>
              Your conversation history from the past week will appear here
            </Text>
          </View>
        ) : (
          <FlatList
            data={conversations}
            renderItem={renderConversation}
            keyExtractor={(item) => item.id}
            style={styles.conversationsList}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.conversationsContent}
            nestedScrollEnabled={true}
            keyboardShouldPersistTaps="handled"
          />
        )}
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333333',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#FFFFFF',
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  closeButton: {
    padding: 4,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  loadingText: {
    color: '#888888',
    fontSize: 16,
    marginTop: 12,
  },
  errorText: {
    color: '#ff4444',
    fontSize: 16,
    textAlign: 'center',
    marginTop: 12,
  },
  retryButton: {
    backgroundColor: '#3B82F6',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 16,
  },
  retryButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  emptyText: {
    color: '#888888',
    fontSize: 18,
    fontWeight: '600',
    marginTop: 12,
  },
  emptySubtext: {
    color: '#666666',
    fontSize: 14,
    textAlign: 'center',
    marginTop: 8,
  },
  conversationsList: {
    flex: 1,
  },
  conversationsContent: {
    paddingVertical: 8,
  },
  conversationItem: {
    marginHorizontal: 16,
    marginVertical: 4,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    overflow: 'hidden',
  },
  conversationHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  conversationInfo: {
    flex: 1,
  },
  conversationTitle: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  conversationMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  conversationDate: {
    color: '#888888',
    fontSize: 12,
    marginRight: 12,
  },
  messageCount: {
    color: '#666666',
    fontSize: 12,
  },
  conversationActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  deleteButton: {
    padding: 8,
    marginRight: 8,
  },
  continueButton: {
    padding: 8,
    marginRight: 8,
  },
  messagesContainer: {
    borderTopWidth: 1,
    borderTopColor: '#333333',
    height: 450,
    flex: 0,
  },
  loadingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  messagesList: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  messagesContent: {
    paddingBottom: 8,
  },
  messageBubble: {
    padding: 12,
    borderRadius: 16,
    marginVertical: 4,
    maxWidth: '85%',
  },
  userMessage: {
    backgroundColor: '#3B82F6',
    alignSelf: 'flex-end',
    borderBottomRightRadius: 4,
  },
  assistantMessage: {
    backgroundColor: '#333333',
    alignSelf: 'flex-start',
    borderBottomLeftRadius: 4,
  },
  messageText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  messageTime: {
    color: 'rgba(255, 255, 255, 0.6)',
    fontSize: 10,
    marginTop: 4,
    textAlign: 'right',
  },
  noMessagesText: {
    color: '#888888',
    fontSize: 14,
    textAlign: 'center',
    padding: 20,
  },
  refreshButton: {
    padding: 4,
    marginRight: 8,
  },
}); 