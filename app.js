/* Musicala · Docentes Hub (SIMPLE + Firebase Google Login) — app.js PRO ✅
   - Google Login (Firebase Auth)
   - Hub exclusivo Docentes (lista blanca por correo)
   - Links generales + overrides por usuario
   - Carnet abre modal (imagen en /assets/*.png)
   - Drawer lateral (si existe): perfil + accesos rápidos + logout
   - PWA: SW + banner de update + botón instalar
   - Render por secciones + estados "Pendiente"
   - ✅ NUEVO: Secciones colapsables (estado persistente por usuario)
   - ✅ Mejor net-pill: online/offline + poor connection
   - URL safety (bloquea javascript:/data:)
*/
'use strict';

const BUILD = "2026-03-05.2";

/* =========== 1) Firebase Config (YA LISTO) =========== */
const firebaseConfig = {
  apiKey: "AIzaSyCPgaqPhX2CjpQ4X8rrscX3wDDEfDEm__o",
  authDomain: "dashboard-docentes-fsa.firebaseapp.com",
  projectId: "dashboard-docentes-fsa",
  storageBucket: "dashboard-docentes-fsa.firebasestorage.app",
  messagingSenderId: "982016672470",
  appId: "1:982016672470:web:6468f0ddb333cc0606ff77"
};

/* =========== 2) Config Docentes Hub =========== */
const HUB = {
  name: "Docentes · Musicala",

  GENERAL_LINKS: {
    nomina: "https://docs.google.com/forms/d/e/1FAIpQLSeMOhoY9d8JOf1Oq8DnD_aSEDkBmOXmzYJtlCCU-7CNVYjnLA/viewform",
    observacion: "https://docs.google.com/forms/d/1z8TEQACP6L8d0vTWEpSl2RQJ198PwQwzH4-UKqq9EQA/viewform?edit_requested=true",
    induccion: "https://musicalaescuela.github.io/inducciondocentesmusicala/",
    infoEstudiantes: "",
    jornada: "https://musicalaescuela.github.io/ingresoysalidafsa/",
    muestras: "https://musicalaescuela.github.io/muestrasdeproceso/#musica",
    guiones: "https://musicalaescuela.github.io/plantillaparaguiones/",
    protocolosMusica: "https://musicalaescuela.github.io/protocolosmusica/",
    vacaciones: "https://musicalaescuela.github.io/vacacionesartisticas/",
    explicacionArtes: "https://musicala.github.io/explicacionartes/",
    edades: "https://musicala.github.io/musiedades/",
    reglamento: "https://drive.google.com/file/d/1Oda0c_FnHrsgME2GE8LCb7z5huH-YbBk/view",
    musicalaFest: "https://musicalaescuela.github.io/programamusicalafest2025/",

    calendario: "https://musicala.github.io/calendariomusicala/",
    apuntes: "",
    bitacoraAcademica: "",
    documentosContratacion: "",
    horarioAnual: "",
    bitacoraClases: "https://musicalaescuela.github.io/registrodeclasesfsa/"
  },

  USERS: {
    "alekcaballeromusic@gmail.com": {
      label: "Alek Caballero",
      carnet: "./assets/alekcaballero.png",
      links: {}
    },
    "catalina.medina.leal@gmail.com": {
      label: "Catalina Medina",
      carnet: "./assets/catalinamedina.png",
      links: {}
    }
  },

  BUTTONS: [
    { id: "carnet", icon: "🪪", title: "Carnet docente", subtitle: "Personal", section: "Mi trabajo hoy" },
    { id: "jornada", icon: "⏱️", title: "Registro de jornada", subtitle: "Diario", section: "Mi trabajo hoy" },
    { id: "infoEstudiantes", icon: "🧒", title: "Info estudiantes", subtitle: "Verificación", section: "Mi trabajo hoy" },
    { id: "horarioAnual", icon: "📅", title: "Horario anual 2026", subtitle: "General o personal", section: "Mi trabajo hoy" },

    { id: "observacion", icon: "👀", title: "Formulario observación docente", subtitle: "Registro", section: "Gestión docente" },
    { id: "asistencia", icon: "👀", title: "Asistencia", subtitle: "Registro", section: "Gestión docente" },
    { id: "bitacoraClases", icon: "📒", title: "Bitácora de clases", subtitle: "Seguimiento", section: "Gestión docente" },
    { id: "bitacoraAcademica", icon: "✅", title: "Bitácora tareas académicas", subtitle: "Pendientes", section: "Gestión docente" },

    { id: "induccion", icon: "🎓", title: "Inducción Docentes Musicala", subtitle: "Onboarding", section: "Recursos" },
    { id: "protocolosMusica", icon: "🎵", title: "Protocolos clases de música", subtitle: "Guía", section: "Recursos" },
    { id: "muestras", icon: "🎭", title: "Info Muestras de proceso", subtitle: "Planeación", section: "Recursos" },
    { id: "guiones", icon: "🎬", title: "Plantilla guiones de video", subtitle: "Contenido", section: "Recursos" },
    { id: "explicacionArtes", icon: "🧩", title: "Explicación de las artes", subtitle: "Oferta", section: "Recursos" },
    { id: "edades", icon: "📏", title: "Rangos de edades", subtitle: "Guía rápida", section: "Recursos" },
    { id: "centrosredes", icon: "📏", title: "Centros Redes", subtitle: "Guía rápida", section: "Recursos" },

    { id: "nomina", icon: "💰", title: "Novedades nómina", subtitle: "General", section: "Institucional" },
    { id: "calendario", icon: "🗓️", title: "Calendario Académico", subtitle: "General", section: "Institucional" },
    { id: "reglamento", icon: "📜", title: "Reglamento interno de trabajo", subtitle: "Documento", section: "Institucional" },
    { id: "documentosContratacion", icon: "📁", title: "Documentos de contratación", subtitle: "Carpeta", section: "Institucional" }
  ]
};

