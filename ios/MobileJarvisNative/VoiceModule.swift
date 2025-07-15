import Foundation
import React

@objc(VoiceModule)
class VoiceModule: RCTEventEmitter {
    
    private let voiceManager = VoiceManager.shared
    private var hasListeners = false
    
    // MARK: - API Callback Tracking (matching Android pattern)
    private var pendingApiCallbacks: [String: (String) -> Void] = [:]
    private var timeoutTimers: [String: Timer] = [:]
    
    override init() {
        super.init()
        setupVoiceManagerCallbacks()
        setupApiCallback()
    }
    
    // MARK: - React Native Event Emitter
    override func supportedEvents() -> [String]! {
        return [
            "onVoiceStateChanged",
            "onSpeechResult",
            "onVoiceError",
            "processTextFromNative",
            "VoiceResponseUpdate"
        ]
    }
    
    override func startObserving() {
        hasListeners = true
    }
    
    override func stopObserving() {
        hasListeners = false
    }
    
    // MARK: - Voice Manager Callbacks
    private func setupVoiceManagerCallbacks() {
        voiceManager.onStateChanged = { [weak self] state in
            self?.sendEvent(withName: "onVoiceStateChanged", body: [
                "state": state.description
            ])
        }
        
        voiceManager.onSpeechResult = { [weak self] text, isFinal in
            self?.sendEvent(withName: "onSpeechResult", body: [
                "text": text,
                "isFinal": isFinal
            ])
        }
        
        voiceManager.onError = { [weak self] error, message in
            self?.sendEvent(withName: "onVoiceError", body: [
                "error": error.description,
                "message": message
            ])
        }
    }
    
    // MARK: - **NEW: API Callback Setup (matching Android pattern)**
    private func setupApiCallback() {
        voiceManager.setReactNativeApiCallback { [weak self] text, requestId in
            print("🔵 VoiceModule: API callback triggered, emitting processTextFromNative")
            print("🔵 VoiceModule: text: '\(text)', requestId: '\(requestId)'")
            
            // Store the callback for when the response comes back via handleApiResponse
            self?.pendingApiCallbacks[requestId] = { response in
                print("🔵 VoiceModule: Executing stored callback for requestId: \(requestId)")
                // The VoiceManager will handle the TTS and state management
            }
            
            // Emit the event to React Native
            self?.sendEvent(withName: "processTextFromNative", body: [
                "text": text,
                "requestId": requestId
            ])
            
            // Set timeout for the request
            let timeoutTimer = Timer.scheduledTimer(withTimeInterval: 30.0, repeats: false) { _ in
                self?.timeoutTimers.removeValue(forKey: requestId)
                if let callback = self?.pendingApiCallbacks.removeValue(forKey: requestId) {
                    print("⏰ VoiceModule: Timeout for request: \(requestId)")
                    // VoiceManager will handle the timeout response
                }
            }
            
            self?.timeoutTimers[requestId] = timeoutTimer
        }
    }
    
    // MARK: - React Native Methods
    @objc func requestPermissions(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        voiceManager.requestPermissions { granted in
            resolve(granted)
        }
    }
    
    @objc func startListening(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎙️ VoiceModule: startListening called from React Native")
        voiceManager.startListening()
        resolve(true)
    }
    
    /**
     * Start continuous conversation mode (iOS equivalent of Android wake word trigger)
     * This simulates the wake word detection flow for iOS
     */
    @objc func startContinuousConversation(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎙️ VoiceModule: startContinuousConversation called - iOS continuous mode")
        
        // Simulate wake word detection state for iOS
        voiceManager.simulateWakeWordDetection()
        
        // Start listening for speech
        voiceManager.startListening()
        
        resolve(true)
    }
    
    @objc func stopListening(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🛑 VoiceModule: stopListening called from React Native")
        voiceManager.stopListening()
        resolve(true)
    }
    
    @objc func getCurrentState(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let state = voiceManager.getCurrentState()
        resolve(state.description)
    }
    
    @objc func isListening(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        let listening = voiceManager.isCurrentlyListening()
        resolve(listening)
    }
    
    // MARK: - **NEW: CONVERSATION FLOW METHODS (matching Android)**
    
