import { getFeaturedPets, getSettings } from '../../sanity/lib/client'
import PetCard from '@/components/pet-card'
import Button from '@/components/button'
import Link from 'next/link'

export default async function Home() {
  const [featured, settings] = await Promise.all([
    getFeaturedPets(),
    getSettings(),
  ])

  const stats = settings?.homeStats?.length
    ? settings.homeStats
    : [
        { value: '1,340', label: 'Animals placed (2025)' },
        { value: '98.6%', label: 'Live release rate' },
        { value: '9', label: 'States we transport from' },
        { value: '140', label: 'Active volunteers' },
      ]

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-ink-950 text-white">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center py-20">
          <div className="py-20">
            <div className="text-xs tracking-widest uppercase text-cyan-300 font-bold mb-5">
              Giving hope, life, love…
            </div>
            <h1 className="font-bold text-5xl leading-tight -tracking-wider mb-6">
              Every cat and dog deserves a door that opens.
            </h1>
            <p className="text-lg leading-relaxed text-slate-300 mb-9 max-w-2xl">
              We rescue cats and dogs from overcrowded shelters and hard situations across the
              United States, care for them as long as it takes, and match them with families ready
              to keep them for life.
            </p>
            <div className="flex gap-3.5 flex-wrap">
              <Link href="/adopt">
                <Button variant="primary">Meet our animals</Button>
              </Link>
              <Link href="/volunteer">
                <Button variant="secondary">Volunteer with us</Button>
              </Link>
            </div>
          </div>
          <div className="relative h-96 bg-slate-100 rounded-2xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Hero Image
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-ink-900 text-white border-t border-ink-700">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-4">
          {stats.map((stat: any) => (
            <div key={stat.label} className="py-8 px-7">
              <div className="font-bold text-4xl text-cyan-300 -tracking-wide">
                {stat.value}
              </div>
              <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Pets Section */}
      <section className="py-22 bg-surface-page">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between gap-6 mb-9 flex-wrap">
            <div>
              <h2 className="font-bold text-4xl -tracking-wider mb-2">
                Looking for a home right now
              </h2>
              <p className="text-text-secondary text-base">
                Here are the animals who have waited longest for a family.
              </p>
            </div>
            <Link href="/adopt" className="font-bold text-sm">
              See all adoptable pets →
            </Link>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {featured?.length ? (
              featured.map((pet: any) => <PetCard key={pet._id} pet={pet} />)
            ) : (
              <div className="col-span-4 bg-surface-card border border-dashed border-border-strong rounded-lg p-12 text-center">
                <p className="text-text-secondary">
                  No animals marked as featured yet — add some in the Studio.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Action Cards Section */}
      <section className="pb-22">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 gap-6">
          {[
            {
              title: 'Adopt',
              desc: 'Meet the animal first, then paperwork. Most adoptions finish in three days, and we stay reachable long after you go home.',
              link: '/adopt',
            },
            {
              title: 'Foster',
              desc: 'A spare room for two weeks is what lets us say yes to the next transport. We cover food, crates, and all veterinary care.',
              link: '/foster',
            },
            {
              title: 'Volunteer',
              desc: 'Dog walking, cat socializing, transport driving, laundry, events. Four hours a month is a real contribution.',
              link: '/volunteer',
            },
          ].map((action) => (
            <Link key={action.title} href={action.link}>
              <div className="bg-surface-card border border-border-default rounded-lg p-8 shadow-sm hover:shadow-md transition cursor-pointer">
                <h3 className="font-bold text-2xl mb-2.5">{action.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed mb-5">{action.desc}</p>
                <span className="font-bold text-sm text-cyan-700">Browse {action.title.toLowerCase()} →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Our Work Section */}
      <section className="bg-surface-card border-y border-border-default py-22">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-2 gap-16 items-center">
          <div className="h-96 bg-slate-100 rounded-2xl flex items-center justify-center text-gray-400">
            Photo — volunteers at the shelter
          </div>
          <div>
            <div className="text-xs tracking-widest uppercase text-cyan-700 font-bold mb-4">
              Our work
            </div>
            <h2 className="font-bold text-4xl -tracking-wider mb-4.5">
              We take the animals other shelters run out of room for.
            </h2>
            <p className="text-text-secondary text-base leading-loose mb-4">
              Most of our animals come to us on transport from shelters at capacity, from owners in
              crisis, and from the field. Some arrive needing a bath and a name. Others need surgery,
              months of medication, or a long stretch of quiet before they can trust a person again.
            </p>
            <p className="text-text-secondary text-base leading-loose mb-6">
              We do not put a clock on any of it. No animal in our care is euthanized for space or
              for time.
            </p>
            <Link href="/about" className="font-bold text-sm">
              Read our story →
            </Link>
          </div>
        </div>
      </section>

      {/* Success stories teaser */}
      <section className="py-22">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex items-end justify-between gap-6 mb-9 flex-wrap">
            <h2 className="font-bold text-4xl -tracking-wider">They found their people</h2>
            <Link href="/stories" className="font-bold text-sm">
              More success stories →
            </Link>
          </div>
          <p className="text-text-secondary text-base max-w-2xl">
            Read stories from adopters across the gorge on our success stories page.
          </p>
        </div>
      </section>

      {/* Donation Section */}
      <section className="bg-ink-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between gap-12 flex-wrap">
          <div className="max-w-2xl">
            <h2 className="font-bold text-4xl -tracking-wider mb-3">
              $45 covers a full vaccine series. $300 covers a leg repair.
            </h2>
            <p className="text-slate-300 text-lg leading-relaxed">
              We are a 501(c)(3) nonprofit. No animal is turned away for the cost of its care.
            </p>
          </div>
          <Link href="/donate">
            <Button variant="primary">Give today</Button>
          </Link>
        </div>
      </section>
    </div>
  )
}
