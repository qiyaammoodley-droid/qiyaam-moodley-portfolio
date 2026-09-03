export type Project = {
  slug: string;

  title: string;

  eyebrow?: string;

  category:
    | "Frontend"
    | "Backend"
    | "Full-Stack"
    | "JavaScript"
    | "React";

  year: string;

  tech: string[];

  description: string;

  longDescription: string;

  github?: string;

  live?: string;

  featured?: boolean;

  status: "Completed" | "In Progress" | "Coming Soon";

  accent: "orange" | "violet" | "aqua";
};


export type Experience = {
  company: string;

  role: string;

  dates: string;

  description: string;
};