import { Menu, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, toggleMenu, type RootState } from "../store/store";
import { profile } from "../data/portfolio";

const links = ["about", "skills", "projects", "journey", "contact"];

export default function Navbar() {
  const dispatch = useDispatch();
  const open = useSelector((state: RootState) => state.ui.menuOpen);

  const scrollTo = (id: string) => {
    dispatch(closeMenu());
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => scrollTo("top")} className="font-display text-lg font-bold tracking-tight">
          QIYAAM<span className="text-ember">.</span>
        </button>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="text-[11px] font-bold uppercase tracking-[.18em] text-white/55 transition hover:text-white">
              {link}
            </button>
          ))}
          <a href={profile.github} target="_blank" rel="noreferrer" className="rounded-full border border-white/15 px-4 py-2 text-[11px] font-bold uppercase tracking-[.14em] hover:border-ember">
            GitHub ↗
          </a>
        </nav>

        <button className="md:hidden" onClick={() => dispatch(toggleMenu())} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-ink px-5 py-4 md:hidden">
          {links.map(link => (
            <button key={link} onClick={() => scrollTo(link)} className="block w-full py-3 text-left text-xs font-bold uppercase tracking-[.18em] text-white/70">
              {link}
            </button>
          ))}
        </div>
      )}
    </header>
  );
}
