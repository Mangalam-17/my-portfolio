import { motion } from "framer-motion";
import { useState } from "react";
import { FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";
import { Send, CheckCircle, Clock, Globe, Briefcase } from "lucide-react";

const contactLinks = [
  {
    icon: FaEnvelope,
    label: "Email",
    value: "mangalamab17@gmail.com",
    href: "mailto:mangalamab17@gmail.com",
    color: "text-rose-500",
    bg: "bg-rose-50 dark:bg-rose-500/10",
    border: "border-rose-200 dark:border-rose-500/30",
    hoverGlow: "group-hover:shadow-rose-500/20",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/mangalam-mishra",
    href: "https://www.linkedin.com/in/mangalam-mishra-61a878249",
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-500/10",
    border: "border-blue-200 dark:border-blue-500/30",
    hoverGlow: "group-hover:shadow-blue-500/20",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "github.com/Mangalam-17",
    href: "https://github.com/Mangalam-17",
    color: "text-neutral-700 dark:text-neutral-300",
    bg: "bg-neutral-100 dark:bg-neutral-800",
    border: "border-neutral-200 dark:border-neutral-700",
    hoverGlow: "group-hover:shadow-neutral-500/20",
  },
];

const quickInfo = [
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    color: "text-accent-500",
  },
  {
    icon: Globe,
    label: "Time Zone",
    value: "IST (GMT+5:30)",
    color: "text-purple-500",
  },
  {
    icon: Briefcase,
    label: "Availability",
    value: "Full-time & Internships",
    color: "text-emerald-500",
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
          className="mb-14"
        >
          <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400 mb-3">
            Contact
          </p>
          
          {/* Availability Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-full"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              Available for Opportunities
            </span>
          </motion.div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight dark:text-white mb-4">
            Get in Touch
          </h1>
          
          {/* Animated Description with Gradient Highlights */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed max-w-3xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Open to{" "}
              <span className="tech-highlight">full-stack roles</span>,{" "}
              <span className="tech-highlight">internship positions</span>, and{" "}
              <span className="tech-highlight">collaborations</span>.{" "}
            </motion.span>
            
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Let's discuss{" "}
              <span className="tech-highlight">tech</span>,{" "}
              <span className="tech-highlight">projects</span>, or opportunities — I typically respond within{" "}
              <span className="tech-highlight">24 hours</span>.
            </motion.span>
          </motion.div>
        </motion.div>
        
        {/* Quick Info Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12"
        >
          {quickInfo.map((info, i) => (
            <motion.div
              key={info.label}
              variants={itemVariants}
              className="flex items-center gap-3 p-4 bg-white dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 hover:border-accent-300 dark:hover:border-accent-500/40 transition-all duration-300"
            >
              <div className={`w-8 h-8 rounded-lg bg-accent-50 dark:bg-accent-500/10 flex items-center justify-center`}>
                <info.icon size={16} className={info.color} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">{info.label}</p>
                <p className="text-sm font-semibold dark:text-white">{info.value}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-1 gap-10">
          {/* Contact links */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-4 max-w-2xl mx-auto w-full"
          >
            <motion.div
              variants={itemVariants}
              className="flex items-center gap-2 mb-4"
            >
              <div className="w-1 h-5 rounded-full bg-accent-500" />
              <p className="text-xs font-semibold tracking-widest uppercase text-accent-500 dark:text-accent-400">
                Connect
              </p>
            </motion.div>

            {contactLinks.map(({ icon: Icon, label, value, href, color, bg, border, hoverGlow }) => (
              <motion.a
                key={label}
                variants={itemVariants}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                className={`group relative flex items-center gap-4 p-4 rounded-2xl border ${border} ${bg} hover:-translate-y-1 hover:shadow-2xl ${hoverGlow} transition-all duration-300`}
              >
                {/* Purple glow effect on hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-500/0 via-purple-500/0 to-accent-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl -z-10" />
                
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-white dark:bg-neutral-900 shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`${color} text-lg`} />
                </div>
                <div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 font-medium">{label}</p>
                  <p className="text-sm font-semibold dark:text-white">{value}</p>
                </div>
              </motion.a>
            ))}

            {/* Resume CTA */}
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="/resume.pdf"
                download
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 hover:bg-accent-600 text-white rounded-xl font-medium text-sm shadow-lg shadow-accent-500/25 hover:shadow-accent-500/40 hover:scale-[1.02] transition-all duration-200"
              >
                📄 Download Resume
              </a>
            </motion.div>
            
            {/* Social Proof Badge */}
            <motion.div
              variants={itemVariants}
              className="pt-4 flex items-center justify-center gap-4 text-xs text-neutral-500 dark:text-neutral-500"
            >
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Active on GitHub</span>
              </div>
              <span>•</span>
              <span>10+ Projects Deployed</span>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
