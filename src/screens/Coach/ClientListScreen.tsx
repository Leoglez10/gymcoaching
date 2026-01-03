// src/screens/Coach/ClientListScreen.tsx

/**
 * @file Pantalla de Lista de Clientes (Atletas) para el Coach.
 * Corresponde a la `Screen 10 - Design Syntax`.
 * Muestra una lista de atletas, con opciones de búsqueda y filtro.
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
  TextInput as RNTextInput // Renombrado para evitar conflictos
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Tipos y Datos Mock ---

type AthleteStatus = 'Activo' | 'Pendiente' | 'Pausado';

interface Athlete {
  id: string;
  name: string;
  plan: string;
  status: AthleteStatus;
  imageUrl?: string;
  initials: string;
}

const mockAthletes: Athlete[] = [
  { id: '1', name: 'Sofía Martinez', plan: 'Plan: Hipertrofia • Sem. 4', status: 'Activo', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBq8luZyAvyXn4cEAUzbVyzXtQeuyqut9c5rBAXthXYGWMg34-154nCxHvUcpVunNvJlmzqSfka7TZgxcC3JhjSJ0R9g13RgaUxAn01qAMADYDcja3ehIq5Wel7WDAGqCbXvXTPSxidKrZU-qHWgHrW6Ivk9wklGhsMyvPrjoTFleGSweVQsVVVh18n1QexlNmfsXhpQmAl6qSQRDpcwMWKPVZmUwprNquF8wcL3Vr7IpAZtUFUJi2BggDTcUYtkP0Aoew1bic5WP0z' },
  { id: '2', name: 'Carlos Ruiz', plan: 'Plan: Resistencia • Sin iniciar', status: 'Pendiente', imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXpMmtVm5aeOJCXhToNfNVOE1Kt5XjYyamKBtNWlc3oqDbGhD0EXWRP7oK9KPnFr7DDtJcuZ4_N69muuTEwOzOsy9sKwIO3_fb0Q72pixJwLTdXQXxewOuBBFepc9kEBhe-NbWU_ENtmn_nZ7OpV5ZC7LX73u2-KGMk83T-Br0SyhEoXmcQBxytbtD9r5Q6bAjPcT8sV_mTH0peJRHTcNWwpEU9gnAtLBU-D_crB9yCeWxdPrZeLdipP9h1Dz6f-hOC4tQzShOps-_' },
  { id: '3', name: 'Ana Gomez', plan: 'Última act: Hace 2 días', status: 'Pausado', initials: 'AG' },
];


// --- Componentes Locales ---

const AthleteListItem: React.FC<{ athlete: Athlete }> = ({ athlete }) => {
  const getStatusStyle = (status: AthleteStatus) => {
    switch (status) {
      case 'Activo': return { color: theme.colors.primary, backgroundColor: `${theme.colors.primary}1A` };
      case 'Pendiente': return { color: '#facc15', backgroundColor: '#facc151A' };
      case 'Pausado': return { color: theme.colors.textSecondary, backgroundColor: 'rgba(156, 163, 175, 0.1)' };
    }
  };

  return (
    <TouchableOpacity style={styles.athleteItem}>
      <View style={{flexDirection: 'row', alignItems: 'center', gap: 16}}>
        {athlete.imageUrl ? (
          <Image source={{ uri: athlete.imageUrl }} style={styles.avatar} />
        ) : (
          <View style={[styles.avatar, styles.initialsAvatar]}>
            <Text style={styles.initialsText}>{athlete.initials}</Text>
          </View>
        )}
        <View style={{flex: 1}}>
          <Text style={styles.athleteName}>{athlete.name}</Text>
          <Text style={styles.athletePlan}>{athlete.plan}</Text>
        </View>
      </View>
      <View style={[styles.statusBadge, getStatusStyle(athlete.status)]}>
        <Text style={[styles.statusText, {color: getStatusStyle(athlete.status).color}]}>{athlete.status}</Text>
      </View>
    </TouchableOpacity>
  );
};


// --- Componente Principal ---

export const ClientListScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header (simplificado) */}
        <Text style={styles.headerTitle}>Mis Alumnos</Text>

        {/* Search */}
        <View style={styles.searchContainer}>
            <RNTextInput
                placeholder="Buscar cliente por nombre..."
                placeholderTextColor={theme.colors.textSecondary}
                style={styles.searchInput}
            />
        </View>

        {/* Filters */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
            {['Todos', 'Activos', 'Pendientes', 'Archivados'].map((filter, index) => (
                <TouchableOpacity key={filter} style={[styles.filterButton, index === 0 && styles.filterButtonActive]}>
                    <Text style={[styles.filterText, index === 0 && styles.filterTextActive]}>{filter}</Text>
                </TouchableOpacity>
            ))}
        </ScrollView>

        {/* Lista de Atletas */}
        <View style={styles.listContainer}>
            <Text style={styles.listHeader}>Lista de Atletas</Text>
            {mockAthletes.map(athlete => (
                <AthleteListItem key={athlete.id} athlete={athlete} />
            ))}
        </View>

      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity style={styles.fab}>
          <Text style={styles.fabIcon}>+</Text>
          <Text style={styles.fabText}>Invitar Alumno</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background, },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text, padding: 16, },
  searchContainer: { paddingHorizontal: 16, marginBottom: 8, },
  searchInput: { backgroundColor: theme.colors.surfaceDark, borderRadius: 12, height: 48, paddingHorizontal: 16, color: theme.colors.text, fontSize: 16, },
  filterContainer: { paddingHorizontal: 16, paddingVertical: 8, gap: 8 },
  filterButton: { paddingHorizontal: 16, height: 36, justifyContent: 'center', backgroundColor: theme.colors.surfaceDark, borderRadius: 18, },
  filterButtonActive: { backgroundColor: theme.colors.primary, },
  filterText: { color: theme.colors.textSecondary, fontWeight: '500', },
  filterTextActive: { color: theme.colors.backgroundDark, fontWeight: 'bold', },
  listContainer: { padding: 16, gap: 12, },
  listHeader: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: 4, },
  athleteItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 16, },
  avatar: { width: 56, height: 56, borderRadius: 28, },
  initialsAvatar: { backgroundColor: '#4c5d53', justifyContent: 'center', alignItems: 'center' },
  initialsText: { color: theme.colors.text, fontSize: 20, fontWeight: 'bold' },
  athleteName: { color: theme.colors.text, fontSize: 16, fontWeight: 'bold' },
  athletePlan: { color: theme.colors.textSecondary, fontSize: 14, },
  statusBadge: { paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, },
  statusText: { fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase', },
  fab: { position: 'absolute', bottom: 32, alignSelf: 'center', flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.primary, paddingHorizontal: 24, height: 56, borderRadius: 28, gap: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.3, shadowRadius: 12, elevation: 8, },
  fabIcon: { color: theme.colors.backgroundDark, fontSize: 28, fontWeight: 'bold' },
  fabText: { color: theme.colors.backgroundDark, fontSize: 16, fontWeight: 'bold' },
});
