import { NativeModules, NativeEventEmitter, EmitterSubscription, Platform, PermissionsAndroid } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const { VoiceModule } = NativeModules;

// Check if VoiceModule is available on startup
if (!VoiceModule) {
    console.warn('VoiceModule not available, onVoiceStateChange not supported');
}

// Voice state enum that matches the native implementation
export enum VoiceState {
    IDLE = 'IDLE',
    WAKE_WORD_DETECTED = 'WAKE_WORD_DETECTED',
    LISTENING = 'LISTENING',
    PROCESSING = 'PROCESSING',
    SPEAKING = 'SPEAKING',
    ERROR = 'ERROR'
}

// Event types
export interface VoiceStateChangeEvent {
    state: VoiceState;
}

export interface SpeechResultEvent {
    text: string;
}

export interface AssistantResponseEvent {
    text: string;
}

// Event names for consistency
const EVENT_SPEECH_RESULT = 'speechResult';
const EVENT_ASSISTANT_RESPONSE = 'assistantResponse';
const EVENT_VOICE_STATE_CHANGE = 'onVoiceStateChange';

export class VoiceService {
    private static instance: VoiceService;
    private eventEmitter: NativeEventEmitter | null;
    private listeners: EmitterSubscription[] = [];
    private isInitialized: boolean = false;
    private cachedVoiceState: VoiceState = VoiceState.IDLE;

    private constructor() {
        this.eventEmitter = VoiceModule ? new NativeEventEmitter(VoiceModule) : null;
        this.listeners = [];
    }

    public static getInstance(): VoiceService {
        if (!VoiceService.instance) {
            VoiceService.instance = new VoiceService();
        }
        return VoiceService.instance;
    }

    /**
     * Check Android permissions before starting voice operations
     */
    private async checkAndroidPermissions(): Promise<boolean> {
        if (Platform.OS !== 'android') {
            return true;
        }

        try {
            console.log('📱 Android: Checking voice and network permissions...');
            
            const grants = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
            ]);

