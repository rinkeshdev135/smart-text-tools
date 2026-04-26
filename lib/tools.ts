export type ToolCategory = "clean" | "convert" | "analyze" | "format";

export type ToolDefinition = {
  slug: string;
  name: string;
  shortName: string;
  keyword: string;
  description: string;
  phase: 1 | 2;
  relatedSlugs: string[];
  icon: string;
  category: ToolCategory;
};

export const categoryConfig: Record<ToolCategory, { label: string; color: string; bgLight: string; bgDark: string }> = {
  clean: { label: "Clean", color: "text-emerald-700 dark:text-emerald-300", bgLight: "bg-emerald-50", bgDark: "dark:bg-emerald-500/10" },
  convert: { label: "Convert", color: "text-violet-700 dark:text-violet-300", bgLight: "bg-violet-50", bgDark: "dark:bg-violet-500/10" },
  analyze: { label: "Analyze", color: "text-amber-700 dark:text-amber-300", bgLight: "bg-amber-50", bgDark: "dark:bg-amber-500/10" },
  format: { label: "Format", color: "text-sky-700 dark:text-sky-300", bgLight: "bg-sky-50", bgDark: "dark:bg-sky-500/10" }
};

export const tools: ToolDefinition[] = [
  {
    slug: "text-cleaner",
    name: "Text Cleaner",
    shortName: "Clean Text",
    keyword: "clean text online free",
    description: "Remove spacing noise, line breaks, special characters, and other formatting clutter.",
    phase: 1,
    relatedSlugs: ["case-converter", "remove-duplicate-lines", "text-to-bullet-points"],
    icon: "sparkles",
    category: "clean"
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    shortName: "Change Case",
    keyword: "convert text to uppercase online",
    description: "Switch text between uppercase, lowercase, sentence case, title case, camelCase, and snake_case.",
    phase: 1,
    relatedSlugs: ["text-cleaner", "word-counter", "text-to-bullet-points"],
    icon: "textAa",
    category: "convert"
  },
  {
    slug: "word-counter",
    name: "Word Counter",
    shortName: "Word Count",
    keyword: "word counter online",
    description: "Count words, characters, sentences, paragraphs, reading time, and keyword density in real time.",
    phase: 1,
    relatedSlugs: ["text-cleaner", "case-converter", "remove-duplicate-lines"],
    icon: "hash",
    category: "analyze"
  },
  {
    slug: "remove-duplicate-lines",
    name: "Duplicate Line Remover",
    shortName: "Remove Dupes",
    keyword: "remove duplicate lines online",
    description: "Remove repeated lines instantly while keeping the first occurrence and tracking removed totals.",
    phase: 1,
    relatedSlugs: ["text-cleaner", "word-counter", "text-to-bullet-points"],
    icon: "layers",
    category: "clean"
  },
  {
    slug: "text-to-bullet-points",
    name: "Text to Bullet Points",
    shortName: "Bullet List",
    keyword: "convert text to bullet points",
    description: "Turn paragraphs into bullets, numbered lists, or custom list styles in one step.",
    phase: 1,
    relatedSlugs: ["text-cleaner", "case-converter", "remove-duplicate-lines"],
    icon: "listBullet",
    category: "format"
  }
];

export const getToolBySlug = (slug: string) => tools.find((tool) => tool.slug === slug);
