import Foundation
import Speech
import AVFoundation

// MARK: - STT Provider Types
enum STTProviderType: String, CaseIterable {
    case native = "ios_native"
    case deepgram = "deepgram"
    case whisper = "whisper"
    
    var displayName: String {
        switch self {
        case .native: return "iOS Native"
        case .deepgram: return "Deepgram"
        case .whisper: return "Whisper"
        }
    }
}

@objc(VoiceManager)
class VoiceManager: NSObject {
    
    // MARK: - Singleton
    static let shared = VoiceManager()
    
    // MARK: - Configuration
    private let config = ConfigManager.shared
    
    // MARK: - Speech Recognition
    private var speechRecognizer: SFSpeechRecognizer?
    private var recognitionRequest: SFSpeechAudioBufferRecognitionRequest?
    private var recognitionTask: SFSpeechRecognitionTask?
    private var audioEngine = AVAudioEngine()
    
    // MARK: - STT Provider Management
    private var currentSTTProvider: STTProviderType = .native
    private let deepgramAPI = DeepgramAPI.shared
    private let whisperAPI = WhisperAPI.shared
    private var deepgramSTTProvider: DeepgramSTTProvider?
    
    // MARK: - TTS Integration
    private let ttsManager = TTSManager.shared
    
    // MARK: - Audio Management
    private let audioManager = AudioManager.shared
    
    // MARK: - State Management
    private var currentState: VoiceState = .idle
    private var isListening = false
    private var currentRetryCount = 0
    
    // MARK: - API Callback Handling (matching Android pattern)
    private var pendingApiCallbacks: [String: (String) -> Void] = [:]
    private var timeoutTimers: [String: Timer] = [:]
    
    // MARK: - Timing Parameters (copied from Android)
    private var speechTimeoutSeconds: Double = 10.0
    private var partialResultsTimeout: Double = 3.0
    private var speechInputMinimumTime: Double = 1.0
    private var speechInputMaximumTime: Double = 30.0
    private var endOfSpeechTimeout: Double = 2.0
    private var silenceTimeout: Double = 5.0
    private var startOfSpeechTimeout: Double = 10.0
    private var maxRetries: Int = 3
    private var retryDelay: Double = 1.0
    private var minimumSilenceDuration: Double = 0.5
    private var maximumSilenceDuration: Double = 3.0
    private var audioSessionCategory: String = "playAndRecord"
    
    // MARK: - Timers
    private var speechTimer: Timer?
    private var silenceTimer: Timer?
    private var startOfSpeechTimer: Timer?
    private var endOfSpeechTimer: Timer?
    private var partialResultsTimer: Timer?
    
    // MARK: - Speech Tracking
    private var speechStartTime: Date?
    private var lastSpeechDetectedTime: Date?
    private var hasSpeechStarted = false
    private var lastPartialResult: String?
    private var partialResult: String?
    private var finalResult: String?
    
    // MARK: - Callbacks
    var onStateChanged: ((VoiceState) -> Void)?
    var onSpeechResult: ((String, Bool) -> Void)?  // (text, isFinal)
    var onPartialResult: ((String) -> Void)?
    var onError: ((VoiceError, String) -> Void)?
    
    // MARK: - React Native Bridge Callback
    var reactNativeApiCallback: ((String, String) -> Void)?
    
    // MARK: - Initialization
    override init() {
        super.init()
        loadConfiguration()
        setupSpeechRecognizer()
        loadSTTProvider()
    }
    
