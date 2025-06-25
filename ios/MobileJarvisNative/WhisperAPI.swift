import Foundation
import AVFoundation

// MARK: - Whisper Response Models
struct WhisperResponse {
    let text: String
    let language: String?
    let duration: Double?
    let segments: [WhisperSegment]?
}

struct WhisperSegment {
    let id: Int
    let seek: Int
    let start: Double
    let end: Double
    let text: String
    let tokens: [Int]
    let temperature: Double
    let avgLogprob: Double
    let compressionRatio: Double
    let noSpeechProb: Double
}

// MARK: - Whisper Configuration
struct WhisperConfiguration {
    let model: String
    let language: String?
    let temperature: Float
    let responseFormat: String
    let prompt: String?
}

// MARK: - Whisper API Client
class WhisperAPI: NSObject {
    
    // MARK: - Constants
    static let BASE_URL = "https://api.openai.com/v1/audio"
    static let TRANSCRIPTIONS_ENDPOINT = "/transcriptions"
    static let TRANSLATIONS_ENDPOINT = "/translations"
    
    // Available models
    enum WhisperModel: String, CaseIterable {
        case whisper1 = "whisper-1"
        
        var displayName: String {
            switch self {
            case .whisper1:
                return "Whisper v1"
            }
        }
    }
    
    // MARK: - Properties
    static let shared = WhisperAPI()
    
    private var apiKey: String?
    private var configManager: ConfigManager
    private let urlSession: URLSession
    
    // Configuration
    private var defaultConfiguration: WhisperConfiguration
    
    // MARK: - Initialization
    private override init() {
        self.configManager = ConfigManager.shared
        
        // Configure URL session with timeouts
        let config = URLSessionConfiguration.default
        config.timeoutIntervalForRequest = 60.0  // Longer timeout for audio processing
        config.timeoutIntervalForResource = 120.0
        self.urlSession = URLSession(configuration: config)
        
        // Default configuration
        self.defaultConfiguration = WhisperConfiguration(
            model: WhisperModel.whisper1.rawValue,
            language: nil, // Auto-detect
            temperature: 0.0,
            responseFormat: "verbose_json",
            prompt: nil
        )
        
        super.init()
        
        loadConfiguration()
    }
    
    // MARK: - Configuration
    
    func initialize() {
        print("🎙️ WHISPER_API: Initializing Whisper API client...")
        loadConfiguration()
        print("🎙️ WHISPER_API: ✅ Whisper API client initialized")
    }
    
    private func loadConfiguration() {
        self.apiKey = configManager.getOpenAIAPIKey()
        print("🎙️ WHISPER_API: Configuration loaded - API key present: \(apiKey != nil)")
    }
    
    // MARK: - Validation
    
    func validateConfiguration() -> (isValid: Bool, issues: [String]) {
        print("🎙️ WHISPER_API: ========== VALIDATING CONFIGURATION ==========")
        
        var issues: [String] = []
        
        // Check API key
        let apiKeyPresent = apiKey != nil && !apiKey!.isEmpty
        if !apiKeyPresent {
            issues.append("OpenAI API key not configured")
        }
        
        // Check API key format (basic validation)
        if apiKeyPresent && !apiKey!.hasPrefix("sk-") {
            issues.append("OpenAI API key appears invalid (should start with 'sk-')")
        }
        
        let isValid = issues.isEmpty
        
        print("🎙️ WHISPER_API: Validation result: \(isValid)")
        if !isValid {
            print("🎙️ WHISPER_API: Issues found:")
            for (index, issue) in issues.enumerated() {
                print("🎙️ WHISPER_API:   \(index + 1). \(issue)")
            }
        }
        
        return (isValid: isValid, issues: issues)
    }
    
    // MARK: - Speech Recognition
    
