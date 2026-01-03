// src/navigation/AppNavigator.tsx

/**
 * @file Este es el componente de navegación raíz de la aplicación.
 * Su responsabilidad es determinar qué flujo de navegación mostrar al usuario,
 * principalmente entre el flujo de Autenticación y el flujo Principal de la app.
 * Utiliza **React Navigation**.
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

// --- SUPUESTO TÉCNICO ---
// Se asume que existirá un store de estado (ej. Zustand) para obtener
// el estado de autenticación del usuario. Por ahora, se simula con una constante.
const IS_AUTHENTICATED = false; // Cambiar a `true` para simular un usuario logueado

// --- SUPUESTO TÉCNICO ---
import { AuthNavigator } from './AuthNavigator';
import { MainAppNavigator } from './MainAppNavigator';

/**
 * @function AppNavigator
 * @description Componente principal que envuelve toda la aplicación y gestiona
 * la navegación de alto nivel.
 *
 * Mapeo a React Native:
 * - `<NavigationContainer>`: Es el componente raíz que gestiona el árbol de navegación
 *   y contiene el estado de navegación. Debe envolver toda la estructura de navegadores.
 *
 * Lógica:
 * 1.  Se consulta el estado de autenticación (actualmente simulado).
 * 2.  Si el usuario está autenticado, se renderiza el `MainAppNavigator`, que contendrá
 *     la navegación por pestañas (Tabs), los perfiles, dashboards, etc.
 * 3.  Si el usuario no está autenticado, se renderiza el `AuthNavigator`, que contendrá
 *     las pantallas de Login, Sign Up, Forgot Password, etc.
 *
 * Esta estructura de "switch" es un patrón común y recomendado para separar
 * los flujos de la aplicación.
 */
export const AppNavigator = () => {
  // Aquí iría la lógica para obtener el estado de autenticación, por ejemplo:
  // const isAuthenticated = useAuthStore(state => state.isAuthenticated);

  return (
    <NavigationContainer>
      {IS_AUTHENTICATED ? <MainAppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};
