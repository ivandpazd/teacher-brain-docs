import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Teacher Brain Docs',
  description: 'Documentación oficial de Teacher Brain — herramienta para profesorado de FP informática',
  lang: 'es-ES',
  base: '/',
  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    logo: '/teacher-brain.png',
    siteTitle: 'Teacher Brain',
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Arquitectura', link: '/architecture/overview' },
      { text: 'Roadmap', link: '/architecture/roadmap' },
      { text: 'Guías', link: '/guides/getting-started' },
      { text: 'Privacidad', link: '/privacy/overview' },
      { text: 'API', link: '/api/overview' },
    ],
    sidebar: {
      '/architecture/': [
        { text: 'Arquitectura', items: [
          { text: 'Visión general', link: '/architecture/overview' },
          { text: 'Roadmap de MVPs', link: '/architecture/roadmap' },
          { text: 'Stack tecnológico', link: '/architecture/stack' },
          { text: 'Dominios', link: '/architecture/domains' },
          { text: 'Aplicaciones', link: '/architecture/apps' },
          { text: 'Seguridad', link: '/architecture/security' },
          { text: 'Cloud-ready', link: '/architecture/cloud-ready' },
        ]},
        { text: 'Decisiones (ADRs)', items: [
          { text: 'Índice de ADRs', link: '/architecture/adrs' },
        ]},
      ],
      '/design/': [
        { text: 'Diseño', items: [
          { text: 'Contrato visual público', link: '/design/public-contract' },
          { text: 'Design system', link: '/design/design-system' },
        ]},
      ],
      '/guides/': [
        { text: 'Guías', items: [
          { text: 'Primeros pasos', link: '/guides/getting-started' },
          { text: 'Migrar desde iDoceo', link: '/guides/migrate-idoceo' },
          { text: 'Migrar desde Additio', link: '/guides/migrate-additio' },
          { text: 'Contribuir al proyecto', link: '/guides/contributing' },
          { text: 'FAQ', link: '/guides/faq' },
        ]},
      ],
      '/privacy/': [
        { text: 'Privacidad', items: [
          { text: 'Visión general', link: '/privacy/overview' },
          { text: 'Retención de datos', link: '/privacy/retention-policy' },
          { text: 'Seguridad', link: '/architecture/security' },
        ]},
      ],
      '/api/': [
        { text: 'API', items: [
          { text: 'Visión general', link: '/api/overview' },
        ]},
      ],
    },
    footer: {
      message: 'Hecho con ❤️ para el profesorado de FP informática.',
      copyright: '© 2026 Teacher Brain'
    },
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Buscar', buttonAriaLabel: 'Buscar documentación' },
          modal: { noResultsText: 'Sin resultados', resetButtonTitle: 'Limpiar', footer: { selectText: 'Seleccionar', navigateText: 'Navegar', closeText: 'Cerrar' } }
        }
      }
    },
    editLink: {
      pattern: 'https://github.com/ivandpazd/teacher-brain-docs/edit/main/:path',
      text: 'Editar esta página en GitHub'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ivandpazd/teacher-brain' },
    ],
  },
  vite: {
    server: { port: 5173 },
  },
})
