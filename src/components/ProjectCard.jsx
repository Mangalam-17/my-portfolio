import { motion, useScroll, useTransform } from "framer-motion";
import Badge from "./Badge";

export default function ProjectCard({ project }) {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.96, 1]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [30, 0]);

  return (
    <motion.div
      style={{ scale, opacity, y }}
      className="flex flex-col gap-4"
      whileHover={{ scale: 1.02 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
    >
      <div className="w-full aspect-[16/10] overflow-hidden rounded-xl border border-neutral-200 shadow-sm">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold tracking-tight">
          {project.title}
        </h3>

        <p className="text-sm text-neutral-600 max-w-md leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((t) => (
            <Badge key={t} label={t} />
          ))}
        </div>
      </div>

      <div className="flex gap-3 mt-2">
        <a
          href={project.live}
          target="_blank"
          className="px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-100 transition"
        >
          Live Demo
        </a>
        <a
          href={project.source}
          target="_blank"
          className="px-4 py-2 text-sm border border-neutral-300 rounded-lg hover:bg-neutral-100 transition"
        >
          Source Code
        </a>
      </div>
    </motion.div>
  );
}
