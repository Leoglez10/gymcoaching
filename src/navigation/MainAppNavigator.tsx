// src/navigation/MainAppNavigator.tsx

/**
 * @file Define la navegación principal de la aplicación para un usuario autenticado.
 * Utiliza un Tab Navigator para separar las principales funcionalidades.
 * También diferencia entre los roles 'athlete' y 'coach'.
 */

import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AthleteHomeScreen } from '../screens/Athlete/AthleteHomeScreen';
import { AthleteProgressScreen } from '../screens/Athlete/AthleteProgressScreen';
import { AthleteSettingsScreen } from '../screens/Athlete/AthleteSettingsScreen';
import { CoachDashboardScreen } from '../screens/Coach/CoachDashboardScreen';
import { ClientListScreen } from '../screens/Coach/ClientListScreen';
import { CoachLibraryScreen } from '../screens/Coach/CoachLibraryScreen';
import { CoachSettingsScreen } from '../screens/Coach/CoachSettingsScreen';
import { NotificationCenterScreen } from '../screens/common/NotificationCenterScreen';

// Se asume que existe un store de estado para obtener el rol del usuario.
const USER_ROLE: 'athlete' | 'coach' = 'athlete';

// --- Tipos de Navegación ---

// Define los parámetros para cada pestaña.
export type AthleteTabParamList = {
  Today: undefined;
  Progress: undefined;
  Chat: undefined;
  Settings: undefined;
};

export type CoachTabParamList = {
  Dashboard: undefined;
  Clients: undefined;
  Library: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator();

/**
 * @function MainAppNavigator
 * @description
 * Renderiza el `BottomTabNavigator` principal. La lógica interna renderiza
 * diferentes pestañas dependiendo del rol del usuario.
 *
 * Mapeo a React Native (React Navigation):
 * - `createBottomTabNavigator`: Función que crea el navegador de pestañas.
 * - `<Tab.Navigator>`: El componente que envuelve las pestañas.
 * - `<Tab.Screen>`: Cada una de las pestañas de la barra de navegación.
 *
 * Decisiones Técnicas:
 * - Se opta por un `BottomTabNavigator` porque es el patrón de navegación principal
 *   más común en aplicaciones móviles y coincide con los diseños de referencia.
 * - `screenOptions={{ headerShown: false }}`: Se deshabilita el header por defecto
 *   para que cada pantalla o stack dentro de una pestaña pueda gestionar su propio header.
 * - El renderizado es condicional basado en `USER_ROLE`. Esto permite tener dos flujos
 *   completamente distintos (Athlete y Coach) dentro del mismo navegador principal,
 *   lo cual es una práctica eficiente y limpia.
 * - Faltaría implementar el componente `tabBar` personalizado para que coincida
 *   exactamente con el diseño (con íconos y labels estilizados), pero la estructura
 *   de navegación ya está definida.
 */
export const MainAppNavigator = () => {
  if (USER_ROLE === 'athlete') {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Today" component={AthleteHomeScreen} />
        <Tab.Screen name="Progress" component={AthleteProgressScreen} />
        <Tab.Screen name="Chat" component={NotificationCenterScreen} />
        <Tab.Screen name="Settings" component={AthleteSettingsScreen} />
      </Tab.Navigator>
    );
  }

  if (USER_ROLE === 'coach') {
    return (
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Dashboard" component={CoachDashboardScreen} />
        <Tab.Screen name="Clients" component={ClientListScreen} />
        <Tab.Screen name="Library" component={CoachLibraryScreen} />
        <Tab.Screen name="Settings" component={CoachSettingsScreen} />
      </Tab.Navigator>
    );
  }

  // Fallback por si el rol no es ninguno de los esperados
  return null;
};
