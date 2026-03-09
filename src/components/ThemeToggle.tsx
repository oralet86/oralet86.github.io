import { FiMoon, FiSun } from 'react-icons/fi'
import type { Theme } from '../hooks/useTheme'

interface Props {
  theme: Theme
  setTheme: (t: Theme) => void
}

export function ThemeToggle({ theme, setTheme }: Props) {
  const isDark = theme === 'dark'
  return (
    <div className="theme-toggle-wrapper">
      <FiSun className={`toggle-icon${!isDark ? ' toggle-icon--visible' : ''}`} size={15} />
      <button
        className={`theme-toggle${isDark ? ' theme-toggle--dark' : ''}`}
        onClick={() => setTheme(isDark ? 'light' : 'dark')}
        aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      />
      <FiMoon className={`toggle-icon${isDark ? ' toggle-icon--visible' : ''}`} size={15} />
    </div>
  )
}
