// Voice Settings - kept local for immediate UI responsiveness
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

// Simplified FeatureSettings for local use - other settings now managed in database
export interface FeatureSettings {
  voice: VoiceSettings;
}

// Default voice settings
export const defaultFeatureSettings: FeatureSettings = {
  voice: {
    deepgramEnabled: false,
    baseLanguageModel: 'claude-3-5-sonnet-20241022',
    generalInstructions: '',
  }
}; 