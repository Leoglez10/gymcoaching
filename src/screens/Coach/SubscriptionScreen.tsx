// src/screens/Coach/SubscriptionScreen.tsx

/**
 * @file Pantalla de Gestión de Suscripción para el Coach.
 * Corresponde a la `Screen 14 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

const UsageMetric = ({ a, b }: {a: any, b: any}) => (
  <View style={styles.usageCard}>
    <View style={styles.usageHeader}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Text>👥</Text>
            <Text style={styles.usageTitle}>Athlete Capacity</Text>
        </View>
        <Text style={styles.usagePercentage}>75% Full</Text>
    </View>
    <View style={styles.progressBarContainer}>
        <View style={[styles.progressBar, { width: '75%' }]} />
    </View>
    <View style={styles.usageFooter}>
        <Text style={styles.usageDetails}>15/20 Active Athletes</Text>
        <TouchableOpacity>
            <Text style={styles.usageLink}>Manage Athletes</Text>
        </TouchableOpacity>
    </View>
  </View>
);

const BillingHistoryItem = ({ date, plan, amount, status }: any) => (
    <View style={styles.billingItem}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 12}}>
            <View style={styles.billingIcon}>
                <Text>🧾</Text>
            </View>
            <View>
                <Text style={styles.billingDate}>{date}</Text>
                <Text style={styles.billingPlan}>{plan}</Text>
            </View>
        </View>
        <View style={{alignItems: 'flex-end'}}>
            <Text style={styles.billingAmount}>{amount}</Text>
            <Text style={styles.billingStatus}>{status}</Text>
        </View>
    </View>
);


// --- Componente Principal ---

export const SubscriptionScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header (simplificado) */}
        <Text style={styles.headerTitle}>Subscription</Text>

        {/* Hero Card del Plan Activo */}
        <View style={styles.heroCardWrapper}>
            <ImageBackground
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBiur_9xcDhpqC-uJaUagSCKQ8-lcvMhaH6MQpTe10UJS-JKP5dK-8NMMG4BQ677-z4aclh6KEUCp-Ynxr68uOb4laFhNAH_e7IFDm_ta-rYn9gw4aBoquIXnC-sxXRKp4SKsEmdQtxON0d3bJ8La7UTfOUgQYV7gk-KhEUuOlQS6IErawHJ8LjHXztrcheDZO9ZQyPziu9-EyTXvzOTTZpswTl_U2V_iLr3uo050aL6Onvh9APP6veROG9CYY17wqRm8oMXbfOhmY4' }}
                style={styles.heroCard}
                resizeMode="cover"
            >
                <View style={styles.heroOverlay} />
                <View style={styles.heroContent}>
                    <Text style={styles.planStatus}>Active</Text>
                    <Text style={styles.planName}>Pro Coach Plan</Text>
                    <Text style={styles.planDetails}>$29.99/mo • Renews Nov 24, 2023</Text>
                </View>
            </ImageBackground>
        </View>

        {/* Métricas de Uso */}
        <UsageMetric a={undefined} b={undefined} />

        {/* Botón de Upgrade */}
        <View style={{paddingHorizontal: 16, marginVertical: 16}}>
            <Button title="Actualizar Plan" onPress={() => {}} />
            <Text style={styles.upgradeHint}>Unlock unlimited athletes and advanced analytics.</Text>
        </View>

        {/* Historial de Facturación */}
        <View style={styles.sectionContainer}>
            <Text style={styles.sectionTitle}>Billing History</Text>
            <BillingHistoryItem date="October 2023" plan="Pro Coach Plan" amount="$29.99" status="Paid" />
            <BillingHistoryItem date="September 2023" plan="Pro Coach Plan" amount="$29.99" status="Paid" />
        </View>

        {/* Footer Links */}
        <View style={styles.footerLinks}>
            <TouchableOpacity>
                <Text style={{color: '#ef4444', fontWeight: '500'}}>Cancel Subscription</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    headerTitle: { fontSize: 24, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center', padding: 16 },
    heroCardWrapper: { padding: 16 },
    heroCard: { borderRadius: 16, overflow: 'hidden', height: 200, justifyContent: 'flex-end' },
    heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
    heroContent: { padding: 16 },
    planStatus: { color: theme.colors.primary, backgroundColor: 'rgba(19, 236, 91, 0.1)', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start', fontSize: 12, fontWeight: 'bold', overflow: 'hidden', marginBottom: 8 },
    planName: { color: theme.colors.text, fontSize: 28, fontWeight: 'bold' },
    planDetails: { color: theme.colors.textSecondary, fontSize: 14 },
    usageCard: { backgroundColor: theme.colors.surfaceDark, marginHorizontal: 16, padding: 16, borderRadius: 12, borderWidth: 1, borderColor: theme.colors.border },
    usageHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    usageTitle: { color: theme.colors.text, fontWeight: '600' },
    usagePercentage: { color: theme.colors.textSecondary, fontSize: 12 },
    progressBarContainer: { height: 12, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 6, marginVertical: 8 },
    progressBar: { height: '100%', backgroundColor: theme.colors.primary, borderRadius: 6 },
    usageFooter: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
    usageDetails: { color: theme.colors.textSecondary, fontSize: 12 },
    usageLink: { color: theme.colors.primary, fontSize: 12, fontWeight: 'bold' },
    upgradeHint: { color: theme.colors.textSecondary, fontSize: 12, textAlign: 'center', marginTop: 8 },
    sectionContainer: { paddingHorizontal: 16, marginTop: 16 },
    sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text, marginBottom: 8 },
    billingItem: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 8, marginBottom: 8 },
    billingIcon: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(255,255,255,0.05)', justifyContent: 'center', alignItems: 'center' },
    billingDate: { color: theme.colors.text, fontWeight: '500' },
    billingPlan: { color: theme.colors.textSecondary, fontSize: 12 },
    billingAmount: { color: theme.colors.text, fontWeight: 'bold' },
    billingStatus: { color: theme.colors.primary, fontSize: 10, fontWeight: 'bold', textTransform: 'uppercase' },
    footerLinks: { alignItems: 'center', padding: 32 }
});
