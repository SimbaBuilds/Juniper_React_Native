# "Juniper" Wake Word Training and Implementation Plan

## Overview

This document outlines the plan for training a custom "Juniper" wake word using the Home Assistant Training Environment and integrating it into the Mobile Jarvis React Native application.

## Current Implementation Analysis

### Architecture Overview

The current wake word system consists of:

1. **React Native Layer**: JavaScript/TypeScript components for UI and state management
2. **Native Android Layer**: Kotlin implementation using OpenWakeWord engine
3. **ONNX Models**: Pre-trained models for mel spectrogram extraction, embedding generation, and wake word classification

### Key Components

- **OpenWakeWordEngine.kt**: Core ONNX model management and audio processing
- **WakeWordService.ts**: React Native bridge and service management
- **WakeWordContext.tsx**: React context for state management
- **Pre-built Models**: `hey_jarvis_v0.1.onnx`, `alexa_v0.1.onnx`, `hey_mycroft_v0.1.onnx`

### Processing Pipeline

1. Audio capture (16kHz, 1280 sample chunks)
2. Mel spectrogram extraction (`melspectrogram.onnx`)
3. Embedding generation (`embedding_model.onnx`)
4. Wake word classification (wake word specific ONNX models)
5. Confidence scoring and threshold checking

## Training Method: Home Assistant Training Environment

**Process:**
1. Access Home Assistant wake word training environment at: https://www.home-assistant.io/voice_control/create_wake_word/
2. Input "Juniper" in the `target_word` field
3. Generate and verify pronunciation using Piper TTS
4. Run training process (~1 hour)
5. Download generated `juniper_v0.1.onnx` file

**Technical Details:**
- Uses synthetic data generation with multiple speakers
- Employs data augmentation (noise, reverberation, speed changes)
- Trains on negative samples to reduce false positives
- Optimized for OpenWakeWord architecture

## Implementation Plan

### Step 1: Train the Model

1. **Access Training Environment**
   - Open https://www.home-assistant.io/voice_control/create_wake_word/
   - Enter "Juniper" in target_word field
   - Click play button to generate pronunciation
   - Verify pronunciation sounds correct for "JOO-ni-per"

2. **Execute Training**
   - Select `Runtime > Run all` from menu
   - Keep browser tab open for ~1 hour
   - Download the generated `.onnx` file when complete

### Step 2: Integrate Custom Model

1. **Add Model to Assets**
   ```
   android/app/src/main/assets/models/
   ├── juniper_v0.1.onnx (new)
   ├── melspectrogram.onnx
   ├── embedding_model.onnx
   ├── hey_jarvis_v0.1.onnx
   ├── alexa_v0.1.onnx
   └── hey_mycroft_v0.1.onnx
   ```

2. **Update Wake Phrase Mappings**
   
   **File: `android/app/src/main/java/com/hightowerai/MobileJarvisNative/wakeword/OpenWakeWordEngine.kt`**
   
   Update the `WAKE_PHRASE_MAPPINGS`:
   ```kotlin
   private val WAKE_PHRASE_MAPPINGS = mapOf(
       "Hey Jarvis" to "hey_jarvis",
       "Hey Juni" to "hey_jarvis",
       "Hey Juniper" to "juniper", // Add this line
       "Juniper" to "juniper",     // Add this line
       "Hey Jasmine" to "hey_jarvis",
       "Hey Jade" to "hey_jarvis",
       "Hey Jay" to "hey_jarvis",
       "Hey Jasper" to "hey_jarvis",
       "Jarvis" to "hey_jarvis",
       "Hey" to "hey_jarvis",
       
       "Alexa" to "alexa",
       "Alex" to "alexa",
       "Aloe" to "alexa",
       
       "Hey Mycroft" to "hey_mycroft",
       "Hey Michael" to "hey_mycroft",
   )
   ```

3. **Update Available Wake Phrases**
   
   **File: `src/wakeword/constants.ts`**
   ```typescript
   export const AVAILABLE_WAKE_PHRASES = [
       'Hey Juni',
       'Hey Juniper',  // Add this line
       'Juniper',      // Add this line
       'Hey',
       'Jarvis',
       'Hey Jarvis',
       'Jasmine',
       'Hey Jade',
       'Hey Jay',
       'Hey Jasper',
       'Alex',
       'Aloe',
       'Hey Michael',
   ];

   export const DEFAULT_WAKE_PHRASE = 'Juniper'; // Update default
   ```

### Step 3: Test Implementation

1. **Build and Deploy**
   - Add the trained `juniper_v0.1.onnx` file to `android/app/src/main/assets/models/`
   - Build the Android app
   - Install on test device

2. **Verify Wake Word Selection**
   - Open app settings
   - Navigate to wake word settings
   - Select "Juniper" from available options
   - Confirm selection is saved

3. **Test Wake Word Detection**
   - Enable wake word detection
   - Say "Juniper" followed by voice commands
   - Monitor logs for detection events
   - Verify confidence scores and response times

### Step 4: Model Validation

1. **Accuracy Testing**
   - Test detection rate with "Juniper" pronunciation
   - Test false positive rate with similar words ("Jupiter", "Jennifer")
   - Test in different noise environments

2. **Performance Monitoring**
   - Check audio processing latency
   - Monitor memory usage with new model
   - Verify battery impact is minimal

3. **Fine-tuning**
   - Adjust sensitivity settings if needed
   - Optimize threshold for best accuracy/false-positive balance

## Technical Implementation Details

### Model Loading Logic

The `OpenWakeWordEngine.kt` will automatically load the correct model based on the wake phrase mapping:

```kotlin
fun setWakePhrase(phrase: String): Boolean {
    val modelName = WAKE_PHRASE_MAPPINGS[phrase] ?: "hey_jarvis"
    if (modelName != currentModel) {
        loadWakeWordModel(modelName) // This will load juniper_v0.1.onnx
    }
    return true
}
```

### File Naming Convention

- Trained model should be named: `juniper_v0.1.onnx`
- Model will be loaded when "Juniper" or "Hey Juniper" is selected
- Follows existing naming pattern: `{wake_word}_v{version}.onnx`

### Configuration Storage

Wake word selection is stored in SharedPreferences:
- Key: `"selected_wake_word"`
- Value: `"Juniper"` (user-facing name)
- Maps to model: `"juniper"` (internal identifier)

## Success Criteria

- Model trains successfully in Home Assistant environment
- "Juniper" appears in wake word selection list
- Wake word detection works with >90% accuracy
- False positive rate <0.1% per hour
- No significant performance degradation

## Timeline

- **Step 1 (Training)**: 2-3 hours (including 1 hour training time)
- **Step 2 (Integration)**: 1-2 hours for code changes
- **Step 3 (Testing)**: 2-3 hours for build, deploy, and initial testing
- **Step 4 (Validation)**: 4-6 hours for comprehensive testing

**Total Estimated Time**: 1-2 days

## Next Steps

1. Train "Juniper" model using Home Assistant environment
2. Download and rename the ONNX file to `juniper_v0.1.onnx`
3. Update code with the mappings and constants shown above
4. Test and validate the implementation
5. Deploy to production once validation is complete