import Link from "next/link";
import { tools } from "@/lib/tools";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10 border-t border-slate-200/60 bg-white/50 backdrop-blur-xl dark:border-slate-800/60 dark:bg-slate-950/50 sm:mt-16">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-accent-500 text-xs font-bold text-white shadow-md shadow-brand-500/20">
                ST
              </div>
              <span className="text-base font-bold tracking-tight text-slate-900 dark:text-white">
                SmartTextTools
              </span>
            </div>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4">
              Fast, free text utilities for cleaning, formatting, analyzing, and converting text online. No sign-up required.
            </p>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Tools
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              {tools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/${tool.slug}`}
                    className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Resources
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li>
                <Link
                  href="/"
                  className="text-sm text-slate-500 transition hover:text-brand-600 dark:text-slate-400 dark:hover:text-brand-300"
                >
                  All Tools
                </Link>
              </li>
              <li>
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  Blog (coming soon)
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  API (coming soon)
                </span>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-900 dark:text-white">
              Legal
            </h3>
            <ul className="mt-3 space-y-2 sm:mt-4 sm:space-y-2.5">
              <li>
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  Privacy Policy
                </span>
              </li>
              <li>
                <span className="text-sm text-slate-400 dark:text-slate-500">
                  Terms of Service
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-slate-200/60 pt-6 sm:mt-12 sm:flex-row sm:gap-4 sm:pt-8 dark:border-slate-800/60">
          <p className="text-xs text-slate-400 dark:text-slate-500 sm:text-sm">
            © {currentYear} SmartTextTools. All rights reserved.
          </p>
          <div className="flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-500 dark:border-slate-700 dark:bg-slate-900/80 dark:text-slate-400 sm:px-4 sm:py-2 sm:text-xs">
            <span className="inline-block h-2 w-2 rounded-full bg-emerald-400 shadow-sm shadow-emerald-400/50" />
            All tools online and free
          </div>
        </div>
      </div>
    </footer>
  );
}
