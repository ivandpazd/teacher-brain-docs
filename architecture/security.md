# Seguridad

Teacher Brain aplica una estrategia de **defensa en profundidad** documentada en [ADR 0038](https://github.com/ivandpazd/teacher-brain/blob/main/docs/adr/0038-security-defense-in-depth.md).

## Capas de seguridad

### Perímetro
- HTTPS/TLS en producción
- CSP configurada vía Helmet
- Rate limiting por endpoint (Redis)
- Cabeceras HSTS, Permissions-Policy (planificado)

### Autenticación
- JWT con access token (15 min) y refresh token (7 días)
- Cookies httpOnly, secure, SameSite strict
- Two-factor authentication (TOTP) planificado
- Dashboard de sesiones activas con revocación (planificado)

### Autorización
- Aislamiento por workspace en todas las queries
- Verificación de asignación docente para acceder a grupos/módulos
- Tutoría: solo el tutor del grupo puede ver sesiones sensibles
- Portal alumno: token de solo lectura con caducidad

### Datos
- Cifrado en tránsito: HTTPS
- Cifrado en reposo: planificado (ADR 0038)
- Backups cifrados con verificación de integridad (planificado)
- Soft-delete con política de retención documentada (ADR 0031)

### Auditoría
- Logs de acceso a datos sensibles (planificado)
- Escaneo de dependencias en CI (planificado)
- Penetration testing externo (planificado)

## Protecciones específicas

### Portal del alumno
- Token UUIDv4 con hash SHA256 + salt
- Errores unificados (sin diferenciar token inválido de expirado)
- Delay constante para prevenir timing attacks
- Rate limiting específico

### Tutoría
- 4 niveles de sensibilidad: normal, privada, sensible, restringida
- Las sesiones RESTRICTED y SENSITIVE no aparecen en listados
- Acceso solo por ID directo con verificación de tutor

### Exportación de datos (GDPR art. 20)
- Verificación de asignación docente antes de exportar
- Datos de terceros excluidos de la exportación
