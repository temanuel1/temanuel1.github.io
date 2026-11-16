import { profile } from "@/content/profile";
import { ContactLinks } from "../ui/ContactLinks";

function StatusBadge({ text }: { readonly text: string }) {
  return (
    <p className="inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-surface/80 py-1.5 pr-3.5 pl-3 text-[12.5px] leading-snug text-ink-soft backdrop-blur-sm">
      <span className="relative flex size-2 shrink-0" aria-hidden="true">
        <span className="absolute inline-flex size-full rounded-full bg-ok opacity-60 motion-safe:animate-ping" />
        <span className="relative inline-flex size-2 rounded-full bg-ok" />
      </span>
      <span>{text}</span>
    </p>
  );
}

export function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative pt-20 pb-20 sm:pt-32 sm:pb-28">
      <StatusBadge text={profile.status} />
      <h1 className="mt-8 font-serif text-[52px] leading-[0.95] tracking-[-0.02em] text-ink sm:text-7xl">
        {profile.name}
      </h1>
      <p className="mt-7 max-w-2xl text-lg leading-relaxed text-muted sm:text-[21px] sm:leading-[1.6]">
        {profile.intro}
      </p>
      <ContactLinks className="mt-10" />
    </section>
  );
}
