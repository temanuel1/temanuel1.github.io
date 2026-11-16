import type { Profile } from "./types";

export const profile: Profile = {
  name: "Tyler Emanuel",
  intro:
    "I’m a software engineer and CS student at Rice, graduating in May 2027. I build full-stack applications and LLM-based systems, most recently as a software engineering intern at Turnstile.",
  status: "Looking for new-grad roles starting in 2027 — New York, San Francisco, or remote.",
  location: "Houston, TX",
  email: "tyleremanuel38@gmail.com",
  github: { label: "GitHub", href: "https://github.com/temanuel1" },
  linkedin: { label: "LinkedIn", href: "https://www.linkedin.com/in/tylerdemanuel" },
  resume: { href: "/resume.pdf", downloadName: "Tyler-Emanuel-Resume.pdf" },
};

export const about: readonly string[] = [
  "I started in frontend at W. R. Berkley and Principal, then moved into LLM and agent systems at yAI and Turnstile.",
  "What I enjoy most now is the problem solving, especially the parts of system design that matter more with AI: how to orchestrate agents, and where a model actually belongs in a workflow. I’d rather bring AI in only where it’s necessary and genuinely helpful, and then make it dependable.",
  "My business minor shapes how I think about this too. I like learning what integrating AI concretely gets a company, because it has to be useful and justify itself. I think benchmarks are where this is heading, since they’re how you actually see whether AI is helping. That’s what draws me to agent evaluation and frameworks like Harbor.",
];
