import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { navLinks } from "../data/links";
import { Link } from "react-router-dom";

const socials = [
  { icon: FaGithub, href: "https://github.com/Mangalam-17", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/mangalam-mishra-61a878249", label: "LinkedIn" },
  { icon: FaEnvelope, href: "mailto:mangalamab17@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-[#0a0a0f]/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <span className="font-semibold text-sm dark:text-white">Mangalam Mishra</span>
            <span className="text-xs text-neutral-500 dark:text-neutral-500">Full Stack Developer · MERN</span>
          </div>

          {/* Nav links */}
          <div className="flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-xs text-neutral-500 dark:text-neutral-500 hover:text-accent-500 dark:hover:text-accent-400 transition"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-neutral-500 dark:text-neutral-500 hover:text-accent-500 dark:hover:text-accent-400 hover:bg-accent-50 dark:hover:bg-accent-500/10 transition"
              >
                <Icon size={14} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neutral-100 dark:border-neutral-800/60 text-center text-xs text-neutral-400 dark:text-neutral-600">
          © {new Date().getFullYear()} Mangalam Mishra. Built with React & Tailwind.
        </div>
      </div>
    </footer>
  );
}
