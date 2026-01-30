import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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
          <Link to="/" className="hover:text-neutral-500 transition">
            Home
          </Link>
          <Link to="/projects" className="hover:text-neutral-500 transition">
            Projects
          </Link>
          <Link to="/about" className="hover:text-neutral-500 transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-neutral-500 transition">
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