    /**
     * Handle API response from React Native (matching Android handleApiResponse)
     */
    @objc func handleApiResponse(_ requestId: String, _ response: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🟢 VoiceModule: handleApiResponse called from React Native")
        print("🟢 VoiceModule: RequestId: \(requestId)")
        print("🟢 VoiceModule: Response length: \(response.count)")
        print("🟢 VoiceModule: Response preview: \(String(response.prefix(100)))...")
        
        do {
            // Emit the response back to React Native for UI display
            print("🟢 VoiceModule: Emitting VoiceResponseUpdate event to React Native")
            let responseParams: [String: Any] = [
                "response": response,
                "timestamp": Date().timeIntervalSince1970 * 1000 // milliseconds
            ]
            
            sendEvent(withName: "VoiceResponseUpdate", body: responseParams)
            print("🟢 VoiceModule: ✅ VoiceResponseUpdate event emitted successfully")
            
            // Cancel timeout timer
            timeoutTimers.removeValue(forKey: requestId)?.invalidate()
            
            // Remove the callback (VoiceManager handles the actual response processing)
            pendingApiCallbacks.removeValue(forKey: requestId)
            
            // Forward to VoiceManager to handle TTS and state management
            voiceManager.handleApiResponse(requestId, response)
            
            resolve(true)
            
        } catch {
            print("❌ VoiceModule: Error in handleApiResponse: \(error)")
            reject("API_RESPONSE_ERROR", "Failed to handle API response: \(error.localizedDescription)", error)
        }
    }
    
    /**
     * Interrupt current speech (matching Android interruptSpeech)
     */
    @objc func interruptSpeech(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🛑 VoiceModule: interruptSpeech called from React Native")
        
        do {
            let result = voiceManager.interruptSpeech()
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error interrupting speech: \(error)")
            reject("ERR_VOICE_INTERRUPT", error.localizedDescription, error)
        }
    }
    
    /**
     * Speak response directly (for testing purposes, matching Android)
     */
    @objc func speakResponse(_ text: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎵 VoiceModule: speakResponse called from React Native")
        print("🎵 VoiceModule: Text length: \(text.count)")
        
        do {
            let ttsManager = TTSManager.shared
            
            ttsManager.speak(text) {
                print("🎵 VoiceModule: TTS completed successfully")
                resolve(true)
            }
            
        } catch {
            print("❌ VoiceModule: Error in speakResponse: \(error)")
            reject("ERR_TTS", error.localizedDescription, error)
        }
    }
    
    /**
     * Test TTS directly (for debugging, matching Android)
     */
    @objc func testTTS(_ text: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎵 VoiceModule: testTTS called with text: \(text)")
        
        do {
            let ttsManager = TTSManager.shared
            
            if !ttsManager.isInitialized() {
                print("⚠️ VoiceModule: TTS not initialized")
                resolve(false)
                return
            }
            
            ttsManager.speak(text) {
                print("🎵 VoiceModule: Test TTS completed successfully")
                resolve(true)
            }
            
        } catch {
            print("❌ VoiceModule: Error in testTTS: \(error)")
            reject("ERR_TEST_TTS", error.localizedDescription, error)
        }
    }
    
