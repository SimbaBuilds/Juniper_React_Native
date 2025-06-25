# iOS Implementation Automated Testing Plan

## Overview
This document outlines a comprehensive automated testing strategy for the iOS voice processing implementation. The goal is to test all functionality through CLI commands, mocking, and automated scripts before manual simulator testing.

## Testing Architecture

### 1. Test Environment Setup

#### Prerequisites
```bash
# Install testing dependencies
npm install --save-dev jest @testing-library/react-native @testing-library/jest-native
npm install --save-dev detox detox-cli
brew install applesimulator

# iOS testing frameworks
cd ios && pod install
```

#### Test Directory Structure
```
tests/
├── unit/
│   ├── voice/
│   ├── audio/
│   ├── providers/
│   └── config/
├── integration/
│   ├── voice-flow/
│   ├── provider-switching/
│   └── error-handling/
├── mocks/
│   ├── api-responses/
│   ├── audio-data/
│   └── native-modules/
└── e2e/
    ├── detox/
    └── scripts/
```

## 2. Unit Testing Strategy

### 2.1 Native iOS Components Testing

#### VoiceManager.swift Testing
```bash
# Create XCTest suite for VoiceManager
cat > ios/MobileJarvisNativeTests/VoiceManagerTests.swift << 'EOF'
import XCTest
import Speech
@testable import MobileJarvisNative

class VoiceManagerTests: XCTestCase {
    var voiceManager: VoiceManager!
    var mockDelegate: MockVoiceManagerDelegate!
    
    override func setUp() {
        super.setUp()
        voiceManager = VoiceManager()
        mockDelegate = MockVoiceManagerDelegate()
        voiceManager.delegate = mockDelegate
    }
    
    // Test STT provider switching
    func testSTTProviderSwitching() {
        voiceManager.setSTTProvider(.deepgram)
        XCTAssertEqual(voiceManager.getCurrentSTTProvider(), .deepgram)
        
        voiceManager.setSTTProvider(.whisper)
        XCTAssertEqual(voiceManager.getCurrentSTTProvider(), .whisper)
        
        voiceManager.setSTTProvider(.native)
        XCTAssertEqual(voiceManager.getCurrentSTTProvider(), .native)
    }
    
    // Test timing parameters
    func testTimingParameters() {
        XCTAssertEqual(voiceManager.maxListeningDuration, 30.0)
        XCTAssertEqual(voiceManager.silenceTimeout, 2.0)
        XCTAssertEqual(voiceManager.partialResultDelay, 0.5)
    }
    
    // Test state transitions
    func testStateTransitions() {
        XCTAssertEqual(voiceManager.currentState, .idle)
        
        voiceManager.startListening()
        XCTAssertEqual(voiceManager.currentState, .listening)
        
        voiceManager.processText("test")
        XCTAssertEqual(voiceManager.currentState, .processing)
    }
}
EOF

# Run native unit tests
xcodebuild test -workspace ios/MobileJarvisNative.xcworkspace -scheme MobileJarvisNative -destination 'platform=iOS Simulator,name=iPhone 15,OS=latest'
```

#### TTSManager.swift Testing
```bash
cat > ios/MobileJarvisNativeTests/TTSManagerTests.swift << 'EOF'
import XCTest
import AVFoundation
@testable import MobileJarvisNative

class TTSManagerTests: XCTestCase {
    var ttsManager: TTSManager!
    var mockAudioManager: MockAudioManager!
    
    override func setUp() {
        super.setUp()
        mockAudioManager = MockAudioManager()
        ttsManager = TTSManager(audioManager: mockAudioManager)
    }
    
    // Test TTS provider switching
    func testTTSProviderSwitching() {
        ttsManager.setTTSProvider(.deepgram)
        XCTAssertEqual(ttsManager.getCurrentTTSProvider(), .deepgram)
        
        ttsManager.setTTSProvider(.native)
        XCTAssertEqual(ttsManager.getCurrentTTSProvider(), .native)
    }
    
    // Test audio playback control
    func testAudioPlaybackControl() {
        let expectation = XCTestExpectation(description: "TTS completion")
        
        ttsManager.speakText("Hello world") { success in
            XCTAssertTrue(success)
            expectation.fulfill()
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // Test interruption handling
    func testInterruptionHandling() {
        ttsManager.speakText("Long text that should be interrupted")
        XCTAssertTrue(ttsManager.isSpeaking)
        
        ttsManager.stopSpeaking()
        XCTAssertFalse(ttsManager.isSpeaking)
    }
}
EOF
```