/* =========== 3) Firebase SDK (CDN modular) =========== */
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
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
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/* ==========================================================================
   Helpers DOM + strings
========================================================================== */
const $ = (sel, el = document) => el.querySelector(sel);
const $$ = (sel, el = document) => Array.from(el.querySelectorAll(sel));

function escapeHtml(str) {
  return String(str ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;")
    .replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

/* ==========================================================================
   LocalStorage helpers
========================================================================== */
function lsGet(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch (_) {
    return fallback;
  }
}
function lsSet(key, value) {
  try { localStorage.setItem(key, JSON.stringify(value)); } catch (_) {}
}

/* ==========================================================================
   Toast
========================================================================== */
function pickToastEl() {
  const a = $("#toast-app");
  const b = $("#toast");
  if (a && !a.hidden) return a;
  return b || a || null;
}

let toastTimer = null;
/**
 * toast("Mensaje", { actionText:"...", onAction:()=>{}, sticky:true, ms:5000 })
 */
function toast(msg, opts = {}) {
  const el = pickToastEl();
  if (!el) return;

  const { actionText = "", onAction = null, sticky = false, ms = 2600 } = opts || {};

  el.classList.remove("show");
  el.hidden = false;
  el.innerHTML = "";

  const msgSpan = document.createElement("span");
  msgSpan.className = "toastMsg";
  msgSpan.textContent = String(msg ?? "");
  el.appendChild(msgSpan);

  if (actionText) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "toastBtn";
    btn.textContent = actionText;
    btn.addEventListener("click", () => {
      try { onAction && onAction(); }
      finally { el.classList.remove("show"); }
    });
    el.appendChild(btn);
  }

  requestAnimationFrame(() => el.classList.add("show"));

  clearTimeout(toastTimer);
  if (!sticky) {
    toastTimer = setTimeout(() => {
      el.classList.remove("show");
      if (el.id === "toast-app") el.hidden = true;
    }, Math.max(1200, Number(ms) || 2600));
  }
}

/* ==========================================================================
   Views
========================================================================== */
function show(which) {
  const vLogin = $("#view-login");
  const vApp = $("#view-app");
  if (!vLogin || !vApp) return;

  if (which === "login") {
    vLogin.hidden = false;
    vApp.hidden = true;
    const tApp = $("#toast-app");
    if (tApp) tApp.hidden = true;
  } else {
    vLogin.hidden = true;
    vApp.hidden = false;
  }
}

/* ==========================================================================
   URL safety + opener
========================================================================== */
function normalizeUrl(raw) {
  const url = String(raw || "").trim();
  if (!url) return "";

  // Bloqueo de esquemas peligrosos
  if (/^\s*javascript:/i.test(url)) return "";
  if (/^\s*data:/i.test(url)) return "";
  if (/^\s*file:/i.test(url)) return "";

  // OK si trae protocolo o // (protocol-relative)
  if (/^(https?:)?\/\//i.test(url)) return url;

  // Si parece ruta relativa local (./assets/..., /algo)
  if (/^(\.?\/|\/)/.test(url)) return url;

  // Si parece dominio sin protocolo
  return "https://" + url;
}

function openExternal(rawUrl) {
  const safe = normalizeUrl(rawUrl);
  if (!safe) return false;

  // Si es ruta local, abrir en misma pestaña
  if (/^(\.?\/|\/)/.test(safe)) {
    window.location.href = safe;
    return true;
  }

  window.open(safe, "_blank", "noopener,noreferrer");
  return true;
}

/* ==========================================================================
   PWA: install prompt + SW + update banner
========================================================================== */
let __deferredInstallPrompt = null;

function isIOS() {
  const ua = navigator.userAgent || "";
  return /iphone|ipad|ipod/i.test(ua);
}
function isStandalone() {
  if (window.navigator.standalone) return true; // iOS Safari
  return window.matchMedia && window.matchMedia("(display-mode: standalone)").matches;
}

function setInstallUI(visible) {
  const b1 = document.getElementById("btn-install");
  const b2 = document.getElementById("btn-install-2");
  if (b1) b1.hidden = !visible;
  if (b2) b2.hidden = !visible;
}

async function trySkipWaiting() {
  try {
    const reg = await navigator.serviceWorker.getRegistration("./");
    if (reg?.waiting) {
      reg.waiting.postMessage({ type: "SKIP_WAITING" });
      return true;
    }
  } catch (_) {}
  return false;
}

function wireUpdateBanner() {
  const wrap = document.getElementById("pwa-update");
  const btn = document.getElementById("btn-update");
  if (!wrap || !btn) return;

  btn.addEventListener("click", async () => {
    const ok = await trySkipWaiting();
    if (!ok) toast("No hay actualización lista aún 🙃");
  });

  const maybeShow = async () => {
    try {
      const reg = await navigator.serviceWorker.getRegistration("./");
      if (reg?.waiting) wrap.hidden = false;
    } catch (_) {}
  };

  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (e) => {
      if (e?.data?.type === "SW_ACTIVATED") wrap.hidden = true;
    });
    maybeShow();
  }
}

