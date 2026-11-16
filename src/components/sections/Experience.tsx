import { experience } from "@/content/experience";
import type { Highlight, Role } from "@/content/types";
import { MetricText } from "../ui/MetricText";
import { Section } from "../ui/Section";
import { TagList } from "../ui/Tag";

function ordinal(index: number): string {
  return String(index + 1).padStart(2, "0");
}

function HighlightBlock({ item, index }: { readonly item: Highlight; readonly index: number }) {
  return (
    <li className="group relative rounded-r-lg border-l border-line py-1 pl-4 transition-colors duration-300 hover:border-accent/70 sm:pl-5">
      <h4 className="flex items-baseline gap-2.5 text-[15px] font-medium text-ink">
        <span aria-hidden="true" className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
          {ordinal(index)}
        </span>
        {item.title}
      </h4>
      <p className="mt-1.5 text-[15px] leading-[1.7] text-muted">
        <MetricText text={item.body} />
      </p>
    </li>
  );
}

function RoleEntry({ role }: { readonly role: Role }) {
  return (
    <li className="group/role relative pb-14 pl-7 last:pb-0 sm:pl-9" data-reveal>
      {/* Timeline rail + node */}
      <span aria-hidden="true" className="absolute top-2 bottom-0 left-[3.5px] w-px bg-line group-last/role:hidden" />
      <span
        aria-hidden="true"
        className="absolute top-[7px] left-0 size-2 rounded-full border border-line-strong bg-paper ring-4 ring-paper"
      />

      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-medium tracking-tight text-ink">{role.company}</h3>
        <p className="shrink-0 font-mono text-[12px] text-muted tabular-nums">{role.period}</p>
      </div>
      <p className="mt-1 flex flex-wrap items-baseline gap-x-2 text-[14.5px]">
        <span className="text-ink-soft">{role.role}</span>
        <span aria-hidden="true" className="text-faint">·</span>
        <span className="font-mono text-[12px] text-muted">{role.location}</span>
      </p>
      <p className="mt-4 max-w-2xl text-[15px] leading-[1.7] text-ink-soft">
        <MetricText text={role.summary} />
      </p>

      {role.highlights.length > 0 ? (
        <ul className="mt-6 max-w-2xl space-y-5">
          {role.highlights.map((item, index) => (
            <HighlightBlock key={item.title} item={item} index={index} />
          ))}
        </ul>
      ) : null}

      <TagList items={role.stack} label={`${role.company} tech stack`} className="mt-5" />
    </li>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience" index="02" reveal={false}>
      <ol>
        {experience.map((role) => (
          <RoleEntry key={role.company} role={role} />
        ))}
      </ol>
    </Section>
  );
}
