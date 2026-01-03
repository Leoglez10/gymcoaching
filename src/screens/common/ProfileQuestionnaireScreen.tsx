// src/screens/common/ProfileQuestionnaireScreen.tsx

/**
 * @file Pantalla de cuestionario de perfil para onboarding.
 * Reutilizable para `Screen 33` (Athlete) y `Screen 17` (Coach).
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  TextInput as RNTextInput,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Tipos ---
type UserRole = 'athlete' | 'coach';

// --- Componentes Locales ---

const SpecialtyChip = ({ label, icon, isSelected, onPress }: { label: string, icon: string, isSelected: boolean, onPress: () => void }) => (
    <TouchableOpacity
        style={[styles.chip, isSelected && styles.chipSelected]}
        onPress={onPress}
    >
        <Text style={{fontSize: 24}}>{icon}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%'}}>
            <Text style={[styles.chipText, isSelected && styles.chipTextSelected]}>{label}</Text>
            {isSelected && <Text style={{color: theme.colors.backgroundDark}}>✓</Text>}
        </View>
    </TouchableOpacity>
);


// --- Componente Principal ---

export const ProfileQuestionnaireScreen = ({ role = 'coach' }: { role: UserRole }) => {
    const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>(['Fuerza', 'Rehab']);

    const toggleSpecialty = (specialty: string) => {
        setSelectedSpecialties(prev =>
            prev.includes(specialty)
                ? prev.filter(s => s !== specialty)
                : [...prev, specialty]
        );
    };

    const specialties = [
        { label: 'Fuerza', icon: '🏋️' },
        { label: 'Cardio', icon: '❤️' },
        { label: 'Yoga', icon: '🧘' },
        { label: 'Crossfit', icon: '🏃' },
        { label: 'Rehab', icon: '🩹' },
        { label: 'Juvenil', icon: '🤸' },
    ];

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Progress Indicator */}
        <View style={styles.progressContainer}>
            <View style={[styles.progressStep, styles.progressStepActive]} />
            <View style={styles.progressStep} />
            <View style={styles.progressStep} />
        </View>

        {/* Header */}
        <Text style={styles.title}>
            {role === 'coach' ? 'Elige tus especialidades' : '¿Cuál es tu principal objetivo?'}
        </Text>
        <Text style={styles.subtitle}>
            {role === 'coach'
                ? 'Selecciona las áreas en las que te enfocas como entrenador.'
                : 'Selecciona la meta que mejor describa lo que quieres lograr.'
            }
        </Text>

        {/* Chips Grid */}
        <View style={styles.grid}>
            {specialties.map(({ label, icon }) => (
                <SpecialtyChip
                    key={label}
                    label={label}
                    icon={icon}
                    isSelected={selectedSpecialties.includes(label)}
                    onPress={() => toggleSpecialty(label)}
                />
            ))}
        </View>

        {/* Input Adicional */}
        <Text style={styles.inputLabel}>
            ¿Qué quieres lograr con esta plataforma?
        </Text>
        <RNTextInput
            style={styles.textArea}
            placeholder="¿Cuál es tu principal objetivo?"
            placeholderTextColor={theme.colors.textSecondary}
            multiline
        />
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
        <Button title="Comenzar mi viaje" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    scrollContainer: { padding: 24, paddingBottom: 120 },
    progressContainer: { flexDirection: 'row', gap: 8, marginBottom: 24, },
    progressStep: { flex: 1, height: 6, borderRadius: 3, backgroundColor: theme.colors.surfaceDark },
    progressStepActive: { backgroundColor: theme.colors.primary },
    title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text, },
    subtitle: { fontSize: 16, color: theme.colors.textSecondary, marginTop: 8, marginBottom: 24 },
    grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 12, },
    chip: { width: '48%', height: 96, backgroundColor: theme.colors.surfaceDark, borderRadius: 16, padding: 16, justifyContent: 'space-between' },
    chipSelected: { backgroundColor: theme.colors.primary },
    chipText: { color: theme.colors.text, fontWeight: 'bold' },
    chipTextSelected: { color: theme.colors.backgroundDark, fontWeight: 'bold' },
    inputLabel: { color: theme.colors.text, fontWeight: '600', marginTop: 32, marginBottom: 8 },
    textArea: { backgroundColor: theme.colors.surfaceDark, borderRadius: 12, height: 80, padding: 16, color: theme.colors.text, textAlignVertical: 'top' },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: theme.colors.background, borderTopWidth: 1, borderColor: theme.colors.border },
});
