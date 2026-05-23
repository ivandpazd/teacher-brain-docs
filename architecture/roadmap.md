# Hoja de ruta post-MVP12 — Teacher Brain

**Versión**: 1.0  
**Fecha**: 2026-05-23  
**ADR vinculado**: [`0032-technical-debt-and-architecture-roadmap.md`](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0032-technical-debt-and-architecture-roadmap.md)

## Resumen ejecutivo

Teacher Brain llega a MVP12 con 789 tests, 13 MVPs completados, sitio público separado con SSR/SEO/GEO, y una base de datos de prueba con 61 alumnos, 10 módulos, tutorías, notas, asistencia y FFE. 

El producto **funciona**, pero tiene **deuda técnica acumulada** que debe resolverse antes de escalar a cloud o añadir funcionalidades avanzadas. Esta hoja de ruta define 5 MVPs adicionales que alternan consolidación, calidad, operaciones, features y cloud.

---

## MVP13 — Consolidación técnica y deuda arquitectónica

### Objetivo

Eliminar la deuda técnica acumulada en frontend, backend y tooling. Este MVP no añade funcionalidades visibles para el usuario final, pero reduce drásticamente el riesgo de regresiones y el coste de mantenimiento futuro.

### Estado actual de la deuda

| Área | Problema | Impacto |
|------|----------|---------|
| Backend | `AcademicService` monolítico de 2669 líneas mezclando estudiantes, grupos, módulos, RAs, CEs, evidencias, notas, actividades, materiales y evaluación | Alto: cualquier cambio toca un archivo enorme, riesgo de regresiones |
| Frontend SCSS | 7 imports con `@import` deprecado en Sass 3.0 (con avisos en cada build) | Medio: build warnings, riesgo de rotura futura |
| Frontend TS | 55 catch blocks dispersos con patrón `catch { this.error.set('mensaje') }` | Medio: duplicación, difícil de mantener |
| Frontend TS | 3 imports no usados (RouterLink en wizard, NgIf en my-center) | Bajo: warnings de compilación |
| Backend | Servicio FFE y StudentAccess controller sin tests unitarios | Medio: sin cobertura de regresión |
| Tooling | Angular 21.2.10 con posibilidad de actualización a última estable | Bajo: mantenimiento preventivo |

### Entregables detallados

#### 1. Refactor AcademicService monolítico

**Archivo actual**: `apps/teacher-brain-api/src/app/academic/academic.service.ts` (2669 líneas)

**División propuesta**:

```
apps/teacher-brain-api/src/app/academic/
├── services/
│   ├── students.service.ts          (~300 líneas)
│   ├── groups.service.ts            (~250 líneas)
│   ├── modules.service.ts           (~300 líneas)
│   ├── learning-outcomes.service.ts (~200 líneas)
│   ├── evaluation-criteria.service.ts (~200 líneas)
│   ├── activities.service.ts        (~300 líneas)
│   ├── evidences.service.ts         (~250 líneas)
│   ├── grades.service.ts            (~250 líneas)
│   ├── materials.service.ts         (~150 líneas)
│   └── assessment-calc.service.ts   (~400 líneas)
├── academic.module.ts               (actualizado)
└── academic.controller.ts           (actualizado)
```

**Reglas**:
- Cada servicio nuevo hereda las dependencias actuales (PrismaService, WorkspaceContext).
- Los métodos existentes se mueven sin cambios de lógica.
- Los tests existentes se mueven a specs por servicio.
- El `AcademicModule` exporta los nuevos servicios manteniendo compatibilidad.
- El `AcademicController` delega en los nuevos servicios.

**Riesgos**:
- Cambios en imports de otros módulos que usen AcademicService directamente.
- Posibles regresiones por dependencias cruzadas entre servicios.
- **Mitigación**: hacer el refactor en PRs incrementales, un servicio por PR, validando tests en cada paso.

#### 2. Migración Sass @import → @use/@forward

**Archivos afectados**:
- `apps/teacher-brain-web/src/styles.scss` (7 imports)
- `apps/teacher-brain-public/src/styles.scss` (1 import cross-app)

**Cambios necesarios**:
- Reemplazar `@import 'styles/buttons'` por `@use 'styles/buttons'`
- Verificar que Angular CLI + esbuild soportan `@use` en estilos globales
- Si no soporta `@use`, configurar `@use` con nombres de módulo explícitos
- Ajustar variables y mixins que dependan del scope global de `@import`

#### 3. Centralizar manejo de errores frontend

**Archivos afectados**: ~55 archivos en `apps/teacher-brain-web/src/app/`

