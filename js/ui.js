/**
 * ui.js
 * Toutes les fonctions de comportement (DOM). Ne contient aucune donnée brute :
 * les données arrivent en paramètre depuis data.js via main.js.
 */

const icons = {
  code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18l-6-6 6-6M15 6l6 6-6 6"/></svg>',
  database: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="5" rx="8" ry="3"/><path d="M4 5v14c0 1.66 3.58 3 8 3s8-1.34 8-3V5"/><path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3"/></svg>',
  chart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V10M12 20V4M20 20v-7"/></svg>'
};

/* ==========================================================================
   NAVBAR : sticky, menu mobile, section active
   ========================================================================== */

export function initNavbar() {
  const navbar = document.getElementById("navbar");
  const nav = document.getElementById("navbar-nav");
  const burger = document.getElementById("navbar-burger");
  const links = document.querySelectorAll(".navbar__link");

  window.addEventListener(
    "scroll",
    () => {
      navbar.classList.toggle("is-scrolled", window.scrollY > 8);
    },
    { passive: true }
  );

  burger.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(isOpen));
    burger.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  links.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });

  const sections = Array.from(document.querySelectorAll("main section[id]"));
  if (!("IntersectionObserver" in window) || sections.length === 0) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const id = entry.target.getAttribute("id");
        links.forEach((link) => {
          link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
        });
      });
    },
    { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
  );

  sections.forEach((section) => observer.observe(section));
}

/* ==========================================================================
   THÈME CLAIR / SOMBRE
   ========================================================================== */

export function initTheme() {
  const root = document.documentElement;
  const toggle = document.getElementById("theme-toggle");
  const stored = localStorage.getItem("theme");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const initial = stored || (prefersDark ? "dark" : "light");

  applyTheme(initial);

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    applyTheme(next);
    localStorage.setItem("theme", next);
  });

  function applyTheme(theme) {
    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      toggle.setAttribute("aria-pressed", "true");
      toggle.setAttribute("aria-label", "Activer le thème clair");
    } else {
      root.removeAttribute("data-theme");
      toggle.setAttribute("aria-pressed", "false");
      toggle.setAttribute("aria-label", "Activer le thème sombre");
    }
  }
}

/* ==========================================================================
   COMPÉTENCES
   ========================================================================== */

export function renderSkills(skills) {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;

  grid.innerHTML = skills
    .map(
      (group) => `
      <article class="skill-card reveal">
        <p class="skill-card__domain">${group.domain}</p>
        <div class="skill-card__list">
          ${group.items.map((item) => `<span class="skill-card__item">${item}</span>`).join("")}
        </div>
      </article>`
    )
    .join("");
}

/* ==========================================================================
   PROJETS + FILTRES
   ========================================================================== */

export function renderProjects(projects) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;

  grid.innerHTML = projects
    .map(
      (p) => `
      <article class="project-card reveal" data-category="${p.category}">
        <img class="project-card__image" src="${p.image}" alt="Aperçu du projet ${p.title}" loading="lazy" width="640" height="400">
        <div class="project-card__body">
          <p class="project-card__category">${p.categoryLabel}</p>
          <h3 class="project-card__title">${p.title}</h3>
          <p class="project-card__description">${p.description}</p>
          <div class="project-card__tech">
            ${p.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="project-card__links">
            ${p.github ? `<a href="${p.github}" target="_blank" rel="noopener noreferrer">Code source</a>` : ""}
            ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener noreferrer">Démo</a>` : ""}
          </div>
        </div>
      </article>`
    )
    .join("");
}

export function initFilters() {
  const buttons = document.querySelectorAll(".filter-btn");
  const grid = document.getElementById("projects-grid");
  if (!buttons.length || !grid) return;

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      buttons.forEach((b) => b.classList.remove("is-active"));
      btn.classList.add("is-active");

      const filter = btn.dataset.filter;
      const cards = grid.querySelectorAll(".project-card");
      let visibleCount = 0;

      cards.forEach((card) => {
        const match = filter === "all" || card.dataset.category === filter;
        card.style.display = match ? "" : "none";
        if (match) visibleCount += 1;
      });

      grid.setAttribute("data-empty", String(visibleCount === 0));
    });
  });
}

/* ==========================================================================
   SERVICES
   ========================================================================== */

export function renderServices(services) {
  const grid = document.getElementById("services-grid");
  if (!grid) return;

  grid.innerHTML = services
    .map(
      (s) => `
      <article class="service-card reveal">
        <span class="service-card__icon">${icons[s.icon] || ""}</span>
        <h3 class="service-card__title">${s.title}</h3>
        <p class="service-card__description">${s.description}</p>
        <ul class="service-card__deliverables">
          ${s.deliverables.map((d) => `<li>${d}</li>`).join("")}
        </ul>
      </article>`
    )
    .join("");
}

/* ==========================================================================
   PARCOURS (expériences + certifications)
   ========================================================================== */

export function renderTimeline(experiences, certifications) {
  const expList = document.getElementById("experience-timeline");
  const certList = document.getElementById("certifications-timeline");

  if (expList) {
    expList.innerHTML = experiences
      .map(
        (e) => `
        <li class="timeline-item">
          <p class="timeline-item__period">${e.period}</p>
          <h4 class="timeline-item__title">${e.role}</h4>
          <p class="timeline-item__org">${e.organization}</p>
          <p class="timeline-item__description">${e.description}</p>
        </li>`
      )
      .join("");
  }

  if (certList) {
    certList.innerHTML = certifications
      .map(
        (c) => `
        <li class="timeline-item">
          <p class="timeline-item__period">${c.period}</p>
          <h4 class="timeline-item__title">${c.credentialUrl ? `<a href="${c.credentialUrl}" target="_blank" rel="noopener noreferrer">${c.title}</a>` : c.title}</h4>
          <p class="timeline-item__org">${c.organization}</p>
        </li>`
      )
      .join("");
  }
}

/* ==========================================================================
   FORMULAIRE DE CONTACT (Formspree)
   ========================================================================== */

export function initContactForm() {
  const form = document.getElementById("contact-form");
  const note = document.getElementById("form-note");
  if (!form) return;

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitBtn = form.querySelector(".form-submit");
    submitBtn.disabled = true;
    note.textContent = "Envoi en cours…";
    note.removeAttribute("data-state");

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        note.textContent = "Message envoyé — je vous réponds rapidement.";
        note.setAttribute("data-state", "success");
        form.reset();
      } else {
        throw new Error("Réponse non valide du serveur.");
      }
    } catch (error) {
      note.textContent = "L'envoi a échoué. Écrivez-moi directement par email.";
      note.setAttribute("data-state", "error");
    } finally {
      submitBtn.disabled = false;
    }
  });
}

/* ==========================================================================
   BOUTON RETOUR EN HAUT
   ========================================================================== */

export function initScrollTop() {
  const btn = document.getElementById("back-to-top");
  if (!btn) return;

  window.addEventListener(
    "scroll",
    () => {
      btn.classList.toggle("is-visible", window.scrollY > 480);
    },
    { passive: true }
  );

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ==========================================================================
   RÉVÉLATION AU SCROLL (léger, non intrusif)
   ========================================================================== */

export function initRevealAnimations() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window) || items.length === 0) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  items.forEach((el) => observer.observe(el));
}

/* ==========================================================================
   FOOTER — année courante
   ========================================================================== */

export function initFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}
