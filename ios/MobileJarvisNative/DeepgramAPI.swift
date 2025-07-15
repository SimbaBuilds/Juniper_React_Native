import Foundation
import Network
import AVFoundation

// MARK: - Deepgram Voice Models
struct DeepgramVoice {
    let name: String
    let displayName: String
    let language: String
    let accent: String
}

// MARK: - API Response Models
struct DeepgramTTSResponse {
    let audioData: Data
    let contentType: String
}

struct DeepgramSTTResponse {
    let transcript: String
    let confidence: Float
    let isFinal: Bool
}

// MARK: - Configuration Validation
struct DeepgramValidation {
    let isValid: Bool
    let apiKeyPresent: Bool
    let apiKeyValid: Bool
    let networkAvailable: Bool
    let audioSystemReady: Bool
    let voiceConfigValid: Bool
    let issues: [String]
}

// MARK: - Network Diagnostics
struct NetworkDiagnostics {
    let basicConnectivity: Bool
    let deepgramApiAccessible: Bool
    let dnsResolution: Bool
    let latency: Double?
}

// MARK: - Audio Diagnostics  
struct AudioDiagnostics {
    let mediaPlayerAvailable: Bool
    let audioSessionActive: Bool
    let speakerAvailable: Bool
    let volumeLevel: Float
}

class DeepgramAPI: NSObject {
    
    // MARK: - Constants
    static let DEFAULT_VOICE = "aura-2-mars-en"
    static let BASE_URL = "https://api.deepgram.com"
    static let TTS_ENDPOINT = "/v1/speak"
    static let STT_ENDPOINT = "/v1/listen"
    
    // Available voices (matching Android implementation)
    static let AVAILABLE_VOICES: [String: DeepgramVoice] = [
        "aura-2-mars-en": DeepgramVoice(name: "aura-2-mars-en", displayName: "Mars", language: "en", accent: "US"),
        "aura-2-thalia-en": DeepgramVoice(name: "aura-2-thalia-en", displayName: "Thalia", language: "en", accent: "US"),
        "aura-2-perseus-en": DeepgramVoice(name: "aura-2-perseus-en", displayName: "Perseus", language: "en", accent: "US"),
        "aura-2-luna-en": DeepgramVoice(name: "aura-2-luna-en", displayName: "Luna", language: "en", accent: "US"),
        "aura-2-stella-en": DeepgramVoice(name: "aura-2-stella-en", displayName: "Stella", language: "en", accent: "US"),
        "aura-2-athena-en": DeepgramVoice(name: "aura-2-athena-en", displayName: "Athena", language: "en", accent: "US"),
        "aura-2-hera-en": DeepgramVoice(name: "aura-2-hera-en", displayName: "Hera", language: "en", accent: "US"),
        "aura-2-orion-en": DeepgramVoice(name: "aura-2-orion-en", displayName: "Orion", language: "en", accent: "US"),
        "aura-2-arcas-en": DeepgramVoice(name: "aura-2-arcas-en", displayName: "Arcas", language: "en", accent: "US"),
        "aura-2-zeus-en": DeepgramVoice(name: "aura-2-zeus-en", displayName: "Zeus", language: "en", accent: "US")
    ]
    
    // MARK: - Properties
    private var apiKey: String?
    private var configManager: ConfigManager
    private var networkMonitor: NWPathMonitor
    private var isNetworkAvailable = false
    private let urlSession: URLSession
    
    // Audio player for TTS playback
    private var audioPlayer: AVAudioPlayer?
    private var audioPlayerDelegate: AudioPlayerDelegate?
    
    // MARK: - Singleton
    static let shared = DeepgramAPI()
    
    private override init() {
        self.configManager = ConfigManager.shared
        self.networkMonitor = NWPathMonitor()
        
        // Configure URL session with timeouts
        let config = URLSessionConfiguration.default
        config.timeoutIntervalForRequest = 30.0
        config.timeoutIntervalForResource = 60.0
        self.urlSession = URLSession(configuration: config)
        
        super.init()
        
        self.setupNetworkMonitoring()
        self.loadConfiguration()
    }
    
    // MARK: - Initialization
    func initialize() {
        print("🎵 DEEPGRAM_API: Initializing Deepgram API client...")
        loadConfiguration()
        print("🎵 DEEPGRAM_API: ✅ Deepgram API client initialized")
    }
    
