import { motion } from "framer-motion";

export default function TechCard({ icon: Icon, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -2, scale: 1.04 }}
      className="flex items-center gap-2.5 px-4 py-2 
                 bg-white dark:bg-neutral-900 
                 rounded-xl text-sm 
                 border border-neutral-200 dark:border-neutral-800
                 shadow-sm hover:shadow-md hover:border-accent-300 dark:hover:border-accent-500/50
                 hover:bg-accent-50 dark:hover:bg-accent-500/5
                 transition-all duration-200 cursor-default"
    >
      <Icon className="text-base text-accent-500 dark:text-accent-400 flex-shrink-0" />
      <span className="font-medium text-neutral-700 dark:text-neutral-300 text-xs">{name}</span>
    </motion.div>
  );
}
