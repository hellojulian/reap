import * as React from 'react';
import { View, type ViewProps, Pressable, Vibration } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { TextGroup } from './text-group';
import { IconGroup } from './icon-group';

const listItemVariants = cva('flex flex-row items-center justify-between w-full', {
  variants: {},
  defaultVariants: {},
});

export interface ListItemProps
  extends ViewProps,
    VariantProps<typeof listItemVariants> {
  className?: string;
  // Left section props
  iconVariant?: 'red' | 'blue' | 'green';
  iconUri?: string;
  iconChildren?: React.ReactNode;
  title?: string;
  subtitle?: string;
  // Right section props
  amount?: string;
  currency?: string;
  rightLabel?: string;
  rightDescription?: string;
  // Interaction props
  onPress?: () => void;
  hapticFeedback?: boolean;
  disabled?: boolean;
}

const ListItem = React.forwardRef<View, ListItemProps>(
  ({
    className,
    iconVariant = 'red',
    iconUri,
    iconChildren,
    title = 'Costa Coffee',
    subtitle = 'Physical',
    amount = '10.00',
    currency = 'USD',
    rightLabel,
    rightDescription,
    onPress,
    hapticFeedback = true,
    disabled = false,
    ...props
  }, ref) => {
    const [isPressed, setIsPressed] = React.useState(false);

    const handlePress = () => {
      if (disabled || !onPress) return;
      
      if (hapticFeedback) {
        Vibration.vibrate(50);
      }
      onPress();
    };

    const content = (
      <>
        {/* Left section with icon and text */}
        <View className="flex flex-row items-start gap-2 flex-1">
          <IconGroup
            variant={iconVariant}
            iconUri={iconUri}
            className="w-10 h-10"
            isDecorative={false}
          >
            {iconChildren}
          </IconGroup>
          
          <TextGroup
            variant="vertical"
            label={title}
            description={subtitle}
            hasLabel={!!title}
            hasDescription={!!subtitle}
            className="flex-1"
          />
        </View>

        {/* Right section with amount and currency */}
        <TextGroup
          variant="horizontal"
          label={rightLabel || amount}
          description={rightDescription || currency}
          hasLabel={!!(rightLabel || amount)}
          hasDescription={!!(rightDescription || currency)}
          className="gap-1"
        />
      </>
    );

    if (onPress) {
      return (
        <Pressable
          ref={ref as any}
          className={cn(
            listItemVariants(), 
            className,
            disabled && 'opacity-50'
          )}
          onPress={handlePress}
          onPressIn={() => setIsPressed(true)}
          onPressOut={() => setIsPressed(false)}
          disabled={disabled}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={props.accessibilityLabel || `${title}, ${subtitle}, ${rightLabel || amount} ${rightDescription || currency}`}
          accessibilityHint="Double tap to select this item"
          accessibilityState={{
            disabled,
            selected: isPressed
          }}
          hitSlop={{ top: 8, bottom: 8, left: 0, right: 0 }}
          style={[
            { 
              minHeight: 56,
              paddingVertical: 12,
              backgroundColor: isPressed ? 'rgba(0, 0, 0, 0.05)' : 'transparent' 
            }
          ]}
          {...props}
        >
          {content}
        </Pressable>
      );
    }

    return (
      <View
        ref={ref}
        className={cn(listItemVariants(), className)}
        accessible={true}
        accessibilityRole="group"
        accessibilityLabel={props.accessibilityLabel || `${title}, ${subtitle}, ${rightLabel || amount} ${rightDescription || currency}`}
        style={{ minHeight: 56, paddingVertical: 12 }}
        {...props}
      >
        {content}
      </View>
    );
  }
);

ListItem.displayName = 'ListItem';

export { ListItem, listItemVariants };