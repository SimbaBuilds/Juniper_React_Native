import Foundation

@objc(ConfigManager)
class ConfigManager: NSObject {
    
    static let shared = ConfigManager()
    private var config: [String: String] = [:]
    private let userDefaults = UserDefaults.standard
    
    private override init() {
        super.init()
        loadConfig()
    }
    
    private func loadConfig() {
        print("🎵 ConfigManager: Starting loadConfig()...")
        NSLog("🎵 ConfigManager: Starting loadConfig()...")
        
        // Check if file exists in bundle
        let path = Bundle.main.path(forResource: "config", ofType: "properties")
        print("🎵 ConfigManager: Bundle path lookup result: \(path ?? "nil")")
        NSLog("🎵 ConfigManager: Bundle path lookup result: %@", path ?? "nil")
        
        // List all bundle resources to see what's actually there
        if let bundlePath = Bundle.main.resourcePath {
            print("🎵 ConfigManager: Bundle resource path: \(bundlePath)")
            NSLog("🎵 ConfigManager: Bundle resource path: %@", bundlePath)
            
            do {
                let contents = try FileManager.default.contentsOfDirectory(atPath: bundlePath)
                let configFiles = contents.filter { $0.contains("config") || $0.contains("properties") }
                print("🎵 ConfigManager: Config-related files in bundle: \(configFiles)")
                NSLog("🎵 ConfigManager: Config-related files in bundle: %@", configFiles.joined(separator: ", "))
            } catch {
                print("🎵 ConfigManager: Error listing bundle contents: \(error)")
                NSLog("🎵 ConfigManager: Error listing bundle contents: %@", error.localizedDescription)
            }
        }
        
        guard let path = path else {
            print("❌ ConfigManager: config.properties file not found in bundle")
            NSLog("❌ ConfigManager: config.properties file not found in bundle")
            return
        }
        
        guard let data = try? String(contentsOfFile: path) else {
            print("❌ ConfigManager: Failed to read config.properties file at path: \(path)")
            NSLog("❌ ConfigManager: Failed to read config.properties file at path: %@", path)
            return
        }
        
        print("🎵 ConfigManager: Found config.properties at path: \(path)")
        print("🎵 ConfigManager: Config file contents length: \(data.count) characters")
        NSLog("🎵 ConfigManager: Found config.properties at path: %@", path)
        NSLog("🎵 ConfigManager: Config file contents length: %d characters", data.count)
        
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
                
                if key == "deepgram_api_key" {
                    print("🎵 ConfigManager: Found deepgram_api_key: '\(value.prefix(10))...'")
                    NSLog("🎵 ConfigManager: Found deepgram_api_key: '%@...'", String(value.prefix(10)))
                }
            }
        }
        
        print("✅ ConfigManager: Loaded \(config.count) configuration properties")
        print("🎵 ConfigManager: All keys: \(config.keys.sorted())")
        NSLog("✅ ConfigManager: Loaded %d configuration properties", config.count)
        NSLog("🎵 ConfigManager: All keys: %@", config.keys.sorted().joined(separator: ", "))
    }
    
    // MARK: - API Keys
    func getDeepgramApiKey() -> String? {
        // Check UserDefaults first, then fall back to config file
        if let key = userDefaults.string(forKey: "deepgram_api_key"), !key.isEmpty {
            print("🎵 ConfigManager: getDeepgramApiKey() - Found key in UserDefaults: '\(key.prefix(10))...'")
            NSLog("🎵 ConfigManager: getDeepgramApiKey() - Found key in UserDefaults: '%@...'", String(key.prefix(10)))
            return key
        }
        
        let configKey = config["deepgram_api_key"]
        print("🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '\(configKey?.prefix(10) ?? "nil")...' (total config keys: \(config.count))")
        NSLog("🎵 ConfigManager: getDeepgramApiKey() - Key from config file: '%@...' (total config keys: %d)", 
              configKey?.prefix(10).description ?? "nil", config.count)
        
        return configKey
    }
    
    func getOpenAIApiKey() -> String? {
        return config["openai_api_key"]
    }
    
    func getApiKeys() -> (picovoice: String?, openai: String?, deepgram: String?, elevenlabs: String?) {
        return (
            picovoice: config["picovoice_access_key"],
            openai: getOpenAIApiKey(),
            deepgram: getDeepgramApiKey(),
            elevenlabs: config["elevenlabs_api_key"]
        )
    }
    
    // MARK: - Server API Configuration
    func getServerApiConfig() -> (baseUrl: String, apiEndpoint: String) {
        return (
            baseUrl: config["server_api_base_url"] ?? "https://mobile-jarvis-backend.onrender.com",
            apiEndpoint: config["server_api_endpoint"] ?? "/api/chat"
        )
    }
    
    func updateServerApiConfig(baseUrl: String, apiEndpoint: String) -> Bool {
        config["server_api_base_url"] = baseUrl
        config["server_api_endpoint"] = apiEndpoint
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
        // Check UserDefaults first for runtime settings
        if userDefaults.object(forKey: "deepgram_enabled") != nil {
            return userDefaults.bool(forKey: "deepgram_enabled")
        }
        // Fall back to config file
        return config["deepgram_tts_enabled"]?.lowercased() == "true"
    }
    
    func setDeepgramTTSEnabled(_ enabled: Bool) {
        userDefaults.set(enabled, forKey: "deepgram_enabled")
        userDefaults.synchronize()
        config["deepgram_tts_enabled"] = enabled ? "true" : "false"
        print("🎵 ConfigManager: Deepgram TTS enabled set to: \(enabled)")
        NSLog("🎵 ConfigManager: Deepgram TTS enabled set to: %@", enabled ? "YES" : "NO")
    }
    
    func isWhisperSTTEnabled() -> Bool {
        return config["whisper_stt_enabled"]?.lowercased() == "true"
    }
    
    // MARK: - STT Provider Management
    func getDefaultSTTProvider() -> String {
        return config["default_stt_provider"] ?? "ios_native"
    }
    
    func setDefaultSTTProvider(_ provider: String) {
        // For now, just store in memory. In a full implementation,
        // this would persist to UserDefaults or config file
        config["default_stt_provider"] = provider
        print("🎙️ ConfigManager: STT provider set to: \(provider)")
        NSLog("🎙️ ConfigManager: STT provider set to: %@", provider)
    }
    
    // MARK: - TTS Provider Management  
    func getDefaultTTSProvider() -> String {
        // Check UserDefaults first
        if let provider = userDefaults.string(forKey: "default.tts.provider") {
            return provider
        }
        return config["default_tts_provider"] ?? "native"
    }
    
    func setDefaultTTSProvider(_ provider: String) {
        userDefaults.set(provider, forKey: "default.tts.provider")
        userDefaults.synchronize()
        config["default_tts_provider"] = provider
        print("🎵 ConfigManager: TTS provider set to: \(provider)")
        NSLog("🎵 ConfigManager: TTS provider set to: %@", provider)
    }
    
    // MARK: - Deepgram Voice Management
    func getSelectedDeepgramVoice() -> String {
        // Check UserDefaults first
        if let voice = userDefaults.string(forKey: "selected_deepgram_voice"), !voice.isEmpty {
            return voice
        }
        return config["selected_deepgram_voice"] ?? "aura-asteria-en"
    }
    
    func setSelectedDeepgramVoice(_ voice: String) {
        userDefaults.set(voice, forKey: "selected_deepgram_voice")
        userDefaults.synchronize()
        config["selected_deepgram_voice"] = voice
        print("🎵 ConfigManager: Deepgram voice set to: \(voice)")
        NSLog("🎵 ConfigManager: Deepgram voice set to: %@", voice)
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
        NSLog("📋 ConfigManager: All configuration values:")
        for (key, value) in config.sorted(by: { $0.key < $1.key }) {
            // Hide sensitive values
            let displayValue = key.contains("key") || key.contains("secret") ? "***" : value
            NSLog("  \(key) = \(displayValue)")
        }
    }
} 