# Contribuir al proyecto

Teacher Brain es un proyecto abierto. Agradecemos contribuciones de código, documentación, testing y feedback.

## Configuración del entorno

1. Clona el [monorepo principal](https://github.com/ivandpazd/teacher-brain)
2. Instala dependencias: `pnpm install`
3. Levanta la base de datos: `pnpm db:up`
4. Ejecuta migraciones: `pnpm prisma:migrate`
5. (Opcional) Carga datos de prueba: `pnpm db:seed`
6. Arranca en desarrollo: `pnpm dev`

## Flujo de trabajo

1. **Elige una issue** del [backlog](https://github.com/ivandpazd/teacher-brain/issues)
2. **Crea una rama**: `feat/XXX-descripcion` o `fix/XXX-descripcion`
3. **Commits**: [Conventional Commits](https://www.conventionalcommits.org/) (`feat:`, `fix:`, `docs:`, `test:`, `refactor:`)
4. **Tests**: asegúrate de que `pnpm test` pasa
5. **PR**: crea un Pull Request a `main` describiendo el cambio

## Guía de estilos

- **TypeScript estricto** en todo el proyecto
- **Angular**: standalone components, signals, control flow moderno
- **NestJS**: controladores finos, DTOs con validación, servicios por dominio
- **CSS**: usar tokens `--tb-*` del design system. No hardcodear colores.

## Testing

```bash
pnpm test                    # todos los proyectos
pnpm nx test teacher-brain-api     # solo backend
pnpm nx test teacher-brain-web     # solo frontend
```

## Documentación

- Los ADRs se escriben en `docs/adr/` del monorepo
- La documentación de producto/guías se escribe en el [repo de docs](https://github.com/ivandpazd/teacher-brain-docs)
