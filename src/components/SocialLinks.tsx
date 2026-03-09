import { socials } from '../data/socials'
import { SocialLink } from './SocialLink'

export function SocialLinks() {
  return (
    <div className="social-links">
      {socials.map(({ id, label, href, Icon }) => (
        <SocialLink key={id} label={label} href={href} Icon={Icon} />
      ))}
    </div>
  )
}
