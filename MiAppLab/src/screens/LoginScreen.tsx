import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
    if (email && email.includes('@') && password.length >= 4) {
      navigation.navigate('MainTabs', { email });
    }
  };

  return (
    <View style={styles.container}>
      <Ionicons name="lock-closed" size={80} color="#5f0650" style={styles.icon} />
      <Text style={styles.title}>Iniciar Sesión</Text>
      
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
        variant="primary" 
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 24, 
    justifyContent: 'center', 
    backgroundColor: '#fff' 
},
  icon: { 
    alignSelf: 'center', 
    marginBottom: 20 
},
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    marginBottom: 24, 
    color: '#5f0650', 
    textAlign: 'center' 
},
});