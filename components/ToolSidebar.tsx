"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools, categoryConfig } from "@/lib/tools";
import { iconMap } from "@/lib/icons";

export function ToolSidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-32 rounded-2xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur-xl dark:border-slate-800 dark:bg-slate-900/60">
      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-brand-600 dark:text-brand-300">
        All tools
      </p>
      <h2 className="mt-2.5 text-xl font-bold text-slate-900 dark:text-white">Utility menu</h2>
      <p className="mt-1.5 text-sm text-slate-500 dark:text-slate-400">
        Jump to the tool you need.
      </p>

      <ul className="mt-4 space-y-1.5">
        {tools.map((tool) => {
          const isActive = pathname === `/${tool.slug}`;
          const ToolIcon = iconMap[tool.icon];
          const catConfig = categoryConfig[tool.category];

          return (
            <li key={tool.slug}>
              <Link
                href={`/${tool.slug}`}
                className={`flex items-center gap-3 rounded-xl px-3 py-3 text-sm transition ${
                  isActive
                    ? "border border-brand-200 bg-brand-50 font-semibold text-brand-700 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200"
                    : "border border-transparent text-slate-600 hover:border-slate-200 hover:bg-slate-50 dark:text-slate-300 dark:hover:border-slate-700 dark:hover:bg-slate-800"
                }`}
              >
                {ToolIcon && (
                  <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${catConfig.bgLight} ${catConfig.bgDark}`}>
                    <ToolIcon size={15} className={catConfig.color} />
                  </span>
                )}
                <div className="min-w-0">
                  <span className="block truncate font-medium">{tool.name}</span>
                  <span className="block truncate text-[11px] text-slate-400 dark:text-slate-500">
                    {catConfig.label}
                  </span>
                </div>
              </Link>
            </li>
          );
        })}
      </ul>

      {/* Suggest a tool CTA */}
      <div className="mt-5 rounded-xl border border-dashed border-slate-300 bg-slate-50/80 p-4 text-center dark:border-slate-700 dark:bg-slate-800/40">
        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
          Need a specific tool?
        </p>
        <p className="mt-1 text-[11px] text-slate-400 dark:text-slate-500">
          More tools coming soon!
        </p>
      </div>
    </aside>
  );
}
