import type { LucideIcon } from "lucide-react";

export type ProjectAccent =
  | "blue"
  | "violet"
  | "cyan"
  | "amber"
  | "rose"
  | "emerald";

export interface Project {
  id: string;
  slug: string;
  year: string;
  title: string;
  tagline: string;
  overview: string;
  features: string[];
  challenges: string[];
  tech: string[];
  accent: ProjectAccent;
  cover: string;
  gallery: string[];
  role: string;
  duration: string;
  featured?: boolean;
  status?: string;
  links?: {
    live?: string;
    github?: string;
    caseStudy?: string;
  };
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: LucideIcon;
  accent: ProjectAccent;
  skills: { name: string; level: number }[];
}

export interface ExperienceItem {
  id: string;
  kind: "work" | "internship" | "freelance" | "education";
  role: string;
  company: string;
  location: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tech?: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  year: string;
  credentialUrl?: string;
  accent: ProjectAccent;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
}

export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface NavLink {
  id: string;
  label: string;
  href: string;
}

export interface Social {
  label: string;
  href: string;
  icon: LucideIcon;
}
