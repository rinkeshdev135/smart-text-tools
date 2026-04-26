export type TextCleanerOptions = {
  removeExtraSpaces: boolean;
  removeLineBreaks: boolean;
  removeSpecialCharacters: boolean;
  trimWhitespace: boolean;
  stripHtmlTags: boolean;
};

export const defaultTextCleanerOptions: TextCleanerOptions = {
  removeExtraSpaces: true,
  removeLineBreaks: false,
  removeSpecialCharacters: false,
  trimWhitespace: true,
  stripHtmlTags: false
};

export type TextCleanerStats = {
  originalLength: number;
  cleanedLength: number;
  charactersRemoved: number;
};

export type TextCleanerResult = {
  result: string;
  stats: TextCleanerStats;
};

export function cleanText(input: string, options: TextCleanerOptions): TextCleanerResult {
  let result = input;

  if (!result) {
    return {
      result: "",
      stats: {
        originalLength: 0,
        cleanedLength: 0,
        charactersRemoved: 0
      }
    };
  }

  if (options.stripHtmlTags) {
    result = result.replace(/<[^>]*>/g, " ");
  }

  if (options.removeLineBreaks) {
    result = result.replace(/\r?\n+/g, " ");
  }

  if (options.removeSpecialCharacters) {
    result = result.replace(/[^a-zA-Z0-9\s]/g, "");
  }

  if (options.removeExtraSpaces) {
    result = result.replace(/[^\S\r\n]+/g, " ");
  }

  if (options.trimWhitespace) {
    result = result.trim();
  }

  return {
    result,
    stats: {
      originalLength: input.length,
      cleanedLength: result.length,
      charactersRemoved: Math.max(0, input.length - result.length)
    }
  };
}
