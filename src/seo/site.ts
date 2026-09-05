/** Absolute site URL used for canonical, hreflang, sitemap, Open Graph and JSON-LD. */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const PERSON_NAME = 'Israel Vieira da Silva'
export const PERSON_SHORT_NAME = 'Israel Vieira'
