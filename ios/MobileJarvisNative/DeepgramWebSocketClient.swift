import Foundation
import AVFoundation

// MARK: - WebSocket STT Response Models
struct DeepgramWebSocketResponse {
    let transcript: String
    let confidence: Float
    let isFinal: Bool
    let speechFinal: Bool
}

// MARK: - WebSocket Client Delegate
protocol DeepgramWebSocketClientDelegate: AnyObject {
    func deepgramWebSocketClient(_ client: DeepgramWebSocketClient, didReceiveTranscript transcript: String, isFinal: Bool)
    func deepgramWebSocketClient(_ client: DeepgramWebSocketClient, didReceiveError error: Error)
    func deepgramWebSocketClientDidConnect(_ client: DeepgramWebSocketClient)
    func deepgramWebSocketClientDidDisconnect(_ client: DeepgramWebSocketClient)
}

// MARK: - Deepgram WebSocket Client
class DeepgramWebSocketClient: NSObject {
    
    // MARK: - Properties
    weak var delegate: DeepgramWebSocketClientDelegate?
    
    private var webSocketTask: URLSessionWebSocketTask?
    private var urlSession: URLSession!
    private var apiKey: String?
    private var configManager: ConfigManager
    
    // Audio format configuration
    private let sampleRate = 16000
    private let channels = 1
    private let encoding = "linear16"
    
    // Connection state
    private var isConnected = false
    private var isConnecting = false
    private var shouldReconnect = false
    private var reconnectAttempts = 0
    private let maxReconnectAttempts = 3
    private let reconnectDelay: TimeInterval = 2.0
    
    // Ping timer for keepalive
    private var pingTimer: Timer?
    private let pingInterval: TimeInterval = 30.0
    
    // MARK: - Initialization
    override init() {
        self.configManager = ConfigManager.shared
        super.init()
        
        // Configure URL session
        let config = URLSessionConfiguration.default
        config.timeoutIntervalForRequest = 60.0
        config.timeoutIntervalForResource = 120.0
        self.urlSession = URLSession(configuration: config, delegate: self, delegateQueue: nil)
        
        loadConfiguration()
    }
    
    deinit {
        disconnect()
    }
    
    private func loadConfiguration() {
        self.apiKey = configManager.getDeepgramApiKey()
        print("🎤 DEEPGRAM_WS: Configuration loaded - API key present: \(apiKey != nil)")
    }
    
    // MARK: - Connection Management
    
    func connect() {
        guard !isConnected && !isConnecting else {
            print("🎤 DEEPGRAM_WS: Already connected or connecting")
            return
        }
        
        guard let apiKey = apiKey, !apiKey.isEmpty else {
            print("🎤 DEEPGRAM_WS: ❌ No API key configured")
            delegate?.deepgramWebSocketClient(self, didReceiveError: NSError(domain: "DeepgramWebSocket", code: 401, userInfo: [NSLocalizedDescriptionKey: "API key not configured"]))
            return
        }
        
        isConnecting = true
        shouldReconnect = true
        
        print("🎤 DEEPGRAM_WS: Connecting to Deepgram WebSocket...")
        
        // Build WebSocket URL with parameters
        var urlComponents = URLComponents(string: "wss://api.deepgram.com/v1/listen")!
        urlComponents.queryItems = [
            URLQueryItem(name: "encoding", value: encoding),
            URLQueryItem(name: "sample_rate", value: String(sampleRate)),
            URLQueryItem(name: "channels", value: String(channels)),
            URLQueryItem(name: "punctuate", value: "true"),
            URLQueryItem(name: "interim_results", value: "true"),
            URLQueryItem(name: "endpointing", value: "300"),
            URLQueryItem(name: "vad_events", value: "true")
        ]
        
        guard let url = urlComponents.url else {
            print("🎤 DEEPGRAM_WS: ❌ Failed to build WebSocket URL")
            isConnecting = false
            return
        }
        
        var request = URLRequest(url: url)
        request.setValue("Token \(apiKey)", forHTTPHeaderField: "Authorization")
        
        // Create WebSocket task
        webSocketTask = urlSession.webSocketTask(with: request)
        webSocketTask?.resume()
        
        // Start receiving messages
        receiveMessage()
    }
    