**Propuesta**: crear `ErrorHandlerService` con métodos:
```typescript
handleHttpError(error: unknown, errorSignal: WritableSignal<string | null>): void
handleApiError(error: ApiError, errorSignal: WritableSignal<string | null>): void
```

**Migración**: reemplazar incrementalmente los catch blocks.

#### 4. Limpieza de warnings de compilación

- Eliminar `RouterLink` no usado de `academic-year-wizard-page.ts`
- Eliminar `NgIf` no usado de `my-center-page.ts`
- Verificar que no quedan imports no usados en el resto del proyecto

#### 5. Tests para servicios sin cobertura

- `apps/teacher-brain-api/src/app/ffe/ffe.service.spec.ts` (nuevo)
- `apps/teacher-brain-api/src/app/student-access/student-access.controller.spec.ts` (nuevo)

#### 6. Actualización Angular tooling

- Evaluar actualización a la última versión estable de Angular 21.x
- Verificar compatibilidad con todas las dependencias

### Tamaño estimado: L (2-3 semanas)
### Prioridad: P0 (bloquea MVPs futuros)

---

## MVP14 — Testing integral y CI/CD

### Objetivo

Blindar la calidad con tests automatizados exhaustivos y un pipeline de integración continua que valide cada PR.

### Entregables detallados

#### 1. Tests E2E del funnel público

**Flujo a testear con Playwright**:
1. Visitante llega a landing pública
2. Navega por secciones (features, use cases, FAQ)
3. Hace clic en CTA "Crear cuenta docente"
4. Llega a página de registro en app autenticada
5. Completa registro con datos válidos
6. Es redirigido a login con mensaje de éxito
7. Inicia sesión
8. Entra en onboarding guiado
9. Completa todos los pasos del onboarding
10. Llega al dashboard con checklist de activación

**Archivos nuevos**:
- `apps/teacher-brain-public-e2e/` (nuevo proyecto Nx con Playwright)
- Tests del sitio público (landing, demo, páginas de confianza)
- Tests del funnel completo (cross-app)

#### 2. Tests de integración backend

**Módulos prioritarios**:
- Reports: generar informes y verificar contenido
- Analytics: ejecutar dashboards y verificar datos agregados
- Final grades: calcular notas y verificar reglas de evaluación
- Attendance: registrar asistencia y verificar resúmenes

#### 3. Pipeline CI/CD con GitHub Actions

**Workflow por PR**:
```yaml
name: CI
on: [pull_request]
jobs:
  lint:
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm lint]
  test:
    needs: lint
    runs-on: ubuntu-latest
    services: [postgres, redis]
    steps: [checkout, setup-node, pnpm install, pnpm test]
  build:
    needs: test
    runs-on: ubuntu-latest
    steps: [checkout, setup-node, pnpm install, pnpm build]
```

#### 4. Enforce performance budgets en CI

- Añadir step en CI que verifique los budgets del build
- Fallar el PR si se excede el presupuesto de bundle

#### 5. Auditoría de accesibilidad (WCAG 2.1 AA)

- Revisar contraste de color en todos los componentes
- Verificar navegación por teclado
- Añadir atributos ARIA donde falten
- Validar con axe-core o Lighthouse

#### 6. Automatización de dependencias

- Configurar Renovate o Dependabot para actualizaciones mensuales
- Configurar reglas de auto-merge para actualizaciones de patch

### Tamaño estimado: L (3-4 semanas)
### Prioridad: P0 (bloquea despliegue en producción)

---

## MVP15 — Despliegue, operaciones y hardening

### Objetivo

Preparar Teacher Brain para entornos de producción reales con despliegue, monitorización y seguridad operacional.

### Entregables detallados

#### 1. Docker de producción para API

**Dockerfile actual**: no existe para producción (solo docker-compose para desarrollo con Postgres)

**Nuevo**: `apps/teacher-brain-api/Dockerfile` multi-stage:
- Stage 1: build con pnpm
- Stage 2: runtime con Node Alpine, solo dependencias de producción
- Health check integrado

#### 2. Gestión de entornos

**Entornos necesarios**:
- **Desarrollo**: local con docker-compose (existente)
- **Staging**: despliegue automatizado desde main, base de datos de prueba
- **Producción**: despliegue manual con aprobación, base de datos real

**Variables de entorno por entorno**:
| Variable | Desarrollo | Staging | Producción |
|----------|-----------|---------|------------|
| DATABASE_URL | localhost:5432 | postgres-staging | postgres-prod |
| JWT_ACCESS_SECRET | dev-secret | staging-secret | prod-secret (vault) |
| NODE_ENV | development | staging | production |
| THROTTLE_DISABLED | true | false | false |

