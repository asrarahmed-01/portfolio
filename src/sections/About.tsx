import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'

export function About() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section id="about" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">01 — about</p>
        <h2 className="section-heading">Who I am</h2>

        <div
          className={cn(
            'grid grid-cols-1 md:grid-cols-5 gap-10 mt-8 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {/* Text content */}
          <div className="md:col-span-3 space-y-4 text-zinc-600 dark:text-zinc-400 leading-relaxed">
            <p>
              I'm a full-stack developer based in{' '}
              <span className="text-zinc-900 dark:text-white font-medium">Hyderabad, India</span>,
              with a passion for building products that are both technically excellent
              and delightful to use.
            </p>
            <p>
              I enjoy working across the entire stack — from database design to pixel-perfect
              UI. I'm particularly drawn to performance engineering, developer tooling,
              and the intersection of design and code.
            </p>
            <p>
              When I'm not coding, I'm usually solving problems on competitive programming
              platforms, contributing to open source, or exploring design systems.
            </p>
          </div>

          {/* Stats / quick facts */}
          <div className="md:col-span-2 space-y-4">
            {[
              { label: 'Location', value: 'Hyderabad, India' },
              { label: 'Experience', value: '1+ years' },
              { label: 'Focus', value: 'Full Stack + UI' },
              { label: 'Available', value: 'Open to work' },
            ].map(fact => (
              <div
                key={fact.label}
                className="card flex justify-between items-center py-3 px-4"
              >
                <span className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                  {fact.label}
                </span>
                <span className="font-body text-sm text-zinc-900 dark:text-white font-medium">
                  {fact.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
