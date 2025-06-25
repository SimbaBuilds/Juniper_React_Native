import Foundation
import AVFoundation
import CallKit

// MARK: - Audio Route Types
enum AudioRoute {
    case speaker
    case headphones
    case bluetooth
    case receiver
    case airPlay
}

// MARK: - Audio Focus Types
enum AudioFocus {
    case none
    case recording
    case playback
    case playAndRecord
}

// MARK: - Audio Manager
class AudioManager: NSObject {
    
    // MARK: - Properties
    static let shared = AudioManager()
    
    private var audioSession: AVAudioSession
    private var currentFocus: AudioFocus = .none
    private var previousCategory: AVAudioSession.Category?
    private var previousMode: AVAudioSession.Mode?
    private var previousOptions: AVAudioSession.CategoryOptions?
    
    // Audio interruption handling
    private var isAudioInterrupted = false
    private var resumeAfterInterruption = false
    
    // Call monitoring
    private var callObserver: CXCallObserver?
    
    // Notification center
    private let notificationCenter = NotificationCenter.default
    
    // MARK: - Initialization
    private override init() {
        self.audioSession = AVAudioSession.sharedInstance()
        super.init()
        
        setupAudioSessionObservers()
        setupCallObserver()
    }
    
    deinit {
        removeAudioSessionObservers()
        callObserver = nil
    }
    
    // MARK: - Audio Session Configuration
    
    /**
     * Configure audio session for recording (speech recognition)
     */
    func configureAudioSessionForRecording() throws {
        print("🔊 AUDIO_MANAGER: Configuring audio session for recording...")
        
        // Store current settings
        storePreviousAudioSettings()
        
        try audioSession.setCategory(.record, mode: .measurement, options: [.allowBluetooth])
        try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
        
        currentFocus = .recording
        
        print("🔊 AUDIO_MANAGER: ✅ Audio session configured for recording")
    }
    
    /**
     * Configure audio session for playback (TTS)
     */
    func configureAudioSessionForPlayback() throws {
        print("🔊 AUDIO_MANAGER: Configuring audio session for playback...")
        
        // Store current settings
        storePreviousAudioSettings()
        
        try audioSession.setCategory(.playback, mode: .default, options: [.defaultToSpeaker, .allowBluetooth, .allowAirPlay])
        try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
        
        currentFocus = .playback
        
        print("🔊 AUDIO_MANAGER: ✅ Audio session configured for playback")
    }
    
    /**
     * Configure audio session for both recording and playback
     */
    func configureAudioSessionForPlayAndRecord() throws {
        print("🔊 AUDIO_MANAGER: Configuring audio session for play and record...")
        
        // Store current settings
        storePreviousAudioSettings()
        
        try audioSession.setCategory(.playAndRecord, mode: .default, options: [.defaultToSpeaker, .allowBluetooth, .allowAirPlay])
        try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
        
        currentFocus = .playAndRecord
        
        print("🔊 AUDIO_MANAGER: ✅ Audio session configured for play and record")
    }
    
    /**
     * Restore audio session to previous state
     */
    func restoreAudioSession() {
        print("🔊 AUDIO_MANAGER: Restoring audio session...")
        
        do {
            if let previousCategory = previousCategory,
               let previousMode = previousMode {
                
                let options = previousOptions ?? []
                try audioSession.setCategory(previousCategory, mode: previousMode, options: options)
                print("🔊 AUDIO_MANAGER: Audio session restored to: \(previousCategory), \(previousMode)")
            } else {
                // Default restoration
                try audioSession.setCategory(.ambient, mode: .default)
                print("🔊 AUDIO_MANAGER: Audio session restored to default")
            }
            
            currentFocus = .none
            
        } catch {
            print("🔊 AUDIO_MANAGER: ❌ Failed to restore audio session: \(error)")
        }
    }
    
