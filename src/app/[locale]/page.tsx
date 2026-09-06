import { notFound } from 'next/navigation'
import { isLocale } from '@/i18n/config'
import { getDictionary } from '@/i18n/get-dictionary'
import { buildJsonLd, serializeJsonLd } from '@/seo/json-ld'
import HeroSection from '@/sections/HeroSection'
import MarqueeSection from '@/sections/MarqueeSection'
import AboutSection from '@/sections/AboutSection'
import ServicesSection from '@/sections/ServicesSection'
import ProjectsSection from '@/sections/ProjectsSection'
import FaqSection from '@/sections/FaqSection'
import ContactSection from '@/sections/ContactSection'

type Props = { params: Promise<{ locale: string }> }

export default async function HomePage({ params }: Props) {
  const { locale } = await params
  if (!isLocale(locale)) notFound()
  const dict = getDictionary(locale)

  return (
    <main className="overflow-x-clip" style={{ background: '#0C0C0C' }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildJsonLd(locale, dict)) }}
      />
      <HeroSection locale={locale} dict={dict} />
      <MarqueeSection />
      <AboutSection dict={dict} />
      <ServicesSection locale={locale} dict={dict} />
      <ProjectsSection projects={dict.projects} liveLabel={dict.buttons.live} />
      <FaqSection dict={dict} />
      <ContactSection locale={locale} dict={dict} />
    </main>
  )
}
