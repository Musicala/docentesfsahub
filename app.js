'use strict';

const BUILD = '2026-05-25.1';
const SW_RELOAD_KEY = `docentes_fsa_sw_reloaded_${BUILD}`;

const firebaseConfig = {
  apiKey: 'AIzaSyCO8QV3OTNLFmaeVjJ7tDDL9vbiEoiIsLk',
  authDomain: 'db-musicala-fsa.firebaseapp.com',
  projectId: 'db-musicala-fsa',
  storageBucket: 'db-musicala-fsa.firebasestorage.app',
  messagingSenderId: '611214393967',
  appId: '1:611214393967:web:6b0eca59b0ced50c78839a'
};

const HUB = {
  name: 'Docentes Musicala x FSA',
  subtitle: 'Centro de trabajo docente',
  areas: {
    musica: { label: 'Musica' },
    danzas: { label: 'Danzas' },
    porras: { label: 'Porras' }
  },
  generalLinks: {
    nomina: 'https://docs.google.com/forms/d/e/1FAIpQLSeMOhoY9d8JOf1Oq8DnD_aSEDkBmOXmzYJtlCCU-7CNVYjnLA/viewform',
    observacion: 'https://docs.google.com/forms/d/1z8TEQACP6L8d0vTWEpSl2RQJ198PwQwzH4-UKqq9EQA/viewform?edit_requested=true',
    induccion: 'https://musicalaescuela.github.io/inducciondocentesmusicala/',
    infoEstudiantes: '',
    jornada: '__SHIFT__',
    muestras: 'https://musicalaescuela.github.io/muestrasdeproceso/#musica',
    guiones: 'https://musicalaescuela.github.io/plantillaparaguiones/',
    protocolosMusica: 'https://musicalaescuela.github.io/protocolosmusica/',
    vacaciones: 'https://musicalaescuela.github.io/vacacionesartisticas/',
    explicacionArtes: 'https://musicala.github.io/explicacionartes/',
    edades: 'https://musicala.github.io/musiedades/',
    reglamento: 'https://drive.google.com/file/d/1Oda0c_FnHrsgME2GE8LCb7z5huH-YbBk/view',
    musicalaFest: 'https://musicalaescuela.github.io/programamusicalafest2025/',
    calendario: 'https://musicala.github.io/calendariomusicala/',
    apuntes: '',
    bitacoraAcademica: '',
    documentosContratacion: '',
    horarioAnual: '',
    galeriaEvidencias: '',
    puntualidadEquipo: '',
    bitacoraClases: ''
  },
  users: {
    'alekcaballeromusic@gmail.com': {
      label: 'Alek Caballero',
      carnet: './assets/alekcaballero.png',
      areaIds: ['musica', 'danzas', 'porras']
    },
    'catalina.medina.leal@gmail.com': {
      label: 'Catalina Medina',
      carnet: './assets/catalinamedina.png',
      areaIds: ['musica', 'danzas', 'porras']
    },
    'eryck1214@gmail.com': {
      label: 'Eryck Martinez',
      carnet: '',
      areaIds: ['danzas']
    },
    'natymoreno10@gmail.com': {
      label: 'Natalia Moreno',
      carnet: '',
      areaIds: ['porras']
    }
  },
  pendingUsers: [],
  buttons: [
    { id: 'carnet', icon: '🪪', title: 'Carnet docente', subtitle: 'Credencial personal', section: 'Operacion diaria' },
    { id: 'jornada', icon: '⏱️', title: 'Registro de jornada', subtitle: 'Marca tu entrada', section: 'Operacion diaria' },
    { id: 'infoEstudiantes', icon: '🧒', title: 'Info estudiantes', subtitle: 'Base por area', section: 'Operacion diaria' },
    { id: 'horarioAnual', icon: '📅', title: 'Horario anual 2026', subtitle: 'General o personal', section: 'Operacion diaria' },
    { id: 'puntualidadEquipo', icon: '⏱', title: 'Puntualidad equipo', subtitle: 'Lectura de marcajes', section: 'Operacion diaria' },
    { id: 'observacion', icon: '👀', title: 'Formulario observacion docente', subtitle: 'Registro externo', section: 'Gestion docente' },
    { id: 'asistencia', icon: '📝', title: 'Asistencia', subtitle: 'Formulario interno', section: 'Gestion docente' },
    { id: 'bitacoraClases', icon: '📒', title: 'Bitacora de clases', subtitle: 'Ver, agregar o editar', section: 'Gestion docente' },
    { id: 'diagnosticos', icon: '🧭', title: 'Diagnosticos', subtitle: 'Inicio de grupo o proceso', section: 'Gestion docente' },
    { id: 'proyectos', icon: '🗂️', title: 'Proyectos semestrales', subtitle: 'Planeacion por semestre', section: 'Gestion docente' },
    { id: 'muestrasProceso', icon: '🎥', title: 'Muestras de proceso', subtitle: 'Evidencia fotografica y video', section: 'Gestion docente' },
    { id: 'registrosDocentes', icon: '📚', title: 'Todos los registros', subtitle: 'Vista general y filtros', section: 'Gestion docente' },
    { id: 'informesMensuales', icon: '📆', title: 'Informes mensuales', subtitle: 'Entrega mensual del proceso', section: 'Gestion docente' },
    { id: 'galeriaEvidencias', icon: '🖼️', title: 'Galeria de evidencias', subtitle: 'Fotos compartidas', section: 'Gestion docente' },
    { id: 'bitacoraAcademica', icon: '✅', title: 'Bitacora tareas academicas', subtitle: 'Pendiente', section: 'Gestion docente' },
    { id: 'induccion', icon: '🎓', title: 'Induccion Docentes Musicala', subtitle: 'Onboarding', section: 'Recursos' },
    { id: 'protocolosMusica', icon: '🎵', title: 'Protocolos clases de musica', subtitle: 'Guia', section: 'Recursos' },
    { id: 'muestras', icon: '🎭', title: 'Info muestras de proceso', subtitle: 'Planeacion', section: 'Recursos' },
    { id: 'guiones', icon: '🎬', title: 'Plantilla guiones de video', subtitle: 'Contenido', section: 'Recursos' },
    { id: 'explicacionArtes', icon: '🧩', title: 'Explicacion de las artes', subtitle: 'Oferta', section: 'Recursos' },
    { id: 'edades', icon: '📏', title: 'Rangos de edades', subtitle: 'Guia rapida', section: 'Recursos' },
    { id: 'centrosredes', icon: '🗺️', title: 'Centros Redes', subtitle: 'Guia rapida', section: 'Recursos' },
    { id: 'nomina', icon: '💰', title: 'Novedades nomina', subtitle: 'General', section: 'Institucional' },
    { id: 'calendario', icon: '🗓️', title: 'Calendario academico', subtitle: 'General', section: 'Institucional' },
    { id: 'reglamento', icon: '📜', title: 'Reglamento interno de trabajo', subtitle: 'Documento', section: 'Institucional' },
    { id: 'documentosContratacion', icon: '📁', title: 'Documentos de contratacion', subtitle: 'Carpeta', section: 'Institucional' }
  ]
};

const COLLECTIONS = {
  teacherProfiles: 'teacherProfiles',
  teacherShifts: 'teacherShifts',
  students: 'students',
  attendance: 'attendanceSessions',
  classLogs: 'classLogs',
  diagnostics: 'diagnosticos',
  projects: 'proyectos',
  processSamples: 'muestrasProceso',
  monthlyReports: 'informesMensuales',
  calendarEvents: 'calendarEvents',
  schedules: 'leaderSchedules',
  galleryImages: 'galleryImages'
};

const SHIFT = {
  COLLECTION: COLLECTIONS.teacherShifts,
  TIMEZONE: 'America/Bogota',
  LOOKBACK_DAYS: 30,
  QUEUE_KEY: 'docentes_fsa_shift_queue_v1'
};

// URL del Web App de Google Apps Script para notificar inicios de jornada.
// Debe desplegarse y autorizarse desde imusicaladocente@gmail.com para que ese sea el remitente real.
const SHIFT_EMAIL_WEBAPP_URL = 'https://script.google.com/macros/s/AKfycbwW217m9SSl3vNrR_19_61-goCGt59GDkYyfi6ZdndZBuFIqVL6v_W1u5DLFTb-EL9tQQ/exec';
// Proteccion basica: este token vive en el frontend publico, no reemplaza reglas ni seguridad fuerte.
const SHIFT_EMAIL_APP_TOKEN = 'docentesfsa';

const INTERNAL_BUTTONS = new Set([
  'carnet',
  'jornada',
  'infoEstudiantes',
  'asistencia',
  'bitacoraClases'
]);
const CORE_BUTTON_IDS = ['jornada', 'calendario', 'horarioAnual', 'infoEstudiantes', 'asistencia', 'bitacoraClases'];
const MODAL_IDS = ['modal-search', 'modal-favorites', 'modal-workspace'];
const ATTENDANCE_STATUSES = [
  { value: 'presente', label: 'Asistio' },
  { value: 'ausente', label: 'Ausente' },
  { value: 'tarde', label: 'Tarde' },
  { value: 'excusado', label: 'Excusado' }
];

import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  getRedirectResult,
  onAuthStateChanged,
  signOut,
  setPersistence,
  browserLocalPersistence
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js';

import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocFromServer,
  getDocs,
  setDoc,
  addDoc,
  updateDoc,
  deleteDoc,
  query,
  where,
  serverTimestamp
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js';
import {
  getStorage,
  ref as storageRef,
  uploadBytes,
  getDownloadURL
} from 'https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js';

const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

let DB = null;
let AUTH = null;
let STORAGE = null;
let CURRENT_USER = null;
let ACTIVE_LINKS = {};
let ACTIVE_PROFILE = null;
let ACTIVE_EMAIL = '';
const LOG_PHOTO_LIMIT = 8;
const LOG_PHOTO_MAX_BYTES = 8 * 1024 * 1024;
const RECORD_PHOTO_LIMIT = 8;
const RECORD_PHOTO_MAX_BYTES = 8 * 1024 * 1024;
const RECORD_MEDIA_MAX_BYTES = 50 * 1024 * 1024;
const MONTHLY_REMINDER_DISMISS_PREFIX = 'docentes_fsa_monthly_reminder_dismissed_';

const TEACHER_RECORD_TYPES = {
  diagnosticos: {
    collection: COLLECTIONS.diagnostics,
    module: 'teacherRecords',
    type: 'diagnostico',
    label: 'Diagnostico',
    plural: 'Diagnosticos',
    dateField: 'date',
    fields: [
      { name: 'date', label: 'Fecha', type: 'date', required: true },
      { name: 'centerGroupProcess', label: 'Centro / grupo / proceso', required: true },
      { name: 'studentsOrGroup', label: 'Estudiante(s) o grupo', required: true },
      { name: 'areaId', label: 'Area artistica', type: 'area', required: true },
      { name: 'diagnosticObservations', label: 'Observaciones diagnosticas', type: 'textarea', required: true },
      { name: 'strengths', label: 'Fortalezas identificadas', type: 'textarea' },
      { name: 'improvementAreas', label: 'Aspectos por fortalecer', type: 'textarea' },
      { name: 'recommendations', label: 'Recomendaciones', type: 'textarea' }
    ]
  },
  proyectos: {
    collection: COLLECTIONS.projects,
    module: 'teacherRecords',
    type: 'proyecto',
    label: 'Proyecto',
    plural: 'Proyectos',
    dateField: 'date',
    fields: [
      { name: 'date', label: 'Fecha', type: 'date', required: true },
      { name: 'centerGroupProcess', label: 'Centro / grupo / proceso', required: true },
      { name: 'projectName', label: 'Nombre del proyecto', required: true },
      { name: 'areaId', label: 'Area artistica', type: 'area', required: true },
      { name: 'projectObjective', label: 'Objetivo del proyecto', type: 'textarea', required: true },
      { name: 'description', label: 'Descripcion', type: 'textarea' },
      { name: 'progress', label: 'Avances', type: 'textarea' },
      { name: 'nextSteps', label: 'Proximos pasos', type: 'textarea' }
    ]
  },
  muestrasProceso: {
    collection: COLLECTIONS.processSamples,
    module: 'teacherRecords',
    type: 'muestraProceso',
    label: 'Muestra de proceso',
    plural: 'Muestras de proceso',
    dateField: 'date',
    evidenceLabel: 'Evidencia fotografica y videos',
    evidenceAccept: 'image/*,video/*',
    evidenceRequired: true,
    evidenceHint: 'Carga fotos o videos del resultado del proyecto. Maximo 50MB por archivo.',
    fields: [
      { name: 'date', label: 'Fecha', type: 'date', required: true },
      { name: 'centerGroupProcess', label: 'Centro / grupo / proceso', required: true },
      { name: 'areaId', label: 'Area artistica', type: 'area', required: true },
      { name: 'sampleDescription', label: 'Descripcion de la muestra', type: 'textarea', required: true },
      { name: 'observedProgress', label: 'Avances observados', type: 'textarea' },
      { name: 'participants', label: 'Participantes', type: 'textarea' },
      { name: 'pedagogicalObservations', label: 'Observaciones pedagogicas', type: 'textarea' }
    ]
  },
  informesMensuales: {
    collection: COLLECTIONS.monthlyReports,
    module: 'monthlyReports',
    type: 'informeMensual',
    label: 'Informe mensual',
    plural: 'Informes mensuales',
    dateField: 'month',
    fields: [
      { name: 'month', label: 'Mes del informe', type: 'month', required: true },
      { name: 'date', label: 'Fecha de diligenciamiento', type: 'date', required: true },
      { name: 'centerGroupProcess', label: 'Centro / grupo / proceso', required: true },
      { name: 'areaId', label: 'Area artistica', type: 'area', required: true },
      { name: 'monthlySummary', label: 'Resumen del proceso del mes', type: 'textarea', required: true },
      { name: 'mainAchievements', label: 'Logros principales', type: 'textarea' },
      { name: 'difficulties', label: 'Dificultades encontradas', type: 'textarea' },
      { name: 'relevantStudents', label: 'Estudiantes destacados o situaciones relevantes', type: 'textarea' },
      { name: 'nextMonthRecommendations', label: 'Recomendaciones para el siguiente mes', type: 'textarea' },
      { name: 'needsOrAlerts', label: 'Necesidades o alertas', type: 'textarea' }
    ]
  }
};

const SHIFT_STATE = {
  loading: false,
  busy: false,
  loaded: false,
  docId: '',
  date: '',
  data: null,
  pending: null,
  queuedCount: 0,
  syncBusy: false
};

const DATA_STATE = {
  teacherProfile: null,
  students: [],
  studentsLoaded: false,
  attendance: [],
  attendanceLoaded: false,
  logs: [],
  logsLoaded: false,
  teacherRecords: {
    diagnosticos: [],
    proyectos: [],
    muestrasProceso: [],
    informesMensuales: []
  },
  teacherRecordsLoaded: {
    diagnosticos: false,
    proyectos: false,
    muestrasProceso: false,
    informesMensuales: false
  },
  calendar: [],
  calendarLoaded: false,
  schedules: [],
  schedulesLoaded: false,
  punctuality: [],
  punctualityLoaded: false,
  gallery: [],
  galleryLoaded: false,
  recentIds: []
};

const MODULE_STATE = {
  current: '',
  students: {
    filterArea: 'all',
    editingId: ''
  },
  attendance: {
    areaId: '',
    editingId: ''
  },
  logs: {
    areaId: '',
    editingId: '',
    showGallery: false,
    galleryAreaId: 'all'
  },
  teacherRecords: {
    activeType: 'diagnosticos',
    editingId: '',
    filters: {
      month: '',
      teacher: '',
      center: '',
      type: 'all',
      areaId: 'all'
    }
  },
  monthlyReports: {
    editingId: '',
    areaId: '',
    filters: {
      month: getBogotaDateParts().date.slice(0, 7),
      teacher: '',
      center: '',
      areaId: 'all'
    }
  },
  calendar: {
    year: String(new Date().getFullYear()),
    month: String(new Date().getMonth() + 1)
  }
};

const NAV_STATE = {
  active: 'home'
};

let toastTimer = null;
let drawerBound = false;
let searchBound = false;
let modalShellBound = false;
let workspaceBound = false;
let carnetModal = null;
let deferredInstallPrompt = null;
let loginInFlight = false;

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function lsGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}

function lsSet(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (_) {}
}

function emailKey(user) {
  return String(user?.email || '').trim().toLowerCase();
}

function getTeacherDisplayName(user = CURRENT_USER, profile = ACTIVE_PROFILE) {
  return String(profile?.label || user?.displayName || user?.email || 'Docente').trim();
}

function profileCanUseAllAreas(profile = ACTIVE_PROFILE) {
  const roles = Array.isArray(profile?.roles) ? profile.roles : [];
  return profile?.role === 'admin'
    || profile?.role === 'lider'
    || roles.includes('admin')
    || roles.includes('lider');
}

function normalizeTeacherProfile(raw = {}, user = CURRENT_USER) {
  const email = String(raw.email || user?.email || '').trim().toLowerCase();
  const rawAreaIds = Array.isArray(raw.areaIds)
    ? raw.areaIds
    : (Array.isArray(raw.areas) ? raw.areas : [raw.areaId || raw.area || raw.primaryAreaId].filter(Boolean));
  const areaIds = rawAreaIds.map((areaId) => String(areaId || '').trim()).filter((areaId) => HUB.areas?.[areaId]);
  const roles = Array.isArray(raw.roles)
    ? raw.roles.map((role) => String(role || '').trim().toLowerCase()).filter(Boolean)
    : [];
  const role = String(raw.role || '').trim().toLowerCase();

  if (role && !roles.includes(role)) roles.push(role);

  return {
    ...raw,
    email,
    label: String(raw.label || raw.name || user?.displayName || user?.email || 'Docente').trim(),
    carnet: String(raw.carnet || raw.cardUrl || '').trim(),
    areaIds,
    roles,
    role,
    active: raw.active !== false
  };
}

function getBogotaDateParts(date = new Date()) {
  const formatter = new Intl.DateTimeFormat('en-CA', {
    timeZone: SHIFT.TIMEZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit'
  });

  const parts = formatter.formatToParts(date);
  const year = parts.find((part) => part.type === 'year')?.value || '0000';
  const month = parts.find((part) => part.type === 'month')?.value || '01';
  const day = parts.find((part) => part.type === 'day')?.value || '01';

  return {
    year,
    month,
    day,
    date: `${year}-${month}-${day}`
  };
}

function getBogotaDateDaysAgo(daysAgo = 0) {
  return getBogotaDateParts(new Date(Date.now() - daysAgo * 86400000)).date;
}

function getCurrentMonthKey() {
  return getBogotaDateParts().date.slice(0, 7);
}

function getCurrentBogotaDayNumber() {
  return Number(getBogotaDateParts().day || 0) || 0;
}

function formatDateLabel(dateStr) {
  if (!dateStr) return '-';

  try {
    return new Intl.DateTimeFormat('es-CO', {
      timeZone: SHIFT.TIMEZONE,
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(new Date(`${dateStr}T12:00:00-05:00`));
  } catch (_) {
    return dateStr;
  }
}

function formatHourFromIso(iso) {
  if (!iso) return '';

  try {
    return new Intl.DateTimeFormat('es-CO', {
      timeZone: SHIFT.TIMEZONE,
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date(iso));
  } catch (_) {
    return '';
  }
}

function formatDateTimeFromIso(iso) {
  if (!iso) return '-';

  try {
    return new Intl.DateTimeFormat('es-CO', {
      timeZone: SHIFT.TIMEZONE,
      day: 'numeric',
      month: 'short',
      hour: 'numeric',
      minute: '2-digit'
    }).format(new Date(iso));
  } catch (_) {
    return '-';
  }
}

function getBogotaLocalInputValueFromIso(iso) {
  if (!iso) return '';

  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: SHIFT.TIMEZONE,
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      hourCycle: 'h23'
    });

    const parts = formatter.formatToParts(new Date(iso));
    const year = parts.find((part) => part.type === 'year')?.value || '0000';
    const month = parts.find((part) => part.type === 'month')?.value || '01';
    const day = parts.find((part) => part.type === 'day')?.value || '01';
    const hour = parts.find((part) => part.type === 'hour')?.value || '00';
    const minute = parts.find((part) => part.type === 'minute')?.value || '00';
    return `${year}-${month}-${day}T${hour}:${minute}`;
  } catch (_) {
    return '';
  }
}

function getCurrentBogotaDateTimeInputValue() {
  return getBogotaLocalInputValueFromIso(new Date().toISOString());
}

function bogotaLocalInputToIso(value) {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}$/.test(String(value || ''))) return '';

  try {
    return new Date(`${value}:00-05:00`).toISOString();
  } catch (_) {
    return '';
  }
}

function readFormValue(formData, name) {
  return String(formData.get(name) || '').trim();
}

function sortByName(items, field = 'fullName') {
  return [...items].sort((a, b) =>
    String(a?.[field] || a?.label || '').localeCompare(String(b?.[field] || b?.label || ''), 'es', {
      sensitivity: 'base'
    })
  );
}

function sortByDateDesc(items) {
  return [...items].sort((a, b) => {
    const aDate = String(a?.date || '');
    const bDate = String(b?.date || '');
    if (aDate !== bDate) return aDate < bDate ? 1 : -1;
    return Number(b?.updatedAtClient || 0) - Number(a?.updatedAtClient || 0);
  });
}

function getAreaLabel(areaId) {
  return HUB.areas?.[areaId]?.label || areaId || 'Area';
}

function getAllowedAreaIds(profile = ACTIVE_PROFILE) {
  if (profileCanUseAllAreas(profile)) return Object.keys(HUB.areas || {});

  const defined = Array.isArray(profile?.areaIds) ? profile.areaIds : [];
  const valid = defined.filter((areaId) => HUB.areas?.[areaId]);
  if (valid.length) return valid;

  if (profile || hasUserRestrictions()) return [];

  const fallback = Object.keys(HUB.areas || {});
  return fallback.length ? [fallback[0]] : [];
}

function userCanAccessArea(areaId) {
  return getAllowedAreaIds().includes(areaId);
}

function getPrimaryAreaId() {
  return getAllowedAreaIds()[0] || '';
}

function renderAreaOptions(options = {}) {
  const { includeAll = false, selected = '' } = options;
  const allowedAreaIds = getAllowedAreaIds();
  const parts = [];

  if (includeAll && allowedAreaIds.length > 1) {
    parts.push(`<option value="all"${selected === 'all' ? ' selected' : ''}>Todas mis areas</option>`);
  }

  for (const areaId of allowedAreaIds) {
    parts.push(
      `<option value="${escapeHtml(areaId)}"${selected === areaId ? ' selected' : ''}>${escapeHtml(getAreaLabel(areaId))}</option>`
    );
  }

  return parts.join('');
}

