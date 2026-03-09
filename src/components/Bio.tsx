import { SocialLinks } from './SocialLinks'

export function Bio() {
  return (
    <div className="bio">
      <h1 className="bio-name">Mert Fıçıcı</h1>
      <p className="bio-description">
        Software Engineering undergraduate and research assistant with an interest in artifical intelligence, particularly in computer vision, natural language processing and reinforcement learning.
      </p>
      <SocialLinks />
    </div>
  )
}
