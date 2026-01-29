export default function Badge({ label }) {
  return (
    <span className="px-3 py-1 text-xs rounded-full border border-neutral-300/50 bg-white/80 backdrop-blur-sm text-neutral-700 tracking-tight">
      {label}
    </span>
  );
}
