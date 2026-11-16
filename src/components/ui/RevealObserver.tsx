"use client";

import { useEffect } from "react";

const ARMED_ATTR = "data-reveal-armed";
const REVEALED_ATTR = "data-revealed";

function isInViewport(el: Element): boolean {
  const rect = el.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

/**
 * Fades `[data-reveal]` elements in as they scroll into view.
 * Content is fully visible without JS or with reduced motion; elements already on screen
 * are marked revealed before arming, so nothing above the fold ever flickers.
 */
export function RevealObserver() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion || typeof IntersectionObserver === "undefined") return;

    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    targets.filter(isInViewport).forEach((el) => el.setAttribute(REVEALED_ATTR, ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries
          .filter((entry) => entry.isIntersecting)
          .forEach((entry) => {
            entry.target.setAttribute(REVEALED_ATTR, "");
            observer.unobserve(entry.target);
          });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );

    targets.filter((el) => !el.hasAttribute(REVEALED_ATTR)).forEach((el) => observer.observe(el));
    document.documentElement.setAttribute(ARMED_ATTR, "");

    return () => {
      observer.disconnect();
      document.documentElement.removeAttribute(ARMED_ATTR);
    };
  }, []);

  return null;
}
