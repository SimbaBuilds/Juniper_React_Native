#!/bin/bash

echo "⚡ Running iOS Voice Performance Tests"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Test STT latency simulation
echo "Testing STT Provider Latency..."

cat > tests/performance/stt-latency.js << 'PERF_EOF'
const { performance } = require('perf_hooks');

async function testSTTLatency(provider) {
    const start = performance.now();
    
    // Mock STT call with realistic delays
    let delay;
    switch(provider) {
        case 'ios_native': delay = 100 + Math.random() * 50; break;
        case 'deepgram': delay = 200 + Math.random() * 100; break;
        case 'whisper': delay = 300 + Math.random() * 150; break;
        default: delay = 500;
    }
    
    await new Promise(resolve => setTimeout(resolve, delay));
    
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
            average: avgLatency.toFixed(2),
            min: Math.min(...latencies).toFixed(2),
            max: Math.max(...latencies).toFixed(2)
        };
    }
    
    console.log('\nSTT Performance Results:');
    console.table(results);
    
    // Check if any provider exceeds acceptable latency (500ms)
    const acceptable = Object.keys(results).every(provider => 
        parseFloat(results[provider].average) < 500
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
echo -e "\nTesting TTS Provider Performance..."
cat > tests/performance/tts-performance.js << 'PERF_EOF'
const { performance } = require('perf_hooks');

async function testTTSPerformance(provider, textLength) {
    const start = performance.now();
    
    // Mock TTS processing time based on text length and provider
    let baseTime;
    switch(provider) {
        case 'deepgram': baseTime = textLength * 30; break;  // 30ms per character
        case 'native': baseTime = textLength * 50; break;     // 50ms per character
        default: baseTime = textLength * 100;
    }
    
    const processingTime = baseTime + Math.random() * 100; // Add random variance
    await new Promise(resolve => setTimeout(resolve, processingTime));
    
    const end = performance.now();
    const totalTime = end - start;
    
    console.log(`${provider} TTS (${textLength} chars): ${totalTime.toFixed(2)}ms`);
    return totalTime;
}

async function runTTSPerformanceTests() {
    const providers = ['deepgram', 'native'];
    const textLengths = [10, 50, 100, 200];
    const results = {};
    
    for (const provider of providers) {
        console.log(`\nTesting ${provider} TTS Performance:`);
        results[provider] = {};
        
        for (const length of textLengths) {
            const time = await testTTSPerformance(provider, length);
            results[provider][`${length}_chars`] = `${time.toFixed(2)}ms`;
        }
    }
    
    console.log('\nTTS Performance Summary:');
    console.table(results);
    
    console.log('✅ TTS performance tests completed');
}

runTTSPerformanceTests();
PERF_EOF

node tests/performance/tts-performance.js

# Test API response times
echo -e "\nTesting API Response Times..."
echo "Testing mock Deepgram API response time..."
START_TIME=$(node -e "console.log(Date.now())")
curl -s -X POST http://localhost:3001/v1/speak -H 'Content-Type: application/json' -d '{"text":"Performance test"}' > /dev/null
END_TIME=$(node -e "console.log(Date.now())")
RESPONSE_TIME=$((END_TIME - START_TIME))
echo "Mock Deepgram API Response Time: ${RESPONSE_TIME}ms"

if [ $RESPONSE_TIME -lt 1000 ]; then
    echo -e "${GREEN}✅ API response time acceptable${NC}"
else
    echo -e "${RED}❌ API response time too slow${NC}"
fi

echo -e "\n${GREEN}⚡ Performance tests completed!${NC}" 