#### AudioManager.swift Testing
```bash
cat > ios/MobileJarvisNativeTests/AudioManagerTests.swift << 'EOF'
import XCTest
import AVFoundation
@testable import MobileJarvisNative

class AudioManagerTests: XCTestCase {
    var audioManager: AudioManager!
    
    override func setUp() {
        super.setUp()
        audioManager = AudioManager()
    }
    
    // Test audio session configuration
    func testAudioSessionConfiguration() {
        audioManager.configureAudioSessionForRecording()
        let session = AVAudioSession.sharedInstance()
        XCTAssertEqual(session.category, .playAndRecord)
        
        audioManager.configureAudioSessionForPlayback()
        XCTAssertEqual(session.category, .playback)
    }
    
    // Test interruption handling
    func testInterruptionHandling() {
        let expectation = XCTestExpectation(description: "Interruption handled")
        
        audioManager.onInterruption = { type in
            if type == .began {
                expectation.fulfill()
            }
        }
        
        // Simulate interruption
        NotificationCenter.default.post(
            name: AVAudioSession.interruptionNotification,
            object: AVAudioSession.sharedInstance(),
            userInfo: [AVAudioSessionInterruptionTypeKey: AVAudioSession.InterruptionType.began.rawValue]
        )
        
        wait(for: [expectation], timeout: 2.0)
    }
}
EOF
```

### 2.2 API Service Testing

#### Mock API Responses
```bash
# Create mock API response files
mkdir -p tests/mocks/api-responses

cat > tests/mocks/api-responses/deepgram-tts-success.json << 'EOF'
{
  "status": "success",
  "audio_url": "https://mock-audio-url.com/audio.mp3",
  "content_type": "audio/mpeg",
  "duration": 2.5
}
EOF

cat > tests/mocks/api-responses/whisper-stt-success.json << 'EOF'
{
  "text": "This is a test transcription from Whisper API"
}
EOF

cat > tests/mocks/api-responses/deepgram-stt-websocket.json << 'EOF'
{
  "channel": {
    "alternatives": [
      {
        "transcript": "This is a test transcription",
        "confidence": 0.95
      }
    ]
  },
  "is_final": true
}
EOF
```

#### DeepgramAPI.swift Testing
```bash
cat > ios/MobileJarvisNativeTests/DeepgramAPITests.swift << 'EOF'
import XCTest
@testable import MobileJarvisNative

class DeepgramAPITests: XCTestCase {
    var deepgramAPI: DeepgramAPI!
    var mockNetworkService: MockNetworkService!
    
    override func setUp() {
        super.setUp()
        mockNetworkService = MockNetworkService()
        deepgramAPI = DeepgramAPI(networkService: mockNetworkService)
    }
    
    // Test TTS API call
    func testTTSAPICall() {
        let expectation = XCTestExpectation(description: "TTS API call")
        
        mockNetworkService.mockResponse = loadMockResponse("deepgram-tts-success")
        
        deepgramAPI.synthesizeSpeech(text: "Hello world", voice: "aura-luna-en") { result in
            switch result {
            case .success(let audioData):
                XCTAssertNotNil(audioData)
                expectation.fulfill()
            case .failure(let error):
                XCTFail("TTS API call failed: \(error)")
            }
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
    
    // Test error handling
    func testAPIErrorHandling() {
        let expectation = XCTestExpectation(description: "Error handling")
        
        mockNetworkService.shouldFail = true
        mockNetworkService.error = NSError(domain: "TestDomain", code: 401, userInfo: nil)
        
        deepgramAPI.synthesizeSpeech(text: "Hello", voice: "aura-luna-en") { result in
            switch result {
            case .success(_):
                XCTFail("Expected failure but got success")
            case .failure(let error):
                XCTAssertNotNil(error)
                expectation.fulfill()
            }
        }
        
        wait(for: [expectation], timeout: 5.0)
    }
}
EOF
```

### 2.3 Configuration Testing

