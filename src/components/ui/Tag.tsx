type TagListProps = {
  readonly items: readonly string[];
  readonly className?: string;
  readonly label?: string;
};

export function Tag({ children }: { readonly children: string }) {
  return (
    <span className="inline-flex items-center rounded-md border border-line bg-white/[0.025] px-2 py-0.5 font-mono text-[11.5px] leading-5 text-muted">
      {children}
    </span>
  );
}

/** Compact monospace pills for tech stacks and skills. */
export function TagList({ items, className = "", label }: TagListProps) {
  return (
    <ul aria-label={label} className={`flex flex-wrap gap-1.5 ${className}`}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
