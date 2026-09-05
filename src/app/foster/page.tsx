import Link from 'next/link'

export const metadata = {
  title: 'Foster Program | Columbia Gorge Humane Society',
  description: 'Fostering is how a shelter of our size takes in more animals than it has kennels.',
}

const STEPS = [
  { n: '01', title: 'Apply', desc: 'A short form and a phone call. We ask about your home, your own pets, and how much time you have.' },
  { n: '02', title: 'Get matched', desc: 'We suggest animals that suit your household. Puppies and kittens are not the only option, and rarely the easiest.' },
  { n: '03', title: 'Take them home', desc: 'You leave with supplies, medical history, and a direct number. Placements run two weeks to three months.' },
  { n: '04', title: "Hand off, or don't", desc: 'When your foster is adopted you meet the family if you want to. Roughly one in five fosters adopts. We call it a foster fail. Nobody minds.' },
]

export default function FosterPage() {
  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Foster program</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Fostering is how a shelter of our size takes in more animals than it has kennels. You
            provide the room. We provide everything else.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22">
        <div className="grid grid-cols-4 gap-6 mb-14">
          {STEPS.map((s) => (
            <div key={s.n} className="bg-surface-card border border-border-default rounded-lg p-6.5">
              <div className="font-mono text-sm text-cyan-700 font-bold mb-3">{s.n}</div>
              <div className="font-bold text-lg mb-2">{s.title}</div>
              <p className="text-sm leading-relaxed text-text-secondary">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-2 gap-14 items-center">
          <div>
            <h2 className="font-bold text-3xl -tracking-wider mb-4.5">What we cover</h2>
            <ul className="list-disc pl-5 space-y-2 text-base leading-relaxed text-text-secondary mb-7">
              <li>Food, bowls, crate, bedding, litter and toys</li>
              <li>All veterinary care, including emergencies, at our clinic</li>
              <li>A staff contact reachable by phone seven days a week</li>
              <li>Photos and write-ups so your foster gets adopted faster</li>
            </ul>
            <Link
              href="/volunteer"
              className="h-13 px-6.5 inline-flex items-center bg-text-primary text-white rounded-md font-bold text-base no-underline hover:bg-text-secondary transition"
            >
              Apply to foster
            </Link>
          </div>
          <div className="h-100 bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400">
            Photo — foster puppies at home
          </div>
        </div>
      </div>
    </div>
  )
}
