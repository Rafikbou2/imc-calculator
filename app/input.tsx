// app/input.tsx
import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

export default function InputScreen() {
  const router = useRouter();
  const [poids, setPoids] = useState('');
  const [taille, setTaille] = useState('');

  const handleSubmit = () => {
    const p = parseFloat(poids);
    const t = parseFloat(taille) / 100; 

    if (!isNaN(p) && !isNaN(t) && t > 0) {
      const imc = (p / (t * t)).toFixed(2);
      router.push({
        pathname: '/re',
        params: { imc },
      });
    } else {
      alert("Veuillez entrer des valeurs valides.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Poids (kg)</Text>
      <TextInput
        style={styles.input}
        value={poids}
        onChangeText={setPoids}
        keyboardType="numeric"
        placeholder="Ex: 70"
      />

      <Text style={styles.label}>Taille (cm)</Text>
      <TextInput
        style={styles.input}
        value={taille}
        onChangeText={setTaille}
        keyboardType="numeric"
        placeholder="Ex: 175"
      />

      <Button title="Calculer l'IMC" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: 'rgba(19, 124, 243, 0.65)',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(247, 247, 247)', 
    marginBottom: 17,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    color: 'rgb(247, 247, 247)', 
  },
  input: {
    borderWidth: 1,
    borderColor: 'rgb(255, 255, 255)',
    padding: 20,
    marginBottom: 20,
    borderRadius: 8,
  },
});

