import * as React from 'react';
import { View, ScrollView, type ViewProps } from 'react-native';
import { cn } from '../../lib/utils';
import { TextHeader } from '../ui/text-header';
import { Card } from '../ui/card';
import { ListItem } from '../ui/list-item';
import { Button } from '../ui/button';
import { IconGroup } from '../ui/icon-group';

// Sample transaction data
const transactions = [
  {
    id: '1',
    title: 'Coffee Shop',
    subtitle: 'Physical',
    amount: '10.00',
    currency: 'USD',
    iconVariant: 'red' as const,
  },
  {
    id: '2',
    title: 'Ebay',
    subtitle: 'Physical',
    amount: '310.00',
    currency: 'USD',
    iconVariant: 'green' as const,
  },
  {
    id: '3',
    title: 'Netflix',
    subtitle: 'Physical',
    amount: '6.00',
    currency: 'USD',
    iconVariant: 'blue' as const,
  },
];

export interface LightScreenProps extends ViewProps {
  className?: string;
  userName?: string;
  onViewAllTransactions?: () => void;
  onTransactionPress?: (transactionId: string) => void;
}

const LightScreen = React.forwardRef<View, LightScreenProps>(
  ({
    className,
    userName = 'James',
    onViewAllTransactions,
    onTransactionPress,
    ...props
  }, ref) => {
    return (
      <View
        ref={ref}
        className={cn('flex-1 bg-white', className)}
        accessible={true}
        accessibilityRole="main"
        accessibilityLabel="Dashboard screen"
        {...props}
      >
        <ScrollView
          className="flex-1"
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 32,
            paddingBottom: 48,
          }}
          showsVerticalScrollIndicator={false}
        >
          {/* Theme indicator */}
          <View className="mb-6">
            <IconGroup
              variant="blue"
              iconUri="http://localhost:3845/assets/946547e3519a029c97c36585a6179b94b1d76521.svg"
              className="w-6 h-6 bg-transparent"
              accessibilityLabel="Light theme active"
            />
          </View>

          {/* Header with greeting */}
          <View className="mb-6">
            <TextHeader
              title={`Hola, ${userName}`}
              hasIcon={true}
              iconUri="http://localhost:3845/assets/29a30bdf2e8bf57b70fcb4ffb911cf575fe45471.svg"
              accessibilityLabel={`Welcome ${userName}, credit card management`}
            />
          </View>

          {/* Card section */}
          <View className="mb-6">
            <Card
              brand="REAP"
              cardType="Physical"
              cardNumber="•••• 4567"
              amount="$24,000.00"
              currency="HKD"
              availableLabel="Available to spend"
              paymentNetwork="VISA Platinum Business"
              accessibilityLabel="REAP Physical card, Available to spend 24,000.00 HKD"
            />
          </View>

          {/* All Transactions header */}
          <View className="mb-6">
            <TextHeader
              title="All Transactions"
              hasIcon={true}
              iconUri="http://localhost:3845/assets/29a30bdf2e8bf57b70fcb4ffb911cf575fe45471.svg"
              accessibilityLabel="All Transactions section"
            />
          </View>

          {/* Transaction list */}
          <View className="gap-4 mb-6">
            {transactions.map((transaction) => (
              <ListItem
                key={transaction.id}
                iconVariant={transaction.iconVariant}
                iconUri="http://localhost:3845/assets/d4e8ec14b11d071301d5fa1e2dc775d29736e48b.svg"
                title={transaction.title}
                subtitle={transaction.subtitle}
                amount={transaction.amount}
                currency={transaction.currency}
                onPress={() => onTransactionPress?.(transaction.id)}
                accessibilityLabel={`${transaction.title} transaction, ${transaction.subtitle}, ${transaction.amount} ${transaction.currency}`}
              />
            ))}
          </View>

          {/* View All Transactions button */}
          <Button
            variant="primary"
            size="large"
            label="View All Transactions"
            className="w-full"
            onPress={onViewAllTransactions}
            accessibilityLabel="View all transactions"
            accessibilityHint="Opens the complete transaction history"
          />
        </ScrollView>
      </View>
    );
  }
);

LightScreen.displayName = 'LightScreen';

export { LightScreen };