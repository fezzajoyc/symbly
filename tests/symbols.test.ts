import { describe, expect, it } from "vitest";
import {
  SYMBOLS,
  SYMBOL_CATEGORY_IDS,
  SYMBOL_CATEGORY_META,
  searchSymbols,
  symbolByChar,
  countByCategory,
} from "@/tools/_lib/symbols-data";
import {
  charInfo,
  decorate,
  DECORATE_STYLES,
  decodeEntity,
  isEmoji,
  namedEntityFor,
  unicodeBlock,
} from "@/tools/_lib/unicode";

/* ------------------------------------------------------------------ */
/* symbols-data.ts — dataset integrity                                 */
/* ------------------------------------------------------------------ */

describe("symbol dataset integrity", () => {
  it("holds at least 350 curated symbols across all 13 categories", () => {
    expect(SYMBOLS.length).toBeGreaterThanOrEqual(350);
    expect(SYMBOL_CATEGORY_IDS.length).toBe(13);
    const counts = countByCategory();
    for (const cat of SYMBOL_CATEGORY_IDS) {
      expect(counts[cat], `${cat} is empty`).toBeGreaterThan(0);
    }
  });

  it("every character is unique — no duplicate tiles", () => {
    const chars = SYMBOLS.map((s) => s.char);
    expect(new Set(chars).size).toBe(chars.length);
    // and every entry is exactly one code point
    for (const s of SYMBOLS) {
      expect([...s.char].length, `${s.name} is not a single code point`).toBe(1);
    }
  });

  it("every entry has a name, a category from the fixed set and non-empty keywords", () => {
    for (const s of SYMBOLS) {
      expect(s.name.trim().length, `${JSON.stringify(s.char)} has no name`).toBeGreaterThan(0);
      expect(SYMBOL_CATEGORY_IDS as readonly string[]).toContain(s.category);
      expect(s.keywords.length, `${s.name} has no keywords`).toBeGreaterThan(0);
      for (const k of s.keywords) {
        expect(k.trim().length, `${s.name} has a blank keyword`).toBeGreaterThan(0);
        expect(k, `${s.name} keyword ${k} is uppercase`).toBe(k.toLowerCase());
      }
    }
  });

  it("every category has metadata (name + blurb) and no phantom categories exist", () => {
    expect(Object.keys(SYMBOL_CATEGORY_META).sort()).toEqual([...SYMBOL_CATEGORY_IDS].sort());
    for (const cat of SYMBOL_CATEGORY_IDS) {
      expect(SYMBOL_CATEGORY_META[cat].name.trim()).toBeTruthy();
      expect(SYMBOL_CATEGORY_META[cat].blurb.trim().length).toBeGreaterThan(10);
    }
  });

  it("every HTML entity is well-formed and decodes back to its character", () => {
    for (const s of SYMBOLS) {
      if (!s.entity) continue;
      // format: &name; with an alphanumeric name
      expect(s.entity, `${s.name} malformed entity`).toMatch(/^&[A-Za-z][A-Za-z0-9]*;$/);
      // decode via the entity table (named part) — this is what "parsing" means here
      const decoded = decodeEntity(s.entity);
      expect(decoded, `${s.entity} does not decode`).not.toBeNull();
      expect(decoded, `${s.entity} decodes to the wrong character`).toBe(s.char);
      // and the reverse lookup agrees
      expect(namedEntityFor(s.char)).toBe(s.entity);
    }
  });

  it("the entity table itself spot-checks against independent WHATWG knowledge", () => {
    // Independent anchor values (not derived from the dataset) so a corrupted
    // table cannot validate itself.
    expect(decodeEntity("&amp;")).toBe("&");
    expect(decodeEntity("&lt;")).toBe("<");
    expect(decodeEntity("&copy;")).toBe("©");
    expect(decodeEntity("&mdash;")).toBe("—");
    expect(decodeEntity("&hellip;")).toBe("…");
    expect(decodeEntity("&euro;")).toBe("€");
    expect(decodeEntity("&spades;")).toBe("♠");
    expect(decodeEntity("&frac12;")).toBe("½");
    expect(decodeEntity("&alpha;")).toBe("α");
    expect(decodeEntity("&infin;")).toBe("∞");
    expect(decodeEntity("&#65;")).toBe("A");
    expect(decodeEntity("&#x41;")).toBeNull(); // only decimal numeric form supported
    expect(decodeEntity("&no-such-entity;")).toBeNull();
    // &checkmark; belongs to ✓ (U+2713) — never to the heavy check ✔ (U+2714)
    expect(decodeEntity("&checkmark;")).toBe("✓");
    expect(namedEntityFor("✔")).toBeNull();
  });

  it("look-alike characters are not conflated with their Greek counterparts", () => {
    // ∆ (U+2206 INCREMENT) ≠ Δ (U+0394 GREEK CAPITAL DELTA); the first has no entity
    const increment = symbolByChar("∆")!;
    const delta = symbolByChar("Δ")!;
    expect(increment.char.codePointAt(0)).toBe(0x2206);
    expect(delta.char.codePointAt(0)).toBe(0x0394);
    expect(increment.entity).toBeUndefined();
    expect(delta.entity).toBe("&Delta;");
    // ⇥ appears exactly once in the dataset (arrows), not also in technical
    expect(SYMBOLS.filter((s) => s.char === "⇥").length).toBe(1);
  });
});

