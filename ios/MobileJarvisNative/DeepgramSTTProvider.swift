import Foundation
import AVFoundation

// MARK: - Deepgram STT Provider
class DeepgramSTTProvider: NSObject, STTProvider {
    
    // MARK: - Properties
    private var webSocketClient: DeepgramWebSocketClient
    private var audioEngine: AVAudioEngine?
    private var inputNode: AVAudioInputNode?
    private var isRecording = false
    private var audioFormat: AVAudioFormat?
    
    // Delegate
    weak var delegate: STTProviderDelegate?
    
    // Audio buffer for streaming
    private var audioBuffer = Data()
    private let bufferSize = 1024 // Send audio in chunks
    
    // MARK: - Initialization
    override init() {
        self.webSocketClient = DeepgramWebSocketClient()
        super.init()
        
        self.webSocketClient.delegate = self
        setupAudioEngine()
    }
    
    deinit {
        stopListening()
        webSocketClient.disconnect()
    }
    
    // MARK: - STTProvider Protocol
    
    func startListening() {
        print("🎤 DEEPGRAM_STT: Starting listening...")
        
        // Connect WebSocket first
        webSocketClient.connect()
        
        // Start will be called when WebSocket connects
    }
    
    func stopListening() {
        print("🎤 DEEPGRAM_STT: Stopping listening...")
        
        stopRecording()
        webSocketClient.disconnect()
    }
    
    func isListening() -> Bool {
        return isRecording && webSocketClient.isWebSocketConnected()
    }
    
    func getProviderName() -> String {
        return "Deepgram (WebSocket)"
    }
    
    func validateConfiguration() -> (isValid: Bool, issues: [String]) {
        var issues: [String] = []
        
        // Check API key
        let configManager = ConfigManager.shared
        let apiKey = configManager.getDeepgramApiKey()
        
        if apiKey == nil || apiKey!.isEmpty {
            issues.append("Deepgram API key not configured")
        }
        
        // Check microphone permission
        let microphoneStatus = AVCaptureDevice.authorizationStatus(for: .audio)
        if microphoneStatus != .authorized {
            issues.append("Microphone permission not granted")
        }
        
        // Check audio engine
        if audioEngine == nil {
            issues.append("Audio engine not initialized")
        }
        
        let isValid = issues.isEmpty
        
        print("🎤 DEEPGRAM_STT: Validation result - valid: \(isValid)")
        if !isValid {
            print("🎤 DEEPGRAM_STT: Issues: \(issues.joined(separator: ", "))")
        }
        
        return (isValid: isValid, issues: issues)
    }
    
    // MARK: - Audio Setup
    
    private func setupAudioEngine() {
        audioEngine = AVAudioEngine()
        inputNode = audioEngine?.inputNode
        
        // Configure audio format for Deepgram (16kHz, mono, PCM16)
        let outputFormat = AVAudioFormat(
            commonFormat: .pcmFormatInt16,
            sampleRate: 16000,
            channels: 1,
            interleaved: false
        )
        
        audioFormat = outputFormat
        
        print("🎤 DEEPGRAM_STT: Audio engine configured")
    }
    
    private func startRecording() {
        guard let audioEngine = audioEngine,
              let inputNode = inputNode,
              let audioFormat = audioFormat else {
            print("🎤 DEEPGRAM_STT: ❌ Audio engine not properly configured")
            return
        }
        
        guard !isRecording else {
            print("🎤 DEEPGRAM_STT: Already recording")
            return
        }
        
        do {
            // Install tap on input node
            let inputFormat = inputNode.outputFormat(forBus: 0)
            
            // Create converter if needed
            var converter: AVAudioConverter?
            if inputFormat != audioFormat {
                converter = AVAudioConverter(from: inputFormat, to: audioFormat)
            }
            
            inputNode.installTap(onBus: 0, bufferSize: 1024, format: inputFormat) { [weak self] buffer, time in
                guard let self = self else { return }
                
                // Convert audio if needed
                if let converter = converter,
                   let outputBuffer = AVAudioPCMBuffer(pcmFormat: self.audioFormat!, frameCapacity: buffer.frameCapacity) {
                    
                    let inputBlock: AVAudioConverterInputBlock = { inNumPackets, outStatus in
                        outStatus.pointee = .haveData
                        return buffer
                    }
                        
                    converter.convert(to: outputBuffer, error: nil, withInputFrom: inputBlock)
                    self.processAudioBuffer(outputBuffer)
                } else {
                    // No conversion needed
                    self.processAudioBuffer(buffer)
                }
            }
            
            // Start audio engine
            try audioEngine.start()
            isRecording = true
            
            print("🎤 DEEPGRAM_STT: ✅ Recording started")
            
        } catch {
            print("🎤 DEEPGRAM_STT: ❌ Failed to start recording: \(error)")
            delegate?.sttProvider(self, didEncounterError: error)
        }
    }
    
    private func stopRecording() {
        guard isRecording else { return }
        
        inputNode?.removeTap(onBus: 0)
        audioEngine?.stop()
        isRecording = false
        audioBuffer.removeAll()
        
        print("🎤 DEEPGRAM_STT: Recording stopped")
    }
    
    private func processAudioBuffer(_ buffer: AVAudioPCMBuffer) {
        guard let channelData = buffer.int16ChannelData else { return }
        
        let channelDataValue = channelData.pointee
        let channelDataValueArray = stride(from: 0, to: Int(buffer.frameLength), by: buffer.stride).map { channelDataValue[$0] }
        
        // Convert Int16 array to Data
        let data = channelDataValueArray.withUnsafeBufferPointer { buffer in
            Data(buffer: buffer)
        }
        
        // Add to buffer
        audioBuffer.append(data)
        
        // Send in chunks
        while audioBuffer.count >= bufferSize {
            let chunk = audioBuffer.prefix(bufferSize)
            webSocketClient.sendAudioData(chunk)
            audioBuffer.removeFirst(bufferSize)
        }
    }
}

// MARK: - DeepgramWebSocketClientDelegate
extension DeepgramSTTProvider: DeepgramWebSocketClientDelegate {
    
    func deepgramWebSocketClientDidConnect(_ client: DeepgramWebSocketClient) {
        print("🎤 DEEPGRAM_STT: WebSocket connected")
        
        // Start recording when WebSocket is connected
        DispatchQueue.main.async { [weak self] in
            self?.startRecording()
        }
    }
    
    func deepgramWebSocketClientDidDisconnect(_ client: DeepgramWebSocketClient) {
        print("🎤 DEEPGRAM_STT: WebSocket disconnected")
        
        // Stop recording if WebSocket disconnects
        DispatchQueue.main.async { [weak self] in
            self?.stopRecording()
        }
    }
    
    func deepgramWebSocketClient(_ client: DeepgramWebSocketClient, didReceiveTranscript transcript: String, isFinal: Bool) {
        print("🎤 DEEPGRAM_STT: Received transcript: '\(transcript)' (final: \(isFinal))")
        
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }
            
            if isFinal {
                self.delegate?.sttProvider(self, didRecognizeSpeech: transcript)
            } else {
                self.delegate?.sttProvider(self, didReceivePartialTranscript: transcript)
            }
        }
    }
    
    func deepgramWebSocketClient(_ client: DeepgramWebSocketClient, didReceiveError error: Error) {
        print("🎤 DEEPGRAM_STT: WebSocket error: \(error)")
        
        DispatchQueue.main.async { [weak self] in
            guard let self = self else { return }
            self.delegate?.sttProvider(self, didEncounterError: error)
        }
    }
}