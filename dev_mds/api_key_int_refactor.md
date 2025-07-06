I am updating the Perplexity service to use a system rather than user generated API Key.
I am also adding the Twitter/X service in the same pattern using a system API key

- [ ]  API Key Based Integrations Refactor
    - [ ]  Perplexity - refactor to use env var key similar to TextBelt but with no auth params requiring user_id or supabase client
    - [ ]  X/Twitter API
        - [ ]  Search for API docs and add key tools to twitter_x tool file following no auth flow above