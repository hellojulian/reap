import * as React from 'react';
import { Text as RNText, type TextProps as RNTextProps, AccessibilityRole } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';

const textVariants = cva('font-family-["Plus_Jakarta_Sans",_sans-serif]', {
  variants: {
    variant: {
      label: 'text-zinc-950 font-semibold tracking-[-0.5px]',
      description: 'text-zinc-500 font-normal',
      header: 'text-zinc-950 font-semibold tracking-[-0.6px]',
      button: 'font-medium',
      default: 'color-foreground-100 font-bold',
      muted: 'color-muted-foreground-100 font-normal',
      destructive: 'color-destructive-100',
      accent: 'color-accent-foreground-100',
      secondary: 'color-secondary-foreground-100',
      primary: 'color-primary-100',
      brand: 'color-brand-500',
    },
    size: {
      label: 'text-[20px] leading-[28px]',
      description: 'text-[16px] leading-[28px]',
      header: 'text-[24px] leading-[32px]',
      button: 'text-[14px] leading-[14px]',
      default: 'text-base leading-6',
      sm: 'text-sm leading-5',
      lg: 'text-lg leading-7',
      xl: 'text-xl leading-8',
      '2xl': 'text-2xl leading-9',
      '3xl': 'text-3xl leading-10',
      '4xl': 'text-4xl leading-10',
    },
    align: {
      left: 'text-left',
      center: 'text-center',
      right: 'text-right',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    align: 'left',
  },
});

export interface TextProps
  extends RNTextProps,
    VariantProps<typeof textVariants> {
  className?: string;
  semanticRole?: AccessibilityRole;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  allowFontScaling?: boolean;
  maxFontSizeMultiplier?: number;
}

const Text = React.forwardRef<RNText, TextProps>(
  ({ 
    className, 
    variant, 
    size, 
    align, 
    style, 
    semanticRole,
    headingLevel,
    allowFontScaling = false,
    maxFontSizeMultiplier = 1.0,
    ...props 
  }, ref) => {
    
    // Determine accessibility role based on variant and semanticRole
    const getAccessibilityRole = (): AccessibilityRole => {
      if (semanticRole) return semanticRole;
      
      switch (variant) {
        case 'header':
          return 'header';
        case 'button':
          return 'button';
        default:
          return 'text';
      }
    };

    // Generate accessibility label for headings with level
    const getAccessibilityLabel = () => {
      if (variant === 'header' && headingLevel && typeof props.children === 'string') {
        return `Heading level ${headingLevel}, ${props.children}`;
      }
      return props.accessibilityLabel;
    };

    return (
      <RNText
        ref={ref}
        className={cn(textVariants({ variant, size, align }), className)}
        style={style}
        allowFontScaling={allowFontScaling}
        maxFontSizeMultiplier={maxFontSizeMultiplier}
        accessible={true}
        accessibilityRole={getAccessibilityRole()}
        accessibilityLabel={getAccessibilityLabel()}
        {...props}
      />
    );
  }
);

Text.displayName = 'Text';

export { Text, textVariants };