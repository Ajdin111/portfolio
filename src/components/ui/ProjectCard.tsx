import type { Project } from '../../types'
import TechTag from './TechTag'

interface ProjectCardProps {
  project: Project
  reverse?: boolean
}

export default function ProjectCard({ project, reverse = false }: ProjectCardProps) {
  return (
    <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-12 items-center`}>
      
      {/* Image */}
      <div className="w-full lg:w-1/2 rounded-lg overflow-hidden border border-white/5 bg-white/3">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-56 md:h-64 object-cover"
          />
        ) : (
          <div className="w-full h-56 md:h-64 flex items-center justify-center bg-white/5">
            <p className="text-gray-600 text-sm">Screenshot coming soon</p>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 flex flex-col gap-4">
        <h3 className="text-white text-xl md:text-2xl font-semibold">
          {project.title}
        </h3>

        <p className="text-gray-400 text-base leading-relaxed">
          {project.description}
        </p>

        {project.role && (
          <p className="text-gray-500 text-sm italic">
            Role: {project.role}
          </p>
        )}

        <div className="flex flex-wrap gap-2">
          {project.tags.map(tag => (
            <TechTag key={tag.label} tag={tag} />
          ))}
        </div>

        <div className="flex items-center gap-4 mt-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-sm hover:text-teal-300 transition-colors duration-200 flex items-center gap-1"
            >
              Live Demo
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-teal-400 text-sm hover:text-teal-300 transition-colors duration-200 flex items-center gap-1"
            >
              GitHub
              <svg width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}