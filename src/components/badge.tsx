type Tone = 'approved' | 'neutral' | 'review' | 'flagged'

const styles: Record<Tone, string> = {
  approved: 'bg-cyan-50 text-cyan-800 border-cyan-200',
  neutral: 'bg-surface-sunken text-text-secondary border-border-default',
  review: 'bg-slate-300 text-ink-900 border-ink-500',
  flagged: 'bg-danger-50 text-danger-700 border-danger-500',
}

export default function Badge({ tone, children }: { tone?: string; children: React.ReactNode }) {
  if (!children) return null
  const key = (tone && styles[tone as Tone]) ? (tone as Tone) : 'neutral'
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold border ${styles[key]}`}
    >
      {children}
    </span>
  )
}
