import * as React from 'react';
import { View, type ViewProps, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Text } from './text';
import { SvgUri } from 'react-native-svg';

const textHeaderVariants = cva('flex flex-row items-center justify-between w-full', {
  variants: {},
  defaultVariants: {},
});

export interface TextHeaderProps
  extends ViewProps,
    VariantProps<typeof textHeaderVariants> {
  className?: string;
  title?: string;
  hasIcon?: boolean;
  iconUri?: string;
  children?: React.ReactNode;
  headingLevel?: 1 | 2 | 3 | 4 | 5 | 6;
  onIconPress?: () => void;
}

const TextHeader = React.forwardRef<View, TextHeaderProps>(
  ({
    className,
    title = 'Hola, James',
    hasIcon = true,
    iconUri = 'http://localhost:3845/assets/29a30bdf2e8bf57b70fcb4ffb911cf575fe45471.svg',
    children,
    headingLevel = 1,
    onIconPress,
    ...props
  }, ref) => {
    const iconElement = hasIcon && (
      onIconPress ? (
        <Pressable
          className="w-12 h-12 items-center justify-center rounded-full"
          onPress={onIconPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel="Header action button"
          accessibilityHint="Double tap to activate"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          {children || (iconUri && (
            <SvgUri
              uri={iconUri}
              width={24}
              height={24}
            />
          ))}
        </Pressable>
      ) : (
        <View 
          className="w-6 h-6 items-center justify-center"
          accessible={true}
          accessibilityRole="image"
          accessibilityLabel="Header icon"
        >
          {children || (iconUri && (
            <SvgUri
              uri={iconUri}
              width={24}
              height={24}
            />
          ))}
        </View>
      )
    );

    return (
      <View
        ref={ref}
        className={cn(textHeaderVariants(), className)}
        accessible={true}
        accessibilityRole="header"
        accessibilityLabel={props.accessibilityLabel || `Heading level ${headingLevel}, ${title}`}
        {...props}
      >
        <Text
          variant="header"
          size="header"
          semanticRole="header"
          headingLevel={headingLevel}
        >
          {title}
        </Text>
        
        {iconElement}
      </View>
    );
  }
);

TextHeader.displayName = 'TextHeader';

export { TextHeader, textHeaderVariants };