    // MARK: - Configuration Loading
    private func loadConfiguration() {
        speechTimeoutSeconds = config.getSpeechTimeoutSeconds()
        partialResultsTimeout = config.getPartialResultsTimeout()
        speechInputMinimumTime = config.getSpeechInputMinimumTime()
        speechInputMaximumTime = config.getSpeechInputMaximumTime()
        endOfSpeechTimeout = config.getEndOfSpeechTimeout()
        silenceTimeout = config.getSilenceTimeout()
        startOfSpeechTimeout = config.getStartOfSpeechTimeout()
        maxRetries = config.getMaxRetries()
        retryDelay = config.getRetryDelay()
        minimumSilenceDuration = config.getMinimumSilenceDuration()
        maximumSilenceDuration = config.getMaximumSilenceDuration()
        audioSessionCategory = config.getAudioSessionCategory()
        
        print("🎙️ VoiceManager: Loaded configuration:")
        print("  speechTimeoutSeconds: \(speechTimeoutSeconds)")
        print("  partialResultsTimeout: \(partialResultsTimeout)")
        print("  speechInputMinimumTime: \(speechInputMinimumTime)")
        print("  speechInputMaximumTime: \(speechInputMaximumTime)")
        print("  endOfSpeechTimeout: \(endOfSpeechTimeout)")
        print("  silenceTimeout: \(silenceTimeout)")
        print("  startOfSpeechTimeout: \(startOfSpeechTimeout)")
        print("  maxRetries: \(maxRetries)")
        print("  retryDelay: \(retryDelay)")
        print("  minimumSilenceDuration: \(minimumSilenceDuration)")
        print("  maximumSilenceDuration: \(maximumSilenceDuration)")
    }
    
    // MARK: - STT Provider Loading
    private func loadSTTProvider() {
        let defaultProvider = config.getDefaultSTTProvider()
        currentSTTProvider = STTProviderType(rawValue: defaultProvider) ?? .native
        print("🎙️ VoiceManager: Loaded STT provider: \(currentSTTProvider.displayName)")
    }
    
    private func setupSpeechRecognizer() {
        let locale = Locale(identifier: config.getSpeechRecognitionLanguage())
        speechRecognizer = SFSpeechRecognizer(locale: locale)
        
        guard let speechRecognizer = speechRecognizer else {
            print("❌ VoiceManager: Speech recognizer not available for locale: \(locale)")
            return
        }
        
        speechRecognizer.delegate = self
        print("✅ VoiceManager: Speech recognizer setup complete for locale: \(locale)")
    }
    
    // MARK: - State Management
    private func setState(_ newState: VoiceState) {
        if currentState != newState {
            print("🔄 VoiceManager: State changed from \(currentState.description) to \(newState.description)")
            currentState = newState
            DispatchQueue.main.async {
                self.onStateChanged?(newState)
            }
        }
    }
    
    // MARK: - Permission Management
    func requestPermissions(completion: @escaping (Bool) -> Void) {
        // Request speech recognition permission
        SFSpeechRecognizer.requestAuthorization { status in
            DispatchQueue.main.async {
                switch status {
                case .authorized:
                    // Request microphone permission
                    AVAudioSession.sharedInstance().requestRecordPermission { granted in
                        DispatchQueue.main.async {
                            completion(granted)
                        }
                    }
                case .denied, .restricted, .notDetermined:
                    completion(false)
                @unknown default:
                    completion(false)
                }
            }
        }
    }
    
    // MARK: - Audio Session Management
    private func configureAudioSession() throws {
        let audioSession = AVAudioSession.sharedInstance()
        print("🎤 VoiceManager: Configuring audio session...")
        print("🎤 VoiceManager: Current record permission: \(audioSession.recordPermission.rawValue)")
        try audioSession.setCategory(.playAndRecord, mode: .measurement, options: [.duckOthers, .defaultToSpeaker])
        try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
        print("✅ VoiceManager: Audio session configured successfully")
    }
    
    // MARK: - Speech Recognition
    func startListening() {
        NSLog("🎙️ VoiceManager: Starting speech recognition")
        print("🎙️ VoiceManager: Starting speech recognition")
        print("🎙️ VoiceManager: Current state: \(currentState.description)")
        print("🎙️ VoiceManager: Is already listening: \(isListening)")
        
        // Reset state
        resetSpeechTracking()
        currentRetryCount = 0
        
        // Attempt to start listening with retry logic
        startListeningWithRetry()
    }
    
