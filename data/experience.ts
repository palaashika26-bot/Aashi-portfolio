import type { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "e-learning",
    kind: "education",
    role: "Learning Programming Fundamentals",
    company: "Self-directed",
    location: "Mumbai, India",
    period: "2023 — 2025",
    summary:
      "Started my programming journey by learning programming fundamentals, problem solving, web development, databases, and software development concepts. Built small projects while continuously improving my understanding of software engineering.",
    highlights: [
      "Learned core programming concepts and problem-solving techniques",
      "Built frontend projects using HTML, CSS, and JavaScript",
      "Explored databases, APIs, and basic backend development",
      "Strengthened understanding of software development workflows",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Python", "Git"],
  },
  {
    id: "e-fullstack",
    kind: "freelance",
    role: "Full Stack Development",
    company: "Independent",
    location: "Mumbai, India",
    period: "2025 — Present",
    current: true,
    summary:
      "Focused on building complete full-stack applications using modern technologies while strengthening frontend, backend, database, authentication, deployment, and API development skills. Developed my first freelance project — Elios Wholesale, a B2B logistics dashboard.",
    highlights: [
      "Built full-stack applications with Next.js, React, and TypeScript",
      "Completed a freelance logistics dashboard for a B2B client",
      "Strengthened backend architecture and API design skills",
      "Gained experience with deployment workflows and database design",
    ],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js"],
  },
];
