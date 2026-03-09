export interface ProjectLinks {
  github?: string
  paper?: string
  website?: string
}

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  links: ProjectLinks
}

export const projects: Project[] = [
  { id: 'project-1', title: '', description: '', links: {} },
]
