import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";

//1. declarar tipado para pantallas y sus parametros
export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

//2. crear el tabs navigator el cual se va a manejar la navegacion por pestañas
const Tab = createBottomTabNavigator<TabsParamList>();

//3. utilizar el tab navigator
export default function TabNavigator({ route }: any) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#000",
      }}
    >
      <Tab.Screen
        options={{
          title: "Inicio",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="home" color={color} size={size} />;
          },
        }}
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
      />
      <Tab.Screen
        options={{
          title: "IMC",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="calculate" color={color} size={size} />;
          },
        }}
        name="IMC"
        component={IMCTab}
      />
      <Tab.Screen
        options={{
          title: "Perfil",
          tabBarIcon: ({ color, size }) => {
            return <MaterialIcons name="person" color={color} size={size} />;
          },
        }}
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email }}
      />
    </Tab.Navigator>
  );
}
