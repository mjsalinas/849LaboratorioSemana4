import { View, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function LoginScreen ({navigation}:any)
{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = () => {
    if (email && password.length >= 4) {
        try{
            navigation.navigate('MainTabs', { email });

        }catch (error){
            console.log(error);
        }
    }
    };


    return (
        <View style={styles.container}>
            <CustomInput placeholder={'Ingresa tu correo'} value={email} onChange={setEmail}/>

            <CustomInput type={'password'} value={password} placeholder={'Ingresa tu contraseña'} onChange={setPassword}/>

            <CustomButton title={"Ingresar"} onPress={handleLogin}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 10
  },
});