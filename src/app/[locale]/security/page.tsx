import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import LanguageSwitcher from '@/components/LanguageSwitcher'
import { SECURITY_PATH } from '@/data/security'
import { isLocale, locales, ogLocales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import SecuritySection from '@/sections/SecuritySection'
import ContactSection from '@/sections/ContactSection'

type Props = { params: Promise<{ locale: string }> }

const NAV_TEXT =
  'text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem]'

// Metadata merges shallowly with the layout: openGraph and twitter are set in full here.
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { security } = getDictionary(locale)

  const url = `/${locale}${SECURITY_PATH}`
  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}${SECURITY_PATH}`]))

  return {
    title: security.meta.title,
    description: security.meta.description,
    alternates: {
      canonical: url,
      languages: { ...languages, 'x-default': `/en${SECURITY_PATH}` },
    },
    openGraph: {
      title: security.meta.title,
      description: security.meta.description,
      type: 'website',
      url,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: {
      card: 'summary_large_image',
      title: security.meta.title,
      description: security.meta.description,
    },
  }
}

/** Anonymized security case studies, linked from service 07 on the home page. */
export default async function SecurityPage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return (
    <main className="overflow-x-clip" style={{ background: '#0C0C0C' }}>
      <nav className="w-full px-6 md:px-10 pt-6 md:pt-8 flex items-center justify-between gap-4">
        <Link
          href={`/${locale}#services`}
          className={`${NAV_TEXT} inline-block py-3 -my-3 transition-opacity duration-200 hover:opacity-70`}
        >
          ← {dict.security.back}
        </Link>
        <LanguageSwitcher
          current={locale}
          label={dict.language.label}
          path={SECURITY_PATH}
          className={NAV_TEXT}
        />
      </nav>

      <SecuritySection dict={dict} headingTag="h1" />
      <ContactSection locale={locale} dict={dict} langPath={SECURITY_PATH} />
    </main>
  )
}
