import type { SkillGroup } from "./types";

export const skills: readonly SkillGroup[] = [
  {
    label: "AI & agents",
    items: ["Agent benchmarking & evals (Harbor)", "Agent orchestration", "MCP servers", "RAG", "Anthropic SDK"],
  },
  {
    label: "Languages",
    items: ["Python", "TypeScript", "SQL", "Go", "C++"],
  },
  {
    label: "Web & data",
    items: ["React", "Next.js", "Node.js", "FastAPI", "PostgreSQL"],
  },
];
