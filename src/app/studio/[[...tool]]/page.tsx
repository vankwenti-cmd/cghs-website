'use client'

/**
 * This route mounts the Sanity Studio authoring environment at /studio.
 * Next.js catch-all routes: https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes#catch-all-segments
 */

import { NextStudio } from 'next-sanity/studio'
import config from '../../../../sanity.config'

export const dynamic = 'force-static'

export default function StudioPage() {
  return <NextStudio config={config} />
}
