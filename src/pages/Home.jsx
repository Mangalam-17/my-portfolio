import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import TechCard from "../components/TechCard";
import { skillCategories } from "../data/skills";

const roles = [
  "Full Stack Developer",
  "MERN Stack Engineer",
  "React Developer",
  "Backend Engineer",
];

function TypewriterText({ words }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, words]);

  return (
    <span className="gradient-text">
      {displayed}
      <span className="cursor-blink text-accent-500">|</span>
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="page-wrapper"
    >
      <section className="pt-32 pb-20 max-w-6xl mx-auto px-6">
        {/* HERO */}
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[70vh]">
          {/* LEFT */}
          <div className="space-y-6">
            {/* Available badge */}
            <motion.div variants={itemVariants}>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to opportunities
              </span>
            </motion.div>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 tracking-widest uppercase">
                Hi, I'm Mangalam 👋
              </p>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight dark:text-white">
                <TypewriterText words={roles} />
              </h1>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg"
            >
              Specializing in the{" "}
              <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                MERN stack
              </span>{" "}
              — building scalable web applications with REST APIs, authentication,
              and clean component-driven UI architectures.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-3">
              <Link
                to="/projects"
                className="group inline-flex items-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200"
              >
                View Projects
                <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 border border-neutral-300 dark:border-neutral-700 rounded-xl font-medium text-sm hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-all duration-200 dark:text-white"
              >
                <Download size={15} />
                Resume
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center gap-6 pt-2"
            >
              <div className="space-y-0.5">
                <p className="text-xl font-bold dark:text-white">4</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">Projects Shipped</p>
              </div>

              <div className="space-y-0.5">
                <p className="text-xl font-bold dark:text-white">24h</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-500">Response Time</p>
              </div>

              <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 flex-shrink-0" />
                <div>
                  <p className="text-xs font-semibold dark:text-white leading-tight">Ex-Intern · ROVO Automation</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-500 leading-tight">Full Stack Developer</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* RIGHT — Profile image */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center md:justify-end"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-accent-400/20 via-purple-400/20 to-pink-400/20 blur-2xl" />
              {/* Decorative dots */}
              <div className="absolute -top-3 -right-3 w-20 h-20 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] bg-[size:8px_8px] opacity-40" />
              <div className="absolute -bottom-3 -left-3 w-20 h-20 bg-[radial-gradient(circle,#6366f1_1px,transparent_1px)] bg-[size:8px_8px] opacity-40" />

              <motion.img
                src="/profile.png"
                alt="Mangalam Mishra"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                className="relative w-72 md:w-80 rounded-2xl border-2 border-white dark:border-neutral-800 shadow-2xl select-none object-cover"
              />

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.4 }}
                className="absolute -bottom-4 -left-4 flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-700 shadow-lg"
              >
                <Sparkles size={14} className="text-accent-500" />
                <span className="text-xs font-semibold dark:text-white">MERN Stack</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* SKILLS SECTION */}
        <div className="mt-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10"
          >
            <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-2">
              Tech Stack
            </p>
            <h2 className="text-3xl font-bold tracking-tight dark:text-white">
              Technical Skills
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, catIdx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.08 }}
                className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 space-y-4 hover:border-accent-300 dark:hover:border-accent-500/40 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-5 rounded-full bg-accent-500" />
                  <p className="text-sm font-semibold dark:text-white">{category.title}</p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item, index) => (
                    <TechCard
                      key={item.name}
                      icon={item.icon}
                      name={item.name}
                      index={index}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}
