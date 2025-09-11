warning: Bundler cache is empty, rebuilding (this may take a minute)
Android Bundling failed 1960ms index.js (558 modules)
Android ./index.js ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 99.2% (537/558)SyntaxError: SyntaxError: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/App.tsx: Unexpected token (115:8)

  113 |         
  114 |         // App Links check for first launch (non-critical)
> 115 |         (async () => {
      |         ^
  116 |           try {
  117 |             if (Platform.OS === 'android') {
  118 |               console.log('🔗 App: Checking App Links first launch status...');
SyntaxError: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/App.tsx: Unexpected token (115:8)

  113 |         
  114 |         // App Links check for first launch (non-critical)
> 115 |         (async () => {
      |         ^
  116 |           try {
  117 |             if (Platform.OS === 'android') {
  118 |               console.log('🔗 App: Checking App Links first launch status...');
    at constructor (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:367:19)
    at TypeScriptParserMixin.raise (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:6630:19)
    at TypeScriptParserMixin.unexpected (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:6650:16)
    at TypeScriptParserMixin.parseIdentifierName (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12209:12)
    at TypeScriptParserMixin.parseIdentifier (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12187:23)
    at TypeScriptParserMixin.parseBindingAtom (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:7389:17)
    at TypeScriptParserMixin.parseBindingAtom (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9962:18)
    at TypeScriptParserMixin.parseVarId (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13407:21)
    at TypeScriptParserMixin.parseVarId (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9772:11)
    at TypeScriptParserMixin.parseVar (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13388:12)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13235:10)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9498:31)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12856:23)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9532:18)
    at TypeScriptParserMixin.parseStatementLike (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12772:17)
    at TypeScriptParserMixin.parseStatementListItem (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12752:17)
    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13321:61)
    at TypeScriptParserMixin.parseBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13314:10)
    at TypeScriptParserMixin.parseBlock (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13302:10)
    at TypeScriptParserMixin.parseTryStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13210:23)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12809:21)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9532:18)
    at TypeScriptParserMixin.parseStatementLike (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12772:17)
    at TypeScriptParserMixin.parseStatementListItem (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12752:17)
    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13321:61)
    at TypeScriptParserMixin.parseBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13314:10)
    at TypeScriptParserMixin.parseBlock (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13302:10)
    at TypeScriptParserMixin.parseFunctionBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12106:24)
    at TypeScriptParserMixin.parseArrowExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12081:10)
    at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11264:10)
    at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9786:18)
    at TypeScriptParserMixin.parseCoverCallAndAsyncArrowHead (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11194:27)
    at TypeScriptParserMixin.parseSubscript (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11120:19)
    at TypeScriptParserMixin.parseSubscript (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9358:18)
    at TypeScriptParserMixin.parseSubscripts (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11094:19)
    at TypeScriptParserMixin.parseExprSubscripts (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11085:17)
    at TypeScriptParserMixin.parseUpdate (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11066:21)
    at TypeScriptParserMixin.parseMaybeUnary (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11046:23)
    at TypeScriptParserMixin.parseMaybeUnary (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9857:18)
    at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10899:61)
    at TypeScriptParserMixin.parseExprOps (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10904:23)
    at TypeScriptParserMixin.parseMaybeConditional (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10881:23)
    at TypeScriptParserMixin.parseMaybeAssign (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10831:21)
    at TypeScriptParserMixin.parseMaybeAssign (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9806:20)
    at /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10800:39
    at TypeScriptParserMixin.allowInAnd (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12427:16)
    at TypeScriptParserMixin.parseMaybeAssignAllowIn (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10800:17)
    at TypeScriptParserMixin.parseVar (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13389:91)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13235:10)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9498:31)
cameronhightower@Mac Mobile_Jarvis_React_Native % npx expo run:android --variant release
env: load .env
env: export MODE EXPO_PUBLIC_PYTHON_BACKEND_URL EXPO_PUBLIC_SITE_URL EXPO_PUBLIC_SUPABASE_URL EXPO_PUBLIC_SUPABASE_ANON_KEY EXPO_PUBLIC_GOOGLE_CLIENT_ID EXPO_PUBLIC_GOOGLE_CLIENT_SECRET EXPO_PUBLIC_GOOGLE_API_KEY EXPO_PUBLIC_NOTION_CLIENT_ID EXPO_PUBLIC_NOTION_CLIENT_SECRET EXPO_PUBLIC_SLACK_CLIENT_ID EXPO_PUBLIC_SLACK_CLIENT_SECRET EXPO_PUBLIC_SLACK_APP_ID EXPO_PUBLIC_SLACK_VERIFICATION_TOKEN EXPO_PUBLIC_ZOOM_CLIENT_ID EXPO_PUBLIC_ZOOM_CLIENT_SECRET EXPO_PUBLIC_ZOOM_SECRET_TOKEN EXPO_PUBLIC_TODOIST_CLIENT_ID EXPO_PUBLIC_TODOIST_CLIENT_SECRET EXPO_PUBLIC_MICROSOFT_CLIENT_ID EXPO_PUBLIC_MICROSOFT_CLIENT_SECRET EXPO_PUBLIC_EXPIRING_RESOURCES_INTERVAL EXPO_PUBLIC_FITBIT_CLIENT_SECRET EXPO_PUBLIC_FITBIT_CLIENT_ID EXPO_PUBLIC_FITBIT_AUTHORIZATION_URI EXPO_PUBLIC_FITBIT_TOKEN_REFRESH_URI EXPO_PUBLIC_OURA_CLIENT_SECRET EXPO_PUBLIC_OURA_CLIENT_ID EXPO_PUBLIC_EPIC_MYCHART_CLIENT_SECRET EXPO_PUBLIC_EPIC_MYCHART_CLIENT_ID
› Building app...
Starting Metro Bundler
warning: Bundler cache is empty, rebuilding (this may take a minute)
Android ./index.js ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓░ 99.2% (540/559)SyntaxError: SyntaxError: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/App.tsx: Unexpected token (115:8)

  113 |         
  114 |         // App Links check for first launch (non-critical)
