import Link from 'next/link'
import { getSettings } from '../../../sanity/lib/client'

export const metadata = {
  title: 'Surrender or Report an Animal | Columbia Gorge Humane Society',
  description: 'No judgment on this page. Tell us what is happening and we will tell you the fastest way to help the animal.',
}

export default async function SurrenderPage() {
  const settings = await getSettings()
  const emergencyPhone = settings?.emergencyPhone || '(541) 000-0117'

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Surrender or report an animal</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            No judgment on this page. Tell us what is happening and we will tell you the fastest
            way to help the animal.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22 grid grid-cols-3 gap-6">
        <div className="bg-danger-50 border border-danger-500 rounded-lg p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-danger-700 mb-3">Emergency</div>
          <h2 className="font-bold text-xl mb-2.5">Injured, trapped, or in danger</h2>
          <p className="text-sm leading-relaxed text-ink-800 mb-4">
            Call us before you do anything else. If it is after hours, call county dispatch and ask
            for animal control.
          </p>
          <div className="font-mono text-lg font-bold">{emergencyPhone}</div>
        </div>

        <div className="bg-surface-card border border-border-default rounded-lg p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">Owner surrender</div>
          <h2 className="font-bold text-xl mb-2.5">You can no longer keep your pet</h2>
          <p className="text-sm leading-relaxed text-text-secondary mb-4">
            Surrenders are by appointment and depend on space. Bring vet records if you have them.
            There is a $50 fee, waived on request, no questions asked.
          </p>
          <Link href="/contact" className="font-bold text-sm">
            Request an appointment →
          </Link>
        </div>

        <div className="bg-surface-card border border-border-default rounded-lg p-7">
          <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">Found animal</div>
          <h2 className="font-bold text-xl mb-2.5">You found a stray</h2>
          <p className="text-sm leading-relaxed text-text-secondary mb-4">
            Most strays live within a mile of home. We scan for microchips free of charge, walk in,
            no appointment, and post to the county found board the same day.
          </p>
          <Link href="/resources" className="font-bold text-sm">
            What to do first →
          </Link>
        </div>
      </div>
    </div>
  )
}
