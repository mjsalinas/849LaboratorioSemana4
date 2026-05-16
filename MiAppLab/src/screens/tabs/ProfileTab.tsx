import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigation/TabsNavigator';

import CustomButton from '../../components/CustomButton';
import { navigationRef } from '../../navigation/NavigationService';

type Props = BottomTabScreenProps<TabsParamList, 'Perfil'>;

export default function ProfileTab({ route }: Props) {
const email = route.params?.email || 'Usuario';

  const handleLogout = () => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        index: 0,
        routes: [{ name: 'Login' }],
      });
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="person-circle" size={110} color="#5f0650" />
      
      <Text style={styles.title}>Mi Perfil</Text>
      <Text style={styles.email}>{email}</Text>

      <Text style={styles.info}>
        Laboratorio clase{'\n'}
      </Text>

      <CustomButton
        title="Cerrar Sesión"
        onPress={handleLogout}
        variant="danger"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#5f0650',
    marginTop: 20,
    marginBottom: 8,
  },
  email: {
    fontSize: 18,
    color: '#444',
    marginBottom: 40,
  },
  info: {
    textAlign: 'center',
    color: '#777',
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 50,
  },
});