![Reap Banner](https://github.com/hellojulian/reap/blob/main/banner.png?raw=true)

# Reap Expo Prototype

A React Native mobile app prototype built with Expo and modern development tools.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (optional but recommended)

## Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/hellojulian/reap.git
   cd reap
   ```

2. **Install dependencies**
   ```bash
   npm i
   ```

3. **Start the development server**
   ```bash
   npx expo start --ios
   ```

4. **Run on your device**
   - Install the [Expo Go app](https://expo.dev/client) on your iOS or Android device
   - Scan the QR code displayed in your terminal or browser
   - The app will load on your device

## Technology Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **UI Components**: RN Primitives
- **Icons**: Lucide React Native
- **Fonts**: Plus Jakarta Sans
- **Language**: TypeScript

## Project Structure

```
reap/
├── app/                 # App router pages and layouts
├── components/          # Reusable UI components
├── constants/           # App constants and configuration
├── hooks/              # Custom React hooks
├── lib/                # Utility functions and libraries
├── assets/             # Images, fonts, and other static assets
└── scripts/            # Build and development scripts
```

## Development

- **Lint code**: `npm run lint`
- **Run on Android**: `npm run android`
- **Run on iOS**: `npm run ios`
- **Run on web**: `npm run web`

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

For questions or issues, please open an issue in this repository.