    /**
     * Release audio focus
     */
    func releaseAudioFocus() {
        print("🔊 AUDIO_MANAGER: Releasing audio focus...")
        
        do {
            try audioSession.setActive(false, options: .notifyOthersOnDeactivation)
            currentFocus = .none
            print("🔊 AUDIO_MANAGER: ✅ Audio focus released")
        } catch {
            print("🔊 AUDIO_MANAGER: ❌ Failed to release audio focus: \(error)")
        }
    }
    
    // MARK: - Audio Routing
    
    /**
     * Set audio route
     */
    func setAudioRoute(_ route: AudioRoute) throws {
        print("🔊 AUDIO_MANAGER: Setting audio route to: \(route)")
        
        switch route {
        case .speaker:
            try audioSession.overrideOutputAudioPort(.speaker)
            
        case .receiver:
            try audioSession.overrideOutputAudioPort(.none)
            
        case .headphones, .bluetooth, .airPlay:
            // These routes are handled automatically by the system
            try audioSession.overrideOutputAudioPort(.none)
        }
        
        print("🔊 AUDIO_MANAGER: ✅ Audio route set to: \(route)")
    }
    
    /**
     * Get current audio route
     */
    func getCurrentAudioRoute() -> AudioRoute {
        let currentRoute = audioSession.currentRoute
        
        for output in currentRoute.outputs {
            switch output.portType {
            case .builtInSpeaker:
                return .speaker
            case .builtInReceiver:
                return .receiver
            case .headphones, .headsetMic:
                return .headphones
            case .bluetoothA2DP, .bluetoothHFP, .bluetoothLE:
                return .bluetooth
            case .airPlay:
                return .airPlay
            default:
                continue
            }
        }
        
        return .receiver // Default
    }
    
    /**
     * Check if specific audio route is available
     */
    func isAudioRouteAvailable(_ route: AudioRoute) -> Bool {
        let availableInputs = audioSession.availableInputs ?? []
        let currentRoute = audioSession.currentRoute
        
        switch route {
        case .speaker:
            return currentRoute.outputs.contains { $0.portType == .builtInSpeaker }
            
        case .receiver:
            return currentRoute.outputs.contains { $0.portType == .builtInReceiver }
            
        case .headphones:
            return currentRoute.outputs.contains { output in
                output.portType == .headphones || output.portType == .headsetMic
            }
            
        case .bluetooth:
            return availableInputs.contains { input in
                input.portType == .bluetoothHFP || input.portType == .bluetoothA2DP
            }
            
        case .airPlay:
            return currentRoute.outputs.contains { $0.portType == .airPlay }
        }
    }
    
    // MARK: - Audio Properties
    
    /**
     * Get current volume level
     */
    func getCurrentVolume() -> Float {
        return audioSession.outputVolume
    }
    
    /**
     * Check if audio is available
     */
    func isAudioAvailable() -> Bool {
        return !isAudioInterrupted && audioSession.isOtherAudioPlaying == false
    }
    
    /**
     * Check if other audio is playing
     */
    func isOtherAudioPlaying() -> Bool {
        return audioSession.isOtherAudioPlaying
    }
    
    /**
     * Get current audio focus
     */
    func getCurrentFocus() -> AudioFocus {
        return currentFocus
    }
    
    /**
     * Check if we have audio focus
     */
    func hasAudioFocus() -> Bool {
        return currentFocus != .none && !isAudioInterrupted
    }
    
    // MARK: - Private Helper Methods
    
    private func storePreviousAudioSettings() {
        previousCategory = audioSession.category
        previousMode = audioSession.mode
        previousOptions = audioSession.categoryOptions
        
        print("🔊 AUDIO_MANAGER: Stored previous audio settings - category: \(previousCategory?.rawValue ?? "nil"), mode: \(previousMode?.rawValue ?? "nil")")
    }
    
    // MARK: - Audio Session Observers
    
