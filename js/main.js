import { projects, skills, services, experiences, certifications } from "./data.js";
import {
  initNavbar,
  initTheme,
  renderSkills,
  renderProjects,
  initFilters,
  renderServices,
  renderTimeline,
  initContactForm,
  initScrollTop,
  initRevealAnimations,
  initFooterYear
} from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  // Thème appliqué en premier pour éviter tout flash de contenu.
  initTheme();

  initNavbar();

  renderSkills(skills);
  renderProjects(projects);
  initFilters();
  renderServices(services);
  renderTimeline(experiences, certifications);

  initContactForm();
  initScrollTop();
  initFooterYear();

  // Doit s'exécuter après le rendu des données : les cartes générées
  // portent la classe .reveal observée ici.
  initRevealAnimations();
});
