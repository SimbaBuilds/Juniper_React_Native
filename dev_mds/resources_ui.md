We are implementing embedding creation for user added resources.


- [ ]  Resource addition functionality
    - [ ]  Every resource should get 
        - title field (optional)
        - content - max 2000 chars - display only first 500 with scrollable view like in the conversation history UI
            - all content should get an embedding using Local Sentence-Transformer `all-mpnet-base-v2` 
        - an instructions field e.g. "read this when" - max 100 chars
- [ ]  Resource displays can be truncated but scrollable like the chat history
- [ ]  “Expiring resources” section: if relevance score dops below 10%, resource gets bumped to this section in the Repo Screen where they can delete it, or reset its score, and a notification badge appears on repo icon in nav bar
- [ ]  Delete tag functionality: Make sure there is a delete tag functionality in the tag selection UI (user can delete user_created tags only)



# Complete Resource Management Enhancement Plan

## Backend: Supabase Edge Functions Auto-Embedding

### 1. Database Triggers Setup
- Create before_insert and before_update triggers on resources table
- Triggers queue embedding jobs when content changes
- Resources created with null embeddings, populated within seconds

### 2. Edge Function Creation
- Create Supabase Edge Function for embedding generation
- Use Hugging Face API or lighter model (all-MiniLM-L6-v2)
- Function receives resource content, returns embedding array

## Frontend: UI Enhancements in RepoScreen

### 1. Enhanced Resource Addition Form
- Add "Instructions" field (max 100 chars) - new field for "read this when"
- Update content field to max 2000 chars with character counter
- Keep existing title field (optional)

### 2. Improved Resource Display
- Show only first 500 chars of content with "Show more" expansion
- Add scrollable content view similar to ConversationHistory messages
- Display instructions field when present

### 3. Expiring Resources Section
- Add "Expiring Resources" section for resources with relevance_score < 10%
- Show delete and reset score options
- Add notification badge on repo nav icon when expiring resources exist

### 4. Enhanced Tag Management
- Add delete functionality for user_created tags in TagSelector
- Show delete button only for user-created tags
- Update tag management UI

## Files to Modify

### Supabase
- Database triggers + Edge Function (new)

### Frontend
- `src/repo/RepoScreen.tsx` - resource form, display, expiring section
- `src/repo/components/TagSelector.tsx` - tag deletion
- `src/supabase/tables.ts` - add instructions field if needed
- Navigation component - notification badge logic

## Implementation Order

1. Backend embedding automation (no frontend changes needed)
2. Resource form enhancements (instructions field, char limits)
3. Improved resource display (truncation, scrollable)
4. Expiring resources section
5. Tag deletion functionality

This approach handles embedding generation automatically server-side while enhancing the user experience with better resource management UI.