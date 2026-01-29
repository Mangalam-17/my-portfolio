import { motion } from "framer-motion";
import { FaAws } from "react-icons/fa";

import {
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiGithub,
  SiPostman,
} from "react-icons/si";

const skillCategories = [
  {
    title: "Frontend",
    items: [
      { name: "JavaScript (ES6+)", icon: <SiJavascript /> },
      { name: "React.js", icon: <SiReact /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
    ],
  },
  {
    title: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST APIs", icon: <SiNodedotjs /> },
      { name: "JWT Auth", icon: <SiNodedotjs /> },
    ],
  },
  {
    title: "Databases",
    items: [{ name: "MongoDB", icon: <SiMongodb /> }],
  },
  {
    title: "DevOps / Tools",
    items: [
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "AWS", icon: <FaAws /> },
    ],
  },
];

const revealVariant = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.45 },
  }),
};

export default function Home() {
  return (
    <section className="pt-32 pb-28 max-w-6xl mx-auto px-6 mt-[-30px]">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        {/* LEFT — TEXT */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-5xl mt-[-130px] font-semibold leading-tight tracking-tight"
          >
            Full Stack Developer
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="mt-2 text-xl max-w-lg text-neutral-700 leading-relaxed"
          >
            Specializing in the <span className="font-medium">MERN stack</span>{" "}
            — building web apps with REST APIs, authentication, and scalable UI
            architectures. Excited to work with fast-moving startups and
            contribute across the stack.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-4 flex gap-4"
          >
            <a
              href="/projects"
              className="px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition"
            >
              View Projects
            </a>

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
            className="max-w-xs md:max-w-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-neutral-200 select-none"
          />
        </motion.div>
      </div>

      {/* SKILLS SECTION */}
      <div className="mt-[-100px]">
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>

        <div className="space-y-10">
          {skillCategories.map((cat, index) => (
            <motion.div
              key={cat.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <p className="font-medium mb-2">{cat.title}</p>
              <div className="flex flex-wrap gap-3">
                {cat.items.map((item, i) => (
                  <motion.div
                    key={item.name}
                    variants={revealVariant}
                    custom={i}
                    className="flex items-center gap-2 px-3 py-1.5 bg-neutral-100 rounded-full text-sm border border-neutral-200"
                  >
                    <span className="text-lg">{item.icon}</span>
                    {item.name}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
