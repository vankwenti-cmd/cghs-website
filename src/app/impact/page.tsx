import { getSettings } from '../../../sanity/lib/client'

export const metadata = {
  title: 'Impact and Annual Report | Columbia Gorge Humane Society',
  description: 'Fiscal year financials, audited. Where the money went and where animals came from.',
}

export default async function ImpactPage() {
  const settings = await getSettings()

  const impactStats = settings?.impactStats?.length
    ? settings.impactStats
    : [
        { value: '1,340', label: 'Animals placed', note: '812 dogs, 528 cats' },
        { value: '24', label: 'Average days to adoption', note: 'Down from 31 the year before' },
        { value: '98.6%', label: 'Live release rate', note: 'National benchmark is 90%' },
        { value: '84¢', label: 'Per dollar to programs', note: 'Audited' },
      ]

  const spend = settings?.spend?.length
    ? settings.spend
    : [
        { label: 'Animal care and shelter operations', amount: '$1,910,000', pct: '58%' },
        { label: 'Veterinary clinic', amount: '$625,000', pct: '19%' },
        { label: 'Transport and rescue partnerships', amount: '$230,000', pct: '7%' },
        { label: 'Fundraising', amount: '$330,000', pct: '10%' },
        { label: 'Administration', amount: '$200,000', pct: '6%' },
      ]

  const intake = settings?.intakeSources?.length
    ? settings.intakeSources
    : [
        { k: 'Transport from partner shelters', v: '604' },
        { k: 'Owner surrender', v: '341' },
        { k: 'Stray and field intake', v: '288' },
        { k: 'Born in foster care', v: '107' },
      ]

  return (
    <div>
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Impact and annual report</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            Audited financials. Full report and IRS Form 990 available on request.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 py-16 pb-22">
        <div className="grid grid-cols-4 gap-6 mb-14">
          {impactStats.map((s: any) => (
            <div key={s.label} className="bg-surface-card border border-border-default rounded-lg p-6.5">
              <div className="font-bold text-4xl -tracking-wide text-cyan-700">{s.value}</div>
              <div className="text-sm font-semibold mt-1.5">{s.label}</div>
              <div className="text-xs text-text-secondary mt-1">{s.note}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-[1.2fr_1fr] gap-12 items-start">
          <div>
            <h2 className="font-bold text-2xl mb-5">Where the money went</h2>
            {spend.map((s: any) => (
              <div key={s.label} className="mb-4.5">
                <div className="flex justify-between text-sm mb-1.5">
                  <span className="font-semibold">{s.label}</span>
                  <span className="text-text-secondary font-mono text-xs">{s.amount}</span>
                </div>
                <div className="h-2.5 bg-surface-sunken rounded-full overflow-hidden">
                  <div className="h-full rounded-full bg-cyan-500" style={{ width: s.pct }} />
                </div>
              </div>
            ))}
          </div>
          <div className="bg-surface-card border border-border-default rounded-lg p-7">
            <h2 className="font-bold text-xl mb-3.5">Where they came from</h2>
            {intake.map((i: any) => (
              <div key={i.k} className="flex justify-between py-2.75 border-b border-border-default last:border-b-0 text-sm">
                <span className="text-text-secondary">{i.k}</span>
                <span className="font-semibold">{i.v}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