    private func setupAudioSessionObservers() {
        print("🔊 AUDIO_MANAGER: Setting up audio session observers...")
        
        // Audio interruption notifications
        notificationCenter.addObserver(
            self,
            selector: #selector(handleAudioInterruption(_:)),
            name: AVAudioSession.interruptionNotification,
            object: audioSession
        )
        
        // Audio route change notifications
        notificationCenter.addObserver(
            self,
            selector: #selector(handleAudioRouteChange(_:)),
            name: AVAudioSession.routeChangeNotification,
            object: audioSession
        )
        
        // Media services reset notifications
        notificationCenter.addObserver(
            self,
            selector: #selector(handleMediaServicesReset(_:)),
            name: AVAudioSession.mediaServicesWereResetNotification,
            object: audioSession
        )
        
        print("🔊 AUDIO_MANAGER: ✅ Audio session observers set up")
    }
    
    private func removeAudioSessionObservers() {
        print("🔊 AUDIO_MANAGER: Removing audio session observers...")
        notificationCenter.removeObserver(self)
    }
    
    @objc private func handleAudioInterruption(_ notification: Notification) {
        print("🔊 AUDIO_MANAGER: ========== AUDIO INTERRUPTION ==========")
        
        guard let userInfo = notification.userInfo,
              let typeValue = userInfo[AVAudioSessionInterruptionTypeKey] as? UInt,
              let type = AVAudioSession.InterruptionType(rawValue: typeValue) else {
            print("🔊 AUDIO_MANAGER: ❌ Failed to parse interruption notification")
            return
        }
        
        switch type {
        case .began:
            print("🔊 AUDIO_MANAGER: ⚠️ Audio interruption began")
            isAudioInterrupted = true
            
            // Determine if we should resume after interruption
            if currentFocus != .none {
                resumeAfterInterruption = true
            }
            
            // Post notification for voice components
            NotificationCenter.default.post(name: .audioInterruptionBegan, object: nil)
            
        case .ended:
            print("🔊 AUDIO_MANAGER: ✅ Audio interruption ended")
            isAudioInterrupted = false
            
            // Check if we should resume
            if let optionsValue = userInfo[AVAudioSessionInterruptionOptionKey] as? UInt {
                let options = AVAudioSession.InterruptionOptions(rawValue: optionsValue)
                
                if options.contains(.shouldResume) && resumeAfterInterruption {
                    print("🔊 AUDIO_MANAGER: 🔄 Resuming audio after interruption...")
                    
                    // Attempt to reactivate audio session
                    do {
                        try audioSession.setActive(true, options: .notifyOthersOnDeactivation)
                        print("🔊 AUDIO_MANAGER: ✅ Audio session reactivated")
                        
                        // Post notification for voice components
                        NotificationCenter.default.post(name: .audioInterruptionEnded, object: ["shouldResume": true])
                        
                    } catch {
                        print("🔊 AUDIO_MANAGER: ❌ Failed to reactivate audio session: \(error)")
                        NotificationCenter.default.post(name: .audioInterruptionEnded, object: ["shouldResume": false])
                    }
                } else {
                    print("🔊 AUDIO_MANAGER: Not resuming audio (should not resume or not previously active)")
                    NotificationCenter.default.post(name: .audioInterruptionEnded, object: ["shouldResume": false])
                }
            }
            
            resumeAfterInterruption = false
            
        @unknown default:
            print("🔊 AUDIO_MANAGER: ❓ Unknown interruption type: \(type.rawValue)")
        }
    }
    
