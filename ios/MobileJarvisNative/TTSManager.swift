import Foundation
import AVFoundation

// MARK: - TTS Provider Types
enum TTSProvider {
    case deepgram
    case native
}

// MARK: - TTS Configuration
struct TTSConfiguration {
    let provider: TTSProvider
    let deepgramVoice: String
    let nativeSpeechRate: Float
    let nativeVoicePitch: Float
    let volume: Float
}

@objc(TTSManager)
class TTSManager: NSObject {
    
    // MARK: - Singleton
    static let shared = TTSManager()
    
    // MARK: - Properties
    private var configManager: ConfigManager
    private var deepgramAPI: DeepgramAPI
    private var speechSynthesizer: AVSpeechSynthesizer
    private var audioManager: AudioManager
    
    // Current TTS state
    private var currentProvider: TTSProvider = .native
    private var isSpeaking = false
    private var currentSpeechUtterance: AVSpeechUtterance?
    private var selectedDeepgramVoice: String = DeepgramAPI.DEFAULT_VOICE
    
    // Completion handlers
    private var completionHandler: ((Bool) -> Void)?
    
    // Rate limiting
    private var lastSpeechTime: Date?
    private let minimumSpeechInterval: TimeInterval = 0.5 // Minimum 500ms between TTS calls
    
    // MARK: - Configuration
    private let config = ConfigManager.shared
    
    // MARK: - Audio Session
    private var previousAudioCategory: AVAudioSession.Category?
    private var previousAudioMode: AVAudioSession.Mode?
    
    // MARK: - Initialization
    private override init() {
        self.configManager = ConfigManager.shared
        self.deepgramAPI = DeepgramAPI.shared
        self.speechSynthesizer = AVSpeechSynthesizer()
        self.audioManager = AudioManager.shared
        
        super.init()
        
        setupSpeechSynthesizer()
        loadConfiguration()
    }
    
    private func setupSpeechSynthesizer() {
        speechSynthesizer.delegate = self
    }
    
    private func loadConfiguration() {
        let deepgramEnabled = configManager.isDeepgramTTSEnabled()
        currentProvider = deepgramEnabled ? .deepgram : .native
        
        // Load selected voice if using Deepgram
        if currentProvider == .deepgram {
            selectedDeepgramVoice = configManager.getSelectedDeepgramVoice()
        }
        
        print("🎵 TTS_MANAGER: Configuration loaded - provider: \(currentProvider), voice: \(selectedDeepgramVoice)")
    }
    
    /**
     * Reload configuration from UserDefaults/ConfigManager
     */
    func reloadConfiguration() {
        print("🎵 TTS_MANAGER: Reloading configuration...")
        loadConfiguration()
    }
    
    // MARK: - Public Interface
    
    /**
     * Speak text using the configured TTS provider
     */
    func speak(_ text: String, completion: @escaping () -> Void) {
        NSLog("🎵 TTS_MANAGER: speak() called with text length: %d", text.count)
        // Store the completion handler to be called when TTS actually finishes
        speakText(text) { _ in
            NSLog("🎵 TTS_MANAGER: speakText completion callback invoked")
            completion()
        }
        // Don't call completion here - it will be called when TTS finishes via handleSpeechCompletion
    }
    
