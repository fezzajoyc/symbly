import { z } from "zod";
import { searchSymbols, symbolByChar, SYMBOL_CATEGORY_IDS } from "../tools/_lib/symbols-data";
import { charInfo, decorate, DECORATE_STYLES } from "../tools/_lib/unicode";

/**
 * Symbly MCP tools: the same pure functions the website engines use, exposed to
 * AI clients. symbol_search and char_info run over the tested dataset;
 * decorate_text calls the tested decorate() implementation.
 */

const text = (t: string) => ({ content: [{ type: "text" as const, text: t }] });

export type McpToolDef = {
  name: string;
  title: string;
  description: string;
  schema: Record<string, any>;
  run: (args: any) => { content: { type: "text"; text: string }[]; isError?: boolean };
};

export const MCP_TOOLS: McpToolDef[] = [
  {
    name: "symbol_search",
    title: "Search symbols",
    description:
      "Search a curated library of 399 copy-paste Unicode symbols (arrows, math, currency, punctuation, music, stars, greek, fractions…) by English name, keyword or the character itself. Returns each match with its character, name, category, HTML entity (when one exists) and codepoint. Categories: " +
      SYMBOL_CATEGORY_IDS.join(", ") +
      ".",
    schema: {
      query: z.string().describe("name, keyword or the symbol itself, e.g. 'arrow', 'euro', 'check', '→'"),
      category: z.enum(SYMBOL_CATEGORY_IDS).optional().describe("restrict results to one category"),
      limit: z.number().int().min(1).max(50).default(15).describe("max results to return"),
    },
    run: (a) => {
      const limit = typeof a.limit === "number" && Number.isInteger(a.limit) && a.limit > 0 ? Math.min(a.limit, 50) : 15;
      let results = searchSymbols(String(a.query ?? ""), a.category);
      // exact character match always wins, then dataset order
      const q = String(a.query ?? "").trim();
      const exact = q ? results.find((s) => s.char === q) : undefined;
      if (exact) results = [exact, ...results.filter((s) => s !== exact)];
      results = results.slice(0, limit);
      if (results.length === 0) {
        return text(
          `no symbols match ${JSON.stringify(q)}${a.category ? ` in category ${a.category}` : ""} — try a broader English keyword like 'arrow', 'star', 'quote' or 'fraction'`,
        );
      }
      return text(
        results
          .map((s) => {
            const cp = `U+${s.char.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`;
            return `${s.char}  ${s.name}  (${s.category}, ${cp}${s.entity ? `, ${s.entity}` : ""})`;
          })
          .join("\n"),
      );
    },
  },
  {
    name: "char_info",
    title: "Character info",
    description:
      "Inspect the first character of a string: Unicode codepoint (U+XXXX), decimal value, HTML entity (named when the WHATWG table defines one, numeric otherwise), UTF-8 bytes, best-effort Unicode block guess and a curated name when the character is in the symbol library. Astral characters (emoji) are handled as single code points.",
    schema: {
      char: z.string().min(1).describe("the character (or string; only the first code point is inspected)"),
    },
    run: (a) => {
      const info = charInfo(String(a.char ?? ""));
      if (!info) return { content: [{ type: "text", text: "empty input — pass at least one character" }], isError: true };
      const curated = symbolByChar(info.char);
      const bytes = info.utf8.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ");
      return text(
        [
          `char: ${info.char}`,
          curated ? `name: ${curated.name} (${curated.category})` : `name: (not in the curated library)`,
          `codepoint: ${info.codepoint} (decimal ${info.decimal}, hex 0x${info.hex})`,
          `html entity: ${info.html}`,
          `utf-8 bytes: ${bytes}`,
          `block (guess): ${info.block}`,
          info.emoji ? "astral: yes (surrogate pair in UTF-16)" : "astral: no",
        ].join("\n"),
      );
    },
  },
  {
    name: "decorate_text",
    title: "Decorate text",
    description:
      "Wrap text in decorative Unicode flourishes. Styles: box (double-line frame), sparkles (✧･ﾟ), arrows (⇢ dashed), stars (★ dividers), gothic (letters mapped to Mathematical Bold Fraktur; non-Latin characters pass through unchanged). Pure text in, text out.",
    schema: {
      text: z.string().describe("the text to decorate"),
      style: z.enum(DECORATE_STYLES).default("sparkles").describe("decoration style"),
    },
    run: (a) => {
      try {
        return text(decorate(String(a.text ?? ""), a.style));
      } catch (e) {
        return {
          content: [{ type: "text", text: `cannot decorate: ${(e as Error).message}` }],
          isError: true,
        };
      }
    },
  },
];

/** Number of executable AI tools, for the /mcp page. */
export const MCP_TOOL_COUNT = MCP_TOOLS.length;
