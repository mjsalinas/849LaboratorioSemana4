import React, { ComponentProps } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RouteProp } from '@react-navigation/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './StackNavigator';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// 1. Tipado de los parámetros que requiere cada Tab
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

// Tipamos las props que recibe el TabsNavigator desde el StackNavigator
type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export default function TabsNavigator({ route }: Props) {
  // Extraemos el email que mandó la pantalla de Login
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: ComponentProps<typeof Ionicons>['name'] = 'home';

          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'IMC') iconName = 'calculator';
          else if (route.name === 'Perfil') iconName = 'person';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: 'gray',
        headerShown: true,
      })}
    >
      <Tab.Screen 
        name="Inicio" 
        component={HomeTab} 
        initialParams={{ email }} 
      />
      <Tab.Screen 
        name="IMC" 
        component={IMCTab} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileTab} 
        initialParams={{ email }} 
      />
    </Tab.Navigator>
  );
}