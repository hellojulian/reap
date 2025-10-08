import { useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const THEME_STORAGE_KEY = '@theme_preference';

export type ThemeMode = 'light' | 'dark' | 'system';

export function useThemeToggle() {
  const systemColorScheme = useColorScheme();
  const [themeMode, setThemeMode] = useState<ThemeMode>('light');
  
  // Calculate the actual theme being used
  const actualTheme = themeMode === 'system' ? systemColorScheme : themeMode;
  
  // Debug when state changes
  useEffect(() => {
    console.log('useThemeToggle - themeMode changed to:', themeMode, 'actualTheme:', actualTheme);
  }, [themeMode, actualTheme]);
  
  useEffect(() => {
    // Load saved theme preference
    const loadTheme = async () => {
      try {
        const savedTheme = await AsyncStorage.getItem(THEME_STORAGE_KEY);
        if (savedTheme && (savedTheme === 'light' || savedTheme === 'dark' || savedTheme === 'system')) {
          setThemeMode(savedTheme as ThemeMode);
        }
      } catch (error) {
        console.log('Error loading theme preference:', error);
      }
    };
    
    loadTheme();
  }, []);
  
  const toggleTheme = async () => {
    const newTheme: ThemeMode = actualTheme === 'light' ? 'dark' : 'light';
    console.log('Toggling from', actualTheme, 'to', newTheme);
    console.log('Before setThemeMode - current themeMode:', themeMode);
    setThemeMode(newTheme);
    console.log('After setThemeMode - themeMode should be:', newTheme);
    
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, newTheme);
      console.log('Theme saved to storage:', newTheme);
    } catch (error) {
      console.log('Error saving theme preference:', error);
    }
  };
  
  const setTheme = async (mode: ThemeMode) => {
    setThemeMode(mode);
    
    try {
      await AsyncStorage.setItem(THEME_STORAGE_KEY, mode);
    } catch (error) {
      console.log('Error saving theme preference:', error);
    }
  };
  
  return {
    themeMode,
    actualTheme,
    toggleTheme,
    setTheme,
    isLight: actualTheme === 'light',
    isDark: actualTheme === 'dark',
  };
}