![Reap Banner](https://github.com/hellojulian/reap/blob/main/banner.png?raw=true)

# Reap - Mobile Prototype

## Features

- 🌓 **Light/Dark Theme Toggle** - Global theme management with persistent storage
- 🎨 **Component Library** - Comprehensive UI components with accessibility support
- 📱 **Mobile-First Design** - Optimized for iOS and Android
- ♿ **Accessibility** - WCAG 2.1 AA compliant components
- 🎯 **TypeScript** - Fully typed codebase
- 🔄 **State Management** - React Context for theme management

## Tech Stack

- **React Native** - Mobile app framework
- **Expo** - Development platform and build tools
- **TypeScript** - Type safety and developer experience
- **React Navigation** - Navigation and routing
- **NativeWind** - Utility-first styling
- **Lucide React Native** - Beautiful icons

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Expo CLI
- iOS Simulator (for iOS development)
- Android Studio (for Android development)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/reap.git
cd reap
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Run on your preferred platform:
```bash
# iOS
npx expo start --ios
```

## Project Structure

```
├── app/                    # App Router screens
│   ├── (tabs)/            # Tab navigation screens
│   │   ├── index.tsx      # Home screen
│   │   └── explore.tsx    # Button showcase screen
│   └── _layout.tsx        # Root layout with theme provider
├── components/            # Reusable UI components
│   ├── ui/               # Core UI components
│   │   ├── button.tsx    # Accessible button component
│   │   ├── card.tsx      # Card component
│   │   └── text.tsx      # Typography component
│   └── screens/          # Screen-level components
├── contexts/             # React Context providers
│   └── theme-context.tsx # Global theme management
├── hooks/                # Custom React hooks
│   └── use-tokens.ts     # Theme token hooks
├── constants/            # App constants
│   └── tokens.ts         # Design system tokens
└── assets/               # Static assets
    └── images/           # Image assets
```

## Components

### Button Component

Fully accessible button with multiple variants:

```tsx
import { Button } from '@/components/ui/button';

<Button 
  variant="primary" 
  size="large"
  label="Get Started"
  onPress={() => console.log('Pressed')}
/>
```

**Variants:** `primary`, `secondary`, `link`  
**Sizes:** `default`, `large`  
**States:** `loading`, `disabled`, `pressed`, `focus`

### Theme System

Global theme management with light/dark mode support:

```tsx
import { useTheme } from '@/contexts/theme-context';

const { isDark, toggleTheme, actualTheme } = useTheme();
```

## Design System

The app uses a comprehensive design token system for consistent styling:

- **Colors**: Light and dark theme variants
- **Typography**: Plus Jakarta Sans font family  
- **Spacing**: Consistent spacing scale
- **Radius**: Border radius tokens

## Accessibility

All components are built with accessibility in mind:

- ✅ WCAG 2.1 AA compliance
- ✅ Screen reader support (VoiceOver/TalkBack)
- ✅ Proper focus management
- ✅ Adequate touch targets (48px minimum)
- ✅ Haptic feedback
- ✅ High contrast support

## Scripts

- `npm start` - Start Expo development server
- `npm run ios` - Run on iOS simulator
- `npm run android` - Run on Android emulator  
- `npm run web` - Run on web browser
- `npm run reset-project` - Reset to clean Expo project

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
