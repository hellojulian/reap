import * as React from 'react';
import { Pressable, type PressableProps, ActivityIndicator, Vibration, AccessibilityActionEvent } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Text } from './text';
import { useTheme } from '../../contexts/theme-context';
import { useTokens } from '../../hooks/use-tokens';

const buttonVariants = cva(
  'flex flex-row items-center justify-center radius-rounded-full gap-2 relative',
  {
    variants: {
      style: {
        default: '',
        link: '',
        secondary: '',
      },
      variant: {
        primary: '',
        secondary: '',
        link: '',
      },
      size: {
        default: 'px-4 py-2',
        large: 'px-8 py-2',
      },
      state: {
        default: '',
        pressed: '',
        focus: 'border-2 border-border-focus',
        disabled: '',
        loading: '',
      },
    },
    compoundVariants: [
      // Style=Default, Variant=Primary combinations
      {
        style: 'default',
        variant: 'primary',
        state: 'default',
        class: 'background-bg-brand',
      },
      {
        style: 'default',
        variant: 'primary',
        state: 'pressed',
        class: 'background-bg-brand-hover',
      },
      {
        style: 'default',
        variant: 'primary',
        state: 'focus',
        class: 'background-bg-brand border-border-focus',
      },
      {
        style: 'default',
        variant: 'primary',
        state: 'disabled',
        class: 'background-bg-primary opacity-50',
      },
      {
        style: 'default',
        variant: 'primary',
        state: 'loading',
        class: 'background-bg-brand',
      },
      
      // Style=Default, Variant=Secondary combinations
      {
        style: 'default',
        variant: 'secondary',
        state: 'default',
        class: 'background-bg-secondary border border-border-border',
      },
      {
        style: 'default',
        variant: 'secondary',
        state: 'pressed',
        class: 'background-bg-secondary-80 border border-border-border',
      },
      {
        style: 'default',
        variant: 'secondary',
        state: 'focus',
        class: 'background-bg-secondary border-border-focus',
      },
      {
        style: 'default',
        variant: 'secondary',
        state: 'disabled',
        class: 'background-bg-secondary opacity-50 border border-border-border',
      },
      {
        style: 'default',
        variant: 'secondary',
        state: 'loading',
        class: 'background-bg-secondary border border-border-border',
      },
      
      // Style=Link, Variant=Secondary combinations (text-only buttons)
      {
        style: 'link',
        variant: 'secondary',
        state: 'default',
        class: 'bg-transparent',
      },
      {
        style: 'link',
        variant: 'secondary',
        state: 'pressed',
        class: 'bg-transparent',
      },
      {
        style: 'link',
        variant: 'secondary',
        state: 'focus',
        class: 'bg-transparent border-border-focus',
      },
      {
        style: 'link',
        variant: 'secondary',
        state: 'disabled',
        class: 'bg-transparent opacity-50',
      },
      {
        style: 'link',
        variant: 'secondary',
        state: 'loading',
        class: 'bg-transparent',
      },
      
      // Style=Secondary, Variant=Link combinations (brand colored links)
      {
        style: 'secondary',
        variant: 'link',
        state: 'default',
        class: 'bg-transparent',
      },
      {
        style: 'secondary',
        variant: 'link',
        state: 'pressed',
        class: 'bg-transparent',
      },
      {
        style: 'secondary',
        variant: 'link',
        state: 'focus',
        class: 'bg-transparent border-border-focus',
      },
      {
        style: 'secondary',
        variant: 'link',
        state: 'disabled',
        class: 'bg-transparent opacity-50',
      },
      {
        style: 'secondary',
        variant: 'link',
        state: 'loading',
        class: 'bg-transparent',
      },
    ],
    defaultVariants: {
      style: 'default',
      variant: 'primary',
      size: 'default',
      state: 'default',
    },
  }
);