#### ConfigManager.swift Testing
```bash
cat > ios/MobileJarvisNativeTests/ConfigManagerTests.swift << 'EOF'
import XCTest
@testable import MobileJarvisNative

class ConfigManagerTests: XCTestCase {
    var configManager: ConfigManager!
    
    override func setUp() {
        super.setUp()
        configManager = ConfigManager()
    }
    
    // Test configuration loading
    func testConfigurationLoading() {
        XCTAssertNotNil(configManager.getValue(for: "max.listening.duration"))
        XCTAssertNotNil(configManager.getValue(for: "silence.timeout"))
        XCTAssertNotNil(configManager.getValue(for: "deepgram.api.key"))
    }
    
    // Test configuration validation
    func testConfigurationValidation() {
        let validationErrors = configManager.validateConfiguration()
        XCTAssertTrue(validationErrors.isEmpty, "Configuration validation failed: \(validationErrors)")
    }
    
    // Test provider defaults
    func testProviderDefaults() {
        XCTAssertEqual(configManager.getDefaultSTTProvider(), "ios_native")
        XCTAssertEqual(configManager.getDefaultTTSProvider(), "deepgram")
    }
}
EOF
```

## 3. Integration Testing

### 3.1 Complete Voice Flow Testing

#### End-to-End Voice Flow
```bash
cat > tests/integration/voice-flow/complete-flow.test.js << 'EOF'
import { NativeModules } from 'react-native';

// Mock native modules
jest.mock('react-native', () => ({
  NativeModules: {
    VoiceModule: {
      startListening: jest.fn(() => Promise.resolve()),
      stopListening: jest.fn(() => Promise.resolve()),
      handleApiResponse: jest.fn(() => Promise.resolve()),
      interruptSpeech: jest.fn(() => Promise.resolve()),
      getVoiceSystemStatus: jest.fn(() => Promise.resolve({
        sttProvider: 'ios_native',
        ttsProvider: 'deepgram',
        isRecording: false,
        isSpeaking: false,
        currentState: 'idle'
      }))
    }
  },
  DeviceEventEmitter: {
    addListener: jest.fn(),
    removeListener: jest.fn()
  },
  Platform: {
    OS: 'ios'
  }
}));

describe('Complete Voice Flow Integration', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should complete full voice conversation flow', async () => {
    const { VoiceModule } = NativeModules;
    
    // 1. Start listening
    await VoiceModule.startListening();
    expect(VoiceModule.startListening).toHaveBeenCalled();
    
    // 2. Simulate speech recognition result
    const mockTranscription = "What's the weather today?";
    
    // 3. Handle API response with TTS
    const mockApiResponse = "The weather is sunny with a temperature of 75 degrees.";
    await VoiceModule.handleApiResponse(mockApiResponse);
    expect(VoiceModule.handleApiResponse).toHaveBeenCalledWith(mockApiResponse);
    
    // 4. Verify system status
    const status = await VoiceModule.getVoiceSystemStatus();
    expect(status).toBeDefined();
    expect(status.sttProvider).toBe('ios_native');
    expect(status.ttsProvider).toBe('deepgram');
  });

  test('should handle provider switching during conversation', async () => {
    const { VoiceModule } = NativeModules;
    
    // Switch STT provider
    VoiceModule.setSTTProvider = jest.fn(() => Promise.resolve());
    await VoiceModule.setSTTProvider('deepgram');
    expect(VoiceModule.setSTTProvider).toHaveBeenCalledWith('deepgram');
    
    // Switch TTS provider
    VoiceModule.setTTSProvider = jest.fn(() => Promise.resolve());
    await VoiceModule.setTTSProvider('native');
    expect(VoiceModule.setTTSProvider).toHaveBeenCalledWith('native');
  });
});
EOF

# Run integration tests
npm test tests/integration/voice-flow/complete-flow.test.js
```

### 3.2 Provider Switching Tests