    private func startListeningWithRetry() {
        guard currentRetryCount < maxRetries else {
            print("❌ VoiceManager: Max retries reached (\(maxRetries))")
            handleError(.speechRecognitionFailed, "Maximum retry attempts exceeded")
            return
        }
        
        currentRetryCount += 1
        print("🔄 VoiceManager: Attempt \(currentRetryCount) of \(maxRetries)")
        
        // Check permissions
        let authStatus = SFSpeechRecognizer.authorizationStatus()
        NSLog("🔐 VoiceManager: Speech recognition auth status: %d", authStatus.rawValue)
        print("🔐 VoiceManager: Speech recognition auth status: \(authStatus.rawValue)")
        guard authStatus == .authorized else {
            NSLog("❌ VoiceManager: Speech recognition not authorized. Status: %d", authStatus.rawValue)
            handleError(.audioPermissionDenied, "Speech recognition permission not granted. Status: \(authStatus.rawValue)")
            return
        }
        
        // Configure audio session
        do {
            try configureAudioSession()
        } catch {
            print("❌ VoiceManager: Failed to configure audio session: \(error)")
            scheduleRetry()
            return
        }
        
        // Setup recognition
        setupRecognition()
    }
    
    private func setupRecognition() {
        print("🎙️ VoiceManager: Setting up recognition with provider: \(currentSTTProvider.displayName)")
        print("🎙️ VoiceManager: Current STT provider: \(currentSTTProvider)")
        
        // Request audio focus for recording with priority-based management
        audioManager.requestAudioFocus(.recording) { [weak self] success in
            print("🎙️ VoiceManager: Audio focus request result: \(success)")
            guard success else {
                print("❌ VoiceManager: Failed to acquire audio focus for recording")
                self?.scheduleRetry()
                return
            }
            
            // Continue with STT setup based on provider
            self?.continueSTTSetup()
        }
    }
    
    private func continueSTTSetup() {
        // Setup recognition based on selected provider
        switch currentSTTProvider {
        case .native:
            setupNativeSTT()
        case .deepgram:
            setupDeepgramSTT()
        case .whisper:
            setupWhisperSTT()
        }
    }
    
    // MARK: - Native STT Setup
    private func setupNativeSTT() {
        // Cancel any existing recognition
        if let recognitionTask = recognitionTask {
            recognitionTask.cancel()
            self.recognitionTask = nil
        }
        
        // Create recognition request
        print("🎙️ VoiceManager: Creating recognition request...")
        print("🎙️ VoiceManager: Speech recognizer available: \(speechRecognizer?.isAvailable ?? false)")
        recognitionRequest = SFSpeechAudioBufferRecognitionRequest()
        guard let recognitionRequest = recognitionRequest else {
            handleError(.speechRecognitionFailed, "Failed to create recognition request")
            return
        }
        print("✅ VoiceManager: Recognition request created successfully")
        
        recognitionRequest.shouldReportPartialResults = true
        
        // Get audio input node
        let inputNode = audioEngine.inputNode
        let recordingFormat = inputNode.outputFormat(forBus: 0)
        
        // Install tap on input node
        inputNode.installTap(onBus: 0, bufferSize: 1024, format: recordingFormat) { buffer, _ in
            self.recognitionRequest?.append(buffer)
        }
        
        // Prepare audio engine
        audioEngine.prepare()
        
        // Start recognition task
        recognitionTask = speechRecognizer?.recognitionTask(with: recognitionRequest) { result, error in
            self.handleRecognitionResult(result: result, error: error)
        }
        
        // Start audio engine
        do {
            print("🎙️ VoiceManager: About to start audio engine...")
            print("🎙️ VoiceManager: Audio engine running status before start: \(audioEngine.isRunning)")
            try audioEngine.start()
            print("✅ VoiceManager: Audio engine started successfully")
            print("🎙️ VoiceManager: Audio engine running status after start: \(audioEngine.isRunning)")
            setState(.listening)
            isListening = true
            startTimers()
            print("✅ VoiceManager: iOS Native STT started, listening for speech")
        } catch {
            print("❌ VoiceManager: Failed to start audio engine: \(error)")
            print("❌ VoiceManager: Error details: \(error.localizedDescription)")
            scheduleRetry()
        }
    }
    
