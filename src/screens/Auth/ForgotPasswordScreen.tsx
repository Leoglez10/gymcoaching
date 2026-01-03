// src/screens/Auth/ForgotPasswordScreen.tsx

/**
 * @file Pantalla de "Olvidé mi contraseña".
 * Corresponde a la `Screen 26 - Design Syntax`.
 * Permite al usuario solicitar un enlace para restablecer su contraseña.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

/**
 * @function ForgotPasswordScreen
 * @description Un componente de pantalla que renderiza el formulario para
 * solicitar el restablecimiento de contraseña.
 *
 * Mapeo a React Native:
 * - Se reutilizan los componentes `SafeAreaView`, `ScrollView`, `Button`, y `TextInput`.
 * - La navegación hacia atrás (`arrow_back`) sería manejada por el `AuthNavigator`
 *   o implementada manualmente con el hook `useNavigation`.
 *
 * Decisiones Técnicas:
 * - El estado del email se maneja localmente con `useState`.
 * - Al presionar "Send Reset Link", se simula una llamada a la API. En una app real,
 *   esta acción despacharía una petición al backend y, en caso de éxito, navegaría
 *   a la pantalla de confirmación (`ResetPasswordConfirmationScreen`).
 */
export const ForgotPasswordScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendLink = () => {
    console.log('Requesting password reset for:', email);
    setIsLoading(true);
    // Simula una llamada a la API y luego navega a la pantalla de confirmación.
    setTimeout(() => {
      setIsLoading(false);
      // navigation.navigate('ResetPasswordConfirmation');
    }, 1500);
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header (simplificado para mostrar el ícono de candado) */}
        <View style={styles.header}>
            <View style={styles.iconContainer}>
                {/* Ícono simulado */}
                <Text style={styles.icon}>🔑</Text>
            </View>
        </View>

        {/* Contenido de Texto */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>Forgot Password?</Text>
          <Text style={styles.subtitle}>
            Don't worry, it happens. Enter the email associated with your account
            and we'll send you a link to reset your password.
          </Text>
        </View>

        {/* Formulario */}
        <View style={styles.formContainer}>
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="coach@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            // icon={<Text style={{color: theme.colors.textSecondary}}>✉️</Text>}
          />
        </View>

        {/* Botón de Acción */}
        <View style={styles.actionButtonContainer}>
            <Button
                title="Send Reset Link"
                onPress={handleSendLink}
                isLoading={isLoading}
            />
        </View>

        {/* Footer Link */}
        <View style={styles.footer}>
            <TouchableOpacity>
                <Text style={styles.footerText}>
                    Remember your password? <Text style={styles.loginLink}>Log in</Text>
                </Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { flexGrow: 1, padding: theme.spacing.l, justifyContent: 'center' },
  header: { alignItems: 'flex-start', marginBottom: theme.spacing.l },
  iconContainer: {
    width: 64,
    height: 64,
    borderRadius: theme.borderRadii.xl,
    backgroundColor: 'rgba(19, 236, 91, 0.1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    fontSize: 32,
  },
  textContainer: {
    marginBottom: theme.spacing.xl,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.text,
    marginBottom: theme.spacing.m,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    lineHeight: 24,
  },
  formContainer: {
    marginBottom: theme.spacing.l,
  },
  actionButtonContainer: {
      //
  },
  footer: {
    marginTop: theme.spacing.xl,
    alignItems: 'center',
  },
  footerText: {
    color: theme.colors.textSecondary,
    fontSize: 14,
  },
  loginLink: {
    color: theme.colors.primary,
    fontWeight: 'bold',
  },
});
