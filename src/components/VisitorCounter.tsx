import { useVisitorCount } from '@/hooks/useVisitorCount'
import { cn } from '@/utils/cn'

interface VisitorCounterProps {
  className?: string
}

export function VisitorCounter({ className }: VisitorCounterProps) {
  const { count, isNew } = useVisitorCount()

  if (count === null) return null

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full',
        'bg-light-card dark:bg-dark-card border border-light-border dark:border-dark-border',
        'text-xs font-mono text-zinc-500 dark:text-zinc-400',
        isNew && 'animate-counter-pulse border-accent/40',
        className
      )}
    >
      {/* Pulsing dot */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-50" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
      </span>
      <span>
        <span className="text-zinc-900 dark:text-white font-semibold">
          {count.toLocaleString()}
        </span>{' '}
        {count === 1 ? 'visitor' : 'visitors'}
      </span>
    </div>
  )
}
