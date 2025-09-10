Yes, that's exactly right! Here's what the consumer app flow typically looks like:

## Hospital Selection Process

Epic provides machine-readable endpoint directories that include patient-friendly organization names and their corresponding FHIR endpoint URLs. So you'd:

1. **Download Epic's endpoint directory** - Epic publishes lists of all participating health systems with their:
    - Patient-friendly names (like "Stanford Health Care")
    - FHIR endpoint URLs (like `https://sfd.stanfordmed.org/FHIR/api/FHIR/R4/`)
    - Geographic information to help with search/sorting
2. **Build a hospital picker UI** where users can:
    - Search by hospital name or location
    - Select multiple hospitals where they've received care
    - See which ones your app supports

## Multi-Hospital Auth Flow

For each selected hospital, the user goes through a separate OAuth flow:

```jsx
// Example flow for each hospital
hospitals.forEach(hospital => {
  FHIR.oauth2.authorize({
    'client_id': 'your-epic-client-id', // Same ID for all Epic hospitals
    'scope': 'patient/*.read',
    'redirect_uri': 'your-app.com/callback',
    'iss': hospital.fhirEndpoint // Different for each hospital
  })
})

```

## User Experience

Most apps start by letting users pick their Epic organization, sign in, and then select a patient. A typical flow might be:

1. "Where have you received care?" → Hospital picker
2. "Connect to Stanford Health" → OAuth flow #1
3. "Connect to UCSF Health" → OAuth flow #2
4. "Connect to Kaiser" → OAuth flow #3 (if they use Epic)
5. App now has access tokens for multiple hospitals

## Managing Multiple Connections

Your app would need to:

- Store separate access tokens for each hospital
- Handle token refresh for each connection independently
- Merge/deduplicate patient data from multiple sources
- Let users manage which hospitals they're connected to

This is why many health apps focus on single health systems initially - the multi-hospital experience adds significant complexity for both users and developers. But yes, this distributed auth approach is exactly how Epic's ecosystem works for consumer apps.