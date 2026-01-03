# Especificación Técnica y Base de Código - App de Coaching Deportivo

Este documento detalla la especificación técnica y la base de código inicial para la aplicación de coaching deportivo, siguiendo los requerimientos del documento fuente.

## 1. Alcance MVP

### Features Coach
- **Gestión de Alumnos:** Ver lista de alumnos, acceder a sus perfiles y progreso.
- **Creación de Rutinas:** Diseñar y asignar rutinas de entrenamiento a los alumnos.
- **Feedback:** Dejar comentarios y análisis (posiblemente sobre videos) en los registros de los alumnos.
- **Dashboard:** Vista rápida del estado general de sus atletas.

### Features Alumno
- **Registro de Ejecución:** Anotar los resultados de las rutinas asignadas (pesos, repeticiones, tiempos, etc.).
- **Visualización de Progreso:** Ver gráficos e historial de su rendimiento.
- **Comunicación:** Recibir feedback y mensajes del coach.
- **Perfil:** Gestionar su información personal y física.

---

## 2. Stack Tecnológico Recomendado

- **Framework Principal:** **React Native con Expo (Managed Workflow)**.
- **Lenguaje:** **TypeScript**.
- **Navegación:** **React Navigation**.
- **Gestión de Estado:** **Zustand** (o React Context para casos simples).
- **Estilos:** **Restyle** o **Styled Components** para un sistema de diseño mantenible. Se puede iniciar con `StyleSheet` nativo y migrar si es necesario.
- **Librería de Gráficos:** **`react-native-svg-charts`** o similar para la visualización de datos.
- **Formularios:** **React Hook Form**.
- **Llamadas API:** **TanStack Query (React Query)** para `data fetching`, `caching` y `state synchronization`.

### Justificación

- **Expo (Managed Workflow):** Abstrae la complejidad de la configuración nativa, permitiendo un desarrollo más rápido y enfocado en el código de la aplicación. Facilita las actualizaciones y la gestión de builds (EAS Build). Es ideal para un MVP y no presenta limitaciones significativas para este tipo de app.
- **TypeScript:** Aporta seguridad de tipos, mejora el autocompletado y la mantenibilidad del código, lo cual es crucial para una futura migración o expansión.
- **React Navigation:** Es el estándar de la comunidad para la navegación en React Native, con un amplio soporte y flexibilidad (Stack, Tabs, Drawer).
- **Zustand:** Es una solución de gestión de estado simple, potente y con mínima sobrecarga. Es menos verboso que Redux y más escalable que React Context para estados globales complejos (como información del usuario autenticado).
- **TanStack Query:** Simplifica enormemente la lógica de fetching, cacheo y actualización de datos del servidor, manejando automáticamente estados de carga, error y éxito.

---

## 3. Arquitectura del Proyecto

Se propone una arquitectura por capas y `features`, buscando un alto desacoplamiento y cohesión.

### Estructura de Carpetas

```
/src
├── api/         # Configuraciones de cliente API (ej. Axios) y hooks de fetching.
├── assets/      # Imágenes, fuentes y otros recursos estáticos.
├── components/  # Componentes UI reutilizables (átomos, moléculas, organismos).
│   ├── common/
│   └── layout/
├── config/      # Constantes de configuración (ej. URLs de API, claves).
├── hooks/       # Hooks personalizados de lógica de negocio (no de fetching).
├── navigation/  # Stacks de navegación, Tab Navigators y lógica de ruteo.
├── screens/     # Pantallas de la aplicación, organizadas por feature/flujo.
│   ├── Auth/
│   ├── Athlete/
│   └── Coach/
├── services/    # Lógica de negocio agnóstica al framework (ej. cálculos).
├── state/       # Stores de estado global (Zustand).
├── styles/      # Tema de la aplicación (colores, tipografía, espaciado).
├── types/       # Definiciones de tipos y interfaces de TypeScript.
└── utils/       # Funciones de utilidad reutilizables.
```

### Capas

