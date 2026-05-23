# API de Teacher Brain

La API de Teacher Brain es una API REST documentada con OpenAPI/Swagger.

## Autenticación

La API usa **JWT** (JSON Web Tokens) con cookies httpOnly:

```
POST /api/auth/register   → Crear cuenta
POST /api/auth/login      → Iniciar sesión (devuelve cookies)
POST /api/auth/refresh    → Renovar access token
POST /api/auth/logout     → Cerrar sesión
GET  /api/auth/me         → Datos del usuario autenticado
```

## Estructura de endpoints

| Prefijo | Dominio |
|---------|---------|
| `/api/academic-years` | Cursos académicos, centro educativo |
| `/api/groups` | Grupos, importación CSV |
| `/api/subject-modules` | Módulos profesionales |
| `/api/students` | Alumnado |
| `/api/teaching-assignments` | Asignaciones docente-grupo-módulo |
| `/api/learning-outcomes` | Resultados de Aprendizaje |
| `/api/evaluation-criteria` | Criterios de Evaluación |
| `/api/evaluation-periods` | Períodos de evaluación |
| `/api/activities` | Actividades evaluables |
| `/api/evidences` | Evidencias |
| `/api/grades` | Notas |
| `/api/tutoring/sessions` | Sesiones de tutoría |
| `/api/module-final-grades` | Notas finales de módulo |
| `/api/attendance` | Asistencia |
| `/api/reports` | Informes |
| `/api/analytics` | Dashboards y analítica |
| `/api/ffe` | FCT / FFE |
| `/api/student-access` | Portal del alumno (público) |

## Formato de errores

```json
{
  "code": "student.not_found",
  "message": "Alumno no encontrado",
  "details": { "status": 404 }
}
```

## Documentación interactiva

La especificación OpenAPI completa está disponible en `/api/docs` cuando la API está en ejecución.
