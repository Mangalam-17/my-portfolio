import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Target, GraduationCap } from "lucide-react";
import { skillCategories } from "../data/skills";

const timeline = [
  {
    year: "2025 - 2026",
    title: "Professional Experience",
    subtitle: "Genkaix · ROVO Automation · Vault of Codes",
    icon: "💼",
    description:
      "Completed internships at three startups, working on production MERN applications, CRM/HRMS systems, and mental wellness platforms. Gained hands-on experience in full-stack development and system architecture.",
  },
  {
    year: "2024 - 2025",
    title: "Project Development",
    subtitle: "Independent Work",
    icon: "🚀",
    description:
      "Built and shipped 4 production-grade applications: Shortlisto (recruitment SaaS), Interview Mate (AI platform), MindSpace (wellness app), and BlogSpace. Deployed to production with real users.",
  },
  {
    year: "2023",
    title: "Started MERN Stack",
    subtitle: "Self-taught",
    icon: "📚",
    description:
      "Deep-dived into React, Node.js, Express, and MongoDB. Built foundational projects covering REST API design, authentication flows, and responsive UI development.",
  },
  {
    year: "2022",
    title: "Web Development Foundations",
    subtitle: "HTML · CSS · JavaScript",
    icon: "🌐",
    description:
      "Learned core web technologies, DOM manipulation, ES6+ features, and responsive design principles. Started the journey into web development.",
  },
  {
    year: "2022 - 2026",
    title: "B.Tech in Computer Science & Engineering",
    subtitle: "NIMS University, Jaipur",
    icon: "🎓",
    description:
      "Pursuing undergraduate degree in Computer Science with focus on full-stack development, data structures, algorithms, and software engineering principles. CGPA: 8.7/10",
  },
];

const blocks = [
  {
    icon: Code2,
    title: "Background & Focus",
    text: "Full-stack developer specializing in MERN ecosystem with production experience in RESTful APIs, JWT authentication, and component-driven UIs with React and Tailwind.",
  },
  {
    icon: Layers,
    title: "Product Work",
    text: "Built Shortlisto (recruitment SaaS), Interview Mate (AI platform), MindSpace (wellness app), and BlogSpace. Experience spans API design, state management, and production deployment.",
  },
  {
    icon: Rocket,
    title: "What I Work With",
    text: "Comfortable across the full development lifecycle: API design, MongoDB schemas, React Router, Git workflows, and cloud deployments on Vercel/Render/Railway.",
  },
  {
    icon: Target,
    title: "Open To",
    text: "Seeking full-stack engineering roles and SaaS product development positions. Interested in startups working with modern JavaScript ecosystems and scalable architectures.",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function About() {
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
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white mb-4">
            About Me
          </h2>
          
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
              <span className="tech-highlight">MERN stack</span>, building{" "}
              <span className="tech-highlight">production-grade</span> systems and scalable web applications.{" "}
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Open to{" "}
              <span className="tech-highlight">full-stack engineering</span> roles and impactful{" "}
              <span className="tech-highlight">product development</span> opportunities.
            </motion.span>
          </motion.div>
        </motion.div>

        {/* Info blocks grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 gap-5 mb-16"
        >
          {blocks.map(({ icon: Icon, title, text }) => (
            <motion.div
              key={title}
              variants={itemVariants}
              className="group relative bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-3 hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-2xl dark:hover:shadow-accent-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 via-purple-500/0 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
              
              <div className="w-10 h-10 rounded-xl bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center">
                <Icon size={20} className="text-accent-500 dark:text-accent-400" />
              </div>
              <h3 className="text-base font-semibold dark:text-white">{title}</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{text}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="flex items-center gap-2 mb-8">
            <GraduationCap size={18} className="text-accent-500 dark:text-accent-400" />
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400">
              Journey
            </p>
          </div>

          <div className="relative space-y-0">
            {/* Gradient vertical line */}
            <div 
              className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent-500 via-purple-500 to-accent-400 dark:from-accent-400 dark:via-purple-400 dark:to-accent-500"
              style={{
                boxShadow: '0 0 10px rgba(99, 102, 241, 0.3)'
              }}
            />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0 group"
              >
                {/* Enhanced dot with emoji */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-500 bg-white dark:bg-[#0a0a0f] group-hover:shadow-lg group-hover:shadow-accent-500/50 transition-shadow" />

                <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 space-y-2 hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-xl dark:hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xl">{item.icon}</span>
                      <h4 className="font-semibold text-base dark:text-white">{item.title}</h4>
                    </div>
                    <span className="text-xs text-accent-500 dark:text-accent-400 font-semibold bg-accent-50 dark:bg-accent-500/10 px-3 py-1 rounded-full">
                      {item.year}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">{item.subtitle}</p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Skills summary with grouped categories */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-6">
            Skills at a Glance
          </p>
          
          {/* Grouped by category */}
          <div className="space-y-6">
            {skillCategories.map((category) => (
              <div key={category.title}>
                <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-500 mb-3 uppercase tracking-wide">
                  {category.title}
                </p>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <span
                      key={item.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent-300 dark:hover:border-accent-500/50 hover:bg-accent-50 dark:hover:bg-accent-500/10 hover:text-accent-700 dark:hover:text-accent-300 hover:scale-105 transition-all cursor-default"
                    >
                      <item.icon className="text-sm" style={{ color: item.name === 'React.js' ? '#61DAFB' : item.name === 'Node.js' ? '#339933' : item.name === 'JavaScript (ES6+)' ? '#F7DF1E' : item.name === 'MongoDB' ? '#47A248' : item.name === 'TailwindCSS' ? '#06B6D4' : 'inherit' }} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