    /**
     * Speak text using the configured TTS provider with success callback
     */
    func speakText(_ text: String, completion: @escaping (Bool) -> Void) {
        NSLog("🎵 TTS_MANAGER: ========== SPEAKING TEXT ==========")
        NSLog("🎵 TTS_MANAGER: Text: '%@%@'", String(text.prefix(100)), text.count > 100 ? "..." : "")
        NSLog("🎵 TTS_MANAGER: Current provider: %@", String(describing: currentProvider))
        print("🎵 TTS_MANAGER: ========== SPEAKING TEXT ==========")
        print("🎵 TTS_MANAGER: Text: '\(text.prefix(100))\(text.count > 100 ? "..." : "")'")
        print("🎵 TTS_MANAGER: Current provider: \(currentProvider)")
        
        // Rate limiting check
        if let lastTime = lastSpeechTime {
            let timeSinceLastSpeech = Date().timeIntervalSince(lastTime)
            if timeSinceLastSpeech < minimumSpeechInterval {
                print("🎵 TTS_MANAGER: ⏱️ Rate limited - too soon since last speech (\(timeSinceLastSpeech)s)")
                NSLog("🎵 TTS_MANAGER: ⏱️ Rate limited - too soon since last speech (%.2fs)", timeSinceLastSpeech)
                completion(false)
                return
            }
        }
        lastSpeechTime = Date()
        
        // Store completion handler
        self.completionHandler = completion
        NSLog("🎵 TTS_MANAGER: Stored completion handler")
        
        // Stop any current speech
        stopSpeaking()
        NSLog("🎵 TTS_MANAGER: Stopped any current speech")
        
        // Audio focus is now managed by VoiceManager before calling TTS
        // The VoiceManager will request playback focus before calling speak
        
        isSpeaking = true
        NSLog("🎵 TTS_MANAGER: Set isSpeaking to true")
        
        // Use appropriate provider
        Task {
            do {
                switch currentProvider {
                case .deepgram:
                    try await speakWithDeepgram(text)
                case .native:
                    try await speakWithNative(text)
                }
            } catch {
                print("🎵 TTS_MANAGER: ❌ TTS failed: \(error)")
                NSLog("🎵 TTS_MANAGER: ❌ TTS failed: %@", error.localizedDescription)
                
                // If Deepgram fails, fallback to native
                if currentProvider == .deepgram {
                    print("🎵 TTS_MANAGER: ========== FALLBACK TO NATIVE TTS ==========")
                    NSLog("🎵 TTS_MANAGER: ========== FALLBACK TO NATIVE TTS ==========")
                    print("🎵 TTS_MANAGER: Deepgram TTS failed, falling back to native TTS...")
                    NSLog("🎵 TTS_MANAGER: Deepgram TTS failed, falling back to native TTS...")
                    do {
                        try await speakWithNative(text)
                        print("🎵 TTS_MANAGER: ✅ Fallback to native TTS succeeded")
                        NSLog("🎵 TTS_MANAGER: ✅ Fallback to native TTS succeeded")
                    } catch {
                        print("🎵 TTS_MANAGER: ❌ Fallback to native TTS also failed: \(error)")
                        NSLog("🎵 TTS_MANAGER: ❌ Fallback to native TTS also failed: %@", error.localizedDescription)
                        self.handleSpeechCompletion(false)
                    }
                } else {
                    self.handleSpeechCompletion(false)
                }
            }
        }
    }
    
    /**
     * Interrupt current speech (matching Android pattern)
     */
    func interruptSpeech() {
        stopSpeaking()
    }
    
    /**
     * Stop current speech
     */
    func stopSpeaking() {
        print("🎵 TTS_MANAGER: Stopping speech")
        
        isSpeaking = false
        
        // Stop Deepgram playback
        deepgramAPI.stopPlayback()
        
        // Stop native speech
        if speechSynthesizer.isSpeaking {
            speechSynthesizer.stopSpeaking(at: .immediate)
        }
        
        // Clear current utterance
        currentSpeechUtterance = nil
    }
    
    /**
     * Pause current speech (native TTS only)
     */
    func pauseSpeaking() {
        if currentProvider == .native && speechSynthesizer.isSpeaking {
            speechSynthesizer.pauseSpeaking(at: .immediate)
        }
    }
    
    /**
     * Resume paused speech (native TTS only)
     */
    func resumeSpeaking() {
        if currentProvider == .native && speechSynthesizer.isPaused {
            speechSynthesizer.continueSpeaking()
        }
    }
    
    /**
     * Set TTS provider
     */
    func setTTSProvider(_ provider: TTSProvider) {
        print("🎵 TTS_MANAGER: Setting TTS provider to: \(provider)")
        
        // Stop current speech if switching providers
        if currentProvider != provider && isSpeaking {
            stopSpeaking()
        }
        
        currentProvider = provider
        
        // Update configuration
        configManager.setDeepgramTTSEnabled(provider == .deepgram)
    }
    
    /**
     * Get current TTS provider
     */
    func getTTSProvider() -> TTSProvider {
        return currentProvider
    }
    
    /**
     * Check if currently speaking
     */
    func isTTSSpeaking() -> Bool {
        return isSpeaking
    }
    
    /**
     * Check if TTS is speaking (alias for compatibility)
     */
    func isCurrentlySpeaking() -> Bool {
        return isTTSSpeaking()
    }
    
    /**
     * Check if TTS is initialized
     */
    func isInitialized() -> Bool {
        // Check if we have necessary configuration
        return configManager.getDeepgramApiKey() != nil || currentProvider == .native
    }
    
    // MARK: - Private Implementation
    