    @objc private func handleAudioRouteChange(_ notification: Notification) {
        print("🔊 AUDIO_MANAGER: ========== AUDIO ROUTE CHANGE ==========")
        
        guard let userInfo = notification.userInfo,
              let reasonValue = userInfo[AVAudioSessionRouteChangeReasonKey] as? UInt,
              let reason = AVAudioSession.RouteChangeReason(rawValue: reasonValue) else {
            print("🔊 AUDIO_MANAGER: ❌ Failed to parse route change notification")
            return
        }
        
        let currentRoute = getCurrentAudioRoute()
        print("🔊 AUDIO_MANAGER: Route changed - reason: \(reason), current route: \(currentRoute)")
        
        switch reason {
        case .newDeviceAvailable:
            print("🔊 AUDIO_MANAGER: 🎧 New audio device available")
            
        case .oldDeviceUnavailable:
            print("🔊 AUDIO_MANAGER: 🎧 Audio device disconnected")
            
            // If headphones were disconnected, might want to pause/stop audio
            if let previousRoute = userInfo[AVAudioSessionRouteChangePreviousRouteKey] as? AVAudioSessionRouteDescription {
                let wasUsingHeadphones = previousRoute.outputs.contains { output in
                    output.portType == .headphones || output.portType == .headsetMic
                }
                
                if wasUsingHeadphones {
                    print("🔊 AUDIO_MANAGER: 🎧 Headphones disconnected - may need to pause audio")
                    NotificationCenter.default.post(name: .audioDeviceDisconnected, object: ["deviceType": "headphones"])
                }
            }
            
        case .categoryChange:
            print("🔊 AUDIO_MANAGER: 📱 Audio category changed")
            
        case .override:
            print("🔊 AUDIO_MANAGER: 🔄 Audio route override")
            
        case .wakeFromSleep:
            print("🔊 AUDIO_MANAGER: 😴 Wake from sleep")
            
        case .noSuitableRouteForCategory:
            print("🔊 AUDIO_MANAGER: ❌ No suitable route for category")
            
        case .routeConfigurationChange:
            print("🔊 AUDIO_MANAGER: ⚙️ Route configuration changed")
            
        @unknown default:
            print("🔊 AUDIO_MANAGER: ❓ Unknown route change reason: \(reason.rawValue)")
        }
        
        // Post general route change notification
        NotificationCenter.default.post(name: .audioRouteChanged, object: ["route": currentRoute, "reason": reason])
    }
    
    @objc private func handleMediaServicesReset(_ notification: Notification) {
        print("🔊 AUDIO_MANAGER: ========== MEDIA SERVICES RESET ==========")
        print("🔊 AUDIO_MANAGER: ⚠️ Media services were reset - may need to reconfigure audio")
        
        // Reset our state
        currentFocus = .none
        isAudioInterrupted = false
        resumeAfterInterruption = false
        
        // Post notification for voice components
        NotificationCenter.default.post(name: .audioServicesReset, object: nil)
    }
    
    // MARK: - Call Observer
    
    private func setupCallObserver() {
        callObserver = CXCallObserver()
        callObserver?.setDelegate(self, queue: nil)
        print("🔊 AUDIO_MANAGER: ✅ Call observer set up")
    }
}

// MARK: - CXCallObserverDelegate
extension AudioManager: CXCallObserverDelegate {
    
    func callObserver(_ callObserver: CXCallObserver, callChanged call: CXCall) {
        print("🔊 AUDIO_MANAGER: ========== CALL STATE CHANGED ==========")
        print("🔊 AUDIO_MANAGER: Call state: \(call.isOutgoing ? "outgoing" : "incoming"), connected: \(call.hasConnected), ended: \(call.hasEnded)")
        
        if call.hasConnected && !call.hasEnded {
            print("🔊 AUDIO_MANAGER: 📞 Call in progress - audio focus should be managed by call")
            isAudioInterrupted = true
            
            // Post notification that call started
            NotificationCenter.default.post(name: .phoneCallStarted, object: nil)
            
        } else if call.hasEnded {
            print("🔊 AUDIO_MANAGER: 📞 Call ended - audio focus may be available")
            isAudioInterrupted = false
            
            // Post notification that call ended
            NotificationCenter.default.post(name: .phoneCallEnded, object: nil)
        }
    }
}

// MARK: - Notification Names
extension Notification.Name {
    static let audioInterruptionBegan = Notification.Name("AudioInterruptionBegan")
    static let audioInterruptionEnded = Notification.Name("AudioInterruptionEnded")
    static let audioRouteChanged = Notification.Name("AudioRouteChanged")
    static let audioDeviceDisconnected = Notification.Name("AudioDeviceDisconnected")
    static let audioServicesReset = Notification.Name("AudioServicesReset")
    static let phoneCallStarted = Notification.Name("PhoneCallStarted")
    static let phoneCallEnded = Notification.Name("PhoneCallEnded")
} 