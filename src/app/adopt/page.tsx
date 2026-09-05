import { Suspense } from 'react'
import { getPets } from '../../../sanity/lib/client'
import PetCard from '@/components/pet-card'
import AdoptFilters from '@/components/adopt-filters'

export const metadata = {
  title: 'Adoptable Pets | Columbia Gorge Humane Society',
  description: 'Browse our adoptable cats and dogs. Every animal is vaccinated, microchipped, and ready for their forever home.',
}

export default async function AdoptPage({
  searchParams,
}: {
  searchParams: { species?: string; age?: string; size?: string; location?: string }
}) {
  const pets = await getPets({
    species: searchParams.species,
    age: searchParams.age,
    size: searchParams.size,
    location: searchParams.location,
  })

  return (
    <div>
      {/* Header */}
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Adoptable pets</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Every animal here is spayed or neutered, vaccinated, microchipped, and has been assessed
            by our staff. Adoption fees range from $75 to $350 and go straight back into care.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-8 pb-22">
        <Suspense fallback={<div className="h-24" />}>
          <AdoptFilters />
        </Suspense>

        <div className="flex items-baseline gap-3 my-7">
          <span className="font-bold text-lg">{pets?.length || 0}</span>
          <span className="text-text-secondary text-sm">animals match your filters</span>
        </div>

        <div className="grid grid-cols-4 gap-6">
          {pets?.length ? (
            pets.map((pet: any) => <PetCard key={pet._id} pet={pet} />)
          ) : (
            <div className="col-span-4 bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
              <div className="font-bold text-2xl mb-2">Nobody here matches that yet</div>
              <p className="text-text-secondary">
                Our list changes weekly. Widen your filters, or contact us and tell us what you are
                looking for.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
