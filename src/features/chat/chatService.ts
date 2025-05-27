import { supabase } from '../../supabase/supabase';
import { Conversation, Message } from '../../supabase/tables';
import { ChatMessage } from '../../voice/VoiceContext';

export interface ChatServiceConfig {
  autoSave: boolean;
  maxHistoryLength: number;
}

export const chatService = {
  /**
   * Save a chat conversation to Supabase
   */
  saveConversation: async (chatHistory: ChatMessage[], title?: string): Promise<string | null> => {
    if (chatHistory.length === 0) return null;

    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    try {
      // Generate conversation title from first user message if not provided
      const firstUserMessage = chatHistory.find(msg => msg.role === 'user');
      const conversationTitle = title || 
        (firstUserMessage?.content ? 
          firstUserMessage.content.substring(0, 50) + 
          (firstUserMessage.content.length > 50 ? '...' : '') : 
          'Conversation') || 'Conversation';

      // Create conversation record
      const conversationData: Partial<Conversation> = {
        user_id: user.user.id,
        title: conversationTitle,
        conversation_type: 'voice_chat',
        status: 'completed',
        metadata: {
          messageCount: chatHistory.length,
          duration: chatHistory[chatHistory.length - 1]?.timestamp - chatHistory[0]?.timestamp,
          savedAt: new Date().toISOString()
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

      console.log('✅ Chat conversation saved successfully:', conversation.id);
      return conversation.id;
    } catch (error) {
      console.error('❌ Error saving chat conversation:', error);
      throw error;
    }
  },

  /**
   * Get recent conversations for the current user
   */
  getRecentConversations: async (limit: number = 20): Promise<Conversation[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { data, error } = await supabase
      .from('conversations')
      .select('*')
      .eq('user_id', user.user.id)
      .order('created_at', { ascending: false })
      .limit(limit);

    if (error) throw error;
    return data || [];
  },

  /**
   * Get messages for a specific conversation
   */
  getConversationMessages: async (conversationId: string): Promise<ChatMessage[]> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

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
  },

  /**
   * Delete a conversation and its messages
   */
  deleteConversation: async (conversationId: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

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

    console.log('✅ Chat conversation deleted successfully:', conversationId);
  },

  /**
   * Update conversation title
   */
  updateConversationTitle: async (conversationId: string, title: string): Promise<void> => {
    const { data: user } = await supabase.auth.getUser();
    if (!user.user) throw new Error('User not authenticated');

    const { error } = await supabase
      .from('conversations')
      .update({ 
        title,
        updated_at: new Date().toISOString()
      })
      .eq('id', conversationId)
      .eq('user_id', user.user.id);

    if (error) throw error;
    console.log('✅ Conversation title updated successfully:', conversationId);
  }
};
