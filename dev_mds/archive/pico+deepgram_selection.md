## Pico + Deepgram Selection

1. [x] Allow user to select from built in Picovoice wakewords
    1.1 [x] Find the picovice implementation in the native code /android and add the following wake words:
        BUMBLEBEE
        GRASSHOPPER
        JARVIS
        PICOVOICE
        PORCUPINE
        TERMINATOR

    1.3 [x] UX
        [x] 1.2.1 Add a wake word selection section to the settings screen
        [x] 1.2.2 Add a wake word sensetivity slider and make sure this value is used for the wake word sensetivity param in the native android code
        [x] 1.2.3 Update schemas and types accordingly
    
    

2. [x] Allow user to select from Deepgram voices
    2.1 [x] Find the deepgram implementation in the native code and ensure the implementation is up to date with most recent docs.  
    2.2 [x] UX
        [x] 2.2.1 Add a deepgram selection section to the settings screen where users can select voices and play a recording of "Hello, how can I assist you today?" for each voice.  Use the name in the model names below in between the hyphens as the display names.
        Model names:
            aura-2-arcas-en
            aura-2-iris-en
            aura-2-mars-en 
            aura-2-orpheus-en 
            aura-2-athena-en
            aura-2-cordelia-en
            aura-2-draco-en 
            aura-2-hermes-en
            aura-2-hyperion-en 
            aura-2-theia-en 
            aura-athena-en 
            aura-helios-en 
        [x] 2.2.2 Update schemas and types accordingly


3. [x] Remove "Assistant Name" Field as it is redundant with wake word -- update types and schemas accordingly

4. [x] Ensure all types and schemas are updated including tables.ts

5. [x] Run npx tsc --noEmit


