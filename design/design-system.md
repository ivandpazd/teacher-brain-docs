# Design System

Teacher Brain utiliza un **sistema de tokens CSS** compartido entre la app autenticada y el sitio público.

## Tokens principales

```css
:root {
  --tb-color-primary: #059669;        /* Verde esmeralda */
  --tb-color-primary-strong: #047857;
  --tb-color-primary-soft: #d1fae5;
  --tb-color-bg: #f0fdf4;
  --tb-color-surface: #ffffff;
  --tb-color-text: #1f2937;
  --tb-color-text-muted: #6b7280;
  --tb-color-border: #e5e7eb;
  --tb-color-danger: #dc2626;
  --tb-color-warning: #d97706;
  --tb-color-link: #059669;

  --tb-radius-sm: 0.375rem;
  --tb-radius-md: 0.5rem;
  --tb-radius-lg: 0.75rem;
  --tb-radius-xl: 1rem;
  --tb-radius-full: 9999px;

  --tb-space-1: 0.25rem;
  --tb-space-2: 0.5rem;
  --tb-space-4: 1rem;
  --tb-space-6: 1.5rem;
  --tb-space-8: 2rem;

  --tb-text-xs: 0.75rem;
  --tb-text-sm: 0.875rem;
  --tb-text-base: 1rem;
  --tb-text-lg: 1.125rem;
  --tb-text-2xl: 1.5rem;
}
```

## Modo oscuro

El design system incluye variantes para `prefers-color-scheme: dark` con ajustes automáticos de todos los tokens.

## Componentes compartidos (partials SCSS)

| Partial | Clases |
|---------|--------|
| `_buttons.scss` | `.tb-btn`, `.tb-btn--primary`, `.tb-btn--outline`, `.tb-btn--ghost` |
| `_tables.scss` | `.tb-table`, `.tb-table-wrap`, `.tb-table--compact` |
| `_forms.scss` | `.tb-field`, `.tb-input`, `.tb-select`, `.tb-textarea` |
| `_badges.scss` | `.tb-badge`, `.tb-badge--success`, `.tb-badge--danger`, `.tb-chip` |
| `_cards.scss` | `.tb-card`, `.tb-card--hover`, `.tb-kpi` |
| `_layout.scss` | `.tb-page`, `.tb-page-header`, `.tb-kpi-grid`, `.tb-state` |

Todos los partials se importan desde `styles.scss` y están disponibles en ambas aplicaciones.
