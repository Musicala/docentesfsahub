# HUB Docentes FSA - Notificaciones de jornada

Este Web App envia un correo automatico cuando un docente marca su llegada en HUB Docentes FSA.

## Remitente real

El remitente real del correo sera la cuenta que despliegue y autorice el Apps Script. Para que el correo salga desde `imusicaladocente@gmail.com`, el despliegue debe hacerse iniciando sesion con esa cuenta.

El frontend no puede forzar el remitente si el Apps Script se despliega desde otra cuenta. No se deben guardar contrasenas ni credenciales de Gmail en el codigo.

## Despliegue

1. Entra a [script.google.com](https://script.google.com) con la cuenta `imusicaladocente@gmail.com`.
2. Crea un nuevo proyecto.
3. Pega el contenido de `apps-script/code.gs`.
4. Guarda el proyecto con el nombre `HUB Docentes FSA - Notificaciones`.
5. Ve a `Implementar` > `Nueva implementacion`.
6. En tipo de implementacion, elige `Aplicacion web`.
7. En `Ejecutar como`, selecciona `Yo`.
8. En `Quien tiene acceso`, selecciona `Cualquier usuario`.
9. Autoriza los permisos solicitados por Google.
10. Copia la URL del Web App.
11. Pega esa URL en la constante `SHIFT_EMAIL_WEBAPP_URL` dentro de `app.js`.
12. Revisa que `APP_TOKEN` en `code.gs` y `SHIFT_EMAIL_APP_TOKEN` en `app.js` tengan el mismo valor.
13. Prueba marcando llegada con un docente.
14. Confirma que llegue un correo a `notificaciones.musicala@gmail.com`.

## Configuracion en el frontend

En `app.js`, reemplaza:

```js
const SHIFT_EMAIL_WEBAPP_URL = 'PEGAR_AQUI_URL_DEL_WEB_APP_DE_APPS_SCRIPT';
```

por la URL del Web App copiada en Google Apps Script.

Tambien puedes cambiar el token placeholder:

```js
const SHIFT_EMAIL_APP_TOKEN = 'CAMBIAR_ESTE_TOKEN_LARGO';
```

Si cambias ese token, actualiza tambien esta linea en `apps-script/code.gs` antes de desplegar:

```js
const APP_TOKEN = 'CAMBIAR_ESTE_TOKEN_LARGO';
```

Este token es solo una proteccion basica porque el frontend es publico. No debe considerarse seguridad fuerte.

## Prueba esperada

Al marcar llegada:

- Se crea o actualiza un documento en Firestore dentro de `teacherShifts`.
- El documento queda inicialmente con `arrivalEmailStatus: "pending"` y `arrivalEmailSentAt: null`.
- Si el correo se envia correctamente, el documento se actualiza con `arrivalEmailStatus: "sent"` y `arrivalEmailSentAt`.
- Si falla el envio, el marcaje se mantiene guardado y el documento queda con `arrivalEmailStatus: "failed"` y `arrivalEmailError`.
- Si no hay internet, el marcaje se guarda en la cola local y el correo se intenta solo cuando la cola se sincroniza con Firestore.
