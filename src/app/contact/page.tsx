import { getSettings } from '../../../sanity/lib/client'

export const metadata = {
  title: 'Contact | Columbia Gorge Humane Society',
  description: 'Get in touch with us. A person answers the phone during open hours.',
}

export default async function ContactPage() {
  const settings = await getSettings()

  const contactRows = [
    { k: 'Address', v: settings?.address || '1400 River Bend Road, The Dalles, OR 97058' },
    {
      k: 'Shelter hours',
      v: settings?.hoursMonFri
        ? `${settings.hoursMonFri}${settings?.hoursSatSun ? `. ${settings.hoursSatSun}` : ''}`
        : 'Tuesday to Saturday, 10am to 5pm. Sunday 12pm to 4pm. Closed Monday.',
    },
    { k: 'Clinic hours', v: settings?.clinicHours || 'Tuesday to Friday, 8am to 4pm, by appointment' },
    { k: 'Main line', v: settings?.phone || '(541) 000-0100' },
    { k: 'After-hours emergency', v: settings?.emergencyPhone || '(541) 000-0117' },
  ]

  const departments = settings?.departments?.length
    ? settings.departments
    : [
        { label: 'Adoptions', email: 'adopt@cghumane.org' },
        { label: 'Volunteer and foster', email: 'volunteer@cghumane.org' },
        { label: 'Surrender appointments', email: 'intake@cghumane.org' },
        { label: 'Donations and events', email: 'giving@cghumane.org' },
        { label: 'Press', email: 'press@cghumane.org' },
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
          {contactRows.map((item) => (
            <div
              key={item.k}
              className="grid grid-cols-[150px_1fr] gap-5 py-4 border-b border-border-default text-base"
            >
              <span className="text-text-secondary">{item.k}</span>
              <span className="font-semibold leading-relaxed">{item.v}</span>
            </div>
          ))}

          <h2 className="font-bold text-2xl -tracking-wider mt-9 mb-4">Who to ask for</h2>
          {departments.map((item: any) => (
            <div key={item.label} className="grid grid-cols-[150px_1fr] gap-5 py-2.75 text-sm">
              <span className="text-text-secondary">{item.label}</span>
              <span className="font-mono text-sm">{item.email}</span>
            </div>
          ))}
        </div>

        <div>
          <div className="h-75 mb-6 bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400">
            Map or exterior photo
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
