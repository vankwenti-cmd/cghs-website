import { getLeaders, getBoardMembers } from '../../../sanity/lib/client'
import PhotoSlot from '@/components/photo-slot'

export const metadata = {
  title: 'Leadership | Columbia Gorge Humane Society',
  description: 'Meet the staff and board who run Columbia Gorge Humane Society.',
}

export default async function LeadershipPage() {
  const [leaders, board] = await Promise.all([getLeaders(), getBoardMembers()])

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Leadership</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Staff leadership and a volunteer board of directors carry the decisions here.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16">
        {leaders?.length ? (
          <div className="grid grid-cols-3 gap-8">
            {leaders.map((l: any) => (
              <div key={l._id} className="bg-surface-card border border-border-default rounded-lg p-7 shadow-sm">
                <div className="w-24 h-24 rounded-full overflow-hidden mb-4.5">
                  <PhotoSlot image={l.image} alt={l.name} placeholder="Photo" />
                </div>
                <div className="font-bold text-xl">{l.name}</div>
                <div className="text-xs font-bold uppercase tracking-widest text-cyan-700 my-1.5">{l.role}</div>
                <p className="text-sm leading-relaxed text-text-secondary mb-4">{l.bio}</p>
                {l.email && <div className="font-mono text-xs text-text-tertiary">{l.email}</div>}
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
            <p className="text-text-secondary">No leadership profiles yet — add staff in the Studio.</p>
          </div>
        )}
      </div>

      <div className="max-w-7xl mx-auto px-8 pb-22">
        <div className="bg-surface-card border border-border-default rounded-lg p-8">
          <h2 className="font-bold text-2xl mb-2">Board of directors</h2>
          <p className="text-text-secondary text-sm mb-5">
            The board meets on the second Tuesday of each month. Meetings are open to members and
            minutes are posted within ten days.
          </p>
          {board?.length ? (
            <div className="grid grid-cols-3 gap-x-8 gap-y-3">
              {board.map((b: any) => (
                <div
                  key={b._id}
                  className="flex justify-between gap-3 text-sm py-2.25 border-b border-border-default"
                >
                  <span className="font-semibold">{b.name}</span>
                  <span className="text-text-secondary">{b.role}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-text-secondary text-sm">No board members added yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}
