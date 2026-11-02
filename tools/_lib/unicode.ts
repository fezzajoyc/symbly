/**
 * Unicode character information and text decoration — pure functions, no imports.
 * Consumed by the unicode-lookup and text-decorator engines (client) and the
 * char_info / decorate_text MCP tools (node).
 */

/** Named HTML entities (WHATWG table subset): name without & and ; → character. */
const NAMED: Record<string, string> = {
  // controls & basics
  amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: "\u00a0", shy: "\u00ad",
  sup1: "¹", sup2: "²", sup3: "³", frac12: "½", frac13: "⅓", frac23: "⅔",
  frac14: "¼", frac34: "¾", frac15: "⅕", frac25: "⅖", frac35: "⅗", frac45: "⅘",
  frac16: "⅙", frac56: "⅚", frac18: "⅛", frac38: "⅜", frac58: "⅝", frac78: "⅞",
  // latin-1 letters & marks
  agrave: "à", aacute: "á", acirc: "â", atilde: "ã", auml: "ä", aring: "å",
  aelig: "æ", ccedil: "ç", egrave: "è", eacute: "é", ecirc: "ê", euml: "ë",
  igrave: "ì", iacute: "í", icirc: "î", iuml: "ï", ntilde: "ñ", ograve: "ò",
  oacute: "ó", ocirc: "ô", otilde: "õ", ouml: "ö", oslash: "ø", ugrave: "ù",
  uacute: "ú", ucirc: "û", uuml: "ü", yacute: "ý", szlig: "ß",
  macr: "¯", acute: "´", micro: "µ", cedil: "¸", ordf: "ª", ordm: "º",
  iexcl: "¡", iquest: "¿", laquo: "«", raquo: "»", middot: "·", deg: "°",
  plusmn: "±", times: "×", divide: "÷", pound: "£", yen: "¥", cent: "¢",
  sect: "§", para: "¶", not: "¬", reg: "®", copy: "©", curren: "¤",
  // general punctuation
  mdash: "—", ndash: "–", dash: "‐", horbar: "―", hellip: "…",
  sbquo: "‚", bdquo: "„", ldquo: "“", rdquo: "”", lsquo: "‘", rsquo: "’",
  lsaquo: "‹", rsaquo: "›", bull: "•", permil: "‰", prime: "′", Prime: "″",
  dagger: "†", Dagger: "‡", trade: "™",
  // letterlike, arrows, math
  euro: "€", dollar: "$", rupee: "₹", rub: "₽", won: "₩",
  larr: "←", rarr: "→", uarr: "↑", darr: "↓", harr: "↔", varr: "↕",
  UpperLeftArrow: "↖", UpperRightArrow: "↗", LowerRightArrow: "↘", LowerLeftArrow: "↙",
  lArr: "⇐", rArr: "⇒", uArr: "⇑", dArr: "⇓", hArr: "⇔", vArr: "⇕",
  Nwarrow: "⇖", Nearrow: "⇗", Searrow: "⇘", Swarrow: "⇙",
  map: "↦", mapstoleft: "↤", mapstoup: "↥", mapstodown: "↧",
  larrhk: "↩", rarrhk: "↪", larrb: "⇤", Tab: "⇥",
  nleftarrow: "↚", nrightarrow: "↛", nLeftarrow: "⇍", nRightarrow: "⇏", nLeftrightarrow: "⇎",
  lharu: "↼", lhard: "↽", rharu: "⇀", rhard: "⇁",
  longleftarrow: "⟵", longrightarrow: "⟶", longleftrightarrow: "⟷",
  Longleftarrow: "⟸", Longrightarrow: "⟹", Longleftrightarrow: "⟺", longmapsto: "⟼",
  plus: "+", minus: "−", ne: "≠", asymp: "≈", cong: "≅", simeq: "≃", doteq: "≐",
  equiv: "≡", le: "≤", ge: "≥", Lt: "≪", Gt: "≫",
  radic: "√", sum: "∑", prod: "∏", int: "∫", iint: "∬", iiint: "∭",
  infin: "∞", prop: "∝", part: "∂", nabla: "∇", empty: "∅", alefsym: "ℵ",
  Copf: "ℂ", Hopf: "ℍ", Nopf: "ℕ", Popf: "ℙ", Qopf: "ℚ", Ropf: "ℝ", Zopf: "ℤ",
  isin: "∈", notin: "∉", ni: "∋", nmid: "∤", cap: "∩", cup: "∪",
  sub: "⊂", sup: "⊃", sube: "⊆", supe: "⊇", setminus: "∖",
  oplus: "⊕", otimes: "⊗", odot: "⊙", perp: "⊥", top: "⊤",
  vdash: "⊢", dashv: "⊣", vDash: "⊨", parallel: "∥",
  ang: "∠", angrt: "∟", there4: "∴", because: "∵",
  and: "∧", or: "∨", forall: "∀", exist: "∃", sdot: "⋅", compfn: "∘", Star: "⋆",
  frasl: "⁄", lfloor: "⌊", rfloor: "⌋", lceil: "⌈", rceil: "⌉",
  lang: "⟨", rang: "⟩", frown: "⌢", smile: "⌣",
  // symbols
  spades: "♠", hearts: "♥", diams: "♦", clubs: "♣", bigstar: "★",
  check: "✓", checkmark: "✓", sung: "♪", flat: "♭", natural: "♮", sharp: "♯",
  // greek
  alpha: "α", beta: "β", gamma: "γ", delta: "δ", epsilon: "ε", zeta: "ζ",
  eta: "η", theta: "θ", iota: "ι", kappa: "κ", lambda: "λ", mu: "μ", nu: "ν",
  xi: "ξ", omicron: "ο", pi: "π", rho: "ρ", sigma: "σ", sigmaf: "ς", tau: "τ",
  upsilon: "υ", phi: "φ", chi: "χ", psi: "ψ", omega: "ω",
  thetasym: "ϑ", piv: "ϖ",
  Gamma: "Γ", Delta: "Δ", Theta: "Θ", Lambda: "Λ", Xi: "Ξ", Pi: "Π",
  Sigma: "Σ", Phi: "Φ", Psi: "Ψ", Omega: "Ω",
};