describe("searchSymbols", () => {
  it("matches by name, keyword and pasted character, and ranks the exact char first", () => {
    expect(searchSymbols("euro", "currency").map((s) => s.char)).toContain("€");
    expect(searchSymbols("tick").map((s) => s.char)).toContain("✓");
    const starSearch = searchSymbols("★");
    expect(starSearch[0].char).toBe("★");
  });

  it("empty query returns the whole dataset in dataset order; category filters it", () => {
    expect(searchSymbols("").length).toBe(SYMBOLS.length);
    const arrows = searchSymbols("", "arrows");
    expect(arrows.length).toBe(countByCategory().arrows);
    expect(arrows.every((s) => s.category === "arrows")).toBe(true);
  });

  it("no match for garbage — and it never throws", () => {
    expect(searchSymbols("🫠🫠🫠")).toEqual([]);
    expect(searchSymbols("  ")).toEqual(SYMBOLS);
    expect(() => searchSymbols("")).not.toThrow();
  });
});

/* ------------------------------------------------------------------ */
/* unicode.ts — charInfo                                               */
/* ------------------------------------------------------------------ */

describe("charInfo", () => {
  it("describes a basic Latin character completely", () => {
    const info = charInfo("A")!;
    expect(info.char).toBe("A");
    expect(info.codepoint).toBe("U+0041");
    expect(info.decimal).toBe(65);
    expect(info.hex).toBe("41");
    expect(info.html).toBe("&#65;"); // no named entity for A
    expect(info.htmlNumeric).toBe("&#65;");
    expect(info.utf8).toEqual([0x41]);
    expect(info.block).toBe("Basic Latin");
    expect(info.emoji).toBe(false);
  });

  it("describes CJK with a three-byte UTF-8 encoding", () => {
    const info = charInfo("中")!;
    expect(info.codepoint).toBe("U+4E2D");
    expect(info.decimal).toBe(20013);
    expect(info.hex).toBe("4E2D");
    expect(info.html).toBe("&#20013;");
    expect(info.utf8).toEqual([0xe4, 0xb8, 0xad]);
    expect(info.block).toBe("CJK Unified Ideographs");
  });

  it("handles emoji as a single code point (surrogate pair), with a named entity for known chars", () => {
    const thumbs = charInfo("👍")!;
    expect(thumbs.codepoint).toBe("U+1F44D");
    expect(thumbs.decimal).toBe(128077);
    expect(thumbs.utf8).toEqual([0xf0, 0x9f, 0x91, 0x8d]);
    expect(thumbs.emoji).toBe(true);
    expect(thumbs.block).toBe("Miscellaneous Symbols and Pictographs");
    // two-char input → only the FIRST code point is described
    expect(charInfo("👍a")!.char).toBe("👍");
  });

  it("prefers named entities when WHATWG defines one", () => {
    expect(charInfo("€")!.html).toBe("&euro;");
    expect(charInfo("—")!.html).toBe("&mdash;");
    expect(charInfo("©")!.html).toBe("&copy;");
    expect(charInfo("✓")!.html).toBe("&check;");
  });

  it("returns null for empty input and never throws on weird input", () => {
    expect(charInfo("")).toBeNull();
    expect(charInfo("𝄞")).not.toBeNull(); // astral musical symbol
    expect(charInfo("𝄞")!.codepoint).toBe("U+1D11E");
    expect(() => charInfo("　")).not.toThrow(); // ideographic space
    expect(charInfo("　")!.codepoint).toBe("U+3000");
  });
});

describe("unicodeBlock", () => {
  it("places known code points in their blocks", () => {
    expect(unicodeBlock(0x41)).toBe("Basic Latin");
    expect(unicodeBlock(0x20ac)).toBe("Currency Symbols");
    expect(unicodeBlock(0x2192)).toBe("Arrows");
    expect(unicodeBlock(0x4e2d)).toBe("CJK Unified Ideographs");
    expect(unicodeBlock(0x1f44d)).toBe("Miscellaneous Symbols and Pictographs");
    expect(unicodeBlock(0xac00)).toBe("Hangul Syllables");
  });

  it("gives an honest fallback instead of a wrong block", () => {
    expect(unicodeBlock(0x10fffd)).not.toMatch(/Basic Latin/);
    expect(typeof unicodeBlock(0x0e0001)).toBe("string");
  });
});

