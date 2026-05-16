import { View } from "react-native";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";
import { useState } from "react";

export default function LoginScreen({navigation} :any){
    const [email, setEmail]=useState("");
    const [password, setPasword]=useState("");

    const handleLogin = () => {
        if (email && password.length >= 4) {
            navigation.navigate('MainTabs', { email });
        }
    };

    return(
        <View>
            <CustomInput type={"email"} placeholder={ "Ingresa tu correo"} value={email} onChange={setEmail}/>
            <CustomInput type={"password"} placeholder={"Ingresaa tu contraseña"} value={password} onChange={setPasword}/>
            <CustomButton title={"Iniciaar session"} onPress={ handleLogin  }/>
        </View>

    );
};