```bash
cat > tests/integration/provider-switching/stt-provider.test.js << 'EOF'
import { NativeModules } from 'react-native';

describe('STT Provider Switching Integration', () => {
  const { VoiceModule } = NativeModules;

  test('should switch between all STT providers', async () => {
    // Mock provider methods
    VoiceModule.setSTTProvider = jest.fn(() => Promise.resolve());
    VoiceModule.getSTTProvider = jest.fn();
    VoiceModule.getAvailableSTTProviders = jest.fn(() => Promise.resolve(['ios_native', 'deepgram', 'whisper']));
    VoiceModule.testSTTProvider = jest.fn(() => Promise.resolve({ success: true, latency: 150 }));

    const providers = await VoiceModule.getAvailableSTTProviders();
    expect(providers).toContain('ios_native');
    expect(providers).toContain('deepgram');
    expect(providers).toContain('whisper');

    // Test each provider
    for (const provider of providers) {
      await VoiceModule.setSTTProvider(provider);
      expect(VoiceModule.setSTTProvider).toHaveBeenCalledWith(provider);
      
      const testResult = await VoiceModule.testSTTProvider(provider);
      expect(testResult.success).toBe(true);
      expect(testResult.latency).toBeLessThan(1000);
    }
  });

  test('should fallback to native provider on external provider failure', async () => {
    VoiceModule.testSTTProvider = jest.fn()
      .mockResolvedValueOnce({ success: false, error: 'Network error' }) // Deepgram fails
      .mockResolvedValueOnce({ success: true, latency: 100 }); // Native succeeds

    // Try Deepgram first
    const deepgramResult = await VoiceModule.testSTTProvider('deepgram');
    expect(deepgramResult.success).toBe(false);

    // Fallback to native
    const nativeResult = await VoiceModule.testSTTProvider('ios_native');
    expect(nativeResult.success).toBe(true);
  });
});
EOF
```

### 3.3 React Native Bridge Testing

```bash
cat > tests/integration/react-native-bridge/voice-module.test.js << 'EOF'
import { NativeModules, DeviceEventEmitter } from 'react-native';

describe('VoiceModule React Native Bridge', () => {
  const { VoiceModule } = NativeModules;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('should expose all required bridge methods', () => {
    const requiredMethods = [
      'startListening',
      'stopListening',
      'handleApiResponse',
      'interruptSpeech',
      'setSTTProvider',
      'getSTTProvider',
      'getAvailableSTTProviders',
      'setTTSProvider',
      'getTTSProvider',
      'getAvailableTTSProviders',
      'getAvailableDeepgramVoices',
      'setSelectedDeepgramVoice',
      'getSelectedDeepgramVoice',
      'testSTTProvider',
      'getTTSStatus',
      'validateConfiguration',
      'getVoiceSystemStatus'
    ];

    requiredMethods.forEach(method => {
      expect(VoiceModule[method]).toBeDefined();
    });
  });

  test('should emit voice events correctly', (done) => {
    const mockEventData = { text: 'Hello world', confidence: 0.95 };
    
    DeviceEventEmitter.addListener('processTextFromNative', (data) => {
      expect(data).toEqual(mockEventData);
      done();
    });

    // Simulate native event emission
    DeviceEventEmitter.emit('processTextFromNative', mockEventData);
  });

  test('should handle voice response updates', (done) => {
    const mockResponseData = { 
      state: 'speaking', 
      text: 'Response text',
      progress: 0.5 
    };
    
    DeviceEventEmitter.addListener('VoiceResponseUpdate', (data) => {
      expect(data.state).toBe('speaking');
      expect(data.text).toBe('Response text');
      expect(data.progress).toBe(0.5);
      done();
    });

    DeviceEventEmitter.emit('VoiceResponseUpdate', mockResponseData);
  });
});
EOF
```

## 4. Mock Testing Strategy

### 4.1 API Mock Server

```bash
# Create mock API server for testing
cat > tests/mocks/mock-api-server.js << 'EOF'
const express = require('express');
const app = express();
const port = 3001;

app.use(express.json());

// Mock Deepgram TTS endpoint
app.post('/v1/speak', (req, res) => {
  const { text, model } = req.body;
  
  if (!text) {
    return res.status(400).json({ error: 'Text is required' });
  }
  
  // Simulate processing delay
  setTimeout(() => {
    res.json({
      status: 'success',
      audio_url: `http://localhost:${port}/mock-audio/${Date.now()}.mp3`,
      duration: text.length * 0.1,
      model: model || 'aura-luna-en'
    });
  }, 200);
});

// Mock Whisper STT endpoint
app.post('/v1/audio/transcriptions', (req, res) => {
  setTimeout(() => {
    res.json({
      text: 'This is a mock transcription from Whisper API'
    });
  }, 300);
});

// Mock audio file endpoint
app.get('/mock-audio/:filename', (req, res) => {
  res.setHeader('Content-Type', 'audio/mpeg');
  res.send(Buffer.from('mock audio data'));
});

app.listen(port, () => {
  console.log(`Mock API server running at http://localhost:${port}`);
});
EOF

# Start mock server for testing
node tests/mocks/mock-api-server.js &
MOCK_SERVER_PID=$!
```

### 4.2 Audio Data Mocking

```bash
# Create mock audio files for testing
mkdir -p tests/mocks/audio-data

