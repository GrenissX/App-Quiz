# QuizMaster 🧠
### Aplicación móvil de Quiz — React Native + Expo

---

## 📱 Descripción de la app

**QuizMaster** es una aplicación móvil de preguntas y respuestas de cultura general. El usuario responde 10 preguntas de opción múltiple, obtiene retroalimentación visual inmediata en cada respuesta, y al final ve su puntaje detallado con estadísticas.

---

## 🎯 ¿Qué hace y cómo funciona?

### Pantallas

| Pantalla | Función |
|----------|---------|
| **HomeScreen** | Bienvenida, reglas del juego, botón de inicio |
| **QuizScreen** | Preguntas con 4 opciones, barra de progreso, contador de puntos |
| **ResultScreen** | Puntaje final, estadísticas, calificación del desempeño |

### Flujo de uso
1. El usuario abre la app y ve la pantalla de bienvenida
2. Presiona **"¡Comenzar Quiz!"** para iniciar
3. Responde cada pregunta tocando una de las 4 opciones:
   - La respuesta correcta se marca en **verde**
   - La incorrecta (si aplica) en **rojo**
4. Presiona **"Siguiente"** para avanzar
5. Al terminar las 10 preguntas, se muestra la pantalla de resultados con porcentaje, correctas e incorrectas
6. Puede presionar **"Jugar de nuevo"** para reiniciar

---

## ⚙️ Estructura del proyecto

```
QuizApp/
├── App.js                    ← Componente raíz, maneja la navegación entre pantallas
├── components/
│   ├── HomeScreen.js         ← Pantalla de bienvenida
│   ├── QuizScreen.js         ← Lógica del quiz y preguntas
│   └── ResultScreen.js       ← Resultados y estadísticas
├── package.json
├── app.json                  ← Configuración de Expo
├── eas.json                  ← Configuración de build APK
└── babel.config.js
```

---

## 🧩 Componentes y funciones principales

### `App.js`
- Maneja el estado global: pantalla actual, puntaje, total de preguntas
- Funciones: `handleStartQuiz()`, `handleFinishQuiz()`, `handleRestart()`

### `QuizScreen.js`
- **Estado**: índice de pregunta actual, puntaje, opción seleccionada, si ya respondió
- **Funciones clave**:
  - `handleSelectOption(index)` — valida la respuesta y actualiza el puntaje
  - `handleNext()` — avanza a la siguiente pregunta o finaliza el quiz
  - `getOptionStyle(index)` — retorna el estilo correcto según el estado de respuesta
- **Datos**: Array de 10 preguntas con opciones y respuesta correcta

### `ResultScreen.js`
- **Función**: `getPerformanceData(score, total)` — retorna emoji, título y mensaje personalizado según el porcentaje obtenido (5 niveles de desempeño)
- Muestra porcentaje, correctas, incorrectas y barra de progreso

---

## 🚀 Cómo ejecutar el proyecto

### Requisitos previos
- Node.js (versión 18 o superior)
- npm o yarn
- Expo CLI: `npm install -g expo-cli`
- Aplicación **Expo Go** en el dispositivo Android (para pruebas)

### Instalación y ejecución

```bash
# 1. Clonar o descomprimir el proyecto
cd QuizApp

# 2. Instalar dependencias
npm install

# 3. Iniciar el servidor de desarrollo
npx expo start

# 4. Escanear el código QR con Expo Go (Android/iOS)
```

---

## 📦 Generar el APK

Se usa **EAS Build** (Expo Application Services):

```bash
# 1. Instalar EAS CLI
npm install -g eas-cli

# 2. Iniciar sesión en Expo
eas login

# 3. Configurar el proyecto (primera vez)
eas build:configure

# 4. Generar APK (perfil "preview")
eas build --platform android --profile preview
```

El APK se descarga desde el dashboard de Expo (expo.dev) una vez que la build finalice (≈5-10 minutos).

### Alternativa local con Android Studio
```bash
npx expo run:android
```
Requiere tener Android Studio y un emulador configurado.

---

## 📊 Rúbrica cubierta

| Criterio | Implementación |
|----------|---------------|
| ✅ Funcionamiento APK | Build con EAS (perfil preview → APK) |
| ✅ Uso de funciones | `handleSelectOption`, `handleNext`, `getPerformanceData`, `getOptionStyle` |
| ✅ Interactividad | Botones con `onPress`, 4 opciones tocables por pregunta |
| ✅ Estructura código | 4 componentes: App, HomeScreen, QuizScreen, ResultScreen |
| ✅ Diseño básico | StyleSheet con paleta oscura, barra de progreso, retroalimentación visual |
| ✅ Creatividad | Tema de quiz, 5 niveles de desempeño, feedback inmediato por respuesta |
| ✅ Documentación | Este README |

---

## 🛠️ Tecnologías usadas

- **React Native** — framework principal
- **Expo** (~51) — herramientas de desarrollo y build
- **JavaScript ES6+** — arrow functions, destructuring, template literals, spread operator
- **StyleSheet API** — estilos nativos

---

*Desarrollado como proyecto académico de introducción a React Native.*
