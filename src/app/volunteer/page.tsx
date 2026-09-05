'use client'

import { useState } from 'react'

const ROLES = [
  {
    title: 'Dog walking and enrichment',
    commitment: '2 hour shifts',
    desc: 'Three walks a day, every day, in all weather. The single biggest thing you can do for a dog waiting in a kennel.',
  },
  {
    title: 'Cat socializing',
    commitment: '2 hour shifts',
    desc: 'Sit in the cat rooms, brush, play, and write down who is coming out of their shell. Quiet work, enormous effect.',
  },
  {
    title: 'Transport driving',
    commitment: 'One leg, monthly',
    desc: 'Drive a relay leg between partner shelters. We reimburse fuel and provide crates, paperwork, and a co-driver.',
  },
  {
    title: 'Events and outreach',
    commitment: 'Weekends, seasonal',
    desc: 'Adoption days, county fair, holiday photos. Good fit if you like talking to strangers about dogs.',
  },
  {
    title: 'Laundry, dishes, and yard',
    commitment: 'Any time we are open',
    desc: 'Unromantic and constant. Volunteers who take these shifts are the reason animal-care staff can do medical rounds.',
  },
  {
    title: 'Photography and writing',
    commitment: 'Flexible, remote possible',
    desc: "A good photo halves an animal's stay. We need people who can shoot in a kennel and write a short honest bio.",
  },
]

const INTERESTS = [
  'Dog walking',
  'Cat socializing',
  'Transport driving',
  'Events',
  'Cleaning and laundry',
  'Photography',
  'Administration',
  'Fostering',
]

const AGE_GROUPS = ['18 and over', '16 to 17', '12 to 15 with a parent']

type Errors = Partial<Record<'name' | 'email' | 'phone' | 'city' | 'interests' | 'consent', string>>

export default function VolunteerPage() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    city: '',
    ageGroup: AGE_GROUPS[0],
    note: '',
    consent: false,
    interests: [] as string[],
  })
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [sentName, setSentName] = useState('')

  function toggleInterest(label: string) {
    setForm((f) => ({
      ...f,
      interests: f.interests.includes(label)
        ? f.interests.filter((x) => x !== label)
        : [...f.interests, label],
    }))
  }

  function submit(e: React.FormEvent) {
    e.preventDefault()
    const e2: Errors = {}
    if (!form.name.trim()) e2.name = 'Please tell us your name'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) e2.email = 'A valid email, so we can reply'
    if (form.phone.replace(/\D/g, '').length < 10) e2.phone = 'Ten digits, including area code'
    if (!form.city.trim()) e2.city = 'Which town are you in?'
    if (!form.interests.length) e2.interests = 'Pick at least one thing you would like to do'
    if (!form.consent) e2.consent = 'Please confirm you have read this'

    if (Object.keys(e2).length) {
      setErrors(e2)
      return
    }
    setErrors({})
    setSentName(form.name.trim().split(' ')[0])
    setSent(true)
  }

  function resetForm() {
    setForm({
      name: '',
      email: '',
      phone: '',
      city: '',
      ageGroup: AGE_GROUPS[0],
      note: '',
      consent: false,
      interests: [],
    })
    setErrors({})
    setSent(false)
  }

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
          {ROLES.map((role) => (
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
          {sent ? (
            <div className="py-6">
              <div className="w-11 h-11 rounded-full bg-cyan-100 text-cyan-800 flex items-center justify-center text-xl font-bold mb-4.5">
                ✓
              </div>
              <h2 className="font-bold text-3xl mb-2.5">Thank you, {sentName}</h2>
              <p className="text-text-secondary text-base leading-relaxed mb-6">
                Your application is in. Our volunteer team replies within three business days with
                orientation dates and a short background-check form.
              </p>
              <button
                type="button"
                onClick={resetForm}
                className="h-10 px-5 rounded-md font-bold text-sm border border-border-strong hover:bg-surface-sunken transition"
              >
                Submit another application
              </button>
            </div>
          ) : (
            <form onSubmit={submit}>
              <h2 className="font-bold text-3xl -tracking-wider mb-1.5">Volunteer application</h2>
              <p className="text-text-secondary text-sm mb-6">
                Takes about two minutes. Nothing here commits you to a schedule.
              </p>
              <div className="flex flex-col gap-4.5">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Full name"
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      className="w-full px-3 py-3 rounded-md border border-border-default text-sm"
                    />
                    {errors.name && <p className="text-xs text-danger-700 mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      className="w-full px-3 py-3 rounded-md border border-border-default text-sm"
                    />
                    {errors.email && <p className="text-xs text-danger-700 mt-1">{errors.email}</p>}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone"
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      className="w-full px-3 py-3 rounded-md border border-border-default text-sm"
                    />
                    {errors.phone && <p className="text-xs text-danger-700 mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="City, State"
                      value={form.city}
                      onChange={(e) => setForm((f) => ({ ...f, city: e.target.value }))}
                      className="w-full px-3 py-3 rounded-md border border-border-default text-sm"
                    />
                    {errors.city && <p className="text-xs text-danger-700 mt-1">{errors.city}</p>}
                  </div>
                </div>
                <select
                  value={form.ageGroup}
                  onChange={(e) => setForm((f) => ({ ...f, ageGroup: e.target.value }))}
                  className="px-3 py-3 rounded-md border border-border-default text-sm"
                >
                  {AGE_GROUPS.map((g) => (
                    <option key={g} value={g}>
                      {g}
                    </option>
                  ))}
                </select>
                <div>
                  <div className="text-xs font-semibold mb-2.5">What would you like to do?</div>
                  <div className="flex flex-wrap gap-2">
                    {INTERESTS.map((label) => {
                      const on = form.interests.includes(label)
                      return (
                        <button
                          key={label}
                          type="button"
                          onClick={() => toggleInterest(label)}
                          className={`px-3.5 py-2 rounded-full text-sm font-semibold border transition ${
                            on
                              ? 'bg-cyan-500 border-cyan-500 text-ink-950'
                              : 'bg-surface-card border-border-strong text-text-primary hover:bg-surface-sunken'
                          }`}
                        >
                          {label}
                        </button>
                      )
                    })}
                  </div>
                  {errors.interests && <p className="text-xs text-danger-700 mt-2">{errors.interests}</p>}
                </div>
                <div>
                  <div className="text-xs font-semibold mb-1.5">Anything we should know?</div>
                  <textarea
                    value={form.note}
                    onChange={(e) => setForm((f) => ({ ...f, note: e.target.value }))}
                    placeholder="Availability, experience with animals, questions."
                    className="w-full min-h-24 px-3 py-3 rounded-md border border-border-default text-sm resize-y"
                  />
                </div>
                <div className="flex items-start gap-2.5">
                  <input
                    type="checkbox"
                    checked={form.consent}
                    onChange={(e) => setForm((f) => ({ ...f, consent: e.target.checked }))}
                    className="mt-0.5 w-4.5 h-4.5 accent-cyan-500"
                  />
                  <span className="text-sm text-text-secondary">
                    I understand animal-handling roles require orientation and a background check.
                  </span>
                </div>
                {errors.consent && <p className="text-xs text-danger-700 -mt-2">{errors.consent}</p>}
                <div className="flex items-center gap-4 mt-1">
                  <button
                    type="submit"
                    className="h-12 px-6 bg-text-primary text-white rounded-md font-bold hover:bg-text-secondary transition"
                  >
                    Submit application
                  </button>
                  <span className="text-xs text-text-tertiary">We never share your details.</span>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
