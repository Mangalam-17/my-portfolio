import { motion } from "framer-motion";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="pt-32 pb-40 max-w-3xl mx-auto px-6 text-center space-y-12">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-4"
      >
        <h1 className="text-5xl font-semibold tracking-tight">Get in Touch</h1>
        <p className="text-neutral-600 text-lg leading-relaxed max-w-xl mx-auto">
          Open to full-stack roles, internship positions, collaborations, and
          tech discussions. I usually respond within 24 hours.
        </p>
      </motion.div>

      {/* CONTACT LINKS */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="space-y-4 max-w-md mx-auto"
      >
        <a
          href="mailto:mangalamab17@gmail.com"
          className="flex items-center justify-center gap-3 py-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition"
        >
          <FaEnvelope className="text-neutral-600" />
          <span className="font-medium">mangalamab17@gmail.com</span>
        </a>

        <a
          href="https://www.linkedin.com/in/mangalam-mishra-61a878249"
          target="_blank"
          className="flex items-center justify-center gap-3 py-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition"
        >
          <FaLinkedin className="text-neutral-600" />
          <span className="font-medium">linkedin.com/in/mangalam-mishra</span>
        </a>

        <a
          href="https://github.com/Mangalam-17"
          target="_blank"
          className="flex items-center justify-center gap-3 py-3 rounded-xl border border-neutral-200 hover:bg-neutral-50 transition"
        >
          <FaGithub className="text-neutral-600" />
          <span className="font-medium">github.com/Mangalam-17</span>
        </a>
      </motion.div>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200 w-2/3 mx-auto" />

      {/* RESUME CTA */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <a
          href="/resume.pdf"
          className="inline-block px-6 py-3 bg-black text-white rounded-xl hover:bg-neutral-800 transition"
        >
          Download Resume
        </a>
      </motion.div>
    </section>
  );
}
