import { createBottomTabNavigator, BottomTabScreenProps } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import ProfileTab from "../screens/tabs/ProfileTab";
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./StackNavigator";

//1. declarar tipado para pantallas y sus parametros
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

//3. utilizar el tab navigator
export default function TabNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5f0650",
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="IMC"
        component={IMCTab}
        options={{
          title: "IMC",
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
          title: "Mi Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}