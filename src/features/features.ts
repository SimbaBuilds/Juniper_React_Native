export interface TickersSettings {
  enabled: boolean;
  tickers: string[];
}

export interface NewsSource {
  id: string;
  name: string;
  affiliation?: string;
  medium?: string;
}

export interface NewsCategory {
  id: string;
  name: string;
  sources: NewsSource[];
}

export interface NewsSettings {
  enabled: boolean;
  xaiLiveSearchEnabled: boolean;
  twitterSearchEnabled: boolean;
  categories: NewsCategory[];
}

export interface CalendarSettings {
  enabled: boolean;
  refreshToken: string;
}

export interface TellMeThingsSettings {
  enabled: boolean;
  triggerPhrases: string[];
  includeTickers: boolean;
  includeNews: boolean;
  includeCalendar: boolean;
}

export interface ProjectUnderstandingSettings {
  enabled: boolean;
  googleKeepEnabled: boolean;
  icloudNotesEnabled: boolean;
  googleDocsEnabled: boolean;
  emailToSelfEnabled: boolean;
}

export interface VoiceSettings {
  deepgramEnabled: boolean;
  baseLanguageModel: 'grok-3' | 'grok-3.5' | 'gpt-4o' | 'claude-3-5-sonnet-20241022';
  generalInstructions: string;
}

// Model display mapping for UI
export const MODEL_DISPLAY_NAMES = {
  'grok-3': 'Grok 3',
  'grok-3.5': 'Grok 3.5', 
  'gpt-4o': 'GPT 4o',
  'claude-3-5-sonnet-20241022': 'Claude Sonnet 3.5'
} as const;

// Helper to get display name for a model value
export const getModelDisplayName = (modelValue: VoiceSettings['baseLanguageModel']): string => {
  return MODEL_DISPLAY_NAMES[modelValue] || modelValue;
};

// Helper to get model value from display name
export const getModelValueFromDisplayName = (displayName: string): VoiceSettings['baseLanguageModel'] | undefined => {
  const entries = Object.entries(MODEL_DISPLAY_NAMES) as [VoiceSettings['baseLanguageModel'], string][];
  const found = entries.find(([_, display]) => display === displayName);
  return found?.[0];
};

export interface FeatureSettings {
  tickers: TickersSettings;
  news: NewsSettings;
  calendar: CalendarSettings;
  tellMeThings: TellMeThingsSettings;
  projectUnderstanding: ProjectUnderstandingSettings;
  voice: VoiceSettings;
}

// Default settings
export const defaultFeatureSettings: FeatureSettings = {
  tickers: {
    enabled: false,
    tickers: ['SPX'],
  },
  news: {
    enabled: false,
    xaiLiveSearchEnabled: false,
    twitterSearchEnabled: false,
    categories: [],
  },
  calendar: {
    enabled: false,
    refreshToken: ''
  },
  tellMeThings: {
    enabled: false,
    triggerPhrases: ['tell me the things', 'do the thing', 'morning'],
    includeTickers: true,
    includeNews: true,
    includeCalendar: true,
  },
  projectUnderstanding: {
    enabled: false,
    googleKeepEnabled: false,
    icloudNotesEnabled: false,
    googleDocsEnabled: true,
    emailToSelfEnabled: false,
  },
  voice: {
    deepgramEnabled: false,
    baseLanguageModel: 'claude-3-5-sonnet-20241022',
    generalInstructions: '',
  }
}; 