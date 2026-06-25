import { socialLinks } from '@/data/social'

export function Footer() {
  const year = new Date().getFullYear()
  const visible = socialLinks.filter(s => s.visible)

  return (
    <footer className="border-t border-light-border dark:border-dark-border py-10 mt-20">
      <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-mono">
          © {year} — built with React & Tailwind
        </p>
        <div className="flex items-center gap-4">
          {visible.slice(0, 5).map(link => (
            <a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={link.platform}
              className="text-zinc-400 hover:text-accent dark:hover:text-accent-light transition-colors"
            >
              <span className="font-mono text-xs">{link.platform}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
