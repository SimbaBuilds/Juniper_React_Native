import Foundation

@objc(ConfigManager)
class ConfigManager: NSObject {
    
    static let shared = ConfigManager()
    private var config: [String: String] = [:]
    
    private override init() {
        super.init()
        loadConfig()
    }
    
    private func loadConfig() {
        guard let path = Bundle.main.path(forResource: "config", ofType: "properties"),
              let data = try? String(contentsOfFile: path) else {
            print("❌ ConfigManager: Failed to load config.properties file")
            return
        }
        
        // Parse properties file
        let lines = data.components(separatedBy: .newlines)
        for line in lines {
            let trimmedLine = line.trimmingCharacters(in: .whitespacesAndNewlines)
            
            // Skip empty lines and comments
            if trimmedLine.isEmpty || trimmedLine.hasPrefix("#") {
                continue
            }
            
            // Split key=value pairs
            let components = trimmedLine.components(separatedBy: "=")
            if components.count >= 2 {
                let key = components[0].trimmingCharacters(in: .whitespacesAndNewlines)
                let value = components[1...].joined(separator: "=").trimmingCharacters(in: .whitespacesAndNewlines)
                config[key] = value
            }
        }
        
        print("✅ ConfigManager: Loaded \(config.count) configuration properties")
    }
    
    // MARK: - API Keys
    func getDeepgramApiKey() -> String? {
        return config["deepgram.api.key"]
    }
    
    func getOpenAIApiKey() -> String? {
        return config["openai.api.key"]
    }
    
    func getApiKeys() -> (picovoice: String?, openai: String?, deepgram: String?, elevenlabs: String?) {
        return (
            picovoice: config["picovoice.api.key"],
            openai: getOpenAIApiKey(),
            deepgram: getDeepgramApiKey(),
            elevenlabs: config["elevenlabs.api.key"]
        )
    }
    
    // MARK: - Server API Configuration
    func getServerApiConfig() -> (baseUrl: String, apiEndpoint: String) {
        return (
            baseUrl: config["server.api.base.url"] ?? "http://192.168.1.145:8000",
            apiEndpoint: config["server.api.endpoint"] ?? "/api/chat"
        )
    }
    
    func updateServerApiConfig(baseUrl: String, apiEndpoint: String) -> Bool {
        config["server.api.base.url"] = baseUrl
        config["server.api.endpoint"] = apiEndpoint
        return true
    }
    
    // MARK: - Speech Recognition Configuration
    func getSpeechTimeoutSeconds() -> Double {
        return Double(config["speech.timeout.seconds"] ?? "10") ?? 10.0
    }
    
    func getPartialResultsTimeout() -> Double {
        return Double(config["speech.partial.results.timeout"] ?? "3") ?? 3.0
    }
    
    func getSpeechInputMinimumTime() -> Double {
        return Double(config["speech.input.minimum.time"] ?? "1") ?? 1.0
    }
    
    func getSpeechInputMaximumTime() -> Double {
        return Double(config["speech.input.maximum.time"] ?? "30") ?? 30.0
    }
    
    func getEndOfSpeechTimeout() -> Double {
        return Double(config["speech.end.of.speech.timeout"] ?? "2") ?? 2.0
    }
    
    func getSilenceTimeout() -> Double {
        return Double(config["speech.silence.timeout"] ?? "5") ?? 5.0
    }
    
    func getStartOfSpeechTimeout() -> Double {
        return Double(config["speech.start.of.speech.timeout"] ?? "10") ?? 10.0
    }
    
    func getMaxRetries() -> Int {
        return Int(config["speech.max.retries"] ?? "1") ?? 1
    }
    
    func getRetryDelay() -> Double {
        return Double(config["speech.retry.delay"] ?? "1") ?? 1.0
    }
    
    func getMinimumSilenceDuration() -> Double {
        return Double(config["speech.minimum.silence.duration"] ?? "0.5") ?? 0.5
    }
    
