// src/screens/common/NotificationSettingsScreen.tsx

/**
 * @file Pantalla de Ajustes de Notificaciones.
 * Reutilizable para `Screen 2` (Athlete), `Screen 12` (Coach), y `Screen 39` (Coach).
 */

import React from 'react';
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

// --- Tipos ---
type UserRole = 'athlete' | 'coach';
interface SettingRowProps {
  title: string;
  description: string;
  icon: string;
  hasToggle: boolean;
  value?: boolean;
  onValueChange?: (value: boolean) => void;
}

// --- Componentes Locales ---
const SettingRow: React.FC<SettingRowProps> = ({ title, description, icon, hasToggle, value, onValueChange }) => (
    <View style={styles.row}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View style={styles.iconContainer}><Text>{icon}</Text></View>
            <View>
                <Text style={styles.rowTitle}>{title}</Text>
                <Text style={styles.rowDescription}>{description}</Text>
            </View>
        </View>
        {hasToggle && (
            <Switch
                value={value}
                onValueChange={onValueChange}
                trackColor={{ false: theme.colors.surfaceDark, true: theme.colors.primary }}
                thumbColor={theme.colors.textOnDark}
            />
        )}
    </View>
);

// --- Componente Principal ---
export const NotificationSettingsScreen = ({ role = 'athlete' }: { role: UserRole }) => {

    const athleteSettings = [
        { section: 'Communication', items: [
            { title: 'Direct Messages', description: 'From coach & teammates', icon: '💬', hasToggle: true, value: true },
        ]},
        { section: 'Training & Schedule', items: [
            { title: 'Workout Reminders', description: '15 mins before start', icon: '🏋️', hasToggle: true, value: true },
            { title: 'Missed Workouts', description: 'Alerts for unlogged sessions', icon: '❗', hasToggle: true, value: false },
        ]}
    ];

    const coachSettings = [
         { section: 'Client Communication', items: [
            { title: 'New Messages', description: 'Direct chats from athletes', icon: '💬', hasToggle: true, value: true },
            { title: 'Video Submissions', description: 'Technique review uploads', icon: '📹', hasToggle: true, value: true },
        ]},
        { section: 'Athlete Progress', items: [
            { title: 'PR Alerts', description: 'New personal records', icon: '🏆', hasToggle: true, value: true },
        ]}
    ];

    const settings = role === 'athlete' ? athleteSettings : coachSettings;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <Text style={styles.headerTitle}>Notifications</Text>
        {settings.map(section => (
            <View key={section.section} style={styles.section}>
                <Text style={styles.sectionTitle}>{section.section}</Text>
                <View style={styles.card}>
                    {section.items.map((item, index) => (
                        <React.Fragment key={item.title}>
                            <SettingRow {...item} />
                            {index < section.items.length - 1 && <View style={styles.divider} />}
                        </React.Fragment>
                    ))}
                </View>
            </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, padding: 16 },
    section: { paddingHorizontal: 16, marginBottom: 24, },
    sectionTitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: 8 },
    card: { backgroundColor: theme.colors.surfaceDark, borderRadius: 12 },
    row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 12 },
    iconContainer: { width: 40, height: 40, borderRadius: 20, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(19, 236, 91, 0.1)' },
    rowTitle: { color: theme.colors.text, fontWeight: '600' },
    rowDescription: { color: theme.colors.textSecondary, fontSize: 12 },
    divider: { height: 1, backgroundColor: theme.colors.border, marginLeft: 68 }
});