/* ------------------------------------------------------------------ */
/* unicode.ts — isEmoji (surrogate pair detection)                     */
/* ------------------------------------------------------------------ */

describe("isEmoji", () => {
  it("is true exactly for astral code points (surrogate pairs)", () => {
    expect(isEmoji("👍")).toBe(true);
    expect(isEmoji("🫠")).toBe(true);
    expect(isEmoji("𝄞")).toBe(true); // astral but not pictographic — that is the documented heuristic
    expect(isEmoji("🗸")).toBe(true);
  });

  it("is false for BMP characters, including emoji-like symbols", () => {
    expect(isEmoji("a")).toBe(false);
    expect(isEmoji("中")).toBe(false);
    expect(isEmoji("★")).toBe(false);
    expect(isEmoji("✓")).toBe(false);
    expect(isEmoji("—")).toBe(false);
  });

  it("is false for empty input and examines only the first code point", () => {
    expect(isEmoji("")).toBe(false);
    expect(isEmoji("👍a")).toBe(true);
    expect(isEmoji("a👍")).toBe(false);
  });
});

/* ------------------------------------------------------------------ */
/* unicode.ts — decorate                                               */
/* ------------------------------------------------------------------ */

describe("decorate", () => {
  it("offers exactly five styles and renders each differently", () => {
    expect([...DECORATE_STYLES]).toEqual(["box", "sparkles", "arrows", "stars", "gothic"]);
    const outputs = DECORATE_STYLES.map((s) => decorate("Hello", s));
    expect(new Set(outputs).size).toBe(5);
    // the four flourish styles keep the original text; gothic remaps it to fraktur
    for (const style of ["box", "sparkles", "arrows", "stars"] as const) {
      expect(decorate("Hello", style)).toContain("Hello");
    }
    expect(decorate("Hello", "gothic")).toBe("𝕳𝖊𝖑𝖑𝖔");
  });

  it("box draws a double-line frame of the text's code point width", () => {
    const out = decorate("Hi", "box");
    expect(out.split("\n")).toEqual(["╔════╗", "║ Hi ║", "╚════╝"]);
    // empty text still yields a valid closed frame
    expect(decorate("", "box").split("\n")).toEqual(["╔══╗", "║  ║", "╚══╝"]);
  });

  it("gothic maps ASCII letters to bold fraktur and passes everything else through", () => {
    expect(decorate("Hello", "gothic")).toBe("𝕳𝖊𝖑𝖑𝖔");
    expect(decorate("abcXYZ", "gothic")).toBe("𝖆𝖇𝖈𝖃𝖄𝖅");
    // CJK passthrough (the documented edge)
    expect(decorate("中文abc", "gothic")).toBe("中文𝖆𝖇𝖈");
    // digits, punctuation and astral characters are untouched
    expect(decorate("2026! 🚀", "gothic")).toBe("2026! 🚀");
  });

  it("adds flourishes around — not into — the text for sparkle styles", () => {
    const sparkles = decorate("Hi", "sparkles");
    expect(sparkles.startsWith("✧")).toBe(true);
    expect(sparkles.endsWith("✧")).toBe(true);
    expect(sparkles).toContain(" Hi ");
    const arrows = decorate("Hi", "arrows");
    expect(arrows.startsWith("⇢⇢⇢ ")).toBe(true);
    expect(arrows.endsWith(" ⇠⇠⇠")).toBe(true);
    const stars = decorate("Hi", "stars");
    expect(stars.startsWith("★·.·´¯`·.·★ Hi ★·.·´¯`·.·★")).toBe(true);
  });

  it("is deterministic and pure: same input, same output, no input mutation", () => {
    expect(decorate("Hi", "sparkles")).toBe(decorate("Hi", "sparkles"));
    expect(decorate("Hi", "gothic")).toBe(decorate("Hi", "gothic"));
    const input = "Hi";
    decorate(input, "gothic");
    expect(input).toBe("Hi");
  });

  it("handles empty strings and CJK-only input for every style without throwing", () => {
    for (const style of DECORATE_STYLES) {
      expect(() => decorate("", style)).not.toThrow();
      expect(decorate("", style)).not.toContain("undefined");
      expect(() => decorate("中文", style)).not.toThrow();
      expect(decorate("中文", style)).toContain("中文");
      // long input (≥10⁴ chars) stays proportional
      const long = decorate("a".repeat(10_000), style);
      expect(long.length).toBeGreaterThanOrEqual(10_000);
    }
  });

  it("throws a descriptive error for an unknown style (styles are a closed union)", () => {
    expect(() => decorate("Hi", "neon" as never)).toThrow(/unknown decorate style/);
    expect(() => decorate("Hi", undefined as never)).toThrow(/unknown decorate style/);
  });
});
