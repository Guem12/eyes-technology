import { useLang } from '@/context/LanguageContext';

export const t = {
  // Nav
  nav: {
    home: { fr: 'Accueil', en: 'Home' },
    services: { fr: 'Services', en: 'Services' },
    pricing: { fr: 'Tarifs', en: 'Pricing' },
    contact: { fr: 'Contact', en: 'Contact' },
  },
  // Hero
  hero: {
    available: { fr: 'Disponible pour vos projets — Bamako, Mali', en: 'Available for your projects — Bamako, Mali' },
    greeting: { fr: 'Bienvenue chez EyesTechnology —', en: 'Welcome to EyesTechnology —' },
    typingWords: {
      fr: ['Sites vitrines sur mesure', 'Applications web & mobiles', 'E-commerce & paiement en ligne', 'Solutions digitales complètes'],
      en: ['Custom Showcase Websites', 'Web & Mobile Apps', 'E-commerce & Online Payment', 'Complete Digital Solutions'],
    },
    description: {
      fr: "Je crée des sites vitrines, des applications web & mobiles et des solutions sur mesure qui font grandir votre activité. De l'idée à la mise en ligne, un interlocuteur unique et engagé.",
      en: "I build showcase websites, web & mobile apps, and custom solutions that grow your business. From idea to launch, one committed point of contact.",
    },
    ctaPrimary: { fr: 'Travaillons ensemble', en: "Let's Work Together" },
    ctaSecondary: { fr: 'Voir les services', en: 'View Services' },
  },
  // Stats
  stats: {
    projects: { fr: 'Projets livrés', en: 'Projects Delivered' },
    clients: { fr: 'Clients satisfaits', en: 'Happy Clients' },
    years: { fr: "Ans d'expérience", en: 'Years Experience' },
    guarantee: { fr: 'de garantie incluse', en: 'warranty included' },
  },
  // Services preview
  servicesPreview: {
    label: { fr: 'Services', en: 'Services' },
    title: { fr: 'Comment je peux vous aider', en: 'How I Can Help You' },
    description: {
      fr: 'Du concept au déploiement, j\'offre des services de développement de bout en bout adaptés à vos besoins.',
      en: 'From concept to deployment, I offer end-to-end development services tailored to your needs.',
    },
    viewAll: { fr: 'Voir tous les services', en: 'View All Services' },
  },
  // Skills
  skills: {
    label: { fr: 'Compétences', en: 'Skills' },
    title: { fr: 'Technologies que j\'utilise', en: 'Technologies I Work With' },
    description: {
      fr: "Un aperçu de mes compétences techniques de base, affinées sur plus de 8 ans de création de produits.",
      en: "A snapshot of my core technical skills, honed over 8+ years of building products.",
    },
  },
  // Testimonials
  testimonials: {
    label: { fr: 'Témoignages', en: 'Testimonials' },
    title: { fr: 'Ce que disent les clients', en: 'What Clients Say' },
    description: {
      fr: "Ne me croyez pas sur parole — voici ce que les personnes avec qui j'ai travaillé ont à dire.",
      en: "Don't just take my word for it — here's what people I've worked with have to say.",
    },
  },
  // CTA
  cta: {
    title: { fr: 'Prêt à construire quelque chose de génial ?', en: 'Ready to Build Something Great?' },
    description: {
      fr: "Que vous ayez un projet entièrement défini ou juste une idée, j'adorerais vous aider à lui donner vie.",
      en: "Whether you have a fully scoped project or just an idea, I'd love to help you bring it to life.",
    },
    button: { fr: 'Démarrer un projet', en: 'Start a Project' },
  },
  // Services page
  servicesPage: {
    label: { fr: 'Services', en: 'Services' },
    title: { fr: 'Services de développement ', en: 'Development Services ' },
    titleAccent: { fr: 'adaptés à vous', en: 'Tailored to You' },
    description: {
      fr: "Que vous ayez besoin d'une rapide landing page ou d'une application web complète, j'ai un service qui correspond. Chaque projet est conçu avec performance, accessibilité et évolutivité à l'esprit.",
      en: 'Whether you need a quick landing page or a full-scale web application, I have a service that fits. Every project is built with performance, accessibility, and scalability in mind.',
    },
    getQuote: { fr: 'Demander un devis', en: 'Get a quote' },
    processLabel: { fr: 'Processus', en: 'Process' },
    processTitle: { fr: 'Ma façon de travailler', en: 'How I Work' },
    processDesc: {
      fr: 'Un processus clair et transparent, du premier appel à la livraison finale.',
      en: 'A clear, transparent process from first call to final delivery.',
    },
    processSteps: [
      { title: { fr: 'Découverte', en: 'Discovery' }, desc: { fr: 'Nous discutons de votre projet, vos objectifs et votre calendrier pour définir clairement la portée.', en: 'We discuss your project, goals, and timeline to define the scope clearly.' } },
      { title: { fr: 'Design', en: 'Design' }, desc: { fr: 'Je crée des maquettes et un système de design adapté à votre marque et votre audience.', en: 'I create wireframes and a design system tailored to your brand and audience.' } },
      { title: { fr: 'Développement', en: 'Develop' }, desc: { fr: 'Du code propre et testé avec des mises à jour régulières et des démos en cours de route.', en: 'Clean, tested code with regular updates and demo sessions along the way.' } },
      { title: { fr: 'Livraison', en: 'Deliver' }, desc: { fr: 'Déploiement, documentation et support post-lancement pour que tout fonctionne.', en: 'Deployment, documentation, and post-launch support to ensure everything runs.' } },
    ],
  },
  // Services data
  servicesData: [
    {
      title: { fr: 'Développement Web', en: 'Web Development' },
      description: { fr: 'Applications web sur mesure construites avec des frameworks modernes. Rapides, accessibles et évolutives dès le premier jour.', en: 'Custom web applications built with modern frameworks. Fast, accessible, and scalable from day one.' },
      features: { fr: ['React / Next.js', 'Rendu côté serveur', 'Optimisation des performances', 'Optimisé SEO'], en: ['React / Next.js', 'Server-side rendering', 'Performance optimization', 'SEO-ready'] },
    },
    {
      title: { fr: 'Applications Mobiles', en: 'Mobile Apps' },
      description: { fr: 'Applications mobiles multiplateformes qui se sentent natives sur iOS et Android avec un seul code base.', en: 'Cross-platform mobile applications that feel native on iOS and Android with a single codebase.' },
      features: { fr: ['React Native', 'Support hors ligne', 'Notifications push', 'Déploiement App Store'], en: ['React Native', 'Offline support', 'Push notifications', 'App Store deployment'] },
    },
    {
      title: { fr: 'Intégration API', en: 'API Integration' },
      description: { fr: 'Connectez votre produit à n\'importe quel service tiers — paiements, auth, CRM ou API internes personnalisées.', en: 'Connect your product to any third-party service — payments, auth, CRMs, or custom internal APIs.' },
      features: { fr: ['REST & GraphQL', 'Gestion des webhooks', 'Stratégies de rate-limit', 'Flux OAuth'], en: ['REST & GraphQL', 'Webhook handling', 'Rate-limit strategies', 'OAuth flows'] },
    },
    {
      title: { fr: 'Gestion & Valorisation de Données', en: 'Data Management & Analytics' },
      description: { fr: "Centralisez et pilotez votre activité : stocks, ventes, clients et facturation réunis dans des tableaux de bord clairs pour décider vite et juste.", en: 'Centralize and leverage your business: inventory, sales, customers, and invoicing brought together in clear dashboards to decide faster and better.', },
      features: { fr: ['Suivi des stocks en temps réel', 'Tableau de bord des ventes', 'Base clients & historique', 'Facturation automatisée', 'Sauvegardes automatiques'], en: ['Real-time inventory tracking', 'Sales dashboard', 'Customer database & history', 'Automated invoicing', 'Automated backups'] },
    },
    {
      title: { fr: 'Design UI/UX', en: 'UI/UX Design' },
      description: { fr: 'Des systèmes de design et des interfaces qui sont beaux, intuitifs et basés sur de vraies recherches utilisateur.', en: 'Design systems and interfaces that are beautiful, intuitive, and backed by real user research.' },
      features: { fr: ['Systèmes de design', 'Prototypage', 'Audits d\'accessibilité', 'Mode sombre'], en: ['Design systems', 'Prototyping', 'Accessibility audits', 'Dark mode'] },
    },
    {
      title: { fr: 'Conseil', en: 'Consulting' },
      description: { fr: 'Stratégie technique, revues d\'architecture et mentorat d\'équipe pour vous aider à livrer avec confiance.', en: 'Technical strategy, architecture reviews, and team mentoring to help you ship with confidence.' },
      features: { fr: ['Revue d\'architecture', 'Audits de code', 'Feuilles de route tech', 'Mentorat d\'équipe'], en: ['Architecture review', 'Code audits', 'Tech roadmaps', 'Team mentoring'] },
    },
    {
      title: { fr: 'DevOps & Cloud', en: 'DevOps & Cloud' },
      description: { fr: 'Pipelines CI/CD, conteneurisation et infrastructure cloud qui passe à l\'échelle sans surprises.', en: 'CI/CD pipelines, containerization, and cloud infrastructure that scales without surprises.' },
      features: { fr: ['Docker & Kubernetes', 'Configuration AWS / GCP', 'Pipelines CI/CD', 'Monitoring'], en: ['Docker & Kubernetes', 'AWS / GCP setup', 'CI/CD pipelines', 'Monitoring'] },
    },
  ],
  // Pricing
  pricing: {
    label: { fr: 'Tarifs & Devis', en: 'Pricing & Quotes' },
    title: { fr: 'Des tarifs clairs par ', en: 'Clear Pricing per ' },
    titleAccent: { fr: 'projet', en: 'Project' },
    description: {
      fr: 'Chaque projet est unique. Tarification forfaitaire transparente en FCFA, adaptée à vos objectifs et votre budget sans aucun abonnement.',
      en: 'Every project is unique. Transparent fixed pricing in FCFA tailored to your goals and budget with no subscriptions.',
    },
    mostPopular: { fr: 'Recommandé', en: 'Recommended' },
    perProject: { fr: 'à partir de (forfait)', en: 'starting from (flat fee)' },
    letsTalk: { fr: 'sur mesure', en: 'custom' },
    plans: [
      {
        name: { fr: 'Starter / Vitrine', en: 'Starter / Showcase' },
        price: { fr: '150 000 FCFA', en: '150,000 FCFA' },
        description: { fr: 'Idéal pour les sites vitrines, landing pages et présence en ligne professionnelle.', en: 'Ideal for showcase sites, landing pages and professional online presence.' },
        features: {
          fr: ['Site vitrine jusqu\'à 5 pages', 'Design moderne & responsive', 'Optimisation SEO de base', 'Formulaire de contact & WhatsApp', 'Intégration nom de domaine & hébergement', 'Livraison rapide (7 à 14 jours)'],
          en: ['Showcase site up to 5 pages', 'Modern & responsive design', 'Basic SEO optimization', 'Contact form & WhatsApp', 'Domain name & hosting setup', 'Fast delivery (7 to 14 days)'],
        },
        cta: { fr: 'Demander un devis', en: 'Request a Quote' },
      },
      {
        name: { fr: 'Pro / Business', en: 'Pro / Business' },
        price: { fr: '450 000 FCFA', en: '450,000 FCFA' },
        description: { fr: 'Pour les entreprises et PME souhaitant une plateforme dynamique et performante.', en: 'For companies and SMEs needing a dynamic high-performance platform.' },
        features: {
          fr: ['Jusqu\'à 15 pages dynamiques', 'Système de gestion de contenu (CMS)', 'SEO avancé & Analytics', 'Intégration WhatsApp & APIs (Paiement / SMS)', 'Révisions illimitées jusqu\'à livraison', 'Support & maintenance 30 jours inclus'],
          en: ['Up to 15 dynamic pages', 'Content Management System (CMS)', 'Advanced SEO & Analytics', 'WhatsApp & API integrations (Payment / SMS)', 'Unlimited revisions until delivery', '30-day support & maintenance included'],
        },
        cta: { fr: 'Lancer mon projet', en: 'Start My Project' },
      },
      {
        name: { fr: 'Sur Mesure / App', en: 'Custom / App' },
        price: { fr: 'Sur Devis', en: 'Custom Quote' },
        description: { fr: 'Pour les applications web complexes, SaaS, et projets sur mesure d\'envergure.', en: 'For complex web applications, SaaS platforms, and custom enterprise projects.' },
        features: {
          fr: ['Application Web ou Mobile sur mesure', 'Base de données & API sécurisées', 'Espace d\'administration dédié', 'Déploiement Cloud & Sécurité avancée', 'Formation de votre équipe', 'Accompagnement & maintenance continue'],
          en: ['Custom Web or Mobile Application', 'Secure Database & APIs', 'Dedicated Admin Dashboard', 'Cloud Deployment & Advanced Security', 'Team Training', 'Ongoing Support & Maintenance'],
        },
        cta: { fr: 'Nous contacter', en: 'Contact Us' },
      },
    ],
    comparisonLabel: { fr: 'Comparateur de prestations', en: 'Service Breakdown' },
    comparisonTitle: { fr: 'Détail des prestations par projet', en: 'Detailed Service Breakdown' },
    comparisonDesc: {
      fr: 'Découvrez les fonctionnalités incluses dans chaque type de prestation.',
      en: 'Discover the features included in each service package.',
    },
    comparisonFeature: { fr: 'Prestation / Option', en: 'Feature / Option' },
    customQuoteText: {
      fr: 'Un besoin spécifique ou un cahier des charges particulier ? Je réalise une étude gratuite de votre projet et vous délivre un devis en FCFA sous 24h.',
      en: 'Have specific requirements or a custom spec sheet? I provide a free project assessment and deliver a quote in FCFA within 24h.',
    },
    customQuote: { fr: 'Obtenir un devis personnalisé gratuit', en: 'Get a Free Custom Quote' },
    comparisonRows: [
      { feature: { fr: 'Nombre de pages / écrans', en: 'Number of pages / screens' }, basic: '5', pro: '15', enterprise: { fr: 'Sur mesure', en: 'Custom' } },
      { feature: { fr: 'Design sur mesure & responsive', en: 'Custom & responsive design' }, basic: true, pro: true, enterprise: true },
      { feature: { fr: 'Bouton WhatsApp & Formulaire', en: 'WhatsApp & Form integration' }, basic: true, pro: true, enterprise: true },
      { feature: { fr: 'Système de Gestion (CMS)', en: 'CMS Content System' }, basic: false, pro: true, enterprise: true },
      { feature: { fr: 'Intégrations API & Paiements', en: 'API & Payment Integrations' }, basic: false, pro: true, enterprise: true },
      { feature: { fr: 'Optimisation SEO & Vitesse', en: 'SEO & Speed Optimization' }, basic: { fr: 'Essentiel', en: 'Essential' }, pro: { fr: 'Avancé', en: 'Advanced' }, enterprise: { fr: 'Sur mesure', en: 'Custom' } },
      { feature: { fr: 'Accompagnement post-livraison', en: 'Post-delivery support' }, basic: { fr: '7 jours', en: '7 days' }, pro: { fr: '30 jours', en: '30 days' }, enterprise: { fr: 'Continu', en: 'Ongoing' } },
      { feature: { fr: 'Propriété du code source', en: 'Source code ownership' }, basic: true, pro: true, enterprise: true },
      { feature: { fr: 'Hébergement & Domaine offert', en: 'Hosting & Domain setup' }, basic: true, pro: true, enterprise: true },
      { feature: { fr: 'Application Mobile (iOS / Android)', en: 'Mobile App (iOS / Android)' }, basic: false, pro: false, enterprise: true },
      { feature: { fr: 'Maintenance & Mises à jour', en: 'Maintenance & Updates' }, basic: false, pro: false, enterprise: true },
    ],
  },
  // Testimonials data
  testimonialsData: [
    {
      name: 'Sarah Chen',
      role: { fr: 'PDG, Lumen Startup', en: 'CEO, Lumen Startup' },
      quote: {
        fr: 'Beidy a livré notre MVP en trois semaines — c\'était plus rapide, plus propre et plus soigné que ce que nous imaginions. Nos investisseurs ont été bluffés.',
        en: 'Beidy delivered our MVP in three weeks — it was faster, cleaner, and more polished than we imagined. Our investors were blown away.',
      },
      avatar: 'SC',
    },
    {
      name: 'Marcus Webb',
      role: { fr: 'CTO, Brightwave Studios', en: 'CTO, Brightwave Studios' },
      quote: {
        fr: 'L\'un des développeurs les plus fiables avec qui j\'ai travaillé. La communication était claire, les délais respectés et la qualité du code excellente.',
        en: "One of the most reliable developers I've worked with. Communication was clear, deadlines were met, and the code quality was excellent.",
      },
      avatar: 'MW',
    },
    {
      name: 'Awa Ndiaye',
      role: { fr: 'Fondatrice, Artisan App', en: 'Founder, Artisan App' },
      quote: {
        fr: 'L\'application mobile que Beidy a construite pour nous a une note de 4,8 étoiles sur l\'App Store. L\'attention aux détails dans l\'UI était remarquable.',
        en: 'The mobile app Beidy built for us has a 4.8 star rating on the App Store. The attention to detail in the UI was remarkable.',
      },
      avatar: 'AN',
    },
  ],
  // Contact
  contact: {
    label: { fr: 'Contact', en: 'Contact' },
    title: { fr: 'Construisons ', en: "Let's Build " },
    titleAccent: { fr: 'ensemble', en: 'Together' },
    description: {
      fr: "Un projet en tête ou juste envie de dire bonjour ? J'adorerais avoir de vos nouvelles. Remplissez le formulaire ci-dessous et je vous répondrai dans les 24 heures.",
      en: "Have a project in mind or just want to say hi? I'd love to hear from you. Fill out the form below and I'll get back to you within 24 hours.",
    },
    getInTouch: { fr: 'Entrer en contact', en: 'Get in Touch' },
    email: { fr: 'E-mail', en: 'Email' },
    emailValue: 'beidydia61@gmail.com',
    whatsapp: { fr: 'WhatsApp', en: 'WhatsApp' },
    whatsappValue: '+223 93 73 99 35',
    location: { fr: 'Localisation', en: 'Location' },
    locationValue: { fr: 'Bamako, Mali', en: 'Bamako, Mali' },
    followMe: { fr: 'Suivez-moi', en: 'Follow me' },
    // Form
    name: { fr: 'Nom', en: 'Name' },
    namePlaceholder: { fr: 'Jean Dupont', en: 'John Doe' },
    nameRequired: { fr: 'Le nom est requis', en: 'Name is required' },
    nameMinLength: { fr: 'Le nom doit contenir au moins 2 caractères', en: 'Name must be at least 2 characters' },
    emailRequired: { fr: 'L\'e-mail est requis', en: 'Email is required' },
    emailInvalid: { fr: 'Entrez une adresse e-mail valide', en: 'Enter a valid email address' },
    subject: { fr: 'Sujet', en: 'Subject' },
    subjectPlaceholder: { fr: 'Demande de projet', en: 'Project inquiry' },
    subjectRequired: { fr: 'Le sujet est requis', en: 'Subject is required' },
    subjectMinLength: { fr: 'Le sujet doit contenir au moins 3 caractères', en: 'Subject must be at least 3 characters' },
    message: { fr: 'Message', en: 'Message' },
    messagePlaceholder: { fr: 'Parlez-moi de votre projet...', en: 'Tell me about your project...' },
    messageRequired: { fr: 'Le message est requis', en: 'Message is required' },
    messageMinLength: { fr: 'Le message doit contenir au moins 10 caractères', en: 'Message must be at least 10 characters' },
    sending: { fr: 'Envoi...', en: 'Sending...' },
    sent: { fr: 'Message envoyé !', en: 'Message Sent!' },
    failed: { fr: 'Échec — Réessayer', en: 'Failed — Try Again' },
    sendMessage: { fr: 'Envoyer le message', en: 'Send Message' },
    successMsg: { fr: 'Merci de m\'avoir contacté ! Je vous répondrai dans les 24 heures.', en: "Thanks for reaching out! I'll get back to you within 24 hours." },
    errorMsg: { fr: 'Une erreur s\'est produite. Veuillez réessayer ou m\'envoyer un e-mail directement.', en: 'Something went wrong. Please try again or email me directly.' },
  },
  // Footer
  footer: {
    description: {
      fr: 'Développeur web & mobile freelance à Bamako : sites vitrines, e-commerce, applications et solutions sur mesure.',
      en: 'Freelance web & mobile developer in Bamako: showcase sites, e-commerce, apps and custom solutions.',
    },
    navigation: { fr: 'Navigation', en: 'Navigation' },
    connect: { fr: 'Connecter', en: 'Connect' },
    rights: { fr: 'Tous droits réservés.', en: 'All rights reserved.' },
    legalNotice: { fr: 'Mentions légales', en: 'Legal Notice' },
    privacyPolicy: { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
    builtWith: { fr: 'Construit avec React, Framer Motion & Tailwind CSS.', en: 'Built with React, Framer Motion & Tailwind CSS.' },
  },
  // Legal pages
  legal: {
    notice: {
      title: { fr: 'Mentions légales', en: 'Legal Notice' },
      updatedAt: { fr: 'Dernière mise à jour : septembre 2026', en: 'Last updated: September 2026' },
      sections: [
        {
          heading: { fr: 'Éditeur du site', en: 'Site Publisher' },
          body: {
            fr: [
              'Le site est édité par EyesTechnology, entreprise individuelle immatriculée à Bamako, Mali.',
              'Représentant légal : Beidy Dia.',
              'Contact : beidydia61@gmail.com — WhatsApp : +223 93 73 99 35.',
              'Adresse : Bamako, Mali.',
            ],
            en: [
              'This website is published by EyesTechnology, a sole proprietorship registered in Bamako, Mali.',
              'Legal representative: Beidy Dia.',
              'Contact: beidydia61@gmail.com — WhatsApp: +223 93 73 99 35.',
              'Address: Bamako, Mali.',
            ],
          },
        },
        {
          heading: { fr: 'Hébergement', en: 'Hosting' },
          body: {
            fr: [
              "Le site est hébergé par un prestataire d'hébergement professionnel dont les coordonnées complètes sont disponibles sur simple demande.",
              "À compléter lors du déploiement final avec les informations réelles de l'hébergeur.",
            ],
            en: [
              'The site is hosted by a professional hosting provider whose full details are available upon request.',
              'To be completed at final deployment with the actual hosting provider details.',
            ],
          },
        },
        {
          heading: { fr: 'Propriété intellectuelle', en: 'Intellectual Property' },
          body: {
            fr: [
              "L'ensemble des contenus du site (textes, visuels, logo, code source) est la propriété exclusive d'EyesTechnology, sauf mention contraire.",
              'Toute reproduction, représentation ou adaptation, totale ou partielle, sans autorisation écrite préalable est interdite.',
              'Les applications et sites livrés aux clients restent la propriété de ces derniers, conformément aux termes du contrat.',
            ],
            en: [
              'All website content (text, visuals, logo, source code) is the exclusive property of EyesTechnology unless stated otherwise.',
              'Any total or partial reproduction, representation, or adaptation without prior written permission is prohibited.',
              'Applications and websites delivered to clients remain the property of those clients, as defined in the contract.',
            ],
          },
        },
        {
          heading: { fr: 'Responsabilité', en: 'Liability' },
          body: {
            fr: [
              "EyesTechnology s'efforce d'assurer l'exactitude des informations diffusées sur ce site mais ne saurait être tenue responsable des erreurs, omissions ou indisponibilités temporaires.",
            ],
            en: [
              'EyesTechnology strives to ensure the accuracy of the information published on this site but cannot be held liable for errors, omissions, or temporary unavailability.',
            ],
          },
        },
      ],
    },
    privacy: {
      title: { fr: 'Politique de confidentialité', en: 'Privacy Policy' },
      updatedAt: { fr: 'Dernière mise à jour : septembre 2026', en: 'Last updated: September 2026' },
      intro: {
        fr: 'La protection de vos données est une priorité. Cette page explique, en toute transparence, ce que ce site fait — et ne fait pas — de vos informations.',
        en: "Protecting your data is a priority. This page transparently explains what this site does — and does not do — with your information.",
      },
      sections: [
        {
          heading: { fr: 'Aucune donnée stockée sur ce site', en: 'No Data Stored on This Site' },
          body: {
            fr: [
              "Ce site vitrine est entièrement statique : ni base de données, ni compte utilisateur, ni cookie publicitaire, ni outil de suivi (analytics).",
              "Aucune information que vous saisissez n'est enregistrée sur un serveur — le formulaire de contact et le calculateur de devis ne font qu'ouvrir une conversation WhatsApp pré-remplie.",
            ],
            en: [
              'This showcase site is fully static: no database, no user accounts, no advertising cookies, and no tracking tools (analytics).',
              'No information you enter is stored on our servers — the contact form and quote calculator simply open a pre-filled WhatsApp conversation.',
            ],
          },
        },
        {
          heading: { fr: 'Données transmises via WhatsApp', en: 'Data Sent via WhatsApp' },
          body: {
            fr: [
              'Lorsque vous utilisez le formulaire de contact ou le calculateur de devis, les informations suivantes sont transmises directement à WhatsApp : nom, adresse e-mail, sujet et message (ainsi que le détail de votre estimation).',
              'Ces données sont ensuite traitées par WhatsApp conformément à leur propre politique de confidentialité, puis me parviennent pour répondre à votre demande.',
            ],
            en: [
              'When you use the contact form or the quote calculator, the following information is sent directly to WhatsApp: name, email address, subject, and message (plus your estimate details).',
              'This data is then processed by WhatsApp under their own privacy policy, then reaches us so we can answer your request.',
            ],
          },
        },
        {
          heading: { fr: 'Services tiers', en: 'Third-Party Services' },
          body: {
            fr: [
              "Polices d'écriture : Google Fonts (chargement des polices Inter et JetBrains Mono).",
              'Messagerie : WhatsApp (ouverture de conversation).',
              "Aucun autre service tiers, traceur ou réseau publicitaire n'est utilisé.",
            ],
            en: [
              'Fonts: Google Fonts (Inter and JetBrains Mono).',
              'Messaging: WhatsApp (conversation opening).',
              'No other third-party service, tracker, or advertising network is used.',
            ],
          },
        },
        {
          heading: { fr: 'Vos droits', en: 'Your Rights' },
          body: {
            fr: [
              "Vous disposez d'un droit d'accès, de rectification et de suppression des données que vous m'avez transmises.",
              'Pour exercer ces droits : beidydia61@gmail.com ou WhatsApp +223 93 73 99 35.',
              "Les échanges WhatsApp restent conservés sur votre appareil et le nôtre, conformément au fonctionnement de l'application.",
            ],
            en: [
              'You have the right to access, rectify, and delete the data you have sent us.',
              'To exercise these rights: beidydia61@gmail.com or WhatsApp +223 93 73 99 35.',
              "WhatsApp conversations remain stored on your device and ours, in line with how the app works.",
            ],
          },
        },
      ],
    },
  },
  // Page metadata (SEO)
  meta: {
    home: { title: 'EyesTechnology — Développement web & mobile à Bamako', desc: 'Développeur freelance : sites vitrines, e-commerce et applications sur mesure à Bamako, Mali. Devis gratuit en FCFA sous 24h.' },
    services: { title: 'Services — EyesTechnology', desc: "Développement web, applications mobiles, e-commerce, design UI/UX et intégrations paiement pour votre entreprise." },
    pricing: { title: 'Tarifs & Devis — EyesTechnology', desc: 'Tarifs transparents en FCFA : site vitrine dès 150 000 FCFA, simulateur de devis instantané, paiement Wave & Orange Money.' },
    contact: { title: 'Contact — EyesTechnology', desc: 'Parlons de votre projet : devis gratuit sous 24h à Bamako, Mali. WhatsApp, e-mail ou formulaire.' },
    legalNotice: { title: 'Mentions légales — EyesTechnology', desc: "Informations légales sur l'éditeur du site EyesTechnology, Bamako, Mali." },
    privacy: { title: 'Politique de confidentialité — EyesTechnology', desc: 'Comment EyesTechnology traite vos données : aucune donnée stockée, échanges via WhatsApp.' },
  },
};

export type TranslationDict = typeof t;

export function useT() {
  const { lang } = useLang();
  return { t, lang };
}
