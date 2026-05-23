# Dominios del sistema

Teacher Brain organiza su lógica de negocio en **dominios**, cada uno con su propio módulo NestJS y sus propias rutas en el frontend Angular.

## identity

**Propósito**: autenticación, registro, perfil docente y onboarding.

- Registro con email + contraseña (argon2id)
- Login con JWT (access token 15 min, refresh token 7 días)
- Cookies httpOnly, secure en producción, SameSite strict
- Recuperación de contraseña con token por email
- Onboarding guiado en 4 pasos: workspace → curso → grupo → módulos

## academic

**Propósito**: estructura académica base.

- Workspace (aislamiento de datos entre profesores)
- Curso académico (2025/2026, etc.)
- Centro educativo (nombre, código, ciudad)
- Grupos (1DAM, 2SMR, etc.)
- Módulos profesionales (Programación, Bases de Datos, etc.)
- Alumnado (con NIA, grupo, datos de familia)
- Asignaciones docente-grupo-módulo

## curriculum

**Propósito**: currículo oficial de FP.

- Resultados de Aprendizaje (RA) con código, peso y orden
- Criterios de Evaluación (CE) vinculados a RA
- Períodos de evaluación (1ª, 2ª, ordinaria, extraordinaria)
- Catálogo de módulos (referencia oficial)

## assessment

**Propósito**: evaluación trazable del alumnado.

- Actividades evaluables (práctica, proyecto, examen, tarea)
- Rúbricas con criterios, niveles y pesos
- Correcciones por alumno y criterio de rúbrica
- Evidencias (una por actividad y alumno)
- Notas con estado (evaluado, no presentado, pendiente recuperación)
- Notas finales de módulo (ordinaria + extraordinaria)
- Cálculo explicable: nota → evidencia → actividad → CE → RA

## tutoring

**Propósito**: seguimiento individualizado del alumnado.

- Sesiones de tutoría con 4 niveles de sensibilidad
- Acuerdos, resumen, próximos pasos
- Control de acceso: solo el tutor del grupo
- Dashboard de riesgo académico con snapshots

## analytics

**Propósito**: datos agregados para toma de decisiones.

- Dashboard de riesgo por alumno y grupo
- Analítica comparativa entre evaluaciones
- Evolución longitudinal del alumnado
- Resúmenes de grupo

## reports

**Propósito**: generación de documentos docentes.

- Informes de evaluación
- Actas de junta de evaluación
- Comunicaciones a familias (asistencia, riesgo, boletín)
- Programación didáctica exportable

## ffe

**Propósito**: gestión de Formación en Fase de Empresa (FCT).

- Placements (asignación alumno-empresa)
- Visitas del tutor (presencial/remota)
- Evaluación final de prácticas
- Timeline histórico de FCT