async function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;

  const promptUpdate = (reg) => {
    if (!reg || !reg.waiting) return;

    const wrap = document.getElementById("pwa-update");
    if (wrap) wrap.hidden = false;

    toast("Hay una actualización lista ✨", {
      actionText: "Actualizar",
      sticky: true,
      onAction: () => {
        try { reg.waiting.postMessage({ type: "SKIP_WAITING" }); }
        catch (e) {
          console.warn("No se pudo activar update", e);
          toast("No se pudo actualizar. Recarga la página 🙃");
        }
      }
    });
  };

  try {
    const reg = await navigator.serviceWorker.register("./sw.js", { scope: "./" });

    promptUpdate(reg);

    reg.addEventListener("updatefound", () => {
      const sw = reg.installing;
      if (!sw) return;
      sw.addEventListener("statechange", () => {
        if (sw.state === "installed" && navigator.serviceWorker.controller) {
          promptUpdate(reg);
        }
      });
    });

    navigator.serviceWorker.addEventListener("controllerchange", () => {
      if (window.__reloadingForSW) return;
      window.__reloadingForSW = true;
      window.location.reload();
    });

    reg.update?.().catch(() => null);
  } catch (e) {
    console.warn("SW no se pudo registrar", e);
  }
}

function setupInstallPrompt() {
  if (isStandalone()) {
    setInstallUI(false);
    return;
  }

  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault();
    __deferredInstallPrompt = e;
    setInstallUI(true);
  });

  window.addEventListener("appinstalled", () => {
    __deferredInstallPrompt = null;
    setInstallUI(false);
    toast("Instalada ✨");
  });

  const onInstallClick = async () => {
    if (isIOS() && !__deferredInstallPrompt) {
      toast("En iPhone/iPad: Compartir → “Agregar a pantalla de inicio”");
      return;
    }
    if (!__deferredInstallPrompt) {
      toast("Instalación no disponible todavía (abre en Chrome/Safari)");
      return;
    }

    __deferredInstallPrompt.prompt();
    const choice = await __deferredInstallPrompt.userChoice.catch(() => null);
    __deferredInstallPrompt = null;

    if (!choice || choice.outcome !== "accepted") {
      setInstallUI(false);
      setTimeout(() => setInstallUI(true), 8000);
      return;
    }
  };

  document.getElementById("btn-install")?.addEventListener("click", onInstallClick);
  document.getElementById("btn-install-2")?.addEventListener("click", onInstallClick);
}

