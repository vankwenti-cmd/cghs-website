import Link from 'next/link'

export const metadata = {
  title: 'Our Story | Columbia Gorge Humane Society',
  description: 'Founded in 1989 by four neighbors with a station wagon and a spare barn.',
}

const VALUES = [
  {
    title: 'No time limits',
    desc: 'No animal in our care is euthanized for space or length of stay. Some animals stay with us many months, and will stay as long as it takes.',
  },
  {
    title: 'Honest matching',
    desc: 'We tell you what is hard about an animal before you fall in love with it. A returned adoption is worse for everyone than a slow one.',
  },
  {
    title: 'Care first',
    desc: 'Medical decisions are made by our veterinarian on medical grounds, not on cost. That is what donations are for.',
  },
  {
    title: 'Open books',
    desc: 'Financials, intake numbers, outcomes, and board minutes are published. Ask us anything and you will get a number, not a feeling.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Our story</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Founded in 1989 by four neighbors with a station wagon and a spare barn.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-8 py-16 pb-10">
        <p className="text-lg leading-loose mb-5">
          Columbia Gorge Humane Society began as a phone tree. When a dog turned up on a county
          road, someone called someone, and a bed was found. Decades later the phone tree is a
          shelter, a clinic, and a transport network that reaches nine states, but the premise has
          not changed: when an animal needs somewhere to go, we find it.
        </p>
        <p className="text-base leading-loose text-text-secondary mb-5">
          We are a limited-admission shelter, which means we take animals as space and staffing
          allow, and we keep them until they are placed. Last year that was 1,340 cats and dogs,
          with an average stay of 24 days and a live release rate of 98.6 percent.
        </p>
        <p className="text-base leading-loose text-text-secondary mb-10">
          The work is unglamorous most days. Laundry, medication rounds, cleaning, driving. It is
          also the reason a family somewhere is currently arguing about whose turn it is to walk a
          dog that was pulled off a highway a thousand miles away.
        </p>

        <div className="h-95 mb-12 bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400">
          Photo — the shelter building or staff
        </div>

        <h2 className="font-bold text-3xl -tracking-wider mb-6">What we hold to</h2>
        {VALUES.map((v) => (
          <div key={v.title} className="grid grid-cols-[200px_1fr] gap-6 py-5.5 border-t border-border-default">
            <div className="font-bold text-lg">{v.title}</div>
            <p className="text-base leading-relaxed text-text-secondary">{v.desc}</p>
          </div>
        ))}

        <div className="mt-12 flex gap-3.5 flex-wrap">
          <Link
            href="/leadership"
            className="h-12 px-5.5 inline-flex items-center bg-text-primary text-white rounded-md font-bold no-underline hover:bg-text-secondary transition"
          >
            Meet the leadership
          </Link>
          <Link
            href="/impact"
            className="h-12 px-5.5 inline-flex items-center border border-border-strong bg-surface-card text-text-primary rounded-md font-bold no-underline hover:bg-surface-sunken transition"
          >
            See the numbers
          </Link>
        </div>
      </div>
    </div>
  )
}