    func disconnect() {
        print("🎤 DEEPGRAM_WS: Disconnecting...")
        
        shouldReconnect = false
        isConnecting = false
        
        stopPingTimer()
        
        webSocketTask?.cancel(with: .goingAway, reason: nil)
        webSocketTask = nil
        
        if isConnected {
            isConnected = false
            delegate?.deepgramWebSocketClientDidDisconnect(self)
        }
    }
    
    private func reconnect() {
        guard shouldReconnect && reconnectAttempts < maxReconnectAttempts else {
            print("🎤 DEEPGRAM_WS: Max reconnection attempts reached or reconnection disabled")
            return
        }
        
        reconnectAttempts += 1
        print("🎤 DEEPGRAM_WS: Reconnecting... (attempt \(reconnectAttempts)/\(maxReconnectAttempts))")
        
        DispatchQueue.main.asyncAfter(deadline: .now() + reconnectDelay) { [weak self] in
            self?.connect()
        }
    }
    
    // MARK: - Audio Streaming
    
    func sendAudioData(_ audioData: Data) {
        guard isConnected else {
            print("🎤 DEEPGRAM_WS: ⚠️ Not connected, cannot send audio data")
            return
        }
        
        let message = URLSessionWebSocketTask.Message.data(audioData)
        webSocketTask?.send(message) { [weak self] error in
            if let error = error {
                print("🎤 DEEPGRAM_WS: ❌ Failed to send audio data: \(error)")
                self?.handleError(error)
            }
        }
    }
    
    // MARK: - Message Handling
    
    private func receiveMessage() {
        webSocketTask?.receive { [weak self] result in
            guard let self = self else { return }
            
            switch result {
            case .success(let message):
                switch message {
                case .data(let data):
                    self.handleBinaryMessage(data)
                case .string(let text):
                    self.handleTextMessage(text)
                @unknown default:
                    print("🎤 DEEPGRAM_WS: Unknown message type")
                }
                
                // Continue receiving messages
                self.receiveMessage()
                
            case .failure(let error):
                print("🎤 DEEPGRAM_WS: ❌ Failed to receive message: \(error)")
                self.handleError(error)
            }
        }
    }
    
    private func handleTextMessage(_ text: String) {
        print("🎤 DEEPGRAM_WS: Received text message")
        
        guard let data = text.data(using: .utf8) else {
            print("🎤 DEEPGRAM_WS: ❌ Failed to convert text to data")
            return
        }
        
        do {
            let json = try JSONSerialization.jsonObject(with: data) as? [String: Any]
            
            // Check if this is a connection message
            if let type = json?["type"] as? String {
                if type == "message" {
                    if let channel = json?["channel"] as? [String: Any],
                       let alternatives = channel["alternatives"] as? [[String: Any]],
                       let firstAlternative = alternatives.first,
                       let transcript = firstAlternative["transcript"] as? String {
                        
                        let confidence = firstAlternative["confidence"] as? Float ?? 0.0
                        let isFinal = json?["is_final"] as? Bool ?? false
                        let speechFinal = json?["speech_final"] as? Bool ?? false
                        
                        print("🎤 DEEPGRAM_WS: Transcript: '\(transcript)' (final: \(isFinal), speech_final: \(speechFinal), confidence: \(confidence))")
                        
                        // Only send non-empty transcripts
                        if !transcript.isEmpty {
                            DispatchQueue.main.async {
                                self.delegate?.deepgramWebSocketClient(self, didReceiveTranscript: transcript, isFinal: isFinal || speechFinal)
                            }
                        }
                    }
                } else if type == "metadata" {
                    print("🎤 DEEPGRAM_WS: Received metadata")
                    // Handle connection established
                    if !isConnected {
                        isConnected = true
                        isConnecting = false
                        reconnectAttempts = 0
                        startPingTimer()
                        
                        DispatchQueue.main.async {
                            self.delegate?.deepgramWebSocketClientDidConnect(self)
                        }
                    }
                }
            }
            
        } catch {
            print("🎤 DEEPGRAM_WS: ❌ Failed to parse message: \(error)")
        }
    }
    
