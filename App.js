import React, { useState } from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import QuizScreen from './components/QuizScreen';
import ResultScreen from './components/ResultScreen';
import HomeScreen from './components/HomeScreen';

const SCREENS = {
  HOME: 'home',
  QUIZ: 'quiz',
  RESULT: 'result',
};

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(SCREENS.HOME);
  const [score, setScore] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);

  const handleStartQuiz = () => {
    setScore(0);
    setCurrentScreen(SCREENS.QUIZ);
  };

  const handleFinishQuiz = (finalScore, total) => {
    setScore(finalScore);
    setTotalQuestions(total);
    setCurrentScreen(SCREENS.RESULT);
  };

  const handleRestart = () => {
    setCurrentScreen(SCREENS.HOME);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#1a1a2e" />
      {currentScreen === SCREENS.HOME && (
        <HomeScreen onStart={handleStartQuiz} />
      )}
      {currentScreen === SCREENS.QUIZ && (
        <QuizScreen onFinish={handleFinishQuiz} />
      )}
      {currentScreen === SCREENS.RESULT && (
        <ResultScreen
          score={score}
          total={totalQuestions}
          onRestart={handleRestart}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
  },
});
