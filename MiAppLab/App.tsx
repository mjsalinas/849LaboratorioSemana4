import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator';
import { navigationRef } from './src/navigation/NavigationService';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StatusBar style="auto" />
      <StackNavigator />
    </NavigationContainer>
  );
}