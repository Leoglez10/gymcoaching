// src/screens/Athlete/WorkoutInProgressScreen.tsx

/**
 * @file Pantalla de un entrenamiento en progreso.
 * Corresponde a la `Screen 16 - Design Syntax`.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---
// Reutilizando InputControl de WorkoutLogScreen con leves modificaciones si es necesario
const InputControl = ({ label, unit, value, onDecrement, onIncrement }: any) => (
    <View style={styles.inputCard}>
        <Text style={styles.inputLabel}>{label} ({unit})</Text>
        <View style={styles.inputActions}>
            <TouchableOpacity style={styles.inputButton} onPress={onDecrement}>
                <Text style={styles.inputButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.inputValue}>{value}</Text>
            <TouchableOpacity style={styles.inputButton} onPress={onIncrement}>
                <Text style={styles.inputButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
);


// --- Componente Principal ---
export const WorkoutInProgressScreen = () => {
    const [weight, setWeight] = useState(80);
    const [reps, setReps] = useState(10);
    const [rpe, setRpe] = useState(8);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header con Progreso */}
        <View style={styles.header}>
            <Text style={styles.headerSubtitle}>Upper Body Hypertrophy</Text>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                <Text style={styles.headerTitle}>Exercise 3/8</Text>
                <Text style={{color: theme.colors.primary, fontWeight: 'bold'}}>37% Done</Text>
            </View>
            <View style={styles.progressBarContainer}>
                <View style={[styles.progressBar, {width: '37%'}]} />
            </View>
        </View>

        {/* Detalles del Ejercicio */}
        <View style={styles.exerciseHeader}>
            <Text style={styles.exerciseName}>Bench Press</Text>
            <Text style={styles.exerciseMeta}>Barbell Chest Compound</Text>
        </View>

        {/* Timer */}
        <View style={styles.timerCard}>
            <View>
                <Text style={styles.timerLabel}>Rest Timer</Text>
                <Text style={styles.timerValue}>01:30</Text>
            </View>
        </View>

        {/* Controles de Input */}
        <View style={styles.controlsContainer}>
            <Text style={styles.setTitle}>Set 3 of 4</Text>
            <InputControl
                label="Weight"
                unit="kg"
                value={weight}
                onIncrement={() => setWeight(w => w + 2.5)}
                onDecrement={() => setWeight(w => w - 2.5)}
            />
            <InputControl
                label="Reps"
                unit="count"
                value={reps}
                onIncrement={() => setReps(r => r + 1)}
                onDecrement={() => setReps(r => r - 1)}
            />
        </View>

        {/* Historial de Series */}
        <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Previous Sets</Text>
            <View style={styles.historyItem}>
                <Text style={styles.historySet}>Set 1</Text>
                <Text style={styles.historyData}>80kg x 12</Text>
            </View>
            <View style={styles.historyItem}>
                <Text style={styles.historySet}>Set 2</Text>
                <Text style={styles.historyData}>80kg x 10</Text>
            </View>
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
          <Button title="Registrar Serie" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 16 },
  headerSubtitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12 },
  headerTitle: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
  progressBarContainer: { height: 6, backgroundColor: theme.colors.surfaceDark, borderRadius: 3, marginTop: 8 },
  progressBar: { height: '100%', backgroundColor: theme.colors.primary, borderRadius: 3 },
  exerciseHeader: { padding: 16 },
  exerciseName: { color: theme.colors.text, fontSize: 32, fontWeight: 'bold' },
  exerciseMeta: { color: theme.colors.textSecondary, fontSize: 16 },
  timerCard: { backgroundColor: theme.colors.surfaceDark, marginHorizontal: 16, padding: 16, borderRadius: 12 },
  timerLabel: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12 },
  timerValue: { color: theme.colors.text, fontSize: 24, fontWeight: 'bold', fontFamily: 'monospace' },
  controlsContainer: { padding: 16, gap: 16 },
  setTitle: { color: theme.colors.text, fontSize: 20, fontWeight: 'bold' },
  inputCard: { backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  inputLabel: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12 },
  inputActions: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  inputButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.1)', justifyContent: 'center', alignItems: 'center' },
  inputButtonText: { color: theme.colors.text, fontSize: 24 },
  inputValue: { color: theme.colors.text, fontSize: 28, fontWeight: 'bold', minWidth: 60, textAlign: 'center' },
  historyContainer: { paddingHorizontal: 16, marginTop: 16, },
  historyTitle: { color: theme.colors.textSecondary, marginBottom: 8 },
  historyItem: { flexDirection: 'row', justifyContent: 'space-between', padding: 12, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
  historySet: { color: theme.colors.text, fontWeight: 'bold' },
  historyData: { color: theme.colors.textSecondary },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, backgroundColor: 'rgba(16, 34, 22, 0.8)', borderTopWidth: 1, borderColor: theme.colors.border }
});
