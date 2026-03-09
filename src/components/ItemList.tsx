import type { SectionId } from '../data/sections'
import { ItemCard } from './ItemCard'

const PLACEHOLDER_COUNT = 4

interface Props {
  section: SectionId
}

export function ItemList({ section }: Props) {
  return (
    <div className="item-list-container" data-section={section}>
      <div className="item-list">
        {Array.from({ length: PLACEHOLDER_COUNT }, (_, i) => (
          <ItemCard key={i} />
        ))}
      </div>
    </div>
  )
}
