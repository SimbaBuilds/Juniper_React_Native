The integations page has been consolidated so that there is only one connection for each provider. 

1. [x]Migrate all individual service logic within each provider to their respective folders.  Do not migrate diplay logic -- all we need in this new implementation is authorization and token exchange.
2. [x]Put these implementations in  respective google, microsoft, and notion directories.
3. [x]Delete deprecated individual service files
4. [x]Run a type check