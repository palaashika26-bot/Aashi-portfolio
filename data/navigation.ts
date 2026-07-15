import type { NavLink } from "@/types";
import { withBasePath } from "@/lib/utils";

export const navLinks: NavLink[] = [
  { id: "home", label: "Home", href: "#home" },
  { id: "about", label: "About", href: "#about" },
  { id: "work", label: "Projects", href: "#work" },
  { id: "resume", label: "Resume", href: withBasePath("/resume.pdf") },
  { id: "contact", label: "Contact", href: "#contact" },
];
