'use client'

import { useRouter, useSearchParams, usePathname } from 'next/navigation'

const speciesOpts = ['Any species', 'Dog', 'Cat']
const ageOpts = ['Any age', 'Young (under 2)', 'Adult (2-7)', 'Senior (8+)']
const sizeOpts = ['Any size', 'Small', 'Medium', 'Large', 'Extra large']
const locOpts = ['Anywhere', 'The Dalles, OR', 'Hood River, OR', 'Portland, OR', 'Yakima, WA']

function Field({
  label,
  value,
  options,
  onChange,
}: {
  label: string
  value: string
  options: string[]
  onChange: (v: string) => void
}) {
  return (
    <label className="flex flex-col gap-1.5">
      <span className="text-xs font-semibold text-text-secondary">{label}</span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-10 px-3 rounded-md border border-border-default text-sm bg-surface-card text-text-primary"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </label>
  )
}

export default function AdoptFilters() {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  const species = searchParams.get('species') || 'Any species'
  const age = searchParams.get('age') || 'Any age'
  const size = searchParams.get('size') || 'Any size'
  const location = searchParams.get('location') || 'Anywhere'

  function update(key: string, value: string) {
    const params = new URLSearchParams(searchParams.toString())
    if (value.startsWith('Any') || value === 'Anywhere') {
      params.delete(key)
    } else {
      params.set(key, value)
    }
    const qs = params.toString()
    router.push(qs ? `${pathname}?${qs}` : pathname)
  }

  return (
    <div className="bg-surface-card border border-border-default rounded-lg p-5 grid grid-cols-5 gap-4 items-end shadow-sm">
      <Field label="Species" value={species} options={speciesOpts} onChange={(v) => update('species', v)} />
      <Field label="Age" value={age} options={ageOpts} onChange={(v) => update('age', v)} />
      <Field label="Size" value={size} options={sizeOpts} onChange={(v) => update('size', v)} />
      <Field label="Location" value={location} options={locOpts} onChange={(v) => update('location', v)} />
      <button
        type="button"
        onClick={() => router.push(pathname)}
        className="h-10 px-4 text-sm font-semibold text-text-primary hover:bg-surface-sunken rounded-md transition"
      >
        Reset
      </button>
    </div>
  )
}
