import { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";


export default function LoginScreen({navigation}:any){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (email && password.length >= 4) {
        navigation.navigate('MainTabs', { email });
    }
    };

    return(
        <View style={styles.container}>
            <Text style={styles.title}>Bienvenido a mi App</Text>
            <CustomInput 
            placeholder={"Ingresa Correo"} 
            value={email} 
            onChange={setEmail}>
            </CustomInput>

            <CustomInput 
            placeholder={"Ingresa Contraseña"} 
            value={password} 
            onChange={setPassword}>
            </CustomInput>

            <CustomButton 
            title={"Ingresar"} 
            onPress={handleLogin}>
            </CustomButton>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#ffffff",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 24,
    textAlign: "center",
    color: "#000000",
  },
});
