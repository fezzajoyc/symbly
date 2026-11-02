"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { Icon } from "@/components/icons";
import {
  SYMBOLS,
  SYMBOL_CATEGORY_IDS,
  SYMBOL_CATEGORY_META,
  searchSymbols,
  symbolByChar,
  type SymbolCategory,
  type SymbolEntry,
} from "../_lib/symbols-data";
import { charInfo, isEmoji } from "../_lib/unicode";

const FAV_KEY = "symbly.favorites";
const MAX_FAVS = 96;

function codepointOf(ch: string): string {
  return `U+${ch.codePointAt(0)!.toString(16).toUpperCase().padStart(4, "0")}`;
}

function loadFavorites(): string[] {
  try {
    const raw = window.localStorage.getItem(FAV_KEY);
    if (!raw) return [];
    const list = JSON.parse(raw) as unknown;
    return Array.isArray(list) ? list.filter((x): x is string => typeof x === "string").slice(0, MAX_FAVS) : [];
  } catch {
    return [];
  }
}

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand("copy");
    ta.remove();
  }
}

export function SymbolLibraryEngine() {
  const { t } = useI18n();
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<SymbolCategory | "all">("all");
  const [favs, setFavs] = useState<string[]>([]);
  const [info, setInfo] = useState<SymbolEntry | null>(null);
  const [toast, setToast] = useState<string | null>(null);
  const toastTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => setFavs(loadFavorites()), []);

  const rows = useMemo<SymbolEntry[]>(() => SYMBOLS, []);

  const filtered = useMemo(() => {
    const q = query.trim();
    const base = q || cat !== "all" ? searchSymbols(q, cat === "all" ? undefined : cat) : rows;
    // direct char query first, then dataset order
    if (q) {
      const exact = base.find((r) => r.char === q);
      if (exact) return [exact, ...base.filter((r) => r !== exact)];
    }
    return base;
  }, [query, cat, rows]);

  const favRows = useMemo(() => favs.map((c) => symbolByChar(c)).filter((r): r is SymbolEntry => Boolean(r)), [favs]);

  const isFav = useCallback((ch: string) => favs.includes(ch), [favs]);

  const toggleFav = useCallback(
    (ch: string) => {
      setFavs((prev) => {
        const next = prev.includes(ch) ? prev.filter((c) => c !== ch) : [...prev, ch].slice(-MAX_FAVS);
        try {
          window.localStorage.setItem(FAV_KEY, JSON.stringify(next));
        } catch {
          /* private mode: session-only favorites */
        }
        return next;
      });
    },
    [],
  );

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(null), 1600);
  }, []);

  const handleCopy = useCallback(
    (row: SymbolEntry) => {
      void copyText(row.char);
      setInfo(row);
      showToast(`${t.common.copied} ${row.char}`);
    },
    [t, showToast],
  );

  const showGrouped = !query.trim() && cat === "all";
  const infoChar = info ? charInfo(info.char) : null;
  const counts = useMemo(() => {
    const m = new Map<SymbolCategory, number>();
    for (const r of rows) m.set(r.category, (m.get(r.category) ?? 0) + 1);
    return m;
  }, [rows]);

  const grid = (list: SymbolEntry[]) => (
    <div className="grid grid-cols-[repeat(auto-fill,minmax(56px,1fr))] gap-1.5 sm:min-w-0">
      {list.map((r) => (
        <div key={r.char} className="relative">
          <button
            type="button"
            onClick={() => handleCopy(r)}
            title={`${r.name} · ${codepointOf(r.char)}`}
            aria-label={`Copy ${r.name} (${codepointOf(r.char)})`}
            className={`flex aspect-square w-full items-center justify-center rounded-none border text-xl transition-colors ${
              info?.char === r.char
                ? "border-[var(--color-accent)] bg-[rgba(217,119,6,0.08)]"
                : "hairline bg-[var(--color-card)] hover:border-[var(--color-accent)] hover:bg-[var(--color-surface)]"
            }`}
          >
            {r.char}
          </button>
          <button
            type="button"
            onClick={() => toggleFav(r.char)}
            aria-label={isFav(r.char) ? `Remove ${r.name} from favorites` : `Add ${r.name} to favorites`}
            aria-pressed={isFav(r.char)}
            className="absolute right-0.5 top-0.5 text-[11px] leading-none opacity-40 transition-opacity hover:opacity-100 aria-pressed:opacity-100"
            style={isFav(r.char) ? { color: "var(--color-accent)", opacity: 1 } : undefined}
          >
            {isFav(r.char) ? "★" : "☆"}
          </button>
        </div>
      ))}
    </div>
  );

  return (
    <ToolPanel>
      <div className="flex flex-col gap-3">
        <div className="relative">
          <Icon name="search" size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-sub)]" />
          <input
            className="field mono pl-9"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search name, keyword or paste a symbol… (→, star, euro, alpha)"
            aria-label="Search symbols"
          />
        </div>
        <div className="no-scrollbar -mx-1 flex gap-1.5 overflow-x-auto px-1 pb-1" role="tablist" aria-label="Symbol categories">
          <button
            type="button"
            onClick={() => setCat("all")}
            aria-pressed={cat === "all"}
            className={`flex-none rounded-none border px-3 py-1.5 text-[13px] font-medium transition-colors ${
              cat === "all" ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white" : "hairline hover:bg-[var(--color-surface)]"
            }`}
          >
            All {rows.length}
          </button>
          {SYMBOL_CATEGORY_IDS.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setCat(c)}
              aria-pressed={cat === c}
              className={`flex-none rounded-none border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                cat === c ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white" : "hairline hover:bg-[var(--color-surface)]"
              }`}
            >
              {SYMBOL_CATEGORY_META[c].name} <span className="opacity-60">{counts.get(c) ?? 0}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Info panel: keyboard-visible codepoint, entity and name for the last clicked symbol */}
      {info && infoChar && (
        <div className="mt-4 rounded-none border hairline bg-[var(--color-surface)] p-4">
          <div className="flex flex-wrap items-start gap-4">
            <span className="mono flex h-16 w-16 flex-none items-center justify-center rounded-none border hairline bg-[var(--color-card)] text-3xl" aria-hidden="true">
              {info.char}
            </span>
            <dl className="mono grid flex-1 grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-[13px] leading-5 sm:grid-cols-[auto_1fr_auto_1fr]">
              <dt className="text-[var(--color-sub)]">Name</dt>
              <dd className="col-span-1">{info.name}</dd>
              <dt className="text-[var(--color-sub)]">Codepoint</dt>
              <dd>{infoChar.codepoint}</dd>
              <dt className="text-[var(--color-sub)]">Decimal</dt>
              <dd>{infoChar.decimal}</dd>
              <dt className="text-[var(--color-sub)]">HTML</dt>
              <dd>{infoChar.html}</dd>
              <dt className="text-[var(--color-sub)]">UTF-8</dt>
              <dd>{infoChar.utf8.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ")}</dd>
              <dt className="text-[var(--color-sub)]">Block</dt>
              <dd>{infoChar.block}{isEmoji(info.char) ? " · astral (surrogate pair)" : ""}</dd>
              <dt className="text-[var(--color-sub)]">Keywords</dt>
              <dd className="text-[var(--color-sub)]">{info.keywords.join(", ")}</dd>
            </dl>
          </div>
        </div>
      )}

      {/* Favorites */}
      {favRows.length > 0 && (
        <section className="mt-5">
          <h3 className="mb-2 flex items-center gap-2 text-[14px] font-semibold">
            <span style={{ color: "var(--color-accent)" }}>★</span> Favorites
            <span className="text-[12px] font-normal text-[var(--color-sub)]">saved in your browser ({favRows.length}/{MAX_FAVS})</span>
          </h3>
          {grid(favRows)}
        </section>
      )}

      {/* Browsing: grouped sections; searching/filtering: flat grid */}
      {showGrouped ? (
        SYMBOL_CATEGORY_IDS.map((c) => {
          const list = rows.filter((r) => r.category === c);
          if (!list.length) return null;
          return (
            <section key={c} className="mt-6">
              <h3 className="text-[14px] font-semibold">
                {SYMBOL_CATEGORY_META[c].name} <span className="font-normal text-[var(--color-sub)]">· {list.length}</span>
              </h3>
              <p className="mb-2 text-[13px] leading-5 text-[var(--color-sub)]">{SYMBOL_CATEGORY_META[c].blurb}</p>
              {grid(list)}
            </section>
          );
        })
      ) : filtered.length > 0 ? (
        <section className="mt-5">
          <h3 className="mb-2 text-[14px] font-semibold">
            {query.trim() ? `Results for “${query.trim()}”` : SYMBOL_CATEGORY_META[cat as SymbolCategory].name}
            <span className="ml-2 font-normal text-[var(--color-sub)]">{filtered.length}</span>
          </h3>
          {grid(filtered)}
        </section>
      ) : (
        <p className="error-bg mt-5 rounded-none border border-[var(--color-bad)]/30 p-4 text-[14px] text-[var(--color-ink)]">
          No symbols match “{query.trim()}”. Try a name (“arrow”, “star”), a keyword (“euro”, “tick”) or paste the symbol itself.
        </p>
      )}

      {favRows.length === 0 && showGrouped && (
        <p className="mt-4 text-[13px] text-[var(--color-sub)]">
          Click any tile to copy it. The ☆ on a tile saves it to favorites — stored locally in your browser, nothing uploaded.
        </p>
      )}

      <div aria-live="polite" className="sr-only">{toast}</div>
      {toast && (
        <div className="pointer-events-none fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-none border hairline bg-[var(--color-ink)] px-4 py-2 text-[13.5px] font-medium text-[var(--color-bg)] shadow-lg">
          {toast}
        </div>
      )}
    </ToolPanel>
  );
}
