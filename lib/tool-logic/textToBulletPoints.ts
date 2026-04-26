export type SplitMode = "sentence" | "line" | "paragraph";
export type ListStyle = "bullet" | "numbered" | "dash" | "custom";

export type TextToBulletOptions = {
  splitMode: SplitMode;
  listStyle: ListStyle;
  customBullet: string;
  removeEmptyBullets: boolean;
};

export const defaultTextToBulletOptions: TextToBulletOptions = {
  splitMode: "sentence",
  listStyle: "bullet",
  customBullet: "*",
  removeEmptyBullets: true
};

function splitBySentence(input: string) {
  const matches = input.match(/[^.!?]+[.!?]+|[^.!?]+$/g);
  return matches ? matches.map((item) => item.trim()) : [];
}

function splitByLine(input: string) {
  return input.split(/\r?\n/).map((item) => item.trim());
}

function splitByParagraph(input: string) {
  return input.split(/\n\s*\n/).map((item) => item.trim());
}

function getItems(input: string, splitMode: SplitMode) {
  switch (splitMode) {
    case "sentence":
      return splitBySentence(input);
    case "line":
      return splitByLine(input);
    case "paragraph":
      return splitByParagraph(input);
    default:
      return [];
  }
}

function formatListItem(item: string, index: number, options: TextToBulletOptions) {
  switch (options.listStyle) {
    case "numbered":
      return `${index + 1}. ${item}`;
    case "dash":
      return `- ${item}`;
    case "custom":
      return `${options.customBullet || "*"} ${item}`;
    case "bullet":
    default:
      return `* ${item}`;
  }
}

export type TextToBulletResult = {
  result: string;
  itemCount: number;
};

export function convertTextToBulletPoints(
  input: string,
  options: TextToBulletOptions
): TextToBulletResult {
  if (!input.trim()) {
    return {
      result: "",
      itemCount: 0
    };
  }

  const rawItems = getItems(input, options.splitMode);
  const items = options.removeEmptyBullets ? rawItems.filter(Boolean) : rawItems;
  const result = items.map((item, index) => formatListItem(item, index, options)).join("\n");

  return {
    result,
    itemCount: items.length
  };
}
