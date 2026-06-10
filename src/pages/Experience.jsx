import { motion } from "framer-motion";
import { CalendarDays } from "lucide-react";
import Badge from "../components/Badge";
import {
  careerSummary,
  experiences,
} from "../data/experience";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function SectionLabel({ children }) {
  return (
    <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-6">
      {children}
    </p>
  );
}

function ExperienceCard({ item, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-8 pb-8 last:pb-0"
    >
      <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-500 bg-white dark:bg-[#0a0a0f]" />
      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-lg dark:hover:shadow-accent-500/5 transition-all duration-300">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-semibold tracking-tight dark:text-white">
                {item.role}
              </h3>
              <span className="px-2 py-0.5 text-[11px] font-semibold rounded-full bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                {item.type}
              </span>
            </div>
            <p className="mt-1 text-sm font-medium text-neutral-600 dark:text-neutral-400">
              {item.company}
            </p>
          </div>
          <div className="inline-flex items-center gap-2 text-xs font-medium text-neutral-500 dark:text-neutral-500">
            <CalendarDays size={14} className="text-accent-500 dark:text-accent-400" />
            {item.period}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {item.stack.map((tech) => (
            <Badge key={tech} label={tech} />
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          {item.bullets.map((bullet) => (
            <li key={bullet} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
              <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}

export default function Experience() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -16 }}
      transition={{ duration: 0.4 }}
      className="page-wrapper"
    >
      <section className="pt-32 pb-28 max-w-6xl mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-5xl"
        >
          <div>
            <motion.div variants={itemVariants} className="mb-14">
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-2">
                Resume
              </p>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
                Experience
              </h1>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
                {careerSummary.description}
              </p>
            </motion.div>

            <div className="mb-16">
              <SectionLabel>Work Experience</SectionLabel>
              <div className="relative">
                <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />
                {experiences.map((item, index) => (
                  <ExperienceCard key={`${item.role}-${item.company}`} item={item} index={index} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
