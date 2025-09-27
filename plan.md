Based on my investigation, I've identified the root cause of the duplicate assistant messages. Here's my comprehensive plan to fix this issue:

## Root Cause Analysis

There are **three separate systems** that can all add the same assistant message when returning from background during a voice request:

1. **`checkAndMergeBackgroundConversations`** (VoiceContext) - loads conversation history from native sync
2. **`checkUnfetchedRequests`** (VoiceAssistant) - loads unfetched requests from database  
3. **`VoiceResponseUpdate` event handler** - native event can still fire after background/foreground

These systems overlap and aren't properly coordinated, causing duplicates despite existing protective measures.

## Implementation Plan

### Phase 1: Add Background Loading Coordination System
**Location**: `src/voice/VoiceContext.tsx` (after line 148)

Add coordination refs to track which system is currently loading:
```typescript
// Background loading coordination to prevent duplicate messages
const backgroundLoadingStateRef = useRef({
  isLoadingBackgroundConversations: false,
  isLoadingUnfetchedRequests: false,
  lastBackgroundLoadTimestamp: 0
});
```

### Phase 2: Implement Coordinated Message Addition
**Location**: `src/voice/VoiceContext.tsx` (around line 277)

Create a centralized message addition function that coordinates all three systems:
```typescript
const addMessageWithCoordination = useCallback((message: ChatMessage, source: 'native_sync' | 'unfetched_db' | 'voice_event') => {
  // Comprehensive duplicate checking across all sources
  // Only allow one source to add messages during background loading
});
```

### Phase 3: Update Background Conversation Loading
**Location**: `src/voice/VoiceContext.tsx` (line 444)

Modify `checkAndMergeBackgroundConversations` to use coordination system and prevent overlaps with unfetched check.

### Phase 4: Update Unfetched Request Loading  
**Location**: `src/voice/components/VoiceAssistant.tsx` (line 138)

Modify `checkUnfetchedRequests` to check coordination state and avoid loading if background conversations are already being processed.

### Phase 5: Update Native Event Handler
**Location**: `src/voice/VoiceContext.tsx` (line 504)

Modify `VoiceResponseUpdate` event handler to check if background loading is in progress and defer message addition if needed.

### Phase 6: Add Timing-Based Coordination
Implement a time-window approach where:
- Only one background loading system can run within a 2-second window
- Later systems defer to already-running system
- Native events are suppressed during background loading

### Phase 7: Enhanced Duplicate Detection
Strengthen existing duplicate detection with:
- Content + timestamp matching across longer time windows
- Request ID tracking to prevent same response from multiple sources
- Conversation ID coordination between systems

## Expected Outcome

This coordination system will:
- ✅ Prevent multiple systems from adding the same message
- ✅ Maintain existing functionality of all three systems
- ✅ Provide clear logging of which system is handling message loading
- ✅ Eliminate duplicate assistant messages when returning from background

## Testing Strategy

After implementation:
1. Test background/foreground transitions during active voice requests
2. Verify conversation history still loads correctly
3. Confirm unfetched requests are still processed
4. Validate native voice events still work properly

Would you like me to proceed with implementing this plan? I'll start with Phase 1 and work through systematically.