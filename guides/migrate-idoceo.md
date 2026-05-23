# Migrar desde iDoceo

iDoceo es un gradebook offline para iOS/Mac. Si vienes de iDoceo, esto es lo que necesitas saber para migrar a Teacher Brain.

## ¿Qué ganas?

| Característica | iDoceo | Teacher Brain |
|---------------|--------|---------------|
| Plataforma | Solo iOS/Mac | Cualquier navegador |
| Multiusuario | No (un dispositivo) | Sí (workspace) |
| Trazabilidad RA/CE | No | Sí |
| Tutoría con privacidad | No | Sí (4 niveles) |
| FCT/FFE | No | Sí |
| Portal familias | iDoceo Connect (limitado) | Token de solo lectura |
| Analytics y riesgo | No | Dashboard completo |
| Offline | Sí | PWA offline-first (planificado) |

## Cómo migrar tus datos

1. **Exporta desde iDoceo**: Ve a la clase → Exportar → XLS o CSV.
2. **Crea tu cuenta** en Teacher Brain.
3. **Completa el onboarding**: workspace, curso, grupo.
4. **Importa tu alumnado**: en el grupo → Importar → selecciona el CSV de iDoceo.
5. **Recrea tu estructura**: crea módulos, RAs, CEs y actividades. El Magic BOE Import (planificado) automatizará esto en el futuro.

## Limitaciones actuales

- La migración de notas históricas no es automática. Las notas de iDoceo pueden archivarse como referencia, pero Teacher Brain está optimizado para empezar un curso nuevo.
- Los seating plans de iDoceo no tienen equivalente directo (plano de aula planificado en MVP16).