/** entity string ("&amp;") → character, for validation and decode. */
const ENTITY_TO_CHAR = new Map<string, string>(
  Object.entries(NAMED).map(([name, ch]) => [`&${name};`, ch]),
);

/** character → best named entity string, or null when WHATWG defines none. */
const CHAR_TO_ENTITY = new Map<string, string>();
for (const [name, ch] of Object.entries(NAMED)) {
  if (!CHAR_TO_ENTITY.has(ch)) CHAR_TO_ENTITY.set(ch, `&${name};`);
}

/** Decode a single HTML entity string ("&amp;", "&#65;", "&#x41;") or null. */
export function decodeEntity(entity: string): string | null {
  const named = ENTITY_TO_CHAR.get(entity);
  if (named) return named;
  const m = /^&#(\d+);$/.exec(entity);
  if (m) {
    const cp = Number(m[1]);
    return cp > 0 && cp <= 0x10ffff && !Object.is(cp, NaN) ? String.fromCodePoint(cp) : null;
  }
  return null;
}

export function namedEntityFor(ch: string): string | null {
  return CHAR_TO_ENTITY.get(ch) ?? null;
}

/* ── Unicode block guess ─────────────────────────────────────────────── */

const BLOCKS: [number, number, string][] = [
  [0x0000, 0x007f, "Basic Latin"],
  [0x0080, 0x00ff, "Latin-1 Supplement"],
  [0x0100, 0x017f, "Latin Extended-A"],
  [0x0180, 0x024f, "Latin Extended-B"],
  [0x0250, 0x02af, "IPA Extensions"],
  [0x02b0, 0x02ff, "Spacing Modifier Letters"],
  [0x0300, 0x036f, "Combining Diacritical Marks"],
  [0x0370, 0x03ff, "Greek and Coptic"],
  [0x0400, 0x04ff, "Cyrillic"],
  [0x0500, 0x052f, "Cyrillic Supplement"],
  [0x0530, 0x058f, "Armenian"],
  [0x0590, 0x05ff, "Hebrew"],
  [0x0600, 0x06ff, "Arabic"],
  [0x0700, 0x074f, "Syriac"],
  [0x0750, 0x077f, "Arabic Supplement"],
  [0x0780, 0x07bf, "Thaana"],
  [0x07c0, 0x07ff, "NKo"],
  [0x0900, 0x097f, "Devanagari"],
  [0x0980, 0x09ff, "Bengali"],
  [0x0a00, 0x0a7f, "Gurmukhi"],
  [0x0a80, 0x0aff, "Gujarati"],
  [0x0b00, 0x0b7f, "Oriya"],
  [0x0b80, 0x0bff, "Tamil"],
  [0x0c00, 0x0c7f, "Telugu"],
  [0x0c80, 0x0cff, "Kannada"],
  [0x0d00, 0x0d7f, "Malayalam"],
  [0x0d80, 0x0dff, "Sinhala"],
  [0x0e00, 0x0e7f, "Thai"],
  [0x0e80, 0x0eff, "Lao"],
  [0x0f00, 0x0fff, "Tibetan"],
  [0x1000, 0x109f, "Myanmar"],
  [0x10a0, 0x10ff, "Georgian"],
  [0x1100, 0x11ff, "Hangul Jamo"],
  [0x1200, 0x137f, "Ethiopic"],
  [0x13a0, 0x13ff, "Cherokee"],
  [0x1400, 0x167f, "Unified Canadian Aboriginal Syllabics"],
  [0x1680, 0x169f, "Ogham"],
  [0x16a0, 0x16ff, "Runic"],
  [0x1700, 0x171f, "Tagalog"],
  [0x1780, 0x17ff, "Khmer"],
  [0x1800, 0x18ff, "Mongolian"],
  [0x1e00, 0x1eff, "Latin Extended Additional"],
  [0x1f00, 0x1fff, "Greek Extended"],
  [0x2000, 0x206f, "General Punctuation"],
  [0x2070, 0x209f, "Superscripts and Subscripts"],
  [0x20a0, 0x20cf, "Currency Symbols"],
  [0x20d0, 0x20ff, "Combining Diacritical Marks for Symbols"],
  [0x2100, 0x214f, "Letterlike Symbols"],
  [0x2150, 0x218f, "Number Forms"],
  [0x2190, 0x21ff, "Arrows"],
  [0x2200, 0x22ff, "Mathematical Operators"],
  [0x2300, 0x23ff, "Miscellaneous Technical"],
  [0x2400, 0x243f, "Control Pictures"],
  [0x2440, 0x245f, "Optical Character Recognition"],
  [0x2460, 0x24ff, "Enclosed Alphanumerics"],
  [0x2500, 0x257f, "Box Drawing"],
  [0x2580, 0x259f, "Block Elements"],
  [0x25a0, 0x25ff, "Geometric Shapes"],
  [0x2600, 0x26ff, "Miscellaneous Symbols"],
  [0x2700, 0x27bf, "Dingbats"],
  [0x27c0, 0x27ef, "Miscellaneous Mathematical Symbols-A"],
  [0x27f0, 0x27ff, "Supplemental Arrows-A"],
  [0x2800, 0x28ff, "Braille Patterns"],
  [0x2900, 0x297f, "Supplemental Arrows-B"],
  [0x2980, 0x29ff, "Miscellaneous Mathematical Symbols-B"],
  [0x2a00, 0x2aff, "Supplemental Mathematical Operators"],
  [0x2b00, 0x2bff, "Miscellaneous Symbols and Arrows"],
  [0x2c60, 0x2c7f, "Latin Extended-C"],
  [0x2e00, 0x2e7f, "Supplemental Punctuation"],
  [0x2e80, 0x2eff, "CJK Radicals Supplement"],
  [0x2f00, 0x2fdf, "Kangxi Radicals"],
  [0x3000, 0x303f, "CJK Symbols and Punctuation"],
  [0x3040, 0x309f, "Hiragana"],
  [0x30a0, 0x30ff, "Katakana"],
  [0x3100, 0x312f, "Bopomofo"],
  [0x3130, 0x318f, "Hangul Compatibility Jamo"],
  [0x3190, 0x319f, "Kanbun"],
  [0x31f0, 0x31ff, "Katakana Phonetic Extensions"],
  [0x3200, 0x32ff, "Enclosed CJK Letters and Months"],
  [0x3300, 0x33ff, "CJK Compatibility"],
  [0x3400, 0x4dbf, "CJK Unified Ideographs Extension A"],
  [0x4dc0, 0x4dff, "Yijing Hexagram Symbols"],
  [0x4e00, 0x9fff, "CJK Unified Ideographs"],
  [0xa000, 0xa48f, "Yi Syllables"],
  [0xa490, 0xa4cf, "Yi Radicals"],
  [0xac00, 0xd7af, "Hangul Syllables"],
  [0xe000, 0xf8ff, "Private Use Area"],
  [0xf900, 0xfaff, "CJK Compatibility Ideographs"],
  [0xfb00, 0xfb4f, "Alphabetic Presentation Forms"],
  [0xfb50, 0xfdff, "Arabic Presentation Forms-A"],
  [0xfe00, 0xfe0f, "Variation Selectors"],
  [0xfe10, 0xfe1f, "Vertical Forms"],
  [0xfe20, 0xfe2f, "Combining Half Marks"],
  [0xfe30, 0xfe4f, "CJK Compatibility Forms"],
  [0xfe50, 0xfe6f, "Small Form Variants"],
  [0xfe70, 0xfeff, "Arabic Presentation Forms-B"],
  [0xff00, 0xffef, "Halfwidth and Fullwidth Forms"],
  [0xfff0, 0xffff, "Specials"],
  [0x1d000, 0x1d0ff, "Byzantine Musical Symbols"],
  [0x1d100, 0x1d1ff, "Musical Symbols"],
  [0x1d400, 0x1d7ff, "Mathematical Alphanumeric Symbols"],
  [0x1f000, 0x1f02f, "Mahjong Tiles"],
  [0x1f0a0, 0x1f0ff, "Playing Cards"],
  [0x1f100, 0x1f1ff, "Enclosed Alphanumeric Supplement"],
  [0x1f200, 0x1f2ff, "Enclosed Ideographic Supplement"],
  [0x1f300, 0x1f5ff, "Miscellaneous Symbols and Pictographs"],
  [0x1f600, 0x1f64f, "Emoticons"],
  [0x1f680, 0x1f6ff, "Transport and Map Symbols"],
  [0x1f900, 0x1f9ff, "Supplemental Symbols and Pictographs"],
  [0x1fa00, 0x1faff, "Symbols and Pictographs Extended-A"],
  [0x20000, 0x2a6df, "CJK Unified Ideographs Extension B"],
  [0xe0000, 0xe007f, "Tags"],
];

