import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Importaciones corregidas
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: { email?: string };
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: any) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: '#888',
        tabBarStyle: { paddingBottom: 8, paddingTop: 8, height: 60 },
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} /> }}
      />

      <Tab.Screen
        name="IMC"
        component={IMCTab}
        initialParams={{ email }}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="calculator" size={size} color={color} /> }}
      />

      <Tab.Screen
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email }}
        options={{ tabBarIcon: ({ color, size }) => <Ionicons name="person" size={size} color={color} /> }}
      />
    </Tab.Navigator>
  );
}