function normalizeStudentsFilter(filterValue) {
  const allowed = getAllowedAreaIds();
  if (!allowed.length) return 'all';
  if (filterValue === 'all' && allowed.length > 1) return 'all';
  if (allowed.includes(filterValue)) return filterValue;
  return allowed.length > 1 ? 'all' : allowed[0];
}

function recentStoreKey(email) {
  return `musicala_docenteshub_recent_${String(email || '').toLowerCase()}`;
}

function sectionStoreKey(email) {
  return `musicala_docenteshub_sections_${String(email || '').toLowerCase()}`;
}

function getRecentIds(email = ACTIVE_EMAIL) {
  return lsGet(recentStoreKey(email), []) || [];
}

function pushRecentId(id) {
  if (!ACTIVE_EMAIL || !id) return;
  const next = [id, ...getRecentIds().filter((item) => item !== id)].slice(0, 8);
  lsSet(recentStoreKey(ACTIVE_EMAIL), next);
  DATA_STATE.recentIds = next;
}

function getSectionPrefs(email) {
  return lsGet(sectionStoreKey(email), { collapsed: {} }) || { collapsed: {} };
}

function setSectionCollapsed(email, sectionName, collapsed) {
  const prefs = getSectionPrefs(email);
  prefs.collapsed = prefs.collapsed || {};
  prefs.collapsed[String(sectionName)] = !!collapsed;
  lsSet(sectionStoreKey(email), prefs);
}

function getAllButtons() {
  return HUB.buttons || [];
}

function findButtonById(id) {
  return getAllButtons().find((button) => button.id === id) || null;
}

function renderEmptyState(title, text) {
  return `
    <div class="emptyState">
      <strong>${escapeHtml(title)}</strong>
      <p>${escapeHtml(text)}</p>
    </div>
  `;
}

function pickToastEl() {
  const appToast = $('#toast-app');
  const loginToast = $('#toast');
  if (appToast && !appToast.hidden) return appToast;
  return loginToast || appToast || null;
}

function toast(message, options = {}) {
  const el = pickToastEl();
  if (!el) return;

  const { actionText = '', onAction = null, sticky = false, ms = 2600 } = options;

  el.classList.remove('show');
  el.hidden = false;
  el.innerHTML = '';

  const msg = document.createElement('span');
  msg.className = 'toastMsg';
  msg.textContent = String(message || '');
  el.appendChild(msg);

  if (actionText) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'toastBtn';
    btn.textContent = actionText;
    btn.addEventListener('click', () => {
      try {
        onAction && onAction();
      } finally {
        el.classList.remove('show');
      }
    });
    el.appendChild(btn);
  }

  requestAnimationFrame(() => el.classList.add('show'));

  clearTimeout(toastTimer);
  if (!sticky) {
    toastTimer = setTimeout(() => {
      el.classList.remove('show');
      if (el.id === 'toast-app') el.hidden = true;
    }, Math.max(1200, Number(ms) || 2600));
  }
}

function show(which) {
  const loginView = $('#view-login');
  const appView = $('#view-app');
  if (!loginView || !appView) return;

  if (which === 'login') {
    loginView.hidden = false;
    appView.hidden = true;
    const appToast = $('#toast-app');
    if (appToast) appToast.hidden = true;
  } else {
    loginView.hidden = true;
    appView.hidden = false;
  }
}

function normalizeUrl(raw) {
  const url = String(raw || '').trim();
  if (!url) return '';
  if (/^\s*javascript:/i.test(url)) return '';
  if (/^\s*data:/i.test(url)) return '';
  if (/^\s*file:/i.test(url)) return '';

  if (/^(https?:)?\/\//i.test(url)) return url;
  if (/^(\.?\/|\/)/.test(url)) return url;

  return `https://${url}`;
}

function openExternal(rawUrl) {
  const safe = normalizeUrl(rawUrl);
  if (!safe) return false;

  if (/^(\.?\/|\/)/.test(safe)) {
    window.location.href = safe;
    return true;
  }

  window.open(safe, '_blank', 'noopener,noreferrer');
  return true;
}

function anyModalOpen() {
  return MODAL_IDS.some((id) => {
    const el = document.getElementById(id);
    return !!el && !el.hidden;
  });
}

function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.hidden = false;
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    const focusTarget = el.querySelector('input, textarea, select, button');
    focusTarget?.focus?.();
  }, 0);
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;

  el.hidden = true;
  if (id === 'modal-workspace') {
    setBottomNavActive('home');
  }
  if (!isDrawerOpen() && !anyModalOpen()) {
    document.body.style.overflow = '';
  }
}

function closeAllModals() {
  for (const id of MODAL_IDS) {
    const el = document.getElementById(id);
    if (el) el.hidden = true;
  }

  setBottomNavActive('home');

  if (!isDrawerOpen()) {
    document.body.style.overflow = '';
  }
}

function getScrollHost() {
  return document.querySelector('.screen') || document.scrollingElement || document.documentElement;
}

function scrollToTop() {
  const host = getScrollHost();
  host?.scrollTo?.({ top: 0, behavior: 'smooth' });
}

function setBottomNavActive(tab) {
  NAV_STATE.active = tab || 'home';
  $$('.dockTab').forEach((button) => {
    const isActive = button.getAttribute('data-tab') === NAV_STATE.active;
    button.classList.toggle('is-active', isActive);
    button.setAttribute('aria-current', isActive ? 'page' : 'false');
  });
}

function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent || '');
}

function isStandalone() {
  if (window.navigator.standalone) return true;
  return window.matchMedia && window.matchMedia('(display-mode: standalone)').matches;
}

function setInstallUI(visible) {
  const buttons = ['btn-install', 'btn-install-2', 'btn-drawer-install'];
  for (const id of buttons) {
    const btn = document.getElementById(id);
    if (btn) btn.hidden = !visible;
  }
}

async function trySkipWaiting() {
  try {
    const registration = await navigator.serviceWorker.getRegistration('./');
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
      return true;
    }
  } catch (_) {}

  return false;
}

function sortRecordsDesc(items) {
  return [...items].sort((a, b) => {
    const aDate = String(a?.month || a?.date || '');
    const bDate = String(b?.month || b?.date || '');
    if (aDate !== bDate) return aDate < bDate ? 1 : -1;
    return Number(b?.updatedAtClient || b?.createdAtClient || 0) - Number(a?.updatedAtClient || a?.createdAtClient || 0);
  });
}

async function clearAppCaches() {
  if (!('caches' in window)) return;
  try {
    const keys = await caches.keys();
    await Promise.allSettled(
      keys
        .filter((key) => /^(musicala-|fm-|ferma-|hub-)/i.test(key))
        .map((key) => caches.delete(key))
    );
  } catch (error) {
    console.warn('No se pudo limpiar CacheStorage:', error);
  }
}

async function updateAppNow() {
  toast('Actualizando app...');

  try {
    const registration = await navigator.serviceWorker?.getRegistration?.('./');
    if (registration?.active) {
      registration.active.postMessage({ type: 'CLEAR_CACHES' });
    }
    if (registration?.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
    await clearAppCaches();
    await registration?.update?.();
  } catch (error) {
    console.warn('No se pudo forzar la actualizacion del service worker:', error);
  }

  const url = new URL(window.location.href);
  url.searchParams.set('refresh', String(Date.now()));
  window.location.replace(url.toString());
}

function wireUpdateBanner() {
  const wrap = document.getElementById('pwa-update');
  const btn = document.getElementById('btn-update');
  if (!wrap || !btn) return;

  btn.addEventListener('click', updateAppNow);

  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('message', (event) => {
      if (event?.data?.type === 'SW_ACTIVATED') wrap.hidden = true;
    });
  }
}

async function registerServiceWorker() {
  if (!('serviceWorker' in navigator)) return;

  // iOS puede mantener una PWA abierta con un service worker viejo; por eso
  // el registro usa URL versionada, evita caches del navegador y fuerza update al abrir.
  const promptUpdate = (registration) => {
    if (!registration?.waiting) return;

    const wrap = document.getElementById('pwa-update');
    if (wrap) wrap.hidden = false;

    toast('Hay una actualizacion lista.', {
      actionText: 'Actualizar',
      sticky: true,
      onAction: () => {
        try {
          registration.waiting.postMessage({ type: 'SKIP_WAITING' });
        } catch (_) {
          toast('No se pudo activar la actualizacion.');
        }
      }
    });
  };

  try {
    const registration = await navigator.serviceWorker.register(`./sw.js?v=${encodeURIComponent(BUILD)}`, {
      scope: './',
      updateViaCache: 'none'
    });

    promptUpdate(registration);

    registration.addEventListener('updatefound', () => {
      const worker = registration.installing;
      if (!worker) return;

      worker.addEventListener('statechange', () => {
        if (worker.state === 'installed' && navigator.serviceWorker.controller) {
          try {
            worker.postMessage({ type: 'SKIP_WAITING' });
          } catch (_) {}
          promptUpdate(registration);
        }
      });
    });

    navigator.serviceWorker.addEventListener('controllerchange', () => {
      if (window.__reloadingForSW) return;
      window.__reloadingForSW = true;
      if (sessionStorage.getItem(SW_RELOAD_KEY) === '1') return;
      sessionStorage.setItem(SW_RELOAD_KEY, '1');
      window.location.reload();
    });

    if (registration.waiting) registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    registration.update?.().catch(() => null);
  } catch (error) {
    console.warn('No se pudo registrar el service worker:', error);
  }
}

function setupInstallPrompt() {
  if (isStandalone()) {
    setInstallUI(false);
    return;
  }

  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    setInstallUI(true);
  });

  window.addEventListener('appinstalled', () => {
    deferredInstallPrompt = null;
    setInstallUI(false);
    toast('La app se instalo correctamente.');
  });

  const install = async () => {
    if (isIOS() && !deferredInstallPrompt) {
      toast('En iPhone o iPad usa Compartir y luego Agregar a pantalla de inicio.');
      return;
    }

    if (!deferredInstallPrompt) {
      toast('La instalacion aun no esta disponible.');
      return;
    }

    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice.catch(() => null);
    deferredInstallPrompt = null;

    if (!choice || choice.outcome !== 'accepted') {
      setInstallUI(false);
      setTimeout(() => setInstallUI(true), 8000);
      return;
    }
  };

  document.getElementById('btn-install')?.addEventListener('click', install);
  document.getElementById('btn-install-2')?.addEventListener('click', install);
  document.getElementById('btn-drawer-install')?.addEventListener('click', install);
}

function drawerEls() {
  return {
    btnMenu: document.getElementById('btn-menu'),
    overlay: document.getElementById('drawer-overlay'),
    drawer: document.getElementById('app-drawer'),
    btnClose: document.getElementById('drawer-close'),
    userName: document.getElementById('drawer-user-name'),
    userEmail: document.getElementById('drawer-user-email'),
    buildTag: document.getElementById('drawer-build')
  };
}

function isDrawerOpen() {
  const { overlay, drawer } = drawerEls();
  if (!overlay || !drawer) return false;
  return !overlay.hidden && !drawer.hidden;
}

function openDrawer() {
  const { overlay, drawer, btnClose } = drawerEls();
  if (!overlay || !drawer) return;

  overlay.hidden = false;
  drawer.hidden = false;
  document.body.style.overflow = 'hidden';
  setTimeout(() => (btnClose || drawer).focus?.(), 0);
}

function closeDrawer() {
  const { overlay, drawer, btnMenu } = drawerEls();
  if (!overlay || !drawer) return;

  overlay.hidden = true;
  drawer.hidden = true;

  if (!anyModalOpen()) {
    document.body.style.overflow = '';
  }

  setTimeout(() => btnMenu?.focus?.(), 0);
}

function toggleDrawer() {
  if (isDrawerOpen()) closeDrawer();
  else openDrawer();
}

function setDrawerProfile(profile, user) {
  const { userName, userEmail, buildTag } = drawerEls();
  const areas = getAllowedAreaIds(profile).map(getAreaLabel).join(' / ');

  if (userName) userName.textContent = profile?.label || user?.displayName || 'Docente';
  if (userEmail) userEmail.textContent = [String(user?.email || '').trim(), areas].filter(Boolean).join(' · ');
  if (buildTag) buildTag.textContent = `BUILD ${BUILD}`;
}

function ensureCarnetModal() {
  if (carnetModal) return carnetModal;

  const modal = document.createElement('div');
  modal.id = 'carnetModal';
  modal.hidden = true;
  modal.setAttribute('role', 'dialog');
  modal.setAttribute('aria-modal', 'true');
  modal.setAttribute('aria-label', 'Carnet docente');

  modal.innerHTML = `
    <div class="carnetCard">
      <div class="carnetTop">
        <div class="carnetTitle" id="carnetTitle">Carnet docente</div>
        <button type="button" id="carnetClose" class="btnGhost">Cerrar</button>
      </div>
      <div class="carnetBody">
        <img id="carnetImg" alt="Carnet docente" />
        <div id="carnetNote">Muestra este carnet para validar tu vinculacion con Musicala.</div>
      </div>
    </div>
  `;

  Object.assign(modal.style, {
    position: 'fixed',
    inset: '0',
    background: 'rgba(11,16,32,.55)',
    backdropFilter: 'blur(6px)',
    WebkitBackdropFilter: 'blur(6px)',
    display: 'grid',
    placeItems: 'center',
    zIndex: '9999',
    padding: '18px'
  });

  const card = modal.querySelector('.carnetCard');
  const top = modal.querySelector('.carnetTop');
  const img = modal.querySelector('#carnetImg');
  const note = modal.querySelector('#carnetNote');
  const btn = modal.querySelector('#carnetClose');

  if (card) {
    Object.assign(card.style, {
      width: 'min(680px, 100%)',
      background: 'rgba(255,255,255,.92)',
      border: '1px solid rgba(11,16,32,.14)',
      borderRadius: '22px',
      boxShadow: '0 28px 80px rgba(11,16,32,.22)',
      overflow: 'hidden'
    });
  }

  if (top) {
    Object.assign(top.style, {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '10px',
      padding: '12px 14px',
      background: 'rgba(255,255,255,.86)',
      borderBottom: '1px solid rgba(11,16,32,.10)'
    });
  }

  if (img) {
    Object.assign(img.style, {
      width: '100%',
      height: 'auto',
      borderRadius: '16px',
      border: '1px solid rgba(11,16,32,.10)',
      background: 'rgba(255,255,255,.6)',
      display: 'block'
    });
  }

  if (note) {
    Object.assign(note.style, {
      marginTop: '10px',
      fontSize: '12px',
      color: 'rgba(11,16,32,.68)',
      textAlign: 'center'
    });
  }

  if (btn) {
    Object.assign(btn.style, {
      height: '36px',
      padding: '0 12px',
      borderRadius: '12px',
      border: '1px solid rgba(11,16,32,.14)',
      background: 'rgba(255,255,255,.92)',
      fontWeight: '850',
      cursor: 'pointer'
    });
  }

  const close = () => {
    modal.hidden = true;
    if (!isDrawerOpen() && !anyModalOpen()) {
      document.body.style.overflow = '';
    }
  };

  modal.addEventListener('click', (event) => {
    if (event.target === modal) close();
  });
  btn?.addEventListener('click', close);

  document.body.appendChild(modal);
  carnetModal = modal;
  return modal;
}

function openCarnet(profile) {
  const path = String(profile?.carnet || '').trim();
  if (!path) {
    toast('Este usuario no tiene carnet asignado.');
    return;
  }

  const modal = ensureCarnetModal();
  const img = modal.querySelector('#carnetImg');
  const title = modal.querySelector('#carnetTitle');

  if (title) title.textContent = `Carnet · ${profile?.label || 'Docente'}`;

  if (img) {
    img.removeAttribute('src');
    img.onerror = null;
    img.src = path;
    img.onerror = () => {
      toast('No pude cargar el carnet. Revisa el archivo en /assets.');
      img.onerror = null;
    };
  }

  modal.hidden = false;
  document.body.style.overflow = 'hidden';
}

function setHubCopy() {
  const loginTitle = document.getElementById('hub-title');
  const loginSubtitle = document.getElementById('hub-subtitle');
  const appTitle = document.getElementById('app-title');
  const drawerTitle = document.getElementById('drawer-hub-title');
  const drawerSub = document.getElementById('drawer-hub-sub');

  if (loginTitle) loginTitle.textContent = HUB.name;
  if (loginSubtitle) loginSubtitle.textContent = 'Acceso con Google autorizado';
  if (appTitle) appTitle.textContent = HUB.name;
  if (drawerTitle) drawerTitle.textContent = HUB.name;
  if (drawerSub) drawerSub.textContent = HUB.subtitle;
}

function updateNetPillNow() {
  const pill = document.getElementById('net-pill');
  if (!pill) return null;

  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
  const online = navigator.onLine !== false;
  let poor = false;

  if (connection && typeof connection.effectiveType === 'string') {
    poor = /(^2g$|^3g$|slow-2g)/i.test(connection.effectiveType);
  }

  pill.classList.toggle('offline', !online);
  pill.classList.toggle('poor', online && poor);

  const pending = SHIFT_STATE.queuedCount > 0 ? ` · ${SHIFT_STATE.queuedCount} por sync` : '';
  if (!online) pill.textContent = `Offline${pending}`;
  else if (poor) pill.textContent = `Conexion lenta${pending}`;
  else pill.textContent = `Online${pending}`;

  return updateNetPillNow;
}

function setNetPill() {
  const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  updateNetPillNow();
  window.addEventListener('online', () => {
    updateNetPillNow();
    replayShiftQueue({ silent: false });
  });
  window.addEventListener('offline', updateNetPillNow);
  connection?.addEventListener?.('change', updateNetPillNow);
}

function prettyName(user, fallbackEmail = '') {
  const name = String(user?.displayName || '').trim();
  const email = String(user?.email || fallbackEmail || '').trim();
  if (name) return name;
  if (email) return email;
  return 'Sesion activa';
}

function friendlyAuthError(code = '') {
  if (code === 'auth/unauthorized-domain') return 'El dominio no esta autorizado en Firebase Auth.';
  if (code === 'auth/popup-blocked') return 'El navegador bloqueo la ventana del login.';
  if (code === 'auth/cancelled-popup-request') return 'Se cancelo la solicitud de inicio de sesion.';
  if (code === 'auth/popup-closed-by-user') return 'Cerraste la ventana del login.';
  if (code === 'auth/operation-not-supported-in-this-environment') return 'Este entorno no permite popup directo.';
  if (code === 'auth/internal-error') return 'Error interno de autenticacion. Intenta de nuevo.';
  if (code === 'auth/network-request-failed') return 'La red fallo. Revisa tu conexion.';
  return '';
}

function setLoginButtonBusy(isBusy) {
  const btn = document.getElementById('btn-google');
  if (!btn) return;
  btn.disabled = !!isBusy;
  btn.textContent = isBusy ? 'Conectando con Google...' : 'Entrar con Google';
}

async function doGoogleLogin(auth) {
  if (loginInFlight) return;
  loginInFlight = true;
  setLoginButtonBusy(true);

  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });

  try {
    await setPersistence(auth, browserLocalPersistence);
    try {
      await signInWithPopup(auth, provider);
      return;
    } catch (popupError) {
      const popupCode = popupError?.code || '';
      const shouldFallbackToRedirect = popupCode === 'auth/popup-blocked'
        || popupCode === 'auth/cancelled-popup-request'
        || popupCode === 'auth/operation-not-supported-in-this-environment';
      if (!shouldFallbackToRedirect) throw popupError;

      await signInWithRedirect(auth, provider);
      return;
    }
  } catch (error) {
    const code = error?.code || '';
    if (code === 'auth/popup-closed-by-user') return;

    const friendly = friendlyAuthError(code);
    toast(friendly ? `No se pudo iniciar sesion: ${friendly}` : 'No se pudo iniciar sesion.');
    console.error('Login error:', error);
  } finally {
    loginInFlight = false;
    setLoginButtonBusy(false);
  }
}

function clearShiftState() {
  SHIFT_STATE.loading = false;
  SHIFT_STATE.busy = false;
  SHIFT_STATE.loaded = false;
  SHIFT_STATE.docId = '';
  SHIFT_STATE.date = '';
  SHIFT_STATE.data = null;
  SHIFT_STATE.pending = null;
  SHIFT_STATE.queuedCount = 0;
  SHIFT_STATE.syncBusy = false;
}

function clearDataState() {
  DATA_STATE.teacherProfile = null;
  DATA_STATE.students = [];
  DATA_STATE.studentsLoaded = false;
  DATA_STATE.attendance = [];
  DATA_STATE.attendanceLoaded = false;
  DATA_STATE.logs = [];
  DATA_STATE.logsLoaded = false;
  DATA_STATE.teacherRecords = {
    diagnosticos: [],
    proyectos: [],
    muestrasProceso: [],
    informesMensuales: []
  };
  DATA_STATE.teacherRecordsLoaded = {
    diagnosticos: false,
    proyectos: false,
    muestrasProceso: false,
    informesMensuales: false
  };
  DATA_STATE.calendar = [];
  DATA_STATE.calendarLoaded = false;
  DATA_STATE.schedules = [];
  DATA_STATE.schedulesLoaded = false;
  DATA_STATE.punctuality = [];
  DATA_STATE.punctualityLoaded = false;
  DATA_STATE.gallery = [];
  DATA_STATE.galleryLoaded = false;
  DATA_STATE.recentIds = [];

  MODULE_STATE.current = '';
  MODULE_STATE.students.filterArea = 'all';
  MODULE_STATE.students.editingId = '';
  MODULE_STATE.attendance.areaId = '';
  MODULE_STATE.attendance.editingId = '';
  MODULE_STATE.logs.areaId = '';
  MODULE_STATE.logs.editingId = '';
  MODULE_STATE.logs.showGallery = false;
  MODULE_STATE.logs.galleryAreaId = 'all';
  MODULE_STATE.teacherRecords.activeType = 'diagnosticos';
  MODULE_STATE.teacherRecords.editingId = '';
  MODULE_STATE.teacherRecords.filters = { month: '', teacher: '', center: '', type: 'all', areaId: 'all' };
  MODULE_STATE.monthlyReports.editingId = '';
  MODULE_STATE.monthlyReports.areaId = '';
  MODULE_STATE.monthlyReports.filters = { month: getCurrentMonthKey(), teacher: '', center: '', areaId: 'all' };
  MODULE_STATE.calendar.year = String(new Date().getFullYear());
  MODULE_STATE.calendar.month = String(new Date().getMonth() + 1);
}

