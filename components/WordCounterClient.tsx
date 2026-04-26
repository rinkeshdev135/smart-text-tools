"use client";

import { useState } from "react";
import { TextArea } from "@/components/TextArea";
import { analyzeText, type WordCountStats } from "@/lib/tool-logic/wordCounter";

function formatCountLabel(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return `${words.toLocaleString()} words · ${characters.toLocaleString()} chars`;
}

type ScalarStatKey =
  | "words"
  | "charactersWithSpaces"
  | "charactersWithoutSpaces"
  | "sentences"
  | "paragraphs"
  | "readingTimeLabel";

const statCards: Array<{ key: ScalarStatKey; label: string }> = [
  { key: "words", label: "Word count" },
  { key: "charactersWithSpaces", label: "Characters (spaces)" },
  { key: "charactersWithoutSpaces", label: "Characters (no spaces)" },
  { key: "sentences", label: "Sentence count" },
  { key: "paragraphs", label: "Paragraph count" },
  { key: "readingTimeLabel", label: "Reading time" }
];

function formatStatValue(stats: WordCountStats, key: ScalarStatKey) {
  const value = stats[key];
  return typeof value === "number" ? value.toLocaleString() : value;
}

export function WordCounterClient() {
  const [input, setInput] = useState("");
  const stats = analyzeText(input);

  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <TextArea
          label="Paste your text"
          meta={formatCountLabel(input)}
          placeholder="Paste an essay, article, or any text here..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {statCards.map((card) => (
          <div
            key={card.key}
            className="rounded-xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
          >
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              {card.label}
            </p>
            <p className="mt-2 text-3xl font-bold text-slate-900 dark:text-white">
              {formatStatValue(stats, card.key)}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">Top keywords</h2>
            <p className="text-sm text-slate-400 dark:text-slate-500">
              Highest-frequency non-trivial words in the current text.
            </p>
          </div>
        </div>

        {stats.topKeywords.length > 0 ? (
          <div className="mt-4 overflow-hidden rounded-xl border border-slate-200/80 dark:border-slate-700/80">
            <table className="min-w-full divide-y divide-slate-200/80 text-sm dark:divide-slate-700/80">
              <thead className="bg-slate-50/80 dark:bg-slate-800/40">
                <tr>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Word
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Count
                  </th>
                  <th className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Density
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200/60 bg-white/80 dark:divide-slate-700/60 dark:bg-slate-900/30">
                {stats.topKeywords.map((item) => (
                  <tr key={item.word} className="transition hover:bg-brand-50/40 dark:hover:bg-brand-500/5">
                    <td className="px-4 py-3 font-medium text-slate-900 dark:text-slate-100">{item.word}</td>
                    <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{item.count}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-full bg-brand-50 px-2.5 py-0.5 text-xs font-medium text-brand-700 dark:bg-brand-500/10 dark:text-brand-200">
                        {item.density}%
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="mt-4 rounded-xl border border-dashed border-slate-300 bg-slate-50/80 p-4 text-sm text-slate-400 dark:border-slate-700 dark:bg-slate-800/30 dark:text-slate-500">
            Add more text to see the top five keyword density results.
          </div>
        )}
      </div>
    </div>
  );
}
