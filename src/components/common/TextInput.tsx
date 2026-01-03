// src/components/common/TextInput.tsx

/**
 * @file Define un componente de entrada de texto (TextInput) reutilizable.
 * Cumple con la **PRIORIDAD 1**, implementado directamente en React Native.
 * Este componente encapsula un TextInput de React Native con estilos consistentes,
 * un ícono opcional a la izquierda y un label.
 */

import React, { useState } from 'react';
import {
  View,
  TextInput as RNTextInput, // Renombrado para evitar conflicto de nombres
  Text,
  StyleSheet,
  TextInputProps as RNTextInputProps,
  ViewStyle
} from 'react-native';
import { theme } from '../../styles/theme';

// --- Tipos de Props ---

/**
 * @interface TextInputProps
 * @extends RNTextInputProps
 * @description Propiedades para el componente TextInput personalizado.
 *
 * - `label`: El texto que se muestra encima del campo de entrada.
 * - `icon`: Un nodo de React (ej. un componente de ícono) para mostrar a la izquierda.
 * - `error`: Un mensaje de error opcional para mostrar debajo del campo.
 * - `containerStyle`: Estilos personalizados para el contenedor principal.
 */
interface TextInputProps extends RNTextInputProps {
  label: string;
  icon?: React.ReactNode;
  error?: string;
  containerStyle?: ViewStyle;
}

// --- Componente Principal ---

/**
 * @function TextInput
 * @description Un componente de entrada de texto estilizado y reutilizable.
 *
 * Mapeo a React Native:
 * - `View`: Se utiliza como contenedor para agrupar el label, el ícono y el `TextInput`.
 * - `RNTextInput`: El componente fundamental de React Native para la entrada de texto.
 * - `Text`: Se usa para renderizar el `label` y el mensaje de `error`.
 * - `StyleSheet`: Para una definición de estilos optimizada y centralizada.
 *
 * Decisiones Técnicas:
 * - El componente maneja su propio estado de foco (`isFocused`) para aplicar estilos dinámicos,
 *   como cambiar el color del borde cuando el campo está activo. Esto mejora la UX.
 * - El `ícono` se pasa como `React.ReactNode` para máxima flexibilidad, permitiendo
 *   usar cualquier librería de íconos (ej. `MaterialCommunityIcons` de `expo/vector-icons`).
 * - Se utiliza la técnica de renombrar el `TextInput` de React Native a `RNTextInput`
 *   para poder nombrar nuestro componente personalizado como `TextInput`.
 * - La propagación de `{...props}` permite que este componente acepte todas las propiedades
 *   nativas de un `TextInput` de React Native (`onChangeText`, `value`, `placeholder`, etc.),
 *   haciéndolo muy versátil.
 */
export const TextInput: React.FC<TextInputProps> = ({
  label,
  icon,
  error,
  containerStyle,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);

  // Determina el color del borde basado en el estado de foco o error.
  const borderColor = error
    ? theme.colors.error
    : isFocused
    ? theme.colors.primary
    : theme.colors.border;

  return (
    <View style={containerStyle}>
      <Text style={styles.label}>{label}</Text>
      <View style={[styles.inputContainer, { borderColor }]}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <RNTextInput
          style={styles.input}
          placeholderTextColor={theme.colors.textSecondary}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
      </View>
      {error && <Text style={styles.errorText}>{error}</Text>}
    </View>
  );
};

// --- Estilos ---

const styles = StyleSheet.create({
  label: {
    ...theme.textVariants.caption,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.s,
    marginLeft: theme.spacing.s,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surfaceDark,
    borderRadius: theme.borderRadii.l, // 16px
    borderWidth: 1,
    height: 56, // Altura estándar
    paddingHorizontal: theme.spacing.m, // 16px
  },
  iconContainer: {
    marginRight: theme.spacing.s, // 8px
  },
  input: {
    flex: 1,
    ...theme.textVariants.body,
    color: theme.colors.text,
    height: '100%',
  },
  errorText: {
    ...theme.textVariants.caption,
    color: theme.colors.error,
    marginTop: theme.spacing.xs,
    marginLeft: theme.spacing.s,
  },
});
