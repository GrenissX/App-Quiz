import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

export default function HomeScreen({ onStart }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.iconContainer}>
          <Text style={styles.icon}>🧠</Text>
        </View>

        <Text style={styles.title}>QuizMaster</Text>
        <Text style={styles.subtitle}>Pon a prueba tu conocimiento</Text>

        <View style={styles.infoCard}>
          <Text style={styles.infoTitle}>¿Cómo funciona?</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoEmoji}>📝</Text>
            <Text style={styles.infoText}>10 preguntas de cultura general</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoEmoji}>⏱️</Text>
            <Text style={styles.infoText}>Responde a tu propio ritmo</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoEmoji}>🏆</Text>
            <Text style={styles.infoText}>Acumula puntos y mejora tu record</Text>
          </View>
        </View>

        <TouchableOpacity style={styles.startButton} onPress={onStart}>
          <Text style={styles.startButtonText}>¡Comenzar Quiz!</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  iconContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#16213e',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#e94560',
  },
  icon: {
    fontSize: 50,
  },
  title: {
    fontSize: 38,
    fontWeight: '800',
    color: '#ffffff',
    letterSpacing: 1,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#a0a0b0',
    marginBottom: 40,
  },
  infoCard: {
    backgroundColor: '#16213e',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    marginBottom: 40,
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#e94560',
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoEmoji: {
    fontSize: 20,
    marginRight: 12,
  },
  infoText: {
    fontSize: 15,
    color: '#c0c0d0',
    flex: 1,
  },
  startButton: {
    backgroundColor: '#e94560',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#e94560',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.4,
    shadowRadius: 16,
    elevation: 8,
  },
  startButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
