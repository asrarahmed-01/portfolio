import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'proj-1',
    title: 'Project Alpha',
    description: 'A short one-line description of the project.',
    longDescription: 'Longer description explaining the problem solved, your approach, and the impact.',
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
    githubUrl: 'https://github.com/yourusername/project-alpha',
    liveUrl: 'https://project-alpha.vercel.app',
    featured: true,
    year: '2024',
  },
  {
    id: 'proj-2',
    title: 'Project Beta',
    description: 'A short one-line description of the project.',
    technologies: ['React', 'Python', 'Docker', 'Bun'],
    githubUrl: 'https://github.com/yourusername/project-beta',
    featured: true,
    year: '2023',
  },
  {
    id: 'proj-3',
    title: 'Project Gamma',
    description: 'A short one-line description of the project.',
    technologies: ['React Native', 'TypeScript', 'PostgreSQL'],
    githubUrl: 'https://github.com/yourusername/project-gamma',
    featured: false,
    year: '2023',
  },
]
