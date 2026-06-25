import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'
import { education } from '@/data/education'

export function Education() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="education" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">05 — education</p>
        <h2 className="section-heading">Academic background</h2>

        <div
          className={cn(
            'mt-8 space-y-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {education.map((edu) => (
            <div key={edu.id} className="card card-hover">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                <div>
                  <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-accent dark:text-accent-light text-sm font-medium mt-0.5">
                    {edu.institution}
                  </p>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-0.5">{edu.location}</p>
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>

              {edu.description && (
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mt-3">
                  {edu.description}
                </p>
              )}

              {edu.achievements && edu.achievements.length > 0 && (
                <ul className="mt-3 space-y-1">
                  {edu.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                      <span className="text-accent">▸</span>
                      <span>{a}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
