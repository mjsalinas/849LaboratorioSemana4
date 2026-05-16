import { NavigationContainer } from '@react-navigation/native';
import { TouchableWithoutFeedback, Keyboard, View } from 'react-native';
import StackNavigator from './src/navigation/StackNavigator';
import { navigationRef } from './src/navigation/NavigationService';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={{ flex: 1 }}> 
        <NavigationContainer ref={navigationRef}>
          <StackNavigator />
        </NavigationContainer>
      </View>
    </TouchableWithoutFeedback>
  );
}