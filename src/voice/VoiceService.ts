import { NativeModules, NativeEventEmitter, EmitterSubscription, Platform, PermissionsAndroid } from 'react-native';
import { DeviceEventEmitter } from 'react-native';

const { VoiceModule } = NativeModules;

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
    private eventEmitter: NativeEventEmitter;
    private listeners: EmitterSubscription[] = [];
    private isInitialized: boolean = false;

    private constructor() {
        this.eventEmitter = new NativeEventEmitter(VoiceModule);
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
                PermissionsAndroid.PERMISSIONS.INTERNET,
            ]);

            const audioGranted = grants[PermissionsAndroid.PERMISSIONS.RECORD_AUDIO] === PermissionsAndroid.RESULTS.GRANTED;
            const internetGranted = grants[PermissionsAndroid.PERMISSIONS.INTERNET] === PermissionsAndroid.RESULTS.GRANTED;

            console.log('📱 Android permissions:', { audioGranted, internetGranted });

            if (!audioGranted) {
                console.error('❌ Android: Audio recording permission not granted');
                return false;
            }

            if (!internetGranted) {
                console.warn('⚠️ Android: Internet permission not granted');
                // Continue anyway as this might be automatically granted
            }

            return true;
        } catch (error) {
            console.error('❌ Android: Error checking permissions:', error);
            return false;
        }
    }

    public async startListening(): Promise<boolean> {
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
        try {
            return await VoiceModule.getVoiceState();
        } catch (error) {
            console.error('Error getting voice state:', error);
            throw error;
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
        const subscription = this.eventEmitter.addListener(EVENT_VOICE_STATE_CHANGE, callback);
        this.listeners.push(subscription);
        
        return () => {
            subscription.remove();
            this.listeners = this.listeners.filter(listener => listener !== subscription);
        };
    }

    public onSpeechResult(callback: (event: SpeechResultEvent) => void): () => void {
        const subscription = this.eventEmitter.addListener(EVENT_SPEECH_RESULT, callback);
        this.listeners.push(subscription);
        
        return () => {
            subscription.remove();
            this.listeners = this.listeners.filter(listener => listener !== subscription);
        };
    }

    public onAssistantResponse(callback: (event: AssistantResponseEvent) => void): () => void {
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
        
        // Listen for wake word detection
        DeviceEventEmitter.addListener('wakeWordDetected', (data) => {
            console.log('Wake word detected:', data);
            // Handle wake word detection if needed
        });

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
}

export default VoiceService; 