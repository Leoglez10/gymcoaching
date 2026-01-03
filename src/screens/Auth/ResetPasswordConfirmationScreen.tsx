// src/screens/Auth/ResetPasswordConfirmationScreen.tsx

/**
 * @file Pantalla de confirmación de envío de enlace de reseteo de contraseña.
 * Corresponde a la `Screen 18 - Design Syntax`.
 * Informa al usuario que el correo ha sido enviado.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Linking,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

/**
 * @function ResetPasswordConfirmationScreen
 * @description
 * Una pantalla estática que confirma al usuario que se ha enviado el enlace de
 * restablecimiento de contraseña.
 *
 * Mapeo a React Native:
 * - `Linking.openURL('mailto:')`: Se utiliza para abrir la aplicación de correo
 *   electrónico predeterminada del dispositivo. Esto proporciona una UX fluida.
 * - Los íconos se simulan con texto.
 *
 * Decisiones Técnicas:
 * - Esta pantalla es principalmente visual. No maneja un estado complejo.
 * - Los botones ofrecen acciones claras: "Abrir Email" para una acción inmediata
 *   y "Omitir" para permitir al usuario volver a la app.
 * - El email del usuario se muestra parcialmente por privacidad y seguridad. En una
 *   app real, este email se recibiría como parámetro de navegación desde la
 *   pantalla anterior (`ForgotPasswordScreen`).
 */
export const ResetPasswordConfirmationScreen = ({ route }: any) => {
  // En una app real, el email vendría de la navegación:
  // const { email } = route.params;
  const email = 'co***@gym.com'; // Simulado

  const handleOpenEmailApp = () => {
    // Intenta abrir el cliente de email del dispositivo.
    Linking.openURL('mailto:');
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />

      {/* Contenedor Principal */}
      <View style={styles.container}>

        {/* Icono de Éxito */}
        <View style={styles.iconOuter}>
          <View style={styles.iconInner}>
            {/* Ícono simulado */}
            <Text style={styles.icon}>✉️</Text>
            <View style={styles.checkBadge}>
              <Text style={styles.checkIcon}>✓</Text>
            </View>
          </View>
        </View>

        {/* Textos */}
        <Text style={styles.title}>Link Sent!</Text>
        <Text style={styles.subtitle}>
          We sent a password reset link to <Text style={styles.emailText}>{email}</Text>
        </Text>
        <Text style={styles.infoText}>
          Check your spam folder if you don't see the email within a few minutes.
        </Text>

        {/* Botones de Acción */}
        <View style={styles.buttonContainer}>
          <Button
            title="Open Email App"
            onPress={handleOpenEmailApp}
          />
          <Button
            title="Skip, I'll do it later"
            variant="secondary"
            // onPress={() => navigation.navigate('Login')}
          />
        </View>

      </View>

        {/* Footer */}
        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Didn't receive the email?{' '}
                <Text style={styles.resendLink}>Resend Link</Text>
            </Text>
        </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.l,
  },
  iconOuter: {
    marginBottom: theme.spacing.xl,
  },
  iconInner: {
    width: 128,
    height: 128,
    borderRadius: theme.borderRadii.full,
    backgroundColor: theme.colors.surfaceDark,
    borderWidth: 1,
    borderColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    fontSize: 64,
  },
  checkBadge: {
    position: 'absolute',
    bottom: -4,
    right: -4,
    backgroundColor: theme.colors.primary,
    width: 40,
    height: 40,
    borderRadius: theme.borderRadii.full,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors.background,
  },
  checkIcon: {
    color: theme.colors.background,
    fontSize: 20,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.m,
  },
  subtitle: {
    fontSize: 16,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: 24,
  },
  emailText: {
      color: theme.colors.text,
      fontWeight: '600'
  },
  infoText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
    textAlign: 'center',
    marginTop: theme.spacing.m,
  },
  buttonContainer: {
    width: '100%',
    marginTop: theme.spacing.xl,
    gap: theme.spacing.m,
  },
  footer: {
    padding: theme.spacing.l,
    alignItems: 'center',
  },
  footerText: {
      color: theme.colors.textSecondary
  },
  resendLink: {
      color: theme.colors.primary,
      fontWeight: 'bold'
  }
});