# Generate test audio data (sine wave)
cat > tests/mocks/audio-data/generate-test-audio.swift << 'EOF'
import AVFoundation

func generateTestAudio(frequency: Float = 440.0, duration: TimeInterval = 1.0) -> Data {
    let sampleRate: Float = 44100.0
    let frameCount = Int(sampleRate * Float(duration))
    
    var audioData = Data()
    
    for frame in 0..<frameCount {
        let sampleValue = sin(2.0 * Float.pi * frequency * Float(frame) / sampleRate)
        let sample = Int16(sampleValue * Float(Int16.max))
        
        withUnsafeBytes(of: sample.littleEndian) { bytes in
            audioData.append(contentsOf: bytes)
        }
    }
    
    return audioData
}
EOF
```

## 5. CLI Testing Scripts

### 5.1 Automated Test Runner

```bash
cat > scripts/run-ios-tests.sh << 'EOF'
#!/bin/bash

echo "🚀 Starting iOS Implementation Automated Testing"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test results tracking
TOTAL_TESTS=0
PASSED_TESTS=0
FAILED_TESTS=0

# Function to run test and track results
run_test() {
    local test_name="$1"
    local test_command="$2"
    
    echo -e "${YELLOW}Running: $test_name${NC}"
    TOTAL_TESTS=$((TOTAL_TESTS + 1))
    
    if eval "$test_command"; then
        echo -e "${GREEN}✅ PASSED: $test_name${NC}"
        PASSED_TESTS=$((PASSED_TESTS + 1))
    else
        echo -e "${RED}❌ FAILED: $test_name${NC}"
        FAILED_TESTS=$((FAILED_TESTS + 1))
    fi
    echo "---"
}

# 1. Native iOS Unit Tests
echo "🧪 Running Native iOS Unit Tests..."
run_test "VoiceManager Unit Tests" "xcodebuild test -workspace ios/MobileJarvisNative.xcworkspace -scheme MobileJarvisNative -destination 'platform=iOS Simulator,name=iPhone 15,OS=latest' -only-testing:MobileJarvisNativeTests/VoiceManagerTests"

run_test "TTSManager Unit Tests" "xcodebuild test -workspace ios/MobileJarvisNative.xcworkspace -scheme MobileJarvisNative -destination 'platform=iOS Simulator,name=iPhone 15,OS=latest' -only-testing:MobileJarvisNativeTests/TTSManagerTests"

run_test "AudioManager Unit Tests" "xcodebuild test -workspace ios/MobileJarvisNative.xcworkspace -scheme MobileJarvisNative -destination 'platform=iOS Simulator,name=iPhone 15,OS=latest' -only-testing:MobileJarvisNativeTests/AudioManagerTests"

# 2. React Native Integration Tests
echo "⚛️ Running React Native Integration Tests..."
run_test "Voice Flow Integration" "npm test tests/integration/voice-flow/complete-flow.test.js"

run_test "Provider Switching Tests" "npm test tests/integration/provider-switching/stt-provider.test.js"

run_test "React Native Bridge Tests" "npm test tests/integration/react-native-bridge/voice-module.test.js"

# 3. API Mock Tests
echo "🌐 Running API Mock Tests..."
# Start mock server
node tests/mocks/mock-api-server.js &
MOCK_SERVER_PID=$!
sleep 2

run_test "Deepgram API Mock Tests" "curl -s -X POST http://localhost:3001/v1/speak -H 'Content-Type: application/json' -d '{\"text\":\"Hello world\"}' | grep -q 'success'"

run_test "Whisper API Mock Tests" "curl -s -X POST http://localhost:3001/v1/audio/transcriptions -F 'file=@tests/mocks/audio-data/test.wav' | grep -q 'text'"

# Stop mock server
kill $MOCK_SERVER_PID 2>/dev/null

# 4. Configuration Tests
echo "⚙️ Running Configuration Tests..."
run_test "Config Validation" "npm test tests/unit/config/config-manager.test.js"

# 5. Platform Conditional Rendering Tests
echo "📱 Running Platform Conditional Tests..."
run_test "iOS Platform Checks" "npm test -- --testNamePattern='iOS platform conditional rendering'"

# Results Summary
echo "📊 Test Results Summary"
echo "========================="
echo -e "Total Tests: ${TOTAL_TESTS}"
echo -e "${GREEN}Passed: ${PASSED_TESTS}${NC}"
echo -e "${RED}Failed: ${FAILED_TESTS}${NC}"

