# Android Background Audio Issues - Wake Word Detection

## Problem Summary
Wake word detection works perfectly in foreground but fails completely in background mode, despite proper foreground service setup with microphone permissions.

## Key Findings

### 1. Audio Amplitude Differences
**Foreground (working):**
- Audio range: `-0.458679` to `0.413300` (wide dynamic range)
- Peak confidence: `0.264` when saying "Juniper" 

**Background (not working):**
- Audio range: `-0.017670` to `0.015381` (very narrow, ~27x quieter)
- Confidence stuck at: `0.001` (never increases)

### 2. Android System Restrictions
Even with proper setup, Android severely restricts background audio:
- Foreground service with `FOREGROUND_SERVICE_TYPE_MICROPHONE` ✅
- `RECORD_AUDIO` permission granted ✅
- Battery optimization disabled ✅
- **Still get heavily processed/reduced audio in background**

### 3. Audio Source Testing
| Audio Source | Result |
|--------------|--------|
| `MediaRecorder.AudioSource.MIC` | Works in foreground, severely restricted in background |
| `MediaRecorder.AudioSource.VOICE_RECOGNITION` | **Broke foreground detection completely** |
| `MediaRecorder.AudioSource.UNPROCESSED` | Not available on test device |

### 4. Audio Processing Pipeline Impact
- **Mel Spectrogram**: Different frequency characteristics in background
  - Foreground: `max=0.200067` (positive values present)
  - Background: `max=-0.19810741` (all negative, no positive peaks)
- **Embeddings**: Values differ significantly due to mel spectrogram differences
- **Classification**: Model never detects wake word due to altered audio features

### 5. Attempted Solutions (Failed)
1. **Audio amplification**: Applied 10x-30x gain but caused clipping distortion
2. **VOICE_RECOGNITION source**: Broke foreground detection entirely
3. **Battery optimization exemption**: No effect on audio quality
4. **Wake locks**: No effect on audio processing restrictions

## Root Cause Analysis
Android applies aggressive audio pre-processing in background mode that cannot be fully bypassed, even with:
- Proper foreground service setup
- All required permissions
- Battery optimization exemption
- Audio focus management

The audio processing occurs at the system level before it reaches our AudioRecord, making it impossible to obtain the same quality audio that the wake word model was trained on.

## Technical Details
- **Model**: OpenWakeWord "Juniper" trained on normal audio levels
- **Service**: Proper foreground service with microphone type
- **Permissions**: All required permissions granted
- **Device**: Android 14 (API 34)
- **Architecture**: ONNX Runtime ML pipeline (mel → embedding → classification)

## Potential Solutions (Untested)
1. **Retrain model**: Train wake word model on Android background-processed audio
2. **Always-on foreground**: Keep app in foreground for wake word detection
3. **Server-side processing**: Stream audio to server for processing (privacy concerns)
4. **Alternative wake word libraries**: Try commercial solutions (Picovoice Porcupine, etc.)

## Conclusion
This appears to be a fundamental Android limitation that cannot be solved through configuration or permissions alone. The system-level audio processing in background mode fundamentally alters the audio characteristics that the ML model depends on for accurate wake word detection.

**Status**: Blocked by Android system limitations
**Next Steps**: Consider alternative approaches or accept foreground-only wake word detection