// src/components/common/Button.tsx

/**
 * @file Este archivo define un componente de botón reutilizable.
 * Sigue la **PRIORIDAD 1** de implementación directa en React Native.
 * Está diseñado para ser flexible y manejar diferentes estados y apariencias
 * que se ven a lo largo de los diseños de referencia.
 */

import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  TouchableOpacityProps,
  TextStyle,
  ViewStyle,
} from 'react-native';
import { theme } from '../../styles/theme'; // Importamos el tema para los estilos

// --- Tipos de Props ---

/**
 * @interface ButtonProps
 * @extends TouchableOpacityProps
 * @description Define las propiedades que el componente Button puede aceptar.
 *
 * - `variant`: Define el estilo del botón ('primary' o 'secondary').
 * - `title`: El texto que se mostrará en el botón.
 * - `onPress`: La función a ejecutar cuando se presiona el botón.
 * - `isLoading`: Si es `true`, muestra un indicador de carga y deshabilita el botón.
 * - `icon`: Un componente de ícono opcional para mostrar junto al texto.
 */
interface ButtonProps extends TouchableOpacityProps {
  variant?: 'primary' | 'secondary';
  title: string;
  isLoading?: boolean;
  icon?: React.ReactNode;
}

// --- Componente Principal ---

/**
 * @function Button
 * @description Un componente de botón personalizable y reutilizable.
 *
 * Mapeo a React Native:
 * - `TouchableOpacity`: Es el componente base para crear botones que responden al tacto
 *   con un efecto de opacidad. Es la elección estándar en RN para botones personalizados.
 * - `Text`: Muestra el título del botón.
 * - `ActivityIndicator`: Un componente nativo que muestra una "rueda" de carga,
 *   ideal para indicar operaciones asíncronas.
 * - `StyleSheet`: Se utiliza para crear los estilos de una manera optimizada.
 *   Los estilos se definen fuera del render para evitar recrearlos en cada ciclo.
 *
 * Decisiones Técnicas:
 * - Se usa `TouchableOpacity` en lugar del componente `Button` nativo de React Native
 *   porque este último tiene un aspecto muy básico y es difícil de estilizar de forma
 *   consistente entre iOS y Android. `TouchableOpacity` da control total sobre el estilo.
 * - Los estilos se dividen en `variants` para facilitar la reutilización y la consistencia
 *   con el sistema de diseño definido en `theme.ts`.
 * - El estado `isLoading` deshabilita el `TouchableOpacity` (`disabled={true}`) para
 *   prevenir múltiples clicks mientras se procesa una acción.
 */
export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  title,
  isLoading = false,
  icon,
  style,
  ...props
}) => {

  // Determina los estilos del contenedor y del texto según la variante.
  const containerStyle = [
    styles.baseContainer,
    variantStyles[variant].container,
    isLoading && styles.disabled, // Aplica estilo de deshabilitado si está cargando
    style, // Permite pasar estilos personalizados desde fuera
  ];

  const textStyle = [
    styles.baseText,
    variantStyles[variant].text,
  ];

  return (
    <TouchableOpacity
      style={containerStyle}
      disabled={isLoading}
      activeOpacity={0.8} // Controla la opacidad al presionar
      {...props}
    >
      {isLoading ? (
        // Muestra el indicador de carga si isLoading es true.
        <ActivityIndicator color={variant === 'primary' ? theme.colors.background : theme.colors.primary} />
      ) : (
        // Muestra el ícono y el título si no está cargando.
        <>
          {icon && <View style={styles.iconWrapper}>{icon}</View>}
          <Text style={textStyle}>{title}</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

// --- Estilos ---

const styles = StyleSheet.create({
  baseContainer: {
    height: 56, // Altura estándar para botones (h-14 en Tailwind)
    borderRadius: theme.borderRadii.l, // 16px
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.m, // 16px
    // Transición suave (simulado, las transiciones se manejan de forma nativa)
  },
  baseText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  iconWrapper: {
    marginRight: theme.spacing.s, // 8px de espacio entre ícono y texto
  },
  disabled: {
    opacity: 0.7, // Reduce la opacidad para indicar que está deshabilitado
  },
});

// Estilos específicos para cada variante
const variantStyles = {
  primary: StyleSheet.create({
    container: {
      backgroundColor: theme.colors.primary,
    },
    text: {
      color: theme.colors.backgroundDark,
    },
  }),
  secondary: StyleSheet.create({
    container: {
      backgroundColor: theme.colors.surfaceDark,
      borderWidth: 1,
      borderColor: theme.colors.borderDark,
    },
    text: {
      color: theme.colors.text,
    },
  }),
};
