import type { MetadataRoute } from 'next'
import { locales } from '@/i18n/config'
import { SITE_URL } from '@/seo/site'

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  const languages = Object.fromEntries(locales.map((l) => [l, `${SITE_URL}/${l}`]))

  return locales.map((locale) => ({
    url: `${SITE_URL}/${locale}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: locale === 'en' ? 1 : 0.9,
    alternates: { languages },
  }))
}
