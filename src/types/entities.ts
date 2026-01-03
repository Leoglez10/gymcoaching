// src/types/entities.ts

/**
 * @file Este archivo contiene las definiciones de tipos y las interfaces principales
 * que modelan las entidades de negocio de la aplicación.
 * La intención es tener un único lugar de verdad para las formas de los datos,
 * lo que facilita la mantenibilidad y asegura la consistencia a través de
 * la UI, la lógica de negocio y las llamadas a la API.
 */

// --- Entidades de Usuario ---

/**
 * @interface User
 * @description Representa las propiedades base compartidas por todos los tipos de usuarios.
 *
 * Mapeo a React Native:
 * - `id`: Usado como `key` en listas y para identificar al usuario en llamadas a la API.
 * - `fullName`, `username`: Se mostrarán en componentes de perfil, headers, etc. (`<Text>`).
 * - `profileImageUrl`: Se usará en el componente `<Image>` o un componente personalizado `Avatar`.
 */
export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string; // Es de solo lectura en la UI de edición de perfil.
  profileImageUrl?: string;
}

/**
 * @interface AthleteProfile
 * @description Extiende el usuario base con propiedades específicas del atleta.
 *
 * Mapeo a React Native:
 * - Los campos se mapearán a componentes `<TextInput>` en la pantalla de edición de perfil.
 * - `dateOfBirth`: Se manejará con un componente de selector de fecha (`@react-native-community/datetimepicker`).
 * - `primarySport`: Se mapeará a un componente `<Picker>` o un selector personalizado.
 */
export interface AthleteProfile extends User {
  role: 'athlete';
  dateOfBirth: Date;
  heightCm: number;
  weightKg: number;
  primarySport: string;
  coachId?: string; // Relación con su Coach
}

/**
 * @interface CoachProfile
 * @description Extiende el usuario base con propiedades específicas del coach.
 *
 * Mapeo a React Native:
 * - `specialties`: Podría mostrarse como una lista de "tags" o "chips".
 * - `bio`: Se mostrará en un componente `<Text>` en el perfil del coach.
 * - `tier`: Puede usarse para habilitar/deshabilitar features (renderizado condicional).
 */
export interface CoachProfile extends User {
  role: 'coach';
  specialties: string[];
  bio?: string;
  tier: 'free' | 'pro' | 'elite';
}

// --- Entidades de Notificaciones ---

/**
 * @type NotificationType
 * @description Define los tipos de notificaciones que el sistema puede generar.
 * Ayuda a renderizar el ícono y el comportamiento correcto para cada notificación.
 */
export type NotificationType =
  | 'workout_reminder'   // Recordatorio de entrenamiento
  | 'feedback_received'  // El coach ha dejado feedback
  | 'new_message'        // Nuevo mensaje directo
  | 'pr_achieved'        // Récord personal alcanzado
  | 'system_update'      // Notificación del sistema
  | 'missed_workout';    // Alerta de entrenamiento no completado

/**
 * @interface Notification
 * @description Modela una única notificación en el sistema.
 *
 * Mapeo a React Native:
 * - Se usará para renderizar una lista (`<FlatList>`) de componentes `NotificationItem`.
 * - `type`: Determinará qué ícono (`<Icon>`) y colores se usan.
 * - `ctaLink`: Se usará con el hook `useNavigation` de React Navigation para navegar a la pantalla correspondiente.
 */
export interface Notification {
  id: string;
  type: NotificationType;
  title: string;
  body: string;
  timestamp: Date;
  isRead: boolean;
  ctaLink?: string; // Link de navegación interna (ej. 'Workout/123')
}


// --- Entidades de Entrenamiento ---

/**
 * @interface ExerciseSet
 * @description Representa una serie (set) dentro de un ejercicio. Incluye tanto los
 * valores objetivo (target) como los registrados (logged).
 *
 * Mapeo a React Native:
 * - En `WorkoutLogScreen`, los `target` pueblan los valores iniciales de los inputs.
 * - `loggedReps` y `loggedWeightKg` son los valores controlados por el estado del componente.
 * - `isCompleted`: Determina si la serie se muestra en la sección "Previous Sets" o como la serie activa.
 */
export interface ExerciseSet {
  setNumber: number;
  targetReps?: string; // ej. "8-12"
  targetWeightKg?: number;
  loggedReps?: number;
  loggedWeightKg?: number;
  rpe?: number; // Rate of Perceived Exertion (1-10)
  isCompleted: boolean;
}

/**
 * @interface RoutineExercise
 * @description Modela un ejercicio específico dentro de una rutina, incluyendo todas sus series.
 *
 * Mapeo a React Native:
 * - Se renderiza como un item en la lista de ejercicios de la pantalla `RoutineSummaryScreen`.
 * - Al tocarlo, navega a `WorkoutLogScreen` pasando el `exerciseId` y los `sets`.
 */
export interface RoutineExercise {
  id: string;
  exerciseInfo: {
    id: string; // FK a una librería de ejercicios
    name: string;
    videoUrl?: string;
  };
  sets: ExerciseSet[];
  notes?: string; // Notas del coach para este ejercicio
}

/**
 * @interface Routine
 * @description Representa una rutina de entrenamiento completa asignada a un atleta.
 *
 * Mapeo a React Native:
 * - Es el dato principal de la pantalla `RoutineSummaryScreen`.
 * - Se muestra como una tarjeta en el dashboard del atleta.
 */
export interface Routine {
  id: string;
  name: string;
  description?: string;
  estimatedDurationMin: number;
  assignedDate: Date;
  exercises: RoutineExercise[];
}

// --- Otras Entidades ---

/**
 * @interface Connection
 * @description Representa la conexión con un servicio de terceros (ej. Apple Health, Strava).
 *
 * Mapeo a React Native:
 * - Se renderiza en `ConnectionsScreen` como un `ListItem`.
 * - El `status` 'connected' o 'disconnected' determina la acción del botón (Conectar/Gestionar).
 */
export interface Connection {
    id: 'apple_health' | 'strava' | 'garmin_connect';
    name: string;
    description: string;
    status: 'connected' | 'disconnected';
    icon: string; // Nombre del ícono para mostrar
}

/**
 * @interface PrivacySettings
 * @description Modela las configuraciones de privacidad y consentimiento del usuario.
 *
 * Mapeo a React Native:
 * - Cada propiedad se mapea a un componente `<Switch>` en la pantalla `DataPrivacyScreen`.
 */
export interface PrivacySettings {
    shareBiometricsWithCoach: boolean;
    useDataForAnalytics: boolean;
}
