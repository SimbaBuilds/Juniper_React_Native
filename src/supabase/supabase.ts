import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'
import { HotPhrase } from './tables'

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})

// Database service functions
export const DatabaseService = {
  // User Profile (now contains voice settings)
  async getUserProfile(userId: string) {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('id', userId)
      .single()
    
    if (error && error.code !== 'PGRST116') { // PGRST116 = no rows returned
      throw error
    }
    
    return data
  },

  async updateUserProfile(userId: string, updates: any) {
    // First check if profile exists
    const existingProfile = await this.getUserProfile(userId);
    
    if (!existingProfile) {
      // If profile doesn't exist, create it with complete defaults first
      const defaultProfile = {
        id: userId,
        display_name: updates.display_name || null,
        deepgram_enabled: updates.deepgram_enabled ?? false,
        base_language_model: 'claude-sonnet-4-20250514',
        general_instructions: updates.general_instructions || '',
        wake_word: updates.wake_word || 'JUNIPER',
        wake_word_sensitivity: updates.wake_word_sensitivity ?? 0.3,
        wake_word_detection_enabled: updates.wake_word_detection_enabled ?? true,
        selected_deepgram_voice: updates.selected_deepgram_voice || 'aura-2-arcas-en',
        timezone: updates.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        preferences: updates.preferences || {},
        // XAI LiveSearch defaults
        xai_live_search_enabled: updates.xai_live_search_enabled ?? true,
        xai_live_search_safe_search: updates.xai_live_search_safe_search ?? true,
        // User tags defaults
        user_tags: updates.user_tags || [],
        // System integrations defaults (enabled by default)
        enabled_integrations: updates.enabled_integrations || {
          twitter_x: true,
          perplexity: true
        },
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(defaultProfile)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } else {
      // Profile exists, do a regular update
      const updateData = {
        ...updates,
        updated_at: new Date().toISOString()
      };
      
      // Ensure general_instructions is never set to null or empty
      if ('general_instructions' in updateData && (!updateData.general_instructions || updateData.general_instructions.trim() === '')) {
        updateData.general_instructions = '';
      }
      
      const { data, error } = await supabase
        .from('user_profiles')
        .update(updateData)
        .eq('id', userId)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    }
  },

  // Voice settings helpers (now part of user_profiles)
  async getVoiceSettings(userId: string) {
    const profile = await this.getUserProfile(userId)
    if (!profile) return null
    
    return {
      deepgram_enabled: profile.deepgram_enabled,
      base_language_model: profile.base_language_model,
      general_instructions: profile.general_instructions,
      selectedWakeWord: profile.wake_word, // Map wake_word to selectedWakeWord for frontend
      wake_word_sensitivity: profile.wake_word_sensitivity,
      wake_word_detection_enabled: profile.wake_word_detection_enabled,
      selected_deepgram_voice: profile.selected_deepgram_voice,
      // XAI LiveSearch settings
      xai_live_search_enabled: profile.xai_live_search_enabled,
      xai_live_search_safe_search: profile.xai_live_search_safe_search,
      // Timezone setting
      timezone: profile.timezone,
    }
  },

  async updateVoiceSettings(userId: string, voiceSettings: {
    deepgram_enabled?: boolean;
    base_language_model?: string;
    general_instructions?: string;
    wake_word_detection_enabled?: boolean;
    wake_word_sensitivity?: number;
    wake_word?: string;
    selected_deepgram_voice?: string;
    xai_live_search_enabled?: boolean;
    xai_live_search_safe_search?: boolean;
    timezone?: string;
  }) {
    // First, ensure the user profile exists with all required fields
    let profile = await this.getUserProfile(userId);
    
    if (!profile) {
      // Create a complete profile with defaults if it doesn't exist
      const defaultProfile = {
        id: userId,
        display_name: null,
        deepgram_enabled: false,
        base_language_model: 'claude-sonnet-4-20250514',
        general_instructions: '',
        wake_word: 'JUNIPER',
        wake_word_sensitivity: 0.3,
        wake_word_detection_enabled: true,
        selected_deepgram_voice: 'aura-2-arcas-en',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        preferences: {},
        // XAI LiveSearch defaults
        xai_live_search_enabled: true,
        xai_live_search_safe_search: true,
        // User tags defaults
        user_tags: [],
        // System integrations defaults (enabled by default)
        enabled_integrations: {
          twitter_x: true,
          perplexity: true
        },
        updated_at: new Date().toISOString()
      };
      
      const { data, error } = await supabase
        .from('user_profiles')
        .insert(defaultProfile)
        .select()
        .single();
      
      if (error) throw error;
      profile = data;
    }
    
    // Now safely update with the voice settings, ensuring general_instructions is never null
    const updates = {
      ...voiceSettings,
      updated_at: new Date().toISOString()
    };
    
    // Allow empty general_instructions
    if ('general_instructions' in updates && updates.general_instructions === null) {
      updates.general_instructions = '';
    }
    
    const { data, error } = await supabase
      .from('user_profiles')
      .update(updates)
      .eq('id', userId)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  // Tag Management (new schema)
  async getTags(userId?: string, types?: string[]): Promise<any[]> {
    let query = supabase.from('tags').select('*');
    
    if (types && types.length > 0) {
      query = query.in('type', types);
    }
    
    if (userId) {
      query = query.or(`user_id.is.null,user_id.eq.${userId}`);
    } else {
      query = query.is('user_id', null);
    }
    
    query = query.order('name');
    
    const { data, error } = await query;
    if (error) throw error;
    return data || [];
  },

  async getUserTags(userId: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('tags')
      .select('*')
      .eq('user_id', userId)
      .eq('type', 'user_created')
      .order('name');
    
    if (error) throw error;
    return data || [];
  },

  async createTag(name: string, type: string, userId?: string): Promise<any> {
    // Always create a new tag record (allow duplicates per user)
    const tagData: any = {
      name: name.trim(),
      type,
      created_at: new Date().toISOString()
    };
    
    if (userId) {
      tagData.user_id = userId;
    }
    
    const { data, error } = await supabase
      .from('tags')
      .insert(tagData)
      .select()
      .single();
    
    if (error) throw error;
    return data;
  },

  async addUserTag(userId: string, tagName: string): Promise<any> {
    // Check tag length
    if (tagName.length > 25) {
      throw new Error('Tag must be 25 characters or less');
    }
    
    // Always create new user tag (duplicates allowed)
    return await this.createTag(tagName, 'user_created', userId);
  },

  async removeUserTag(userId: string, tagId: string): Promise<void> {
    const { error } = await supabase
      .from('tags')
      .delete()
      .eq('id', tagId)
      .eq('user_id', userId)
      .eq('type', 'user_created');
    
    if (error) throw error;
  },

  // Migration helpers
  async initializeServiceTags(): Promise<void> {
    const services = [
      'Notion', 'Slack', 'Trello', 'Any.do', 'Zoom', 'WhatsApp', 'Dropbox',
      'Todoist', 'Perplexity', 'Google Sheets', 'Google Docs', 'Gmail',
      'Google Calendar', 'Microsoft Excel Online', 'Microsoft Word Online',
      'MSFT Calendar', 'MSFT Email', 'MSFT Teams', 'Google Meet', 'Twilio'
    ];
    
    const serviceTypes = [
      'Project Management', 'Note-Taking', 'Team Collaboration',
      'Team Communication', 'Calendar Management', 'Reminders',
      'Video Conferencing', 'Communication', 'Messaging', 'Cloud Storage',
      'Task Scheduling', 'Search', 'AI', 'Research', 'Cloud Spreadsheets',
      'Cloud Text Documents', 'Email', 'Calendar', 'SMS', 'Text Message'
    ];
    
    // Check if service tags already exist
    const existingServiceTags = await this.getTags(undefined, ['service']);
    const existingServiceTypesTags = await this.getTags(undefined, ['service_type']);
    
    if (existingServiceTags.length === 0) {
      for (const service of services) {
        await this.createTag(service, 'service');
      }
    }
    
    if (existingServiceTypesTags.length === 0) {
      for (const serviceType of serviceTypes) {
        await this.createTag(serviceType, 'service_type');
      }
    }
  },

  async migrateUserProfileTags(userId: string): Promise<void> {
    const profile = await this.getUserProfile(userId);
    const oldTags = profile?.user_tags || [];
    
    if (oldTags.length === 0) return;
    
    // Create tag records for each user tag
    for (const tagName of oldTags) {
      await this.createTag(tagName, 'user_created', userId);
    }
    
    // Clear old user_tags array
    await this.updateUserProfile(userId, { user_tags: [] });
  },

  // Legacy methods for backward compatibility (deprecated)
  async getSettings(userId: string) {
    console.warn('getSettings is deprecated, use getUserProfile instead')
    return await this.getUserProfile(userId)
  },

  async updateSettings(userId: string, settings: any) {
    console.warn('updateSettings is deprecated, use updateUserProfile instead')
    return await this.updateUserProfile(userId, settings)
  },

  // Resources (including memories)
  async getMemories(userId: string) {
    const { data, error } = await supabase
      .from('resources')
      .select(`
        *,
        tag_1:tags!resources_tag_1_id_fkey(*),
        tag_2:tags!resources_tag_2_id_fkey(*),
        tag_3:tags!resources_tag_3_id_fkey(*),
        tag_4:tags!resources_tag_4_id_fkey(*),
        tag_5:tags!resources_tag_5_id_fkey(*)
      `)
      .eq('user_id', userId)
      .eq('type', 'memory')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async createMemory(userId: string, memory: any) {
    // Handle tags - convert tag names/IDs to proper tag references
    const { tags, ...memoryData } = memory;
    
    const { data, error } = await supabase
      .from('resources')
      .insert({
        user_id: userId,
        type: 'memory', // Set resource type
        ...memoryData,
        tags: tags || [], // Store as array of tag IDs
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select(`
        *,
        memory_tags:tags!inner(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async getMemoryTags(memoryId: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('resources')
      .select('tags')
      .eq('id', memoryId)
      .single();
    
    if (error) throw error;
    
    if (!data?.tags || data.tags.length === 0) return [];
    
    // Get tag details
    const { data: tagData, error: tagError } = await supabase
      .from('tags')
      .select('*')
      .in('id', data.tags);
    
    if (tagError) throw tagError;
    return tagData || [];
  },

  async addMemoryTags(memoryId: string, tagIds: string[]): Promise<void> {
    // Get current tags
    const { data: memory, error: getError } = await supabase
      .from('resources')
      .select('tags')
      .eq('id', memoryId)
      .single();
    
    if (getError) throw getError;
    
    const currentTags = memory?.tags || [];
    const newTags = [...new Set([...currentTags, ...tagIds])]; // Remove duplicates
    
    const { error } = await supabase
      .from('resources')
      .update({
        tags: newTags,
        updated_at: new Date().toISOString()
      })
      .eq('id', memoryId);
    
    if (error) throw error;
  },

  async updateMemory(memoryId: string, updates: any) {
    const { data, error } = await supabase
      .from('resources')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', memoryId)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async deleteMemory(memoryId: string) {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('id', memoryId)
    
    if (error) throw error
  },

  // General resource methods
  async getResources(userId: string, resourceType?: string) {
    let query = supabase
      .from('resources')
      .select(`
        *,
        tag_1:tags!resources_tag_1_id_fkey(*),
        tag_2:tags!resources_tag_2_id_fkey(*),
        tag_3:tags!resources_tag_3_id_fkey(*),
        tag_4:tags!resources_tag_4_id_fkey(*),
        tag_5:tags!resources_tag_5_id_fkey(*)
      `)
      .eq('user_id', userId)
      .order('last_accessed', { ascending: false })
    
    if (resourceType) {
      query = query.eq('type', resourceType)
    }
    
    const { data, error } = await query
    
    if (error) throw error
    return data || []
  },

  async createResource(userId: string, resource: any) {
    // Handle tags - convert tag IDs to individual foreign key columns
    const { tags, ...resourceData } = resource;
    
    // Map tag IDs to foreign key columns (up to 5 tags)
    const tagForeignKeys: any = {};
    if (tags && Array.isArray(tags)) {
      for (let i = 0; i < Math.min(tags.length, 5); i++) {
        tagForeignKeys[`tag_${i + 1}_id`] = tags[i];
      }
    }
    
    const { data, error } = await supabase
      .from('resources')
      .insert({
        user_id: userId,
        ...resourceData,
        ...tagForeignKeys,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString()
      })
      .select(`
        *,
        tag_1:tags!resources_tag_1_id_fkey(*),
        tag_2:tags!resources_tag_2_id_fkey(*),
        tag_3:tags!resources_tag_3_id_fkey(*),
        tag_4:tags!resources_tag_4_id_fkey(*),
        tag_5:tags!resources_tag_5_id_fkey(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async getResourceTags(resourceId: string): Promise<any[]> {
    const { data, error } = await supabase
      .from('resources')
      .select('tag_1_id, tag_2_id, tag_3_id, tag_4_id, tag_5_id')
      .eq('id', resourceId)
      .single();
    
    if (error) throw error;
    
    // Collect all non-null tag IDs
    const tagIds = [
      data?.tag_1_id,
      data?.tag_2_id,
      data?.tag_3_id,
      data?.tag_4_id,
      data?.tag_5_id
    ].filter(Boolean);
    
    if (tagIds.length === 0) return [];
    
    // Get tag details
    const { data: tagData, error: tagError } = await supabase
      .from('tags')
      .select('*')
      .in('id', tagIds);
    
    if (tagError) throw tagError;
    return tagData || [];
  },

  async addResourceTags(resourceId: string, tagIds: string[]): Promise<void> {
    // Get current tag assignments
    const { data: resource, error: getError } = await supabase
      .from('resources')
      .select('tag_1_id, tag_2_id, tag_3_id, tag_4_id, tag_5_id')
      .eq('id', resourceId)
      .single();
    
    if (getError) throw getError;
    
    // Collect current tag IDs
    const currentTags = [
      resource?.tag_1_id,
      resource?.tag_2_id,
      resource?.tag_3_id,
      resource?.tag_4_id,
      resource?.tag_5_id
    ].filter(Boolean);
    
    // Merge new tags with existing ones (remove duplicates)
    const allTags = [...new Set([...currentTags, ...tagIds])];
    
    // Map back to foreign key columns (up to 5 tags)
    const tagUpdates: any = {
      tag_1_id: null,
      tag_2_id: null,
      tag_3_id: null,
      tag_4_id: null,
      tag_5_id: null,
    };
    
    for (let i = 0; i < Math.min(allTags.length, 5); i++) {
      tagUpdates[`tag_${i + 1}_id`] = allTags[i];
    }
    
    const { error } = await supabase
      .from('resources')
      .update({
        ...tagUpdates,
        updated_at: new Date().toISOString()
      })
      .eq('id', resourceId);
    
    if (error) throw error;
  },

  async updateResource(resourceId: string, updates: any) {
    // Handle tags - convert tag IDs to individual foreign key columns
    const { tags, ...resourceData } = updates;
    
    // Map tag IDs to foreign key columns (up to 5 tags)
    const tagForeignKeys: any = {};
    if (tags !== undefined) {
      // Clear all tag columns first
      tagForeignKeys.tag_1_id = null;
      tagForeignKeys.tag_2_id = null;
      tagForeignKeys.tag_3_id = null;
      tagForeignKeys.tag_4_id = null;
      tagForeignKeys.tag_5_id = null;
      
      // Then set the new tags
      if (tags && Array.isArray(tags)) {
        for (let i = 0; i < Math.min(tags.length, 5); i++) {
          tagForeignKeys[`tag_${i + 1}_id`] = tags[i];
        }
      }
    }
    
    const { data, error } = await supabase
      .from('resources')
      .update({
        ...resourceData,
        ...tagForeignKeys,
        updated_at: new Date().toISOString()
      })
      .eq('id', resourceId)
      .select(`
        *,
        tag_1:tags!resources_tag_1_id_fkey(*),
        tag_2:tags!resources_tag_2_id_fkey(*),
        tag_3:tags!resources_tag_3_id_fkey(*),
        tag_4:tags!resources_tag_4_id_fkey(*),
        tag_5:tags!resources_tag_5_id_fkey(*)
      `)
      .single()
    
    if (error) throw error
    return data
  },

  async deleteResource(resourceId: string) {
    const { error } = await supabase
      .from('resources')
      .delete()
      .eq('id', resourceId)
    
    if (error) throw error
  },

  // Integrations
  async getIntegrations(userId: string) {
    const { data, error } = await supabase
      .from('integrations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Check integration build status for polling
  async getIntegrationBuildStatus(userId: string) {
    const { data, error } = await supabase
      .from('integration_build_states')
      .select('id, service_name, current_status, created_at, last_updated, state_data')
      .eq('user_id', userId)
      .in('current_status', ['in_progress', 'form_ready', 'auth_ready', 'completed'])
    
    if (error) throw error
    
    // Filter out completed integrations from "in progress" count
    // since completed integrations don't need user action
    const activeStates = data?.filter(state => state.current_status !== 'completed') || []
    
    return {
      integration_in_progress: activeStates.length > 0,
      in_progress_count: activeStates.length,
      build_states: data || [],
      active_build_states: activeStates
    }
  },

  // Legacy method for backward compatibility (deprecated)
  async getIntegrationStatus(userId: string) {
    console.warn('getIntegrationStatus is deprecated, use getIntegrationBuildStatus instead')
    return await this.getIntegrationBuildStatus(userId)
  },

  // Get integration build states that need authentication
  async getAuthenticationReadyIntegrations(userId: string) {
    const { data, error } = await supabase
      .from('integration_build_states')
      .select('*')
      .eq('user_id', userId)
      .eq('current_status', 'auth_ready')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get integration build states that need form completion
  async getFormReadyIntegrations(userId: string) {
    const { data, error } = await supabase
      .from('integration_build_states')
      .select('*')
      .eq('user_id', userId)
      .eq('current_status', 'form_ready')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get completed integrations that are ready to use
  async getCompletedIntegrations(userId: string) {
    const { data, error } = await supabase
      .from('integration_build_states')
      .select('*')
      .eq('user_id', userId)
      .eq('current_status', 'completed')
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Get service information by service name
  async getServiceByName(serviceName: string) {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('service_name', serviceName)
      .single()
    
    if (error) throw error
    return data
  },

  // Get all available services
  async getAllServices() {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .order('service_name')
    
    if (error) throw error
    return data || []
  },

  // Get all available services with their tag names
  async getAllServicesWithTags() {
    const { data, error } = await supabase
      .from('services')
      .select(`
        *,
        tag_1:tags!services_tag_1_id_fkey(name),
        tag_2:tags!services_tag_2_id_fkey(name),
        tag_3:tags!services_tag_3_id_fkey(name),
        tag_4:tags!services_tag_4_id_fkey(name),
        tag_5:tags!services_tag_5_id_fkey(name)
      `)
      .order('service_name')
    
    if (error) throw error
    
    // Transform the data to include tagNames array
    const servicesWithTags = (data || []).map(service => {
      const tagNames = [
        service.tag_1?.name,
        service.tag_2?.name,
        service.tag_3?.name,
        service.tag_4?.name,
        service.tag_5?.name
      ].filter(Boolean) // Remove null/undefined values
      
      return {
        ...service,
        tagNames
      }
    })
    
    return servicesWithTags
  },

  // Get config form by service ID
  async getConfigFormByServiceId(serviceId: string) {
    const { data, error } = await supabase
      .from('config_forms')
      .select('*')
      .eq('service_id', serviceId)
      .single()
    
    if (error) throw error
    return data
  },

  // Automations
  async getAutomations(userId: string) {
    const { data, error } = await supabase
      .from('automations')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  // Hot Phrases
  async getHotPhrases(userId: string) {
    const { data, error } = await supabase
      .from('hot_phrases')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false })
    
    if (error) throw error
    return data || []
  },

  async createHotPhrase(hotPhrase: Omit<HotPhrase, 'id' | 'created_at' | 'updated_at'>) {
    const { data, error } = await supabase
      .from('hot_phrases')
      .insert([hotPhrase])
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async updateHotPhrase(id: string, updates: Partial<Omit<HotPhrase, 'id' | 'user_id' | 'created_at' | 'updated_at'>>) {
    const { data, error } = await supabase
      .from('hot_phrases')
      .update({ ...updates, updated_at: new Date() })
      .eq('id', id)
      .select()
      .single()
    
    if (error) throw error
    return data
  },

  async deleteHotPhrase(id: string) {
    const { error } = await supabase
      .from('hot_phrases')
      .delete()
      .eq('id', id)
    
    if (error) throw error
  },

  // Utility method to fix any existing profiles with null general_instructions
  async fixNullGeneralInstructions() {
    try {
      const { data, error } = await supabase
        .from('user_profiles')
        .update({
          general_instructions: '',
          updated_at: new Date().toISOString()
        })
        .is('general_instructions', null)
        .select();
      
      if (error) throw error;
      
      console.log('✅ Fixed null general_instructions for profiles:', data?.length || 0);
      return data;
    } catch (error) {
      console.error('❌ Error fixing null general_instructions:', error);
      throw error;
    }
  },

  // System integration management (Twitter/X and Perplexity)
  async updateSystemIntegration(userId: string, integration: 'twitter_x' | 'perplexity', enabled: boolean) {
    const currentProfile = await this.getUserProfile(userId);
    const enabledIntegrations = currentProfile?.enabled_integrations || {
      twitter_x: true,
      perplexity: true
    };
    
    const updatedIntegrations = {
      ...enabledIntegrations,
      [integration]: enabled
    };
    
    return await this.updateUserProfile(userId, { 
      enabled_integrations: updatedIntegrations 
    });
  },

  async getSystemIntegrations(userId: string) {
    const profile = await this.getUserProfile(userId);
    return profile?.enabled_integrations || {
      twitter_x: true,
      perplexity: true
    };
  },

  async isSystemIntegrationEnabled(userId: string, integration: 'twitter_x' | 'perplexity'): Promise<boolean> {
    const systemIntegrations = await this.getSystemIntegrations(userId);
    return systemIntegrations[integration] ?? true; // Default to true if not set
  },

  // Integrations
  async deleteIntegration(integrationId: string): Promise<void> {
    const { error } = await supabase
      .from('integrations')
      .delete()
      .eq('id', integrationId);
    if (error) throw error;
  },

  // Request status polling
  async getRequestStatus(requestId: string): Promise<string | null> {
    const { data, error } = await supabase
      .from('requests')
      .select('status')
      .eq('request_id', requestId)
      .single();
    
    if (error) {
      if (error.code === 'PGRST116') {
        // No rows returned - request not found
        return null;
      }
      throw error;
    }
    
    return data?.status || null;
  },
}
        