Please implementation the multiissuer MyChart integration flow as follows: 

Instead of "connect" on the integrations screen, MyChart should say "Select Care Provider(s)".  On press, a picker modal should open where the user can select multiple providers based on what is available in the db issuer table.  On save, each selection should become its own record in the user epic connections table.

Once selection is done, the screen should refresh so that these selections can populate in an expandable section under MyChart.  Each issuer selection should have its own connection, reconnection, and disconnect button (depending on state) just like the individual service integration options.  

The flow should proceed like the other auth flows, but it should exclude the "Let's complete the integration for <service_name>" + chat screen flow similar ot the way the reconnect flow skips this -- we don't want ht euser to have to go through that flow for each provider they select.