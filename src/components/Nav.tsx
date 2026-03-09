import { sections } from '../data/sections'
import type { SectionId } from '../data/sections'

interface Props {
  active: SectionId
  onChange: (id: SectionId) => void
}

export function Nav({ active, onChange }: Props) {
  return (
    <nav className="nav">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className={`nav-button${active === id ? ' active' : ''}`}
          onClick={() => onChange(id)}
        >
          {label}
        </button>
      ))}
    </nav>
  )
}