async function doLogout(auth) {
  try {
    closeDrawer();
    closeAllModals();
    await signOut(auth);

    CURRENT_USER = null;
    ACTIVE_LINKS = {};
    ACTIVE_PROFILE = null;
    ACTIVE_EMAIL = '';
    clearShiftState();
    clearDataState();
  } catch (error) {
    toast('No se pudo cerrar sesion.');
    console.error(error);
  }
}

function assertConfig(config) {
  const invalid = !config || !config.apiKey || !config.authDomain || !config.projectId || !config.appId;
  if (!invalid) return true;
  console.warn('Firebase config incompleto. Revisa firebaseConfig en app.js');
  return false;
}

async function finalizeRedirectIfAny(auth) {
  try {
    const result = await getRedirectResult(auth);
    if (result?.user) console.log('Redirect login OK:', result.user.email || result.user.uid);
  } catch (error) {
    const code = error?.code || '';
    if (!code) return;

    const friendly = friendlyAuthError(code);
    toast(friendly ? `El login redirect fallo: ${friendly}` : 'El login redirect fallo.');
    console.warn('Redirect result error:', error);
  }
}

function hasUserRestrictions() {
  return HUB.users && Object.keys(HUB.users).length > 0;
}

async function loadTeacherProfile(user) {
  if (!DB || !user) return null;

  const email = emailKey(user);
  const localProfile = HUB.users?.[email] ? normalizeTeacherProfile(HUB.users[email], user) : null;
  const teacherRef = doc(DB, COLLECTIONS.teacherProfiles, user.uid);
  const teacherSnap = await getDoc(teacherRef).catch((error) => {
    console.warn('No se pudo leer el perfil docente:', error);
    return null;
  });

  if (teacherSnap?.exists()) {
    return normalizeTeacherProfile({
      ...(localProfile || {}),
      ...teacherSnap.data(),
      uid: user.uid,
      email
    }, user);
  }

  const userRef = doc(DB, 'users', email);
  const userSnap = await getDoc(userRef).catch((error) => {
    console.warn('No se pudo leer el perfil de acceso:', error);
    return null;
  });

  if (userSnap?.exists()) {
    return normalizeTeacherProfile({
      ...(localProfile || {}),
      ...userSnap.data(),
      uid: user.uid,
      email
    }, user);
  }

  return localProfile;
}

function buildLinksForUser(email) {
  const base = { ...(HUB.generalLinks || {}) };
  const profile = ACTIVE_PROFILE || HUB.users?.[email] || null;
  const overrides = profile?.links || {};
  return { ...base, ...overrides };
}

async function syncTeacherProfile(user, profile) {
  if (!DB || !user || !profile || !HUB.users?.[emailKey(user)]) return profile || null;

  const ref = doc(DB, COLLECTIONS.teacherProfiles, user.uid);
  const existing = await getDoc(ref).catch(() => null);
  const base = existing?.exists() ? existing.data() : {};
  const now = Date.now();

  const payload = {
    uid: user.uid,
    email: emailKey(user),
    label: profile.label || user.displayName || user.email || 'Docente',
    carnet: profile.carnet || '',
    areaIds: getAllowedAreaIds(profile),
    primaryAreaId: getAllowedAreaIds(profile)[0] || '',
    active: true,
    source: 'docentes-fsa-hub',
    updatedAt: serverTimestamp(),
    updatedAtClient: now
  };

  if (!base.createdAt) payload.createdAt = serverTimestamp();
  if (!base.createdAtClient) payload.createdAtClient = now;

  await setDoc(ref, payload, { merge: true });

  DATA_STATE.teacherProfile = {
    ...base,
    ...payload,
    updatedAt: base.updatedAt || null,
    createdAt: base.createdAt || null
  };

  return DATA_STATE.teacherProfile;
}

function getShiftDocId(user, dateStr) {
  const uid = String(user?.uid || '').trim();
  return `${uid}_${dateStr}`;
}

function getShiftQueue() {
  const queue = lsGet(SHIFT.QUEUE_KEY, []);
  return Array.isArray(queue) ? queue : [];
}

function setShiftQueue(queue) {
  const safeQueue = Array.isArray(queue) ? queue : [];
  lsSet(SHIFT.QUEUE_KEY, safeQueue);
  SHIFT_STATE.queuedCount = safeQueue.filter((item) => item?.teacherId === CURRENT_USER?.uid).length;
  applyShiftTileUi();
  updateHeroSummary();
  updateNetPillNow();
}

function getCurrentShiftQueue() {
  return getShiftQueue().filter((item) => item?.teacherId === CURRENT_USER?.uid);
}

function refreshShiftQueueCount() {
  SHIFT_STATE.queuedCount = getCurrentShiftQueue().length;
  updateNetPillNow();
}

function mergeQueuedShiftState(remoteData = null, docId = '', date = '') {
  let merged = remoteData ? { ...remoteData } : null;
  const queue = getCurrentShiftQueue()
    .filter((item) => item.docId === docId || item.date === date)
    .sort((a, b) => Number(a.createdAtClient || 0) - Number(b.createdAtClient || 0));

  for (const item of queue) {
    if (item.type === 'openShift') {
      merged = {
        ...(merged || {}),
        ...(item.payload || {}),
        status: 'open',
        checkOut: null,
        queuedLocal: true
      };
    }

    if (item.type === 'closeShift') {
      merged = {
        ...(merged || {}),
        ...(item.payload || {}),
        status: 'closed',
        queuedLocal: true
      };
    }
  }

  if (merged && queue.length) merged.queuedLocal = true;
  return merged;
}

function queueShiftOperation(operation) {
  const queue = getShiftQueue();
  const queued = {
    id: `${Date.now()}_${Math.random().toString(16).slice(2)}`,
    teacherId: CURRENT_USER?.uid || '',
    teacherEmail: emailKey(CURRENT_USER),
    createdAtClient: Date.now(),
    ...operation
  };

  setShiftQueue([...queue, queued]);
  return queued;
}

function isLikelyNetworkError(error) {
  const code = String(error?.code || '').toLowerCase();
  const message = String(error?.message || '').toLowerCase();
  return !navigator.onLine
    || code.includes('unavailable')
    || code.includes('deadline-exceeded')
    || code.includes('network')
    || message.includes('network')
    || message.includes('offline')
    || message.includes('failed to get document');
}

function isNotFoundError(error) {
  const code = String(error?.code || '').toLowerCase();
  const message = String(error?.message || '').toLowerCase();
  return code.includes('not-found') || message.includes('no document to update') || message.includes('not found');
}

async function getShiftDocSnapshot(ref, { preferServer = true } = {}) {
  if (preferServer && navigator.onLine !== false) {
    try {
      return await getDocFromServer(ref);
    } catch (error) {
      console.warn('No se pudo leer jornada desde servidor, uso cache como respaldo:', error);
    }
  }

  return getDoc(ref);
}

async function replayShiftQueue({ silent = false } = {}) {
  if (!DB || !CURRENT_USER || SHIFT_STATE.syncBusy) return false;

  const fullQueue = getShiftQueue();
  const ownQueue = fullQueue.filter((item) => item?.teacherId === CURRENT_USER.uid);
  if (!ownQueue.length) {
    refreshShiftQueueCount();
    return true;
  }

  if (navigator.onLine === false) {
    refreshShiftQueueCount();
    return false;
  }

  SHIFT_STATE.syncBusy = true;
  applyShiftTileUi();

  const syncedIds = new Set();

  try {
    for (const item of ownQueue.sort((a, b) => Number(a.createdAtClient || 0) - Number(b.createdAtClient || 0))) {
      if (!item?.docId) continue;
      const ref = doc(DB, SHIFT.COLLECTION, item.docId);

      if (item.type === 'openShift') {
        const payload = item.payload || {};
        await setDoc(ref, {
          ...payload,
          updatedAt: serverTimestamp(),
          createdAt: serverTimestamp()
        }, { merge: true });
        await sendShiftStartEmailNotification(payload, item.docId);
        syncedIds.add(item.id);
      }

      if (item.type === 'closeShift') {
        await persistShiftClose(ref, item.payload || {}, {
          docId: item.docId,
          date: item.date,
          baseData: item.baseData || null
        });
        syncedIds.add(item.id);
      }
    }

    if (syncedIds.size) {
      setShiftQueue(fullQueue.filter((item) => !syncedIds.has(item.id)));
      if (!silent) toast('Jornada sincronizada.');
      await loadTodayShift();
      await loadPendingShift();
      if (MODULE_STATE.current === 'shift') renderWorkspaceModule();
      syncShellUi();
    }

    return true;
  } catch (error) {
    console.warn('No se pudo sincronizar la cola de jornada:', error);
    refreshShiftQueueCount();
    if (!silent && !isLikelyNetworkError(error)) toast('Hay marcajes pendientes por sincronizar.');
    return false;
  } finally {
    SHIFT_STATE.syncBusy = false;
    applyShiftTileUi();
    updateHeroSummary();
  }
}

function getShiftUiModel() {
  if (SHIFT_STATE.loading) {
    return {
      title: 'Registro de jornada',
      subtitle: 'Cargando tu estado de hoy...',
      badge: 'Cargando',
      classes: ['is-shift-loading'],
      disabled: true
    };
  }

  if (SHIFT_STATE.queuedCount > 0) {
    const data = SHIFT_STATE.data;
    return {
      title: data?.status === 'open' && !data?.checkOut ? 'Finalizar jornada' : 'Iniciar jornada',
      subtitle: `${SHIFT_STATE.queuedCount} marcaje(s) pendiente(s) de sincronizar`,
      badge: 'Pendiente sync',
      classes: ['is-shift-warning'],
      disabled: false
    };
  }

  if (SHIFT_STATE.pending) {
    return {
      title: 'Revisar jornada',
      subtitle: `Sesion del ${formatDateLabel(SHIFT_STATE.pending.date)} sin cerrar`,
      badge: 'Pendiente',
      classes: ['is-shift-warning'],
      disabled: false
    };
  }

  if (!SHIFT_STATE.loaded || !SHIFT_STATE.data) {
    return {
      title: 'Iniciar jornada',
      subtitle: 'Marca tu entrada',
      badge: 'Disponible',
      classes: ['is-shift-ready'],
      disabled: false
    };
  }

  const data = SHIFT_STATE.data;

  if (data.status === 'open' && data.checkIn && !data.checkOut) {
    return {
      title: 'Finalizar jornada',
      subtitle: `Jornada iniciada a las ${formatHourFromIso(data.checkIn) || '--'}`,
      badge: 'Activa',
      classes: ['is-shift-open'],
      disabled: false
    };
  }

  if (data.status === 'closed' && data.checkOut) {
    return {
      title: 'Iniciar jornada',
      subtitle: `Ultimo cierre hoy a las ${formatHourFromIso(data.checkOut) || '--'}`,
      badge: 'Cerrada',
      classes: ['is-shift-ready'],
      disabled: false
    };
  }

  return {
    title: 'Iniciar jornada',
    subtitle: 'Marca tu entrada',
    badge: 'Disponible',
    classes: ['is-shift-ready'],
    disabled: false
  };
}

function applyShiftTileUi() {
  const button = document.querySelector('button[data-id="jornada"]');
  if (!button) return;

  const model = getShiftUiModel();

  button.classList.remove('pending', 'is-shift-loading', 'is-shift-ready', 'is-shift-open', 'is-shift-busy', 'is-shift-warning');
  model.classes.forEach((className) => button.classList.add(className));
  if (SHIFT_STATE.busy) button.classList.add('is-shift-busy');

  button.disabled = !!model.disabled || !!SHIFT_STATE.busy;
  button.setAttribute('aria-busy', SHIFT_STATE.busy ? 'true' : 'false');

  const title = button.querySelector('.tTitle');
  const sub = button.querySelector('.tSub');
  const badge = button.querySelector('.badge');

  if (title) title.textContent = model.title;
  if (sub) sub.textContent = model.subtitle;
  if (badge) {
    badge.textContent = model.badge;
    badge.classList.add('badgeShift');
    badge.classList.remove('ok');
  }
}

async function loadTodayShift() {
  if (!DB || !CURRENT_USER) return null;

  SHIFT_STATE.loading = true;
  refreshShiftQueueCount();
  applyShiftTileUi();

  try {
    const { date } = getBogotaDateParts(new Date());
    const docId = getShiftDocId(CURRENT_USER, date);
    const ref = doc(DB, SHIFT.COLLECTION, docId);
    const snap = await getShiftDocSnapshot(ref);

    SHIFT_STATE.docId = docId;
    SHIFT_STATE.date = date;
    SHIFT_STATE.loaded = true;
    SHIFT_STATE.data = mergeQueuedShiftState(snap.exists() ? snap.data() : null, docId, date);

    return SHIFT_STATE.data;
  } catch (error) {
    console.error('No se pudo cargar la jornada de hoy:', error);
    const { date } = getBogotaDateParts(new Date());
    const docId = getShiftDocId(CURRENT_USER, date);
    const queuedData = mergeQueuedShiftState(null, docId, date);

    SHIFT_STATE.docId = docId;
    SHIFT_STATE.date = date;
    SHIFT_STATE.loaded = !!queuedData;
    SHIFT_STATE.data = queuedData;

    if (!queuedData) toast('No pude cargar el estado de tu jornada.');
    return null;
  } finally {
    SHIFT_STATE.loading = false;
    applyShiftTileUi();
  }
}

async function loadPendingShift() {
  if (!DB || !CURRENT_USER) return null;

  const today = getBogotaDateParts().date;

  for (let step = 1; step <= SHIFT.LOOKBACK_DAYS; step += 1) {
    const date = getBogotaDateDaysAgo(step);
    if (date === today) continue;

    try {
      const ref = doc(DB, SHIFT.COLLECTION, getShiftDocId(CURRENT_USER, date));
      const snap = await getShiftDocSnapshot(ref);

      if (!snap.exists()) continue;

      const data = snap.data();
      if (data?.status === 'open' && data?.checkIn && !data?.checkOut) {
        SHIFT_STATE.pending = { id: snap.id, ...data };
        return SHIFT_STATE.pending;
      }
    } catch (error) {
      console.error('No se pudo revisar la jornada pendiente:', error);
      break;
    }
  }

  SHIFT_STATE.pending = null;
  return null;
}

async function refreshShiftState() {
  refreshShiftQueueCount();
  await replayShiftQueue({ silent: true });
  await loadTodayShift();
  await loadPendingShift();
  syncShellUi();

  if (SHIFT_STATE.pending) {
    toast('Tu ultima sesion quedo abierta. Revisa el cierre pendiente.', {
      actionText: 'Revisar',
      sticky: true,
      onAction: () => openWorkspaceModule('shift')
    });
  }
}

function isShiftEmailWebappConfigured() {
  return /^https:\/\/script\.google\.com\/macros\/s\//i.test(String(SHIFT_EMAIL_WEBAPP_URL || '').trim());
}

function buildShiftEmailPayload(shiftData = {}, shiftId = '') {
  const checkIn = shiftData.checkIn || '';
  return {
    token: SHIFT_EMAIL_APP_TOKEN,
    eventType: 'SHIFT_STARTED',
    shiftId,
    teacherName: shiftData.teacherName || getTeacherDisplayName(),
    teacherEmail: shiftData.teacherEmail || emailKey(CURRENT_USER),
    date: shiftData.date || getBogotaDateParts().date,
    checkIn,
    modality: shiftData.modality || shiftData.modalidad || shiftData.type || shiftData.source || '',
    createdAt: checkIn ? formatDateTimeFromIso(checkIn) : new Date().toLocaleString('es-CO', { timeZone: SHIFT.TIMEZONE })
  };
}

async function updateShiftEmailStatus(shiftId, data) {
  if (!DB || !shiftId) return;
  try {
    await updateDoc(doc(DB, SHIFT.COLLECTION, shiftId), data);
  } catch (error) {
    console.warn('No se pudo actualizar el estado del correo de jornada:', error);
  }
}

// Flujo secundario de notificacion: nunca debe bloquear el marcaje de llegada.
async function sendShiftStartEmailNotification(shiftData, shiftId) {
  if (!DB || !shiftId) return false;

  if (!isShiftEmailWebappConfigured()) {
    console.warn('Notificacion de jornada no enviada: falta configurar SHIFT_EMAIL_WEBAPP_URL.');
    return false;
  }

  try {
    const ref = doc(DB, SHIFT.COLLECTION, shiftId);
    const snap = await getDoc(ref);
    const remoteData = snap.exists() ? snap.data() : {};

    if (remoteData?.arrivalEmailStatus === 'sent') return true;

    const response = await fetch(SHIFT_EMAIL_WEBAPP_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'text/plain;charset=utf-8' },
      body: JSON.stringify(buildShiftEmailPayload({ ...remoteData, ...(shiftData || {}) }, shiftId))
    });

    let result = {};
    try {
      result = await response.json();
    } catch (error) {
      result = { ok: response.ok, error: 'Respuesta no JSON del Web App' };
    }

    if (!response.ok || result?.ok !== true) {
      throw new Error(result?.error || `HTTP ${response.status}`);
    }

    await updateShiftEmailStatus(shiftId, {
      arrivalEmailStatus: 'sent',
      arrivalEmailSentAt: serverTimestamp(),
      arrivalEmailError: ''
    });
    return true;
  } catch (error) {
    console.warn('No se pudo enviar el correo de inicio de jornada:', error);
    await updateShiftEmailStatus(shiftId, {
      arrivalEmailStatus: 'failed',
      arrivalEmailError: String(error?.message || error || 'Error desconocido')
    });
    return false;
  }
}

async function openShift() {
  if (!DB || !CURRENT_USER) {
    toast('No hay una sesion activa para registrar jornada.');
    return;
  }

  const now = new Date();
  const nowIso = now.toISOString();
  const { date } = getBogotaDateParts(now);
  const docId = getShiftDocId(CURRENT_USER, date);
  const nowClient = Date.now();
  const previousArrivalEmailSent = SHIFT_STATE.data?.arrivalEmailStatus === 'sent';

  const payload = {
    teacherId: CURRENT_USER.uid,
    teacherEmail: emailKey(CURRENT_USER),
    teacherName: getTeacherDisplayName(),
    date,
    timezone: SHIFT.TIMEZONE,
    source: 'docentes-fsa-hub',
    checkIn: nowIso,
    checkOut: null,
    status: 'open',
    updatedAtClient: nowClient
  };

  if (!previousArrivalEmailSent) {
    payload.arrivalEmailStatus = 'pending';
    payload.arrivalEmailSentAt = null;
    payload.arrivalEmailError = '';
  }

  if (navigator.onLine === false) {
    queueShiftOperation({
      type: 'openShift',
      docId,
      date,
      payload: {
        ...payload,
        createdAtClient: nowClient
      }
    });
    applyLocalOpenShift(payload, docId, date);
    toast('Jornada iniciada en este dispositivo. Se sincronizara cuando vuelva internet.');
    return;
  }

  try {
    await setDoc(doc(DB, SHIFT.COLLECTION, docId), {
      ...payload,
      createdAt: serverTimestamp(),
      createdAtClient: nowClient
    }, { merge: true });
    await sendShiftStartEmailNotification(payload, docId);
  } catch (error) {
    if (!isLikelyNetworkError(error)) throw error;

    queueShiftOperation({
      type: 'openShift',
      docId,
      date,
      payload: {
        ...payload,
        createdAtClient: nowClient
      }
    });
    applyLocalOpenShift(payload, docId, date);
    toast('Jornada iniciada en este dispositivo. Se sincronizara cuando vuelva internet.');
    return;
  }

  SHIFT_STATE.docId = docId;
  SHIFT_STATE.date = date;
  SHIFT_STATE.loaded = true;
  SHIFT_STATE.data = payload;

  toast('Jornada iniciada.');
}

function applyLocalOpenShift(payload, docId, date) {
  SHIFT_STATE.docId = docId;
  SHIFT_STATE.date = date;
  SHIFT_STATE.loaded = true;
  SHIFT_STATE.data = {
    ...payload,
    queuedLocal: true
  };
}

function buildRecoveredClosedShift(payload = {}, options = {}) {
  const { queuedLocal: _queuedLocal, ...baseData } = options.baseData || SHIFT_STATE.data || {};
  const date = options.date || SHIFT_STATE.date || baseData.date || getBogotaDateParts().date;

  return {
    teacherId: baseData.teacherId || CURRENT_USER?.uid || '',
    teacherEmail: baseData.teacherEmail || emailKey(CURRENT_USER),
    teacherName: baseData.teacherName || getTeacherDisplayName(),
    date,
    timezone: baseData.timezone || SHIFT.TIMEZONE,
    source: baseData.source || 'docentes-fsa-hub',
    checkIn: baseData.checkIn || payload.checkIn || '',
    ...baseData,
    ...payload,
    checkOut: payload.checkOut || baseData.checkOut || new Date().toISOString(),
    status: 'closed',
    updatedAt: serverTimestamp(),
    updatedAtClient: payload.updatedAtClient || Date.now()
  };
}

async function persistShiftClose(ref, payload = {}, options = {}) {
  try {
    await updateDoc(ref, {
      ...payload,
      updatedAt: serverTimestamp()
    });
  } catch (error) {
    if (!isNotFoundError(error)) throw error;

    const baseData = options.baseData || SHIFT_STATE.data || null;
    if (!baseData?.checkIn) throw error;

    await setDoc(ref, buildRecoveredClosedShift(payload, options), { merge: true });
  }
}

