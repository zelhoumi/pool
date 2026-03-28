export const SITE = {
  name: "AquaPure Maroc",
  domain: "https://aquapuremaroc.ma",
  phone: "+212600000000",
  phoneDisplay: "+212 6 00 00 00 00",
  whatsapp: "https://wa.me/212600000000",
  email: "contact@aquapuremaroc.ma",
  address: "Darbouazza, Casablanca",
  region: "Casablanca-Settat",
  postalCode: "27182",
  country: "MA",
  hours: "Lun-Sam 08:00-19:00",
};

export const NAV_LINKS = [
  { label: "Accueil", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Pourquoi Nous", href: "/#pourquoi-nous" },
  { label: "Avis", href: "/#avis" },
  { label: "Contact", href: "/#contact" },
];

export const HERO = {
  badge: "N°1 Entretien Piscine – Darbouazza",
  title: "Une Piscine Cristalline Toute l'Année",
  subtitle:
    "AquaPure Maroc assure l'entretien professionnel de votre piscine à Darbouazza et dans le Grand Casablanca. Qualité garantie, devis gratuit sous 24h.",
  cta1: "Demander un Devis",
  cta2: "Voir Nos Services",
};

export const STATS = [
  { value: 500, suffix: "+", label: "Piscines Entretenues" },
  { value: 5, suffix: "★", label: "Note Clients" },
  { value: 24, suffix: "h", label: "Intervention Rapide" },
  { value: 100, suffix: "%", label: "Satisfaction Client" },
];

export const SERVICES_PREVIEW = {
  title: "Nos Services Principaux",
  link: "Voir Tous Nos Services →",
};

export const SERVICES = [
  {
    id: "nettoyage",
    icon: "Droplets",
    title: "Nettoyage Complet",
    shortDesc: "Aspiration, brossage, traitement de l'eau",
    description:
      "Aspiration fond, brossage parois, nettoyage skimmer et buses de refoulement. Votre piscine retrouve son éclat.",
    price: "350 MAD",
    features: [
      "Aspiration fond et parois",
      "Brossage ligne d'eau",
      "Nettoyage skimmers et buses",
      "Vérification niveau d'eau",
    ],
  },
  {
    id: "traitement",
    icon: "FlaskConical",
    title: "Traitement de l'Eau",
    shortDesc: "Analyse pH, chlore, ajustement chimique",
    description:
      "Analyse complète du pH, chlore, alcalinité et ajustement chimique pour une eau parfaitement équilibrée.",
    price: "250 MAD",
    features: [
      "Analyse pH et chlore",
      "Test alcalinité et dureté",
      "Ajustement chimique précis",
      "Rapport d'analyse détaillé",
    ],
  },
  {
    id: "equipements",
    icon: "Wrench",
    title: "Entretien Équipements",
    shortDesc: "Pompe, filtre, diagnostic complet",
    description:
      "Diagnostic et entretien complet de votre pompe, filtre, électrolyseur et tous les équipements techniques.",
    price: "450 MAD",
    features: [
      "Vérification pompe et moteur",
      "Nettoyage filtre à sable",
      "Contrôle électrolyseur",
      "Diagnostic complet",
    ],
  },
  {
    id: "abonnement",
    icon: "CalendarCheck",
    title: "Abonnement Mensuel",
    shortDesc: "Entretien régulier, tarif préférentiel",
    description:
      "Formule hebdomadaire ou bimensuelle avec tarif préférentiel. L'esprit tranquille toute l'année.",
    price: "900 MAD/mois",
    features: [
      "Passages réguliers planifiés",
      "Nettoyage complet inclus",
      "Traitement eau inclus",
      "Tarif préférentiel garanti",
    ],
  },
  {
    id: "hivernage",
    icon: "Snowflake",
    title: "Hivernage & Remise en Route",
    shortDesc: "Préparation hiver + remise en service",
    description:
      "Préparation complète pour l'hiver et remise en service estivale. Protégez votre investissement.",
    price: "800 MAD",
    features: [
      "Traitement hivernal complet",
      "Protection équipements",
      "Bâche d'hivernage",
      "Remise en route au printemps",
    ],
  },
  {
    id: "urgence",
    icon: "AlertTriangle",
    title: "Urgence Eau Verte",
    shortDesc: "Traitement choc, intervention 24h",
    description:
      "Intervention d'urgence sous 24h pour traitement choc. Votre piscine redevient cristalline rapidement.",
    price: "600 MAD",
    features: [
      "Intervention sous 24h",
      "Traitement choc intensif",
      "Nettoyage complet inclus",
      "Suivi post-traitement",
    ],
  },
];

export const WHY_US = {
  title: "Pourquoi Choisir AquaPure Maroc ?",
  points: [
    {
      icon: "ShieldCheck",
      title: "Expertise Locale",
      desc: "Basés à Darbouazza, nous connaissons parfaitement les spécificités des piscines de la région.",
    },
    {
      icon: "Award",
      title: "Produits Certifiés",
      desc: "Nous utilisons exclusivement des produits professionnels certifiés et sans danger.",
    },
    {
      icon: "Clock",
      title: "Réactivité 24h",
      desc: "Intervention rapide sous 24h, même en urgence. Votre piscine n'attend pas.",
    },
    {
      icon: "ThumbsUp",
      title: "Garantie Résultat",
      desc: "Si vous n'êtes pas satisfait, nous revenons gratuitement. C'est notre engagement.",
    },
  ],
};

export const PROCESS = {
  title: "Comment Ça Marche",
  steps: [
    { number: 1, title: "Contactez-Nous", desc: "Par WhatsApp, téléphone ou formulaire" },
    { number: 2, title: "Devis Gratuit", desc: "Estimation claire et sans engagement" },
    { number: 3, title: "Intervention", desc: "Notre équipe intervient rapidement" },
    { number: 4, title: "Résultat Garanti", desc: "Une piscine cristalline, garantie" },
  ],
};

export const TESTIMONIALS = [
  {
    name: "Karim B.",
    location: "Darbouazza",
    text: "Service impeccable ! Ma piscine n'a jamais été aussi propre. L'équipe est ponctuelle et professionnelle. Je recommande à 100%.",
    rating: 5,
  },
  {
    name: "Sophie M.",
    location: "Bouskoura",
    text: "Après des mois avec une eau trouble, AquaPure a tout réglé en une seule intervention. Le traitement choc a fait des miracles.",
    rating: 5,
  },
  {
    name: "Youssef A.",
    location: "Ain Diab",
    text: "L'abonnement mensuel est un vrai confort. Je ne me soucie plus de rien, ma piscine est toujours prête pour la baignade.",
    rating: 5,
  },
];

export const ZONES = {
  title: "Nous Intervenons Dans Toute la Région",
  areas: [
    "Darbouazza",
    "Bouskoura",
    "Ain Diab",
    "Californie",
    "Anfa",
    "Tamaris",
    "Sidi Rahal",
    "Casablanca Centre",
  ],
};

export const CTA = {
  title: "Votre Piscine Mérite le Meilleur",
  subtitle: "Contactez-nous dès maintenant pour un devis gratuit",
  whatsapp: "Écrire sur WhatsApp",
  call: "Appeler Maintenant",
};

export const PRICING = [
  {
    name: "Basique",
    desc: "Nettoyage ponctuel",
    price: "350",
    unit: "MAD",
    popular: false,
    features: [
      { text: "Nettoyage complet", included: true },
      { text: "Aspiration et brossage", included: true },
      { text: "Vérification pH", included: true },
      { text: "Traitement chimique", included: false },
      { text: "Entretien équipements", included: false },
      { text: "Passages réguliers", included: false },
    ],
  },
  {
    name: "Essentiel",
    desc: "Entretien mensuel",
    price: "900",
    unit: "MAD/mois",
    popular: true,
    features: [
      { text: "Nettoyage complet", included: true },
      { text: "Aspiration et brossage", included: true },
      { text: "Vérification pH", included: true },
      { text: "Traitement chimique", included: true },
      { text: "Entretien équipements", included: true },
      { text: "2 passages par mois", included: true },
    ],
  },
  {
    name: "Premium",
    desc: "Entretien hebdomadaire + équipements",
    price: "1800",
    unit: "MAD/mois",
    popular: false,
    features: [
      { text: "Nettoyage complet", included: true },
      { text: "Aspiration et brossage", included: true },
      { text: "Vérification pH", included: true },
      { text: "Traitement chimique", included: true },
      { text: "Entretien équipements", included: true },
      { text: "4 passages par mois", included: true },
    ],
  },
];

export const FAQ = [
  {
    q: "Combien coûte le nettoyage d'une piscine au Maroc ?",
    a: "Le nettoyage ponctuel commence à partir de 350 MAD. Les tarifs varient selon la taille de la piscine et les services demandés. Nous proposons un devis gratuit et personnalisé.",
  },
  {
    q: "À quelle fréquence entretenir sa piscine ?",
    a: "Nous recommandons un entretien hebdomadaire pendant la saison chaude et bimensuel le reste de l'année. Nos abonnements mensuels vous garantissent une eau toujours propre.",
  },
  {
    q: "Pourquoi l'eau de ma piscine est verte ?",
    a: "L'eau verte est causée par une prolifération d'algues, souvent due à un déséquilibre chimique ou un manque de filtration. Notre service d'urgence eau verte résout ce problème en 24-48h.",
  },
  {
    q: "Quels produits utilisez-vous ?",
    a: "Nous utilisons exclusivement des produits professionnels certifiés : chlore, pH+, pH-, anti-algues, floculant. Tous nos produits sont conformes aux normes en vigueur.",
  },
  {
    q: "Intervenez-vous en urgence ?",
    a: "Oui ! Notre service d'urgence garantit une intervention sous 24h pour les problèmes critiques comme l'eau verte, les fuites ou les pannes d'équipement.",
  },
  {
    q: "Proposez-vous des contrats annuels ?",
    a: "Oui, nous proposons des formules mensuelles et annuelles avec des tarifs préférentiels. L'abonnement annuel vous fait bénéficier d'une remise supplémentaire.",
  },
  {
    q: "Travaillez-vous avec les hôtels et résidences ?",
    a: "Absolument ! Nous collaborons avec des hôtels, riads, résidences et syndics de copropriété. Nous proposons des contrats adaptés aux professionnels.",
  },
  {
    q: "Est-ce que le devis est vraiment gratuit ?",
    a: "Oui, le devis est 100% gratuit et sans engagement. Nous nous déplaçons pour évaluer votre piscine et vous fournir un tarif précis.",
  },
  {
    q: "Dans quelles villes intervenez-vous ?",
    a: "Nous intervenons à Darbouazza, Bouskoura, Ain Diab, Californie, Anfa, Tamaris, Sidi Rahal et dans tout le Grand Casablanca.",
  },
  {
    q: "Comment prendre rendez-vous ?",
    a: "Contactez-nous par WhatsApp, téléphone ou via le formulaire de contact sur notre site. Nous vous répondons dans l'heure pendant nos horaires d'ouverture.",
  },
];

export const FOOTER = {
  tagline: "Votre partenaire de confiance pour l'entretien de piscines dans le Grand Casablanca.",
  services: ["Nettoyage Complet", "Traitement de l'Eau", "Entretien Équipements", "Abonnement Mensuel", "Hivernage", "Urgence Eau Verte"],
  zones: ["Darbouazza", "Bouskoura", "Ain Diab", "Californie", "Anfa", "Tamaris"],
  hours: [
    { day: "Lundi - Vendredi", time: "08:00 - 19:00" },
    { day: "Samedi", time: "08:00 - 17:00" },
    { day: "Dimanche", time: "Urgences uniquement" },
  ],
  copyright: `© ${new Date().getFullYear()} AquaPure Maroc. Tous droits réservés.`,
  seoText:
    "Entretien piscine Darbouazza • Nettoyage piscine Casablanca • Traitement eau piscine Maroc • Piscine eau verte Bouskoura • Entretien piscine Ain Diab",
};
