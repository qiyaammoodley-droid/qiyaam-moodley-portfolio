import { Link } from "react-router-dom";
export default function NotFound() {
  return <main className="mx-auto max-w-7xl px-5 py-40"><p className="font-mono text-ember">404</p><h1 className="mt-3 font-display text-6xl font-bold">Wrong branch.</h1><p className="mt-4 text-white/40">That page isn't in this build.</p><Link to="/" className="mt-7 inline-block text-sm text-ember">Return home →</Link></main>;
}