async function closeShift() {
  if (!DB || !CURRENT_USER || !SHIFT_STATE.docId) {
    toast('No encontre una jornada abierta para cerrar.');
    return;
  }

  const nowIso = new Date().toISOString();
  const nowClient = Date.now();
  const ref = doc(DB, SHIFT.COLLECTION, SHIFT_STATE.docId);

  const payload = {
    checkOut: nowIso,
    status: 'closed',
    manuallyClosed: false,
    updatedAtClient: nowClient
  };
  const baseData = SHIFT_STATE.data ? { ...SHIFT_STATE.data } : null;

  if (navigator.onLine === false) {
    queueShiftOperation({
      type: 'closeShift',
      docId: SHIFT_STATE.docId,
      date: SHIFT_STATE.date || getBogotaDateParts().date,
      payload,
      baseData
    });
    applyLocalCloseShift(payload);
    toast('Jornada finalizada en este dispositivo. Se sincronizara cuando vuelva internet.');
    return;
  }

  try {
    await persistShiftClose(ref, payload, {
      docId: SHIFT_STATE.docId,
      date: SHIFT_STATE.date || getBogotaDateParts().date,
      baseData
    });
  } catch (error) {
    if (!isLikelyNetworkError(error)) throw error;

    queueShiftOperation({
      type: 'closeShift',
      docId: SHIFT_STATE.docId,
      date: SHIFT_STATE.date || getBogotaDateParts().date,
      payload,
      baseData
    });
    applyLocalCloseShift(payload);
    toast('Jornada finalizada en este dispositivo. Se sincronizara cuando vuelva internet.');
    return;
  }

  SHIFT_STATE.data = {
    ...(baseData || SHIFT_STATE.data || {}),
    ...payload
  };

  toast('Jornada finalizada.');
}

function applyLocalCloseShift(payload) {
  SHIFT_STATE.data = {
    ...(SHIFT_STATE.data || {}),
    ...payload,
    queuedLocal: true
  };
}

async function closePendingShift(formData) {
  const pending = SHIFT_STATE.pending;
  if (!DB || !CURRENT_USER || !pending?.id) {
    toast('No hay una sesion pendiente para cerrar.');
    return;
  }

  const manualValue = readFormValue(formData, 'manualCheckOut');
  const note = readFormValue(formData, 'manualNote');
  const manualIso = bogotaLocalInputToIso(manualValue);

  if (!manualIso) {
    toast('Debes indicar una fecha y hora de cierre validas.');
    return;
  }

  if (pending.checkIn && manualIso < pending.checkIn) {
    toast('La hora de cierre no puede ser anterior a la hora de ingreso.');
    return;
  }

  const ref = doc(DB, SHIFT.COLLECTION, pending.id);
  const nowClient = Date.now();
  const payload = {
    checkOut: manualIso,
    status: 'closed',
    manuallyClosed: true,
    manualCloseNote: note || '',
    updatedAtClient: nowClient
  };
  let queuedForSync = false;

  if (navigator.onLine === false) {
    queueShiftOperation({
      type: 'closeShift',
      docId: pending.id,
      date: pending.date || '',
      payload,
      baseData: pending
    });
    queuedForSync = true;
  } else {
    try {
      await persistShiftClose(ref, payload, {
        docId: pending.id,
        date: pending.date || '',
        baseData: pending
      });
    } catch (error) {
      if (!isLikelyNetworkError(error)) throw error;
      queueShiftOperation({
        type: 'closeShift',
        docId: pending.id,
        date: pending.date || '',
        payload,
        baseData: pending
      });
      queuedForSync = true;
    }
  }

  if (SHIFT_STATE.docId === pending.id) {
    SHIFT_STATE.data = {
      ...(SHIFT_STATE.data || {}),
      ...payload,
      queuedLocal: queuedForSync
    };
  }

  SHIFT_STATE.pending = null;
  toast(queuedForSync ? 'Cierre guardado en este dispositivo. Se sincronizara cuando vuelva internet.' : 'Sesion pendiente cerrada.');

  await refreshShiftState();
  if (MODULE_STATE.current === 'shift') renderWorkspaceModule();
}

async function handleShiftButtonClick() {
  if (!CURRENT_USER || !DB) {
    toast('Debes iniciar sesion primero.');
    return;
  }

  if (SHIFT_STATE.busy || SHIFT_STATE.loading) return;

  SHIFT_STATE.busy = true;
  applyShiftTileUi();

  try {
    await replayShiftQueue({ silent: true });
    await loadTodayShift();
    await loadPendingShift();

    if (SHIFT_STATE.pending) {
      await openWorkspaceModule('shift');
      return;
    }

    const data = SHIFT_STATE.data;

    if (data?.status === 'open' && data?.checkIn && !data?.checkOut) {
      toast('Guardando cierre...');
      await closeShift();
    } else {
      await openShift();
    }

    syncShellUi();
    if (MODULE_STATE.current === 'shift') renderWorkspaceModule();
  } catch (error) {
    console.error('Error guardando la jornada:', error);
    toast('No pude cerrar la jornada. Intenta actualizar estado o revisa conexion.');
  } finally {
    SHIFT_STATE.busy = false;
    applyShiftTileUi();
    updateHeroSummary();
  }
}

function getScopedStudents(filterArea = MODULE_STATE.students.filterArea) {
  const normalized = normalizeStudentsFilter(filterArea);
  if (normalized === 'all') return sortByName(DATA_STATE.students.filter((student) => student.active !== false));
  return sortByName(DATA_STATE.students.filter((student) => student.areaId === normalized));
}

function getStudentsForArea(areaId) {
  return sortByName(DATA_STATE.students.filter((student) => student.areaId === areaId && student.active !== false));
}

function getStudentDraft() {
  const editing = DATA_STATE.students.find((student) => student.id === MODULE_STATE.students.editingId);
  if (editing) {
    return {
      id: editing.id,
      areaId: editing.areaId || getPrimaryAreaId(),
      fullName: editing.fullName || '',
      documentNumber: editing.documentNumber || '',
      groupName: editing.groupName || '',
      guardianName: editing.guardianName || '',
      guardianPhone: editing.guardianPhone || '',
      siteName: editing.siteName || '',
      notes: editing.notes || '',
      active: editing.active !== false
    };
  }

  return {
    id: '',
    areaId: normalizeStudentsFilter(MODULE_STATE.students.filterArea) === 'all' ? getPrimaryAreaId() : normalizeStudentsFilter(MODULE_STATE.students.filterArea),
    fullName: '',
    documentNumber: '',
    groupName: '',
    guardianName: '',
    guardianPhone: '',
    siteName: '',
    notes: '',
    active: true
  };
}

function buildScopedQuery(collectionName) {
  const areaIds = getAllowedAreaIds();
  if (!DB || !areaIds.length) return null;

  const col = collection(DB, collectionName);
  if (areaIds.length === 1) {
    return query(col, where('areaId', '==', areaIds[0]));
  }

  return query(col, where('areaId', 'in', areaIds.slice(0, 10)));
}

async function loadStudents(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.studentsLoaded && !force) return DATA_STATE.students;

  try {
    const q = buildScopedQuery(COLLECTIONS.students);
    if (!q) {
      DATA_STATE.students = [];
      DATA_STATE.studentsLoaded = true;
      syncShellUi();
      return [];
    }

    const snap = await getDocs(q);
    DATA_STATE.students = snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() }))
      .sort((a, b) => {
        const activeA = a.active !== false ? 0 : 1;
        const activeB = b.active !== false ? 0 : 1;
        if (activeA !== activeB) return activeA - activeB;
        return String(a.fullName || '').localeCompare(String(b.fullName || ''), 'es', { sensitivity: 'base' });
      });
    DATA_STATE.studentsLoaded = true;
    syncShellUi();
    return DATA_STATE.students;
  } catch (error) {
    console.error('No se pudo cargar estudiantes:', error);
    toast('No pude cargar la base de estudiantes.');
    return [];
  }
}

async function loadAttendance(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.attendanceLoaded && !force) return DATA_STATE.attendance;

  try {
    const q = buildScopedQuery(COLLECTIONS.attendance);
    if (!q) {
      DATA_STATE.attendance = [];
      DATA_STATE.attendanceLoaded = true;
      syncShellUi();
      return [];
    }

    const snap = await getDocs(q);
    DATA_STATE.attendance = sortByDateDesc(snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() })));
    DATA_STATE.attendanceLoaded = true;
    syncShellUi();
    return DATA_STATE.attendance;
  } catch (error) {
    console.error('No se pudo cargar asistencia:', error);
    toast('No pude cargar los registros de asistencia.');
    return [];
  }
}

async function loadLogs(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.logsLoaded && !force) return DATA_STATE.logs;

  try {
    const q = buildScopedQuery(COLLECTIONS.classLogs);
    if (!q) {
      DATA_STATE.logs = [];
      DATA_STATE.logsLoaded = true;
      syncShellUi();
      return [];
    }

    const snap = await getDocs(q);
    DATA_STATE.logs = sortByDateDesc(snap.docs.map((docSnap) => ({ id: docSnap.id, ...docSnap.data() })));
    DATA_STATE.logsLoaded = true;
    syncShellUi();
    return DATA_STATE.logs;
  } catch (error) {
    console.error('No se pudo cargar bitacoras:', error);
    toast('No pude cargar las bitacoras de clase.');
    return [];
  }
}

async function loadTeacherRecordType(typeKey, force = false) {
  const config = TEACHER_RECORD_TYPES[typeKey];
  if (!DB || !CURRENT_USER || !config) return [];
  if (DATA_STATE.teacherRecordsLoaded[typeKey] && !force) return DATA_STATE.teacherRecords[typeKey] || [];

  try {
    const q = buildScopedQuery(config.collection);
    if (!q) {
      DATA_STATE.teacherRecords[typeKey] = [];
      DATA_STATE.teacherRecordsLoaded[typeKey] = true;
      syncShellUi();
      return [];
    }

    const snap = await getDocs(q);
    DATA_STATE.teacherRecords[typeKey] = sortRecordsDesc(
      snap.docs.map((docSnap) => ({ id: docSnap.id, typeKey, ...docSnap.data() }))
    );
    DATA_STATE.teacherRecordsLoaded[typeKey] = true;
    syncShellUi();
    return DATA_STATE.teacherRecords[typeKey];
  } catch (error) {
    console.error(`No se pudo cargar ${typeKey}:`, error);
    toast('No pude cargar esos registros docentes.');
    return [];
  }
}

async function loadTeacherRecords(types = Object.keys(TEACHER_RECORD_TYPES), force = false) {
  const keys = Array.isArray(types) ? types : [types];
  await Promise.all(keys.map((typeKey) => loadTeacherRecordType(typeKey, force)));
  return keys.flatMap((typeKey) => DATA_STATE.teacherRecords[typeKey] || []);
}

function normalizeCalendarEntry(docData = {}, id = '') {
  const startRaw = String(docData.startAt || docData.startDate || docData.date || '').trim();
  const endRaw = String(docData.endAt || docData.endDate || '').trim();
  const startDate = startRaw ? new Date(startRaw) : null;
  const endDate = endRaw ? new Date(endRaw) : null;
  const safeStart = startDate && !Number.isNaN(startDate.getTime()) ? startDate : null;
  const safeEnd = endDate && !Number.isNaN(endDate.getTime()) ? endDate : null;
  return {
    id,
    title: String(docData.title || docData.name || 'Evento').trim(),
    areaId: String(docData.areaId || '').trim(),
    place: String(docData.place || docData.location || '').trim(),
    notes: String(docData.notes || docData.description || '').trim(),
    startAt: safeStart ? safeStart.toISOString() : '',
    endAt: safeEnd ? safeEnd.toISOString() : '',
    date: safeStart ? safeStart.toISOString().slice(0, 10) : String(docData.date || '').trim(),
    updatedAtClient: Number(docData.updatedAtClient || docData.createdAtClient || 0) || 0
  };
}

async function loadCalendar(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.calendarLoaded && !force) return DATA_STATE.calendar;
  try {
    const snap = await getDocs(collection(DB, COLLECTIONS.calendarEvents));
    DATA_STATE.calendar = sortByDateDesc(
      snap.docs.map((docSnap) => normalizeCalendarEntry(docSnap.data() || {}, docSnap.id))
    );
    DATA_STATE.calendarLoaded = true;
    syncShellUi();
    return DATA_STATE.calendar;
  } catch (error) {
    console.error('No se pudo cargar calendario:', error);
    toast('No pude cargar el calendario compartido.');
    return [];
  }
}

async function loadSchedules(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.schedulesLoaded && !force) return DATA_STATE.schedules;
  try {
    const snap = await getDocs(collection(DB, COLLECTIONS.schedules));
    DATA_STATE.schedules = snap.docs
      .map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() || {}) }))
      .sort((a, b) => String(a.day || '').localeCompare(String(b.day || ''), 'es', { sensitivity: 'base' }));
    DATA_STATE.schedulesLoaded = true;
    syncShellUi();
    return DATA_STATE.schedules;
  } catch (error) {
    console.error('No se pudo cargar horarios:', error);
    toast('No pude cargar el horario compartido.');
    return [];
  }
}

async function loadPunctuality(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.punctualityLoaded && !force) return DATA_STATE.punctuality;
  try {
    const snap = await getDocs(collection(DB, COLLECTIONS.teacherShifts));
    DATA_STATE.punctuality = snap.docs
      .map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() || {}) }))
      .sort((a, b) => Number(b.updatedAtClient || b.createdAtClient || 0) - Number(a.updatedAtClient || a.createdAtClient || 0));
    DATA_STATE.punctualityLoaded = true;
    syncShellUi();
    return DATA_STATE.punctuality;
  } catch (error) {
    console.error('No se pudo cargar puntualidad:', error);
    toast('No pude cargar la puntualidad del equipo.');
    return [];
  }
}

async function loadGallery(force = false) {
  if (!DB || !CURRENT_USER) return [];
  if (DATA_STATE.galleryLoaded && !force) return DATA_STATE.gallery;
  try {
    const snap = await getDocs(collection(DB, COLLECTIONS.galleryImages));
    DATA_STATE.gallery = snap.docs
      .map((docSnap) => ({ id: docSnap.id, ...(docSnap.data() || {}) }))
      .sort((a, b) => Number(b.updatedAtClient || b.createdAtClient || 0) - Number(a.updatedAtClient || a.createdAtClient || 0));
    DATA_STATE.galleryLoaded = true;
    syncShellUi();
    return DATA_STATE.gallery;
  } catch (error) {
    console.error('No se pudo cargar galeria:', error);
    toast('No pude cargar la galeria de evidencias.');
    return [];
  }
}

function computeAttendanceTotals(entries = []) {
  const totals = {
    presente: 0,
    ausente: 0,
    tarde: 0,
    excusado: 0
  };

  for (const entry of entries) {
    const key = ATTENDANCE_STATUSES.some((item) => item.value === entry.status) ? entry.status : 'presente';
    totals[key] = Number(totals[key] || 0) + 1;
  }

  return totals;
}

function getAttendanceDraft() {
  const editing = DATA_STATE.attendance.find((item) => item.id === MODULE_STATE.attendance.editingId);
  if (editing) {
    const rosterMap = {};
    for (const entry of editing.entries || []) {
      rosterMap[entry.studentId] = entry.status || 'presente';
    }

    return {
      id: editing.id,
      areaId: editing.areaId || getPrimaryAreaId(),
      date: editing.date || getBogotaDateParts().date,
      sessionName: editing.sessionName || '',
      siteName: editing.siteName || '',
      notes: editing.notes || '',
      rosterMap
    };
  }

  const areaId = userCanAccessArea(MODULE_STATE.attendance.areaId) ? MODULE_STATE.attendance.areaId : getPrimaryAreaId();

  return {
    id: '',
    areaId,
    date: getBogotaDateParts().date,
    sessionName: '',
    siteName: '',
    notes: '',
    rosterMap: {}
  };
}

function getLogDraft() {
  const editing = DATA_STATE.logs.find((item) => item.id === MODULE_STATE.logs.editingId);
  if (editing) {
    return {
      id: editing.id,
      areaId: editing.areaId || getPrimaryAreaId(),
      date: editing.date || getBogotaDateParts().date,
      sessionName: editing.sessionName || '',
      siteName: editing.siteName || '',
      studentGroup: editing.studentGroup || '',
      objective: editing.objective || '',
      activities: editing.activities || '',
      achievements: editing.achievements || '',
      challenges: editing.challenges || '',
      followUp: editing.followUp || '',
      notes: editing.notes || '',
      photos: Array.isArray(editing.photos) ? editing.photos : []
    };
  }

  const areaId = userCanAccessArea(MODULE_STATE.logs.areaId) ? MODULE_STATE.logs.areaId : getPrimaryAreaId();

  return {
    id: '',
    areaId,
    date: getBogotaDateParts().date,
    sessionName: '',
    siteName: '',
    studentGroup: '',
    objective: '',
    activities: '',
    achievements: '',
    challenges: '',
    followUp: '',
    notes: '',
    photos: []
  };
}

