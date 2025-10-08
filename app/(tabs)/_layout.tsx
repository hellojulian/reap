import { Tabs } from 'expo-router';
import React from 'react';
import { House, Grip } from 'lucide-react-native';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#FFFFFF',
        tabBarInactiveTintColor: '#71717A',
        tabBarStyle: {
          backgroundColor: '#09090B',
          borderTopColor: '#27272A',
          borderTopWidth: 1,
        },
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <House size={24} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Buttons',
          tabBarIcon: ({ color }) => <Grip size={24} color={color} />,
        }}
      />
    </Tabs>
  );
}
