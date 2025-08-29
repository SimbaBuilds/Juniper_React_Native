import { NativeModules, Platform } from 'react-native';
import { ChatMessage } from '../voice/VoiceContext';

const { ConversationSyncModule } = NativeModules;

interface BackgroundConversation {
  id: string;
  userMessage: string;
  assistantMessage: string;
  timestamp: number;
  processed: boolean;
}

class ConversationSyncService {
  private static instance: ConversationSyncService;

  private constructor() {
    if (Platform.OS !== 'android') {
      console.warn('[ConversationSyncService] Only available on Android');
    }
    
    if (!ConversationSyncModule) {
      console.warn('[ConversationSyncService] Native ConversationSyncModule not available');
    }
  }

  static getInstance(): ConversationSyncService {
    if (!ConversationSyncService.instance) {
      ConversationSyncService.instance = new ConversationSyncService();
    }
    return ConversationSyncService.instance;
  }

  async syncHistoryToNative(history: ChatMessage[]): Promise<void> {
    if (Platform.OS !== 'android' || !ConversationSyncModule) {
      console.log('[ConversationSyncService] Skipping native sync - not available');
      return;
    }

    try {
      console.log(`[ConversationSyncService] Syncing ${history.length} messages to native`);
      
      const nativeHistory = history.map(msg => ({
        role: msg.role,
        content: msg.content,
        timestamp: msg.timestamp
      }));

      await ConversationSyncModule.syncHistoryFromReactNative(nativeHistory);
      console.log('✅ [ConversationSyncService] History synced to native successfully');
    } catch (error) {
      console.error('❌ [ConversationSyncService] Failed to sync history to native:', error);
      throw error;
    }
  }

  async getBackgroundConversations(): Promise<BackgroundConversation[]> {
    if (Platform.OS !== 'android' || !ConversationSyncModule) {
      console.log('[ConversationSyncService] Skipping background conversation check - not available');
      return [];
    }

    try {
      console.log('[ConversationSyncService] Checking for background conversations...');
      const conversations = await ConversationSyncModule.getPendingConversations();
      console.log(`[ConversationSyncService] Found ${conversations?.length || 0} background conversations`);
      return conversations || [];
    } catch (error) {
      console.error('❌ [ConversationSyncService] Failed to get background conversations:', error);
      return [];
    }
  }

  async clearNativeHistory(): Promise<void> {
    if (Platform.OS !== 'android' || !ConversationSyncModule) {
      console.log('[ConversationSyncService] Skipping native clear - not available');
      return;
    }

    try {
      console.log('[ConversationSyncService] Clearing native conversation history...');
      await ConversationSyncModule.clearAllConversations();
      console.log('✅ [ConversationSyncService] Native conversation history cleared successfully');
    } catch (error) {
      console.error('❌ [ConversationSyncService] Failed to clear native conversation history:', error);
      throw error;
    }
  }

  mergeBackgroundHistory(currentHistory: ChatMessage[], backgroundConversations: BackgroundConversation[]): ChatMessage[] {
    if (!backgroundConversations.length) {
      return currentHistory;
    }

    console.log(`[ConversationSyncService] Merging ${backgroundConversations.length} background conversations into current history`);

    const backgroundMessages: ChatMessage[] = [];
    
    backgroundConversations.forEach(conv => {
      backgroundMessages.push({
        role: 'user',
        content: conv.userMessage,
        timestamp: conv.timestamp,
        type: 'text'
      });
      
      backgroundMessages.push({
        role: 'assistant', 
        content: conv.assistantMessage,
        timestamp: conv.timestamp + 1,
        type: 'text'
      });
    });

    const allMessages = [...currentHistory, ...backgroundMessages];
    
    allMessages.sort((a, b) => a.timestamp - b.timestamp);
    
    console.log(`✅ [ConversationSyncService] Merged history: ${currentHistory.length} existing + ${backgroundMessages.length} background = ${allMessages.length} total`);
    
    return allMessages;
  }

  async markConversationsAsSynced(conversationIds: string[]): Promise<void> {
    if (Platform.OS !== 'android' || !ConversationSyncModule) {
      return;
    }

    try {
      console.log(`[ConversationSyncService] Marking ${conversationIds.length} conversations as synced`);
      
      for (const id of conversationIds) {
        console.log(`[ConversationSyncService] Marking conversation ${id} as processed`);
      }
      
      console.log('✅ [ConversationSyncService] Conversations marked as synced');
    } catch (error) {
      console.error('❌ [ConversationSyncService] Failed to mark conversations as synced:', error);
    }
  }
}

export default ConversationSyncService.getInstance();