    // MARK: - Deepgram STT Setup
    private func setupDeepgramSTT() {
        print("🎙️ VoiceManager: Setting up Deepgram WebSocket STT...")
        
        // Initialize Deepgram STT provider if not already done
        if deepgramSTTProvider == nil {
            deepgramSTTProvider = DeepgramSTTProvider()
            deepgramSTTProvider?.delegate = self
        }
        
        // Validate configuration
        guard let provider = deepgramSTTProvider else {
            print("❌ VoiceManager: Failed to initialize Deepgram STT provider")
            fallbackToNativeSTT()
            return
        }
        
        let validation = provider.validateConfiguration()
        if !validation.isValid {
            print("❌ VoiceManager: Deepgram STT configuration invalid: \(validation.issues.joined(separator: ", "))")
            fallbackToNativeSTT()
            return
        }
        
        // Start listening with Deepgram
        provider.startListening()
        setState(.listening)
        isListening = true
        startTimers()
        
        print("✅ VoiceManager: Deepgram WebSocket STT started, listening for speech")
    }
    
    private func fallbackToNativeSTT() {
        print("⚠️ VoiceManager: Falling back to Native STT")
        currentSTTProvider = .native
        setupNativeSTT()
    }
    
    // MARK: - Whisper STT Setup  
    private func setupWhisperSTT() {
        // Whisper STT requires recording audio first, then sending for transcription
        // This is a different pattern from real-time STT
        print("🎙️ VoiceManager: Starting Whisper STT (record-then-transcribe mode)")
        
        // Get audio input node
        let inputNode = audioEngine.inputNode
        let recordingFormat = inputNode.outputFormat(forBus: 0)
        
        // Install tap to record audio for Whisper
        inputNode.installTap(onBus: 0, bufferSize: 1024, format: recordingFormat) { buffer, _ in
            // Store audio data for later transcription
            // This would require implementing audio buffering
            // For now, fallback to native STT
        }
        
        // Prepare audio engine
        audioEngine.prepare()
        
        // Start audio engine
        do {
            try audioEngine.start()
            setState(.listening)
            isListening = true
            startTimers()
            print("✅ VoiceManager: Whisper STT recording started")
            
            // For now, fallback to native STT processing
            // TODO: Implement proper Whisper audio recording and transcription
            print("⚠️ VoiceManager: Whisper STT not fully implemented, using hybrid approach")
            setupNativeSTTForWhisper()
            
        } catch {
            print("❌ VoiceManager: Failed to start audio engine for Whisper: \(error)")
            scheduleRetry()
        }
    }
    
    // MARK: - Hybrid Whisper Approach
    private func setupNativeSTTForWhisper() {
        // Use native STT for real-time feedback, but could also send to Whisper for verification
        recognitionRequest = SFSpeechAudioBufferRecognitionRequest()
        guard let recognitionRequest = recognitionRequest else {
            handleError(.speechRecognitionFailed, "Failed to create recognition request for Whisper hybrid")
            return
        }
        
        recognitionRequest.shouldReportPartialResults = true
        
        // Start recognition task with hybrid processing
        recognitionTask = speechRecognizer?.recognitionTask(with: recognitionRequest) { result, error in
            self.handleRecognitionResult(result: result, error: error)
            
            // TODO: Also send final result to Whisper for improved accuracy
            if let result = result, result.isFinal {
                // Could send to Whisper here for verification/improvement
            }
        }
    }
    
    // MARK: - Timer Management
    private func startTimers() {
        // Start of speech timeout
        startOfSpeechTimer = Timer.scheduledTimer(withTimeInterval: startOfSpeechTimeout, repeats: false) { _ in
            if !self.hasSpeechStarted {
                print("⏰ VoiceManager: Start of speech timeout reached")
                self.handleTimeout("No speech detected within timeout period")
            }
        }
        
        // Overall speech timeout
        speechTimer = Timer.scheduledTimer(withTimeInterval: speechTimeoutSeconds, repeats: false) { _ in
            print("⏰ VoiceManager: Overall speech timeout reached")
            self.handleTimeout("Speech recognition timeout")
        }
        
        print("⏰ VoiceManager: Timers started")
    }
    
