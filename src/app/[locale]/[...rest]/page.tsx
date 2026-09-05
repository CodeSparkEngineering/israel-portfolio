import { notFound } from 'next/navigation'

// Any unknown path under a locale (e.g. /en/foo) lands here and renders the
// localized not-found.tsx inside the locale layout instead of Next's default 404.
export const dynamicParams = true

export default function CatchAllPage() {
  notFound()
}
