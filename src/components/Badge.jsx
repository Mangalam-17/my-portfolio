export default function Badge({ label }) {
  return (
    <span className="px-2.5 py-1 text-xs rounded-full border border-accent-200 dark:border-accent-500/30 bg-accent-50 dark:bg-accent-500/10 text-accent-700 dark:text-accent-300 font-medium tracking-tight">
      {label}
    </span>
  );
}