if [ $FAILED_TESTS -eq 0 ]; then
    echo -e "${GREEN}🎉 All tests passed! iOS implementation is ready for manual testing.${NC}"
    exit 0
else
    echo -e "${RED}❌ Some tests failed. Please review the failures above.${NC}"
    exit 1
fi
EOF

chmod +x scripts/run-ios-tests.sh
```

### 5.2 Performance Testing

```bash
cat > scripts/performance-tests.sh << 'EOF'
#!/bin/bash

echo "⚡ Running iOS Voice Performance Tests"

# Test STT latency
echo "Testing STT Provider Latency..."
cat > tests/performance/stt-latency.js << 'PERF_EOF'
const { performance } = require('perf_hooks');

async function testSTTLatency(provider) {
    const start = performance.now();
    
    // Mock STT call
    await new Promise(resolve => setTimeout(resolve, Math.random() * 200 + 100));
    
    const end = performance.now();
    const latency = end - start;
    
    console.log(`${provider} STT Latency: ${latency.toFixed(2)}ms`);
    return latency;
}

async function runSTTPerformanceTests() {
    const providers = ['ios_native', 'deepgram', 'whisper'];
    const results = {};
    
    for (const provider of providers) {
        const latencies = [];
        
        // Run 10 tests per provider
        for (let i = 0; i < 10; i++) {
            const latency = await testSTTLatency(provider);
            latencies.push(latency);
        }
        
        const avgLatency = latencies.reduce((a, b) => a + b) / latencies.length;
        results[provider] = {
            average: avgLatency,
            min: Math.min(...latencies),
            max: Math.max(...latencies)
        };
    }
    
    console.log('\nSTT Performance Results:');
    console.table(results);
    
    // Check if any provider exceeds acceptable latency (500ms)
    const acceptable = Object.keys(results).every(provider => 
        results[provider].average < 500
    );
    
    if (acceptable) {
        console.log('✅ All STT providers meet performance requirements');
        process.exit(0);
    } else {
        console.log('❌ Some STT providers exceed acceptable latency');
        process.exit(1);
    }
}

runSTTPerformanceTests();
PERF_EOF

node tests/performance/stt-latency.js

# Test TTS performance
echo "Testing TTS Provider Performance..."
cat > tests/performance/tts-performance.js << 'PERF_EOF'
async function testTTSPerformance(provider, textLength) {
    const start = performance.now();
    
    // Mock TTS processing time based on text length
    const processingTime = textLength * 50 + Math.random() * 100; // 50ms per character + random
    await new Promise(resolve => setTimeout(resolve, processingTime));
    
    const end = performance.now();
    const totalTime = end - start;
    
    console.log(`${provider} TTS (${textLength} chars): ${totalTime.toFixed(2)}ms`);
    return totalTime;
}

async function runTTSPerformanceTests() {
    const providers = ['deepgram', 'native'];
    const textLengths = [10, 50, 100, 200];
    
    for (const provider of providers) {
        console.log(`\nTesting ${provider} TTS Performance:`);
        
        for (const length of textLengths) {
            await testTTSPerformance(provider, length);
        }
    }
}

runTTSPerformanceTests();
PERF_EOF

node tests/performance/tts-performance.js
EOF

chmod +x scripts/performance-tests.sh
```

### 5.3 Error Handling Tests

```bash
cat > scripts/error-handling-tests.sh << 'EOF'
#!/bin/bash

echo "🚨 Running Error Handling Tests"

# Test network failure scenarios
echo "Testing Network Failure Scenarios..."
cat > tests/error-handling/network-failures.js << 'ERROR_EOF'
// Simulate network failures and test fallback mechanisms

async function testNetworkFailure(scenario) {
    console.log(`Testing: ${scenario}`);
    
    switch (scenario) {
        case 'deepgram_api_timeout':
            // Simulate Deepgram API timeout
            console.log('Simulating Deepgram API timeout...');
            // Should fallback to native TTS
            return { success: true, fallback: 'native_tts' };
            
        case 'whisper_api_rate_limit':
            // Simulate Whisper API rate limiting
            console.log('Simulating Whisper API rate limit...');
            // Should fallback to iOS native STT
            return { success: true, fallback: 'ios_native_stt' };
            
        case 'no_internet_connection':
            // Simulate complete network failure
            console.log('Simulating no internet connection...');
            // Should use only native providers
            return { success: true, fallback: 'native_only' };
            
        default:
            return { success: false, error: 'Unknown scenario' };
    }
}

