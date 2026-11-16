import { projects } from "@/content/projects";
import type { Project } from "@/content/types";
import { CodeBlock } from "../ui/CodeBlock";
import { ExternalLink } from "../ui/ExternalLink";
import { ArrowUpRightIcon, ChevronRightIcon, GitHubIcon } from "../ui/icons";
import { MetricText } from "../ui/MetricText";
import { Section } from "../ui/Section";
import { TagList } from "../ui/Tag";

const IN_PROGRESS = /in progress/i;

/** "COMP 432 · in progress" → ["COMP 432", "in progress"] */
function contextBadges(context: string | undefined): readonly string[] {
  return context ? context.split("·").map((part) => part.trim()).filter(Boolean) : [];
}

function Badge({ text }: { readonly text: string }) {
  const isStatus = IN_PROGRESS.test(text);
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full border px-2 py-0.5 font-mono text-[10.5px] tracking-wider uppercase ${
        isStatus ? "border-accent/30 bg-accent-soft text-accent" : "border-line bg-white/[0.03] text-muted"
      }`}
    >
      {isStatus ? <span aria-hidden="true" className="size-1.5 rounded-full bg-accent motion-safe:animate-pulse" /> : null}
      {text}
    </span>
  );
}

function ProjectLinks({ project }: { readonly project: Project }) {
  if (project.links.length === 0) return null;
  return (
    <div className="flex shrink-0 gap-2">
      {project.links.map((link) => (
        <ExternalLink
          key={link.href}
          href={link.href}
          className="group/link inline-flex h-8 items-center gap-1.5 rounded-full border border-line bg-paper/60 px-3 text-[12.5px] text-ink-soft transition-colors hover:border-accent/50 hover:text-ink"
        >
          {link.label === "GitHub" ? <GitHubIcon width={14} height={14} /> : null}
          {link.label}
          <ArrowUpRightIcon
            width={12}
            height={12}
            className="text-faint transition-transform group-hover/link:translate-x-px group-hover/link:-translate-y-px group-hover/link:text-accent"
          />
        </ExternalLink>
      ))}
    </div>
  );
}

function ConfigDisclosure({ config }: { readonly config: NonNullable<Project["config"]> }) {
  return (
    <details className="group/details mt-6">
      <summary className="inline-flex cursor-pointer items-center gap-1.5 rounded-md text-[13px] text-muted transition-colors select-none hover:text-ink">
        <ChevronRightIcon
          width={14}
          height={14}
          className="transition-transform duration-200 group-open/details:rotate-90"
        />
        {config.label}
      </summary>
      <div className="mt-3">
        <CodeBlock code={config.code} caption="claude_desktop_config.json" />
      </div>
    </details>
  );
}

function ProjectCard({ project }: { readonly project: Project }) {
  const badges = contextBadges(project.context);
  return (
    <li
      data-reveal
      className="rounded-2xl border border-line bg-surface/70 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)] transition-colors duration-300 hover:border-line-strong hover:bg-surface sm:p-7"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h3 className="text-xl font-medium tracking-tight text-ink">{project.title}</h3>
          {badges.length > 0 ? (
            <div className="mt-2.5 flex flex-wrap gap-1.5">
              {badges.map((badge) => (
                <Badge key={badge} text={badge} />
              ))}
            </div>
          ) : null}
        </div>
        <ProjectLinks project={project} />
      </div>

      <p className="mt-5 text-[15px] leading-[1.7] text-ink-soft">{project.summary}</p>

      {project.points.length > 0 ? (
        <ul className="mt-4 space-y-2.5 text-[14.5px] leading-[1.65] text-muted">
          {project.points.map((point) => (
            <li key={point} className="relative pl-5">
              <span aria-hidden="true" className="absolute top-[0.7em] left-0 h-px w-2.5 bg-line-strong" />
              <MetricText text={point} />
            </li>
          ))}
        </ul>
      ) : null}

      {project.config ? <ConfigDisclosure config={project.config} /> : null}

      <TagList items={project.stack} label={`${project.title} tech stack`} className="mt-6 border-t border-line pt-5" />
    </li>
  );
}

export function Projects() {
  return (
    <Section id="projects" title="Projects" index="03" reveal={false}>
      <ul className="space-y-4">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </ul>
    </Section>
  );
}
