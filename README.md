# Teacher Brain — Documentación oficial

Sitio web de documentación para [Teacher Brain](https://github.com/ivandpazd/teacher-brain), la herramienta para profesorado de FP informática.

## Estructura

```
teacher-brain-docs/
├── .vitepress/config.ts     ← Configuración de VitePress
├── .github/workflows/       ← CI/CD (deploy a GitHub Pages)
├── index.md                 ← Página principal (hero + features)
├── architecture/            ← Arquitectura, roadmap, ADRs
├── design/                  ← Contratos visuales, design system
├── guides/                  ← Primeros pasos, migración, FAQ
├── privacy/                 ← Privacidad, seguridad, retención
├── api/                     ← Referencia de API
└── public/                  ← Assets estáticos (logo, imágenes)
```

## Desarrollo local

```bash
npm install
npm run docs:dev        # http://localhost:5173
```

## Despliegue

El sitio se despliega automáticamente a GitHub Pages en cada push a `main`.

## Contribuir

La documentación se edita como markdown estándar. Cada página tiene un enlace "Editar esta página en GitHub" que abre un PR directamente.
