"use client";

import { profile } from "@/content/profile";
import { navItems } from "@/content/site";
import { useEffect, useRef, useState } from "react";
import { ArrowUpRightIcon } from "../ui/icons";
import { useActiveSection } from "./useActiveSection";

/** "top" (the hero) is observed so no nav item stays highlighted after scrolling back up. */
const SPY_IDS = ["top", ...navItems.map((item) => item.id)];

function ResumePill({ onClick, className = "" }: { readonly onClick?: () => void; readonly className?: string }) {
  return (
    <a
      href={profile.resume.href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group inline-flex items-center gap-1 rounded-full border border-line-strong bg-white/[0.03] px-3.5 py-1.5 text-[13px] text-ink transition-colors hover:border-accent/50 hover:bg-accent-soft ${className}`}
    >
      Resume
      <ArrowUpRightIcon
        width={12}
        height={12}
        className="text-muted transition-transform group-hover:translate-x-px group-hover:-translate-y-px group-hover:text-accent"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export function SiteHeader() {
  const active = useActiveSection(SPY_IDS);
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!menuOpen) return;
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-30 border-b border-line bg-paper/70 backdrop-blur-md backdrop-saturate-150">
      <nav aria-label="Primary" className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2.5 text-[14.5px] font-medium tracking-tight text-ink" onClick={closeMenu}>
          <span aria-hidden="true" className="grid size-6 place-items-center rounded-md border border-line-strong bg-surface font-serif text-[15px] leading-none">
            T
          </span>
          {profile.name}
        </a>

        <ul className="hidden items-center gap-0.5 text-[13.5px] md:flex">
          {navItems.map((item) => {
            const isActive = active === item.id;
            return (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  aria-current={isActive ? "location" : undefined}
                  className={`relative rounded-full px-3 py-1.5 transition-colors duration-200 ${
                    isActive ? "bg-white/[0.06] text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            );
          })}
          <li className="ml-3">
            <ResumePill />
          </li>
        </ul>

        <button
          ref={toggleRef}
          type="button"
          className="-mr-2 rounded-full border border-line px-3 py-1 font-mono text-[12px] text-ink-soft md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </nav>

      <div id="mobile-menu" hidden={!menuOpen} className="border-t border-line bg-paper/95 md:hidden">
        <ul className="mx-auto flex max-w-5xl flex-col px-5 py-3 text-[15px]">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={closeMenu}
                aria-current={active === item.id ? "location" : undefined}
                className={`block py-2.5 ${active === item.id ? "text-ink" : "text-ink-soft"}`}
              >
                {item.label}
              </a>
            </li>
          ))}
          <li className="pt-2 pb-1">
            <ResumePill onClick={closeMenu} />
          </li>
        </ul>
      </div>
    </header>
  );
}
