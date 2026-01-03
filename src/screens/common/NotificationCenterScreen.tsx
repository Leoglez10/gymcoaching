// src/screens/common/NotificationCenterScreen.tsx

/**
 * @file Pantalla del Centro de Notificaciones.
 * Corresponde a `Screen 3` (Athlete) y `Screen 30` (Coach).
 * Es un componente reutilizable que puede mostrar notificaciones para cualquier rol.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Tipos y Datos Mock ---

type NotificationFilter = 'Todo' | 'No leídos' | 'Mensajes' | 'Actividad';

interface Notification {
    id: string;
    actorName: string;
    action: string;
    details?: string;
    time: string;
    isRead: boolean;
    type: 'Mensajes' | 'Actividad';
    icon: string;
}

const mockNotifications: Notification[] = [
    { id: '1', actorName: 'Juan Pérez', action: 'ha completado su entrenamiento', time: '2m', isRead: false, type: 'Actividad', icon: '🏋️' },
    { id: '2', actorName: 'María González', action: 'te ha enviado un mensaje', details: '"Hola Coach, tengo una duda..."', time: '15m', isRead: false, type: 'Mensajes', icon: '💬' },
    { id: '3', actorName: 'Sistema', action: 'Tu automatización \'Bienvenida\' se envió a Carlos.', time: 'Ayer', isRead: true, type: 'Actividad', icon: '🤖' },
];

// --- Componentes Locales ---

const FilterChip = ({ label, isActive, onPress }: { label: string, isActive: boolean, onPress: () => void }) => (
    <TouchableOpacity
        style={[styles.chip, isActive && styles.chipActive]}
        onPress={onPress}
    >
        <Text style={[styles.chipText, isActive && styles.chipTextActive]}>{label}</Text>
    </TouchableOpacity>
);

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
    <View style={[styles.notificationItem, !notification.isRead && styles.notificationUnread]}>
        {!notification.isRead && <View style={styles.unreadDot} />}
        <View style={styles.iconContainer}>
            <Text style={styles.icon}>{notification.icon}</Text>
        </View>
        <View style={styles.notificationContent}>
            <Text style={styles.notificationText}>
                <Text style={{fontWeight: 'bold'}}>{notification.actorName}</Text> {notification.action}
            </Text>
            {notification.details && <Text style={styles.notificationDetails}>{notification.details}</Text>}
            <Text style={styles.notificationTime}>{notification.time}</Text>
        </View>
    </View>
);


// --- Componente Principal ---

export const NotificationCenterScreen = () => {
    const [activeFilter, setActiveFilter] = useState<NotificationFilter>('Todo');

    const filteredNotifications = mockNotifications.filter(n => {
        if (activeFilter === 'No leídos') return !n.isRead;
        if (activeFilter === 'Mensajes') return n.type === 'Mensajes';
        if (activeFilter === 'Actividad') return n.type === 'Actividad';
        return true;
    });

    return (
        <SafeAreaView style={styles.screen}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Notificaciones</Text>
                <TouchableOpacity>
                    <Text style={styles.headerAction}>Marcar leídas</Text>
                </TouchableOpacity>
            </View>

            {/* Filtros */}
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterContainer}>
                {(['Todo', 'No leídos', 'Mensajes', 'Actividad'] as NotificationFilter[]).map(filter => (
                    <FilterChip
                        key={filter}
                        label={filter}
                        isActive={activeFilter === filter}
                        onPress={() => setActiveFilter(filter)}
                    />
                ))}
            </ScrollView>

            {/* Lista de Notificaciones */}
            <ScrollView contentContainerStyle={styles.listContainer}>
                <Text style={styles.sectionTitle}>Hoy</Text>
                {filteredNotifications.length > 0 ? (
                    filteredNotifications.map(n => <NotificationItem key={n.id} notification={n} />)
                ) : (
                    <Text style={styles.emptyText}>No hay notificaciones</Text>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16, borderBottomWidth: 1, borderBottomColor: theme.colors.border },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text },
    headerAction: { color: theme.colors.primary, fontWeight: '600' },
    filterContainer: { padding: 16, gap: 8 },
    chip: { paddingHorizontal: 16, height: 36, justifyContent: 'center', backgroundColor: theme.colors.surfaceDark, borderRadius: 18, borderWidth: 1, borderColor: theme.colors.border },
    chipActive: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
    chipText: { color: theme.colors.textSecondary, fontWeight: '500' },
    chipTextActive: { color: theme.colors.backgroundDark, fontWeight: 'bold' },
    listContainer: { padding: 16 },
    sectionTitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: 12 },
    notificationItem: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12, marginBottom: 12, opacity: 0.7 },
    notificationUnread: { opacity: 1, borderWidth: 1, borderColor: 'rgba(19, 236, 91, 0.2)' },
    unreadDot: { position: 'absolute', top: 12, right: 12, width: 8, height: 8, borderRadius: 4, backgroundColor: theme.colors.primary },
    iconContainer: { width: 48, height: 48, borderRadius: 24, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(255,255,255,0.05)', marginRight: 12 },
    icon: { fontSize: 24 },
    notificationContent: { flex: 1 },
    notificationText: { color: theme.colors.text },
    notificationDetails: { color: theme.colors.textSecondary, fontSize: 12, marginTop: 4 },
    notificationTime: { color: theme.colors.textSecondary, fontSize: 12, marginTop: 4 },
    emptyText: { color: theme.colors.textSecondary, textAlign: 'center', marginTop: 48 }
});
