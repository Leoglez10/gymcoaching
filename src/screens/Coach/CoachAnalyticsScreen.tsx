// src/screens/Coach/CoachAnalyticsScreen.tsx

/**
 * @file Pantalla de Analíticas y Adherencia para el Coach.
 * Corresponde a la `Screen 32 - Design Syntax`.
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
const KPI_CARD = ({ icon, label, value, change }: any) => (
    <View style={styles.kpiCard}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8, color: theme.colors.textSecondary}}>
            <Text>{icon}</Text>
            <Text style={styles.kpiLabel}>{label}</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'baseline', gap: 8}}>
            <Text style={styles.kpiValue}>{value}</Text>
            <Text style={styles.kpiChange}>{change}</Text>
        </View>
    </View>
);

const ClientRiskItem = ({ name, lastActive, adherence, imageUrl }: any) => (
    <View style={styles.riskItem}>
        <Image source={{ uri: imageUrl }} style={styles.riskAvatar} />
        <View style={{flex: 1}}>
            <Text style={styles.riskName}>{name}</Text>
            <Text style={styles.riskLastActive}>{lastActive}</Text>
        </View>
        <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.riskAdherence}>{adherence}</Text>
            <Text style={styles.riskLabel}>Adherence</Text>
        </View>
    </View>
);

// --- Componente Principal ---
export const CoachAnalyticsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text style={styles.headerTitle}>Analytics</Text>

        {/* KPIs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{padding: 16, gap: 12}}>
            <KPI_CARD icon="📊" label="Avg. Adherence" value="87%" change="+2.1%" />
            <KPI_CARD icon="🏋️" label="Total Volume" value="24.5k" change="+5.4%" />
            <KPI_CARD icon="👥" label="Active Clients" value="14" change="-0" />
        </ScrollView>

        {/* Gráfico de Adherencia (Placeholder) */}
        <View style={styles.chartContainer}>
            <Text style={styles.sectionTitle}>Adherencia Semanal</Text>
            <View style={styles.chartPlaceholder}><Text style={{color: theme.colors.textSecondary}}>Bar Chart Placeholder</Text></View>
        </View>

        {/* Clientes en Riesgo */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Needs Attention</Text>
            <ClientRiskItem name="Sarah Jenkins" lastActive="Last active: 3 days ago" adherence="72%" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDM7g9DqiW9ZNdfhjCjP0aoK2PCwZnlvA7B78wSAdcV7u3ildOzblBnjnRayx3qXexjHG-HoE9vdcj1gqrytNZc6sv87twV82WplWW2c1sNgxbc_ThkZnmEfOUSgTPloT29DBIYtFCZerAhsMDdvE5i10cK7RThmymdziyocqEUcvZQIpHfyxVaCJRWJJ8gvXiqPf9mzRSNkhbv1iJpF6OZ0S78-0Cx3I_XMGlkulXdEWwWBfIYLCzF-ogtAxqJCiWGaaR65ZOPqmku" />
            <ClientRiskItem name="Mike Ross" lastActive="Last active: 5 days ago" adherence="64%" imageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDUW6QeHwcG9AK9jydcJPYKvn2zcfMfyTMkBQqkkIfRqcnPiCC46OVmBngDL1GdxY-GuFXYn_NqyxJHnoZmxqTRYGJoWhAN4_5nzRAi-sLQ4L4LLAdJLvsSNAp_bJydUJKSTVlJMg1rghvPmGl_rUZTQDQ_-LgbpJEbbV2rCkeeJmhq5xmJeZzrp3sFpM9dTR4A8X0DCL5iCpjJw-BI9ElvZHdGnoJlsHzUkR8WTurhtEJF22pZIVu6WGlOdTDhid2hY3J9b-gm7mA9" />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, padding: 16 },
    kpiCard: { width: 160, backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12, gap: 8 },
    kpiLabel: { color: theme.colors.textSecondary, fontSize: 12, textTransform: 'uppercase' },
    kpiValue: { color: theme.colors.text, fontSize: 24, fontWeight: 'bold' },
    kpiChange: { color: theme.colors.primary, fontSize: 12 },
    sectionContainer: { padding: 16, gap: 12 },
    sectionTitle: { color: theme.colors.text, fontSize: 18, fontWeight: 'bold', marginBottom: 8 },
    chartContainer: { backgroundColor: theme.colors.surfaceDark, margin: 16, padding: 16, borderRadius: 12 },
    chartPlaceholder: { height: 150, justifyContent: 'center', alignItems: 'center' },
    riskItem: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12 },
    riskAvatar: { width: 48, height: 48, borderRadius: 24 },
    riskName: { color: theme.colors.text, fontWeight: 'bold' },
    riskLastActive: { color: theme.colors.textSecondary, fontSize: 12 },
    riskAdherence: { color: '#ef4444', fontWeight: 'bold', fontSize: 16 },
    riskLabel: { color: theme.colors.textSecondary, fontSize: 10 }
});