    func getMaximumSilenceDuration() -> Double {
        return Double(config["speech.maximum.silence.duration"] ?? "3") ?? 3.0
    }
    
    func getSpeechRecognitionLanguage() -> String {
        return config["speech.recognition.language"] ?? "en-US"
    }
    
    func getAudioSessionCategory() -> String {
        return config["audio.session.category"] ?? "playAndRecord"
    }
    
    // MARK: - Native Speech Configuration
    func getNativeSpeechRate() -> Float {
        return Float(config["native.speech.rate"] ?? "0.5") ?? 0.5
    }
    
    func getNativeVoicePitch() -> Float {
        return Float(config["native.voice.pitch"] ?? "1.0") ?? 1.0
    }
    
    // MARK: - Voice Feature Toggles
    func isDeepgramTTSEnabled() -> Bool {
        return config["deepgram.tts.enabled"]?.lowercased() == "true"
    }
    
    func setDeepgramTTSEnabled(_ enabled: Bool) {
        config["deepgram.tts.enabled"] = enabled ? "true" : "false"
        print("🎵 ConfigManager: Deepgram TTS enabled set to: \(enabled)")
    }
    
    func isWhisperSTTEnabled() -> Bool {
        return config["whisper.stt.enabled"]?.lowercased() == "true"
    }
    
    // MARK: - STT Provider Management
    func getDefaultSTTProvider() -> String {
        return config["default.stt.provider"] ?? "ios_native"
    }
    
    func setDefaultSTTProvider(_ provider: String) {
        // For now, just store in memory. In a full implementation,
        // this would persist to UserDefaults or config file
        config["default.stt.provider"] = provider
        print("🎙️ ConfigManager: STT provider set to: \(provider)")
    }
    
    // MARK: - TTS Provider Management  
    func getDefaultTTSProvider() -> String {
        return config["default.tts.provider"] ?? "native"
    }
    
    func setDefaultTTSProvider(_ provider: String) {
        // For now, just store in memory. In a full implementation,
        // this would persist to UserDefaults or config file
        config["default.tts.provider"] = provider
        print("🎵 ConfigManager: TTS provider set to: \(provider)")
    }
    
    // MARK: - Deepgram Voice Management
    func getSelectedDeepgramVoice() -> String {
        return config["deepgram.selected.voice"] ?? "aura-2-mars-en"
    }
    
    func setSelectedDeepgramVoice(_ voice: String) {
        config["deepgram.selected.voice"] = voice
        print("🎵 ConfigManager: Deepgram voice set to: \(voice)")
    }
    
    // MARK: - Helper Methods
    func getAllConfig() -> [String: String] {
        return config
    }
    
    func getValue(for key: String) -> String? {
        return config[key]
    }
    
    // MARK: - Configuration Validation
    func validateConfiguration() -> [String] {
        var errors: [String] = []
        
        // Check API keys
        if getDeepgramApiKey()?.isEmpty ?? true {
            errors.append("Deepgram API key is missing")
        }
        
        if getOpenAIApiKey()?.isEmpty ?? true {
            errors.append("OpenAI API key is missing")
        }
        
        // Check provider settings
        let sttProvider = getDefaultSTTProvider()
        let validSTTProviders = ["ios_native", "deepgram", "whisper"]
        if !validSTTProviders.contains(sttProvider) {
            errors.append("Invalid STT provider: \(sttProvider)")
        }
        
        let ttsProvider = getDefaultTTSProvider()
        let validTTSProviders = ["native", "deepgram"]
        if !validTTSProviders.contains(ttsProvider) {
            errors.append("Invalid TTS provider: \(ttsProvider)")
        }
        
        return errors
    }
    
    func printAllConfig() {
        print("📋 ConfigManager: All configuration values:")
        for (key, value) in config.sorted(by: { $0.key < $1.key }) {
            // Hide sensitive values
            let displayValue = key.contains("key") || key.contains("secret") ? "***" : value
            print("  \(key) = \(displayValue)")
        }
    }
} 