import type { Theme } from '../hooks/useTheme'
import { Bio } from './Bio'
import { PhotoFrame } from './PhotoFrame'
import { ThemeToggle } from './ThemeToggle'

interface Props {
  theme: Theme
  setTheme: (t: Theme) => void
}

export function Hero({ theme, setTheme }: Props) {
  return (
    <section className="hero">
      <ThemeToggle theme={theme} setTheme={setTheme} />
      <div className="hero-content">
        <PhotoFrame />
        <Bio />
      </div>
    </section>
  )
}
