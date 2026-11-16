import type { ReactNode } from "react";

type SectionProps = {
  readonly id: string;
  readonly title: string;
  /** Decorative ordinal shown beside the title, e.g. "01". */
  readonly index?: string;
  /** Set false when children reveal individually (avoids nested fades). */
  readonly reveal?: boolean;
  readonly children: ReactNode;
};

/** Sticky title in a narrow left column on large screens; stacked above content on small. */
export function Section({ id, title, index, reveal = true, children }: SectionProps) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-20 border-t border-line py-16 sm:py-24">
      <div className="grid gap-8 lg:grid-cols-[11rem_1fr] lg:gap-14">
        <div className="lg:sticky lg:top-24 lg:self-start">
          {index ? (
            <p aria-hidden="true" className="mb-2 font-mono text-[11px] tracking-[0.2em] text-faint">
              {index}
            </p>
          ) : null}
          <h2 id={`${id}-title`} className="font-serif text-[28px] leading-none tracking-tight text-ink">
            {title}
          </h2>
        </div>
        <div className="min-w-0" data-reveal={reveal ? "" : undefined}>
          {children}
        </div>
      </div>
    </section>
  );
}
