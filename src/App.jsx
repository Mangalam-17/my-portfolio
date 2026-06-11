import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();
  const [dark, setDark] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "dark" ||
        (!localStorage.getItem("theme") &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);
    }
    return false;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[#0a0a0f] text-neutral-900 dark:text-neutral-100 transition-colors duration-300">
      {/* Background grid */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e8e8e8_1px,transparent_1px),linear-gradient(to_bottom,#e8e8e8_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-60" />
        {/* Top center glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-accent-500/8 dark:bg-accent-500/15 rounded-full blur-3xl" />
        {/* Bottom right accent */}
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <Navbar dark={dark} setDark={setDark} />

      <main className="flex-grow relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="*" element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contacts />} />
          </Routes>
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
