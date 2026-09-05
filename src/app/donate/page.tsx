export const metadata = {
  title: 'Donate | Columbia Gorge Humane Society',
  description: 'Support animal rescue. 84¢ of every dollar goes directly to care.',
}

export default function DonatePage() {
  const amounts = [
    { value: 25, label: '$25', desc: 'Food for a week' },
    { value: 45, label: '$45', desc: 'Vaccine series' },
    { value: 100, label: '$100', desc: 'Basic vet visit' },
    { value: 300, label: '$300', desc: 'Leg repair surgery' },
    { value: 500, label: '$500', desc: 'Months of care' },
    { value: 1000, label: '$1,000', desc: 'Emergency fund' },
  ]

  const giveWays = [
    {
      title: 'Workplace Giving',
      desc: "Give through your employer's campaign. Every dollar counts.",
    },
    {
      title: 'Legacy Gift',
      desc: 'Include Columbia Gorge Humane Society in your will or trust.',
    },
    {
      title: 'Matching Gifts',
      desc: 'Your company may match your donation. Check with HR.',
    },
    {
      title: 'Vehicle Donation',
      desc: 'Donate a used car. We handle the paperwork.',
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Donate</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            We receive no government funding. Eighty-four cents of every dollar goes directly to
            animal care.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 pb-22 grid grid-cols-3 gap-16 items-start">
        <div className="col-span-2 bg-surface-card border border-border-default rounded-lg p-8 shadow-md">
          <h2 className="font-bold text-3xl -tracking-wider mb-1.5">Give today</h2>
          <p className="text-text-secondary text-sm mb-7">Choose an amount or enter your own.</p>

          <div className="grid grid-cols-3 gap-3 mb-4">
            {amounts.map((amount) => (
              <button
                key={amount.value}
                className="h-16 rounded-md border border-border-default hover:border-cyan-300 hover:bg-cyan-50 transition"
              >
                <div className="font-bold text-2xl">{amount.label}</div>
                <div className="text-xs text-text-secondary">{amount.desc}</div>
              </button>
            ))}
          </div>

          <input
            type="number"
            placeholder="Other amount (USD)"
            className="w-full px-3 py-3 rounded-md border border-border-default text-sm mb-6"
          />

          <div className="bg-cyan-50 border border-cyan-200 rounded-md p-4 text-sm text-ink-800 mb-6">
            Your donation of $45 will provide a complete vaccine series for a rescue animal.
          </div>

          <button className="w-full h-13 bg-text-primary text-white rounded-md font-bold text-lg hover:bg-text-secondary transition">
            Continue to payment
          </button>

          <p className="text-xs text-text-tertiary text-center mt-3.5">
            Columbia Gorge Humane Society is a 501(c)(3). EIN 00-0000000. Gifts are tax deductible.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl -tracking-wider mb-5">Other ways to give</h2>
          {giveWays.map((way) => (
            <div key={way.title} className="py-5 border-b border-border-default">
              <div className="font-bold text-lg mb-1.5">{way.title}</div>
              <p className="text-sm leading-relaxed text-text-secondary">{way.desc}</p>
            </div>
          ))}

          <div className="mt-7 bg-ink-950 text-white rounded-lg p-6.5">
            <div className="font-bold text-lg mb-2">Wish list</div>
            <p className="text-sm leading-relaxed text-slate-300">
              Canned pate, kitten formula, gently used towels, and Kongs of any size. Drop-offs
              accepted Tuesday through Saturday, 10am to 5pm.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
