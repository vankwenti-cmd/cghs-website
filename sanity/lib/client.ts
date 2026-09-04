import { createClient } from 'next-sanity'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})

export async function getPet(id: string) {
  return client.fetch(`*[_type == "pet" && _id == $id][0]`, { id })
}

export async function getPets(filters?: { species?: string; age?: string; size?: string; location?: string }) {
  let query = `*[_type == "pet"`

  if (filters?.species) query += ` && species == "${filters.species}"`
  if (filters?.age) query += ` && age == "${filters.age}"`
  if (filters?.size) query += ` && size == "${filters.size}"`
  if (filters?.location) query += ` && location == "${filters.location}"`

  query += `] | order(name asc)`
  return client.fetch(query)
}

export async function getFeaturedPets() {
  return client.fetch(`*[_type == "pet" && featured == true] | order(name asc)[0...4]`)
}

export async function getLeaders() {
  return client.fetch(`*[_type == "leader"] | order(name asc)`)
}

export async function getStories() {
  return client.fetch(`*[_type == "story"] | order(when desc)[0...6]`)
}

export async function getEvents() {
  return client.fetch(`*[_type == "event"] | order(day asc)`)
}

export async function getResources() {
  return client.fetch(`*[_type == "resource"] | order(_createdAt desc)`)
}

export async function getSettings() {
  return client.fetch(`*[_type == "settings"][0]`)
}

export async function getPageContent(slug: string) {
  return client.fetch(`*[_type == "page" && slug == $slug][0]`, { slug })
}
