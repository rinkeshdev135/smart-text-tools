import Link from "next/link";
import { getToolBySlug, categoryConfig } from "@/lib/tools";
import { toolContent } from "@/lib/tool-content";
import { iconMap, ArrowRightIcon } from "@/lib/icons";

type ToolContentProps = {
  slug: string;
  relatedSlugs: string[];
};

export function ToolContent({ slug, relatedSlugs }: ToolContentProps) {
  const content = toolContent[slug];
  const relatedTools = relatedSlugs
    .map((item) => getToolBySlug(item))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  if (!content) {
    return null;
  }

  return (
    <section className="space-y-6">
      {/* About this tool */}
      <article className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">About this tool</h2>
        <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {content.intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </article>

      {/* Content sections */}
      {content.sections.map((section) => (
        <article
          key={section.heading}
          className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{section.heading}</h2>
          <div className="mt-4 space-y-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
            {section.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </article>
      ))}

      {/* Examples */}
      <article className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Examples</h2>
        <div className="mt-6 grid gap-4 lg:grid-cols-3">
          {content.examples.map((example) => (
            <div
              key={example.title}
              className="rounded-xl border border-slate-200/80 bg-slate-50/80 p-4 dark:border-slate-700/80 dark:bg-slate-800/40"
            >
              <h3 className="text-base font-bold text-slate-900 dark:text-slate-100">
                {example.title}
              </h3>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400 dark:text-slate-500">
                Before
              </p>
              <pre className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                {example.before}
              </pre>
              <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600 dark:text-emerald-400">
                After
              </p>
              <pre className="mt-1.5 whitespace-pre-wrap text-sm leading-relaxed text-slate-900 dark:text-slate-100">
                {example.after}
              </pre>
            </div>
          ))}
        </div>
      </article>

      {/* Related tools */}
      <article className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Related tools</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {relatedTools.map((tool) => {
            const ToolIcon = iconMap[tool.icon];
            const catConfig = categoryConfig[tool.category];
            return (
              <Link
                key={tool.slug}
                href={`/${tool.slug}`}
                className="group flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white/80 p-3 transition hover:border-brand-200 hover:shadow-md dark:border-slate-700/80 dark:bg-slate-800/40 dark:hover:border-brand-500/30"
              >
                {ToolIcon && (
                  <span className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${catConfig.bgLight} ${catConfig.bgDark}`}>
                    <ToolIcon size={16} className={catConfig.color} />
                  </span>
                )}
                <div className="min-w-0">
                  <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-600 dark:text-slate-100 dark:group-hover:text-brand-300">
                    {tool.name}
                  </span>
                  <span className="block text-xs text-slate-400 dark:text-slate-500">
                    {catConfig.label}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </article>
    </section>
  );
}
