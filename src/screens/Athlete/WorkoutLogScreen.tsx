// src/screens/Athlete/WorkoutLogScreen.tsx

/**
 * @file Pantalla para registrar los datos de un ejercicio durante un entrenamiento.
 * Corresponde a la `Screen 4 - Design Syntax`.
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
import { TextInput } from '../../components/common/TextInput'; // Podríamos usar una versión simplificada

// --- Componentes Locales ---

/**
 * @interface SetRowProps
 * @description Props para el componente SetRow, que muestra una serie completada.
 */
interface SetRowProps {
  setNumber: number;
  weight: number;
  reps: number;
}

const SetRow: React.FC<SetRowProps> = ({ setNumber, weight, reps }) => (
  <View style={styles.setRowContainer}>
    <View style={styles.setRowInfo}>
      <View style={styles.setCheckmark}>
        {/* Ícono simulado */}
        <Text style={{color: theme.colors.primary, fontWeight: 'bold'}}>✓</Text>
      </View>
      <View>
        <Text style={styles.setRowLabel}>Set {setNumber}</Text>
        <Text style={styles.setRowValue}>{weight}kg × {reps} reps</Text>
      </View>
    </View>
    <TouchableOpacity>
      <Text style={styles.editText}>Edit</Text>
    </TouchableOpacity>
  </View>
);

/**
 * @interface InputControlProps
 * @description Props para el componente de control numérico.
 */
interface InputControlProps {
  label: string;
  unit: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const InputControl: React.FC<InputControlProps> = ({ label, unit, value, onDecrement, onIncrement }) => (
    <View style={styles.controlRow}>
        <View>
            <Text style={styles.controlLabel}>{label}</Text>
            <Text style={styles.controlUnit}>{unit}</Text>
        </View>
        <View style={styles.controlActions}>
            <TouchableOpacity style={styles.controlButton} onPress={onDecrement}>
                <Text style={styles.controlButtonText}>-</Text>
            </TouchableOpacity>
            <Text style={styles.controlValue}>{value}</Text>
            <TouchableOpacity style={styles.controlButton} onPress={onIncrement}>
                <Text style={styles.controlButtonText}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
);


// --- Componente Principal de la Pantalla ---

export const WorkoutLogScreen = () => {
    // Estado para los valores de la serie activa
    const [weight, setWeight] = useState(62.5);
    const [reps, setReps] = useState(12);

    const handleIncrementWeight = () => setWeight(prev => prev + 2.5);
    const handleDecrementWeight = () => setWeight(prev => Math.max(0, prev - 2.5));
    const handleIncrementReps = () => setReps(prev => prev + 1);
    const handleDecrementReps = () => setReps(prev => Math.max(0, prev - 1));

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header (simplificado) */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Workout Log</Text>
            <Text style={styles.headerSubtitle}>Week 4 • Hypertrophy Phase</Text>
        </View>

        {/* Series Anteriores */}
        <View style={styles.previousSetsContainer}>
            <SetRow setNumber={1} weight={60} reps={12} />
            <SetRow setNumber={2} weight={60} reps={12} />
        </View>

        {/* Componente de Logging Activo */}
        <View style={styles.activeLogContainer}>
            <View style={styles.activeLogHeader}>
                <View>
                    <Text style={styles.activeSetTitle}>Set 3</Text>
                    <Text style={styles.activeSetTarget}>Target: 10-12 reps @ 62.5kg</Text>
                </View>
            </View>

            <InputControl
                label="Weight"
                unit="kg"
                value={weight}
                onIncrement={handleIncrementWeight}
                onDecrement={handleDecrementWeight}
            />

            <View style={styles.divider} />

             <InputControl
                label="Reps"
                unit="count"
                value={reps}
                onIncrement={handleIncrementReps}
                onDecrement={handleDecrementReps}
            />
        </View>

        {/* Vista previa de futuras series */}
        <View style={styles.futureSetContainer}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
                <View style={styles.futureSetNumber}>
                    <Text style={{color: theme.colors.textSecondary, fontWeight: 'bold'}}>4</Text>
                </View>
                <View>
                    <Text style={styles.setRowLabel}>Set 4</Text>
                    <Text style={styles.setRowValue}>Target: 10-12 reps</Text>
                </View>
            </View>
        </View>
      </ScrollView>

      {/* Botón de Acción Fijo */}
      <View style={styles.footer}>
          <Button title="Registrar Serie" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { padding: theme.spacing.l, paddingBottom: 120 },
  header: { marginBottom: theme.spacing.xl, },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text },
  headerSubtitle: { fontSize: 14, color: theme.colors.textSecondary, marginTop: 4 },
  previousSetsContainer: { gap: theme.spacing.s, opacity: 0.6, marginBottom: theme.spacing.l },
  setRowContainer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: theme.spacing.m, borderRadius: theme.borderRadii.l },
  setRowInfo: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  setCheckmark: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(19, 236, 91, 0.2)', alignItems: 'center', justifyContent: 'center' },
  setRowLabel: { color: theme.colors.textSecondary, fontSize: 12, textTransform: 'uppercase' },
  setRowValue: { color: theme.colors.text, fontSize: 14, fontWeight: '600' },
  editText: { color: theme.colors.textSecondary, fontSize: 12, fontWeight: '500' },
  activeLogContainer: { backgroundColor: '#22382B', padding: theme.spacing.l, borderRadius: theme.borderRadii.xl, gap: theme.spacing.m, borderWidth: 1, borderColor: 'rgba(19, 236, 91, 0.2)' },
  activeLogHeader: { borderBottomWidth: 1, borderBottomColor: 'rgba(255,255,255,0.1)', paddingBottom: theme.spacing.m },
  activeSetTitle: { color: theme.colors.primary, fontSize: 20, fontWeight: 'bold' },
  activeSetTarget: { color: theme.colors.textSecondary, fontSize: 14, marginTop: 4 },
  divider: { height: 1, backgroundColor: 'rgba(255,255,255,0.1)' },
  controlRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  controlLabel: { color: theme.colors.textSecondary, fontSize: 12, textTransform: 'uppercase' },
  controlUnit: { color: theme.colors.text, fontSize: 16 },
  controlActions: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: 'rgba(0,0,0,0.2)', padding: 6, borderRadius: theme.borderRadii.l },
  controlButton: { width: 48, height: 48, borderRadius: theme.borderRadii.m, backgroundColor: theme.colors.surfaceDark, alignItems: 'center', justifyContent: 'center' },
  controlButtonText: { color: theme.colors.text, fontSize: 24, fontWeight: 'bold' },
  controlValue: { color: theme.colors.primary, fontSize: 32, fontWeight: 'bold', minWidth: 80, textAlign: 'center' },
  futureSetContainer: { marginTop: theme.spacing.m, opacity: 0.5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'rgba(42, 56, 43, 0.4)', padding: theme.spacing.m, borderRadius: theme.borderRadii.l },
  futureSetNumber: { width: 32, height: 32, borderRadius: 16, borderWidth: 1, borderStyle: 'dashed', borderColor: theme.colors.textSecondary, alignItems: 'center', justifyContent: 'center' },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: theme.spacing.l, backgroundColor: 'rgba(16, 34, 22, 0.8)', borderTopWidth: 1, borderColor: theme.colors.border, },
});
