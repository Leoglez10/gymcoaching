// src/screens/common/ProfileEditScreen.tsx

/**
 * @file Pantalla de Edición de Perfil.
 * Corresponde a `Screen 1` (Athlete) y `Screen 25` (Coach).
 * Es un componente reutilizable que renderiza los campos según el rol del usuario.
 */

import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import { theme } from '../../styles/theme';
import { Button } from '../../components/common/Button';
import { TextInput } from '../../components/common/TextInput';

// --- Tipos ---
type UserRole = 'athlete' | 'coach';


// --- Componente Principal ---
export const ProfileEditScreen = ({ role = 'athlete' }: { role: UserRole }) => {
    // Los estados se inicializarían con los datos del usuario actual
    const [fullName, setFullName] = useState(role === 'athlete' ? 'Alejandro Gomez' : 'Carlos Rodriguez');
    const [username, setUsername] = useState(role === 'athlete' ? '@alegomez_fit' : '@coachcarlos');
    const [phone, setPhone] = useState('+54 9 11 1234 5678');
    // ... otros estados para los campos del formulario

  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        {/* Header (simplificado) */}
        <Text style={styles.headerTitle}>Editar Perfil</Text>

        {/* Profile Picture Section */}
        <View style={styles.avatarContainer}>
            <Image
                source={{ uri: role === 'athlete' ? 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4urnyBc65I1ezhu-wnOwN0ny0ynmIhHXZiYzDWFE9MRRAbCx3Urjynpobpi2V9rGl1IXhazt2zL7eevvpRle-mCwgWyhjCEvVXYI1APLy5SEbdXhuqB16H_JHks_rjE--rWVbVffEvKAPGdmcY54FxXRq5OyJAyKae6GzLon6v5jOlR4vz1RJPsxnbbpcWEHGssMAF2JSGRMatwcqk4NisY6QVsZVSvYqQ1_13GRSpIR0zIvdZ3a53hh4j2VEjAaKMnRM4LmliHK4' : 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvL0cBcS0pftm4e7u7PmR8KiQUIu2xGqJIMcrvav4NhfLZ-6-gHAbnFEA7iaD52fbv7CaNDxSQgZueTj1yJJ6VLVTM3nMvfLqxNyV3_C7snV6S1eInzz0ziJ8ST-DRJVmzcjVvftrqKKjmTPziZl2l2ayX6xAUDb9JRsZBFAzwZtA9JEBEJU5C--CjUGkcgVBYbOgdM8UbU9E1JTVCfeepD5aSeRW-Q4wLpzkjywH28KqcM4O5Gu54H4N_qewWsuZG7eF3Zob_Gd4B' }}
                style={styles.avatar}
            />
            <TouchableOpacity style={styles.cameraButton}>
                <Text>📷</Text>
            </TouchableOpacity>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
            <TextInput label="Nombre Completo" value={fullName} onChangeText={setFullName} />
            {role === 'athlete' && <TextInput label="Nombre de Usuario" value={username} onChangeText={setUsername} />}
            <TextInput label="Correo Electrónico" value="user@example.com" editable={false} />
            {role === 'coach' && <TextInput label="Teléfono" value={phone} onChangeText={setPhone} keyboardType="phone-pad" />}

            {/* Campos específicos del Atleta */}
            {role === 'athlete' && (
                <>
                    <View style={styles.divider} />
                    <Text style={styles.sectionTitle}>Físico & Deporte</Text>
                    <TextInput label="Fecha de Nacimiento" value="1998-05-15" />
                    <View style={{flexDirection: 'row', gap: 16}}>
                        <TextInput label="Altura" value="182" keyboardType="numeric" containerStyle={{flex: 1}} />
                        <TextInput label="Peso" value="78" keyboardType="numeric" containerStyle={{flex: 1}} />
                    </View>
                    <TextInput label="Deporte Principal" value="Fútbol" />
                </>
            )}
        </View>

      </ScrollView>
      <View style={styles.footer}>
          <Button title="Guardar Cambios" onPress={() => {}} />
      </View>
    </SafeAreaView>
  );
};


// --- Estilos ---
const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: theme.colors.background },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: theme.colors.text, textAlign: 'center', padding: 16 },
  avatarContainer: { alignItems: 'center', marginVertical: 24 },
  avatar: { width: 128, height: 128, borderRadius: 64, borderWidth: 2, borderColor: theme.colors.border },
  cameraButton: { position: 'absolute', bottom: 4, right: 4, backgroundColor: theme.colors.primary, padding: 8, borderRadius: 16, borderWidth: 2, borderColor: theme.colors.background },
  form: { paddingHorizontal: 16, gap: 16 },
  divider: { height: 1, backgroundColor: theme.colors.border, marginVertical: 24 },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', color: theme.colors.text, marginBottom: 8 },
  footer: { padding: 16, borderTopWidth: 1, borderColor: theme.colors.border, backgroundColor: theme.colors.background }
});
