// src/screens/Coach/CoachVideoReviewScreen.tsx

/**
 * @file Pantalla de Revisión de Video para el Coach.
 * Corresponde a la `Screen 42 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  TextInput as RNTextInput,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';

// --- Componente Principal ---
export const CoachVideoReviewScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      {/* Video Player (simulado con ImageBackground) */}
      <ImageBackground
        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeYyYWW4Vgi2qKTECMvTO0QE8nCunGiqoJCcJIkcsx1rMtmEJckf25KW3QsOC_A4IqdN7inLBqFKfc8K6sRG8ol7klBmWM69aOO2y7NupEd2IMZmsgVnNcw305Buq-ZgGXutsXhreV9TAualTvjXlJp7VRgtIbVSPtBPVUrzvhSxeiWU0FZVN7D3DZLNfG6JOqZRaSkpOY-FuL_7F9_GMDo5_PxAGtaLt6d5altAzGtmC_W-8G-NN6b4rv7c4OVVQ4EUrjcPrGKpDT' }}
        style={styles.videoPlayer}
      >
        <View style={styles.videoOverlay} />
        {/* Aquí irían los controles de video y las anotaciones SVG */}
      </ImageBackground>

      {/* Bottom Sheet de Feedback */}
      <View style={styles.bottomSheet}>
        <View style={styles.handle} />
        <View style={styles.sheetContent}>
            <Text style={styles.sheetTitle}>Anotaciones</Text>
            {/* Controles de color y herramientas (simplificado) */}
            <View style={styles.toolbar}>
                <View style={[styles.colorSwatch, {backgroundColor: theme.colors.primary}]} />
                <View style={[styles.colorSwatch, {backgroundColor: 'white'}]} />
                <View style={[styles.colorSwatch, {backgroundColor: 'red'}]} />
            </View>

            <RNTextInput
                style={styles.feedbackInput}
                placeholder="Añade tu feedback aquí..."
                placeholderTextColor={theme.colors.textSecondary}
                multiline
            />
            <Button title="Enviar corrección" onPress={() => {}} />
        </View>
      </View>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: 'black' },
  videoPlayer: { flex: 1 },
  videoOverlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  bottomSheet: {
    backgroundColor: theme.colors.surfaceDark,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
    borderColor: theme.colors.border,
    padding: 16,
    paddingBottom: 32,
  },
  handle: {
    width: 48,
    height: 6,
    borderRadius: 3,
    backgroundColor: theme.colors.border,
    alignSelf: 'center',
    marginBottom: 12,
  },
  sheetContent: { gap: 16 },
  sheetTitle: {
      color: theme.colors.textSecondary,
      textTransform: 'uppercase',
      fontSize: 12,
      fontWeight: 'bold',
      textAlign: 'center'
  },
  toolbar: {
      flexDirection: 'row',
      justifyContent: 'center',
      gap: 16,
  },
  colorSwatch: {
      width: 32,
      height: 32,
      borderRadius: 16,
      borderWidth: 2,
      borderColor: theme.colors.border
  },
  feedbackInput: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    borderRadius: 12,
    padding: 12,
    color: theme.colors.text,
    minHeight: 80,
    textAlignVertical: 'top'
  }
});
