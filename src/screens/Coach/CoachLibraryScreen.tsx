// src/screens/Coach/CoachLibraryScreen.tsx

/**
 * @file Pantalla de Biblioteca de Programas/Rutinas del Coach.
 * Corresponde a la `Screen 22 - Design Syntax`.
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
} from 'react-native';
import { theme } from '../../styles/theme';
import { TextInput } from '../../components/common/TextInput';

// --- Componentes Locales ---
const ProgramCard = ({ title, description, tags, activeAthletes, userImages }: any) => (
    <TouchableOpacity style={styles.card}>
        <View style={styles.cardHeader}>
            <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAT15L4HrHsdbhMgb0hTLkiqTgyhpj88wcxMNSVPi8tVA7TRkg4A-neFsBF9o9vo8prxbdI1-lyVmTSRYuOy1tYAW9G9a5pD5GElgbHaEXolPzHtUGTGZ5262_RZYqza7LVbcX81nGZ1wgzKDx4CQEQpVYo5A8UEskuHVIdbshh7o8F8FEQm6Mk0VygosEDb19Yne4JfJQVFu0tQq5lFFlLG8_Jo5qM1HbyG9v3jAljqJ_ulf5bt0hhOJRn7eomOwR39w34DUKCWLkG' }} style={styles.cardImage} />
            <View style={{flex: 1}}>
                <View style={{flexDirection: 'row', gap: 8}}>
                    {tags.map((tag: string) => <Text key={tag} style={styles.cardTag}>{tag}</Text>)}
                </View>
                <Text style={styles.cardTitle}>{title}</Text>
            </View>
        </View>
        <View style={styles.cardFooter}>
            <Text style={styles.footerText}>{activeAthletes} Atletas activos</Text>
            <View style={styles.avatarStack}>
                {userImages.map((uri: string, index: number) => <Image key={index} source={{ uri }} style={styles.avatar} />)}
            </View>
        </View>
    </TouchableOpacity>
);


// --- Componente Principal ---
export const CoachLibraryScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Mi Biblioteca de Cursos</Text>
            <TouchableOpacity style={styles.addButton}>
                <Text style={{fontSize: 24, color: theme.colors.primary}}>+</Text>
            </TouchableOpacity>
        </View>

        <View style={{padding: 16}}>
            <TextInput label="" placeholder="Buscar programas..." />
        </View>

        <View style={styles.listContainer}>
            <ProgramCard
                title="Pre-temporada 2024"
                tags={['Fuerza']}
                activeAthletes={24}
                userImages={[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuD4Jg4JlKQpj6iIFAmbBqOHyNEUFYcB9wLAOlUrqi6gIjQ6LbmJ1zNVKReVKIkCVlqJh4jrwmHgh2ULdBJlYujDBywu5yS4aEO91SUb4vlEp0RCWneZSBsQfjR0Abb-wTgujx_tc95BdHZZ0-UCCLBZHGxjovHu588b0hcWF5S8YR0Iy9jeKoFhZO2_rN5AYsI3xTe0rYd3PYtReLcdklz_HP3dP2mqSYpPG6Q0qdfwh2IQJRS5SMxgELGgULoSjuGrwVC9tpHdEalo',
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuAxCAfur78rVvJSD2569iGJe183iMpj33x_hOdJcYOMEOMikPGJC8-P5aqJlbOkJ5qvrdy0aKcGiFVtlP_6RAtFX2GBHSpvTpAfDSrWSFxwgXRwAm6yL_BAJVHtm1bAq8wMiHa7zLePHm8wa_QXygwQ540fGYN8pL5QRbGK6FxrchSjQAV4NjZ4_dS_juncmk-hLR4qorgCzfFeJg2xa7n2B2bne-VE88bZcrsajs_7B_L7PTqaLTZSYsCyvzbI7cREQQ658OlAmKfE',
                ]}
            />
             <ProgramCard
                title="HIIT Avanzado"
                tags={['Cardio']}
                activeAthletes={12}
                userImages={[
                    'https://lh3.googleusercontent.com/aida-public/AB6AXuD3ENlHoMepCQBwgqowMrbxvSKkrYF-ftPsiisKXjS2ntJMOFD9VBqm9Hnm0YnxFQjmg118-eOOowMm1jUB3XHP7CuLVL4hXy6g6IWMMPchLkUWh1c9lGhNnNo07km9hP5fFgjncZ2Ra1c7jkGHQi67kFUJN2PXlMX6lajzaz4H58reC0WajCxjmn4pR_f9BCOY6zNzlrpyudCX6XwJcz7qZ5qk3ECZzpvSjqrUONlynNWFgh1MyroDq9hpg0kSBhIILWq063HQNcY2',
                ]}
            />
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: 16 },
    headerTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
    addButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: theme.colors.surfaceDark, justifyContent: 'center', alignItems: 'center' },
    listContainer: { padding: 16, gap: 16 },
    card: { backgroundColor: theme.colors.surfaceDark, borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.border },
    cardHeader: { flexDirection: 'row', gap: 12, marginBottom: 16 },
    cardImage: { width: 64, height: 64, borderRadius: 8 },
    cardTag: { color: theme.colors.primary, backgroundColor: 'rgba(19, 236, 91, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, fontSize: 10, overflow: 'hidden' },
    cardTitle: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold', marginTop: 8 },
    cardFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 16, borderTopWidth: 1, borderTopColor: theme.colors.border },
    footerText: { color: theme.colors.textSecondary, fontSize: 12 },
    avatarStack: { flexDirection: 'row', },
    avatar: { width: 24, height: 24, borderRadius: 12, marginLeft: -8, borderWidth: 2, borderColor: theme.colors.surfaceDark },
});
