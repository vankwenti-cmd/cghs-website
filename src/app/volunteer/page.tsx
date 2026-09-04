export const metadata = {
  title: 'Volunteer | Columbia Gorge Humane Society',
  description: 'Join our volunteer team. From dog walking to event support, there are many ways to help.',
}

export default function VolunteerPage() {
  const roles = [
    {
      title: 'Dog Walker',
      commitment: '2–4 hours/week',
      desc: 'Take dogs on neighborhood walks and play sessions. Training provided.',
    },
    {
      title: 'Cat Socializer',
      commitment: '2–3 hours/week',
      desc: 'Help shy cats adjust to human contact. Quiet room, lots of patience.',
    },
    {
      title: 'Transport Driver',
      commitment: 'Flexible',
      desc: 'Drive animals between shelters and foster homes. Your vehicle, your schedule.',
    },
    {
      title: 'Event Support',
      commitment: '4–8 hours/month',
      desc: 'Help at adoption days, clinics, and fundraisers. Join a fun team.',
    },
    {
      title: 'Laundry & Cleaning',
      commitment: '3–4 hours/week',
      desc: 'Keep the shelter comfortable and clean. Essential work, steady schedule.',
    },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Volunteer</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            One hundred and forty people keep this place running. There is room for you, whatever
            you can give.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 pb-22 grid grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-bold text-3xl -tracking-wider mb-5">Where help is needed</h2>
          {roles.map((role) => (
            <div key={role.title} className="py-5 border-b border-border-default">
              <div className="flex justify-between gap-4 items-baseline">
                <span className="font-bold text-xl">{role.title}</span>
                <span className="text-sm text-text-secondary whitespace-nowrap">{role.commitment}</span>
              </div>
              <p className="text-sm leading-relaxed text-text-secondary mt-2">{role.desc}</p>
            </div>
          ))}
          <div className="mt-7 bg-surface-sunken rounded-lg p-5.5">
            <div className="font-bold text-sm mb-2">Before your first shift</div>
            <p className="text-sm leading-relaxed text-text-secondary">
              Volunteers must be 16 or older, or 12 with a parent on the same shift. Orientation
              runs the first Saturday of every month, takes ninety minutes, and is required for
              animal-handling roles.
            </p>
          </div>
        </div>

        <div className="bg-surface-card border border-border-default rounded-lg p-8 shadow-md">
          <h2 className="font-bold text-3xl -tracking-wider mb-1.5">Volunteer application</h2>
          <p className="text-text-secondary text-sm mb-6">
            Takes about two minutes. Nothing here commits you to a schedule.
          </p>
          <form className="space-y-4.5">
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full name"
                className="px-3 py-3 rounded-md border border-border-default text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-3 py-3 rounded-md border border-border-default text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <input
                type="tel"
                placeholder="Phone"
                className="px-3 py-3 rounded-md border border-border-default text-sm"
              />
              <input
                type="text"
                placeholder="City, State"
                className="px-3 py-3 rounded-md border border-border-default text-sm"
              />
            </div>
            <textarea
              placeholder="Tell us about your interest and availability"
              className="w-full px-3 py-3 rounded-md border border-border-default text-sm min-h-24 resize-vertical"
            />
            <div className="flex items-start gap-2.5">
              <input type="checkbox" className="mt-0.5" />
              <span className="text-sm text-text-secondary">
                I understand animal-handling roles require orientation and a background check.
              </span>
            </div>
            <button
              type="submit"
              className="w-full h-12 bg-text-primary text-white rounded-md font-bold hover:bg-text-secondary transition"
            >
              Submit application
            </button>
            <p className="text-xs text-text-tertiary text-center">We never share your details.</p>
          </form>
        </div>
      </div>
    </div>
  )
}
