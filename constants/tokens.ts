/**
 * Design Tokens matching exact CSS variable structure
 * Based on primitives.css and tokens.css
 */

export const lightTokens = {
  // Spacing tokens
  spacing: {
    '0': '0px',
    '1': '4px', 
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '7': '28px',
    '8': '32px',
    '9': '36px',
    '10': '40px',
    '11': '44px',
    '12': '48px',
  },
  
  // Radius tokens
  radius: {
    'rounded-sm': '4px',
    'rounded-md': '6px', 
    'rounded-lg': '8px',
    'rounded-xl': '12px',
    'rounded-full': '9999px',
  },
  
  // Color tokens - ALL colors from primitives.css
  color: {
    // Border colors
    'border-100': '#E4E4E7',
    'border-90': '#E4E4E7E5',
    'border-80': '#E4E4E7CC',
    
    // Input colors
    'input-100': '#E4E4E7',
    'input-90': '#E4E4E7E5', 
    'input-80': '#E4E4E7CC',
    
    // Ring colors
    'ring-100': '#18181B',
    'ring-90': '#18181BE5',
    'ring-80': '#18181BCC',
    
    // Background colors
    'background-100': '#FFFFFF',
    'background-90': '#FFFFFFE5',
    'background-80': '#FFFFFFCC',
    
    // Static colors
    'static-100': '#09090B',
    
    // Foreground colors
    'foreground-100': '#09090B',
    'foreground-90': '#09090BE5',
    'foreground-80': '#09090BCC',
    'foreground-50': '#09090B80',
    
    // Primary colors
    'primary-100': '#18181B',
    'primary-90': '#18181BE5',
    'primary-80': '#18181BCC',
    'primary-50': '#18181B80',
    'primary-20': '#18181B33',
    'primary-10': '#18181B1A',
    'primary-foreground-100': '#FAFAFA',
    'primary-foreground-90': '#FAFAFAE5',
    'primary-foreground-80': '#FAFAFACC',
    
    // Secondary colors
    'secondary-100': '#F4F4F5',
    'secondary-90': '#F4F4F5E5',
    'secondary-80': '#F4F4F5CC',
    'secondary-foreground-100': '#18181B',
    'secondary-foreground-90': '#18181BE5',
    'secondary-foreground-80': '#18181BCC',
    
    // Destructive colors
    'destructive-100': '#EF4444',
    'destructive-90': '#EF4444E5',
    'destructive-80': '#EF4444CC',
    'destructive-50': '#EF444480',
    'destructive-foreground-100': '#FAFAFA',
    'destructive-foreground-90': '#FAFAFAE5',
    'destructive-foreground-80': '#FAFAFACC',
    
    // Muted colors
    'muted-100': '#F4F4F5',
    'muted-90': '#F4F4F5E5',
    'muted-80': '#F4F4F5CC',
    'muted-50': '#F4F4F580',
    'muted-40': '#F4F4F566',
    'muted-foreground-100': '#71717A',
    'muted-foreground-90': '#71717AE5',
    'muted-foreground-80': '#71717ACC',
    
    // Accent colors
    'accent-100': '#F4F4F5',
    'accent-90': '#F4F4F5E5',
    'accent-80': '#F4F4F5CC',
    'accent-50': '#F4F4F580',
    'accent-foreground-100': '#18181B',
    'accent-foreground-90': '#18181BE5',
    'accent-foreground-80': '#18181BCC',
    
    // Popover colors
    'popover-100': '#FFFFFF',
    'popover-90': '#FFFFFFE5',
    'popover-80': '#FFFFFFCC',
    'popover-foreground-100': '#09090B',
    'popover-foreground-90': '#09090BE5',
    'popover-foreground-80': '#09090BCC',
    
    // Card colors
    'card-100': '#FFFFFF',
    'card-90': '#FFFFFFE5',
    'card-80': '#FFFFFFCC',
    'card-foreground-100': '#09090B',
    'card-foreground-90': '#09090BE5',
    'card-foreground-80': '#09090BCC',
    
    // Blue color scale
    'blue-950': '#082F49',
    'blue-900': '#0C476E',
    'blue-800': '#075385',
    'blue-700': '#0362A1',
    'blue-600': '#0278C7',
    'blue-500': '#0E91E9',
    'blue-400': '#7DC9FC',
    'blue-300': '#7DC9FC',
    'blue-200': '#BAE2FD',
    'blue-100': '#E0F2FE',
    'blue-50': '#F0F9FF',
    
    // Red color scale
    'red-950': '#471108',
    'red-900': '#832A1A',
    'red-800': '#9D2B17',
    'red-700': '#BF2F16',
    'red-600': '#E33D20',
    'red-500': '#F5593E',
    'red-400': '#FD816C',
    'red-300': '#FFB0A2',
    'red-200': '#FFD0C8',
    'red-100': '#FFE8E4',
    'red-50': '#FEF4F2',
    
    // Green color scale
    'green-950': '#022C16',
    'green-900': '#064E29',
    'green-800': '#065F31',
    'green-700': '#04783D',
    'green-600': '#05964C',
    'green-500': '#10B962',
    'green-400': '#34D382',
    'green-300': '#6EE7A9',
    'green-200': '#A7F3CC',
    'green-100': '#D1FAE5',
    'green-50': '#ECFDF4',
    
    // Brand color scale
    'brand-950': '#003133',
    'brand-900': '#0E5253',
    'brand-800': '#0B6264',
    'brand-700': '#077E7E',
    'brand-600': '#029F9E',
    'brand-500': '#06C6C0',
    'brand-400': '#1FE2D9',
    'brand-300': '#5BF6EA',
    'brand-200': '#91FEF2',
    'brand-100': '#C8FFF7',
    'brand-50': '#EFFEFC',
  },
  
  // Typography tokens
  typography: {
    fontFamily: {
      regular: 'PlusJakartaSans-Regular',
      medium: 'PlusJakartaSans-Medium',
      semibold: 'PlusJakartaSans-SemiBold',
      bold: 'PlusJakartaSans-Bold',
    },
    
    h3: {
      fontFamily: 'PlusJakartaSans-SemiBold',
      fontSize: 24,
      fontWeight: '600',
      lineHeight: 32,
      letterSpacing: -0.6,
    },
    
    h4: {
      fontFamily: 'PlusJakartaSans-SemiBold',
      fontSize: 20,
      fontWeight: '600',
      lineHeight: 28,
      letterSpacing: -0.5,
    },
    
    paragraph: {
      fontFamily: 'PlusJakartaSans-Regular',
      fontSize: 16,
      fontWeight: '400',
      lineHeight: 28,
    },
    
    small: {
      fontFamily: 'PlusJakartaSans-Medium',
      fontSize: 14,
      fontWeight: '500',
      lineHeight: 14,
    },
  },
};

