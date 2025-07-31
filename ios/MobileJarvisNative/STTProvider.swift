import Foundation

// MARK: - STT Provider Protocol
protocol STTProvider: AnyObject {
    var delegate: STTProviderDelegate? { get set }
    
    func startListening()
    func stopListening()
    func isListening() -> Bool
    func getProviderName() -> String
    func validateConfiguration() -> (isValid: Bool, issues: [String])
}

// MARK: - STT Provider Delegate
protocol STTProviderDelegate: AnyObject {
    func sttProvider(_ provider: STTProvider, didRecognizeSpeech text: String)
    func sttProvider(_ provider: STTProvider, didReceivePartialTranscript transcript: String)
    func sttProvider(_ provider: STTProvider, didEncounterError error: Error)
}