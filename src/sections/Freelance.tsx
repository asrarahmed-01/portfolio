import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'
import { freelanceProjects } from '@/data/freelance'

export function Freelance() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="freelance" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">04 — freelance</p>
        <h2 className="section-heading">Client work</h2>

        <div
          className={cn(
            'mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {freelanceProjects.map((project) => (
            <div key={project.id} className="card card-hover">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <p className="font-mono text-xs text-accent dark:text-accent-light mb-1">
                    {project.client}
                  </p>
                  <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                    {project.title}
                  </h3>
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">{project.year}</span>
              </div>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 font-mono text-xs text-zinc-400 hover:text-accent dark:hover:text-accent-light transition-colors"
                >
                  Visit ↗
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
