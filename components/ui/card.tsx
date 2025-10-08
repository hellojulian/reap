import * as React from 'react';
import { View, ImageBackground, type ViewProps, Pressable } from 'react-native';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
import { Text } from './text';

const cardVariants = cva(
  'relative rounded-xl border-2 border-zinc-200 overflow-hidden',
  {
    variants: {
      size: {
        default: 'w-80 h-48',
        large: 'w-96 h-60',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

export interface CardProps
  extends ViewProps,
    VariantProps<typeof cardVariants> {
  className?: string;
  backgroundImage?: any;
  brand?: string;
  cardType?: string;
  cardNumber?: string;
  showCardNumber?: boolean;
  amount?: string;
  currency?: string;
  availableLabel?: string;
  paymentNetwork?: string;
  children?: React.ReactNode;
  isInteractive?: boolean;
  onPress?: () => void;
}

const Card = React.forwardRef<View, CardProps>(
  ({
    className,
    size = 'default',
    backgroundImage,
    brand = 'REAP',
    cardType = 'Physical',
    cardNumber = '•••• 4567',
    showCardNumber = true,
    amount = '$24,000.00',
    currency = 'HKD',
    availableLabel = 'Available to spend',
    paymentNetwork = 'VISA Platinum Business',
    children,
    isInteractive = false,
    onPress,
    ...props
  }, ref) => {
    const cardImageSource = backgroundImage || require('../../assets/card.png');

    const cardContent = (
      <ImageBackground
        source={cardImageSource}
        className="flex-1 justify-between p-6"
        resizeMode="cover"
      >
        {/* Top row - Brand and Card Type */}
        <View className="flex-row justify-between items-start">
          <Text
            variant="header"
            size="header"
            className="text-white font-bold"
            semanticRole="header"
            headingLevel={3}
          >
            {brand}
          </Text>
          <Text
            variant="description"
            size="description"
            className="text-white/80"
          >
            {cardType}
          </Text>
        </View>

        {/* Middle section - Card Number */}
        {showCardNumber && (
          <View className="flex-row items-center gap-2">
            <Text
              variant="label"
              size="label"
              className="text-white font-mono tracking-wider"
              accessibilityLabel={`Card ending in ${cardNumber.slice(-4)}`}
            >
              {cardNumber}
            </Text>
            <View className="w-4 h-4 bg-white/20 rounded-full" />
          </View>
        )}

        {/* Bottom section - Amount and Payment Network */}
        <View className="flex-row justify-between items-end">
          <View>
            <Text
              variant="description"
              size="description"
              className="text-white/80 mb-1"
            >
              {availableLabel} ({currency})
            </Text>
            <Text
              variant="header"
              size="header"
              className="text-white font-bold"
              accessibilityLabel={`${amount} ${currency} available`}
            >
              {amount}
            </Text>
          </View>
          <Text
            variant="description"
            size="description"
            className="text-white/90 font-semibold"
          >
            {paymentNetwork}
          </Text>
        </View>

        {children}
      </ImageBackground>
    );

    if (isInteractive && onPress) {
      return (
        <Pressable
          ref={ref as any}
          className={cn(cardVariants({ size }), className)}
          onPress={onPress}
          accessible={true}
          accessibilityRole="button"
          accessibilityLabel={props.accessibilityLabel || `${brand} ${cardType} card button, ${availableLabel} ${amount} ${currency}`}
          accessibilityHint="Double tap to view card details"
          {...props}
        >
          {cardContent}
        </Pressable>
      );
    }

    return (
      <View
        ref={ref}
        className={cn(cardVariants({ size }), className)}
        accessible={true}
        accessibilityRole="group"
        accessibilityLabel={props.accessibilityLabel || `${brand} ${cardType} card, ${availableLabel} ${amount} ${currency}`}
        {...props}
      >
        {cardContent}
      </View>
    );
  }
);

Card.displayName = 'Card';

export { Card, cardVariants };