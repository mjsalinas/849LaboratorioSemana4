import { View, StyleSheet } from "react-native";
import CustomInput from "../components/CustomInput";

import { useState } from "react";
import CustomButton from "../components/CustomButton";

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password.length >= 4) {
      navigation.navigate('MainTabs', { email });
    }
  };


  return (
    <View style={styles.container}>
      <CustomInput
        placeholder={"Ingresa tu correo"}
        value={email}
        onChange={setEmail}
      />

      <CustomInput
        type={"password"}
        placeholder={"Ingresa tu contraseña"}
        value={password}
        onChange={setPassword}
      />
      <CustomButton title={"Iniciar Sesion"} onPress={handleLogin} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
});