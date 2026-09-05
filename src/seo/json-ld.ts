import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'
import { PROJECTS } from '@/data/projects'
import { GOOGLE_SKILLS_BADGES, GOOGLE_SKILLS_URL } from '@/data/credentials'
import { WHATSAPP_URL } from '@/data/contact'
import { PERSON_NAME, SITE_URL } from './site'

const LANGUAGE_NAMES: Record<Locale, string> = {
  en: 'English',
  pt: 'Portuguese',
  es: 'Spanish',
}

/**
 * schema.org graph for the localized home page: Person (with skills, badges and
 * services), WebSite, ProfilePage and FAQPage. Consumed by Google rich results and
 * by answer engines that read structured data.
 */
export function buildJsonLd(locale: Locale, dict: Dictionary) {
  const pageUrl = `${SITE_URL}/${locale}`
  const personId = `${SITE_URL}/#person`
  const websiteId = `${SITE_URL}/#website`

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: PERSON_NAME,
    alternateName: 'Israel',
    url: pageUrl,
    image: `${pageUrl}/opengraph-image`,
    jobTitle: dict.meta.jobTitle,
    description: dict.meta.description,
    knowsAbout: dict.meta.keywords,
    knowsLanguage: Object.values(LANGUAGE_NAMES),
    address: { '@type': 'PostalAddress', addressCountry: 'PT' },
    sameAs: [GOOGLE_SKILLS_URL, ...PROJECTS.filter((p) => p.key !== 'prontogo').map((p) => p.url)],
    hasCredential: GOOGLE_SKILLS_BADGES.map((badge) => ({
      '@type': 'EducationalOccupationalCredential',
      name: badge.name,
      credentialCategory: 'badge',
      recognizedBy: { '@type': 'Organization', name: 'Google Cloud' },
      url: GOOGLE_SKILLS_URL,
    })),
    makesOffer: dict.services.items.map((service) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: service.name, description: service.description },
    })),
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      url: WHATSAPP_URL,
      availableLanguage: Object.values(LANGUAGE_NAMES),
    },
  }

  const website = {
    '@type': 'WebSite',
    '@id': websiteId,
    url: SITE_URL,
    name: dict.meta.title,
    inLanguage: locale,
    publisher: { '@id': personId },
  }

  const page = {
    '@type': 'ProfilePage',
    '@id': `${pageUrl}#page`,
    url: pageUrl,
    name: dict.meta.title,
    description: dict.meta.description,
    inLanguage: locale,
    isPartOf: { '@id': websiteId },
    mainEntity: { '@id': personId },
  }

  const faq = {
    '@type': 'FAQPage',
    '@id': `${pageUrl}#faq`,
    inLanguage: locale,
    mainEntity: dict.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
  }

  return { '@context': 'https://schema.org', '@graph': [person, website, page, faq] }
}

/** Serialize for a <script type="application/ld+json"> without letting "<" break out of the tag. */
export function serializeJsonLd(data: unknown): string {
  return JSON.stringify(data).replace(/</g, '\\u003c')
}