/* ==========================================================================
   Drawer (si existe en el HTML)
========================================================================== */
let __drawerBound = false;

function drawerEls() {
  return {
    btnMenu: document.getElementById("btn-menu"),
    overlay: document.getElementById("drawer-overlay"),
    drawer: document.getElementById("app-drawer"),
    btnClose: document.getElementById("drawer-close"),
    userName: document.getElementById("drawer-user-name"),
    userEmail: document.getElementById("drawer-user-email"),
    buildTag: document.getElementById("drawer-build")
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
  document.body.style.overflow = "hidden";

  setTimeout(() => (btnClose || drawer).focus?.(), 0);
}

function closeDrawer() {
  const { overlay, drawer, btnMenu } = drawerEls();
  if (!overlay || !drawer) return;

  overlay.hidden = true;
  drawer.hidden = true;
  document.body.style.overflow = "";

  setTimeout(() => btnMenu?.focus?.(), 0);
}

function toggleDrawer() {
  if (isDrawerOpen()) closeDrawer();
  else openDrawer();
}

function setDrawerProfile(profile, user) {
  const { userName, userEmail, buildTag } = drawerEls();
  if (userName) userName.textContent = profile?.label || user?.displayName || "Docente";
  if (userEmail) userEmail.textContent = String(user?.email || "").trim() || "—";
  if (buildTag) buildTag.textContent = `BUILD ${BUILD}`;
}

function wireDrawerHandlers(auth) {
  if (__drawerBound) return;
  __drawerBound = true;

  const { btnMenu, overlay, drawer, btnClose } = drawerEls();
  if (!overlay || !drawer) return;

  btnMenu?.addEventListener("click", toggleDrawer);
  btnClose?.addEventListener("click", closeDrawer);
  overlay.addEventListener("click", closeDrawer);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isDrawerOpen()) closeDrawer();
  });

  // Delegación: cualquier elemento con [data-action]
  drawer.addEventListener("click", async (e) => {
    const btn = e.target.closest("[data-action]");
    if (!btn) return;

    const action = String(btn.getAttribute("data-action") || "").trim();
    if (!action) return;

    closeDrawer();

    if (action === "logout") {
      await doLogout(auth);
      return;
    }

    if (action === "install") {
      (document.getElementById("btn-install-2") || document.getElementById("btn-install"))?.click?.();
      return;
    }

    // open:<id>
    if (/^open:/i.test(action)) {
      const id = action.split(":")[1] || "";
      if (!id) return;

      if (id === "carnet") {
        openCarnet(ACTIVE_PROFILE);
        return;
      }

      const url = String(ACTIVE_LINKS?.[id] || "").trim();
      if (!url) {
        toast(`Pendiente: falta pegar el link de “${id}”`);
        return;
      }
      if (!openExternal(url)) toast("Ese link está raro y lo bloqueé 😶‍🌫️");
      return;
    }

    const href = btn.getAttribute("data-href");
    if (href) {
      if (!openExternal(href)) toast("Ese link está raro y lo bloqueé 😶‍🌫️");
    }
  }, { passive: true });
}

