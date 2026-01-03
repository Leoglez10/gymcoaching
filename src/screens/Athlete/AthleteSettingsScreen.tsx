// src/screens/Athlete/AthleteSettingsScreen.tsx

/**
 * @file Pantalla de Ajustes para el Atleta.
 * Corresponde a la `Screen 7 - Design Syntax`.
 * Funciona como un centro de navegación hacia otras sub-pantallas de configuración.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Componentes Locales ---

/**
 * @interface SettingsRowProps
 * @description Props para el componente SettingsRow.
 */
interface SettingsRowProps {
  icon: string; // Nombre del ícono (simulado)
  title: string;
  value?: string;
  onPress: () => void;
  iconBackgroundColor: string;
}

/**
 * @function SettingsRow
 * @description Un componente de fila para un elemento del menú de ajustes.
 */
const SettingsRow: React.FC<SettingsRowProps> = ({ icon, title, value, onPress, iconBackgroundColor }) => (
  <TouchableOpacity style={styles.row} onPress={onPress}>
    <View style={styles.rowLeft}>
      <View style={[styles.iconContainer, { backgroundColor: iconBackgroundColor }]}>
        <Text style={{ fontSize: 20 }}>{icon}</Text>
      </View>
      <Text style={styles.rowTitle}>{title}</Text>
    </View>
    <View style={styles.rowRight}>
      {value && <Text style={styles.rowValue}>{value}</Text>}
      {/* Ícono de flecha simulado */}
      <Text style={styles.rowArrow}>›</Text>
    </View>
  </TouchableOpacity>
);

// --- Componente Principal de la Pantalla ---

export const AthleteSettingsScreen = () => {
  // Las funciones onPress navegarían a las pantallas correspondientes.
  // ej. navigation.navigate('EditProfile');
  const navigateTo = (screenName: string) => console.log(`Navigating to ${screenName}`);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView>
        {/* Header con Perfil */}
        <View style={styles.profileHeader}>
          <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9f9LzEF8GeXduj5N0ApLLCzdkksqGJ7rBiiKuLnIM1RKHPNVNb5pZmkBBYcnyPzJjhQET-eJqs4LhuS5-foNLxGchybnpcqnPfbw0Uh6FcnYlNj8gIJuRlc6Qe1NQZU0hk8XcaUOAboBebDmhmaNbL-QbnGCvX-0jgj1EoZDz3zvpp1N10skVKVdSrWm2dna7AxNIKp8uYG5FpQ-4Qs-w_CfVQFQLTnqgciNdqN96jpmM9mHtp_6wNBWCFLrSEuu1mB0MvRM24n-H' }}
            style={styles.profileImage}
          />
          <Text style={styles.profileName}>Alex Rivera</Text>
          <Text style={styles.profileSport}>Varsity Track & Field</Text>
        </View>

        {/* Grupos de Ajustes */}
        <View style={styles.settingsContainer}>
          {/* Grupo 1: Cuenta */}
          <View style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>Account</Text>
            <View style={styles.groupCard}>
              <SettingsRow icon="👤" title="Edit Profile" onPress={() => navigateTo('EditProfile')} iconBackgroundColor="#3b82f6" />
              <View style={styles.divider} />
              <SettingsRow icon="🏋️" title="Physical Stats" onPress={() => navigateTo('PhysicalStats')} iconBackgroundColor="#10b981" />
            </View>
          </View>

          {/* Grupo 2: Tech & Data */}
          <View style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>Tech & Integrations</Text>
            <View style={styles.groupCard}>
              <SettingsRow icon="⌚" title="Connected Apps" onPress={() => navigateTo('ConnectedApps')} iconBackgroundColor="#f97316" />
              <View style={styles.divider} />
              <SettingsRow icon="🛡️" title="Privacy & Security" onPress={() => navigateTo('Privacy')} iconBackgroundColor="#8b5cf6" />
            </View>
          </View>

          {/* Grupo 3: Preferencias */}
          <View style={styles.settingsGroup}>
            <Text style={styles.groupTitle}>Preferences</Text>
            <View style={styles.groupCard}>
              <SettingsRow icon="🔔" title="Notifications" onPress={() => navigateTo('Notifications')} iconBackgroundColor="#ef4444" />
              <View style={styles.divider} />
              <SettingsRow icon="🌗" title="Display Settings" value="Dark" onPress={() => navigateTo('Display')} iconBackgroundColor="#6366f1" />
            </View>
          </View>
        </View>

        {/* Botón de Logout */}
        <View style={styles.logoutContainer}>
            <TouchableOpacity>
                <Text style={styles.logoutText}>Log Out</Text>
            </TouchableOpacity>
        </View>

        <Text style={styles.versionText}>Version 1.0.4</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  profileHeader: { alignItems: 'center', paddingVertical: theme.spacing.xl, },
  profileImage: { width: 112, height: 112, borderRadius: 56, borderWidth: 4, borderColor: theme.colors.surfaceDark, marginBottom: theme.spacing.m },
  profileName: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, },
  profileSport: { fontSize: 14, color: theme.colors.textSecondary, marginTop: 4, },
  settingsContainer: { paddingHorizontal: theme.spacing.m, gap: theme.spacing.xl, },
  settingsGroup: {},
  groupTitle: { color: theme.colors.textSecondary, fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: theme.spacing.s, marginLeft: theme.spacing.s },
  groupCard: { backgroundColor: theme.colors.surfaceDark, borderRadius: theme.borderRadii.xl, overflow: 'hidden', borderWidth: 1, borderColor: theme.colors.border },
  row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: theme.spacing.m, },
  rowLeft: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.m },
  iconContainer: { width: 36, height: 36, borderRadius: 18, alignItems: 'center', justifyContent: 'center', },
  rowTitle: { color: theme.colors.text, fontSize: 16, },
  rowRight: { flexDirection: 'row', alignItems: 'center', gap: theme.spacing.s },
  rowValue: { color: theme.colors.textSecondary, fontSize: 14, },
  rowArrow: { color: theme.colors.textSecondary, fontSize: 20, },
  divider: { height: 1, backgroundColor: theme.colors.border, marginLeft: 64, },
  logoutContainer: { marginTop: theme.spacing.xl, alignItems: 'center', },
  logoutText: { color: theme.colors.error, fontSize: 16, fontWeight: '500', },
  versionText: { color: theme.colors.textSecondary, fontSize: 12, textAlign: 'center', marginTop: theme.spacing.l, opacity: 0.5 },
});
