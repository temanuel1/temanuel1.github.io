import type { Role } from "./types";

export const experience: readonly Role[] = [
  {
    company: "Turnstile",
    role: "Software Engineer Intern",
    location: "San Francisco, CA (Remote)",
    period: "May – Nov 2026",
    summary: "Series A startup building quote-to-cash software for B2B SaaS companies.",
    highlights: [
      {
        title: "Pricing terms to billing rules",
        body: "Turned natural-language pricing terms into schema-validated billing rules, with a self-repair loop that rejects invalid configurations before they can affect an invoice.",
      },
      {
        title: "Correctness harness",
        body: "Verified generated rules against 75+ real-world SaaS pricing models (Snowflake, Stripe, AWS Lambda, Anthropic), down to penny-exact invoice totals.",
      },
      {
        title: "Regression detection",
        body: "Naive pass/fail flagged ~41% of healthy batches. I replaced it with consistency scoring that separates real regressions from LLM noise.",
      },
      {
        title: "Support automation",
        body: "Owned support automation from design to production: an API, a hosted MCP tool, and an AI agent in one idempotent pipeline, where every answer cites its exact source.",
      },
    ],
    stack: ["LLM pipelines", "PostgreSQL", "MCP", "REST APIs"],
  },
  {
    company: "yAI",
    role: "Software Engineer",
    location: "New York, NY (Hybrid)",
    period: "Nov 2025 – Jan 2026",
    summary: "Five-person startup building AI tools for equity research analysts.",
    highlights: [
      {
        title: "Agent orchestration",
        body: "Built the layer that pulls financial data providers into multi-step workflows, running them in parallel and returning partial results when one fails.",
      },
      {
        title: "Customer feedback",
        body: "Turned beta-customer feedback into shipped features, including a conversational interface with RAG-based refinement.",
      },
    ],
    stack: ["Agent orchestration", "RAG"],
  },
  {
    company: "Principal Financial Group",
    role: "Software Engineer Intern",
    location: "Des Moines, IA",
    period: "May – Aug 2025",
    summary: "Built React/TypeScript components for the Principal Design System, used by 4,000+ engineers across dozens of customer-facing apps.",
    highlights: [],
    stack: ["React", "TypeScript"],
  },
  {
    company: "W. R. Berkley",
    role: "Front-End Software Developer Intern",
    location: "Urbandale, IA",
    period: "May – Aug 2024",
    summary: "Contributed 15% of sprint output on a 10-person team shipping a React + GraphQL insurance quoting app.",
    highlights: [],
    stack: ["React", "GraphQL"],
  },
];
