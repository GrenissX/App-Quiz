import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
} from 'react-native';

const QUESTIONS = [
  {
    question: '¿Cuál es el planeta más grande del sistema solar?',
    options: ['Saturno', 'Júpiter', 'Urano', 'Neptuno'],
    correct: 1,
  },
  {
    question: '¿En qué año llegó el hombre a la Luna por primera vez?',
    options: ['1965', '1967', '1969', '1971'],
    correct: 2,
  },
  {
    question: '¿Cuál es el elemento químico más abundante en el universo?',
    options: ['Oxígeno', 'Carbono', 'Helio', 'Hidrógeno'],
    correct: 3,
  },
  {
    question: '¿Quién pintó la Mona Lisa?',
    options: ['Miguel Ángel', 'Leonardo da Vinci', 'Rafael', 'Botticelli'],
    correct: 1,
  },
  {
    question: '¿Cuál es el río más largo del mundo?',
    options: ['Amazonas', 'Yangtsé', 'Misisipi', 'Nilo'],
    correct: 3,
  },
  {
    question: '¿Cuántos huesos tiene el cuerpo humano adulto?',
    options: ['196', '206', '216', '226'],
    correct: 1,
  },
  {
    question: '¿Cuál es el país más grande del mundo por superficie?',
    options: ['China', 'Canadá', 'Rusia', 'Estados Unidos'],
    correct: 2,
  },
  {
    question: '¿Qué gas es esencial para la fotosíntesis?',
    options: ['Oxígeno', 'Nitrógeno', 'Dióxido de carbono', 'Hidrógeno'],
    correct: 2,
  },
  {
    question: '¿Cuántos continentes hay en la Tierra?',
    options: ['5', '6', '7', '8'],
    correct: 2,
  },
  {
    question: '¿Cuál es la capital de Australia?',
    options: ['Sídney', 'Melbourne', 'Brisbane', 'Canberra'],
    correct: 3,
  },
];

const OPTION_LABELS = ['A', 'B', 'C', 'D'];

export default function QuizScreen({ onFinish }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answered, setAnswered] = useState(false);

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = (currentIndex / QUESTIONS.length) * 100;

  const handleSelectOption = (index) => {
    if (answered) return;

    setSelectedOption(index);
    setAnswered(true);

    if (index === currentQuestion.correct) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (!answered) {
      Alert.alert('Selecciona una respuesta', 'Debes elegir una opción antes de continuar.');
      return;
    }

    const nextIndex = currentIndex + 1;

    if (nextIndex >= QUESTIONS.length) {
      const finalScore = selectedOption === currentQuestion.correct ? score + 1 : score;
      onFinish(finalScore, QUESTIONS.length);
    } else {
      setCurrentIndex(nextIndex);
      setSelectedOption(null);
      setAnswered(false);
    }
  };

  const getOptionStyle = (index) => {
    if (!answered) {
      return styles.optionButton;
    }
    if (index === currentQuestion.correct) {
      return [styles.optionButton, styles.optionCorrect];
    }
    if (index === selectedOption && index !== currentQuestion.correct) {
      return [styles.optionButton, styles.optionWrong];
    }
    return [styles.optionButton, styles.optionDimmed];
  };

  const getOptionTextStyle = (index) => {
    if (!answered) return styles.optionText;
    if (index === currentQuestion.correct) return [styles.optionText, styles.optionTextCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionText, styles.optionTextWrong];
    return [styles.optionText, styles.optionTextDimmed];
  };

  const getLabelStyle = (index) => {
    if (!answered) return styles.optionLabel;
    if (index === currentQuestion.correct) return [styles.optionLabel, styles.optionLabelCorrect];
    if (index === selectedOption && index !== currentQuestion.correct) return [styles.optionLabel, styles.optionLabelWrong];
    return [styles.optionLabel, styles.optionLabelDimmed];
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.questionCounter}>
          Pregunta {currentIndex + 1}/{QUESTIONS.length}
        </Text>
        <View style={styles.scoreContainer}>
          <Text style={styles.scoreLabel}>Puntos</Text>
          <Text style={styles.scoreValue}>{score}</Text>
        </View>
      </View>

      <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>

      <View style={styles.questionCard}>
        <Text style={styles.questionText}>{currentQuestion.question}</Text>
      </View>

      <View style={styles.optionsContainer}>
        {currentQuestion.options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={getOptionStyle(index)}
            onPress={() => handleSelectOption(index)}
            activeOpacity={answered ? 1 : 0.7}
          >
            <View style={getLabelStyle(index)}>
              <Text style={styles.labelText}>{OPTION_LABELS[index]}</Text>
            </View>
            <Text style={getOptionTextStyle(index)}>{option}</Text>
            {answered && index === currentQuestion.correct && (
              <Text style={styles.resultEmoji}>✓</Text>
            )}
            {answered && index === selectedOption && index !== currentQuestion.correct && (
              <Text style={styles.resultEmoji}>✗</Text>
            )}
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[styles.nextButton, !answered && styles.nextButtonDisabled]}
        onPress={handleNext}
      >
        <Text style={styles.nextButtonText}>
          {currentIndex + 1 === QUESTIONS.length ? 'Ver Resultado' : 'Siguiente →'}
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  questionCounter: {
    fontSize: 16,
    fontWeight: '600',
    color: '#a0a0b0',
  },
  scoreContainer: {
    backgroundColor: '#16213e',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e94560',
    alignItems: 'center',
  },
  scoreLabel: {
    fontSize: 10,
    color: '#a0a0b0',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scoreValue: {
    fontSize: 18,
    fontWeight: '800',
    color: '#e94560',
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: '#16213e',
    borderRadius: 3,
    marginBottom: 24,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#e94560',
    borderRadius: 3,
  },
  questionCard: {
    backgroundColor: '#16213e',
    borderRadius: 20,
    padding: 24,
    marginBottom: 24,
    borderWidth: 1,
    borderColor: '#0f3460',
    minHeight: 120,
    justifyContent: 'center',
  },
  questionText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    lineHeight: 30,
    textAlign: 'center',
  },
  optionsContainer: {
    flex: 1,
    gap: 12,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#16213e',
    borderRadius: 14,
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#0f3460',
  },
  optionCorrect: {
    borderColor: '#4caf50',
    backgroundColor: '#1b3a1f',
  },
  optionWrong: {
    borderColor: '#e94560',
    backgroundColor: '#3a1b1f',
  },
  optionDimmed: {
    opacity: 0.4,
  },
  optionLabel: {
    width: 36,
    height: 36,
    borderRadius: 10,
    backgroundColor: '#0f3460',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  optionLabelCorrect: {
    backgroundColor: '#4caf50',
  },
  optionLabelWrong: {
    backgroundColor: '#e94560',
  },
  optionLabelDimmed: {
    backgroundColor: '#0a2040',
  },
  labelText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
  optionText: {
    flex: 1,
    fontSize: 15,
    color: '#d0d0e0',
    fontWeight: '500',
  },
  optionTextCorrect: {
    color: '#81c784',
  },
  optionTextWrong: {
    color: '#ef9a9a',
  },
  optionTextDimmed: {
    color: '#606070',
  },
  resultEmoji: {
    fontSize: 18,
    fontWeight: '700',
  },
  nextButton: {
    backgroundColor: '#e94560',
    paddingVertical: 16,
    borderRadius: 50,
    alignItems: 'center',
    marginVertical: 20,
  },
  nextButtonDisabled: {
    backgroundColor: '#4a1f2a',
  },
  nextButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
