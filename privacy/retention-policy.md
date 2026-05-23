# Política de retención de datos

Teacher Brain aplica una política de retención documentada en [ADR 0031](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0031-data-retention-and-purge-strategy.md). Versión completa en el [monorepo](https://github.com/ivandpazd/teacher-brain/blob/main/docs/privacy/data-retention-policy.md).

## Plazos de retención

| Categoría | Plazo | Base legal |
|-----------|-------|-----------|
| Alumnado activo | Hasta baja | Interés público educativo |
| Calificaciones | 5 años | Obligación administrativa |
| Tutoría | 3 años | Protocolos de orientación |
| Datos de familias | Vinculado al alumno | Misión de interés público |
| Logs de acceso | 12 meses | Minimización |

## Borrado

- **Soft-delete**: el alumnado se marca como eliminado (`deletedAt`) y deja de aparecer en la aplicación.
- **Purga definitiva**: tras el plazo de retención, los datos se eliminan físicamente mediante script manual.

## Derechos del interesado

| Derecho | Cómo ejercerlo |
|---------|---------------|
| Acceso (art. 15) | Exportación JSON vía endpoint |
| Rectificación (art. 16) | Edición de datos del alumno |
| Supresión (art. 17) | Soft-delete + purga definitiva |
| Portabilidad (art. 20) | Exportación JSON estructurada |
