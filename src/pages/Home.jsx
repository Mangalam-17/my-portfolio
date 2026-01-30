import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import TechCard from "../components/TechCard";
import { skillCategories } from "../data/skills";

export default function Home() {
  return (
    <section className="pt-32 pb-28 max-w-6xl mx-auto px-6">
      {/* HERO SECTION */}
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl font-semibold leading-tight tracking-tight"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-3 text-xl max-w-lg text-neutral-700 leading-relaxed"
          >
            Specializing in the <span className="font-medium">MERN stack</span>{" "}
            — building scalable web applications with REST APIs, authentication,
            and clean component-driven UI architectures.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 flex gap-4"
          >
            <Link
              to="/projects"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition"
            >
              View Projects
            </Link>

            <a
              href="/resume.pdf"
              className="px-6 py-3 border border-neutral-300 rounded-xl hover:bg-neutral-100 transition"
            >
              Download Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT — IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="flex justify-center md:justify-end"
        >
          <img
            src="/profile.png"
            alt="Mangalam Mishra"
            className="max-w-xs md:max-w-sm rounded-2xl border border-neutral-200 shadow-[0_8px_30px_rgba(0,0,0,0.08)] select-none"
          />
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-24">
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

        <div className="space-y-10">
          {skillCategories.map((category) => (
            <div key={category.title}>
              <p className="font-medium mb-3">{category.title}</p>

              <div className="flex flex-wrap gap-3">
                {category.items.map((item, index) => (
                  <TechCard
                    key={item.name}
                    icon={item.icon}
                    name={item.name}
                    index={index}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
