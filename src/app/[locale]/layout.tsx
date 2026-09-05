import type { Metadata, Viewport } from 'next'
import type { ReactNode } from 'react'
import { Kanit } from 'next/font/google'
import { notFound } from 'next/navigation'
import { isLocale, locales, ogLocales } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { PERSON_NAME, SITE_URL } from '@/seo/site'
import '@/app/globals.css'

const kanit = Kanit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '900'],
  variable: '--font-kanit',
  display: 'swap',
})

type Params = Promise<{ locale: string }>

export const dynamicParams = false

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale } = await params
  if (!isLocale(locale)) return {}
  const { meta } = getDictionary(locale)

  const languages = Object.fromEntries(locales.map((l) => [l, `/${l}`]))

  return {
    metadataBase: new URL(SITE_URL),
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    authors: [{ name: PERSON_NAME, url: `/${locale}` }],
    creator: PERSON_NAME,
    alternates: {
      canonical: `/${locale}`,
      languages: { ...languages, 'x-default': '/en' },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: `/${locale}`,
      locale: ogLocales[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocales[l]),
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
    },
  }
}

export const viewport: Viewport = {
  themeColor: '#0C0C0C',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: ReactNode; params: Params }>) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()

  return (
    <html lang={locale} className={kanit.variable}>
      <body>{children}</body>
    </html>
  )
}
