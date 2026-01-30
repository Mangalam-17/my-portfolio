import { motion } from "framer-motion";

export default function TechCard({ icon: Icon, name, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.35 }}
      className="flex items-center gap-2 px-3 py-1.5 
                 bg-neutral-100 rounded-full text-sm 
                 border border-neutral-200
                 hover:bg-neutral-200 transition"
    >
      <Icon className="text-lg" />
      <span className="font-medium text-neutral-800">{name}</span>
    </motion.div>
  );
}