/* ==========================================================================
   Carnet modal (se crea dinámico)
========================================================================== */
let __carnetModal = null;

function ensureCarnetModal() {
  if (__carnetModal) return __carnetModal;

  const modal = document.createElement("div");
  modal.id = "carnetModal";
  modal.hidden = true;
  modal.setAttribute("role", "dialog");
  modal.setAttribute("aria-modal", "true");
  modal.setAttribute("aria-label", "Carnet docente");

  modal.innerHTML = `
    <div class="carnetCard">
      <div class="carnetTop">
        <div class="carnetTitle" id="carnetTitle">Carnet docente</div>
        <button type="button" id="carnetClose" class="btnGhost">Cerrar</button>
      </div>
      <div class="carnetBody">
        <img id="carnetImg" alt="Carnet docente" />
        <div id="carnetNote">Muestra este carnet para validar tu vinculación con Musicala.</div>
      </div>
    </div>
  `;

  Object.assign(modal.style, {
    position: "fixed",
    inset: "0",
    background: "rgba(11,16,32,.55)",
    backdropFilter: "blur(6px)",
    WebkitBackdropFilter: "blur(6px)",
    display: "grid",
    placeItems: "center",
    zIndex: "9999",
    padding: "18px"
  });

  const card = modal.querySelector(".carnetCard");
  const top = modal.querySelector(".carnetTop");
  const img = modal.querySelector("#carnetImg");
  const note = modal.querySelector("#carnetNote");
  const btn = modal.querySelector("#carnetClose");

  if (card) Object.assign(card.style, {
    width: "min(680px, 100%)",
    background: "rgba(255,255,255,.92)",
    border: "1px solid rgba(11,16,32,.14)",
    borderRadius: "22px",
    boxShadow: "0 28px 80px rgba(11,16,32,.22)",
    overflow: "hidden"
  });
  if (top) Object.assign(top.style, {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "10px",
    padding: "12px 14px",
    background: "rgba(255,255,255,.86)",
    borderBottom: "1px solid rgba(11,16,32,.10)"
  });
  if (img) Object.assign(img.style, {
    width: "100%",
    height: "auto",
    borderRadius: "16px",
    border: "1px solid rgba(11,16,32,.10)",
    background: "rgba(255,255,255,.6)",
    display: "block"
  });
  if (note) Object.assign(note.style, {
    marginTop: "10px",
    fontSize: "12px",
    color: "rgba(11,16,32,.68)",
    textAlign: "center"
  });
  if (btn) Object.assign(btn.style, {
    height: "36px",
    padding: "0 12px",
    borderRadius: "12px",
    border: "1px solid rgba(11,16,32,.14)",
    background: "rgba(255,255,255,.92)",
    fontWeight: "850",
    cursor: "pointer"
  });

  const close = () => {
    modal.hidden = true;
    document.body.style.overflow = "";
  };

  modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
  btn?.addEventListener("click", close);
  window.addEventListener("keydown", (e) => { if (e.key === "Escape" && !modal.hidden) close(); });

  document.body.appendChild(modal);
  __carnetModal = modal;
  return modal;
}

