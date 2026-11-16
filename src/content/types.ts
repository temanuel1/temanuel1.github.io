export type Link = {
  readonly label: string;
  readonly href: string;
};

export type Profile = {
  readonly name: string;
  readonly intro: string;
  readonly status: string;
  readonly location: string;
  readonly email: string;
  readonly github: Link;
  readonly linkedin: Link;
  readonly resume: {
    readonly href: string;
    readonly downloadName: string;
  };
};

export type Highlight = {
  readonly title: string;
  readonly body: string;
};

export type Role = {
  readonly company: string;
  readonly role: string;
  readonly location: string;
  readonly period: string;
  readonly summary: string;
  /** Detailed roles list accomplishments; compact roles leave this empty. */
  readonly highlights: readonly Highlight[];
  readonly stack: readonly string[];
};

export type Project = {
  readonly title: string;
  readonly context?: string;
  readonly summary: string;
  readonly points: readonly string[];
  readonly stack: readonly string[];
  readonly links: readonly Link[];
  readonly config?: { readonly label: string; readonly code: string };
};

export type Course = {
  readonly code: string;
  readonly title: string;
};

export type CourseGroup = {
  readonly theme: string;
  readonly courses: readonly Course[];
};

export type School = {
  readonly name: string;
  readonly degree: string;
  readonly detail?: string;
  readonly location: string;
  readonly graduation: string;
};

export type SkillGroup = {
  readonly label: string;
  readonly items: readonly string[];
};

export type NavItem = {
  readonly id: string;
  readonly label: string;
};
