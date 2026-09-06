import Link from 'next/link'
import FadeIn from '@/components/FadeIn'
import { GOOGLE_SKILLS_BADGES, GOOGLE_SKILLS_URL } from '@/data/credentials'
import { SECURITY_PATH } from '@/data/security'
import type { Locale } from '@/i18n/config'
import type { Dictionary } from '@/i18n/get-dictionary'

type ServicesSectionProps = { locale: Locale; dict: Dictionary }

export default function ServicesSection({ locale, dict }: ServicesSectionProps) {
  const { services, credentials } = dict

  return (
    <section
      id="services"
      className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      style={{ background: '#FFFFFF' }}
    >
      <FadeIn
        as="h2"
        delay={0}
        y={40}
        className="font-black uppercase text-center leading-none mb-16 sm:mb-20 md:mb-28"
        style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        {services.title}
      </FadeIn>

      <div className="max-w-5xl mx-auto">
        {services.items.map((service, i) => (
          <FadeIn
            key={service.number}
            delay={i * 0.1}
            y={30}
            className="flex items-start gap-5 sm:gap-8 md:gap-12 py-8 sm:py-10 md:py-12"
            style={{
              borderTop: i === 0 ? '1px solid rgba(12, 12, 12, 0.15)' : undefined,
              borderBottom: '1px solid rgba(12, 12, 12, 0.15)',
            }}
          >
            {/* min-w: "01" is narrower than "02", so every title starts at the same x */}
            <span
              className="font-black leading-none shrink-0 min-w-[1.3em]"
              style={{ color: '#0C0C0C', fontSize: 'clamp(3rem, 10vw, 140px)' }}
            >
              {service.number}
            </span>

            <div className="flex flex-col gap-3 md:gap-4 pt-1">
              <h3
                className="font-medium uppercase leading-tight"
                style={{ color: '#0C0C0C', fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
              >
                {service.name}
              </h3>
              <p
                className="font-light leading-relaxed max-w-2xl"
                style={{
                  color: '#0C0C0C',
                  opacity: 0.6,
                  fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                }}
              >
                {service.description}
              </p>
              {/* service 07 links to the anonymized security case studies */}
              {service.number === services.examples.number && (
                <Link
                  href={`/${locale}${SECURITY_PATH}`}
                  className="mt-1 py-3 -mb-3 inline-block w-fit font-medium uppercase tracking-widest text-xs sm:text-sm underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
                  style={{ color: '#0C0C0C' }}
                >
                  {services.examples.label} →
                </Link>
              )}
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Google Cloud badges: real credentials, linked to the public profile */}
      <FadeIn y={30} className="max-w-5xl mx-auto mt-16 sm:mt-20 md:mt-24">
        <h3
          className="font-medium uppercase tracking-widest text-xs sm:text-sm"
          style={{ color: '#0C0C0C', opacity: 0.6 }}
        >
          {credentials.title}
        </h3>
        <p
          className="mt-3 font-light leading-relaxed max-w-2xl"
          style={{ color: '#0C0C0C', opacity: 0.8, fontSize: 'clamp(0.95rem, 1.5vw, 1.15rem)' }}
        >
          {credentials.intro}
        </p>
        <ul className="mt-6 flex flex-wrap gap-2 sm:gap-3">
          {GOOGLE_SKILLS_BADGES.map((badge) => (
            <li
              key={badge.name}
              className="rounded-full border px-4 py-2 text-xs sm:text-sm font-medium"
              style={{ borderColor: 'rgba(12, 12, 12, 0.2)', color: '#0C0C0C' }}
            >
              {badge.name}
            </li>
          ))}
        </ul>
        <a
          href={GOOGLE_SKILLS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 py-3 -mb-3 inline-block font-medium uppercase tracking-widest text-xs sm:text-sm underline underline-offset-4 transition-opacity duration-200 hover:opacity-60"
          style={{ color: '#0C0C0C' }}
        >
          {credentials.link} →
        </a>
      </FadeIn>
    </section>
  )
}
