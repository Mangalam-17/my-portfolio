import { motion } from "framer-motion";
import { CalendarDays, Briefcase, Download, Zap, Target } from "lucide-react";
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

function SectionLabel({ children, icon: Icon }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      {Icon && <Icon size={18} className="text-accent-500 dark:text-accent-400" />}
      <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400">
        {children}
      </p>
    </div>
  );
}

function ExperienceCard({ item, index }) {
  const isCurrent = item.current;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
      className="relative pl-8 pb-8 last:pb-0 group"
    >
      {/* Timeline dot with pulse animation for current role */}
      <div className={`absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 ${
        isCurrent 
          ? "border-emerald-500 bg-emerald-500 animate-pulse shadow-lg shadow-emerald-500/50" 
          : "border-accent-500 bg-white dark:bg-[#0a0a0f]"
      } group-hover:shadow-lg group-hover:shadow-accent-500/50 transition-shadow`} />
      
      <div className={`bg-white dark:bg-neutral-900 rounded-2xl border ${
        isCurrent 
          ? "border-emerald-200 dark:border-emerald-500/30 bg-gradient-to-br from-emerald-50/50 to-transparent dark:from-emerald-500/5 dark:to-transparent"
          : "border-neutral-200 dark:border-neutral-800"
      } p-6 hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-2xl dark:hover:shadow-accent-500/20 transition-all duration-300 hover:-translate-y-1`}>
        
        {/* Glow effect on hover */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 via-purple-500/0 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />

        {/* Header */}
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="text-xl font-bold tracking-tight dark:text-white">
                  {item.role}
                </h3>
                {isCurrent && (
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 text-[10px] font-bold rounded-full bg-emerald-500 text-white shadow-md animate-pulse">
                    <span className="w-1.5 h-1.5 rounded-full bg-white" />
                    CURRENTLY WORKING
                  </span>
                )}
              </div>
              
              <div className="flex items-center gap-2 text-base font-semibold text-neutral-700 dark:text-neutral-300">
                <Briefcase size={16} className="text-accent-500 dark:text-accent-400" />
                {item.company}
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-neutral-50 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-xs font-medium text-neutral-600 dark:text-neutral-400">
              <CalendarDays size={14} className="text-accent-500 dark:text-accent-400" />
              {item.period}
            </div>
          </div>

          {/* Type badge and company tags */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-400 border border-accent-200 dark:border-accent-500/30">
              {item.type}
            </span>
            {item.companyType.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 text-[11px] font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 border border-neutral-200 dark:border-neutral-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Impact Highlights */}
        {item.impact && (
          <div className="mt-5 grid sm:grid-cols-2 gap-3">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-accent-50 to-purple-50 dark:from-accent-500/5 dark:to-purple-500/5 border border-accent-100 dark:border-accent-500/20">
              <Zap size={16} className="text-accent-500 dark:text-accent-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-accent-600 dark:text-accent-400 mb-0.5">
                  Key Impact
                </p>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {item.impact.highlight}
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-500/5 dark:to-pink-500/5 border border-purple-100 dark:border-purple-500/20">
              <Target size={16} className="text-purple-500 dark:text-purple-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wide text-purple-600 dark:text-purple-400 mb-0.5">
                  Focus Area
                </p>
                <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                  {item.impact.focus}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Tech Stack */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-2">
            Technologies
          </p>
          <div className="flex flex-wrap gap-1.5">
            {item.stack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs rounded-full border border-accent-200 dark:border-accent-500/30 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 font-medium tracking-tight hover:scale-105 transition-transform duration-200"
              >
                <tech.icon className="text-sm flex-shrink-0" style={{ color: tech.color }} />
                {tech.name}
              </span>
            ))}
          </div>
        </div>

        {/* Responsibilities */}
        <div className="mt-5">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-500 mb-3">
            Key Responsibilities
          </p>
          <ul className="space-y-2.5">
            {item.bullets.map((bullet, i) => (
              <li key={i} className="flex gap-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-400">
                <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent-500" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
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
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-16">
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
              Professional Journey
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white mb-4">
              Experience
            </h1>
            
            {/* Animated Description with Gradient Highlights */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed"
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Full Stack Developer specializing in the{" "}
                <span className="tech-highlight">MERN stack</span>, building production-grade systems across{" "}
                <span className="tech-highlight">CRM</span>,{" "}
                <span className="tech-highlight">HRMS</span>, and{" "}
                <span className="tech-highlight">AI-integrated</span> platforms.{" "}
              </motion.span>
              
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Proven expertise in architecting scalable{" "}
                <span className="tech-highlight">REST APIs</span>, resolving critical production defects, and delivering high-impact full-stack solutions from concept to deployment.
              </motion.span>
            </motion.div>
          </motion.div>

          {/* Work Experience Timeline */}
          <div className="mb-16">
            <SectionLabel icon={Briefcase}>Work Experience</SectionLabel>
            <div className="relative max-w-5xl">
              {/* Gradient timeline line */}
              <div 
                className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-purple-500 to-accent-400 dark:from-accent-400 dark:via-purple-400 dark:to-accent-500" 
                style={{
                  boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)'
                }}
              />
              {experiences.map((item, index) => (
                <ExperienceCard key={`${item.role}-${item.company}`} item={item} index={index} />
              ))}
            </div>
          </div>

          {/* Download Resume CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16"
          >
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/20 via-purple-500/20 to-pink-500/20 blur-2xl opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative bg-gradient-to-br from-accent-500/10 via-purple-500/5 to-transparent dark:from-accent-500/5 dark:via-purple-500/5 rounded-2xl border border-accent-200/50 dark:border-accent-500/30 p-8 text-center">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-accent-500 text-white mb-4 shadow-lg shadow-accent-500/30">
                  <Download size={24} />
                </div>
                
                <h3 className="text-xl font-bold dark:text-white mb-2">
                  Want the Full Picture?
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6 max-w-md mx-auto">
                  Download my complete resume with detailed project descriptions, certifications, and education.
                </p>
                
                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-semibold text-sm shadow-lg shadow-accent-500/30 hover:shadow-accent-500/50 transition-all duration-200 hover:scale-105"
                >
                  <Download size={16} />
                  Download Full Resume
                </a>
                
                <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-500">
                  PDF · Updated June 2026 · 2 pages
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </motion.div>
  );
}