    private func loadConfiguration() {
        self.apiKey = configManager.getDeepgramAPIKey()
        print("🎵 DEEPGRAM_API: Configuration loaded - API key present: \(apiKey != nil)")
    }
    
    private func setupNetworkMonitoring() {
        networkMonitor.pathUpdateHandler = { [weak self] path in
            self?.isNetworkAvailable = path.status == .satisfied
            print("🌐 DEEPGRAM_API: Network status changed - available: \(self?.isNetworkAvailable ?? false)")
        }
        
        let queue = DispatchQueue(label: "NetworkMonitor")
        networkMonitor.start(queue: queue)
    }
    
    // MARK: - Configuration Validation
    func validateConfiguration() -> DeepgramValidation {
        print("🎵 DEEPGRAM_API: ========== VALIDATING CONFIGURATION ==========")
        
        var issues: [String] = []
        
        // Check API key
        let apiKeyPresent = apiKey != nil && !apiKey!.isEmpty
        if !apiKeyPresent {
            issues.append("Deepgram API key not configured")
        }
        
        // Check API key format (basic validation)
        let apiKeyValid = apiKeyPresent && apiKey!.count > 20
        if apiKeyPresent && !apiKeyValid {
            issues.append("Deepgram API key appears invalid (too short)")
        }
        
        // Check network availability
        if !isNetworkAvailable {
            issues.append("Network not available")
        }
        
        // Check audio system
        let audioSystemReady = checkAudioSystem()
        if !audioSystemReady {
            issues.append("Audio system not ready")
        }
        
        // Check voice configuration
        let selectedVoice = configManager.getSelectedDeepgramVoice()
        let voiceConfigValid = DeepgramAPI.AVAILABLE_VOICES.keys.contains(selectedVoice)
        if !voiceConfigValid {
            issues.append("Selected voice '\(selectedVoice)' is not available")
        }
        
        let isValid = issues.isEmpty
        
        print("🎵 DEEPGRAM_API: Validation result: \(isValid)")
        if !isValid {
            print("🎵 DEEPGRAM_API: Issues found:")
            for (index, issue) in issues.enumerated() {
                print("🎵 DEEPGRAM_API:   \(index + 1). \(issue)")
            }
        }
        
        return DeepgramValidation(
            isValid: isValid,
            apiKeyPresent: apiKeyPresent,
            apiKeyValid: apiKeyValid,
            networkAvailable: isNetworkAvailable,
            audioSystemReady: audioSystemReady,
            voiceConfigValid: voiceConfigValid,
            issues: issues
        )
    }
    
    private func checkAudioSystem() -> Bool {
        do {
            let audioSession = AVAudioSession.sharedInstance()
            return audioSession.isOtherAudioPlaying == false || audioSession.category == .playback
        } catch {
            print("🎵 DEEPGRAM_API: Error checking audio system: \(error)")
            return false
        }
    }
    
    // MARK: - Network Diagnostics
    func runNetworkDiagnostics() async -> NetworkDiagnostics {
        print("🌐 DEEPGRAM_API: Running network diagnostics...")
        
        var basicConnectivity = false
        var deepgramApiAccessible = false
        var dnsResolution = false
        var latency: Double?
        
        // Test basic connectivity
        do {
            let startTime = CFAbsoluteTimeGetCurrent()
            let url = URL(string: "https://www.google.com")!
            let (_, response) = try await urlSession.data(from: url)
            
            if let httpResponse = response as? HTTPURLResponse, 
               httpResponse.statusCode == 200 {
                basicConnectivity = true
                latency = CFAbsoluteTimeGetCurrent() - startTime
            }
        } catch {
            print("🌐 DEEPGRAM_API: Basic connectivity test failed: \(error)")
        }
        
        // Test DNS resolution for Deepgram
        do {
            let url = URL(string: DeepgramAPI.BASE_URL)!
            let host = url.host!
            
            // Simple DNS resolution test
            let addresses = try await withCheckedThrowingContinuation { continuation in
                var hints = addrinfo()
                hints.ai_family = AF_UNSPEC
                hints.ai_socktype = SOCK_STREAM
                
                var result: UnsafeMutablePointer<addrinfo>?
                let status = getaddrinfo(host, nil, &hints, &result)
                
                if status == 0 {
                    dnsResolution = true
                    continuation.resume(returning: true)
                } else {
                    continuation.resume(throwing: NSError(domain: "DNS", code: Int(status), userInfo: nil))
                }
                
                if let result = result {
                    freeaddrinfo(result)
                }
            }
        } catch {
            print("🌐 DEEPGRAM_API: DNS resolution test failed: \(error)")
        }
        
        // Test Deepgram API accessibility
        if let apiKey = apiKey, !apiKey.isEmpty {
            do {
                let url = URL(string: "\(DeepgramAPI.BASE_URL)/v1/projects")!
                var request = URLRequest(url: url)
                request.httpMethod = "GET"
                request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
                request.timeoutInterval = 10.0
                
                let (_, response) = try await urlSession.data(for: request)
                
                if let httpResponse = response as? HTTPURLResponse {
                    deepgramApiAccessible = httpResponse.statusCode == 200 || httpResponse.statusCode == 401
                }
            } catch {
                print("🌐 DEEPGRAM_API: Deepgram API test failed: \(error)")
            }
        }
        
        let diagnostics = NetworkDiagnostics(
            basicConnectivity: basicConnectivity,
            deepgramApiAccessible: deepgramApiAccessible,
            dnsResolution: dnsResolution,
            latency: latency
        )
        
        print("🌐 DEEPGRAM_API: Network diagnostics complete:")
        print("🌐 DEEPGRAM_API: - Basic connectivity: \(basicConnectivity)")
        print("🌐 DEEPGRAM_API: - Deepgram API accessible: \(deepgramApiAccessible)")
        print("🌐 DEEPGRAM_API: - DNS resolution: \(dnsResolution)")
        print("🌐 DEEPGRAM_API: - Latency: \(latency?.description ?? "N/A")")
        
        return diagnostics
    }
    