    /**
     * Speak using Deepgram TTS
     */
    private func speakWithDeepgram(_ text: String) async throws {
        print("🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW START ==========")
        NSLog("🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW START ==========")
        print("🎵 TTS_MANAGER: Text length: \(text.count)")
        NSLog("🎵 TTS_MANAGER: Text length: %d", text.count)
        
        // Step 1: Validate Deepgram configuration
        print("🎵 TTS_MANAGER: Step 1 - Validating Deepgram configuration...")
        NSLog("🎵 TTS_MANAGER: Step 1 - Validating Deepgram configuration...")
        let validation = deepgramAPI.validateConfiguration()
        
        print("🎵 TTS_MANAGER: Validation result: valid=\(validation.isValid)")
        NSLog("🎵 TTS_MANAGER: Validation result: valid=%@", validation.isValid ? "YES" : "NO")
        
        if !validation.isValid {
            print("🎵 TTS_MANAGER: ❌ Validation failed with issues:")
            NSLog("🎵 TTS_MANAGER: ❌ Validation failed with issues:")
            for (index, issue) in validation.issues.enumerated() {
                print("🎵 TTS_MANAGER:   \(index + 1). \(issue)")
                NSLog("🎵 TTS_MANAGER:   %d. %@", index + 1, issue)
            }
            let errorMessage = "Deepgram configuration invalid: \(validation.issues.joined(separator: ", "))"
            throw NSError(domain: "TTSManager", code: 400, userInfo: [NSLocalizedDescriptionKey: errorMessage])
        }
        
        print("🎵 TTS_MANAGER: ✅ Configuration validation passed")
        NSLog("🎵 TTS_MANAGER: ✅ Configuration validation passed")
        
        // Step 2: Test connectivity
        print("🎵 TTS_MANAGER: Step 2 - Testing Deepgram connectivity...")
        NSLog("🎵 TTS_MANAGER: Step 2 - Testing Deepgram connectivity...")
        let connectivityOk = await deepgramAPI.testConnectivity()
        
        print("🎵 TTS_MANAGER: Connectivity test result: \(connectivityOk)")
        NSLog("🎵 TTS_MANAGER: Connectivity test result: %@", connectivityOk ? "OK" : "FAILED")
        
        guard connectivityOk else {
            print("🎵 TTS_MANAGER: ❌ Connectivity test failed")
            NSLog("🎵 TTS_MANAGER: ❌ Connectivity test failed")
            throw NSError(domain: "TTSManager", code: 503, userInfo: [NSLocalizedDescriptionKey: "Deepgram API not accessible"])
        }
        
        print("🎵 TTS_MANAGER: ✅ Connectivity test passed")
        NSLog("🎵 TTS_MANAGER: ✅ Connectivity test passed")
        
        // Step 3: Convert and play
        print("🎵 TTS_MANAGER: Step 3 - Converting text to speech via Deepgram...")
        NSLog("🎵 TTS_MANAGER: Step 3 - Converting text to speech via Deepgram...")
        
        do {
            try await deepgramAPI.convertTextToSpeech(text)
            print("🎵 TTS_MANAGER: ✅ Deepgram TTS completed successfully")
            NSLog("🎵 TTS_MANAGER: ✅ Deepgram TTS completed successfully")
            handleSpeechCompletion(true)
        } catch {
            print("🎵 TTS_MANAGER: ❌ Deepgram TTS failed with error: \(error)")
            NSLog("🎵 TTS_MANAGER: ❌ Deepgram TTS failed with error: %@", error.localizedDescription)
            throw error
        }
        
        print("🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW END ==========")
        NSLog("🎵 TTS_MANAGER: ========== DEEPGRAM TTS FLOW END ==========")
    }
    
    /**
     * Speak using native iOS TTS
     */
    private func speakWithNative(_ text: String) async throws {
        return try await withCheckedThrowingContinuation { continuation in
            print("🎵 TTS_MANAGER: Speaking with native TTS...")
            
            DispatchQueue.main.async {
                // Create speech utterance
                let utterance = AVSpeechUtterance(string: text)
                
                // Configure utterance
                let speechRate = self.configManager.getNativeSpeechRate()
                let pitchMultiplier = self.configManager.getNativeVoicePitch()
                
                utterance.rate = speechRate
                utterance.pitchMultiplier = pitchMultiplier
                utterance.volume = 1.0
                
                // Set voice (use default system voice)
                utterance.voice = AVSpeechSynthesisVoice(language: "en-US")
                
                self.currentSpeechUtterance = utterance
                
                // Store continuation for completion
                self.nativeTTSContinuation = continuation
                
                // Start speaking
                self.speechSynthesizer.speak(utterance)
                print("🎵 TTS_MANAGER: Native TTS started")
            }
        }
    }
    