function openCarnet(profile) {
  const path = String(profile?.carnet || "").trim();
  if (!path) {
    toast("Este usuario no tiene carnet asignado en /assets 😶‍🌫️");
    return;
  }

  const modal = ensureCarnetModal();
  const img = modal.querySelector("#carnetImg");
  const title = modal.querySelector("#carnetTitle");

  if (title) title.textContent = `Carnet · ${profile?.label || "Docente"}`;

  if (img) {
    img.removeAttribute("src");
    img.onerror = null;
    img.src = path;
    img.onerror = () => {
      toast("No pude cargar el carnet. Revisa el nombre del archivo en /assets 😵");
      img.onerror = null;
    };
  }

  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

/* ==========================================================================
   Render botones (agrupado por secciones + colapsable)
========================================================================== */
let ACTIVE_LINKS = {};
let ACTIVE_PROFILE = null;
let ACTIVE_EMAIL = "";

function sectionStoreKey(email) {
  return `musicala_docenteshub_sections_${String(email || "").toLowerCase()}`;
}

function groupBySection(buttons = []) {
  const map = new Map();
  for (const b of buttons) {
    const sec = b.section || "Accesos";
    if (!map.has(sec)) map.set(sec, []);
    map.get(sec).push(b);
  }
  return map;
}

function getSectionPrefs(email) {
  return lsGet(sectionStoreKey(email), { collapsed: {} }) || { collapsed: {} };
}
function setSectionCollapsed(email, sec, collapsed) {
  const prefs = getSectionPrefs(email);
  prefs.collapsed = prefs.collapsed || {};
  prefs.collapsed[String(sec)] = !!collapsed;
  lsSet(sectionStoreKey(email), prefs);
}

function renderButtons(buttons, links, profile, email) {
  const grid = $("#grid");
  if (!grid) return;

  ACTIVE_LINKS = links || {};
  ACTIVE_PROFILE = profile || null;
  ACTIVE_EMAIL = String(email || "").toLowerCase();

  const prefs = getSectionPrefs(ACTIVE_EMAIL);
  const collapsedMap = prefs?.collapsed || {};

  const sections = groupBySection(buttons || []);
  const parts = [];

  for (const [sec, items] of sections.entries()) {
    const isCollapsed = !!collapsedMap[String(sec)];
    const secId = `sec_${String(sec).toLowerCase().replace(/\s+/g, "_").replace(/[^\w]/g, "")}_${Math.random().toString(16).slice(2, 7)}`;

    // Header clickable (no depende del CSS)
    parts.push(`
      <div class="secBlock" data-sec="${escapeHtml(sec)}" style="grid-column: 1 / -1;">
        <button type="button"
                class="secTitle"
                data-sec-toggle="${escapeHtml(sec)}"
                aria-expanded="${isCollapsed ? "false" : "true"}"
                aria-controls="${secId}"
                style="width:100%; text-align:left; background:transparent; border:0; padding:12px 6px 8px; cursor:pointer;">
          ${escapeHtml(sec)} <span style="margin-left:auto; font-weight:900; opacity:.65;">${isCollapsed ? "＋" : "－"}</span>
        </button>
      </div>
    `);

    // Container section items
    parts.push(`
      <div class="secItems" id="${secId}" data-sec-items="${escapeHtml(sec)}"
           style="display:${isCollapsed ? "none" : "contents"};">
    `);

    for (const b of items) {
      const isSpecial = (b.id === "carnet");
      const url = isSpecial ? "__SPECIAL__" : String(ACTIVE_LINKS[b.id] || "").trim();
      const pending = (!isSpecial && !url);
      const cls = pending ? "tile pending" : "tile";
      const badge = pending
        ? '<span class="badge">Pendiente</span>'
        : '<span class="badge ok">Abrir</span>';

      parts.push(`
        <button class="${cls}" type="button" data-id="${escapeHtml(b.id)}" aria-label="${escapeHtml(b.title)}">
          <div class="tileTop">
            <div class="ico" aria-hidden="true">${escapeHtml(b.icon)}</div>
            ${badge}
          </div>
          <div class="tileText">
            <div class="tTitle">${escapeHtml(b.title)}</div>
            <div class="tSub">${escapeHtml(b.subtitle)}</div>
          </div>
        </button>
      `);
    }

    parts.push(`</div>`);
  }

  grid.innerHTML = parts.join("");

  // Bind once: clicks tiles + toggles sections
  if (!grid.__boundClick) {
    grid.__boundClick = true;

    grid.addEventListener("click", (e) => {
      // Toggle section
      const t = e.target.closest("[data-sec-toggle]");
      if (t) {
        const sec = t.getAttribute("data-sec-toggle") || "";
        const expanded = t.getAttribute("aria-expanded") === "true";
        const newExpanded = !expanded;

        t.setAttribute("aria-expanded", newExpanded ? "true" : "false");

        // icon +/-
        const lastSpan = t.querySelector("span");
        if (lastSpan) lastSpan.textContent = newExpanded ? "－" : "＋";

        const containerSel = `[data-sec-items="${CSS.escape(sec)}"]`;
        const container = grid.querySelector(containerSel);
        if (container) container.style.display = newExpanded ? "contents" : "none";

        setSectionCollapsed(ACTIVE_EMAIL, sec, !newExpanded);
        return;
      }

      // Tile open
      const btn = e.target.closest("button[data-id]");
      if (!btn) return;

      const id = btn.getAttribute("data-id");

      if (id === "carnet") {
        openCarnet(ACTIVE_PROFILE);
        return;
      }

      const url = String(ACTIVE_LINKS[id] || "").trim();
      if (!url) {
        toast(`Pendiente: falta pegar el link de “${id}”`);
        return;
      }

      if (!openExternal(url)) toast("Ese link está raro y lo bloqueé 😶‍🌫️");
    }, { passive: true });
  }
}

/* ==========================================================================
   Auth
========================================================================== */
function prettyName(user, fallbackEmail = "") {
  const name = user?.displayName || "";
  const email = user?.email || fallbackEmail || "";
  return name ? name : (email ? email : "Sesión activa");
}

function friendlyAuthError(code = "") {
  if (code === "auth/unauthorized-domain") return "Dominio no autorizado en Firebase Auth (Authorized domains).";
  if (code === "auth/popup-blocked") return "El navegador bloqueó el popup. En modo app instalada usamos redirect.";
  if (code === "auth/cancelled-popup-request") return "Se canceló el popup de inicio de sesión.";
  if (code === "auth/popup-closed-by-user") return "Cerraste el login.";
  if (code === "auth/network-request-failed") return "Falló la red. Revisa internet.";
  return "";
}

async function doGoogleLogin(auth) {
  const provider = new GoogleAuthProvider();
  provider.setCustomParameters({ prompt: "select_account" });

  try {
    await setPersistence(auth, browserLocalPersistence);

    // En standalone/PWA, redirect es más estable que popup
    if (isStandalone()) {
      await signInWithRedirect(auth, provider);
      return;
    }

    await signInWithPopup(auth, provider);
  } catch (err) {
    const code = err?.code || "";
    if (code === "auth/popup-closed-by-user") return;

    const friendly = friendlyAuthError(code);
    toast(friendly ? `No se pudo iniciar sesión: ${friendly}` : "No se pudo iniciar sesión");
    console.error("Login error:", err);
  }
}

async function doLogout(auth) {
  try {
    closeDrawer();
    await signOut(auth);
  } catch (err) {
    toast("No se pudo cerrar sesión");
    console.error(err);
  }
}

/* ==========================================================================
   Boot
========================================================================== */
function assertConfig(cfg) {
  const bad = !cfg || !cfg.apiKey || !cfg.authDomain || !cfg.projectId || !cfg.appId;
  if (!bad) return true;
  console.warn("Firebase config incompleto. Revisa firebaseConfig en app.js");
  return false;
}

async function finalizeRedirectIfAny(auth) {
  try {
    const res = await getRedirectResult(auth);
    if (res?.user) console.log("Redirect login OK:", res.user.email || res.user.uid);
  } catch (err) {
    const code = err?.code || "";
    if (code) {
      const friendly = friendlyAuthError(code);
      toast(friendly ? `Login redirect falló: ${friendly}` : "Login redirect falló");
      console.warn("Redirect result error:", err);
    }
  }
}

function emailKey(user) {
  return String(user?.email || "").toLowerCase().trim();
}

function hasUserRestrictions() {
  return HUB.USERS && Object.keys(HUB.USERS).length > 0;
}

function buildLinksForUser(email) {
  const base = { ...(HUB.GENERAL_LINKS || {}) };
  const prof = HUB.USERS?.[email] || null;
  const overrides = prof?.links || {};
  return { ...base, ...overrides };
}

/* ==========================================================================
   Net Pill (mejorado)
========================================================================== */
function setNetPill() {
  const pill = document.getElementById("net-pill");
  if (!pill) return;

  const conn = navigator.connection || navigator.mozConnection || navigator.webkitConnection;

  const classify = () => {
    const online = navigator.onLine !== false;
    let poor = false;

    if (conn && typeof conn.effectiveType === "string") {
      // 2g/3g suelen ser lentos, 4g ok
      poor = /(^2g$|^3g$|slow-2g)/i.test(conn.effectiveType);
    }

    pill.classList.toggle("offline", !online);
    pill.classList.toggle("poor", online && poor);

    if (!online) pill.textContent = "Offline";
    else if (poor) pill.textContent = "Conexión lenta";
    else pill.textContent = "Online";
  };

  classify();
  window.addEventListener("online", classify);
  window.addEventListener("offline", classify);
  conn?.addEventListener?.("change", classify);
}

/* ==========================================================================
   Mount
========================================================================== */
async function mount() {
  try { document.title = "Musicala Docentes Hub"; } catch (_) {}

  if (!assertConfig(firebaseConfig)) {
    show("login");
    toast("Falta configurar Firebase en app.js");
    return;
  }

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  try {
    await setPersistence(auth, browserLocalPersistence);
  } catch (e) {
    console.warn("No se pudo setPersistence:", e);
  }

  await finalizeRedirectIfAny(auth);

  const btnGoogle = $("#btn-google");
  const btnOut = $("#btn-logout");
  const userLine = $("#user-line");

  btnGoogle?.addEventListener("click", () => doGoogleLogin(auth));
  btnOut?.addEventListener("click", () => doLogout(auth));

  wireDrawerHandlers(auth);

  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      show("login");
      closeDrawer();
      return;
    }

    const email = emailKey(user);

    // Lista blanca por correo
    if (hasUserRestrictions() && !HUB.USERS[email]) {
      toast("Tu correo no está autorizado para este hub 🫠");
      try { await signOut(auth); } catch (_) {}
      show("login");
      closeDrawer();
      return;
    }

    const profile = HUB.USERS?.[email] || null;
    const mergedLinks = buildLinksForUser(email);

    if (userLine) userLine.textContent = profile?.label || prettyName(user, email);

    setDrawerProfile(profile, user);

    show("app");
    renderButtons(HUB.BUTTONS || [], mergedLinks, profile, email);
  });
}

/* ==========================================================================
   DOMContentLoaded
========================================================================== */
document.addEventListener("DOMContentLoaded", () => {
  console.log("BUILD", BUILD);

  registerServiceWorker();
  setupInstallPrompt();
  wireUpdateBanner();
  setNetPill();
  mount();
});