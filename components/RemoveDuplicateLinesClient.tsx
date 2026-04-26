"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { TextArea } from "@/components/TextArea";
import {
  defaultRemoveDuplicateLineOptions,
  removeDuplicateLines,
  type RemoveDuplicateLineOptions
} from "@/lib/tool-logic/removeDuplicateLines";

type OptionKey = keyof RemoveDuplicateLineOptions;

const optionLabels: Array<{ key: OptionKey; label: string }> = [
  { key: "caseSensitive", label: "Case sensitive" },
  { key: "trimBeforeComparing", label: "Trim whitespace before comparing" }
];

function formatCountLabel(text: string) {
  const lineCount = text ? text.split(/\r?\n/).length : 0;
  const characters = text.length;

  return `${lineCount.toLocaleString()} lines · ${characters.toLocaleString()} chars`;
}

export function RemoveDuplicateLinesClient() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<RemoveDuplicateLineOptions>(
    defaultRemoveDuplicateLineOptions
  );
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [input]);

  const result = removeDuplicateLines(debouncedInput, options);

  function toggleOption(key: OptionKey) {
    setOptions((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <TextArea
          label="Input lines"
          meta={formatCountLabel(input)}
          placeholder={"Paste one item per line...\nApple\napple\nBanana\nApple"}
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="mt-5 flex flex-wrap gap-2.5">
          {optionLabels.map((option) => (
            <label
              key={option.key}
              className={`inline-flex cursor-pointer items-center gap-2.5 rounded-xl border px-3.5 py-2 text-sm transition ${
                options[option.key]
                  ? "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-500/30 dark:bg-brand-500/10 dark:text-brand-200"
                  : "border-slate-200/80 bg-white/80 text-slate-600 hover:border-brand-200 hover:bg-brand-50/50 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-brand-500/20"
              }`}
            >
              <input
                type="checkbox"
                className="h-3.5 w-3.5 rounded border-slate-300 text-brand-500 focus:ring-brand-400"
                checked={options[option.key]}
                onChange={() => toggleOption(option.key)}
              />
              <span>{option.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-2.5">
                <h2 className="text-lg font-bold text-slate-900 dark:text-white">Unique lines</h2>
                <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                  {result.duplicateLinesRemoved.toLocaleString()} removed
                </span>
              </div>
              <p className="mt-1.5 text-sm text-slate-400 dark:text-slate-500">
                Updates after a short typing pause.
              </p>
            </div>
            <CopyButton value={result.result} />
          </div>
          <div className="mt-4 min-h-[220px] whitespace-pre-wrap rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/40 dark:text-slate-200">
            {result.result || (
              <span className="text-slate-400 dark:text-slate-500">Deduplicated lines will appear here.</span>
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {[
            { label: "Total lines", value: result.totalLines },
            { label: "Unique lines", value: result.uniqueLines },
            { label: "Removed", value: result.duplicateLinesRemoved }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                {stat.label}
              </p>
              <p className="mt-1.5 text-2xl font-bold text-slate-900 dark:text-white">
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
