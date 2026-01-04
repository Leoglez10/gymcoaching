// src/screens/Coach/CoachSettingsScreen.tsx

/**
 * @file Pantalla de Ajustes para el Coach.
 * Corresponde a la `Screen 9 - Design Syntax`.
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
  Switch
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---
const SettingsRow = ({ icon, title, value, onPress, isToggle, toggleValue, onToggleChange }: any) => (
    <TouchableOpacity onPress={onPress} style={styles.row}>
        <View style={styles.rowLeft}>
            <View style={styles.iconContainer}><Text>{icon}</Text></View>
            <Text style={styles.rowTitle}>{title}</Text>
        </View>
        <View style={styles.rowRight}>
            {value && <Text style={styles.rowValue}>{value}</Text>}
            {isToggle
                ? <Switch value={toggleValue} onValueChange={onToggleChange} trackColor={{ false: theme.colors.surfaceDark, true: theme.colors.primary }} thumbColor="white" />
                : <Text style={styles.rowArrow}>›</Text>
            }
        </View>
    </TouchableOpacity>
);

// --- Componente Principal ---
export const CoachSettingsScreen = ({ navigation }: any) => {
    // Simulación de estado para el toggle de Dark Mode
    const [isDarkMode, setIsDarkMode] = React.useState(true);

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header (simplificado) */}
        <Text style={styles.headerTitle}>Account</Text>

        {/* Perfil */}
        <View style={styles.profileSection}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA5SHFiArCVwrzWC13bz6AlV7tbECDtcFDb2aZCNpaft690q0qTedvNlRQu0qLoAHyheo7yk-hW6cT5etdXbh6pxFuM3TAS55Nr3NA7pcLlr10Og7pSoKLltoHJKbStzji2-7HDWutAdIvqDtq8tbPK0r_szrjRfm83lxTQ4UPwjQT3zG-65LDRk0HgP4wZ5Fed0jfREVMgin3z1mvDKNL6uFK0a4fUazB9jXTzcQ59MyJB7OLSC9aJ8ihpqQ7lsqqxJ9IlbRNVpsKo' }} style={styles.avatar} />
            <Text style={styles.profileName}>Coach Alex</Text>
            <Text style={styles.profileTitle}>Performance Coach</Text>
        </View>

        {/* Botones de Acción */}
        <View style={styles.actionButtons}>
            <Button title="Gestionar Mis Datos" variant="secondary" onPress={() => {}} style={{flex: 1}} />
            <Button title="Gestionar Suscripción" onPress={() => {}} style={{flex: 1}} />
        </View>

        {/* Secciones de Ajustes */}
        <View style={{paddingHorizontal: 16, gap: 24, marginTop: 24}}>
            {/* Workspace */}
            <View>
                <Text style={styles.sectionTitle}>Workspace</Text>
                <View style={styles.card}>
                    <SettingsRow icon="🔌" title="Connected Apps" value="3 Active" onPress={() => {}} />
                    <SettingsRow icon="💳" title="Payment Methods" onPress={() => {}} />
                    <SettingsRow icon="👥" title="Team Settings" onPress={() => {}} />
                </View>
            </View>
            {/* App Preferences */}
            <View>
                <Text style={styles.sectionTitle}>App Preferences</Text>
                <View style={styles.card}>
                    <SettingsRow icon="🔔" title="Notifications" onPress={() => {}} />
                    <SettingsRow icon="🔒" title="Privacy & Security" onPress={() => {}} />
                    <SettingsRow icon="🌐" title="Language" value="English (US)" onPress={() => {}} />
                    <SettingsRow icon="🌙" title="Dark Mode" isToggle={true} toggleValue={isDarkMode} onToggleChange={setIsDarkMode} />
                </View>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center', padding: 16 },
    profileSection: { alignItems: 'center', padding: 16 },
    avatar: { width: 112, height: 112, borderRadius: 56, borderWidth: 4, borderColor: theme.colors.surfaceDark },
    profileName: { color: theme.colors.text, fontSize: 24, fontWeight: 'bold', marginTop: 12 },
    profileTitle: { color: theme.colors.textSecondary, fontSize: 14 },
    actionButtons: { flexDirection: 'row', gap: 12, paddingHorizontal: 16 },
    sectionTitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: 8, marginLeft: 8 },
    card: { backgroundColor: theme.colors.surfaceDark, borderRadius: 16, overflow: 'hidden' },
    row: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
    rowLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
    iconContainer: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(19, 236, 91, 0.1)' },
    rowTitle: { color: theme.colors.text, fontSize: 16 },
    rowRight: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    rowValue: { color: theme.colors.textSecondary },
    rowArrow: { color: theme.colors.textSecondary, fontSize: 24 },
});
