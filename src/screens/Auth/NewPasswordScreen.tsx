// src/screens/Auth/NewPasswordScreen.tsx

/**
 * @file Pantalla para crear una nueva contraseña.
 * Corresponde a la `Screen 37 - Design Syntax`.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

// --- Componentes Locales ---

const ValidationCheck = ({ label, isMet }: { label: string, isMet: boolean }) => (
    <View style={styles.checkItem}>
        <View style={[styles.checkIconContainer, isMet && styles.checkIconMet]}>
            <Text style={{color: isMet ? theme.colors.backgroundDark : theme.colors.textSecondary, fontWeight: 'bold'}}>✓</Text>
        </View>
        <Text style={[styles.checkLabel, isMet && styles.checkLabelMet]}>{label}</Text>
    </View>
);


// --- Componente Principal ---

export const NewPasswordScreen = () => {
    const [newPassword, setNewPassword] = useState('Sprinting2024');
    const [confirmPassword, setConfirmPassword] = useState('Sprint');

    // Lógica de validación simulada
    const hasEightChars = newPassword.length >= 8;
    const hasNumber = /\d/.test(newPassword);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(newPassword);
    const passwordsMatch = newPassword === confirmPassword && newPassword.length > 0;

    const isFormValid = hasEightChars && hasNumber && hasSpecialChar && passwordsMatch;

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header (simplificado) */}
        <Text style={styles.title}>Create New Password</Text>
        <Text style={styles.subtitle}>
          Your new password must be different from previously used passwords.
        </Text>

        {/* Form Fields */}
        <View style={styles.form}>
            <TextInput
                label="New Password"
                value={newPassword}
                onChangeText={setNewPassword}
                secureTextEntry
                placeholder="••••••••"
            />
            <TextInput
                label="Confirm Password"
                value={confirmPassword}
                onChangeText={setConfirmPassword}
                secureTextEntry
                placeholder="••••••••"
                error={!passwordsMatch && confirmPassword.length > 0 ? "Passwords do not match" : undefined}
            />
        </View>

        {/* Validation Checklist */}
        <View style={styles.checklist}>
            <Text style={styles.checklistTitle}>Password Requirements</Text>
            <ValidationCheck label="Must be at least 8 characters" isMet={hasEightChars} />
            <ValidationCheck label="Must contain one number" isMet={hasNumber} />
            <ValidationCheck label="Must contain one special character" isMet={hasSpecialChar} />
            <ValidationCheck label="Passwords match" isMet={passwordsMatch} />
        </View>

        <View style={{flex: 1}} />

        {/* Action Button */}
        <Button
            title="Reset Password"
            onPress={() => {}}
            disabled={!isFormValid}
            style={{marginTop: 24}}
        />

      </ScrollView>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  container: { flexGrow: 1, padding: 24, justifyContent: 'space-between' },
  title: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text, marginBottom: 8 },
  subtitle: { fontSize: 16, color: theme.colors.textSecondary, marginBottom: 32 },
  form: { gap: 24, },
  checklist: { backgroundColor: 'rgba(255,255,255,0.05)', borderRadius: 12, padding: 16, marginTop: 32, gap: 12 },
  checklistTitle: { color: theme.colors.text, fontWeight: '600', marginBottom: 8 },
  checkItem: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  checkIconContainer: { width: 20, height: 20, borderRadius: 10, backgroundColor: theme.colors.surfaceDark, justifyContent: 'center', alignItems: 'center', borderWidth: 2, borderColor: theme.colors.border },
  checkIconMet: { backgroundColor: theme.colors.primary, borderColor: theme.colors.primary },
  checkLabel: { color: theme.colors.textSecondary, },
  checkLabelMet: { color: theme.colors.text },
});
