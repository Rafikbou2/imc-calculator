// app/confirmation.tsx
import { View, Text, StyleSheet } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function ConfirmationScreen() {
  const { nom, prenom, age } = useLocalSearchParams();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Nom : {nom}</Text>
      <Text style={styles.text}>Prénom : {prenom}</Text>
      <Text style={styles.text}>Âge : {age}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    marginBottom: 10,
  },
});
