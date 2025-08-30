// app/index.tsx
import React from 'react';
import { View, Text, Button, StyleSheet, ImageBackground } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <ImageBackground
      source={require('../../assets/images/benv.png')} // Vérifie bien que ce chemin est correct
      style={styles.background}
      resizeMode="cover"
    >
      <LinearGradient
        colors={['rgba(20, 100, 250, 0.25)', 'rgba(255,255,255,0.5)']}
        style={styles.gradient}
      >
        <Text style={styles.title}>Bienvenue </Text>
        <Text style={styles.subtitle}>Calculateur d’IMC</Text>
        <View style={styles.buttonContainer}>
          <Button title="Commencer" onPress={() => router.push('/input')} color="#007AFF" />
        </View>
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'rgb(247, 247, 247)', 
    marginBottom: 17,
  },
  subtitle: {
    fontSize: 38,
    color: 'rgb(247, 247, 247)', 
    marginBottom: 30,
  },
  buttonContainer: {
    fontSize: 100,
    width: 200,
  },
});

