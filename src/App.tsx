import { useEffect, useRef, useState } from 'react'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ProjectCard } from './components/ProjectCard'
import { sections } from './data/sections'
import type { SectionId } from './data/sections'
import { competitions } from './data/competitions'
import { experiences } from './data/experiences'
import { projects } from './data/projects'
import { publications } from './data/publications'
import type { Project } from './data/projects'
import { useTheme } from './hooks/useTheme'
import './index.css'

const sectionData: Record<SectionId, Project[]> = {
  experience:   experiences,
  projects:     projects,
  competitions: competitions,
  publications: publications,
}

export default function App() {
  const { theme, setTheme } = useTheme()
  const [activeSection, setActiveSection] = useState<SectionId>(sections[0].id)
  const sectionRefs = useRef<Partial<Record<SectionId, HTMLElement | null>>>({})

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
      <Hero theme={theme} setTheme={setTheme} />
      <Nav active={activeSection} onChange={scrollToSection} />
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
