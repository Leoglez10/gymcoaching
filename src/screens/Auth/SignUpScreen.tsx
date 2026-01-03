// src/screens/Auth/SignUpScreen.tsx

/**
 * @file Pantalla de registro de usuario (Sign Up).
 * Corresponde a la `Screen 31 - Design Syntax`.
 * Implementado directamente en React Native, utilizando componentes reutilizables.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

// --- Tipos ---
type Role = 'Coach' | 'Athlete';


// --- Componente de Segmented Control para el Rol ---

/**
 * @interface RoleSelectorProps
 * @description Props para el componente RoleSelector.
 */
interface RoleSelectorProps {
  selectedRole: Role;
  onSelectRole: (role: Role) => void;
}

/**
 * @function RoleSelector
 * @description Un control segmentado para elegir entre 'Coach' y 'Athlete'.
 */
const RoleSelector: React.FC<RoleSelectorProps> = ({ selectedRole, onSelectRole }) => (
  <View style={styles.roleSelectorContainer}>
    <TouchableOpacity
      style={[styles.roleButton, selectedRole === 'Coach' && styles.roleButtonSelected]}
      onPress={() => onSelectRole('Coach')}
    >
      <Text style={[styles.roleText, selectedRole === 'Coach' && styles.roleTextSelected]}>
        Coach
      </Text>
    </TouchableOpacity>
    <TouchableOpacity
      style={[styles.roleButton, selectedRole === 'Athlete' && styles.roleButtonSelected]}
      onPress={() => onSelectRole('Athlete')}
    >
      <Text style={[styles.roleText, selectedRole === 'Athlete' && styles.roleTextSelected]}>
        Athlete
      </Text>
    </TouchableOpacity>
  </View>
);


// --- Componente Principal de la Pantalla ---

/**
 * @function SignUpScreen
 * @description Pantalla que permite a un nuevo usuario crear una cuenta.
 *
 * Mapeo a React Native:
 * - `ScrollView`: Permite que el contenido se desplace si no cabe en la pantalla,
 *   especialmente útil en dispositivos más pequeños cuando el teclado está visible.
 * - `useState`: Se utiliza para manejar el estado de cada campo del formulario.
 *
 * Decisiones Técnicas:
 * - Se reutilizan los componentes `TextInput` y `Button` creados anteriormente,
 *   lo que demuestra la eficacia de una librería de componentes bien definida.
 * - En una aplicación real, se usaría una librería como `React Hook Form` para
 *   manejar el estado del formulario, las validaciones y el envío de datos de
 *   manera más robusta y performante. Para este MVP, `useState` es suficiente.
 * - Los íconos se simulan con texto por ahora. Se integrarían con `expo/vector-icons`.
 */
export const SignUpScreen = () => {
  const [role, setRole] = useState<Role>('Athlete');
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = () => {
    // Lógica de registro iría aquí.
    // Ej: validar campos, llamar a la API, manejar errores.
    console.log({ role, fullName, email, password });
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000); // Simular llamada a API
  };

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Header (simplificado) */}
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Join the Team</Text>
          <Text style={styles.headerSubtitle}>
            Select your role to begin your training journey.
          </Text>
        </View>

        {/* Selector de Rol */}
        <RoleSelector selectedRole={role} onSelectRole={setRole} />

        {/* Formulario */}
        <View style={styles.formContainer}>
          <TextInput
            label="Full Name"
            value={fullName}
            onChangeText={setFullName}
            placeholder="e.g. Michael Jordan"
            // icon={<Text style={{color: theme.colors.textSecondary}}>🧑</Text>}
          />
          <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="name@example.com"
            keyboardType="email-address"
            autoCapitalize="none"
            // icon={<Text style={{color: theme.colors.textSecondary}}>✉️</Text>}
          />
          <TextInput
            label="Password"
            value={password}
            onChangeText={setPassword}
            placeholder="••••••••"
            secureTextEntry
            // icon={<Text style={{color: theme.colors.textSecondary}}>🔒</Text>}
          />
          <TextInput
            label="Confirm Password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="••••••••"
            secureTextEntry
            // icon={<Text style={{color: theme.colors.textSecondary}}>🔒</Text>}
          />
        </View>

        {/* Términos y Condiciones */}
        <Text style={styles.termsText}>
          By creating an account, you agree to our{' '}
          <Text style={styles.linkText}>Terms of Service</Text> and{' '}
          <Text style={styles.linkText}>Privacy Policy</Text>.
        </Text>

        {/* Botón de Acción */}
        <View style={styles.actionButtonContainer}>
            <Button
                title="Create Account"
                onPress={handleSignUp}
                isLoading={isLoading}
            />
        </View>

        {/* Divisor */}
        <View style={styles.dividerContainer}>
            <View style={styles.dividerLine} />
            <Text style={styles.dividerText}>Or sign up with</Text>
            <View style={styles.dividerLine} />
        </View>

        {/* Opciones de Social Auth */}
        <View style={styles.socialContainer}>
            <TouchableOpacity style={styles.socialButton}>
                {/* <Text>G</Text> */}
                <Text style={styles.socialButtonText}>Google</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.socialButton}>
                {/* <Text>A</Text> */}
                <Text style={styles.socialButtonText}>Apple</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  scrollContainer: { flexGrow: 1, padding: theme.spacing.l, },
  header: { alignItems: 'center', marginBottom: theme.spacing.xl, },
  headerTitle: { fontSize: 32, fontWeight: 'bold', color: theme.colors.text, },
  headerSubtitle: { fontSize: 16, color: theme.colors.textSecondary, marginTop: theme.spacing.s, textAlign: 'center' },
  roleSelectorContainer: { flexDirection: 'row', backgroundColor: theme.colors.surfaceDark, borderRadius: theme.borderRadii.l, padding: theme.spacing.xs, marginBottom: theme.spacing.xl, },
  roleButton: { flex: 1, paddingVertical: theme.spacing.s, borderRadius: theme.borderRadii.m, },
  roleButtonSelected: { backgroundColor: theme.colors.primary, },
  roleText: { color: theme.colors.textSecondary, textAlign: 'center', fontWeight: 'bold', },
  roleTextSelected: { color: theme.colors.backgroundDark, },
  formContainer: { gap: theme.spacing.m, },
  termsText: { color: theme.colors.textSecondary, textAlign: 'center', fontSize: 12, marginVertical: theme.spacing.l, },
  linkText: { color: theme.colors.text, textDecorationLine: 'underline', },
  actionButtonContainer: { marginTop: theme.spacing.s, },
  dividerContainer: { flexDirection: 'row', alignItems: 'center', marginVertical: theme.spacing.xl, },
  dividerLine: { flex: 1, height: 1, backgroundColor: theme.colors.border, },
  dividerText: { color: theme.colors.textSecondary, marginHorizontal: theme.spacing.m, fontSize: 12, },
  socialContainer: { flexDirection: 'row', gap: theme.spacing.m, },
  socialButton: { flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 48, backgroundColor: theme.colors.surfaceDark, borderRadius: theme.borderRadii.l, gap: theme.spacing.s },
  socialButtonText: { color: theme.colors.text, fontWeight: 'bold', fontSize: 14, },
});
