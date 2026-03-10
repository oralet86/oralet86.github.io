import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import type { Theme } from '../hooks/useTheme'
import { sections } from '../data/sections'
import type { SectionId } from '../data/sections'
import { ThemeToggle } from './ThemeToggle'

interface Props {
  active: SectionId
  onChange: (id: SectionId) => void
  theme: Theme
  setTheme: (t: Theme) => void
  heroVisible: boolean
}

export function Nav({ active, onChange, theme, setTheme, heroVisible }: Props) {
  const [menuOpen, setMenuOpen] = useState(false)

  function handleNav(id: SectionId) {
    onChange(id)
    setMenuOpen(false)
  }

  return (
    <nav className="nav">
      <button
        className="nav-hamburger"
        onClick={() => setMenuOpen(o => !o)}
        aria-label="Menu"
      >
        {menuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
      </button>
      <div className="nav-spacer" />
      <div className={`nav-buttons${menuOpen ? ' nav-buttons--open' : ''}`}>
        {sections.map(({ id, label }) => (
          <button
            key={id}
            className={`nav-button${active === id ? ' active' : ''}`}
            onClick={() => handleNav(id)}
          >
            {label}
          </button>
        ))}
      </div>
      <div className={`nav-theme-toggle${heroVisible ? '' : ' nav-theme-toggle--visible'}`}>
        <ThemeToggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  )
}
