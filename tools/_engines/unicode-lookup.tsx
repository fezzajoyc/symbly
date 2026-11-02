"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { Icon } from "@/components/icons";
import { charInfo, isEmoji } from "../_lib/unicode";
import { symbolByChar } from "../_lib/symbols-data";

/** Keep the DOM honest: a 50k-char paste is truncated with a visible note. */
const MAX_ROWS = 128;

export function UnicodeLookupEngine() {
  const { t } = useI18n();
  const [input, setInput] = useState("");

  const codePoints = useMemo(() => [...input], [input]);
  const shown = codePoints.slice(0, MAX_ROWS);
  const infos = useMemo(() => shown.map((ch) => ({ ch, info: charInfo(ch), curated: symbolByChar(ch) })), [shown]);

  return (
    <ToolPanel>
      <div className="relative">
        <textarea
          className="field mono min-h-[4.5rem]"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste any character — a symbol, an emoji, 中文, العربية…"
          aria-label="Character or text to inspect"
        />
      </div>

      {codePoints.length === 0 ? (
        <p className="mt-4 text-[14px] text-[var(--color-sub)]">
          Every character you paste shows its codepoint, decimal value, HTML entity, UTF-8 bytes and Unicode block — one row per
          character. Emoji count as a single character even though they are stored as surrogate pairs.
        </p>
      ) : (
        <>
          <p className="mono mt-3 text-[13px] text-[var(--color-sub)]">
            {codePoints.length} character{codePoints.length === 1 ? "" : "s"} · {infos.filter((r) => r.info?.emoji).length} astral
            (surrogate pair{infos.filter((r) => r.info?.emoji).length === 1 ? "" : "s"})
          </p>
          <div className="mt-3 overflow-x-auto">
            <table className="w-full border-collapse text-left text-[13px]">
              <thead>
                <tr className="border-b hairline text-[12px] uppercase tracking-wide text-[var(--color-sub)]">
                  <th scope="col" className="py-2 pr-3 font-medium">Char</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Codepoint</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Decimal</th>
                  <th scope="col" className="py-2 pr-3 font-medium">HTML entity</th>
                  <th scope="col" className="py-2 pr-3 font-medium">UTF-8 bytes</th>
                  <th scope="col" className="py-2 pr-3 font-medium">Unicode block</th>
                  <th scope="col" className="py-2 font-medium">Name</th>
                </tr>
              </thead>
              <tbody>
                {infos.map(({ ch, info, curated }, i) => (
                  <tr key={`${i}-${ch.codePointAt(0)}`} className="border-b hairline align-top">
                    <td className="mono py-2 pr-3 text-xl leading-6">{ch}</td>
                    <td className="mono py-2 pr-3">{info?.codepoint}</td>
                    <td className="mono py-2 pr-3 tabular-nums">{info?.decimal}</td>
                    <td className="mono py-2 pr-3">{info?.html}</td>
                    <td className="mono py-2 pr-3">{info?.utf8.map((b) => b.toString(16).toUpperCase().padStart(2, "0")).join(" ")}</td>
                    <td className="py-2 pr-3 text-[var(--color-sub)]">
                      {info?.block}
                      {info && isEmoji(ch) ? <span className="mono ml-1.5 text-[11px]">(surrogate pair)</span> : null}
                    </td>
                    <td className="py-2 text-[var(--color-sub)]">{curated ? curated.name : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {codePoints.length > MAX_ROWS && (
            <p className="error-bg mt-3 rounded-none border border-[var(--color-bad)]/30 p-3 text-[13px]">
              Showing the first {MAX_ROWS} of {codePoints.length} characters. Paste fewer characters to see the rest.
            </p>
          )}
          <p className="mt-3 flex items-center gap-1.5 text-[12.5px] text-[var(--color-sub)]">
            <Icon name="lock" size={13} className="text-[var(--color-good)]" />
            {t.tool.privacyNote}
          </p>
        </>
      )}
    </ToolPanel>
  );
}
