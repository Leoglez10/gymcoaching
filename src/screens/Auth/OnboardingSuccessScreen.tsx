// src/screens/Auth/OnboardingSuccessScreen.tsx

/**
 * @file Pantalla de éxito del Onboarding.
 * Corresponde a la `Screen 11 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componentes Locales ---

const NextStepChip = ({ icon, text }: { icon: string, text: string }) => (
    <TouchableOpacity style={styles.chip}>
        <View style={styles.chipIconContainer}>
            <Text style={{fontSize: 22}}>{icon}</Text>
        </View>
        <Text style={styles.chipText}>{text}</Text>
    </TouchableOpacity>
);


// --- Componente Principal ---

export const OnboardingSuccessScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Image */}
        <View style={styles.heroContainer}>
            <ImageBackground
                source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCviRzgQJYCb9I_74-X-4TItiVnSaJBzTfpi5KAy3FCCap-utr6dS2Q2i4XmGpQzCMBcEjqMNi0wO6iUcIPfC6OpBtXm6QPtKZZKQXy9Pa0qwJft193DerL1hLigQYJ0jdzvZDhr0kJ6BONnkOlzHQqw6wZ-99uU5YJZWXsQWGl22ufqhwjFkNIFNXJE_UVpi18NckqfDEowx_STaZ3EMhDLHNLrbbjo5zTpveMpBmlhb8Tz3k0VjVlu8ZqNfN-xT-OO-v8YTGsWcbV' }}
                style={styles.heroImage}
                resizeMode="cover"
            >
                <View style={styles.heroOverlay} />
                <View style={styles.badge}>
                    <Text style={{color: theme.colors.primary}}>✓</Text>
                    <Text style={styles.badgeText}>Setup Complete</Text>
                </View>
            </ImageBackground>
        </View>

        {/* Text Content */}
        <View style={styles.textContainer}>
            <Text style={styles.title}>You're in the Game!</Text>
            <Text style={styles.subtitle}>
                Your profile is set. You are now ready to track progress, build workouts, and elevate your game.
            </Text>
        </View>

        {/* Next Steps */}
        <View style={{width: '100%'}}>
            <Text style={styles.nextStepsTitle}>Next Steps</Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
                <NextStepChip icon="➕" text="Create your first workout" />
                <NextStepChip icon="👥" text="Join a team" />
                <NextStepChip icon="📈" text="Explore Analytics" />
            </ScrollView>
        </View>
      </ScrollView>

      {/* Footer Button */}
      <View style={styles.footer}>
          <Button title="Go to Dashboard" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: theme.colors.background },
    scrollContainer: { flexGrow: 1, alignItems: 'center', paddingTop: 24, paddingBottom: 120 },
    heroContainer: { width: '90%', aspectRatio: 4 / 5, marginBottom: 24, },
    heroImage: { flex: 1, borderRadius: 24, overflow: 'hidden', justifyContent: 'flex-end', alignItems: 'center' },
    heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.5)' },
    badge: { flexDirection: 'row', alignItems: 'center', gap: 8, backgroundColor: 'rgba(26, 46, 34, 0.8)', paddingHorizontal: 20, paddingVertical: 8, borderRadius: 99, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)', marginBottom: 24 },
    badgeText: { color: theme.colors.text, fontWeight: '600' },
    textContainer: { alignItems: 'center', paddingHorizontal: 24, marginBottom: 32 },
    title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center' },
    subtitle: { fontSize: 16, color: theme.colors.textSecondary, textAlign: 'center', marginTop: 8 },
    nextStepsTitle: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 12, fontWeight: 'bold', marginBottom: 12, paddingHorizontal: 24 },
    chipsContainer: { paddingHorizontal: 24, gap: 12 },
    chip: { flexDirection: 'row', alignItems: 'center', backgroundColor: theme.colors.surfaceDark, padding: 12, borderRadius: 12, height: 56, borderWidth: 1, borderColor: theme.colors.border, gap: 12 },
    chipIconContainer: { width: 36, height: 36, borderRadius: 8, backgroundColor: 'rgba(19, 236, 91, 0.1)', justifyContent: 'center', alignItems: 'center' },
    chipText: { color: theme.colors.text, fontWeight: '500' },
    footer: { position: 'absolute', bottom: 0, left: 0, right: 0, padding: 24, backgroundColor: theme.colors.background, borderTopWidth: 1, borderColor: theme.colors.border }
});
