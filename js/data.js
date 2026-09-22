/**
 * data.js
 * Toutes les données du portfolio, séparées de la présentation.
 * Pour ajouter un projet, une compétence ou une expérience : modifiez
 * uniquement ce fichier, jamais index.html.
 */

export const projects = [
  {
    id: "p1",
    title: "FreeAds",
    category: "web",
    categoryLabel: "Web",
    description: "Site d'annonces gratuites avec authentification et confirmation par email, gestion complète des annonces (CRUD) avec photos, et filtres de recherche par catégorie, localisation et prix.",
    technologies: ["Laravel", "PHP", "Eloquent ORM", "MVC", "MySQL", "Blade"],
    image: "assets/images/projects/p1-freeads.svg",
    github: "",
    demo: "",
    featured: true
  },
  {
    id: "p2",
    title: "TourVoyage — Plateforme de gestion pour agence de voyage",
    category: "web",
    categoryLabel: "Web",
    description: "Plateforme de gestion pour une agence de voyage : réservations, suivi de l'avancement des dossiers clients, prise de rendez-vous, tableau de bord dédié à la direction et espace employé. Projet actuellement en cours de développement.",
    technologies: ["Laravel", "Vue.js"],
    image: "assets/images/projects/p2-tourvoyage.svg",
    github: "",
    demo: "",
    featured: true
  },
  {
    id: "p3",
    title: "YOWL Côte d'Ivoire",
    category: "web",
    categoryLabel: "Web",
    description: "Plateforme communautaire permettant de laisser et consulter des avis sur tout type de contenu web. API en Laravel, interface en Vue.js, authentification sécurisée et conteneurisation Docker, déployée sur Netlify et Laravel Cloud.",
    technologies: ["Vue.js", "Laravel", "PHP", "PostgreSQL", "Docker", "API REST"],
    image: "assets/images/projects/p3-yowl.svg",
    github: "",
    demo: "",
    featured: true
  },
  {
    id: "p4",
    title: "Live Corp — Big Data Pipeline",
    category: "data-engineering",
    categoryLabel: "Data Engineering",
    description: "Pipeline complet d'extraction de flux RSS (Franceinfo), classification automatique des articles et modèle prédictif, exécuté sur JupyterHub Azure avec une démonstration interactive sous Streamlit.",
    technologies: ["Python", "RSS / Feedparser", "Dataiku", "JupyterHub", "Azure"],
    image: "assets/images/projects/p4-livecorp.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p5",
    title: "Fashion MNIST — Deep Learning",
    category: "ia",
    categoryLabel: "IA",
    description: "Classification d'images de vêtements (jeu de données Zalando, 60 000 exemples) avec un réseau de neurones dense sous Keras, incluant l'optimisation des couches, du nombre de neurones et des epochs, et l'analyse via matrice de confusion.",
    technologies: ["TensorFlow", "Keras", "Dense Layer", "ReLU", "Softmax"],
    image: "assets/images/projects/p5-fashion-mnist.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p6",
    title: "Grocery Data — Analyse exploratoire",
    category: "data-science",
    categoryLabel: "Data Science",
    description: "Analyse exploratoire de plus de 3 millions de commandes et 200 000 utilisateurs : habitudes d'achat, taux de réachat (reorder rate) et comparaison entre produits bio et non bio.",
    technologies: ["Python", "Pandas", "Matplotlib", "Seaborn", "Streamlit"],
    image: "assets/images/projects/p6-grocery-data.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p7",
    title: "Web Scraping — LeBonCoin",
    category: "data-engineering",
    categoryLabel: "Data Engineering",
    description: "Scraping automatisé des annonces PS5 toutes les 5 minutes, avec sérialisation des données via pickle et visualisation de l'évolution des prix jour par jour.",
    technologies: ["Python", "BeautifulSoup", "Pandas", "Seaborn", "Requests", "Pickle"],
    image: "assets/images/projects/p7-scraping-leboncoin.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p8",
    title: "Sentiment Analysis — Twitter",
    category: "ia",
    categoryLabel: "IA",
    description: "Pipeline temps réel de bout en bout : extraction de tweets via Kafka, classification des sentiments entraînée sur le jeu de données IMDB, chargement dans PostgreSQL et restitution via un tableau de bord Power BI.",
    technologies: ["Apache Kafka", "Python", "Tweepy", "IMDB Dataset", "scikit-learn", "PostgreSQL"],
    image: "assets/images/projects/p8-sentiment-twitter.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p9",
    title: "Olist Brazilian E-commerce",
    category: "data-engineering",
    categoryLabel: "Data Engineering",
    description: "Transformation et modélisation d'un jeu de données e-commerce brésilien (Olist) avec dbt et DuckDB, restituées via un tableau de bord Streamlit.",
    technologies: ["dbt", "Streamlit", "SQL", "Python", "DuckDB"],
    image: "assets/images/projects/p9-olist.svg",
    github: "",
    demo: "",
    featured: false
  },
  {
    id: "p10",
    title: "Awalé Boissons — Reporting Marketing par la Donnée & l'IA",
    category: "ia",
    categoryLabel: "IA",
    description: "Étude de cas technique (challenge de recrutement AI Engineer) : unification de cinq sources de données hétérogènes et imparfaites — dépenses publicitaires, ventes en point de vente, commentaires sociaux, commandes WhatsApp, plan média — en un modèle de données fiable avec dbt et DuckDB. Classification des commentaires clients (sentiment, thème, spam) via l'API Anthropic pour alimenter une recommandation mensuelle d'allocation du budget marketing, restituée dans un tableau de bord Streamlit.",
    technologies: ["dbt", "DuckDB", "SQL", "Airflow", "Anthropic API", "Prompt Engineering", "Pandas", "Streamlit"],
    image: "assets/images/projects/p10-awale.svg",
    github: "",
    demo: "",
    featured: true
  }
];

