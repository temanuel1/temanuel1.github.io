import type { CourseGroup, School } from "./types";

export const rice: School = {
  name: "Rice University",
  degree: "B.S. Computer Science",
  detail: "Minor in Business",
  location: "Houston, TX",
  graduation: "May 2027",
};

export const priorSchool: School = {
  name: "Des Moines Area Community College",
  degree: "A.S. and A.A.",
  detail: "Completed during high school, GPA 3.92",
  location: "Ankeny, IA",
  graduation: "May 2023",
};

export const courseGroups: readonly CourseGroup[] = [
  {
    theme: "Systems and networks",
    courses: [
      { code: "COMP 321", title: "Computer Systems" },
      { code: "COMP 429", title: "Computer Networks" },
      { code: "COMP 222", title: "Computer Organization" },
    ],
  },
  {
    theme: "Concurrency and distributed systems",
    courses: [
      { code: "COMP 318", title: "Concurrent Program Design" },
      { code: "COMP 413", title: "Distributed Program Construction" },
    ],
  },
  {
    theme: "Data",
    courses: [
      { code: "COMP 432", title: "Database System Implementation" },
      { code: "STAT 315", title: "Statistics for Data Science" },
    ],
  },
  {
    theme: "AI and theory",
    courses: [
      { code: "COMP 440", title: "Artificial Intelligence" },
      { code: "COMP 382", title: "Reasoning About Algorithms" },
      { code: "MATH 355", title: "Linear Algebra" },
    ],
  },
];
