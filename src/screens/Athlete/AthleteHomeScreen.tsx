// src/screens/Athlete/AthleteHomeScreen.tsx

/**
 * @file Pantalla principal del atleta ("Hoy").
 * Corresponde a la `Screen 35 - Design Syntax`.
 * Muestra un resumen del entrenamiento del día y las estadísticas clave.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

/**
 * @interface StatCardProps
 * @description Props para el componente StatCard.
 */
interface StatCardProps {
  icon: string; // Nombre del ícono (simulado con texto)
  value: string;
  label: string;
}

/**
 * @function StatCard
 * @description Tarjeta pequeña para mostrar una estadística clave.
 */
const StatCard: React.FC<StatCardProps> = ({ icon, value, label }) => (
  <View style={styles.statCard}>
    <Text style={styles.statIcon}>{icon}</Text>
    <Text style={styles.statValue}>{value}</Text>
    <Text style={styles.statLabel}>{label}</Text>
  </View>
);

// --- Componente Principal de la Pantalla ---

export const AthleteHomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>

        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.headerDate}>Hoy</Text>
            <Text style={styles.headerSubtitle}>Miércoles, 24 Oct</Text>
          </View>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCsCmTsPrPPaIfWDpROI6QxydHbLWpYBMT5Uelw3dkxpR5PrImzmWSSuyWSt1tFDZv-xAgw1Hb_vUEcZXAHY9vv6_1NwQmdHhbQ8FWCT6J8CxxJ5sWS4dgVwAvI3Iw1x31n7s90UoXBl5c_ZwRbDrE1ccxRQjzJRYZxfKlKbtn_yhKJeQtiLRzkiCe_82YAEmRpNAE5ePvKfSawBywgUN02Z2KxMgZApZ1effKszpRBeRdt-kvdNwFXD95revoe5xDeg2_M2MTK5V7g' }}
            style={styles.profileImage}
          />
        </View>

        {/* Headline */}
        <View style={styles.headlineContainer}>
            <Text style={styles.headline}>
                Tu entrenamiento <Text style={{ color: theme.colors.primary }}>para hoy</Text>
            </Text>
        </View>

        {/* Hero Workout Card */}
        <View style={styles.heroCardContainer}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpnph-sQfidEiLSCqJgtOGUJMkRG5wJ1c2gPMG59kuPlJvV3XR9JAIdakGYe1BMB_kJcThbVuMvnxQxBftjxNrGdrKqHsY63HR-gyUvEiwidsjH4w3MtcFdEELnRGPYY6GgJfmX5kLTdq1ebnpHoQf5oveJuOD-DIHUF9B2ZGqN5kNKxXswd7EhfCangIKLwQf_rXfZADefxBJ-A3NSLghYTQWg4PtyBuIZjbtE0c4p8H_Nyv0pS3XB1jc_eaIDLWqnAuaqbBJL-Q4' }}
            style={styles.heroCardImage}
          />
          <View style={styles.heroCardOverlay} />
          <View style={styles.heroCardContent}>
            <View>
              <View style={styles.heroHeader}>
                  <Text style={styles.heroTitle}>Fuerza Explosiva - Día 3</Text>
                  <Text style={styles.heroBadge}>Nuevo</Text>
              </View>
              <Text style={styles.heroSubtitle}>Asignado por Coach Martinez</Text>
            </View>
            <View style={styles.chipContainer}>
              <View style={styles.chip}>
                  {/* Icono simulado */}
                  <Text style={styles.chipIcon}>⏱️</Text>
                  <Text style={styles.chipText}>45 Min</Text>
              </View>
              <View style={styles.chip}>
                  {/* Icono simulado */}
                  <Text style={styles.chipIcon}>⚡</Text>
                  <Text style={styles.chipText}>Intensidad Alta</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={styles.statsSection}>
            <Text style={styles.sectionTitle}>Resumen de sesión</Text>
            <View style={styles.statsGrid}>
                <StatCard icon="🔥" value="350" label="Kcal" />
                <StatCard icon="🏋️" value="12" label="Ejercicios" />
                <StatCard icon="📋" value="Pesas" label="Equipo" />
            </View>
        </View>

      </ScrollView>

      {/* Footer con botón de acción */}
      <View style={styles.footer}>
          <Button title="Empezar" onPress={() => {}} />
          {/* Aquí iría el Tab Navigator */}
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { padding: theme.spacing.l, paddingBottom: 150 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', },
  headerDate: { color: theme.colors.textSecondary, fontSize: 12, textTransform: 'uppercase' },
  headerSubtitle: { color: theme.colors.text, fontSize: 20, fontWeight: 'bold' },
  profileImage: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: theme.colors.primary },
  headlineContainer: { marginTop: theme.spacing.xl, },
  headline: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  heroCardContainer: { marginTop: theme.spacing.l, borderRadius: theme.borderRadii.xl, overflow: 'hidden', backgroundColor: theme.colors.surfaceDark, borderWidth: 1, borderColor: theme.colors.border },
  heroCardImage: { width: '100%', height: 192, },
  heroCardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
  heroCardContent: { padding: theme.spacing.m, },
  heroHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' },
  heroTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text },
  heroSubtitle: { fontSize: 14, color: theme.colors.textSecondary },
  heroBadge: { backgroundColor: theme.colors.primary, color: theme.colors.background, fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 4, borderRadius: theme.borderRadii.full, overflow: 'hidden' },
  chipContainer: { flexDirection: 'row', gap: theme.spacing.s, marginTop: theme.spacing.m },
  chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 12, paddingVertical: 6, borderRadius: theme.borderRadii.l, },
  chipIcon: { fontSize: 14 },
  chipText: { color: theme.colors.text, fontSize: 12, fontWeight: '500', marginLeft: 4 },
  statsSection: { marginTop: theme.spacing.xl },
  sectionTitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: theme.spacing.m, },
  statsGrid: { flexDirection: 'row', gap: theme.spacing.m, },
  statCard: { flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: theme.colors.surfaceDark, padding: theme.spacing.m, borderRadius: theme.borderRadii.l, gap: theme.spacing.xs, borderWidth: 1, borderColor: theme.colors.border, },
  statIcon: { fontSize: 24, },
  statValue: { fontSize: 14, fontWeight: 'bold', color: theme.colors.text, },
  statLabel: { fontSize: 10, textTransform: 'uppercase', color: theme.colors.textSecondary, },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: theme.spacing.l, backgroundColor: 'rgba(16, 34, 22, 0.8)', borderTopWidth: 1, borderColor: theme.colors.border, },
});
