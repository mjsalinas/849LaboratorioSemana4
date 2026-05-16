import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { TabsParamList } from '../../navigation/TabsNavigator';

import CustomButton from '../../components/CustomButton';

type Props = BottomTabScreenProps<TabsParamList, 'Inicio'>;

export default function HomeTab({ route, navigation }: Props) {
  const email = route.params?.email || 'Usuario';

  return (
    <View style={styles.container}>
      <Ionicons name="home" size={80} color="#5f0650" />
      
      <Text style={styles.title}>¡Bienvenido/a!</Text>
      <Text style={styles.email}>{email}</Text>
      
      <Text style={styles.description}>
        Presiona el boton para ir a calcular tu peso
      </Text>

      <CustomButton
        title="Ir a Calcular IMC"
        onPress={() => navigation.navigate('IMC' as any)}
        variant="secondary"
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
    marginBottom: 30,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 40,
    lineHeight: 24,
  },
});