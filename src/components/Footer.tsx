import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "../data/portfolio";

export default function Footer() {
  return <footer className="border-t border-white/10">
    <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-8 text-xs text-white/35 lg:flex-row lg:items-center lg:justify-between lg:px-8">
      <span>© {new Date().getFullYear()} Qiyaam Moodley. Built with React.</span>
      <div className="flex gap-5">
        <a href={`mailto:${profile.email}`}><Mail size={16}/></a>
        <a href={profile.linkedin} target="_blank" rel="noreferrer"><Linkedin size={16}/></a>
        <a href={profile.github} target="_blank" rel="noreferrer"><Github size={16}/></a>
      </div>
    </div>
  </footer>;
}