    // Store continuation for native TTS completion
    private var nativeTTSContinuation: CheckedContinuation<Void, Error>?
    
    /**
     * Handle speech completion
     */
    private func handleSpeechCompletion(_ success: Bool) {
        print("🎵 TTS_MANAGER: Speech completed - success: \(success)")
        
        isSpeaking = false
        currentSpeechUtterance = nil
        
        // Call completion handler
        if let completion = completionHandler {
            completion(success)
            completionHandler = nil
        }
    }
    
    // MARK: - Configuration Updates
    
    /**
     * Update TTS configuration
     */
    func updateConfiguration() {
        loadConfiguration()
    }
    
    /**
     * Get available Deepgram voices
     */
    func getAvailableDeepgramVoices() -> [String] {
        return Array(DeepgramAPI.AVAILABLE_VOICES.keys).sorted()
    }
    
    /**
     * Set selected Deepgram voice
     */
    func setSelectedDeepgramVoice(_ voice: String) {
        guard DeepgramAPI.AVAILABLE_VOICES.keys.contains(voice) else {
            print("🎵 TTS_MANAGER: ❌ Invalid voice: \(voice)")
            return
        }
        
        configManager.setSelectedDeepgramVoice(voice)
        print("🎵 TTS_MANAGER: ✅ Selected Deepgram voice set to: \(voice)")
    }
    
    /**
     * Get selected Deepgram voice
     */
    func getSelectedDeepgramVoice() -> String {
        return configManager.getSelectedDeepgramVoice()
    }
    
    /**
     * Preview a Deepgram voice
     */
    func previewDeepgramVoice(_ voice: String, text: String = "Hi, I'm Assistant. Ask me to do anything, and I'll see what I can do.") async throws {
        guard DeepgramAPI.AVAILABLE_VOICES.keys.contains(voice) else {
            throw NSError(domain: "TTSManager", code: 400, userInfo: [NSLocalizedDescriptionKey: "Invalid voice: \(voice)"])
        }
        
        print("🎵 TTS_MANAGER: Previewing voice: \(voice)")
        
        // Temporarily switch to Deepgram and use specific voice
        let originalProvider = currentProvider
        currentProvider = .deepgram
        
        do {
            try await deepgramAPI.convertTextToSpeech(text, voice: voice)
        } catch {
            // Restore original provider
            currentProvider = originalProvider
            throw error
        }
        
        // Restore original provider
        currentProvider = originalProvider
    }
    
    /**
     * Test TTS system
     */
    func testTTS(_ text: String = "This is a test of the text-to-speech system.") async -> Bool {
        return await withCheckedContinuation { continuation in
            speakText(text) { success in
                continuation.resume(returning: success)
            }
        }
    }
}

// MARK: - AVSpeechSynthesizerDelegate
extension TTSManager: AVSpeechSynthesizerDelegate {
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didStart utterance: AVSpeechUtterance) {
        print("🎵 TTS_MANAGER: Native TTS started speaking")
    }
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didFinish utterance: AVSpeechUtterance) {
        print("🎵 TTS_MANAGER: Native TTS finished speaking")
        
        // Complete the continuation
        if let continuation = nativeTTSContinuation {
            nativeTTSContinuation = nil
            continuation.resume()
        }
        
        handleSpeechCompletion(true)
    }
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didCancel utterance: AVSpeechUtterance) {
        print("🎵 TTS_MANAGER: Native TTS was cancelled")
        
        // Complete the continuation with error
        if let continuation = nativeTTSContinuation {
            nativeTTSContinuation = nil
            continuation.resume(throwing: NSError(domain: "TTSManager", code: 0, userInfo: [NSLocalizedDescriptionKey: "Speech was cancelled"]))
        }
        
        handleSpeechCompletion(false)
    }
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didPause utterance: AVSpeechUtterance) {
        print("🎵 TTS_MANAGER: Native TTS was paused")
    }
    
    func speechSynthesizer(_ synthesizer: AVSpeechSynthesizer, didContinue utterance: AVSpeechUtterance) {
        print("🎵 TTS_MANAGER: Native TTS was resumed")
    }
} 