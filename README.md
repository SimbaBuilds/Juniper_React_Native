# MobileJarvisNative

A React Native mobile application built with Expo that integrates voice recognition, wake word detection, and Supabase authentication.

## Setup

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env` file in the root directory with the following variables:
```
EXPO_PUBLIC_SUPABASE_URL=your-supabase-project-url
EXPO_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```

You can find these values in your Supabase project dashboard under Settings > API.

3. Run the development server:
```bash
npx expo start
```

## Environment Variables Setup

This project uses a dual approach for environment variables to ensure compatibility across all platforms:

1. **For Development**: Environment variables are loaded from `.env` files using the `EXPO_PUBLIC_` prefix
2. **For Production/Build**: Environment variables are configured through `app.config.js` and accessed via `expo-constants`

This setup resolves the common "supabase URL required" error that occurs in Android builds when environment variables aren't properly loaded.

## Features

- **Authentication System**
  - Email/password sign up and sign in
  - Phone number authentication with SMS OTP
  - Email verification flow
  - Secure session management
- **Voice Recognition & Processing**
  - Real-time voice commands
  - Voice-to-text conversion
- **Wake Word Detection**
  - Always-listening wake word functionality
  - Customizable activation phrases
- **Settings Management**
  - User preferences configuration
  - Profile management
- **Cross-platform Support**
  - iOS and Android compatibility
  - Responsive design

## Authentication

The app supports multiple authentication methods:

### Email Authentication
- Traditional email/password registration
- Email verification required
- Password strength validation

### Phone Authentication with Twilio
- SMS-based OTP verification
- International phone number support
- 60-second verification window
- Automatic phone number formatting

For phone authentication setup, see [PHONE_AUTH_SETUP.md](./PHONE_AUTH_SETUP.md) for detailed Supabase and Twilio configuration instructions.

## Tech Stack

- **Frontend**: React Native with Expo
- **Language**: TypeScript with strict mode
- **Backend**: Supabase for authentication and database
- **SMS Provider**: Twilio for phone authentication
- **Navigation**: React Navigation 6.x
- **State Management**: React Context API
- **Voice Services**: Expo Voice and Wake Word modules

## Architecture

The app follows a feature-based architecture:

```
src/
├── features/
│   ├── auth/           # Authentication components and logic
│   ├── voice/          # Voice recognition features
│   ├── wakeword/       # Wake word detection
│   └── settings/       # User settings and preferences
├── shared/
│   └── components/     # Reusable UI components
└── supabase/          # Supabase client configuration
```

## Development Requirements

### Java Development Kit
This project requires JDK 17 for Android builds. Before running Android builds, set your JAVA_HOME:

```bash
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
```

You can add this to your shell profile (.zshrc, .bashrc) to make it permanent.

### Making JDK 17 Setting Permanent in Build Scripts

#### For macOS/Linux:
1. Add this to your project's `android/gradle.properties`:
   ```
   org.gradle.java.home=/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
   ```

2. Create a `.env` file in the project root:
   ```
   JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
   ```

3. Add this to your npm scripts in package.json:
   ```json
   "scripts": {
     "android": "source .env && npx react-native run-android",
     "android:build": "source .env && cd android && ./gradlew assembleRelease"
   }
   ```

#### For Windows:
1. Add this to `android/gradle.properties`:
   ```
   org.gradle.java.home=C:\\Program Files\\Eclipse Adoptium\\jdk-17.0.x
   ```

## Key Compatibility Points
- React Native 0.73.4 with Expo 50.0.0
- React 18.2.0 (compatible with RN 0.73.4)
- Kotlin 1.8.22 (stable version compatible with Android Gradle Plugin)
- Gradle 8.5 (compatible with Java 17)
- Android Gradle Plugin 8.5.2
- React Navigation 6.x series (6.1.9 and 6.9.17)
- Android SDK target/compile version 34 (Android 14)

Front end for an AI assistant built in React Native - building out hyperpersonalized and configurable features like memory organization, favorite news sources, IoT integration, favorite LLMs, project knowledge, note taking, email/SMS integration etc...
