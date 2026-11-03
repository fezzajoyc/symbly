import type { Dictionary } from "../i18n";

// Français (fr) — vouvoiement constant, sans anglicismes évitables.
// Contrat : forme des clés identique à en (tests/seo.test.ts), valeurs en français.
const fr: Dictionary = {
  brand: "Symbly",
  tagline: "Chaque symbole est à un clic du presse-papiers.",
  metaDesc: "Cherchez parmi plus de 400 symboles à copier-coller : flèches, maths, monnaies, étoiles, lettres grecques et plus. Un clic pour copier, favoris locaux, gratuit et sans inscription.",

  nav: {
    tools: "Tous les outils",
    categories: "Catégories",
    about: "À propos",
    menu: "Menu",
    language: "Langue",
  },

  home: {
    heroTitle: "Tous les symboles dont vous aurez besoin — cherchez, cliquez, collez",
    heroSub: "399 symboles Unicode choisis dans 13 catégories : flèches, maths, monnaies, ponctuation, étoiles, grec et plus. Cherchez par nom ou mot-clé, copiez en un clic. Gratuit, sans compte.",
    browseAll: "Voir tous les outils",
    categoriesTitle: "Catégories",
    featuredTitle: "Outils populaires",
    trustLocal: "Tout tourne dans votre navigateur",
    trustFree: "Gratuit, sans compte",
    trustFast: "Instantané, marche hors ligne",
    rotating: [
      "Flèches, maths, monnaies — chaque symbole à un clic du presse-papiers",
      "Cherchez « euro », « coche » ou « alpha » et copiez le bon glyphe",
      "Survolez une tuile pour lire son point de code — U+2212, pas un trait d'union",
      "Les favoris restent dans votre navigateur. Rien n'est envoyé, jamais",
    ],
    statsLabels: { tools: "outils", languages: "langues", uploads: "envois", accounts: "comptes" },
    eyebrow: "Gratuit, pour toujours",
    heroCtaSecondary: "Comment ça marche",
    statsTools: "{n} outils",
    statsLanguages: "{n} langues",
    statsUploads: "0 envoi",
    statsAccounts: "0 compte",
    categoriesSub: "Une bibliothèque, treize familles de symboles, toutes prêtes à copier.",
    popularSub: "Là où finit la plupart des chasses au symbole.",
    privacyTitle: "Vos symboles ne quittent jamais votre appareil.",
    privacySub: "Aucun compte, aucune étape d'envoi. La bibliothèque vit dans votre navigateur — cliquez, le symbole est dans le presse-papiers, en local.",
    privacyPoint1T: "Local par conception",
    privacyPoint1D: "Recherche, favoris et copie se passent dans votre navigateur. Aucun serveur ne voit une seule frappe.",
    privacyPoint2T: "Sans comptes",
    privacyPoint2D: "Pas d'inscription, pas d'e-mail, pas de synchronisation à gérer. Vous ouvrez la page et vous copiez.",
    privacyPoint3T: "Précis, pas approximatif",
    privacyPoint3D: "Chaque tuile affiche son point de code et son entité exacts — les caractères jumeaux ne se confondent jamais.",
    privacyLink: "Lire la note de confidentialité complète",
    endTitle: "Trouvez le symbole. Copiez. Fini.",
    endSub: "Treize catégories, plus de 400 glyphes, zéro envoi.",
  },

  tools: {
    title: "Tous les outils",
    subtitle: "Cherchez dans la bibliothèque de symboles. Un clic pour copier, sans inscription.",
    filterPlaceholder: "Rechercher un outil…",
    count: "{count} outils",
    empty: "Aucun outil ne correspond à « {query} ».",
  },

  categories: {
    pdf: { name: "PDF", desc: "Fusionnez, divisez, convertissez et modifiez des fichiers PDF sans les envoyer nulle part." },
    image: { name: "Image", desc: "Compressez, redimensionnez, recadrez et convertissez des images directement dans votre navigateur." },
    text: { name: "Symboles & Unicode", desc: "Flèches, maths, monnaies, étoiles et tous les autres glyphes — cherchables, cliquables, prêts à coller." },
    developer: { name: "Développement", desc: "Formateurs, encodeurs, décodeurs et générateurs pour le quotidien du développeur." },
    seo: { name: "SEO", desc: "Balises meta, données structurées, aperçu SERP et autres assistants de référencement." },
    security: { name: "Sécurité", desc: "Mots de passe, empreintes et vérifications — générés et contrôlés sur votre appareil." },
    utility: { name: "Utilitaires", desc: "Convertisseurs d'unités, calculatrices et assistants du quotidien." },
  },

  tool: {
    howTo: "Mode d'emploi",
    faq: "Questions fréquentes",
    related: "Outils associés",
    privacyNote:
      "Cet outil s'exécute entièrement dans votre navigateur. Vos données ne quittent jamais votre appareil — elles ne sont envoyées à aucun serveur.",
    inCategory: "Plus d'outils dans {category}",
    backToCategory: "Tous les outils {category}",
  },

  common: {
    openTool: "Ouvrir l'outil",
    copy: "Copier",
    copied: "Copié",
    download: "Télécharger",
    reset: "Réinitialiser",
    swap: "Inverser",
    clear: "Effacer",
    error: "Une erreur est survenue. Vérifiez votre saisie et réessayez.",
    input: "Entrée",
    output: "Résultat",
    settings: "Options",
    dropFiles: "Déposez des fichiers ici ou cliquez pour choisir",
    dropFile: "Déposez un fichier ici ou cliquez pour choisir",
    processing: "Traitement…",
    fileSize: "Taille",
    sample: "Essayer un exemple",
    uppercase: "MAJUSCULES",
  },

  unit: {
    from: "De",
    to: "Vers",
    amount: "Quantité",
    result: "Résultat",
    common: "Conversions courantes",
    formula: "Formule",
    allUnits: "Toutes les unités",
  },

  text: {
    stats: {
      words: "Mots",
      characters: "Caractères",
      charsNoSpaces: "Sans espaces",
      sentences: "Phrases",
      paragraphs: "Paragraphes",
      lines: "Lignes",
      readingTime: "Temps de lecture",
      readingMinutes: "{n} min de lecture",
    },
  },

  footer: {
    line: "Symboles Unicode gratuits, à un clic du presse-papiers. Rien de ce que vous faites ici ne quitte votre navigateur.",
    privacy: "Confidentialité",
    terms: "Conditions",
    about: "À propos",
    badges: "Badges",
    language: "Langue",
  },

  badge: {
    title: "Badges Symbly",
    desc: "Posez un badge Symbly sur votre site, README ou doc. Il renvoie ici et dit que les symboles sont à un clic.",
    voluntary: "L'intégration est entièrement volontaire — prenez un badge si le projet vous plaît. Aucune autorisation nécessaire.",
    md: "Markdown (README)",
    html: "HTML (site web)",
    thanks: "Merci de faire passer le mot — chaque intégration aide d'autres gens à trouver le bon glyphe plus vite.",
  },

  embed: {
    title: "Intégrer cet outil",
    desc: "Ajoutez cet outil à votre site en une ligne — il s'exécute dans le navigateur du visiteur.",
  },

    mcp: {
    title: "Serveur MCP — outils accessibles aux IA",
    desc1: "Symbly fournit un serveur MCP (Model Context Protocol) : les assistants IA comme Claude ou Cursor peuvent chercher la même bibliothèque de symboles et inspecter les caractères avec la même logique testée que ce site.",
    desc2: "Les outils exécutent les fonctions pures du site — recherche de symboles, infos caractères et décoration de texte. L'exécution a lieu sur la machine du client IA via npx — rien n'est envoyé à nos serveurs.",
    toolsTitle: "Outils exécutables ({n})",
    requiresNode: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
    privacy: "Nécessite Node.js 18+. Le serveur tourne localement en stdio ; seuls les appels que vous lancez sont calculés sur votre machine.",
  },

    notFound: {
    title: "Page introuvable",
    body: "L'outil que vous cherchez n'existe pas. Parcourez plutôt tous les outils.",
    home: "Retour à l'accueil",
  },
};

export default fr;
