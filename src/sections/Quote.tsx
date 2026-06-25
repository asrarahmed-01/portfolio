import { useIntersection } from '@/hooks/useIntersection'
import { cn } from '@/utils/cn'

// Swap out this quote for any favourite one
const QUOTE = {
  text: 'The best way to predict the future is to invent it.',
  author: 'Alan Kay',
}

export function Quote() {
  const { ref, isVisible } = useIntersection<HTMLElement>()

  return (
    <section ref={ref} className="py-16">
      <div className="section-container">
        <div
          className={cn(
            'card border-l-2 border-l-accent py-6 px-6 transition-all duration-700',
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
          )}
        >
          <blockquote className="font-display text-lg sm:text-xl text-zinc-700 dark:text-zinc-300 italic leading-relaxed mb-3">
            "{QUOTE.text}"
          </blockquote>
          <cite className="font-mono text-xs text-zinc-400 dark:text-zinc-500 not-italic">
            — {QUOTE.author}
          </cite>
        </div>
      </div>
    </section>
  )
}
