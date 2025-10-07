ERROR  Warning: Error: Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) but got: undefined. You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.

Check the render method of `TrendChart`.

This error is located at:

  89 |
  90 | export const TrendChart: React.FC<TrendChartProps> = ({
> 91 |   chart,
     |        ^
  92 |   chartData,
  93 |   isDarkMode,
  94 |   onUpdateChart,

Call Stack
  TrendChart (src/components/wellness/TrendChart.tsx:91:8)
  Wrapper (<anonymous>)
  RCTSafeAreaView (<anonymous>)
  WellnessScreen (src/WellnessScreen.tsx:77:37)
  MainTabNavigator (App.tsx:731:62)
  ScreenContentWrapper (<anonymous>)
  RNSScreenStack (<anonymous>)
  RNCSafeAreaProvider (<anonymous>)
  WakeWordProvider (src/wakeword/WakeWordContext.tsx:29:85)
  VoiceProvider (src/voice/VoiceContext.tsx:93:71)
  AuthProvider (src/auth/AuthContext.tsx:24:81)
  App (App.tsx:58:41)
