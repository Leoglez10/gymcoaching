// src/screens/common/VideoRecordingScreen.tsx

/**
 * @file Pantalla de Grabación de Video.
 * Corresponde a la `Screen 19 - Design Syntax`.
 */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Componente Principal ---
export const VideoRecordingScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ImageBackground
        source={{ uri: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBxLfQf4GIsYZXYd3T2QQcTuCllrYuxkZjY1sfoIraFdHGu9MM6Vg0owysKLMnP7K_tLaXFQD3t9dPH7lHnT3Mtu6dzZDZy19S8-SX72C1SKDOdJIBbHjRwse1HzjWORUfouEA6RPkwPLHUdpefx57ynvRdKzvv4cm4xHtgtq1RnTqAY85Trjf2p1udW57cFRA0fj7p4vZwASX1hQ--jlFqQ5iwxIg34PR_ad_P0s90YY94yDWKtOjESV1qTJYWz5J-RoKwfuQ7B-RD' }}
        style={styles.background}
      >
        <View style={styles.overlay} />

        {/* Header */}
        <View style={styles.header}>
            <TouchableOpacity style={styles.iconButton}><Text>✕</Text></TouchableOpacity>
            <View style={styles.timer}>
                <View style={styles.recDot} />
                <Text style={styles.timerText}>00:00</Text>
            </View>
            <View style={{flexDirection: 'column', gap: 12}}>
                <TouchableOpacity style={styles.iconButton}><Text>🔄</Text></TouchableOpacity>
                <TouchableOpacity style={styles.iconButton}><Text>⚡</Text></TouchableOpacity>
            </View>
        </View>

        {/* Footer */}
        <View style={styles.footer}>
            <TouchableOpacity style={styles.galleryThumb} />
            <TouchableOpacity style={styles.shutterButton}>
                <View style={styles.shutterInner} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}><Text>🎤</Text></TouchableOpacity>
        </View>

      </ImageBackground>
    </SafeAreaView>
  );
};

// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: 'black' },
  background: { flex: 1, justifyContent: 'space-between' },
  overlay: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(0,0,0,0.3)' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start', padding: 24, paddingTop: 48 },
  iconButton: { width: 40, height: 40, borderRadius: 20, backgroundColor: 'rgba(0,0,0,0.4)', justifyContent: 'center', alignItems: 'center' },
  timer: { flexDirection: 'row', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 99, gap: 8 },
  recDot: { width: 8, height: 8, borderRadius: 4, backgroundColor: 'red' },
  timerText: { color: 'white', fontFamily: 'monospace' },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 24, paddingBottom: 48 },
  galleryThumb: { width: 48, height: 48, borderRadius: 12, backgroundColor: 'grey', borderWidth: 2, borderColor: 'rgba(255,255,255,0.5)' },
  shutterButton: { width: 80, height: 80, borderRadius: 40, borderWidth: 6, borderColor: 'white', justifyContent: 'center', alignItems: 'center' },
  shutterInner: { width: 60, height: 60, borderRadius: 30, backgroundColor: 'red' }
});
