import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";

type Props = {
  email: string;
};

export default function HomeTab({ email }: Props) {

  return (
    <View style={styles.container}>
      <Text>Bienvenido</Text>
      <Text>{email}</Text>

      <CustomButton
        title="Ir a IMC"
        onPress={() => {}}
        variant="secondary"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});