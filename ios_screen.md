I want you to thoroughly screen the untested iOS implementation for logic errors against the working Android implementation.

Specs:
1. The main difference between the iOS and android implementation is wake word functionality; the iOS version will not have but Android will
    1.1 Wake word related content in the UI should be conditionally rendered for android only
    1.2 The voice chat button in the iOS version should have the exact same conversational functionality as wake word does in android meaning it (1) can begin a new conversation in voice mode (2) can continue a conversation in voice mode (whether it was previosuly in text mode or voice mode) 

2. Main conversational fucntionality: iOS implementation should mimick android in:
    2.1 State management and interaction with React Native layer 
    2.2 TTS logic 
    2.3 STT logic
    2.4 All other logic except the lack of wake word functionality


Please do a full screen and come back with any potential issues.

Screen 1 needed fixes:

│ │ 1. Missing Voice Button Conversation Flow (iOS)                                                  │ │
│ │   - iOS VoiceButton.tsx only handles startListening/stopListening                                │ │
│ │   - Android VoiceButton triggers full conversation flow through wake word                        │ │
│ │   - iOS needs to implement continuous conversation mode when voice button is pressed             │ │
│ │ 2. Incomplete STT Implementation (iOS)                                                           │ │
│ │   - DeepgramSTT and WhisperSTT are stubbed out (VoiceManager.swift:303, 315)                     │ │
│ │   - Falls back to native STT for all providers                                                   │ │
│ │   - Missing proper WebSocket implementation for Deepgram streaming                               │ │
│ │ 3. Missing Conversation State Management (iOS)                                                   │ │
│ │   - iOS doesn't properly handle continuous conversation after initial recognition                │ │
│ │   - Android maintains LISTENING state after TTS completes for continuous chat                    │ │
│ │   - iOS returns to IDLE instead of LISTENING after speaking                                      │ │
│ │ 4. Audio Session Management Issues (iOS)                                                         │ │
│ │   - Missing proper audio focus handoff between STT and TTS                                       │ │
│ │   - No equivalent to Android's centralized AudioManager coordination                             │ │
│ │   - Could cause audio interruptions or failures                                                  │ │
│ │ 5. Missing Interrupt Handling in UI (iOS)                                                        │ │
│ │   - VoiceAssistant.tsx doesn't check Platform.OS for voice button behavior                       │ │
│ │   - Should trigger continuous conversation on iOS when voice button pressed                      │ │
│ │   - Missing state transitions for seamless chat experience                                       │ │
│ │                                                                                                  │ │
│ │ 🔧 FIXES NEEDED:                                                                                 │ │
│ │                                                                                                  │ │
│ │ 1. VoiceButton Enhancement (iOS) - Add continuous conversation trigger                           │ │
│ │ 2. VoiceManager State Flow - Keep LISTENING state after TTS completes                            │ │
│ │ 3. Audio Session Coordination - Implement proper handoff between recording/playback              │ │
│ │ 4. Complete STT Providers - Implement Deepgram/Whisper WebSocket streaming                       │ │
│ │ 5. UI Platform Detection - Add iOS-specific voice button behavior in VoiceAssistant 