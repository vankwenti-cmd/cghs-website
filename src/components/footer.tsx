import Link from 'next/link'

export default function Footer({ settings }: { settings: any }) {
  const animals = [
    { label: 'Adoptable pets', href: '/adopt' },
    { label: 'Foster program', href: '/foster' },
    { label: 'Success stories', href: '/stories' },
    { label: 'Surrender or report', href: '/surrender' },
  ]
  const involved = [
    { label: 'Volunteer', href: '/volunteer' },
    { label: 'Donate', href: '/donate' },
    { label: 'Events', href: '/events' },
    { label: 'Pet care resources', href: '/resources' },
  ]
  const about = [
    { label: 'Our story', href: '/about' },
    { label: 'Leadership', href: '/leadership' },
    { label: 'Impact and financials', href: '/impact' },
    { label: 'Contact', href: '/contact' },
  ]

  return (
    <footer className="bg-cyan-500 text-[#4A3600] py-16" style={{ backgroundColor: 'var(--cyan-500)' }}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-4 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8.5 h-8.5 rounded-md bg-text-primary flex items-center justify-center text-cyan-500 font-black text-sm">
              CG
            </span>
            <span className="font-black text-sm text-text-primary">Columbia Gorge Humane Society</span>
          </div>
          <p className="text-sm leading-relaxed mb-4 max-w-xs">
            Giving hope, life, love&hellip; Rescuing and rehoming cats and dogs across the United
            States since 1989.
          </p>
          <div className="text-sm leading-relaxed">
            <div>{settings?.address || '1400 River Bend Road, The Dalles, OR 97058'}</div>
            <div>{settings?.phone || '(541) 000-0100'}</div>
            <div>
              <a href={`mailto:${settings?.email || 'hello@cghumane.org'}`} className="font-semibold text-text-primary">
                {settings?.email || 'hello@cghumane.org'}
              </a>
            </div>
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-4">Animals</h4>
          <ul className="space-y-2.5">
            {animals.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#4A3600] hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-4">Get involved</h4>
          <ul className="space-y-2.5">
            {involved.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#4A3600] hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-widest text-text-primary mb-4">About us</h4>
          <ul className="space-y-2.5">
            {about.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[#4A3600] hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-8 mt-8 pt-6 border-t border-[#141414]/20 flex justify-between gap-6 flex-wrap text-xs">
        <span>
          501(c)(3) nonprofit &middot; EIN 00-0000000 &middot; &copy; {new Date().getFullYear()} Columbia Gorge Humane Society
        </span>
      </div>
    </footer>
  )
}
