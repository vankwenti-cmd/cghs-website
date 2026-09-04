import Link from 'next/link'

interface Pet {
  _id: string
  name: string
  ref: string
  meta: string
  waited: string
}

export default function PetCard({ pet }: { pet: Pet }) {
  return (
    <Link href={`/pets/${pet._id}`}>
      <div className="block no-underline text-inherit bg-surface-card border border-border-default rounded-lg overflow-hidden shadow-sm hover:shadow-md hover:border-cyan-300 transition cursor-pointer">
        <div className="h-52 bg-slate-100 flex items-center justify-center text-gray-400">
          Photo of {pet.name}
        </div>
        <div className="p-4">
          <div className="flex items-baseline justify-between gap-2">
            <span className="font-bold text-2xl">{pet.name}</span>
            <span className="text-xs text-text-tertiary font-mono">{pet.ref}</span>
          </div>
          <div className="text-sm text-text-secondary mt-1">{pet.meta}</div>
          <div className="text-sm text-cyan-700 font-semibold mt-3">{pet.waited}</div>
        </div>
      </div>
    </Link>
  )
}
