// src/screens/Athlete/RoutineSummaryScreen.tsx

/**
 * @file Pantalla de Resumen de Rutina.
 * Corresponde a la `Screen 15 - Design Syntax`.
 * Muestra los detalles de un entrenamiento antes de que el atleta comience.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

const StatPill = ({ icon, label }: { icon: string, label: string }) => (
    <View style={styles.statPill}>
        <Text style={styles.statPillIcon}>{icon}</Text>
        <Text style={styles.statPillLabel}>{label}</Text>
    </View>
);

const ExerciseListItem = ({ name, sets, reps, videoThumbUrl }: { name: string, sets: number, reps: string, videoThumbUrl: string }) => (
    <View style={styles.exerciseItem}>
        <ImageBackground source={{ uri: videoThumbUrl }} style={styles.exerciseThumb} imageStyle={{ borderRadius: 8 }}>
            <View style={styles.thumbOverlay} />
            <Text style={styles.playIcon}>▶</Text>
        </ImageBackground>
        <View style={styles.exerciseDetails}>
            <Text style={styles.exerciseName}>{name}</Text>
            <Text style={styles.exerciseSets}>{`${sets} sets × ${reps} reps`}</Text>
        </View>
    </View>
);


// --- Componente Principal ---

export const RoutineSummaryScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {/* Header con Imagen */}
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDMlbbVhxcIrJ6G80fOCT5tlEpghUJ3o5WjuvrNQNsWEVctvwf14GAtAUkM9nFAEjeaF7bzbMJvN4YN6Tgl2dCGXsjhF42vP7hoL2cn5IOjRcL3l4pyvspJyNfS30XKmOPMDzmxvToLya7So_BUSHg4lzxrAdDh5VxALH_IkZ_XYyy7V9qqq8ITAh8LF6kXpc_BYh1V_8NHO-RStNhM6Pqt3dV_aF0Y8hxgW3Uu6JahMIatOKGqmAkQ8OLxd20s6pGVExpuoJ8Sy6gp' }}
          style={styles.headerImage}
        >
          <View style={styles.headerOverlay} />
          <View style={styles.headerContent}>
            <Text style={styles.headerTitle}>Upper Body Hypertrophy</Text>
            <View style={{flexDirection: 'row', gap: 8, marginTop: 8}}>
                <StatPill icon="⏱️" label="45 Min" />
                <StatPill icon="🔥" label="High Intensity" />
            </View>
          </View>
        </ImageBackground>

        {/* Nota del Coach */}
        <View style={styles.coachNote}>
            <Text style={styles.coachNoteText}>
                "Pay attention to the <Text style={{color: theme.colors.primary}}>eccentric phase</Text> today. Slow down the lowering movement to 3 seconds on the bench press."
            </Text>
        </View>

        {/* Lista de Ejercicios */}
        <View style={styles.listContainer}>
            <Text style={styles.sectionTitle}>Block A</Text>
            <ExerciseListItem name="Bench Press" sets={4} reps="8" videoThumbUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuBwv2xKCVh1EHUF3SOH_DurVuR1GeMjH-fOiK-F2Rh8aMcgKV07pQcyu6CzoQjoTRSCZmdW9XmOc7BSNmq2r9mqxzd_g6xepILBf6kQVkIqbFFOm4Yt-tH0ArFvxPM6WanD5OtjYwXT9uJNboiaDD-m-T7QkxvAJ6gttiXpHAcLsJv56HvcHGjKqGklRbHRSFsSJf4pjHUXDQlxHXPZhJj8xqck1k2KG7k-_NlmtG1H6970N8S8VZ0KtVYodMNoUQD__lOzCtgOikdd" />
            <ExerciseListItem name="Barbell Row" sets={4} reps="10" videoThumbUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDONYFi2DE-HLoy9NSMt2u6ZNV2O-yyEzS_OiYCUrjuNWNgdCkfU9O66YGSIQ6DAnU8Yc00BXQLbfWFOwqFj7AoR4bivnNStoaEHWynbBrY8fwyv7M89fHRe_R4LYHDDEzavuszeIkkI10y99Qg3VO6TOjmMgAGpovpgw5Llkr3EEPhrPwucwU_m5RT5ecJUxA5SLX7tKLCIeu1xnMQ48xSbodzTe-LsKjvG9JdI-F7DG7jSLaMgy8qOUqhA_llBBZDWla6U8lTcT8S" />
        </View>
      </ScrollView>
      <View style={styles.footer}>
          <Button title="Start Workout" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  headerImage: { height: 250, justifyContent: 'flex-end' },
  headerOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
  headerContent: { padding: 24, },
  headerTitle: { color: theme.colors.text, fontSize: 32, fontWeight: 'bold' },
  statPill: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 99 },
  statPillIcon: { fontSize: 14, marginRight: 4 },
  statPillLabel: { color: theme.colors.text, fontSize: 12, fontWeight: '500' },
  coachNote: { backgroundColor: theme.colors.surfaceDark, margin: 16, padding: 16, borderRadius: 12 },
  coachNoteText: { color: theme.colors.textSecondary, fontStyle: 'italic', lineHeight: 20 },
  listContainer: { paddingHorizontal: 16, gap: 12 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text, marginBottom: 8 },
  exerciseItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12, gap: 12 },
  exerciseThumb: { width: 80, height: 60, justifyContent: 'center', alignItems: 'center' },
  thumbOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.4)', borderRadius: 8 },
  playIcon: { color: 'white', fontSize: 24, opacity: 0.8 },
  exerciseDetails: {},
  exerciseName: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
  exerciseSets: { color: theme.colors.textSecondary, fontSize: 14 },
  footer: { padding: 16, borderTopWidth: 1, borderColor: theme.colors.border, backgroundColor: theme.colors.background }
});