/** Best-effort Unicode block name for a code point (a guess, not a UCD lookup). */
export function unicodeBlock(cp: number): string {
  for (const [start, end, name] of BLOCKS) {
    if (cp >= start && cp <= end) return name;
  }
  return "Unassigned or rare plane";
}

/* ── charInfo ────────────────────────────────────────────────────────── */

export type CharInfo = {
  /** The single code point as a string. */
  char: string;
  /** "U+0041" style designation. */
  codepoint: string;
  /** Decimal code point value (UTF-32 / HTML decimal entity value). */
  decimal: number;
  /** Uppercase hex digits of the code point ("41"). */
  hex: string;
  /** Named entity when WHATWG defines one ("&amp;"), decimal entity otherwise ("&#65;"). */
  html: string;
  /** Always the decimal numeric entity ("&#65;"). */
  htmlNumeric: string;
  /** UTF-8 encoding of the character, as byte values. */
  utf8: number[];
  /** Best-effort Unicode block guess. */
  block: string;
  /** True when the code point lives above the BMP (encoded as a surrogate pair). */
  emoji: boolean;
};

/**
 * Info about the FIRST code point of `input`.
 * Empty input → null. Astral characters (emoji, 𝄞, 🗸…) are handled as one
 * code point via codePointAt — never as broken surrogate halves.
 */
