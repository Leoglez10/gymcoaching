// src/screens/common/ConnectionsScreen.tsx

/**
 * @file Pantalla de Conexiones con servicios de terceros.
 * Corresponde a `Screen 5` (Athlete) y `Screen 38` (Coach).
 * Es un componente reutilizable para gestionar integraciones.
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

// --- Tipos y Datos Mock ---
interface Connection {
  id: string;
  name: string;
  description: string;
  iconUrl?: string; // URL para íconos/logos
  iconComponent?: React.ReactNode; // O un componente para íconos (ej. Material Symbols)
  status: 'Connected' | 'Disconnected';
}

const mockConnections: Connection[] = [
  { id: 'garmin', name: 'Garmin Connect', description: 'Actividades, pulso y GPS', status: 'Disconnected', iconComponent: <Text>🏃</Text> },
  { id: 'fitbit', name: 'Fitbit', description: 'Pasos, sueño y recuperación', status: 'Disconnected', iconComponent: <Text>❤️</Text> },
  { id: 'strava', name: 'Strava', description: 'Sincronizado', status: 'Connected', iconComponent: <Text>🚴</Text> },
  { id: 'gcal', name: 'Google Calendar', description: 'Importa tus horarios', status: 'Disconnected', iconComponent: <Text>🗓️</Text> },
];


// --- Componentes Locales ---

const ConnectionItem: React.FC<{ connection: Connection }> = ({ connection }) => (
  <View style={styles.connectionItem}>
    <View style={styles.itemLeft}>
      <View style={styles.itemIcon}>
        {connection.iconComponent}
      </View>
      <View>
        <Text style={[styles.itemName, connection.status === 'Connected' && {color: theme.colors.primary}]}>{connection.name}</Text>
        <Text style={styles.itemDescription}>{connection.description}</Text>
      </View>
    </View>
    {connection.status === 'Connected' ? (
      <TouchableOpacity style={styles.manageButton}>
        <Text style={{fontSize: 24}}>⚙️</Text>
      </TouchableOpacity>
    ) : (
      <TouchableOpacity style={styles.connectButton}>
        <Text style={styles.connectButtonText}>Conectar</Text>
      </TouchableOpacity>
    )}
  </View>
);

// --- Componente Principal ---

export const ConnectionsScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Conexiones</Text>
        </View>

        <Text style={styles.introText}>
          Conecta tus dispositivos y apps para que tu entrenador pueda analizar tu carga de trabajo real y optimizar tu rendimiento.
        </Text>

        {/* Tarjeta Destacada: Apple Health */}
        <View style={styles.featuredCard}>
            <Text style={styles.featuredTag}>Recomendado</Text>
            <Text style={styles.featuredTitle}>Salud de Apple</Text>
            <Text style={styles.featuredDescription}>Sincroniza tus datos para un seguimiento más preciso.</Text>
            <TouchableOpacity style={styles.featuredButton}>
                <Text style={styles.featuredButtonText}>Conectar con Apple Health</Text>
            </TouchableOpacity>
        </View>

        {/* Lista de Otras Conexiones */}
        <View style={styles.listContainer}>
            <Text style={styles.sectionTitle}>Wearables & Apps</Text>
            {mockConnections.map(conn => <ConnectionItem key={conn.id} connection={conn} />)}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  header: { padding: 16 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  introText: { color: theme.colors.textSecondary, marginHorizontal: 16, marginBottom: 16, lineHeight: 22 },
  featuredCard: { backgroundColor: theme.colors.surfaceDark, margin: 16, padding: 20, borderRadius: 16, borderWidth: 1, borderColor: theme.colors.border },
  featuredTag: { color: theme.colors.primary, fontSize: 12, fontWeight: 'bold', textTransform: 'uppercase', marginBottom: 8 },
  featuredTitle: { color: theme.colors.text, fontSize: 20, fontWeight: 'bold' },
  featuredDescription: { color: theme.colors.textSecondary, marginTop: 4, marginBottom: 16 },
  featuredButton: { backgroundColor: theme.colors.primary, paddingVertical: 12, borderRadius: 12, alignItems: 'center' },
  featuredButtonText: { color: theme.colors.backgroundDark, fontWeight: 'bold' },
  listContainer: { paddingHorizontal: 16 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text, marginBottom: 8 },
  connectionItem: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingVertical: 12 },
  itemLeft: { flexDirection: 'row', alignItems: 'center', gap: 16 },
  itemIcon: { width: 56, height: 56, borderRadius: 12, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
  itemName: { color: theme.colors.text, fontSize: 16, fontWeight: '600' },
  itemDescription: { color: theme.colors.textSecondary, fontSize: 14 },
  connectButton: { backgroundColor: 'rgba(255,255,255,0.1)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8 },
  connectButtonText: { color: theme.colors.text, fontWeight: '600' },
  manageButton: { padding: 8 }
});
