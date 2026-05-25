import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import { navLinks } from "../data/links";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar({ dark, setDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-neutral-200/60 dark:border-neutral-800/60 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="group flex items-center gap-2">
          <img
            src="/favicon.svg"
            alt="Mangalam logo"
            className="w-7 h-7 rounded-lg group-hover:scale-110 transition-transform dark:invert"
          />
          <span className="text-base font-semibold tracking-tight dark:text-white">
            Mangalam
          </span>
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive
                    ? "text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800/60"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDark(!dark)}
            className="ml-3 p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-all"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setDark(!dark)}
            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-lg text-neutral-500 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800 transition"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          className="md:hidden border-t border-neutral-200 dark:border-neutral-800 bg-white/95 dark:bg-[#0a0a0f]/95 backdrop-blur-xl px-6 py-4 flex flex-col gap-1"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `px-4 py-2.5 text-sm font-medium rounded-lg transition ${
                  isActive
                    ? "text-accent-600 dark:text-accent-400 bg-accent-50 dark:bg-accent-500/10"
                    : "text-neutral-600 dark:text-neutral-400 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </motion.div>
      )}
    </motion.nav>
  );
}
