import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../tabs/HomeTab';
import IMCTab from '../tabs/IMCTab';
import ProfileTab from '../tabs/ProfileTab';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from './StackNavigator';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

type TabsNavigatorProps = {
  route: RouteProp<RootStackParamList, 'MainTabs'>;
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: TabsNavigatorProps) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: '#5f0650',
        headerShown: true,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="IMC"
        component={IMCTab}
        options={{
          title: 'Calculadora IMC',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email }}
        options={{
          title: 'Mi Perfil',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}