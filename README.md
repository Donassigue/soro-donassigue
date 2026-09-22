# Portfolio — Prénom Nom

Portfolio professionnel de **Prénom Nom**, Développeur Full-Stack & Data Engineer
spécialisé en Data Science et Intelligence Artificielle. Construit en HTML, CSS et
JavaScript natifs, sans framework ni dépendance de build.

## Aperçu

Le portfolio présente le profil, les compétences, une sélection de projets
filtrables par domaine, les services proposés en freelance, le parcours
(expériences et formations), et un formulaire de contact.

## Stack technique

- **HTML5** — structure sémantique
- **CSS3** — variables natives, mobile-first, thème clair/sombre
- **JavaScript ES6+** (modules natifs, aucun bundler)
- **Formspree** pour le traitement du formulaire de contact (aucun backend requis)

Aucun framework (React, Vue, Angular) ni bibliothèque CSS (Bootstrap, Tailwind)
n'est utilisé.

## Architecture

```text
portfolio/
├── index.html              → structure de toutes les sections
├── assets/
│   ├── images/              → profil, projets, certifications, icônes
│   ├── fonts/                → polices locales éventuelles
│   └── documents/cv.pdf      → CV téléchargeable
├── css/
│   ├── variables.css         → reset, tokens de design, thème clair/sombre
│   ├── layout.css             → structure des sections, grilles, responsive
│   └── components.css         → boutons, cartes, formulaire, navbar, etc.
├── js/
│   ├── main.js                → point d'entrée, orchestration des modules
│   ├── data.js                  → données (projets, compétences, services, parcours)
│   └── ui.js                     → logique de rendu et d'interaction
├── favicon/
├── README.md
└── .gitignore
```

Les données (projets, compétences, services, expériences, certifications) sont
centralisées dans `js/data.js`, séparées de la présentation. Pour ajouter ou
modifier du contenu, il suffit d'éditer ce fichier — aucune modification du
HTML n'est nécessaire.

## Fonctionnalités

- Navigation fluide avec navbar sticky et mise en évidence de la section active
- Menu mobile
- Thème clair / sombre avec persistance (`localStorage`)
- Génération dynamique des cartes projets, compétences, services et parcours
- Filtres de projets par domaine (Web, Data Engineering, Data Science, IA)
- Formulaire de contact fonctionnel via Formspree
- Animations légères au scroll (désactivées si `prefers-reduced-motion`)
- Bouton retour en haut de page

## Installation et utilisation

Aucune installation n'est nécessaire. Deux options pour visualiser le site en local :

**Option 1 — ouverture directe**
Ouvrir `index.html` dans un navigateur.

**Option 2 — serveur local** (recommandé, évite certaines restrictions liées aux modules ES6)
```bash
# Avec Python
python3 -m http.server 8000

# Avec Node.js
npx serve .
```
Puis ouvrir `http://localhost:8000`.

## Personnalisation

1. Remplacer les textes placeholder dans `index.html` (nom, titre, section À propos, contact).
2. Éditer `js/data.js` avec vos vrais projets, compétences, services, expériences et certifications.
3. Remplacer les images dans `assets/images/` et le CV dans `assets/documents/cv.pdf`.
4. Mettre à jour les liens GitHub / LinkedIn dans `index.html` (hero et footer).
5. Créer un formulaire sur [Formspree](https://formspree.io) et remplacer
   `VOTRE_ID_FORMSPREE` dans l'attribut `action` du formulaire de contact
   (`index.html`) par l'identifiant fourni.
6. Générer un favicon personnalisé si besoin (le fichier actuel dans `favicon/`
   est un exemple minimal basé sur des initiales).

## Déploiement

Le site est 100 % statique et compatible avec :

- **GitHub Pages** — Settings → Pages → déployer depuis la branche `main`.
- **Netlify** — glisser-déposer le dossier, ou connecter le dépôt GitHub.
- **Vercel** — importer le dépôt, aucune configuration de build nécessaire.

Aucun backend n'est requis pour cette version. Le formulaire de contact dépend
d'un service externe (Formspree) plutôt que d'un serveur propre — voir la
section Personnalisation ci-dessus.

## Licence

Libre d'utilisation et d'adaptation pour un usage personnel.
