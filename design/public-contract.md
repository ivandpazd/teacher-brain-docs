# Contrato visual público

Este documento establece las reglas de diseño y copy para la experiencia pública de Teacher Brain. Versión completa en el [monorepo](https://github.com/ivandpazd/teacher-brain/blob/main/docs/design/public-visual-copy-contract.md).

## Tono de voz

| Principio | Aplicación |
|-----------|-----------|
| **Honestidad** | No prometer funcionalidades que no existen |
| **Especificidad FP** | Hablar de módulos profesionales, RA/CE, tutoría, FCT |
| **Cercanía profesional** | Tratar al visitante como profesor de FP informática |
| **Producto, no marketing** | Cada sección explica qué hace, no solo vende |
| **Claridad sobre estado** | Si algo es "local-first hoy, cloud-ready mañana", decirlo |

## Jerarquía de mensajes

Toda página pública sigue esta estructura:
1. Título principal (H1): propuesta de valor FP
2. Subtítulo (H2): qué resuelve en la práctica
3. Cuerpo: descripción, casos de uso, FAQ
4. CTA: acción clara (registro, demo, login)
5. Navegación de confianza: privacidad, seguridad, local-first

## Componentes visuales

El sitio público hereda el design system (`--tb-*`) de la app autenticada:
- Hero con título grande, badge FP, métricas
- Tarjetas de pilar (icono + título + descripción)
- Tarjetas de caso de uso (título + bullets)
- FAQ sin acordeón (legible por motores)
- Footer con enlaces de confianza

## Secciones públicas canónicas

- `/` — Landing product-led
- `/demo` — Demo de solo lectura
- `/privacy` — Privacidad
- `/security` — Seguridad
- `/local-first` — Filosofía del producto
- `/tutoria-fp` — Landing de tutoría
- `/evaluacion-ra-ce` — Landing de evaluación
- `/portal-familias` — Landing de portal familias
