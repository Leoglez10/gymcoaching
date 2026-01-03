// src/screens/Auth/RoleSelectionScreen.tsx

/**
 * @file Pantalla de selección de rol (Coach o Atleta) durante el onboarding.
 * Corresponde a la `Screen 29 - Design Syntax`.
 * Implementado directamente en React Native.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ImageBackground
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Tipos ---
type Role = 'coach' | 'athlete';

// --- Componente de Tarjeta de Selección ---

/**
 * @interface RoleCardProps
 * @description Props para el componente RoleCard.
 */
interface RoleCardProps {
  title: string;
  description: string;
  icon: string; // Nombre del ícono de Material Symbols
  isSelected: boolean;
  onPress: () => void;
  backgroundImageUrl: string;
}

/**
 * @function RoleCard
 * @description Componente visual para una de las opciones de rol.
 *
 * Mapeo a React Native:
 * - `TouchableOpacity`: Hace que toda la tarjeta sea un botón.
 * - `ImageBackground`: Permite mostrar una imagen de fondo con contenido superpuesto.
 * - `View` y `Text`: Para estructurar y mostrar el contenido.
 * - Los íconos se manejarían con una librería como `@expo/vector-icons/MaterialIcons`.
 *   Aquí se simula con un `<Text>` por simplicidad inicial.
 */
const RoleCard: React.FC<RoleCardProps> = ({ title, description, icon, isSelected, onPress, backgroundImageUrl }) => (
  <TouchableOpacity
    onPress={onPress}
    style={[styles.cardContainer, isSelected && styles.cardSelected]}
    activeOpacity={0.9}
  >
    <ImageBackground
      source={{ uri: backgroundImageUrl }}
      style={styles.cardBackground}
      resizeMode="cover"
    >
      <View style={styles.cardOverlay} />
      <View style={styles.cardContent}>
        <View style={styles.cardHeader}>
          {/* SUPUESTO TÉCNICO: Se asume el uso de una librería de íconos. */}
          <View style={styles.iconContainer}>
            <Text style={styles.iconText}>{icon}</Text>
          </View>
          <View style={[styles.radioCircle, isSelected && styles.radioCircleSelected]}>
            {isSelected && <View style={styles.radioInnerCircle} />}
          </View>
        </View>
        <View>
          <Text style={[styles.cardTitle, isSelected && styles.cardTitleSelected]}>{title}</Text>
          <Text style={styles.cardDescription}>{description}</Text>
        </View>
      </View>
    </ImageBackground>
  </TouchableOpacity>
);


// --- Componente Principal de la Pantalla ---

/**
 * @function RoleSelectionScreen
 * @description La pantalla principal donde el usuario elige su rol.
 *
 * Mapeo a React Native:
 * - `SafeAreaView`: Asegura que el contenido no se superponga con la barra de estado
 *   o el "notch" en dispositivos iOS.
 * - `useState`: Hook de React para gestionar el estado de la selección (`selectedRole`).
 *
 * Decisiones Técnicas:
 * - Se usa un estado local (`selectedRole`) para rastrear la opción elegida.
 *   Cuando el usuario presiona "Continuar" (botón no implementado en este snippet),
 *   este valor se pasaría al siguiente paso del flujo de registro.
 * - Las URLs de las imágenes se han extraído del HTML de referencia. En una app real,
 *   estas probablemente estarían en `src/assets`.
 */
