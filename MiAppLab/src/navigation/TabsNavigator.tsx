import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { RootStackParamList } from './StackNavigator';
import HomeTab from '../screens/tabs/HomeTab';
import IMCTab from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tabs = createBottomTabNavigator<TabsParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

export default function TabsNavigator({ route }: Props) {
const { email } = route.params;

return (
<Tabs.Navigator
screenOptions={({ route }) => ({
headerShown: false,
tabBarActiveTintColor: '#5f0650',
tabBarIcon: ({ color, size }) => {
const icon =
route.name === 'Inicio' ? 'home' :
route.name === 'IMC' ? 'calculator' : 'person';
return <Ionicons name={icon} size={size} color={color} />;
},
})}
>
<Tabs.Screen name='Inicio' component={HomeTab} initialParams={{ email }} />
<Tabs.Screen name='IMC' component={IMCTab} />
<Tabs.Screen name='Perfil' component={ProfileTab} initialParams={{ email }} />
</Tabs.Navigator>
);
}