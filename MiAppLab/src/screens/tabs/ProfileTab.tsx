import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import { navigationRef } from "../../navigation/NavigationService";

type Props = {
  email: string;
};

export default function ProfileTab({ email }: Props) {
  const handleLogout = () => {
    if (navigationRef.isReady()) {
      navigationRef.reset({
        //indice del arreglo routes, que indica la vista actual al momento reset el stack de navegacion
        index: 0,
        //es un arreglo de objetos, para el cual cada objeto representa una ruta en el nuevo historial del stack
        routes: [{ name: "Login" }],
      });
    }
  };
  return (
    <View style={styles.container}>
      <Text>Perfil</Text>
      <Text>{email}</Text>

      <CustomButton
        title="Cerrar sesión"
        onPress={() => {
          handleLogout();
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
