import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";
import { RootStackParamList } from "./StackNavigator";
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import { RouteProp } from "@react-navigation/native";

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

type Props = {
  route: RouteProp<RootStackParamList, "MainTabs">;
};
const Tab = createBottomTabNavigator<TabsParamList>();

//3. Utiliza el tab navigator
export default function TabsNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: "#ff0000",
      }}
    >
      <Tab.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
        options={{
          title: "Mi Inicio",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="IMC"
        component={IMCTab}
        options={{
          title: "Mi IMC",
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="accessibility" size={size} color={color} />
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
            <MaterialIcons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
