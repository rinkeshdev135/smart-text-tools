"use client";

import { useState } from "react";
import { SearchIcon } from "@/lib/icons";

type SearchBarProps = {
  onSearch: (query: string) => void;
  placeholder?: string;
};

export function SearchBar({ onSearch, placeholder = "Search tools..." }: SearchBarProps) {
  const [query, setQuery] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setQuery(value);
    onSearch(value);
  }

  return (
    <div className="relative">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
        <SearchIcon size={18} className="text-slate-400 dark:text-slate-500" />
      </div>
      <input
        type="text"
        value={query}
        onChange={handleChange}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-slate-200/80 bg-white/80 py-3 pl-11 pr-4 text-sm text-slate-900 shadow-sm backdrop-blur transition placeholder:text-slate-400 focus:border-brand-300 focus:bg-white focus:shadow-md focus:ring-4 focus:ring-brand-100 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-100 dark:placeholder:text-slate-500 dark:focus:border-brand-500/50 dark:focus:bg-slate-900 dark:focus:ring-brand-500/10"
      />
    </div>
  );
}
