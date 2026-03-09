import { FiFileText, FiGlobe } from 'react-icons/fi'
import { SiGithub } from 'react-icons/si'
import type { Project } from '../data/projects'

const SLOTS = [
  { key: 'github'  as const, Icon: SiGithub,   label: 'GitHub'  },
  { key: 'paper'   as const, Icon: FiFileText,  label: 'Paper'   },
  { key: 'website' as const, Icon: FiGlobe,     label: 'Website' },
]

export function ProjectCard({ title, description, image, links }: Project) {
  const hasAnyLink = SLOTS.some(({ key }) => links[key])
  return (
    <div className="project-card">
      <div className="project-card-image">
        {image && <img src={image} alt={title} />}
      </div>
      <div className="project-card-content">
        <h3 className="project-card-title">{title}</h3>
        <p className="project-card-description">{description}</p>
      </div>
      {hasAnyLink && (
        <div className="project-card-links">
          {SLOTS.map(({ key, Icon, label }) => (
            links[key]
              ? (
                <a
                  key={key}
                  className="project-card-link"
                  href={links[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                >
                  <Icon size={36} />
                </a>
              )
              : <div key={key} className="project-card-link-placeholder" />
          ))}
        </div>
      )}
    </div>
  )
}
