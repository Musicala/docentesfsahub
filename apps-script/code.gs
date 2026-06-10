const NOTIFICATION_EMAIL = 'notificaciones.musicala@gmail.com';
const APP_TOKEN = 'CAMBIAR_ESTE_TOKEN_LARGO';

function doPost(e) {
  try {
    const payload = parseJsonBody_(e);
    validatePayload_(payload);

    const subject = 'Docente inicio jornada - ' + payload.teacherName;
    const body = buildEmailBody_(payload);

    MailApp.sendEmail({
      to: NOTIFICATION_EMAIL,
      subject: subject,
      body: body,
      name: 'HUB Docentes FSA'
    });

    return jsonResponse_({
      ok: true,
      message: 'Correo enviado correctamente'
    });
  } catch (error) {
    return jsonResponse_({
      ok: false,
      error: String(error && error.message ? error.message : error)
    });
  }
}

function doOptions() {
  return jsonResponse_({
    ok: true,
    message: 'CORS preflight recibido'
  });
}

function parseJsonBody_(e) {
  if (!e || !e.postData || !e.postData.contents) {
    throw new Error('No se recibio cuerpo JSON.');
  }

  try {
    return JSON.parse(e.postData.contents);
  } catch (error) {
    throw new Error('JSON invalido.');
  }
}

function validatePayload_(payload) {
  if (!payload || typeof payload !== 'object') {
    throw new Error('Payload invalido.');
  }

  if (payload.token !== APP_TOKEN) {
    throw new Error('Token invalido.');
  }

  if (payload.eventType !== 'SHIFT_STARTED') {
    throw new Error('Tipo de evento no soportado.');
  }

  const requiredFields = ['teacherName', 'teacherEmail', 'date', 'checkIn'];
  requiredFields.forEach(function(field) {
    if (!String(payload[field] || '').trim()) {
      throw new Error('Falta el campo requerido: ' + field);
    }
  });
}

function buildEmailBody_(payload) {
  const modality = String(payload.modality || 'No especificado').trim() || 'No especificado';
  const shiftId = String(payload.shiftId || 'No disponible').trim() || 'No disponible';
  const createdAt = String(payload.createdAt || new Date().toLocaleString('es-CO', {
    timeZone: 'America/Bogota'
  })).trim();

  return [
    'Hola,',
    '',
    'Se ha registrado el inicio de jornada de un docente en HUB Docentes FSA.',
    '',
    'Docente: ' + clean_(payload.teacherName),
    'Correo: ' + clean_(payload.teacherEmail),
    'Fecha: ' + clean_(payload.date),
    'Hora de llegada: ' + clean_(payload.checkIn),
    'Tipo de jornada / modalidad: ' + clean_(modality),
    'ID del registro: ' + clean_(shiftId),
    'Timestamp legible: ' + clean_(createdAt),
    '',
    'Este correo fue generado automaticamente por la app HUB Docentes FSA.',
    '',
    'Musicala'
  ].join('\n');
}

function clean_(value) {
  return String(value || '').replace(/[\r\n]+/g, ' ').trim();
}

function jsonResponse_(data) {
  // Apps Script Web App maneja CORS de forma limitada; el frontend envia text/plain para evitar preflight.
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
