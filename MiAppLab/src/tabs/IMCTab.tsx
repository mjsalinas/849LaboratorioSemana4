import React, { useState } from 'react';
import { View, Text, StyleSheet, Keyboard } from 'react-native';
import CustomInput from '../components/CustomInput';
import CustomButton from '../components/CustomButton';

export default function IMCTab() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [resultado, setResultado] = useState<number | null>(null);

  const calcularIMC = () => {
    Keyboard.dismiss();

    const p = parseFloat(peso);
    const a = parseFloat(altura) / 100;

    if (p > 0 && a > 0) {
      const imc = p / (a * a);
      setResultado(Math.round(imc * 10) / 10);
    }
  };

  const getCategoria = (imc: number) => {
    if (imc < 18.5) return { label: 'Bajo peso', color: '#3498db' };
    if (imc < 25) return { label: 'Peso Normal', color: '#27ae60' };
    if (imc < 30) return { label: 'Sobrepeso', color: '#e67e22' };
    return { label: 'Obesidad', color: '#c0392b' };
  };

  const categoriaActual = resultado !== null ? getCategoria(resultado) : null;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Calculadora de IMC</Text>
      <Text style={styles.subtitle}>Introduce tus datos para conocer tu estado de salud</Text>

      <View style={styles.form}>
        <CustomInput
          type="number"
          placeholder="Peso en kilogramos (ej. 75)"
          value={peso}
          onChange={setPeso}
        />
        <CustomInput
          type="number"
          placeholder="Altura en centímetros (ej. 175)"
          value={altura}
          onChange={setAltura}
        />
        <CustomButton 
          title="Calcular IMC" 
          onPress={calcularIMC} 
        />
      </View>

      {resultado !== null && categoriaActual && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Tu Índice de Masa Corporal es:</Text>
          <Text style={styles.resultNumber}>{resultado}</Text>
          <Text style={[styles.resultCategory, { color: categoriaActual.color }]}>
            {categoriaActual.label}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5f0650',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  form: {
    width: '100%',
  },
  resultContainer: {
    alignItems: 'center',
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
    backgroundColor: '#f8f9fa',
    borderWidth: 1,
    borderColor: '#eee',
  },
  resultLabel: {
    fontSize: 14,
    color: '#555',
  },
  resultNumber: {
    fontSize: 54,
    fontWeight: 'bold',
    color: '#5f0650',
    marginVertical: 4,
  },
  resultCategory: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});