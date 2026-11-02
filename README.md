# Symbly

Unicode symbol reference and copy tool. 15 locales, all client-side, static Next.js 16.

## Tools

1. **symbol-library** (featured) — 399 curated symbols in 13 categories (arrows, math, currency, punctuation, technical, music, cards, check, stars, weather, law, greek, fractions). Search by name/keyword/character, one-click copy, favorites in localStorage, per-symbol info panel (codepoint, entity, UTF-8 bytes, block).
2. **unicode-lookup** — paste any character/string → codepoint, decimal, HTML entity (named if it exists, numeric otherwise), UTF-8 bytes, Unicode block guess. Emoji handled as single code points.
3. **text-decorator** — wrap text in 5 decorative styles (box frame, sparkles, arrows, stars, gothic fraktur).

## Layout

- `tools/_lib/symbols-data.ts` — the dataset (integrity enforced by tests)
- `tools/_lib/unicode.ts` — `charInfo`, `decorate`, `isEmoji`, entity tables (pure)
- `tools/_engines/` — client engines; `tools/symbols/` — tool definitions with 5-locale inline copy
- `mcp/` — MCP server (`symbol_search`, `char_info`, `decorate_text`); build with `npm run build:mcp`
- `tests/` — vitest: dataset integrity, unicode fns, registry/SEO/overlay contracts, MCP via InMemoryTransport

## Verify loop

```bash
npx tsc --noEmit && npm test && npm run build
BASE=<url> npm run audit:seo   # launch gate
```
