import { View, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function LoginScreen({navigation}:any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        try{
            if (email && password) {
                navigation.navigate('MainTabs', {email});
            }
        }catch (error){
            console.log(error);
        }
    }

    return(
        <View style={styles.container}>
            <CustomInput type="email" 
            placeholder={"Ingresa tu correo"} 
            value={email} 
            onChange={setEmail}/>

            <CustomInput type="password" 
            placeholder={"Ingresa tu contraseña"} 
            value={password} 
            onChange={setPassword}/>
            
            <CustomButton title={"Iniciar Sesion"} 
            onPress={handleLogin}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
    },
});