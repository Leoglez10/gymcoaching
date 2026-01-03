// src/navigation/AuthNavigator.tsx

/**
 * @file Define el stack de navegación para el flujo de autenticación.
 * Incluye pantallas como Login, Sign Up y Forgot Password.
 * Implementado con **React Navigation Stack**.
 */

import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RoleSelectionScreen } from '../screens/Auth/RoleSelectionScreen';
import { SignUpScreen } from '../screens/Auth/SignUpScreen';
import { LoginScreen } from '../screens/Auth/LoginScreen';
import { ForgotPasswordScreen } from '../screens/Auth/ForgotPasswordScreen';
import { ResetPasswordConfirmationScreen } from '../screens/Auth/ResetPasswordConfirmationScreen';
import { OnboardingSuccessScreen } from '../screens/Auth/OnboardingSuccessScreen';
import { NewPasswordScreen } from '../screens/Auth/NewPasswordScreen';
import { ProfileQuestionnaireScreen } from '../screens/common/ProfileQuestionnaireScreen';

// --- Tipos de Navegación ---

export type AuthStackParamList = {
  Welcome: undefined;
  RoleSelection: undefined;
  SignUp: undefined;
  Login: undefined;
  ForgotPassword: { email?: string };
  ResetPasswordConfirmation: undefined;
  OnboardingSuccess: undefined;
  NewPassword: undefined;
  ProfileQuestionnaire: { role: 'athlete' | 'coach' };
};

// Crea una instancia del Stack Navigator.
const Stack = createNativeStackNavigator<AuthStackParamList>();

/**
 * @function AuthNavigator
 * @description El componente que renderiza el Stack Navigator para el flujo de autenticación.
 *
 * Mapeo a React Native:
 * - `<Stack.Navigator>`: El contenedor que gestiona las pantallas del stack.
 * - `<Stack.Screen>`: Cada una de las pantallas que pertenecen a este navegador.
 *
 * Decisiones Técnicas:
 * - `screenOptions={{ headerShown: false }}`: Se deshabilita el header por defecto
 *   para todas las pantallas en este stack. Esto da un control total sobre la UI,
 *   permitiendo crear headers personalizados en cada pantalla si es necesario,
 *   lo cual coincide con los diseños de referencia que tienen apariencias variadas.
 * - `initialRouteName="Welcome"`: Define la primera pantalla que se mostrará
 *   cuando se cargue este navegador.
 */
export const AuthNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="RoleSelection"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="RoleSelection" component={RoleSelectionScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      <Stack.Screen name="ResetPasswordConfirmation" component={ResetPasswordConfirmationScreen} />
      <Stack.Screen name="ProfileQuestionnaire" component={ProfileQuestionnaireScreen} />
      <Stack.Screen name="OnboardingSuccess" component={OnboardingSuccessScreen} />
      <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
    </Stack.Navigator>
  );
};
