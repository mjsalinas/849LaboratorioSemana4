import { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";

export default function IMCCalculator() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  const calcular = () => {
    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;

    if (!isNaN(p) && !isNaN(a)) {
      setResultado(p / (a * a));
    }
  };

  return (
    <View style={styles.container}>
      <Text>IMC</Text>

      <CustomInput
        type="number"
        placeholder="Peso"
        value={peso}
        onChange={setPeso}
      />

      <CustomInput
        type="number"
        placeholder="Altura"
        value={altura}
        onChange={setAltura}
      />

      <CustomButton title="Calcular" onPress={calcular} />

      {resultado && <Text>{resultado}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
});