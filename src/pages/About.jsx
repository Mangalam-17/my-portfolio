import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="pt-32 pb-36 max-w-5xl mx-auto px-6 space-y-12">
      {/* SECTION HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-5xl font-semibold tracking-tight">About Me</h2>
        <p className="mt-4 text-neutral-600 text-lg max-w-2xl leading-relaxed">
          Full-stack developer specializing in the MERN ecosystem and modern
          JavaScript workflows. Seeking entry level jobs and internships.
        </p>
      </motion.div>

      {/* DIVIDER */}
      <div className="h-px bg-neutral-200" />

      {/* SECTION BLOCKS */}
      <div className="space-y-10">
        {/* BLOCK 1 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-medium text-neutral-800">
            Background & Focus
          </h3>
          <p className="text-neutral-700 leading-relaxed max-w-3xl">
            I am a full-stack developer specializing in the MERN ecosystem with
            hands-on experience building production-grade web applications. My
            work focuses on designing RESTful backend services, implementing
            secure authentication workflows (JWT), and developing responsive,
            component-driven UIs using React and Tailwind.
          </p>
        </motion.div>

        {/* BLOCK 2 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-medium text-neutral-800">Product Work</h3>
          <p className="text-neutral-700 leading-relaxed max-w-3xl">
            I have built full-stack products such as Interview Mate — an
            AI-powered interview preparation platform utilizing Gemini for
            personalized question generation — and MindSpace, a mental health
            companion app offering mood tracking and therapy-based SPA flows.
            These projects reflect my capabilities in API design, state
            management, data modeling, and deployment.
          </p>
        </motion.div>

        {/* BLOCK 3 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-medium text-neutral-800">
            What I Work With
          </h3>
          <p className="text-neutral-700 leading-relaxed max-w-3xl">
            I work comfortably across the full development lifecycle including
            requirements, API contracts, database schemas (MongoDB), client-side
            routing (React Router), version control (Git/GitHub), environment
            configuration, and deployments (Vercel/Render).
          </p>
        </motion.div>

        {/* BLOCK 4 */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="space-y-2"
        >
          <h3 className="text-xl font-medium text-neutral-800">
            Currently Exploring
          </h3>
          <p className="text-neutral-700 leading-relaxed max-w-3xl">
            I am currently exploring opportunities in full-stack engineering,
            SaaS product development, and modern JavaScript ecosystems.
          </p>
        </motion.div>
      </div>

      {/* BOTTOM SPACER */}
      <div className="h-px opacity-0" />
    </section>
  );
}
