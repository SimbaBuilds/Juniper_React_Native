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
    
    // MARK: - Throttling & Circuit Breaker
    private let requestQueue = DispatchQueue(label: "com.deepgram.api.requests", attributes: .concurrent)
    private let requestSemaphore = DispatchSemaphore(value: 3) // Max 3 concurrent requests
    private var lastConnectivityCheck: Date?
    private let connectivityCheckInterval: TimeInterval = 5.0 // Don't check more than once per 5 seconds
    private var consecutiveFailures = 0
    private let maxConsecutiveFailures = 3
    private var circuitBreakerOpenUntil: Date?
    private var activeRequests = Set<String>() // For deduplication
    private let activeRequestsLock = NSLock()
    
    // Available voices (matching React Native UI options)
    static let AVAILABLE_VOICES: [String: DeepgramVoice] = [
        // Featured Aura-2 voices (most popular and versatile)
        "aura-2-mars-en": DeepgramVoice(name: "aura-2-mars-en", displayName: "Mars", language: "en", accent: "US"),
        "aura-2-apollo-en": DeepgramVoice(name: "aura-2-apollo-en", displayName: "Apollo", language: "en", accent: "US"),
        "aura-2-arcas-en": DeepgramVoice(name: "aura-2-arcas-en", displayName: "Arcas", language: "en", accent: "US"),
        "aura-2-aries-en": DeepgramVoice(name: "aura-2-aries-en", displayName: "Aries", language: "en", accent: "US"),
        
        // Legacy voices for compatibility
        "aura-athena-en": DeepgramVoice(name: "aura-athena-en", displayName: "Athena", language: "en", accent: "US"),
        "aura-helios-en": DeepgramVoice(name: "aura-helios-en", displayName: "Helios", language: "en", accent: "US"),
        
        // Professional voices
        "aura-2-asteria-en": DeepgramVoice(name: "aura-2-asteria-en", displayName: "Asteria", language: "en", accent: "US"),
        "aura-2-athena-en": DeepgramVoice(name: "aura-2-athena-en", displayName: "Athena", language: "en", accent: "US"),
        "aura-2-hermes-en": DeepgramVoice(name: "aura-2-hermes-en", displayName: "Hermes", language: "en", accent: "US"),
        
        // International accents
        "aura-2-draco-en": DeepgramVoice(name: "aura-2-draco-en", displayName: "Draco", language: "en", accent: "US"),
        "aura-2-hyperion-en": DeepgramVoice(name: "aura-2-hyperion-en", displayName: "Hyperion", language: "en", accent: "US"),
        "aura-2-pandora-en": DeepgramVoice(name: "aura-2-pandora-en", displayName: "Pandora", language: "en", accent: "US"),
        
        // Additional variety
        "aura-2-iris-en": DeepgramVoice(name: "aura-2-iris-en", displayName: "Iris", language: "en", accent: "US"),
        "aura-2-luna-en": DeepgramVoice(name: "aura-2-luna-en", displayName: "Luna", language: "en", accent: "US"),
        "aura-2-orpheus-en": DeepgramVoice(name: "aura-2-orpheus-en", displayName: "Orpheus", language: "en", accent: "US"),
        
        // Original supported voices
        "aura-2-thalia-en": DeepgramVoice(name: "aura-2-thalia-en", displayName: "Thalia", language: "en", accent: "US"),
        "aura-2-perseus-en": DeepgramVoice(name: "aura-2-perseus-en", displayName: "Perseus", language: "en", accent: "US"),
        "aura-2-stella-en": DeepgramVoice(name: "aura-2-stella-en", displayName: "Stella", language: "en", accent: "US"),
        "aura-2-hera-en": DeepgramVoice(name: "aura-2-hera-en", displayName: "Hera", language: "en", accent: "US"),
        "aura-2-orion-en": DeepgramVoice(name: "aura-2-orion-en", displayName: "Orion", language: "en", accent: "US"),
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
    
    // Current selected voice
    private var selectedDeepgramVoice: String = DEFAULT_VOICE
    
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
        NSLog("🎵 DEEPGRAM_API: Initializing Deepgram API client...")
        loadConfiguration()
        print("🎵 DEEPGRAM_API: ✅ Deepgram API client initialized")
        NSLog("🎵 DEEPGRAM_API: ✅ Deepgram API client initialized")
    }
    
    private func loadConfiguration() {
        print("🎵 DEEPGRAM_API: Loading configuration...")
        NSLog("🎵 DEEPGRAM_API: Loading configuration...")
        self.apiKey = configManager.getDeepgramApiKey()
        self.selectedDeepgramVoice = configManager.getSelectedDeepgramVoice()
        let keyPresent = apiKey != nil && !apiKey!.isEmpty
        let keyPreview = apiKey?.prefix(10) ?? "nil"
        print("🎵 DEEPGRAM_API: Configuration loaded - API key present: \(keyPresent), preview: '\(keyPreview)...'")
        NSLog("🎵 DEEPGRAM_API: Configuration loaded - API key present: %@, preview: '%@...'", keyPresent ? "YES" : "NO", String(keyPreview))
        print("🎵 DEEPGRAM_API: Selected voice: \(selectedDeepgramVoice)")
        NSLog("🎵 DEEPGRAM_API: Selected voice: %@", selectedDeepgramVoice)
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
        let audioSession = AVAudioSession.sharedInstance()
        return audioSession.isOtherAudioPlaying == false || audioSession.category == .playback
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
            let _ = try await withCheckedThrowingContinuation { continuation in
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
        print("🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL START ==========")
        NSLog("🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL START ==========")
        
        // Create request ID for deduplication
        let requestId = "\(text.hashValue)-\(voice ?? selectedDeepgramVoice)"
        
        // Check for duplicate request
        activeRequestsLock.lock()
        if activeRequests.contains(requestId) {
            activeRequestsLock.unlock()
            print("🎵 DEEPGRAM_TTS: 🚫 Duplicate request detected, skipping")
            NSLog("🎵 DEEPGRAM_TTS: 🚫 Duplicate request detected, skipping")
            return
        }
        activeRequests.insert(requestId)
        activeRequestsLock.unlock()
        
        // Ensure we remove the request ID when done
        defer {
            activeRequestsLock.lock()
            activeRequests.remove(requestId)
            activeRequestsLock.unlock()
        }
        
        // Check circuit breaker
        if let circuitBreakerOpen = circuitBreakerOpenUntil {
            if Date() < circuitBreakerOpen {
                print("🎵 DEEPGRAM_TTS: ⚡ Circuit breaker is OPEN, skipping TTS")
                NSLog("🎵 DEEPGRAM_TTS: ⚡ Circuit breaker is OPEN, skipping TTS")
                throw NSError(domain: "DeepgramAPI", code: 503, userInfo: [NSLocalizedDescriptionKey: "Service temporarily unavailable (circuit breaker open)"])
            }
        }
        
        let keyPresent = apiKey != nil && !apiKey!.isEmpty
        let keyPreview = apiKey?.prefix(10) ?? "nil"
        print("🎵 DEEPGRAM_TTS: convertTextToSpeech called - API key present: \(keyPresent), preview: '\(keyPreview)...'")
        NSLog("🎵 DEEPGRAM_TTS: convertTextToSpeech called - API key present: %@, preview: '%@...'", keyPresent ? "YES" : "NO", String(keyPreview))
        print("🎵 DEEPGRAM_TTS: Text length: \(text.count), preview: '\(text.prefix(50))...'")
        NSLog("🎵 DEEPGRAM_TTS: Text length: %d, preview: '%@...'", text.count, String(text.prefix(50)))
        
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            let error = "Deepgram API key not configured"
            print("🎵 DEEPGRAM_TTS: ❌ \(error)")
            NSLog("🎵 DEEPGRAM_TTS: ❌ %@", error)
            throw NSError(domain: "DeepgramAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: error])
        }
        
        let selectedVoice = voice ?? configManager.getSelectedDeepgramVoice()
        print("🎵 DEEPGRAM_TTS: Selected voice: \(selectedVoice)")
        NSLog("🎵 DEEPGRAM_TTS: Selected voice: %@", selectedVoice)
        
        // Create request with query parameters
        var urlComponents = URLComponents(string: "\(DeepgramAPI.BASE_URL)\(DeepgramAPI.TTS_ENDPOINT)")!
        urlComponents.queryItems = [
            URLQueryItem(name: "model", value: selectedVoice),
            URLQueryItem(name: "encoding", value: "mp3")
            // Note: sample_rate is not applicable for mp3 encoding
        ]
        
        let url = urlComponents.url!
        print("🎵 DEEPGRAM_TTS: API endpoint: \(url.absoluteString)")
        NSLog("🎵 DEEPGRAM_TTS: API endpoint: %@", url.absoluteString)
        
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        request.timeoutInterval = 30.0
        
        print("🎵 DEEPGRAM_TTS: HTTP headers configured")
        NSLog("🎵 DEEPGRAM_TTS: HTTP headers configured")
        
        // Request body - only contains the text
        let requestBody: [String: Any] = [
            "text": text
        ]
        
        print("🎵 DEEPGRAM_TTS: Request body: \(requestBody)")
        NSLog("🎵 DEEPGRAM_TTS: Request body: %@", String(describing: requestBody))
        
        do {
            request.httpBody = try JSONSerialization.data(withJSONObject: requestBody)
            print("🎵 DEEPGRAM_TTS: Request body serialized successfully")
            NSLog("🎵 DEEPGRAM_TTS: Request body serialized successfully")
        } catch {
            print("🎵 DEEPGRAM_TTS: ❌ Failed to serialize request body: \(error)")
            NSLog("🎵 DEEPGRAM_TTS: ❌ Failed to serialize request body: %@", error.localizedDescription)
            throw error
        }
        
        // Make request with throttling
        print("🎵 DEEPGRAM_TTS: Acquiring request semaphore...")
        NSLog("🎵 DEEPGRAM_TTS: Acquiring request semaphore...")
        
        _ = requestSemaphore.wait(timeout: .now() + 10)
        defer { requestSemaphore.signal() }
        
        print("🎵 DEEPGRAM_TTS: Sending HTTP request to Deepgram API...")
        NSLog("🎵 DEEPGRAM_TTS: Sending HTTP request to Deepgram API...")
        
        let (data, response) = try await urlSession.data(for: request)
        
        print("🎵 DEEPGRAM_TTS: Received response from Deepgram API")
        NSLog("🎵 DEEPGRAM_TTS: Received response from Deepgram API")
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            print("🎵 DEEPGRAM_TTS: ❌ Invalid response - not HTTP response")
            NSLog("🎵 DEEPGRAM_TTS: ❌ Invalid response - not HTTP response")
            throw NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        print("🎵 DEEPGRAM_TTS: HTTP status code: \(httpResponse.statusCode)")
        NSLog("🎵 DEEPGRAM_TTS: HTTP status code: %d", httpResponse.statusCode)
        print("🎵 DEEPGRAM_TTS: Response data size: \(data.count) bytes")
        NSLog("🎵 DEEPGRAM_TTS: Response data size: %d bytes", data.count)
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            print("🎵 DEEPGRAM_TTS: ❌ TTS request failed with status \(httpResponse.statusCode): \(errorMessage)")
            NSLog("🎵 DEEPGRAM_TTS: ❌ TTS request failed with status %d: %@", httpResponse.statusCode, errorMessage)
            
            // Update consecutive failures for circuit breaker
            consecutiveFailures += 1
            if consecutiveFailures >= maxConsecutiveFailures {
                circuitBreakerOpenUntil = Date().addingTimeInterval(30)
                print("🎵 DEEPGRAM_TTS: ⚡ Circuit breaker OPENED due to repeated TTS failures")
                NSLog("🎵 DEEPGRAM_TTS: ⚡ Circuit breaker OPENED due to repeated TTS failures")
            }
            
            throw NSError(domain: "DeepgramAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "TTS request failed: \(errorMessage)"])
        }
        
        // Reset consecutive failures on success
        consecutiveFailures = 0
        
        print("🎵 DEEPGRAM_TTS: ✅ HTTP request successful, proceeding to audio playback")
        NSLog("🎵 DEEPGRAM_TTS: ✅ HTTP request successful, proceeding to audio playback")
        
        // Play audio
        try await playAudioData(data)
        
        print("🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL END ==========")
        NSLog("🎵 DEEPGRAM_TTS: ========== DEEPGRAM TTS API CALL END ==========")
    }
    
    func convertTextToSpeechData(_ text: String, voice: String? = nil) async throws -> Data {
        let keyPresent = apiKey != nil && !apiKey!.isEmpty
        let keyPreview = apiKey?.prefix(10) ?? "nil"
        print("🎵 DEEPGRAM_TTS_DATA: convertTextToSpeechData called - API key present: \(keyPresent), preview: '\(keyPreview)...'")
        NSLog("🎵 DEEPGRAM_TTS_DATA: convertTextToSpeechData called - API key present: %@, preview: '%@...'", keyPresent ? "YES" : "NO", String(keyPreview))
        
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            let error = "Deepgram API key not configured"
            print("🎵 DEEPGRAM_TTS_DATA: ❌ \(error)")
            NSLog("🎵 DEEPGRAM_TTS_DATA: ❌ %@", error)
            throw NSError(domain: "DeepgramAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: error])
        }
        
        let selectedVoice = voice ?? configManager.getSelectedDeepgramVoice()
        
        // Create request with query parameters
        var urlComponents = URLComponents(string: "\(DeepgramAPI.BASE_URL)\(DeepgramAPI.TTS_ENDPOINT)")!
        urlComponents.queryItems = [
            URLQueryItem(name: "model", value: selectedVoice),
            URLQueryItem(name: "encoding", value: "mp3")
            // Note: sample_rate is not applicable for mp3 encoding
        ]
        
        let url = urlComponents.url!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        request.setValue("application/json", forHTTPHeaderField: "Content-Type")
        
        // Request body - only contains the text
        let requestBody: [String: Any] = [
            "text": text
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
        print("🔊 DEEPGRAM_AUDIO: ========== AUDIO PLAYBACK START ==========")
        NSLog("🔊 DEEPGRAM_AUDIO: ========== AUDIO PLAYBACK START ==========")
        print("🔊 DEEPGRAM_AUDIO: Audio data size: \(data.count) bytes")
        NSLog("🔊 DEEPGRAM_AUDIO: Audio data size: %d bytes", data.count)
        
        return try await withCheckedThrowingContinuation { continuation in
            do {
                print("🔊 DEEPGRAM_AUDIO: Configuring audio session for playback...")
                NSLog("🔊 DEEPGRAM_AUDIO: Configuring audio session for playback...")
                
                // Configure audio session for playback
                let audioSession = AVAudioSession.sharedInstance()
                try audioSession.setCategory(.playback, mode: .default)
                try audioSession.setActive(true)
                
                print("🔊 DEEPGRAM_AUDIO: ✅ Audio session configured successfully")
                NSLog("🔊 DEEPGRAM_AUDIO: ✅ Audio session configured successfully")
                
                print("🔊 DEEPGRAM_AUDIO: Creating AVAudioPlayer with received data...")
                NSLog("🔊 DEEPGRAM_AUDIO: Creating AVAudioPlayer with received data...")
                
                // Create audio player
                audioPlayer = try AVAudioPlayer(data: data)
                
                guard let player = audioPlayer else {
                    print("🔊 DEEPGRAM_AUDIO: ❌ Failed to create audio player")
                    NSLog("🔊 DEEPGRAM_AUDIO: ❌ Failed to create audio player")
                    continuation.resume(throwing: NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Failed to create audio player"]))
                    return
                }
                
                print("🔊 DEEPGRAM_AUDIO: ✅ AVAudioPlayer created successfully")
                NSLog("🔊 DEEPGRAM_AUDIO: ✅ AVAudioPlayer created successfully")
                print("🔊 DEEPGRAM_AUDIO: Audio duration: \(player.duration) seconds")
                NSLog("🔊 DEEPGRAM_AUDIO: Audio duration: %.2f seconds", player.duration)
                
                let prepareResult = player.prepareToPlay()
                print("🔊 DEEPGRAM_AUDIO: Audio player prepare result: \(prepareResult)")
                NSLog("🔊 DEEPGRAM_AUDIO: Audio player prepare result: %@", prepareResult ? "SUCCESS" : "FAILED")
                
                // Set up delegate to handle completion
                print("🔊 DEEPGRAM_AUDIO: Setting up audio player delegate...")
                NSLog("🔊 DEEPGRAM_AUDIO: Setting up audio player delegate...")
                
                let delegate = AudioPlayerDelegate { success in
                    print("🔊 DEEPGRAM_AUDIO: Audio playback completion callback - success: \(success)")
                    NSLog("🔊 DEEPGRAM_AUDIO: Audio playback completion callback - success: %@", success ? "YES" : "NO")
                    
                    if success {
                        print("🔊 DEEPGRAM_AUDIO: ✅ Audio playback completed successfully")
                        NSLog("🔊 DEEPGRAM_AUDIO: ✅ Audio playback completed successfully")
                        continuation.resume()
                    } else {
                        continuation.resume(throwing: NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Audio playback failed"]))
                    }
                }
                
                audioPlayerDelegate = delegate
                audioPlayer?.delegate = delegate
                
                print("🔊 DEEPGRAM_AUDIO: ✅ Audio player delegate configured")
                NSLog("🔊 DEEPGRAM_AUDIO: ✅ Audio player delegate configured")
                
                // Start playback
                print("🔊 DEEPGRAM_AUDIO: Starting audio playback...")
                NSLog("🔊 DEEPGRAM_AUDIO: Starting audio playback...")
                
                if audioPlayer?.play() == true {
                    print("🔊 DEEPGRAM_AUDIO: ✅ Audio playback started successfully")
                    NSLog("🔊 DEEPGRAM_AUDIO: ✅ Audio playback started successfully")
                } else {
                    print("🔊 DEEPGRAM_AUDIO: ❌ Failed to start audio playback")
                    NSLog("🔊 DEEPGRAM_AUDIO: ❌ Failed to start audio playback")
                    continuation.resume(throwing: NSError(domain: "DeepgramAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Failed to start audio playback"]))
                }
                
            } catch {
                print("🔊 DEEPGRAM_AUDIO: ❌ Audio playback setup failed: \(error)")
                NSLog("🔊 DEEPGRAM_AUDIO: ❌ Audio playback setup failed: %@", error.localizedDescription)
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
    
    // MARK: - Initialization Status
    func isInitialized() -> Bool {
        return apiKey != nil && !apiKey!.isEmpty
    }
    
    // MARK: - Client Management
    func resetClient() {
        print("🎵 DEEPGRAM_API: Resetting Deepgram client...")
        NSLog("🎵 DEEPGRAM_API: Resetting Deepgram client...")
        
        // Stop any ongoing audio playback
        stopPlayback()
        
        // Reload API key from config
        let oldKeyPresent = apiKey != nil && !apiKey!.isEmpty
        print("🎵 DEEPGRAM_API: Old API key present: \(oldKeyPresent)")
        NSLog("🎵 DEEPGRAM_API: Old API key present: %@", oldKeyPresent ? "YES" : "NO")
        
        self.apiKey = configManager.getDeepgramApiKey()
        
        let newKeyPresent = apiKey != nil && !apiKey!.isEmpty
        let keyPreview = apiKey?.prefix(10) ?? "nil"
        
        // Clear any cached data or session state if needed
        // For now, just log the reset
        print("🎵 DEEPGRAM_API: Client reset complete. API key present: \(newKeyPresent), preview: '\(keyPreview)...'")
        NSLog("🎵 DEEPGRAM_API: Client reset complete. API key present: %@, preview: '%@...'", newKeyPresent ? "YES" : "NO", String(keyPreview))
    }
    
    // MARK: - Connectivity Testing
    func testConnectivity() async -> Bool {
        print("🌐 DEEPGRAM_API: ========== TESTING CONNECTIVITY ==========")
        NSLog("🌐 DEEPGRAM_API: ========== TESTING CONNECTIVITY ==========")
        
        // Check circuit breaker
        if let circuitBreakerOpen = circuitBreakerOpenUntil {
            if Date() < circuitBreakerOpen {
                print("🌐 DEEPGRAM_API: ⚡ Circuit breaker is OPEN until \(circuitBreakerOpen)")
                NSLog("🌐 DEEPGRAM_API: ⚡ Circuit breaker is OPEN")
                return false
            } else {
                // Reset circuit breaker
                circuitBreakerOpenUntil = nil
                consecutiveFailures = 0
                print("🌐 DEEPGRAM_API: ⚡ Circuit breaker RESET")
                NSLog("🌐 DEEPGRAM_API: ⚡ Circuit breaker RESET")
            }
        }
        
        // Throttle connectivity checks
        if let lastCheck = lastConnectivityCheck {
            let timeSinceLastCheck = Date().timeIntervalSince(lastCheck)
            if timeSinceLastCheck < connectivityCheckInterval {
                print("🌐 DEEPGRAM_API: 🚦 Throttled: Last check was \(timeSinceLastCheck)s ago")
                NSLog("🌐 DEEPGRAM_API: 🚦 Throttled: Last check was %.1f seconds ago", timeSinceLastCheck)
                // Return cached result based on consecutive failures
                return consecutiveFailures == 0
            }
        }
        
        lastConnectivityCheck = Date()
        
        let keyPresent = apiKey != nil && !apiKey!.isEmpty
        let keyPreview = apiKey?.prefix(10) ?? "nil"
        print("🌐 DEEPGRAM_API: API key present: \(keyPresent), preview: '\(keyPreview)...'")
        NSLog("🌐 DEEPGRAM_API: API key present: %@, preview: '%@...'", keyPresent ? "YES" : "NO", String(keyPreview))
        
        // Acquire semaphore for request throttling
        _ = requestSemaphore.wait(timeout: .now() + 10)
        defer { requestSemaphore.signal() }
        
        do {
            let url = URL(string: "\(DeepgramAPI.BASE_URL)/v1/projects")!
            print("🌐 DEEPGRAM_API: Testing connectivity to: \(url.absoluteString)")
            NSLog("🌐 DEEPGRAM_API: Testing connectivity to: %@", url.absoluteString)
            
            var request = URLRequest(url: url)
            request.httpMethod = "GET"
            request.timeoutInterval = 5.0
            
            if let apiKey = apiKey, !apiKey.isEmpty {
                request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
                print("🌐 DEEPGRAM_API: Added Authorization header")
                NSLog("🌐 DEEPGRAM_API: Added Authorization header")
            } else {
                print("🌐 DEEPGRAM_API: ⚠️ No API key available for request")
                NSLog("🌐 DEEPGRAM_API: ⚠️ No API key available for request")
            }
            
            print("🌐 DEEPGRAM_API: Sending connectivity test request...")
            NSLog("🌐 DEEPGRAM_API: Sending connectivity test request...")
            
            let (_, response) = try await urlSession.data(for: request)
            
            if let httpResponse = response as? HTTPURLResponse {
                print("🌐 DEEPGRAM_API: Received response with status code: \(httpResponse.statusCode)")
                NSLog("🌐 DEEPGRAM_API: Received response with status code: %d", httpResponse.statusCode)
                
                let success = httpResponse.statusCode == 200 || httpResponse.statusCode == 401
                
                if success {
                    consecutiveFailures = 0
                } else {
                    consecutiveFailures += 1
                    if consecutiveFailures >= maxConsecutiveFailures {
                        // Open circuit breaker
                        circuitBreakerOpenUntil = Date().addingTimeInterval(30) // 30 seconds
                        print("🌐 DEEPGRAM_API: ⚡ Circuit breaker OPENED due to \(consecutiveFailures) consecutive failures")
                        NSLog("🌐 DEEPGRAM_API: ⚡ Circuit breaker OPENED")
                    }
                }
                
                print("🌐 DEEPGRAM_API: Connectivity test result: \(success ? "SUCCESS" : "FAILED")")
                NSLog("🌐 DEEPGRAM_API: Connectivity test result: %@", success ? "SUCCESS" : "FAILED")
                return success
            } else {
                print("🌐 DEEPGRAM_API: ❌ No HTTP response received")
                NSLog("🌐 DEEPGRAM_API: ❌ No HTTP response received")
                consecutiveFailures += 1
                return false
            }
        } catch {
            print("🌐 DEEPGRAM_API: ❌ Connectivity test failed with error: \(error)")
            NSLog("🌐 DEEPGRAM_API: ❌ Connectivity test failed with error: %@", error.localizedDescription)
            consecutiveFailures += 1
            if consecutiveFailures >= maxConsecutiveFailures {
                circuitBreakerOpenUntil = Date().addingTimeInterval(30)
                print("🌐 DEEPGRAM_API: ⚡ Circuit breaker OPENED")
                NSLog("🌐 DEEPGRAM_API: ⚡ Circuit breaker OPENED")
            }
            return false
        }
    }
    
    // MARK: - Audio Testing
    func testAudioPlayback() -> Bool {
        let audioSession = AVAudioSession.sharedInstance()
        return audioSession.isOtherAudioPlaying == false
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