export const metadata = {
  title: 'Contact | Columbia Gorge Humane Society',
  description: 'Get in touch with us. A person answers the phone during open hours.',
}

export default function ContactPage() {
  const contactInfo = [
    { k: 'Phone', v: '(541) 000-0117' },
    { k: 'Email', v: 'info@cghumane.org' },
    { k: 'Address', v: 'Hood River, OR 97031' },
    { k: 'Mon–Fri', v: '10am–5pm' },
    { k: 'Sat–Sun', v: '12pm–4pm' },
  ]

  const contactPeople = [
    { k: 'Adoptions', v: 'adoptions@cghumane.org' },
    { k: 'Volunteering', v: 'volunteers@cghumane.org' },
    { k: 'Fostering', v: 'foster@cghumane.org' },
    { k: 'Donations', v: 'gifts@cghumane.org' },
  ]

  return (
    <div>
      {/* Header */}
      <div className="bg-ink-950 text-white py-14">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="font-bold text-5xl -tracking-wider mb-3">Contact</h1>
          <p className="text-slate-300 text-lg max-w-2xl">
            A person answers the phone during open hours. Email gets a reply within two business
            days.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-8 py-16 pb-22 grid grid-cols-2 gap-16 items-start">
        <div>
          <h2 className="font-bold text-3xl -tracking-wider mb-5">Shelter and clinic</h2>
          {contactInfo.map((item) => (
            <div
              key={item.k}
              className="grid grid-cols-37.5 gap-5 py-4 border-b border-border-default text-base"
            >
              <span className="text-text-secondary">{item.k}</span>
              <span className="font-semibold">{item.v}</span>
            </div>
          ))}

          <h2 className="font-bold text-3xl -tracking-wider mt-9 mb-4">Who to ask for</h2>
          {contactPeople.map((item) => (
            <div key={item.k} className="grid grid-cols-37.5 gap-5 py-2.75 text-sm">
              <span className="text-text-secondary">{item.k}</span>
              <span className="font-mono text-sm">{item.v}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="h-75 mb-6 bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400">
            Map or location photo
          </div>
          <div className="bg-surface-card border border-border-default rounded-lg p-7">
            <h2 className="font-bold text-2xl mb-3.5">Visiting</h2>
            <p className="text-sm leading-relaxed text-text-secondary mb-3">
              Walk in any time we are open. You do not need an appointment to meet the animals, and
              you are welcome to come three times before deciding.
            </p>
            <p className="text-sm leading-relaxed text-text-secondary">
              If you are bringing a resident dog for an introduction, call ahead so we can set
              aside the yard.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
