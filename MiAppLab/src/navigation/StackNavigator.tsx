import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import TabsNavigator from './TabsNavigator';

// ==================== TIPADO DEL STACK ====================
export type RootStackParamList = {
  Login: undefined;
  MainTabs: { email: string };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ 
        headerShown: false,
        animation: 'slide_from_right'
      }}
    >
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
      />
      
      <Stack.Screen 
        name="MainTabs" 
        component={TabsNavigator}
        options={{
          gestureEnabled: false,   // Evita volver deslizando el dedo
        }}
      />
    </Stack.Navigator>
  );
}