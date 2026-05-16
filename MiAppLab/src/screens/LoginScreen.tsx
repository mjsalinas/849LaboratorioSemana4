import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password.length >= 4) {
      // Navegamos al Tab y le pasamos el email
      navigation.navigate('MainTabs', { screen: 'Inicio', params: { email } });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Iniciar Sesión</Text>
      <CustomInput type="email" placeholder="Correo electrónico" value={email} onChange={setEmail} />
      <CustomInput type="password" placeholder="Contraseña" value={password} onChange={setPassword} />
      <CustomButton title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 24, justifyContent: 'center' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#5f0650', textAlign: 'center', marginBottom: 30 }
});