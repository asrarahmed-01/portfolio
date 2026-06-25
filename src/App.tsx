import { lazy, Suspense } from 'react'
import { ThemeProvider } from '@/context/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { Hero } from '@/sections/Hero'

// Lazy load all below-fold sections
const About = lazy(() => import('@/sections/About').then(m => ({ default: m.About })))
const WorkExperience = lazy(() => import('@/sections/WorkExperience').then(m => ({ default: m.WorkExperience })))
const Projects = lazy(() => import('@/sections/Projects').then(m => ({ default: m.Projects })))
const Freelance = lazy(() => import('@/sections/Freelance').then(m => ({ default: m.Freelance })))
const Education = lazy(() => import('@/sections/Education').then(m => ({ default: m.Education })))
const Technologies = lazy(() => import('@/sections/Technologies').then(m => ({ default: m.Technologies })))
const SocialLinks = lazy(() => import('@/sections/SocialLinks').then(m => ({ default: m.SocialLinks })))
const Quote = lazy(() => import('@/sections/Quote').then(m => ({ default: m.Quote })))

// Simple section skeleton while lazy loading
function SectionSkeleton() {
  return (
    <div className="py-20">
      <div className="section-container">
        <div className="h-3 w-20 bg-light-card dark:bg-dark-card rounded mb-6 animate-pulse" />
        <div className="h-6 w-48 bg-light-card dark:bg-dark-card rounded mb-8 animate-pulse" />
        <div className="space-y-3">
          <div className="h-24 bg-light-card dark:bg-dark-card rounded-xl animate-pulse" />
          <div className="h-24 bg-light-card dark:bg-dark-card rounded-xl animate-pulse opacity-70" />
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Suspense fallback={<SectionSkeleton />}>
            <About />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <WorkExperience />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Projects />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Freelance />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Education />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <Technologies />
          </Suspense>
          <Suspense fallback={null}>
            <Quote />
          </Suspense>
          <Suspense fallback={<SectionSkeleton />}>
            <SocialLinks variant="section" />
          </Suspense>
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}
