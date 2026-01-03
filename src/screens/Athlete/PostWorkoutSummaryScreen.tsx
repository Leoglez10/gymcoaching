// src/screens/Athlete/PostWorkoutSummaryScreen.tsx

/**
 * @file Pantalla de Resumen Post-Entrenamiento.
 * Corresponde a la `Screen 20 - Design Syntax`.
 * Muestra un resumen del rendimiento y feedback al atleta.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---
const MetricCard = ({ icon, label, value }: { icon: string, label: string, value: string }) => (
    <View style={styles.metricCard}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, color: theme.colors.textSecondary}}>
            <Text>{icon}</Text>
            <Text style={styles.metricLabel}>{label}</Text>
        </View>
        <Text style={styles.metricValue}>{value}</Text>
    </View>
);

const BreakdownItem = ({ icon, title, subtitle }: { icon: string, title: string, subtitle: string }) => (
    <View style={styles.breakdownItem}>
        <View style={styles.breakdownIcon}>
            <Text>✓</Text>
        </View>
        <View>
            <Text style={styles.breakdownTitle}>{title}</Text>
            <Text style={styles.breakdownSubtitle}>{subtitle}</Text>
        </View>
    </View>
);

// --- Componente Principal ---
export const PostWorkoutSummaryScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Hero Section */}
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBoD0EJz188mmHcUi3nEG6Oub5ncq6bp45mPAXYqod37Udira0IK4AJnKWuFJnRhAStBu-SiE6jTgwWyZq2Os090JiHL1xAESvn1OLpsl1afOUIA0NtqeO9g4r85H6zUc6Cka2s66g0o4tyPRQxaLN9EjYTulBwE8G79LUVVu6-lpa6CyJMmBAfmctSNwZXDA-FQZfgBlX9I02wUX_OsVkP0LXo0_j74AZeGslqhTIhl3StuDOEWauiaXxeG8hRk2PlqBeWZqvoNMG1' }}
          style={styles.heroImage}
        >
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <View style={styles.successIcon}>
                <Text style={{fontSize: 24, fontWeight: 'bold'}}>✓</Text>
            </View>
            <Text style={styles.heroTitle}>Great Job, Alex!</Text>
            <Text style={styles.heroSubtitle}>Thursday Strength Session</Text>
          </View>
        </ImageBackground>

        <View style={styles.mainContent}>
            {/* XP / Gamification */}
            <View style={styles.xpCard}>
                <Text style={styles.xpTitle}>Level 4 Athlete</Text>
                <Text style={styles.xpValue}>+120 XP</Text>
            </View>

            {/* Métricas */}
            <View style={styles.metricsGrid}>
                <MetricCard icon="⏱️" label="Duration" value="45:00" />
                <MetricCard icon="🔥" label="Calories" value="320" />
            </View>

            {/* Feedback del Coach */}
            <View style={styles.feedbackCard}>
                <Text style={styles.feedbackTitle}>Coach's Insight</Text>
                <Text style={styles.feedbackText}>
                    "Excellent consistency on your squats today. Keep focusing on that hip drive!"
                </Text>
            </View>

            {/* Desglose */}
            <View style={styles.breakdownContainer}>
                <Text style={styles.sectionTitle}>Session Breakdown</Text>
                <BreakdownItem icon="✓" title="Dynamic Warm-up" subtitle="5 mins • Completed" />
                <BreakdownItem icon="✓" title="Back Squats" subtitle="5 sets • 185 lbs avg" />
            </View>
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Button title="Return to Dashboard" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  heroImage: { height: 300, justifyContent: 'center', alignItems: 'center' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
  heroContent: { alignItems: 'center' },
  successIcon: { width: 64, height: 64, borderRadius: 32, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center', marginBottom: 16 },
  heroTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  heroSubtitle: { fontSize: 16, color: theme.colors.textSecondary },
  mainContent: { padding: 16, gap: 24, marginTop: -16 },
  xpCard: { backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  xpTitle: { color: theme.colors.text, fontWeight: '600' },
  xpValue: { color: theme.colors.primary, fontWeight: 'bold' },
  metricsGrid: { flexDirection: 'row', gap: 16 },
  metricCard: { flex: 1, backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12, gap: 8 },
  metricLabel: { color: theme.colors.textSecondary },
  metricValue: { color: theme.colors.text, fontSize: 28, fontWeight: 'bold' },
  feedbackCard: { backgroundColor: 'rgba(19, 236, 91, 0.1)', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(19, 236, 91, 0.2)' },
  feedbackTitle: { color: theme.colors.primary, fontWeight: 'bold', textTransform: 'uppercase', fontSize: 12, marginBottom: 8 },
  feedbackText: { color: theme.colors.textSecondary, fontStyle: 'italic', lineHeight: 20 },
  breakdownContainer: {},
  sectionTitle: { color: theme.colors.text, fontSize: 18, fontWeight: 'bold', marginBottom: 12 },
  breakdownItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 8, marginBottom: 8 },
  breakdownIcon: { width: 32, height: 32, borderRadius: 16, backgroundColor: 'rgba(19, 236, 91, 0.2)', justifyContent: 'center', alignItems: 'center', marginRight: 12 },
  breakdownTitle: { color: theme.colors.text, fontWeight: '500' },
  breakdownSubtitle: { color: theme.colors.textSecondary, fontSize: 12 },
  footer: { padding: 16, borderTopWidth: 1, borderColor: theme.colors.border, backgroundColor: theme.colors.background }
});