#### 3. Backup y restauración de base de datos

- Script de backup diario con `pg_dump`
- Retención: 30 días en staging, 90 días en producción
- Procedimiento documentado de restauración
- Prueba de restauración mensual

#### 4. Monitorización básica

- Health check endpoint en API (`/api/health`)
- Uptime monitoring (UptimeRobot o similar)
- Error tracking (Sentry o similar)
- Logs estructurados (JSON) para agregación

#### 5. Hardening de rate limiting

- Revisar y ajustar límites por endpoint
- Añadir rate limiting a endpoints sin cobertura explícita
- Documentar política de rate limiting

#### 6. Cabeceras de seguridad

- Revisar CSP actual y ajustar para producción
- Añadir cabeceras HSTS, Permissions-Policy, Referrer-Policy
- Validar con securityheaders.com

### Tamaño estimado: M (2-3 semanas)
### Prioridad: P1 (necesario antes de producción)

---

## MVP16 — Funcionalidades docentes de segunda generación

### Objetivo

Añadir capacidades avanzadas que los profesores demandan tras usar el producto base durante un curso completo.

### Entregables detallados

#### 1. Wizard de importación/exportación de datos académicos

- Importar programación didáctica desde CSV/Excel
- Exportar datos completos de un grupo (alumnado, notas, asistencia)
- Migrar configuración de un curso a otro (clonar estructura)

#### 2. Operaciones masivas

- Entrada de notas por tabla (estilo excel)
- Registro de asistencia masivo por día
- Asignación de actividades a múltiples grupos

#### 3. Informes avanzados con builder visual

- Selector de campos, filtros y agrupaciones
- Exportación a PDF y Excel
- Plantillas de informes guardables

#### 4. Integración con calendario externo

- Exportar horario a Google Calendar / iCal
- Sincronizar sesiones de tutoría como eventos

#### 5. Sistema de notificaciones

- Recordatorios de tutoría programada
- Avisos de cierre de evaluación
- Notificaciones de riesgo académico

#### 6. Soporte multi-workspace

- Un profesor con varios centros educativos
- Cambio de workspace sin re-login
- Dashboard agregado multi-workspace

### Tamaño estimado: XL (4-6 semanas)
### Prioridad: P2 (mejora la experiencia pero no es bloqueante)

---

## MVP17 — Cloud, escalado y operaciones avanzadas

### Objetivo

Llevar Teacher Brain a producción cloud con garantías de rendimiento, escalabilidad y disponibilidad.

### Entregables detallados

#### 1. Despliegue multi-tenant cloud real

- Plataforma: Railway, Fly.io, Render o VPS propio
- Separación de datos por workspace (ya implementada)
- Aislamiento de recursos entre tenants

#### 2. Pooling de conexiones de base de datos

- Configurar PgBouncer o built-in pooling de Prisma
- Optimizar número de conexiones para carga esperada
- Monitorizar uso de conexiones

#### 3. Capa de caché con Redis

- Cachear respuestas de API frecuentes (listados, dashboards)
- Invalidación de caché en escrituras
- Configuración de TTL por tipo de dato

#### 4. Almacenamiento de ficheros

- Subida de materiales docentes (PDF, imágenes)
- Integración con S3 o compatible (Cloudflare R2, MinIO)
- Límites de tamaño y tipos de archivo permitidos

#### 5. Procesos en background

- Cálculo de risk snapshots programado (diario/semanal)
- Generación de informes pesados en cola
- Envío de notificaciones diferidas

#### 6. Preparación para escalado horizontal

- Stateless API (sin sesiones en memoria)
- Redis para sesiones y rate limiting (ya implementado)
- Balanceador de carga (si aplica)

### Tamaño estimado: XL (4-6 semanas)
### Prioridad: P3 (necesario para producción a escala)

---

## MVP18 — Marketing, SEO, GEO y crecimiento

### Objetivo

Posicionar Teacher Brain como la herramienta de referencia para profesorado de FP informática en el mercado hispanohablante, con canales de adquisición medibles y presencia de marca profesional.

### Estudio competitivo: iDoceo

iDoceo es el gradebook más popular entre docentes (iOS, offline, pago único). Teacher Brain tiene ventajas diferenciales claras:

| Característica | iDoceo | Teacher Brain |
|---------------|--------|---------------|
| Plataforma | iOS/Mac solamente | Web (cross-platform) |
| Usuarios | Single-device | Multiusuario / workspace |
| Trazabilidad RA/CE | No | Sí (diferenciador FP España) |
| Tutoría con privacidad | No | Sí (4 niveles) |
| FFE/FCT | No | Sí |
| Cloud-ready | No (offline) | Sí |
| Analytics y riesgo | No | Sí |
| Portal familias | iDoceo Connect (limitado) | Sí (token, solo lectura) |
| Precio | Pago único ~15€ | Modelo por definir |

