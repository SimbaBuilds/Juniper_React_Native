/**
 * Voice state enum representing the current state of voice processing
 */
export enum VoiceState {
  IDLE = 'IDLE',
  WAKE_WORD_DETECTED = 'WAKE_WORD_DETECTED',
  LISTENING = 'LISTENING',
  PROCESSING = 'PROCESSING',
  SPEAKING = 'SPEAKING',
  ERROR = 'ERROR'
}

/**
 * Voice context state interface
 */
export interface VoiceContextState {
  voiceState: VoiceState;
  isWakeWordEnabled: boolean;
  error: string | null;
  transcript: string;
  response: string;
  isListening: boolean;
  isSpeaking: boolean;
  isError: boolean;
  chatHistory: { role: 'user' | 'assistant'; content: string; timestamp: number }[];
  inputMode: 'voice' | 'text';
  integrationInProgress: boolean;
  currentRequestId: string | null;
  requestStatus: string | null;
  activeConversationId: string | null;
}

/**
 * Voice context actions interface
 */
export interface VoiceContextActions {
  setVoiceState: (state: VoiceState) => void;
  setWakeWordEnabled: (enabled: boolean) => void;
  setError: (error: string | null) => void;
  setTranscript: (transcript: string) => void;
  setResponse: (response: string) => void;
  startListening: () => Promise<boolean>;
  startContinuousConversation: () => Promise<boolean>; // iOS-specific continuous conversation
  stopListening: () => Promise<boolean>;
  resetState: () => void;
  interruptSpeech: () => Promise<boolean>;
  clearChatHistory: () => void;
  refreshSettings: () => Promise<void>;
  sendTextMessage: (text: string, integrationInProgress?: boolean, imageUrl?: string) => Promise<void>;
  continuePreviousChat: (messages: { role: 'user' | 'assistant'; content: string; timestamp: number }[]) => void;
  cancelRequest: () => Promise<boolean>;
  isRequestInProgress: boolean;
  setCurrentRequestId: (id: string | null) => void;
  setRequestStatus: (status: string | null) => void;
  
  // Voice settings
  voiceSettings: any;
  settingsLoading: boolean;
  updateVoiceSettings: (updates: any) => Promise<void>;
}

/**
 * Full voice context interface
 */
export interface VoiceContextValue extends VoiceContextState, VoiceContextActions {}

/**
 * Interface for the wake word hook
 */
export interface WakeWordHookResult {
  isAvailable: boolean;
  isActive: boolean;
  isLoading: boolean;
  error: string | null;
  startDetection: () => Promise<boolean>;
  stopDetection: () => Promise<boolean>;
  toggleDetection: () => Promise<boolean>;
  setAccessKey: (accessKey: string) => Promise<boolean>;
}