export const darkTokens = {
  // Spacing tokens (same as light)
  spacing: lightTokens.spacing,
  
  // Radius tokens (same as light)
  radius: lightTokens.radius,
  
  // Color tokens - ALL colors from primitives.css dark mode
  color: {
    // Border colors
    'border-100': '#27272A',
    'border-90': '#27272AE5',
    'border-80': '#27272ACC',
    
    // Input colors
    'input-100': '#27272A',
    'input-90': '#27272AE5',
    'input-80': '#27272ACC',
    
    // Ring colors
    'ring-100': '#D4D4D8',
    'ring-90': '#D4D4D8E5',
    'ring-80': '#D4D4D8CC',
    
    // Background colors
    'background-100': '#09090B',
    'background-90': '#09090BE5',
    'background-80': '#09090BCC',
    
    // Static colors
    'static-100': '#09090B',
    
    // Foreground colors
    'foreground-100': '#FAFAFA',
    'foreground-90': '#FAFAFAE5',
    'foreground-80': '#FAFAFACC',
    'foreground-50': '#FAFAFA80',
    
    // Primary colors
    'primary-100': '#FAFAFA',
    'primary-90': '#FAFAFAE5',
    'primary-80': '#FAFAFACC',
    'primary-50': '#FAFAFA80',
    'primary-20': '#FAFAFA33',
    'primary-10': '#FAFAFA1A',
    'primary-foreground-100': '#18181B',
    'primary-foreground-90': '#18181BE5',
    'primary-foreground-80': '#18181BCC',
    
    // Secondary colors
    'secondary-100': '#27272A',
    'secondary-90': '#27272AE5',
    'secondary-80': '#27272ACC',
    'secondary-foreground-100': '#FAFAFA',
    'secondary-foreground-90': '#FAFAFAE5',
    'secondary-foreground-80': '#FAFAFACC',
    
    // Destructive colors
    'destructive-100': '#7F1D1D',
    'destructive-90': '#7F1D1DE5',
    'destructive-80': '#7F1D1DCC',
    'destructive-50': '#7F1D1D80',
    'destructive-foreground-100': '#FAFAFA',
    'destructive-foreground-90': '#FAFAFAE5',
    'destructive-foreground-80': '#FAFAFACC',
    
    // Muted colors
    'muted-100': '#27272A',
    'muted-90': '#27272AE5',
    'muted-80': '#27272ACC',
    'muted-50': '#27272A80',
    'muted-40': '#27272A66',
    'muted-foreground-100': '#A1A1AA',
    'muted-foreground-90': '#A1A1AAE5',
    'muted-foreground-80': '#A1A1AACC',
    
    // Accent colors
    'accent-100': '#27272A',
    'accent-90': '#27272AE5',
    'accent-80': '#27272ACC',
    'accent-50': '#27272A80',
    'accent-foreground-100': '#FAFAFA',
    'accent-foreground-90': '#FAFAFAE5',
    'accent-foreground-80': '#FAFAFACC',
    
    // Popover colors
    'popover-100': '#09090B',
    'popover-90': '#09090BE5',
    'popover-80': '#09090BCC',
    'popover-foreground-100': '#FAFAFA',
    'popover-foreground-90': '#FAFAFAE5',
    'popover-foreground-80': '#FAFAFACC',
    
    // Card colors
    'card-100': '#09090B',
    'card-90': '#09090BE5',
    'card-80': '#09090BCC',
    'card-foreground-100': '#FAFAFA',
    'card-foreground-90': '#FAFAFAE5',
    'card-foreground-80': '#FAFAFACC',
    
    // Color scales (same as light mode)
    'blue-950': '#082F49',
    'blue-900': '#0C476E',
    'blue-800': '#075385',
    'blue-700': '#0362A1',
    'blue-600': '#0278C7',
    'blue-500': '#0E91E9',
    'blue-400': '#7DC9FC',
    'blue-300': '#7DC9FC',
    'blue-200': '#BAE2FD',
    'blue-100': '#E0F2FE',
    'blue-50': '#F0F9FF',
    
    'red-950': '#471108',
    'red-900': '#832A1A',
    'red-800': '#9D2B17',
    'red-700': '#BF2F16',
    'red-600': '#E33D20',
    'red-500': '#F5593E',
    'red-400': '#FD816C',
    'red-300': '#FFB0A2',
    'red-200': '#FFD0C8',
    'red-100': '#FFE8E4',
    'red-50': '#FEF4F2',
    
    'green-950': '#022C16',
    'green-900': '#064E29',
    'green-800': '#065F31',
    'green-700': '#04783D',
    'green-600': '#05964C',
    'green-500': '#10B962',
    'green-400': '#34D382',
    'green-300': '#6EE7A9',
    'green-200': '#A7F3CC',
    'green-100': '#D1FAE5',
    'green-50': '#ECFDF4',
    
    'brand-950': '#003133',
    'brand-900': '#0E5253',
    'brand-800': '#0B6264',
    'brand-700': '#077E7E',
    'brand-600': '#029F9E',
    'brand-500': '#06C6C0',
    'brand-400': '#1FE2D9',
    'brand-300': '#5BF6EA',
    'brand-200': '#91FEF2',
    'brand-100': '#C8FFF7',
    'brand-50': '#EFFEFC',
  },
  
  // Typography tokens (same as light)
  typography: lightTokens.typography,
};

// Type for theme tokens
export type Tokens = typeof lightTokens;

// Default export
export const tokens = {
  light: lightTokens,
  dark: darkTokens,
};