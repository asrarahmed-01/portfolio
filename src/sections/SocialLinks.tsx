import { socialLinks } from '@/data/social'
import { cn } from '@/utils/cn'
import { useIntersection } from '@/hooks/useIntersection'

interface SocialLinksProps {
  variant?: 'hero' | 'section'
}

// Platform icon SVGs (inline, no dependency)
function SocialIcon({ platform }: { platform: string }) {
  const cls = "w-5 h-5"
  switch (platform.toLowerCase()) {
    case 'github':
      return <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
    case 'linkedin':
      return <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
    case 'mail':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
    case 'phone':
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
    case 'leetcode':
      return <svg className={cls} fill="currentColor" viewBox="0 0 24 24"><path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"/></svg>
    default:
      return <svg className={cls} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"/></svg>
  }
}

export function SocialLinks({ variant = 'section' }: SocialLinksProps) {
  const { ref, isVisible } = useIntersection<HTMLElement>()
  const visible = socialLinks.filter(s => s.visible)

  if (variant === 'hero') {
    return (
      <div className="flex flex-wrap gap-3 animate-fade-up animate-delay-500">
        {visible.map(link => (
          <a
            key={link.platform}
            href={link.url}
            target={link.url.startsWith('http') ? '_blank' : undefined}
            rel="noopener noreferrer"
            aria-label={link.platform}
            className="p-2 rounded-lg text-zinc-400 dark:text-zinc-500 hover:text-accent dark:hover:text-accent-light hover:bg-light-card dark:hover:bg-dark-card border border-transparent hover:border-light-border dark:hover:border-dark-border transition-all duration-200"
            title={link.username ?? link.platform}
          >
            <SocialIcon platform={link.icon} />
          </a>
        ))}
      </div>
    )
  }

  return (
    <section id="social" ref={ref} className="py-20">
      <div className="section-container">
        <p className="section-subheading">07 — connect</p>
        <h2 className="section-heading">Find me online</h2>

        <div
          className={cn(
            'mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          {visible.map(link => (
            <a
              key={link.platform}
              href={link.url}
              target={link.url.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="card card-hover flex items-center gap-3 group"
            >
              <span className="text-zinc-400 dark:text-zinc-500 group-hover:text-accent dark:group-hover:text-accent-light transition-colors">
                <SocialIcon platform={link.icon} />
              </span>
              <div>
                <p className="font-display font-medium text-sm text-zinc-900 dark:text-white">
                  {link.platform}
                </p>
                {link.username && (
                  <p className="font-mono text-xs text-zinc-400 dark:text-zinc-500">
                    {link.username}
                  </p>
                )}
              </div>
              <span className="ml-auto text-zinc-300 dark:text-zinc-600 group-hover:text-accent dark:group-hover:text-accent-light transition-colors text-xs">
                ↗
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
