import { motion } from "framer-motion";
import { Code2, Layers, Rocket, Compass } from "lucide-react";
import { skillCategories } from "../data/skills";

const timeline = [
  {
    year: "2024 – Present",
    title: "Full Stack Developer",
    subtitle: "Independent Projects",
    description:
      "Built and shipped Interview Mate and MindSpace — production-grade full-stack applications using the MERN stack, integrating AI APIs, JWT auth, and deploying to Vercel/Render.",
  },
  {
    year: "2023",
    title: "Started MERN Stack",
    subtitle: "Self-taught",
    description:
      "Deep-dived into React, Node.js, Express, and MongoDB. Built foundational projects covering REST API design, authentication flows, and responsive UI development.",
  },
  {
    year: "2022",
    title: "Web Development Foundations",
    subtitle: "HTML · CSS · JavaScript",
    description:
      "Learned core web technologies, DOM manipulation, ES6+ features, and responsive design principles.",
  },
];

const blocks = [
  {
    icon: Code2,
    title: "Background & Focus",
    text: "I'm a full-stack developer specializing in the MERN ecosystem with hands-on experience building production-grade web applications. My work focuses on designing RESTful backend services, implementing secure authentication workflows (JWT), and developing responsive, component-driven UIs using React and Tailwind.",
  },
  {
    icon: Layers,
    title: "Product Work",
    text: "I've built full-stack products such as Interview Mate — an AI-powered interview preparation platform utilizing Gemini for personalized question generation — and MindSpace, a mental health companion app offering mood tracking and therapy-based SPA flows. These projects reflect my capabilities in API design, state management, data modeling, and deployment.",
  },
  {
    icon: Rocket,
    title: "What I Work With",
    text: "I work comfortably across the full development lifecycle including requirements, API contracts, database schemas (MongoDB), client-side routing (React Router), version control (Git/GitHub), environment configuration, and deployments (Vercel/Render).",
  },
  {
    icon: Compass,
    title: "Currently Exploring",
    text: "I'm currently exploring opportunities in full-stack engineering, SaaS product development, and modern JavaScript ecosystems. Open to entry-level roles and internships.",
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
      <section className="pt-32 pb-28 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-2">
            About
          </p>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            About Me
          </h2>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg max-w-2xl leading-relaxed">
            Full-stack developer specializing in the MERN ecosystem and modern
            JavaScript workflows. Seeking entry-level jobs and internships.
          </p>
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
              className="group bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 space-y-3 hover:border-accent-300 dark:hover:border-accent-500/40 hover:shadow-lg dark:hover:shadow-accent-500/5 transition-all duration-300"
            >
              <div className="w-9 h-9 rounded-xl bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center">
                <Icon size={18} className="text-accent-500 dark:text-accent-400" />
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
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-6">
            Journey
          </p>

          <div className="relative space-y-0">
            {/* Vertical line */}
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-neutral-200 dark:bg-neutral-800" />

            {timeline.map((item, i) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-8 pb-8 last:pb-0"
              >
                {/* Dot */}
                <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full border-2 border-accent-500 bg-white dark:bg-[#0a0a0f]" />

                <div className="bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 space-y-1.5 hover:border-accent-300 dark:hover:border-accent-500/40 transition-colors">
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <h4 className="font-semibold text-sm dark:text-white">{item.title}</h4>
                    <span className="text-xs text-accent-500 dark:text-accent-400 font-medium bg-accent-50 dark:bg-accent-500/10 px-2 py-0.5 rounded-full">
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

        {/* Skills summary */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-6">
            Skills at a Glance
          </p>
          <div className="flex flex-wrap gap-2">
            {skillCategories.flatMap((cat) =>
              cat.items.map((item) => (
                <span
                  key={item.name}
                  className="px-3 py-1.5 text-xs font-medium rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200 dark:border-neutral-700 hover:border-accent-300 dark:hover:border-accent-500/50 hover:bg-accent-50 dark:hover:bg-accent-500/10 hover:text-accent-700 dark:hover:text-accent-300 transition-all cursor-default"
                >
                  {item.name}
                </span>
              ))
            )}
          </div>
        </motion.div>
      </section>
    </motion.div>
  );
}
