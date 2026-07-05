export type ParsedFrontMatter<TData extends Record<string, unknown> = Record<string, unknown>> = {
  data: TData;
  content: string;
};

export function parseFrontMatter<TData extends Record<string, unknown> = Record<string, unknown>>(
  source: string
): ParsedFrontMatter<TData> {
  const match = source.match(/^---\s*\r?\n([\s\S]*?)\r?\n---\s*(?:\r?\n|$)([\s\S]*)$/);

  if (!match) {
    return { data: {} as TData, content: source };
  }

  const [, frontMatter, content] = match;
  const data = {} as TData;

  for (const rawLine of frontMatter.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const separatorIndex = line.indexOf(":");
    if (separatorIndex === -1) continue;

    const key = line.slice(0, separatorIndex).trim();
    let value = line.slice(separatorIndex + 1).trim();

    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1);
    } else if (value === "true") {
      value = true as unknown as string;
    } else if (value === "false") {
      value = false as unknown as string;
    }

    (data as Record<string, unknown>)[key] = value;
  }

  return {
    data,
    content: content.replace(/^\r?\n/, ""),
  };
}
