"use client";

import { useState } from "react";
import Link from "next/link";
import { tools, categoryConfig } from "@/lib/tools";
import { iconMap, ArrowRightIcon, ZapIcon, ShieldIcon, GlobeIcon, ClipboardIcon, WandIcon } from "@/lib/icons";
import { SearchBar } from "@/components/SearchBar";

export function HomePageClient() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTools = tools.filter((tool) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      tool.name.toLowerCase().includes(q) ||
      tool.description.toLowerCase().includes(q) ||
      tool.keyword.toLowerCase().includes(q) ||
      tool.category.toLowerCase().includes(q)
    );
  });

  return (
    <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-5 shadow-panel backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-3xl sm:p-8 lg:p-12">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-gradient-to-br from-brand-400/20 to-accent-400/20 blur-3xl sm:h-80 sm:w-80" />
          <div className="absolute -bottom-20 -left-20 h-40 w-40 rounded-full bg-gradient-to-tr from-accent-400/15 to-brand-400/10 blur-3xl sm:h-60 sm:w-60" />
          <div className="absolute right-1/3 top-1/4 h-32 w-32 rounded-full bg-orange-300/10 blur-3xl sm:h-40 sm:w-40" />
        </div>

        <div className="relative grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center lg:gap-10">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-200/60 bg-brand-50/80 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-200 sm:px-4 sm:py-1.5 sm:text-xs">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 shadow-sm shadow-brand-500/50" />
              Free online text tools
            </div>

            <h1 className="mt-4 text-3xl font-extrabold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-4xl md:text-5xl lg:text-[3.5rem]">
              Clean, convert &amp; reshape{" "}
              <span className="bg-gradient-to-r from-brand-500 via-accent-500 to-brand-400 bg-clip-text text-transparent">
                text instantly
              </span>
            </h1>

            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300 sm:mt-6 sm:text-base md:text-lg md:max-w-xl">
              SmartTextTools gives you focused utilities for everyday text tasks. 
              No clutter, no sign-up — results update instantly while you work.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:items-center">
              <Link
                href="/text-cleaner"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-brand-500 to-accent-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand-500/25 transition hover:shadow-xl hover:shadow-brand-500/35 sm:px-6 sm:py-3"
              >
                Start with Text Cleaner
                <ArrowRightIcon size={16} className="transition-transform group-hover:translate-x-0.5" />
              </Link>
              <Link
                href="/word-counter"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white/80 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-brand-300 hover:bg-brand-50 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900/70 dark:text-slate-200 dark:hover:border-brand-500/40 dark:hover:text-brand-200 sm:px-6 sm:py-3"
              >
                Try Word Counter
              </Link>
            </div>
          </div>

          {/* Right stats cards - horizontal on mobile/tablet, vertical on desktop */}
          <div className="grid grid-cols-1 gap-3 min-[480px]:grid-cols-3 lg:grid-cols-1 lg:gap-4">
            <div className="group rounded-xl border border-white/20 bg-gradient-to-br from-slate-900 to-slate-800 p-4 text-white shadow-xl transition hover:shadow-2xl dark:from-slate-800 dark:to-slate-900 lg:rounded-2xl lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-300 sm:text-[11px]">Tools live</p>
              <p className="mt-2 text-3xl font-extrabold lg:mt-3 lg:text-4xl">{tools.length}</p>
              <p className="mt-1 text-xs text-slate-400 sm:mt-2 sm:text-sm">Focused utilities for common text problems.</p>
            </div>
            <div className="rounded-xl border border-white/50 bg-white/70 p-4 shadow-panel backdrop-blur dark:border-slate-700 dark:bg-slate-800/60 lg:rounded-2xl lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500 sm:text-[11px]">Processing</p>
              <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white lg:mt-3 lg:text-2xl">Real-time</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">Paste, tweak, and copy — results appear as you type.</p>
            </div>
            <div className="rounded-xl border border-white/50 bg-white/70 p-4 shadow-panel backdrop-blur dark:border-slate-700 dark:bg-slate-800/60 lg:rounded-2xl lg:p-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400 dark:text-slate-500 sm:text-[11px]">Privacy</p>
              <p className="mt-2 text-xl font-bold text-slate-900 dark:text-white lg:mt-3 lg:text-2xl">100% client-side</p>
              <p className="mt-1 text-xs text-slate-500 dark:text-slate-400 sm:mt-2 sm:text-sm">Your text never leaves your browser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="mt-10 sm:mt-16">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
            How it works
          </p>
          <h2 className="mt-3 text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl md:text-4xl">
            Three steps. Zero friction.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-6 md:grid-cols-3">
          {[
            {
              step: "01",
              icon: ClipboardIcon,
              title: "Paste your text",
              description: "Drop in any text — messy formatting, copied HTML, raw lists, or complete paragraphs.",
              gradient: "from-brand-400 to-cyan-400"
            },
            {
              step: "02",
              icon: WandIcon,
              title: "Pick your tool",
              description: "Choose from cleaning, converting, counting, deduplicating, or formatting tools.",
              gradient: "from-accent-400 to-pink-400"
            },
            {
              step: "03",
              icon: ZapIcon,
              title: "Copy the result",
              description: "Grab the processed output instantly — formatted, clean, and ready to use anywhere.",
              gradient: "from-amber-400 to-orange-400"
            }
          ].map((item) => (
            <div
              key={item.step}
              className="group relative rounded-xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:shadow-panel-hover dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-6"
            >
              {/* Step number */}
              <div className="absolute -top-3 right-4 sm:right-6">
                <span className="rounded-full bg-slate-900 px-2.5 py-1 text-[10px] font-bold text-white shadow-md dark:bg-slate-700 sm:px-3 sm:text-xs">
                  {item.step}
                </span>
              </div>

              <div className={`inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient} text-white shadow-lg transition group-hover:scale-110 sm:h-12 sm:w-12`}>
                <item.icon size={20} />
              </div>
              <h3 className="mt-3 text-base font-bold text-slate-900 dark:text-white sm:mt-4 sm:text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-2">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── Tool Library ─── */}
      <section className="mt-10 sm:mt-16">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between sm:gap-6">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
              Tool library
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-900 dark:text-white sm:mt-3 sm:text-3xl md:text-4xl">
              Pick the tool you need
            </h2>
          </div>
          <div className="w-full sm:max-w-sm">
            <SearchBar onSearch={setSearchQuery} placeholder="Search tools..." />
          </div>
        </div>

        <div className="mt-6 grid gap-4 sm:mt-8 sm:grid-cols-2 sm:gap-5 xl:grid-cols-3">
          {filteredTools.map((tool) => {
            const ToolIcon = iconMap[tool.icon];
            const catConfig = categoryConfig[tool.category];
            return (
              <article
                key={tool.slug}
                className="gradient-border group relative rounded-xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur transition hover:-translate-y-1 hover:shadow-panel-hover dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-6"
              >
                {/* Category badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.15em] sm:px-3 sm:py-1 sm:text-xs ${catConfig.bgLight} ${catConfig.bgDark} ${catConfig.color}`}>
                    {catConfig.label}
                  </span>
                  <span className="flex h-2 w-2 items-center justify-center">
                    <span className="inline-block h-2 w-2 rounded-full bg-emerald-400/80 shadow-sm shadow-emerald-400/40" />
                  </span>
                </div>

                {/* Tool icon & name */}
                <div className="mt-4 flex items-center gap-3 sm:mt-5">
                  {ToolIcon && (
                    <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-brand-50 to-accent-50 text-brand-600 transition group-hover:from-brand-100 group-hover:to-accent-100 dark:from-brand-500/10 dark:to-accent-500/10 dark:text-brand-300 sm:h-10 sm:w-10">
                      <ToolIcon size={18} />
                    </div>
                  )}
                  <h2 className="text-lg font-bold text-slate-900 dark:text-white sm:text-xl">{tool.name}</h2>
                </div>

                {/* Description */}
                <p className="mt-2.5 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-3">
                  {tool.description}
                </p>

                {/* Keyword */}
                <p className="mt-3 text-[10px] uppercase tracking-[0.16em] text-slate-400 dark:text-slate-500 sm:mt-4 sm:text-[11px]">
                  {tool.keyword}
                </p>

                {/* CTA */}
                <Link
                  href={`/${tool.slug}`}
                  className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-md transition hover:bg-brand-600 hover:shadow-lg group-hover:bg-brand-600 dark:bg-white dark:text-slate-900 dark:hover:bg-brand-200 dark:group-hover:bg-brand-200 sm:mt-5 sm:px-5 sm:py-2.5"
                >
                  Open tool
                  <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
                </Link>
              </article>
            );
          })}
        </div>

        {filteredTools.length === 0 && (
          <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-white/50 px-6 py-10 text-center backdrop-blur dark:border-slate-700 dark:bg-slate-900/40 sm:mt-8 sm:py-12">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              No tools match &ldquo;{searchQuery}&rdquo;. Try a different search term.
            </p>
          </div>
        )}
      </section>

      {/* ─── Why SmartTextTools ─── */}
      <section className="mt-10 grid gap-4 sm:mt-16 sm:gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-brand-600 dark:text-brand-300">
            Why it feels better
          </p>
          <h2 className="mt-3 text-xl font-bold text-slate-900 dark:text-white sm:mt-4 sm:text-2xl md:text-3xl">
            Cleaner interface. Faster output. Less busywork.
          </h2>

          <div className="mt-5 grid gap-3 sm:mt-6 sm:grid-cols-3 sm:gap-4">
            {[
              {
                icon: ZapIcon,
                title: "Paste and go",
                description: "Most tools update in real time, so you never lose momentum.",
                color: "text-amber-500"
              },
              {
                icon: ShieldIcon,
                title: "Private & secure",
                description: "Everything runs in your browser. Your text is never uploaded.",
                color: "text-emerald-500"
              },
              {
                icon: GlobeIcon,
                title: "Works everywhere",
                description: "Responsive design that works on desktop, tablet, and mobile.",
                color: "text-brand-500"
              }
            ].map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl bg-slate-50/80 p-3.5 transition hover:bg-slate-100 dark:bg-slate-800/40 dark:hover:bg-slate-800/60 sm:p-4"
              >
                <feature.icon size={20} className={feature.color} />
                <h3 className="mt-2.5 text-sm font-bold text-slate-900 dark:text-white sm:mt-3">{feature.title}</h3>
                <p className="mt-1 text-xs leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-1.5 sm:text-[13px]">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA card */}
        <div className="relative overflow-hidden rounded-xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 text-white shadow-xl sm:rounded-2xl sm:p-8">
          {/* Glow */}
          <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
          <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-accent-500/15 blur-3xl" />

          <div className="relative">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-300 sm:text-xs">
              Recommended start
            </p>
            <h2 className="mt-3 text-2xl font-bold sm:mt-4 sm:text-3xl">Text Cleaner</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300 sm:mt-4">
              If you only try one tool, start here. Fix messy copied text — strip formatting noise, 
              remove extra spaces, and get clean output ready for any workflow.
            </p>
            <Link
              href="/text-cleaner"
              className="group mt-5 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-lg transition hover:bg-brand-50 hover:shadow-xl sm:mt-6 sm:px-6 sm:py-3"
            >
              Launch Text Cleaner
              <ArrowRightIcon size={14} className="transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Trust bar ─── */}
      <section className="mt-10 rounded-xl border border-white/50 bg-white/50 p-6 text-center shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/40 sm:mt-16 sm:rounded-2xl sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400 dark:text-slate-500">
          Built for
        </p>
        <h2 className="mt-2 text-xl font-bold text-slate-900 dark:text-white sm:mt-3 sm:text-2xl md:text-3xl">
          Writers, developers, and content creators
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4">
          Whether you&apos;re cleaning up pasted content for a blog post, formatting data for a spreadsheet, 
          or prepping text for code — SmartTextTools helps you get there faster.
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 sm:mt-8 sm:gap-3">
          {["Content writers", "Developers", "SEO specialists", "Students", "Marketers", "Data analysts"].map((role) => (
            <span
              key={role}
              className="rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800/60 dark:text-slate-300 sm:px-4 sm:py-2 sm:text-xs"
            >
              {role}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
