import type { Social } from "@/types";
import { Github, Linkedin, Mail } from "lucide-react";

export const site = {
  name: "Aashika Pal",
  role: "Full Stack Web Developer",
  location: "Mumbai",
  timezone: "IST (UTC+5:30)",
  email: "palaashika26@gmail.com",
  url: "https://palaashika26-bot.github.io",
  description:
    "Portfolio of Aashika Pal — full stack web developer building scalable applications with modern technologies. Second year B.Sc Computer Science student at Mithibai College, Mumbai.",
  keywords: [
    "developer portfolio",
    "full stack web developer",
    "Next.js developer",
    "TypeScript",
    "software engineer",
    "web applications",
    "Aashika Pal",
  ],
  availability: "Open to opportunities",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/palaashika26-bot",
    linkedin: "https://linkedin.com/in/aashikapal/",
    twitterHandle: "",
  },
};

export const socialLinks: Social[] = [
  { label: "GitHub", href: site.socials.github, icon: Github },
  { label: "LinkedIn", href: site.socials.linkedin, icon: Linkedin },
  { label: "Email", href: `mailto:${site.email}`, icon: Mail },
];