    private func startSilenceTimer() {
        silenceTimer?.invalidate()
        NSLog("⏰ VoiceManager: Starting silence timer with timeout: %f seconds", silenceTimeout)
        silenceTimer = Timer.scheduledTimer(withTimeInterval: silenceTimeout, repeats: false) { _ in
            NSLog("⏰ VoiceManager: Silence timeout reached, calling finishListening")
            print("⏰ VoiceManager: Silence timeout reached")
            self.finishListening()
        }
    }
    
    private func startEndOfSpeechTimer() {
        endOfSpeechTimer?.invalidate()
        endOfSpeechTimer = Timer.scheduledTimer(withTimeInterval: endOfSpeechTimeout, repeats: false) { _ in
            print("⏰ VoiceManager: End of speech timeout reached")
            self.finishListening()
        }
    }
    
    private func startPartialResultsTimer() {
        partialResultsTimer?.invalidate()
        partialResultsTimer = Timer.scheduledTimer(withTimeInterval: partialResultsTimeout, repeats: false) { _ in
            print("⏰ VoiceManager: Partial results timeout reached")
            if let lastResult = self.lastPartialResult, !lastResult.isEmpty {
                self.finishListening()
            }
        }
    }
    
    private func stopAllTimers() {
        speechTimer?.invalidate()
        silenceTimer?.invalidate()
        startOfSpeechTimer?.invalidate()
        endOfSpeechTimer?.invalidate()
        partialResultsTimer?.invalidate()
        
        speechTimer = nil
        silenceTimer = nil
        startOfSpeechTimer = nil
        endOfSpeechTimer = nil
        partialResultsTimer = nil
    }
    
    // MARK: - Recognition Result Handling
    private func handleRecognitionResult(result: SFSpeechRecognitionResult?, error: Error?) {
        if let result = result {
            let transcription = result.bestTranscription.formattedString
            let isFinal = result.isFinal
            
            if !transcription.isEmpty {
                if !hasSpeechStarted {
                    hasSpeechStarted = true
                    speechStartTime = Date()
                    startOfSpeechTimer?.invalidate()
                    print("🎙️ VoiceManager: Speech started: '\(transcription)'")
                }
                
                lastSpeechDetectedTime = Date()
                lastPartialResult = transcription
                
                // Reset silence timer since we got speech
                startSilenceTimer()
                
                // Start partial results timer
                if !isFinal {
                    startPartialResultsTimer()
                }
                
                // Notify about the result
                DispatchQueue.main.async {
                    self.onSpeechResult?(transcription, isFinal)
                }
                
                print("📝 VoiceManager: \(isFinal ? "Final" : "Partial") result: '\(transcription)'")
            }
            
            if isFinal {
                finalResult = transcription
                finishListening()
            }
        }
        
        if let error = error {
            print("❌ VoiceManager: Recognition error: \(error)")
            if currentRetryCount < maxRetries {
                scheduleRetry()
            } else {
                handleError(.speechRecognitionFailed, error.localizedDescription)
            }
        }
    }
    
    // MARK: - Retry Logic
    private func scheduleRetry() {
        stopListening()
        
        DispatchQueue.main.asyncAfter(deadline: .now() + retryDelay) {
            print("🔄 VoiceManager: Retrying speech recognition")
            self.startListeningWithRetry()
        }
    }
    
    // MARK: - Finish Listening
    func finishListening() {
        print("🛑 VoiceManager: Finishing speech recognition")
        
        // Check minimum speech duration
        if let startTime = speechStartTime {
            let duration = Date().timeIntervalSince(startTime)
            if duration < speechInputMinimumTime {
                print("⚠️ VoiceManager: Speech too short (\(duration)s), minimum is \(speechInputMinimumTime)s")
                if currentRetryCount < maxRetries {
                    scheduleRetry()
                    return
                } else {
                    handleError(.speechRecognitionFailed, "Speech input too short")
                    return
                }
            }
        }
        
        stopListening()
        
        // If we don't have a final result but we have a partial result, use that
        let resultToProcess = finalResult ?? lastPartialResult
        
        // Process final result
        if let resultToProcess = resultToProcess, !resultToProcess.isEmpty {
            setState(.processing)
            print("✅ VoiceManager: Processing result: '\(resultToProcess)'")
            print("✅ VoiceManager: (was final: \(finalResult != nil), using partial: \(finalResult == nil))")
            
            // **NEW: CONVERSATION FLOW - Emit processTextFromNative event**
            processTextRequest(resultToProcess)
        } else {
            print("⚠️ VoiceManager: No result to process (final: \(finalResult ?? "nil"), partial: \(lastPartialResult ?? "nil"))")
            // Transition to error state if no speech was captured
            handleError(.speechRecognitionFailed, "No speech detected")
        }
    }
    
