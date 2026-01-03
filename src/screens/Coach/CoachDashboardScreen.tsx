// src/screens/Coach/CoachDashboardScreen.tsx

/**
 * @file Pantalla principal del Coach (Dashboard).
 * Corresponde a la `Screen 21 - Design Syntax`.
 * Muestra un resumen de la actividad de los clientes y las tareas pendientes.
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
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';
import { TextInput } from '../../components/common/TextInput'; // Simplificado para búsqueda

// --- Componentes Locales ---

const NeedsAttentionCard = ({ title, description, icon, color, buttonText }: any) => (
  <View style={[styles.attentionCard, { borderLeftColor: color }]}>
    <View style={styles.attentionHeader}>
      <View style={[styles.attentionIconContainer, { backgroundColor: `${color}1A` }]}>
        <Text style={{ fontSize: 20, color }}>{icon}</Text>
      </View>
      <Text style={[styles.attentionBadge, { color, backgroundColor: `${color}1A` }]}>
          {buttonText === 'Review Clients' ? 'Urgent' : 'Review'}
      </Text>
    </View>
    <Text style={styles.attentionTitle}>{title}</Text>
    <Text style={styles.attentionDescription}>{description}</Text>
    <TouchableOpacity style={[styles.attentionButton, { backgroundColor: `${color}1A` }]}>
      <Text style={[styles.attentionButtonText, { color }]}>{buttonText}</Text>
    </TouchableOpacity>
  </View>
);

const RecentMessageItem = ({ name, message, time, imageUrl, isRead }: any) => (
  <View style={styles.messageItem}>
    <Image source={{ uri: imageUrl }} style={styles.messageAvatar} />
    <View style={styles.messageContent}>
      <View style={styles.messageHeader}>
        <Text style={styles.messageName}>{name}</Text>
        <Text style={styles.messageTime}>{time}</Text>
      </View>
      <Text style={styles.messageText} numberOfLines={1}>{message}</Text>
    </View>
    {!isRead && <View style={styles.unreadDot} />}
  </View>
);

// --- Componente Principal ---

export const CoachDashboardScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
                <Image source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDUQXDFxxKN-3NFYDN3Sj9h_CevAw7bxa0DS5c5kRpcCfIwnJcA8BRpV2s3nbAnxyKNdemQempRkd2ZcXxvixL9rZu4wqaXYx9X7w_Ouh3tmEIJ2ztkwU7SguGqGLD0sRHl94Ew_0F00_iku3wO_vGMxkprO-AYll2wcPOAAtGr9MwdJPEI2r-lU1BmycG1-o6bnLC40WezZubfYkXyTZhg1TtRFIQsbpHAigFee8Mynd7MyoVH2A_5dFBd3jIuWi7IfQlKC6L6saeN' }} style={styles.profileImage} />
                <View>
                    <Text style={styles.headerGreeting}>Good Morning,</Text>
                    <Text style={styles.headerName}>Coach Mike</Text>
                </View>
            </View>
            <TouchableOpacity>
                <Text style={{fontSize: 24}}>🔔</Text>
            </TouchableOpacity>
        </View>

        {/* Search Bar */}
        <View style={{paddingHorizontal: 16, paddingVertical: 8}}>
            <TextInput label="" placeholder="Buscar cliente por nombre..." />
        </View>

        {/* Weekly Adherence */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Weekly Adherence</Text>
            <View style={styles.adherenceCard}>
                {/* Aquí iría el gráfico de barras y las estadísticas */}
                <Text style={{color: theme.colors.textSecondary}}>Graph Placeholder</Text>
            </View>
        </View>

        {/* Needs Attention */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Needs Attention</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{gap: 16, paddingHorizontal: 16}}>
                <NeedsAttentionCard
                    icon="❗"
                    color="#ef4444"
                    title="Missed Workouts"
                    description="3 clients inactive for > 5 days."
                    buttonText="Review Clients"
                />
                <NeedsAttentionCard
                    icon="📹"
                    color="#facc15"
                    title="Form Checks"
                    description="5 new videos pending review."
                    buttonText="Start Review"
                />
            </ScrollView>
        </View>

        {/* Recent Messages */}
        <View style={styles.section}>
            <Text style={styles.sectionTitle}>Recent Messages</Text>
            <View style={styles.messagesContainer}>
                <RecentMessageItem name="Sarah Miller" message="My knee hurts a bit during squats, should I stop?" time="10m ago" imageUrl='https://lh3.googleusercontent.com/aida-public/AB6AXuC5z1gsx4HkX2DpsTW0KRzP25HgGhHMJLGN1NuUdbpJ_ur2K134XDyS6M1PEol7wZgCQ3tz9XRz7erIj5_JV1hJWLNb9czGXEOmryx8lx9bNXJMPIxJjf64XM6TEhkGNCvqZ06jEvVQmsN6zkF5A-ymNtjqS63gplKEUnpLXtDu5BLNj13bh0sqHCvlr1bDk8-AeExAqR__rulHDBtiFN3q2K1tzj3Tuahd0MKOM9XFl_rMtr2o-8Xu8chb1-tvVlaieGiBNJcZ2C7F' isRead={false} />
                <RecentMessageItem name="James Rodriguez" message="Video uploaded! Let me know what you think." time="2h ago" imageUrl='https://lh3.googleusercontent.com/aida-public/AB6AXuDLyZXoQYdcQ4jfHiJgzBA9urLGy8O6w97UQ4zhvakWdx2Ew1F5WHediL8kxzRu3I0vzlbhi5FVmDM9GHGTZabyYhWvs8F_mX9lnZny_TV5D-vSJE659Bw9dzikQRsXpqDZYCUvRfRNN3wwf9eadz80bz3vmF45OVYtPKYdq5F49YjJKEmHu5Dp-t6TpxW1hKGHoamDD1k4xEH3uazZ7yUhHu-6EcVvRq7FsM7mTgSISTXSzb4uA0nTol60AcEg6FbAAtO4oWVLE1cw' isRead={true} />
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    scrollContainer: { paddingBottom: 100 },
    header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 16 },
    profileImage: { width: 40, height: 40, borderRadius: 20, borderWidth: 2, borderColor: theme.colors.primary },
    headerGreeting: { color: theme.colors.textSecondary, fontSize: 12 },
    headerName: { color: theme.colors.text, fontSize: 18, fontWeight: 'bold' },
    section: { marginTop: 24 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text, marginBottom: 12, paddingHorizontal: 16 },
    adherenceCard: { backgroundColor: theme.colors.surfaceDark, borderRadius: 16, padding: 16, marginHorizontal: 16, height: 150, justifyContent: 'center', alignItems: 'center' },
    attentionCard: { width: 260, backgroundColor: theme.colors.surfaceDark, borderRadius: 16, padding: 16, borderLeftWidth: 4, },
    attentionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8, },
    attentionIconContainer: { padding: 8, borderRadius: 8, },
    attentionBadge: { fontSize: 10, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, overflow: 'hidden' },
    attentionTitle: { color: theme.colors.text, fontWeight: 'bold', },
    attentionDescription: { color: theme.colors.textSecondary, fontSize: 14, marginVertical: 8, },
    attentionButton: { paddingVertical: 8, borderRadius: 8, },
    attentionButtonText: { fontSize: 14, fontWeight: '600', textAlign: 'center' },
    messagesContainer: { marginHorizontal: 16, gap: 12 },
    messageItem: { flexDirection: 'row', alignItems: 'center', gap: 12, backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12 },
    messageAvatar: { width: 48, height: 48, borderRadius: 24 },
    messageContent: { flex: 1 },
    messageHeader: { flexDirection: 'row', justifyContent: 'space-between' },
    messageName: { color: theme.colors.text, fontWeight: 'bold', fontSize: 14 },
    messageTime: { color: theme.colors.textSecondary, fontSize: 12 },
    messageText: { color: theme.colors.textSecondary, fontSize: 14, },
    unreadDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: theme.colors.primary, marginRight: 8 }
});
