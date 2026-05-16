import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import HomeTab from "../screens/tabs/HomeTab";
import IMCTab from "../screens/tabs/IMCTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import type { RootStackParamList } from "./StackNavigator";


export type TabsParamList={
    Inicio: {email:string};
    IMC: undefined;
    Perfil: {email:string};
}

type Props = NativeStackScreenProps<RootStackParamList, "MainTabs">;

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: Props){
const { email } = route.params;

    return(
        <Tab.Navigator
        initialRouteName="Inicio"
        screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5f0650",
        tabBarInactiveTintColor: "#888888",

        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === "Inicio") {
            iconName = "home";
          } else if (route.name === "IMC") {
            iconName = "calculator";
          } else {
            iconName = "person";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
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
