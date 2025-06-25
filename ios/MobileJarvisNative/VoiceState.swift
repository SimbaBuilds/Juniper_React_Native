import Foundation

@objc public enum VoiceState: Int, CaseIterable {
    case idle = 0
    case listening = 1
    case processing = 2
    case speaking = 3
    case error = 4
    
    var description: String {
        switch self {
        case .idle:
            return "idle"
        case .listening:
            return "listening"
        case .processing:
            return "processing"
        case .speaking:
            return "speaking"
        case .error:
            return "error"
        }
    }
    
    static func fromString(_ string: String) -> VoiceState {
        switch string.lowercased() {
        case "idle":
            return .idle
        case "listening":
            return .listening
        case "processing":
            return .processing
        case "speaking":
            return .speaking
        case "error":
            return .error
        default:
            return .idle
        }
    }
}

// MARK: - Voice Error Types
@objc public enum VoiceError: Int, CaseIterable {
    case speechRecognitionFailed = 0
    case audioPermissionDenied = 1
    case networkError = 2
    case apiError = 3
    case configurationError = 4
    case audioSessionError = 5
    case unknownError = 6
    
    var description: String {
        switch self {
        case .speechRecognitionFailed:
            return "Speech recognition failed"
        case .audioPermissionDenied:
            return "Audio permission denied"
        case .networkError:
            return "Network error"
        case .apiError:
            return "API error"
        case .configurationError:
            return "Configuration error"
        case .audioSessionError:
            return "Audio session error"
        case .unknownError:
            return "Unknown error"
        }
    }
}

// MARK: - Voice Input Mode
@objc public enum VoiceInputMode: Int, CaseIterable {
    case voice = 0
    case text = 1
    
    var description: String {
        switch self {
        case .voice:
            return "voice"
        case .text:
            return "text"
        }
    }
    
    static func fromString(_ string: String) -> VoiceInputMode {
        switch string.lowercased() {
        case "voice":
            return .voice
        case "text":
            return .text
        default:
            return .voice
        }
    }
} 