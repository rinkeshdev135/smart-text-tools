import { ChevronDownIcon } from "@/lib/icons";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQProps = {
  title?: string;
  items: FAQItem[];
};

export function FAQ({ title = "Frequently asked questions", items }: FAQProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer
      }
    }))
  };

  return (
    <section className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <div className="mt-6 space-y-3">
        {items.map((item) => (
          <details
            key={item.question}
            className="group rounded-xl border border-slate-200/80 bg-white/80 transition hover:border-brand-200 dark:border-slate-700/80 dark:bg-slate-800/40 dark:hover:border-brand-500/30"
          >
            <summary className="flex cursor-pointer items-center justify-between gap-4 p-4 text-sm font-semibold text-slate-900 dark:text-slate-100">
              <span>{item.question}</span>
              <ChevronDownIcon
                size={16}
                className="shrink-0 text-slate-400 transition-transform duration-300 group-open:rotate-180 dark:text-slate-500"
              />
            </summary>
            <div className="border-t border-slate-100 px-4 pb-4 pt-3 dark:border-slate-700/60">
              <p className="text-sm leading-relaxed text-slate-500 dark:text-slate-400">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
