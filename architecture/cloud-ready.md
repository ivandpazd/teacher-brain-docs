# Cloud-ready

Teacher Brain se diseñó desde el inicio como **local-first, cloud-ready** ([ADR 0005](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0005-use-auth-from-start.md)).

## ¿Qué significa "cloud-ready"?

Significa que la aplicación funciona perfectamente en local (Docker Compose con Postgres + Redis) pero su arquitectura está preparada para escalar a producción cloud sin rehacer el núcleo.

## Decisiones que lo hacen posible

| Decisión | Impacto |
|----------|---------|
| Aislamiento por workspace | Multi-tenancy desde el día 1 |
| API stateless | Escalado horizontal sin cambios |
| Redis para rate limiting | Ya configurado, solo cambiar URL |
| Prisma con PgAdapter | Compatible con cualquier Postgres |
| JWT (no sesiones en memoria) | Sin estado en el servidor |
| Docker Compose para dev | Migración directa a Docker prod |

## Roadmap cloud (MVP17)

1. **Docker de producción** (MVP15)
2. **Despliegue en Railway/Fly.io/VPS** (MVP17)
3. **Pooling de conexiones** (PgBouncer)
4. **Caché Redis** para respuestas frecuentes
5. **Procesos background** con BullMQ
6. **Escalado horizontal** de la API

## Lo que NO hacemos (todavía)

- Kubernetes: innecesario para <1000 usuarios
- Microservicios: la arquitectura modular de NestJS es suficiente
- Serverless: NestJS no está optimizado para eso
