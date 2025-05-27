import { supabase } from '../supabase/supabase';
import { Conversation, Message } from '../supabase/tables';
import { ChatMessage } from '../voice/VoiceContext';

export interface ConversationSummary {
  id: string;
  title?: string;
  summary?: string;
  created_at: Date;
  updated_at: Date;
  messageCount: number;
}

export const conversationService = {
  /**
   * Save a conversation with its messages to Supabase
   */
  saveConversation: async (chatHistory: ChatMessage[]): Promise<string | null> => {
    if (chatHistory.length === 0) return null;

    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    try {
      // Generate conversation title from first user message
      const firstUserMessage = chatHistory.find(msg => msg.role === 'user');
      const title = firstUserMessage?.content ? 
        firstUserMessage.content.substring(0, 50) + 
        (firstUserMessage.content.length > 50 ? '...' : '') : 
        'Conversation';

      // Create conversation record
      const conversationData: Partial<Conversation> = {
        user_id: user.user.id,
        title,
        conversation_type: 'voice_chat',
        status: 'completed',
        metadata: {
          messageCount: chatHistory.length,
          duration: chatHistory[chatHistory.length - 1]?.timestamp - chatHistory[0]?.timestamp
        },
        created_at: new Date(chatHistory[0].timestamp),
        updated_at: new Date(chatHistory[chatHistory.length - 1].timestamp)
      };

      const { data: conversation, error: conversationError } = await supabase
        .from('conversations')
        .insert(conversationData)
        .select()
        .single();

      if (conversationError) throw conversationError;

      // Create message records
      const messageData: Partial<Message>[] = chatHistory.map(msg => ({
        conversation_id: conversation.id,
        user_id: user.user.id,
        role: msg.role,
        content: msg.content,
        metadata: {
          timestamp: msg.timestamp
        },
        created_at: new Date(msg.timestamp)
      }));

      const { error: messagesError } = await supabase
        .from('messages')
        .insert(messageData);

      if (messagesError) throw messagesError;

      console.log('✅ Conversation saved successfully:', conversation.id);
      return conversation.id;
    } catch (error) {
      console.error('❌ Error saving conversation:', error);
      throw error;
    }
  },

  /**
   * Get conversation summaries from the past week
   */
  getRecentConversations: async (): Promise<ConversationSummary[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);

    try {
      const { data, error } = await supabase
        .from('conversations')
        .select(`
          id,
          title,
          summary,
          created_at,
          updated_at,
          metadata
        `)
        .eq('user_id', user.user.id)
        .gte('created_at', oneWeekAgo.toISOString())
        .order('created_at', { ascending: false });

      if (error) throw error;

      return data?.map(conv => ({
        id: conv.id,
        title: conv.title,
        summary: conv.summary,
        created_at: new Date(conv.created_at),
        updated_at: new Date(conv.updated_at),
        messageCount: conv.metadata?.messageCount || 0
      })) || [];
    } catch (error) {
      console.error('❌ Error fetching recent conversations:', error);
      throw error;
    }
  },

  /**
   * Get messages for a specific conversation
   */
  getConversationMessages: async (conversationId: string): Promise<ChatMessage[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    try {
      const { data, error } = await supabase
        .from('messages')
        .select('role, content, created_at, metadata')
        .eq('conversation_id', conversationId)
        .eq('user_id', user.user.id)
        .order('created_at', { ascending: true });

      if (error) throw error;

      return data?.map(msg => ({
        role: msg.role as 'user' | 'assistant',
        content: msg.content,
        timestamp: msg.metadata?.timestamp || new Date(msg.created_at).getTime()
      })) || [];
    } catch (error) {
      console.error('❌ Error fetching conversation messages:', error);
      throw error;
    }
  },

  /**
   * Delete a conversation and its messages
   */
  deleteConversation: async (conversationId: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    try {
      // Delete messages first (due to foreign key constraint)
      const { error: messagesError } = await supabase
        .from('messages')
        .delete()
        .eq('conversation_id', conversationId)
        .eq('user_id', user.user.id);

      if (messagesError) throw messagesError;

      // Delete conversation
      const { error: conversationError } = await supabase
        .from('conversations')
        .delete()
        .eq('id', conversationId)
        .eq('user_id', user.user.id);

      if (conversationError) throw conversationError;

      console.log('✅ Conversation deleted successfully:', conversationId);
    } catch (error) {
      console.error('❌ Error deleting conversation:', error);
      throw error;
    }
  }
}; 