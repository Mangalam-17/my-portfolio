import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Badge from "./Badge";

export default function ProjectCard({ project, index = 0, featured = false }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className={`group relative flex flex-col bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden shadow-sm hover:shadow-2xl hover:shadow-accent-500/10 dark:hover:shadow-accent-500/20 transition-all duration-300 hover:-translate-y-2 ${
        featured ? "lg:min-h-[620px]" : "lg:min-h-[580px]"
      }`}
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 via-purple-500/0 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />
      
      {/* Category Badge */}
      <div className="absolute top-4 left-4 z-10">
        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[11px] font-semibold bg-accent-500 text-white shadow-lg backdrop-blur-sm">
          {project.category}
        </span>
      </div>

      {/* Image */}
      <div className={`relative w-full overflow-hidden bg-neutral-100 dark:bg-neutral-800 ${featured ? "aspect-[16/9]" : "aspect-[16/10]"}`}>
        <img
          src={project.image}
          alt={`${project.title} project screenshot`}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Hover Actions - Desktop */}
        <div className="hidden md:flex absolute inset-0 items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-white hover:bg-accent-500 text-neutral-900 hover:text-white text-sm font-semibold rounded-xl shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-accent-500 text-white text-sm font-semibold rounded-xl shadow-xl transition-all duration-200 transform hover:scale-105"
            onClick={(e) => e.stopPropagation()}
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col gap-4 p-6 flex-grow">
        {/* Project Type */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-medium text-accent-600 dark:text-accent-400 uppercase tracking-wide">
            {project.type}
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-bold tracking-tight dark:text-white leading-tight ${featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>

        {/* Description */}
        <p className={`text-neutral-600 dark:text-neutral-400 leading-relaxed flex-grow ${featured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        {/* Metrics */}
        {project.metrics && (
          <div className="flex flex-wrap gap-2 py-2 border-y border-neutral-100 dark:border-neutral-800">
            {project.metrics.map((metric, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-600 dark:text-neutral-400 bg-neutral-50 dark:bg-neutral-800/50 rounded-lg"
              >
                <span className="text-sm">{metric.icon}</span>
                {metric.label}
              </span>
            ))}
          </div>
        )}

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        {/* Mobile Actions - Always Visible */}
        <div className="flex md:hidden gap-2 pt-2">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-accent-500 hover:bg-accent-600 text-white text-sm font-medium rounded-xl transition-colors"
          >
            <ExternalLink size={14} />
            Live Demo
          </a>
          <a
            href={project.source}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm font-medium rounded-xl transition-colors"
          >
            <Github size={14} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}
