// src/screens/Coach/AssignRoutineScreen.tsx

/**
 * @file Pantalla para Asignar una Rutina a Atletas.
 * Corresponde a la `Screen 23 - Design Syntax`.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

// --- Tipos y Datos Mock ---
const mockAthletes = [
    { id: '1', name: 'Juan Pérez', status: 'Active', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC1XeqHqRHO4Sc8f4tJAT4FAB0nUZFOFQi7XJsFxyA4TSRBavup4eT_McF2vGFncd6otvAfbfS3nMjANkBbJyoUaxoT-SLLOJsDzVk6fFNQivP5T3meDrH8AlWIUvsehfnHpkSobAr3JUWqkgSm81S5WH3OSjtQcV_hqsUEgciL_T5OdULZwTRUxgVuU1-9QnsdfvgfFOa7g1aehlmFAuKZJb35mBSiod0YUCUMkj6JzOpn25wQZ-SzjedZCowomsPMc2pT1mKtEDe4' },
    { id: '2', name: 'Maria Garcia', status: 'Active', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfbmdqXlrKrBL0kZtG-0CBNzoBgPHfIjunE2DUlbg8LbUTNf57FL6qLdMFwhbcPoHiAjWA1JjY5XgEt-kbfbw2ugvKBztxgdB1O47KR3ngBQhWoytYjI9VNFC1ZR9rUp5hcAGlPnXkMXrdt_A5UXBmw7lDK5JmYgIGEbkizmzhFKVHhIw59W8U_S5FMdd4EpvhGWY2vq8V_efxrnCOydGdJbDOLIPm9OiWPkzyJEZNIM4UElBA6c4WPEksf14LOR8KcALHo9LCh98q' },
    { id: '3', name: 'Carlos Rodriguez', status: 'Inactive', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrI8j-2xPlvYkf_N8WM3b0YKmE0P-aClgL56YlR5i9b7LZqlHz5sS915e37qyGDZMTiS0-6-EmN48--EoEBRZX4KVMZipsyP_pvh6lHUZL3Bn5FalCFRBXa-ezR9tbmrwQbmE8riU3bxgtHNESxFE-PSzk7EfrtJWIWp61Hf8weRK9GYmpB82m2f3CH54g1l2XtleqR_-bjGwv4Ja4vcxaiDsoPP0U3ncrsfiEjsTd5EWnZ1tPUxO68vr_7XApdHT1rjHYTWbizQO-' },
];

// --- Componentes Locales ---
const AthleteCheckboxItem = ({ athlete, isSelected, onSelect }: any) => (
    <TouchableOpacity style={styles.itemContainer} onPress={onSelect}>
        <Image source={{ uri: athlete.imageUrl }} style={styles.avatar} />
        <View style={{flex: 1}}>
            <Text style={styles.itemName}>{athlete.name}</Text>
            <Text style={styles.itemStatus}>{athlete.status}</Text>
        </View>
        <View style={[styles.checkbox, isSelected && styles.checkboxSelected]}>
            {isSelected && <Text style={{color: theme.colors.backgroundDark, fontWeight: 'bold'}}>✓</Text>}
        </View>
    </TouchableOpacity>
);

// --- Componente Principal ---
export const AssignRoutineScreen = () => {
    const [selectedAthletes, setSelectedAthletes] = useState(['1', '2']);

    const toggleAthlete = (id: string) => {
        setSelectedAthletes(prev =>
            prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
        );
    };

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header */}
        <Text style={styles.headerTitle}>Assign Routine</Text>

        {/* Resumen de Rutina */}
        <View style={styles.routineCard}>
            <Text style={styles.routineTitle}>HIIT Cardio Blast</Text>
            <Text style={styles.routineMeta}>45 mins • Advanced</Text>
        </View>

        {/* Tabs */}
        <View style={styles.tabBar}>
            <TouchableOpacity style={[styles.tab, styles.tabActive]}>
                <Text style={[styles.tabText, styles.tabTextActive]}>Athletes</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.tab}>
                <Text style={styles.tabText}>Groups</Text>
            </TouchableOpacity>
        </View>

        {/* Lista de Atletas */}
        <View style={styles.listContainer}>
            <Text style={styles.listHeader}>All Athletes (24)</Text>
            {mockAthletes.map(athlete => (
                <AthleteCheckboxItem
                    key={athlete.id}
                    athlete={athlete}
                    isSelected={selectedAthletes.includes(athlete.id)}
                    onSelect={() => toggleAthlete(athlete.id)}
                />
            ))}
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
          <Button title={`Assign to ${selectedAthletes.length} Recipients`} onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, padding: 16 },
    routineCard: { backgroundColor: theme.colors.surfaceDark, margin: 16, padding: 16, borderRadius: 12 },
    routineTitle: { color: theme.colors.text, fontSize: 18, fontWeight: 'bold' },
    routineMeta: { color: theme.colors.textSecondary, marginTop: 4 },
    tabBar: { flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: theme.colors.border, marginHorizontal: 16 },
    tab: { flex: 1, paddingBottom: 12, borderBottomWidth: 3, borderBottomColor: 'transparent' },
    tabActive: { borderBottomColor: theme.colors.primary },
    tabText: { color: theme.colors.textSecondary, textAlign: 'center', fontWeight: 'bold' },
    tabTextActive: { color: theme.colors.text },
    listContainer: { padding: 16 },
    listHeader: { color: theme.colors.textSecondary, marginBottom: 8, textTransform: 'uppercase' },
    itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12, marginBottom: 8 },
    avatar: { width: 48, height: 48, borderRadius: 24, marginRight: 12 },
    itemName: { color: theme.colors.text, fontWeight: 'bold' },
    itemStatus: { color: theme.colors.primary, fontSize: 12 },
    checkbox: { width: 24, height: 24, borderRadius: 12, borderWidth: 2, borderColor: theme.colors.border, justifyContent: 'center', alignItems: 'center' },
    checkboxSelected: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
    footer: { padding: 16, borderTopWidth: 1, borderColor: theme.colors.border, backgroundColor: theme.colors.background }
});
