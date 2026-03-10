import { useEffect, useRef, useState } from 'react'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { sections } from './data/sections'
import type { SectionId } from './data/sections'
import { competitions } from './data/competitions'
import { educations } from './data/educations'
import { experiences } from './data/experiences'
import { projects } from './data/projects'
import { publications } from './data/publications'
import type { Project } from './data/projects'
import { useTheme } from './hooks/useTheme'
import './index.css'

const sectionData: Record<SectionId, Project[]> = {
  education:    educations,
  experience:   experiences,
  projects:     projects,
  publications: publications,
  competitions: competitions,
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0].id)
  const [heroVisible, setHeroVisible] = useState(true)
  const sectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({})
  const heroRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = heroRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    function onScroll() {
      let current: SectionId = sections[0].id
      for (const { id } of sections) {
        const el = sectionRefs.current[id]
        if (el && el.getBoundingClientRect().top <= 49) current = id
      }
      setActiveSection(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  function scrollToSection(id: SectionId) {
    sectionRefs.current[id]?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div>
      <div ref={heroRef}>
        <Hero theme={theme} setTheme={setTheme} />
      </div>
      <Nav
        active={activeSection}
        onChange={scrollToSection}
        theme={theme}
        setTheme={setTheme}
        heroVisible={heroVisible}
      />
      {sections.map(({ id, label }) => (
        <section
          key={id}
          className="content-section"
          ref={el => { sectionRefs.current[id] = el }}
        >
          <h2 className="section-heading">{label}</h2>
          <div className="item-list-wrapper">
            <div className="item-list">
              {sectionData[id].map(item => <ProjectCard key={item.id} {...item} />)}
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}
