import type { Project } from "./types";

const NBA_REPO = "https://github.com/temanuel1/nba-recap-mcp";

export const projects: readonly Project[] = [
  {
    title: "NBA Recap MCP",
    context: "MCP Server",
    summary:
      "An MCP server that lets Claude write a recap of a live NBA game from the box score, play-by-play, and fan reactions in Reddit game threads.",
    points: [
      "Reads both teams' fan threads plus r/nba, so the recap gets a neutral view instead of one echo chamber.",
      "Installs with uvx from the GitHub repo. No clone or API keys needed.",
    ],
    stack: ["Python", "FastMCP", "nba_api", "uv"],
    links: [{ label: "GitHub", href: NBA_REPO }],
    config: {
      label: "Claude Desktop config",
      code: `"nba-recap": {
  "command": "uvx",
  "args": ["--from", "git+${NBA_REPO}", "nba-recap-mcp"]
}`,
    },
  },
  {
    title: "FocusrAI",
    context: "Stanford TreeHacks",
    summary:
      "A Next.js app that tracks attention during lectures and uses the Gemini API to summarize the parts you missed.",
    points: ["Reconstructed missed lecture segments with 80–90% accuracy."],
    stack: ["Next.js", "Gemini API"],
    links: [{ label: "GitHub", href: "https://github.com/temanuel1/focusr-ai" }],
  },
  {
    title: "MyDB",
    context: "COMP 432 · in progress",
    summary: "A relational database system I’m implementing in C++ over the semester, on a shared course skeleton.",
    points: [],
    stack: ["C++"],
    links: [],
  },
];