export const skills = [
  {
    domain: "Développement Web & Backend",
    items: ["JavaScript", "Vue.js", "HTML5 & CSS3", "Laravel", "Node.js", "REST / GraphQL"]
  },
  {
    domain: "Data Engineering",
    items: ["dbt", "SQL", "Pipelines ETL", "BigQuery"]
  },
  {
    domain: "Data Science",
    items: ["Pandas", "NumPy", "scikit-learn", "TensorFlow", "Streamlit", "Visualisation de données"]
  },
  {
    domain: "Intelligence Artificielle",
    items: ["LLM & prompt engineering", "Déploiement de modèles", "FastAPI"]
  },
  {
    domain: "Outils & méthode",
    items: ["Git / GitHub", "CI/CD", "Méthodes agiles", "Documentation technique"]
  }
];

export const services = [
  {
    title: "Développement Web Full-Stack",
    description: "Conception et développement d'applications web sur mesure, du frontend à l'API, prêtes pour la production.",
    deliverables: [
      "Application web responsive et accessible",
      "API REST documentée",
      "Déploiement et mise en production"
    ],
    icon: "code"
  },
  {
    title: "Data Engineering",
    description: "Mise en place de pipelines de données fiables pour centraliser, nettoyer et structurer vos données.",
    deliverables: [
      "Pipeline ETL/ELT automatisé",
      "Modélisation de l'entrepôt de données",
      "Documentation et monitoring"
    ],
    icon: "database"
  },
  {
    title: "Data Science & IA",
    description: "Modèles prédictifs et solutions d'intelligence artificielle appliquées à vos problématiques métier.",
    deliverables: [
      "Modèle entraîné et évalué",
      "Tableau de bord ou API de restitution",
      "Reporting automatisé combinant données et IA pour équipes marketing/commerciales",
      "Rapport d'interprétation des résultats"
    ],
    icon: "chart"
  }
];

export const experiences = [
  {
    role: "Animateur STEM — Robotique & Impression 3D",
    organization: "Centre Ivoirien de Robotique (CIR)",
    period: "Juillet 2026 — Présent",
    description: "Animation d'ateliers d'initiation et de perfectionnement à la robotique, formation aux technologies et processus d'impression 3D, et accompagnement technique sur les projets pratiques des apprenants."
  },
  {
    role: "Commercial et Chargé de Relation Client",
    organization: "Results SA",
    period: "Juillet 2025 — Décembre 2025",
    description: "Gestion du cycle de vente et conseil auprès de la clientèle, suivi et développement de la relation client pour la fidélisation."
  },
  {
    role: "Chargé de Qualité de Données",
    organization: "DKservice",
    period: "Mars 2025 — Mai 2025",
    description: "Nettoyage, tri et fiabilisation des ensembles de données de l'entreprise, structuration et réorganisation via des tableaux Microsoft Excel."
  },
  {
    role: "Animateur STEM (Science, Technology, Engineering, Mathematics)",
    organization: "Melzone",
    period: "Décembre 2023 — Octobre 2024",
    description: "Enseignement des bases de l'algorithmique et de la programmation, initiation pratique à l'utilisation de microcontrôleurs, et accompagnement des élèves dans la conception de projets techniques."
  }
];

export const certifications = [
  {
    title: "Full-Stack Web Developer & Back-End Developer",
    organization: "IBM",
    period: "2026",
    credentialUrl: ""
  },
  {
    title: "Fullstack & Data Science / Intelligence Artificielle — RNCP Niveau 5",
    organization: "Epitech Côte d'Ivoire (certifié GIZ)",
    period: "2025 — 2026",
    credentialUrl: ""
  },
  {
    title: "Licence en Data Science",
    organization: "Institut CERCO — Abidjan",
    period: "2023 — en cours",
    credentialUrl: ""
  },
  {
    title: "Baccalauréat — Série D",
    organization: "Lycée Moderne Ernest Boka, Agboville",
    period: "2022",
    credentialUrl: ""
  }
];
