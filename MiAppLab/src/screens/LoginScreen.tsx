import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/StackNavigator";
import CustomInput from "../components/CustomInput";
import CustomButton from "../components/CustomButton";

type Props = NativeStackScreenProps<RootStackParamList, "Login">;
export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email && password.length >= 4) {
      navigation.navigate("MainTabs", { email });
    }
  };

  return (
    <View style={style.container}>
      //email
      <CustomInput
        placeholder={"Correo"}
        value={"email"}
        onChange={() => {
          setEmail;
        }}
      />
      //contra
      <CustomInput
        placeholder={"contrasena"}
        value={"password"}
        onChange={() => {
          setPassword;
        }}
      />
      //Bottom
      <CustomButton
        title={"Login"}
        onPress={()=>{handleLogin}}
      />
    </View>
  );
}

const style=StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
})