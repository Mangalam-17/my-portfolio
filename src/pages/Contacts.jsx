import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Send, CheckCircle } from "lucide-react";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mangalamab17@gmail.com",
    href: "mailto:mangalamab17@gmail.com",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/10",
    border: "border-rose-200 dark:border-rose-500/30",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mangalam-mishra",
    href: "https://www.linkedin.com/in/mangalam-mishra-61a878249",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/30",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Mangalam-17",
    href: "https://github.com/Mangalam-17",
    color: "text-neutral-700 dark:text-neutral-300",
    bg: "bg-neutral-100 dark:bg-neutral-800",
    border: "border-neutral-200 dark:border-neutral-700",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission — wire up to a real service (EmailJS, Formspree, etc.) later
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

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
          className="mb-14 text-center"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-2">
            Contact
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white">
            Get in Touch
          </h1>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400 text-lg leading-relaxed max-w-xl mx-auto">
            Open to full-stack roles, internship positions, collaborations, and
            tech discussions. I usually respond within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* LEFT — Contact links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            <motion.p
              variants={itemVariants}
              className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2"
            >
              Reach me directly
            </motion.p>

            {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-2xl border ${border} ${bg} hover:scale-[1.02] hover:shadow-md transition-all duration-200`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm`}>
                  <Icon className={`${color} text-lg`} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">{label}</p>
                  <p className="text-sm font-semibold dark:text-white">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Resume CTA */}
            <motion.div variants={itemVariants} className="pt-4">
              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6 shadow-sm"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 py-12 text-center"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-50 dark:bg-emerald-500/10 flex items-center justify-center">
                  <CheckCircle size={28} className="text-emerald-500" />
                </div>
                <h3 className="text-lg font-semibold dark:text-white">Message sent!</h3>
                <p className="text-sm text-neutral-500 dark:text-neutral-400 max-w-xs">
                  Thanks for reaching out. I'll get back to you within 24 hours.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", message: "" }); }}
                  className="text-sm text-accent-500 hover:text-accent-600 font-medium transition"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-base font-semibold dark:text-white mb-2">Send a message</h3>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-400 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-400 transition"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-medium text-neutral-600 dark:text-neutral-400">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    className="w-full px-4 py-2.5 text-sm rounded-xl border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 dark:text-white placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-accent-500/40 focus:border-accent-400 transition resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 disabled:opacity-60 text-white rounded-xl font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 transition-all duration-200"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      <Send size={14} />
                      Send Message
                    </>
                  )}
                </button>

                <p className="text-xs text-neutral-400 dark:text-neutral-600 text-center">
                  * Form is a UI demo. Connect to EmailJS or Formspree to enable real sending.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
