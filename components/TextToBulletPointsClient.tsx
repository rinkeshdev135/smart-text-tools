"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { TextArea } from "@/components/TextArea";
import {
  convertTextToBulletPoints,
  defaultTextToBulletOptions,
  type ListStyle,
  type SplitMode,
  type TextToBulletOptions
} from "@/lib/tool-logic/textToBulletPoints";

const splitModeOptions: Array<{ value: SplitMode; label: string }> = [
  { value: "sentence", label: "By sentence" },
  { value: "line", label: "By line" },
  { value: "paragraph", label: "By paragraph" }
];

const listStyleOptions: Array<{ value: ListStyle; label: string }> = [
  { value: "bullet", label: "Bullet •" },
  { value: "numbered", label: "Numbered 1." },
  { value: "dash", label: "Dash -" },
  { value: "custom", label: "Custom" }
];

function formatCountLabel(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return `${words.toLocaleString()} words · ${characters.toLocaleString()} chars`;
}

export function TextToBulletPointsClient() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<TextToBulletOptions>(defaultTextToBulletOptions);
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [input]);

  const result = convertTextToBulletPoints(debouncedInput, options);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <TextArea
          label="Source text"
          meta={formatCountLabel(input)}
          placeholder="Paste text, notes, or paragraphs here..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />

        <div className="mt-5 grid gap-4 md:grid-cols-2">
          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-100">
              Split mode
            </span>
            <select
              className="w-full rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:focus:border-brand-500/50 dark:focus:ring-brand-500/10"
              value={options.splitMode}
              onChange={(event) =>
                setOptions((current) => ({
                  ...current,
                  splitMode: event.target.value as SplitMode
                }))
              }
            >
              {splitModeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="block">
            <span className="mb-2 block text-sm font-semibold text-slate-900 dark:text-slate-100">
              List style
            </span>
            <select
              className="w-full rounded-xl border border-slate-200/80 bg-white/90 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-brand-400 focus:ring-4 focus:ring-brand-100 dark:border-slate-700/80 dark:bg-slate-900/80 dark:text-slate-100 dark:focus:border-brand-500/50 dark:focus:ring-brand-500/10"
              value={options.listStyle}
              onChange={(event) =>
                setOptions((current) => ({
                  ...current,
                  listStyle: event.target.value as ListStyle
                }))
              }
            >
              {listStyleOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <label className={`inline-flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2 text-sm transition ${
            options.removeEmptyBullets
              ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200"
              : "border-slate-200/80 bg-white/80 text-slate-600 hover:border-brand-200 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-300"
          }`}>
            <input
              type="checkbox"
              className="h-3.5 w-3.5 rounded border-slate-300 text-brand-500 focus:ring-brand-400"
              checked={options.removeEmptyBullets}
              onChange={() =>
                setOptions((current) => ({
                  ...current,
                  removeEmptyBullets: !current.removeEmptyBullets
                }))
              }
            />
            <span>Remove empty bullets</span>
          </label>

          {options.listStyle === "custom" ? (
            <label className="inline-flex items-center gap-2.5 rounded-xl border border-slate-200/80 bg-white/80 px-3.5 py-2 text-sm text-slate-600 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-300">
              <span>Custom bullet</span>
              <input
                type="text"
                className="w-14 rounded-lg border border-slate-200/80 bg-slate-50/80 px-2.5 py-1 text-sm text-slate-900 outline-none focus:border-brand-400 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-100"
                maxLength={4}
                value={options.customBullet}
                onChange={(event) =>
                  setOptions((current) => ({
                    ...current,
                    customBullet: event.target.value
                  }))
                }
              />
            </label>
          ) : null}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Formatted list</h2>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Converts your text into copy-ready list items.
              </p>
            </div>
            <CopyButton value={result.result} />
          </div>
          <div className="mt-4 min-h-[220px] whitespace-pre-wrap rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/40 dark:text-slate-200">
            {result.result || (
              <span className="text-slate-400 dark:text-slate-500">Your formatted list will appear here.</span>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            List items
          </p>
          <p className="mt-1.5 text-2xl font-bold text-slate-900 dark:text-white">
            {result.itemCount.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}
