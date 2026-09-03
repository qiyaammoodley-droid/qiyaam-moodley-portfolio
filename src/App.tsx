import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useMouseGlow } from "./hooks/useMouseGlow";

const Home = lazy(() => import("./pages/Home"));
const ProjectDetails = lazy(() => import("./pages/ProjectDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

export default function App() {
  useMouseGlow();

  return (
    <div className="min-h-screen overflow-hidden bg-ink text-paper">
      <div className="mouse-glow" />
      <Navbar />
      <Suspense fallback={<div className="grid min-h-[70vh] place-items-center text-sm text-white/50">Loading build…</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:slug" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </div>
  );
}
