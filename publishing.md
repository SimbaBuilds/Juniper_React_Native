## iOS - Apple App Store

Account & Setup

- [x]  update bundle ID from anonymous to hightowerai
- [x]  Apple Developer account active
- [x]  ☐ App Store Connect account access
- [x]  ☐ Create new app listing with bundle ID
- [x]  ☐ Certificates & Provisioning

iOS Distribution Certificate created

- [x]  ☐ App ID with explicit bundle identifier
- [x]  ☐ Distribution Provisioning Profile (App Store type)
- [x]  ☐ Certificates installed in Xcode

Assets Required

- [x]  ☐ App icon (1024x1024px)
- [x]  ☐ Screenshots for all device sizes
- [x]  ☐ App description and keywords
- [x]  demo videos - just send email for demo (ios, G)
- [x]  ☐ Privacy policy URL

### Build & Upload

- [ ]  **Configure Build Settings**
    - [ ]  Set version number and build number
    - [ ]  Select "Generic iOS Device" or "Any iOS Device" as build target
    - [ ]  Ensure Release configuration is selected
    - [ ]  Set code signing to use your distribution certificate and profile
- [ ]  **Archive and Upload**
    - [ ]  In Xcode: Product → Archive
    - [ ]  Once archived: Window → Organizer
    - [ ]  Select your archive and click "Distribute App"
    - [ ]  Choose "App Store Connect" → Upload
    - [ ]  Let Xcode handle the signing and upload process
- [ ]  **TestFlight (Optional but Recommended)**
    - [ ]  Once uploaded, build appears in TestFlight
    - [ ]  Add internal/external testers
    - [ ]  Test thoroughly before submission

### Submission

1. **Complete App Store Listing**
    - [ ]  Add screenshots and app preview
    - [ ]  Write description, what's new, keywords
    - [ ]  Set pricing and availability
    - [ ]  Configure age rating
    - [ ]  Add any required compliance information (encryption, IDFA usage)
2. **Submit for Review**
    - [ ]  Select your uploaded build
    - [ ]  Answer export compliance questions
    - [ ]  Add review notes if needed
    - [ ]  Submit for review