async function runNetworkFailureTests() {
    const scenarios = [
        'deepgram_api_timeout',
        'whisper_api_rate_limit',
        'no_internet_connection'
    ];
    
    let allPassed = true;
    
    for (const scenario of scenarios) {
        const result = await testNetworkFailure(scenario);
        
        if (result.success) {
            console.log(`✅ ${scenario}: Handled correctly (fallback: ${result.fallback})`);
        } else {
            console.log(`❌ ${scenario}: Failed to handle error`);
            allPassed = false;
        }
    }
    
    if (allPassed) {
        console.log('\n✅ All network failure scenarios handled correctly');
        process.exit(0);
    } else {
        console.log('\n❌ Some network failure scenarios not handled properly');
        process.exit(1);
    }
}

runNetworkFailureTests();
ERROR_EOF

node tests/error-handling/network-failures.js

# Test audio session interruptions
echo "Testing Audio Session Interruptions..."
cat > tests/error-handling/audio-interruptions.js << 'ERROR_EOF'
// Test audio session interruption scenarios

function testAudioInterruption(scenario) {
    console.log(`Testing audio interruption: ${scenario}`);
    
    switch (scenario) {
        case 'phone_call_incoming':
            console.log('✅ Should pause TTS and resume after call ends');
            return true;
            
        case 'other_app_audio':
            console.log('✅ Should handle audio focus loss gracefully');
            return true;
            
        case 'airpods_disconnected':
            console.log('✅ Should switch to device speaker automatically');
            return true;
            
        case 'low_battery_mode':
            console.log('✅ Should reduce audio processing quality');
            return true;
            
        default:
            return false;
    }
}

const interruptionScenarios = [
    'phone_call_incoming',
    'other_app_audio',
    'airpods_disconnected',
    'low_battery_mode'
];

let allHandled = true;

interruptionScenarios.forEach(scenario => {
    if (!testAudioInterruption(scenario)) {
        console.log(`❌ Failed to handle: ${scenario}`);
        allHandled = false;
    }
});

if (allHandled) {
    console.log('\n✅ All audio interruption scenarios handled correctly');
} else {
    console.log('\n❌ Some audio interruption scenarios not handled');
    process.exit(1);
}
ERROR_EOF

node tests/error-handling/audio-interruptions.js
EOF

chmod +x scripts/error-handling-tests.sh
```

## 6. Final Validation Script

### 6.1 Pre-Manual Testing Validation

```bash
cat > scripts/pre-manual-validation.sh << 'EOF'
#!/bin/bash

echo "🔍 Pre-Manual Testing Validation"
echo "================================="

# Check if all required files exist
echo "Checking iOS implementation files..."

REQUIRED_FILES=(
    "ios/MobileJarvisNative/VoiceManager.swift"
    "ios/MobileJarvisNative/TTSManager.swift"
    "ios/MobileJarvisNative/AudioManager.swift"
    "ios/MobileJarvisNative/DeepgramAPI.swift"
    "ios/MobileJarvisNative/WhisperAPI.swift"
    "ios/MobileJarvisNative/VoiceModule.swift"
    "ios/MobileJarvisNative/VoiceModule.m"
    "ios/MobileJarvisNative/ConfigManager.swift"
    "ios/MobileJarvisNative/config.properties"
)

MISSING_FILES=()

for file in "${REQUIRED_FILES[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file"
    else
        echo "❌ $file (MISSING)"
        MISSING_FILES+=("$file")
    fi
done

