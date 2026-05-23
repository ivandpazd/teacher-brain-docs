# Índice de ADRs

Teacher Brain documenta sus decisiones arquitectónicas mediante **Architecture Decision Records (ADRs)**. Los ADRs viven en el [monorepo principal](https://github.com/ivandpazd/teacher-brain/tree/main/docs/adr) junto al código, pero se referencian aquí para consulta.

## ADRs por fase

### MVP 0-4: Fundamentos
| ADR | Título |
|-----|--------|
| 0001 | Uso de Nx como monorepo |
| 0002 | Uso de Angular como frontend |
| 0003 | Uso de NestJS como backend |
| 0004 | Uso de PostgreSQL y Prisma |
| 0005 | Autenticación desde el inicio |
| 0006 | Propiedad de datos basada en workspace |
| 0007 | Estrategia de sesión y hashing de contraseñas |
| 0008 | Proveedor de email transaccional |
| 0009 | Estrategia de rate limiting |
| 0010 | Cookies de sesión y revocación JTI |

### MVP 5-8: Dominio docente
| ADR | Título |
|-----|--------|
| 0011 | Datos de alumnado y privacidad |
| 0012 | Modelo de horario |
| 0013 | Modelo de evaluación y calificación |
| 0014 | Períodos de evaluación y reglas de recuperación |
| 0015 | Privacidad en sesiones de tutoría |
| 0016 | Snapshots de riesgo académico |
| 0017 | Programación didáctica y unidades |
| 0018 | Rúbricas y modelo de corrección |
| 0019 | Nota final de módulo y convocatorias |
| 0020 | Estrategia de exportación de informes |
| 0021 | Modelo de asistencia |
| 0022 | Modelo FFE / FCT |
| 0023 | Planificación de sesiones diarias |
| 0024 | Portal de acceso de alumnado |
| 0025 | Estrategia global de autorización |
| 0026 | Exportación de programación didáctica |
| 0027 | Modelo de comunicaciones a familias |
| 0028 | Modelo de junta de evaluación |

### MVP 9-12: Expansión
| ADR | Título |
|-----|--------|
| 0029 | Normalización de estado académico para comparativas |
| 0030 | Modelo de analítica comparativa longitudinal |
| 0031 | Estrategia de retención y purga de datos |
| 0032 | Hoja de ruta técnica y deuda arquitectónica |

### MVP 13-20: Futuro
| ADR | Título | MVP |
|-----|--------|-----|
| 0033 | Estrategia de refactor del AcademicService | 13 |
| 0034 | Estrategia de testing integral y CI/CD | 14 |
| 0035 | Estrategia de despliegue y operaciones | 15 |
| 0036 | Estrategia de funcionalidades docentes | 16 |
| 0037 | Arquitectura cloud multi-tenant | 17 |
| 0038 | Seguridad en profundidad | 19 |
| 0039 | Marketing y crecimiento digital | 18 |
| 0040 | Innovación y diferenciación competitiva | 20 |

---

Todos los ADRs están disponibles en [GitHub](https://github.com/ivandpazd/teacher-brain/tree/main/docs/adr).
