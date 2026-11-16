export type TokenKind = "key" | "string" | "punctuation" | "plain";

export type CodeToken = {
  readonly text: string;
  readonly kind: TokenKind;
};

const TOKEN_PATTERN = /("(?:[^"\\]|\\.)*")(?=\s*:)|("(?:[^"\\]|\\.)*")|([{}[\],:])/g;

function kindOf(match: RegExpExecArray): TokenKind {
  if (match[1] !== undefined) return "key";
  if (match[2] !== undefined) return "string";
  return "punctuation";
}

/** Tokenize a JSON-like snippet for lightweight syntax coloring. Concatenating tokens yields the input. */
export function tokenizeJson(code: string): readonly CodeToken[] {
  const tokens: CodeToken[] = [];
  let cursor = 0;
  for (const match of code.matchAll(TOKEN_PATTERN)) {
    const start = match.index ?? 0;
    if (start > cursor) tokens.push({ text: code.slice(cursor, start), kind: "plain" });
    tokens.push({ text: match[0], kind: kindOf(match as RegExpExecArray) });
    cursor = start + match[0].length;
  }
  if (cursor < code.length) tokens.push({ text: code.slice(cursor), kind: "plain" });
  return tokens;
}
