# EyesTechnology — Site vitrine

Site vitrine de Beidy Dia, développeur web & mobile freelance à Bamako (Mali), sous la marque **EyesTechnology**.

Site bilingue français / anglais, thèmes clair et sombre, contact direct via WhatsApp, calculateur de devis instantané en FCFA.

## Stack technique

- **React 18** + **TypeScript**
- **Vite 5** (build & dev server)
- **Tailwind CSS 3** (dark mode par classe)
- **React Router 7** (SPA)
- **Framer Motion** (animations)
- **React Hook Form** (formulaire de contact)

## Installation

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev
# → http://localhost:5173
```

Prérequis : Node.js ≥ 18.

## Commandes

| Commande | Description |
|---|---|
| `npm run dev` | Serveur de développement (HMR) |
| `npm run build` | Build de production dans `dist/` |
| `npm run preview` | Prévisualiser le build de production |
| `npm run typecheck` | Vérification TypeScript (`tsc --noEmit`) |
| `npm run lint` | ESLint |

## Structure du projet

```
project/
├── index.html                  # Point d'entrée HTML (méta, SEO de base)
├── netlify.toml                # Config Netlify (build + fallback SPA + en-têtes)
├── public/
│   ├── logo.png                # Logo du site
│   ├── _redirects              # Fallback SPA (routes React Router)
│   ├── robots.txt              # SEO : crawlers
│   └── sitemap.xml             # SEO : plan du site
├── src/
│   ├── main.tsx                # Point d'entrée React
│   ├── App.tsx                 # Routeur + layout global + composants flottants
│   ├── index.css               # Tailwind + classes utilitaires (gradient-text, section-label…)
│   ├── components/
│   │   ├── Navbar.tsx          # Barre de navigation fixe + menu mobile
│   │   ├── Footer.tsx          # Pied de page + liens légaux
│   │   ├── Seo.tsx             # Titre/description/canonical par page + JSON-LD
│   │   ├── ScrollProgress.tsx  # Barre de progression de lecture
│   │   ├── WhatsAppFloat.tsx   # Bouton WhatsApp flottant
│   │   ├── BackToTop.tsx       # Bouton retour en haut
│   │   ├── ThemeToggle.tsx     # Bascule clair/sombre
│   │   ├── LanguageToggle.tsx  # Bascule FR/EN
│   │   └── home/               # Sections de la page d'accueil
│   │       ├── Hero.tsx            # Accueil + statistiques
│   │       ├── ServicesPreview.tsx # Aperçu services
│   │       ├── ProcessSection.tsx  # Méthode de travail + garantie
│   │       ├── SkillsPreview.tsx   # Compétences techniques
│   │       ├── Testimonials.tsx    # Témoignages clients
│   │       ├── FAQSection.tsx      # FAQ
│   │       ├── CTASection.tsx      # Appel à l'action final
│   │       └── DevisCalculator.tsx # Calculateur de devis FCFA
│   ├── pages/
│   │   ├── Home.tsx            # Page d'accueil
│   │   ├── Services.tsx        # Page services (7 domaines)
│   │   ├── Pricing.tsx         # Tarifs + calculateur + comparateur
│   │   ├── Contact.tsx         # Formulaire → WhatsApp
│   │   └── LegalPage.tsx       # Mentions légales / Confidentialité
│   ├── context/
│   │   ├── ThemeContext.tsx    # État du thème (localStorage)
│   │   └── LanguageContext.tsx # État de la langue (localStorage)
│   └── data/
│       ├── i18n.ts             # TOUS les textes FR/EN du site (source unique)
│       └── content.ts          # Icônes, stats, liens de navigation
```

## Contenu & personnalisation

**Tous les textes du site** (FR/EN) sont centralisés dans `src/data/i18n.ts` — c'est le seul fichier à modifier pour changer le contenu.

Éléments à personnaliser avant mise en production :

- **Numéro WhatsApp** : `22393739935` dans `src/components/home/DevisCalculator.tsx`, `src/pages/Contact.tsx` et `src/components/WhatsAppFloat.tsx`
- **E-mail** : `beidydia61@gmail.com` dans `src/data/i18n.ts`
- **Nom de domaine** : `https://eyestechnology.ml` (placeholder) dans `src/components/Seo.tsx`, `public/robots.txt` et `public/sitemap.xml`
- **Coordonnées de l'hébergeur** : section « Hébergement » dans `src/data/i18n.ts` (page Mentions légales)

## Déploiement

Le site est prêt pour **Netlify** (config dans `netlify.toml`) :

1. Pousser le projet sur GitHub/GitLab
2. Sur [app.netlify.com](https://app.netlify.com) : *Add new site* → *Import an existing project*
3. La config `netlify.toml` est détectée automatiquement (build : `npm run build`, dossier : `dist`)
4. *Site settings* → *Domain management* → *Add custom domain* pour brancher votre domaine

Voir le guide détaillé dans la conversation ou la [doc Netlify](https://docs.netlify.com).
