# Aplicaciones del monorepo

Teacher Brain usa **Nx monorepo** con 3 aplicaciones y 2 suites de tests E2E.

## teacher-brain-public

**Sitio público de captación** · Angular 21 · SSR base · Puerto 4201

- Landing product-led con casos de uso FP
- Demo de solo lectura con datos ficticios
- Páginas de confianza: privacidad, seguridad, local-first
- Landings por caso de uso: tutoría, evaluación RA/CE, portal familias
- SEO: metadatos, Open Graph, sitemap, llms.txt, JSON-LD
- Funnel analytics vía dataLayer + CustomEvent

[Repositorio](https://github.com/ivandpazd/teacher-brain/tree/main/apps/teacher-brain-public)

## teacher-brain-web

**Aplicación autenticada** · Angular 21 · Standalone · Puerto 4200

- Dashboard con checklist de activación
- Grupos, módulos, alumnado
- Evaluación con rúbricas y corrección
- Tutoría con privacidad
- Analytics y riesgo académico
- Informes y programación didáctica
- Horario y planificación de sesiones
- FFE / FCT
- Portal del alumno (token de acceso)
- Onboarding guiado

[Repositorio](https://github.com/ivandpazd/teacher-brain/tree/main/apps/teacher-brain-web)

## teacher-brain-api

**Backend NestJS** · PostgreSQL + Prisma · Redis · Puerto 3000

- API REST con OpenAPI/Swagger
- Autenticación JWT con cookies httpOnly
- Rate limiting por endpoint
- Filtrado por workspace en todas las queries
- Módulos por dominio: academic, assessment, tutoring, analytics, reports, ffe

[Repositorio](https://github.com/ivandpazd/teacher-brain/tree/main/apps/teacher-brain-api)
