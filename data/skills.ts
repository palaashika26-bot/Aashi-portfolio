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
      { name: "HTML", level: "comfortable" },
      { name: "CSS", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "React", level: "familiar" },
      { name: "Next.js", level: "familiar" },
      { name: "Tailwind CSS", level: "comfortable" },
      { name: "TypeScript", level: "familiar" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: Server,
    accent: "cyan",
    skills: [
      { name: "Python", level: "comfortable" },
      { name: "Flask", level: "familiar" },
      { name: "REST APIs", level: "familiar" },
      { name: "JWT Authentication", level: "comfortable" },
      { name: "Node.js", level: "learning" },
      { name: "Express.js", level: "learning" },
    ],
  },
  {
    id: "languages",
    title: "Programming Languages",
    icon: Code2,
    accent: "violet",
    skills: [
      { name: "Python", level: "comfortable" },
      { name: "JavaScript", level: "comfortable" },
      { name: "TypeScript", level: "familiar" },
      { name: "C", level: "familiar" },
      { name: "C++", level: "comfortable" },
      { name: "SQL", level: "comfortable" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    accent: "rose",
    skills: [
      { name: "MySQL", level: "comfortable" },
      { name: "PostgreSQL", level: "familiar" },
      { name: "Supabase", level: "familiar" },
      { name: "SQLite", level: "familiar" },
    ],
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    accent: "amber",
    skills: [
      { name: "Git", level: "comfortable" },
      { name: "GitHub", level: "comfortable" },
      { name: "VS Code", level: "comfortable" },
      { name: "Postman", level: "familiar" },
      { name: "Prisma ORM", level: "familiar" },
      { name: "npm", level: "comfortable" },
    ],
  },
  {
    id: "hosting",
    title: "Deployment & Hosting",
    icon: Cloud,
    accent: "emerald",
    skills: [
      { name: "Vercel", level: "comfortable" },
      { name: "Render", level: "comfortable" },
      { name: "GitHub Pages", level: "comfortable" },
      { name: "GitHub Actions", level: "comfortable" },
      { name: "Hostinger", level: "comfortable" },
    ],
  },
];

export const learningTopics: string[] = [
  "Node.js",
  "Express.js",
  "Next.js Architecture",
  "Software Architecture",
  "Performance Optimization",
  "AI Integration",
  "System Design",
];
