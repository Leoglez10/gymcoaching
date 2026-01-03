// src/screens/Coach/InviteClientScreen.tsx

/**
 * @file Pantalla para invitar a un nuevo atleta.
 * Corresponde a la `Screen 43 - Design Syntax`.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

// --- Componente Principal ---

export const InviteClientScreen = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSendInvite = () => {
      setIsLoading(true);
      console.log(`Sending invite to ${email}`);
      setTimeout(() => setIsLoading(false), 1500); // Simular API
  };

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
            <Text style={styles.headerTitle}>Invite Athlete</Text>
            <TouchableOpacity>
                <Text style={{fontSize: 24, color: theme.colors.textSecondary}}>✕</Text>
            </TouchableOpacity>
        </View>

        {/* Body */}
        <Text style={styles.description}>
            Enter the email address of the athlete you want to add to your roster. They will receive an email with a link to join.
        </Text>

        <TextInput
            label="Email Address"
            value={email}
            onChangeText={setEmail}
            placeholder="athlete@example.com"
            keyboardType="email-address"
        />

        <View style={{flex: 1}} />

        {/* Footer */}
        <View style={styles.footer}>
            <Button
                title="Send Invitation"
                onPress={handleSendInvite}
                isLoading={isLoading}
            />
        </View>
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  container: { flex: 1, padding: 24, },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  headerTitle: { fontSize: 28, fontWeight: 'bold', color: theme.colors.text },
  description: { fontSize: 16, color: theme.colors.textSecondary, marginBottom: 32, lineHeight: 24 },
  footer: { }
});
