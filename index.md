---
layout: home

hero:
  name: Teacher Brain
  text: Documentación oficial
  tagline: Herramienta para profesorado de FP informática — evaluación, tutoría, riesgo académico, informes y más.
  image:
    src: /teacher-brain.png
    alt: Teacher Brain
  actions:
    - theme: brand
      text: Empezar
      link: /guides/getting-started
    - theme: alt
      text: Ver roadmap
      link: /architecture/roadmap
    - theme: alt
      text: GitHub
      link: https://github.com/ivandpazd/teacher-brain

features:
  - icon: 🏗️
    title: Arquitectura documentada
    details: 40 ADRs, visión general, stack tecnológico, dominios, aplicaciones y decisiones arquitectónicas.
    link: /architecture/overview
  - icon: 🗺️
    title: Roadmap de MVPs
    details: 8 MVPs planificados (MVP13-MVP20) con estimaciones, dependencias y análisis competitivo.
    link: /architecture/roadmap
  - icon: 🎨
    title: Diseño y UX
    details: Contrato visual público, design system con tokens CSS, componentes compartidos y guías de copy.
    link: /design/public-contract
  - icon: 📖
    title: Guías prácticas
    details: Primeros pasos, migración desde iDoceo/Additio, guía de contribución y FAQ.
    link: /guides/getting-started
  - icon: 🔒
    title: Privacidad y seguridad
    details: Política de retención LOPDGDD/GDPR, arquitectura de seguridad en 5 capas, cumplimiento normativo.
    link: /privacy/overview
  - icon: 🔌
    title: API de referencia
    details: Endpoints, autenticación, DTOs y ejemplos de uso de la API de Teacher Brain.
    link: /api/overview
---

## ¿Qué es Teacher Brain?

Teacher Brain es una aplicación fullstack diseñada específicamente para **profesorado de Formación Profesional informática**. No es un gradebook genérico: está construido alrededor de los conceptos y flujos de trabajo reales de la FP española.

### ¿Qué lo hace diferente?

- **Trazabilidad RA/CE nativa**: cada nota puede explicarse recorriendo actividad → criterio de evaluación → resultado de aprendizaje → módulo → alumno.
- **Tutoría con privacidad**: 4 niveles de sensibilidad, acceso controlado, sin exponer datos delicados en listados.
- **FCT/FFE integrado**: gestión completa de prácticas en empresa con visitas, evaluación y diario.
- **Local-first, cloud-ready**: funciona en local hoy, preparado para escalar a cloud mañana.
- **Multiusuario desde el diseño**: arquitectura de workspace que aísla datos entre profesores.

### Estado actual del proyecto

| MVP | Estado | Descripción |
|-----|--------|-------------|
| MVP 0-8 | ✅ Completado | Auth, estructura académica, evaluación, tutoría, riesgo, FFE, planificación, portal alumno |
| MVP 9 | ✅ Completado | Cierre docente, comunicaciones, junta de evaluación |
| MVP 10 | ✅ Completado | Analítica comparativa y seguimiento longitudinal |
| MVP 11 | ✅ Completado | Calidad y experiencia docente |
| MVP 12 | ✅ Completado | Captación pública, SEO/GEO y activación |
| MVP 13-20 | 📋 Planificado | [Ver roadmap →](/architecture/roadmap) |

### Stack tecnológico

| Área | Tecnología |
|------|-----------|
| Monorepo | Nx |
| Frontend | Angular 21 (standalone, signals) |
| Backend | NestJS 11 |
| Base de datos | PostgreSQL 18 |
| ORM | Prisma |
| Testing | Vitest Angular, Jest, Playwright |
| Infraestructura | Docker Compose (dev), cloud-ready (prod) |

---

**¿Listo para empezar?** Ve a la [guía de primeros pasos](/guides/getting-started) o explora la [arquitectura del proyecto](/architecture/overview).