> 115 |         (async () => {
      |         ^
  116 |           try {
  117 |             if (Platform.OS === 'android') {
  118 |               console.log('🔗 App: Checking App Links first launch status...');
SyntaxError: /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/App.tsx: Unexpected token (115:8)

  113 |         
  114 |         // App Links check for first launch (non-critical)
> 115 |         (async () => {
      |         ^
  116 |           try {
  117 |             if (Platform.OS === 'android') {
  118 |               console.log('🔗 App: Checking App Links first launch status...');
    at constructor (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:367:19)
    at TypeScriptParserMixin.raise (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:6630:19)
    at TypeScriptParserMixin.unexpected (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:6650:16)
    at TypeScriptParserMixin.parseIdentifierName (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12209:12)
    at TypeScriptParserMixin.parseIdentifier (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12187:23)
    at TypeScriptParserMixin.parseBindingAtom (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:7389:17)
    at TypeScriptParserMixin.parseBindingAtom (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9962:18)
    at TypeScriptParserMixin.parseVarId (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13407:21)
    at TypeScriptParserMixin.parseVarId (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9772:11)
    at TypeScriptParserMixin.parseVar (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13388:12)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13235:10)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9498:31)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12856:23)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9532:18)
    at TypeScriptParserMixin.parseStatementLike (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12772:17)
    at TypeScriptParserMixin.parseStatementListItem (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12752:17)
    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13321:61)
    at TypeScriptParserMixin.parseBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13314:10)
    at TypeScriptParserMixin.parseBlock (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13302:10)
    at TypeScriptParserMixin.parseTryStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13210:23)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12809:21)
    at TypeScriptParserMixin.parseStatementContent (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9532:18)
    at TypeScriptParserMixin.parseStatementLike (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12772:17)
    at TypeScriptParserMixin.parseStatementListItem (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12752:17)
    at TypeScriptParserMixin.parseBlockOrModuleBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13321:61)
    at TypeScriptParserMixin.parseBlockBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13314:10)
    at TypeScriptParserMixin.parseBlock (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13302:10)
    at TypeScriptParserMixin.parseFunctionBody (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12106:24)
    at TypeScriptParserMixin.parseArrowExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12081:10)
    at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11264:10)
    at TypeScriptParserMixin.parseAsyncArrowFromCallExpression (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9786:18)
    at TypeScriptParserMixin.parseCoverCallAndAsyncArrowHead (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11194:27)
    at TypeScriptParserMixin.parseSubscript (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11120:19)
    at TypeScriptParserMixin.parseSubscript (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9358:18)
    at TypeScriptParserMixin.parseSubscripts (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11094:19)
    at TypeScriptParserMixin.parseExprSubscripts (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11085:17)
    at TypeScriptParserMixin.parseUpdate (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11066:21)
    at TypeScriptParserMixin.parseMaybeUnary (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:11046:23)
    at TypeScriptParserMixin.parseMaybeUnary (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9857:18)
    at TypeScriptParserMixin.parseMaybeUnaryOrPrivate (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10899:61)
    at TypeScriptParserMixin.parseExprOps (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10904:23)
    at TypeScriptParserMixin.parseMaybeConditional (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10881:23)
    at TypeScriptParserMixin.parseMaybeAssign (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10831:21)
    at TypeScriptParserMixin.parseMaybeAssign (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9806:20)
    at /Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10800:39
    at TypeScriptParserMixin.allowInAnd (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:12427:16)
    at TypeScriptParserMixin.parseMaybeAssignAllowIn (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:10800:17)
    at TypeScriptParserMixin.parseVar (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13389:91)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:13235:10)
    at TypeScriptParserMixin.parseVarStatement (/Users/cameronhightower/Software_Projects/Mobile_Jarvis_React_Native/node_modules/@babel/parser/lib/index.js:9498:31)
cameronhightower@Mac Mobile_Jarvis_React_Native % 