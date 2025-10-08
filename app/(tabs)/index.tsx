import React from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { Coffee, CreditCard, Moon, ShoppingBag, Sun, Tv } from 'lucide-react-native';
import { Button } from '../../components/ui/button';
import { useTheme } from '../../contexts/theme-context';

const transactions = [
  { id: '1', title: 'Coffee Shop', subtitle: 'Physical', amount: '10.00', currency: 'USD', iconBgLight: '#FFE8E4', iconBgDark: '#4A1717', icon: Coffee },
  { id: '2', title: 'Ebay', subtitle: 'Physical', amount: '310.00', currency: 'USD', iconBgLight: '#D1FAE5', iconBgDark: '#0F2A1A', icon: ShoppingBag },
  { id: '3', title: 'Netflix', subtitle: 'Physical', amount: '6.00', currency: 'USD', iconBgLight: '#E0F2FE', iconBgDark: '#0B2B3A', icon: Tv },
];

export default function HomeScreen() {
  const { isDark, toggleTheme } = useTheme();


  const handleViewAllTransactions = () => {
    // Handle view all transactions navigation
  };

  const handleTransactionPress = (id: string) => {
    // Handle individual transaction press
  };

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const textColor = isDark ? '#FAFAFA' : '#09090b';
  const backgroundColor = isDark ? '#09090B' : '#ffffff';

  return (
    <View style={[styles.container, { backgroundColor }]}>
      <Image 
        source={isDark ? require('../../assets/images/bg-dark.png') : require('../../assets/images/bg-light.png')} 
        style={styles.backgroundImage}
        resizeMode="cover"
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={[styles.headerText, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>Hola, James</Text>
          <Pressable onPress={handleThemeToggle} style={styles.themeToggle}>
            {isDark ? (
              <Sun size={24} color={textColor} />
            ) : (
              <Moon size={24} color={textColor} />
            )}
          </Pressable>
        </View>

        {/* Card */}
        <View style={styles.cardContainer}>
          <Image 
            source={require('../../assets/card.png')} 
            style={styles.card}
            resizeMode="cover"
          />
        </View>

        {/* All Transactions Header */}
        <View style={styles.header}>
          <Text style={[styles.headerText, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>All Transactions</Text>
          <CreditCard size={24} color={textColor} />
        </View>

        {/* Transaction List */}
        <View style={styles.transactionList}>
          {transactions.map((transaction) => {
            const IconComponent = transaction.icon;
            const iconBg = isDark ? transaction.iconBgDark : transaction.iconBgLight;
            const iconColor = isDark ? '#FAFAFA' : '#09090b';
            return (
              <Pressable 
                key={transaction.id} 
                style={styles.transactionItem}
                onPress={() => handleTransactionPress(transaction.id)}
              >
                <View style={styles.transactionLeft}>
                  <View style={[styles.transactionIcon, { backgroundColor: iconBg }]}>
                    <IconComponent size={16} color={iconColor} />
                  </View>
                  <View style={styles.transactionText}>
                    <Text style={[styles.transactionTitle, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>{transaction.title}</Text>
                    <Text style={styles.transactionSubtitle} allowFontScaling={false} maxFontSizeMultiplier={1.0}>{transaction.subtitle}</Text>
                  </View>
                </View>
                <View style={styles.transactionRight}>
                  <Text style={styles.transactionCurrency} allowFontScaling={false} maxFontSizeMultiplier={1.0}>{transaction.currency}</Text>
                  <Text style={[styles.transactionAmount, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>{transaction.amount}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>

        {/* View All Button */}
        <Button
          variant="primary"
          size="large"
          label="View All Transactions"
          onPress={handleViewAllTransactions}
        />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 72,
    paddingBottom: 48,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#09090b',
    letterSpacing: -0.6,
  },
  cardContainer: {
    marginBottom: 24,
  },
  card: {
    width: '100%',
    height: 228,
    borderRadius: 8,
    alignSelf: 'center',
  },
  transactionList: {
    gap: 8,
    marginBottom: 24,
  },
  transactionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  transactionLeft: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
    flex: 1,
  },
  transactionIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  transactionText: {
    flex: 1,
  },
  transactionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#09090b',
    letterSpacing: -0.5,
    lineHeight: 28,
  },
  transactionSubtitle: {
    fontSize: 16,
    color: '#71717a',
    lineHeight: 28,
  },
  transactionRight: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  transactionCurrency: {
    fontSize: 16,
    color: '#71717a',
    lineHeight: 28,
  },
  transactionAmount: {
    fontSize: 20,
    fontWeight: '600',
    color: '#09090b',
    letterSpacing: -0.5,
    lineHeight: 28,
  },
  themeToggle: {
    padding: 4,
    borderRadius: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.05)',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%',
  },
});
