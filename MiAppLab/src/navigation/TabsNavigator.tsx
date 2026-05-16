import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTab from "../screens/tabs/HomeTab";
import ProfileTab from "../screens/tabs/ProfileTab";
import IMCCalculator from "../screens/tabs/IMCTab";
import { Ionicons } from "@expo/vector-icons";
import { RouteProp } from "@react-navigation/native";
import { RootStackParamList } from "./StackNavigator";

export type TabsParamList = {
  homeTab: undefined;
  ImcTab: undefined;
  profileTab: undefined;
};

const Tab = createBottomTabNavigator<TabsParamList>();

type Props = {
  route: RouteProp<RootStackParamList, "MainTabs">;
};

export default function TabsNavigator({ route }: Props) {
  const { email } = route.params;

  return (
    <Tab.Navigator>
      <Tab.Screen
        name="homeTab"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      >
        {() => <HomeTab email={email} />}
      </Tab.Screen>

      <Tab.Screen name="profileTab"
      
        options={{
          title: "Profile",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      
      >
        {() => <ProfileTab email={email} />}
      </Tab.Screen>

      <Tab.Screen name="ImcTab" component={IMCCalculator} 
      
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="calculator" size={size} color={color} />
          ),
        }}
      
      />
    </Tab.Navigator>
  );
}
