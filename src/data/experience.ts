import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'exp-1',
    role: 'Senior Full Stack Developer',
    company: 'Your Company',
    companyUrl: 'https://example.com',
    startDate: 'Jan 2023',
    endDate: 'Present',
    description: 'Brief one-line description of what the company does.',
    bullets: [
      'Built and maintained scalable backend services using Next.js and PostgreSQL, serving 50k+ users.',
      'Led migration from REST to GraphQL, reducing API response time by 40%.',
      'Implemented CI/CD pipelines with Docker and GitHub Actions.',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'Prisma', 'Docker'],
    type: 'fulltime',
  },
  {
    id: 'exp-2',
    role: 'Frontend Developer',
    company: 'Previous Company',
    companyUrl: 'https://example.com',
    startDate: 'Jun 2021',
    endDate: 'Dec 2022',
    description: 'Brief one-line description of what the company does.',
    bullets: [
      'Developed responsive UIs using React and Tailwind CSS for fintech products.',
      'Collaborated with designers to implement pixel-perfect Figma designs.',
      'Improved Core Web Vitals scores by 30% through code splitting and lazy loading.',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    type: 'fulltime',
  },
]
