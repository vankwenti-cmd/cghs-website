import Link from 'next/link'

export default function Footer({ settings }: { settings: any }) {
  return (
    <footer className="bg-cyan-500 text-ink-900 py-16" style={{ backgroundColor: 'var(--cyan-500)' }}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="w-8.5 h-8.5 rounded-md bg-text-primary flex items-center justify-center text-cyan-500 font-black text-sm"
              style={{ backgroundColor: 'var(--text-primary)' }}
            >
              CG
            </span>
            <span className="font-black text-sm">Columbia Gorge Humane Society</span>
          </div>
          <p className="text-sm leading-relaxed">Rescue, care, and rehome cats and dogs across the United States.</p>
        </div>

        <div>
          <h4 className="font-bold mb-4">Organization</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/about" className="text-sm hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/leadership" className="text-sm hover:underline">
                Leadership
              </Link>
            </li>
            <li>
              <Link href="/impact" className="text-sm hover:underline">
                Impact Report
              </Link>
            </li>
            <li>
              <Link href="/resources" className="text-sm hover:underline">
                Resources
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Get Involved</h4>
          <ul className="space-y-2">
            <li>
              <Link href="/adopt" className="text-sm hover:underline">
                Adopt
              </Link>
            </li>
            <li>
              <Link href="/volunteer" className="text-sm hover:underline">
                Volunteer
              </Link>
            </li>
            <li>
              <Link href="/foster" className="text-sm hover:underline">
                Foster
              </Link>
            </li>
            <li>
              <Link href="/donate" className="text-sm hover:underline">
                Donate
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-4">Contact</h4>
          <div className="space-y-2 text-sm">
            <div className="font-semibold">{settings?.phone || '(541) 000-0117'}</div>
            <div>{settings?.email || 'info@cghumane.org'}</div>
            <div className="leading-relaxed">{settings?.address || 'Hood River, OR'}</div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-12 pt-8 border-t border-ink-900/20 text-sm text-center">
        <p>© {new Date().getFullYear()} Columbia Gorge Humane Society. 501(c)(3) nonprofit.</p>
      </div>
    </footer>
  )
}
