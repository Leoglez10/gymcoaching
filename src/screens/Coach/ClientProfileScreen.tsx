// src/screens/Coach/ClientProfileScreen.tsx

/**
 * @file Pantalla de Perfil Detallado del Cliente (Atleta).
 * Corresponde a la `Screen 13 - Design Syntax`.
 * Muestra el progreso, rutinas y notas de un atleta específico.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

const ProfileHeader = () => (
    <View style={styles.profileHeader}>
        <Image
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8yoQKd4E-TFTGrlW_2rkxoJLHAQ22lXvcda745wuMuShmmd1zX1JTstLMygZD0KaERgvy8qTGnpLl6y8Bry_b-oxmRV2tbdAJKklMtJQ7glrqxjSmdwFd8m4lrZljIkTFA1wTR8AgLQ8DraLQZZUNTPGB7D-mOh_hxAVpOwzLojVmKwH_SpYIRlO5IHVyZgiAYdvRqHDoBRwcRlt3I5-8sBmJiPbCNZ8K-_no9Eo1kjTUS8wqPNz7asMMJ66m9fg3CZuJtacdQSKy' }}
            style={styles.avatar}
        />
        <Text style={styles.profileName}>Alex Morgan</Text>
        <Text style={styles.profileMeta}>Soccer • Forward • <Text style={{color: theme.colors.primary}}>Active</Text></Text>
        <View style={styles.actionButtons}>
            <Button title="Message" onPress={() => {}} style={{flex: 1}} />
            <Button title="Edit" onPress={() => {}} variant="secondary" style={{flex: 1}} />
        </View>
    </View>
);

const StatCard = ({ label, value }: { label: string, value: string }) => (
    <View style={styles.statCard}>
        <Text style={styles.statLabel}>{label}</Text>
        <Text style={styles.statValue}>{value}</Text>
    </View>
);

const TabSelector = ({ selectedTab, onSelect }: { selectedTab: string, onSelect: (tab: string) => void }) => (
    <View style={styles.tabContainer}>
        {['Progress', 'Routines', 'Notes'].map(tab => (
            <TouchableOpacity
                key={tab}
                style={[styles.tabButton, selectedTab === tab && styles.tabButtonActive]}
                onPress={() => onSelect(tab)}
            >
                <Text style={[styles.tabText, selectedTab === tab && styles.tabTextActive]}>{tab}</Text>
            </TouchableOpacity>
        ))}
    </View>
);

const ActivityItem = ({ icon, title, subtitle, status }: { icon: string, title: string, subtitle: string, status: 'done' | 'skipped' }) => (
    <View style={styles.activityItem}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
            <View style={[styles.activityIcon, {backgroundColor: status === 'done' ? 'rgba(19, 236, 91, 0.1)' : 'rgba(239, 68, 68, 0.1)'}]}>
                <Text style={{fontSize: 24, color: status === 'done' ? theme.colors.primary : '#ef4444' }}>{icon}</Text>
            </View>
            <View>
                <Text style={styles.activityTitle}>{title}</Text>
                <Text style={styles.activitySubtitle}>{subtitle}</Text>
            </View>
        </View>
        {status === 'done' ? <Text>✓</Text> : <Text style={{color: '#ef4444'}}>✕</Text>}
    </View>
);

// --- Componente Principal ---

export const ClientProfileScreen = () => {
    const [currentTab, setCurrentTab] = useState('Progress');

    return (
        <SafeAreaView style={styles.screen}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <ProfileHeader />
                <View style={styles.statsRow}>
                    <StatCard label="Compliance" value="95%" />
                    <StatCard label="Last Workout" value="Yesterday" />
                    <StatCard label="Next Session" value="Tomorrow" />
                </View>
                <TabSelector selectedTab={currentTab} onSelect={setCurrentTab} />

                {/* Contenido Condicional del Tab */}
                {currentTab === 'Progress' && (
                    <View style={styles.tabContent}>
                        {/* Gráfico de Carga Semanal (Placeholder) */}
                        <View style={styles.chartCard}>
                            <Text style={styles.cardTitle}>Weekly Load</Text>
                             <View style={styles.chartPlaceholder}>
                                <Text style={{color: theme.colors.textSecondary}}>Bar Chart Placeholder</Text>
                            </View>
                        </View>
                        {/* Actividad Reciente */}
                        <View style={{gap: 12}}>
                            <Text style={styles.sectionTitle}>Recent Activity</Text>
                            <ActivityItem icon="🏋️" title="Lower Body Power" subtitle="Yesterday • 45 mins" status="done" />
                            <ActivityItem icon="🏃" title="Recovery Run" subtitle="Oct 24 • 30 mins" status="done" />
                            <ActivityItem icon="🧘" title="Mobility Flow" subtitle="Oct 22 • 20 mins" status="skipped" />
                        </View>
                    </View>
                )}
                {/* Aquí irían los otros tabs */}

            </ScrollView>
            <View style={styles.footer}>
                <Button title="Assign Workout" onPress={() => {}} />
            </View>
        </SafeAreaView>
    );
};

// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    scrollContainer: { paddingBottom: 100 },
    profileHeader: { alignItems: 'center', padding: 24 },
    avatar: { width: 112, height: 112, borderRadius: 56, borderWidth: 2, borderColor: theme.colors.primary },
    profileName: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, marginTop: 16 },
    profileMeta: { color: theme.colors.textSecondary, marginTop: 4 },
    actionButtons: { flexDirection: 'row', gap: 12, marginTop: 24 },
    statsRow: { flexDirection: 'row', justifyContent: 'space-around', paddingHorizontal: 16, gap: 12 },
    statCard: { flex: 1, backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12, alignItems: 'center' },
    statLabel: { color: theme.colors.textSecondary, fontSize: 12, marginBottom: 4 },
    statValue: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
    tabContainer: { flexDirection: 'row', backgroundColor: theme.colors.surfaceDark, margin: 16, borderRadius: 12, padding: 4 },
    tabButton: { flex: 1, paddingVertical: 10, borderRadius: 8 },
    tabButtonActive: { backgroundColor: theme.colors.background },
    tabText: { color: theme.colors.textSecondary, textAlign: 'center', fontWeight: '600' },
    tabTextActive: { color: theme.colors.text },
    tabContent: { paddingHorizontal: 16, gap: 24 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text },
    chartCard: { backgroundColor: theme.colors.surfaceDark, borderRadius: 16, padding: 16 },
    cardTitle: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
    chartPlaceholder: { height: 150, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 8, marginTop: 16 },
    activityItem: { backgroundColor: theme.colors.surfaceDark, padding: 16, borderRadius: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
    activityIcon: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center' },
    activityTitle: { color: theme.colors.text, fontWeight: 'bold' },
    activitySubtitle: { color: theme.colors.textSecondary, fontSize: 12 },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 16, backgroundColor: 'rgba(16, 34, 22, 0.8)', borderTopWidth: 1, borderColor: theme.colors.border }
});
