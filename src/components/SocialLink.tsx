import type { IconType } from 'react-icons'

interface Props {
  label: string
  href: string
  Icon: IconType
}

export function SocialLink({ label, href, Icon }: Props) {
  return (
    <a className="social-link" href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      <Icon size={34} />
    </a>
  )
}
