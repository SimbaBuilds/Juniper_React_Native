## Primary Recommendations

### 1. **Consolidate State Management to Single Source of Truth**
**Problem**: Three separate state management layers creating conflicts
**Solution**: Make native `VoiceManager` the single source of truth

- [x] Remove state management from `VoiceContext.tsx` - only listen to native state
- [x] Simplify `useVoiceState.ts` to be a pure bridge to native state
- [x] Remove duplicate state variables in React Native layer
- [x] Use native `StateFlow` as the authoritative state source

### 2. **Implement Centralized Audio Manager**
**Problem**: Multiple audio systems competing for resources
**Solution**: Create a single audio coordinator

- [x] Create `AudioManager.kt` that handles all audio focus requests
- [x] Make both `TextToSpeechManager` and `DeepgramClient` use this central manager
- [x] Implement proper audio session management with priority queuing
- [x] Add audio focus change listeners to handle interruptions gracefully

### 3. **Fix TTS Fallback Logic**
**Problem**: Concurrent TTS operations causing stuttering
**Solution**: Simplify and serialize TTS operations

- [x] Remove the Deepgram → System TTS fallback pattern in `speakResponse()`
- [x] Choose one TTS system per response and stick with it
- [x] Implement proper completion callbacks before state transitions
- [x] Add TTS operation queuing to prevent overlapping speech

