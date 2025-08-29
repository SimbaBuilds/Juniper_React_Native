# Conversation History Coordination Implementation Plan

## Current State Analysis

### Native Side (Android) - ✅ Infrastructure Ready
- ✅ `BackgroundConversationManager` exists with history syncing capabilities
- ✅ `ConversationSyncModule` provides React Native bridge methods
- ✅ Native can store and persist conversation history
- ✅ `AppStateModule` provides enhanced app state management
- ❌ **Gap:** Not actively syncing with React Native

### React Native Side - ⚠️ Missing Integration
- ✅ `VoiceContext` manages chat history state  
- ✅ Auto-clears history after 10 minutes of inactivity
- ✅ "New" button calls `clearChatHistory()` which clears native voice state
- ✅ `AppStateService` provides robust app state management
- ❌ **Gap:** Not using `ConversationSyncModule` at all
- ❌ **Gap:** Not syncing history to native on updates
- ❌ **Gap:** Not retrieving background conversations on app load
- ❌ **Gap:** Not clearing native conversation history on manual clear

## Implementation Tasks

### 1. Create React Native Conversation Sync Service
**File:** `src/services/conversationSyncService.ts`

Import and use `ConversationSyncModule` native module with methods:
- `syncHistoryToNative(history)` - Push RN history to native
- `getBackgroundConversations()` - Retrieve pending background chats  
- `mergeBackgroundHistory()` - Merge background chat into RN state
- `clearNativeHistory()` - Clear native conversation history
- `markConversationsAsSynced(ids)` - Mark background conversations as processed

### 2. Update VoiceContext for Bidirectional Sync

#### On App Load (useEffect):
- Call `getBackgroundConversations()` to check for background chats
- Merge any background history into React Native state
- Mark background conversations as synced
- Use existing `AppStateService` for state monitoring

#### After Each API Response:
- Call `syncHistoryToNative()` to update native with latest history
- Ensures background chat has full context for future wake word interactions

#### On Manual Clear ("New" button - `clearChatHistory()`):
- **CRITICAL:** Update to also call `conversationSyncService.clearNativeHistory()`
- Clear both voice state AND conversation history in native
- Ensures complete reset across both platforms
- Current code only clears voice state, not conversation history

#### On Auto-Clear (10-minute timeout - `handleAutoRefresh()`):
- Call `conversationSyncService.clearNativeHistory()` to propagate clear to native
- Ensures native doesn't retain stale history after timeout

### 3. Implement Background to Foreground Resume

#### Event Handling:
- Add event listener for `backgroundConversationsAvailable` in VoiceContext
- Use existing `AppStateService` app state listeners

#### Resume Logic:
When app comes to foreground with pending conversations:
- Retrieve background conversation history
- Merge into current chat history chronologically
- Continue conversation seamlessly
- Show user indication of resumed background conversation

### 4. Implement Native History Updates
**File:** `android/app/src/main/java/com/hightowerai/MobileJarvisNative/api/NativeApiClient.kt`

Before each background API call:
- Check `BackgroundConversationManager.getCurrentHistory()` for latest context
- Ensure background conversations always have most recent history
- This ensures continuity when switching between foreground and background

### 5. Integrate with Existing App State Management
**Use existing `AppStateService.ts` implementation:**
- ✅ Already has `addListener()` for app state changes
- ✅ Already has `isInForeground()` for state checking
- ✅ Already integrates native and React Native app states

**Integration Points:**
- On app becoming active: Check for background conversations + sync current history
- On app going to background: Final sync of history to native
- Use existing event system instead of creating new AppState handling

## Files to Modify/Create

### New Files:
1. **`src/services/conversationSyncService.ts`** - Main sync service implementation
2. **`src/hooks/useConversationSync.ts`** - Hook for sync operations (optional)

### Modified Files:

1. **`src/voice/VoiceContext.tsx`** - Core integration point:
   - Add conversationSyncService import
   - Update `clearChatHistory()` to clear native conversation history
   - Update `handleAutoRefresh()` to clear native conversation history  
   - Add sync after API responses in message handling
   - Add background conversation retrieval on app load
   - Integrate with existing `AppStateService` listeners

2. **`src/voice/components/VoiceAssistant.tsx`**:
   - Add UI indicators for resumed background conversations
   - Handle background conversation display

3. **`android/app/src/main/java/com/hightowerai/MobileJarvisNative/api/NativeApiClient.kt`**:
   - Check for updated history before background API calls

4. **`android/app/src/main/java/com/hightowerai/MobileJarvisNative/api/BackgroundConversationManager.kt`** (if needed):
   - Verify clear methods work properly with new sync requirements

## Key Implementation Details

### Fix for "New" Button:
```typescript
const clearChatHistory = useCallback(async () => {
  // ... existing save logic ...
  
  // NEW: Clear native conversation history 
  try {
    await conversationSyncService.clearNativeHistory();
    console.log('✅ Native conversation history cleared');
  } catch (error) {
    console.warn('⚠️ Failed to clear native conversation history:', error);
  }
  
  // ... existing clear logic ...
  setChatHistory([]);
}, [chatHistory]);
```

### App State Integration:
```typescript
// Use existing AppStateService instead of new AppState handling
useEffect(() => {
  const appStateService = AppStateService.getInstance();
  
  const unsubscribe = appStateService.addListener((newState) => {
    if (newState === 'active') {
      // Check for background conversations
      checkAndMergeBackgroundConversations();
      // Sync current history to native
      syncCurrentHistoryToNative();
    } else if (newState === 'background') {
      // Final sync before going to background
      syncCurrentHistoryToNative();
    }
  });
  
  return unsubscribe;
}, []);
```

## Testing Plan
1. **Manual Clear Test:** "New" button clears both RN and native history
2. **Background Resume:** Wake word → conversation → return to app seamlessly continues
3. **Auto-Clear Propagation:** 10-minute timeout clears both RN and native
4. **Multiple Background Chats:** Queue and merge multiple background conversations
5. **App State Transitions:** History syncs on foreground/background changes  
6. **Persistence:** History survives app restarts appropriately
7. **Clean Slate:** Background conversations after "New" don't include old history

## Success Criteria
- ✅ Background wake word conversations continue seamlessly in foreground
- ✅ "New" button creates complete fresh start for both platforms
- ✅ 10-minute auto-clear propagates to native to prevent stale context
- ✅ App state changes trigger appropriate history synchronization
- ✅ No conversation context is lost during platform transitions