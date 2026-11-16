import { about } from "@/content/profile";
import { skills } from "@/content/skills";
import { Section } from "../ui/Section";
import { TagList } from "../ui/Tag";

export function About() {
  return (
    <Section id="about" title="About" index="01">
      <div className="max-w-2xl space-y-5 text-[16px] leading-[1.75] text-ink-soft">
        {about.map((paragraph) => (
          <p key={paragraph.slice(0, 24)}>{paragraph}</p>
        ))}
      </div>

      <h3 className="mt-14 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Skills</h3>
      <dl className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-surface/50">
        {skills.map((group) => (
          <div key={group.label} className="gap-4 px-4 py-3.5 sm:grid sm:grid-cols-[9.5rem_1fr] sm:px-5">
            <dt className="pt-0.5 text-[13.5px] text-muted">{group.label}</dt>
            <dd className="mt-2 sm:mt-0">
              <TagList items={group.items} label={group.label} />
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
