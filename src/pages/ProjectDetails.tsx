import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/portfolio";

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <main className="mx-auto max-w-7xl px-5 py-40"><p className="font-mono text-ember">404 / PROJECT</p><h1 className="mt-4 font-display text-5xl font-bold">Not found.</h1><Link className="mt-6 inline-block text-ember" to="/">Back home</Link></main>;

  return <main className="mx-auto max-w-5xl px-5 pb-32 pt-36 lg:px-8">
    <Link to="/#projects" className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white/40 hover:text-white"><ArrowLeft size={15}/> Back to work</Link>
    <p className="mt-14 font-mono text-xs text-ember">{project.eyebrow} / {project.year}</p>
    <h1 className="mt-5 font-display text-5xl font-bold tracking-tight sm:text-7xl">{project.title}</h1>
    <p className="mt-7 max-w-3xl text-lg leading-8 text-white/55">{project.longDescription}</p>
    <div className="mt-8 flex flex-wrap gap-2">{project.stack.map(x=><span key={x} className="rounded-full border border-white/10 px-3 py-2 text-xs text-white/55">{x}</span>)}</div>
    <div className="mt-10 flex gap-6">{project.demo && <a className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-aqua" href={project.demo} target="_blank" rel="noreferrer">Live project <ExternalLink size={14}/></a>}<a className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white" href={project.github} target="_blank" rel="noreferrer"><Github size={14}/> View code</a></div>
  </main>;
}
