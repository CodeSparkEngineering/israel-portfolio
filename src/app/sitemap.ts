import type { MetadataRoute } from 'next'
import { ADS_PATH } from '@/data/ads'
import { SECURITY_PATH } from '@/data/security'
import { locales } from '@/i18n/config'
import { SITE_URL } from '@/seo/site'

/** Paths under each locale: the home, the Google Ads results and the security case studies. */
const PATHS = ['', ADS_PATH, SECURITY_PATH]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()

  return PATHS.flatMap((path) => {
    const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}${path}`]))

    return locales.map((locale) => ({
      url: `${SITE_URL}/${locale}${path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: path === '' ? (locale === 'en' ? 1 : 0.9) : 0.6,
      alternates: { languages },
    }))
  })
}
