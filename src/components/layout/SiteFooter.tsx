import { profile } from "@/content/profile";
import { ContactLinks } from "../ui/ContactLinks";
import { CopyButton } from "../ui/CopyButton";

export function SiteFooter() {
  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-20 border-t border-line">
      <div className="mx-auto max-w-5xl px-5 py-16 sm:px-8 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[11rem_1fr] lg:gap-14">
          <div>
            <p aria-hidden="true" className="mb-2 font-mono text-[11px] tracking-[0.2em] text-faint">
              05
            </p>
            <h2 id="contact-title" className="font-serif text-[28px] leading-none tracking-tight text-ink">
              Contact
            </h2>
          </div>
          <div
            data-reveal
            className="relative overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)] sm:p-8"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-24 right-0 h-48 w-72 rounded-full bg-accent/[0.07] blur-3xl"
            />
            <p className="relative text-[15px] leading-relaxed text-ink-soft">Email is the best way to reach me:</p>
            <div className="relative mt-3 flex flex-wrap items-center gap-2">
              <a
                href={`mailto:${profile.email}`}
                className="link font-mono text-[15px] text-ink sm:text-[17px]"
              >
                {profile.email}
              </a>
              <CopyButton
                value={profile.email}
                label="Copy email address"
                text="Copy"
                className="rounded-full border border-line px-2.5 py-1 font-mono text-[11.5px] text-muted hover:border-line-strong hover:text-ink"
              />
            </div>
            <ContactLinks className="relative mt-7 border-t border-line pt-6" showEmail={false} />
          </div>
        </div>
      </div>
    </footer>
  );
}
