import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeTab from '../screens/tabs/HomeTab';
import IMCScreen from '../screens/tabs/IMCTab';
import ProfileTab from '../screens/tabs/ProfileTab';

export type TabsParamList = {

    Inicio: { email: string };

    IMC: undefined;

    Perfil: { email: string };

};

const Tab = createBottomTabNavigator<TabsParamList>();

export default function TabsNavigator({ route }: any) {

    const { email } = route.params;

    return (

        <Tab.Navigator
            screenOptions={({ route }) => ({

                headerShown: false,

                tabBarIcon: ({ color, size }) => {

                    let iconName: any;

                    if (route.name === 'Inicio') {

                        iconName = 'home';

                    } else if (route.name === 'IMC') {

                        iconName = 'fitness';

                    } else if (route.name === 'Perfil') {

                        iconName = 'person';

                    }

                    return (
                        <Ionicons
                            name={iconName}
                            size={size}
                            color={color}
                        />
                    );

                },

            })}
        >

            <Tab.Screen
                name='Inicio'
                component={HomeTab}
                initialParams={{ email }}
            />

            <Tab.Screen
                name='IMC'
                component={IMCScreen}
            />

            <Tab.Screen
                name='Perfil'
                component={ProfileTab}
                initialParams={{ email }}
            />

        </Tab.Navigator>

    );

}