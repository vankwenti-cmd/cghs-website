import Link from 'next/link'
import { notFound } from 'next/navigation'
import { getPet, getPets } from '../../../../sanity/lib/client'
import PhotoSlot from '@/components/photo-slot'
import Badge from '@/components/badge'

export default async function PetProfilePage({ params }: { params: { id: string } }) {
  const [pet, allPets] = await Promise.all([getPet(params.id), getPets()])

  if (!pet) notFound()

  const facts =
    pet.facts?.length
      ? pet.facts
      : [
          pet.species && pet.breed ? { k: 'Species and breed', v: `${pet.species}, ${pet.breed}` } : null,
          pet.ageText ? { k: 'Age', v: pet.ageText } : null,
          pet.sex ? { k: 'Sex', v: pet.sex } : null,
          pet.size && pet.weight ? { k: 'Size and weight', v: `${pet.size}, ${pet.weight}` } : null,
          pet.location ? { k: 'Location', v: pet.location } : null,
          pet.waited ? { k: 'Time with us', v: pet.waited } : null,
          { k: 'Medical', v: 'Spayed or neutered, vaccinated, microchipped' },
        ].filter(Boolean)

  const idx = allPets.findIndex((p: any) => p._id === pet._id)
  const prev = idx >= 0 ? allPets[(idx - 1 + allPets.length) % allPets.length] : null
  const next = idx >= 0 ? allPets[(idx + 1) % allPets.length] : null

  return (
    <div className="max-w-7xl mx-auto px-8 py-8 pb-22">
      <Link href="/adopt" className="text-sm font-semibold">
        ← All adoptable pets
      </Link>

      <div className="grid grid-cols-2 gap-14 mt-6 items-start">
        <div>
          <div className="h-115 mb-4 rounded-2xl overflow-hidden">
            <PhotoSlot image={pet.image} alt={pet.name} placeholder={`Photo of ${pet.name}`} />
          </div>
          <div className="grid grid-cols-3 gap-4">
            {(pet.altImages?.length ? pet.altImages : [null, null, null]).slice(0, 3).map((img: any, i: number) => (
              <div key={i} className="h-30 rounded-lg overflow-hidden">
                <PhotoSlot image={img} alt={`${pet.name} photo ${i + 1}`} placeholder="Photo" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-2">
            <h1 className="font-bold text-5xl -tracking-wider">{pet.name}</h1>
            {pet.badgeText && <Badge tone={pet.tone}>{pet.badgeText}</Badge>}
          </div>
          <div className="font-mono text-xs text-text-tertiary mb-6">{pet.ref}</div>
          <p className="text-lg leading-relaxed mb-7">{pet.blurb}</p>

          <div className="bg-surface-card border border-border-default rounded-lg overflow-hidden mb-6">
            {facts.map((f: any, i: number) => (
              <div
                key={i}
                className="flex justify-between gap-4 px-5 py-3.5 border-b border-border-default last:border-b-0 text-sm"
              >
                <span className="text-text-secondary">{f.k}</span>
                <span className="font-semibold text-right">{f.v}</span>
              </div>
            ))}
          </div>

          {pet.livesWith && (
            <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-5 mb-7">
              <div className="font-bold text-sm mb-1.5">Lives well with</div>
              <div className="text-sm text-ink-800">{pet.livesWith}</div>
            </div>
          )}

          <div className="flex gap-3 flex-wrap">
            <Link
              href="/contact"
              className="h-13 px-6.5 inline-flex items-center bg-text-primary text-white rounded-md font-bold text-base hover:bg-text-secondary transition no-underline"
            >
              Ask about {pet.name}
            </Link>
            <Link
              href="/foster"
              className="h-13 px-6.5 inline-flex items-center bg-surface-card text-text-primary border border-border-strong rounded-md font-bold text-base hover:bg-surface-sunken transition no-underline"
            >
              Foster instead
            </Link>
          </div>

          {prev && next && (
            <div className="flex gap-5 mt-8 pt-6 border-t border-border-default">
              <Link href={`/pets/${prev._id}`} className="font-semibold text-sm">
                ← {prev.name}
              </Link>
              <Link href={`/pets/${next._id}`} className="font-semibold text-sm ml-auto">
                {next.name} →
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
