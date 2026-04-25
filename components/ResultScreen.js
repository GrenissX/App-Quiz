import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
} from 'react-native';

function getPerformanceData(score, total) {
  const percentage = Math.round((score / total) * 100);

  if (percentage === 100) {
    return { emoji: '🏆', title: '¡Perfecto!', message: 'Respuesta correcta en todas las preguntas. ¡Eres increíble!', color: '#FFD700' };
  } else if (percentage >= 80) {
    return { emoji: '🌟', title: '¡Excelente!', message: 'Muy buen desempeño. ¡Estás muy cerca de la perfección!', color: '#4caf50' };
  } else if (percentage >= 60) {
    return { emoji: '👍', title: '¡Bien hecho!', message: 'Buen resultado. Sigue practicando para mejorar.', color: '#2196f3' };
  } else if (percentage >= 40) {
    return { emoji: '💪', title: 'Puedes mejorar', message: 'Sigue estudiando. ¡Con práctica lo lograrás!', color: '#ff9800' };
  } else {
    return { emoji: '📚', title: '¡Sigue intentando!', message: 'No te rindas. Cada intento te hace más sabio.', color: '#e94560' };
  }
}

export default function ResultScreen({ score, total, onRestart }) {
  const percentage = Math.round((score / total) * 100);
  const { emoji, title, message, color } = getPerformanceData(score, total);
  const wrong = total - score;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.bigEmoji}>{emoji}</Text>
        <Text style={[styles.title, { color }]}>{title}</Text>
        <Text style={styles.message}>{message}</Text>

        <View style={styles.scoreCircle}>
          <Text style={[styles.scorePercentage, { color }]}>{percentage}%</Text>
          <Text style={styles.scoreLabel}>Puntaje</Text>
        </View>

        <View style={styles.statsRow}>
          <View style={[styles.statCard, styles.statCorrect]}>
            <Text style={styles.statEmoji}>✓</Text>
            <Text style={styles.statNumber}>{score}</Text>
            <Text style={styles.statLabel}>Correctas</Text>
          </View>
          <View style={[styles.statCard, styles.statWrong]}>
            <Text style={styles.statEmoji}>✗</Text>
            <Text style={styles.statNumber}>{wrong}</Text>
            <Text style={styles.statLabel}>Incorrectas</Text>
          </View>
          <View style={[styles.statCard, styles.statTotal]}>
            <Text style={styles.statEmoji}>📝</Text>
            <Text style={styles.statNumber}>{total}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
        </View>

        <View style={styles.progressContainer}>
          <Text style={styles.progressLabel}>Tu rendimiento</Text>
          <View style={styles.progressBarBg}>
            <View style={[styles.progressBarFill, { width: `${percentage}%`, backgroundColor: color }]} />
          </View>
        </View>

        <TouchableOpacity style={styles.restartButton} onPress={onRestart}>
          <Text style={styles.restartButtonText}>🔄  Jugar de nuevo</Text>
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
  bigEmoji: {
    fontSize: 72,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 15,
    color: '#a0a0b0',
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 32,
    paddingHorizontal: 12,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    backgroundColor: '#16213e',
    borderWidth: 3,
    borderColor: '#0f3460',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 32,
  },
  scorePercentage: {
    fontSize: 42,
    fontWeight: '800',
  },
  scoreLabel: {
    fontSize: 13,
    color: '#a0a0b0',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 32,
    width: '100%',
  },
  statCard: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    borderWidth: 1,
  },
  statCorrect: {
    backgroundColor: '#1b3a1f',
    borderColor: '#4caf50',
  },
  statWrong: {
    backgroundColor: '#3a1b1f',
    borderColor: '#e94560',
  },
  statTotal: {
    backgroundColor: '#16213e',
    borderColor: '#0f3460',
  },
  statEmoji: {
    fontSize: 20,
    marginBottom: 4,
  },
  statNumber: {
    fontSize: 28,
    fontWeight: '800',
    color: '#ffffff',
  },
  statLabel: {
    fontSize: 11,
    color: '#a0a0b0',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginTop: 2,
  },
  progressContainer: {
    width: '100%',
    marginBottom: 32,
  },
  progressLabel: {
    fontSize: 13,
    color: '#a0a0b0',
    marginBottom: 8,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  progressBarBg: {
    height: 10,
    backgroundColor: '#16213e',
    borderRadius: 5,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#0f3460',
  },
  progressBarFill: {
    height: '100%',
    borderRadius: 5,
  },
  restartButton: {
    backgroundColor: '#e94560',
    paddingVertical: 18,
    paddingHorizontal: 48,
    borderRadius: 50,
    width: '100%',
    alignItems: 'center',
  },
  restartButtonText: {
    color: '#ffffff',
    fontSize: 17,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
