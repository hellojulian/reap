import { useColorScheme } from 'react-native';
import { tokens, type Tokens } from '../constants/tokens';

/**
 * Hook to get current theme tokens based on color scheme
 * We'll pass the theme from the component level instead
 */
export function useTokens(forcedTheme?: 'light' | 'dark'): Tokens {
  const systemColorScheme = useColorScheme();
  const currentTheme = forcedTheme || systemColorScheme;
  
  return currentTheme === 'dark' ? tokens.dark : tokens.light;
}

/**
 * Hook to get specific token values with fallbacks
 */
export function useThemeColors(forcedTheme?: 'light' | 'dark') {
  const systemColorScheme = useColorScheme();
  const currentTheme = forcedTheme || systemColorScheme;
  const currentTokens = useTokens(forcedTheme);
  
  return {
    // Text colors - exact CSS variable mappings
    text: currentTokens.color['foreground-100'],
    textMuted: currentTokens.color['muted-foreground-100'],
    textStatic: currentTokens.color['static-100'],
    
    // Background colors - exact CSS variable mappings
    background: currentTokens.color['background-100'],
    brand: currentTokens.color['brand-300'],
    brandHover: currentTokens.color['brand-200'],
    
    // Icon backgrounds - use appropriate colors per theme
    iconRed: currentTheme === 'dark' ? currentTokens.color['red-800'] : currentTokens.color['red-100'],
    iconGreen: currentTheme === 'dark' ? currentTokens.color['green-800'] : currentTokens.color['green-100'], 
    iconBlue: currentTheme === 'dark' ? currentTokens.color['blue-800'] : currentTokens.color['blue-100'],
    
    // Border - exact CSS variable mapping
    border: currentTokens.color['border-100'],
  };
}

/**
 * Hook to get typography tokens
 */
export function useTypography() {
  const currentTokens = useTokens();
  return currentTokens.typography;
}

/**
 * Hook to get spacing tokens
 */
export function useSpacing() {
  const currentTokens = useTokens();
  return currentTokens.spacing;
}