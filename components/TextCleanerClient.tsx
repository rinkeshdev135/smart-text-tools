"use client";

import { useEffect, useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { TextArea } from "@/components/TextArea";
import {
  cleanText,
  defaultTextCleanerOptions,
  type TextCleanerOptions
} from "@/lib/tool-logic/textCleaner";

type OptionKey = keyof TextCleanerOptions;

const optionLabels: Array<{ key: OptionKey; label: string }> = [
  { key: "removeExtraSpaces", label: "Remove extra spaces" },
  { key: "removeLineBreaks", label: "Remove line breaks" },
  { key: "removeSpecialCharacters", label: "Remove special characters" },
  { key: "trimWhitespace", label: "Trim whitespace" },
  { key: "stripHtmlTags", label: "Strip HTML tags" }
];

function formatCountLabel(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return `${words.toLocaleString()} words · ${characters.toLocaleString()} chars`;
}

export function TextCleanerClient() {
  const [input, setInput] = useState("");
  const [options, setOptions] = useState<TextCleanerOptions>(defaultTextCleanerOptions);
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setDebouncedInput(input);
    }, 300);

    return () => window.clearTimeout(timeoutId);
  }, [input]);

  const cleaned = cleanText(debouncedInput, options);

  function toggleOption(key: OptionKey) {
    setOptions((current) => ({
      ...current,
      [key]: !current[key]
    }));
  }

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Input panel */}
      <div className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-5">
        <TextArea
          label="Paste your text"
          meta={formatCountLabel(input)}
          placeholder="Paste messy text, copied content, or HTML here..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="mt-3 flex flex-wrap gap-2 sm:mt-5 sm:gap-2.5">
          {optionLabels.map((option) => (
            <label
              key={option.key}
              className={`inline-flex cursor-pointer items-center gap-2 rounded-lg border px-3 py-1.5 text-xs transition sm:gap-2.5 sm:rounded-xl sm:px-3.5 sm:py-2 sm:text-sm ${
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

      {/* Output panel */}
      <div className="space-y-5">
        <div className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Cleaned output</h2>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Updates after a short typing pause.
              </p>
            </div>
            <CopyButton value={cleaned.result} />
          </div>
          <div className="mt-3 min-h-[140px] rounded-lg border border-slate-200/80 bg-slate-50/80 p-3 text-sm leading-relaxed text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/40 dark:text-slate-200 sm:mt-4 sm:min-h-[220px] sm:rounded-xl sm:p-4">
            {cleaned.result || (
              <span className="text-slate-400 dark:text-slate-500">Your cleaned text will appear here.</span>
            )}
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 sm:gap-3">
          {[
            { label: "Original", value: cleaned.stats.originalLength },
            { label: "Cleaned", value: cleaned.stats.cleanedLength },
            { label: "Removed", value: cleaned.stats.charactersRemoved }
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-white/50 bg-white/65 p-3 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-xl sm:p-4"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
                {stat.label}
              </p>
              <p className="mt-1 text-xl font-bold text-slate-900 dark:text-white sm:mt-1.5 sm:text-2xl">
                {stat.value.toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
