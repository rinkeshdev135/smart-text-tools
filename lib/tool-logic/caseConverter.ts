export type CaseConversionMode =
  | "uppercase"
  | "lowercase"
  | "sentence"
  | "title"
  | "camel"
  | "snake";

function splitIntoWords(input: string) {
  return input
    .trim()
    .split(/[^a-zA-Z0-9]+/)
    .filter(Boolean);
}

export function toUpperCaseText(input: string) {
  return input.toUpperCase();
}

export function toLowerCaseText(input: string) {
  return input.toLowerCase();
}

export function toSentenceCase(input: string) {
  return input
    .toLowerCase()
    .replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, (match) => match.toUpperCase());
}

export function toTitleCase(input: string) {
  return input.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase());
}

export function toCamelCase(input: string) {
  const words = splitIntoWords(input.toLowerCase());

  if (words.length === 0) {
    return "";
  }

  return words[0] + words.slice(1).map((word) => word[0].toUpperCase() + word.slice(1)).join("");
}

export function toSnakeCase(input: string) {
  return splitIntoWords(input.toLowerCase()).join("_");
}

export function convertCase(input: string, mode: CaseConversionMode) {
  switch (mode) {
    case "uppercase":
      return toUpperCaseText(input);
    case "lowercase":
      return toLowerCaseText(input);
    case "sentence":
      return toSentenceCase(input);
    case "title":
      return toTitleCase(input);
    case "camel":
      return toCamelCase(input);
    case "snake":
      return toSnakeCase(input);
    default:
      return input;
  }
}
