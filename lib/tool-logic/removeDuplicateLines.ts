export type RemoveDuplicateLineOptions = {
  caseSensitive: boolean;
  trimBeforeComparing: boolean;
};

export type RemoveDuplicateLineResult = {
  result: string;
  duplicateLinesRemoved: number;
  totalLines: number;
  uniqueLines: number;
};

export const defaultRemoveDuplicateLineOptions: RemoveDuplicateLineOptions = {
  caseSensitive: false,
  trimBeforeComparing: true
};

function normalizeLine(line: string, options: RemoveDuplicateLineOptions) {
  const trimmed = options.trimBeforeComparing ? line.trim() : line;
  return options.caseSensitive ? trimmed : trimmed.toLowerCase();
}

export function removeDuplicateLines(
  input: string,
  options: RemoveDuplicateLineOptions
): RemoveDuplicateLineResult {
  if (!input) {
    return {
      result: "",
      duplicateLinesRemoved: 0,
      totalLines: 0,
      uniqueLines: 0
    };
  }

  const lines = input.split(/\r?\n/);
  const seen = new Set<string>();
  const uniqueLines: string[] = [];
  let duplicateLinesRemoved = 0;

  for (const line of lines) {
    const normalized = normalizeLine(line, options);

    if (seen.has(normalized)) {
      duplicateLinesRemoved += 1;
      continue;
    }

    seen.add(normalized);
    uniqueLines.push(line);
  }

  return {
    result: uniqueLines.join("\n"),
    duplicateLinesRemoved,
    totalLines: lines.length,
    uniqueLines: uniqueLines.length
  };
}
