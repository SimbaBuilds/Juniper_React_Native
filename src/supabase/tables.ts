export type UserProfile = {
    id: string;
    display_name?: string;
    voice_settings: Record<string, any>;
    assistant_name: string;
    wake_word: string;
    timezone: string;
    preferences: Record<string, any>;
    created_at: Date;
    updated_at?: Date;
  };
  
  export const userProfileFields = [
    'id', 'display_name', 'voice_settings', 'assistant_name', 'wake_word', 
    'timezone', 'preferences', 'created_at', 'updated_at'
  ] as const;
  export type UserProfileField = (typeof userProfileFields)[number];
  
  export type Conversation = {
    id: string;
    user_id: string;
    title?: string;
    summary?: string;
    conversation_type: string;
    status: string;
    metadata: Record<string, any>;
    created_at: Date;
    updated_at: Date;
  };
  
  export const conversationFields = [
    'id', 'user_id', 'title', 'summary', 'conversation_type', 
    'status', 'metadata', 'created_at', 'updated_at'
  ] as const;
  export type ConversationField = (typeof conversationFields)[number];
  
  export type Message = {
    id: string;
    conversation_id: string;
    user_id: string;
    role: string;
    content: string;
    audio_url?: string;
    transcription_confidence?: number;
    tool_calls?: Record<string, any>;
    metadata: Record<string, any>;
    created_at: Date;
  };
  
  export const messageFields = [
    'id', 'conversation_id', 'user_id', 'role', 'content', 'audio_url',
    'transcription_confidence', 'tool_calls', 'metadata', 'created_at'
  ] as const;
  export type MessageField = (typeof messageFields)[number];
  
  export type Memory = {
    id: string;
    user_id: string;
    memory_type: string;
    category?: string;
    title: string;
    content: string;
    importance_score: number;
    embedding?: number[];
    decay_factor: number;
    auto_committed: boolean;
    source_conversation_id?: string;
    last_accessed: Date;
    created_at: Date;
    updated_at: Date;
  };
  
  export const memoryFields = [
    'id', 'user_id', 'memory_type', 'category', 'title', 'content',
    'importance_score', 'embedding', 'decay_factor', 'auto_committed',
    'source_conversation_id', 'last_accessed', 'created_at', 'updated_at'
  ] as const;
  export type MemoryField = (typeof memoryFields)[number];
  
  export type NewsCategory = {
    id: string;
    user_id: string;
    name: string;
    created_at: Date;
  };
  
  export const newsCategoryFields = [
    'id', 'user_id', 'name', 'created_at'
  ] as const;
  export type NewsCategoryField = (typeof newsCategoryFields)[number];
  
  export type NewsSource = {
    id: string;
    user_id: string;
    category_id: string;
    name: string;
    affiliation?: string;
    medium?: string;
    created_at: Date;
  };
  
  export const newsSourceFields = [
    'id', 'user_id', 'category_id', 'name', 'affiliation', 
    'medium', 'created_at'
  ] as const;
  export type NewsSourceField = (typeof newsSourceFields)[number];
  
  
  export type PortfolioAccount = {
    id: string;
    user_id: string;
    account_name: string;
    account_type: string;
    provider?: string;
    api_credentials?: Record<string, any>;
    is_active: boolean;
    last_sync?: Date;
    created_at: Date;
  };
  
  export const portfolioAccountFields = [
    'id', 'user_id', 'account_name', 'account_type', 'provider',
    'api_credentials', 'is_active', 'last_sync', 'created_at'
  ] as const;
  export type PortfolioAccountField = (typeof portfolioAccountFields)[number];
  
  export type Ticker = {
    id: string;
    user_id: string;
    account_id?: string;
    symbol: string;
    quantity?: number;
    average_cost?: number;
    current_price?: number;
    market_value?: number;
    last_updated: Date;
  };
  
  export const TickerFields = [
    'id', 'user_id', 'account_id', 'symbol', 'quantity', 'average_cost',
    'current_price', 'market_value', 'last_updated'
  ] as const;
  export type TickerField = (typeof TickerFields)[number];
  
  export type CalendarEvent = {
    id: string;
    user_id: string;
    title: string;
    description?: string;
    start_time: Date;
    end_time?: Date;
    all_day: boolean;
    location?: string;
    attendees: string[];
    event_type: string;
    source: string;
    reminder_settings: Record<string, any>;
    created_at: Date;
    updated_at: Date;
  };
  
  export const calendarEventFields = [
    'id', 'user_id', 'title', 'description', 'start_time', 'end_time',
    'all_day', 'location', 'attendees', 'event_type', 'source',
    'reminder_settings', 'created_at', 'updated_at'
  ] as const;
  export type CalendarEventField = (typeof calendarEventFields)[number];
  
  export type Note = {
    id: string;
    user_id: string;
    title?: string;
    content: string;
    note_type: string;
    tags: string[];
    external_sync?: Record<string, any>;
    project_context?: string;
    created_at: Date;
    updated_at: Date;
  };
  
  export const noteFields = [
    'id', 'user_id', 'title', 'content', 'note_type', 'tags',
    'external_sync', 'project_context', 'created_at', 'updated_at'
  ] as const;
  export type NoteField = (typeof noteFields)[number];
  
  export type UserHabit = {
    id: string;
    user_id: string;
    habit_type: string;
    pattern: string;
    frequency_data: Record<string, any>;
    confidence_score: number;
    suggested_automation?: string;
    automation_approved: boolean;
    last_observed: Date;
    created_at: Date;
  };
  
  export const userHabitFields = [
    'id', 'user_id', 'habit_type', 'pattern', 'frequency_data',
    'confidence_score', 'suggested_automation', 'automation_approved',
    'last_observed', 'created_at'
  ] as const;
  export type UserHabitField = (typeof userHabitFields)[number];
  
  export type Automation = {
    id: string;
    user_id: string;
    name: string;
    trigger_conditions: Record<string, any>;
    actions: Record<string, any>;
    is_active: boolean;
    execution_count: number;
    last_executed?: Date;
    created_at: Date;
  };
  
  export const automationFields = [
    'id', 'user_id', 'name', 'trigger_conditions', 'actions',
    'is_active', 'execution_count', 'last_executed', 'created_at'
  ] as const;
  export type AutomationField = (typeof automationFields)[number];
  
  export type VoiceRecording = {
    id: string;
    user_id: string;
    message_id?: string;
    file_path: string;
    duration_seconds?: number;
    transcription?: string;
    confidence_score?: number;
    created_at: Date;
  };
  
  export const voiceRecordingFields = [
    'id', 'user_id', 'message_id', 'file_path', 'duration_seconds',
    'transcription', 'confidence_score', 'created_at'
  ] as const;
  export type VoiceRecordingField = (typeof voiceRecordingFields)[number];
  
  export type Integration = {
    id: string;
    user_id: string;
    integration_type: string;
    configuration: Record<string, any>;
    is_active: boolean;
    last_used?: Date;
    created_at: Date;
  };
  
  export const integrationFields = [
    'id', 'user_id', 'integration_type', 'configuration',
    'is_active', 'last_used', 'created_at'
  ] as const;
  export type IntegrationField = (typeof integrationFields)[number];
  
  export type TransportationPreference = {
    id: string;
    user_id: string;
    transport_type: string;
    preferences: Record<string, any>;
    created_at: Date;
  };
  
  export const transportationPreferenceFields = [
    'id', 'user_id', 'transport_type', 'preferences', 'created_at'
  ] as const;
  export type TransportationPreferenceField = (typeof transportationPreferenceFields)[number];
  
  export type DailyBriefingConfig = {
    id: string;
    user_id: string;
    trigger_phrases: string[];
    enabled_sections: Record<string, boolean>;
    section_order: string[];
    custom_sections: Record<string, any>;
    created_at: Date;
    updated_at: Date;
  };
  
  export const dailyBriefingConfigFields = [
    'id', 'user_id', 'trigger_phrases', 'enabled_sections',
    'section_order', 'custom_sections', 'created_at', 'updated_at'
  ] as const;
  export type DailyBriefingConfigField = (typeof dailyBriefingConfigFields)[number];

  export type GoogleCalendarIntegration = {
    id: string;
    user_id: string;
    access_token: string;
    refresh_token: string;
    expires_at: Date;
    scope: string;
    is_active: boolean;
    last_sync?: Date;
    created_at: Date;
    updated_at: Date;
  };

  export const googleCalendarIntegrationFields = [
    'id', 'user_id', 'access_token', 'refresh_token', 'expires_at',
    'scope', 'is_active', 'last_sync', 'created_at', 'updated_at'
  ] as const;
  export type GoogleCalendarIntegrationField = (typeof googleCalendarIntegrationFields)[number];