function getButtonMeta(button, links) {
  if (button.id === 'jornada') {
    const model = getShiftUiModel();
    return {
      title: model.title,
      subtitle: model.subtitle,
      badgeHtml: `<span class="badge badgeShift">${escapeHtml(model.badge)}</span>`,
      cls: `tile ${model.classes.join(' ')}`.trim(),
      disabled: !!model.disabled || !!SHIFT_STATE.busy
    };
  }

  if (button.id === 'carnet') {
    return {
      title: button.title,
      subtitle: button.subtitle,
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'infoEstudiantes') {
    const count = DATA_STATE.studentsLoaded ? DATA_STATE.students.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.studentsLoaded ? `${count} visibles en tus areas` : 'Gestiona tu base por area',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'asistencia') {
    const count = DATA_STATE.attendanceLoaded ? DATA_STATE.attendance.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.attendanceLoaded ? `${count} registros cargados` : 'Registra por clase y fecha',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'bitacoraClases') {
    const count = DATA_STATE.logsLoaded ? DATA_STATE.logs.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.logsLoaded ? `${count} bitacoras disponibles` : 'Consulta, crea y actualiza',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (['diagnosticos', 'proyectos', 'muestrasProceso'].includes(button.id)) {
    const count = DATA_STATE.teacherRecords[button.id]?.length || 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.teacherRecordsLoaded[button.id] ? `${count} registro(s)` : button.subtitle,
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'registrosDocentes') {
    const count = ['diagnosticos', 'proyectos', 'muestrasProceso']
      .reduce((total, typeKey) => total + (DATA_STATE.teacherRecords[typeKey]?.length || 0), 0);
    return {
      title: button.title,
      subtitle: count ? `${count} registros cargados` : 'Diagnosticos, proyectos y muestras',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'informesMensuales') {
    const sent = (DATA_STATE.teacherRecords.informesMensuales || []).some((item) => item.teacherId === CURRENT_USER?.uid && item.month === getCurrentMonthKey());
    return {
      title: button.title,
      subtitle: sent ? 'Informe del mes enviado' : 'Diligencia antes del dia 25',
      badgeHtml: `<span class="badge ${sent ? 'ok' : ''}">${sent ? 'Listo' : 'Pendiente'}</span>`,
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'calendario') {
    const count = DATA_STATE.calendarLoaded ? DATA_STATE.calendar.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.calendarLoaded ? `${count} eventos cargados` : 'Agenda institucional compartida',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'horarioAnual') {
    const count = DATA_STATE.schedulesLoaded ? DATA_STATE.schedules.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.schedulesLoaded ? `${count} bloques de horario` : 'Consulta horario compartido',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'puntualidadEquipo') {
    const count = DATA_STATE.punctualityLoaded ? DATA_STATE.punctuality.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.punctualityLoaded ? `${count} marcajes` : 'Lectura de registros del equipo',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  if (button.id === 'galeriaEvidencias') {
    const count = DATA_STATE.galleryLoaded ? DATA_STATE.gallery.length : 0;
    return {
      title: button.title,
      subtitle: DATA_STATE.galleryLoaded ? `${count} imagenes` : 'Consulta evidencias visuales',
      badgeHtml: '<span class="badge ok">Abrir</span>',
      cls: 'tile',
      disabled: false
    };
  }

  const url = String(links?.[button.id] || '').trim();
  const pending = !url;
  return {
    title: button.title,
    subtitle: button.subtitle,
    badgeHtml: pending ? '<span class="badge">Pendiente</span>' : '<span class="badge ok">Abrir</span>',
    cls: pending ? 'tile pending' : 'tile',
    disabled: false
  };
}

function groupBySection(buttons = []) {
  const map = new Map();
  for (const button of buttons) {
    const section = button.section || 'Accesos';
    if (!map.has(section)) map.set(section, []);
    map.get(section).push(button);
  }
  return map;
}

function renderButtons(buttons, links, profile, email) {
  const grid = $('#grid');
  if (!grid) return;

  ACTIVE_LINKS = links || {};
  ACTIVE_PROFILE = profile || null;
  ACTIVE_EMAIL = String(email || '').toLowerCase();

  const prefs = getSectionPrefs(ACTIVE_EMAIL);
  const collapsedMap = prefs?.collapsed || {};
  const visibleButtons = (buttons || []).filter((button) => !INTERNAL_BUTTONS.has(button.id));
  const sections = groupBySection(visibleButtons);
  const parts = [];

  for (const [section, items] of sections.entries()) {
    const isCollapsed = !!collapsedMap[String(section)];
    const sectionId = `sec_${String(section).toLowerCase().replace(/\s+/g, '_').replace(/[^\w]/g, '')}_${Math.random().toString(16).slice(2, 7)}`;

    parts.push(`
      <div class="secBlock" data-sec="${escapeHtml(section)}" style="grid-column: 1 / -1;">
        <button
          type="button"
          class="secTitle"
          data-sec-toggle="${escapeHtml(section)}"
          aria-expanded="${isCollapsed ? 'false' : 'true'}"
          aria-controls="${sectionId}"
          style="width:100%; text-align:left; background:transparent; border:0; padding:12px 6px 8px; cursor:pointer;"
        >
          ${escapeHtml(section)}
          <span style="margin-left:auto; font-weight:900; opacity:.65;">${isCollapsed ? '+' : '-'}</span>
        </button>
      </div>
    `);

    parts.push(`
      <div class="secItems" id="${sectionId}" data-sec-items="${escapeHtml(section)}" style="display:${isCollapsed ? 'none' : 'contents'};">
    `);

    for (const button of items) {
      const meta = getButtonMeta(button, ACTIVE_LINKS);
      parts.push(`
        <button
          class="${escapeHtml(meta.cls)}"
          type="button"
          data-id="${escapeHtml(button.id)}"
          aria-label="${escapeHtml(meta.title)}"
          ${meta.disabled ? 'disabled' : ''}
        >
          <div class="tileTop">
            <div class="ico" aria-hidden="true">${escapeHtml(button.icon)}</div>
            ${meta.badgeHtml}
          </div>
          <div class="tileText">
            <div class="tTitle">${escapeHtml(meta.title)}</div>
            <div class="tSub">${escapeHtml(meta.subtitle)}</div>
          </div>
        </button>
      `);
    }

    parts.push('</div>');
  }

  grid.innerHTML = parts.join('');

  if (!grid.__boundClick) {
    grid.__boundClick = true;

    grid.addEventListener('click', async (event) => {
      const sectionToggle = event.target.closest('[data-sec-toggle]');
      if (sectionToggle) {
        const sectionName = sectionToggle.getAttribute('data-sec-toggle') || '';
        const expanded = sectionToggle.getAttribute('aria-expanded') === 'true';
        const nextExpanded = !expanded;

        sectionToggle.setAttribute('aria-expanded', nextExpanded ? 'true' : 'false');
        const marker = sectionToggle.querySelector('span');
        if (marker) marker.textContent = nextExpanded ? '-' : '+';

        const container = grid.querySelector(`[data-sec-items="${CSS.escape(sectionName)}"]`);
        if (container) container.style.display = nextExpanded ? 'contents' : 'none';

        setSectionCollapsed(ACTIVE_EMAIL, sectionName, !nextExpanded);
        return;
      }

      const btn = event.target.closest('button[data-id]');
      if (!btn) return;

      const id = btn.getAttribute('data-id');
      await triggerAccess(id);
    }, { passive: false });
  }

  applyShiftTileUi();
}

function updateHeroSummary() {
  const areas = getAllowedAreaIds();
  const areaLabels = areas.map(getAreaLabel);
  const model = getShiftUiModel();

  const heroSummary = document.getElementById('hero-summary');
  const heroAreaList = document.getElementById('hero-area-list');
  const heroAreas = document.getElementById('hero-areas');
  const heroShiftTitle = document.getElementById('hero-shift-title');
  const heroShiftSubtitle = document.getElementById('hero-shift-subtitle');
  const heroStudentsCount = document.getElementById('hero-students-count');
  const heroAttendanceCount = document.getElementById('hero-attendance-count');
  const heroLogsCount = document.getElementById('hero-logs-count');
  const heroCalendarCount = document.getElementById('hero-calendar-count');
  const heroScheduleCount = document.getElementById('hero-schedule-count');
  const heroShiftBtn = document.getElementById('btn-hero-shift');
  const pendingFocusBtn = document.getElementById('btn-pending-shift');
  const pendingBanner = document.getElementById('pending-shift-banner');
  const pendingBannerBtn = document.getElementById('btn-pending-shift-banner');
  const pendingCopy = document.getElementById('pending-shift-copy');

  if (heroSummary) {
    const who = ACTIVE_PROFILE?.label || prettyName(CURRENT_USER, ACTIVE_EMAIL);
    const areaText = areaLabels.length ? areaLabels.join(' / ') : 'Sin area asignada';
    heroSummary.textContent = `${who}. Accede primero a jornada, calendario, horario y seguimiento docente desde este panel.`;
  }

  if (heroAreaList) {
    heroAreaList.innerHTML = areaLabels.map((label) => `<span class="heroChip">${escapeHtml(label)}</span>`).join('');
  }

  if (heroAreas) heroAreas.textContent = areaLabels.length ? areaLabels.join(' / ') : '-';
  if (heroShiftTitle) heroShiftTitle.textContent = model.title;
  if (heroShiftSubtitle) heroShiftSubtitle.textContent = model.subtitle;
  if (heroStudentsCount) heroStudentsCount.textContent = String(DATA_STATE.students.length || 0);
  if (heroAttendanceCount) heroAttendanceCount.textContent = String(DATA_STATE.attendance.length || 0);
  if (heroLogsCount) heroLogsCount.textContent = String(DATA_STATE.logs.length || 0);
  if (heroCalendarCount) heroCalendarCount.textContent = String(DATA_STATE.calendar.length || 0);
  if (heroScheduleCount) heroScheduleCount.textContent = String(DATA_STATE.schedules.length || 0);
  if (heroShiftBtn) heroShiftBtn.textContent = SHIFT_STATE.pending ? 'Revisar jornada' : model.title;
  if (pendingFocusBtn) pendingFocusBtn.hidden = !SHIFT_STATE.pending;
  if (pendingBannerBtn) pendingBannerBtn.hidden = false;

  if (pendingBanner && pendingCopy) {
    if (SHIFT_STATE.pending) {
      pendingBanner.hidden = false;
      pendingCopy.textContent = `Tu sesion del ${formatDateLabel(SHIFT_STATE.pending.date)} sigue abierta. Registra la hora de cierre manualmente.`;
    } else {
      pendingBanner.hidden = true;
      pendingCopy.textContent = '';
    }
  }
}

function syncShellUi() {
  if (CURRENT_USER && ACTIVE_EMAIL) {
    renderButtons(HUB.buttons, ACTIVE_LINKS, ACTIVE_PROFILE, ACTIVE_EMAIL);
  }
  updateHeroSummary();
}

function renderSearchResultItem(button) {
  const meta = getButtonMeta(button, ACTIVE_LINKS);
  return `
    <button class="modalItem" type="button" data-open-id="${escapeHtml(button.id)}">
      <div class="modalItemTitle">${escapeHtml(meta.title)}</div>
      <div class="modalItemSub">${escapeHtml(button.section || 'Acceso')} · ${escapeHtml(meta.subtitle)}</div>
    </button>
  `;
}

function renderSearchResults(queryText = '') {
  const container = document.getElementById('search-results');
  if (!container) return;

  const q = String(queryText || '').trim().toLowerCase();
  let results = [];

  if (!q) {
    results = CORE_BUTTON_IDS.map(findButtonById).filter(Boolean);
  } else {
    results = getAllButtons().filter((button) => {
      const target = `${button.title} ${button.subtitle} ${button.section} ${button.id}`.toLowerCase();
      return target.includes(q);
    }).slice(0, 12);
  }

  if (!results.length) {
    container.innerHTML = renderEmptyState('Sin resultados', 'No encontre accesos con ese criterio.');
    return;
  }

  container.innerHTML = results.map(renderSearchResultItem).join('');
}

function getFavoriteButtons() {
  const recentButtons = getRecentIds().map(findButtonById).filter(Boolean);
  if (recentButtons.length) return recentButtons;
  return CORE_BUTTON_IDS.map(findButtonById).filter(Boolean);
}

function renderFavoritesList() {
  const container = document.getElementById('favorites-list');
  if (!container) return;

  const buttons = getFavoriteButtons();
  if (!buttons.length) {
    container.innerHTML = renderEmptyState('Sin accesos guardados', 'Empieza usando modulos y aqui veras tus accesos recientes.');
    return;
  }

  container.innerHTML = buttons.map(renderSearchResultItem).join('');
}

function openSearchModal() {
  renderSearchResults('');
  openModal('modal-search');
  const input = document.getElementById('search-input');
  if (input) {
    input.value = '';
    setTimeout(() => input.focus(), 0);
  }
}

function openFavoritesModal() {
  renderFavoritesList();
  openModal('modal-favorites');
}

function wireModalShell() {
  if (modalShellBound) return;
  modalShellBound = true;

  const closers = [
    ['modal-search', 'btn-search-close'],
    ['modal-favorites', 'btn-favorites-close'],
    ['modal-workspace', 'btn-workspace-close']
  ];

  for (const [modalId, closeId] of closers) {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeId);

    closeBtn?.addEventListener('click', () => closeModal(modalId));
    modal?.addEventListener('click', (event) => {
      if (event.target === modal) closeModal(modalId);
    });
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      const topMost = [...MODAL_IDS].reverse().find((id) => {
        const el = document.getElementById(id);
        return !!el && !el.hidden;
      });

      if (topMost) {
        closeModal(topMost);
      }
    }
  });
}

function wireSearchAndFavorites() {
  if (searchBound) return;
  searchBound = true;

  document.getElementById('btn-open-search')?.addEventListener('click', openSearchModal);
  document.getElementById('btn-open-favorites')?.addEventListener('click', openFavoritesModal);

  document.getElementById('search-input')?.addEventListener('input', (event) => {
    renderSearchResults(event.target.value || '');
  });

  document.getElementById('search-results')?.addEventListener('click', async (event) => {
    const item = event.target.closest('[data-open-id]');
    if (!item) return;
    closeModal('modal-search');
    await triggerAccess(item.getAttribute('data-open-id'));
  });

  document.getElementById('favorites-list')?.addEventListener('click', async (event) => {
    const item = event.target.closest('[data-open-id]');
    if (!item) return;
    closeModal('modal-favorites');
    await triggerAccess(item.getAttribute('data-open-id'));
  });
}

function wireDrawerHandlers(auth) {
  if (drawerBound) return;
  drawerBound = true;

  const { btnMenu, overlay, drawer, btnClose } = drawerEls();
  if (!overlay || !drawer) return;

  btnMenu?.addEventListener('click', toggleDrawer);
  btnClose?.addEventListener('click', closeDrawer);
  overlay.addEventListener('click', closeDrawer);

  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isDrawerOpen()) closeDrawer();
  });

  drawer.addEventListener('click', async (event) => {
    const btn = event.target.closest('[data-action]');
    if (!btn) return;

    const action = String(btn.getAttribute('data-action') || '').trim();
    if (!action) return;

    closeDrawer();

    if (action === 'logout') {
      await doLogout(auth);
      return;
    }

    if (action === 'install') {
      document.getElementById('btn-install-2')?.click?.();
      return;
    }

    if (action === 'switchHub') {
      toast('Este acceso esta configurado solo para el hub de Docentes.');
      return;
    }

    if (action === 'support') {
      openExternal('mailto:alekcaballeromusic@gmail.com?subject=Soporte%20Docentes%20Hub');
      return;
    }

    if (action === 'refreshApp') {
      await updateAppNow();
      return;
    }

    if (action === 'open:search') {
      openSearchModal();
      return;
    }

    if (action === 'open:favorites') {
      openFavoritesModal();
      return;
    }

    if (/^open:/i.test(action)) {
      await triggerAccess(action.split(':')[1] || '');
    }
  }, { passive: false });
}

function renderStudentCard(student) {
  const summaryParts = [
    student.groupName || '',
    student.siteName || '',
    student.guardianPhone || ''
  ].filter(Boolean);

  return `
    <button class="recordCard" type="button" data-module-action="student-edit" data-student-id="${escapeHtml(student.id)}">
      <div class="recordCardTop">
        <div>
          <div class="recordTitle">${escapeHtml(student.fullName || 'Estudiante sin nombre')}</div>
          <div class="recordMeta">${escapeHtml(getAreaLabel(student.areaId))}</div>
        </div>
        <span class="statusPill ${student.active === false ? 'statusMuted' : 'statusOk'}">${student.active === false ? 'Inactivo' : 'Activo'}</span>
      </div>
      <div class="recordBody">${escapeHtml(summaryParts.join(' · ') || 'Sin datos complementarios todavia.')}</div>
    </button>
  `;
}

function renderAttendanceCard(record) {
  const totals = record.totals || computeAttendanceTotals(record.entries || []);
  return `
    <button class="recordCard" type="button" data-module-action="attendance-edit" data-attendance-id="${escapeHtml(record.id)}">
      <div class="recordCardTop">
        <div>
          <div class="recordTitle">${escapeHtml(record.sessionName || 'Sesion sin nombre')}</div>
          <div class="recordMeta">${escapeHtml(formatDateLabel(record.date))} · ${escapeHtml(getAreaLabel(record.areaId))}</div>
        </div>
        <span class="statusPill statusInfo">${escapeHtml(String((record.entries || []).length))} estudiantes</span>
      </div>
      <div class="recordBody">
        Presente ${totals.presente || 0} · Ausente ${totals.ausente || 0} · Tarde ${totals.tarde || 0} · Excusado ${totals.excusado || 0}
      </div>
    </button>
  `;
}

function renderLogCard(record) {
  const excerpt = record.activities || record.achievements || record.notes || 'Sin resumen corto.';
  const photos = Array.isArray(record.photos) ? record.photos : [];
  const firstPhoto = photos[0]?.url || '';
  return `
    <button class="recordCard" type="button" data-module-action="log-edit" data-log-id="${escapeHtml(record.id)}">
      <div class="recordCardTop">
        <div>
          <div class="recordTitle">${escapeHtml(record.sessionName || 'Bitacora sin titulo')}</div>
          <div class="recordMeta">${escapeHtml(formatDateLabel(record.date))} · ${escapeHtml(getAreaLabel(record.areaId))}</div>
        </div>
        <span class="statusPill statusInfo">${escapeHtml(record.siteName || 'Sin sede')}</span>
      </div>
      <div class="recordBody">${escapeHtml(excerpt.slice(0, 140))}</div>
      ${firstPhoto ? `<div class="recordPhotoThumb"><img src="${escapeHtml(firstPhoto)}" alt="Foto de ${escapeHtml(record.sessionName || 'bitacora')}" loading="lazy" /></div>` : ''}
      ${photos.length ? `<div class="recordPhotoMeta">📷 ${escapeHtml(String(photos.length))} foto(s)</div>` : ''}
    </button>
  `;
}

function renderLogGallery(areaId) {
  const logsWithPhotos = DATA_STATE.logs.filter((item) => {
    if (!Array.isArray(item.photos) || !item.photos.length) return false;
    if (areaId === 'all') return true;
    return item.areaId === areaId;
  });

  if (!logsWithPhotos.length) {
    return `<div class="galleryEmpty">Aun no hay fotos en bitacoras para este filtro.</div>`;
  }

  const cards = logsWithPhotos.flatMap((record) => {
    const photos = Array.isArray(record.photos) ? record.photos.filter((item) => item?.url) : [];
    return photos.map((photo, index) => `
      <button class="galleryCard" type="button" data-module-action="log-edit" data-log-id="${escapeHtml(record.id)}">
        <img src="${escapeHtml(photo.url || '')}" alt="Foto ${escapeHtml(String(index + 1))} de ${escapeHtml(record.sessionName || 'bitacora')}" loading="lazy" />
        <span class="galleryMeta">${escapeHtml(record.sessionName || 'Bitacora')} · ${escapeHtml(formatDateLabel(record.date))}</span>
      </button>
    `);
  }).join('');

  return `<div class="galleryGrid">${cards}</div>`;
}

function renderAttendanceStatusOptions(selected = 'presente') {
  return ATTENDANCE_STATUSES.map((item) =>
    `<option value="${escapeHtml(item.value)}"${item.value === selected ? ' selected' : ''}>${escapeHtml(item.label)}</option>`
  ).join('');
}

function renderShiftModule() {
  const model = getShiftUiModel();
  const shift = SHIFT_STATE.data;
  const pending = SHIFT_STATE.pending;

  return `
    <div class="workspaceStack">
      <section class="moduleSurface moduleSurfaceStrong">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${escapeHtml(model.title)}</h4>
            <p class="moduleIntro">Control rapido de jornada y seguimiento de cierres pendientes.</p>
          </div>
          <span class="statusPill ${pending ? 'statusWarn' : shift?.status === 'open' ? 'statusOk' : 'statusInfo'}">${escapeHtml(model.badge)}</span>
        </div>

        <div class="infoGrid">
          <article class="infoCard">
            <span class="infoLabel">Fecha</span>
            <strong class="infoValue">${escapeHtml(formatDateLabel(SHIFT_STATE.date || getBogotaDateParts().date))}</strong>
          </article>
          <article class="infoCard">
            <span class="infoLabel">Entrada</span>
            <strong class="infoValue">${escapeHtml(shift?.checkIn ? formatDateTimeFromIso(shift.checkIn) : 'Sin registrar')}</strong>
          </article>
          <article class="infoCard">
            <span class="infoLabel">Salida</span>
            <strong class="infoValue">${escapeHtml(shift?.checkOut ? formatDateTimeFromIso(shift.checkOut) : shift?.status === 'open' ? 'Sesion en curso' : 'Sin registrar')}</strong>
          </article>
        </div>

        <div class="formActions">
          <button class="btnPrimary" type="button" data-module-action="shift-toggle" ${SHIFT_STATE.loading || SHIFT_STATE.busy ? 'disabled' : ''}>${escapeHtml(pending ? 'Revisar cierre pendiente' : model.title)}</button>
          <button class="btnGhost" type="button" data-module-action="shift-refresh">Actualizar estado</button>
        </div>
      </section>

      ${
        pending
          ? `
            <section class="moduleSurface moduleSurfaceWarn">
              <div class="moduleSurfaceHead">
                <div>
                  <h4 class="moduleTitle">Cerrar sesion pendiente</h4>
                  <p class="moduleIntro">La ultima sesion abierta fue el ${escapeHtml(formatDateLabel(pending.date))}. Registra la hora de cierre manual.</p>
                </div>
              </div>

              <form id="pending-shift-form" class="formGrid">
                <label class="field">
                  <span class="fieldLabel">Sesion abierta</span>
                  <input class="input" type="text" value="${escapeHtml(formatDateTimeFromIso(pending.checkIn))}" disabled />
                </label>

                <label class="field">
                  <span class="fieldLabel">Area de trabajo</span>
                  <input class="input" type="text" value="${escapeHtml(getAllowedAreaIds().map(getAreaLabel).join(' / '))}" disabled />
                </label>

                <label class="field fieldSpan2">
                  <span class="fieldLabel">Fecha y hora de cierre</span>
                  <input class="input" type="datetime-local" name="manualCheckOut" required value="${escapeHtml(getCurrentBogotaDateTimeInputValue())}" />
                </label>

                <label class="field fieldSpan2">
                  <span class="fieldLabel">Nota opcional</span>
                  <textarea class="input textareaInput" name="manualNote" rows="3" placeholder="Ej: cierre registrado al dia siguiente por olvido al salir."></textarea>
                </label>

                <div class="formActions fieldSpan2">
                  <button class="btnPrimary" type="submit">Cerrar sesion pendiente</button>
                </div>
              </form>
            </section>
          `
          : `
            <section class="moduleSurface">
              ${renderEmptyState('Sin cierres pendientes', 'Tus jornadas anteriores no tienen sesiones abiertas por cerrar.')}
            </section>
          `
      }
    </div>
  `;
}

