import { tokenizeJson, type TokenKind } from "@/lib/highlightJson";
import { CopyButton } from "./CopyButton";

const TOKEN_CLASS: Record<TokenKind, string> = {
  key: "text-ink",
  string: "text-accent",
  punctuation: "text-faint",
  plain: "text-muted",
};

type CodeBlockProps = {
  readonly code: string;
  readonly caption: string;
};

/** Dark, lightly syntax-colored JSON snippet with a copy action. */
export function CodeBlock({ code, caption }: CodeBlockProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-[#08080a]">
      <div className="flex items-center justify-between border-b border-line px-3.5 py-2">
        <span className="font-mono text-[11px] text-faint">{caption}</span>
        <CopyButton
          value={code}
          label="Copy config to clipboard"
          text="Copy"
          className="rounded-md px-1.5 py-0.5 font-mono text-[11px] text-muted hover:bg-white/[0.05] hover:text-ink"
        />
      </div>
      <pre className="overflow-x-auto px-4 py-3.5 font-mono text-[12.5px] leading-relaxed">
        <code>
          {tokenizeJson(code).map((token, index) => (
            <span key={index} className={TOKEN_CLASS[token.kind]}>
              {token.text}
            </span>
          ))}
        </code>
      </pre>
    </div>
  );
}
