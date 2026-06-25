import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'
import { experiences } from '@/data/experience'
import { formatDateRange } from '@/utils/formatDate'

export function WorkExperience() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="experience" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">02 — experience</p>
        <h2 className="section-heading">Where I've worked</h2>

        <div
          className={cn(
            'mt-8 space-y-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className={cn('card card-hover', `animate-delay-${(i + 1) * 100}`)}
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                <div>
                  <h3 className="font-display font-semibold text-zinc-900 dark:text-white">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 mt-0.5">
                    {exp.companyUrl ? (
                      <a
                        href={exp.companyUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent dark:text-accent-light text-sm font-medium hover:underline"
                      >
                        {exp.company} ↗
                      </a>
                    ) : (
                      <span className="text-accent dark:text-accent-light text-sm font-medium">
                        {exp.company}
                      </span>
                    )}
                    <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 px-2 py-0.5 rounded-full bg-light-card dark:bg-dark-bg border border-light-border dark:border-dark-border">
                      {exp.type}
                    </span>
                  </div>
                </div>
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
                  {formatDateRange(exp.startDate, exp.endDate)}
                </span>
              </div>

              <ul className="space-y-1.5 mb-4">
                {exp.bullets.map((bullet, j) => (
                  <li key={j} className="flex gap-2 text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    <span className="text-accent mt-1 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.technologies.map(tech => (
                  <span key={tech} className="tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
