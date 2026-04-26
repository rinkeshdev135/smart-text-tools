import { notFound } from "next/navigation";
import { CaseConverterClient } from "@/components/CaseConverterClient";
import { FAQ } from "@/components/FAQ";
import { TextCleanerClient } from "@/components/TextCleanerClient";
import { ToolContent } from "@/components/ToolContent";
import { ToolLayout } from "@/components/ToolLayout";
import { RemoveDuplicateLinesClient } from "@/components/RemoveDuplicateLinesClient";
import { TextToBulletPointsClient } from "@/components/TextToBulletPointsClient";
import { WordCounterClient } from "@/components/WordCounterClient";
import { generatePageMetadata } from "@/lib/metadata";
import { toolContent } from "@/lib/tool-content";
import { getToolBySlug, tools, categoryConfig } from "@/lib/tools";

type ToolPageProps = {
  params: {
    tool: string;
  };
};

export function generateStaticParams() {
  return tools.map((tool) => ({ tool: tool.slug }));
}

export function generateMetadata({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.tool);

  if (!tool) {
    return generatePageMetadata({
      title: "Tool Not Found | SmartTextTools",
      description: "The requested tool could not be found."
    });
  }

  return generatePageMetadata({
    title: `${tool.name} - Free Online Tool | SmartTextTools`,
    description: tool.description,
    slug: tool.slug,
    category: tool.category,
    categoryLabel: categoryConfig[tool.category]?.label
  });
}

export default function ToolPage({ params }: ToolPageProps) {
  const tool = getToolBySlug(params.tool);

  if (!tool) {
    notFound();
  }

  const relatedTools = tool.relatedSlugs
    .map((slug) => getToolBySlug(slug))
    .filter((value): value is NonNullable<typeof value> => Boolean(value));

  const faqItems = toolContent[tool.slug]?.faq ?? [];

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    url: `https://smarttexttools.com/${tool.slug}`,
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "Any",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://smarttexttools.com"
      },
      {
        "@type": "ListItem",
        position: 2,
        name: tool.name,
        item: `https://smarttexttools.com/${tool.slug}`
      }
    ]
  };

  const isTextCleaner = tool.slug === "text-cleaner";
  const isCaseConverter = tool.slug === "case-converter";
  const isWordCounter = tool.slug === "word-counter";
  const isRemoveDuplicateLines = tool.slug === "remove-duplicate-lines";
  const isTextToBulletPoints = tool.slug === "text-to-bullet-points";
  const toolInterface = isTextCleaner
    ? <TextCleanerClient />
    : isCaseConverter
      ? <CaseConverterClient />
      : isWordCounter
        ? <WordCounterClient />
        : isRemoveDuplicateLines
          ? <RemoveDuplicateLinesClient />
          : isTextToBulletPoints
            ? <TextToBulletPointsClient />
        : undefined;

  return (
    <ToolLayout
      title={`${tool.keyword} - Free & Instant`}
      description={tool.description}
      eyebrow={tool.name}
      toolIcon={tool.icon}
      toolInterface={toolInterface}
    >
      <section className="rounded-2xl border border-white/50 bg-white/65 p-6 shadow-panel backdrop-blur dark:border-slate-800 dark:bg-slate-900/60">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What this tool does</h2>
        <p className="mt-4 text-base leading-relaxed text-slate-500 dark:text-slate-400">
          {isTextCleaner
            ? "Use Text Cleaner to fix messy copied content fast. It removes extra spaces, flattens broken lines, strips simple HTML, and gives you a cleaner result you can reuse right away."
            : isCaseConverter
              ? "Use Case Converter when the wording is right but the capitalization is not. Switch between writing-friendly and code-friendly formats in one click."
              : isWordCounter
                ? "Use Word Counter to measure length, structure, and repetition while you write. It is built for quick checks on essays, articles, product copy, and drafts."
                : isRemoveDuplicateLines
                  ? "Use Duplicate Line Remover to clean lists, pasted rows, logs, and exports without losing the first occurrence of each unique line."
                  : isTextToBulletPoints
                    ? "Use Text to Bullet Points to turn paragraphs or notes into a cleaner list format that is easier to scan, present, or copy into another workflow."
                    : "Use this tool to process text quickly and copy the result without extra steps."}
        </p>
      </section>
      <ToolContent slug={tool.slug} relatedSlugs={tool.relatedSlugs} />
      <FAQ items={faqItems} />
    </ToolLayout>
  );
}
