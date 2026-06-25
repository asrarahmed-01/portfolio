import type { Technology } from '@/types'

export const technologies: Technology[] = [
  // Languages
  { name: 'TypeScript', category: 'language' },
  { name: 'JavaScript', category: 'language' },
  { name: 'Python', category: 'language' },
  { name: 'C', category: 'language' },
  { name: 'C++', category: 'language' },

  // Frameworks & Libraries
  { name: 'React', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'React Native', category: 'framework' },
  { name: 'Tailwind CSS', category: 'framework' },
  { name: 'Prisma', category: 'framework' },

  // Tools & Infra
  { name: 'Git', category: 'tool' },
  { name: 'Docker', category: 'tool' },
  { name: 'Bun', category: 'tool' },

  // Databases
  { name: 'PostgreSQL', category: 'database' },

  // Design
  { name: 'Figma', category: 'design' },
]

export const techCategories = [
  { key: 'language', label: 'Languages' },
  { key: 'framework', label: 'Frameworks & Libraries' },
  { key: 'tool', label: 'Tools & Infra' },
  { key: 'database', label: 'Databases' },
  { key: 'design', label: 'Design' },
] as const
