import Link from 'next/link'

export default function Header({ settings }: { settings: any }) {
  const navItems = [
    { label: 'Adopt', href: '/adopt' },
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Foster', href: '/foster' },
    { label: 'About', href: '/about' },
    { label: 'Events', href: '/events' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <header
      className="sticky top-0 z-40 bg-ink-950 border-b border-ink-700"
      style={{ backgroundColor: 'var(--ink-950)', borderColor: 'var(--ink-700)' }}
    >
      <div className="max-w-7xl mx-auto px-8 h-19 flex items-center gap-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <span
            className="w-9.5 h-9.5 rounded-md bg-cyan-500 flex items-center justify-center text-text-primary font-black text-lg"
            style={{ backgroundColor: 'var(--cyan-500)' }}
          >
            CG
          </span>
          <span className="flex flex-col leading-tight">
            <span className="font-black text-base text-white -tracking-tight">
              Columbia Gorge
            </span>
            <span className="text-xs tracking-widest uppercase text-cyan-300 font-semibold">
              Humane Society
            </span>
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-1 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3.25 py-2.25 rounded-sm text-sm font-semibold no-underline text-cyan-300 hover:text-cyan-400"
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/donate"
            className="ml-3 h-10 px-5 flex items-center bg-text-primary text-white rounded-md font-bold text-sm no-underline hover:bg-text-secondary"
          >
            Donate
          </Link>
        </nav>
      </div>
    </header>
  )
}
