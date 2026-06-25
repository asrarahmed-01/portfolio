export interface Experience {
  id: string
  role: string
  company: string
  companyUrl?: string
  startDate: string
  endDate: string | 'Present'
  description: string
  bullets: string[]
  technologies: string[]
  type: 'fulltime' | 'parttime' | 'contract'
}

export interface Project {
  id: string
  title: string
  description: string
  longDescription?: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  imageUrl?: string
  featured: boolean
  year: string
}

export interface FreelanceProject {
  id: string
  client: string
  title: string
  description: string
  technologies: string[]
  year: string
  url?: string
}

export interface Education {
  id: string
  degree: string
  institution: string
  location: string
  startYear: string
  endYear: string | 'Present'
  description?: string
  achievements?: string[]
}

export interface Technology {
  name: string
  category: 'language' | 'framework' | 'tool' | 'database' | 'design'
  icon?: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: string
  username?: string
  visible: boolean
}

export type Theme = 'light' | 'dark'
