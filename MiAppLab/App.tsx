import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "./sr/navigation/StackNavigator";
import { navigationRef } from "./sr/navigation/NavigationService";

export default function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <StackNavigator />
    </NavigationContainer>
  );
}