    // MARK: - **NEW: CONVERSATION FLOW METHODS**
    
    /**
     * Process text request - matching Android pattern
     * This emits processTextFromNative event to React Native
     */
    private func processTextRequest(_ text: String) {
        print("🔵 VoiceManager: processTextRequest called with: '\(text)'")
        
        let requestId = UUID().uuidString
        print("🔵 VoiceManager: Generated requestId: \(requestId)")
        
        // Set up timeout timer
        let timeoutTimer = Timer.scheduledTimer(withTimeInterval: 30.0, repeats: false) { _ in
            self.timeoutTimers.removeValue(forKey: requestId)
            if let callback = self.pendingApiCallbacks.removeValue(forKey: requestId) {
                print("⏰ VoiceManager: Request timeout for requestId: \(requestId)")
                callback("I'm sorry, there was a timeout processing your request. Please try again.")
            }
        }
        
        timeoutTimers[requestId] = timeoutTimer
        
        // Store callback for when response comes back
        pendingApiCallbacks[requestId] = { [weak self] response in
            print("🔵 VoiceManager: Processing API response: \(response)")
            self?.handleApiResponseInternal(response)
        }
        
        // Emit event to React Native (similar to Android pattern)
        NSLog("🔵 VoiceManager: About to call reactNativeApiCallback")
        NSLog("🔵 VoiceManager: Callback is nil: %@", reactNativeApiCallback == nil ? "YES" : "NO")
        
        if let callback = reactNativeApiCallback {
            NSLog("🔵 VoiceManager: Calling React Native API callback with text: %@ and requestId: %@", text, requestId)
            callback(text, requestId)
            NSLog("🔵 VoiceManager: React Native API callback called successfully")
        } else {
            NSLog("❌ VoiceManager: reactNativeApiCallback is nil! Cannot emit processTextFromNative event")
            print("❌ VoiceManager: reactNativeApiCallback is nil! Cannot emit processTextFromNative event")
            handleError(.speechRecognitionFailed, "API callback not set up")
        }
    }
    
    /**
     * Handle API response from React Native (matching Android handleApiResponse)
     */
    @objc func handleApiResponse(_ requestId: String, _ response: String) {
        print("🟢 VoiceManager: handleApiResponse called")
        print("🟢 VoiceManager: RequestId: \(requestId)")
        print("🟢 VoiceManager: Response length: \(response.count)")
        print("🟢 VoiceManager: Response preview: \(String(response.prefix(100)))...")
        
        // Cancel timeout timer
        timeoutTimers.removeValue(forKey: requestId)?.invalidate()
        
        // Execute pending callback
        if let callback = pendingApiCallbacks.removeValue(forKey: requestId) {
            print("🟢 VoiceManager: Found pending callback for requestId: \(requestId)")
            callback(response)
        } else {
            print("⚠️ VoiceManager: No pending callback found for requestId: \(requestId)")
            // Still speak the response
            handleApiResponseInternal(response)
        }
    }
    
