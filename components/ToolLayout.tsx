import type { ReactNode } from "react";
import Link from "next/link";
import { ToolSidebar } from "@/components/ToolSidebar";
import { ChevronRightIcon, HomeIcon } from "@/lib/icons";
import { iconMap } from "@/lib/icons";

type ToolLayoutProps = {
  title: string;
  description: string;
  eyebrow?: string;
  toolIcon?: string;
  leftPanel?: ReactNode;
  rightPanel?: ReactNode;
  toolInterface?: ReactNode;
  children?: ReactNode;
};

export function ToolLayout({
  title,
  description,
  eyebrow = "Free Online Text Tool",
  toolIcon,
  toolInterface,
  children
}: ToolLayoutProps) {
  const ToolIconComponent = toolIcon ? iconMap[toolIcon] : null;

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      {/* Breadcrumbs */}
      <nav className="mb-4 flex items-center gap-1.5 text-xs sm:mb-6 sm:text-sm" aria-label="Breadcrumb">
        <Link
          href="/"
          className="flex items-center gap-1 text-slate-400 transition hover:text-brand-600 dark:text-slate-500 dark:hover:text-brand-300"
        >
          <HomeIcon size={14} />
          <span>Home</span>
        </Link>
        <ChevronRightIcon size={12} className="text-slate-300 dark:text-slate-600" />
        <span className="font-medium text-slate-700 dark:text-slate-200">{eyebrow}</span>
      </nav>

      <div className="grid gap-6 lg:gap-8 xl:grid-cols-[minmax(0,1fr)_300px]">
        <main className="min-w-0 space-y-4 sm:space-y-6">
          {/* Tool header */}
          <section className="overflow-hidden rounded-xl border border-white/50 bg-white/65 p-5 shadow-panel backdrop-blur-2xl dark:border-slate-800 dark:bg-slate-900/60 sm:rounded-2xl sm:p-6 lg:p-8">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 rounded-full bg-brand-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-700 dark:bg-brand-500/10 dark:text-brand-200 sm:px-4 sm:py-2 sm:text-xs">
                {ToolIconComponent && <ToolIconComponent size={14} />}
                {eyebrow}
              </div>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50/80 px-2.5 py-1 text-[10px] font-medium text-emerald-700 dark:border-emerald-500/20 dark:bg-emerald-500/10 dark:text-emerald-300 sm:px-3 sm:py-1.5 sm:text-xs">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                Free &amp; instant
              </span>
            </div>
            <h1 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:mt-6 sm:text-3xl lg:text-[2.75rem] lg:leading-[1.15]">
              {title}
            </h1>
            <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400 sm:mt-4 sm:text-base">
              {description}
            </p>
          </section>

          {/* Tool interface */}
          <section>{toolInterface}</section>

          {/* Additional content */}
          {children}
        </main>

        {/* Sidebar - hidden on mobile/tablet, shows on xl */}
        <div className="hidden space-y-6 xl:block">
          <ToolSidebar />
        </div>
      </div>
    </div>
  );
}
