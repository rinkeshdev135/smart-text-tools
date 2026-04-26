"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { tools, categoryConfig } from "@/lib/tools";
import { iconMap, MenuIcon, CloseIcon } from "@/lib/icons";

export function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-white/40 bg-white/75 backdrop-blur-2xl dark:border-slate-800/80 dark:bg-slate-950/75">
        {/* Main nav row */}
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 sm:py-3.5 lg:px-8">
          {/* Logo */}
          <Link href="/" className="group flex items-center gap-2.5 sm:gap-3">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-400 via-brand-500 to-accent-500 text-xs font-bold text-white shadow-lg shadow-brand-500/25 transition-transform group-hover:scale-105 sm:h-10 sm:w-10 sm:text-sm">
              <span className="relative z-10">ST</span>
            </div>
            <div>
              <p className="text-sm font-bold tracking-tight text-slate-900 dark:text-white sm:text-base">
                SmartTextTools
              </p>
              <p className="hidden text-[11px] font-medium uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 sm:block">
                Free text utilities
              </p>
            </div>
          </Link>

          {/* Desktop nav - show at md */}
          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                pathname === "/"
                  ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              Home
            </Link>
            <Link
              href="/text-cleaner"
              className="rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-2 text-sm font-semibold text-white shadow-md shadow-brand-500/20 transition hover:shadow-lg hover:shadow-brand-500/30"
            >
              Try a Tool →
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 transition hover:bg-slate-100 md:hidden dark:text-slate-300 dark:hover:bg-slate-800"
            aria-label="Open menu"
          >
            <MenuIcon size={22} />
          </button>
        </div>

        {/* Tool bar - hidden on mobile, visible on md+ */}
        <div className="hidden border-t border-slate-200/60 dark:border-slate-800/60 md:block">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="tool-nav-scroll relative -mx-4 flex items-center gap-1.5 overflow-x-auto px-4 py-2 sm:-mx-0 sm:gap-2 sm:px-0 sm:py-2.5">
              <span className="mr-1 shrink-0 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500 sm:text-[11px]">
                Tools
              </span>
              {tools.map((tool) => {
                const isActive = pathname === `/${tool.slug}`;
                const ToolIcon = iconMap[tool.icon];
                return (
                  <Link
                    key={tool.slug}
                    href={`/${tool.slug}`}
                    className={`flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-medium transition whitespace-nowrap sm:text-sm ${
                      isActive
                        ? "border-brand-300 bg-brand-50 text-brand-700 shadow-sm dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200"
                        : "border-slate-200/80 bg-white/70 text-slate-600 hover:border-brand-200 hover:bg-brand-50/80 hover:text-brand-700 dark:border-slate-700/80 dark:bg-slate-900/60 dark:text-slate-300 dark:hover:border-brand-500/30 dark:hover:bg-slate-800 dark:hover:text-brand-200"
                    }`}
                  >
                    {ToolIcon && <ToolIcon size={14} />}
                    <span className="hidden lg:inline">{tool.name}</span>
                    <span className="lg:hidden">{tool.shortName}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="menu-overlay md:hidden" onClick={() => setMobileOpen(false)} />
      )}

      {/* Mobile menu drawer */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-[min(300px,85vw)] bg-white shadow-2xl transition-transform duration-300 md:hidden dark:bg-slate-900 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 dark:border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-brand-400 to-accent-500 text-xs font-bold text-white">
              ST
            </div>
            <span className="text-sm font-bold text-slate-900 dark:text-white">SmartTextTools</span>
          </div>
          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 transition hover:bg-slate-100 dark:hover:bg-slate-800"
            aria-label="Close menu"
          >
            <CloseIcon size={18} />
          </button>
        </div>

        <nav className="overflow-y-auto p-4" style={{ maxHeight: "calc(100vh - 65px)" }}>
          <Link
            href="/"
            className={`mb-1 block rounded-xl px-4 py-3 text-sm font-medium transition ${
              pathname === "/"
                ? "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
            }`}
          >
            Home
          </Link>

          <p className="mb-2 mt-5 px-4 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400 dark:text-slate-500">
            All Tools
          </p>

          {tools.map((tool) => {
            const isActive = pathname === `/${tool.slug}`;
            const ToolIcon = iconMap[tool.icon];
            const catConfig = categoryConfig[tool.category];
            return (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className={`mb-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm transition ${
                  isActive
                    ? "bg-brand-50 font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-200"
                    : "text-slate-600 hover:bg-slate-50 dark:text-slate-300 dark:hover:bg-slate-800"
                }`}
              >
                {ToolIcon && (
                  <span className={`flex h-8 w-8 items-center justify-center rounded-lg ${catConfig.bgLight} ${catConfig.bgDark}`}>
                    <ToolIcon size={16} className={catConfig.color} />
                  </span>
                )}
                <div>
                  <span className="block font-medium">{tool.name}</span>
                  <span className="block text-[11px] text-slate-400 dark:text-slate-500">
                    {catConfig.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>
      </div>
    </>
  );
}