function renderStudentsModule() {
  MODULE_STATE.students.filterArea = normalizeStudentsFilter(MODULE_STATE.students.filterArea);
  const students = getScopedStudents(MODULE_STATE.students.filterArea);
  const draft = getStudentDraft();

  return `
    <div class="workspaceGrid">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Base de estudiantes</h4>
            <p class="moduleIntro">Cada docente ve y gestiona solo los estudiantes de sus areas autorizadas.</p>
          </div>
          <button class="btnGhost" type="button" data-module-action="student-new">Nuevo estudiante</button>
        </div>

        <div class="toolbarRow">
          <label class="field slimField">
            <span class="fieldLabel">Filtrar por area</span>
            <select class="input" id="students-area-filter">
              ${renderAreaOptions({ includeAll: true, selected: MODULE_STATE.students.filterArea })}
            </select>
          </label>
          <div class="toolbarMeta">${escapeHtml(String(students.length))} resultados</div>
        </div>

        <div class="recordList">
          ${students.length ? students.map(renderStudentCard).join('') : renderEmptyState('Sin estudiantes cargados', 'Empieza creando la base del area desde este mismo modulo.')}
        </div>
      </section>

      <section class="moduleSurface moduleSurfaceForm">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${draft.id ? 'Editar estudiante' : 'Agregar estudiante'}</h4>
            <p class="moduleIntro">La informacion se guarda en Firebase y luego alimenta asistencia y bitacoras.</p>
          </div>
          ${draft.id ? '<button class="btnGhost" type="button" data-module-action="student-new">Nuevo</button>' : ''}
        </div>

        <form id="student-form" class="formGrid">
          <input type="hidden" name="studentId" value="${escapeHtml(draft.id)}" />

          <label class="field fieldSpan2">
            <span class="fieldLabel">Nombre completo</span>
            <input class="input" name="fullName" type="text" autocomplete="off" required value="${escapeHtml(draft.fullName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Area</span>
            <select class="input" name="areaId" required>
              ${renderAreaOptions({ includeAll: false, selected: draft.areaId })}
            </select>
          </label>

          <label class="field">
            <span class="fieldLabel">Documento o identificacion</span>
            <input class="input" name="documentNumber" type="text" autocomplete="off" value="${escapeHtml(draft.documentNumber)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Grupo o proceso</span>
            <input class="input" name="groupName" type="text" autocomplete="off" value="${escapeHtml(draft.groupName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Sede o lugar</span>
            <input class="input" name="siteName" type="text" autocomplete="off" value="${escapeHtml(draft.siteName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Acudiente</span>
            <input class="input" name="guardianName" type="text" autocomplete="off" value="${escapeHtml(draft.guardianName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Telefono acudiente</span>
            <input class="input" name="guardianPhone" type="text" autocomplete="off" value="${escapeHtml(draft.guardianPhone)}" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Notas</span>
            <textarea class="input textareaInput" name="notes" rows="4" placeholder="Observaciones utiles para el equipo docente.">${escapeHtml(draft.notes)}</textarea>
          </label>

          <label class="checkboxRow fieldSpan2">
            <input type="checkbox" name="active" ${draft.active ? 'checked' : ''} />
            <span>Estudiante activo</span>
          </label>

          <div class="formActions fieldSpan2">
            <button class="btnPrimary" type="submit">${draft.id ? 'Guardar cambios' : 'Guardar estudiante'}</button>
            ${draft.id ? '<button class="btnGhost" type="button" data-module-action="student-new">Cancelar edicion</button>' : ''}
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderAttendanceModule() {
  const draft = getAttendanceDraft();
  const areaId = userCanAccessArea(draft.areaId) ? draft.areaId : getPrimaryAreaId();
  const students = getStudentsForArea(areaId);
  MODULE_STATE.attendance.areaId = areaId;

  return `
    <div class="workspaceGrid">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Asistencias recientes</h4>
            <p class="moduleIntro">Los formularios se alimentan con la base de estudiantes del area seleccionada.</p>
          </div>
          <button class="btnGhost" type="button" data-module-action="attendance-new">Nueva asistencia</button>
        </div>

        <div class="recordList">
          ${DATA_STATE.attendance.length ? DATA_STATE.attendance.map(renderAttendanceCard).join('') : renderEmptyState('Sin asistencias guardadas', 'Cuando registres la primera asistencia aparecera aqui para consulta y edicion.')}
        </div>
      </section>

      <section class="moduleSurface moduleSurfaceForm">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${draft.id ? 'Editar asistencia' : 'Tomar asistencia'}</h4>
            <p class="moduleIntro">Selecciona area, fecha y luego marca la asistencia de los estudiantes activos.</p>
          </div>
          ${draft.id ? '<button class="btnGhost" type="button" data-module-action="attendance-new">Nueva</button>' : ''}
        </div>

        <form id="attendance-form" class="formGrid">
          <input type="hidden" name="attendanceId" value="${escapeHtml(draft.id)}" />

          <label class="field">
            <span class="fieldLabel">Area</span>
            <select class="input" name="areaId" required>
              ${renderAreaOptions({ includeAll: false, selected: areaId })}
            </select>
          </label>

          <label class="field">
            <span class="fieldLabel">Fecha</span>
            <input class="input" name="date" type="date" required value="${escapeHtml(draft.date)}" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Nombre de la clase o sesion</span>
            <input class="input" name="sessionName" type="text" autocomplete="off" required value="${escapeHtml(draft.sessionName)}" placeholder="Ej: Tecnica basica, Ensayo general, Clase grupal" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Sede o lugar</span>
            <input class="input" name="siteName" type="text" autocomplete="off" value="${escapeHtml(draft.siteName)}" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Observaciones</span>
            <textarea class="input textareaInput" name="notes" rows="4" placeholder="Observaciones generales de asistencia, novedades o seguimiento.">${escapeHtml(draft.notes)}</textarea>
          </label>

          <div class="rosterPanel fieldSpan2">
            <div class="rosterHead">
              <strong>Lista del area</strong>
              <span>${escapeHtml(String(students.length))} estudiantes activos</span>
            </div>
            ${
              students.length
                ? students.map((student) => `
                    <div class="rosterRow">
                      <div>
                        <div class="recordTitle">${escapeHtml(student.fullName || 'Estudiante')}</div>
                        <div class="recordMeta">${escapeHtml([student.groupName || '', student.siteName || ''].filter(Boolean).join(' · ') || getAreaLabel(student.areaId))}</div>
                      </div>
                      <select class="input compactInput" name="attendance-status-${escapeHtml(student.id)}">
                        ${renderAttendanceStatusOptions(draft.rosterMap[student.id] || 'presente')}
                      </select>
                    </div>
                  `).join('')
                : renderEmptyState('Sin estudiantes activos', 'Agrega primero estudiantes en esta area para poder tomar asistencia.')
            }
          </div>

          <div class="formActions fieldSpan2">
            <button class="btnPrimary" type="submit" ${students.length ? '' : 'disabled'}>${draft.id ? 'Guardar asistencia' : 'Registrar asistencia'}</button>
            ${draft.id ? '<button class="btnGhost" type="button" data-module-action="attendance-new">Cancelar edicion</button>' : ''}
          </div>
        </form>
      </section>
    </div>
  `;
}

function renderLogsModule() {
  const draft = getLogDraft();
  const areaId = userCanAccessArea(draft.areaId) ? draft.areaId : getPrimaryAreaId();
  const galleryAreaId = MODULE_STATE.logs.galleryAreaId || 'all';
  const showGallery = !!MODULE_STATE.logs.showGallery;
  const attachedPhotos = Array.isArray(draft.photos) ? draft.photos : [];
  MODULE_STATE.logs.areaId = areaId;

  return `
    <div class="workspaceGrid">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Bitacoras de clase</h4>
            <p class="moduleIntro">Consulta bitacoras anteriores y edita una existente sin salir de la app.</p>
          </div>
          <div class="toolbarRow">
            <button class="btnGhost" type="button" data-module-action="log-toggle-gallery">${showGallery ? 'Ocultar galeria de fotos' : 'Ver galeria de fotos'}</button>
            <button class="btnGhost" type="button" data-module-action="log-new">Nueva bitacora</button>
          </div>
        </div>

        <div class="recordList">
          ${DATA_STATE.logs.length ? DATA_STATE.logs.map(renderLogCard).join('') : renderEmptyState('Sin bitacoras registradas', 'Cuando completes la primera bitacora aparecera aqui para lectura y edicion.')}
        </div>

        ${showGallery ? `
        <section class="logGallerySection">
          <div class="moduleSurfaceHead">
            <div>
              <h5 class="moduleTitle">Galeria de imagenes</h5>
              <p class="moduleIntro">Vista visual de fotos cargadas en bitacoras.</p>
            </div>
          </div>
          <label class="field">
            <span class="fieldLabel">Filtrar galeria por area</span>
            <select class="input" name="galleryAreaId">
              <option value="all"${galleryAreaId === 'all' ? ' selected' : ''}>Todas mis areas</option>
              ${renderAreaOptions({ includeAll: false, selected: galleryAreaId })}
            </select>
          </label>
          ${renderLogGallery(galleryAreaId)}
        </section>
        ` : ''}
      </section>

      <section class="moduleSurface moduleSurfaceForm">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${draft.id ? 'Editar bitacora' : 'Nueva bitacora'}</h4>
            <p class="moduleIntro">Registra lo trabajado, los avances y los siguientes pasos del proceso.</p>
          </div>
          ${draft.id ? '<button class="btnGhost" type="button" data-module-action="log-new">Nueva</button>' : ''}
        </div>

        <form id="log-form" class="formGrid">
          <input type="hidden" name="logId" value="${escapeHtml(draft.id)}" />

          <label class="field">
            <span class="fieldLabel">Area</span>
            <select class="input" name="areaId" required>
              ${renderAreaOptions({ includeAll: false, selected: areaId })}
            </select>
          </label>

          <label class="field">
            <span class="fieldLabel">Fecha</span>
            <input class="input" name="date" type="date" required value="${escapeHtml(draft.date)}" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Clase o sesion</span>
            <input class="input" name="sessionName" type="text" autocomplete="off" required value="${escapeHtml(draft.sessionName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Sede o lugar</span>
            <input class="input" name="siteName" type="text" autocomplete="off" value="${escapeHtml(draft.siteName)}" />
          </label>

          <label class="field">
            <span class="fieldLabel">Grupo o estudiantes</span>
            <input class="input" name="studentGroup" type="text" autocomplete="off" value="${escapeHtml(draft.studentGroup)}" placeholder="Ej: Grupo infantil, Semillero, Porras avanzadas" />
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Objetivo de la sesion</span>
            <textarea class="input textareaInput" name="objective" rows="3">${escapeHtml(draft.objective)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Actividades realizadas</span>
            <textarea class="input textareaInput" name="activities" rows="4">${escapeHtml(draft.activities)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Logros o avances</span>
            <textarea class="input textareaInput" name="achievements" rows="4">${escapeHtml(draft.achievements)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Dificultades o alertas</span>
            <textarea class="input textareaInput" name="challenges" rows="4">${escapeHtml(draft.challenges)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Siguientes pasos</span>
            <textarea class="input textareaInput" name="followUp" rows="4">${escapeHtml(draft.followUp)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Notas adicionales</span>
            <textarea class="input textareaInput" name="notes" rows="4">${escapeHtml(draft.notes)}</textarea>
          </label>

          <label class="field fieldSpan2">
            <span class="fieldLabel">Fotos de evidencia obligatorias (hasta ${LOG_PHOTO_LIMIT})</span>
            <input class="input" name="photos" type="file" accept="image/*" multiple />
            <small class="fieldHint">Debes subir al menos una foto para guardar la bitacora. Maximo ${Math.floor(LOG_PHOTO_MAX_BYTES / 1024 / 1024)}MB por imagen.</small>
          </label>

          ${attachedPhotos.length ? `
          <div class="field fieldSpan2">
            <span class="fieldLabel">Fotos ya registradas</span>
            <div class="formPhotoGrid">
              ${attachedPhotos.map((photo, index) => `<a class="formPhotoLink" href="${escapeHtml(photo.url || '')}" target="_blank" rel="noreferrer"><img src="${escapeHtml(photo.url || '')}" alt="Foto ${escapeHtml(String(index + 1))}" loading="lazy" /></a>`).join('')}
            </div>
          </div>
          ` : ''}

          <div class="formActions fieldSpan2">
            <button class="btnPrimary" type="submit">${draft.id ? 'Guardar bitacora' : 'Registrar bitacora'}</button>
            ${draft.id ? '<button class="btnGhost" type="button" data-module-action="log-new">Cancelar edicion</button>' : ''}
          </div>
        </form>
      </section>
    </div>
  `;
}

function getRecordConfig(typeKey = MODULE_STATE.teacherRecords.activeType) {
  return TEACHER_RECORD_TYPES[typeKey] || TEACHER_RECORD_TYPES.diagnosticos;
}

function getAllTeacherRecords() {
  return Object.keys(TEACHER_RECORD_TYPES)
    .flatMap((typeKey) => (DATA_STATE.teacherRecords[typeKey] || []).map((item) => ({ ...item, typeKey })));
}

function getRecordDraft(typeKey = MODULE_STATE.teacherRecords.activeType, editingId = MODULE_STATE.teacherRecords.editingId) {
  const config = getRecordConfig(typeKey);
  const editing = (DATA_STATE.teacherRecords[typeKey] || []).find((item) => item.id === editingId);
  const base = {};
  for (const field of config.fields) {
    if (field.name === 'areaId') base.areaId = userCanAccessArea(MODULE_STATE.monthlyReports.areaId || MODULE_STATE.logs.areaId) ? (MODULE_STATE.monthlyReports.areaId || MODULE_STATE.logs.areaId) : getPrimaryAreaId();
    else if (field.type === 'date') base[field.name] = getBogotaDateParts().date;
    else if (field.type === 'month') base[field.name] = getCurrentMonthKey();
    else base[field.name] = '';
  }

  return {
    id: '',
    typeKey,
    type: config.type,
    photos: [],
    ...base,
    ...(editing || {})
  };
}

function renderRecordField(field, draft) {
  const value = draft[field.name] ?? '';
  if (field.type === 'area') {
    return `
      <label class="field">
        <span class="fieldLabel">${escapeHtml(field.label)}</span>
        <select class="input" name="${escapeHtml(field.name)}" ${field.required ? 'required' : ''}>
          ${renderAreaOptions({ includeAll: false, selected: value || getPrimaryAreaId() })}
        </select>
      </label>
    `;
  }

  if (field.type === 'textarea') {
    return `
      <label class="field fieldSpan2">
        <span class="fieldLabel">${escapeHtml(field.label)}</span>
        <textarea class="input textareaInput" name="${escapeHtml(field.name)}" rows="4" ${field.required ? 'required' : ''}>${escapeHtml(value)}</textarea>
      </label>
    `;
  }

  return `
    <label class="field${field.type === 'text' ? ' fieldSpan2' : ''}">
      <span class="fieldLabel">${escapeHtml(field.label)}</span>
      <input class="input" name="${escapeHtml(field.name)}" type="${escapeHtml(field.type || 'text')}" autocomplete="off" ${field.required ? 'required' : ''} value="${escapeHtml(value)}" />
    </label>
  `;
}

function getRecordTitle(record) {
  return record.projectName
    || record.centerGroupProcess
    || record.studentsOrGroup
    || record.sampleDescription
    || record.monthlySummary
    || getRecordConfig(record.typeKey).label;
}

function recordMatchesFilters(record, filters = {}) {
  if (filters.type && filters.type !== 'all' && record.typeKey !== filters.type) return false;
  if (filters.areaId && filters.areaId !== 'all' && record.areaId !== filters.areaId) return false;
  if (filters.month) {
    const key = String(record.month || record.date || '').slice(0, 7);
    if (key !== filters.month) return false;
  }
  if (filters.teacher) {
    const needle = filters.teacher.toLowerCase();
    const hay = `${record.teacherName || ''} ${record.teacherEmail || ''}`.toLowerCase();
    if (!hay.includes(needle)) return false;
  }
  if (filters.center) {
    const needle = filters.center.toLowerCase();
    if (!String(record.centerGroupProcess || '').toLowerCase().includes(needle)) return false;
  }
  return true;
}

function renderRecordCard(record, options = {}) {
  const config = getRecordConfig(record.typeKey);
  const photos = Array.isArray(record.photos) ? record.photos : [];
  return `
    <article class="recordCard">
      <div class="recordCardTop">
        <div>
          <div class="recordTitle">${escapeHtml(getRecordTitle(record))}</div>
          <div class="recordMeta">${escapeHtml([config.label, record.month || formatDateLabel(record.date || ''), record.areaName || getAreaLabel(record.areaId), record.teacherName].filter(Boolean).join(' · '))}</div>
        </div>
        ${options.canEdit ? `<button class="btnGhost" type="button" data-module-action="record-edit" data-record-type="${escapeHtml(record.typeKey)}" data-record-id="${escapeHtml(record.id)}">Editar</button>` : `<span class="statusPill statusOk">Enviado</span>`}
      </div>
      <div class="recordBody">${escapeHtml(record.monthlySummary || record.diagnosticObservations || record.description || record.sampleDescription || record.projectObjective || 'Registro guardado.')}</div>
      ${photos.length ? `<div class="recordPhotoMeta">📷 ${escapeHtml(String(photos.length))} foto(s)</div>` : ''}
    </article>
  `;
}

function renderRecordFilters(filters, scope, options = {}) {
  const { lockType = '' } = options;
  return `
    <div class="recordFilters">
      <label class="field">
        <span class="fieldLabel">Mes</span>
        <input class="input" type="month" data-record-filter="${escapeHtml(scope)}" name="month" value="${escapeHtml(filters.month || '')}" />
      </label>
      <label class="field">
        <span class="fieldLabel">Docente</span>
        <input class="input" type="search" data-record-filter="${escapeHtml(scope)}" name="teacher" value="${escapeHtml(filters.teacher || '')}" placeholder="Nombre o correo" />
      </label>
      <label class="field">
        <span class="fieldLabel">Centro / grupo / proceso</span>
        <input class="input" type="search" data-record-filter="${escapeHtml(scope)}" name="center" value="${escapeHtml(filters.center || '')}" />
      </label>
      ${scope === 'teacherRecords' && !lockType ? `
      <label class="field">
        <span class="fieldLabel">Tipo</span>
        <select class="input" data-record-filter="${escapeHtml(scope)}" name="type">
          <option value="all"${filters.type === 'all' ? ' selected' : ''}>Todos</option>
          ${Object.entries(TEACHER_RECORD_TYPES).map(([key, item]) => `<option value="${escapeHtml(key)}"${filters.type === key ? ' selected' : ''}>${escapeHtml(item.label)}</option>`).join('')}
        </select>
      </label>` : ''}
      <label class="field">
        <span class="fieldLabel">Area artistica</span>
        <select class="input" data-record-filter="${escapeHtml(scope)}" name="areaId">
          <option value="all"${filters.areaId === 'all' ? ' selected' : ''}>Todas</option>
          ${renderAreaOptions({ includeAll: false, selected: filters.areaId || 'all' })}
        </select>
      </label>
    </div>
  `;
}

function renderTeacherRecordsModule(typeLock = '') {
  const activeType = MODULE_STATE.teacherRecords.activeType;
  const config = getRecordConfig(activeType);
  const draft = getRecordDraft(activeType);
  const filters = MODULE_STATE.teacherRecords.filters;
  const visible = getAllTeacherRecords()
    .filter((record) => record.typeKey !== 'informesMensuales')
    .filter((record) => !typeLock || record.typeKey === typeLock)
    .filter((record) => recordMatchesFilters(record, filters));

  return `
    <div class="workspaceGrid">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${escapeHtml(typeLock ? config.plural : 'Registros docentes')}</h4>
            <p class="moduleIntro">${escapeHtml(typeLock ? getRecordModuleIntro(typeLock) : 'Diagnosticos, proyectos y muestras de proceso guardados en Firebase.')}</p>
          </div>
          <span class="statusPill statusInfo">${escapeHtml(String(visible.length))} registro(s)</span>
        </div>
        ${typeLock ? '' : `<div class="segmentedRow" role="tablist" aria-label="Tipo de registro">
          ${['diagnosticos', 'proyectos', 'muestrasProceso'].map((key) => `<button class="segmentBtn${activeType === key ? ' is-active' : ''}" type="button" data-module-action="record-type" data-record-type="${escapeHtml(key)}">${escapeHtml(TEACHER_RECORD_TYPES[key].label)}</button>`).join('')}
        </div>`}
        ${isAdminUser() ? renderRecordFilters(filters, 'teacherRecords', { lockType: typeLock }) : ''}
        <div class="recordList">
          ${visible.length ? visible.map((record) => renderRecordCard(record, { canEdit: record.teacherId === CURRENT_USER?.uid || isAdminUser() })).join('') : renderEmptyState('Sin registros', 'Cuando diligencies un registro aparecera aqui.')}
        </div>
      </section>

      <section class="moduleSurface moduleSurfaceForm">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${draft.id ? `Editar ${config.label.toLowerCase()}` : `Nuevo ${config.label.toLowerCase()}`}</h4>
            <p class="moduleIntro">Completa la informacion principal y adjunta evidencias si aplica.</p>
          </div>
          ${draft.id ? '<button class="btnGhost" type="button" data-module-action="record-new">Nuevo</button>' : ''}
        </div>
        <form id="teacher-record-form" class="formGrid">
          <input type="hidden" name="recordId" value="${escapeHtml(draft.id)}" />
          <input type="hidden" name="typeKey" value="${escapeHtml(activeType)}" />
          ${config.fields.map((field) => renderRecordField(field, draft)).join('')}
          ${renderRecordPhotoInput(draft)}
          <div class="formActions fieldSpan2">
            <button class="btnPrimary" type="submit">${draft.id ? 'Guardar registro' : 'Guardar registro'}</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

function getRecordModuleIntro(typeKey) {
  if (typeKey === 'diagnosticos') return 'Se realiza al iniciar con un grupo nuevo o un proceso nuevo.';
  if (typeKey === 'proyectos') return 'Registro semestral del proyecto pedagogico del grupo o proceso.';
  if (typeKey === 'muestrasProceso') return 'Resultado del proyecto con evidencia fotografica y videos.';
  return 'Registro docente guardado en Firebase.';
}

function renderSingleRecordModule(typeKey) {
  MODULE_STATE.teacherRecords.activeType = typeKey;
  return renderTeacherRecordsModule(typeKey);
}

function renderRecordPhotoInput(draft) {
  const config = getRecordConfig(draft.typeKey);
  const photos = Array.isArray(draft.photos) ? draft.photos : [];
  const acceptsVideo = String(config.evidenceAccept || '').includes('video');
  return `
    <label class="field fieldSpan2">
      <span class="fieldLabel">${escapeHtml(config.evidenceLabel || 'Evidencias/fotos opcionales')}${config.evidenceRequired ? ' *' : ''}</span>
      <input class="input" name="photos" type="file" accept="${escapeHtml(config.evidenceAccept || 'image/*')}" multiple />
      <small class="fieldHint">${escapeHtml(config.evidenceHint || `Puedes cargar hasta ${RECORD_PHOTO_LIMIT} imagenes. Maximo ${Math.floor(RECORD_PHOTO_MAX_BYTES / 1024 / 1024)}MB por imagen.`)}</small>
    </label>
    ${photos.length ? `
    <div class="field fieldSpan2">
      <span class="fieldLabel">Evidencias registradas</span>
      <div class="formPhotoGrid">
        ${photos.map((photo, index) => `<a class="formPhotoLink" href="${escapeHtml(photo.url || '')}" target="_blank" rel="noreferrer">${acceptsVideo && String(photo.type || '').startsWith('video/') ? `<video src="${escapeHtml(photo.url || '')}" muted playsinline preload="metadata"></video>` : `<img src="${escapeHtml(photo.url || '')}" alt="Evidencia ${escapeHtml(String(index + 1))}" loading="lazy" />`}</a>`).join('')}
      </div>
    </div>` : ''}
  `;
}

function findMonthlyReportForDraft(draft) {
  return (DATA_STATE.teacherRecords.informesMensuales || []).find((item) =>
    item.id !== draft.id
    && item.teacherId === CURRENT_USER?.uid
    && item.month === draft.month
    && String(item.centerGroupProcess || '').trim().toLowerCase() === String(draft.centerGroupProcess || '').trim().toLowerCase()
    && item.areaId === draft.areaId
  );
}

function renderMonthlyReportsModule() {
  const typeKey = 'informesMensuales';
  const draft = getRecordDraft(typeKey, MODULE_STATE.monthlyReports.editingId);
  const filters = MODULE_STATE.monthlyReports.filters;
  const currentMonth = getCurrentMonthKey();
  const sentCurrentMonth = (DATA_STATE.teacherRecords.informesMensuales || []).some((item) => item.teacherId === CURRENT_USER?.uid && item.month === currentMonth);
  const visible = (DATA_STATE.teacherRecords.informesMensuales || []).filter((record) => recordMatchesFilters(record, filters));

  return `
    <div class="workspaceGrid">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Informes mensuales</h4>
            <p class="moduleIntro">Diligencia y consulta el informe del mes por centro, grupo o proceso.</p>
          </div>
          <span class="statusPill ${sentCurrentMonth ? 'statusOk' : 'statusWarn'}">${sentCurrentMonth ? 'Mes enviado' : 'Pendiente del mes'}</span>
        </div>
        ${renderRecordFilters(filters, 'monthlyReports')}
        <div class="recordList">
          ${visible.length ? visible.map((record) => renderRecordCard(record, { canEdit: record.teacherId === CURRENT_USER?.uid || isAdminUser() })).join('') : renderEmptyState('Sin informes', 'Aun no hay informes para estos filtros.')}
        </div>
      </section>

      <section class="moduleSurface moduleSurfaceForm">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">${draft.id ? 'Editar informe mensual' : 'Nuevo informe mensual'}</h4>
            <p class="moduleIntro">Si ya existe un informe para el mismo mes, centro/proceso y area, se evita duplicarlo.</p>
          </div>
          ${draft.id ? '<button class="btnGhost" type="button" data-module-action="monthly-new">Nuevo</button>' : ''}
        </div>
        <form id="monthly-report-form" class="formGrid">
          <input type="hidden" name="recordId" value="${escapeHtml(draft.id)}" />
          <input type="hidden" name="typeKey" value="informesMensuales" />
          ${TEACHER_RECORD_TYPES.informesMensuales.fields.map((field) => renderRecordField(field, draft)).join('')}
          ${renderRecordPhotoInput(draft)}
          <div class="formActions fieldSpan2">
            <button class="btnPrimary" type="submit">${draft.id ? 'Guardar informe' : 'Enviar informe mensual'}</button>
          </div>
        </form>
      </section>
    </div>
  `;
}

const ADMIN_EMAILS = new Set([
  'alekcaballeromusic@gmail.com',
  'catalina.medina.leal@gmail.com'
]);

function isAdminUser() {
  return ADMIN_EMAILS.has(String(ACTIVE_EMAIL || '').toLowerCase())
    || profileCanUseAllAreas(ACTIVE_PROFILE);
}

function normalizeDayLabel(value) {
  const raw = String(value || '').trim().toLowerCase();
  if (!raw) return '';
  const clean = raw.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const map = {
    lunes: 'Lunes',
    martes: 'Martes',
    miercoles: 'Miercoles',
    jueves: 'Jueves',
    viernes: 'Viernes',
    sabado: 'Sabado',
    domingo: 'Domingo'
  };
  return map[clean] || String(value || '').trim();
}

function timeToMinutes(value) {
  const text = String(value || '').trim();
  const match = text.match(/^(\d{1,2}):(\d{2})$/);
  if (!match) return Number.POSITIVE_INFINITY;
  const hh = Number(match[1]);
  const mm = Number(match[2]);
  return (hh * 60) + mm;
}

function renderCalendarModule() {
  const year = Number(MODULE_STATE.calendar.year) || new Date().getFullYear();
  const month = Math.min(12, Math.max(1, Number(MODULE_STATE.calendar.month) || (new Date().getMonth() + 1)));
  const monthStart = new Date(year, month - 1, 1);
  const monthEnd = new Date(year, month, 0);
  const daysInMonth = monthEnd.getDate();

  const items = DATA_STATE.calendar.filter((item) => {
    const src = item.startAt || item.date;
    if (!src) return false;
    const d = new Date(src);
    return !Number.isNaN(d.getTime()) && d.getFullYear() === year && (d.getMonth() + 1) === month;
  });

  const byDate = new Map();
  for (const item of items) {
    const src = item.startAt || item.date;
    const d = new Date(src);
    if (Number.isNaN(d.getTime())) continue;
    const key = d.toISOString().slice(0, 10);
    if (!byDate.has(key)) byDate.set(key, []);
    byDate.get(key).push(item);
  }

  for (const [, list] of byDate.entries()) {
    list.sort((a, b) => timeToMinutes(a.startAt ? formatHourFromIso(a.startAt) : '') - timeToMinutes(b.startAt ? formatHourFromIso(b.startAt) : ''));
  }

  const weekdayShift = (monthStart.getDay() + 6) % 7;
  const totalCells = Math.ceil((weekdayShift + daysInMonth) / 7) * 7;
  const weekdayLabels = ['Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab', 'Dom'];
  const cells = [];

  for (let i = 0; i < totalCells; i += 1) {
    const dayNumber = i - weekdayShift + 1;
    const inMonth = dayNumber >= 1 && dayNumber <= daysInMonth;

    if (!inMonth) {
      cells.push('<div class="calendarCell is-empty" aria-hidden="true"></div>');
      continue;
    }

    const iso = new Date(year, month - 1, dayNumber).toISOString().slice(0, 10);
    const dayEvents = byDate.get(iso) || [];

    cells.push(`
      <div class="calendarCell">
        <div class="calendarDay">${escapeHtml(String(dayNumber))}</div>
        <div class="calendarEvents">
          ${dayEvents.slice(0, 3).map((eventItem) => `
            <button class="calendarChip" type="button" title="${escapeHtml(eventItem.title || 'Evento')}">
              ${escapeHtml(eventItem.startAt ? formatHourFromIso(eventItem.startAt) : '--:--')} - ${escapeHtml(eventItem.title || 'Evento')}
            </button>
          `).join('')}
          ${dayEvents.length > 3 ? `<span class="calendarMore">+${escapeHtml(String(dayEvents.length - 3))} mas</span>` : ''}
        </div>
      </div>
    `);
  }

  return `
    <div class="workspaceStack">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Calendario compartido</h4>
            <p class="moduleIntro">Vista conectada al mismo calendario institucional.</p>
          </div>
          <span class="statusPill statusInfo">${escapeHtml(String(items.length))} evento(s)</span>
        </div>
        <div class="formGrid">
          <label class="field">
            <span class="fieldLabel">Ano</span>
            <input class="input" id="calendar-year" type="number" min="2020" max="2100" value="${escapeHtml(String(year))}" />
          </label>
          <label class="field">
            <span class="fieldLabel">Mes</span>
            <input class="input" id="calendar-month" type="number" min="1" max="12" value="${escapeHtml(String(month))}" />
          </label>
        </div>
      </section>
      <section class="moduleSurface">
        ${items.length ? `
          <div class="calendarWeekHead">
            ${weekdayLabels.map((label) => `<span>${escapeHtml(label)}</span>`).join('')}
          </div>
          <div class="calendarGrid">${cells.join('')}</div>
        ` : renderEmptyState('Sin eventos', 'No hay eventos para el mes seleccionado.')}
      </section>
    </div>
  `;
}

function renderScheduleModule() {
  const weekdays = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const allItems = DATA_STATE.schedules || [];
  const filteredItems = allItems.filter((item) => {
    if (isAdminUser()) return true;
    const teacherEmail = String(item.teacherEmail || item.email || '').trim().toLowerCase();
    if (teacherEmail && teacherEmail === String(ACTIVE_EMAIL || '').toLowerCase()) return true;

    const teacherName = String(item.teacherName || item.teacher || '').trim().toLowerCase();
    const currentName = String(ACTIVE_PROFILE?.label || CURRENT_USER?.displayName || '').trim().toLowerCase();
    return !!teacherName && !!currentName && teacherName === currentName;
  });

  const items = [...filteredItems].sort((a, b) => {
    const dayA = weekdays.indexOf(normalizeDayLabel(a.day || a.dayLabel));
    const dayB = weekdays.indexOf(normalizeDayLabel(b.day || b.dayLabel));
    if (dayA !== dayB) return (dayA < 0 ? 99 : dayA) - (dayB < 0 ? 99 : dayB);
    return timeToMinutes(a.startTime || a.start) - timeToMinutes(b.startTime || b.start);
  });

  const byDay = new Map(weekdays.map((day) => [day, []]));
  for (const item of items) {
    const day = normalizeDayLabel(item.day || item.dayLabel);
    if (!byDay.has(day)) continue;
    byDay.get(day).push(item);
  }

  return `
    <div class="workspaceStack">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Horario docente compartido</h4>
            <p class="moduleIntro">${isAdminUser() ? 'Vista global de horarios del equipo docente.' : 'Vista personalizada de tu horario semanal.'}</p>
          </div>
          <span class="statusPill statusInfo">${escapeHtml(String(items.length))} bloque(s) ${isAdminUser() ? 'totales' : 'asignados'}</span>
        </div>

        ${items.length ? `
        <div class="scheduleTable">
          ${weekdays.map((day) => `
            <section class="scheduleDayCol">
              <header class="scheduleDayHead">${escapeHtml(day)}</header>
              <div class="scheduleDayBody">
                ${(byDay.get(day) || []).length ? (byDay.get(day) || []).map((item) => `
                  <article class="scheduleBlock">
                    <div class="scheduleBlockTime">${escapeHtml(item.startTime || item.start || '--:--')} - ${escapeHtml(item.endTime || item.end || '--:--')}</div>
                    <div class="scheduleBlockTitle">${escapeHtml(isAdminUser() ? (item.teacherName || item.teacher || 'Docente') : (item.areaName || getAreaLabel(item.areaId) || 'General'))}</div>
                    <div class="scheduleBlockMeta">${escapeHtml(item.place || item.siteName || 'Sede por confirmar')}</div>
                  </article>
                `).join('') : `<div class="scheduleEmpty">Sin bloques</div>`}
              </div>
            </section>
          `).join('')}
        </div>
        ` : renderEmptyState('Sin bloques', isAdminUser() ? 'Todavia no hay horarios compartidos para mostrar.' : 'Aun no tienes bloques asignados en el horario compartido.')}
      </section>
    </div>
  `;
}

function renderPunctualityModule() {
  const items = DATA_STATE.punctuality || [];
  return `
    <div class="workspaceStack">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Puntualidad del equipo</h4>
            <p class="moduleIntro">Lectura de marcajes de entrada y salida registrados en el sistema.</p>
          </div>
          <span class="statusPill statusInfo">${escapeHtml(String(items.length))} registro(s)</span>
        </div>
        <div class="moduleList">
          ${items.length ? items.map((item) => `
            <article class="recordCard">
              <div class="recordCardTop">
                <div>
                  <div class="recordTitle">${escapeHtml(item.teacherName || item.teacherEmail || 'Docente')}</div>
                  <div class="recordMeta">${escapeHtml(formatDateLabel(item.date || ''))}</div>
                </div>
                <span class="statusPill ${item.status === 'open' ? 'statusWarn' : 'statusOk'}">${escapeHtml(item.status || 'sin estado')}</span>
              </div>
              <div class="recordBody">
                Entrada: ${escapeHtml(item.checkIn ? formatDateTimeFromIso(item.checkIn) : 'Sin registro')} ·
                Salida: ${escapeHtml(item.checkOut ? formatDateTimeFromIso(item.checkOut) : 'Sin cierre')}
              </div>
            </article>
          `).join('') : renderEmptyState('Sin registros', 'No hay marcajes disponibles en este momento.')}
        </div>
      </section>
    </div>
  `;
}

function renderSharedGalleryModule() {
  const items = (DATA_STATE.gallery || []).filter((item) => item.url || item.imageUrl || item.photoUrl);
  return `
    <div class="workspaceStack">
      <section class="moduleSurface">
        <div class="moduleSurfaceHead">
          <div>
            <h4 class="moduleTitle">Galeria de evidencias</h4>
            <p class="moduleIntro">Consulta de imagenes compartidas por el equipo.</p>
          </div>
          <span class="statusPill statusInfo">${escapeHtml(String(items.length))} imagen(es)</span>
        </div>
        ${items.length ? `
          <div class="galleryGrid">
            ${items.map((item, index) => `
              <a class="galleryCard" href="${escapeHtml(item.url || item.imageUrl || item.photoUrl || '')}" target="_blank" rel="noreferrer">
                <img src="${escapeHtml(item.url || item.imageUrl || item.photoUrl || '')}" alt="Evidencia ${escapeHtml(String(index + 1))}" loading="lazy" />
                <span class="galleryMeta">${escapeHtml(item.title || item.caption || item.areaName || 'Evidencia')}</span>
              </a>
            `).join('')}
          </div>
        ` : renderEmptyState('Sin imagenes', 'Aun no hay evidencias cargadas en la galeria compartida.')}
      </section>
    </div>
  `;
}

const MODULE_CONFIG = {
  shift: {
    eyebrow: 'Operacion diaria',
    title: 'Registro de jornada',
    subtitle: 'Marca la entrada, finaliza la sesion y resuelve cierres pendientes.',
    render: renderShiftModule
  },
  students: {
    eyebrow: 'Base operativa',
    title: 'Info estudiantes',
    subtitle: 'Base general filtrada por las areas autorizadas del docente.',
    render: renderStudentsModule
  },
  attendance: {
    eyebrow: 'Seguimiento diario',
    title: 'Asistencia',
    subtitle: 'Formulario con lista automatica de estudiantes por area.',
    render: renderAttendanceModule
  },
  logs: {
    eyebrow: 'Seguimiento academico',
    title: 'Bitacora de clases',
    subtitle: 'Consulta, agrega o edita bitacoras guardadas en Firebase.',
    render: renderLogsModule
  },
  diagnosticos: {
    eyebrow: 'Diagnosticos',
    title: 'Diagnosticos',
    subtitle: 'Registro al iniciar con un grupo nuevo o un proceso nuevo.',
    render: () => renderSingleRecordModule('diagnosticos')
  },
  proyectos: {
    eyebrow: 'Proyectos',
    title: 'Proyectos semestrales',
    subtitle: 'Planeacion y seguimiento de proyectos por semestre.',
    render: () => renderSingleRecordModule('proyectos')
  },
  muestrasProceso: {
    eyebrow: 'Muestras',
    title: 'Muestras de proceso',
    subtitle: 'Resultado del proyecto con evidencia fotografica y videos.',
    render: () => renderSingleRecordModule('muestrasProceso')
  },
  calendar: {
    eyebrow: 'Institucional',
    title: 'Calendario academico',
    subtitle: 'Eventos compartidos entre lideres y docentes.',
    render: renderCalendarModule
  },
  schedule: {
    eyebrow: 'Operacion diaria',
    title: 'Horario docentes',
    subtitle: 'Consulta de horario compartido.',
    render: renderScheduleModule
  },
  punctuality: {
    eyebrow: 'Operacion diaria',
    title: 'Puntualidad equipo',
    subtitle: 'Lectura de marcajes del equipo docente.',
    render: renderPunctualityModule
  },
  sharedGallery: {
    eyebrow: 'Evidencias',
    title: 'Galeria de evidencias',
    subtitle: 'Consulta visual compartida.',
    render: renderSharedGalleryModule
  },
  teacherRecords: {
    eyebrow: 'Gestion docente',
    title: 'Registros docentes',
    subtitle: 'Diagnosticos, proyectos y muestras de proceso.',
    render: renderTeacherRecordsModule
  },
  monthlyReports: {
    eyebrow: 'Cierre mensual',
    title: 'Informes mensuales',
    subtitle: 'Entrega mensual por centro, grupo o proceso.',
    render: renderMonthlyReportsModule
  }
};

function renderWorkspaceModule() {
  const content = document.getElementById('workspace-content');
  const title = document.getElementById('workspace-title');
  const subtitle = document.getElementById('workspace-subtitle');
  const eyebrow = document.getElementById('workspace-eyebrow');
  if (!content || !MODULE_STATE.current) return;

  const config = MODULE_CONFIG[MODULE_STATE.current];
  if (!config) return;

  if (title) title.textContent = config.title;
  if (subtitle) subtitle.textContent = config.subtitle;
  if (eyebrow) eyebrow.textContent = config.eyebrow;
  content.innerHTML = config.render();
}

async function openWorkspaceModule(moduleId) {
  if (!CURRENT_USER || !DB) {
    toast('Debes iniciar sesion primero.');
    return;
  }

  MODULE_STATE.current = moduleId;
  setBottomNavActive(moduleId === 'students' || moduleId === 'attendance' || moduleId === 'logs' ? moduleId : 'home');

  if (moduleId === 'shift') {
    await refreshShiftState();
  }

  if (moduleId === 'students') {
    await loadStudents();
    MODULE_STATE.students.filterArea = normalizeStudentsFilter(MODULE_STATE.students.filterArea);
  }

  if (moduleId === 'attendance') {
    await Promise.all([loadStudents(), loadAttendance()]);
    MODULE_STATE.attendance.areaId = userCanAccessArea(MODULE_STATE.attendance.areaId) ? MODULE_STATE.attendance.areaId : getPrimaryAreaId();
  }

  if (moduleId === 'logs') {
    await loadLogs();
    MODULE_STATE.logs.areaId = userCanAccessArea(MODULE_STATE.logs.areaId) ? MODULE_STATE.logs.areaId : getPrimaryAreaId();
  }

  if (['diagnosticos', 'proyectos', 'muestrasProceso'].includes(moduleId)) {
    MODULE_STATE.teacherRecords.activeType = moduleId;
    MODULE_STATE.teacherRecords.editingId = '';
    await loadTeacherRecordType(moduleId);
  }

  if (moduleId === 'teacherRecords') {
    await loadTeacherRecords(['diagnosticos', 'proyectos', 'muestrasProceso']);
    MODULE_STATE.teacherRecords.activeType = TEACHER_RECORD_TYPES[MODULE_STATE.teacherRecords.activeType]?.module === 'teacherRecords'
      ? MODULE_STATE.teacherRecords.activeType
      : 'diagnosticos';
  }

  if (moduleId === 'monthlyReports') {
    await loadTeacherRecordType('informesMensuales');
    MODULE_STATE.monthlyReports.areaId = userCanAccessArea(MODULE_STATE.monthlyReports.areaId) ? MODULE_STATE.monthlyReports.areaId : getPrimaryAreaId();
  }

  if (moduleId === 'calendar') {
    await loadCalendar();
  }

  if (moduleId === 'schedule') {
    await loadSchedules();
  }

  if (moduleId === 'punctuality') {
    await loadPunctuality();
  }

  if (moduleId === 'sharedGallery') {
    await loadGallery();
  }

  renderWorkspaceModule();
  openModal('modal-workspace');
}

async function refreshActiveModule() {
  if (!MODULE_STATE.current) return;

  if (MODULE_STATE.current === 'shift') {
    await refreshShiftState();
  }

  if (MODULE_STATE.current === 'students') {
    await loadStudents(true);
  }

  if (MODULE_STATE.current === 'attendance') {
    await Promise.all([loadStudents(true), loadAttendance(true)]);
  }

  if (MODULE_STATE.current === 'logs') {
    await loadLogs(true);
  }

  if (['diagnosticos', 'proyectos', 'muestrasProceso'].includes(MODULE_STATE.current)) {
    await loadTeacherRecordType(MODULE_STATE.current, true);
  }

  if (MODULE_STATE.current === 'teacherRecords') {
    await loadTeacherRecords(['diagnosticos', 'proyectos', 'muestrasProceso'], true);
  }

  if (MODULE_STATE.current === 'monthlyReports') {
    await loadTeacherRecordType('informesMensuales', true);
  }

  if (MODULE_STATE.current === 'calendar') {
    await loadCalendar(true);
  }

  if (MODULE_STATE.current === 'schedule') {
    await loadSchedules(true);
  }

  if (MODULE_STATE.current === 'punctuality') {
    await loadPunctuality(true);
  }

  if (MODULE_STATE.current === 'sharedGallery') {
    await loadGallery(true);
  }

  renderWorkspaceModule();
  syncShellUi();
}

async function saveStudent(formData) {
  const studentId = readFormValue(formData, 'studentId');
  const areaId = readFormValue(formData, 'areaId');
  const fullName = readFormValue(formData, 'fullName');

  if (!userCanAccessArea(areaId)) {
    toast('No puedes guardar estudiantes fuera de tus areas autorizadas.');
    return;
  }

  if (!fullName) {
    toast('Debes indicar el nombre del estudiante.');
    return;
  }

  const payload = {
    areaId,
    areaName: getAreaLabel(areaId),
    fullName,
    documentNumber: readFormValue(formData, 'documentNumber'),
    groupName: readFormValue(formData, 'groupName'),
    guardianName: readFormValue(formData, 'guardianName'),
    guardianPhone: readFormValue(formData, 'guardianPhone'),
    siteName: readFormValue(formData, 'siteName'),
    notes: readFormValue(formData, 'notes'),
    active: formData.get('active') === 'on',
    teacherId: CURRENT_USER.uid,
    teacherEmail: emailKey(CURRENT_USER),
    teacherName: getTeacherDisplayName(),
    updatedAt: serverTimestamp(),
    updatedAtClient: Date.now(),
    source: 'docentes-fsa-hub'
  };

  if (studentId) {
    await updateDoc(doc(DB, COLLECTIONS.students, studentId), payload);
  } else {
    await addDoc(collection(DB, COLLECTIONS.students), {
      ...payload,
      createdAt: serverTimestamp(),
      createdAtClient: Date.now()
    });
  }

  MODULE_STATE.students.editingId = '';
  toast(studentId ? 'Estudiante actualizado.' : 'Estudiante guardado.');
  await loadStudents(true);
  renderWorkspaceModule();
  syncShellUi();
}

async function saveAttendance(formData) {
  const attendanceId = readFormValue(formData, 'attendanceId');
  const areaId = readFormValue(formData, 'areaId');
  const date = readFormValue(formData, 'date');
  const sessionName = readFormValue(formData, 'sessionName');

  if (!userCanAccessArea(areaId)) {
    toast('No puedes registrar asistencia fuera de tus areas autorizadas.');
    return;
  }

  if (!date || !sessionName) {
    toast('Completa la fecha y el nombre de la sesion.');
    return;
  }

  const students = getStudentsForArea(areaId);
  if (!students.length) {
    toast('Primero agrega estudiantes activos en esta area.');
    return;
  }

  const entries = students.map((student) => ({
    studentId: student.id,
    fullName: student.fullName || '',
    groupName: student.groupName || '',
    siteName: student.siteName || '',
    status: readFormValue(formData, `attendance-status-${student.id}`) || 'presente'
  }));

  const payload = {
    areaId,
    areaName: getAreaLabel(areaId),
    date,
    sessionName,
    siteName: readFormValue(formData, 'siteName'),
    notes: readFormValue(formData, 'notes'),
    entries,
    totals: computeAttendanceTotals(entries),
    teacherId: CURRENT_USER.uid,
    teacherEmail: emailKey(CURRENT_USER),
    teacherName: getTeacherDisplayName(),
    updatedAt: serverTimestamp(),
    updatedAtClient: Date.now(),
    source: 'docentes-fsa-hub'
  };

  if (attendanceId) {
    await updateDoc(doc(DB, COLLECTIONS.attendance, attendanceId), payload);
  } else {
    await addDoc(collection(DB, COLLECTIONS.attendance), {
      ...payload,
      createdAt: serverTimestamp(),
      createdAtClient: Date.now()
    });
  }

  MODULE_STATE.attendance.editingId = '';
  MODULE_STATE.attendance.areaId = areaId;
  toast(attendanceId ? 'Asistencia actualizada.' : 'Asistencia registrada.');
  await loadAttendance(true);
  renderWorkspaceModule();
  syncShellUi();
}

async function saveLog(formData) {
  const logId = readFormValue(formData, 'logId');
  const areaId = readFormValue(formData, 'areaId');
  const date = readFormValue(formData, 'date');
  const sessionName = readFormValue(formData, 'sessionName');

  if (!userCanAccessArea(areaId)) {
    toast('No puedes guardar bitacoras fuera de tus areas autorizadas.');
    return;
  }

  if (!date || !sessionName) {
    toast('Completa la fecha y el nombre de la sesion.');
    return;
  }

  const files = formData.getAll('photos').filter((item) => item instanceof File && item.size > 0);
  if (files.length > LOG_PHOTO_LIMIT) {
    toast(`Solo puedes subir hasta ${LOG_PHOTO_LIMIT} fotos por bitacora.`);
    return;
  }
  if (files.some((file) => file.size > LOG_PHOTO_MAX_BYTES)) {
    toast(`Cada foto debe pesar maximo ${Math.floor(LOG_PHOTO_MAX_BYTES / 1024 / 1024)}MB.`);
    return;
  }
  if (files.length && !STORAGE) {
    toast('Firebase Storage no esta listo. Configuralo e intenta de nuevo.');
    return;
  }

  const currentPhotoList = logId
    ? (DATA_STATE.logs.find((item) => item.id === logId)?.photos || [])
    : [];
  let nextPhotoList = Array.isArray(currentPhotoList) ? [...currentPhotoList] : [];
  if (!nextPhotoList.length && !files.length) {
    toast('Debes subir al menos una foto de evidencia para guardar la bitacora.');
    return;
  }
  const targetLogId = logId || doc(collection(DB, COLLECTIONS.classLogs)).id;

  const payload = {
    areaId,
    areaName: getAreaLabel(areaId),
    date,
    sessionName,
    siteName: readFormValue(formData, 'siteName'),
    studentGroup: readFormValue(formData, 'studentGroup'),
    objective: readFormValue(formData, 'objective'),
    activities: readFormValue(formData, 'activities'),
    achievements: readFormValue(formData, 'achievements'),
    challenges: readFormValue(formData, 'challenges'),
    followUp: readFormValue(formData, 'followUp'),
    notes: readFormValue(formData, 'notes'),
    photos: nextPhotoList,
    teacherId: CURRENT_USER.uid,
    teacherEmail: emailKey(CURRENT_USER),
    teacherName: getTeacherDisplayName(),
    updatedAt: serverTimestamp(),
    updatedAtClient: Date.now(),
    source: 'docentes-fsa-hub'
  };

  if (logId) {
    await updateDoc(doc(DB, COLLECTIONS.classLogs, logId), payload);
  } else {
    await setDoc(doc(DB, COLLECTIONS.classLogs, targetLogId), {
      ...payload,
      createdAt: serverTimestamp(),
      createdAtClient: Date.now()
    });
  }

  if (files.length) {
    try {
      for (const file of files) {
        const cleanName = (file.name || 'foto.jpg').replace(/[^a-zA-Z0-9.\-_]/g, '_');
        const path = `classLogs/${targetLogId}/${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${cleanName}`;
        const fileRef = storageRef(STORAGE, path);
        await uploadBytes(fileRef, file);
        const url = await getDownloadURL(fileRef);
        nextPhotoList.push({
          name: file.name || 'foto',
          type: file.type || 'image/*',
          size: file.size || 0,
          path,
          url,
          uploadedAtClient: Date.now()
        });
      }
    } catch (error) {
      console.error('No se pudieron subir las fotos de la bitacora:', error);
      if (!logId && !currentPhotoList.length) {
        try {
          await deleteDoc(doc(DB, COLLECTIONS.classLogs, targetLogId));
        } catch (cleanupError) {
          console.error('No se pudo revertir la bitacora sin fotos:', cleanupError);
        }
      }
      toast('No se pudieron subir las fotos, la bitacora NO quedo guardada. Revisa tu conexion e intenta de nuevo.');
      return;
    }

    await updateDoc(doc(DB, COLLECTIONS.classLogs, targetLogId), {
      photos: nextPhotoList,
      updatedAt: serverTimestamp(),
      updatedAtClient: Date.now()
    });
  }

  MODULE_STATE.logs.editingId = '';
  MODULE_STATE.logs.areaId = areaId;
  toast(logId ? 'Bitacora actualizada.' : 'Bitacora guardada.');
  await loadLogs(true);
  renderWorkspaceModule();
  syncShellUi();
}

async function uploadRecordPhotos({ files, folder, recordId, currentPhotos = [] }) {
  if (!files.length) return Array.isArray(currentPhotos) ? [...currentPhotos] : [];
  if (!STORAGE) throw new Error('storage-not-ready');

  const photos = Array.isArray(currentPhotos) ? [...currentPhotos] : [];
  for (const file of files) {
    const cleanName = (file.name || 'foto.jpg').replace(/[^a-zA-Z0-9.\-_]/g, '_');
    const path = `${folder}/${recordId}/${Date.now()}_${Math.random().toString(36).slice(2, 8)}_${cleanName}`;
    const fileRef = storageRef(STORAGE, path);
    await uploadBytes(fileRef, file);
    const url = await getDownloadURL(fileRef);
    photos.push({
      name: file.name || 'foto',
      type: file.type || 'image/*',
      size: file.size || 0,
      path,
      url,
      uploadedAtClient: Date.now()
    });
  }
  return photos;
}

async function saveTeacherRecord(formData, forcedTypeKey = '') {
  const typeKey = forcedTypeKey || readFormValue(formData, 'typeKey') || MODULE_STATE.teacherRecords.activeType;
  const config = getRecordConfig(typeKey);
  const recordId = readFormValue(formData, 'recordId');
  const areaId = readFormValue(formData, 'areaId');

  if (!userCanAccessArea(areaId)) {
    toast('No puedes guardar registros fuera de tus areas autorizadas.');
    return;
  }

  const payload = {
    areaId,
    areaName: getAreaLabel(areaId),
    type: config.type,
    tipoRegistro: config.type,
    teacherId: CURRENT_USER.uid,
    uid: CURRENT_USER.uid,
    teacherEmail: emailKey(CURRENT_USER),
    email: emailKey(CURRENT_USER),
    teacherName: getTeacherDisplayName(),
    docenteNombre: getTeacherDisplayName(),
    updatedAt: serverTimestamp(),
    updatedAtClient: Date.now(),
    source: 'docentes-fsa-hub'
  };

  for (const field of config.fields) {
    payload[field.name] = readFormValue(formData, field.name);
    if (field.required && !payload[field.name]) {
      toast(`Completa el campo: ${field.label}.`);
      return;
    }
  }

  if (typeKey === 'informesMensuales') {
    const duplicate = findMonthlyReportForDraft({ id: recordId, ...payload });
    if (duplicate) {
      MODULE_STATE.monthlyReports.editingId = duplicate.id;
      toast('Ya existe un informe para ese mes, centro/proceso y area. Lo abrimos para editar.');
      renderWorkspaceModule();
      return;
    }
  }

  const files = formData.getAll('photos').filter((item) => item instanceof File && item.size > 0);
  if (files.length > RECORD_PHOTO_LIMIT) {
    toast(`Solo puedes subir hasta ${RECORD_PHOTO_LIMIT} evidencias por registro.`);
    return;
  }
  const maxBytes = config.evidenceAccept?.includes('video') ? RECORD_MEDIA_MAX_BYTES : RECORD_PHOTO_MAX_BYTES;
  if (files.some((file) => file.size > maxBytes)) {
    toast(`Cada evidencia debe pesar maximo ${Math.floor(maxBytes / 1024 / 1024)}MB.`);
    return;
  }
  const currentRecord = recordId ? (DATA_STATE.teacherRecords[typeKey] || []).find((item) => item.id === recordId) : null;
  const currentPhotos = Array.isArray(currentRecord?.photos) ? currentRecord.photos : [];
  if (config.evidenceRequired && !currentPhotos.length && !files.length) {
    toast('Debes subir al menos una evidencia fotografica o video para guardar la muestra de proceso.');
    return;
  }
  if (files.length && !STORAGE) {
    toast('Firebase Storage no esta listo. Configuralo e intenta de nuevo.');
    return;
  }

  const targetId = recordId || doc(collection(DB, config.collection)).id;
  payload.photos = currentPhotos;

  if (recordId) {
    await updateDoc(doc(DB, config.collection, recordId), payload);
  } else {
    await setDoc(doc(DB, config.collection, targetId), {
      ...payload,
      createdAt: serverTimestamp(),
      createdAtClient: Date.now()
    });
  }

  if (files.length) {
    try {
      const photos = await uploadRecordPhotos({ files, folder: config.collection, recordId: targetId, currentPhotos });
      await updateDoc(doc(DB, config.collection, targetId), {
        photos,
        updatedAt: serverTimestamp(),
        updatedAtClient: Date.now()
      });
    } catch (error) {
      console.error('No se pudieron subir evidencias:', error);
      if (config.evidenceRequired && !recordId && !currentPhotos.length) {
        try {
          await deleteDoc(doc(DB, config.collection, targetId));
        } catch (cleanupError) {
          console.error('No se pudo revertir el registro sin evidencias:', cleanupError);
        }
        toast('No se pudieron subir las evidencias, el registro NO quedo guardado. Intenta de nuevo.');
        return;
      }
      toast('El registro se guardo, pero no pude subir las evidencias.');
    }
  }

  if (typeKey === 'informesMensuales') MODULE_STATE.monthlyReports.editingId = '';
  else MODULE_STATE.teacherRecords.editingId = '';
  toast(typeKey === 'informesMensuales' ? 'Informe mensual guardado.' : 'Registro docente guardado.');
  await loadTeacherRecordType(typeKey, true);
  renderWorkspaceModule();
  syncShellUi();
  renderMonthlyReminder();
}

function bindWorkspaceModal() {
  if (workspaceBound) return;
  workspaceBound = true;

  document.getElementById('btn-workspace-refresh')?.addEventListener('click', refreshActiveModule);

  const content = document.getElementById('workspace-content');
  if (!content) return;

  content.addEventListener('click', async (event) => {
    const actionEl = event.target.closest('[data-module-action]');
    if (!actionEl) return;

    const action = String(actionEl.getAttribute('data-module-action') || '').trim();
    if (!action) return;

    if (action === 'student-new') {
      MODULE_STATE.students.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'student-edit') {
      MODULE_STATE.students.editingId = actionEl.getAttribute('data-student-id') || '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'attendance-new') {
      MODULE_STATE.attendance.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'attendance-edit') {
      MODULE_STATE.attendance.editingId = actionEl.getAttribute('data-attendance-id') || '';
      const record = DATA_STATE.attendance.find((item) => item.id === MODULE_STATE.attendance.editingId);
      if (record?.areaId) MODULE_STATE.attendance.areaId = record.areaId;
      renderWorkspaceModule();
      return;
    }

    if (action === 'log-new') {
      MODULE_STATE.logs.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'log-toggle-gallery') {
      MODULE_STATE.logs.showGallery = !MODULE_STATE.logs.showGallery;
      renderWorkspaceModule();
      return;
    }

    if (action === 'log-edit') {
      MODULE_STATE.logs.editingId = actionEl.getAttribute('data-log-id') || '';
      const record = DATA_STATE.logs.find((item) => item.id === MODULE_STATE.logs.editingId);
      if (record?.areaId) MODULE_STATE.logs.areaId = record.areaId;
      renderWorkspaceModule();
      return;
    }

    if (action === 'record-type') {
      MODULE_STATE.teacherRecords.activeType = actionEl.getAttribute('data-record-type') || 'diagnosticos';
      MODULE_STATE.teacherRecords.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'record-new') {
      MODULE_STATE.teacherRecords.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'monthly-new') {
      MODULE_STATE.monthlyReports.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (action === 'record-edit') {
      const typeKey = actionEl.getAttribute('data-record-type') || '';
      const recordId = actionEl.getAttribute('data-record-id') || '';
      if (typeKey === 'informesMensuales') {
        MODULE_STATE.monthlyReports.editingId = recordId;
        MODULE_STATE.monthlyReports.areaId = (DATA_STATE.teacherRecords.informesMensuales || []).find((item) => item.id === recordId)?.areaId || MODULE_STATE.monthlyReports.areaId;
      } else {
        MODULE_STATE.teacherRecords.activeType = typeKey || MODULE_STATE.teacherRecords.activeType;
        MODULE_STATE.teacherRecords.editingId = recordId;
      }
      renderWorkspaceModule();
      return;
    }

    if (action === 'shift-refresh') {
      await refreshActiveModule();
      return;
    }

    if (action === 'shift-toggle') {
      await handleShiftButtonClick();
      renderWorkspaceModule();
    }
  });

  content.addEventListener('change', (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    if (target.id === 'students-area-filter') {
      MODULE_STATE.students.filterArea = target.value;
      renderWorkspaceModule();
      return;
    }

    if (target.getAttribute('name') === 'areaId' && target.closest('#attendance-form')) {
      MODULE_STATE.attendance.areaId = target.value;
      MODULE_STATE.attendance.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (target.getAttribute('name') === 'areaId' && target.closest('#log-form')) {
      MODULE_STATE.logs.areaId = target.value;
      MODULE_STATE.logs.editingId = '';
      renderWorkspaceModule();
      return;
    }

    if (target.getAttribute('name') === 'galleryAreaId') {
      MODULE_STATE.logs.galleryAreaId = target.value || 'all';
      renderWorkspaceModule();
    }

    const filterScope = target.getAttribute('data-record-filter');
    if (filterScope === 'teacherRecords') {
      MODULE_STATE.teacherRecords.filters[target.getAttribute('name')] = target.value || '';
      renderWorkspaceModule();
      return;
    }

    if (filterScope === 'monthlyReports') {
      MODULE_STATE.monthlyReports.filters[target.getAttribute('name')] = target.value || '';
      renderWorkspaceModule();
      return;
    }

    if (target.id === 'calendar-year') {
      MODULE_STATE.calendar.year = String(target.value || new Date().getFullYear());
      renderWorkspaceModule();
      return;
    }

    if (target.id === 'calendar-month') {
      MODULE_STATE.calendar.month = String(target.value || (new Date().getMonth() + 1));
      renderWorkspaceModule();
    }
  });

  content.addEventListener('submit', async (event) => {
    const form = event.target;
    if (!(form instanceof HTMLFormElement)) return;

    event.preventDefault();
    const formData = new FormData(form);

    try {
      if (form.id === 'student-form') {
        await saveStudent(formData);
        return;
      }

      if (form.id === 'attendance-form') {
        await saveAttendance(formData);
        return;
      }

      if (form.id === 'log-form') {
        await saveLog(formData);
        return;
      }

      if (form.id === 'teacher-record-form') {
        await saveTeacherRecord(formData);
        return;
      }

      if (form.id === 'monthly-report-form') {
        await saveTeacherRecord(formData, 'informesMensuales');
        return;
      }

      if (form.id === 'pending-shift-form') {
        await closePendingShift(formData);
      }
    } catch (error) {
      console.error('No se pudo guardar el formulario:', error);
      toast('No pude guardar la informacion. Revisa tu conexion.');
    }
  });
}

async function triggerAccess(id) {
  const accessId = String(id || '').trim();
  if (!accessId) return;

  pushRecentId(accessId);
  renderFavoritesList();

  if (accessId === 'carnet') {
    openCarnet(ACTIVE_PROFILE);
    return;
  }

  if (accessId === 'jornada') {
    await handleShiftButtonClick();
    return;
  }

  if (accessId === 'infoEstudiantes') {
    await openWorkspaceModule('students');
    return;
  }

  if (accessId === 'asistencia') {
    await openWorkspaceModule('attendance');
    return;
  }

  if (accessId === 'bitacoraClases') {
    await openWorkspaceModule('logs');
    return;
  }

  if (['diagnosticos', 'proyectos', 'muestrasProceso'].includes(accessId)) {
    await openWorkspaceModule(accessId);
    return;
  }

  if (accessId === 'registrosDocentes') {
    await openWorkspaceModule('teacherRecords');
    return;
  }

  if (accessId === 'informesMensuales') {
    await openWorkspaceModule('monthlyReports');
    return;
  }

  if (accessId === 'calendario') {
    await openWorkspaceModule('calendar');
    return;
  }

  if (accessId === 'horarioAnual') {
    await openWorkspaceModule('schedule');
    return;
  }

  if (accessId === 'puntualidadEquipo') {
    await openWorkspaceModule('punctuality');
    return;
  }

  if (accessId === 'galeriaEvidencias') {
    await openWorkspaceModule('sharedGallery');
    return;
  }

  const url = String(ACTIVE_LINKS?.[accessId] || '').trim();
  if (!url || url === '__SHIFT__') {
    toast(`Pendiente: falta configurar el acceso de "${accessId}".`);
    return;
  }

  if (!openExternal(url)) {
    toast('Ese enlace fue bloqueado por seguridad.');
  }
}

function wireHeroActions() {
  document.getElementById('btn-hero-shift')?.addEventListener('click', () => triggerAccess('jornada'));
  document.getElementById('btn-hero-calendar')?.addEventListener('click', () => triggerAccess('calendario'));
  document.getElementById('btn-hero-schedule')?.addEventListener('click', () => triggerAccess('horarioAnual'));
  document.getElementById('btn-hero-students')?.addEventListener('click', () => triggerAccess('infoEstudiantes'));
  document.getElementById('btn-hero-attendance')?.addEventListener('click', () => triggerAccess('asistencia'));
  document.getElementById('btn-hero-logs')?.addEventListener('click', () => triggerAccess('bitacoraClases'));
  document.getElementById('btn-hero-carnet')?.addEventListener('click', () => triggerAccess('carnet'));
  document.getElementById('btn-pending-shift')?.addEventListener('click', () => openWorkspaceModule('shift'));
  document.getElementById('btn-pending-shift-banner')?.addEventListener('click', () => openWorkspaceModule('shift'));
}

function wireBottomDock() {
  $$('.dockTab').forEach((button) => {
    button.addEventListener('click', async () => {
      const tab = button.getAttribute('data-tab') || 'home';

      if (tab === 'home') {
        closeModal('modal-workspace');
        scrollToTop();
        setBottomNavActive('home');
        return;
      }

      if (tab === 'students') {
        await openWorkspaceModule('students');
        return;
      }

      if (tab === 'attendance') {
        await openWorkspaceModule('attendance');
        return;
      }

      if (tab === 'logs') {
        await openWorkspaceModule('logs');
      }
    });
  });
}

function shouldShowMonthlyReminder() {
  const day = getCurrentBogotaDayNumber();
  if (day < 22 || day > 25) return false;
  const monthKey = getCurrentMonthKey();
  const sent = (DATA_STATE.teacherRecords.informesMensuales || []).some((item) =>
    item.teacherId === CURRENT_USER?.uid && item.month === monthKey
  );
  if (sent) return false;

  const dismissKey = `${MONTHLY_REMINDER_DISMISS_PREFIX}${emailKey(CURRENT_USER)}_${getBogotaDateParts().date}`;
  try {
    return sessionStorage.getItem(dismissKey) !== '1';
  } catch (_) {
    return true;
  }
}

function renderMonthlyReminder() {
  const hero = document.querySelector('.workspaceHero');
  if (!hero || !CURRENT_USER) return;

  let banner = document.getElementById('monthly-report-reminder');
  if (!banner) {
    banner = document.createElement('div');
    banner.id = 'monthly-report-reminder';
    banner.className = 'moduleAlert monthlyReminder';
    banner.innerHTML = `
      <div>
        <div class="moduleAlertTitle">Informe mensual</div>
        <p class="moduleAlertText">Recuerda diligenciar tu informe mensual. Tienes plazo maximo hasta el 25 de este mes.</p>
      </div>
      <div class="monthlyReminderActions">
        <button class="btnPrimary" type="button" data-monthly-action="open">Diligenciar</button>
        <button class="btnGhost" type="button" data-monthly-action="close">Cerrar</button>
      </div>
    `;
    hero.appendChild(banner);
    banner.addEventListener('click', async (event) => {
      const btn = event.target.closest('[data-monthly-action]');
      if (!btn) return;
      const action = btn.getAttribute('data-monthly-action');
      if (action === 'open') {
        await openWorkspaceModule('monthlyReports');
        return;
      }
      if (action === 'close') {
        const dismissKey = `${MONTHLY_REMINDER_DISMISS_PREFIX}${emailKey(CURRENT_USER)}_${getBogotaDateParts().date}`;
        try {
          sessionStorage.setItem(dismissKey, '1');
        } catch (_) {}
        renderMonthlyReminder();
      }
    });
  }

  banner.hidden = !shouldShowMonthlyReminder();
}

async function mount() {
  try {
    document.title = HUB.name;
  } catch (_) {}

  setHubCopy();

  if (!assertConfig(firebaseConfig)) {
    show('login');
    toast('Falta configurar Firebase en app.js.');
    return;
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const storage = getStorage(app);

  AUTH = auth;
  DB = db;
  STORAGE = storage;

  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (error) {
    console.warn('No se pudo fijar la persistencia:', error);
  }

  await finalizeRedirectIfAny(auth);

  document.getElementById('btn-google')?.addEventListener('click', () => doGoogleLogin(auth));
  document.getElementById('btn-logout')?.addEventListener('click', () => doLogout(auth));

  wireDrawerHandlers(auth);
  wireModalShell();
  wireSearchAndFavorites();
  bindWorkspaceModal();
  wireHeroActions();
  wireBottomDock();

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      CURRENT_USER = null;
      ACTIVE_LINKS = {};
      ACTIVE_PROFILE = null;
      ACTIVE_EMAIL = '';
      clearShiftState();
      clearDataState();
      closeAllModals();
      closeDrawer();
      show('login');
      return;
    }

    const email = emailKey(user);
    CURRENT_USER = user;
    ACTIVE_EMAIL = email;
    ACTIVE_PROFILE = await loadTeacherProfile(user);
    if (!ACTIVE_PROFILE?.active || !getAllowedAreaIds(ACTIVE_PROFILE).length) {
      toast('Tu perfil docente aun no tiene areas autorizadas. Pide a un lider que lo revise.');
    }
    ACTIVE_LINKS = buildLinksForUser(email);
    DATA_STATE.recentIds = getRecentIds(email);

    const userLine = document.getElementById('user-line');
    const areasText = getAllowedAreaIds(ACTIVE_PROFILE).map(getAreaLabel).join(' / ');
    if (userLine) {
      userLine.textContent = ACTIVE_PROFILE?.label || prettyName(user, email);
    }

    setDrawerProfile(ACTIVE_PROFILE, user);

    clearShiftState();
    clearDataState();
    DATA_STATE.recentIds = getRecentIds(email);
    MODULE_STATE.students.filterArea = getAllowedAreaIds(ACTIVE_PROFILE).length > 1 ? 'all' : getPrimaryAreaId();
    MODULE_STATE.attendance.areaId = getPrimaryAreaId();
    MODULE_STATE.logs.areaId = getPrimaryAreaId();
    MODULE_STATE.monthlyReports.areaId = getPrimaryAreaId();

    show('app');
    setBottomNavActive('home');
    renderButtons(HUB.buttons, ACTIVE_LINKS, ACTIVE_PROFILE, email);
    updateHeroSummary();
    renderFavoritesList();
    renderSearchResults('');

    try {
      await syncTeacherProfile(user, ACTIVE_PROFILE);
    } catch (error) {
      console.warn('No se pudo sincronizar el perfil docente:', error);
    }

    await refreshShiftState();
    await Promise.all([
      loadStudents(true),
      loadAttendance(true),
      loadLogs(true),
      loadCalendar(true),
      loadSchedules(true),
      loadPunctuality(true),
      loadGallery(true),
      loadTeacherRecordType('informesMensuales', true)
    ]);
    syncShellUi();
    renderMonthlyReminder();
    renderFavoritesList();
  });
}

document.addEventListener('DOMContentLoaded', () => {
  console.log('BUILD', BUILD);

  registerServiceWorker();
  setupInstallPrompt();
  wireUpdateBanner();
  setNetPill();
  mount();
});

