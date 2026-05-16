import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/StackNavigator';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';
import { Ionicons } from '@expo/vector-icons';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email.includes('@') && password.length >= 4) {
      navigation.navigate('MainTabs', { email });
    }
  };

  const isFormValid = email.includes('@') && password.length >= 4;

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Ionicons name="lock-closed" size={80} color="#5f0650" />
        <Text style={styles.title}>Bienvenido</Text>
        <Text style={styles.subtitle}>Inicia sesión para continuar</Text>
      </View>

      <View style={styles.form}>
        <CustomInput
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={setEmail}
        />
        <CustomInput
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={setPassword}
        />
        <CustomButton
          title="Iniciar sesión"
          onPress={handleLogin}
          variant={isFormValid ? 'primary' : 'secondary'}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    padding: 24,
  },
  logoContainer: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#5f0650',
    marginTop: 12,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 4,
  },
  form: {
    width: '100%',
  },
});