import React from 'react';
import { NavigationContainer, createNavigationContainerRef } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { View, Text } from 'react-native';

// Local fallback StackNavigator in case the external file is missing
const Stack = createNativeStackNavigator();

const HomeScreen = () => (
  <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
    <Text>Home</Text>
  </View>
);

export const navigationRef = createNavigationContainerRef<any>();

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}