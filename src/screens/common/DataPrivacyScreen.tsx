// src/screens/common/DataPrivacyScreen.tsx

/**
 * @file Pantalla de Privacidad y Gestión de Datos.
 * Corresponde a la `Screen 8 - Design Syntax`.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Switch,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

const ToggleRow = ({ icon, title, description, value, onValueChange }: any) => (
    <View style={styles.row}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16, flex: 1}}>
            <View style={styles.iconContainer}><Text>{icon}</Text></View>
            <View style={{flex: 1}}>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowDescription}>{description}</Text>
            </View>
        </View>
        <Switch
            value={value}
            onValueChange={onValueChange}
            trackColor={{ false: theme.colors.surfaceDark, true: theme.colors.primary }}
            thumbColor={theme.colors.textOnDark}
        />
    </View>
);


// --- Componente Principal ---
export const DataPrivacyScreen = () => {
    const [shareBiometrics, setShareBiometrics] = useState(true);
    const [useAnalytics, setUseAnalytics] = useState(false);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header */}
        <Text style={styles.headerTitle}>Privacy & Security</Text>

        {/* Status Card */}
        <View style={styles.statusCard}>
            <Text style={{fontSize: 24}}>🛡️</Text>
            <View style={{flex: 1}}>
                <Text style={styles.statusTitle}>Status: Protected</Text>
                <Text style={styles.statusDescription}>Your health data is encrypted and HIPAA compliant.</Text>
            </View>
        </View>

        {/* Controles de Consentimiento */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Data Sharing & Consent</Text>
            <ToggleRow
                icon="❤️"
                title="Share Biometrics"
                description="Allow coaches to view heart rate."
                value={shareBiometrics}
                onValueChange={setShareBiometrics}
            />
            <ToggleRow
                icon="📊"
                title="Analytics Processing"
                description="Anonymized data for improvements."
                value={useAnalytics}
                onValueChange={setUseAnalytics}
            />
        </View>

        {/* Botones de Acción */}
        <View style={styles.section}>
            <Button title="Exportar mis datos" onPress={() => {}} variant="secondary" />
        </View>

        {/* Zona de Peligro */}
        <TouchableOpacity style={styles.dangerButton}>
            <Text style={styles.dangerButtonText}>Delete Account & Data</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    container: { padding: 16, gap: 24 },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center' },
    statusCard: { flexDirection: 'row', alignItems: 'center', gap: 16, backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12 },
    statusTitle: { color: theme.colors.text, fontWeight: 'bold' },
    statusDescription: { color: theme.colors.textSecondary, fontSize: 12, marginTop: 4 },
    section: { gap: 12 },
    sectionTitle: { color: theme.colors.text, fontWeight: 'bold', fontSize: 18 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12 },
    iconContainer: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(19, 236, 91, 0.1)' },
    rowTitle: { color: theme.colors.text, fontWeight: '600' },
    rowDescription: { color: theme.colors.textSecondary, fontSize: 12 },
    dangerButton: { marginTop: 32, backgroundColor: 'rgba(239, 68, 68, 0.1)', padding: 16, borderRadius: 12, borderWidth: 1, borderColor: 'rgba(239, 68, 68, 0.2)', alignItems: 'center' },
    dangerButtonText: { color: '#ef4444', fontWeight: 'bold' }
});