1.  **Capa de Presentación (UI):** `screens` y `components`. Responsable de renderizar la UI y capturar la interacción del usuario. Es "tonta" y delega la lógica.
2.  **Capa de Dominio/Estado:** `hooks`, `state` y `navigation`. Orquesta la lógica de la aplicación, maneja el estado de la UI y los flujos de navegación.
3.  **Capa de Datos:** `api` y `services`. Encapsula la comunicación con fuentes de datos externas (API REST) y la lógica de negocio pura.

---

## 4. Mapa de Pantallas

A continuación se detalla cada pantalla, su rol, los datos que maneja y las acciones que permite.

- **Screen 1: Athlete Edit Profile (`AthleteEditProfileScreen`)**
    - **Rol:** Permitir al atleta editar su información personal.
    - **Datos:** `UserProfile` (nombre, usuario, email, fecha nacimiento, altura, peso, deporte).
    - **Acciones:** Cambiar foto de perfil, actualizar campos del formulario, guardar cambios.

- **Screen 2: Athlete Notification Settings (`AthleteNotificationSettingsScreen`)**
    - **Rol:** Configurar las preferencias de notificación del atleta.
    - **Datos:** `NotificationSettings`.
    - **Acciones:** Activar/desactivar notificaciones (globales y por categoría), configurar horas de silencio.

- **Screen 3: Athlete Notification Center (`NotificationCenterScreen`)**
    - **Rol:** Mostrar el historial de notificaciones.
    - **Datos:** Lista de `Notification`.
    - **Acciones:** Filtrar por tipo (todas, no leídas), marcar como leídas, navegar al detalle de la notificación.

- **Screen 4: Workout Log (`WorkoutLogScreen`)**
    - **Rol:** Registrar los datos de un ejercicio específico durante un entrenamiento.
    - **Datos:** `ExerciseLog`, `Set`.
    - **Acciones:** Incrementar/decrementar peso y repeticiones, registrar la serie, ver series anteriores.

- **Screen 5: Athlete Connections (`ConnectionsScreen`)**
    - **Rol:** Conectar la app con servicios de terceros (wearables, apps de salud).
    - **Datos:** Lista de `ThirdPartyConnection` y su estado (conectado/desconectado).
    - **Acciones:** Iniciar flujo de OAuth para conectar/desconectar un servicio.

- **Screen 6: Athlete Progress Graphs (`ProgressGraphsScreen`)**
    - **Rol:** Visualizar el progreso del atleta en métricas clave.
    - **Datos:** `HistoricalDataPoint[]` para un ejercicio o métrica.
    - **Acciones:** Filtrar por rango de tiempo, cambiar de métrica (ej. Sentadilla -> Peso Muerto).

- **Screen 7: Athlete Settings (`AthleteSettingsScreen`)**
    - **Rol:** Menú principal de ajustes para el atleta.
    - **Datos:** `UserProfile` (resumen).
    - **Acciones:** Navegar a "Editar Perfil", "Estadísticas", "Conexiones", "Notificaciones", etc.

- **Screen 8: Data & Privacy Management (`DataPrivacyScreen`)**
    - **Rol:** Gestionar consentimientos de datos y privacidad.
    - **Datos:** `PrivacySettings`.
    - **Acciones:** Activar/desactivar permisos, solicitar exportación de datos, eliminar cuenta.

- **Screen 9: Coach Account & Settings (`CoachSettingsScreen`)**
    - **Rol:** Menú principal de ajustes para el coach.
    - **Datos:** `CoachProfile`.
    - **Acciones:** Navegar a "Gestionar Suscripción", "Ajustes de Equipo", "Notificaciones", etc.

- **Screen 10: Client List (`ClientListScreen`)**
    - **Rol:** Mostrar la lista de atletas gestionados por el coach.
    - **Datos:** Lista de `AthleteSummary`.
    - **Acciones:** Buscar, filtrar, navegar al perfil detallado de un atleta, invitar nuevo atleta.

- **Screen 11: Onboarding Success (`OnboardingSuccessScreen`)**
    - **Rol:** Pantalla de finalización exitosa del onboarding.
    - **Datos:** Ninguno.
    - **Acciones:** Navegar al Dashboard principal.

- **Screen 12: Coach Notification Settings (`CoachNotificationSettingsScreen`)**
    - **Rol:** Configurar las preferencias de notificación del coach.
    - **Datos:** `NotificationSettings`.
    - **Acciones:** Activar/desactivar notificaciones por categoría.

