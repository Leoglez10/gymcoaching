// src/screens/Auth/LoginScreen.tsx

/**
 * @file Pantalla de inicio de sesión (Login).
 * Corresponde a la `Screen 36 - Design Syntax`.
 * Implementado directamente en React Native con componentes reutilizables.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  StatusBar,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

/**
 * @function LoginScreen
 * @description Pantalla para que los usuarios existentes inicien sesión.
 *
 * Mapeo a React Native:
 * - `ImageBackground`: Utilizado para el banner superior, mostrando una imagen con
 *   texto y otros elementos superpuestos.
 * - `ScrollView`: Permite que la pantalla se adapte a diferentes tamaños de dispositivo
 *   y evita que el teclado oculte los campos de entrada.
 *
 * Decisiones Técnicas:
 * - La estructura es similar a la de `SignUpScreen` para mantener la consistencia visual
 *   y de código en el flujo de autenticación.
 * - Los botones de "Iniciar sesión con Google" y "Sign in with Apple" son botones
 *   secundarios que iniciarían los respectivos flujos de autenticación OAuth.
 * - El enlace "Forgot password?" navegaría a la pantalla `ForgotPasswordScreen`
 *   dentro del mismo `AuthNavigator`.
 */
export const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    console.log({ email, password });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simular llamada a API
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Hero Section */}
        <ImageBackground
          source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAk316os3Lo8jj2ONe4Tir41U51AinbI07138qD22FNViBtVaXRCC7JP2dQPpAOiNSnAZRQ09z-VwdiGnK5IdfrEkybnH4OQ0iy9nOQaHpR8P0_0_ohN2V72mZlgfGPOuHPN9hhZLq4TGgvelIVQpbRZtW3ej9gkbVr2qAn_4qwK7g9widjRTe0hwFxQr8CafvaKARSArJMyASzwz9WEM1pDM3IOVTtv9XMOyeytli6gcUsnr--mQhdqEeusjfTYndYsOFxvKd1AM-2' }}
          style={styles.heroImage}
          resizeMode="cover"
        >
          <View style={styles.heroOverlay} />
          <View style={styles.heroContent}>
            <Text style={styles.heroTitle}>Train Smarter</Text>
            <Text style={styles.heroSubtitle}>
              Pedagogy meets performance. Access your training plan securely.
            </Text>
          </View>
        </ImageBackground>

        {/* Social Login Buttons */}
        <View style={styles.socialContainer}>
          <Button
            title="Iniciar sesión con Google"
            variant="primary"
            // icon={<Text>G</Text>}
          />
          <Button
            title="Sign in with Apple"
            variant="secondary"
            // icon={<Text>A</Text>}
          />
        </View>

        {/* Divider */}
        <View style={styles.dividerContainer}>
          <View style={styles.dividerLine} />
          <Text style={styles.dividerText}>Or continue with email</Text>
          <View style={styles.dividerLine} />
        </View>

        {/* Formulario de Email */}
        <View style={styles.formContainer}>
          <TextInput
            label="Email"
            value={email}
            onChangeText={setEmail}
            placeholder="coach@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
          />
           <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
          />
           <TouchableOpacity>
             <Text style={styles.forgotPasswordText}>Forgot password?</Text>
           </TouchableOpacity>
        </View>

         {/* Botón de Acción Principal */}
        <View style={styles.actionButtonContainer}>
            <Button
                title="Login"
                onPress={handleLogin}
                isLoading={isLoading}
            />
        </View>

        <View style={styles.footer}>
            <Text style={styles.footerText}>
                Don't have an account?{' '}
                <Text style={styles.signupLink}>Sign Up</Text>
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { flexGrow: 1, },
  heroImage: { aspectRatio: 16 / 9, justifyContent: 'flex-end', padding: theme.spacing.l, },
  heroOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.6)' },
  heroContent: { alignItems: 'center' },
  heroTitle: { color: theme.colors.text, fontSize: 32, fontWeight: 'bold', textAlign: 'center' },
  heroSubtitle: { color: theme.colors.textSecondary, fontSize: 14, textAlign: 'center', marginTop: theme.spacing.s, maxWidth: 280, },
  socialContainer: { padding: theme.spacing.l, gap: theme.spacing.m, },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', paddingHorizontal: theme.spacing.l, marginBottom: theme.spacing.m, },
  dividerLine: { flex: 1, height: 1, backgroundColor: theme.colors.border },
  dividerText: { color: theme.colors.textSecondary, textTransform: 'uppercase', fontSize: 10, marginHorizontal: theme.spacing.m },
  formContainer: { paddingHorizontal: theme.spacing.l, gap: theme.spacing.m },
  forgotPasswordText: { color: theme.colors.primary, textAlign: 'right', fontWeight: '500', fontSize: 14, },
  actionButtonContainer: { marginTop: theme.spacing.m, paddingHorizontal: theme.spacing.l },
  footer: { flex: 1, justifyContent: 'flex-end', alignItems: 'center', padding: theme.spacing.l, paddingBottom: theme.spacing.xl, },
  footerText: { color: theme.colors.textSecondary },
  signupLink: { color: theme.colors.primary, fontWeight: 'bold' },
});