    /**
     * Get voice state (enhanced version)
     */
    @objc func getVoiceState(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let state = voiceManager.getCurrentState()
            resolve(state.description)
        } catch {
            print("❌ VoiceModule: Error getting voice state: \(error)")
            reject("ERR_VOICE_STATE", error.localizedDescription, error)
        }
    }
    
    /**
     * Clear all pending native state (for cleanup between chat sessions)
     */
    @objc func clearNativeState(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            print("🧹 VoiceModule: Clearing all native state...")
            
            // Clear pending callbacks
            let pendingCount = pendingApiCallbacks.count
            pendingApiCallbacks.removeAll()
            print("🧹 VoiceModule: Cleared \(pendingCount) pending API callbacks")
            
            // Cancel and clear timeout timers
            timeoutTimers.values.forEach { timer in
                timer.invalidate()
            }
            let timeoutCount = timeoutTimers.count
            timeoutTimers.removeAll()
            print("🧹 VoiceModule: Cancelled \(timeoutCount) timeout timers")
            
            // Stop any current TTS
            TTSManager.shared.stopSpeaking()
            
            print("🧹 VoiceModule: ✅ Native state cleared successfully")
            resolve(true)
            
        } catch {
            print("❌ VoiceModule: Error clearing native state: \(error)")
            reject("ERR_CLEAR_STATE", error.localizedDescription, error)
        }
    }
    
    // MARK: - STT Provider Management (matching Android)
    
    /**
     * Set STT provider
     */
    @objc func setSTTProvider(_ provider: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎙️ VoiceModule: setSTTProvider called with: \(provider)")
        
        do {
            voiceManager.setSTTProvider(provider)
            resolve(true)
        } catch {
            print("❌ VoiceModule: Error setting STT provider: \(error)")
            reject("ERR_SET_STT_PROVIDER", error.localizedDescription, error)
        }
    }
    
    /**
     * Get current STT provider
     */
    @objc func getSTTProvider(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let provider = voiceManager.getSTTProvider()
            resolve(provider)
        } catch {
            print("❌ VoiceModule: Error getting STT provider: \(error)")
            reject("ERR_GET_STT_PROVIDER", error.localizedDescription, error)
        }
    }
    
    /**
     * Get available STT providers
     */
    @objc func getAvailableSTTProviders(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let providers = voiceManager.getAvailableSTTProviders()
            resolve(providers)
        } catch {
            print("❌ VoiceModule: Error getting available STT providers: \(error)")
            reject("ERR_GET_STT_PROVIDERS", error.localizedDescription, error)
        }
    }
    
    /**
     * Get available STT providers with display names
     */
    @objc func getAvailableSTTProvidersWithNames(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let providers = voiceManager.getAvailableSTTProvidersWithNames()
            resolve(providers)
        } catch {
            print("❌ VoiceModule: Error getting STT providers with names: \(error)")
            reject("ERR_GET_STT_PROVIDERS_NAMES", error.localizedDescription, error)
        }
    }
    
    /**
     * Test STT provider connectivity
     */
    @objc func testSTTProvider(_ provider: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🧪 VoiceModule: testSTTProvider called with: \(provider)")
        
        voiceManager.testSTTProvider(provider) { success, message in
            let result = [
                "success": success,
                "message": message
            ] as [String : Any]
            resolve(result)
        }
    }
    
    // MARK: - TTS Provider Management (matching Android)
    
    /**
     * Set TTS provider
     */
    @objc func setTTSProvider(_ provider: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        print("🎵 VoiceModule: setTTSProvider called with: \(provider)")
        
        do {
            let ttsManager = TTSManager.shared
            
            if provider == "deepgram" {
                ttsManager.setTTSProvider(.deepgram)
            } else if provider == "native" {
                ttsManager.setTTSProvider(.native)
            } else {
                reject("ERR_INVALID_TTS_PROVIDER", "Invalid TTS provider: \(provider)", nil)
                return
            }
            
            resolve(true)
        } catch {
            print("❌ VoiceModule: Error setting TTS provider: \(error)")
            reject("ERR_SET_TTS_PROVIDER", error.localizedDescription, error)
        }
    }
    
    /**
     * Get current TTS provider
     */
    @objc func getTTSProvider(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            let provider = ttsManager.getTTSProvider()
            
            let providerString = provider == .deepgram ? "deepgram" : "native"
            resolve(providerString)
        } catch {
            print("❌ VoiceModule: Error getting TTS provider: \(error)")
            reject("ERR_GET_TTS_PROVIDER", error.localizedDescription, error)
        }
    }
    
    /**
     * Get available TTS providers
     */
    @objc func getAvailableTTSProviders(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let providers = ["native", "deepgram"]
            resolve(providers)
        } catch {
            print("❌ VoiceModule: Error getting available TTS providers: \(error)")
            reject("ERR_GET_TTS_PROVIDERS", error.localizedDescription, error)
        }
    }
    
    /**
     * Get available Deepgram voices (matching Android)
     */
    @objc func getAvailableDeepgramVoices(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            let voices = ttsManager.getAvailableDeepgramVoices()
            
            let result = [
                "voices": voices
            ] as [String : Any]
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error getting available Deepgram voices: \(error)")
            reject("ERR_GET_VOICES", error.localizedDescription, error)
        }
    }
    
    /**
     * Set selected Deepgram voice (matching Android)
     */
    @objc func setSelectedDeepgramVoice(_ voice: String, resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            ttsManager.setSelectedDeepgramVoice(voice)
            
            let result = [
                "success": true
            ] as [String : Any]
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error setting Deepgram voice: \(error)")
            reject("ERR_SET_VOICE", error.localizedDescription, error)
        }
    }
    
    /**
     * Get selected Deepgram voice (matching Android)
     */
    @objc func getSelectedDeepgramVoice(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            let voice = ttsManager.getSelectedDeepgramVoice()
            resolve(voice)
        } catch {
            print("❌ VoiceModule: Error getting selected Deepgram voice: \(error)")
            reject("ERR_GET_SELECTED_VOICE", error.localizedDescription, error)
        }
    }
    
    /**
     * Get TTS status (matching Android)
     */
    @objc func getTTSStatus(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            let deepgramAPI = DeepgramAPI.shared
            
            let result = [
                "deepgramEnabled": ttsManager.getTTSProvider() == .deepgram,
                "selectedVoice": ttsManager.getSelectedDeepgramVoice(),
                "deepgramClientInitialized": deepgramAPI.isInitialized(),
                "currentVoiceState": voiceManager.getCurrentState().description,
                "availableVoices": ttsManager.getAvailableDeepgramVoices(),
                "timestamp": Date().timeIntervalSince1970 * 1000
            ] as [String : Any]
            
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error getting TTS status: \(error)")
            reject("ERR_TTS_STATUS", error.localizedDescription, error)
        }
    }
    
    // MARK: - Configuration and Testing
    
    /**
     * Validate configuration
     */
    @objc func validateConfiguration(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let configManager = ConfigManager.shared
            let errors = configManager.validateConfiguration()
            
            let result = [
                "isValid": errors.isEmpty,
                "errors": errors,
                "timestamp": Date().timeIntervalSince1970 * 1000
            ] as [String : Any]
            
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error validating configuration: \(error)")
            reject("ERR_CONFIG_VALIDATION", error.localizedDescription, error)
        }
    }
    
    /**
     * Get voice system status (comprehensive status check)
     */
    @objc func getVoiceSystemStatus(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
        do {
            let ttsManager = TTSManager.shared
            let deepgramAPI = DeepgramAPI.shared
            let whisperAPI = WhisperAPI.shared
            let audioManager = AudioManager.shared
            
            let result = [
                "stt": [
                    "currentProvider": voiceManager.getSTTProvider(),
                    "availableProviders": voiceManager.getAvailableSTTProviders()
                ],
                "tts": [
                    "currentProvider": ttsManager.getTTSProvider() == .deepgram ? "deepgram" : "native",
                    "availableProviders": ["native", "deepgram"],
                    "selectedVoice": ttsManager.getSelectedDeepgramVoice(),
                    "availableVoices": ttsManager.getAvailableDeepgramVoices()
                ],
                "services": [
                    "deepgramInitialized": deepgramAPI.isInitialized(),
                    "whisperInitialized": whisperAPI.isInitialized(),
                    "audioManagerInitialized": true
                ],
                "state": [
                    "currentVoiceState": voiceManager.getCurrentState().description,
                    "isListening": voiceManager.isCurrentlyListening(),
                    "isSpeaking": voiceManager.isCurrentlySpeaking()
                ],
                "timestamp": Date().timeIntervalSince1970 * 1000
            ] as [String : Any]
            
            resolve(result)
        } catch {
            print("❌ VoiceModule: Error getting voice system status: \(error)")
            reject("ERR_SYSTEM_STATUS", error.localizedDescription, error)
        }
    }
    
    // MARK: - Helper Methods
    override func sendEvent(withName name: String!, body: Any!) {
        if hasListeners {
            super.sendEvent(withName: name, body: body)
        }
    }
    
    // MARK: - Required for RCTEventEmitter
    @objc override static func requiresMainQueueSetup() -> Bool {
        return true
    }
} 