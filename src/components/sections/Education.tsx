import { courseGroups, priorSchool, rice } from "@/content/education";
import type { CourseGroup, School } from "@/content/types";
import { Section } from "../ui/Section";

function SchoolHeader({ school }: { readonly school: School }) {
  return (
    <div>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-lg font-medium tracking-tight text-ink">{school.name}</h3>
        <p className="shrink-0 font-mono text-[12px] text-muted tabular-nums">{school.graduation}</p>
      </div>
      <p className="mt-1 text-[14.5px] text-ink-soft">
        {school.degree}
        {school.detail ? <span className="text-muted"> · {school.detail}</span> : null}
      </p>
    </div>
  );
}

function CourseCard({ group }: { readonly group: CourseGroup }) {
  return (
    <li className="rounded-xl border border-line bg-surface/60 p-4 transition-colors duration-300 hover:border-line-strong sm:p-5">
      <h5 className="text-[13.5px] font-medium text-ink">{group.theme}</h5>
      <ul className="mt-3.5 space-y-2">
        {group.courses.map((course) => (
          <li key={course.code} className="flex flex-wrap items-baseline gap-x-2 text-[14px] leading-snug">
            <span className="font-mono text-[11.5px] text-accent">{course.code}</span>
            <span className="text-ink-soft">{course.title}</span>
          </li>
        ))}
      </ul>
    </li>
  );
}

export function Education() {
  return (
    <Section id="education" title="Education" index="04">
      <SchoolHeader school={rice} />

      <h4 className="mt-10 font-mono text-[11px] tracking-[0.18em] text-faint uppercase">Selected coursework</h4>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {courseGroups.map((group) => (
          <CourseCard key={group.theme} group={group} />
        ))}
      </ul>

      <div className="mt-12 border-t border-line pt-8">
        <SchoolHeader school={priorSchool} />
      </div>
    </Section>
  );
}
