import { projects } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'

export default function Work() {
  return (
    <section
      id="work"
      className="min-h-screen flex flex-col justify-center px-8 md:px-16 lg:px-20 py-20"
    >
      <div className="max-w-3xl mx-auto w-full">
        {/* Section label */}
        <p className="text-teal-400 text-xs font-mono uppercase tracking-widest mb-3">
          02 — Projects
        </p>

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12">
          Selected Work
        </h2>

        {/* Project cards */}
        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              reverse={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  )
}