    // MARK: - Audio Diagnostics
    func runAudioDiagnostics() async -> AudioDiagnostics {
        print("🔊 DEEPGRAM_API: Running audio diagnostics...")
        
        let audioSession = AVAudioSession.sharedInstance()
        let mediaPlayerAvailable = true // AVAudioPlayer is always available
        let audioSessionActive = audioSession.isOtherAudioPlaying == false
        let speakerAvailable = audioSession.currentRoute.outputs.contains { $0.portType == .builtInSpeaker }
        let volumeLevel = audioSession.outputVolume
        
        let diagnostics = AudioDiagnostics(
            mediaPlayerAvailable: mediaPlayerAvailable,
            audioSessionActive: audioSessionActive,
            speakerAvailable: speakerAvailable,
            volumeLevel: volumeLevel
        )
        
        print("🔊 DEEPGRAM_API: Audio diagnostics complete:")
        print("🔊 DEEPGRAM_API: - MediaPlayer available: \(mediaPlayerAvailable)")
        print("🔊 DEEPGRAM_API: - Audio session active: \(audioSessionActive)")
        print("🔊 DEEPGRAM_API: - Speaker available: \(speakerAvailable)")
        print("🔊 DEEPGRAM_API: - Volume level: \(volumeLevel)")
        
        return diagnostics
    }
    
    // MARK: - TTS Implementation
    func convertTextToSpeech(_ text: String, voice: String? = nil) async throws {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            throw NSError(domain: "DeepgramAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: "API key not configured"])
        }
        
        let selectedVoice = voice ?? configManager.getSelectedDeepgramVoice()
        print("🎵 DEEPGRAM_TTS: Converting text to speech with voice: \(selectedVoice)")
        
        // Create request
        let url = URL(string: "\(DeepgramAPI.BASE_URL)\(DeepgramAPI.TTS_ENDPOINT)")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        // Request body
        let requestBody = [
            "text": text,
            "model": selectedVoice,
            "encoding": "mp3",
            "sample_rate": 24000
        ]
        
        request.httpBody = try JSONSerialization.data(withJSONObject: requestBody)
        
        // Make request
        let (data, response) = try await urlSession.data(for: request)
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            throw NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "DeepgramAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "TTS request failed: \(errorMessage)"])
        }
        
