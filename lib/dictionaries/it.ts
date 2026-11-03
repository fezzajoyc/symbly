// it: dizionario UI italiano — forma chiavi identica a en (tests/seo.test.ts fa un confronto ricorsivo).
// Registro informale ("tu"), coerente con il resto del sito. "Symbly" e i segnaposto {n}/{count}/{query}/{category} restano intatti.
const it = {
  brand: "Symbly",
  tagline: "Ogni simbolo è a un clic dagli appunti.",
  metaDesc: "Cerca tra oltre 400 simboli da copiare e incollare: frecce, matematica, valute, stelle, lettere greche e altro. Un clic per copiare, preferiti locali, gratis e senza registrazione.",

  nav: {
    tools: "Tutti gli strumenti",
    categories: "Categorie",
    about: "Chi siamo",
    menu: "Menu",
    language: "Lingua",
  },

  home: {
    heroTitle: "Ogni simbolo che ti servirà — cerca, clicca, incolla",
    heroSub: "399 simboli Unicode curati in 13 categorie: frecce, matematica, valute, punteggiatura, stelle, greco e altro. Cerca per nome o parola chiave e copia con un clic. Gratis, senza account.",
    browseAll: "Sfoglia tutti gli strumenti",
    pinned: "Fissati",
    pin: "Fissa in alto",
    unpin: "Rimuovi dai fissati",
    popular: "Popolari adesso",
    categoriesTitle: "Categorie",
    featuredTitle: "Strumenti popolari",
    trustLocal: "Tutto gira nel browser",
    trustFree: "Gratis, senza account",
    trustFast: "Istantaneo, funziona offline",
    rotating: [
      "Frecce, matematica, valute — ogni simbole a un clic dagli appunti",
      "Cerca «euro», «spunta» o «alfa» e copia il glifo giusto",
      "Passa su una casella e leggi il codepoint — U+2212, non un trattino",
      "I preferiti restano nel browser. Niente viene caricato, mai",
    ],
    statsLabels: { tools: "strumenti", languages: "lingue", uploads: "upload", accounts: "account" },
    eyebrow: "Gratis per sempre",
    heroCtaSecondary: "Come funziona",
    statsTools: "{n} strumenti",
    statsLanguages: "{n} lingue",
    statsUploads: "0 upload",
    statsAccounts: "0 account",
    categoriesSub: "Una biblioteca, tredici famiglie di simboli, tutte pronte da copiare.",
    popularSub: "Dove finisce la maggior parte delle cacce al simbolo.",
    privacyTitle: "I tuoi simboli non lasciano mai il dispositivo.",
    privacySub: "Nessun account, nessun passaggio di caricamento. La biblioteca è dati nel tuo browser — clicchi e il simbole è negli appunti, in locale.",
    privacyPoint1T: "Locale per progetto",
    privacyPoint1D: "Ricerca, preferiti e copia avvengono nel browser. Nessun server vede un solo tasto.",
    privacyPoint2T: "Senza account",
    privacyPoint2D: "Niente registrazione, niente e-mail, niente sincronizzazioni. Apri la pagina e copi.",
    privacyPoint3T: "Preciso, non approssimativo",
    privacyPoint3D: "Ogni casella mostra codepoint ed entità esatti — i caratteri simili non si confondono mai.",
    privacyLink: "Leggi la nota privacy completa",
    endTitle: "Trova il simbolo. Copialo. Fatto.",
    endSub: "Tredici categorie, oltre 400 glifi, zero caricamenti.",
  },

  tools: {
    title: "Tutti gli strumenti",
    subtitle: "Cerca nella biblioteca di simboli. Un clic per copiare, senza registrazione.",
    filterPlaceholder: "Cerca strumenti…",
    count: "{count} strumenti",
    empty: "Nessuno strumento corrisponde a “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Unisci, dividi, converti e modifica file PDF senza caricarli da nessuna parte." },
    image: { name: "Immagini", desc: "Comprimi, ridimensiona, ritaglia e converti immagini direttamente nel tuo browser." },
    text: { name: "Simboli e Unicode", desc: "Frecce, matematica, valute, stelle e ogni altro glifo — ricercabili, cliccabili, pronti da incollare." },
    developer: { name: "Sviluppo", desc: "Formattatori, codificatori, decodificatori e generatori per il lavoro di ogni giorno." },
    seo: { name: "SEO", desc: "Meta tag, markup schema, anteprima SERP e altri aiuti per la SEO on-page." },
    security: { name: "Sicurezza", desc: "Password, hash e ricerche — generati e verificati sul tuo dispositivo." },
    utility: { name: "Utilità", desc: "Convertitori di unità, calcolatori e aiuti per la vita di tutti i giorni." },
  },

  tool: {
    howTo: "Come si usa",
    faq: "Domande frequenti",
    related: "Strumenti correlati",
    nextStep: "Passaggi successivi",
    copyLink: "Copia link",
    privacyNote:
      "Questo strumento gira interamente nel tuo browser. I tuoi dati non lasciano mai il dispositivo: non vengono caricati su nessun server.",
    inCategory: "Altri in {category}",
    backToCategory: "Tutti gli strumenti {category}",
  },

  common: {
    openTool: "Apri strumento",
    copy: "Copia",
    copied: "Copiato",
    download: "Scarica",
    reset: "Reimposta",
    swap: "Inverti",
    clear: "Svuota",
    error: "Qualcosa è andato storto. Controlla i dati inseriti e riprova.",
    input: "Input",
    output: "Risultato",
    settings: "Opzioni",
    dropFiles: "Trascina qui i file o clicca per sceglierli",
    dropFile: "Trascina qui un file o clicca per sceglierlo",
    processing: "Elaborazione…",
    fileSize: "Dimensione",
    sample: "Prova un esempio",
    uppercase: "MAIUSCOLO",
  },

  unit: {
    from: "Da",
    to: "A",
    amount: "Quantità",
    result: "Risultato",
    common: "Conversioni comuni",
    formula: "Formula",
    allUnits: "Tutte le unità",
  },

  text: {
    stats: {
      words: "Parole",
      characters: "Caratteri",
      charsNoSpaces: "Senza spazi",
      sentences: "Frasi",
      paragraphs: "Paragrafi",
      lines: "Righe",
      readingTime: "Tempo di lettura",
      readingMinutes: "{n} min di lettura",
    },
  },

  footer: {
    line: "Simboli Unicode gratis, a un clic dagli appunti. Niente di ciò che fai qui lascia il tuo browser.",
    privacy: "Privacy",
    terms: "Termini",
    about: "Chi siamo",
    badges: "Badge",
    language: "Lingua",
  },

  badge: {
    title: "Badge Symbly",
    desc: "Metti un badge Symbly sul tuo sito, README o documentazione. Rimanda qui e dice che i simboli sono a un clic.",
    voluntary: "L'incorporamento è del tutto volontario: scegli un badge se il progetto ti piace. Non serve alcun permesso.",
    md: "Markdown (README)",
    html: "HTML (sito web)",
    thanks: "Grazie per la passerella — ogni incorporamento aiuta più persone a trovare il glifo giusto prima.",
  },

    embed: {
    title: "Incorpora questo strumento",
    desc: "Metti questo strumento sul tuo sito con una riga: gira nel browser del visitatore.",
  },

    mcp: {
    title: "Server MCP — strumenti accessibili all'IA",
    desc1: "Symbly offre un server MCP (Model Context Protocol): assistenti AI come Claude o Cursor possono cercare la stessa biblioteca di simboli e ispezionare i caratteri con la stessa logica testata del sito.",
    desc2: "Gli strumenti eseguono le funzioni pure del sito — ricerca simboli, informazioni sui caratteri e decorazione del testo. L'esecuzione avviene sulla macchina del client AI via npx — niente arriva ai nostri server.",
    toolsTitle: "Strumenti eseguibili ({n})",
    requiresNode: "Richiede Node.js 18+. Il server gira localmente via stdio; solo le chiamate che fai vengono calcolate sulla tua macchina.",
    privacy: "Richiede Node.js 18+. Il server gira localmente via stdio; solo le chiamate che fai vengono calcolate sulla tua macchina.",
  },

    notFound: {
    title: "Pagina non trovata",
    body: "Lo strumento che cerchi non esiste. Sfoglia invece tutti gli strumenti.",
    home: "Vai alla homepage",
  },
};

export default it;
