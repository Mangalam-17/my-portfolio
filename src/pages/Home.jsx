import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import TechCard from "../components/TechCard";
import { skillCategories } from "../data/skills";
import { SiReact, SiNodedotjs, SiMongodb, SiExpress } from "react-icons/si";

const headline = "Full Stack Developer";

const techPills = [
  { icon: SiReact, label: "React" },
  { icon: SiNodedotjs, label: "Node.js" },
  { icon: SiExpress, label: "Express" },
  { icon: SiMongodb, label: "MongoDB" },
];

const paragraphLines = [
  { prefix: "Building ", keyword: "scalable applications", suffix: "," },
  { prefix: "crafting ", keyword: "seamless experiences", suffix: "," },
  { prefix: "transforming ", keyword: "digital products", suffix: "." },
];

function TypewriterText({ text }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let timeout;
    if (displayed.length < text.length) {
      timeout = setTimeout(() => setDisplayed(text.slice(0, displayed.length + 1)), 65);
    }
    return () => clearTimeout(timeout);
  }, [displayed, text]);

  return (
    <span className="gradient-text headline-shimmer">
      {displayed}
      {displayed.length < text.length && (
        <span className="cursor-blink text-accent-500">|</span>
      )}
    </span>
  );
}

function AnimatedHeroParagraph() {
  const [activeKeyword, setActiveKeyword] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveKeyword((current) => (current + 1) % 3);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.p
      variants={itemVariants}
      className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-lg"
    >
      {paragraphLines.map((line, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 8, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.45, delay: 1.05 + i * 0.15, ease: "easeOut" }}
          className="block"
        >
          {line.prefix}
          <span className={`hero-keyword ${activeKeyword === i ? "is-active" : ""}`}>
            {line.keyword}
          </span>
          {line.suffix}
        </motion.span>
      ))}
    </motion.p>
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
      <section className="min-h-screen flex flex-col justify-center pt-24 pb-28 max-w-6xl mx-auto px-6">
        {/* HERO */}
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div className="flex flex-col gap-6">

            {/* Greeting + headline + open to opportunities */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2">
              <p className="text-base font-medium text-neutral-500 dark:text-neutral-400">
                👋 Hi, I'm Mangalam
              </p>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/30 w-fit">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Open to opportunities
              </span>
              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold leading-tight tracking-tight dark:text-white">
                <TypewriterText text={headline} />
              </h1>
            </motion.div>

            {/* Paragraph */}
            <AnimatedHeroParagraph />

            {/* CTA buttons — more top breathing room */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 pt-2">
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

            {/* Stack pills — separated from buttons */}
            <motion.div variants={itemVariants} className="flex flex-col gap-2.5 pt-1">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 dark:text-neutral-500">Stack</span>
              <div className="flex flex-wrap items-center gap-2">
                {techPills.map(({ icon: Icon, label }) => (
                  <motion.span
                    key={label}
                    whileHover={{ y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-accent-400 dark:hover:border-accent-500 hover:shadow-[0_0_10px_rgba(99,102,241,0.3)] dark:hover:shadow-[0_0_12px_rgba(139,92,246,0.4)] transition-colors cursor-default"
                  >
                    <Icon className="text-accent-500 dark:text-accent-400 text-sm flex-shrink-0" />
                    {label}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Bottom info badges */}
            <motion.div variants={itemVariants} className="flex flex-col items-start gap-2 pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400">
                🏢 Ex Software Developer Intern @ Genkaix
              </span>
            </motion.div>
          </div>

          {/* RIGHT — Profile image with diagonal badges */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end"
          >
            {/* Outer wrapper — equal padding on all sides for symmetry */}
            <div className="relative pt-14 pb-14 pl-8 pr-8">

              {/* Glow */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-500/35 via-purple-500/25 to-pink-500/15 blur-3xl" />
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-b from-accent-500/10 via-transparent to-purple-500/10 blur-xl" />

              {/* Decorative dots — top-right, symmetrical */}
              <div className="absolute top-0 right-0 w-28 h-28 bg-[radial-gradient(circle,#6366f1_1.5px,transparent_1.5px)] bg-[size:10px_10px] opacity-50" />
              {/* Decorative dots — bottom-left, symmetrical */}
              <div className="absolute bottom-0 left-0 w-28 h-28 bg-[radial-gradient(circle,#6366f1_1.5px,transparent_1.5px)] bg-[size:10px_10px] opacity-50" />

              {/* Image */}
              <motion.img
                src="/profile.png"
                alt="Mangalam Mishra"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{ height: "340px", objectPosition: "top" }}
                className="relative w-72 lg:w-80 rounded-2xl border border-white/20 dark:border-neutral-700/80 shadow-2xl shadow-accent-500/15 select-none object-cover"
              />

              {/* Top-LEFT badge */}
              <motion.div
                initial={{ opacity: 0, x: -16, y: 8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5, type: "spring", stiffness: 200 }}
                className="absolute top-0 left-8 flex items-center gap-2.5 px-3 py-2.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 border-l-2 border-l-accent-500 shadow-lg"
              >
                <span className="text-sm">⚡</span>
                <div>
                  <p className="text-xs font-semibold text-neutral-800 dark:text-white leading-tight">Production-Ready Apps</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">Built & Deployed</p>
                </div>
              </motion.div>

              {/* Bottom-RIGHT badge */}
              <motion.div
                initial={{ opacity: 0, x: 16, y: -8 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 1.4, duration: 0.5, type: "spring", stiffness: 200 }}
                className="absolute bottom-0 right-8 flex items-center gap-2.5 px-3 py-2.5 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 border-l-2 border-l-purple-500 shadow-lg"
              >
                <span className="text-sm">🛠️</span>
                <div>
                  <p className="text-xs font-semibold text-neutral-800 dark:text-white leading-tight">End-to-End Solutions</p>
                  <p className="text-[10px] text-neutral-500 dark:text-neutral-400 leading-tight">Frontend to Backend</p>
                </div>
              </motion.div>

            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section className="pb-24 max-w-6xl mx-auto px-6">
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
      </section>
    </motion.div>
  );
}
