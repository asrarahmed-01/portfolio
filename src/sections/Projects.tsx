import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'
import { projects } from '@/data/projects'

export function Projects() {
  const { ref, isVisible } = useIntersection<HTMLElement>()
  const featured = projects.filter(p => p.featured)
  const others = projects.filter(p => !p.featured)

  return (
    <section id="projects" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">03 — projects</p>
        <h2 className="section-heading">Things I've built</h2>

        {/* Featured */}
        <div
          className={cn(
            'mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {featured.map((project) => (
            <div key={project.id} className="card card-hover group relative">
              {/* Year badge */}
              <span className="absolute top-4 right-4 font-mono text-xs text-zinc-400 dark:text-zinc-500">
                {project.year}
              </span>

              {/* Folder icon */}
              <div className="text-accent mb-3">
                <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
                </svg>
              </div>

              <h3 className="font-display font-semibold text-zinc-900 dark:text-white mb-2">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {project.longDescription ?? project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {project.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>

              <div className="flex gap-3">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-zinc-400 hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    GitHub ↗
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs text-zinc-400 hover:text-accent dark:hover:text-accent-light transition-colors"
                  >
                    Live ↗
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Other projects */}
        {others.length > 0 && (
          <div className="mt-6 space-y-3">
            <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-3">Other noteworthy projects</p>
            {others.map(project => (
              <div key={project.id} className="card card-hover flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-display font-medium text-zinc-900 dark:text-white text-sm">{project.title}</h4>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">{project.description}</p>
                </div>
                <div className="flex flex-wrap gap-1.5 shrink-0">
                  {project.technologies.slice(0, 3).map(tech => (
                    <span key={tech} className="tag">{tech}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
