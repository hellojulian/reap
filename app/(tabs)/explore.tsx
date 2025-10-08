import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Button } from '../../components/ui/button';
import { useTheme } from '../../contexts/theme-context';
import { Smile, Settings, Heart } from 'lucide-react-native';

export default function ButtonsScreen() {
  const { actualTheme, isDark } = useTheme();
  const textColor = isDark ? '#FAFAFA' : '#09090b';
  const backgroundColor = isDark ? '#09090B' : '#ffffff';


  return (
    <View style={[styles.container, { backgroundColor }]}>
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.scrollContent}>
        {/* Primary Buttons */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>Primary Buttons</Text>
          
          <View style={styles.buttonRow}>
            <Button
              variant="primary"
              size="default"
              label="Default Primary"
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="primary"
              size="large"
              label="Large Primary"
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="primary"
              size="default"
              label="With Leading Icon"
              showLeadingIcon={true}
              leadingIcon={<Smile size={16} color="#09090b" />}
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="primary"
              size="default"
              label="Loading State"
              loading={true}
              showLeadingIcon={true}
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="primary"
              size="default"
              label="Disabled State"
              disabled={true}
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Secondary Buttons */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>Secondary Buttons</Text>
          
          <View style={styles.buttonRow}>
            <Button
              variant="secondary"
              size="default"
              label="Default Secondary"
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="secondary"
              size="large"
              label="Large Secondary"
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              variant="secondary"
              size="default"
              label="With Icon"
              showLeadingIcon={true}
              leadingIcon={<Settings size={16} color="#18181b" />}
              onPress={() => {}}
            />
          </View>
        </View>

        {/* Link Buttons */}
        <View style={styles.section}>
          <Text style={[styles.sectionTitle, { color: textColor }]} allowFontScaling={false} maxFontSizeMultiplier={1.0}>Link Buttons</Text>
          
          
          <View style={styles.buttonRow}>
            <Button
              style="secondary"
              variant="link"
              size="default"
              label="Brand Link Button"
              onPress={() => {}}
            />
          </View>
          
          <View style={styles.buttonRow}>
            <Button
              style="secondary"
              variant="link"
              size="default"
              label="Link with Icon"
              showLeadingIcon={true}
              leadingIcon={<Heart size={16} color="#077e7e" />}
              onPress={() => {}}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingTop: 72,
    paddingBottom: 48,
  },
  section: {
    marginBottom: 40,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 16,
    letterSpacing: -0.4,
  },
  buttonRow: {
    marginBottom: 16,
  },
});
