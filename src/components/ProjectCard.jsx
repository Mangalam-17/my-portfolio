import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Badge from "./Badge";

export default function ProjectCard({ project, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative flex flex-col bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-xl dark:hover:shadow-accent-500/5 transition-all duration-300 hover:-translate-y-1"
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-neutral-100 dark:bg-neutral-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-end p-4 gap-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-neutral-900 text-xs font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={12} />
            Live
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-neutral-900 text-xs font-semibold rounded-lg hover:bg-accent-500 hover:text-white transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={12} />
            Code
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-3 p-5 flex-grow">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-semibold tracking-tight dark:text-white">
            {project.title}
          </h3>
          <div className="flex gap-2 flex-shrink-0">
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-500 transition-colors"
              aria-label="Live demo"
            >
              <ExternalLink size={15} />
            </a>
            <a
              href={project.source}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-accent-500 transition-colors"
              aria-label="Source code"
            >
              <Github size={15} />
            </a>
          </div>
        </div>

        <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex-grow">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
