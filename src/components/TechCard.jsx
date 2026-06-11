import { motion } from "framer-motion";

// Tech-specific color mapping
const getTechColor = (techName) => {
  const colorMap = {
    'React.js': '#61DAFB',
    'Node.js': '#339933',
    'JavaScript (ES6+)': '#F7DF1E',
    'TailwindCSS': '#06B6D4',
    'HTML': '#E34F26',
    'CSS': '#1572B6',
    'Express.js': '#000000',
    'REST APIs': '#009688',
    'JWT Auth': '#FB015B',
    'MongoDB': '#47A248',
    'Git': '#F05032',
    'GitHub': '#181717',
    'Postman': '#FF6C37',
    'VS Code': '#007ACC',
    'npm': '#CB3837',
    'AWS': '#FF9900',
  };
  return colorMap[techName] || '#6366f1'; // Default to accent color
};

export default function TechCard({ icon: Icon, name, index }) {
  const techColor = getTechColor(name);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4, ease: "easeOut" }}
      whileHover={{ y: -3, scale: 1.05 }}
      className="group flex items-center gap-2.5 px-4 py-2 
                 bg-white dark:bg-neutral-900 
                 rounded-xl text-sm 
                 border border-neutral-200 dark:border-neutral-800
                 shadow-sm hover:shadow-lg hover:border-accent-300 dark:hover:border-accent-500/50
                 hover:bg-accent-50 dark:hover:bg-accent-500/5
                 transition-all duration-200 cursor-default"
    >
      <motion.div
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        <Icon 
          className="text-base flex-shrink-0" 
          style={{ color: techColor }}
        />
      </motion.div>
      <span className="font-medium text-neutral-700 dark:text-neutral-300 text-xs group-hover:text-accent-700 dark:group-hover:text-accent-300 transition-colors">
        {name}
      </span>
    </motion.div>
  );
}