const buttonTextVariants = cva('font-["Plus_Jakarta_Sans:Medium",_sans-serif] text-[14px] leading-[14px] font-medium', {
  variants: {
    style: {
      default: '',
      link: '',
      secondary: '',
    },
    variant: {
      primary: '',
      secondary: '',
      link: '',
    },
    state: {
      default: '',
      pressed: '',
      focus: '',
      disabled: '',
      loading: '',
    },
  },
  compoundVariants: [
    // Style=Default, Variant=Primary text colors
    {
      style: 'default',
      variant: 'primary',
      class: 'text-text-static-black',
    },
    
    // Style=Default, Variant=Secondary text colors
    {
      style: 'default',
      variant: 'secondary',
      class: 'text-text-secondary-foreground',
    },
    
    // Style=Link, Variant=Secondary text colors (dark text)
    {
      style: 'link',
      variant: 'secondary',
      class: 'text-text-secondary-foreground',
    },
    
    // Style=Secondary, Variant=Link text colors (brand colored)
    {
      style: 'secondary',
      variant: 'link',
      class: 'text-text-brand',
    },
    
    // Disabled state text
    {
      state: 'disabled',
      class: 'opacity-50',
    },
  ],
  defaultVariants: {
    style: 'default',
    variant: 'primary',
    state: 'default',
  },
});

export interface ButtonProps
  extends PressableProps,
    VariantProps<typeof buttonVariants> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  showLabel?: boolean;
  showLeadingIcon?: boolean;
  showTrailingIcon?: boolean;
  leadingIcon?: React.ReactNode;
  trailingIcon?: React.ReactNode;
  leadingIconUri?: string;
  trailingIconUri?: string;
  loading?: boolean;
  hapticFeedback?: boolean;
  accessibilityActions?: Array<{
    name: string;
    label: string;
  }>;
}

