import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../screens/Tabs/HomeTab';
import IMCTab from '../screens/Tabs/IMCTab';
import ProfileTab from '../screens/Tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: any) {
  // Extraemos el email que viene desde el Login para pasarlo a las pestañas
  const email = route?.params?.params?.email || route?.params?.email || 'usuario@correo.com';

  return (
    <Tab.Navigator screenOptions={{ tabBarActiveTintColor: '#5f0650' }}>
      <Tab.Screen 
        name="Inicio" 
        component={HomeTab} 
        initialParams={{ email }}
        options={{ tabBarIcon: ({color, size}) => <Ionicons name="home" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="IMC" 
        component={IMCTab} 
        options={{ tabBarIcon: ({color, size}) => <Ionicons name="calculator" size={size} color={color} /> }} 
      />
      <Tab.Screen 
        name="Perfil" 
        component={ProfileTab} 
        initialParams={{ email }}
        options={{ tabBarIcon: ({color, size}) => <Ionicons name="person" size={size} color={color} /> }} 
      />
    </Tab.Navigator>
  );
}