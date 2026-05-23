# Stack tecnológico

| Área | Tecnología | Versión | Notas |
|------|-----------|---------|-------|
| Monorepo | Nx | 22.7.2 | Gestión de proyectos, builds, caché |
| Frontend público | Angular 21 | 21.2.10 | Standalone, signals, SSR base |
| Frontend autenticado | Angular 21 | 21.2.10 | Standalone, signals, lazy loading |
| Backend | NestJS | 11 | Módulos por dominio, DTOs, guards |
| Lenguaje | TypeScript | 5.9 | Strict mode |
| Base de datos | PostgreSQL | 18 | Docker en dev, cloud-ready en prod |
| ORM | Prisma | 7.8 | PgAdapter, migraciones |
| Caché / Rate limit | Redis | 7 | Alpine en Docker |
| Testing frontend | Vitest Angular | 4.1 | 356 tests |
| Testing backend | Jest | 30.3 | 433 tests |
| Testing E2E | Playwright | 1.59 | Funnel público + flujos internos |
| CSS | SCSS | — | Design system con tokens `--tb-*` |
| Infraestructura dev | Docker Compose | — | Postgres + Redis |
| Infraestructura prod | Railway / Fly.io | — | Cloud-ready (planificado) |
| CI/CD | GitHub Actions | — | Lint + test + build (planificado) |
| SEO/GEO | — | — | Metadatos, sitemap, llms.txt, JSON-LD |

## Por qué este stack

- **Nx**: necesario para gestionar 3 apps + librerías futuras en un solo repo.
- **Angular**: framework enterprise con tooling maduro, adecuado para aplicación de gestión docente.
- **NestJS**: arquitectura modular alineada con Angular, inyección de dependencias, guards.
- **PostgreSQL**: base de datos relacional robusta, adecuada para datos académicos con relaciones complejas.
- **Prisma**: ORM type-safe con migraciones y cliente generado, buena DX.
- **Redis**: rate limiting y caché con integración nativa en NestJS.
