// src/screens/Auth/WelcomeScreen.tsx

/**
 * @file Pantalla de Bienvenida de la aplicación.
 * Corresponde a la `Screen 27 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---
const FeatureCard = ({ icon, title, description }: { icon: string, title: string, description: string }) => (
    <View style={styles.featureCard}>
        <View style={styles.featureIconContainer}>
            <Text style={{fontSize: 24}}>{icon}</Text>
        </View>
        <View>
            <Text style={styles.featureTitle}>{title}</Text>
            <Text style={styles.featureDescription}>{description}</Text>
        </View>
    </View>
);


// --- Componente Principal ---
export const WelcomeScreen = ({ navigation }: any) => { // Recibe navigation prop
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.brandName}>SportEd</Text>
        </View>

        {/* Hero Image */}
        <ImageBackground
            source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDLKB9Msy_hWVnSOmToCJ8Ig_vgN4exwmYawRSJu9RYooIl5ePC4vwko-ljajE4TEYwvygRvyJz8-Sad_QDhi3C76tt36ZTJtxFmNCA_CSoK8jZ-DNa6egY_Eg5Bsv_F0zZPCJV_7uZKTB7OQf5L3c1Gzss1jEGBo3qZhvu9J4II7Yp-qOjhReHyhDkhD1yPNKyr9kZyeyb7tsAUbYaE0KqpoChiCL6ZrFu77W6VBia---DAHTuHD4euNwfsSEYttyWz4EKXOgzV1oi' }}
            style={styles.heroImage}
            imageStyle={{ borderRadius: 16 }}
        >
            <View style={styles.heroOverlay} />
        </ImageBackground>

        {/* Text Content */}
        <View style={styles.textContainer}>
            <Text style={styles.title}>Train Smarter. <Text style={{color: theme.colors.primary}}>Coach Better.</Text></Text>
            <Text style={styles.subtitle}>The classroom for your physical performance. Connect with coaches and track your growth.</Text>
        </View>

        {/* Features Carousel */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.carousel}>
            <FeatureCard icon="⚡" title="Real-time Feedback" description="Instant loops for faster improvement." />
            <FeatureCard icon="📈" title="Track Progress" description="Data driven insights for every session." />
            <FeatureCard icon="👥" title="Coach Interaction" description="Direct connection with your team." />
        </ScrollView>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
          <Button title="Get Started" onPress={() => navigation.navigate('RoleSelection')} />
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
              <Text style={styles.loginText}>
                  Already have an account? <Text style={styles.loginLink}>Log in</Text>
              </Text>
          </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { paddingBottom: 150 },
  header: { alignItems: 'center', padding: 16 },
  brandName: { color: theme.colors.text, fontSize: 20, fontWeight: 'bold' },
  heroImage: { height: 250, marginHorizontal: 16, justifyContent: 'flex-end' },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)', borderRadius: 16 },
  textContainer: { padding: 24, alignItems: 'center' },
  title: { color: theme.colors.text, fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  subtitle: { color: theme.colors.textSecondary, fontSize: 16, textAlign: 'center', marginTop: 8 },
  carousel: { paddingHorizontal: 24, gap: 16 },
  featureCard: { width: 250, backgroundColor: '#18281e', borderRadius: 16, padding: 16, borderWidth: 1, borderColor: theme.colors.border, gap: 12 },
  featureIconContainer: { width: 40, height: 40, borderRadius: 8, backgroundColor: 'rgba(19, 236, 91, 0.1)', justifyContent: 'center', alignItems: 'center' },
  featureTitle: { color: theme.colors.text, fontSize: 18, fontWeight: '600' },
  featureDescription: { color: theme.colors.textSecondary, fontSize: 14 },
  footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, gap: 16, borderTopWidth: 1, borderColor: theme.colors.border, backgroundColor: theme.colors.background },
  loginText: { color: theme.colors.textSecondary, textAlign: 'center' },
  loginLink: { color: theme.colors.text, fontWeight: 'bold' }
});