export function charInfo(input: string): CharInfo | null {
  const cp = input.codePointAt(0);
  if (cp === undefined) return null;
  const char = String.fromCodePoint(cp);
  const hex = cp.toString(16).toUpperCase();
  const named = CHAR_TO_ENTITY.get(char) ?? null;
  let utf8: number[];
  if (cp < 0x80) {
    utf8 = [cp];
  } else if (cp < 0x800) {
    utf8 = [0xc0 | (cp >> 6), 0x80 | (cp & 0x3f)];
  } else if (cp < 0x10000) {
    utf8 = [0xe0 | (cp >> 12), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f)];
  } else {
    utf8 = [0xf0 | (cp >> 18), 0x80 | ((cp >> 12) & 0x3f), 0x80 | ((cp >> 6) & 0x3f), 0x80 | (cp & 0x3f)];
  }
  return {
    char,
    codepoint: `U+${hex.padStart(4, "0")}`,
    decimal: cp,
    hex,
    html: named ?? `&#${cp};`,
    htmlNumeric: `&#${cp};`,
    utf8,
    block: unicodeBlock(cp),
    emoji: cp > 0xffff,
  };
}

/* ── isEmoji ─────────────────────────────────────────────────────────── */

/**
 * Surrogate-pair detection: true when the first code point is above the BMP.
 * Every astral code point (emoji, musical symbols, rare scripts) is encoded
 * as a UTF-16 surrogate pair, so "length 2 but one glyph" ⇔ true.
 */
