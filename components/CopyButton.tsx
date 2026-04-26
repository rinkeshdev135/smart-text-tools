"use client";

import { useState } from "react";
import { CopyIcon, CheckIcon } from "@/lib/icons";

type CopyButtonProps = {
  value: string;
};

export function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    if (!value) return;

    await navigator.clipboard.writeText(value);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold shadow-md transition ${
        copied
          ? "bg-emerald-500 text-white shadow-emerald-500/25"
          : "bg-slate-900 text-white hover:bg-brand-600 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-50 dark:bg-brand-500 dark:text-slate-900 dark:hover:bg-brand-400"
      }`}
      onClick={handleCopy}
      disabled={!value}
      type="button"
    >
      {copied ? (
        <>
          <CheckIcon size={15} className="animate-scale-in" />
          Copied!
        </>
      ) : (
        <>
          <CopyIcon size={15} />
          Copy
        </>
      )}
    </button>
  );
}
