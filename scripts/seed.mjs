// Seed script for Columbia Gorge Humane Society's Sanity dataset.
//
// This populates sample content so the live site isn't empty: 12 pets, 6 staff
// leaders, 9 board members, 5 events, 4 success stories, 6 pet-care resources,
// and the site settings singleton.
//
// It is safe to run more than once — every document has a fixed _id and is
// written with createOrReplace, so re-running just refreshes the same records
// instead of duplicating them.
//
// USAGE
//   1. In your Sanity project (sanity.io/manage), go to API > Tokens and
//      create a new token with "Editor" permissions.
//   2. In your terminal (never paste the token into chat), run:
//        SANITY_API_TOKEN=your-token-here node scripts/seed.mjs
//      (On Windows PowerShell: $env:SANITY_API_TOKEN="your-token-here"; node scripts/seed.mjs)
//   3. Optionally override the project/dataset with NEXT_PUBLIC_SANITY_PROJECT_ID
//      and NEXT_PUBLIC_SANITY_DATASET env vars — they default to the values
//      already used by this project.

import { createClient } from '@sanity/client'

const token = process.env.SANITY_API_TOKEN
if (!token) {
  console.error(
    '\nMissing SANITY_API_TOKEN.\n\n' +
      'Create an Editor token at https://www.sanity.io/manage -> your project -> API -> Tokens,\n' +
      'then run this script again as:\n\n' +
      '  SANITY_API_TOKEN=your-token-here node scripts/seed.mjs\n'
  )
  process.exit(1)
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '3jxfmau0'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const client = createClient({
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  token,
  useCdn: false,
})

function petFacts(p) {
  return [
    { _key: 'species', k: 'Species and breed', v: `${p.species}, ${p.breed}` },
    { _key: 'age', k: 'Age', v: p.ageText },
    { _key: 'sex', k: 'Sex', v: p.sex },
    { _key: 'size', k: 'Size and weight', v: `${p.size}, ${p.weight}` },
    { _key: 'location', k: 'Location', v: p.location },
    { _key: 'time', k: 'Time with us', v: `${p.daysInCare} days` },
    { _key: 'medical', k: 'Medical', v: 'Spayed or neutered, vaccinated, microchipped' },
  ]
}

const pets = [
  {
    id: 'juno', name: 'Juno', ref: 'CGHS-2411', species: 'Dog', breed: 'Shepherd mix',
    age: 'Adult (2-7)', ageText: '4 years', size: 'Large', sex: 'Female', weight: '58 lb',
    location: 'The Dalles, OR', daysInCare: 118, tone: 'flagged', badgeText: 'Longest resident',
    blurb: 'Juno arrived on a transport from Bakersfield after eleven months in a county shelter. She is calm, house-trained, and completely uninterested in strangers until about the fourth visit, at which point she is yours forever.',
    livesWith: 'Adults, older children, cats. Prefers to be the only dog.',
    adoptionFee: 150, featured: true,
  },
  {
    id: 'biscuit', name: 'Biscuit', ref: 'CGHS-2438', species: 'Dog', breed: 'Beagle mix',
    age: 'Senior (8+)', ageText: '9 years', size: 'Medium', sex: 'Male', weight: '31 lb',
    location: 'Hood River, OR', daysInCare: 74, tone: 'review', badgeText: 'Senior',
    blurb: 'Biscuit came in when his person entered memory care. He wants two short walks, a sunny spot, and a soft place on the couch, in that order. Our senior adoption fee is waived and his dental work is already done.',
    livesWith: 'Everyone. Children, cats, other dogs, houseguests.',
    adoptionFee: 0, featured: true,
  },
  {
    id: 'pepper', name: 'Pepper', ref: 'CGHS-2452', species: 'Cat', breed: 'Domestic shorthair',
    age: 'Adult (2-7)', ageText: '3 years', size: 'Small', sex: 'Female', weight: '9 lb',
    location: 'The Dalles, OR', daysInCare: 61, tone: 'neutral', badgeText: 'Bonded pair',
    blurb: 'Pepper and her brother Sage came from a hoarding case in eastern Oregon. She is the brave one. They must go home together, and they will cost you one adoption fee, not two.',
    livesWith: 'Her brother Sage. Quiet homes. No dogs yet.',
    adoptionFee: 75, featured: false,
  },
  {
    id: 'mango', name: 'Mango', ref: 'CGHS-2460', species: 'Cat', breed: 'Orange tabby',
    age: 'Young (under 2)', ageText: '7 months', size: 'Small', sex: 'Male', weight: '7 lb',
    location: 'Portland, OR', daysInCare: 22, tone: 'approved', badgeText: 'Ready today',
    blurb: 'Mango was found in an engine bay in June and has been making up for it ever since. He will be on your keyboard. He will be in your grocery bag. He is very good company.',
    livesWith: 'Children, dogs, other cats, chaos.',
    adoptionFee: 85, featured: false,
  },
  {
    id: 'atlas', name: 'Atlas', ref: 'CGHS-2444', species: 'Dog', breed: 'Great Pyrenees mix',
    age: 'Adult (2-7)', ageText: '5 years', size: 'Extra large', sex: 'Male', weight: '104 lb',
    location: 'Yakima, WA', daysInCare: 47, tone: 'neutral', badgeText: 'Needs a yard',
    blurb: 'Atlas guarded livestock for four years and takes the job seriously. He needs land, a fence, and a person who finds barking at 2am charming rather than alarming.',
    livesWith: 'Adults, farm animals, other large dogs.',
    adoptionFee: 150, featured: false,
  },
  {
    id: 'olive', name: 'Olive', ref: 'CGHS-2455', species: 'Dog', breed: 'Terrier mix',
    age: 'Young (under 2)', ageText: '14 months', size: 'Small', sex: 'Female', weight: '18 lb',
    location: 'Hood River, OR', daysInCare: 30, tone: 'approved', badgeText: 'Ready today',
    blurb: 'Olive knows sit, down, and the sound of a treat bag from two rooms away. She is a fast learner with a lot of opinions and would thrive with someone who wants a project.',
    livesWith: 'Active adults, children over eight, dog-savvy homes.',
    adoptionFee: 175, featured: false,
  },
  {
    id: 'sage', name: 'Sage', ref: 'CGHS-2453', species: 'Cat', breed: 'Domestic shorthair',
    age: 'Adult (2-7)', ageText: '3 years', size: 'Small', sex: 'Male', weight: '11 lb',
    location: 'The Dalles, OR', daysInCare: 61, tone: 'neutral', badgeText: 'Bonded pair',
    blurb: 'Sage hides when Pepper hides and eats when Pepper eats. Give him three weeks in a quiet room and he becomes a lap cat. Adopted together with his sister.',
    livesWith: 'His sister Pepper. Patient adults.',
    adoptionFee: 75, featured: false,
  },
  {
    id: 'winnie', name: 'Winnie', ref: 'CGHS-2431', species: 'Dog', breed: 'Labrador mix',
    age: 'Senior (8+)', ageText: '10 years', size: 'Large', sex: 'Female', weight: '66 lb',
    location: 'Portland, OR', daysInCare: 95, tone: 'flagged', badgeText: 'Medical foster',
    blurb: 'Winnie is managing early kidney disease with prescription food and quarterly bloodwork, which we cover for life. She is the gentlest dog in the building.',
    livesWith: 'Anyone. She has never met a person she disliked.',
    adoptionFee: 0, featured: true,
  },
  {
    id: 'ferdinand', name: 'Ferdinand', ref: 'CGHS-2462', species: 'Cat', breed: 'Maine Coon mix',
    age: 'Adult (2-7)', ageText: '6 years', size: 'Medium', sex: 'Male', weight: '16 lb',
    location: 'Yakima, WA', daysInCare: 18, tone: 'approved', badgeText: 'Ready today',
    blurb: 'Ferdinand is enormous, extremely soft, and entirely convinced he is a small dog. He follows staff on rounds and supervises the laundry.',
    livesWith: 'Children, cats, dogs. Not other large male cats.',
    adoptionFee: 75, featured: false,
  },
  {
    id: 'roux', name: 'Roux', ref: 'CGHS-2458', species: 'Dog', breed: 'Hound mix',
    age: 'Young (under 2)', ageText: '9 months', size: 'Medium', sex: 'Female', weight: '38 lb',
    location: 'The Dalles, OR', daysInCare: 26, tone: 'review', badgeText: 'In training',
    blurb: 'Roux is in week three of leash work with our behavior team and improving weekly. She will need an adopter willing to finish the course with us. Free sessions included.',
    livesWith: 'Adults, other dogs. No cats.',
    adoptionFee: 175, featured: false,
  },
  {
    id: 'clementine', name: 'Clementine', ref: 'CGHS-2464', species: 'Cat', breed: 'Calico',
    age: 'Young (under 2)', ageText: '5 months', size: 'Small', sex: 'Female', weight: '5 lb',
    location: 'Hood River, OR', daysInCare: 12, tone: 'approved', badgeText: 'Ready today',
    blurb: 'Bottle-raised by one of our fosters after being found under a porch at three weeks old. Fearless, loud, and available with any of her three siblings.',
    livesWith: 'Everyone, especially another kitten.',
    adoptionFee: 95, featured: false,
  },
  {
    id: 'duke', name: 'Duke', ref: 'CGHS-2427', species: 'Dog', breed: 'Pit mix',
    age: 'Adult (2-7)', ageText: '6 years', size: 'Large', sex: 'Male', weight: '72 lb',
    location: 'Portland, OR', daysInCare: 132, tone: 'flagged', badgeText: 'Longest resident',
    blurb: 'Duke has been here longer than two of our staff. He is quiet in kennel, brilliant on a leash, and has passed every assessment we have. We do not understand it either.',
    livesWith: 'Adults, teenagers. Only dog preferred.',
    adoptionFee: 150, featured: true,
  },
]

const leaders = [
  { id: 'leader-1', name: 'Renata Kessler', role: 'Executive director', email: 'director@cghumane.org', bio: 'Leads strategy, budget, and the transport partnerships that bring animals here from out of state. Fifteen years in shelter operations.' },
  { id: 'leader-2', name: 'Dr. Amir Farouk', role: 'Director of shelter medicine', email: 'clinic@cghumane.org', bio: 'Licensed veterinarian. Runs the on-site clinic, sets medical protocols, and decides what care an animal gets and when.' },
  { id: 'leader-3', name: 'Holly Vance', role: 'Director of operations', email: 'ops@cghumane.org', bio: 'Kennels, intake, staffing, and the building itself. If a door closes properly it is because of this office.' },
  { id: 'leader-4', name: 'Marcus Dey', role: 'Adoptions and behavior manager', email: 'adopt@cghumane.org', bio: 'Assesses every animal that comes through, makes the matches, and runs the training program for dogs who need it.' },
  { id: 'leader-5', name: 'Kai Nakamura', role: 'Volunteer and foster manager', email: 'volunteer@cghumane.org', bio: 'Recruits, trains, and schedules 140 volunteers and 60 foster homes. Answers your application.' },
  { id: 'leader-6', name: 'Priya Chandran', role: 'Development director', email: 'giving@cghumane.org', bio: 'Grants, major gifts, and events. Reports where every dollar went, in public, once a year.' },
]

const board = [
  { id: 'board-1', name: 'Walter Osei', role: 'Board chair' },
  { id: 'board-2', name: 'Dana Whitcomb', role: 'Vice chair' },
  { id: 'board-3', name: 'Felix Ramirez', role: 'Treasurer' },
  { id: 'board-4', name: 'Grace Lindqvist', role: 'Secretary' },
  { id: 'board-5', name: 'Sonia Petrakis', role: 'Director' },
  { id: 'board-6', name: 'Tomás Rivera', role: 'Director' },
  { id: 'board-7', name: 'Ellen Bratcher', role: 'Director' },
  { id: 'board-8', name: 'Adaeze Okonkwo', role: 'Director' },
  { id: 'board-9', name: 'Nils Halvorsen', role: 'Director' },
]

const events = [
  { id: 'event-1', title: 'Saturday adoption day', month: 'Sep', day: 19, when: 'Saturday, 10am to 4pm', where: 'Shelter, 1400 River Bend Road', desc: 'Every adoptable animal out and available, extra staff on hand, and same-day take-home for approved adopters.', cta: 'Add to calendar' },
  { id: 'event-2', title: 'Low-cost vaccine and microchip clinic', month: 'Sep', day: 27, when: 'Sunday, 9am to 1pm', where: 'The Dalles Community Center', desc: '$15 vaccines, $20 microchips, no appointment. Bring cats in carriers and dogs on leashes.', cta: 'Details' },
  { id: 'event-3', title: 'Volunteer orientation', month: 'Oct', day: 11, when: 'Saturday, 9:30am to 11am', where: 'Shelter training room', desc: 'Required for animal-handling roles. Ninety minutes, no experience needed. Register in advance.', cta: 'Register' },
  { id: 'event-4', title: 'Howl-o-ween 5K and dog walk', month: 'Oct', day: 25, when: 'Saturday, 8am start', where: 'Riverfront Trail', desc: 'Our largest fundraiser. Costumes encouraged for humans and dogs. Last year it funded 340 surgeries.', cta: 'Sign up' },
  { id: 'event-5', title: 'Holiday photos with your pet', month: 'Dec', day: 6, when: 'Saturday, 11am to 5pm', where: 'Shelter lobby', desc: '$25 per sitting, ten minutes, digital files same day. Book ahead; every slot sold out last year.', cta: 'Book a slot' },
]

const stories = [
  { id: 'story-1', name: 'Juniper', when: 'Adopted March 2025 · Hood River, OR', text: 'A six-year-old cat from a hoarding case who spent her first week under the bed. Marisol sent us a photo at three months and another at a year. Juniper now sits on the desk during every meeting.' },
  { id: 'story-2', name: 'Bo', when: 'Adopted August 2024 · Portland, OR', text: 'Came off a Texas transport with a fractured femur. Surgery, ten weeks of crate rest, and a foster who slept on the floor next to him. The Ferrands adopted him in October. He does eight-mile hikes.' },
  { id: 'story-3', name: 'Pepper and Sage', when: 'Adopted January 2026 · The Dalles, OR', text: 'Dennis came in for one cat. Our adoptions manager explained why these two should not be separated, and he went home with both. He reports that Sage has claimed the recliner permanently.' },
  { id: 'story-4', name: 'Marbles', when: 'Adopted May 2023 · Bend, OR', text: 'A senior beagle nobody looked at for four months. Adopted by a retired couple who had lost their own dog that spring. They sent a card every Christmas until he died last year, aged fifteen.' },
]

const resources = [
  { id: 'resource-1', title: 'Your first two weeks with a new dog', kind: 'Guide', desc: 'The 3-3-3 rule, what regression looks like, and why the dog you meet on day one is not the dog you will have.' },
  { id: 'resource-2', title: 'Introducing a new cat to your resident cat', kind: 'Guide', desc: 'A two-week protocol that works. Most failed cat introductions are just rushed ones.' },
  { id: 'resource-3', title: 'What to buy before adoption day', kind: 'Checklist', desc: 'A short list. You need less than the pet store will tell you, and some of it we will give you.' },
  { id: 'resource-4', title: 'You found a stray. Now what?', kind: 'Guide', desc: 'How to check for a chip, where to post, and the legal hold period in Oregon and Washington.' },
  { id: 'resource-5', title: 'Low-cost spay, neuter, and vaccines', kind: 'FAQ', desc: 'Who qualifies, what it costs, and how to book. Income-based assistance is available and simple to apply for.' },
  { id: 'resource-6', title: 'Pet food bank and crisis boarding', kind: 'Article', desc: 'Free food, monthly, no means test. Short-term boarding for people entering treatment, shelter, or hospital care.' },
]

const settings = {
  _id: 'siteSettings',
  _type: 'settings',
  title: 'Columbia Gorge Humane Society',
  description: 'Giving hope, life, love… Rescuing and rehoming cats and dogs across the United States since 1989.',
  phone: '(541) 000-0100',
  emergencyPhone: '(541) 000-0117',
  email: 'hello@cghumane.org',
  address: '1400 River Bend Road, The Dalles, OR 97058',
  hoursMonFri: 'Closed Monday. Tuesday to Saturday, 10am to 5pm.',
  hoursSatSun: 'Sunday, 12pm to 4pm.',
  clinicHours: 'Tuesday to Friday, 8am to 4pm, by appointment.',
  departments: [
    { _key: 'adopt', label: 'Adoptions', email: 'adopt@cghumane.org' },
    { _key: 'volunteer', label: 'Volunteer and foster', email: 'volunteer@cghumane.org' },
    { _key: 'intake', label: 'Surrender appointments', email: 'intake@cghumane.org' },
    { _key: 'giving', label: 'Donations and events', email: 'giving@cghumane.org' },
    { _key: 'press', label: 'Press', email: 'press@cghumane.org' },
  ],
  urgentBannerEnabled: true,
  urgentBannerText: 'Nine dogs arrived last week from an overcrowded shelter in Yakima. Foster homes needed by Friday.',
  homeStats: [
    { _key: 'placed', value: '1,340', label: 'animals placed in 2025' },
    { _key: 'release', value: '98.6%', label: 'live release rate' },
    { _key: 'states', value: '9', label: 'states we transport from' },
    { _key: 'volunteers', value: '140', label: 'active volunteers' },
  ],
  impactStats: [
    { _key: 'placed', value: '1,340', label: 'Animals placed', note: '812 dogs, 528 cats' },
    { _key: 'days', value: '24', label: 'Average days to adoption', note: 'Down from 31 in 2024' },
    { _key: 'release', value: '98.6%', label: 'Live release rate', note: 'National benchmark is 90%' },
    { _key: 'perdollar', value: '84¢', label: 'Per dollar to programs', note: 'Audited, FY2025' },
  ],
  spend: [
    { _key: 'shelter', label: 'Animal care and shelter operations', amount: '$1,910,000', pct: '58%' },
    { _key: 'clinic', label: 'Veterinary clinic', amount: '$625,000', pct: '19%' },
    { _key: 'transport', label: 'Transport and rescue partnerships', amount: '$230,000', pct: '7%' },
    { _key: 'fundraising', label: 'Fundraising', amount: '$330,000', pct: '10%' },
    { _key: 'admin', label: 'Administration', amount: '$200,000', pct: '6%' },
  ],
  intakeSources: [
    { _key: 'transport', k: 'Transport from partner shelters', v: '604' },
    { _key: 'surrender', k: 'Owner surrender', v: '341' },
    { _key: 'stray', k: 'Stray and field intake', v: '288' },
    { _key: 'foster', k: 'Born in foster care', v: '107' },
  ],
}

async function run() {
  const tx = client.transaction()

  for (const p of pets) {
    tx.createOrReplace({
      _id: `pet-${p.id}`,
      _type: 'pet',
      name: p.name,
      ref: p.ref,
      species: p.species,
      breed: p.breed,
      sex: p.sex,
      age: p.age,
      ageText: p.ageText,
      size: p.size,
      weight: p.weight,
      location: p.location,
      meta: `${p.sex} ${p.species.toLowerCase()} · ${p.ageText} · ${p.breed}`,
      blurb: p.blurb,
      daysInCare: p.daysInCare,
      waited: `${p.daysInCare} days with us`,
      tone: p.tone,
      badgeText: p.badgeText,
      facts: petFacts(p),
      livesWith: p.livesWith,
      adoptionFee: p.adoptionFee,
      featured: p.featured,
    })
  }

  for (const l of leaders) {
    tx.createOrReplace({
      _id: l.id,
      _type: 'leader',
      name: l.name,
      role: l.role,
      email: l.email,
      bio: l.bio,
      isBoard: false,
    })
  }

  for (const b of board) {
    tx.createOrReplace({
      _id: b.id,
      _type: 'leader',
      name: b.name,
      role: b.role,
      isBoard: true,
    })
  }

  for (const ev of events) {
    tx.createOrReplace({
      _id: ev.id,
      _type: 'event',
      title: ev.title,
      month: ev.month,
      day: ev.day,
      when: ev.when,
      where: ev.where,
      desc: ev.desc,
      cta: ev.cta,
    })
  }

  for (const s of stories) {
    tx.createOrReplace({
      _id: s.id,
      _type: 'story',
      name: s.name,
      when: s.when,
      text: s.text,
    })
  }

  for (const r of resources) {
    tx.createOrReplace({
      _id: r.id,
      _type: 'resource',
      title: r.title,
      kind: r.kind,
      desc: r.desc,
    })
  }

  tx.createOrReplace(settings)

  console.log(`Seeding ${pets.length} pets, ${leaders.length} leaders, ${board.length} board members, ${events.length} events, ${stories.length} stories, ${resources.length} resources, and settings...`)
  console.log(`Project: ${projectId}  Dataset: ${dataset}`)

  await tx.commit()

  console.log('\nDone! Sample content is live. Add real photos in the Studio at /studio whenever you are ready — pages fall back to labeled placeholders until then.')
}

run().catch((err) => {
  console.error('\nSeed failed:', err.message || err)
  process.exit(1)
})
