"use client";

import { useMemo, useState } from "react";
import { useI18n } from "@/components/i18n-provider";
import { ToolPanel } from "@/components/ui";
import { CopyButton } from "@/components/client-ui";
import { DECORATE_STYLES, decorate, type DecorateStyle } from "../_lib/unicode";

const STYLE_HINTS: Record<DecorateStyle, string> = {
  box: "double-line frame",
  sparkles: "✧･ﾟ sparkle flourish",
  arrows: "⇢ dashed arrows",
  stars: "star dividers",
  gothic: "𝖌𝖔𝖙𝖍𝖎𝖈 fraktur letters",
};

const STYLE_LABELS: Record<DecorateStyle, string> = {
  box: "║ Frame",
  sparkles: "✧ Sparkles",
  arrows: "⇢ Arrows",
  stars: "★ Stars",
  gothic: "𝕬 Gothic",
};

const SAMPLES: Record<DecorateStyle, string> = {
  box: "SALE 50% OFF",
  sparkles: "good vibes only",
  arrows: "follow the signs",
  stars: "chapter one",
  gothic: "Once upon a time",
};

export function TextDecoratorEngine() {
  const { t } = useI18n();
  const [text, setText] = useState("");
  const [style, setStyle] = useState<DecorateStyle>("sparkles");

  const output = useMemo(() => (text.length > 0 ? decorate(text, style) : ""), [text, style]);

  return (
    <ToolPanel>
      <label className="block text-[13px] font-medium text-[var(--color-sub)]" htmlFor="decorator-input">
        {t.common.input}
      </label>
      <textarea
        id="decorator-input"
        className="field mono mt-1.5"
        rows={3}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type the text to decorate…"
      />

      <div className="mt-4">
        <p className="mb-1.5 text-[13px] font-medium text-[var(--color-sub)]">{t.common.settings}</p>
        <div className="flex flex-wrap gap-1.5" role="group" aria-label="Decoration style">
          {DECORATE_STYLES.map((s) => (
            <button
              key={s}
              type="button"
              onClick={() => setStyle(s)}
              aria-pressed={style === s}
              title={STYLE_HINTS[s]}
              className={`rounded-none border px-3 py-1.5 text-[13px] font-medium transition-colors ${
                style === s
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-white"
                  : "hairline hover:bg-[var(--color-surface)]"
              }`}
            >
              {STYLE_LABELS[s]}
            </button>
          ))}
        </div>
        <p className="mt-1.5 text-[12.5px] text-[var(--color-sub)]">{STYLE_HINTS[style]} — pick a chip to preview each style live.</p>
      </div>

      <div className="mt-4">
        <p className="mb-1.5 text-[13px] font-medium text-[var(--color-sub)]">{t.common.output}</p>
        {text.length === 0 ? (
          <div className="rounded-none border border-dashed hairline bg-[var(--color-surface)] p-4">
            <p className="mono whitespace-pre text-[15px] text-[var(--color-sub)]">{decorate(SAMPLES[style], style)}</p>
            <p className="mt-2 text-[12.5px] text-[var(--color-sub)]">Preview with sample text — type above to decorate your own.</p>
          </div>
        ) : (
          <div className="rounded-none border hairline bg-[var(--color-surface)] p-4">
            <p className="mono whitespace-pre-wrap break-words text-[15px] leading-6">{output}</p>
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-3">
        {output.length > 0 ? (
          <CopyButton value={output} />
        ) : (
          <span className="text-[13px] text-[var(--color-sub)]">Type some text above to get a copyable result.</span>
        )}
        <span className="mono text-[12.5px] text-[var(--color-sub)]">
          {[...output].length} characters{output.length !== [...output].length ? ` (${output.length} UTF-16 units)` : ""}
        </span>
      </div>
    </ToolPanel>
  );
}
