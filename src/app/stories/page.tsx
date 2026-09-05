import { getStories } from '../../../sanity/lib/client'
import PhotoSlot from '@/components/photo-slot'

export const metadata = {
  title: 'Success Stories | Columbia Gorge Humane Society',
  description: 'Sent in by adopters. We ask for updates at six months and most people send them for years.',
}

export default async function StoriesPage() {
  const stories = await getStories()

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Success stories</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Sent in by adopters. We ask for updates at six months and most people send them for
            years.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22">
        {stories?.length ? (
          <div className="grid grid-cols-2 gap-8">
            {stories.map((s: any) => (
              <div
                key={s._id}
                className="bg-surface-card border border-border-default rounded-lg overflow-hidden grid grid-cols-[200px_1fr]"
              >
                <div className="min-h-55">
                  <PhotoSlot image={s.image} alt={s.name} placeholder="Photo" />
                </div>
                <div className="p-6.5">
                  <div className="font-bold text-xl mb-1">{s.name}</div>
                  <div className="text-xs text-text-tertiary mb-3.5">{s.when}</div>
                  <p className="text-sm leading-relaxed text-text-secondary">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
            <p className="text-text-secondary">No success stories yet — add some in the Studio.</p>
          </div>
        )}
      </div>
    </div>
  )
}
