import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "./StackNavigator";

//1. declarar tipado para pantallas y sus parametros
export type TabsParamList = {
  Home: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

type Props = NativeStackScreenProps<RootStackParamList, 'MainTabs'>;

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el tab navigator
export default function TabNavigator({route, navigation}: Props) {
const { email } = route.params;
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#5f0650",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeTab}
        initialParams={{ email }}
        options={{
          title: "Mi Perfil",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="IMC"
        component={IMCTab}
        options={{
          title: "Configuraciones",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email }}
        options={{
          title: "Configuraciones",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}