    /**
     * Internal handling of API response - starts TTS and manages state
     */
    private func handleApiResponseInternal(_ response: String) {
        print("🟢 VoiceManager: handleApiResponseInternal called")
        
        // Stop any current listening first
        stopListening()
        
        // Request audio focus for TTS playback (higher priority than STT)
        audioManager.requestAudioFocus(.playback) { [weak self] success in
            guard let self = self, success else {
                print("❌ VoiceManager: Failed to acquire audio focus for TTS")
                self?.setState(.idle)
                return
            }
            
            // Start TTS playback
            self.setState(.speaking)
            
            self.ttsManager.speak(response) {
                print("🎵 VoiceManager: TTS completed, transitioning to LISTENING for continuous conversation")
                
                // Release audio focus to allow STT to take over
                self.audioManager.releaseAudioFocus()
                
                // Match Android behavior: transition to LISTENING instead of IDLE
                // This enables continuous conversation without requiring wake word
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.1) {
                    self.setState(.listening)
                    self.startListening()
                }
            }
        }
    }
    
    /**
     * Interrupt current speech (for React Native bridge)
     */
    @objc func interruptSpeech() -> Bool {
        print("🛑 VoiceManager: interruptSpeech called")
        
        if currentState == .speaking {
            ttsManager.interruptSpeech()
            setState(.idle)
            return true
        }
        
        return false
    }
    
    /**
     * Set React Native API callback (called from VoiceModule)
     */
    @objc func setReactNativeApiCallback(_ callback: @escaping (String, String) -> Void) {
        print("🔗 VoiceManager: React Native API callback set")
        reactNativeApiCallback = callback
    }
    
    /**
     * Simulate wake word detection for iOS - DEPRECATED
     * iOS now uses direct listening flow without wake word simulation
     */
    @available(*, deprecated, message: "iOS uses direct listening flow. Use startListening() directly.")
    @objc func simulateWakeWordDetection() {
        print("⚠️ VoiceManager: simulateWakeWordDetection is deprecated on iOS")
        print("⚠️ VoiceManager: iOS should use startListening() directly for conversation flow")
        
        // For backward compatibility, just start listening
        startListening()
    }
    
    func stopListening() {
        print("🛑 VoiceManager: Stopping speech recognition")
        
        isListening = false
        stopAllTimers()
        
        // Stop based on current provider
        switch currentSTTProvider {
        case .native:
            stopNativeSTT()
        case .deepgram:
            stopDeepgramSTT()
        case .whisper:
            stopWhisperSTT()
        }
        
        // Release audio focus when stopping listening
        audioManager.releaseAudioFocus()
        
        setState(.idle)
    }
    
    private func stopNativeSTT() {
        // Stop audio engine
        if audioEngine.isRunning {
            audioEngine.stop()
            audioEngine.inputNode.removeTap(onBus: 0)
        }
        
        // Cancel recognition
        recognitionTask?.cancel()
        recognitionRequest?.endAudio()
        
        // Reset
        recognitionTask = nil
        recognitionRequest = nil
    }
    
    private func stopDeepgramSTT() {
        deepgramSTTProvider?.stopListening()
    }
    
    private func stopWhisperSTT() {
        // TODO: Implement Whisper STT stop logic
        print("⚠️ VoiceManager: Whisper STT stop not implemented")
    }
    
    // MARK: - Error Handling
    private func handleError(_ error: VoiceError, _ message: String) {
        print("❌ VoiceManager: Error - \(error.description): \(message)")
        print("❌ VoiceManager: Previous state was: \(currentState.description)")
        
        stopListening()
        setState(.error)
        
        DispatchQueue.main.async {
            self.onError?(error, message)
        }
    }
    
    private func handleTimeout(_ message: String) {
        print("⏰ VoiceManager: Timeout - \(message)")
        
        if currentRetryCount < maxRetries {
            scheduleRetry()
        } else {
            handleError(.speechRecognitionFailed, message)
        }
    }
    
    // MARK: - Reset
    private func resetSpeechTracking() {
        hasSpeechStarted = false
        speechStartTime = nil
        lastSpeechDetectedTime = nil
        lastPartialResult = nil
        finalResult = nil
        stopAllTimers()
    }
    
    // MARK: - Public Interface
    func getCurrentState() -> VoiceState {
        return currentState
    }
    
    func isCurrentlyListening() -> Bool {
        return isListening
    }
    
    func isCurrentlySpeaking() -> Bool {
        return currentState == .speaking && ttsManager.isTTSSpeaking()
    }
    
    // MARK: - STT Provider Management
    
    /**
     * Set STT provider (matching Android pattern)
     */
    @objc func setSTTProvider(_ provider: String) {
        guard let sttProvider = STTProviderType(rawValue: provider) else {
            print("❌ VoiceManager: Invalid STT provider: \(provider)")
            return
        }
        
        print("🎙️ VoiceManager: Setting STT provider to: \(sttProvider.displayName)")
        
        // Stop current listening if switching providers
        if currentSTTProvider != sttProvider && isListening {
            stopListening()
        }
        
        currentSTTProvider = sttProvider
        
        // Update configuration (for persistence)
        config.setDefaultSTTProvider(sttProvider.rawValue)
        print("🎙️ VoiceManager: ✅ STT provider set to: \(sttProvider.displayName)")
    }
    
    /**
     * Get current STT provider (matching Android pattern)
     */
    @objc func getSTTProvider() -> String {
        return currentSTTProvider.rawValue
    }
    
    /**
     * Get available STT providers (matching Android pattern)
     */
    @objc func getAvailableSTTProviders() -> [String] {
        return STTProviderType.allCases.map { $0.rawValue }
    }
    
    /**
     * Get available STT providers with display names
     */
    @objc func getAvailableSTTProvidersWithNames() -> [[String: String]] {
        return STTProviderType.allCases.map { provider in
            [
                "value": provider.rawValue,
                "displayName": provider.displayName
            ]
        }
    }
    
    /**
     * Test STT provider connectivity
     */
    @objc func testSTTProvider(_ provider: String, completion: @escaping (Bool, String) -> Void) {
        guard let sttProvider = STTProviderType(rawValue: provider) else {
            completion(false, "Invalid STT provider: \(provider)")
            return
        }
        
        print("🧪 VoiceManager: Testing STT provider: \(sttProvider.displayName)")
        
        Task {
            switch sttProvider {
                case .native:
                    // Test iOS native speech recognition availability
                    let isAvailable = SFSpeechRecognizer.authorizationStatus() == .authorized
                    let message = isAvailable ? "iOS Native STT is available" : "iOS Native STT requires permission"
                    completion(isAvailable, message)
                    
                case .deepgram:
                    // Test Deepgram connectivity
                    let isConnected = await deepgramAPI.testConnectivity()
                    let message = isConnected ? "Deepgram STT is available" : "Deepgram STT connection failed"
                    completion(isConnected, message)
                    
                case .whisper:
                    // Test Whisper connectivity
                    let isConnected = await whisperAPI.testConnectivity()
                    let message = isConnected ? "Whisper STT is available" : "Whisper STT connection failed"
                    completion(isConnected, message)
                }
        }
    }
}