    private func handleBinaryMessage(_ data: Data) {
        print("🎤 DEEPGRAM_WS: Received binary message (\(data.count) bytes)")
        // Binary messages from Deepgram are typically not used for transcripts
    }
    
    private func handleError(_ error: Error) {
        print("🎤 DEEPGRAM_WS: ❌ WebSocket error: \(error)")
        
        let wasConnected = isConnected
        isConnected = false
        isConnecting = false
        
        stopPingTimer()
        
        DispatchQueue.main.async {
            self.delegate?.deepgramWebSocketClient(self, didReceiveError: error)
            
            if wasConnected {
                self.delegate?.deepgramWebSocketClientDidDisconnect(self)
            }
        }
        
        // Attempt to reconnect if appropriate
        if shouldReconnect {
            reconnect()
        }
    }
    
    // MARK: - Ping/Keepalive
    
    private func startPingTimer() {
        stopPingTimer()
        
        pingTimer = Timer.scheduledTimer(withTimeInterval: pingInterval, repeats: true) { [weak self] _ in
            self?.sendPing()
        }
    }
    
    private func stopPingTimer() {
        pingTimer?.invalidate()
        pingTimer = nil
    }
    
    private func sendPing() {
        guard isConnected else { return }
        
        webSocketTask?.sendPing { [weak self] error in
            if let error = error {
                print("🎤 DEEPGRAM_WS: ❌ Ping failed: \(error)")
                self?.handleError(error)
            } else {
                print("🎤 DEEPGRAM_WS: ✅ Ping successful")
            }
        }
    }
    
    // MARK: - Status
    
    func isWebSocketConnected() -> Bool {
        return isConnected
    }
    
    func getConnectionState() -> String {
        if isConnected {
            return "connected"
        } else if isConnecting {
            return "connecting"
        } else {
            return "disconnected"
        }
    }
}

// MARK: - URLSessionWebSocketDelegate
extension DeepgramWebSocketClient: URLSessionWebSocketDelegate {
    
    func urlSession(_ session: URLSession, webSocketTask: URLSessionWebSocketTask, didOpenWithProtocol protocol: String?) {
        print("🎤 DEEPGRAM_WS: ✅ WebSocket connection opened")
    }
    
    func urlSession(_ session: URLSession, webSocketTask: URLSessionWebSocketTask, didCloseWith closeCode: URLSessionWebSocketTask.CloseCode, reason: Data?) {
        let reasonString = reason != nil ? String(data: reason!, encoding: .utf8) ?? "Unknown" : "No reason"
        print("🎤 DEEPGRAM_WS: WebSocket closed - code: \(closeCode.rawValue), reason: \(reasonString)")
        
        let wasConnected = isConnected
        isConnected = false
        isConnecting = false
        
        stopPingTimer()
        
        if wasConnected {
            DispatchQueue.main.async {
                self.delegate?.deepgramWebSocketClientDidDisconnect(self)
            }
        }
        
        // Reconnect if not a normal closure
        if shouldReconnect && closeCode != .normalClosure {
            reconnect()
        }
    }
}

// MARK: - URLSessionDelegate
extension DeepgramWebSocketClient: URLSessionDelegate {
    
    func urlSession(_ session: URLSession, didBecomeInvalidWithError error: Error?) {
        if let error = error {
            print("🎤 DEEPGRAM_WS: ❌ URLSession became invalid: \(error)")
            handleError(error)
        }
    }
}