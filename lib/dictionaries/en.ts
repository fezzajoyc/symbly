// en is the typing source of truth: every other dictionary must satisfy Dictionary.
// 刻意不加 as const:字符串需放宽为 string,翻译文件才可实现同一类型。
const en = {
  brand: "Symbly",
  tagline: "Every symbol is one click from your clipboard.",
  metaDesc: "Search 400+ copy-paste symbols — arrows, math signs, currency, stars, Greek letters and more. One click to copy, favorites saved locally, all free in your browser.",

  nav: {
    tools: "All tools",
    categories: "Categories",
    about: "About",
    menu: "Menu",
    language: "Language",
  },

  home: {
    heroTitle: "Every symbol you'll ever need — search, click, paste",
    heroSub: "399 curated Unicode symbols across 13 categories: arrows, math, currency, punctuation, stars, Greek and more. Search by name or keyword, click once to copy. Free, no signup.",
    browseAll: "Browse all tools",
    categoriesTitle: "Categories",
    featuredTitle: "Popular tools",
    trustLocal: "Everything runs in your browser",
    trustFree: "Free, no account",
    trustFast: "Instant, works offline",
    rotating: [
      "Arrows, math, currency — every symbol one click from your clipboard",
      "Search “tick”, “euro” or “alpha” and copy the exact glyph you meant",
      "Hover any tile for its codepoint — the real minus U+2212, not a hyphen",
      "Favorites stay in your browser. Nothing is uploaded, ever",
    ],
    statsLabels: { tools: "tools", languages: "languages", uploads: "uploads", accounts: "accounts" },
    eyebrow: "Free forever",
    heroCtaSecondary: "How it works",
    statsTools: "{n} tools",
    statsLanguages: "{n} languages",
    statsUploads: "0 uploads",
    statsAccounts: "0 accounts",
    categoriesSub: "One library, thirteen families of symbols, all copy-ready.",
    popularSub: "Where most symbol hunts end.",
    privacyTitle: "Your symbols never leave your device.",
    privacySub: "There is no account and no upload step. The library is data in your browser — click a symbol and it is on your clipboard, locally.",
    privacyPoint1T: "Local by design",
    privacyPoint1D: "Search, favorites and copying all happen in your browser. No server sees a single keystroke.",
    privacyPoint2T: "No accounts",
    privacyPoint2D: "No sign-up, no email, no sync to worry about. Open the page and start copying.",
    privacyPoint3T: "Precise, not approximate",
    privacyPoint3D: "Every tile shows its exact codepoint and entity, so look-alike characters never get confused.",
    privacyLink: "Read the full privacy note",
    endTitle: "Find the symbol. Copy it. Done.",
    endSub: "Thirteen categories, 400+ glyphs, zero uploads.",
  },

  tools: {
    title: "All tools",
    subtitle: "Search the symbol library. One click to copy, no signup.",
    filterPlaceholder: "Search tools…",
    count: "{count} tools",
    empty: "No tools match “{query}”.",
  },

  categories: {
    pdf: { name: "PDF", desc: "Merge, split, convert and edit PDF files without uploading them anywhere." },
    image: { name: "Image", desc: "Compress, resize, crop and convert images right in your browser." },
    text: { name: "Symbols & Unicode", desc: "Arrows, math, currency, stars and every other glyph — searchable, clickable, copy-ready." },
    developer: { name: "Developer", desc: "Formatters, encoders, decoders and generators for daily dev work." },
    seo: { name: "SEO", desc: "Meta tags, schema markup, SERP preview and other on-page SEO helpers." },
    security: { name: "Security", desc: "Passwords, hashes and lookups — generated and checked on your device." },
    utility: { name: "Utility", desc: "Unit converters, calculators and everyday helpers." },
  },

  tool: {
    howTo: "How to use",
    faq: "Frequently asked questions",
    related: "Related tools",
    privacyNote:
      "This tool runs entirely in your browser. Your data never leaves your device — it is not uploaded to any server.",
    inCategory: "More in {category}",
    backToCategory: "All {category} tools",
  },

  common: {
    openTool: "Open tool",
    copy: "Copy",
    copied: "Copied",
    download: "Download",
    reset: "Reset",
    swap: "Swap",
    clear: "Clear",
    error: "Something went wrong. Check your input and try again.",
    input: "Input",
    output: "Result",
    settings: "Options",
    dropFiles: "Drop files here or click to choose",
    dropFile: "Drop a file here or click to choose",
    processing: "Processing…",
    fileSize: "Size",
    sample: "Try an example",
    uppercase: "UPPERCASE",
  },

  unit: {
    from: "From",
    to: "To",
    amount: "Amount",
    result: "Result",
    common: "Common conversions",
    formula: "Formula",
    allUnits: "All units",
  },

  text: {
    stats: {
      words: "Words",
      characters: "Characters",
      charsNoSpaces: "No spaces",
      sentences: "Sentences",
      paragraphs: "Paragraphs",
      lines: "Lines",
      readingTime: "Reading time",
      readingMinutes: "{n} min read",
    },
  },

  footer: {
    line: "Free Unicode symbols, one click from your clipboard. Nothing you do here leaves your browser.",
    privacy: "Privacy",
    terms: "Terms",
    about: "About",
    badges: "Badges",
    language: "Language",
  },

  badge: {
    title: "Symbly badges",
    desc: "Put a Symbly badge on your site, README or docs. It links back here and tells people the symbols behind it are one click away.",
    voluntary: "Embedding is completely voluntary — pick a badge if you like the project. No permission needed.",
    md: "Markdown (README)",
    html: "HTML (website)",
    thanks: "Thanks for spreading the word — every embed helps more people find the right glyph faster.",
  },

    embed: {
    title: "Embed this tool",
    desc: "Put this tool on your own site with one line — it runs entirely in the visitor's browser.",
  },

    mcp: {
    title: "MCP server — AI-accessible tools",
    desc1: "Symbly ships an MCP (Model Context Protocol) server: AI assistants like Claude or Cursor can search the same symbol library and inspect characters with the same tested logic you see on this site.",
    desc2: "The tools run the site's own pure functions — symbol search, character info and text decoration. Execution happens on the AI client's machine via npx — nothing is sent to our servers.",
    toolsTitle: "Executable tools ({n})",
    requiresNode: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
    privacy: "Requires Node.js 18+. The server runs locally over stdio; only the tool calls you make are computed on your machine.",
  },

    notFound: {
    title: "Page not found",
    body: "The tool you are looking for does not exist. Browse all tools instead.",
    home: "Go to homepage",
  },
};

export default en;
