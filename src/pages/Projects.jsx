import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper"
    >
      <section className="pt-32 pb-28 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-2">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            Featured Projects
          </h2>
          <p className="mt-3 text-neutral-600 dark:text-neutral-400 max-w-xl leading-relaxed">
            A selection of full-stack products I've designed, built, and shipped — from AI-powered platforms to mental health tools.
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* Mobile stack */}
        <div className="md:hidden flex flex-col gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} project={p} index={i} />
          ))}
        </div>

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <p className="text-sm text-neutral-500 dark:text-neutral-500 mb-4">
            More projects on GitHub
          </p>
          <a
            href="https://github.com/Mangalam-17"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl text-sm font-medium hover:bg-neutral-50 dark:hover:bg-neutral-800 dark:text-white transition"
          >
            View GitHub Profile →
          </a>
        </motion.div>
      </section>
    </motion.div>
  );
}