... y así sucesivamente para las 43 pantallas.

---

## 5. Flujos Críticos

### Flujo: Registro de una Serie por el Atleta

1.  **Pantalla:** `WorkoutLogScreen`.
2.  **Estado Inicial:** Se muestra el `target` para la serie actual (ej. 10-12 reps @ 62.5kg). Los campos `peso` y `reps` están pre-poblados con este target.
3.  **Interacción del Usuario:**
    - El atleta ajusta los valores de `peso` y `reps` usando los botones `+` / `-` o el input directo.
    - **Validación:** Los valores deben ser numéricos y mayores a cero.
4.  **Acción:** El atleta presiona "Registrar Serie".
5.  **Lógica:**
    - Se crea un objeto `SetLog` con `{ weight, reps, rpe }`.
    - Se realiza una llamada a la API (`POST /api/workout-logs/{logId}/sets`) para persistir los datos.
    - **Manejo de UI:**
        - **Cargando:** El botón "Registrar Serie" muestra un `ActivityIndicator` y se deshabilita.
        - **Éxito:**
            - La serie recién registrada se añade a la lista de "Previous Sets" con estado "Done".
            - El contador de "Set" avanza (ej. "Set 3" -> "Set 4").
            - Los campos de input se resetean para la nueva serie, pre-poblados con el nuevo `target` si existe.
            - Se muestra un feedback visual sutil (ej. un `toast` "Serie guardada").
        - **Error:** Se muestra un `Alert` o un `toast` con el mensaje de error (ej. "Error de conexión, intente de nuevo"). El botón se reactiva.

---

## 6. Modelo de Datos (TypeScript)

```typescript
// /src/types/entities.ts

// Usuario base
export interface User {
  id: string;
  fullName: string;
  username: string;
  email: string; // Read-only
  profileImageUrl?: string;
}

// Perfil del Atleta
export interface AthleteProfile extends User {
  role: 'athlete';
  dateOfBirth: Date;
  heightCm: number;
  weightKg: number;
  primarySport: string;
  coachId?: string;
}

// Perfil del Coach
export interface CoachProfile extends User {
  role: 'coach';
  specialties: string[];
  bio?: string;
  tier: 'free' | 'pro' | 'elite';
}

// Notificaciones
export interface Notification {
  id: string;
  type: 'workout_reminder' | 'feedback_received' | 'new_message' | 'pr_achieved';
  title: string;
  body: string;
  timestamp: Date;
  isRead: boolean;
  ctaLink?: string; // Link para navegación
}

// Serie de un ejercicio
export interface ExerciseSet {
  setNumber: number;
  targetReps?: number;
  targetWeightKg?: number;
  loggedReps?: number;
  loggedWeightKg?: number;
  rpe?: number; // Rate of Perceived Exertion (1-10)
  isCompleted: boolean;
}

// Ejercicio dentro de una rutina
export interface RoutineExercise {
  id: string;
  exerciseId: string; // FK a una librería de ejercicios
  name: string;
  sets: ExerciseSet[];
  notes?: string;
}

// Rutina
export interface Routine {
  id: string;
  name: string;
  description?: string;
  estimatedDurationMin: number;
  exercises: RoutineExercise[];
}
```

---

## 7. Seguridad y Roles

- **Autenticación:** Se utilizará un sistema basado en **JWT (JSON Web Tokens)**. El token se obtendrá en el login y se almacenará de forma segura en el dispositivo (`Expo SecureStore`). Se adjuntará en la cabecera `Authorization` de cada petición a la API.
- **Roles:** `coach` y `athlete`.
- **Reglas de Acceso:**
    - La API debe validar el rol del usuario en cada endpoint.
    - Un `athlete` solo puede acceder a sus propios datos (rutinas, progreso, perfil).
    - Un `coach` puede acceder a los datos de los atletas que están bajo su gestión (`coachId` en el perfil del atleta).
    - Ciertas acciones, como la creación de rutinas, estarán restringidas solo al rol de `coach`.

---

## 8. Servicios / API (Endpoints)

