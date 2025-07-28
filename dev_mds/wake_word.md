Using the mapping below, please add wake word sensetivity mapping as follows:
1. Map the wake phrase to its sensetivity
2. Include the mapping next to its name on the settings screen in parentheses, but don't modify the system name itself as the payload sent to the native layer should not include the sensetivity 
3.  Include a brief description that says the number next to the phrase is its minimum requires sensitivity 
4. When the wake word is selected, auto update the sensetivity state if the current senesitivty is higher than the required minimum sensetivity for the wake phrase - this state update should use the same update handler that manually changing the sensetivity uses 


{
  "Hey Juni": [0.02],
  "Hey Juniper": [0.001],
  "Hey": [0.01],
  "Jarvis": [0.7],
  "Hey Jarvis": [0.9],
  "Jasmine": [0.001],
  "Hey Jade": [0.001],
  "Hey Jay": [0.001],
  "Hey Jasper": [0.02],
  "Alex": [0.001],
  "Aloe": [0.001],
  "Hey Michael": [0.7]
}



