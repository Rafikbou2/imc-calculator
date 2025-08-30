import { View, Text, StyleSheet, Button } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ResultScreen() {
  const { imc } = useLocalSearchParams();
  const router = useRouter();

  const imcValue = parseFloat(imc as string);

  const getCategory = (imc: number) => {
    if (imc < 18.5) return 'Insuffisance pondérale';
    if (imc < 25) return 'Corpulence normale';
    if (imc < 30) return 'Surpoids';
    return 'Obésité';
  };

  const getColor = (imc: number) => {
    if (imc < 18.5) return '#3498db';      // bleu
    if (imc < 25) return '#2ecc71';        // vert
    if (imc < 30) return '#f1c40f';        // jaune
    return '#e74c3c';                      // rouge
  };

  const category = getCategory(imcValue);
  const color = getColor(imcValue);

  // Pour positionner un indicateur sur une échelle de 10 à 40
  const percent = Math.min(Math.max(((imcValue - 10) / 30) * 100, 0), 100);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Votre IMC</Text>
      <Text style={styles.imc}>{imcValue.toFixed(1)}</Text>
      <Text style={styles.category}>{category}</Text>

      {/* Indicateur visuel */}
      <View style={styles.indicatorContainer}>
        <View style={styles.track} />
        <View style={[styles.thumb, { left: `${percent}%`, backgroundColor: color }]} />
      </View>

      <Button title="Revenir" onPress={() => router.replace('/input')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:  'rgba(19, 124, 243, 0.65)',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 50,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  imc: {
    fontSize: 70,
    fontWeight: 'bold',
    color: 'rgb(255, 255, 255)',
  },
  category: {
    fontSize: 20,
    marginTop: 10,
    marginBottom: 40,
    color: 'rgba(19, 228, 243, 0.98)',
  },
  indicatorContainer: {
    width: '90%',
    height: 20,
    marginBottom: 30,
    position: 'relative',
  },
  track: {
    position: 'absolute',
    top: 9,
    left: 0,
    right: 0,
    height: 2,
    backgroundColor: '#ccc',
  },
  thumb: {
    position: 'absolute',
    top: 4,
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'blue',
  },
});