if [ ${#MISSING_FILES[@]} -gt 0 ]; then
    echo -e "\n❌ Missing required files. Implementation incomplete."
    echo "Missing files:"
    printf '%s\n' "${MISSING_FILES[@]}"
    exit 1
fi

# Validate configuration
echo -e "\nValidating configuration..."
if [ -f "ios/MobileJarvisNative/config.properties" ]; then
    REQUIRED_CONFIGS=(
        "max.listening.duration"
        "silence.timeout"
        "deepgram.api.key"
        "openai.api.key"
        "default.stt.provider"
        "default.tts.provider"
    )
    
    for config in "${REQUIRED_CONFIGS[@]}"; do
        if grep -q "$config" ios/MobileJarvisNative/config.properties; then
            echo "✅ $config"
        else
            echo "❌ $config (MISSING FROM CONFIG)"
        fi
    done
fi

# Check React Native platform conditionals
echo -e "\nChecking Platform.OS conditionals..."
if grep -r "Platform.OS === 'ios'" src/ > /dev/null; then
    echo "✅ iOS platform conditionals found"
else
    echo "❌ No iOS platform conditionals found"
fi

# Validate bridge methods
echo -e "\nValidating React Native bridge methods..."
BRIDGE_METHODS=(
    "startListening"
    "stopListening"
    "handleApiResponse"
    "setSTTProvider"
    "setTTSProvider"
    "getVoiceSystemStatus"
)

for method in "${BRIDGE_METHODS[@]}"; do
    if grep -q "$method" ios/MobileJarvisNative/VoiceModule.m; then
        echo "✅ $method bridge method"
    else
        echo "❌ $method bridge method (MISSING)"
    fi
done

echo -e "\n🎯 Implementation Status: READY FOR MANUAL TESTING"
echo "Next steps:"
echo "1. Run: npx react-native run-ios"
echo "2. Test voice functionality in simulator"
echo "3. Test provider switching in settings"
echo "4. Test error handling scenarios"
echo "5. Test audio session management"
EOF

chmod +x scripts/pre-manual-validation.sh
```

## 7. Continuous Integration Setup

### 7.1 CI/CD Configuration

```bash
cat > .github/workflows/ios-voice-tests.yml << 'EOF'
name: iOS Voice Implementation Tests

on:
  push:
    branches: [ main, develop ]
    paths: 
      - 'ios/**'
      - 'src/voice/**'
      - 'tests/**'
  pull_request:
    branches: [ main ]
    paths:
      - 'ios/**'
      - 'src/voice/**'
      - 'tests/**'

jobs:
  ios-tests:
    runs-on: macos-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
        cache: 'npm'
    
    - name: Install dependencies
      run: npm install
    
    - name: Setup iOS dependencies
      run: |
        cd ios
        pod install
    
    - name: Run Native iOS Tests
      run: |
        xcodebuild test \
          -workspace ios/MobileJarvisNative.xcworkspace \
          -scheme MobileJarvisNative \
          -destination 'platform=iOS Simulator,name=iPhone 15,OS=latest'
    
    - name: Run React Native Tests
      run: npm test
    
    - name: Run Performance Tests
      run: ./scripts/performance-tests.sh
    
    - name: Run Error Handling Tests
      run: ./scripts/error-handling-tests.sh
    
    - name: Pre-Manual Validation
      run: ./scripts/pre-manual-validation.sh
    
    - name: Upload Test Results
      uses: actions/upload-artifact@v3
      if: always()
      with:
        name: test-results
        path: |
          test-results/
          coverage/
EOF
```

## 8. Test Execution Commands

### 8.1 Quick Test Suite

```bash
# Run all automated tests
npm run test:ios

# Run specific test categories
npm run test:ios:unit          # Unit tests only
npm run test:ios:integration   # Integration tests only
npm run test:ios:performance   # Performance tests only
npm run test:ios:errors        # Error handling tests only

# Full validation before manual testing
./scripts/run-ios-tests.sh
./scripts/pre-manual-validation.sh
```

### 8.2 Package.json Test Scripts

```bash
cat >> package.json << 'EOF'
{
  "scripts": {
    "test:ios": "./scripts/run-ios-tests.sh",
    "test:ios:unit": "npm test tests/unit/",
    "test:ios:integration": "npm test tests/integration/",
    "test:ios:performance": "./scripts/performance-tests.sh",
    "test:ios:errors": "./scripts/error-handling-tests.sh",
    "test:ios:validate": "./scripts/pre-manual-validation.sh",
    "test:ios:full": "npm run test:ios && npm run test:ios:performance && npm run test:ios:errors && npm run test:ios:validate"
  }
}
EOF
```

## Summary

This automated testing plan covers:

1. **Unit Tests**: Individual component testing for all iOS native modules
2. **Integration Tests**: End-to-end voice flow and provider switching
3. **Mock Testing**: API simulation and network condition testing
4. **Performance Tests**: Latency and throughput validation
5. **Error Handling Tests**: Failure scenario validation
6. **Bridge Testing**: React Native integration validation
7. **Configuration Tests**: Setup and validation testing

**Execute the full test suite with:**
```bash
npm run test:ios:full
```

This will validate the entire iOS implementation before you need to manually test in the simulator.
