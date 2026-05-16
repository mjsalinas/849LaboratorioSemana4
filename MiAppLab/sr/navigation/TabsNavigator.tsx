import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";

export type TabsParamList = {
  Inicio: { email: string };
  IMC: undefined;
  Perfil: { email: string };
};

const Tabs = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: any) {
  const email = route?.params?.email;

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5f0650",
        tabBarIcon: ({ color, size }: any) => {
          const icon =
            route.name === "Inicio"
              ? "home"
              : route.name === "IMC"
              ? "calculator"
              : "person";

          return <Ionicons name={icon} size={size} color={color} />;
        },
      })}
    >
      <Tabs.Screen
        name="Inicio"
        component={HomeTab}
        initialParams={{ email }}
      />

      <Tabs.Screen name="IMC" component={IMCTab} />

      <Tabs.Screen
        name="Perfil"
        component={ProfileTab}
        initialParams={{ email }}
      />
    </Tabs.Navigator>
  );
}