            const audioGranted = grants[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;

            console.log('📱 Android permissions:', { audioGranted });

            if (!audioGranted) {
                console.error('❌ Android: Audio recording permission not granted');
                return false;
            }

            return true;
        } catch (error) {
            console.error('❌ Android: Error checking permissions:', error);
            return false;
        }
    }

    public async startListening(): Promise<boolean> {
        if (!VoiceModule) {
            console.warn('🎤 VoiceModule not available, cannot start listening');
            return false;
        }

        try {
            console.log('🎤 Starting voice recognition with Android-specific validation...');
            
            // Check Android permissions first
            const permissionsOk = await this.checkAndroidPermissions();
            if (!permissionsOk) {
                throw new Error('Required permissions not granted');
            }
            
            // Test network connectivity before starting voice (Android-specific)
            if (Platform.OS === 'android') {
                try {
                    console.log('📱 Android: Testing network connectivity...');
                    const controller = new AbortController();
                    const timeoutId = setTimeout(() => controller.abort(), 3000); // Shorter timeout for Android
                    
                    await fetch('https://www.google.com', { 
                        method: 'HEAD', 
                        signal: controller.signal 
                    });
                    clearTimeout(timeoutId);
                    console.log('✅ Android: Network connectivity confirmed');
                    
                    // Add extra delay for Android network stability
                    await new Promise(resolve => setTimeout(resolve, 200));
                } catch (networkError) {
                    console.warn('⚠️ Android: Network connectivity issue detected:', networkError);
                    // Continue anyway, but log the issue
                    console.log('📱 Android: Continuing despite network test failure');
                }
            }
            
            console.log('📱 Android: Starting native voice module...');
            const result = await VoiceModule.startListening();
            console.log('📱 Android: Voice module started:', result);
            
            return result;
        } catch (error) {
            console.error('❌ Android: Error starting voice recognition:', error);
            throw error;
        }
    }

    /**
     * Start continuous conversation mode (iOS specific)
     * This simulates the Android wake word flow for iOS
     */
    public async startContinuousConversation(): Promise<boolean> {
        if (!VoiceModule) {
            console.warn('🎤 VoiceModule not available, cannot start continuous conversation');
            return false;
        }

        try {
            if (Platform.OS !== 'ios') {
                console.warn('⚠️ startContinuousConversation is iOS-specific, using startListening instead');
                return this.startListening();
            }
            
            console.log('🎤 iOS: Starting continuous conversation mode...');
            
            // iOS doesn't need permissions check like Android
            console.log('📱 iOS: Calling native startContinuousConversation...');
            const result = await VoiceModule.startContinuousConversation();
            console.log('📱 iOS: Continuous conversation started:', result);
            
            return result;
        } catch (error) {
            console.error('❌ iOS: Error starting continuous conversation:', error);
            throw error;
        }
    }

    public async stopListening(): Promise<boolean> {
        try {
            console.log('📱 Android: Stopping voice recognition...');
            const result = await VoiceModule.stopListening();
            
            // Add delay for Android to ensure proper cleanup
            if (Platform.OS === 'android') {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            return result;
        } catch (error) {
            console.error('Error stopping voice recognition:', error);
            throw error;
        }
    }

    public async interruptSpeech(): Promise<boolean> {
        try {
            console.log('📱 Android: Interrupting speech...');
            const result = await VoiceModule.interruptSpeech();
            
            // Add delay for Android to ensure proper state transition
            if (Platform.OS === 'android') {
                await new Promise(resolve => setTimeout(resolve, 150));
            }
            
            return result;
        } catch (error) {
            console.error('Error interrupting speech:', error);
            throw error;
        }
    }

    public async getVoiceState(): Promise<VoiceState> {
        if (!VoiceModule) {
            console.warn('VoiceModule not available, returning cached state');
            return this.cachedVoiceState;
        }

        try {
            const nativeState = await VoiceModule.getVoiceState();
            // Update cached state with fresh native state
            this.cachedVoiceState = nativeState as VoiceState;
            return nativeState;
        } catch (error) {
            console.error('Error getting voice state:', error);
            throw error;
        }
    }

    /**
     * Get cached voice state immediately (synchronous)
     * Use this for atomic state checks to avoid race conditions
     */
    public getCurrentVoiceStateSync(): VoiceState {
        return this.cachedVoiceState;
    }

    /**
     * Get current voice state with cache update (async but faster than full native call)
     */
    public async getCurrentVoiceStateAsync(): Promise<VoiceState> {
        try {
            // First return cached state immediately
            const cachedState = this.cachedVoiceState;
            
            // Then update cache with fresh native state in background
            this.getVoiceState().catch(err => {
                console.warn('Background voice state update failed:', err);
            });
            
            return cachedState;
        } catch (error) {
            console.error('Error getting current voice state:', error);
            return this.cachedVoiceState;
        }
    }

    public async speakResponse(text: string): Promise<boolean> {
        try {
            console.log('📱 Android: Speaking response...');
            const result = await VoiceModule.speakResponse(text);
            
            // Add delay for Android TTS stability
            if (Platform.OS === 'android') {
                await new Promise(resolve => setTimeout(resolve, 100));
            }
            
            return result;
        } catch (error) {
            console.error('Error speaking response:', error);
            throw error;
        }
    }

    public async handleApiResponse(requestId: string, response: string): Promise<boolean> {
        try {
            console.log('📱 Sending API response back to Android:', { requestId, responseLength: response.length });
            const result = await VoiceModule.handleApiResponse(requestId, response);
            return result;
        } catch (error) {
            console.error('Error sending API response to Android:', error);
            throw error;
        }
    }

    public onVoiceStateChange(callback: (event: VoiceStateChangeEvent) => void): () => void {
        if (!this.eventEmitter) {
            console.warn('VoiceModule not available, onVoiceStateChange not supported');
            return () => {};
        }
        const subscription = this.eventEmitter.addListener(EVENT_VOICE_STATE_CHANGE, (event: VoiceStateChangeEvent) => {
            
            // Update cached state immediately when we receive state changes
            this.cachedVoiceState = event.state;
            
            // Call the original callback
            callback(event);
            
        });
        this.listeners.push(subscription);
        
        return () => {
            subscription.remove();
            this.listeners = this.listeners.filter(listener => listener !== subscription);
        };
    }

    public onSpeechResult(callback: (event: SpeechResultEvent) => void): () => void {
        if (!this.eventEmitter) {
            console.warn('VoiceModule not available, onSpeechResult not supported');
            return () => {};
        }
        const subscription = this.eventEmitter.addListener(EVENT_SPEECH_RESULT, callback);
        this.listeners.push(subscription);
        
        return () => {
            subscription.remove();
            this.listeners = this.listeners.filter(listener => listener !== subscription);
        };
    }

    public onAssistantResponse(callback: (event: AssistantResponseEvent) => void): () => void {
        if (!this.eventEmitter) {
            console.warn('VoiceModule not available, onAssistantResponse not supported');
            return () => {};
        }
        const subscription = this.eventEmitter.addListener(EVENT_ASSISTANT_RESPONSE, callback);
        this.listeners.push(subscription);
        
        return () => {
            subscription.remove();
            this.listeners = this.listeners.filter(listener => listener !== subscription);
        };
    }

    public removeAllListeners(): void {
        this.listeners.forEach(listener => listener.remove());
        this.listeners = [];
    }

    /**
     * Initialize voice service
     */
    initialize(): void {
        if (this.isInitialized) {
            console.log('🎤 VoiceService already initialized, skipping...');
            return;
        }
        
        console.log('🎤 VoiceService initializing...');
        
        // Set up event listeners
        this.setupEventListeners();
        
        this.isInitialized = true;
        console.log('🎤 VoiceService initialized');
    }

    /**
     * Set up event listeners for native voice events
     */
    private setupEventListeners(): void {
        console.log('🎤 Setting up voice event listeners');
        
        // Wake word detection is handled by WakeWordContext, not here

        // Listen for speech results
        DeviceEventEmitter.addListener('speechResult', (data) => {
            console.log('Speech result received:', data);
            // Handle speech result if needed
        });

        // Listen for voice state changes
        DeviceEventEmitter.addListener('voiceStateChanged', (data) => {
            console.log('🎙️ Voice state changed to:', data);
            // Handle voice state change if needed
        });

        // Listen for text processing requests from native
        DeviceEventEmitter.addListener('processTextFromNative', (data) => {
            console.log('📝 Process text request from native:', data);
            this.handleProcessTextFromNative(data);
        });
    }

    /**
     * Handle text processing request from native Android code
     * This method will be called from VoiceContext which has access to serverApi
     */
    private async handleProcessTextFromNative(data: any): Promise<void> {
        try {
            const { text, requestId } = data;

            
            
            // Emit an event that VoiceContext can listen to
            DeviceEventEmitter.emit('processTextRequest', { text, requestId });
            
            
        } catch (error) {
            console.error('🟡 VOICE_SERVICE: ❌ Error processing text from native:', error);
            
            // Send error response back to native
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            try {
                await VoiceModule.handleApiResponse(data.requestId, `Error: ${errorMessage}`);
            } catch (responseError) {
            }
        }
    }

    /**
     * Get available Deepgram voices
     */
    public async getAvailableDeepgramVoices(): Promise<string[]> {
        try {
            if (Platform.OS !== 'android') {
                return ['aura-2-mars-en']; // Default for non-Android platforms
            }
            
            const result = await VoiceModule.getAvailableDeepgramVoices();
            return result.voices || ['aura-2-mars-en'];
        } catch (error) {
            console.error('Error getting available Deepgram voices:', error);
            return ['aura-2-mars-en'];
        }
    }

    /**
     * Set the selected Deepgram voice
     */
    public async setSelectedDeepgramVoice(voice: string): Promise<boolean> {
        console.log('🎵 DEEPGRAM_VOICE: setSelectedDeepgramVoice called with voice:', voice);
        try {
            if (Platform.OS !== 'android') {
                console.warn('🎵 DEEPGRAM_VOICE: Voice selection only supported on Android, current platform:', Platform.OS);
                return false;
            }
            
            console.log('🎵 DEEPGRAM_VOICE: Calling native VoiceModule.setSelectedDeepgramVoice...');
            const result = await VoiceModule.setSelectedDeepgramVoice(voice);
            console.log('🎵 DEEPGRAM_VOICE: Native call result:', result);
            
            if (result.success) {
                console.log('🎵 DEEPGRAM_VOICE: ✅ Successfully set Deepgram voice to:', voice);
            } else {
                console.error('🎵 DEEPGRAM_VOICE: ❌ Failed to set Deepgram voice');
            }
            
            return result.success;
        } catch (error) {
            console.error('🎵 DEEPGRAM_VOICE: ❌ Error setting selected Deepgram voice:', error);
            return false;
        }
    }

    /**
     * Get the selected Deepgram voice
     */
    public async getSelectedDeepgramVoice(): Promise<string> {
        console.log('🎵 DEEPGRAM_VOICE: getSelectedDeepgramVoice called');
        try {
            if (Platform.OS !== 'android') {
                console.warn('🎵 DEEPGRAM_VOICE: Voice selection only supported on Android, returning default');
                return 'aura-2-mars-en'; // Default for non-Android platforms
            }
            
            console.log('🎵 DEEPGRAM_VOICE: Calling native VoiceModule.getSelectedDeepgramVoice...');
            const result = await VoiceModule.getSelectedDeepgramVoice();
            console.log('🎵 DEEPGRAM_VOICE: Native call result:', result);
            
            const voice = result.voice || 'aura-2-mars-en';
            console.log('🎵 DEEPGRAM_VOICE: ✅ Current selected voice:', voice);
            
            return voice;
        } catch (error) {
            console.error('🎵 DEEPGRAM_VOICE: ❌ Error getting selected Deepgram voice:', error);
            return 'aura-2-mars-en';
        }
    }

    /**
     * Preview a Deepgram voice with sample text
     */
    public async previewDeepgramVoice(voice: string, text: string = "Hi, I'm Assistant. Ask me to do anything, and I'll see what I can do."): Promise<boolean> {
        console.log('🎵 DEEPGRAM_PREVIEW: previewDeepgramVoice called');
        console.log('🎵 DEEPGRAM_PREVIEW: Voice:', voice);
        console.log('🎵 DEEPGRAM_PREVIEW: Text:', text);
        try {
            if (Platform.OS !== 'android') {
                console.warn('🎵 DEEPGRAM_PREVIEW: Voice preview only supported on Android, current platform:', Platform.OS);
                return false;
            }
            
            console.log('🎵 DEEPGRAM_PREVIEW: Calling native VoiceModule.previewDeepgramVoice...');
            const result = await VoiceModule.previewDeepgramVoice(voice, text);
            console.log('🎵 DEEPGRAM_PREVIEW: Native call result:', result);
            
            if (result) {
                console.log('🎵 DEEPGRAM_PREVIEW: ✅ Voice preview initiated successfully');
            } else {
                console.error('🎵 DEEPGRAM_PREVIEW: ❌ Failed to start voice preview');
            }
            
            return result;
        } catch (error) {
            console.error('🎵 DEEPGRAM_PREVIEW: ❌ Error previewing Deepgram voice:', error);
            return false;
        }
    }

    /**
     * Update voice settings in native layer
     */
    public async updateVoiceSettings(deepgramEnabled?: boolean, selectedDeepgramVoice?: string): Promise<boolean> {

        
        try {
            if (Platform.OS !== 'android') {
                console.log('🎵 VOICE_SETTINGS: Voice settings update only supported on Android, current platform:', Platform.OS);
                return true; // Return true to indicate graceful handling on iOS
            }
            

            const nativeCallStartTime = Date.now();
            const result = await VoiceModule.updateVoiceSettings(deepgramEnabled, selectedDeepgramVoice);
            const nativeCallEndTime = Date.now();
            

            if (result) {
     
                const reloadStartTime = Date.now();
                const reloadResult = await this.reloadNativeConfiguration();
                const reloadEndTime = Date.now();
                
                
                if (reloadResult) {
                } else {
                    console.warn('🎵 VOICE_SETTINGS: ⚠️ Native configuration reload failed, but settings were updated');
                }
                
                console.log('🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE COMPLETED ==========');
            } else {
                console.error('🎵 VOICE_SETTINGS: ❌ Failed to update voice settings in native layer');
            }
            
            return result;
        } catch (error) {
            console.error('🎵 VOICE_SETTINGS: ========== VOICE SETTINGS UPDATE ERROR ==========');
            console.error('🎵 VOICE_SETTINGS: ❌ Error updating voice settings:', error);
            console.error('🎵 VOICE_SETTINGS: Error type:', error instanceof Error ? error.constructor.name : typeof error);
            console.error('🎵 VOICE_SETTINGS: Error stack:', error instanceof Error ? error.stack : 'No stack available');
            return false;
        }
    }

    /**
     * Reload native voice configuration after settings changes
     */
    public async reloadNativeConfiguration(): Promise<boolean> {

        
        try {
            if (Platform.OS !== 'android') {
                console.warn('🎵 RELOAD_CONFIG: ⚠️ Configuration reload only supported on Android, current platform:', Platform.OS);
                return false;
            }
            
            // Reset Deepgram client to pick up new settings

            const resetStartTime = Date.now();
            const resetResult = await VoiceModule.resetDeepgramClient();
            const resetEndTime = Date.now();
            

            const success = resetResult?.success ?? false;
            
            if (success) {
                console.log('🎵 RELOAD_CONFIG: ✅ Native configuration reloaded successfully');
            } else {
                console.error('🎵 RELOAD_CONFIG: ❌ Failed to reload native configuration');
            }
            
            return success;
        } catch (error) {
            console.error('🎵 RELOAD_CONFIG: ========== RELOAD CONFIGURATION ERROR ==========');
            console.error('🎵 RELOAD_CONFIG: ❌ Error reloading native configuration:', error);
            console.error('🎵 RELOAD_CONFIG: Error type:', error instanceof Error ? error.constructor.name : typeof error);
            console.error('🎵 RELOAD_CONFIG: Error stack:', error instanceof Error ? error.stack : 'No stack available');
            return false;
        }
    }
}

export default VoiceService; 