import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { navLinks } from "../data/links";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full border-b border-neutral-200 backdrop-blur-lg fixed top-0 left-0 z-40"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-6">
        <div className="text-lg font-semibold tracking-tight">
          Mangalam Mishra
        </div>

        <div className="flex gap-8 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="hover:text-neutral-500 transition"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </motion.nav>
  );
}