const Button = React.forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
  ({
    className,
    style = 'default',
    variant = 'primary',
    size = 'default',
    state = 'default',
    children,
    label = 'Button',
    showLabel = true,
    showLeadingIcon = false,
    showTrailingIcon = false,
    leadingIcon,
    trailingIcon,
    leadingIconUri,
    trailingIconUri,
    loading = false,
    disabled,
    hapticFeedback = true,
    accessibilityActions = [],
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);
    
    // Get theme tokens for current theme
    const { isDark, actualTheme } = useTheme();
    const tokens = useTokens(actualTheme);
    
    // Determine current state based on props and interaction
    const currentState = loading ? 'loading' : 
                        disabled ? 'disabled' : 
                        isPressed ? 'pressed' : 
                        state;
    
    const renderIcon = (iconUri?: string, iconNode?: React.ReactNode, isLeading = true) => {
      if (loading && isLeading) {
        const spinnerColor = 
          style === 'default' && variant === 'primary' ? tokens.color['static-100'] :
          style === 'default' && variant === 'secondary' ? tokens.color['secondary-foreground-100'] :
          style === 'link' && variant === 'secondary' ? tokens.color['secondary-foreground-100'] :
          style === 'secondary' && variant === 'link' ? tokens.color['brand-700'] :
          tokens.color['secondary-foreground-100'];
          
        return (
          <ActivityIndicator 
            size="small" 
            color={spinnerColor}
          />
        );
      }
      
      if (iconNode) return iconNode;
      
      if (iconUri) {
        // TODO: Add SvgUri back when react-native-svg is stable
        // return (
        //   <SvgUri
        //     uri={iconUri}
        //     width={16}
        //     height={16}
        //   />
        // );
        return null;
      }
      
      return null;
    };

    // Get complete inline styles with proper theme support
    const getButtonStyle = () => {
      const baseStyle = {
        flexDirection: 'row' as const,
        alignItems: 'center' as const,
        justifyContent: 'center' as const,
        borderRadius: 9999,
        gap: 8,
        position: 'relative' as const,
        paddingHorizontal: size === 'large' ? 32 : 16,
        paddingVertical: 8,
        minHeight: 48, // Increased to 48px for better accessibility
        minWidth: 48, // Ensure minimum touch target width
      };

      // Default styles for each variant using theme tokens
      if (style === 'default' && variant === 'primary') {
        const bgColor = currentState === 'pressed' ? tokens.color['brand-200'] : 
                       currentState === 'disabled' ? tokens.color['primary-100'] : tokens.color['brand-400'];
        return {
          ...baseStyle,
          backgroundColor: bgColor,
          opacity: currentState === 'disabled' ? 0.5 : 1,
          borderWidth: currentState === 'focus' ? 2 : 0,
          borderColor: currentState === 'focus' ? tokens.color['brand-700'] : 'transparent',
        };
      }
      
      if (style === 'default' && variant === 'secondary') {
        const bgColor = currentState === 'pressed' ? tokens.color['secondary-80'] : tokens.color['secondary-100'];
        return {
          ...baseStyle,
          backgroundColor: bgColor,
          borderWidth: 1,
          borderColor: currentState === 'focus' ? tokens.color['brand-700'] : tokens.color['border-100'],
          opacity: currentState === 'disabled' ? 0.5 : 1,
        };
      }
      
      if (style === 'link' && variant === 'secondary') {
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: currentState === 'focus' ? 2 : 0,
          borderColor: currentState === 'focus' ? tokens.color['brand-700'] : 'transparent',
          opacity: currentState === 'disabled' ? 0.5 : 1,
        };
      }
      
      if (style === 'secondary' && variant === 'link') {
        return {
          ...baseStyle,
          backgroundColor: 'transparent',
          borderWidth: currentState === 'focus' ? 2 : 0,
          borderColor: currentState === 'focus' ? tokens.color['brand-700'] : 'transparent',
          opacity: currentState === 'disabled' ? 0.5 : 1,
        };
      }

      return baseStyle;
    };

    const getTextStyle = () => {
      const baseTextStyle = {
        fontFamily: 'PlusJakartaSans-Bold', // Plus Jakarta Sans Bold from expo-google-fonts
        fontSize: 14,
        lineHeight: 14,
        fontWeight: '700' as const, // Bold weight (700) as specified in Figma
      };

      // Handle disabled state first - all disabled buttons have light text
      if (currentState === 'disabled') {
        return { ...baseTextStyle, color: tokens.color['primary-foreground-100'] };
      }

      if (style === 'default' && variant === 'primary') {
        return { ...baseTextStyle, color: tokens.color['static-100'] };
      }
      if (style === 'default' && variant === 'secondary') {
        return { ...baseTextStyle, color: tokens.color['secondary-foreground-100'] };
      }
      if (style === 'link' && variant === 'secondary') {
        return { ...baseTextStyle, color: tokens.color['secondary-foreground-100'] };
      }
      if (style === 'secondary' && variant === 'link') {
        return { ...baseTextStyle, color: tokens.color['brand-700'] };
      }

      return baseTextStyle;
    };

    // Handle accessibility actions
    const handleAccessibilityAction = (event: AccessibilityActionEvent) => {
      if (event.nativeEvent.actionName === 'activate') {
        if (hapticFeedback) {
          Vibration.vibrate(50);
        }
        props.onPress?.(event as any);
      }
    };

    // Handle press with haptic feedback
    const handlePress = (event: any) => {
      setIsPressed(false);
      if (hapticFeedback && !disabled && !loading) {
        Vibration.vibrate(50);
      }
      props.onPress?.(event);
    };

    return (
      <Pressable
        ref={ref}
        style={getButtonStyle()}
        disabled={disabled || loading}
        onPressIn={() => setIsPressed(true)}
        onPressOut={() => setIsPressed(false)}
        onPress={handlePress}
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={props.accessibilityLabel || label}
        accessibilityHint={props.accessibilityHint || (loading ? 'Loading, please wait' : undefined)}
        accessibilityState={{
          disabled: disabled || loading,
          busy: loading
        }}
        accessibilityActions={[
          { name: 'activate', label: 'Activate button' },
          ...accessibilityActions
        ]}
        onAccessibilityAction={handleAccessibilityAction}
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        {...props}
      >
        {showLeadingIcon && renderIcon(leadingIconUri, leadingIcon, true)}
        
        {showLabel && (
          <Text 
            style={getTextStyle()}
            allowFontScaling={false}
            maxFontSizeMultiplier={1.0}
          >
            {label}
          </Text>
        )}
        
        {children}
        
        {showTrailingIcon && !loading && renderIcon(trailingIconUri, trailingIcon, false)}
      </Pressable>
    );
  }
);

Button.displayName = 'Button';

export { Button, buttonVariants };