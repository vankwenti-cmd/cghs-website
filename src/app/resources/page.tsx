import Link from 'next/link'
import { getResources } from '../../../sanity/lib/client'

export const metadata = {
  title: 'Pet Care Resources | Columbia Gorge Humane Society',
  description: 'Written by our staff and clinic team. Free to read, free to print, free to hand to a neighbor.',
}

export default async function ResourcesPage() {
  const resources = await getResources()

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Pet care resources</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Written by our staff and clinic team. Free to read, free to print, free to hand to a
            neighbor.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22">
        {resources?.length ? (
          <div className="grid grid-cols-3 gap-6">
            {resources.map((r: any) => (
              <div
                key={r._id}
                className="block bg-surface-card border border-border-default rounded-lg p-6.5 hover:border-cyan-300 hover:shadow-md transition"
              >
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 mb-3">{r.kind}</div>
                <div className="font-bold text-lg mb-2">{r.title}</div>
                <p className="text-sm leading-relaxed text-text-secondary">{r.desc}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
            <p className="text-text-secondary">No resources published yet — add some in the Studio.</p>
          </div>
        )}

        <div className="mt-10 bg-surface-card border border-border-default rounded-lg p-8 flex justify-between items-center gap-8 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="font-bold text-xl mb-2">Struggling to keep your pet?</h2>
            <p className="text-text-secondary text-sm leading-relaxed">
              Before you rehome, talk to us. We run a pet food bank, subsidized spay and neuter,
              and short-term boarding for people in crisis. Sometimes the animal does not have to
              go anywhere.
            </p>
          </div>
          <Link
            href="/surrender"
            className="h-12 px-5.5 inline-flex items-center bg-text-primary text-white rounded-md font-bold no-underline whitespace-nowrap hover:bg-text-secondary transition"
          >
            See your options
          </Link>
        </div>
      </div>
    </div>
  )
}
