import type { FreelanceProject } from '@/types'

export const freelanceProjects: FreelanceProject[] = [
  {
    id: 'fl-1',
    client: 'Client Name',
    title: 'E-commerce Platform Redesign',
    description: 'Redesigned and rebuilt the frontend of a mid-size e-commerce platform, improving conversion rate by 25%.',
    technologies: ['Next.js', 'Tailwind CSS', 'Figma', 'TypeScript'],
    year: '2024',
    url: 'https://example-client.com',
  },
  {
    id: 'fl-2',
    client: 'Startup XYZ',
    title: 'MVP Development',
    description: 'Built a full-stack MVP from scratch including auth, dashboard, and API integrations.',
    technologies: ['Next.js', 'Prisma', 'PostgreSQL', 'Docker'],
    year: '2023',
  },
]
