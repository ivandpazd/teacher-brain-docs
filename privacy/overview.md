# Privacidad y seguridad

## Privacidad desde el diseño

Teacher Brain trata datos personales de alumnado (incluyendo menores) en un contexto educativo regulado por:

- **RGPD** (Reglamento UE 2016/679)
- **LOPDGDD** (Ley Orgánica 3/2018)

### Principios

- **Minimización**: solo se recogen los datos estrictamente necesarios para la función docente.
- **Limitación**: cada categoría de dato tiene un plazo máximo de conservación.
- **Privacidad por defecto**: los datos sensibles (tutoría) no aparecen en listados generales.
- **Portabilidad**: los datos pueden exportarse en formato JSON estructurado.

## Seguridad en 5 capas

Teacher Brain aplica una estrategia de **defensa en profundidad** ([ADR 0038](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0038-security-defense-in-depth.md)):

| Capa | Medidas |
|------|---------|
| **Perímetro** | HTTPS/TLS, CSP, HSTS, rate limiting |
| **Autenticación** | JWT httpOnly, 2FA (planificado), sesiones revocables |
| **Datos** | Cifrado en tránsito y reposo, backups cifrados |
| **Auditoría** | Logs de acceso a datos sensibles, escaneo de dependencias |
| **Respuesta** | Plan de incidentes, divulgación responsable, pentesting externo |

## Retención de datos

Consulta la [política de retención completa](/privacy/retention-policy).

## Reportar vulnerabilidades

Si descubres una vulnerabilidad de seguridad, por favor repórtala de forma responsable a través de nuestro [programa de divulgación](https://github.com/ivandpazd/teacher-brain/security).