    /**
     * Convert audio data to text using Whisper
     */
    func transcribeAudio(_ audioData: Data, configuration: WhisperConfiguration? = nil) async throws -> WhisperResponse {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            throw NSError(domain: "WhisperAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: "OpenAI API key not configured"])
        }
        
        let config = configuration ?? defaultConfiguration
        print("🎙️ WHISPER_API: Transcribing audio with model: \(config.model)")
        
        // Create request
        let url = URL(string: "\(WhisperAPI.BASE_URL)\(WhisperAPI.TRANSCRIPTIONS_ENDPOINT)")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")
        
        // Create multipart form data
        let boundary = "Boundary-\(UUID().uuidString)"
        request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")
        
        let formData = createMultipartFormData(
            audioData: audioData,
            configuration: config,
            boundary: boundary
        )
        
        request.httpBody = formData
        
        // Make request
        let (data, response) = try await urlSession.data(for: request)
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            throw NSError(domain: "WhisperAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "WhisperAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "Transcription request failed: \(errorMessage)"])
        }
        
        // Parse response
        return try parseWhisperResponse(data)
    }
    
    /**
     * Convert audio file to text using Whisper
     */
    func transcribeAudioFile(_ fileURL: URL, configuration: WhisperConfiguration? = nil) async throws -> WhisperResponse {
        let audioData = try Data(contentsOf: fileURL)
        return try await transcribeAudio(audioData, configuration: configuration)
    }
    
    /**
     * Translate audio to English using Whisper
     */
    func translateAudio(_ audioData: Data, configuration: WhisperConfiguration? = nil) async throws -> WhisperResponse {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            throw NSError(domain: "WhisperAPI", code: 401, userInfo: [NSLocalizedDescriptionKey: "OpenAI API key not configured"])
        }
        
        let config = configuration ?? defaultConfiguration
        print("🎙️ WHISPER_API: Translating audio with model: \(config.model)")
        
        // Create request (using translations endpoint)
        let url = URL(string: "\(WhisperAPI.BASE_URL)\(WhisperAPI.TRANSLATIONS_ENDPOINT)")!
        var request = URLRequest(url: url)
        request.httpMethod = "POST"
        request.setValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")
        
        // Create multipart form data
        let boundary = "Boundary-\(UUID().uuidString)"
        request.setValue("multipart/form-data; boundary=\(boundary)", forHTTPHeaderField: "Content-Type")
        
        let formData = createMultipartFormData(
            audioData: audioData,
            configuration: config,
            boundary: boundary
        )
        
        request.httpBody = formData
        
        // Make request
        let (data, response) = try await urlSession.data(for: request)
        
        // Check response
        guard let httpResponse = response as? HTTPURLResponse else {
            throw NSError(domain: "WhisperAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response"])
        }
        
        guard httpResponse.statusCode == 200 else {
            let errorMessage = String(data: data, encoding: .utf8) ?? "Unknown error"
            throw NSError(domain: "WhisperAPI", code: httpResponse.statusCode, userInfo: [NSLocalizedDescriptionKey: "Translation request failed: \(errorMessage)"])
        }
        
        // Parse response
        return try parseWhisperResponse(data)
    }
    
    // MARK: - Audio Processing Utilities
    
    /**
     * Convert audio to supported format (WAV, MP3, M4A, etc.)
     */
    func processAudioForWhisper(_ audioData: Data) async throws -> Data {
        // Whisper supports many formats, but let's ensure it's in a supported format
        // For now, we'll just return the data as-is since Whisper is quite flexible
        // In the future, we could add format conversion if needed
        
        print("🎙️ WHISPER_API: Processing audio data (\(audioData.count) bytes)")
        
        // Basic validation - check if it's too small
        guard audioData.count > 1024 else { // At least 1KB
            throw NSError(domain: "WhisperAPI", code: 400, userInfo: [NSLocalizedDescriptionKey: "Audio data too small"])
        }
        
        // Basic validation - check if it's too large (25MB limit for Whisper)
        guard audioData.count < 25 * 1024 * 1024 else {
            throw NSError(domain: "WhisperAPI", code: 400, userInfo: [NSLocalizedDescriptionKey: "Audio data too large (25MB limit)"])
        }
        
        return audioData
    }
    
    /**
     * Chunk large audio files for processing
     */
    func chunkAudioData(_ audioData: Data, maxChunkSize: Int = 20 * 1024 * 1024) -> [Data] {
        guard audioData.count > maxChunkSize else {
            return [audioData]
        }
        
        var chunks: [Data] = []
        var offset = 0
        
        while offset < audioData.count {
            let chunkSize = min(maxChunkSize, audioData.count - offset)
            let chunk = audioData.subdata(in: offset..<(offset + chunkSize))
            chunks.append(chunk)
            offset += chunkSize
        }
        
        print("🎙️ WHISPER_API: Split audio into \(chunks.count) chunks")
        return chunks
    }
    
    // MARK: - Testing and Diagnostics
    
    /**
     * Test Whisper API connectivity
     */
    func testConnectivity() async -> Bool {
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            print("🎙️ WHISPER_API: No API key for connectivity test")
            return false
        }
        
        do {
            // Create a minimal test request (just check auth)
            let url = URL(string: "https://api.openai.com/v1/models")!
            var request = URLRequest(url: url)
            request.httpMethod = "GET"
            request.setValue("Bearer \(apiKey)", forHTTPHeaderField: "Authorization")
            request.timeoutInterval = 10.0
            
            let (_, response) = try await urlSession.data(for: request)
            
            if let httpResponse = response as? HTTPURLResponse {
                let success = httpResponse.statusCode == 200
                print("🎙️ WHISPER_API: Connectivity test result: \(success)")
                return success
            }
            
            return false
        } catch {
            print("🎙️ WHISPER_API: Connectivity test failed: \(error)")
            return false
        }
    }
    
    /**
     * Get available models
     */
    func getAvailableModels() -> [WhisperModel] {
        return WhisperModel.allCases
    }
    
    // MARK: - Private Helper Methods
    
    private func createMultipartFormData(audioData: Data, configuration: WhisperConfiguration, boundary: String) -> Data {
        var formData = Data()
        let boundaryPrefix = "--\(boundary)\r\n"
        let boundarySuffix = "\r\n"
        
        // Add file data
        formData.append(boundaryPrefix.data(using: .utf8)!)
        formData.append("Content-Disposition: form-data; name=\"file\"; filename=\"audio.wav\"\r\n".data(using: .utf8)!)
        formData.append("Content-Type: audio/wav\r\n\r\n".data(using: .utf8)!)
        formData.append(audioData)
        formData.append(boundarySuffix.data(using: .utf8)!)
        
        // Add model
        formData.append(boundaryPrefix.data(using: .utf8)!)
        formData.append("Content-Disposition: form-data; name=\"model\"\r\n\r\n".data(using: .utf8)!)
        formData.append(configuration.model.data(using: .utf8)!)
        formData.append(boundarySuffix.data(using: .utf8)!)
        
        // Add language if specified
        if let language = configuration.language {
            formData.append(boundaryPrefix.data(using: .utf8)!)
            formData.append("Content-Disposition: form-data; name=\"language\"\r\n\r\n".data(using: .utf8)!)
            formData.append(language.data(using: .utf8)!)
            formData.append(boundarySuffix.data(using: .utf8)!)
        }
        
        // Add temperature
        formData.append(boundaryPrefix.data(using: .utf8)!)
        formData.append("Content-Disposition: form-data; name=\"temperature\"\r\n\r\n".data(using: .utf8)!)
        formData.append("\(configuration.temperature)".data(using: .utf8)!)
        formData.append(boundarySuffix.data(using: .utf8)!)
        
        // Add response format
        formData.append(boundaryPrefix.data(using: .utf8)!)
        formData.append("Content-Disposition: form-data; name=\"response_format\"\r\n\r\n".data(using: .utf8)!)
        formData.append(configuration.responseFormat.data(using: .utf8)!)
        formData.append(boundarySuffix.data(using: .utf8)!)
        
        // Add prompt if specified
        if let prompt = configuration.prompt {
            formData.append(boundaryPrefix.data(using: .utf8)!)
            formData.append("Content-Disposition: form-data; name=\"prompt\"\r\n\r\n".data(using: .utf8)!)
            formData.append(prompt.data(using: .utf8)!)
            formData.append(boundarySuffix.data(using: .utf8)!)
        }
        
        // Add closing boundary
        formData.append("--\(boundary)--\r\n".data(using: .utf8)!)
        
        return formData
    }
    
    private func parseWhisperResponse(_ data: Data) throws -> WhisperResponse {
        do {
            let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
            
            guard let text = json?["text"] as? String else {
                throw NSError(domain: "WhisperAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Invalid response format - missing text"])
            }
            
            let language = json?["language"] as? String
            let duration = json?["duration"] as? Double
            
            // Parse segments if available
            var segments: [WhisperSegment]? = nil
            if let segmentsArray = json?["segments"] as? [[String: Any]] {
                segments = segmentsArray.compactMap { segmentDict in
                    guard let id = segmentDict["id"] as? Int,
                          let seek = segmentDict["seek"] as? Int,
                          let start = segmentDict["start"] as? Double,
                          let end = segmentDict["end"] as? Double,
                          let text = segmentDict["text"] as? String,
                          let tokens = segmentDict["tokens"] as? [Int],
                          let temperature = segmentDict["temperature"] as? Double,
                          let avgLogprob = segmentDict["avg_logprob"] as? Double,
                          let compressionRatio = segmentDict["compression_ratio"] as? Double,
                          let noSpeechProb = segmentDict["no_speech_prob"] as? Double else {
                        return nil
                    }
                    
                    return WhisperSegment(
                        id: id,
                        seek: seek,
                        start: start,
                        end: end,
                        text: text,
                        tokens: tokens,
                        temperature: temperature,
                        avgLogprob: avgLogprob,
                        compressionRatio: compressionRatio,
                        noSpeechProb: noSpeechProb
                    )
                }
            }
            
            return WhisperResponse(
                text: text,
                language: language,
                duration: duration,
                segments: segments
            )
            
        } catch {
            throw NSError(domain: "WhisperAPI", code: 0, userInfo: [NSLocalizedDescriptionKey: "Failed to parse response: \(error.localizedDescription)"])
        }
    }
} 