// MARK: - SFSpeechRecognizerDelegate
extension VoiceManager: SFSpeechRecognizerDelegate {
    
    func speechRecognizer(_ speechRecognizer: SFSpeechRecognizer, availabilityDidChange available: Bool) {
        print("🎙️ VoiceManager: Speech recognizer availability changed: \(available)")
        
        if !available {
            handleError(.speechRecognitionFailed, "Speech recognition became unavailable")
        }
    }
}

// MARK: - STTProviderDelegate
extension VoiceManager: STTProviderDelegate {
    
    func sttProvider(_ provider: STTProvider, didRecognizeSpeech text: String) {
        print("🎙️ VoiceManager: STT Provider recognized speech: '\(text)'")
        
        // Store final result and process it
        finalResult = text
        finishListening()
    }
    
    func sttProvider(_ provider: STTProvider, didReceivePartialTranscript transcript: String) {
        print("🎙️ VoiceManager: STT Provider partial transcript: '\(transcript)'")
        
        // Track speech activity
        if !hasSpeechStarted && !transcript.isEmpty {
            hasSpeechStarted = true
            speechStartTime = Date()
            print("🗣️ VoiceManager: Speech started")
        }
        
        // Update partial result and emit event
        partialResult = transcript
        
        DispatchQueue.main.async { [weak self] in
            self?.onPartialResult?(transcript)
        }
    }
    
    func sttProvider(_ provider: STTProvider, didEncounterError error: Error) {
        print("❌ VoiceManager: STT Provider error: \(error)")
        
        // Handle error based on current retry count
        if currentRetryCount < maxRetries {
            scheduleRetry()
        } else {
            handleError(.speechRecognitionFailed, error.localizedDescription)
        }
    }
} 