### Entregables detallados

1. Blog técnico con 12 artículos SEO para FP informática
2. 3-5 casos de estudio documentados con datos de uso reales (anonimizados)
3. Canal YouTube con 6 videos (1 hero + 5 tutoriales) + Shorts para redes
4. Estrategia de redes: LinkedIn (3/sem), Twitter/X (5/sem), Instagram (2/sem)
5. Email marketing funnel con 4 lead magnets + secuencia de 5 emails
6. 6 landings por familia profesional (DAM, DAW, ASIR, SMR, Marketing, Comercio)
7. 3 páginas de comparación con competidores (iDoceo, Additio, Excel)
8. Google Ads + LinkedIn Ads con segmentación a profesorado FP
9. Programa de 5-10 embajadores early adopters
10. 4 webinars trimestrales para profesorado
11. A/B testing de landing pages y CTAs
12. Dashboard de métricas de conversión con atribución de canal

### Tamaño estimado: L (4-6 semanas, distribuido en el tiempo)
### Prioridad: P1 (arrancar tras MVP15 para tener producto sólido que vender)

---

## MVP19 — Seguridad de datos y cumplimiento normativo

### Objetivo

Alcanzar un nivel de seguridad y cumplimiento que permita a Teacher Brain operar con datos reales de menores en centros educativos con total garantía, convirtiendo la seguridad en una ventaja competitiva.

### Posicionamiento frente a iDoceo

iDoceo se vende como "offline, tus datos solo en tu dispositivo". Teacher Brain debe comunicar: "tus datos están más seguros en Teacher Brain que en un iPad en tu mochila", respaldado por:
- Cifrado en reposo y en tránsito
- Autenticación de dos factores
- Logs de auditoría de accesos
- Cumplimiento GDPR verificado externamente
- Pentesting independiente

### Entregables detallados

1. Auditoría GDPR completa con consultoría externa especializada en educación
2. Cifrado de datos en reposo (column-level para datos sensibles)
3. Penetration testing externo (OWASP Top 10 + API security)
4. Programa de divulgación responsable (security.txt, bug bounty)
5. Preparación para ISO 27001 (políticas, 114 controles Anexo A)
6. Logging de auditoría para accesos a datos sensibles
7. Two-factor authentication (TOTP) para profesorado
8. Dashboard de sesiones activas con revocación remota
9. API key management para integraciones externas
10. Plan de respuesta a incidentes documentado y simulado
11. Backup cifrado con verificación de integridad automática
12. Escaneo de dependencias en CI (Snyk/Trivy)
13. Gestión centralizada de secretos (Vault/Doppler)

### Tamaño estimado: L (4-6 semanas, algunas tareas en paralelo)
### Prioridad: P1 (imprescindible antes de producción con datos reales)

---

## Resumen de esfuerzo estimado

| MVP | Semanas | Tipo | Impacto usuario |
|-----|---------|------|-----------------|
| MVP13 | 2-3 | Técnico | Invisible (calidad interna) |
| MVP14 | 3-4 | Calidad | Invisible (confianza) |
| MVP15 | 2-3 | Operaciones | Invisible (disponibilidad) |
| MVP16 | 4-6 | Funcional | Alto (nuevas capacidades) |
| MVP17 | 4-6 | Cloud | Alto (producción real) |
| MVP18 | 4-6 | Marketing | Alto (captación y marca) |
| MVP19 | 4-6 | Seguridad | Alto (confianza y compliance) |
| **Total** | **23-34 semanas** | | |

---

## Dependencias entre MVPs

```
MVP13 (consolidación)
  └── MVP14 (testing + CI/CD)
        └── MVP15 (operaciones)
              ├── MVP16 (features avanzadas)
              ├── MVP17 (cloud + escalado)
              ├── MVP18 (marketing — puede arrancar en paralelo)
              └── MVP19 (seguridad — puede arrancar en paralelo)
```

MVP18 y MVP19 pueden ejecutarse en paralelo con MVP16 y MVP17 porque tocan áreas distintas (marketing no depende de features, seguridad puede avanzar sobre la arquitectura actual).

---

**Documento generado**: 2026-05-23  
**ADR vinculado**: [`0032-technical-debt-and-architecture-roadmap.md`](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0032-technical-debt-and-architecture-roadmap.md)
