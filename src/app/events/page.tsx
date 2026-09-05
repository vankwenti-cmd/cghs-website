import Link from 'next/link'
import { getEvents } from '../../../sanity/lib/client'

export const metadata = {
  title: 'Events | Columbia Gorge Humane Society',
  description: 'Adoption days, clinics, and the fundraisers that pay for them.',
}

export default async function EventsPage() {
  const events = await getEvents()

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Events</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Adoption days, clinics, and the fundraisers that pay for them.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22">
        {events?.length ? (
          events.map((ev: any) => (
            <div
              key={ev._id}
              className="grid grid-cols-[120px_1fr_auto] gap-8 items-center bg-surface-card border border-border-default rounded-lg p-6.5 mb-4"
            >
              <div className="text-center border-r border-border-default pr-6">
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-700">{ev.month}</div>
                <div className="font-bold text-4xl leading-tight">{ev.day}</div>
              </div>
              <div>
                <div className="font-bold text-xl mb-1.5">{ev.title}</div>
                <div className="text-sm text-text-secondary mb-2">
                  {ev.when}
                  {ev.where ? ` · ${ev.where}` : ''}
                </div>
                <p className="text-sm leading-relaxed text-text-secondary max-w-2xl">{ev.desc}</p>
              </div>
              <Link
                href="/contact"
                className="h-11 px-5 inline-flex items-center bg-surface-card border border-border-strong rounded-md font-bold text-sm no-underline whitespace-nowrap hover:bg-surface-sunken transition"
              >
                {ev.cta || 'Details'}
              </Link>
            </div>
          ))
        ) : (
          <div className="bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
            <p className="text-text-secondary">No events scheduled yet — add some in the Studio.</p>
          </div>
        )}
      </div>
    </div>
  )
}
