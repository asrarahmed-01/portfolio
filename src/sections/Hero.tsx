import { lazy, Suspense } from 'react'
import { VisitorCounter } from '@/components/VisitorCounter'

const SocialLinks = lazy(() => import('./SocialLinks').then(m => ({ default: m.SocialLinks })))

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center pt-16"
    >
      {/* Dot grid background */}
      <div className="absolute inset-0 dot-grid-light dark:dot-grid-dark opacity-60 pointer-events-none" />

      {/* Radial gradient vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light-bg dark:to-dark-bg pointer-events-none" />

      <div className="relative section-container py-20">
        {/* Visitor counter */}
        <div className="mb-10 animate-fade-in animate-delay-100">
          <VisitorCounter />
        </div>

        {/* Greeting */}
        <p className="font-mono text-sm text-accent mb-3 animate-fade-up animate-delay-100">
          Hello, world. I'm
        </p>

        {/* Name with cursor blink */}
        <h1 className="font-display font-bold text-4xl sm:text-6xl lg:text-7xl text-zinc-900 dark:text-white mb-4 animate-fade-up animate-delay-200">
           Syed Asrar Ahmed
          <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-2 align-middle animate-cursor-blink" />
        </h1>

        {/* Role */}
        <h2 className="font-display text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 mb-6 animate-fade-up animate-delay-300">
            Software Engineer &{' '}
          <span className="gradient-text">Full Stack Developer</span>
        </h2>

        {/* Short bio */}
        <p className="font-body text-zinc-600 dark:text-zinc-400 max-w-lg leading-relaxed mb-10 animate-fade-up animate-delay-400">
          I build fast, accessible, and beautiful web experiences. Passionate about
          clean code, great design, and making things that matter.
        </p>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12 animate-fade-up animate-delay-500">
          <a
            href="#projects"
            className="px-5 py-2.5 bg-accent text-white font-body font-medium text-sm rounded-lg hover:bg-accent-dark transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-light-border dark:border-dark-border text-zinc-700 dark:text-zinc-300 font-body font-medium text-sm rounded-lg hover:border-accent/50 hover:text-accent dark:hover:text-accent-light transition-all duration-200"
          >
            Resume ↗
          </a>
        </div>

        {/* Social links */}
        <Suspense fallback={null}>
          <SocialLinks variant="hero" />
        </Suspense>
      </div>
    </section>
  )
}
