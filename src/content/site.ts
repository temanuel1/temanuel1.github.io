import type { NavItem } from "./types";

const LOCAL_URL = "http://localhost:3000";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return LOCAL_URL;
}

export const site = {
  url: resolveSiteUrl(),
  title: "Tyler Emanuel — Software Engineer",
  shortTitle: "Tyler Emanuel",
  description:
    "Software engineer and Rice CS student (May 2027). Full-stack applications and LLM-based systems; most recently at Turnstile.",
  keywords: [
    "Tyler Emanuel",
    "software engineer",
    "AI engineer",
    "new grad",
    "Rice University",
    "LLM",
    "agents",
    "MCP",
    "full-stack",
  ],
} as const;

export const navItems: readonly NavItem[] = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
];
