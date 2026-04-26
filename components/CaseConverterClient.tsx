"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";
import { TextArea } from "@/components/TextArea";
import { convertCase, type CaseConversionMode } from "@/lib/tool-logic/caseConverter";

const conversionButtons: Array<{ mode: CaseConversionMode; label: string }> = [
  { mode: "uppercase", label: "UPPERCASE" },
  { mode: "lowercase", label: "lowercase" },
  { mode: "sentence", label: "Sentence case" },
  { mode: "title", label: "Title Case" },
  { mode: "camel", label: "camelCase" },
  { mode: "snake", label: "snake_case" }
];

function formatCountLabel(text: string) {
  const words = text.trim() ? text.trim().split(/\s+/).length : 0;
  const characters = text.length;

  return `${words.toLocaleString()} words · ${characters.toLocaleString()} chars`;
}

export function CaseConverterClient() {
  const [input, setInput] = useState("");
  const [activeMode, setActiveMode] = useState<CaseConversionMode>("uppercase");

  const output = convertCase(input, activeMode);

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <TextArea
          label="Enter text"
          meta={formatCountLabel(input)}
          placeholder="Type or paste text here..."
          value={input}
          onChange={(event) => setInput(event.target.value)}
        />
        <div className="mt-5 flex flex-wrap gap-2.5">
          {conversionButtons.map((button) => {
            const isActive = button.mode === activeMode;

            return (
              <button
                key={button.mode}
                type="button"
                onClick={() => setActiveMode(button.mode)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  isActive
                    ? "bg-gradient-to-r from-brand-500 to-accent-500 text-white shadow-md shadow-brand-500/20"
                    : "border border-slate-200/80 bg-white/80 text-slate-600 hover:border-brand-200 hover:bg-brand-50 dark:border-slate-700/80 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:border-brand-500/20"
                }`}
              >
                {button.label}
              </button>
            );
          })}
        </div>
      </div>

      <div className="space-y-5">
        <div className="rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
          <div className="flex items-center justify-between gap-4">
            <div>
              <h2 className="text-lg font-bold text-slate-900 dark:text-white">Converted output</h2>
              <p className="text-sm text-slate-400 dark:text-slate-500">
                Click a conversion mode to transform instantly.
              </p>
            </div>
            <CopyButton value={output} />
          </div>
          <div className="mt-4 min-h-[220px] rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 text-sm leading-relaxed text-slate-700 dark:border-slate-700/80 dark:bg-slate-800/40 dark:text-slate-200">
            {output || (
              <span className="text-slate-400 dark:text-slate-500">Your converted text will appear here.</span>
            )}
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Active mode
            </p>
            <p className="mt-1.5 text-2xl font-bold text-slate-900 dark:text-white">
              {conversionButtons.find((button) => button.mode === activeMode)?.label}
            </p>
          </div>
          <div className="rounded-xl border border-white/50 bg-white/65 p-4 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
              Output length
            </p>
            <p className="mt-1.5 text-2xl font-bold text-slate-900 dark:text-white">
              {output.length.toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
