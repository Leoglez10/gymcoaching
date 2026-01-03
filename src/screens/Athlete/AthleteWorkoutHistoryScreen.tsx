// src/screens/Athlete/AthleteWorkoutHistoryScreen.tsx

/**
 * @file Pantalla de Historial de Entrenamientos del Atleta.
 * Corresponde a la `Screen 41 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Componentes Locales ---
const WorkoutLogItem = ({ title, date, duration, rpe, status }: any) => (
    <View style={[styles.logItem, {borderLeftColor: status === 'done' ? theme.colors.primary : '#ef4444'}]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
                <Text style={styles.logTitle}>{title}</Text>
                <Text style={styles.logMeta}>{`${date} • ${duration} • RPE ${rpe}`}</Text>
            </View>
            <Text>{status === 'done' ? '✓' : '✕'}</Text>
        </View>
        {status === 'done' &&
            <View style={styles.feedbackBox}>
                <Text style={styles.feedbackText}>"Great intensity on the bench press!"</Text>
            </View>
        }
    </View>
);

// --- Componente Principal ---
export const AthleteWorkoutHistoryScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header */}
        <Text style={styles.headerTitle}>History</Text>

        {/* Calendario (Placeholder) */}
        <View style={styles.calendarContainer}>
            <Text style={{color: theme.colors.textSecondary}}>Calendar Placeholder</Text>
        </View>

        {/* Workout Log */}
        <View style={styles.logContainer}>
            <Text style={styles.sectionTitle}>Workout Log</Text>
            <WorkoutLogItem title="Upper Body Power" date="Yesterday" duration="45 min" rpe="8" status="done" />
            <WorkoutLogItem title="HIIT Intervals" date="Oct 11" duration="20 min" rpe="-" status="skipped" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text, padding: 16 },
    calendarContainer: { height: 300, backgroundColor: theme.colors.surfaceDark, borderRadius: 16, margin: 16, justifyContent: 'center', alignItems: 'center' },
    logContainer: { padding: 16, gap: 16 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text },
    logItem: { backgroundColor: theme.colors.surfaceDark, borderRadius: 12, padding: 16, borderLeftWidth: 4 },
    logTitle: { color: theme.colors.text, fontWeight: 'bold', fontSize: 16 },
    logMeta: { color: theme.colors.textSecondary, fontSize: 12, marginTop: 4 },
    feedbackBox: { backgroundColor: 'rgba(255,255,255,0.05)', padding: 12, borderRadius: 8, marginTop: 12 },
    feedbackText: { color: theme.colors.textSecondary, fontStyle: 'italic', fontSize: 12 }
});
