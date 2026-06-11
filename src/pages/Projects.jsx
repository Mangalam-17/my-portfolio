import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper"
    >
      <section className="pt-32 pb-28 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-3xl"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
            Selected Work
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Applications I've designed, developed, and deployed — from AI-powered platforms to production-grade SaaS systems.
          </p>
        </motion.div>

        {/* Featured Projects - Large Cards */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-xl font-semibold dark:text-white mb-8 flex items-center gap-2"
          >
            <div className="w-1.5 h-6 rounded-full bg-accent-500" />
            Flagship Projects
          </motion.h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, i) => (
              <ProjectCard key={project.title} project={project} index={i} featured />
            ))}
          </div>
        </div>

        {/* Other Projects - Smaller Grid */}
        {otherProjects.length > 0 && (
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="text-xl font-semibold dark:text-white mb-8 flex items-center gap-2"
            >
              <div className="w-1.5 h-6 rounded-full bg-purple-500" />
              Other Projects
            </motion.h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
              {otherProjects.map((project, i) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={i + featuredProjects.length}
                  featured={false}
                />
              ))}
            </div>
          </div>
        )}

        {/* More projects CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 rounded-2xl bg-gradient-to-br from-accent-500/5 to-purple-500/5 border border-accent-200/20 dark:border-accent-500/20">
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Explore more projects and open-source contributions
            </p>
            <a
              href="https://github.com/Mangalam-17"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl text-sm font-medium shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200"
            >
              View GitHub Profile →
            </a>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
