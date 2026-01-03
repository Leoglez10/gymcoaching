// src/styles/theme.ts

/**
 * @file Este archivo define el tema de la aplicación, incluyendo la paleta de colores,
 * espaciado, tipografía y tamaños de borde. La idea es centralizar todas las
 * constantes de diseño para asegurar consistencia y facilitar futuros cambios.
 * Este objeto de tema puede ser utilizado con librerías como Restyle o
 * Styled Components, o simplemente ser importado directamente en los componentes.
 *
 * Basado en la configuración de Tailwind CSS encontrada en los HTML de referencia.
 */

const palette = {
  // Paleta de colores primarios
  primary: '#13ec5b',
  primaryDark: '#0fb645',

  // Paleta de fondos
  backgroundLight: '#f6f8f6',
  backgroundDark: '#102216',

  // Paleta de superficies (cards, inputs)
  surfaceDark: '#1a2e22',
  surfaceDarker: '#0d1a11',
  surfaceHighlight: '#23362a',
  surfaceLight: '#ffffff',

  // Paleta de texto
  textOnDark: '#ffffff',
  textOnLight: '#111813',
  textSecondaryDark: '#9db9a6',
  textSecondaryLight: '#6b7280',

  // Colores de feedback
  error: '#ff4d4d',
  warning: '#facc15',
  success: '#13ec5b',

  // Bordes y divisores
  borderDark: '#3b5443',
  borderLight: '#e5e7eb',
};

export const theme = {
  colors: {
    // --- Semántica de Colores ---

    // El color principal para acciones y elementos destacados.
    primary: palette.primary,

    // El fondo principal de la aplicación.
    background: palette.backgroundDark,
    backgroundSecondary: palette.surfaceDark,

    // El color para las superficies de los componentes (tarjetas, modales).
    card: palette.surfaceDark,

    // El color del texto principal.
    text: palette.textOnDark,

    // El color para texto secundario (subtítulos, placeholders).
    textSecondary: palette.textSecondaryDark,

    // El color para bordes y divisores.
    border: palette.borderDark,

    // Color para feedback de error.
    error: palette.error,

    // Paleta completa para acceso directo si es necesario.
    ...palette,
  },

  spacing: {
    // Espaciado basado en una escala de 4px.
    xs: 4,
    s: 8,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },

  borderRadii: {
    // Radios de borde para consistencia.
    s: 4,       // DEFAULT
    m: 8,       // lg
    l: 16,      // xl
    xl: 24,     // 2xl
    full: 9999, // full
  },

  textVariants: {
    // --- Variantes de Texto ---

    // Título principal (ej. Headers de pantalla)
    header: {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 28,
      fontWeight: 'bold',
      color: 'text',
    },

    // Subtítulos
    subheader: {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 20,
      fontWeight: '600',
      color: 'text',
    },

    // Texto de cuerpo principal
    body: {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 16,
      color: 'text',
    },

    // Texto secundario o captions
    caption: {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 12,
      color: 'textSecondary',
    },

    // Estilo para botones
    button: {
      fontFamily: 'Lexend, sans-serif',
      fontSize: 16,
      fontWeight: 'bold',
      color: 'background',
    }
  },
};

export type Theme = typeof theme;
