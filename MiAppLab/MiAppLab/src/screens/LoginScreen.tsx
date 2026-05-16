import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import CustomButton from "../components/CustomButton";
import CustoInput from "../components/CustomInput";
import { cache, useState } from "react";

export default function LoginScreen({ navigation }: any) {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  //Funcion para Iniciar Seccion
  const handleLogin = () => {
    if (email && password.length >= 4) {
      navigation.navigate("MainTabs", { email });
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <CustoInput
        type={"email"}
        placeholder={"Nombre de Usuario"}
        value={email}
        onChange={setemail}
      />

      <CustoInput
        type={"password"}
        placeholder={"Ingresa tu Contraseña"}
        value={password}
        onChange={setpassword}
      />

      <CustomButton title={"Iniciar Sesion"} onPress={handleLogin} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    alignItems: "stretch",
    justifyContent: "center",
    paddingHorizontal: 24,
  },
});
