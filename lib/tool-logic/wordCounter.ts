export type KeywordDensityItem = {
  word: string;
  count: number;
  density: number;
};

export type WordCountStats = {
  words: number;
  charactersWithSpaces: number;
  charactersWithoutSpaces: number;
  sentences: number;
  paragraphs: number;
  readingTimeLabel: string;
  topKeywords: KeywordDensityItem[];
};

const STOP_WORDS = new Set([
  "a",
  "an",
  "and",
  "are",
  "as",
  "at",
  "be",
  "but",
  "by",
  "for",
  "from",
  "if",
  "in",
  "into",
  "is",
  "it",
  "no",
  "not",
  "of",
  "on",
  "or",
  "such",
  "that",
  "the",
  "their",
  "then",
  "there",
  "these",
  "they",
  "this",
  "to",
  "was",
  "will",
  "with"
]);

function getWords(input: string) {
  return input.trim() ? input.trim().split(/\s+/).filter(Boolean) : [];
}

function getSentenceCount(input: string) {
  const matches = input.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return matches ? matches.map((item) => item.trim()).filter(Boolean).length : 0;
}

function getParagraphCount(input: string) {
  return input.trim() ? input.trim().split(/\n\s*\n/).filter((item) => item.trim()).length : 0;
}

function getReadingTimeLabel(wordCount: number) {
  if (wordCount === 0) {
    return "0 sec";
  }

  const totalSeconds = Math.round((wordCount / 200) * 60);

  if (totalSeconds < 60) {
    return `${Math.max(1, totalSeconds)} sec`;
  }

  const totalMinutes = Math.round(wordCount / 200);
  return `${Math.max(1, totalMinutes)} min`;
}

function getKeywordDensity(words: string[]): KeywordDensityItem[] {
  const normalizedWords = words
    .map((word) => word.toLowerCase().replace(/[^a-z0-9]/g, ""))
    .filter((word) => word.length > 1 && !STOP_WORDS.has(word));

  const total = normalizedWords.length;

  if (total === 0) {
    return [];
  }

  const counts = normalizedWords.reduce<Map<string, number>>((map, word) => {
    map.set(word, (map.get(word) ?? 0) + 1);
    return map;
  }, new Map());

  return Array.from(counts.entries())
    .sort((a, b) => {
      if (b[1] === a[1]) {
        return a[0].localeCompare(b[0]);
      }

      return b[1] - a[1];
    })
    .slice(0, 5)
    .map(([word, count]) => ({
      word,
      count,
      density: Number(((count / total) * 100).toFixed(1))
    }));
}

export function analyzeText(input: string): WordCountStats {
  const words = getWords(input);

  return {
    words: words.length,
    charactersWithSpaces: input.length,
    charactersWithoutSpaces: input.replace(/\s/g, "").length,
    sentences: getSentenceCount(input),
    paragraphs: getParagraphCount(input),
    readingTimeLabel: getReadingTimeLabel(words.length),
    topKeywords: getKeywordDensity(words)
  };
}