        // Play audio
        try await playAudioData(data)
    }
    
    func convertTextToSpeechData(_ text: String, voice: String? = nil) async throws -> Data {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            throw NSError(domain: "DeepgramAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: "API key not configured"])
        }
        
        let selectedVoice = voice ?? configManager.getSelectedDeepgramVoice()
        
        // Create request
        let url = URL(string: "\(DeepgramAPI.BASE_URL)\(DeepgramAPI.TTS_ENDPOINT)")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        // Request body
        let requestBody = [
            "text": text,
            "model": selectedVoice,
            "encoding": "mp3",
            "sample_rate": 24000
        ]
        
        request.httpBody = try JSONSerialization.data(withJSONObject: requestBody)
        
        // Make request
        let (data, response) = try await urlSession.data(for: request)
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            throw NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "DeepgramAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "TTS request failed: \(errorMessage)"])
        }
        
        return data
    }
    
    private func playAudioData(_ data: Data) async throws {
        return try await withCheckedThrowingContinuation { continuation in
            do {
                // Configure audio session for playback
                let audioSession = AVAudioSession.sharedInstance()
                try audioSession.setCategory(.playback, mode: .default)
                try audioSession.setActive(true)
                
                // Create audio player
                audioPlayer = try AVAudioPlayer(data: data)
                audioPlayer?.prepareToPlay()
                
                // Set up delegate to handle completion
                let delegate = AudioPlayerDelegate { success in
                    if success {
                        continuation.resume()
                    } else {
                        continuation.resume(throwing: NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Audio playback failed"]))
                    }
                }
                
                audioPlayerDelegate = delegate
                audioPlayer?.delegate = delegate
                
                // Start playback
                if audioPlayer?.play() == true {
                    print("🎵 DEEPGRAM_TTS: Audio playback started")
                } else {
                    continuation.resume(throwing: NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Failed to start audio playback"]))
                }
                
            } catch {
                continuation.resume(throwing: error)
            }
        }
    }
    
    // MARK: - STT Implementation (placeholder for future implementation)
    func convertSpeechToText(_ audioData: Data) async throws -> DeepgramSTTResponse {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            throw NSError(domain: "DeepgramAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: "API key not configured"])
        }
        
        // Create request
        let url = URL(string: "\(DeepgramAPI.BASE_URL)\(DeepgramAPI.STT_ENDPOINT)")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("audio/wav", forHTTPHeaderField: "Content-Type")
        request.httpBody = audioData
        
        // Make request
        let (data, response) = try await urlSession.data(for: request)
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            throw NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "DeepgramAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "STT request failed: \(errorMessage)"])
        }
        
        // Parse response
        let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
        let results = json?["results"] as? [String: Any]
        let channels = results?["channels"] as? [[String: Any]]
        let alternatives = channels?.first?["alternatives"] as? [[String: Any]]
        let transcript = alternatives?.first?["transcript"] as? String ?? ""
        let confidence = alternatives?.first?["confidence"] as? Float ?? 0.0
        
        return DeepgramSTTResponse(transcript: transcript, confidence: confidence, isFinal: true)
    }
    
    // MARK: - Connectivity Testing
    func testConnectivity() async -> Bool {
        do {
            let url = URL(string: "\(DeepgramAPI.BASE_URL)/v1/projects")!
            var request = URLRequest(url: url)
            request.httpMethod = "HEAD"
            request.timeoutInterval = 5.0
            
            if let apiKey = apiKey, !apiKey.isEmpty {
                request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
            }
            
            let (_, response) = try await urlSession.data(for: request)
            
            if let httpResponse = response as? HTTPURLResponse {
                return httpResponse.statusCode == 200 || httpResponse.statusCode == 401
            }
            
            return false
        } catch {
            print("🌐 DEEPGRAM_API: Connectivity test failed: \(error)")
            return false
        }
    }
    
    // MARK: - Audio Testing
    func testAudioPlayback() -> Bool {
        do {
            let audioSession = AVAudioSession.sharedInstance()
            return audioSession.isOtherAudioPlaying == false
        } catch {
            print("🔊 DEEPGRAM_API: Audio test failed: \(error)")
            return false
        }
    }
    
    // MARK: - Cleanup
    func stopPlayback() {
        audioPlayer?.stop()
        audioPlayer = nil
        audioPlayerDelegate = nil
    }
    
    deinit {
        networkMonitor.cancel()
        stopPlayback()
    }
}

// MARK: - Audio Player Delegate
private class AudioPlayerDelegate: NSObject, AVAudioPlayerDelegate {
    private let completion: (Bool) -> Void
    
    init(completion: @escaping (Bool) -> Void) {
        self.completion = completion
    }
    
    func audioPlayerDidFinishPlaying(_ player: AVAudioPlayer, successfully flag: Bool) {
        completion(flag)
    }
    
    func audioPlayerDecodeErrorDidOccur(_ player: AVAudioPlayer, error: Error?) {
        print("🎵 AUDIO_PLAYER: Decode error: \(error?.localizedDescription ?? "Unknown error")")
        completion(false)
    }
} 