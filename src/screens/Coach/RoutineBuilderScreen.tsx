// src/screens/Coach/RoutineBuilderScreen.tsx

/**
 * @file Pantalla para construir o editar una rutina de entrenamiento.
 * Corresponde a la `Screen 24 - Design Syntax`.
 * Permite al coach añadir, reordenar y configurar ejercicios.
 */

import React from 'react';
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
import { TextInput } from '../../components/common/TextInput';

// --- Componentes Locales ---

const ExerciseCard = ({ name, type, sets, reps, rpe }: any) => (
  <View style={styles.exerciseCard}>
    <View style={styles.cardHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <Text style={{color: theme.colors.primary, fontSize: 24}}>☰</Text>
            <View>
                <Text style={styles.exerciseName}>{name}</Text>
                <Text style={styles.exerciseType}>{type}</Text>
            </View>
        </View>
        <TouchableOpacity>
            <Text style={{color: '#ef4444', fontSize: 20}}>🗑️</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.metricsGrid}>
        <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Sets</Text>
            <Text style={styles.metricValue}>{sets}</Text>
        </View>
        <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>Reps</Text>
            <Text style={styles.metricValue}>{reps}</Text>
        </View>
        <View style={styles.metricBox}>
            <Text style={styles.metricLabel}>RPE</Text>
            <Text style={styles.metricValue}>{rpe}</Text>
        </View>
    </View>
  </View>
);

const ExerciseDrawer = () => (
    <View style={styles.drawerContainer}>
        <View style={styles.drawerHandle} />
        <Text style={styles.drawerTitle}>Exercise Library</Text>
        {/* Aquí iría la lista de ejercicios para arrastrar */}
        <View style={styles.drawerContent}>
            <Text style={{color: theme.colors.textSecondary}}>Exercise list placeholder...</Text>
        </View>
    </View>
);

// --- Componente Principal ---

export const RoutineBuilderScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            {/* Header */}
            <Text style={styles.headerTitle}>New Routine</Text>

            {/* Detalles de la Rutina */}
            <View style={styles.detailsContainer}>
                <TextInput label="Routine Name" placeholder="e.g. High Intensity Leg Day" />
            </View>

            {/* Timeline */}
            <View style={styles.timelineHeader}>
                <Text style={styles.timelineTitle}>Timeline</Text>
                <Text style={styles.timelineEst}>25 mins est.</Text>
            </View>
            <Text style={styles.timelineSubtitle}>Drag from the drawer below or tap '+' to add exercises.</Text>

            {/* Lista de Ejercicios */}
            <View style={styles.exerciseList}>
                <ExerciseCard name="Dynamic Stretching" type="Warm-up • Bodyweight" sets="1" reps="5 min" rpe="-" />
                <ExerciseCard name="Barbell Squat" type="Strength • Compound" sets="4" reps="8-10" rpe="8" />

                {/* Drop Zone */}
                <View style={styles.dropZone}>
                    <Text style={{fontSize: 24, color: theme.colors.textSecondary}}>+</Text>
                    <Text style={{color: theme.colors.textSecondary, fontWeight: '500'}}>Drag next exercise here</Text>
                </View>
            </View>
        </ScrollView>

        {/* Botón Flotante */}
        <TouchableOpacity style={styles.fab}>
            <Text style={{fontSize: 24, color: theme.colors.backgroundDark}}>✓</Text>
            <Text style={{color: theme.colors.backgroundDark, fontWeight: 'bold'}}>Save Routine</Text>
        </TouchableOpacity>

        {/* Drawer de Ejercicios */}
        <ExerciseDrawer />
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { paddingBottom: 300 }, // Espacio para el drawer
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center', padding: 16 },
  detailsContainer: { paddingHorizontal: 16, marginBottom: 16 },
  timelineHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', paddingHorizontal: 16, },
  timelineTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text, },
  timelineEst: { color: theme.colors.textSecondary, backgroundColor: theme.colors.surfaceDark, paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 12, overflow: 'hidden' },
  timelineSubtitle: { color: theme.colors.textSecondary, paddingHorizontal: 16, marginTop: 4, marginBottom: 16 },
  exerciseList: { paddingHorizontal: 16, gap: 12 },
  exerciseCard: { backgroundColor: theme.colors.surfaceDark, borderRadius: 12, padding: 12, borderWidth: 1, borderColor: theme.colors.border },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 },
  exerciseName: { color: theme.colors.text, fontWeight: 'bold' },
  exerciseType: { color: theme.colors.textSecondary, fontSize: 12 },
  metricsGrid: { flexDirection: 'row', gap: 8 },
  metricBox: { flex: 1, backgroundColor: theme.colors.background, borderRadius: 8, padding: 8, alignItems: 'center' },
  metricLabel: { color: theme.colors.textSecondary, fontSize: 10, textTransform: 'uppercase' },
  metricValue: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
  dropZone: { borderStyle: 'dashed', borderWidth: 2, borderColor: theme.colors.border, borderRadius: 12, height: 100, justifyContent: 'center', alignItems: 'center', gap: 8 },
  fab: { position: 'absolute', zIndex: 10, bottom: 290, right: 16, flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.primary, paddingHorizontal: 16, height: 56, borderRadius: 28, gap: 8, },
  drawerContainer: { position: 'absolute', bottom: 0, left: 0, right: 0, height: 270, backgroundColor: '#121212', borderTopLeftRadius: 24, borderTopRightRadius: 24, borderTopWidth: 1, borderColor: theme.colors.border },
  drawerHandle: { alignSelf: 'center', width: 48, height: 6, backgroundColor: theme.colors.border, borderRadius: 3, marginTop: 8, },
  drawerTitle: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold', padding: 16, },
  drawerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' }
});
