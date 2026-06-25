import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'
import { technologies, techCategories } from '@/data/technologies'

export function Technologies() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="technologies" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">06 — technologies</p>
        <h2 className="section-heading">My toolkit</h2>

        <div
          className={cn(
            'mt-8 space-y-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {techCategories.map(category => {
            const techs = technologies.filter(t => t.category === category.key)
            if (techs.length === 0) return null
            return (
              <div key={category.key}>
                <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500 mb-3 uppercase tracking-widest">
                  {category.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech, i) => (
                    <span
                      key={tech.name}
                      className={cn(
                        'font-mono text-sm px-3.5 py-1.5 rounded-lg border',
                        'bg-light-card dark:bg-dark-card border-light-border dark:border-dark-border',
                        'text-zinc-700 dark:text-zinc-300',
                        'hover:border-accent/50 hover:text-accent dark:hover:text-accent-light',
                        'transition-all duration-200 cursor-default',
                        `animate-delay-${Math.min((i + 1) * 50, 500)}`
                      )}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
