import type { ReactNode } from "react";

type ExternalLinkProps = {
  readonly href: string;
  readonly children: ReactNode;
  readonly className?: string;
};

export function ExternalLink({ href, children, className = "" }: ExternalLinkProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
