'use client'

import { useState } from 'react'

const AMOUNTS = [25, 45, 90, 150, 300, 500]

const IMPACT_MAP: [number, string][] = [
  [0, 'Every gift is used. Twenty dollars buys a week of food for one dog.'],
  [45, '$45 covers a full vaccine series for one animal.'],
  [90, '$90 covers a spay or neuter surgery.'],
  [150, '$150 covers a transport seat from an overcrowded shelter.'],
  [300, "$300 covers an orthopedic leg repair like the one Bo needed."],
  [500, '$500 keeps a medical foster like Winnie in care for six months.'],
]

const GIVE_WAYS = [
  {
    title: 'Monthly giving',
    desc: "A recurring gift is what lets us commit to an animal like Winnie whose care has no end date. Cancel any time, no phone call needed.",
  },
  {
    title: 'Sponsor an animal',
    desc: "Cover one animal's food and medical care for the length of its stay. You get updates and, eventually, the adoption photo.",
  },
  {
    title: 'Employer matching',
    desc: 'Roughly a third of our individual gifts qualify for a match and are never claimed. Ask your HR team, then send us the form.',
  },
  {
    title: 'Legacy and stock gifts',
    desc: 'Bequests, donor-advised funds, appreciated securities, and IRA distributions. Our development office will walk you through it.',
  },
]

export default function DonatePage() {
  const [monthly, setMonthly] = useState(false)
  const [amount, setAmount] = useState(50)
  const [custom, setCustom] = useState('')

  const amt = custom ? parseInt(custom.replace(/\D/g, ''), 10) || 0 : amount

  let impactLine = IMPACT_MAP[0][1]
  IMPACT_MAP.forEach(([threshold, text]) => {
    if (amt >= threshold && threshold > 0) impactLine = text
  })

  const giveLabel = amt > 0 ? (monthly ? `Give $${amt} a month` : `Give $${amt}`) : 'Choose an amount'

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
          <div className="flex gap-2 bg-surface-sunken p-1.25 rounded-md mb-7">
            <button
              type="button"
              onClick={() => setMonthly(false)}
              className={`flex-1 h-10 rounded-sm text-sm font-bold transition ${
                !monthly ? 'bg-surface-card text-text-primary shadow-sm' : 'bg-transparent text-text-secondary'
              }`}
            >
              One time
            </button>
            <button
              type="button"
              onClick={() => setMonthly(true)}
              className={`flex-1 h-10 rounded-sm text-sm font-bold transition ${
                monthly ? 'bg-surface-card text-text-primary shadow-sm' : 'bg-transparent text-text-secondary'
              }`}
            >
              Monthly
            </button>
          </div>

          <div className="text-xs font-semibold mb-2.5">Choose an amount</div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            {AMOUNTS.map((value) => {
              const active = !custom && amount === value
              return (
                <button
                  key={value}
                  type="button"
                  onClick={() => {
                    setAmount(value)
                    setCustom('')
                  }}
                  className={`h-16 rounded-md border font-bold text-xl transition ${
                    active
                      ? 'bg-cyan-50 text-cyan-800 border-cyan-500'
                      : 'bg-surface-card text-text-primary border-border-strong hover:border-cyan-300'
                  }`}
                >
                  ${value}
                </button>
              )
            })}
          </div>

          <input
            type="text"
            inputMode="numeric"
            value={custom}
            onChange={(e) => setCustom(e.target.value)}
            placeholder="Other amount (USD)"
            className="w-full px-3 py-3 rounded-md border border-border-default text-sm mb-6"
          />

          <div className="bg-cyan-50 border border-cyan-200 rounded-md p-4.5 text-sm text-ink-800 mb-6">
            {impactLine}
          </div>

          <button
            type="button"
            className="w-full h-13 bg-text-primary text-white rounded-md font-bold text-lg hover:bg-text-secondary transition"
          >
            {giveLabel}
          </button>

          <p className="text-xs text-text-tertiary text-center mt-3.5">
            Columbia Gorge Humane Society is a 501(c)(3). EIN 00-0000000. Gifts are tax deductible.
          </p>
        </div>

        <div>
          <h2 className="font-bold text-3xl -tracking-wider mb-5">Other ways to give</h2>
          {GIVE_WAYS.map((way) => (
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
