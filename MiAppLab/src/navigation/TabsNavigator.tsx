import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

// 1. DEFINIMOS Y EXPORTAMOS EL PARAM LIST EXACTO QUE BUSCA HOMETAB
export type TabsParamList = {
  Inicio: { email: string }; // Recibe el email
  IMC: undefined;
  Perfil: { email: string }; // Recibe el email
};

const Tab = createBottomTabNavigator<TabsParamList>();

type TabsNavigatorProps = {
  route: {
    params: {
      email: string;
    };
  };
};

export default function TabsNavigator({ route }: TabsNavigatorProps) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: 'home' | 'calculator' | 'person' = 'home';

          if (route.name === 'Inicio') {
            iconName = 'home';
          } else if (route.name === 'IMC') {
            iconName = 'calculator';
          } else if (route.name === 'Perfil') {
            iconName = 'person';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#5f0650',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
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