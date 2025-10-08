import * as React from 'react';
import { View, type ViewProps } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Text } from './text';

const textGroupVariants = cva('', {
  variants: {
    variant: {
      vertical: 'flex flex-col items-start justify-center',
      horizontal: 'flex flex-row items-center',
    },
  },
  defaultVariants: {
    variant: 'vertical',
  },
});

export interface TextGroupProps
  extends ViewProps,
    VariantProps<typeof textGroupVariants> {
  className?: string;
  label?: string;
  description?: string;
  hasLabel?: boolean;
  hasDescription?: boolean;
}

const TextGroup = React.forwardRef<View, TextGroupProps>(
  ({
    className,
    variant = 'vertical',
    label = 'Text',
    description = 'Text',
    hasLabel = true,
    hasDescription = true,
    ...props
  }, ref) => {
    if (variant === 'horizontal') {
      return (
        <View
          ref={ref}
          className={cn(textGroupVariants({ variant }), className)}
          accessible={true}
          accessibilityRole="group"
          accessibilityLabel={props.accessibilityLabel || (hasLabel && hasDescription ? `${label}, ${description}` : hasLabel ? label : description)}
          {...props}
        >
          {hasDescription && (
            <Text
              variant="description"
              size="description"
              className="mr-4"
            >
              {description}
            </Text>
          )}
          {hasLabel && (
            <Text
              variant="label"
              size="label"
            >
              {label}
            </Text>
          )}
        </View>
      );
    }

    return (
      <View
        ref={ref}
        className={cn(textGroupVariants({ variant }), className)}
        accessible={true}
        accessibilityRole="group"
        accessibilityLabel={props.accessibilityLabel || (hasLabel && hasDescription ? `${label}, ${description}` : hasLabel ? label : description)}
        {...props}
      >
        {hasLabel && (
          <Text
            variant="label"
            size="label"
          >
            {label}
          </Text>
        )}
        {hasDescription && (
          <Text
            variant="description"
            size="description"
          >
            {description}
          </Text>
        )}
      </View>
    );
  }
);

TextGroup.displayName = 'TextGroup';

export { TextGroup, textGroupVariants };