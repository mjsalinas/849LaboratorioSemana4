import { useState } from 'react';
import { TextInput, TouchableOpacity, View, Text, StyleSheet, KeyboardTypeOptions } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';

type Props = {
  type?: 'text' | 'email' | 'password' | 'number';
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
};

export default function CustomInput({ 
  type = 'text', 
  placeholder, 
  value, 
  onChange 
}: Props) {

  const [secure, setSecure] = useState(type === 'password');

  const isPassword = type === 'password';

  const iconName: any = 
    type === 'email' ? 'alternate-email' :
    type === 'password' ? 'lock' :
    type === 'number' ? 'phone-android' : 'text-fields';

  const keyboardType: KeyboardTypeOptions = 
    type === 'email' ? 'email-address' :
    type === 'number' ? 'phone-pad' : 'default';

  const getError = () => {
    if (type === 'email' && value && !value.includes('@')) {
      return 'Correo inválido';
    }
    if (type === 'password' && value && value.length < 4) {
      return 'Contraseña muy corta (mín. 4)';
    }
    if (type === 'number' && value && value.length < 1) {
      return 'Número inválido';
    }
    return null;
  };

  const error = getError();

  return (
    <View style={styles.wrapper}>
      <View style={[styles.container, error ? styles.errorBorder : null]}>
        <MaterialIcons name={iconName} size={22} color="#555" style={styles.icon} />
        
        <TextInput
          placeholder={placeholder}
          value={value}
          onChangeText={onChange}
          style={styles.input}
          secureTextEntry={isPassword && secure}
          keyboardType={keyboardType}
          autoCapitalize={type === 'email' ? 'none' : 'sentences'}
        />

        {isPassword && (
          <TouchableOpacity onPress={() => setSecure(!secure)} style={styles.eyeIcon}>
            <Ionicons 
              name={secure ? 'eye-off' : 'eye'} 
              size={22} 
              color="#555" 
            />
          </TouchableOpacity>
        )}
      </View>

      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    backgroundColor: '#f8f8f8',
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  icon: {
    marginRight: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 4,
  },
  errorBorder: {
    borderColor: 'red',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});