Se definen los endpoints RESTful necesarios para el MVP.

- `POST /auth/login`: Autentica al usuario y devuelve un JWT.
- `GET /users/me`: Obtiene el perfil del usuario autenticado.
- `PUT /users/me`: Actualiza el perfil del usuario.
- `GET /coaches/{coachId}/athletes`: Obtiene la lista de atletas de un coach.
- `POST /coaches/invite`: Envía una invitación a un nuevo atleta.
- `GET /athletes/{athleteId}/routines`: Obtiene las rutinas asignadas a un atleta.
- `POST /workouts/{workoutId}/logs`: Registra la finalización de un ejercicio en una sesión.
- `GET /athletes/{athleteId}/progress?metric=deadlift`: Obtiene el historial de progreso para una métrica.

### Payload de Ejemplo (Registrar Serie)

`POST /workouts/{workoutId}/logs/{exerciseLogId}/sets`

```json
{
  "setNumber": 3,
  "weightKg": 62.5,
  "reps": 12,
  "rpe": 8
}
```

### Manejo de Errores

- La API responderá con códigos de estado HTTP estándar (200, 201, 400, 401, 403, 500).
- El cliente (React Native) utilizará `TanStack Query` para manejar los estados de `isLoading`, `isError`, y `isSuccess`, mostrando los componentes de UI correspondientes.

---

## 9. Componentes Reutilizables

- `Button.tsx`: Botón primario y secundario con estados de carga.
- `TextInput.tsx`: Input de texto con ícono, label y manejo de errores.
- `ScreenLayout.tsx`: Componente `SafeAreaView` base para todas las pantallas con manejo de scroll.
- `Header.tsx`: Barra de navegación superior reutilizable.
- `Avatar.tsx`: Componente para mostrar la imagen de perfil del usuario.
- `StatCard.tsx`: Tarjeta para mostrar una métrica clave (ej. en el dashboard).
- `ListItem.tsx`: Elemento de lista genérico para mostrar atletas, notificaciones, etc.

---

## 11. Plan por Fases

1.  **Fase 1: Setup y Base (1-2 semanas)**
    - Configuración del proyecto Expo con TypeScript.
    - Implementación del tema (colores, fuentes) y componentes base (`Button`, `TextInput`).
    - Configuración de la navegación (Tab Navigator, Stacks principales).
    - Implementación de flujos de autenticación (Login, Sign up, Forgot Password).

2.  **Fase 2: MVP Features (3-4 semanas)**
    - **Alumno:** Implementar visualización de rutinas, registro de series (`WorkoutLogScreen`), y visualización de progreso.
    - **Coach:** Implementar vista de lista de atletas y perfil detallado.
    - Conexión con una API mock/real para los flujos críticos.

3.  **Fase 3: Pulido y Features Secundarias (2-3 semanas)**
    - Implementar las pantallas de ajustes (perfil, notificaciones, conexiones).
    - Construir los dashboards y pantallas de analíticas con gráficos.
    - Refinar la UI, añadir animaciones y manejar todos los estados (vacío, error, carga).

---

## 12. Checklist de Calidad

- **Performance:**
    - [ ] Utilizar `React.memo`, `useCallback`, `useMemo` para evitar re-renders innecesarios.
    - [ ] Virtualizar listas largas con `FlatList` o `FlashList`.
    - [ ] Optimizar el tamaño de las imágenes (`expo-image`).
    - [ ] Monitorear el rendimiento del hilo de JS con Flipper o herramientas nativas.
- **Mantenibilidad:**
    - [ ] Código fuertemente tipado con TypeScript.
    - [ ] Adherencia a la arquitectura de capas definida.
    - [ ] Lógica de negocio extraída en `hooks` y `services` reutilizables.
    - [ ] Comentarios extensos y didácticos, como se solicita.
- **Facilidad de Migración:**
    - [ ] Mantener la lógica de negocio agnóstica a React Native en la capa de `services`.
    - [ ] Utilizar patrones de diseño que se traduzcan fácilmente a otras plataformas si fuera necesario (ej. Repositorio).
    - [ ] Documentar claramente la intención de cada pieza de código, especialmente aquellas que son `fallbacks` de TypeScript puro.
