export const sections = [
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'competitions', label: 'Competitions' },
  { id: 'publications', label: 'Publications' },
] as const

export type SectionId = typeof sections[number]['id']
