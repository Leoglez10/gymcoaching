// src/screens/Coach/ExerciseLibraryScreen.tsx

/**
 * @file Pantalla de la Biblioteca de Ejercicios del Coach.
 * Corresponde a la `Screen 28 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground
} from 'react-native';
import { theme } from '../../styles/theme';
import { TextInput } from '../../components/common/TextInput';

// --- Componentes Locales ---
const ExerciseListItem = ({ name, category, tags, videoThumbUrl }: any) => (
    <TouchableOpacity style={styles.itemContainer}>
        <ImageBackground source={{ uri: videoThumbUrl }} style={styles.itemThumb} imageStyle={{ borderRadius: 8 }}>
            <View style={styles.thumbOverlay} />
        </ImageBackground>
        <View style={styles.itemContent}>
            <Text style={styles.itemName}>{name}</Text>
            <Text style={styles.itemCategory}>{category}</Text>
            <View style={styles.tagContainer}>
                {tags.map((tag: string, index: number) => (
                    <View key={index} style={[styles.tag, index === 0 && {backgroundColor: 'rgba(52, 211, 153, 0.1)', borderColor: 'rgba(52, 211, 153, 0.2)'}]}>
                       <Text style={[styles.tagText, index === 0 && {color: '#34d399'}]}>{tag}</Text>
                    </View>
                ))}
            </View>
        </View>
    </TouchableOpacity>
);

// --- Componente Principal ---
export const ExerciseLibraryScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Exercise Library</Text>
            <TextInput label="" placeholder="Search by name, muscle, or tag..." />
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
            {['All', 'Strength', 'Cardio', 'Mobility'].map((filter, index) => (
                <TouchableOpacity key={filter} style={[styles.filterButton, index === 0 && styles.filterActive]}>
                    <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>{filter}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Lista de Ejercicios */}
        <View style={styles.listContainer}>
            <ExerciseListItem
                name="Dumbbell Lunges"
                category="Unilateral • Glutes & Hams"
                tags={['Beginner', '2 Angles']}
                videoThumbUrl="https://images.unsplash.com/photo-1574680096141-1cddd32e04ca?q=80&w=1000&auto=format&fit=crop"
            />
            <ExerciseListItem
                name="Push-Ups"
                category="Bodyweight • Chest & Triceps"
                tags={['Beginner', 'Hidden']}
                videoThumbUrl="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=1000&auto=format&fit=crop"
            />
        </View>
      </ScrollView>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 16, borderBottomWidth: 1, borderColor: theme.colors.border },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, marginBottom: 16 },
  filterContainer: { padding: 16, gap: 8 },
  filterButton: { paddingHorizontal: 16, height: 36, justifyContent: 'center', backgroundColor: theme.colors.surfaceDark, borderRadius: 18, borderWidth: 1, borderColor: theme.colors.border },
  filterActive: { backgroundColor: theme.colors.primary, borderWidth: 0 },
  filterText: { color: theme.colors.textSecondary },
  filterTextActive: { color: theme.colors.backgroundDark, fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 16, gap: 12 },
  itemContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, borderRadius: 12, padding: 12, gap: 12 },
  itemThumb: { width: 64, height: 64, justifyContent: 'center', alignItems: 'center' },
  thumbOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: 8 },
  itemContent: { flex: 1 },
  itemName: { color: theme.colors.text, fontWeight: 'bold' },
  itemCategory: { color: theme.colors.textSecondary, fontSize: 12 },
  tagContainer: { flexDirection: 'row', gap: 8, marginTop: 8 },
  tag: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, backgroundColor: 'rgba(255,255,255,0.05)', borderWidth: 1, borderColor: theme.colors.border },
  tagText: { fontSize: 10, color: theme.colors.textSecondary },
  fab: { position: 'absolute', bottom: 32, right: 16, width: 56, height: 56, borderRadius: 28, backgroundColor: theme.colors.primary, justifyContent: 'center', alignItems: 'center' },
  fabText: { color: theme.colors.backgroundDark, fontSize: 32, fontWeight: 'bold' }
});
