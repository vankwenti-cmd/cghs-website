import Link from 'next/link'
import PhotoSlot from './photo-slot'
import Badge from './badge'

interface Pet {
  _id: string
  name: string
  ref: string
  meta: string
  waited: string
  location?: string
  image?: any
  tone?: string
  badgeText?: string
}

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link
      href={`/pets/${pet._id}`}
      className="block no-underline text-inherit bg-surface-card border border-border-default rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-cyan-300 transition"
    >
      <div className="h-52">
        <PhotoSlot image={pet.image} alt={pet.name} placeholder={`Photo of ${pet.name}`} />
      </div>
      <div className="p-4">
        <div className="flex items-baseline justify-between gap-2">
          <span className="font-bold text-xl">{pet.name}</span>
          <span className="text-xs text-text-tertiary font-mono">{pet.ref}</span>
        </div>
        <div className="text-sm text-text-secondary mt-1">{pet.meta}</div>
        {pet.location && <div className="text-sm text-text-secondary mt-0.5">{pet.location}</div>}
        {pet.waited && <div className="text-sm text-cyan-700 font-semibold mt-3">{pet.waited}</div>}
        {pet.badgeText && (
          <div className="mt-3">
            <Badge tone={pet.tone}>{pet.badgeText}</Badge>
          </div>
        )}
      </div>
    </Link>
  )
}
