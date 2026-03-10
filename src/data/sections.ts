export const sections = [
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'publications', label: 'Publications' },
  { id: 'competitions', label: 'Competitions' },
] as const

export type SectionId = typeof sections[number]['id']
