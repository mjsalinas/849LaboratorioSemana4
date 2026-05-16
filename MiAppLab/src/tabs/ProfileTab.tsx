import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import CustomButton from '../components/CustomButton';
import { navigationRef } from '../navigation/NavigationService';

export default function ProfileTab({ route }: any) {
  const { email } = route.params;

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
      <View style={styles.profileCard}>
        <Ionicons name="person-circle" size={110} color="#5f0650" />
        <Text style={styles.title}>Mi Perfil</Text>
        <Text style={styles.emailLabel}>Correo Conectado:</Text>
        <Text style={styles.emailText}>{email}</Text>
      </View>

      <View style={styles.actionContainer}>
        <CustomButton
          title="Cerrar sesión"
          onPress={handleLogout}
          variant="danger"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  profileCard: {
    alignItems: 'center',
    marginBottom: 40,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#5f0650',
    marginTop: 10,
  },
  emailLabel: {
    fontSize: 14,
    color: '#777',
    marginTop: 16,
  },
  emailText: {
    fontSize: 18,
    fontWeight: '500',
    color: '#222',
    marginTop: 4,
  },
  actionContainer: {
    width: '100%',
    maxWidth: 200,
  },
});