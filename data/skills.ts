import type { SkillCategory } from "@/types";
import {
  Layout,
  Server,
  Code2,
  Database,
  Wrench,
  Cloud,
} from "lucide-react";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Layout,
    accent: "blue",
    skills: [
      { name: "HTML / CSS", level: 65 },
      { name: "JavaScript", level: 60 },
      { name: "React", level: 50 },
      { name: "Next.js", level: 45 },
      { name: "Tailwind CSS", level: 55 },
      { name: "TypeScript", level: 40 },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    accent: "cyan",
    skills: [
      { name: "Node.js", level: 45 },
      { name: "Python", level: 50 },
      { name: "Flask", level: 40 },
      { name: "REST API design", level: 45 },
      { name: "Authentication", level: 35 },
      { name: "PHP", level: 30 },
    ],
  },
  {
    id: "languages",
    title: "Languages",
    icon: Code2,
    accent: "violet",
    skills: [
      { name: "JavaScript", level: 60 },
      { name: "Python", level: 50 },
      { name: "TypeScript", level: 40 },
      { name: "HTML", level: 65 },
      { name: "CSS", level: 60 },
      { name: "SQL", level: 35 },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    accent: "rose",
    skills: [
      { name: "MongoDB", level: 40 },
      { name: "PostgreSQL", level: 35 },
      { name: "MySQL", level: 35 },
      { name: "SQLite", level: 40 },
      { name: "Firebase", level: 30 },
    ],
  },
  {
    id: "tools",
    title: "Tools & Workflow",
    icon: Wrench,
    accent: "amber",
    skills: [
      { name: "Git / GitHub", level: 55 },
      { name: "VS Code", level: 65 },
      { name: "Postman", level: 45 },
      { name: "Figma", level: 35 },
      { name: "npm / pnpm", level: 50 },
    ],
  },
  {
    id: "cloud",
    title: "Deployment",
    icon: Cloud,
    accent: "emerald",
    skills: [
      { name: "Vercel", level: 50 },
      { name: "Netlify", level: 45 },
      { name: "Render", level: 40 },
      { name: "GitHub Pages", level: 45 },
      { name: "GitHub Actions", level: 30 },
    ],
  },
];