export const RoleSelectionScreen = () => {
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />

      {/* Header (simplificado del diseño) */}
      <View style={styles.header}>
        <Text style={styles.stepIndicator}>Step 1 of 3</Text>
      </View>

      {/* Contenido Principal */}
      <View style={styles.content}>
        <Text style={styles.title}>Choose your path</Text>
        <Text style={styles.subtitle}>
          How will you use the platform? Select your role to customize your experience.
        </Text>

        <View style={styles.cardsWrapper}>
          <RoleCard
            title="I am a Coach"
            description="Manage teams, assign drills, and analyze performance."
            icon="sports"
            isSelected={selectedRole === 'coach'}
            onPress={() => setSelectedRole('coach')}
            backgroundImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuAXJfwORGexCCsKw6XZjDrOOb33XSWZzzgsSsjTRv9OQ2d5VE-BNQZMOmRYCkMJcr2fpYxONnDeDAE4KI46C8jfLhGDA5Su9mAJmt4dSnGjwmg2fzUv53tYJBUab-z3F6mm6_XVB9RdLfwFblN-swv-fV90kvXby0asnu4oXL1A2IU-yR4gKvBmRKZwbjczP24S_2njHJ04jaqByRZ37wVzfgQqtOwSwf8p62Zs8hcIrpGVO0AkfhpsPhuDaiHDXIT1XEcR3wKgpNLa"
          />
          <RoleCard
            title="I am an Athlete"
            description="Access training plans, log workouts, and improve skills."
            icon="fitness_center"
            isSelected={selectedRole === 'athlete'}
            onPress={() => setSelectedRole('athlete')}
            backgroundImageUrl="https://lh3.googleusercontent.com/aida-public/AB6AXuDnN8ei3SkH4q_Jo7y1FKokrPl_itwzuUGOULv0U2H025mdRYSgZOPiftZn-JfmEPe5RBXmuSq-lFAXmbbEc7Y9i8pT4PBiYlmgP79FOCTUcQh9-sDAKdIzommpmvCJS2CIFriaY01tWLFlpN_bukgybrkUZJUZzSsk89MvgJzC9KX08931b6LZaWDMxKbZ55MdYCX2GGx_keyI5vI77DRBT1_oj_1WRCSVZXv6id0icQ8K3apPbNjN8FVhmqeXXQ_5JjccbjY0DbSl"
          />
        </View>
      </View>

      {/* Footer */}
      <View style={styles.footer}>
          <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.loginLink}>Log in</Text>
          </Text>
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  header: { alignItems: 'center', paddingVertical: theme.spacing.m, },
  stepIndicator: { color: theme.colors.primary, backgroundColor: 'rgba(19, 236, 91, 0.1)', paddingHorizontal: 12, paddingVertical: 4, borderRadius: theme.borderRadii.full, fontSize: 12, fontWeight: 'bold' },
  content: { flex: 1, justifyContent: 'center', paddingHorizontal: theme.spacing.m, },
  title: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center', },
  subtitle: { fontSize: 16, color: theme.colors.textSecondary, textAlign: 'center', marginTop: theme.spacing.s, },
  cardsWrapper: { marginTop: theme.spacing.xl, gap: theme.spacing.m, },
  cardContainer: { height: 192, borderRadius: theme.borderRadii.xl, borderWidth: 2, borderColor: 'transparent', overflow: 'hidden', },
  cardSelected: { borderColor: theme.colors.primary, },
  cardBackground: { flex: 1, },
  cardOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)', },
  cardContent: { flex: 1, justifyContent: 'space-between', padding: theme.spacing.m, },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', },
  iconContainer: { backgroundColor: 'rgba(0,0,0,0.2)', padding: theme.spacing.s, borderRadius: theme.borderRadii.l, borderWidth: 1, borderColor: 'rgba(255,255,255,0.1)' },
  iconText: { color: theme.colors.primary, fontSize: 24, }, // Simulación de ícono
  radioCircle: { height: 24, width: 24, borderRadius: 12, borderWidth: 2, borderColor: 'rgba(255,255,255,0.3)', alignItems: 'center', justifyContent: 'center' },
  radioCircleSelected: { borderColor: theme.colors.primary, backgroundColor: theme.colors.primary },
  radioInnerCircle: { height: 10, width: 10, borderRadius: 5, backgroundColor: theme.colors.background },
  cardTitle: { color: theme.colors.text, fontSize: 24, fontWeight: 'bold', },
  cardTitleSelected: { color: theme.colors.primary, },
  cardDescription: { color: theme.colors.textSecondary, fontSize: 14, },
  footer: { padding: theme.spacing.m, alignItems: 'center', },
  footerText: { color: theme.colors.textSecondary, fontSize: 14, },
  loginLink: { color: theme.colors.text, fontWeight: 'bold', },
});
