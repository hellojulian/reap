import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { SvgUri } from 'react-native-svg';

const iconGroupVariants = cva('w-10 h-10 rounded-full items-center justify-center', {
  variants: {
    variant: {
      red: 'bg-[#ffe8e4]',
      blue: 'bg-[#e0f2fe]',
      green: 'bg-[#d1fae5]',
    },
  },
  defaultVariants: {
    variant: 'red',
  },
});

export interface IconGroupProps
  extends ViewProps,
    VariantProps<typeof iconGroupVariants> {
  className?: string;
  iconUri?: string;
  children?: React.ReactNode;
  isDecorative?: boolean;
  iconDescription?: string;
}

const IconGroup = React.forwardRef<View, IconGroupProps>(
  ({
    className,
    variant = 'red',
    iconUri,
    children,
    isDecorative = true,
    iconDescription,
    ...props
  }, ref) => {
    const getAccessibilityProps = () => {
      if (isDecorative) {
        return {
          accessible: false,
          accessibilityElementsHidden: true,
          importantForAccessibility: 'no-hide-descendants' as const,
        };
      }

      return {
        accessible: true,
        accessibilityRole: 'image' as const,
        accessibilityLabel: props.accessibilityLabel || iconDescription || 'Icon',
        accessibilityHint: iconDescription ? undefined : 'Decorative icon',
      };
    };

    return (
      <View
        ref={ref}
        className={cn(iconGroupVariants({ variant }), className)}
        {...getAccessibilityProps()}
        {...props}
      >
        {children || (iconUri && (
          <SvgUri
            uri={iconUri}
            width={24}
            height={24}
            accessible={!isDecorative}
            accessibilityLabel={isDecorative ? undefined : (iconDescription || 'Icon')}
          />
        ))}
      </View>
    );
  }
);

IconGroup.displayName = 'IconGroup';

export { IconGroup, iconGroupVariants };