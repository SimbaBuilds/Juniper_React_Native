This check is for when the app is backgrounded and returned to the foreground - it is how we persist requests.

Please create a plan for (1) Adding a 6 hour time
  threshold and (2) ensuring the cancel request
  functionality is always showing when the status
  indicator is showing or the app is in open request state (in
  this case, on app launch, the cancel request button
  was not showing meaning state management was off)