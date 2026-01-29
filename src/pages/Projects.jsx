import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section className="pt-32 pb-28 max-w-6xl mx-auto px-6">
      <h2 className="text-4xl font-semibold tracking-tight">
        Featured Projects
      </h2>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-2 gap-12">
        {projects.map((p) => (
          <ProjectCard key={p.title} project={p} />
        ))}
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden flex gap-6 overflow-x-scroll snap-x snap-mandatory pb-6">
        {projects.map((p) => (
          <div key={p.title} className="min-w-[85%] snap-center">
            <ProjectCard project={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