export function isEmoji(ch: string): boolean {
  const cp = ch.codePointAt(0);
  return cp !== undefined && cp > 0xffff;
}

/* ── decorate ────────────────────────────────────────────────────────── */

export const DECORATE_STYLES = ["box", "sparkles", "arrows", "stars", "gothic"] as const;
export type DecorateStyle = (typeof DECORATE_STYLES)[number];

const GOTHIC_UPPER = 0x1d56c; // MATHEMATICAL BOLD FRAKTUR CAPITAL A
const GOTHIC_LOWER = 0x1d586; // MATHEMATICAL BOLD FRAKTUR SMALL A
const gothicLine = "★·.·´¯`·.·★";

/**
 * Wrap text in decorative frames / flourishes. Pure — no locale, no randomness:
 * the same (text, style) always yields the same output.
 *
 * - box:      double-line box-drawing frame (multi-line output)
 * - sparkles: ✧･ﾟ sparkle flourish on both sides
 * - arrows:   dashed arrows pointing in from both sides
 * - stars:    star divider line above and below (multi-line output)
 * - gothic:   letters mapped to Mathematical Bold Fraktur (𝕬𝖇𝖈…), others pass through
 *
 * Throws a descriptive Error for an unknown style (styles are a closed union).
 */
export function decorate(text: string, style: DecorateStyle): string {
  switch (style) {
    case "box": {
      const w = [...text].length;
      const bar = "═".repeat(w + 2);
      return `╔${bar}╗\n║ ${text} ║\n╚${bar}╝`;
    }
    case "sparkles":
      return `✧･ﾟ: *✧･ﾟ:* ${text} *:･ﾟ✧*:･ﾟ✧`;
    case "arrows":
      return `⇢⇢⇢ ${text} ⇠⇠⇠`;
    case "stars":
      return `${gothicLine} ${text} ${gothicLine}`;
    case "gothic": {
      let out = "";
      for (const ch of text) {
        const cp = ch.codePointAt(0)!;
        if (cp >= 65 && cp <= 90) out += String.fromCodePoint(GOTHIC_UPPER + (cp - 65));
        else if (cp >= 97 && cp <= 122) out += String.fromCodePoint(GOTHIC_LOWER + (cp - 97));
        else out += ch;
      }
      return out;
    }
    default:
      throw new Error(`unknown decorate style: ${String(style)} — expected one of ${DECORATE_STYLES.join(", ")}`);
  }
}
