// src/screens/Athlete/AthleteProgressScreen.tsx

/**
 * @file Pantalla de Progreso del Atleta.
 * Combina elementos de `Screen 6` (Gráficos) y `Screen 34` (Récords Personales).
 * Muestra el progreso histórico y los récords de un atleta en diferentes métricas.
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

// --- Componentes Locales ---

const TimeRangeFilter = () => (
    <View style={styles.filterContainer}>
        {['1M', '3M', '6M', 'YTD', 'Todo'].map((item, index) => (
            <TouchableOpacity key={item} style={[styles.filterButton, index === 2 && styles.filterButtonActive]}>
                <Text style={[styles.filterText, index === 2 && styles.filterTextActive]}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const MetricSelector = () => (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.metricContainer}>
        <TouchableOpacity style={[styles.metricButton, styles.metricButtonActive]}>
            <Text style={[styles.metricText, styles.metricTextActive]}>Sentadilla</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metricButton}>
            <Text style={styles.metricText}>Peso Muerto</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.metricButton}>
            <Text style={styles.metricText}>Press Banca</Text>
        </TouchableOpacity>
    </ScrollView>
);

interface HistoryItemProps {
    value: string;
    date: string;
    isNewPR?: boolean;
}

const HistoryItem: React.FC<HistoryItemProps> = ({ value, date, isNewPR }) => (
    <View style={styles.historyItem}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View style={styles.historyIcon}>
                {/* Ícono simulado */}
                <Text style={{color: theme.colors.textSecondary}}>🗓️</Text>
            </View>
            <View>
                <Text style={styles.historyValue}>{value}</Text>
                <Text style={styles.historyDate}>{date}</Text>
            </View>
        </View>
        {isNewPR && (
            <View style={styles.prBadge}>
                <Text style={styles.prBadgeText}>Nuevo PR</Text>
            </View>
        )}
    </View>
);


// --- Componente Principal de la Pantalla ---

export const AthleteProgressScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header simplificado */}
        <Text style={styles.headerTitle}>Tus Récords Personales</Text>

        <TimeRangeFilter />
        <MetricSelector />

        {/* KPI Principal */}
        <View style={styles.kpiContainer}>
            <Text style={styles.kpiLabel}>Mejor marca actual</Text>
            <View style={{flexDirection: 'row', alignItems: 'flex-end', gap: 12}}>
                <Text style={styles.kpiValue}>120 <Text style={styles.kpiUnit}>kg</Text></Text>
                <View style={styles.kpiBadge}>
                    <Text style={styles.kpiBadgeText}>+5% vs mes pasado</Text>
                </View>
            </View>
        </View>

        {/* Chart Section */}
        <View style={styles.chartContainer}>
            <Text style={styles.chartTitle}>Progreso Histórico</Text>
            {/* --- SUPUESTO TÉCNICO --- */}
            {/* Aquí iría una librería de gráficos como `react-native-svg-charts`. */}
            {/* Se simula con un View simple. */}
            <View style={styles.chartPlaceholder}>
                <Text style={{color: theme.colors.textSecondary}}>Gráfico de progreso</Text>
            </View>
            <View style={styles.axisLabels}>
                {['ENE', 'FEB', 'MAR', 'ABR', 'MAY', 'JUN'].map(m => <Text key={m} style={styles.axisLabel}>{m}</Text>)}
            </View>
        </View>

        {/* Historial Reciente */}
        <View style={styles.historyContainer}>
            <Text style={styles.historyTitle}>Historial Reciente</Text>
            <HistoryItem value="120 kg" date="15 Junio, 2024" isNewPR />
            <HistoryItem value="118 kg" date="28 Mayo, 2024" />
            <HistoryItem value="115 kg" date="10 Mayo, 2024" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, padding: theme.spacing.l, textAlign: 'center' },
  filterContainer: { flexDirection: 'row', backgroundColor: theme.colors.surfaceDark, borderRadius: theme.borderRadii.l, margin: theme.spacing.m, padding: 4 },
  filterButton: { flex: 1, paddingVertical: 8, borderRadius: theme.borderRadii.m },
  filterButtonActive: { backgroundColor: 'rgba(255,255,255,0.1)' },
  filterText: { color: theme.colors.textSecondary, textAlign: 'center', fontSize: 12, fontWeight: '500' },
  filterTextActive: { color: theme.colors.text },
  metricContainer: { paddingHorizontal: theme.spacing.m, paddingBottom: theme.spacing.s, },
  metricButton: { paddingHorizontal: 20, height: 40, justifyContent: 'center', backgroundColor: theme.colors.surfaceDark, borderRadius: theme.borderRadii.full, marginRight: 8, borderWidth: 1, borderColor: theme.colors.border },
  metricButtonActive: { backgroundColor: theme.colors.primary, borderWidth: 0 },
  metricText: { color: theme.colors.textSecondary, fontWeight: '500' },
  metricTextActive: { color: theme.colors.backgroundDark, fontWeight: 'bold' },
  kpiContainer: { padding: theme.spacing.l },
  kpiLabel: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 14, marginBottom: 4 },
  kpiValue: { fontSize: 48, fontWeight: 'bold', color: theme.colors.text, },
  kpiUnit: { fontSize: 24, color: theme.colors.textSecondary, fontWeight: '500' },
  kpiBadge: { backgroundColor: 'rgba(19, 236, 91, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, marginBottom: 8 },
  kpiBadgeText: { color: theme.colors.primary, fontSize: 12, fontWeight: 'bold' },
  chartContainer: { backgroundColor: theme.colors.surfaceDark, margin: theme.spacing.m, padding: theme.spacing.l, borderRadius: theme.borderRadii.xl, borderWidth: 1, borderColor: theme.colors.border },
  chartTitle: { color: theme.colors.text, fontWeight: 'bold', marginBottom: theme.spacing.l, },
  chartPlaceholder: { height: 150, backgroundColor: 'rgba(0,0,0,0.2)', alignItems: 'center', justifyContent: 'center', borderRadius: theme.borderRadii.m },
  axisLabels: { flexDirection: 'row', justifyContent: 'space-between', marginTop: theme.spacing.s },
  axisLabel: { color: theme.colors.textSecondary, fontSize: 10, },
  historyContainer: { padding: theme.spacing.l, gap: theme.spacing.m },
  historyTitle: { color: theme.colors.text, fontSize: 18, fontWeight: 'bold' },
  historyItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme.colors.surfaceDark, padding: theme.spacing.m, borderRadius: theme.borderRadii.l, borderWidth: 1, borderColor: theme.colors.border },
  historyIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', alignItems: 'center', justifyContent: 'center' },
  historyValue: { color: theme.colors.text, fontWeight: 'bold', fontSize: 16 },
  historyDate: { color: theme.colors.textSecondary, fontSize: 12 },
  prBadge: { backgroundColor: 'rgba(255, 204, 0, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  prBadgeText: { color: '#ffcc00', fontSize: 10, fontWeight: 'bold' }
});
