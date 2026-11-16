import { profile } from "@/content/profile";
import type { ComponentType, SVGProps } from "react";
import { CopyButton } from "./CopyButton";
import { ExternalLink } from "./ExternalLink";
import { ArrowUpRightIcon, FileIcon, GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const PILL =
  "group inline-flex h-9 items-center gap-2 rounded-full border border-line bg-surface px-3.5 text-[13.5px] text-ink-soft shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-[color,border-color,background-color,transform] duration-200 hover:border-line-strong hover:bg-surface-raised hover:text-ink active:translate-y-px";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

type ExternalPillProps = {
  readonly href: string;
  readonly label: string;
  readonly Icon: IconType;
};

function ExternalPill({ href, label, Icon }: ExternalPillProps) {
  return (
    <ExternalLink href={href} className={PILL}>
      <Icon width={15} height={15} className="text-muted transition-colors group-hover:text-ink" />
      {label}
      <ArrowUpRightIcon
        width={12}
        height={12}
        className="-ml-0.5 text-faint transition-transform duration-200 group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-ink"
      />
    </ExternalLink>
  );
}

/** Split pill: mailto link plus a one-click copy action. */
export function EmailPill() {
  return (
    <div className="inline-flex h-9 items-stretch overflow-hidden rounded-full border border-line bg-surface text-[13.5px] shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] transition-colors hover:border-line-strong">
      <a
        href={`mailto:${profile.email}`}
        className="group inline-flex items-center gap-2 pr-3 pl-3.5 text-ink-soft transition-colors hover:bg-surface-raised hover:text-ink"
      >
        <MailIcon width={15} height={15} className="text-muted transition-colors group-hover:text-ink" />
        Email
      </a>
      <CopyButton
        value={profile.email}
        label="Copy email address"
        className="border-l border-line px-3 text-muted hover:bg-surface-raised hover:text-ink"
      />
    </div>
  );
}

type ContactLinksProps = {
  readonly className?: string;
  readonly showEmail?: boolean;
};

/** Email · GitHub · LinkedIn · Resume — shared by the intro and the footer. */
export function ContactLinks({ className = "", showEmail = true }: ContactLinksProps) {
  return (
    <ul className={`flex flex-wrap gap-2.5 ${className}`}>
      {showEmail ? (
        <li>
          <EmailPill />
        </li>
      ) : null}
      <li>
        <ExternalPill href={profile.github.href} label={profile.github.label} Icon={GitHubIcon} />
      </li>
      <li>
        <ExternalPill href={profile.linkedin.href} label={profile.linkedin.label} Icon={LinkedInIcon} />
      </li>
      <li>
        <ExternalPill href={profile.resume.href} label="Resume" Icon={FileIcon} />
      </li>
    </ul>
  );
}
